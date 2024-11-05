"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1366, 1761], {
    81523: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "BailoutToCSR", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let r = n(18993);
        function i(e) {
            let {reason: t, children: n} = e;
            if ("undefined" == typeof window)
                throw new r.BailoutToCSRError(t);
            return n
        }
    },
    70049: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "PreloadCss", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let r = n(57437)
          , i = n(20544);
        function a(e) {
            let {moduleIds: t} = e;
            if ("undefined" != typeof window)
                return null;
            let n = (0,
            i.getExpectedRequestStore)("next/dynamic css")
              , a = [];
            if (n.reactLoadableManifest && t) {
                let e = n.reactLoadableManifest;
                for (let n of t) {
                    if (!e[n])
                        continue;
                    let t = e[n].files.filter(e => e.endsWith(".css"));
                    a.push(...t)
                }
            }
            return 0 === a.length ? null : (0,
            r.jsx)(r.Fragment, {
                children: a.map(e => (0,
                r.jsx)("link", {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: n.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style"
                }, e))
            })
        }
    },
    51772: function(e, t, n) {
        var r = n(2265)
          , i = r && "object" == typeof r && "default"in r ? r : {
            default: r
        };
        !function(e) {
            if (!e || "undefined" == typeof window)
                return;
            let t = document.createElement("style");
            t.setAttribute("type", "text/css"),
            t.innerHTML = e,
            document.head.appendChild(t)
        }('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');
        let a = r.forwardRef(function(e, t) {
            let {style: n={}, className: a="", autoFill: o=!1, play: l=!0, pauseOnHover: s=!1, pauseOnClick: u=!1, direction: c="left", speed: d=50, delay: f=0, loop: m=0, gradient: h=!1, gradientColor: v="white", gradientWidth: p=200, onFinish: y, onCycleComplete: g, onMount: w, children: b} = e
              , [E,x] = r.useState(0)
              , [R,k] = r.useState(0)
              , [C,M] = r.useState(1)
              , [O,S] = r.useState(!1)
              , j = r.useRef(null)
              , N = t || j
              , _ = r.useRef(null)
              , q = r.useCallback( () => {
                if (_.current && N.current) {
                    let e = N.current.getBoundingClientRect()
                      , t = _.current.getBoundingClientRect()
                      , n = e.width
                      , r = t.width;
                    ("up" === c || "down" === c) && (n = e.height,
                    r = t.height),
                    o && n && r ? M(r < n ? Math.ceil(n / r) : 1) : M(1),
                    x(n),
                    k(r)
                }
            }
            , [o, N, c]);
            r.useEffect( () => {
                if (O && (q(),
                _.current && N.current)) {
                    let e = new ResizeObserver( () => q());
                    return e.observe(N.current),
                    e.observe(_.current),
                    () => {
                        e && e.disconnect()
                    }
                }
            }
            , [q, N, O]),
            r.useEffect( () => {
                q()
            }
            , [q, b]),
            r.useEffect( () => {
                S(!0)
            }
            , []),
            r.useEffect( () => {
                "function" == typeof w && w()
            }
            , []);
            let A = r.useMemo( () => o ? R * C / d : R < E ? E / d : R / d, [o, E, R, C, d])
              , I = r.useMemo( () => Object.assign(Object.assign({}, n), {
                "--pause-on-hover": !l || s ? "paused" : "running",
                "--pause-on-click": !l || s && !u || u ? "paused" : "running",
                "--width": "up" === c || "down" === c ? "100vh" : "100%",
                "--transform": "up" === c ? "rotate(-90deg)" : "down" === c ? "rotate(90deg)" : "none"
            }), [n, l, s, u, c])
              , P = r.useMemo( () => ({
                "--gradient-color": v,
                "--gradient-width": "number" == typeof p ? "".concat(p, "px") : p
            }), [v, p])
              , V = r.useMemo( () => ({
                "--play": l ? "running" : "paused",
                "--direction": "left" === c ? "normal" : "reverse",
                "--duration": "".concat(A, "s"),
                "--delay": "".concat(f, "s"),
                "--iteration-count": m ? "".concat(m) : "infinite",
                "--min-width": o ? "auto" : "100%"
            }), [l, c, A, f, m, o])
              , B = r.useMemo( () => ({
                "--transform": "up" === c ? "rotate(90deg)" : "down" === c ? "rotate(-90deg)" : "none"
            }), [c])
              , z = r.useCallback(e => [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map( (e, t) => i.default.createElement(r.Fragment, {
                key: t
            }, r.Children.map(b, e => i.default.createElement("div", {
                style: B,
                className: "rfm-child"
            }, e)))), [B, b]);
            return O ? i.default.createElement("div", {
                ref: N,
                style: I,
                className: "rfm-marquee-container " + a
            }, h && i.default.createElement("div", {
                style: P,
                className: "rfm-overlay"
            }), i.default.createElement("div", {
                className: "rfm-marquee",
                style: V,
                onAnimationIteration: g,
                onAnimationEnd: y
            }, i.default.createElement("div", {
                className: "rfm-initial-child-container",
                ref: _
            }, r.Children.map(b, e => i.default.createElement("div", {
                style: B,
                className: "rfm-child"
            }, e))), z(C - 1)), i.default.createElement("div", {
                className: "rfm-marquee",
                style: V
            }, z(C))) : null
        });
        t.Z = a
    },
    28819: function(e, t, n) {
        n.d(t, {
            YD: function() {
                return u
            }
        });
        var r = n(2265)
          , i = Object.defineProperty
          , a = new Map
          , o = new WeakMap
          , l = 0
          , s = void 0;
        function u() {
            var e;
            let {threshold: t, delay: n, trackVisibility: i, rootMargin: u, root: c, triggerOnce: d, skip: f, initialInView: m, fallbackInView: h, onChange: v} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , [p,y] = r.useState(null)
              , g = r.useRef()
              , [w,b] = r.useState({
                inView: !!m,
                entry: void 0
            });
            g.current = v,
            r.useEffect( () => {
                let e;
                if (!f && p)
                    return e = function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                          , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s;
                        if (void 0 === window.IntersectionObserver && void 0 !== r) {
                            let i = e.getBoundingClientRect();
                            return t(r, {
                                isIntersecting: r,
                                target: e,
                                intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
                                time: 0,
                                boundingClientRect: i,
                                intersectionRect: i,
                                rootBounds: i
                            }),
                            () => {}
                        }
                        let {id: i, observer: u, elements: c} = function(e) {
                            let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                                var n;
                                return "".concat(t, "_").concat("root" === t ? (n = e.root) ? (o.has(n) || (l += 1,
                                o.set(n, l.toString())),
                                o.get(n)) : "0" : e[t])
                            }
                            ).toString()
                              , n = a.get(t);
                            if (!n) {
                                let r;
                                let i = new Map
                                  , o = new IntersectionObserver(t => {
                                    t.forEach(t => {
                                        var n;
                                        let a = t.isIntersecting && r.some(e => t.intersectionRatio >= e);
                                        e.trackVisibility && void 0 === t.isVisible && (t.isVisible = a),
                                        null == (n = i.get(t.target)) || n.forEach(e => {
                                            e(a, t)
                                        }
                                        )
                                    }
                                    )
                                }
                                ,e);
                                r = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]),
                                n = {
                                    id: t,
                                    observer: o,
                                    elements: i
                                },
                                a.set(t, n)
                            }
                            return n
                        }(n)
                          , d = c.get(e) || [];
                        return c.has(e) || c.set(e, d),
                        d.push(t),
                        u.observe(e),
                        function() {
                            d.splice(d.indexOf(t), 1),
                            0 === d.length && (c.delete(e),
                            u.unobserve(e)),
                            0 === c.size && (u.disconnect(),
                            a.delete(i))
                        }
                    }(p, (t, n) => {
                        b({
                            inView: t,
                            entry: n
                        }),
                        g.current && g.current(t, n),
                        n.isIntersecting && d && e && (e(),
                        e = void 0)
                    }
                    , {
                        root: c,
                        rootMargin: u,
                        threshold: t,
                        trackVisibility: i,
                        delay: n
                    }, h),
                    () => {
                        e && e()
                    }
            }
            , [Array.isArray(t) ? t.toString() : t, p, c, u, d, f, i, h, n]);
            let E = null == (e = w.entry) ? void 0 : e.target
              , x = r.useRef();
            p || !E || d || f || x.current === E || (x.current = E,
            b({
                inView: !!m,
                entry: void 0
            }));
            let R = [y, w.inView, w.entry];
            return R.ref = R[0],
            R.inView = R[1],
            R.entry = R[2],
            R
        }
        r.Component
    }
}]);
