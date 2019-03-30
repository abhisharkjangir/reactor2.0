(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    108: function(e, t, n) {
      "use strict";
      var o = n(148),
        a = n(71),
        r = n(72),
        i = n(74),
        c = n(73),
        l = n(75),
        s = n(2),
        u = n.n(s),
        d = n(110),
        p = n(146),
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
    150: function(e, t, n) {
      e.exports = n(342);
    },
    340: function(e, t, n) {},
    342: function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n(2),
        a = n.n(o),
        r = n(141),
        i = n(104),
        c = n(109),
        l = n(147),
        s = n(35),
        u = n(106),
        d = n(15),
        p = n(144),
        m = n(58),
        h = n(145),
        f = Object(h.fromJS)({ home: "HomePage" }),
        g = Object(s.c)(
          Object(p.a)({}, m.b, function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : f,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              o = t.payload;
            switch (n) {
              case m.a:
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
        k = (n(167), n(375)),
        R = function() {
          return a.a.createElement(
            "header",
            { id: "header" },
            a.a.createElement("h1", null, "Reactor 2.0"),
            a.a.createElement(k.a, { to: "/" }, " Home "),
            " |",
            a.a.createElement(k.a, { to: "/about" }, " About "),
            " |",
            a.a.createElement(k.a, { to: "/not-found" }, " Not Found ")
          );
        },
        A = n(376),
        S = n(377),
        T = n(107),
        C = n.n(T),
        X = n(108),
        N = function() {
          return a.a.createElement(
            X.a,
            {
              id: "not-found",
              title: "Not Found",
              description: "This is embarrassing.",
              noCrawl: !0
            },
            a.a.createElement("p", null, "Super embarrassing.")
          );
        },
        P = C()({
          loader: function() {
            return Promise.all([n.e(4), n.e(1)]).then(n.bind(null, 379));
          },
          loading: function() {
            return null;
          }
        }),
        W = C()({
          loader: function() {
            return n.e(2).then(n.bind(null, 378));
          },
          loading: function() {
            return null;
          }
        }),
        x = function() {
          return a.a.createElement(
            A.a,
            null,
            a.a.createElement(S.a, { exact: !0, path: "/", component: P }),
            a.a.createElement(S.a, { exact: !0, path: "/about", component: W }),
            a.a.createElement(S.a, { component: N })
          );
        },
        D = (n(340),
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
                    a.a.createElement(R, null),
                    a.a.createElement(
                      "div",
                      { id: "content" },
                      a.a.createElement(x, null)
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
      var L = (function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = b ? Object(d.c)({ initialEntries: [e] }) : Object(d.a)(),
            n = [Object(u.routerMiddleware)(t)],
            o = s.d.apply(void 0, [s.a.apply(void 0, n)].concat([])),
            a = b ? {} : window.__PRELOADED_STATE__;
          return (
            b || delete window.__PRELOADED_STATE__,
            {
              store: Object(s.e)(Object(u.connectRouter)(t)(g), a, o),
              history: t
            }
          );
        })(),
        M = L.store,
        U = L.history,
        F = a.a.createElement(
          i.Provider,
          { store: M },
          a.a.createElement(
            l.a,
            { history: U },
            a.a.createElement(
              c.Frontload,
              { noServerRender: !0 },
              a.a.createElement(D, null)
            )
          )
        ),
        H = document.querySelector("#root");
      !0 === H.hasChildNodes() || Object(r.render)(F, H);
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
  [[150, 5, 3]]
]);
//# sourceMappingURL=main.7e526a66.chunk.js.map
