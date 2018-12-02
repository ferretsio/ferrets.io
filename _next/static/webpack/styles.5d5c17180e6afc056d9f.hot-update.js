webpackHotUpdate("styles",{

/***/ "./static/css/When.css":
/*!*****************************!*\
  !*** ./static/css/When.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"When__app__2OAjQ","flipClock":"When__flipClock__2kTo-","flipUnitContainer":"When__flipUnitContainer__GXBR4","upperCard":"When__upperCard__2PHX8","lowerCard":"When__lowerCard__3aWNA","flipCard":"When__flipCard__3wJcL","unfold":"When__unfold__ARH4t","fold":"When__fold__3r-g6"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1543770373965");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.5d5c17180e6afc056d9f.hot-update.js.map