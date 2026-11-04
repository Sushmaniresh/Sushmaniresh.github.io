/* Toasts, NDA modal, copy-email. No dependencies. */
(function () {
  var toast = document.getElementById('toast');
  var msg = document.getElementById('toast-msg');
  var timer;
  function showToast(text, ok) {
    if (!toast) return;
    msg.innerHTML = text;
    toast.classList.toggle('ok', !!ok);
    toast.hidden = false;
    requestAnimationFrame(function () { toast.classList.add('show'); });
    clearTimeout(timer);
    timer = setTimeout(hideToast, 4000);
  }
  function hideToast() {
    if (!toast) return;
    toast.classList.remove('show');
    setTimeout(function () { toast.hidden = true; }, 220);
  }
  toast && toast.querySelector('.toast-x').addEventListener('click', hideToast);

  // External links: announce where we're going
  document.querySelectorAll('a[href^="http"]').forEach(function (a) {
    a.addEventListener('click', function () {
      var host = a.hostname.replace(/^www\./, '');
      var path = a.pathname.length > 1 ? a.pathname.replace(/\/$/, '') : '';
      showToast('Opening <span class="mono">' + host + path + '</span> in a new tab');
    });
  });

  // mailto: copy to clipboard as well, when the browser allows it
  document.querySelectorAll('a[href^="mailto:"]').forEach(function (a) {
    a.addEventListener('click', function () {
      var email = a.getAttribute('href').replace('mailto:', '');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(function () {
          showToast('<span class="mono">' + email + '</span> copied to clipboard', true);
        });
      }
    });
  });

  // NDA modal
  var nda = document.getElementById('nda');
  var lastFocus = null;
  function openNda(from) {
    if (!nda) return;
    lastFocus = from;
    nda.hidden = false;
    var first = nda.querySelector('a,button');
    first && first.focus();
  }
  function closeNda() {
    if (!nda || nda.hidden) return;
    nda.hidden = true;
    lastFocus && lastFocus.focus();
  }
  document.querySelectorAll('[data-nda]').forEach(function (b) {
    b.addEventListener('click', function () { openNda(b); });
  });
  nda && nda.addEventListener('click', function (e) {
    if (e.target === nda || e.target.hasAttribute('data-close')) closeNda();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeNda(); hideToast(); }
  });
})();
