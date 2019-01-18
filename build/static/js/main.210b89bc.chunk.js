(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    24: function(e, t, n) {
      "use strict";
      var o = n(37),
        r = n(16),
        a = n(17),
        i = n(20),
        c = n(18),
        l = n(19),
        s = n(1),
        u = n.n(s),
        d = n(26),
        p = n(35),
        m = n.n(p),
        h = "".concat(""),
        f = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(i.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(t, e),
            Object(a.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var n = e.title,
                    o = e.description,
                    r = e.image,
                    a = e.contentType,
                    i = e.twitter,
                    c = e.noCrawl,
                    l = e.published,
                    s = e.updated,
                    u = e.category,
                    d = e.tags,
                    p = n
                      ? (n + " | My Website").substring(0, 60)
                      : "My Website",
                    m = o
                      ? o.substring(0, 155)
                      : "This is a really awesome website where we can render on the server. Supa cool.",
                    f = r ? "".concat("").concat(r) : h,
                    b = [
                      { itemprop: "name", content: p },
                      { itemprop: "description", content: m },
                      { itemprop: "image", content: f },
                      { name: "description", content: m },
                      { name: "twitter:card", content: "summary_large_image" },
                      { name: "twitter:site", content: "@cereallarceny" },
                      { name: "twitter:title", content: p },
                      { name: "twitter:description", content: m },
                      {
                        name: "twitter:creator",
                        content: i || "@cereallarceny"
                      },
                      { name: "twitter:image:src", content: f },
                      { property: "og:title", content: p },
                      { property: "og:type", content: a || "website" },
                      { property: "og:url", content: "" + t },
                      { property: "og:image", content: f },
                      { property: "og:description", content: m },
                      { property: "og:site_name", content: "My Website" },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    c &&
                      b.push({ name: "robots", content: "noindex, nofollow" }),
                    l && b.push({ name: "article:published_time", content: l }),
                    s && b.push({ name: "article:modified_time", content: s }),
                    u && b.push({ name: "article:section", content: u }),
                    d && b.push({ name: "article:tag", content: d }),
                    b
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.children,
                    n = e.id,
                    r = e.className,
                    a = Object(o.a)(e, ["children", "id", "className"]);
                  return u.a.createElement(
                    "div",
                    { id: n, className: r },
                    u.a.createElement(m.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          a.schema || "WebPage"
                        )
                      },
                      title: a.title ? a.title + " | My Website" : "My Website",
                      link: [
                        {
                          rel: "canonical",
                          href: "" + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(a, this.props.location.pathname)
                    }),
                    t
                  );
                }
              }
            ]),
            t
          );
        })(s.Component);
      t.a = Object(d.a)(f);
    },
    29: function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return a;
        });
      var o = n(36),
        r = function(e) {
          return Object(o.a)({}, e.home);
        },
        a = function(e) {
          return {
            saveUsers: function(t) {
              return e(
                (function(e) {
                  return { type: "SAVE_USERS", payload: e };
                })(t)
              );
            }
          };
        },
        i = { page: "home" };
      t.a = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = t.type,
          o = t.payload;
        switch (n) {
          case "SAVE_USERS":
            return Object.assign({}, e, { users: o });
          default:
            return e;
        }
      };
    },
    39: function(e, t, n) {
      e.exports = n(65);
    },
    63: function(e, t, n) {},
    65: function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n(1),
        r = n.n(o),
        a = n(27),
        i = n(10),
        c = n(11),
        l = n.n(c),
        s = n(25),
        u = n(12),
        d = n(7),
        p = n(34),
        m = n(5),
        h = n(29),
        f = Object(d.c)({ home: h.a }),
        b = !(
          "undefined" !== typeof window &&
          window.document &&
          window.document.createElement
        ),
        w = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function g(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function(e) {
            e.onupdatefound = function() {
              var n = e.installing;
              null != n &&
                (n.onstatechange = function() {
                  "installed" === n.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function(e) {
            console.error("Error during service worker registration:", e);
          });
      }
      var v = n(16),
        y = n(17),
        E = n(20),
        O = n(18),
        j = n(19),
        _ = n(26),
        S = function() {
          return r.a.createElement("header", { id: "header" }, "Header");
        },
        k = n(97),
        W = n(98),
        A = n(24),
        R = function() {
          return r.a.createElement(
            A.a,
            {
              id: "not-found",
              title: "Not Found",
              description: "This is embarrassing.",
              noCrawl: !0
            },
            r.a.createElement("p", null, "Super embarrassing.")
          );
        },
        T = l()({
          loader: function() {
            return Promise.all([n.e(4), n.e(1)]).then(n.bind(null, 99));
          },
          loading: function() {
            return null;
          }
        }),
        C = l()({
          loader: function() {
            return n.e(2).then(n.bind(null, 100));
          },
          loading: function() {
            return null;
          }
        }),
        X = function() {
          return r.a.createElement(
            k.a,
            null,
            r.a.createElement(W.a, { exact: !0, path: "/", component: T }),
            r.a.createElement(W.a, { exact: !0, path: "/about", component: C }),
            r.a.createElement(W.a, { component: R })
          );
        },
        M = (n(63),
        (function(e) {
          function t() {
            return (
              Object(v.a)(this, t),
              Object(E.a)(this, Object(O.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(j.a)(t, e),
            Object(y.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    "div",
                    { id: "app" },
                    r.a.createElement(S, null),
                    r.a.createElement(
                      "div",
                      { id: "content" },
                      r.a.createElement(X, null)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.Component)),
        N = Object(_.a)(
          Object(i.connect)(function(e) {
            return {};
          }, null)(M)
        );
      !(function(e) {
        if ("serviceWorker" in navigator) {
          if (
            new URL("", window.location.href).origin !== window.location.origin
          )
            return;
          window.addEventListener("load", function() {
            var t = "".concat("", "/service-worker.js");
            w
              ? ((function(e, t) {
                  fetch(e)
                    .then(function(n) {
                      var o = n.headers.get("content-type");
                      404 === n.status ||
                      (null != o && -1 === o.indexOf("javascript"))
                        ? navigator.serviceWorker.ready.then(function(e) {
                            e.unregister().then(function() {
                              window.location.reload();
                            });
                          })
                        : g(e, t);
                    })
                    .catch(function() {
                      console.log(
                        "No internet connection found. App is running in offline mode."
                      );
                    });
                })(t, e),
                navigator.serviceWorker.ready.then(function() {
                  console.log(
                    "This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA"
                  );
                }))
              : g(t, e);
          });
        }
      })();
      var P = (function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = b ? Object(m.c)({ initialEntries: [e] }) : Object(m.a)(),
            n = [p.a, Object(u.routerMiddleware)(t)],
            o = d.d.apply(void 0, [d.a.apply(void 0, n)].concat([])),
            r = b ? {} : window.__PRELOADED_STATE__;
          return (
            b || delete window.__PRELOADED_STATE__,
            {
              store: Object(d.e)(Object(u.connectRouter)(t)(f), r, o),
              history: t
            }
          );
        })(),
        U = P.store,
        x = P.history,
        D = r.a.createElement(
          i.Provider,
          { store: U },
          r.a.createElement(
            u.ConnectedRouter,
            { history: x },
            r.a.createElement(
              s.Frontload,
              { noServerRender: !0 },
              r.a.createElement(N, null)
            )
          )
        ),
        L = document.querySelector("#root");
      !0 === L.hasChildNodes()
        ? l.a.preloadReady().then(function() {
            Object(a.hydrate)(D, L);
          })
        : Object(a.render)(D, L);
    }
  },
  [[39, 5, 3]]
]);
//# sourceMappingURL=main.210b89bc.chunk.js.map
