(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');

  function label() {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    btn.setAttribute('aria-label', 'Switch to ' + next + ' theme');
  }
  label();

  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });

  // Highlight the side-nav dot for the section currently in view
  var dots = document.querySelectorAll('.side-nav a');
  function setActive() {
    var line = window.innerHeight * 0.4, current = 'about';
    dots.forEach(function (a) {
      var s = document.getElementById(a.dataset.target);
      if (s && s.getBoundingClientRect().top <= line) current = a.dataset.target;
    });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = 'cv';
    dots.forEach(function (a) { a.classList.toggle('active', a.dataset.target === current); });
  }
  window.addEventListener('scroll', setActive, { passive: true });
  window.addEventListener('resize', setActive);
  setActive();

  document.getElementById('year').textContent = new Date().getFullYear();
})();
