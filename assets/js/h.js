!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/"),
    r((r.s = 0));
})({
  0: function (t, e, r) {
    r(1), r(13), (t.exports = r(18));
  },
  1: function (t, e, r) {
    "use strict";
    function n(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function i(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
    }
    r.r(e);
    var s,
      o,
      a,
      u,
      l,
      h,
      c,
      f,
      p,
      d,
      _,
      g,
      m = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      v = { duration: 0.5, overwrite: !1, delay: 0 },
      y = 1e8,
      x = 2 * Math.PI,
      b = x / 4,
      w = 0,
      T = Math.sqrt,
      k = Math.cos,
      O = Math.sin,
      M = function (t) {
        return "string" == typeof t;
      },
      C = function (t) {
        return "function" == typeof t;
      },
      S = function (t) {
        return "number" == typeof t;
      },
      P = function (t) {
        return void 0 === t;
      },
      A = function (t) {
        return "object" == typeof t;
      },
      D = function (t) {
        return !1 !== t;
      },
      E = function () {
        return "undefined" != typeof window;
      },
      R = function (t) {
        return C(t) || M(t);
      },
      L =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      z = Array.isArray,
      B = /(?:-?\.?\d|\.)+/gi,
      F = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
      I = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      Y = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
      q = /[+-]=-?[\.\d]+/,
      N = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      X = {},
      U = {},
      W = function (t) {
        return (U = gt(t, X)) && $e;
      },
      j = function (t, e) {
        return console.warn(
          "Invalid property",
          t,
          "set to",
          e,
          "Missing plugin? gsap.registerPlugin()"
        );
      },
      V = function (t, e) {
        return !e && console.warn(t);
      },
      H = function (t, e) {
        return (t && (X[t] = e) && U && (U[t] = e)) || X;
      },
      G = function () {
        return 0;
      },
      K = {},
      Q = [],
      Z = {},
      $ = {},
      J = {},
      tt = 30,
      et = [],
      rt = "",
      nt = function (t) {
        var e,
          r,
          n = t[0];
        if ((A(n) || C(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
          for (r = et.length; r-- && !et[r].targetTest(n); );
          e = et[r];
        }
        for (r = t.length; r--; )
          (t[r] && (t[r]._gsap || (t[r]._gsap = new Te(t[r], e)))) ||
            t.splice(r, 1);
        return t;
      },
      it = function (t) {
        return t._gsap || nt(Ut(t))[0]._gsap;
      },
      st = function (t, e, r) {
        return (r = t[e]) && C(r)
          ? t[e]()
          : (P(r) && t.getAttribute && t.getAttribute(e)) || r;
      },
      ot = function (t, e) {
        return (t = t.split(",")).forEach(e) || t;
      },
      at = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      ut = function (t, e) {
        for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
        return n < r;
      },
      lt = function (t, e, r) {
        var n,
          i = S(t[1]),
          s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
          o = t[s];
        if ((i && (o.duration = t[1]), (o.parent = r), e)) {
          for (n = o; r && !("immediateRender" in n); )
            (n = r.vars.defaults || {}), (r = D(r.vars.inherit) && r.parent);
          (o.immediateRender = D(n.immediateRender)),
            e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
        }
        return o;
      },
      ht = function () {
        var t,
          e,
          r = Q.length,
          n = Q.slice(0);
        for (Z = {}, Q.length = 0, t = 0; t < r; t++)
          (e = n[t]) &&
            e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      },
      ct = function (t, e, r, n) {
        Q.length && ht(), t.render(e, r, n), Q.length && ht();
      },
      ft = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(N).length < 2
          ? e
          : M(t)
          ? t.trim()
          : t;
      },
      pt = function (t) {
        return t;
      },
      dt = function (t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
      },
      _t = function (t, e) {
        for (var r in e)
          r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
      },
      gt = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t;
      },
      mt = function t(e, r) {
        for (var n in r) e[n] = A(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n];
        return e;
      },
      vt = function (t, e) {
        var r,
          n = {};
        for (r in t) r in e || (n[r] = t[r]);
        return n;
      },
      yt = function (t) {
        var e = t.parent || s,
          r = t.keyframes ? _t : dt;
        if (D(t.inherit))
          for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
        return t;
      },
      xt = function (t, e, r, n) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var i = e._prev,
          s = e._next;
        i ? (i._next = s) : t[r] === e && (t[r] = s),
          s ? (s._prev = i) : t[n] === e && (t[n] = i),
          (e._next = e._prev = e.parent = null);
      },
      bt = function (t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
          (t._act = 0);
      },
      wt = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
          for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
        return t;
      },
      Tt = function (t) {
        for (var e = t.parent; e && e.parent; )
          (e._dirty = 1), e.totalDuration(), (e = e.parent);
        return t;
      },
      kt = function (t) {
        return t._repeat ? Ot(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
      },
      Ot = function (t, e) {
        return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
      },
      Mt = function (t, e) {
        return (
          (t - e._start) * e._ts +
          (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        );
      },
      Ct = function (t) {
        return (t._end = at(
          t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
        ));
      },
      St = function (t, e) {
        var r = t._dp;
        return (
          r &&
            r.smoothChildTiming &&
            t._ts &&
            ((t._start = at(
              t._dp._time -
                (t._ts > 0
                  ? e / t._ts
                  : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
            )),
            Ct(t),
            r._dirty || wt(r, t)),
          t
        );
      },
      Pt = function (t, e) {
        var r;
        if (
          ((e._time || (e._initted && !e._dur)) &&
            ((r = Mt(t.rawTime(), e)),
            (!e._dur || It(0, e.totalDuration(), r) - e._tTime > 1e-8) &&
              e.render(r, !0)),
          wt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
          if (t._dur < t.duration())
            for (r = t; r._dp; )
              r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
          t._zTime = -1e-8;
        }
      },
      At = function (t, e, r, n) {
        return (
          e.parent && bt(e),
          (e._start = at(r + e._delay)),
          (e._end = at(
            e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
          )),
          (function (t, e, r, n, i) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var s,
              o = t[n];
            if (i) for (s = e[i]; o && o[i] > s; ) o = o._prev;
            o
              ? ((e._next = o._next), (o._next = e))
              : ((e._next = t[r]), (t[r] = e)),
              e._next ? (e._next._prev = e) : (t[n] = e),
              (e._prev = o),
              (e.parent = e._dp = t);
          })(t, e, "_first", "_last", t._sort ? "_start" : 0),
          (t._recent = e),
          n || Pt(t, e),
          t
        );
      },
      Dt = function (t, e) {
        return (
          (X.ScrollTrigger || j("scrollTrigger", e)) &&
          X.ScrollTrigger.create(e, t)
        );
      },
      Et = function (t, e, r, n) {
        return (
          Ae(t, e),
          t._initted
            ? !r &&
              t._pt &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              h !== he.frame
              ? (Q.push(t), (t._lazy = [e, n]), 1)
              : void 0
            : 1
        );
      },
      Rt = function (t, e, r, n) {
        var i = t._repeat,
          s = at(e) || 0,
          o = t._tTime / t._tDur;
        return (
          o && !n && (t._time *= s / t._dur),
          (t._dur = s),
          (t._tDur = i ? (i < 0 ? 1e10 : at(s * (i + 1) + t._rDelay * i)) : s),
          o && !n ? St(t, (t._tTime = t._tDur * o)) : t.parent && Ct(t),
          r || wt(t.parent, t),
          t
        );
      },
      Lt = function (t) {
        return t instanceof Oe ? wt(t) : Rt(t, t._dur);
      },
      zt = { _start: 0, endTime: G },
      Bt = function t(e, r) {
        var n,
          i,
          s = e.labels,
          o = e._recent || zt,
          a = e.duration() >= y ? o.endTime(!1) : e._dur;
        return M(r) && (isNaN(r) || r in s)
          ? "<" === (n = r.charAt(0)) || ">" === n
            ? ("<" === n ? o._start : o.endTime(o._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0)
            : (n = r.indexOf("=")) < 0
            ? (r in s || (s[r] = a), s[r])
            : ((i = +(r.charAt(n - 1) + r.substr(n + 1))),
              n > 1 ? t(e, r.substr(0, n - 1)) + i : a + i)
          : null == r
          ? a
          : +r;
      },
      Ft = function (t, e) {
        return t || 0 === t ? e(t) : e;
      },
      It = function (t, e, r) {
        return r < t ? t : r > e ? e : r;
      },
      Yt = function (t) {
        return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t)
          ? t
          : "";
      },
      qt = [].slice,
      Nt = function (t, e) {
        return (
          t &&
          A(t) &&
          "length" in t &&
          ((!e && !t.length) || (t.length - 1 in t && A(t[0]))) &&
          !t.nodeType &&
          t !== o
        );
      },
      Xt = function (t, e, r) {
        return (
          void 0 === r && (r = []),
          t.forEach(function (t) {
            var n;
            return (M(t) && !e) || Nt(t, 1)
              ? (n = r).push.apply(n, Ut(t))
              : r.push(t);
          }) || r
        );
      },
      Ut = function (t, e) {
        return !M(t) || e || (!a && ce())
          ? z(t)
            ? Xt(t, e)
            : Nt(t)
            ? qt.call(t, 0)
            : t
            ? [t]
            : []
          : qt.call(u.querySelectorAll(t), 0);
      },
      Wt = function (t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      },
      jt = function (t) {
        if (C(t)) return t;
        var e = A(t) ? t : { each: t },
          r = ve(e.ease),
          n = e.from || 0,
          i = parseFloat(e.base) || 0,
          s = {},
          o = n > 0 && n < 1,
          a = isNaN(n) || o,
          u = e.axis,
          l = n,
          h = n;
        return (
          M(n)
            ? (l = h = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
            : !o && a && ((l = n[0]), (h = n[1])),
          function (t, o, c) {
            var f,
              p,
              d,
              _,
              g,
              m,
              v,
              x,
              b,
              w = (c || e).length,
              k = s[w];
            if (!k) {
              if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, y])[1])) {
                for (
                  v = -y;
                  v < (v = c[b++].getBoundingClientRect().left) && b < w;

                );
                b--;
              }
              for (
                k = s[w] = [],
                  f = a ? Math.min(b, w) * l - 0.5 : n % b,
                  p = a ? (w * h) / b - 0.5 : (n / b) | 0,
                  v = 0,
                  x = y,
                  m = 0;
                m < w;
                m++
              )
                (d = (m % b) - f),
                  (_ = p - ((m / b) | 0)),
                  (k[m] = g =
                    u ? Math.abs("y" === u ? _ : d) : T(d * d + _ * _)),
                  g > v && (v = g),
                  g < x && (x = g);
              "random" === n && Wt(k),
                (k.max = v - x),
                (k.min = x),
                (k.v = w =
                  (parseFloat(e.amount) ||
                    parseFloat(e.each) *
                      (b > w
                        ? w - 1
                        : u
                        ? "y" === u
                          ? w / b
                          : b
                        : Math.max(b, w / b)) ||
                    0) * ("edges" === n ? -1 : 1)),
                (k.b = w < 0 ? i - w : i),
                (k.u = Yt(e.amount || e.each) || 0),
                (r = r && w < 0 ? ge(r) : r);
            }
            return (
              (w = (k[t] - k.min) / k.max || 0),
              at(k.b + (r ? r(w) : w) * k.v) + k.u
            );
          }
        );
      },
      Vt = function (t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function (r) {
          return (
            Math.floor(Math.round(parseFloat(r) / t) * t * e) / e +
            (S(r) ? 0 : Yt(r))
          );
        };
      },
      Ht = function (t, e) {
        var r,
          n,
          i = z(t);
        return (
          !i &&
            A(t) &&
            ((r = i = t.radius || y),
            t.values
              ? ((t = Ut(t.values)), (n = !S(t[0])) && (r *= r))
              : (t = Vt(t.increment))),
          Ft(
            e,
            i
              ? C(t)
                ? function (e) {
                    return (n = t(e)), Math.abs(n - e) <= r ? n : e;
                  }
                : function (e) {
                    for (
                      var i,
                        s,
                        o = parseFloat(n ? e.x : e),
                        a = parseFloat(n ? e.y : 0),
                        u = y,
                        l = 0,
                        h = t.length;
                      h--;

                    )
                      (i = n
                        ? (i = t[h].x - o) * i + (s = t[h].y - a) * s
                        : Math.abs(t[h] - o)) < u && ((u = i), (l = h));
                    return (
                      (l = !r || u <= r ? t[l] : e),
                      n || l === e || S(e) ? l : l + Yt(e)
                    );
                  }
              : Vt(t)
          )
        );
      },
      Gt = function (t, e, r, n) {
        return Ft(z(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
          return z(t)
            ? t[~~(Math.random() * t.length)]
            : (r = r || 1e-5) &&
                (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                Math.floor(
                  Math.round((t + Math.random() * (e - t)) / r) * r * n
                ) / n;
        });
      },
      Kt = function (t, e, r) {
        return Ft(r, function (r) {
          return t[~~e(r)];
        });
      },
      Qt = function (t) {
        for (var e, r, n, i, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
          (n = t.indexOf(")", e)),
            (i = "[" === t.charAt(e + 7)),
            (r = t.substr(e + 7, n - e - 7).match(i ? N : B)),
            (o +=
              t.substr(s, e - s) +
              Gt(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
            (s = n + 1);
        return o + t.substr(s, t.length - s);
      },
      Zt = function (t, e, r, n, i) {
        var s = e - t,
          o = n - r;
        return Ft(i, function (e) {
          return r + (((e - t) / s) * o || 0);
        });
      },
      $t = function (t, e, r) {
        var n,
          i,
          s,
          o = t.labels,
          a = y;
        for (n in o)
          (i = o[n] - e) < 0 == !!r &&
            i &&
            a > (i = Math.abs(i)) &&
            ((s = n), (a = i));
        return s;
      },
      Jt = function (t, e, r) {
        var n,
          i,
          s = t.vars,
          o = s[e];
        if (o)
          return (
            (n = s[e + "Params"]),
            (i = s.callbackScope || t),
            r && Q.length && ht(),
            n ? o.apply(i, n) : o.call(i)
          );
      },
      te = function (t) {
        return bt(t), t.progress() < 1 && Jt(t, "onInterrupt"), t;
      },
      ee = function (t) {
        var e = (t = (!t.name && t.default) || t).name,
          r = C(t),
          n =
            e && !r && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          i = {
            init: G,
            render: Ue,
            add: Se,
            kill: je,
            modifier: We,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: Ye,
            aliases: {},
            register: 0,
          };
        if ((ce(), t !== n)) {
          if ($[e]) return;
          dt(n, dt(vt(t, i), s)),
            gt(n.prototype, gt(i, vt(t, s))),
            ($[(n.prop = e)] = n),
            t.targetTest && (et.push(n), (K[e] = 1)),
            (e =
              ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin");
        }
        H(e, n), t.register && t.register($e, n, Ge);
      },
      re = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0],
      },
      ne = function (t, e, r) {
        return (
          (255 *
            (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
              ? e + (r - e) * t * 6
              : t < 0.5
              ? r
              : 3 * t < 2
              ? e + (r - e) * (2 / 3 - t) * 6
              : e) +
            0.5) |
          0
        );
      },
      ie = function (t, e, r) {
        var n,
          i,
          s,
          o,
          a,
          u,
          l,
          h,
          c,
          f,
          p = t ? (S(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : re.black;
        if (!p) {
          if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), re[t]))
            p = re[t];
          else if ("#" === t.charAt(0))
            4 === t.length &&
              ((n = t.charAt(1)),
              (i = t.charAt(2)),
              (s = t.charAt(3)),
              (t = "#" + n + n + i + i + s + s)),
              (p = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & 255,
                255 & t,
              ]);
          else if ("hsl" === t.substr(0, 3))
            if (((p = f = t.match(B)), e)) {
              if (~t.indexOf("="))
                return (p = t.match(F)), r && p.length < 4 && (p[3] = 1), p;
            } else
              (o = (+p[0] % 360) / 360),
                (a = +p[1] / 100),
                (n =
                  2 * (u = +p[2] / 100) -
                  (i = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
                p.length > 3 && (p[3] *= 1),
                (p[0] = ne(o + 1 / 3, n, i)),
                (p[1] = ne(o, n, i)),
                (p[2] = ne(o - 1 / 3, n, i));
          else p = t.match(B) || re.transparent;
          p = p.map(Number);
        }
        return (
          e &&
            !f &&
            ((n = p[0] / 255),
            (i = p[1] / 255),
            (s = p[2] / 255),
            (u = ((l = Math.max(n, i, s)) + (h = Math.min(n, i, s))) / 2),
            l === h
              ? (o = a = 0)
              : ((c = l - h),
                (a = u > 0.5 ? c / (2 - l - h) : c / (l + h)),
                (o =
                  l === n
                    ? (i - s) / c + (i < s ? 6 : 0)
                    : l === i
                    ? (s - n) / c + 2
                    : (n - i) / c + 4),
                (o *= 60)),
            (p[0] = ~~(o + 0.5)),
            (p[1] = ~~(100 * a + 0.5)),
            (p[2] = ~~(100 * u + 0.5))),
          r && p.length < 4 && (p[3] = 1),
          p
        );
      },
      se = function (t) {
        var e = [],
          r = [],
          n = -1;
        return (
          t.split(ae).forEach(function (t) {
            var i = t.match(I) || [];
            e.push.apply(e, i), r.push((n += i.length + 1));
          }),
          (e.c = r),
          e
        );
      },
      oe = function (t, e, r) {
        var n,
          i,
          s,
          o,
          a = "",
          u = (t + a).match(ae),
          l = e ? "hsla(" : "rgba(",
          h = 0;
        if (!u) return t;
        if (
          ((u = u.map(function (t) {
            return (
              (t = ie(t, e, 1)) &&
              l +
                (e
                  ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                  : t.join(",")) +
                ")"
            );
          })),
          r && ((s = se(t)), (n = r.c).join(a) !== s.c.join(a)))
        )
          for (o = (i = t.replace(ae, "1").split(I)).length - 1; h < o; h++)
            a +=
              i[h] +
              (~n.indexOf(h)
                ? u.shift() || l + "0,0,0,0)"
                : (s.length ? s : u.length ? u : r).shift());
        if (!i)
          for (o = (i = t.split(ae)).length - 1; h < o; h++) a += i[h] + u[h];
        return a + i[o];
      },
      ae = (function () {
        var t,
          e =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in re) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
      })(),
      ue = /hsl[a]?\(/,
      le = function (t) {
        var e,
          r = t.join(" ");
        if (((ae.lastIndex = 0), ae.test(r)))
          return (
            (e = ue.test(r)),
            (t[1] = oe(t[1], e)),
            (t[0] = oe(t[0], e, se(t[1]))),
            !0
          );
      },
      he = (function () {
        var t,
          e,
          r,
          n,
          i,
          s,
          h = Date.now,
          c = 500,
          p = 33,
          d = h(),
          _ = d,
          g = 1e3 / 240,
          m = g,
          v = [],
          y = function r(o) {
            var a,
              u,
              l,
              f,
              y = h() - _,
              x = !0 === o;
            if (
              (y > c && (d += y - p),
              ((a = (l = (_ += y) - d) - m) > 0 || x) &&
                ((f = ++n.frame),
                (i = l - 1e3 * n.time),
                (n.time = l /= 1e3),
                (m += a + (a >= g ? 4 : g - a)),
                (u = 1)),
              x || (t = e(r)),
              u)
            )
              for (s = 0; s < v.length; s++) v[s](l, i, f, o);
          };
        return (n = {
          time: 0,
          frame: 0,
          tick: function () {
            y(!0);
          },
          deltaRatio: function (t) {
            return i / (1e3 / (t || 60));
          },
          wake: function () {
            l &&
              (!a &&
                E() &&
                ((o = a = window),
                (u = o.document || {}),
                (X.gsap = $e),
                (o.gsapVersions || (o.gsapVersions = [])).push($e.version),
                W(U || o.GreenSockGlobals || (!o.gsap && o) || {}),
                (r = o.requestAnimationFrame)),
              t && n.sleep(),
              (e =
                r ||
                function (t) {
                  return setTimeout(t, (m - 1e3 * n.time + 1) | 0);
                }),
              (f = 1),
              y(2));
          },
          sleep: function () {
            (r ? o.cancelAnimationFrame : clearTimeout)(t), (f = 0), (e = G);
          },
          lagSmoothing: function (t, e) {
            (c = t || 1 / 1e-8), (p = Math.min(e, c, 0));
          },
          fps: function (t) {
            (g = 1e3 / (t || 240)), (m = 1e3 * n.time + g);
          },
          add: function (t) {
            v.indexOf(t) < 0 && v.push(t), ce();
          },
          remove: function (t) {
            var e;
            ~(e = v.indexOf(t)) && v.splice(e, 1) && s >= e && s--;
          },
          _listeners: v,
        });
      })(),
      ce = function () {
        return !f && he.wake();
      },
      fe = {},
      pe = /^[\d.\-M][\d.\-,\s]/,
      de = /["']/g,
      _e = function (t) {
        for (
          var e,
            r,
            n,
            i = {},
            s = t.substr(1, t.length - 3).split(":"),
            o = s[0],
            a = 1,
            u = s.length;
          a < u;
          a++
        )
          (r = s[a]),
            (e = a !== u - 1 ? r.lastIndexOf(",") : r.length),
            (n = r.substr(0, e)),
            (i[o] = isNaN(n) ? n.replace(de, "").trim() : +n),
            (o = r.substr(e + 1).trim());
        return i;
      },
      ge = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      me = function t(e, r) {
        for (var n, i = e._first; i; )
          i instanceof Oe
            ? t(i, r)
            : !i.vars.yoyoEase ||
              (i._yoyo && i._repeat) ||
              i._yoyo === r ||
              (i.timeline
                ? t(i.timeline, r)
                : ((n = i._ease),
                  (i._ease = i._yEase),
                  (i._yEase = n),
                  (i._yoyo = r))),
            (i = i._next);
      },
      ve = function (t, e) {
        return (
          (t &&
            (C(t)
              ? t
              : fe[t] ||
                (function (t) {
                  var e,
                    r,
                    n,
                    i,
                    s = (t + "").split("("),
                    o = fe[s[0]];
                  return o && s.length > 1 && o.config
                    ? o.config.apply(
                        null,
                        ~t.indexOf("{")
                          ? [_e(s[1])]
                          : ((e = t),
                            (r = e.indexOf("(") + 1),
                            (n = e.indexOf(")")),
                            (i = e.indexOf("(", r)),
                            e.substring(
                              r,
                              ~i && i < n ? e.indexOf(")", n + 1) : n
                            ))
                              .split(",")
                              .map(ft)
                      )
                    : fe._CE && pe.test(t)
                    ? fe._CE("", t)
                    : o;
                })(t))) ||
          e
        );
      },
      ye = function (t, e, r, n) {
        void 0 === r &&
          (r = function (t) {
            return 1 - e(1 - t);
          }),
          void 0 === n &&
            (n = function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
            });
        var i,
          s = { easeIn: e, easeOut: r, easeInOut: n };
        return (
          ot(t, function (t) {
            for (var e in ((fe[t] = X[t] = s),
            (fe[(i = t.toLowerCase())] = r),
            s))
              fe[
                i +
                  ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
              ] = fe[t + "." + e] = s[e];
          }),
          s
        );
      },
      xe = function (t) {
        return function (e) {
          return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
        };
      },
      be = function t(e, r, n) {
        var i = r >= 1 ? r : 1,
          s = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
          o = (s / x) * (Math.asin(1 / i) || 0),
          a = function (t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * O((t - o) * s) + 1;
          },
          u =
            "out" === e
              ? a
              : "in" === e
              ? function (t) {
                  return 1 - a(1 - t);
                }
              : xe(a);
        return (
          (s = x / s),
          (u.config = function (r, n) {
            return t(e, r, n);
          }),
          u
        );
      },
      we = function t(e, r) {
        void 0 === r && (r = 1.70158);
        var n = function (t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
          },
          i =
            "out" === e
              ? n
              : "in" === e
              ? function (t) {
                  return 1 - n(1 - t);
                }
              : xe(n);
        return (
          (i.config = function (r) {
            return t(e, r);
          }),
          i
        );
      };
    ot("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var r = e < 5 ? e + 1 : e;
      ye(
        t + ",Power" + (r - 1),
        e
          ? function (t) {
              return Math.pow(t, r);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, r);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, r) / 2
            : 1 - Math.pow(2 * (1 - t), r) / 2;
        }
      );
    }),
      (fe.Linear.easeNone = fe.none = fe.Linear.easeIn),
      ye("Elastic", be("in"), be("out"), be()),
      (p = 7.5625),
      (_ = 1 / (d = 2.75)),
      ye(
        "Bounce",
        function (t) {
          return 1 - g(1 - t);
        },
        (g = function (t) {
          return t < _
            ? p * t * t
            : t < 0.7272727272727273
            ? p * Math.pow(t - 1.5 / d, 2) + 0.75
            : t < 0.9090909090909092
            ? p * (t -= 2.25 / d) * t + 0.9375
            : p * Math.pow(t - 2.625 / d, 2) + 0.984375;
        })
      ),
      ye("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
      }),
      ye("Circ", function (t) {
        return -(T(1 - t * t) - 1);
      }),
      ye("Sine", function (t) {
        return 1 === t ? 1 : 1 - k(t * b);
      }),
      ye("Back", we("in"), we("out"), we()),
      (fe.SteppedEase =
        fe.steps =
        X.SteppedEase =
          {
            config: function (t, e) {
              void 0 === t && (t = 1);
              var r = 1 / t,
                n = t + (e ? 0 : 1),
                i = e ? 1 : 0;
              return function (t) {
                return (((n * It(0, 1 - 1e-8, t)) | 0) + i) * r;
              };
            },
          }),
      (v.ease = fe["quad.out"]),
      ot(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (t) {
          return (rt += t + "," + t + "Params,");
        }
      );
    var Te = function (t, e) {
        (this.id = w++),
          (t._gsap = this),
          (this.target = t),
          (this.harness = e),
          (this.get = e ? e.get : st),
          (this.set = e ? e.getSetter : Ye);
      },
      ke = (function () {
        function t(t, e) {
          var r = t.parent || s;
          (this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat || 0) &&
              ((this._rDelay = t.repeatDelay || 0),
              (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            Rt(this, +t.duration, 1, 1),
            (this.data = t.data),
            f || he.wake(),
            r && At(r, this, e || 0 === e ? e : r._time, 1),
            t.reversed && this.reverse(),
            t.paused && this.paused(!0);
        }
        var e = t.prototype;
        return (
          (e.delay = function (t) {
            return t || 0 === t
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + t - this._delay),
                (this._delay = t),
                this)
              : this._delay;
          }),
          (e.duration = function (t) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                )
              : this.totalDuration() && this._dur;
          }),
          (e.totalDuration = function (t) {
            return arguments.length
              ? ((this._dirty = 0),
                Rt(
                  this,
                  this._repeat < 0
                    ? t
                    : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                ))
              : this._tDur;
          }),
          (e.totalTime = function (t, e) {
            if ((ce(), !arguments.length)) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (St(this, t); r.parent; )
                r.parent._time !==
                  r._start +
                    (r._ts >= 0
                      ? r._tTime / r._ts
                      : (r.totalDuration() - r._tTime) / -r._ts) &&
                  r.totalTime(r._tTime, !0),
                  (r = r.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && t < this._tDur) ||
                  (this._ts < 0 && t > 0) ||
                  (!this._tDur && !t)) &&
                At(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== t ||
                (!this._dur && !e) ||
                (this._initted && 1e-8 === Math.abs(this._zTime)) ||
                (!t && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = t), ct(this, t, e)),
              this
            );
          }),
          (e.time = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), t + kt(this)) % this._dur ||
                    (t ? this._dur : 0),
                  e
                )
              : this._time;
          }),
          (e.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.ratio;
          }),
          (e.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                    kt(this),
                  e
                )
              : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.ratio;
          }),
          (e.iteration = function (t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (t - 1) * r, e)
              : this._repeat
              ? Ot(this._tTime, r) + 1
              : 1;
          }),
          (e.timeScale = function (t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var e =
              this.parent && this._ts
                ? Mt(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +t || 0),
              (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
              Tt(this.totalTime(It(-this._delay, this._tDur, e), !0))
            );
          }),
          (e.paused = function (t) {
            return arguments.length
              ? (this._ps !== t &&
                  ((this._ps = t),
                  t
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (ce(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          (this._tTime -= 1e-8) &&
                          1e-8 !== Math.abs(this._zTime)
                      ))),
                this)
              : this._ps;
          }),
          (e.startTime = function (t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return (
                e && (e._sort || !this.parent) && At(e, this, t - this._delay),
                this
              );
            }
            return this._start;
          }),
          (e.endTime = function (t) {
            return (
              this._start +
              (D(t) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts)
            );
          }),
          (e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e
              ? t &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                ? Mt(e.rawTime(t), this)
                : this._tTime
              : this._tTime;
          }),
          (e.globalTime = function (t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
              (r = e._start + r / (e._ts || 1)), (e = e._dp);
            return r;
          }),
          (e.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), Lt(this))
              : this._repeat;
          }),
          (e.repeatDelay = function (t) {
            return arguments.length
              ? ((this._rDelay = t), Lt(this))
              : this._rDelay;
          }),
          (e.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(Bt(this, t), D(e));
          }),
          (e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, D(e));
          }),
          (e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
          }),
          (e.reverse = function (t, e) {
            return (
              null != t && this.seek(t || this.totalDuration(), e),
              this.reversed(!0).paused(!1)
            );
          }),
          (e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
          }),
          (e.resume = function () {
            return this.paused(!1);
          }),
          (e.reversed = function (t) {
            return arguments.length
              ? (!!t !== this.reversed() &&
                  this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (e.invalidate = function () {
            return (this._initted = 0), (this._zTime = -1e-8), this;
          }),
          (e.isActive = function () {
            var t,
              e = this.parent || this._dp,
              r = this._start;
            return !(
              e &&
              !(
                this._ts &&
                this._initted &&
                e.isActive() &&
                (t = e.rawTime(!0)) >= r &&
                t < this.endTime(!0) - 1e-8
              )
            );
          }),
          (e.eventCallback = function (t, e, r) {
            var n = this.vars;
            return arguments.length > 1
              ? (e
                  ? ((n[t] = e),
                    r && (n[t + "Params"] = r),
                    "onUpdate" === t && (this._onUpdate = e))
                  : delete n[t],
                this)
              : n[t];
          }),
          (e.then = function (t) {
            var e = this;
            return new Promise(function (r) {
              var n = C(t) ? t : pt,
                i = function () {
                  var t = e.then;
                  (e.then = null),
                    C(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                    r(n),
                    (e.then = t);
                };
              (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
              (!e._tTime && e._ts < 0)
                ? i()
                : (e._prom = i);
            });
          }),
          (e.kill = function () {
            te(this);
          }),
          t
        );
      })();
    dt(ke.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var Oe = (function (t) {
      function e(e, r) {
        var i;
        return (
          void 0 === e && (e = {}),
          ((i = t.call(this, e, r) || this).labels = {}),
          (i.smoothChildTiming = !!e.smoothChildTiming),
          (i.autoRemoveChildren = !!e.autoRemoveChildren),
          (i._sort = D(e.sortChildren)),
          i.parent && Pt(i.parent, n(i)),
          e.scrollTrigger && Dt(n(i), e.scrollTrigger),
          i
        );
      }
      i(e, t);
      var r = e.prototype;
      return (
        (r.to = function (t, e, r) {
          return (
            new Le(
              t,
              lt(arguments, 0, this),
              Bt(this, S(e) ? arguments[3] : r)
            ),
            this
          );
        }),
        (r.from = function (t, e, r) {
          return (
            new Le(
              t,
              lt(arguments, 1, this),
              Bt(this, S(e) ? arguments[3] : r)
            ),
            this
          );
        }),
        (r.fromTo = function (t, e, r, n) {
          return (
            new Le(
              t,
              lt(arguments, 2, this),
              Bt(this, S(e) ? arguments[4] : n)
            ),
            this
          );
        }),
        (r.set = function (t, e, r) {
          return (
            (e.duration = 0),
            (e.parent = this),
            yt(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new Le(t, e, Bt(this, r), 1),
            this
          );
        }),
        (r.call = function (t, e, r) {
          return At(this, Le.delayedCall(0, t, e), Bt(this, r));
        }),
        (r.staggerTo = function (t, e, r, n, i, s, o) {
          return (
            (r.duration = e),
            (r.stagger = r.stagger || n),
            (r.onComplete = s),
            (r.onCompleteParams = o),
            (r.parent = this),
            new Le(t, r, Bt(this, i)),
            this
          );
        }),
        (r.staggerFrom = function (t, e, r, n, i, s, o) {
          return (
            (r.runBackwards = 1),
            (yt(r).immediateRender = D(r.immediateRender)),
            this.staggerTo(t, e, r, n, i, s, o)
          );
        }),
        (r.staggerFromTo = function (t, e, r, n, i, s, o, a) {
          return (
            (n.startAt = r),
            (yt(n).immediateRender = D(n.immediateRender)),
            this.staggerTo(t, e, n, i, s, o, a)
          );
        }),
        (r.render = function (t, e, r) {
          var n,
            i,
            o,
            a,
            u,
            l,
            h,
            c,
            f,
            p,
            d,
            _,
            g = this._time,
            m = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            y = this !== s && t > m - 1e-8 && t >= 0 ? m : t < 1e-8 ? 0 : t,
            x = this._zTime < 0 != t < 0 && (this._initted || !v);
          if (y !== this._tTime || r || x) {
            if (
              (g !== this._time &&
                v &&
                ((y += this._time - g), (t += this._time - g)),
              (n = y),
              (f = this._start),
              (l = !(c = this._ts)),
              x && (v || (g = this._zTime), (t || !e) && (this._zTime = t)),
              this._repeat &&
                ((d = this._yoyo),
                (u = v + this._rDelay),
                (n = at(y % u)),
                y === m
                  ? ((a = this._repeat), (n = v))
                  : ((a = ~~(y / u)) && a === y / u && ((n = v), a--),
                    n > v && (n = v)),
                (p = Ot(this._tTime, u)),
                !g && this._tTime && p !== a && (p = a),
                d && 1 & a && ((n = v - n), (_ = 1)),
                a !== p && !this._lock))
            ) {
              var b = d && 1 & p,
                w = b === (d && 1 & a);
              if (
                (a < p && (b = !b),
                (g = b ? 0 : v),
                (this._lock = 1),
                (this.render(g || (_ ? 0 : at(a * u)), e, !v)._lock = 0),
                !e && this.parent && Jt(this, "onRepeat"),
                this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1),
                g !== this._time || l !== !this._ts)
              )
                return this;
              if (
                ((v = this._dur),
                (m = this._tDur),
                w &&
                  ((this._lock = 2),
                  (g = b ? v : -1e-4),
                  this.render(g, !0),
                  this.vars.repeatRefresh && !_ && this.invalidate()),
                (this._lock = 0),
                !this._ts && !l)
              )
                return this;
              me(this, _);
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (h = (function (t, e, r) {
                  var n;
                  if (r > e)
                    for (n = t._first; n && n._start <= r; ) {
                      if (!n._dur && "isPause" === n.data && n._start > e)
                        return n;
                      n = n._next;
                    }
                  else
                    for (n = t._last; n && n._start >= r; ) {
                      if (!n._dur && "isPause" === n.data && n._start < e)
                        return n;
                      n = n._prev;
                    }
                })(this, at(g), at(n))) &&
                (y -= n - (n = h._start)),
              (this._tTime = y),
              (this._time = n),
              (this._act = !c),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = t)),
              !g && n && !e && Jt(this, "onStart"),
              n >= g && t >= 0)
            )
              for (i = this._first; i; ) {
                if (
                  ((o = i._next), (i._act || n >= i._start) && i._ts && h !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, r);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (n - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (n - i._start) * i._ts,
                      e,
                      r
                    ),
                    n !== this._time || (!this._ts && !l))
                  ) {
                    (h = 0), o && (y += this._zTime = -1e-8);
                    break;
                  }
                }
                i = o;
              }
            else {
              i = this._last;
              for (var T = t < 0 ? t : n; i; ) {
                if (
                  ((o = i._prev), (i._act || T <= i._end) && i._ts && h !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, r);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (T - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (T - i._start) * i._ts,
                      e,
                      r
                    ),
                    n !== this._time || (!this._ts && !l))
                  ) {
                    (h = 0), o && (y += this._zTime = T ? -1e-8 : 1e-8);
                    break;
                  }
                }
                i = o;
              }
            }
            if (
              h &&
              !e &&
              (this.pause(),
              (h.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1),
              this._ts)
            )
              return (this._start = f), Ct(this), this.render(t, e, r);
            this._onUpdate && !e && Jt(this, "onUpdate", !0),
              ((y === m && m >= this.totalDuration()) || (!y && g)) &&
                ((f !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((t || !v) &&
                    ((y === m && this._ts > 0) || (!y && this._ts < 0)) &&
                    bt(this, 1),
                  e ||
                    (t < 0 && !g) ||
                    (!y && !g) ||
                    (Jt(this, y === m ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(y < m && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (r.add = function (t, e) {
          var r = this;
          if ((S(e) || (e = Bt(this, e)), !(t instanceof ke))) {
            if (z(t))
              return (
                t.forEach(function (t) {
                  return r.add(t, e);
                }),
                this
              );
            if (M(t)) return this.addLabel(t, e);
            if (!C(t)) return this;
            t = Le.delayedCall(0, t);
          }
          return this !== t ? At(this, t, e) : this;
        }),
        (r.getChildren = function (t, e, r, n) {
          void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === n && (n = -y);
          for (var i = [], s = this._first; s; )
            s._start >= n &&
              (s instanceof Le
                ? e && i.push(s)
                : (r && i.push(s),
                  t && i.push.apply(i, s.getChildren(!0, e, r)))),
              (s = s._next);
          return i;
        }),
        (r.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
            if (e[r].vars.id === t) return e[r];
        }),
        (r.remove = function (t) {
          return M(t)
            ? this.removeLabel(t)
            : C(t)
            ? this.killTweensOf(t)
            : (xt(this, t),
              t === this._recent && (this._recent = this._last),
              wt(this));
        }),
        (r.totalTime = function (e, r) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = at(
                  he.time -
                    (this._ts > 0
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts)
                )),
              t.prototype.totalTime.call(this, e, r),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (r.addLabel = function (t, e) {
          return (this.labels[t] = Bt(this, e)), this;
        }),
        (r.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (r.addPause = function (t, e, r) {
          var n = Le.delayedCall(0, e || G, r);
          return (
            (n.data = "isPause"), (this._hasPause = 1), At(this, n, Bt(this, t))
          );
        }),
        (r.removePause = function (t) {
          var e = this._first;
          for (t = Bt(this, t); e; )
            e._start === t && "isPause" === e.data && bt(e), (e = e._next);
        }),
        (r.killTweensOf = function (t, e, r) {
          for (var n = this.getTweensOf(t, r), i = n.length; i--; )
            Me !== n[i] && n[i].kill(t, e);
          return this;
        }),
        (r.getTweensOf = function (t, e) {
          for (var r, n = [], i = Ut(t), s = this._first, o = S(e); s; )
            s instanceof Le
              ? ut(s._targets, i) &&
                (o
                  ? (!Me || (s._initted && s._ts)) &&
                    s.globalTime(0) <= e &&
                    s.globalTime(s.totalDuration()) > e
                  : !e || s.isActive()) &&
                n.push(s)
              : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r),
              (s = s._next);
          return n;
        }),
        (r.tweenTo = function (t, e) {
          e = e || {};
          var r = this,
            n = Bt(r, t),
            i = e,
            s = i.startAt,
            o = i.onStart,
            a = i.onStartParams,
            u = Le.to(
              r,
              dt(e, {
                ease: "none",
                lazy: !1,
                time: n,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (n - (s && "time" in s ? s.time : r._time)) / r.timeScale()
                  ) ||
                  1e-8,
                onStart: function () {
                  r.pause();
                  var t = e.duration || Math.abs((n - r._time) / r.timeScale());
                  u._dur !== t && Rt(u, t, 0, 1).render(u._time, !0, !0),
                    o && o.apply(u, a || []);
                },
              })
            );
          return u;
        }),
        (r.tweenFromTo = function (t, e, r) {
          return this.tweenTo(e, dt({ startAt: { time: Bt(this, t) } }, r));
        }),
        (r.recent = function () {
          return this._recent;
        }),
        (r.nextLabel = function (t) {
          return void 0 === t && (t = this._time), $t(this, Bt(this, t));
        }),
        (r.previousLabel = function (t) {
          return void 0 === t && (t = this._time), $t(this, Bt(this, t), 1);
        }),
        (r.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + 1e-8);
        }),
        (r.shiftChildren = function (t, e, r) {
          void 0 === r && (r = 0);
          for (var n, i = this._first, s = this.labels; i; )
            i._start >= r && ((i._start += t), (i._end += t)), (i = i._next);
          if (e) for (n in s) s[n] >= r && (s[n] += t);
          return wt(this);
        }),
        (r.invalidate = function () {
          var e = this._first;
          for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
          return t.prototype.invalidate.call(this);
        }),
        (r.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, r = this._first; r; )
            (e = r._next), this.remove(r), (r = e);
          return (
            (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            wt(this)
          );
        }),
        (r.totalDuration = function (t) {
          var e,
            r,
            n,
            i = 0,
            o = this,
            a = o._last,
            u = y;
          if (arguments.length)
            return o.timeScale(
              (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                (o.reversed() ? -t : t)
            );
          if (o._dirty) {
            for (n = o.parent; a; )
              (e = a._prev),
                a._dirty && a.totalDuration(),
                (r = a._start) > u && o._sort && a._ts && !o._lock
                  ? ((o._lock = 1), (At(o, a, r - a._delay, 1)._lock = 0))
                  : (u = r),
                r < 0 &&
                  a._ts &&
                  ((i -= r),
                  ((!n && !o._dp) || (n && n.smoothChildTiming)) &&
                    ((o._start += r / o._ts), (o._time -= r), (o._tTime -= r)),
                  o.shiftChildren(-r, !1, -Infinity),
                  (u = 0)),
                a._end > i && a._ts && (i = a._end),
                (a = e);
            Rt(o, o === s && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
          }
          return o._tDur;
        }),
        (e.updateRoot = function (t) {
          if ((s._ts && (ct(s, Mt(t, s)), (h = he.frame)), he.frame >= tt)) {
            tt += m.autoSleep || 120;
            var e = s._first;
            if ((!e || !e._ts) && m.autoSleep && he._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || he.sleep();
            }
          }
        }),
        e
      );
    })(ke);
    dt(Oe.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Me,
      Ce = function (t, e, r, n, i, s, o) {
        var a,
          u,
          l,
          h,
          c,
          f,
          p,
          d,
          _ = new Ge(this._pt, t, e, 0, 1, Xe, null, i),
          g = 0,
          m = 0;
        for (
          _.b = r,
            _.e = n,
            r += "",
            (p = ~(n += "").indexOf("random(")) && (n = Qt(n)),
            s && (s((d = [r, n]), t, e), (r = d[0]), (n = d[1])),
            u = r.match(Y) || [];
          (a = Y.exec(n));

        )
          (h = a[0]),
            (c = n.substring(g, a.index)),
            l ? (l = (l + 1) % 5) : "rgba(" === c.substr(-5) && (l = 1),
            h !== u[m++] &&
              ((f = parseFloat(u[m - 1]) || 0),
              (_._pt = {
                _next: _._pt,
                p: c || 1 === m ? c : ",",
                s: f,
                c:
                  "=" === h.charAt(1)
                    ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1)
                    : parseFloat(h) - f,
                m: l && l < 4 ? Math.round : 0,
              }),
              (g = Y.lastIndex));
        return (
          (_.c = g < n.length ? n.substring(g, n.length) : ""),
          (_.fp = o),
          (q.test(n) || p) && (_.e = 0),
          (this._pt = _),
          _
        );
      },
      Se = function (t, e, r, n, i, s, o, a, u) {
        C(n) && (n = n(i || 0, t, s));
        var l,
          h = t[e],
          c =
            "get" !== r
              ? r
              : C(h)
              ? u
                ? t[
                    e.indexOf("set") || !C(t["get" + e.substr(3)])
                      ? e
                      : "get" + e.substr(3)
                  ](u)
                : t[e]()
              : h,
          f = C(h) ? (u ? Fe : Be) : ze;
        if (
          (M(n) &&
            (~n.indexOf("random(") && (n = Qt(n)),
            "=" === n.charAt(1) &&
              (n =
                parseFloat(c) +
                parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) +
                (Yt(c) || 0))),
          c !== n)
        )
          return isNaN(c * n)
            ? (!h && !(e in t) && j(e, n),
              Ce.call(this, t, e, c, n, f, a || m.stringFilter, u))
            : ((l = new Ge(
                this._pt,
                t,
                e,
                +c || 0,
                n - (c || 0),
                "boolean" == typeof h ? Ne : qe,
                0,
                f
              )),
              u && (l.fp = u),
              o && l.modifier(o, this, t),
              (this._pt = l));
      },
      Pe = function (t, e, r, n, i, s) {
        var o, a, u, l;
        if (
          $[t] &&
          !1 !==
            (o = new $[t]()).init(
              i,
              o.rawVars
                ? e[t]
                : (function (t, e, r, n, i) {
                    if (
                      (C(t) && (t = De(t, i, e, r, n)),
                      !A(t) || (t.style && t.nodeType) || z(t) || L(t))
                    )
                      return M(t) ? De(t, i, e, r, n) : t;
                    var s,
                      o = {};
                    for (s in t) o[s] = De(t[s], i, e, r, n);
                    return o;
                  })(e[t], n, i, s, r),
              r,
              n,
              s
            ) &&
          ((r._pt = a = new Ge(r._pt, i, t, 0, 1, o.render, o, 0, o.priority)),
          r !== c)
        )
          for (
            u = r._ptLookup[r._targets.indexOf(i)], l = o._props.length;
            l--;

          )
            u[o._props[l]] = a;
        return o;
      },
      Ae = function t(e, r) {
        var n,
          i,
          o,
          a,
          u,
          l,
          h,
          c,
          f,
          p,
          d,
          _,
          g,
          m = e.vars,
          y = m.ease,
          x = m.startAt,
          b = m.immediateRender,
          w = m.lazy,
          T = m.onUpdate,
          k = m.onUpdateParams,
          O = m.callbackScope,
          M = m.runBackwards,
          C = m.yoyoEase,
          S = m.keyframes,
          P = m.autoRevert,
          A = e._dur,
          E = e._startAt,
          R = e._targets,
          L = e.parent,
          z = L && "nested" === L.data ? L.parent._targets : R,
          B = "auto" === e._overwrite,
          F = e.timeline;
        if (
          (F && (!S || !y) && (y = "none"),
          (e._ease = ve(y, v.ease)),
          (e._yEase = C ? ge(ve(!0 === C ? y : C, v.ease)) : 0),
          C &&
            e._yoyo &&
            !e._repeat &&
            ((C = e._yEase), (e._yEase = e._ease), (e._ease = C)),
          !F)
        ) {
          if (
            ((_ = (c = R[0] ? it(R[0]).harness : 0) && m[c.prop]),
            (n = vt(m, K)),
            E && E.render(-1, !0).kill(),
            x)
          ) {
            if (
              (bt(
                (e._startAt = Le.set(
                  R,
                  dt(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: L,
                      immediateRender: !0,
                      lazy: D(w),
                      startAt: null,
                      delay: 0,
                      onUpdate: T,
                      onUpdateParams: k,
                      callbackScope: O,
                      stagger: 0,
                    },
                    x
                  )
                ))
              ),
              b)
            )
              if (r > 0) P || (e._startAt = 0);
              else if (A && !(r < 0 && E)) return void (r && (e._zTime = r));
          } else if (M && A)
            if (E) !P && (e._startAt = 0);
            else if (
              (r && (b = !1),
              (o = dt(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: b && D(w),
                  immediateRender: b,
                  stagger: 0,
                  parent: L,
                },
                n
              )),
              _ && (o[c.prop] = _),
              bt((e._startAt = Le.set(R, o))),
              b)
            ) {
              if (!r) return;
            } else t(e._startAt, 1e-8);
          for (
            e._pt = 0, w = (A && D(w)) || (w && !A), i = 0;
            i < R.length;
            i++
          ) {
            if (
              ((h = (u = R[i])._gsap || nt(R)[i]._gsap),
              (e._ptLookup[i] = p = {}),
              Z[h.id] && Q.length && ht(),
              (d = z === R ? i : z.indexOf(u)),
              c &&
                !1 !== (f = new c()).init(u, _ || n, e, d, z) &&
                ((e._pt = a =
                  new Ge(e._pt, u, f.name, 0, 1, f.render, f, 0, f.priority)),
                f._props.forEach(function (t) {
                  p[t] = a;
                }),
                f.priority && (l = 1)),
              !c || _)
            )
              for (o in n)
                $[o] && (f = Pe(o, n, e, d, u, z))
                  ? f.priority && (l = 1)
                  : (p[o] = a =
                      Se.call(e, u, o, "get", n[o], d, z, 0, m.stringFilter));
            e._op && e._op[i] && e.kill(u, e._op[i]),
              B &&
                e._pt &&
                ((Me = e),
                s.killTweensOf(u, p, e.globalTime(0)),
                (g = !e.parent),
                (Me = 0)),
              e._pt && w && (Z[h.id] = 1);
          }
          l && He(e), e._onInit && e._onInit(e);
        }
        (e._from = !F && !!m.runBackwards),
          (e._onUpdate = T),
          (e._initted = (!e._op || e._pt) && !g);
      },
      De = function (t, e, r, n, i) {
        return C(t)
          ? t.call(e, r, n, i)
          : M(t) && ~t.indexOf("random(")
          ? Qt(t)
          : t;
      },
      Ee = rt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      Re = (Ee + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
      Le = (function (t) {
        function e(e, r, i, o) {
          var a;
          "number" == typeof r && ((i.duration = r), (r = i), (i = null));
          var u,
            l,
            h,
            c,
            f,
            p,
            d,
            _,
            g = (a = t.call(this, o ? r : yt(r), i) || this).vars,
            v = g.duration,
            y = g.delay,
            x = g.immediateRender,
            b = g.stagger,
            w = g.overwrite,
            T = g.keyframes,
            k = g.defaults,
            O = g.scrollTrigger,
            M = g.yoyoEase,
            C = a.parent,
            P = (z(e) || L(e) ? S(e[0]) : "length" in r) ? [e] : Ut(e);
          if (
            ((a._targets = P.length
              ? nt(P)
              : V(
                  "GSAP target " + e + " not found. https://greensock.com",
                  !m.nullTargetWarn
                ) || []),
            (a._ptLookup = []),
            (a._overwrite = w),
            T || b || R(v) || R(y))
          ) {
            if (
              ((r = a.vars),
              (u = a.timeline =
                new Oe({ data: "nested", defaults: k || {} })).kill(),
              (u.parent = n(a)),
              T)
            )
              dt(u.vars.defaults, { ease: "none" }),
                T.forEach(function (t) {
                  return u.to(P, t, ">");
                });
            else {
              if (((c = P.length), (d = b ? jt(b) : G), A(b)))
                for (f in b) ~Ee.indexOf(f) && (_ || (_ = {}), (_[f] = b[f]));
              for (l = 0; l < c; l++) {
                for (f in ((h = {}), r)) Re.indexOf(f) < 0 && (h[f] = r[f]);
                (h.stagger = 0),
                  M && (h.yoyoEase = M),
                  _ && gt(h, _),
                  (p = P[l]),
                  (h.duration = +De(v, n(a), l, p, P)),
                  (h.delay = (+De(y, n(a), l, p, P) || 0) - a._delay),
                  !b &&
                    1 === c &&
                    h.delay &&
                    ((a._delay = y = h.delay), (a._start += y), (h.delay = 0)),
                  u.to(p, h, d(l, p, P));
              }
              u.duration() ? (v = y = 0) : (a.timeline = 0);
            }
            v || a.duration((v = u.duration()));
          } else a.timeline = 0;
          return (
            !0 === w && ((Me = n(a)), s.killTweensOf(P), (Me = 0)),
            C && Pt(C, n(a)),
            (x ||
              (!v &&
                !T &&
                a._start === at(C._time) &&
                D(x) &&
                (function t(e) {
                  return !e || (e._ts && t(e.parent));
                })(n(a)) &&
                "nested" !== C.data)) &&
              ((a._tTime = -1e-8), a.render(Math.max(0, -y))),
            O && Dt(n(a), O),
            a
          );
        }
        i(e, t);
        var r = e.prototype;
        return (
          (r.render = function (t, e, r) {
            var n,
              i,
              s,
              o,
              a,
              u,
              l,
              h,
              c,
              f = this._time,
              p = this._tDur,
              d = this._dur,
              _ = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
            if (d) {
              if (
                _ !== this._tTime ||
                !t ||
                r ||
                (this._startAt && this._zTime < 0 != t < 0)
              ) {
                if (((n = _), (h = this.timeline), this._repeat)) {
                  if (
                    ((o = d + this._rDelay),
                    (n = at(_ % o)),
                    _ === p
                      ? ((s = this._repeat), (n = d))
                      : ((s = ~~(_ / o)) && s === _ / o && ((n = d), s--),
                        n > d && (n = d)),
                    (u = this._yoyo && 1 & s) &&
                      ((c = this._yEase), (n = d - n)),
                    (a = Ot(this._tTime, o)),
                    n === f && !r && this._initted)
                  )
                    return this;
                  s !== a &&
                    (h && this._yEase && me(h, u),
                    !this.vars.repeatRefresh ||
                      u ||
                      this._lock ||
                      ((this._lock = r = 1),
                      (this.render(at(o * s), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (Et(this, t < 0 ? t : n, r, e))
                    return (this._tTime = 0), this;
                  if (d !== this._dur) return this.render(t, e, r);
                }
                for (
                  this._tTime = _,
                    this._time = n,
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    this.ratio = l = (c || this._ease)(n / d),
                    this._from && (this.ratio = l = 1 - l),
                    n && !f && !e && Jt(this, "onStart"),
                    i = this._pt;
                  i;

                )
                  i.r(l, i.d), (i = i._next);
                (h &&
                  h.render(t < 0 ? t : !n && u ? -1e-8 : h._dur * l, e, r)) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                    Jt(this, "onUpdate")),
                  this._repeat &&
                    s !== a &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    Jt(this, "onRepeat"),
                  (_ !== this._tDur && _) ||
                    this._tTime !== _ ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startAt.render(t, !0, !0),
                    (t || !d) &&
                      ((_ === this._tDur && this._ts > 0) ||
                        (!_ && this._ts < 0)) &&
                      bt(this, 1),
                    e ||
                      (t < 0 && !f) ||
                      (!_ && !f) ||
                      (Jt(
                        this,
                        _ === p ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(_ < p && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, r, n) {
                var i,
                  s,
                  o = t.ratio,
                  a =
                    e < 0 ||
                    (!e && o && !t._start && t._zTime > 1e-8 && !t._dp._lock) ||
                    ((t._ts < 0 || t._dp._ts < 0) &&
                      "isFromStart" !== t.data &&
                      "isStart" !== t.data)
                      ? 0
                      : 1,
                  u = t._rDelay,
                  l = 0;
                if (
                  (u &&
                    t._repeat &&
                    ((l = It(0, t._tDur, e)),
                    Ot(l, u) !== (s = Ot(t._tTime, u)) &&
                      ((o = 1 - a),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  a !== o || n || 1e-8 === t._zTime || (!e && t._zTime))
                ) {
                  if (!t._initted && Et(t, e, n, r)) return;
                  for (
                    s = t._zTime,
                      t._zTime = e || (r ? 1e-8 : 0),
                      r || (r = e && !s),
                      t.ratio = a,
                      t._from && (a = 1 - a),
                      t._time = 0,
                      t._tTime = l,
                      r || Jt(t, "onStart"),
                      i = t._pt;
                    i;

                  )
                    i.r(a, i.d), (i = i._next);
                  t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                    t._onUpdate && !r && Jt(t, "onUpdate"),
                    l && t._repeat && !r && t.parent && Jt(t, "onRepeat"),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === a &&
                      (a && bt(t, 1),
                      r ||
                        (Jt(t, a ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, r);
            return this;
          }),
          (r.targets = function () {
            return this._targets;
          }),
          (r.invalidate = function () {
            return (
              (this._pt =
                this._op =
                this._startAt =
                this._onUpdate =
                this._act =
                this._lazy =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(),
              t.prototype.invalidate.call(this)
            );
          }),
          (r.kill = function (t, e) {
            if (
              (void 0 === e && (e = "all"),
              !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
            )
              return te(this);
            if (this.timeline) {
              var r = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, Me && !0 !== Me.vars.overwrite)
                  ._first || te(this),
                this.parent &&
                  r !== this.timeline.totalDuration() &&
                  Rt(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                this
              );
            }
            var n,
              i,
              s,
              o,
              a,
              u,
              l,
              h = this._targets,
              c = t ? Ut(t) : h,
              f = this._ptLookup,
              p = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var r = t.length, n = r === e.length;
                  n && r-- && t[r] === e[r];

                );
                return r < 0;
              })(h, c)
            )
              return "all" === e && (this._pt = 0), te(this);
            for (
              n = this._op = this._op || [],
                "all" !== e &&
                  (M(e) &&
                    ((a = {}),
                    ot(e, function (t) {
                      return (a[t] = 1);
                    }),
                    (e = a)),
                  (e = (function (t, e) {
                    var r,
                      n,
                      i,
                      s,
                      o = t[0] ? it(t[0]).harness : 0,
                      a = o && o.aliases;
                    if (!a) return e;
                    for (n in ((r = gt({}, e)), a))
                      if ((n in r))
                        for (i = (s = a[n].split(",")).length; i--; )
                          r[s[i]] = r[n];
                    return r;
                  })(h, e))),
                l = h.length;
              l--;

            )
              if (~c.indexOf(h[l]))
                for (a in ((i = f[l]),
                "all" === e
                  ? ((n[l] = e), (o = i), (s = {}))
                  : ((s = n[l] = n[l] || {}), (o = e)),
                o))
                  (u = i && i[a]) &&
                    (("kill" in u.d && !0 !== u.d.kill(a)) ||
                      xt(this, u, "_pt"),
                    delete i[a]),
                    "all" !== s && (s[a] = 1);
            return this._initted && !this._pt && p && te(this), this;
          }),
          (e.to = function (t, r) {
            return new e(t, r, arguments[2]);
          }),
          (e.from = function (t, r) {
            return new e(t, lt(arguments, 1));
          }),
          (e.delayedCall = function (t, r, n, i) {
            return new e(r, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: r,
              onReverseComplete: r,
              onCompleteParams: n,
              onReverseCompleteParams: n,
              callbackScope: i,
            });
          }),
          (e.fromTo = function (t, r, n) {
            return new e(t, lt(arguments, 2));
          }),
          (e.set = function (t, r) {
            return (
              (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r)
            );
          }),
          (e.killTweensOf = function (t, e, r) {
            return s.killTweensOf(t, e, r);
          }),
          e
        );
      })(ke);
    dt(Le.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      ot("staggerTo,staggerFrom,staggerFromTo", function (t) {
        Le[t] = function () {
          var e = new Oe(),
            r = qt.call(arguments, 0);
          return (
            r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
          );
        };
      });
    var ze = function (t, e, r) {
        return (t[e] = r);
      },
      Be = function (t, e, r) {
        return t[e](r);
      },
      Fe = function (t, e, r, n) {
        return t[e](n.fp, r);
      },
      Ie = function (t, e, r) {
        return t.setAttribute(e, r);
      },
      Ye = function (t, e) {
        return C(t[e]) ? Be : P(t[e]) && t.setAttribute ? Ie : ze;
      },
      qe = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
      },
      Ne = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      Xe = function (t, e) {
        var r = e._pt,
          n = "";
        if (!t && e.b) n = e.b;
        else if (1 === t && e.e) n = e.e;
        else {
          for (; r; )
            (n =
              r.p +
              (r.m
                ? r.m(r.s + r.c * t)
                : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
              n),
              (r = r._next);
          n += e.c;
        }
        e.set(e.t, e.p, n, e);
      },
      Ue = function (t, e) {
        for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
      },
      We = function (t, e, r, n) {
        for (var i, s = this._pt; s; )
          (i = s._next), s.p === n && s.modifier(t, e, r), (s = i);
      },
      je = function (t) {
        for (var e, r, n = this._pt; n; )
          (r = n._next),
            (n.p === t && !n.op) || n.op === t
              ? xt(this, n, "_pt")
              : n.dep || (e = 1),
            (n = r);
        return !e;
      },
      Ve = function (t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
      },
      He = function (t) {
        for (var e, r, n, i, s = t._pt; s; ) {
          for (e = s._next, r = n; r && r.pr > s.pr; ) r = r._next;
          (s._prev = r ? r._prev : i) ? (s._prev._next = s) : (n = s),
            (s._next = r) ? (r._prev = s) : (i = s),
            (s = e);
        }
        t._pt = n;
      },
      Ge = (function () {
        function t(t, e, r, n, i, s, o, a, u) {
          (this.t = e),
            (this.s = n),
            (this.c = i),
            (this.p = r),
            (this.r = s || qe),
            (this.d = o || this),
            (this.set = a || ze),
            (this.pr = u || 0),
            (this._next = t),
            t && (t._prev = this);
        }
        return (
          (t.prototype.modifier = function (t, e, r) {
            (this.mSet = this.mSet || this.set),
              (this.set = Ve),
              (this.m = t),
              (this.mt = r),
              (this.tween = e);
          }),
          t
        );
      })();
    ot(
      rt +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (t) {
        return (K[t] = 1);
      }
    ),
      (X.TweenMax = X.TweenLite = Le),
      (X.TimelineLite = X.TimelineMax = Oe),
      (s = new Oe({
        sortChildren: !1,
        defaults: v,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (m.stringFilter = le);
    var Ke = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        e.forEach(function (t) {
          return ee(t);
        });
      },
      timeline: function (t) {
        return new Oe(t);
      },
      getTweensOf: function (t, e) {
        return s.getTweensOf(t, e);
      },
      getProperty: function (t, e, r, n) {
        M(t) && (t = Ut(t)[0]);
        var i = it(t || {}).get,
          s = r ? pt : ft;
        return (
          "native" === r && (r = ""),
          t
            ? e
              ? s((($[e] && $[e].get) || i)(t, e, r, n))
              : function (e, r, n) {
                  return s((($[e] && $[e].get) || i)(t, e, r, n));
                }
            : t
        );
      },
      quickSetter: function (t, e, r) {
        if ((t = Ut(t)).length > 1) {
          var n = t.map(function (t) {
              return $e.quickSetter(t, e, r);
            }),
            i = n.length;
          return function (t) {
            for (var e = i; e--; ) n[e](t);
          };
        }
        t = t[0] || {};
        var s = $[e],
          o = it(t),
          a = (o.harness && (o.harness.aliases || {})[e]) || e,
          u = s
            ? function (e) {
                var n = new s();
                (c._pt = 0),
                  n.init(t, r ? e + r : e, c, 0, [t]),
                  n.render(1, n),
                  c._pt && Ue(1, c);
              }
            : o.set(t, a);
        return s
          ? u
          : function (e) {
              return u(t, a, r ? e + r : e, o, 1);
            };
      },
      isTweening: function (t) {
        return s.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = ve(t.ease, v.ease)), mt(v, t || {});
      },
      config: function (t) {
        return mt(m, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          r = t.effect,
          n = t.plugins,
          i = t.defaults,
          s = t.extendTimeline;
        (n || "").split(",").forEach(function (t) {
          return (
            t && !$[t] && !X[t] && V(e + " effect requires " + t + " plugin.")
          );
        }),
          (J[e] = function (t, e, n) {
            return r(Ut(t), dt(e || {}, i), n);
          }),
          s &&
            (Oe.prototype[e] = function (t, r, n) {
              return this.add(J[e](t, A(r) ? r : (n = r) && {}, this), n);
            });
      },
      registerEase: function (t, e) {
        fe[t] = ve(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? ve(t, e) : fe;
      },
      getById: function (t) {
        return s.getById(t);
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var r,
          n,
          i = new Oe(t);
        for (
          i.smoothChildTiming = D(t.smoothChildTiming),
            s.remove(i),
            i._dp = 0,
            i._time = i._tTime = s._time,
            r = s._first;
          r;

        )
          (n = r._next),
            (!e &&
              !r._dur &&
              r instanceof Le &&
              r.vars.onComplete === r._targets[0]) ||
              At(i, r, r._start - r._delay),
            (r = n);
        return At(s, i, 0), i;
      },
      utils: {
        wrap: function t(e, r, n) {
          var i = r - e;
          return z(e)
            ? Kt(e, t(0, e.length), r)
            : Ft(n, function (t) {
                return ((i + ((t - e) % i)) % i) + e;
              });
        },
        wrapYoyo: function t(e, r, n) {
          var i = r - e,
            s = 2 * i;
          return z(e)
            ? Kt(e, t(0, e.length - 1), r)
            : Ft(n, function (t) {
                return e + ((t = (s + ((t - e) % s)) % s || 0) > i ? s - t : t);
              });
        },
        distribute: jt,
        random: Gt,
        snap: Ht,
        normalize: function (t, e, r) {
          return Zt(t, e, 0, 1, r);
        },
        getUnit: Yt,
        clamp: function (t, e, r) {
          return Ft(r, function (r) {
            return It(t, e, r);
          });
        },
        splitColor: ie,
        toArray: Ut,
        mapRange: Zt,
        pipe: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function (t, e) {
          return function (r) {
            return t(parseFloat(r)) + (e || Yt(r));
          };
        },
        interpolate: function t(e, r, n, i) {
          var s = isNaN(e + r)
            ? 0
            : function (t) {
                return (1 - t) * e + t * r;
              };
          if (!s) {
            var o,
              a,
              u,
              l,
              h,
              c = M(e),
              f = {};
            if ((!0 === n && (i = 1) && (n = null), c))
              (e = { p: e }), (r = { p: r });
            else if (z(e) && !z(r)) {
              for (u = [], l = e.length, h = l - 2, a = 1; a < l; a++)
                u.push(t(e[a - 1], e[a]));
              l--,
                (s = function (t) {
                  t *= l;
                  var e = Math.min(h, ~~t);
                  return u[e](t - e);
                }),
                (n = r);
            } else i || (e = gt(z(e) ? [] : {}, e));
            if (!u) {
              for (o in r) Se.call(f, e, o, "get", r[o]);
              s = function (t) {
                return Ue(t, f) || (c ? e.p : e);
              };
            }
          }
          return Ft(n, s);
        },
        shuffle: Wt,
      },
      install: W,
      effects: J,
      ticker: he,
      updateRoot: Oe.updateRoot,
      plugins: $,
      globalTimeline: s,
      core: {
        PropTween: Ge,
        globals: H,
        Tween: Le,
        Timeline: Oe,
        Animation: ke,
        getCache: it,
        _removeLinkedListItem: xt,
      },
    };
    ot("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return (Ke[t] = Le[t]);
    }),
      he.add(Oe.updateRoot),
      (c = Ke.to({}, { duration: 0 }));
    var Qe = function (t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
          r = r._next;
        return r;
      },
      Ze = function (t, e) {
        return {
          name: t,
          rawVars: 1,
          init: function (t, r, n) {
            n._onInit = function (t) {
              var n, i;
              if (
                (M(r) &&
                  ((n = {}),
                  ot(r, function (t) {
                    return (n[t] = 1);
                  }),
                  (r = n)),
                e)
              ) {
                for (i in ((n = {}), r)) n[i] = e(r[i]);
                r = n;
              }
              !(function (t, e) {
                var r,
                  n,
                  i,
                  s = t._targets;
                for (r in e)
                  for (n = s.length; n--; )
                    (i = t._ptLookup[n][r]) &&
                      (i = i.d) &&
                      (i._pt && (i = Qe(i, r)),
                      i && i.modifier && i.modifier(e[r], t, s[n], r));
              })(t, r);
            };
          },
        };
      },
      $e =
        Ke.registerPlugin(
          {
            name: "attr",
            init: function (t, e, r, n, i) {
              var s, o;
              for (s in e)
                (o = this.add(
                  t,
                  "setAttribute",
                  (t.getAttribute(s) || 0) + "",
                  e[s],
                  n,
                  i,
                  0,
                  0,
                  s
                )) && (o.op = s),
                  this._props.push(s);
            },
          },
          {
            name: "endArray",
            init: function (t, e) {
              for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
            },
          },
          Ze("roundProps", Vt),
          Ze("modifiers"),
          Ze("snap", Ht)
        ) || Ke;
    (Le.version = Oe.version = $e.version = "3.5.1"), (l = 1), E() && ce();
    fe.Power0,
      fe.Power1,
      fe.Power2,
      fe.Power3,
      fe.Power4,
      fe.Linear,
      fe.Quad,
      fe.Cubic,
      fe.Quart,
      fe.Quint,
      fe.Strong,
      fe.Elastic,
      fe.Back,
      fe.SteppedEase,
      fe.Bounce,
      fe.Sine,
      fe.Expo,
      fe.Circ;
    var Je,
      tr,
      er,
      rr,
      nr,
      ir,
      sr,
      or,
      ar = {},
      ur = 180 / Math.PI,
      lr = Math.PI / 180,
      hr = Math.atan2,
      cr = /([A-Z])/g,
      fr = /(?:left|right|width|margin|padding|x)/i,
      pr = /[\s,\(]\S/,
      dr = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      _r = function (t, e) {
        return e.set(
          e.t,
          e.p,
          Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      },
      gr = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      },
      mr = function (t, e) {
        return e.set(
          e.t,
          e.p,
          t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
          e
        );
      },
      vr = function (t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
      },
      yr = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
      },
      xr = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      },
      br = function (t, e, r) {
        return (t.style[e] = r);
      },
      wr = function (t, e, r) {
        return t.style.setProperty(e, r);
      },
      Tr = function (t, e, r) {
        return (t._gsap[e] = r);
      },
      kr = function (t, e, r) {
        return (t._gsap.scaleX = t._gsap.scaleY = r);
      },
      Or = function (t, e, r, n, i) {
        var s = t._gsap;
        (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
      },
      Mr = function (t, e, r, n, i) {
        var s = t._gsap;
        (s[e] = r), s.renderTransform(i, s);
      },
      Cr = "transform",
      Sr = Cr + "Origin",
      Pr = function (t, e) {
        var r = tr.createElementNS
          ? tr.createElementNS(
              (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              t
            )
          : tr.createElement(t);
        return r.style ? r : tr.createElement(t);
      },
      Ar = function t(e, r, n) {
        var i = getComputedStyle(e);
        return (
          i[r] ||
          i.getPropertyValue(r.replace(cr, "-$1").toLowerCase()) ||
          i.getPropertyValue(r) ||
          (!n && t(e, Er(r) || r, 1)) ||
          ""
        );
      },
      Dr = "O,Moz,ms,Ms,Webkit".split(","),
      Er = function (t, e, r) {
        var n = (e || nr).style,
          i = 5;
        if (t in n && !r) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          i-- && !(Dr[i] + t in n);

        );
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Dr[i] : "") + t;
      },
      Rr = function () {
        "undefined" != typeof window &&
          window.document &&
          ((Je = window),
          (tr = Je.document),
          (er = tr.documentElement),
          (nr = Pr("div") || { style: {} }),
          (ir = Pr("div")),
          (Cr = Er(Cr)),
          (Sr = Cr + "Origin"),
          (nr.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (or = !!Er("perspective")),
          (rr = 1));
      },
      Lr = function t(e) {
        var r,
          n = Pr(
            "svg",
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute("xmlns")) ||
              "http://www.w3.org/2000/svg"
          ),
          i = this.parentNode,
          s = this.nextSibling,
          o = this.style.cssText;
        if (
          (er.appendChild(n),
          n.appendChild(this),
          (this.style.display = "block"),
          e)
        )
          try {
            (r = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = t);
          } catch (t) {}
        else this._gsapBBox && (r = this._gsapBBox());
        return (
          i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
          er.removeChild(n),
          (this.style.cssText = o),
          r
        );
      },
      zr = function (t, e) {
        for (var r = e.length; r--; )
          if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
      },
      Br = function (t) {
        var e;
        try {
          e = t.getBBox();
        } catch (r) {
          e = Lr.call(t, !0);
        }
        return (
          (e && (e.width || e.height)) ||
            t.getBBox === Lr ||
            (e = Lr.call(t, !0)),
          !e || e.width || e.x || e.y
            ? e
            : {
                x: +zr(t, ["x", "cx", "x1"]) || 0,
                y: +zr(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      Fr = function (t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Br(t));
      },
      Ir = function (t, e) {
        if (e) {
          var r = t.style;
          e in ar && e !== Sr && (e = Cr),
            r.removeProperty
              ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                  (e = "-" + e),
                r.removeProperty(e.replace(cr, "-$1").toLowerCase()))
              : r.removeAttribute(e);
        }
      },
      Yr = function (t, e, r, n, i, s) {
        var o = new Ge(t._pt, e, r, 0, 1, s ? xr : yr);
        return (t._pt = o), (o.b = n), (o.e = i), t._props.push(r), o;
      },
      qr = { deg: 1, rad: 1, turn: 1 },
      Nr = function t(e, r, n, i) {
        var s,
          o,
          a,
          u,
          l = parseFloat(n) || 0,
          h = (n + "").trim().substr((l + "").length) || "px",
          c = nr.style,
          f = fr.test(r),
          p = "svg" === e.tagName.toLowerCase(),
          d = (p ? "client" : "offset") + (f ? "Width" : "Height"),
          _ = "px" === i,
          g = "%" === i;
        return i === h || !l || qr[i] || qr[h]
          ? l
          : ("px" !== h && !_ && (l = t(e, r, n, "px")),
            (u = e.getCTM && Fr(e)),
            g && (ar[r] || ~r.indexOf("adius"))
              ? at((l / (u ? e.getBBox()[f ? "width" : "height"] : e[d])) * 100)
              : ((c[f ? "width" : "height"] = 100 + (_ ? h : i)),
                (o =
                  ~r.indexOf("adius") || ("em" === i && e.appendChild && !p)
                    ? e
                    : e.parentNode),
                u && (o = (e.ownerSVGElement || {}).parentNode),
                (o && o !== tr && o.appendChild) || (o = tr.body),
                (a = o._gsap) && g && a.width && f && a.time === he.time
                  ? at((l / a.width) * 100)
                  : ((g || "%" === h) && (c.position = Ar(e, "position")),
                    o === e && (c.position = "static"),
                    o.appendChild(nr),
                    (s = nr[d]),
                    o.removeChild(nr),
                    (c.position = "absolute"),
                    f && g && (((a = it(o)).time = he.time), (a.width = o[d])),
                    at(_ ? (s * l) / 100 : s && l ? (100 / s) * l : 0))));
      },
      Xr = function (t, e, r, n) {
        var i;
        return (
          rr || Rr(),
          e in dr &&
            "transform" !== e &&
            ~(e = dr[e]).indexOf(",") &&
            (e = e.split(",")[0]),
          ar[e] && "transform" !== e
            ? ((i = Jr(t, n)),
              (i =
                "transformOrigin" !== e
                  ? i[e]
                  : tn(Ar(t, Sr)) + " " + i.zOrigin + "px"))
            : (!(i = t.style[e]) ||
                "auto" === i ||
                n ||
                ~(i + "").indexOf("calc(")) &&
              (i =
                (Vr[e] && Vr[e](t, e, r)) ||
                Ar(t, e) ||
                st(t, e) ||
                ("opacity" === e ? 1 : 0)),
          r && !~(i + "").indexOf(" ") ? Nr(t, e, i, r) + r : i
        );
      },
      Ur = function (t, e, r, n) {
        if (!r || "none" === r) {
          var i = Er(e, t, 1),
            s = i && Ar(t, i, 1);
          s && s !== r
            ? ((e = i), (r = s))
            : "borderColor" === e && (r = Ar(t, "borderTopColor"));
        }
        var o,
          a,
          u,
          l,
          h,
          c,
          f,
          p,
          d,
          _,
          g,
          v,
          y = new Ge(this._pt, t.style, e, 0, 1, Xe),
          x = 0,
          b = 0;
        if (
          ((y.b = r),
          (y.e = n),
          (r += ""),
          "auto" === (n += "") &&
            ((t.style[e] = n), (n = Ar(t, e) || n), (t.style[e] = r)),
          le((o = [r, n])),
          (n = o[1]),
          (u = (r = o[0]).match(I) || []),
          (n.match(I) || []).length)
        ) {
          for (; (a = I.exec(n)); )
            (f = a[0]),
              (d = n.substring(x, a.index)),
              h
                ? (h = (h + 1) % 5)
                : ("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5)) ||
                  (h = 1),
              f !== (c = u[b++] || "") &&
                ((l = parseFloat(c) || 0),
                (g = c.substr((l + "").length)),
                (v = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) &&
                  (f = f.substr(2)),
                (p = parseFloat(f)),
                (_ = f.substr((p + "").length)),
                (x = I.lastIndex - _.length),
                _ ||
                  ((_ = _ || m.units[e] || g),
                  x === n.length && ((n += _), (y.e += _))),
                g !== _ && (l = Nr(t, e, c, _) || 0),
                (y._pt = {
                  _next: y._pt,
                  p: d || 1 === b ? d : ",",
                  s: l,
                  c: v ? v * p : p - l,
                  m: h && h < 4 ? Math.round : 0,
                }));
          y.c = x < n.length ? n.substring(x, n.length) : "";
        } else y.r = "display" === e && "none" === n ? xr : yr;
        return q.test(n) && (y.e = 0), (this._pt = y), y;
      },
      Wr = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      jr = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var r,
            n,
            i,
            s = e.t,
            o = s.style,
            a = e.u,
            u = s._gsap;
          if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
          else
            for (i = (a = a.split(",")).length; --i > -1; )
              (r = a[i]),
                ar[r] && ((n = 1), (r = "transformOrigin" === r ? Sr : Cr)),
                Ir(s, r);
          n &&
            (Ir(s, Cr),
            u &&
              (u.svg && s.removeAttribute("transform"),
              Jr(s, 1),
              (u.uncache = 1)));
        }
      },
      Vr = {
        clearProps: function (t, e, r, n, i) {
          if ("isFromStart" !== i.data) {
            var s = (t._pt = new Ge(t._pt, e, r, 0, 0, jr));
            return (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1;
          }
        },
      },
      Hr = [1, 0, 0, 1, 0, 0],
      Gr = {},
      Kr = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
      },
      Qr = function (t) {
        var e = Ar(t, Cr);
        return Kr(e) ? Hr : e.substr(7).match(F).map(at);
      },
      Zr = function (t, e) {
        var r,
          n,
          i,
          s,
          o = t._gsap || it(t),
          a = t.style,
          u = Qr(t);
        return o.svg && t.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (u = [
              (i = t.transform.baseVal.consolidate().matrix).a,
              i.b,
              i.c,
              i.d,
              i.e,
              i.f,
            ]).join(",")
            ? Hr
            : u
          : (u !== Hr ||
              t.offsetParent ||
              t === er ||
              o.svg ||
              ((i = a.display),
              (a.display = "block"),
              ((r = t.parentNode) && t.offsetParent) ||
                ((s = 1), (n = t.nextSibling), er.appendChild(t)),
              (u = Qr(t)),
              i ? (a.display = i) : Ir(t, "display"),
              s &&
                (n
                  ? r.insertBefore(t, n)
                  : r
                  ? r.appendChild(t)
                  : er.removeChild(t))),
            e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
      },
      $r = function (t, e, r, n, i, s) {
        var o,
          a,
          u,
          l = t._gsap,
          h = i || Zr(t, !0),
          c = l.xOrigin || 0,
          f = l.yOrigin || 0,
          p = l.xOffset || 0,
          d = l.yOffset || 0,
          _ = h[0],
          g = h[1],
          m = h[2],
          v = h[3],
          y = h[4],
          x = h[5],
          b = e.split(" "),
          w = parseFloat(b[0]) || 0,
          T = parseFloat(b[1]) || 0;
        r
          ? h !== Hr &&
            (a = _ * v - g * m) &&
            ((u = w * (-g / a) + T * (_ / a) - (_ * x - g * y) / a),
            (w = w * (v / a) + T * (-m / a) + (m * x - v * y) / a),
            (T = u))
          : ((w =
              (o = Br(t)).x + (~b[0].indexOf("%") ? (w / 100) * o.width : w)),
            (T =
              o.y + (~(b[1] || b[0]).indexOf("%") ? (T / 100) * o.height : T))),
          n || (!1 !== n && l.smooth)
            ? ((y = w - c),
              (x = T - f),
              (l.xOffset = p + (y * _ + x * m) - y),
              (l.yOffset = d + (y * g + x * v) - x))
            : (l.xOffset = l.yOffset = 0),
          (l.xOrigin = w),
          (l.yOrigin = T),
          (l.smooth = !!n),
          (l.origin = e),
          (l.originIsAbsolute = !!r),
          (t.style[Sr] = "0px 0px"),
          s &&
            (Yr(s, l, "xOrigin", c, w),
            Yr(s, l, "yOrigin", f, T),
            Yr(s, l, "xOffset", p, l.xOffset),
            Yr(s, l, "yOffset", d, l.yOffset)),
          t.setAttribute("data-svg-origin", w + " " + T);
      },
      Jr = function (t, e) {
        var r = t._gsap || new Te(t);
        if ("x" in r && !e && !r.uncache) return r;
        var n,
          i,
          s,
          o,
          a,
          u,
          l,
          h,
          c,
          f,
          p,
          d,
          _,
          g,
          v,
          y,
          x,
          b,
          w,
          T,
          k,
          O,
          M,
          C,
          S,
          P,
          A,
          D,
          E,
          R,
          L,
          z,
          B = t.style,
          F = r.scaleX < 0,
          I = Ar(t, Sr) || "0";
        return (
          (n = i = s = u = l = h = c = f = p = 0),
          (o = a = 1),
          (r.svg = !(!t.getCTM || !Fr(t))),
          (g = Zr(t, r.svg)),
          r.svg &&
            ((C = !r.uncache && t.getAttribute("data-svg-origin")),
            $r(t, C || I, !!C || r.originIsAbsolute, !1 !== r.smooth, g)),
          (d = r.xOrigin || 0),
          (_ = r.yOrigin || 0),
          g !== Hr &&
            ((b = g[0]),
            (w = g[1]),
            (T = g[2]),
            (k = g[3]),
            (n = O = g[4]),
            (i = M = g[5]),
            6 === g.length
              ? ((o = Math.sqrt(b * b + w * w)),
                (a = Math.sqrt(k * k + T * T)),
                (u = b || w ? hr(w, b) * ur : 0),
                (c = T || k ? hr(T, k) * ur + u : 0) && (a *= Math.cos(c * lr)),
                r.svg &&
                  ((n -= d - (d * b + _ * T)), (i -= _ - (d * w + _ * k))))
              : ((z = g[6]),
                (R = g[7]),
                (A = g[8]),
                (D = g[9]),
                (E = g[10]),
                (L = g[11]),
                (n = g[12]),
                (i = g[13]),
                (s = g[14]),
                (l = (v = hr(z, E)) * ur),
                v &&
                  ((C = O * (y = Math.cos(-v)) + A * (x = Math.sin(-v))),
                  (S = M * y + D * x),
                  (P = z * y + E * x),
                  (A = O * -x + A * y),
                  (D = M * -x + D * y),
                  (E = z * -x + E * y),
                  (L = R * -x + L * y),
                  (O = C),
                  (M = S),
                  (z = P)),
                (h = (v = hr(-T, E)) * ur),
                v &&
                  ((y = Math.cos(-v)),
                  (L = k * (x = Math.sin(-v)) + L * y),
                  (b = C = b * y - A * x),
                  (w = S = w * y - D * x),
                  (T = P = T * y - E * x)),
                (u = (v = hr(w, b)) * ur),
                v &&
                  ((C = b * (y = Math.cos(v)) + w * (x = Math.sin(v))),
                  (S = O * y + M * x),
                  (w = w * y - b * x),
                  (M = M * y - O * x),
                  (b = C),
                  (O = S)),
                l &&
                  Math.abs(l) + Math.abs(u) > 359.9 &&
                  ((l = u = 0), (h = 180 - h)),
                (o = at(Math.sqrt(b * b + w * w + T * T))),
                (a = at(Math.sqrt(M * M + z * z))),
                (v = hr(O, M)),
                (c = Math.abs(v) > 2e-4 ? v * ur : 0),
                (p = L ? 1 / (L < 0 ? -L : L) : 0)),
            r.svg &&
              ((C = t.getAttribute("transform")),
              (r.forceCSS = t.setAttribute("transform", "") || !Kr(Ar(t, Cr))),
              C && t.setAttribute("transform", C))),
          Math.abs(c) > 90 &&
            Math.abs(c) < 270 &&
            (F
              ? ((o *= -1),
                (c += u <= 0 ? 180 : -180),
                (u += u <= 0 ? 180 : -180))
              : ((a *= -1), (c += c <= 0 ? 180 : -180))),
          (r.x =
            ((r.xPercent =
              n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)
              ? 0
              : n) + "px"),
          (r.y =
            ((r.yPercent =
              i && Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)
              ? 0
              : i) + "px"),
          (r.z = s + "px"),
          (r.scaleX = at(o)),
          (r.scaleY = at(a)),
          (r.rotation = at(u) + "deg"),
          (r.rotationX = at(l) + "deg"),
          (r.rotationY = at(h) + "deg"),
          (r.skewX = c + "deg"),
          (r.skewY = f + "deg"),
          (r.transformPerspective = p + "px"),
          (r.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (B[Sr] = tn(I)),
          (r.xOffset = r.yOffset = 0),
          (r.force3D = m.force3D),
          (r.renderTransform = r.svg ? sn : or ? nn : rn),
          (r.uncache = 0),
          r
        );
      },
      tn = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      en = function (t, e, r) {
        var n = Yt(e);
        return at(parseFloat(e) + parseFloat(Nr(t, "x", r + "px", n))) + n;
      },
      rn = function (t, e) {
        (e.z = "0px"),
          (e.rotationY = e.rotationX = "0deg"),
          (e.force3D = 0),
          nn(t, e);
      },
      nn = function (t, e) {
        var r = e || this,
          n = r.xPercent,
          i = r.yPercent,
          s = r.x,
          o = r.y,
          a = r.z,
          u = r.rotation,
          l = r.rotationY,
          h = r.rotationX,
          c = r.skewX,
          f = r.skewY,
          p = r.scaleX,
          d = r.scaleY,
          _ = r.transformPerspective,
          g = r.force3D,
          m = r.target,
          v = r.zOrigin,
          y = "",
          x = ("auto" === g && t && 1 !== t) || !0 === g;
        if (v && ("0deg" !== h || "0deg" !== l)) {
          var b,
            w = parseFloat(l) * lr,
            T = Math.sin(w),
            k = Math.cos(w);
          (w = parseFloat(h) * lr),
            (b = Math.cos(w)),
            (s = en(m, s, T * b * -v)),
            (o = en(m, o, -Math.sin(w) * -v)),
            (a = en(m, a, k * b * -v + v));
        }
        "0px" !== _ && (y += "perspective(" + _ + ") "),
          (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
          (x || "0px" !== s || "0px" !== o || "0px" !== a) &&
            (y +=
              "0px" !== a || x
                ? "translate3d(" + s + ", " + o + ", " + a + ") "
                : "translate(" + s + ", " + o + ") "),
          "0deg" !== u && (y += "rotate(" + u + ") "),
          "0deg" !== l && (y += "rotateY(" + l + ") "),
          "0deg" !== h && (y += "rotateX(" + h + ") "),
          ("0deg" === c && "0deg" === f) ||
            (y += "skew(" + c + ", " + f + ") "),
          (1 === p && 1 === d) || (y += "scale(" + p + ", " + d + ") "),
          (m.style[Cr] = y || "translate(0, 0)");
      },
      sn = function (t, e) {
        var r,
          n,
          i,
          s,
          o,
          a = e || this,
          u = a.xPercent,
          l = a.yPercent,
          h = a.x,
          c = a.y,
          f = a.rotation,
          p = a.skewX,
          d = a.skewY,
          _ = a.scaleX,
          g = a.scaleY,
          m = a.target,
          v = a.xOrigin,
          y = a.yOrigin,
          x = a.xOffset,
          b = a.yOffset,
          w = a.forceCSS,
          T = parseFloat(h),
          k = parseFloat(c);
        (f = parseFloat(f)),
          (p = parseFloat(p)),
          (d = parseFloat(d)) && ((p += d = parseFloat(d)), (f += d)),
          f || p
            ? ((f *= lr),
              (p *= lr),
              (r = Math.cos(f) * _),
              (n = Math.sin(f) * _),
              (i = Math.sin(f - p) * -g),
              (s = Math.cos(f - p) * g),
              p &&
                ((d *= lr),
                (o = Math.tan(p - d)),
                (i *= o = Math.sqrt(1 + o * o)),
                (s *= o),
                d &&
                  ((o = Math.tan(d)),
                  (r *= o = Math.sqrt(1 + o * o)),
                  (n *= o))),
              (r = at(r)),
              (n = at(n)),
              (i = at(i)),
              (s = at(s)))
            : ((r = _), (s = g), (n = i = 0)),
          ((T && !~(h + "").indexOf("px")) ||
            (k && !~(c + "").indexOf("px"))) &&
            ((T = Nr(m, "x", h, "px")), (k = Nr(m, "y", c, "px"))),
          (v || y || x || b) &&
            ((T = at(T + v - (v * r + y * i) + x)),
            (k = at(k + y - (v * n + y * s) + b))),
          (u || l) &&
            ((o = m.getBBox()),
            (T = at(T + (u / 100) * o.width)),
            (k = at(k + (l / 100) * o.height))),
          (o =
            "matrix(" +
            r +
            "," +
            n +
            "," +
            i +
            "," +
            s +
            "," +
            T +
            "," +
            k +
            ")"),
          m.setAttribute("transform", o),
          w && (m.style[Cr] = o);
      },
      on = function (t, e, r, n, i, s) {
        var o,
          a,
          u = M(i),
          l = parseFloat(i) * (u && ~i.indexOf("rad") ? ur : 1),
          h = s ? l * s : l - n,
          c = n + h + "deg";
        return (
          u &&
            ("short" === (o = i.split("_")[1]) &&
              (h %= 360) !== h % 180 &&
              (h += h < 0 ? 360 : -360),
            "cw" === o && h < 0
              ? (h = ((h + 36e9) % 360) - 360 * ~~(h / 360))
              : "ccw" === o &&
                h > 0 &&
                (h = ((h - 36e9) % 360) - 360 * ~~(h / 360))),
          (t._pt = a = new Ge(t._pt, e, r, n, h, gr)),
          (a.e = c),
          (a.u = "deg"),
          t._props.push(r),
          a
        );
      },
      an = function (t, e, r) {
        var n,
          i,
          s,
          o,
          a,
          u,
          l,
          h = ir.style,
          c = r._gsap;
        for (i in ((h.cssText =
          getComputedStyle(r).cssText + ";position:absolute;display:block;"),
        (h[Cr] = e),
        tr.body.appendChild(ir),
        (n = Jr(ir, 1)),
        ar))
          (s = c[i]) !== (o = n[i]) &&
            "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
            ((a = Yt(s) !== (l = Yt(o)) ? Nr(r, i, s, l) : parseFloat(s)),
            (u = parseFloat(o)),
            (t._pt = new Ge(t._pt, c, i, a, u - a, _r)),
            (t._pt.u = l || 0),
            t._props.push(i));
        tr.body.removeChild(ir);
      };
    ot("padding,margin,Width,Radius", function (t, e) {
      var r = "Top",
        n = "Right",
        i = "Bottom",
        s = "Left",
        o = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(function (
          r
        ) {
          return e < 2 ? t + r : "border" + r + t;
        });
      Vr[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
        var s, a;
        if (arguments.length < 4)
          return (
            (s = o.map(function (e) {
              return Xr(t, e, r);
            })),
            5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
          );
        (s = (n + "").split(" ")),
          (a = {}),
          o.forEach(function (t, e) {
            return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
          }),
          t.init(e, a, i);
      };
    });
    var un,
      ln,
      hn = {
        name: "css",
        register: Rr,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, r, n, i) {
          var s,
            o,
            a,
            u,
            l,
            h,
            c,
            f,
            p,
            d,
            _,
            g,
            v,
            y,
            x,
            b,
            w,
            T,
            k,
            O = this._props,
            M = t.style;
          for (c in (rr || Rr(), e))
            if (
              "autoRound" !== c &&
              ((o = e[c]), !$[c] || !Pe(c, e, r, n, t, i))
            )
              if (
                ((l = typeof o),
                (h = Vr[c]),
                "function" === l && (l = typeof (o = o.call(r, n, t, i))),
                "string" === l && ~o.indexOf("random(") && (o = Qt(o)),
                h)
              )
                h(this, t, c, o, r) && (x = 1);
              else if ("--" === c.substr(0, 2))
                this.add(
                  M,
                  "setProperty",
                  getComputedStyle(t).getPropertyValue(c) + "",
                  o + "",
                  n,
                  i,
                  0,
                  0,
                  c
                );
              else if ("undefined" !== l) {
                if (
                  ((s = Xr(t, c)),
                  (u = parseFloat(s)),
                  (d =
                    "string" === l && "=" === o.charAt(1)
                      ? +(o.charAt(0) + "1")
                      : 0) && (o = o.substr(2)),
                  (a = parseFloat(o)),
                  c in dr &&
                    ("autoAlpha" === c &&
                      (1 === u &&
                        "hidden" === Xr(t, "visibility") &&
                        a &&
                        (u = 0),
                      Yr(
                        this,
                        M,
                        "visibility",
                        u ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a
                      )),
                    "scale" !== c &&
                      "transform" !== c &&
                      ~(c = dr[c]).indexOf(",") &&
                      (c = c.split(",")[0])),
                  (_ = c in ar))
                )
                  if (
                    (g ||
                      ((v = t._gsap).renderTransform || Jr(t),
                      (y = !1 !== e.smoothOrigin && v.smooth),
                      ((g = this._pt =
                        new Ge(
                          this._pt,
                          M,
                          Cr,
                          0,
                          1,
                          v.renderTransform,
                          v,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === c)
                  )
                    (this._pt = new Ge(
                      this._pt,
                      v,
                      "scaleY",
                      v.scaleY,
                      d ? d * a : a - v.scaleY
                    )),
                      O.push("scaleY", c),
                      (c += "X");
                  else {
                    if ("transformOrigin" === c) {
                      (w = void 0),
                        (T = void 0),
                        (k = void 0),
                        (w = (b = o).split(" ")),
                        (T = w[0]),
                        (k = w[1] || "50%"),
                        ("top" !== T &&
                          "bottom" !== T &&
                          "left" !== k &&
                          "right" !== k) ||
                          ((b = T), (T = k), (k = b)),
                        (w[0] = Wr[T] || T),
                        (w[1] = Wr[k] || k),
                        (o = w.join(" ")),
                        v.svg
                          ? $r(t, o, 0, y, 0, this)
                          : ((p = parseFloat(o.split(" ")[2]) || 0) !==
                              v.zOrigin && Yr(this, v, "zOrigin", v.zOrigin, p),
                            Yr(this, M, c, tn(s), tn(o)));
                      continue;
                    }
                    if ("svgOrigin" === c) {
                      $r(t, o, 1, y, 0, this);
                      continue;
                    }
                    if (c in Gr) {
                      on(this, v, c, u, o, d);
                      continue;
                    }
                    if ("smoothOrigin" === c) {
                      Yr(this, v, "smooth", v.smooth, o);
                      continue;
                    }
                    if ("force3D" === c) {
                      v[c] = o;
                      continue;
                    }
                    if ("transform" === c) {
                      an(this, o, t);
                      continue;
                    }
                  }
                else c in M || (c = Er(c) || c);
                if (
                  _ ||
                  ((a || 0 === a) && (u || 0 === u) && !pr.test(o) && c in M)
                )
                  a || (a = 0),
                    (f = (s + "").substr((u + "").length)) !==
                      (p = Yt(o) || (c in m.units ? m.units[c] : f)) &&
                      (u = Nr(t, c, s, p)),
                    (this._pt = new Ge(
                      this._pt,
                      _ ? v : M,
                      c,
                      u,
                      d ? d * a : a - u,
                      "px" !== p || !1 === e.autoRound || _ ? _r : vr
                    )),
                    (this._pt.u = p || 0),
                    f !== p && ((this._pt.b = s), (this._pt.r = mr));
                else if (c in M) Ur.call(this, t, c, s, o);
                else {
                  if (!(c in t)) {
                    j(c, o);
                    continue;
                  }
                  this.add(t, c, t[c], o, n, i);
                }
                O.push(c);
              }
          x && He(this);
        },
        get: Xr,
        aliases: dr,
        getSetter: function (t, e, r) {
          var n = dr[e];
          return (
            n && n.indexOf(",") < 0 && (e = n),
            e in ar && e !== Sr && (t._gsap.x || Xr(t, "x"))
              ? r && sr === r
                ? "scale" === e
                  ? kr
                  : Tr
                : (sr = r || {}) && ("scale" === e ? Or : Mr)
              : t.style && !P(t.style[e])
              ? br
              : ~e.indexOf("-")
              ? wr
              : Ye(t, e)
          );
        },
        core: { _removeProperty: Ir, _getMatrix: Zr },
      };
    ($e.utils.checkPrefix = Er),
      (ln = ot(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
          (un = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          ar[t] = 1;
        }
      )),
      ot(un, function (t) {
        (m.units[t] = "deg"), (Gr[t] = 1);
      }),
      (dr[ln[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + un),
      ot(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          var e = t.split(":");
          dr[e[1]] = ln[e[0]];
        }
      ),
      ot(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          m.units[t] = "px";
        }
      ),
      $e.registerPlugin(hn);
    var cn,
      fn,
      pn,
      dn,
      _n,
      gn,
      mn,
      vn,
      yn,
      xn,
      bn,
      wn,
      Tn,
      kn,
      On,
      Mn,
      Cn,
      Sn,
      Pn,
      An,
      Dn,
      En,
      Rn,
      Ln,
      zn,
      Bn = $e.registerPlugin(hn) || $e,
      Fn = (Bn.core.Tween, 1),
      In = [],
      Yn = [],
      qn = Date.now,
      Nn = qn(),
      Xn = 0,
      Un = 1,
      Wn = function (t) {
        return t;
      },
      jn = function () {
        return "undefined" != typeof window;
      },
      Vn = function () {
        return cn || (jn() && (cn = window.gsap) && cn.registerPlugin && cn);
      },
      Hn = function (t) {
        return !!~mn.indexOf(t);
      },
      Gn = function (t, e) {
        return ~In.indexOf(t) && In[In.indexOf(t) + 1][e];
      },
      Kn = function (t, e) {
        var r = e.s,
          n = e.sc,
          i = Yn.indexOf(t),
          s = n === li.sc ? 1 : 2;
        return (
          !~i && (i = Yn.push(t) - 1),
          Yn[i + s] ||
            (Yn[i + s] =
              Gn(t, r) ||
              (Hn(t)
                ? n
                : function (e) {
                    return arguments.length ? (t[r] = e) : t[r];
                  }))
        );
      },
      Qn = function (t) {
        return (
          Gn(t, "getBoundingClientRect") ||
          (Hn(t)
            ? function () {
                return (
                  (Hi.width = pn.innerWidth), (Hi.height = pn.innerHeight), Hi
                );
              }
            : function () {
                return fi(t);
              })
        );
      },
      Zn = function (t, e) {
        var r = e.s,
          n = e.d2,
          i = e.d,
          s = e.a;
        return (r = "scroll" + n) && (s = Gn(t, r))
          ? s() - Qn(t)()[i]
          : Hn(t)
          ? Math.max(_n[r], gn[r]) -
            (pn["inner" + n] || _n["client" + n] || gn["client" + n])
          : t[r] - t["offset" + n];
      },
      $n = function (t, e) {
        for (var r = 0; r < Dn.length; r += 3)
          (!e || ~e.indexOf(Dn[r + 1])) && t(Dn[r], Dn[r + 1], Dn[r + 2]);
      },
      Jn = function (t) {
        return "string" == typeof t;
      },
      ti = function (t) {
        return "function" == typeof t;
      },
      ei = function (t) {
        return "number" == typeof t;
      },
      ri = function (t) {
        return "object" == typeof t;
      },
      ni = function (t) {
        return ti(t) && t();
      },
      ii = function (t, e) {
        return function () {
          var r = ni(t),
            n = ni(e);
          return function () {
            ni(r), ni(n);
          };
        };
      },
      si = Math.abs,
      oi = "padding",
      ai = "px",
      ui = {
        s: "scrollLeft",
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: function (t) {
          return arguments.length
            ? pn.scrollTo(t, li.sc())
            : pn.pageXOffset ||
                dn.scrollLeft ||
                _n.scrollLeft ||
                gn.scrollLeft ||
                0;
        },
      },
      li = {
        s: "scrollTop",
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: ui,
        sc: function (t) {
          return arguments.length
            ? pn.scrollTo(ui.sc(), t)
            : pn.pageYOffset ||
                dn.scrollTop ||
                _n.scrollTop ||
                gn.scrollTop ||
                0;
        },
      },
      hi = function (t) {
        return pn.getComputedStyle(t);
      },
      ci = function (t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
      },
      fi = function (t, e) {
        var r =
            e &&
            "matrix(1, 0, 0, 1, 0, 0)" !== hi(t)[Cn] &&
            cn
              .to(t, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              })
              .progress(1),
          n = t.getBoundingClientRect();
        return r && r.progress(0).kill(), n;
      },
      pi = function (t, e) {
        var r = e.d2;
        return t["offset" + r] || t["client" + r] || 0;
      },
      di = function (t, e, r, n) {
        return r.split(",").forEach(function (r) {
          return t(e, r, n);
        });
      },
      _i = function (t, e, r) {
        return t.addEventListener(e, r, { passive: !0 });
      },
      gi = function (t, e, r) {
        return t.removeEventListener(e, r);
      },
      mi = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      vi = { toggleActions: "play", anticipatePin: 0 },
      yi = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      xi = function (t, e) {
        if (Jn(t)) {
          var r = t.indexOf("="),
            n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
          n && (t.indexOf("%") > r && (n *= e / 100), (t = t.substr(0, r - 1))),
            (t =
              n +
              (t in yi
                ? yi[t] * e
                : ~t.indexOf("%")
                ? (parseFloat(t) * e) / 100
                : parseFloat(t) || 0));
        }
        return t;
      },
      bi = function (t, e, r, n, i, s, o) {
        var a = i.startColor,
          u = i.endColor,
          l = i.fontSize,
          h = i.indent,
          c = i.fontWeight,
          f = dn.createElement("div"),
          p = Hn(r) || "fixed" === Gn(r, "pinType"),
          d = -1 !== t.indexOf("scroller"),
          _ = p ? gn : r,
          g = -1 !== t.indexOf("start"),
          m = g ? a : u,
          v =
            "border-color:" +
            m +
            ";font-size:" +
            l +
            ";color:" +
            m +
            ";font-weight:" +
            c +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (v += "position:" + (d && p ? "fixed;" : "absolute;")),
          (d || !p) &&
            (v +=
              (n === li ? "right" : "bottom") +
              ":" +
              (s + parseFloat(h)) +
              "px;"),
          o &&
            (v +=
              "box-sizing:border-box;text-align:left;width:" +
              o.offsetWidth +
              "px;"),
          (f._isStart = g),
          f.setAttribute("class", "gsap-marker-" + t),
          (f.style.cssText = v),
          (f.innerText = e || 0 === e ? t + "-" + e : t),
          _.insertBefore(f, _.children[0]),
          (f._offset = f["offset" + n.op.d2]),
          wi(f, 0, n, g),
          f
        );
      },
      wi = function (t, e, r, n) {
        var i = { display: "block" },
          s = r[n ? "os2" : "p2"],
          o = r[n ? "p2" : "os2"];
        (t._isFlipped = n),
          (i[r.a + "Percent"] = n ? -100 : 0),
          (i[r.a] = n ? 1 : 0),
          (i["border" + s + "Width"] = 1),
          (i["border" + o + "Width"] = 0),
          (i[r.p] = e),
          cn.set(t, i);
      },
      Ti = [],
      ki = {},
      Oi = function () {
        return xn || (xn = yn(qi));
      },
      Mi = function () {
        xn || ((xn = yn(qi)), Xn || Ri("scrollStart"), (Xn = qn()));
      },
      Ci = function () {
        return !On && vn.restart(!0);
      },
      Si = {},
      Pi = [],
      Ai = [],
      Di = function (t) {
        var e,
          r = cn.ticker.frame,
          n = [],
          i = 0;
        if (zn !== r || Fn) {
          for (Bi(); i < Ai.length; i += 4)
            (e = pn.matchMedia(Ai[i]).matches) !== Ai[i + 3] &&
              ((Ai[i + 3] = e),
              e ? n.push(i) : Bi(1, Ai[i]) || (ti(Ai[i + 2]) && Ai[i + 2]()));
          for (zi(), i = 0; i < n.length; i++)
            (e = n[i]), (Ln = Ai[e]), (Ai[e + 2] = Ai[e + 1](t));
          (Ln = 0), Fi(0, 1), (zn = r), Ri("matchMedia");
        }
      },
      Ei = function t() {
        return gi($i, "scrollEnd", t) || Fi(!0);
      },
      Ri = function (t) {
        return (
          (Si[t] &&
            Si[t].map(function (t) {
              return t();
            })) ||
          Pi
        );
      },
      Li = [],
      zi = function (t) {
        for (var e = 0; e < Li.length; e += 4)
          (t && Li[e + 3] !== t) ||
            ((Li[e].style.cssText = Li[e + 1]), (Li[e + 2].uncache = 1));
      },
      Bi = function (t, e) {
        var r;
        for (Sn = 0; Sn < Ti.length; Sn++)
          (r = Ti[Sn]),
            (e && r.media !== e) ||
              (t
                ? r.kill(1)
                : (r.scroll.rec || (r.scroll.rec = r.scroll()), r.revert()));
        zi(e), e || Ri("revert");
      },
      Fi = function (t, e) {
        if (!Xn || t) {
          var r = Ri("refreshInit");
          for (En && $i.sort(), e || Bi(), Sn = 0; Sn < Ti.length; Sn++)
            Ti[Sn].refresh();
          for (
            r.forEach(function (t) {
              return t && t.render && t.render(-1);
            }),
              Sn = Ti.length;
            Sn--;

          )
            Ti[Sn].scroll.rec = 0;
          vn.pause(), Ri("refresh");
        } else _i($i, "scrollEnd", Ei);
      },
      Ii = 0,
      Yi = 1,
      qi = function () {
        var t = Ti.length,
          e = qn(),
          r = e - Nn >= 50,
          n = t && Ti[0].scroll();
        if (
          ((Yi = Ii > n ? -1 : 1),
          (Ii = n),
          r &&
            (Xn && !Mn && e - Xn > 200 && ((Xn = 0), Ri("scrollEnd")),
            (Tn = Nn),
            (Nn = e)),
          Yi < 0)
        ) {
          for (Sn = t; Sn--; ) Ti[Sn] && Ti[Sn].update(0, r);
          Yi = 1;
        } else for (Sn = 0; Sn < t; Sn++) Ti[Sn] && Ti[Sn].update(0, r);
        xn = 0;
      },
      Ni = [
        "left",
        "top",
        "bottom",
        "right",
        "marginBottom",
        "marginRight",
        "marginTop",
        "marginLeft",
        "display",
        "flexShrink",
        "float",
      ],
      Xi = Ni.concat([
        "width",
        "height",
        "boxSizing",
        "maxWidth",
        "maxHeight",
        "position",
        "margin",
        oi,
        oi + "Top",
        oi + "Right",
        oi + "Bottom",
        oi + "Left",
      ]),
      Ui = function (t, e, r, n) {
        if (t.parentNode !== e) {
          for (var i, s = Ni.length, o = e.style, a = t.style; s--; )
            o[(i = Ni[s])] = r[i];
          (o.position = "absolute" === r.position ? "absolute" : "relative"),
            "inline" === r.display && (o.display = "inline-block"),
            (a.bottom = a.right = "auto"),
            (o.overflow = "visible"),
            (o.boxSizing = "border-box"),
            (o.width = pi(t, ui) + ai),
            (o.height = pi(t, li) + ai),
            (o[oi] = a.margin = a.top = a.left = "0"),
            ji(n),
            (a.width = a.maxWidth = r.width),
            (a.height = a.maxHeight = r.height),
            (a[oi] = r[oi]),
            t.parentNode.insertBefore(e, t),
            e.appendChild(t);
        }
      },
      Wi = /([A-Z])/g,
      ji = function (t) {
        if (t)
          for (var e, r, n = t.t.style, i = t.length, s = 0; s < i; s += 2)
            (r = t[s + 1]),
              (e = t[s]),
              r
                ? (n[e] = r)
                : n[e] && n.removeProperty(e.replace(Wi, "-$1").toLowerCase());
      },
      Vi = function (t) {
        for (var e = Xi.length, r = t.style, n = [], i = 0; i < e; i++)
          n.push(Xi[i], r[Xi[i]]);
        return (n.t = t), n;
      },
      Hi = { left: 0, top: 0 },
      Gi = function (t, e, r, n, i, s, o, a, u, l, h, c) {
        if (
          (ti(t) && (t = t(a)),
          Jn(t) &&
            "max" === t.substr(0, 3) &&
            (t = c + ("=" === t.charAt(4) ? xi("0" + t.substr(3), r) : 0)),
          ei(t))
        )
          o && wi(o, r, n, !0);
        else {
          ti(e) && (e = e(a));
          var f,
            p,
            d,
            _ = bn(e)[0] || gn,
            g = fi(_) || {},
            m = t.split(" ");
          (g && (g.left || g.top)) ||
            "none" !== hi(_).display ||
            ((d = _.style.display),
            (_.style.display = "block"),
            (g = fi(_)),
            d ? (_.style.display = d) : _.style.removeProperty("display")),
            (f = xi(m[0], g[n.d])),
            (p = xi(m[1] || "0", r)),
            (t = g[n.p] - u[n.p] - l + f + i - p),
            o && wi(o, p, n, r - p < 20 || (o._isStart && p > 20)),
            (r -= r - p);
        }
        if (s) {
          var v = t + r,
            y = s._isStart;
          (c = "scroll" + n.d2),
            wi(
              s,
              v,
              n,
              (y && v > 20) ||
                (!y && (h ? Math.max(gn[c], _n[c]) : s.parentNode[c]) <= v + 1)
            ),
            h &&
              ((u = fi(o)),
              h && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + ai));
        }
        return Math.round(t);
      },
      Ki = /(?:webkit|moz|length|cssText)/i,
      Qi = function (t, e, r, n) {
        if (t.parentNode !== e) {
          var i,
            s,
            o = t.style;
          if (e === gn) {
            for (i in ((t._stOrig = o.cssText), (s = hi(t))))
              +i ||
                Ki.test(i) ||
                !s[i] ||
                "string" != typeof o[i] ||
                "0" === i ||
                (o[i] = s[i]);
            (o.top = r), (o.left = n);
          } else o.cssText = t._stOrig;
          (cn.core.getCache(t).uncache = 1), e.appendChild(t);
        }
      },
      Zi = function (t, e) {
        var r,
          n,
          i = Kn(t, e),
          s = "_scroll" + e.p2;
        return (
          (t[s] = i),
          function e(o, a, u, l, h) {
            var c = e.tween,
              f = a.onComplete,
              p = {};
            return (
              c && c.kill(),
              (r = Math.round(u)),
              (a[s] = o),
              (a.modifiers = p),
              (p[s] = function (t) {
                return (
                  (t = Math.round(i())) !== r && t !== n
                    ? (c.kill(), (e.tween = 0))
                    : (t = u + l * c.ratio + h * c.ratio * c.ratio),
                  (n = r),
                  (r = Math.round(t))
                );
              }),
              (a.onComplete = function () {
                (e.tween = 0), f && f.call(c);
              }),
              (c = e.tween = cn.to(t, a))
            );
          }
        );
      };
    ui.op = li;
    var $i = (function () {
      function t(e, r) {
        fn ||
          t.register(cn) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          this.init(e, r);
      }
      return (
        (t.prototype.init = function (e, r) {
          if (((this.progress = 0), this.vars && this.kill(1), Un)) {
            var n,
              i,
              s,
              o,
              a,
              u,
              l,
              h,
              c,
              f,
              p,
              d,
              _,
              g,
              m,
              v,
              y,
              x,
              b,
              w,
              T,
              k,
              O,
              M,
              C,
              S,
              P,
              A,
              D,
              E,
              R,
              L,
              z,
              B,
              F,
              I,
              Y,
              q,
              N = (e = ci(
                Jn(e) || ei(e) || e.nodeType ? { trigger: e } : e,
                vi
              )).horizontal
                ? ui
                : li,
              X = e,
              U = X.onUpdate,
              W = X.toggleClass,
              j = X.id,
              V = X.onToggle,
              H = X.onRefresh,
              G = X.scrub,
              K = X.trigger,
              Q = X.pin,
              Z = X.pinSpacing,
              $ = X.invalidateOnRefresh,
              J = X.anticipatePin,
              tt = X.onScrubComplete,
              et = X.onSnapComplete,
              rt = X.once,
              nt = X.snap,
              it = X.pinReparent,
              st = !G && 0 !== G,
              ot = bn(e.scroller || pn)[0],
              at = cn.core.getCache(ot),
              ut = Hn(ot),
              lt =
                "pinType" in e
                  ? "fixed" === e.pinType
                  : ut || "fixed" === Gn(ot, "pinType"),
              ht = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
              ct = st && e.toggleActions.split(" "),
              ft = "markers" in e ? e.markers : vi.markers,
              pt = ut ? 0 : parseFloat(hi(ot)["border" + N.p2 + "Width"]) || 0,
              dt = this,
              _t =
                e.onRefreshInit &&
                function () {
                  return e.onRefreshInit(dt);
                },
              gt = (function (t, e, r) {
                var n = r.d,
                  i = r.d2,
                  s = r.a;
                return (s = Gn(t, "getBoundingClientRect"))
                  ? function () {
                      return s()[n];
                    }
                  : function () {
                      return (e ? pn["inner" + i] : t["client" + i]) || 0;
                    };
              })(ot, ut, N),
              mt = (function (t, e) {
                return !e || ~In.indexOf(t)
                  ? Qn(t)
                  : function () {
                      return Hi;
                    };
              })(ot, ut);
            (dt.media = Ln),
              (J *= 45),
              Ti.push(dt),
              (dt.scroller = ot),
              (dt.scroll = Kn(ot, N)),
              (a = dt.scroll()),
              (dt.vars = e),
              (r = r || e.animation),
              "refreshPriority" in e && (En = 1),
              (at.tweenScroll = at.tweenScroll || {
                top: Zi(ot, li),
                left: Zi(ot, ui),
              }),
              (dt.tweenTo = n = at.tweenScroll[N.p]),
              r &&
                ((r.vars.lazy = !1),
                r._initted ||
                  (!1 !== r.vars.immediateRender &&
                    !1 !== e.immediateRender &&
                    r.render(0, !0, !0)),
                (dt.animation = r.pause()),
                (r.scrollTrigger = dt),
                (L = ei(G) && G) &&
                  (R = cn.to(r, {
                    ease: "power3",
                    duration: L,
                    onComplete: function () {
                      return tt && tt(dt);
                    },
                  })),
                (D = 0),
                j || (j = r.vars.id)),
              nt &&
                (ri(nt) || (nt = { snapTo: nt }),
                cn.set(ut ? [gn, _n] : ot, { scrollBehavior: "auto" }),
                (s = ti(nt.snapTo)
                  ? nt.snapTo
                  : "labels" === nt.snapTo
                  ? (function (t) {
                      return function (e) {
                        var r,
                          n = [],
                          i = t.labels,
                          s = t.duration();
                        for (r in i) n.push(i[r] / s);
                        return cn.utils.snap(n, e);
                      };
                    })(r)
                  : cn.utils.snap(nt.snapTo)),
                (z = nt.duration || { min: 0.1, max: 2 }),
                (z = ri(z) ? wn(z.min, z.max) : wn(z, z)),
                (B = cn
                  .delayedCall(nt.delay || L / 2 || 0.1, function () {
                    if (Math.abs(dt.getVelocity()) < 10 && !Mn) {
                      var t = r && !st ? r.totalProgress() : dt.progress,
                        e = ((t - E) / (qn() - Tn)) * 1e3 || 0,
                        i = (si(e / 2) * e) / 0.185,
                        o = t + i,
                        a = wn(0, 1, s(o, dt)),
                        u = dt.scroll(),
                        c = Math.round(l + a * g),
                        f = n.tween;
                      if (u <= h && u >= l && c !== u) {
                        if (f && !f._initted && f.data <= Math.abs(c - u))
                          return;
                        n(
                          c,
                          {
                            duration: z(
                              si(
                                (0.185 * Math.max(si(o - t), si(a - t))) /
                                  e /
                                  0.05 || 0
                              )
                            ),
                            ease: nt.ease || "power3",
                            data: Math.abs(c - u),
                            onComplete: function () {
                              (D = E =
                                r && !st ? r.totalProgress() : dt.progress),
                                et && et(dt);
                            },
                          },
                          u,
                          i * g,
                          c - u - i * g
                        );
                      }
                    } else dt.isActive && B.restart(!0);
                  })
                  .pause())),
              j && (ki[j] = dt),
              (K = dt.trigger = bn(K || Q)[0]),
              (Q = !0 === Q ? K : bn(Q)[0]),
              Jn(W) && (W = { targets: K, className: W }),
              Q &&
                (!1 === Z ||
                  "margin" === Z ||
                  (Z = !(!Z && "flex" === hi(Q.parentNode).display) && oi),
                (dt.pin = Q),
                !1 !== e.force3D && cn.set(Q, { force3D: !0 }),
                (i = cn.core.getCache(Q)).spacer
                  ? (m = i.pinState)
                  : ((i.spacer = x = dn.createElement("div")),
                    x.setAttribute(
                      "class",
                      "pin-spacer" + (j ? " pin-spacer-" + j : "")
                    ),
                    (i.pinState = m = Vi(Q))),
                (dt.spacer = x = i.spacer),
                (A = hi(Q)),
                (M = A[Z + N.os2]),
                (w = cn.getProperty(Q)),
                (T = cn.quickSetter(Q, N.a, ai)),
                Ui(Q, x, A),
                (y = Vi(Q))),
              ft &&
                ((_ = ri(ft) ? ci(ft, mi) : mi),
                (p = bi("scroller-start", j, ot, N, _, 0)),
                (d = bi("scroller-end", j, ot, N, _, 0, p)),
                (b = p["offset" + N.op.d2]),
                (c = bi("start", j, ot, N, _, b)),
                (f = bi("end", j, ot, N, _, b)),
                lt ||
                  (((q = ot).style.position =
                    "absolute" === hi(q).position ? "absolute" : "relative"),
                  cn.set([p, d], { force3D: !0 }),
                  (S = cn.quickSetter(p, N.a, ai)),
                  (P = cn.quickSetter(d, N.a, ai)))),
              (dt.revert = function (t) {
                var e = !1 !== t || !dt.enabled,
                  n = On;
                e !== o &&
                  (e &&
                    ((I = Math.max(dt.scroll(), dt.scroll.rec || 0)),
                    (F = dt.progress),
                    (Y = r && r.progress())),
                  c &&
                    [c, f, p, d].forEach(function (t) {
                      return (t.style.display = e ? "none" : "block");
                    }),
                  e && (On = 1),
                  dt.update(e),
                  (On = n),
                  Q &&
                    (e
                      ? (function (t, e, r) {
                          if ((ji(r), t.parentNode === e)) {
                            var n = e.parentNode;
                            n && (n.insertBefore(t, e), n.removeChild(e));
                          }
                        })(Q, x, m)
                      : (!it || !dt.isActive) && Ui(Q, x, hi(Q), C)),
                  (o = e));
              }),
              (dt.refresh = function (n) {
                if (!On && dt.enabled)
                  if (Q && n && Xn) _i(t, "scrollEnd", Ei);
                  else {
                    (On = 1),
                      R && R.kill(),
                      $ && r && r.progress(0).invalidate(),
                      o || dt.revert();
                    for (
                      var i,
                        s,
                        _,
                        b,
                        T,
                        M,
                        S,
                        P,
                        A = gt(),
                        D = mt(),
                        E = Zn(ot, N),
                        L = 0,
                        z = 0,
                        B = e.end,
                        q = e.endTrigger || K,
                        X =
                          e.start ||
                          (0 === e.start ? 0 : Q || !K ? "0 0" : "0 100%"),
                        U = (K && Math.max(0, Ti.indexOf(dt))) || 0,
                        W = U;
                      W--;

                    )
                      (S = Ti[W].pin) && (S === K || S === Q) && Ti[W].revert();
                    for (
                      l =
                        Gi(X, K, A, N, dt.scroll(), c, p, dt, D, pt, lt, E) ||
                        (Q ? -0.001 : 0),
                        ti(B) && (B = B(dt)),
                        Jn(B) &&
                          !B.indexOf("+=") &&
                          (~B.indexOf(" ")
                            ? (B = (Jn(X) ? X.split(" ")[0] : "") + B)
                            : ((L = xi(B.substr(2), A)),
                              (B = Jn(X) ? X : l + L),
                              (q = K))),
                        h =
                          Math.max(
                            l,
                            Gi(
                              B || (q ? "100% 0" : E),
                              q,
                              A,
                              N,
                              dt.scroll() + L,
                              f,
                              d,
                              dt,
                              D,
                              pt,
                              lt,
                              E
                            )
                          ) || -0.001,
                        g = h - l || ((l -= 0.01) && 0.001),
                        L = 0,
                        W = U;
                      W--;

                    )
                      (S = (M = Ti[W]).pin) &&
                        M.start - M._pinPush < l &&
                        ((i = M.end - M.start),
                        S === K && (L += i),
                        S === Q && (z += i));
                    if (
                      ((l += L),
                      (h += L),
                      (dt._pinPush = z),
                      c && L && (((i = {})[N.a] = "+=" + L), cn.set([c, f], i)),
                      Q)
                    )
                      (i = hi(Q)),
                        (b = N === li),
                        (_ = dt.scroll()),
                        (k = parseFloat(w(N.a)) + z),
                        !E &&
                          h > 1 &&
                          ((ut ? gn : ot).style["overflow-" + N.a] = "scroll"),
                        Ui(Q, x, i),
                        (y = Vi(Q)),
                        (s = fi(Q, !0)),
                        (P = lt && Kn(ot, b ? ui : li)()),
                        Z &&
                          (((C = [Z + N.os2, g + z + ai]).t = x),
                          (W = Z === oi ? pi(Q, N) + g + z : 0) &&
                            C.push(N.d, W + ai),
                          ji(C),
                          lt && dt.scroll(I)),
                        lt &&
                          (((T = {
                            top: s.top + (b ? _ - l : P) + ai,
                            left: s.left + (b ? P : _ - l) + ai,
                            boxSizing: "border-box",
                            position: "fixed",
                          }).width = T.maxWidth =
                            Math.ceil(s.width) + ai),
                          (T.height = T.maxHeight = Math.ceil(s.height) + ai),
                          (T.margin =
                            T.marginTop =
                            T.marginRight =
                            T.marginBottom =
                            T.marginLeft =
                              "0"),
                          (T[oi] = i[oi]),
                          (T[oi + "Top"] = i[oi + "Top"]),
                          (T[oi + "Right"] = i[oi + "Right"]),
                          (T[oi + "Bottom"] = i[oi + "Bottom"]),
                          (T[oi + "Left"] = i[oi + "Left"]),
                          (v = (function (t, e, r) {
                            for (
                              var n, i = [], s = t.length, o = r ? 8 : 0;
                              o < s;
                              o += 2
                            )
                              (n = t[o]), i.push(n, n in e ? e[n] : t[o + 1]);
                            return (i.t = t.t), i;
                          })(m, T, it))),
                        r
                          ? (r.progress(1, !0),
                            (O = w(N.a) - k + g + z),
                            g !== O && v.splice(v.length - 2, 2),
                            r.progress(0, !0))
                          : (O = g);
                    else if (K && dt.scroll())
                      for (s = K.parentNode; s && s !== gn; )
                        s._pinOffset &&
                          ((l -= s._pinOffset), (h -= s._pinOffset)),
                          (s = s.parentNode);
                    for (W = 0; W < U; W++)
                      (M = Ti[W].pin) &&
                        (M === K || M === Q) &&
                        Ti[W].revert(!1);
                    (dt.start = l),
                      (dt.end = h),
                      (a = u = dt.scroll()) < I && dt.scroll(I),
                      dt.revert(!1),
                      (On = 0),
                      Y && st && r.progress(Y, !0),
                      F !== dt.progress &&
                        (R && r.totalProgress(F, !0),
                        (dt.progress = F),
                        dt.update()),
                      Q && Z && (x._pinOffset = Math.round(dt.progress * O)),
                      H && H(dt);
                  }
              }),
              (dt.getVelocity = function () {
                return ((dt.scroll() - u) / (qn() - Tn)) * 1e3 || 0;
              }),
              (dt.update = function (t, e) {
                var i,
                  s,
                  o,
                  c,
                  f,
                  d = dt.scroll(),
                  _ = t ? 0 : (d - l) / g,
                  m = _ < 0 ? 0 : _ > 1 ? 1 : _ || 0,
                  b = dt.progress;
                if (
                  (e &&
                    ((u = a),
                    (a = d),
                    nt && ((E = D), (D = r && !st ? r.totalProgress() : m))),
                  J &&
                    !m &&
                    Q &&
                    !On &&
                    !Fn &&
                    Xn &&
                    l < d + ((d - u) / (qn() - Tn)) * J &&
                    (m = 1e-4),
                  m !== b && dt.enabled)
                ) {
                  if (
                    ((c =
                      (f =
                        (i = dt.isActive = !!m && m < 1) !== (!!b && b < 1)) ||
                      !!m != !!b),
                    (dt.direction = m > b ? 1 : -1),
                    (dt.progress = m),
                    st ||
                      (!R || On || Fn
                        ? r && r.totalProgress(m, !!On)
                        : ((R.vars.totalProgress = m),
                          R.invalidate().restart())),
                    Q)
                  )
                    if ((t && Z && (x.style[Z + N.os2] = M), lt)) {
                      if (c) {
                        if (
                          ((o = !t && m > b && h + 1 > d && d + 1 >= Zn(ot, N)),
                          it)
                        )
                          if (t || (!i && !o)) Qi(Q, x);
                          else {
                            var w = fi(Q, !0),
                              C = d - l;
                            Qi(
                              Q,
                              gn,
                              w.top + (N === li ? C : 0) + ai,
                              w.left + (N === li ? 0 : C) + ai
                            );
                          }
                        ji(i || o ? v : y),
                          (O !== g && m < 1 && i) ||
                            T(k + (1 !== m || o ? 0 : O));
                      }
                    } else T(k + O * m);
                  nt && !n.tween && !On && !Fn && B.restart(!0),
                    W &&
                      (f || (rt && m && (m < 1 || !Rn))) &&
                      bn(W.targets).forEach(function (t) {
                        return t.classList[i || rt ? "add" : "remove"](
                          W.className
                        );
                      }),
                    U && !st && !t && U(dt),
                    c && !On
                      ? ((s = m && !b ? 0 : 1 === m ? 1 : 1 === b ? 2 : 3),
                        st &&
                          ((o =
                            (!f && "none" !== ct[s + 1] && ct[s + 1]) || ct[s]),
                          r &&
                            ("complete" === o || "reset" === o || o in r) &&
                            ("complete" === o
                              ? r.pause().totalProgress(1)
                              : "reset" === o
                              ? r.restart(!0).pause()
                              : r[o]()),
                          U && U(dt)),
                        (!f && Rn) ||
                          (V && f && V(dt),
                          ht[s] && ht[s](dt),
                          rt && (1 === m ? dt.kill(!1, 1) : (ht[s] = 0)),
                          f || (ht[(s = 1 === m ? 1 : 3)] && ht[s](dt))))
                      : st && U && !On && U(dt);
                }
                P && (S(d + (p._isFlipped ? 1 : 0)), P(d));
              }),
              (dt.enable = function () {
                dt.enabled ||
                  ((dt.enabled = !0),
                  _i(ot, "resize", Ci),
                  _i(ot, "scroll", Mi),
                  _t && _i(t, "refreshInit", _t),
                  r && r.add
                    ? cn.delayedCall(0.01, function () {
                        return l || h || dt.refresh();
                      }) &&
                      (g = 0.01) &&
                      (l = h = 0)
                    : dt.refresh());
              }),
              (dt.disable = function (e, r) {
                if (
                  dt.enabled &&
                  (!1 !== e && dt.revert(),
                  (dt.enabled = dt.isActive = !1),
                  r || (R && R.pause()),
                  (I = 0),
                  i && (i.uncache = 1),
                  _t && gi(t, "refreshInit", _t),
                  B && (B.pause(), n.tween && n.tween.kill() && (n.tween = 0)),
                  !ut)
                ) {
                  for (var s = Ti.length; s--; )
                    if (Ti[s].scroller === ot && Ti[s] !== dt) return;
                  gi(ot, "resize", Ci), gi(ot, "scroll", Mi);
                }
              }),
              (dt.kill = function (t, e) {
                dt.disable(t, e), j && delete ki[j];
                var n = Ti.indexOf(dt);
                Ti.splice(n, 1),
                  n === Sn && Yi > 0 && Sn--,
                  r &&
                    ((r.scrollTrigger = null),
                    t && r.render(-1),
                    e || r.kill()),
                  c &&
                    [c, f, p, d].forEach(function (t) {
                      return t.parentNode.removeChild(t);
                    }),
                  i && (i.uncache = 1);
              }),
              dt.enable();
          } else this.update = this.refresh = this.kill = Wn;
        }),
        (t.register = function (e) {
          if (
            !fn &&
            ((cn = e || Vn()),
            jn() &&
              window.document &&
              ((pn = window),
              (dn = document),
              (_n = dn.documentElement),
              (gn = dn.body)),
            cn &&
              ((bn = cn.utils.toArray),
              (wn = cn.utils.clamp),
              cn.core.globals("ScrollTrigger", t),
              gn))
          ) {
            (yn =
              pn.requestAnimationFrame ||
              function (t) {
                return setTimeout(t, 16);
              }),
              _i(pn, "mousewheel", Mi),
              (mn = [pn, dn, _n, gn]),
              _i(dn, "scroll", Mi);
            var r,
              n = gn.style,
              i = n.borderTop;
            (n.borderTop = "1px solid #000"),
              (r = fi(gn)),
              (li.m = Math.round(r.top + li.sc()) || 0),
              (ui.m = Math.round(r.left + ui.sc()) || 0),
              i ? (n.borderTop = i) : n.removeProperty("border-top"),
              (kn = setInterval(Oi, 200)),
              cn.delayedCall(0.5, function () {
                return (Fn = 0);
              }),
              _i(dn, "touchcancel", Wn),
              _i(gn, "touchstart", Wn),
              di(_i, dn, "pointerdown,touchstart,mousedown", function () {
                return (Mn = 1);
              }),
              di(_i, dn, "pointerup,touchend,mouseup", function () {
                return (Mn = 0);
              }),
              (Cn = cn.utils.checkPrefix("transform")),
              Xi.push(Cn),
              (fn = qn()),
              (vn = cn.delayedCall(0.2, Fi).pause()),
              (Dn = [
                dn,
                "visibilitychange",
                function () {
                  var t = pn.innerWidth,
                    e = pn.innerHeight;
                  dn.hidden
                    ? ((Pn = t), (An = e))
                    : (Pn === t && An === e) || Ci();
                },
                dn,
                "DOMContentLoaded",
                Fi,
                pn,
                "load",
                function () {
                  return Xn || Fi();
                },
                pn,
                "resize",
                Ci,
              ]),
              $n(_i);
          }
          return fn;
        }),
        (t.defaults = function (t) {
          for (var e in t) vi[e] = t[e];
        }),
        (t.kill = function () {
          (Un = 0),
            Ti.slice(0).forEach(function (t) {
              return t.kill(1);
            });
        }),
        (t.config = function (t) {
          "limitCallbacks" in t && (Rn = !!t.limitCallbacks);
          var e = t.syncInterval;
          (e && clearInterval(kn)) || ((kn = e) && setInterval(Oi, e)),
            "autoRefreshEvents" in t &&
              ($n(gi) || $n(_i, t.autoRefreshEvents || "none"));
        }),
        (t.scrollerProxy = function (t, e) {
          var r = bn(t)[0];
          Hn(r) ? In.unshift(pn, e, gn, e, _n, e) : In.unshift(r, e);
        }),
        (t.matchMedia = function (t) {
          var e, r, n, i, s;
          for (r in t)
            (n = Ai.indexOf(r)),
              (i = t[r]),
              (Ln = r),
              "all" === r
                ? i()
                : (e = pn.matchMedia(r)) &&
                  (e.matches && (s = i()),
                  ~n
                    ? ((Ai[n + 1] = ii(Ai[n + 1], i)),
                      (Ai[n + 2] = ii(Ai[n + 2], s)))
                    : ((n = Ai.length),
                      Ai.push(r, i, s),
                      e.addListener
                        ? e.addListener(Di)
                        : e.addEventListener("change", Di)),
                  (Ai[n + 3] = e.matches)),
              (Ln = 0);
          return Ai;
        }),
        (t.clearMatchMedia = function (t) {
          t || (Ai.length = 0), (t = Ai.indexOf(t)) >= 0 && Ai.splice(t, 4);
        }),
        t
      );
    })();
    ($i.version = "3.5.1"),
      ($i.saveStyles = function (t) {
        return t
          ? bn(t).forEach(function (t) {
              var e = Li.indexOf(t);
              e >= 0 && Li.splice(e, 4),
                Li.push(t, t.style.cssText, cn.core.getCache(t), Ln);
            })
          : Li;
      }),
      ($i.revert = function (t, e) {
        return Bi(!t, e);
      }),
      ($i.create = function (t, e) {
        return new $i(t, e);
      }),
      ($i.refresh = function (t) {
        return t ? Ci() : Fi(!0);
      }),
      ($i.update = qi),
      ($i.maxScroll = function (t, e) {
        return Zn(t, e ? ui : li);
      }),
      ($i.getScrollFunc = function (t, e) {
        return Kn(bn(t)[0], e ? ui : li);
      }),
      ($i.getById = function (t) {
        return ki[t];
      }),
      ($i.getAll = function () {
        return Ti.slice(0);
      }),
      ($i.isScrolling = function () {
        return !!Xn;
      }),
      ($i.addEventListener = function (t, e) {
        var r = Si[t] || (Si[t] = []);
        ~r.indexOf(e) || r.push(e);
      }),
      ($i.removeEventListener = function (t, e) {
        var r = Si[t],
          n = r && r.indexOf(e);
        n >= 0 && r.splice(n, 1);
      }),
      ($i.batch = function (t, e) {
        var r,
          n = [],
          i = {},
          s = e.interval || 0.016,
          o = e.batchMax || 1e9,
          a = function (t, e) {
            var r = [],
              n = [],
              i = cn
                .delayedCall(s, function () {
                  e(r, n), (r = []), (n = []);
                })
                .pause();
            return function (t) {
              r.length || i.restart(!0),
                r.push(t.trigger),
                n.push(t),
                o <= r.length && i.progress(1);
            };
          };
        for (r in e)
          i[r] =
            "on" === r.substr(0, 2) && ti(e[r]) && "onRefreshInit" !== r
              ? a(0, e[r])
              : e[r];
        return (
          ti(o) &&
            ((o = o()),
            _i($i, "refresh", function () {
              return (o = e.batchMax());
            })),
          bn(t).forEach(function (t) {
            var e = {};
            for (r in i) e[r] = i[r];
            (e.trigger = t), n.push($i.create(e));
          }),
          n
        );
      }),
      ($i.sort = function (t) {
        return Ti.sort(
          t ||
            function (t, e) {
              return (
                -1e6 * (t.vars.refreshPriority || 0) +
                t.start -
                (e.start + -1e6 * (e.vars.refreshPriority || 0))
              );
            }
        );
      }),
      Vn() && cn.registerPlugin($i);
    var Ji,
      ts,
      es,
      rs,
      ns,
      is,
      ss,
      os = function () {
        return "undefined" != typeof window;
      },
      as = function () {
        return Ji || (os() && (Ji = window.gsap) && Ji.registerPlugin && Ji);
      },
      us = function (t) {
        return "string" == typeof t;
      },
      ls = function (t, e) {
        var r = "x" === e ? "Width" : "Height",
          n = "scroll" + r,
          i = "client" + r;
        return t === es || t === rs || t === ns
          ? Math.max(rs[n], ns[n]) - (es["inner" + r] || rs[i] || ns[i])
          : t[n] - t["offset" + r];
      },
      hs = function (t, e) {
        var r = "scroll" + ("x" === e ? "Left" : "Top");
        return (
          t === es &&
            (null != t.pageXOffset
              ? (r = "page" + e.toUpperCase() + "Offset")
              : (t = null != rs[r] ? rs : ns)),
          function () {
            return t[r];
          }
        );
      },
      cs = function (t, e) {
        var r = is(t)[0].getBoundingClientRect(),
          n = !e || e === es || e === ns,
          i = n
            ? {
                top:
                  rs.clientTop -
                  (es.pageYOffset || rs.scrollTop || ns.scrollTop || 0),
                left:
                  rs.clientLeft -
                  (es.pageXOffset || rs.scrollLeft || ns.scrollLeft || 0),
              }
            : e.getBoundingClientRect(),
          s = { x: r.left - i.left, y: r.top - i.top };
        return !n && e && ((s.x += hs(e, "x")()), (s.y += hs(e, "y")())), s;
      },
      fs = function (t, e, r, n, i) {
        return isNaN(t) || "object" == typeof t
          ? us(t) && "=" === t.charAt(1)
            ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + n - i
            : "max" === t
            ? ls(e, r) - i
            : Math.min(ls(e, r), cs(t, e)[r] - i)
          : parseFloat(t) - i;
      },
      ps = function () {
        (Ji = as()),
          os() &&
            Ji &&
            document.body &&
            ((es = window),
            (ns = document.body),
            (rs = document.documentElement),
            (is = Ji.utils.toArray),
            Ji.config({ autoKillThreshold: 7 }),
            (ss = Ji.config()),
            (ts = 1));
      },
      ds = {
        version: "3.5.1",
        name: "scrollTo",
        rawVars: 1,
        register: function (t) {
          (Ji = t), ps();
        },
        init: function (t, e, r, n, i) {
          ts || ps();
          (this.isWin = t === es),
            (this.target = t),
            (this.tween = r),
            "object" != typeof e
              ? us((e = { y: e }).y) &&
                "max" !== e.y &&
                "=" !== e.y.charAt(1) &&
                (e.x = e.y)
              : e.nodeType && (e = { y: e, x: e }),
            (this.vars = e),
            (this.autoKill = !!e.autoKill),
            (this.getX = hs(t, "x")),
            (this.getY = hs(t, "y")),
            (this.x = this.xPrev = this.getX()),
            (this.y = this.yPrev = this.getY()),
            null != e.x
              ? (this.add(
                  this,
                  "x",
                  this.x,
                  fs(e.x, t, "x", this.x, e.offsetX || 0),
                  n,
                  i,
                  Math.round
                ),
                this._props.push("scrollTo_x"))
              : (this.skipX = 1),
            null != e.y
              ? (this.add(
                  this,
                  "y",
                  this.y,
                  fs(e.y, t, "y", this.y, e.offsetY || 0),
                  n,
                  i,
                  Math.round
                ),
                this._props.push("scrollTo_y"))
              : (this.skipY = 1);
        },
        render: function (t, e) {
          for (
            var r,
              n,
              i,
              s,
              o,
              a = e._pt,
              u = e.target,
              l = e.tween,
              h = e.autoKill,
              c = e.xPrev,
              f = e.yPrev,
              p = e.isWin;
            a;

          )
            a.r(t, a.d), (a = a._next);
          (r = p || !e.skipX ? e.getX() : c),
            (i = (n = p || !e.skipY ? e.getY() : f) - f),
            (s = r - c),
            (o = ss.autoKillThreshold),
            e.x < 0 && (e.x = 0),
            e.y < 0 && (e.y = 0),
            h &&
              (!e.skipX && (s > o || s < -o) && r < ls(u, "x") && (e.skipX = 1),
              !e.skipY && (i > o || i < -o) && n < ls(u, "y") && (e.skipY = 1),
              e.skipX &&
                e.skipY &&
                (l.kill(),
                e.vars.onAutoKill &&
                  e.vars.onAutoKill.apply(l, e.vars.onAutoKillParams || []))),
            p
              ? es.scrollTo(e.skipX ? r : e.x, e.skipY ? n : e.y)
              : (e.skipY || (u.scrollTop = e.y),
                e.skipX || (u.scrollLeft = e.x)),
            (e.xPrev = e.x),
            (e.yPrev = e.y);
        },
        kill: function (t) {
          var e = "scrollTo" === t;
          (e || "scrollTo_x" === t) && (this.skipX = 1),
            (e || "scrollTo_y" === t) && (this.skipY = 1);
        },
      };
    (ds.max = ls),
      (ds.getOffset = cs),
      (ds.buildGetter = hs),
      as() && Ji.registerPlugin(ds);
    var _s = function (t, e, r) {
      if (
        ("scrollRestoration" in history &&
          (history.scrollRestoration = "manual"),
        document.body.classList.contains("home"))
      ) {
        window && window.scroll(0, 0), t.registerPlugin(e), t.registerPlugin(r);
        var n = window.matchMedia("(max-width: 767px)"),
          i = window.matchMedia("(max-width: 1023px)"),
          s = window.innerHeight,
          o = document.querySelector(".cover");
        o && (o.style.height = s + 70 + "px");
        var a = document.querySelector(".cover__image");
        a && a.complete && 0 !== a.naturalHeight
          ? u()
          : (a.addEventListener("load", u),
            a.addEventListener("error", function () {
              alert("error");
            }));
      }
      function u() {
        !(function () {
          var r = document.querySelector(".intro").getBoundingClientRect(),
            i = document
              .querySelector(".section--first")
              .getBoundingClientRect(),
            o = Math.abs(r.height + i.height / 2),
            u = t.timeline();
          u.to(a, { opacity: 0.3, y: -50, duration: 5 }),
            e.create({
              trigger: ".cover__image-outer",
              animation: u,
              start: "top top",
              end: "+=" + o,
              scrub: !0,
              pin: ".cover__image-outer",
            });
          var l = "-25%";
          n.matches && (l = "-10%");
          t.to(".intro__bottom", {
            scrollTrigger: {
              trigger: ".intro__bottom-outer",
              start: "top top",
              end: "+=" + s,
              scrub: !0,
            },
            y: l,
            duration: 4,
            delay: 0,
          });
        })(),
          setTimeout(function () {
            !(function () {
              function r(r, n) {
                var i = t.timeline(),
                  s = r.querySelector(".section-year--mobile"),
                  o = r.querySelector(".section-lines-mobile__line--1"),
                  a = r.querySelector(".section-lines-mobile__line--2"),
                  u = r.querySelector(".section-lines-mobile__line--3"),
                  l = r.querySelector(".section-lines-mobile__line--4"),
                  h = r.querySelector(".section-lines-mobile__line--5"),
                  c = r.querySelectorAll(".js_lazy-image-mobile"),
                  f = c.length,
                  p = 0;
                function d() {
                  var t, c, d;
                  ++p === f &&
                    ((t = parseInt(getComputedStyle(r).height)),
                    (c = parseInt(getComputedStyle(s).height)),
                    (d = t - 50 - c - 50),
                    (o.style.top = c + "px"),
                    (a.style.top = c + 50 + "px"),
                    (u.style.top = c + 50 + 1 + "px"),
                    (l.style.top = c + 50 + d + "px"),
                    (h.style.top = c + 50 + d + "px"),
                    i.to(o, { height: "1px", duration: 0.05 }),
                    i.call(function () {
                      1 === e.getById(n).direction
                        ? s.classList.add("active")
                        : s.classList.remove("active");
                    }),
                    i.to(o, { height: "52px", duration: 0.25 }),
                    i.call(function () {
                      1 === e.getById(n).direction
                        ? r.classList.add("active")
                        : r.classList.remove("active"),
                        1 === n &&
                          (1 === e.getById(n).direction
                            ? document.body.classList.add("scrolled")
                            : document.body.classList.remove("scrolled"));
                    }),
                    i.to(a, { width: "50%", duration: 0.5 }),
                    i.to(u, { height: d + "px", duration: 2 }),
                    i.to(l, { width: "50%", duration: 0.5 }),
                    i.to(h, { height: "52px", duration: 0.25 }),
                    e.create({
                      id: n,
                      animation: i,
                      trigger: o,
                      start: "top 75%",
                      end: "+=" + r.getBoundingClientRect().height,
                      scrub: !0,
                    }));
                }
                c.forEach(function (t) {
                  t.complete && 0 !== t.naturalHeight
                    ? d()
                    : t.addEventListener("load", d, !1);
                });
              }
              document.querySelectorAll(".section").forEach(function (n, s) {
                var o = n.querySelector(".section-year--desktop");
                if (o)
                  i.matches
                    ? r(n, s)
                    : (function (r, n, i) {
                        var s = t.timeline(),
                          o = r.querySelector(
                            ".section-lines-desktop__horizontal-line"
                          ),
                          a = r.querySelector(
                            ".section-lines-desktop__vertical-line--top"
                          ),
                          u = r.querySelector(
                            ".section-lines-desktop__vertical-line--bottom"
                          ),
                          l = r.querySelector(".section__graphics"),
                          h = parseInt(getComputedStyle(r).height),
                          c = parseInt(getComputedStyle(n).height),
                          f = (h - c) / 2 - 20;
                        (u.style.top = f + 20 + c + 20 + "px"),
                          s.to(a, { height: 10, duration: 0.05 }),
                          s.call(function () {
                            1 === e.getById(i).direction
                              ? r.classList.add("active")
                              : r.classList.remove("active"),
                              1 === i &&
                                (1 === e.getById(i).direction
                                  ? document.body.classList.add("scrolled")
                                  : document.body.classList.remove("scrolled"));
                          }),
                          s.to(a, { height: f, duration: 1 }),
                          s.call(function () {
                            1 === e.getById(i).direction
                              ? n.classList.add("active")
                              : n.classList.remove("active");
                          }),
                          s.to(u, { height: f, duration: 2, delay: 0.5 }),
                          s.to(o, { width: "100%", duration: 1 }),
                          s.to(l, { y: -20, duration: 4, delay: -4 }),
                          e.create({
                            id: i,
                            animation: s,
                            trigger: a,
                            start: "top 50%",
                            end: "+=" + r.getBoundingClientRect().height,
                            scrub: !0,
                          });
                      })(n, o, s);
                else {
                  var a = t.timeline(),
                    u = n.querySelector(
                      ".section-lines-desktop__vertical-line"
                    ),
                    l = n.querySelector(
                      ".section-lines-desktop__horizontal-line"
                    );
                  a.to(u, { height: "100%", duration: 4 }),
                    0 === s
                      ? a.to(l, { width: "50%", duration: 1 })
                      : a.to(l, { width: "100%", duration: 1 }),
                    e.create({
                      animation: a,
                      trigger: u,
                      start: "top 50%",
                      end: "+=" + n.getBoundingClientRect().height,
                      scrub: !0,
                    });
                }
              });
            })();
          }, 100),
          setTimeout(function () {
            document.body.classList.remove("page-not-loaded");
          }, 300);
      }
    };
    var gs = function (t, e) {
      t.registerPlugin(e);
      for (
        var r = document.querySelectorAll(".gs_to-top"), n = 0;
        n < r.length;
        n++
      )
        r[n].addEventListener("click", function (e) {
          e.preventDefault(), t.to(window, { duration: 1, scrollTo: 0 });
        });
    };
    var ms = function () {
      window.matchMedia("(max-width: 1024px)").matches &&
        document.querySelectorAll(".languages-menu").forEach(function (t) {
          t.addEventListener("click", function (t) {
            t.target.classList.contains("open")
              ? t.target.classList.remove("open")
              : t.target.classList.add("open");
          });
        });
    };
    (function () {
      window.NodeList &&
        !NodeList.prototype.forEach &&
        (NodeList.prototype.forEach = Array.prototype.forEach);
    })(),
      _s(Bn, $i, ds),
      gs(Bn, ds),
      ms();
  },
  13: function (t, e) {},
  18: function (t, e) {},
});
