webpackHotUpdate("styles",{

/***/ "./static/css/Landing.css":
/*!********************************!*\
  !*** ./static/css/Landing.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"landing":"Landing__landing__2mqVF","scrolldown":"Landing__scrolldown__1WtZJ","heading":"Landing__heading__1HAWC","empty":"Landing__empty__2SoGu"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1543734397293");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.95fb1bf6b247b4fba0dc.hot-update.js.map