// node_modules/@angular/core/event-dispatch-contract.min.js
(() => {
  function p(t, n, r, o, e, i, f, m) {
    return {
      eventType: t,
      event: n,
      targetElement: r,
      eic: o,
      timeStamp: e,
      eia: i,
      eirp: f,
      eiack: m
    };
  }
  function u(t) {
    let n = [],
      r = e => {
        n.push(e);
      };
    return {
      c: t,
      q: n,
      et: [],
      etc: [],
      d: r,
      h: e => {
        r(p(e.type, e, e.target, t, Date.now()));
      }
    };
  }
  function s(t, n, r) {
    for (let o = 0; o < n.length; o++) {
      let e = n[o];
      (r ? t.etc : t.et).push(e), t.c.addEventListener(e, t.h, r);
    }
  }
  function c(t, n, r, o, e = window) {
    let i = u(t);
    e._ejsas || (e._ejsas = {}), e._ejsas[n] = i, s(i, r), s(i, o, true);
  }
  window.__jsaction_bootstrap = c;
})();