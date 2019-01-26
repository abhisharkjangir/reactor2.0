(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    376: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(347),
        a = n.n(r),
        c = n(350),
        u = n(71),
        s = n(72),
        i = n(74),
        o = n(73),
        f = n(75),
        p = n(2),
        l = n.n(p),
        h = n(105),
        b = n(351),
        d = n.n(b),
        m = n(109),
        v = n(108),
        j = n(107),
        O = n(58),
        w = n(371),
        k = Object(w.createSelector)(
          function(e) {
            return e[O.b];
          },
          function(e) {
            return e.users;
          }
        ),
        g = (function(e) {
          function t(e) {
            var n;
            return (
              Object(u.a)(this, t),
              ((n = Object(i.a)(
                this,
                Object(o.a)(t).call(this, e)
              )).state = {}),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(s.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.users;
                  return l.a.createElement(
                    j.a,
                    { id: "homepage" },
                    e &&
                      e.map(function(e) {
                        return l.a.createElement(
                          "div",
                          { key: e.id },
                          l.a.createElement("img", {
                            src: e.avatar,
                            width: "100",
                            height: "100",
                            alt: e.first_name
                          }),
                          l.a.createElement(
                            "h3",
                            null,
                            "".concat(e.first_name, " ").concat(e.last_name)
                          )
                        );
                      })
                  );
                }
              }
            ]),
            t
          );
        })(l.a.PureComponent),
        y = (function() {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              var n;
              return a.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((n = t.saveUsers), t.users)) {
                          e.next = 4;
                          break;
                        }
                        return (
                          (e.next = 4),
                          d.a
                            .get("https://reqres.in/api/users?page=2")
                            .then(function(e) {
                              n(e.data.data);
                            })
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })();
      t.default = Object(m.a)(
        Object(h.connect)(
          function(e) {
            return { users: k(e) };
          },
          function(e) {
            return {
              saveUsers: function(t) {
                return e(
                  (function(e) {
                    return { type: O.a, payload: e };
                  })(t)
                );
              }
            };
          }
        )(Object(v.frontloadConnect)(y, { onMount: !0, onUpdate: !1 })(g))
      );
    }
  }
]);
//# sourceMappingURL=homepage.eae5db51.chunk.js.map
