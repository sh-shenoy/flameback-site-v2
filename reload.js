/* Dev auto-reload — watches the live page for a new deploy and reloads all open tabs.
   Safe to remove before go-live (delete reload.js and the <script src="reload.js"> tags). */
(function () {
  var CH = 'fb-reload';
  var POLL_MS = 6000;
  var bc = ('BroadcastChannel' in window) ? new BroadcastChannel(CH) : null;

  // When any tab detects a new deploy, every tab reloads together.
  if (bc) bc.onmessage = function (e) { if (e && e.data === 'reload') location.reload(); };

  function sig(r) { return r.headers.get('etag') || r.headers.get('last-modified') || ''; }
  function head() {
    return fetch(location.pathname + '?_=' + Date.now(), { method: 'HEAD', cache: 'no-store' }).then(sig);
  }

  var baseline = null;
  head().then(function (s) { baseline = s; }).catch(function () {});

  setInterval(function () {
    head().then(function (s) {
      if (baseline && s && s !== baseline) {
        if (bc) bc.postMessage('reload');   // tell the other tabs
        location.reload();                  // reload this one
      }
    }).catch(function () {});
  }, POLL_MS);
})();
