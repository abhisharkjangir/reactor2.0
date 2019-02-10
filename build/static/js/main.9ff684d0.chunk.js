(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    107: function(e, t, n) {
      "use strict";
      var o = n(145),
        a = n(71),
        r = n(72),
        i = n(74),
        c = n(73),
        l = n(75),
        s = n(2),
        u = n.n(s),
        d = n(109),
        p = n(144),
        m = n.n(p),
        h = "".concat(""),
        f = (function(e) {
          function t() {
            return (
              Object(a.a)(this, t),
              Object(i.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(t, e),
            Object(r.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var n = e.title,
                    o = e.description,
                    a = e.image,
                    r = e.contentType,
                    i = e.twitter,
                    c = e.noCrawl,
                    l = e.published,
                    s = e.updated,
                    u = e.category,
                    d = e.tags,
                    p = n
                      ? (n + " | Reactor 2.0").substring(0, 60)
                      : "Reactor 2.0",
                    m = o
                      ? o.substring(0, 155)
                      : "Cool app that can be rendered on server side!",
                    f = a ? "".concat("").concat(a) : h,
                    g = [
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
                      { property: "og:type", content: r || "website" },
                      { property: "og:url", content: "" + t },
                      { property: "og:image", content: f },
                      { property: "og:description", content: m },
                      { property: "og:site_name", content: "Reactor 2.0" },
                      { property: "fb:app_id", content: "XXXXXXXXX" }
                    ];
                  return (
                    c &&
                      g.push({ name: "robots", content: "noindex, nofollow" }),
                    l && g.push({ name: "article:published_time", content: l }),
                    s && g.push({ name: "article:modified_time", content: s }),
                    u && g.push({ name: "article:section", content: u }),
                    d && g.push({ name: "article:tag", content: d }),
                    g
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.children,
                    n = e.id,
                    a = e.className,
                    r = Object(o.a)(e, ["children", "id", "className"]);
                  return u.a.createElement(
                    "div",
                    { id: n, className: a },
                    u.a.createElement(m.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          r.schema || "WebPage"
                        )
                      },
                      title: r.title
                        ? r.title + " | Reactor 2.0"
                        : "Reactor 2.0",
                      link: [
                        {
                          rel: "canonical",
                          href: "" + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(r, this.props.location.pathname)
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
    147: function(e, t, n) {
      e.exports = n(339);
    },
    337: function(e, t, n) {},
    339: function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n(2),
        a = n.n(o),
        r = n(110),
        i = n(105),
        c = n(55),
        l = n.n(c),
        s = n(108),
        u = n(56),
        d = n(35),
        p = n(15),
        m = n(143),
        h = n(58),
        f = { home: "HomePage" },
        g = Object(d.c)(
          Object(m.a)({}, h.b, function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : f,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              o = t.payload;
            switch (n) {
              case h.a:
                return Object.assign({}, e, { users: o });
              default:
                return e;
            }
          })
        ),
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
      function v(e, t) {
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
      var y = n(71),
        E = n(72),
        O = n(74),
        j = n(73),
        _ = n(75),
        R = (n(164), n(372)),
        k = function() {
          return a.a.createElement(
            "header",
            { id: "header" },
            a.a.createElement("h1", null, "Reactor 2.0"),
            a.a.createElement(R.a, { to: "/" }, " Home "),
            " |",
            a.a.createElement(R.a, { to: "/about" }, " About "),
            " |",
            a.a.createElement(R.a, { to: "/not-found" }, " Not Found ")
          );
        },
        A = n(373),
        S = n(374),
        C = n(107),
        T = function() {
          return a.a.createElement(
            C.a,
            {
              id: "not-found",
              title: "Not Found",
              description: "This is embarrassing.",
              noCrawl: !0
            },
            a.a.createElement("p", null, "Super embarrassing.")
          );
        },
        X = l()({
          loader: function() {
            return Promise.all([n.e(4), n.e(1)]).then(n.bind(null, 376));
          },
          loading: function() {
            return null;
          }
        }),
        N = l()({
          loader: function() {
            return n.e(2).then(n.bind(null, 375));
          },
          loading: function() {
            return null;
          }
        }),
        P = function() {
          return a.a.createElement(
            A.a,
            null,
            a.a.createElement(S.a, { exact: !0, path: "/", component: X }),
            a.a.createElement(S.a, { exact: !0, path: "/about", component: N }),
            a.a.createElement(S.a, { component: T })
          );
        },
        W = (n(337),
        (function(e) {
          function t() {
            return (
              Object(y.a)(this, t),
              Object(O.a)(this, Object(j.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(_.a)(t, e),
            Object(E.a)(t, [
              {
                key: "render",
                value: function() {
                  return a.a.createElement(
                    "div",
                    { id: "app" },
                    a.a.createElement(k, null),
                    a.a.createElement(
                      "div",
                      { id: "content" },
                      a.a.createElement(P, null)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.Component));
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
                        : v(e, t);
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
              : v(t, e);
          });
        }
      })();
      var x = (function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = b ? Object(p.c)({ initialEntries: [e] }) : Object(p.a)(),
            n = [Object(u.routerMiddleware)(t)],
            o = d.d.apply(void 0, [d.a.apply(void 0, n)].concat([])),
            a = b ? {} : window.__PRELOADED_STATE__;
          return (
            b || delete window.__PRELOADED_STATE__,
            {
              store: Object(d.e)(Object(u.connectRouter)(t)(g), a, o),
              history: t
            }
          );
        })(),
        D = x.store,
        L = x.history,
        M = a.a.createElement(
          i.Provider,
          { store: D },
          a.a.createElement(
            u.ConnectedRouter,
            { history: L },
            a.a.createElement(
              s.Frontload,
              { noServerRender: !0 },
              a.a.createElement(W, null)
            )
          )
        ),
        U = document.querySelector("#root");
      !0 === U.hasChildNodes()
        ? l.a.preloadReady().then(function() {
            Object(r.render)(M, U);
          })
        : Object(r.render)(M, U);
    },
    58: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return o;
      }),
        n.d(t, "a", function() {
          return a;
        });
      var o = "home",
        a = "HOME_SAVE_USERS";
    }
  },
  [[147, 5, 3]]
]);
//# sourceMappingURL=main.9ff684d0.chunk.js.map
