"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[532], {
    43281: function(e, t, n) {
        n.d(t, {
            PrismicNextImage: function() {
                return s
            }
        });
        var r = n(57437)
          , o = n(33145);
        let l = e => e.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`)
          , u = (e, t) => {
            let n = new URL(e);
            for (let e in t) {
                let r = l(e)
                  , o = t[e];
                void 0 === o ? n.searchParams.delete(r) : Array.isArray(o) ? n.searchParams.set(r, o.join(",")) : n.searchParams.set(r, `${o}`)
            }
            let r = n.searchParams.get("s");
            return r && (n.searchParams.delete("s"),
            n.searchParams.append("s", r)),
            n.toString()
        }
          , i = e => {
            let t = {
                fit: new URL(e.src).searchParams.get("fit") || "max",
                w: e.width,
                h: void 0
            };
            return e.quality && (t.q = e.quality),
            u(e.src, t)
        }
        ;
        var a = n(47339);
        let c = e => {
            if ("number" == typeof e || void 0 === e)
                return e;
            {
                let t = Number.parseInt(e);
                if (Number.isNaN(t))
                    return;
                return t
            }
        }
          , s = e => {
            let {field: t, imgixParams: n={}, alt: l, fallbackAlt: s, fill: d, width: f, height: p, fallback: m=null, ...v} = e;
            if (!(0,
            a.S)(t))
                return (0,
                r.jsx)(r.Fragment, {
                    children: m
                });
            {
                for (let e in n)
                    null === n[e] && (n[e] = void 0);
                let e = u(t.url, n)
                  , a = t.dimensions.width / t.dimensions.height
                  , m = c(f)
                  , h = c(p)
                  , g = null != m ? m : t.dimensions.width
                  , E = null != h ? h : t.dimensions.height;
                null != m && null == h ? E = m / a : null == m && null != h && (g = h * a);
                let y = null != l ? l : t.alt || s
                  , w = o.default;
                return "default"in w && (w = w.default),
                (0,
                r.jsx)(w, {
                    src: e,
                    width: d ? void 0 : g,
                    height: d ? void 0 : E,
                    alt: y,
                    fill: d,
                    loader: i,
                    ...v
                })
            }
        }
    },
    46624: function(e, t, n) {
        let r, o, l, u, i, a;
        n.d(t, {
            V: function() {
                return ed
            }
        });
        var c, s, d = n(2265), f = n.t(d, 2), p = n(90945), m = n(13323), v = n(96802), h = n(93394), g = n(99417), E = n(40048), y = n(72238), w = n(93689), b = n(18369);
        function T(e, t) {
            let n = (0,
            d.useRef)([])
              , r = (0,
            m.z)(e);
            (0,
            d.useEffect)( () => {
                let e = [...n.current];
                for (let[o,l] of t.entries())
                    if (n.current[o] !== l) {
                        let o = r(t, e);
                        return n.current = t,
                        o
                    }
            }
            , [r, ...t])
        }
        var A = n(38198);
        let O = [];
        !function(e) {
            function t() {
                "loading" !== document.readyState && (e(),
                document.removeEventListener("DOMContentLoaded", t))
            }
            "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("DOMContentLoaded", t),
            t())
        }( () => {
            function e(e) {
                e.target instanceof HTMLElement && e.target !== document.body && O[0] !== e.target && (O.unshift(e.target),
                (O = O.filter(e => null != e && e.isConnected)).splice(10))
            }
            window.addEventListener("click", e, {
                capture: !0
            }),
            window.addEventListener("mousedown", e, {
                capture: !0
            }),
            window.addEventListener("focus", e, {
                capture: !0
            }),
            document.body.addEventListener("click", e, {
                capture: !0
            }),
            document.body.addEventListener("mousedown", e, {
                capture: !0
            }),
            document.body.addEventListener("focus", e, {
                capture: !0
            })
        }
        );
        var P = n(37105)
          , L = n(24536)
          , S = n(96822)
          , C = n(27847);
        function N(e) {
            if (!e)
                return new Set;
            if ("function" == typeof e)
                return new Set(e());
            let t = new Set;
            for (let n of e.current)
                n.current instanceof HTMLElement && t.add(n.current);
            return t
        }
        var M = ((r = M || {})[r.None = 1] = "None",
        r[r.InitialFocus = 2] = "InitialFocus",
        r[r.TabLock = 4] = "TabLock",
        r[r.FocusLock = 8] = "FocusLock",
        r[r.RestoreFocus = 16] = "RestoreFocus",
        r[r.All = 30] = "All",
        r);
        let R = Object.assign((0,
        C.yV)(function(e, t) {
            let n = (0,
            d.useRef)(null)
              , r = (0,
            w.T)(n, t)
              , {initialFocus: o, containers: l, features: u=30, ...i} = e;
            (0,
            y.H)() || (u = 1);
            let a = (0,
            E.i)(n);
            !function(e, t) {
                let {ownerDocument: n} = e
                  , r = function() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0]
                      , t = (0,
                    d.useRef)(O.slice());
                    return T( (e, n) => {
                        let[r] = e
                          , [o] = n;
                        !0 === o && !1 === r && (0,
                        S.Y)( () => {
                            t.current.splice(0)
                        }
                        ),
                        !1 === o && !0 === r && (t.current = O.slice())
                    }
                    , [e, O, t]),
                    (0,
                    m.z)( () => {
                        var e;
                        return null != (e = t.current.find(e => null != e && e.isConnected)) ? e : null
                    }
                    )
                }(t);
                T( () => {
                    t || (null == n ? void 0 : n.activeElement) === (null == n ? void 0 : n.body) && (0,
                    P.C5)(r())
                }
                , [t]),
                (0,
                g.L)( () => {
                    t && (0,
                    P.C5)(r())
                }
                )
            }({
                ownerDocument: a
            }, !!(16 & u));
            let c = function(e, t) {
                let {ownerDocument: n, container: r, initialFocus: o} = e
                  , l = (0,
                d.useRef)(null)
                  , u = (0,
                h.t)();
                return T( () => {
                    if (!t)
                        return;
                    let e = r.current;
                    e && (0,
                    S.Y)( () => {
                        if (!u.current)
                            return;
                        let t = null == n ? void 0 : n.activeElement;
                        if (null != o && o.current) {
                            if ((null == o ? void 0 : o.current) === t) {
                                l.current = t;
                                return
                            }
                        } else if (e.contains(t)) {
                            l.current = t;
                            return
                        }
                        null != o && o.current ? (0,
                        P.C5)(o.current) : (0,
                        P.jA)(e, P.TO.First) === P.fE.Error && console.warn("There are no focusable elements inside the <FocusTrap />"),
                        l.current = null == n ? void 0 : n.activeElement
                    }
                    )
                }
                , [t]),
                l
            }({
                ownerDocument: a,
                container: n,
                initialFocus: o
            }, !!(2 & u));
            !function(e, t) {
                let {ownerDocument: n, container: r, containers: o, previousActiveElement: l} = e
                  , u = (0,
                h.t)();
                (0,
                v.O)(null == n ? void 0 : n.defaultView, "focus", e => {
                    if (!t || !u.current)
                        return;
                    let n = N(o);
                    r.current instanceof HTMLElement && n.add(r.current);
                    let i = l.current;
                    if (!i)
                        return;
                    let a = e.target;
                    a && a instanceof HTMLElement ? k(n, a) ? (l.current = a,
                    (0,
                    P.C5)(a)) : (e.preventDefault(),
                    e.stopPropagation(),
                    (0,
                    P.C5)(i)) : (0,
                    P.C5)(l.current)
                }
                , !0)
            }({
                ownerDocument: a,
                container: n,
                containers: l,
                previousActiveElement: c
            }, !!(8 & u));
            let s = (0,
            b.l)()
              , f = (0,
            m.z)(e => {
                let t = n.current;
                t && (0,
                L.E)(s.current, {
                    [b.N.Forwards]: () => {
                        (0,
                        P.jA)(t, P.TO.First, {
                            skipElements: [e.relatedTarget]
                        })
                    }
                    ,
                    [b.N.Backwards]: () => {
                        (0,
                        P.jA)(t, P.TO.Last, {
                            skipElements: [e.relatedTarget]
                        })
                    }
                })
            }
            )
              , M = (0,
            p.G)()
              , R = (0,
            d.useRef)(!1);
            return d.createElement(d.Fragment, null, !!(4 & u) && d.createElement(A._, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: f,
                features: A.A.Focusable
            }), (0,
            C.sY)({
                ourProps: {
                    ref: r,
                    onKeyDown(e) {
                        "Tab" == e.key && (R.current = !0,
                        M.requestAnimationFrame( () => {
                            R.current = !1
                        }
                        ))
                    },
                    onBlur(e) {
                        let t = N(l);
                        n.current instanceof HTMLElement && t.add(n.current);
                        let r = e.relatedTarget;
                        r instanceof HTMLElement && "true" !== r.dataset.headlessuiFocusGuard && (k(t, r) || (R.current ? (0,
                        P.jA)(n.current, (0,
                        L.E)(s.current, {
                            [b.N.Forwards]: () => P.TO.Next,
                            [b.N.Backwards]: () => P.TO.Previous
                        }) | P.TO.WrapAround, {
                            relativeTo: e.target
                        }) : e.target instanceof HTMLElement && (0,
                        P.C5)(e.target)))
                    }
                },
                theirProps: i,
                defaultTag: "div",
                name: "FocusTrap"
            }), !!(4 & u) && d.createElement(A._, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: f,
                features: A.A.Focusable
            }))
        }), {
            features: M
        });
        function k(e, t) {
            for (let n of e)
                if (n.contains(t))
                    return !0;
            return !1
        }
        var F = n(31094);
        let {useState: D, useEffect: x, useLayoutEffect: H, useDebugValue: j} = f;
        "undefined" != typeof window && void 0 !== window.document && window.document.createElement;
        let I = f.useSyncExternalStore;
        var Y = n(64518)
          , V = n(16015)
          , _ = n(52108);
        let q = (c = () => new Map,
        s = {
            PUSH(e, t) {
                var n;
                let r = null != (n = this.get(e)) ? n : {
                    doc: e,
                    count: 0,
                    d: (0,
                    V.k)(),
                    meta: new Set
                };
                return r.count++,
                r.meta.add(t),
                this.set(e, r),
                this
            },
            POP(e, t) {
                let n = this.get(e);
                return n && (n.count--,
                n.meta.delete(t)),
                this
            },
            SCROLL_PREVENT(e) {
                let t, {doc: n, d: r, meta: o} = e, l = {
                    doc: n,
                    d: r,
                    meta: function(e) {
                        let t = {};
                        for (let n of e)
                            Object.assign(t, n(t));
                        return t
                    }(o)
                }, u = [(0,
                _.gn)() ? {
                    before(e) {
                        let {doc: t, d: n, meta: r} = e;
                        function o(e) {
                            return r.containers.flatMap(e => e()).some(t => t.contains(e))
                        }
                        n.microTask( () => {
                            var e;
                            if ("auto" !== window.getComputedStyle(t.documentElement).scrollBehavior) {
                                let e = (0,
                                V.k)();
                                e.style(t.documentElement, "scrollBehavior", "auto"),
                                n.add( () => n.microTask( () => e.dispose()))
                            }
                            let r = null != (e = window.scrollY) ? e : window.pageYOffset
                              , l = null;
                            n.addEventListener(t, "click", e => {
                                if (e.target instanceof HTMLElement)
                                    try {
                                        let n = e.target.closest("a");
                                        if (!n)
                                            return;
                                        let {hash: r} = new URL(n.href)
                                          , u = t.querySelector(r);
                                        u && !o(u) && (l = u)
                                    } catch (e) {}
                            }
                            , !0),
                            n.addEventListener(t, "touchstart", e => {
                                if (e.target instanceof HTMLElement) {
                                    if (o(e.target)) {
                                        let t = e.target;
                                        for (; t.parentElement && o(t.parentElement); )
                                            t = t.parentElement;
                                        n.style(t, "overscrollBehavior", "contain")
                                    } else
                                        n.style(e.target, "touchAction", "none")
                                }
                            }
                            ),
                            n.addEventListener(t, "touchmove", e => {
                                if (e.target instanceof HTMLElement) {
                                    if (o(e.target)) {
                                        let t = e.target;
                                        for (; t.parentElement && "" !== t.dataset.headlessuiPortal && !(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth); )
                                            t = t.parentElement;
                                        "" === t.dataset.headlessuiPortal && e.preventDefault()
                                    } else
                                        e.preventDefault()
                                }
                            }
                            , {
                                passive: !1
                            }),
                            n.add( () => {
                                var e;
                                r !== (null != (e = window.scrollY) ? e : window.pageYOffset) && window.scrollTo(0, r),
                                l && l.isConnected && (l.scrollIntoView({
                                    block: "nearest"
                                }),
                                l = null)
                            }
                            )
                        }
                        )
                    }
                } : {}, {
                    before(e) {
                        var n;
                        let {doc: r} = e
                          , o = r.documentElement;
                        t = (null != (n = r.defaultView) ? n : window).innerWidth - o.clientWidth
                    },
                    after(e) {
                        let {doc: n, d: r} = e
                          , o = n.documentElement
                          , l = o.clientWidth - o.offsetWidth
                          , u = t - l;
                        r.style(o, "paddingRight", "".concat(u, "px"))
                    }
                }, {
                    before(e) {
                        let {doc: t, d: n} = e;
                        n.style(t.documentElement, "overflow", "hidden")
                    }
                }];
                u.forEach(e => {
                    let {before: t} = e;
                    return null == t ? void 0 : t(l)
                }
                ),
                u.forEach(e => {
                    let {after: t} = e;
                    return null == t ? void 0 : t(l)
                }
                )
            },
            SCROLL_ALLOW(e) {
                let {d: t} = e;
                t.dispose()
            },
            TEARDOWN(e) {
                let {doc: t} = e;
                this.delete(t)
            }
        },
        o = c(),
        l = new Set,
        {
            getSnapshot: () => o,
            subscribe: e => (l.add(e),
            () => l.delete(e)),
            dispatch(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                let u = s[e].call(o, ...n);
                u && (o = u,
                l.forEach(e => e()))
            }
        });
        q.subscribe( () => {
            let e = q.getSnapshot()
              , t = new Map;
            for (let[n] of e)
                t.set(n, n.documentElement.style.overflow);
            for (let n of e.values()) {
                let e = "hidden" === t.get(n.doc)
                  , r = 0 !== n.count;
                (r && !e || !r && e) && q.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
                0 === n.count && q.dispatch("TEARDOWN", n)
            }
        }
        );
        var z = n(17684);
        let B = new Map
          , U = new Map;
        function W(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            (0,
            Y.e)( () => {
                var n;
                if (!t)
                    return;
                let r = "function" == typeof e ? e() : e.current;
                if (!r)
                    return;
                let o = null != (n = U.get(r)) ? n : 0;
                return U.set(r, o + 1),
                0 !== o || (B.set(r, {
                    "aria-hidden": r.getAttribute("aria-hidden"),
                    inert: r.inert
                }),
                r.setAttribute("aria-hidden", "true"),
                r.inert = !0),
                function() {
                    var e;
                    if (!r)
                        return;
                    let t = null != (e = U.get(r)) ? e : 1;
                    if (1 === t ? U.delete(r) : U.set(r, t - 1),
                    1 !== t)
                        return;
                    let n = B.get(r);
                    n && (null === n["aria-hidden"] ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", n["aria-hidden"]),
                    r.inert = n.inert,
                    B.delete(r))
                }
            }
            , [e, t])
        }
        var G = n(32539)
          , K = n(28851)
          , Z = n(37863)
          , J = n(27988);
        let X = (0,
        d.createContext)( () => {}
        );
        X.displayName = "StackContext";
        var $ = ((u = $ || {})[u.Add = 0] = "Add",
        u[u.Remove = 1] = "Remove",
        u);
        function Q(e) {
            let {children: t, onUpdate: n, type: r, element: o, enabled: l} = e
              , u = (0,
            d.useContext)(X)
              , i = (0,
            m.z)(function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r];
                null == n || n(...t),
                u(...t)
            });
            return (0,
            Y.e)( () => {
                let e = void 0 === l || !0 === l;
                return e && i(0, r, o),
                () => {
                    e && i(1, r, o)
                }
            }
            , [i, r, o, l]),
            d.createElement(X.Provider, {
                value: i
            }, t)
        }
        var ee = n(47634);
        let et = (0,
        d.createContext)(null)
          , en = Object.assign((0,
        C.yV)(function(e, t) {
            let n = (0,
            z.M)()
              , {id: r="headlessui-description-".concat(n), ...o} = e
              , l = function e() {
                let t = (0,
                d.useContext)(et);
                if (null === t) {
                    let t = Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(t, e),
                    t
                }
                return t
            }()
              , u = (0,
            w.T)(t);
            (0,
            Y.e)( () => l.register(r), [r, l.register]);
            let i = {
                ref: u,
                ...l.props,
                id: r
            };
            return (0,
            C.sY)({
                ourProps: i,
                theirProps: o,
                slot: l.slot || {},
                defaultTag: "p",
                name: l.name || "Description"
            })
        }), {});
        var er = n(37388)
          , eo = ((i = eo || {})[i.Open = 0] = "Open",
        i[i.Closed = 1] = "Closed",
        i)
          , el = ((a = el || {})[a.SetTitleId = 0] = "SetTitleId",
        a);
        let eu = {
            0: (e, t) => e.titleId === t.id ? e : {
                ...e,
                titleId: t.id
            }
        }
          , ei = (0,
        d.createContext)(null);
        function ea(e) {
            let t = (0,
            d.useContext)(ei);
            if (null === t) {
                let t = Error("<".concat(e, " /> is missing a parent <Dialog /> component."));
                throw Error.captureStackTrace && Error.captureStackTrace(t, ea),
                t
            }
            return t
        }
        function ec(e, t) {
            return (0,
            L.E)(t.type, eu, e, t)
        }
        ei.displayName = "DialogContext";
        let es = C.AN.RenderStrategy | C.AN.Static
          , ed = Object.assign((0,
        C.yV)(function(e, t) {
            let n = (0,
            z.M)()
              , {id: r="headlessui-dialog-".concat(n), open: o, onClose: l, initialFocus: u, role: i="dialog", __demoMode: a=!1, ...c} = e
              , [s,f] = (0,
            d.useState)(0)
              , p = (0,
            d.useRef)(!1);
            i = "dialog" === i || "alertdialog" === i ? i : (p.current || (p.current = !0,
            console.warn("Invalid role [".concat(i, "] passed to <Dialog />. Only `dialog` and and `alertdialog` are supported. Using `dialog` instead."))),
            "dialog");
            let h = (0,
            Z.oJ)();
            void 0 === o && null !== h && (o = (h & Z.ZM.Open) === Z.ZM.Open);
            let g = (0,
            d.useRef)(null)
              , b = (0,
            w.T)(g, t)
              , T = (0,
            E.i)(g)
              , A = e.hasOwnProperty("open") || null !== h
              , O = e.hasOwnProperty("onClose");
            if (!A && !O)
                throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
            if (!A)
                throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
            if (!O)
                throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
            if ("boolean" != typeof o)
                throw Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(o));
            if ("function" != typeof l)
                throw Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(l));
            let P = o ? 0 : 1
              , [S,N] = (0,
            d.useReducer)(ec, {
                titleId: null,
                descriptionId: null,
                panelRef: (0,
                d.createRef)()
            })
              , M = (0,
            m.z)( () => l(!1))
              , k = (0,
            m.z)(e => N({
                type: 0,
                id: e
            }))
              , D = !!(0,
            y.H)() && !a && 0 === P
              , x = s > 1
              , H = null !== (0,
            d.useContext)(ei)
              , [j,V] = (0,
            F.k)()
              , {resolveContainers: _, mainTreeNodeRef: B, MainTreeNode: U} = (0,
            K.v)({
                portals: j,
                defaultContainers: [{
                    get current() {
                        var X;
                        return null != (X = S.panelRef.current) ? X : g.current
                    }
                }]
            })
              , ee = null !== h && (h & Z.ZM.Closing) === Z.ZM.Closing
              , en = !H && !ee && D;
            W((0,
            d.useCallback)( () => {
                var e, t;
                return null != (t = Array.from(null != (e = null == T ? void 0 : T.querySelectorAll("body > *")) ? e : []).find(e => "headlessui-portal-root" !== e.id && e.contains(B.current) && e instanceof HTMLElement)) ? t : null
            }
            , [B]), en);
            let eo = !!x || D;
            W((0,
            d.useCallback)( () => {
                var e, t;
                return null != (t = Array.from(null != (e = null == T ? void 0 : T.querySelectorAll("[data-headlessui-portal]")) ? e : []).find(e => e.contains(B.current) && e instanceof HTMLElement)) ? t : null
            }
            , [B]), eo);
            let el = !(!D || x);
            (0,
            G.O)(_, e => {
                e.preventDefault(),
                M()
            }
            , el);
            let eu = !(x || 0 !== P);
            (0,
            v.O)(null == T ? void 0 : T.defaultView, "keydown", e => {
                eu && (e.defaultPrevented || e.key === er.R.Escape && (e.preventDefault(),
                e.stopPropagation(),
                M()))
            }
            ),
            function(e, t) {
                var n;
                let r, o, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => [document.body];
                n = e => {
                    var t;
                    return {
                        containers: [...null != (t = e.containers) ? t : [], l]
                    }
                }
                ,
                r = I(q.subscribe, q.getSnapshot, q.getSnapshot),
                (o = e ? r.get(e) : void 0) && o.count,
                (0,
                Y.e)( () => {
                    if (!(!e || !t))
                        return q.dispatch("PUSH", e, n),
                        () => q.dispatch("POP", e, n)
                }
                , [t, e])
            }(T, !(ee || 0 !== P || H), _),
            (0,
            d.useEffect)( () => {
                if (0 !== P || !g.current)
                    return;
                let e = new ResizeObserver(e => {
                    for (let t of e) {
                        let e = t.target.getBoundingClientRect();
                        0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height && M()
                    }
                }
                );
                return e.observe(g.current),
                () => e.disconnect()
            }
            , [P, g, M]);
            let[ea,ed] = function() {
                let[e,t] = (0,
                d.useState)([]);
                return [e.length > 0 ? e.join(" ") : void 0, (0,
                d.useMemo)( () => function(e) {
                    let n = (0,
                    m.z)(e => (t(t => [...t, e]),
                    () => t(t => {
                        let n = t.slice()
                          , r = n.indexOf(e);
                        return -1 !== r && n.splice(r, 1),
                        n
                    }
                    )))
                      , r = (0,
                    d.useMemo)( () => ({
                        register: n,
                        slot: e.slot,
                        name: e.name,
                        props: e.props
                    }), [n, e.slot, e.name, e.props]);
                    return d.createElement(et.Provider, {
                        value: r
                    }, e.children)
                }
                , [t])]
            }()
              , ef = (0,
            d.useMemo)( () => [{
                dialogState: P,
                close: M,
                setTitleId: k
            }, S], [P, S, M, k])
              , ep = (0,
            d.useMemo)( () => ({
                open: 0 === P
            }), [P])
              , em = {
                ref: b,
                id: r,
                role: i,
                "aria-modal": 0 === P || void 0,
                "aria-labelledby": S.titleId,
                "aria-describedby": ea
            };
            return d.createElement(Q, {
                type: "Dialog",
                enabled: 0 === P,
                element: g,
                onUpdate: (0,
                m.z)( (e, t) => {
                    "Dialog" === t && (0,
                    L.E)(e, {
                        [$.Add]: () => f(e => e + 1),
                        [$.Remove]: () => f(e => e - 1)
                    })
                }
                )
            }, d.createElement(J.O, {
                force: !0
            }, d.createElement(F.h, null, d.createElement(ei.Provider, {
                value: ef
            }, d.createElement(F.h.Group, {
                target: g
            }, d.createElement(J.O, {
                force: !1
            }, d.createElement(ed, {
                slot: ep,
                name: "Dialog.Description"
            }, d.createElement(R, {
                initialFocus: u,
                containers: _,
                features: D ? (0,
                L.E)(x ? "parent" : "leaf", {
                    parent: R.features.RestoreFocus,
                    leaf: R.features.All & ~R.features.FocusLock
                }) : R.features.None
            }, d.createElement(V, null, (0,
            C.sY)({
                ourProps: em,
                theirProps: c,
                slot: ep,
                defaultTag: "div",
                features: es,
                visible: 0 === P,
                name: "Dialog"
            }))))))))), d.createElement(U, null))
        }), {
            Backdrop: (0,
            C.yV)(function(e, t) {
                let n = (0,
                z.M)()
                  , {id: r="headlessui-dialog-backdrop-".concat(n), ...o} = e
                  , [{dialogState: l},u] = ea("Dialog.Backdrop")
                  , i = (0,
                w.T)(t);
                (0,
                d.useEffect)( () => {
                    if (null === u.panelRef.current)
                        throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                }
                , [u.panelRef]);
                let a = (0,
                d.useMemo)( () => ({
                    open: 0 === l
                }), [l]);
                return d.createElement(J.O, {
                    force: !0
                }, d.createElement(F.h, null, (0,
                C.sY)({
                    ourProps: {
                        ref: i,
                        id: r,
                        "aria-hidden": !0
                    },
                    theirProps: o,
                    slot: a,
                    defaultTag: "div",
                    name: "Dialog.Backdrop"
                })))
            }),
            Panel: (0,
            C.yV)(function(e, t) {
                let n = (0,
                z.M)()
                  , {id: r="headlessui-dialog-panel-".concat(n), ...o} = e
                  , [{dialogState: l},u] = ea("Dialog.Panel")
                  , i = (0,
                w.T)(t, u.panelRef)
                  , a = (0,
                d.useMemo)( () => ({
                    open: 0 === l
                }), [l])
                  , c = (0,
                m.z)(e => {
                    e.stopPropagation()
                }
                );
                return (0,
                C.sY)({
                    ourProps: {
                        ref: i,
                        id: r,
                        onClick: c
                    },
                    theirProps: o,
                    slot: a,
                    defaultTag: "div",
                    name: "Dialog.Panel"
                })
            }),
            Overlay: (0,
            C.yV)(function(e, t) {
                let n = (0,
                z.M)()
                  , {id: r="headlessui-dialog-overlay-".concat(n), ...o} = e
                  , [{dialogState: l, close: u}] = ea("Dialog.Overlay")
                  , i = (0,
                w.T)(t)
                  , a = (0,
                m.z)(e => {
                    if (e.target === e.currentTarget) {
                        if ((0,
                        ee.P)(e.currentTarget))
                            return e.preventDefault();
                        e.preventDefault(),
                        e.stopPropagation(),
                        u()
                    }
                }
                )
                  , c = (0,
                d.useMemo)( () => ({
                    open: 0 === l
                }), [l]);
                return (0,
                C.sY)({
                    ourProps: {
                        ref: i,
                        id: r,
                        "aria-hidden": !0,
                        onClick: a
                    },
                    theirProps: o,
                    slot: c,
                    defaultTag: "div",
                    name: "Dialog.Overlay"
                })
            }),
            Title: (0,
            C.yV)(function(e, t) {
                let n = (0,
                z.M)()
                  , {id: r="headlessui-dialog-title-".concat(n), ...o} = e
                  , [{dialogState: l, setTitleId: u}] = ea("Dialog.Title")
                  , i = (0,
                w.T)(t);
                (0,
                d.useEffect)( () => (u(r),
                () => u(null)), [r, u]);
                let a = (0,
                d.useMemo)( () => ({
                    open: 0 === l
                }), [l]);
                return (0,
                C.sY)({
                    ourProps: {
                        ref: i,
                        id: r
                    },
                    theirProps: o,
                    slot: a,
                    defaultTag: "h2",
                    name: "Dialog.Title"
                })
            }),
            Description: en
        })
    },
    37388: function(e, t, n) {
        let r;
        n.d(t, {
            R: function() {
                return o
            }
        });
        var o = ((r = o || {}).Space = " ",
        r.Enter = "Enter",
        r.Escape = "Escape",
        r.Backspace = "Backspace",
        r.Delete = "Delete",
        r.ArrowLeft = "ArrowLeft",
        r.ArrowUp = "ArrowUp",
        r.ArrowRight = "ArrowRight",
        r.ArrowDown = "ArrowDown",
        r.Home = "Home",
        r.End = "End",
        r.PageUp = "PageUp",
        r.PageDown = "PageDown",
        r.Tab = "Tab",
        r)
    },
    31094: function(e, t, n) {
        n.d(t, {
            h: function() {
                return y
            },
            k: function() {
                return E
            }
        });
        var r = n(2265)
          , o = n(54887)
          , l = n(13323)
          , u = n(64518)
          , i = n(99417)
          , a = n(40048)
          , c = n(72238)
          , s = n(93689)
          , d = n(27988)
          , f = n(61424)
          , p = n(27847);
        let m = r.Fragment
          , v = r.Fragment
          , h = (0,
        r.createContext)(null)
          , g = (0,
        r.createContext)(null);
        function E() {
            let e = (0,
            r.useContext)(g)
              , t = (0,
            r.useRef)([])
              , n = (0,
            l.z)(n => (t.current.push(n),
            e && e.register(n),
            () => o(n)))
              , o = (0,
            l.z)(n => {
                let r = t.current.indexOf(n);
                -1 !== r && t.current.splice(r, 1),
                e && e.unregister(n)
            }
            )
              , u = (0,
            r.useMemo)( () => ({
                register: n,
                unregister: o,
                portals: t
            }), [n, o, t]);
            return [t, (0,
            r.useMemo)( () => function(e) {
                let {children: t} = e;
                return r.createElement(g.Provider, {
                    value: u
                }, t)
            }
            , [u])]
        }
        let y = Object.assign((0,
        p.yV)(function(e, t) {
            let n = (0,
            r.useRef)(null)
              , l = (0,
            s.T)((0,
            s.h)(e => {
                n.current = e
            }
            ), t)
              , v = (0,
            a.i)(n)
              , E = function(e) {
                let t = (0,
                d.n)()
                  , n = (0,
                r.useContext)(h)
                  , o = (0,
                a.i)(e)
                  , [l,u] = (0,
                r.useState)( () => {
                    if (!t && null !== n || f.O.isServer)
                        return null;
                    let e = null == o ? void 0 : o.getElementById("headlessui-portal-root");
                    if (e)
                        return e;
                    if (null === o)
                        return null;
                    let r = o.createElement("div");
                    return r.setAttribute("id", "headlessui-portal-root"),
                    o.body.appendChild(r)
                }
                );
                return (0,
                r.useEffect)( () => {
                    null !== l && (null != o && o.body.contains(l) || null == o || o.body.appendChild(l))
                }
                , [l, o]),
                (0,
                r.useEffect)( () => {
                    t || null !== n && u(n.current)
                }
                , [n, u, t]),
                l
            }(n)
              , [y] = (0,
            r.useState)( () => {
                var e;
                return f.O.isServer ? null : null != (e = null == v ? void 0 : v.createElement("div")) ? e : null
            }
            )
              , w = (0,
            r.useContext)(g)
              , b = (0,
            c.H)();
            return (0,
            u.e)( () => {
                !E || !y || E.contains(y) || (y.setAttribute("data-headlessui-portal", ""),
                E.appendChild(y))
            }
            , [E, y]),
            (0,
            u.e)( () => {
                if (y && w)
                    return w.register(y)
            }
            , [w, y]),
            (0,
            i.L)( () => {
                var e;
                E && y && (y instanceof Node && E.contains(y) && E.removeChild(y),
                E.childNodes.length <= 0 && (null == (e = E.parentElement) || e.removeChild(E)))
            }
            ),
            b && E && y ? (0,
            o.createPortal)((0,
            p.sY)({
                ourProps: {
                    ref: l
                },
                theirProps: e,
                defaultTag: m,
                name: "Portal"
            }), y) : null
        }), {
            Group: (0,
            p.yV)(function(e, t) {
                let {target: n, ...o} = e
                  , l = {
                    ref: (0,
                    s.T)(t)
                };
                return r.createElement(h.Provider, {
                    value: n
                }, (0,
                p.sY)({
                    ourProps: l,
                    theirProps: o,
                    defaultTag: v,
                    name: "Popover.Group"
                }))
            })
        })
    },
    90945: function(e, t, n) {
        n.d(t, {
            G: function() {
                return l
            }
        });
        var r = n(2265)
          , o = n(16015);
        function l() {
            let[e] = (0,
            r.useState)(o.k);
            return (0,
            r.useEffect)( () => () => e.dispose(), [e]),
            e
        }
    },
    96802: function(e, t, n) {
        n.d(t, {
            O: function() {
                return l
            }
        });
        var r = n(2265)
          , o = n(31948);
        function l(e, t, n, l) {
            let u = (0,
            o.E)(n);
            (0,
            r.useEffect)( () => {
                function n(e) {
                    u.current(e)
                }
                return (e = null != e ? e : window).addEventListener(t, n, l),
                () => e.removeEventListener(t, n, l)
            }
            , [e, t, l])
        }
    },
    13323: function(e, t, n) {
        n.d(t, {
            z: function() {
                return l
            }
        });
        var r = n(2265)
          , o = n(31948);
        let l = function(e) {
            let t = (0,
            o.E)(e);
            return r.useCallback(function() {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                    n[r] = arguments[r];
                return t.current(...n)
            }, [t])
        }
    },
    17684: function(e, t, n) {
        n.d(t, {
            M: function() {
                return a
            }
        });
        var r, o = n(2265), l = n(61424), u = n(64518), i = n(72238);
        let a = null != (r = o.useId) ? r : function() {
            let e = (0,
            i.H)()
              , [t,n] = o.useState(e ? () => l.O.nextId() : null);
            return (0,
            u.e)( () => {
                null === t && n(l.O.nextId())
            }
            , [t]),
            null != t ? "" + t : void 0
        }
    },
    93394: function(e, t, n) {
        n.d(t, {
            t: function() {
                return l
            }
        });
        var r = n(2265)
          , o = n(64518);
        function l() {
            let e = (0,
            r.useRef)(!1);
            return (0,
            o.e)( () => (e.current = !0,
            () => {
                e.current = !1
            }
            ), []),
            e
        }
    },
    64518: function(e, t, n) {
        n.d(t, {
            e: function() {
                return l
            }
        });
        var r = n(2265)
          , o = n(61424);
        let l = (e, t) => {
            o.O.isServer ? (0,
            r.useEffect)(e, t) : (0,
            r.useLayoutEffect)(e, t)
        }
    },
    31948: function(e, t, n) {
        n.d(t, {
            E: function() {
                return l
            }
        });
        var r = n(2265)
          , o = n(64518);
        function l(e) {
            let t = (0,
            r.useRef)(e);
            return (0,
            o.e)( () => {
                t.current = e
            }
            , [e]),
            t
        }
    },
    99417: function(e, t, n) {
        n.d(t, {
            L: function() {
                return u
            }
        });
        var r = n(2265)
          , o = n(96822)
          , l = n(13323);
        function u(e) {
            let t = (0,
            l.z)(e)
              , n = (0,
            r.useRef)(!1);
            (0,
            r.useEffect)( () => (n.current = !1,
            () => {
                n.current = !0,
                (0,
                o.Y)( () => {
                    n.current && t()
                }
                )
            }
            ), [t])
        }
    },
    32539: function(e, t, n) {
        n.d(t, {
            O: function() {
                return c
            }
        });
        var r = n(2265)
          , o = n(37105)
          , l = n(52108)
          , u = n(31948);
        function i(e, t, n) {
            let o = (0,
            u.E)(t);
            (0,
            r.useEffect)( () => {
                function t(e) {
                    o.current(e)
                }
                return document.addEventListener(e, t, n),
                () => document.removeEventListener(e, t, n)
            }
            , [e, n])
        }
        var a = n(3141);
        function c(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2]
              , u = (0,
            r.useRef)(!1);
            function c(n, r) {
                if (!u.current || n.defaultPrevented)
                    return;
                let l = r(n);
                if (null !== l && l.getRootNode().contains(l) && l.isConnected) {
                    for (let t of function e(t) {
                        return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                    }(e)) {
                        if (null === t)
                            continue;
                        let e = t instanceof HTMLElement ? t : t.current;
                        if (null != e && e.contains(l) || n.composed && n.composedPath().includes(e))
                            return
                    }
                    return (0,
                    o.sP)(l, o.tJ.Loose) || -1 === l.tabIndex || n.preventDefault(),
                    t(n, l)
                }
            }
            (0,
            r.useEffect)( () => {
                requestAnimationFrame( () => {
                    u.current = n
                }
                )
            }
            , [n]);
            let s = (0,
            r.useRef)(null);
            i("pointerdown", e => {
                var t, n;
                u.current && (s.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
            }
            , !0),
            i("mousedown", e => {
                var t, n;
                u.current && (s.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
            }
            , !0),
            i("click", e => {
                (0,
                l.tq)() || s.current && (c(e, () => s.current),
                s.current = null)
            }
            , !0),
            i("touchend", e => c(e, () => e.target instanceof HTMLElement ? e.target : null), !0),
            (0,
            a.s)("blur", e => c(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
        }
    },
    40048: function(e, t, n) {
        n.d(t, {
            i: function() {
                return l
            }
        });
        var r = n(2265)
          , o = n(40293);
        function l() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return (0,
            r.useMemo)( () => (0,
            o.r)(...t), [...t])
        }
    },
    28851: function(e, t, n) {
        n.d(t, {
            H: function() {
                return a
            },
            v: function() {
                return i
            }
        });
        var r = n(2265)
          , o = n(38198)
          , l = n(13323)
          , u = n(40048);
        function i() {
            var e;
            let {defaultContainers: t=[], portals: n, mainTreeNodeRef: i} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , a = (0,
            r.useRef)(null != (e = null == i ? void 0 : i.current) ? e : null)
              , c = (0,
            u.i)(a)
              , s = (0,
            l.z)( () => {
                var e, r, o;
                let l = [];
                for (let e of t)
                    null !== e && (e instanceof HTMLElement ? l.push(e) : "current"in e && e.current instanceof HTMLElement && l.push(e.current));
                if (null != n && n.current)
                    for (let e of n.current)
                        l.push(e);
                for (let t of null != (e = null == c ? void 0 : c.querySelectorAll("html > *, body > *")) ? e : [])
                    t !== document.body && t !== document.head && t instanceof HTMLElement && "headlessui-portal-root" !== t.id && (t.contains(a.current) || t.contains(null == (o = null == (r = a.current) ? void 0 : r.getRootNode()) ? void 0 : o.host) || l.some(e => t.contains(e)) || l.push(t));
                return l
            }
            );
            return {
                resolveContainers: s,
                contains: (0,
                l.z)(e => s().some(t => t.contains(e))),
                mainTreeNodeRef: a,
                MainTreeNode: (0,
                r.useMemo)( () => function() {
                    return null != i ? null : r.createElement(o._, {
                        features: o.A.Hidden,
                        ref: a
                    })
                }
                , [a, i])
            }
        }
        function a() {
            let e = (0,
            r.useRef)(null);
            return {
                mainTreeNodeRef: e,
                MainTreeNode: (0,
                r.useMemo)( () => function() {
                    return r.createElement(o._, {
                        features: o.A.Hidden,
                        ref: e
                    })
                }
                , [e])
            }
        }
    },
    72238: function(e, t, n) {
        n.d(t, {
            H: function() {
                return u
            }
        });
        var r, o = n(2265), l = n(61424);
        function u() {
            let e;
            let t = (e = "undefined" == typeof document,
            (0,
            (r || (r = n.t(o, 2))).useSyncExternalStore)( () => () => {}
            , () => !1, () => !e))
              , [u,i] = o.useState(l.O.isHandoffComplete);
            return u && !1 === l.O.isHandoffComplete && i(!1),
            o.useEffect( () => {
                !0 !== u && i(!0)
            }
            , [u]),
            o.useEffect( () => l.O.handoff(), []),
            !t && u
        }
    },
    93689: function(e, t, n) {
        n.d(t, {
            T: function() {
                return i
            },
            h: function() {
                return u
            }
        });
        var r = n(2265)
          , o = n(13323);
        let l = Symbol();
        function u(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return Object.assign(e, {
                [l]: t
            })
        }
        function i() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            let u = (0,
            r.useRef)(t);
            (0,
            r.useEffect)( () => {
                u.current = t
            }
            , [t]);
            let i = (0,
            o.z)(e => {
                for (let t of u.current)
                    null != t && ("function" == typeof t ? t(e) : t.current = e)
            }
            );
            return t.every(e => null == e || (null == e ? void 0 : e[l])) ? void 0 : i
        }
    },
    18369: function(e, t, n) {
        let r;
        n.d(t, {
            N: function() {
                return u
            },
            l: function() {
                return i
            }
        });
        var o = n(2265)
          , l = n(3141)
          , u = ((r = u || {})[r.Forwards = 0] = "Forwards",
        r[r.Backwards = 1] = "Backwards",
        r);
        function i() {
            let e = (0,
            o.useRef)(0);
            return (0,
            l.s)("keydown", t => {
                "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0)
            }
            , !0),
            e
        }
    },
    3141: function(e, t, n) {
        n.d(t, {
            s: function() {
                return l
            }
        });
        var r = n(2265)
          , o = n(31948);
        function l(e, t, n) {
            let l = (0,
            o.E)(t);
            (0,
            r.useEffect)( () => {
                function t(e) {
                    l.current(e)
                }
                return window.addEventListener(e, t, n),
                () => window.removeEventListener(e, t, n)
            }
            , [e, n])
        }
    },
    38198: function(e, t, n) {
        let r;
        n.d(t, {
            A: function() {
                return l
            },
            _: function() {
                return u
            }
        });
        var o = n(27847)
          , l = ((r = l || {})[r.None = 1] = "None",
        r[r.Focusable = 2] = "Focusable",
        r[r.Hidden = 4] = "Hidden",
        r);
        let u = (0,
        o.yV)(function(e, t) {
            var n;
            let {features: r=1, ...l} = e
              , u = {
                ref: t,
                "aria-hidden": (2 & r) == 2 || (null != (n = l["aria-hidden"]) ? n : void 0),
                hidden: (4 & r) == 4 || void 0,
                style: {
                    position: "fixed",
                    top: 1,
                    left: 1,
                    width: 1,
                    height: 0,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    borderWidth: "0",
                    ...(4 & r) == 4 && (2 & r) != 2 && {
                        display: "none"
                    }
                }
            };
            return (0,
            o.sY)({
                ourProps: u,
                theirProps: l,
                slot: {},
                defaultTag: "div",
                name: "Hidden"
            })
        })
    },
    37863: function(e, t, n) {
        let r;
        n.d(t, {
            ZM: function() {
                return u
            },
            oJ: function() {
                return i
            },
            up: function() {
                return a
            }
        });
        var o = n(2265);
        let l = (0,
        o.createContext)(null);
        l.displayName = "OpenClosedContext";
        var u = ((r = u || {})[r.Open = 1] = "Open",
        r[r.Closed = 2] = "Closed",
        r[r.Closing = 4] = "Closing",
        r[r.Opening = 8] = "Opening",
        r);
        function i() {
            return (0,
            o.useContext)(l)
        }
        function a(e) {
            let {value: t, children: n} = e;
            return o.createElement(l.Provider, {
                value: t
            }, n)
        }
    },
    27988: function(e, t, n) {
        n.d(t, {
            O: function() {
                return u
            },
            n: function() {
                return l
            }
        });
        var r = n(2265);
        let o = (0,
        r.createContext)(!1);
        function l() {
            return (0,
            r.useContext)(o)
        }
        function u(e) {
            return r.createElement(o.Provider, {
                value: e.force
            }, e.children)
        }
    },
    47634: function(e, t, n) {
        function r(e) {
            let t = e.parentElement
              , n = null;
            for (; t && !(t instanceof HTMLFieldSetElement); )
                t instanceof HTMLLegendElement && (n = t),
                t = t.parentElement;
            let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
            return !(r && function(e) {
                if (!e)
                    return !1;
                let t = e.previousElementSibling;
                for (; null !== t; ) {
                    if (t instanceof HTMLLegendElement)
                        return !1;
                    t = t.previousElementSibling
                }
                return !0
            }(n)) && r
        }
        n.d(t, {
            P: function() {
                return r
            }
        })
    },
    42120: function(e, t, n) {
        n.d(t, {
            A: function() {
                return r
            }
        });
        function r() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return Array.from(new Set(t.flatMap(e => "string" == typeof e ? e.split(" ") : []))).filter(Boolean).join(" ")
        }
    },
    16015: function(e, t, n) {
        n.d(t, {
            k: function() {
                return function e() {
                    let t = []
                      , n = {
                        addEventListener: (e, t, r, o) => (e.addEventListener(t, r, o),
                        n.add( () => e.removeEventListener(t, r, o))),
                        requestAnimationFrame() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                                t[r] = arguments[r];
                            let o = requestAnimationFrame(...t);
                            return n.add( () => cancelAnimationFrame(o))
                        },
                        nextFrame() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                                t[r] = arguments[r];
                            return n.requestAnimationFrame( () => n.requestAnimationFrame(...t))
                        },
                        setTimeout() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                                t[r] = arguments[r];
                            let o = setTimeout(...t);
                            return n.add( () => clearTimeout(o))
                        },
                        microTask() {
                            for (var e = arguments.length, t = Array(e), o = 0; o < e; o++)
                                t[o] = arguments[o];
                            let l = {
                                current: !0
                            };
                            return (0,
                            r.Y)( () => {
                                l.current && t[0]()
                            }
                            ),
                            n.add( () => {
                                l.current = !1
                            }
                            )
                        },
                        style(e, t, n) {
                            let r = e.style.getPropertyValue(t);
                            return Object.assign(e.style, {
                                [t]: n
                            }),
                            this.add( () => {
                                Object.assign(e.style, {
                                    [t]: r
                                })
                            }
                            )
                        },
                        group(t) {
                            let n = e();
                            return t(n),
                            this.add( () => n.dispose())
                        },
                        add: e => (t.push(e),
                        () => {
                            let n = t.indexOf(e);
                            if (n >= 0)
                                for (let e of t.splice(n, 1))
                                    e()
                        }
                        ),
                        dispose() {
                            for (let e of t.splice(0))
                                e()
                        }
                    };
                    return n
                }
            }
        });
        var r = n(96822)
    },
    61424: function(e, t, n) {
        n.d(t, {
            O: function() {
                return i
            }
        });
        var r = Object.defineProperty
          , o = (e, t, n) => t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , l = (e, t, n) => (o(e, "symbol" != typeof t ? t + "" : t, n),
        n);
        class u {
            set(e) {
                this.current !== e && (this.handoffState = "pending",
                this.currentId = 0,
                this.current = e)
            }
            reset() {
                this.set(this.detect())
            }
            nextId() {
                return ++this.currentId
            }
            get isServer() {
                return "server" === this.current
            }
            get isClient() {
                return "client" === this.current
            }
            detect() {
                return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
            }
            handoff() {
                "pending" === this.handoffState && (this.handoffState = "complete")
            }
            get isHandoffComplete() {
                return "complete" === this.handoffState
            }
            constructor() {
                l(this, "current", this.detect()),
                l(this, "handoffState", "pending"),
                l(this, "currentId", 0)
            }
        }
        let i = new u
    },
    37105: function(e, t, n) {
        let r, o, l, u, i;
        n.d(t, {
            C5: function() {
                return E
            },
            GO: function() {
                return m
            },
            TO: function() {
                return d
            },
            fE: function() {
                return f
            },
            jA: function() {
                return y
            },
            sP: function() {
                return h
            },
            tJ: function() {
                return v
            }
        });
        var a = n(24536)
          , c = n(40293);
        let s = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => "".concat(e, ":not([tabindex='-1'])")).join(",");
        var d = ((r = d || {})[r.First = 1] = "First",
        r[r.Previous = 2] = "Previous",
        r[r.Next = 4] = "Next",
        r[r.Last = 8] = "Last",
        r[r.WrapAround = 16] = "WrapAround",
        r[r.NoScroll = 32] = "NoScroll",
        r)
          , f = ((o = f || {})[o.Error = 0] = "Error",
        o[o.Overflow = 1] = "Overflow",
        o[o.Success = 2] = "Success",
        o[o.Underflow = 3] = "Underflow",
        o)
          , p = ((l = p || {})[l.Previous = -1] = "Previous",
        l[l.Next = 1] = "Next",
        l);
        function m() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
            return null == e ? [] : Array.from(e.querySelectorAll(s)).sort( (e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
        }
        var v = ((u = v || {})[u.Strict = 0] = "Strict",
        u[u.Loose = 1] = "Loose",
        u);
        function h(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return e !== (null == (t = (0,
            c.r)(e)) ? void 0 : t.body) && (0,
            a.E)(n, {
                0: () => e.matches(s),
                1() {
                    let t = e;
                    for (; null !== t; ) {
                        if (t.matches(s))
                            return !0;
                        t = t.parentElement
                    }
                    return !1
                }
            })
        }
        var g = ((i = g || {})[i.Keyboard = 0] = "Keyboard",
        i[i.Mouse = 1] = "Mouse",
        i);
        function E(e) {
            null == e || e.focus({
                preventScroll: !0
            })
        }
        function y(e, t) {
            var n, r, o;
            let {sorted: l=!0, relativeTo: u=null, skipElements: i=[]} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument
              , c = Array.isArray(e) ? l ? function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => e;
                return e.slice().sort( (e, n) => {
                    let r = t(e)
                      , o = t(n);
                    if (null === r || null === o)
                        return 0;
                    let l = r.compareDocumentPosition(o);
                    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                }
                )
            }(e) : e : m(e);
            i.length > 0 && c.length > 1 && (c = c.filter(e => !i.includes(e))),
            u = null != u ? u : a.activeElement;
            let s = ( () => {
                if (5 & t)
                    return 1;
                if (10 & t)
                    return -1;
                throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }
            )(), d = ( () => {
                if (1 & t)
                    return 0;
                if (2 & t)
                    return Math.max(0, c.indexOf(u)) - 1;
                if (4 & t)
                    return Math.max(0, c.indexOf(u)) + 1;
                if (8 & t)
                    return c.length - 1;
                throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }
            )(), f = 32 & t ? {
                preventScroll: !0
            } : {}, p = 0, v = c.length, h;
            do {
                if (p >= v || p + v <= 0)
                    return 0;
                let e = d + p;
                if (16 & t)
                    e = (e + v) % v;
                else {
                    if (e < 0)
                        return 3;
                    if (e >= v)
                        return 1
                }
                null == (h = c[e]) || h.focus(f),
                p += s
            } while (h !== a.activeElement);
            return 6 & t && null != (o = null == (r = null == (n = h) ? void 0 : n.matches) ? void 0 : r.call(n, "textarea,input")) && o && h.select(),
            2
        }
        "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", e => {
            e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
        }
        , !0),
        document.addEventListener("click", e => {
            1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
        }
        , !0))
    },
    24536: function(e, t, n) {
        n.d(t, {
            E: function() {
                return r
            }
        });
        function r(e, t) {
            for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), l = 2; l < n; l++)
                o[l - 2] = arguments[l];
            if (e in t) {
                let n = t[e];
                return "function" == typeof n ? n(...o) : n
            }
            let u = Error('Tried to handle "'.concat(e, '" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e => '"'.concat(e, '"')).join(", "), "."));
            throw Error.captureStackTrace && Error.captureStackTrace(u, r),
            u
        }
    },
    96822: function(e, t, n) {
        n.d(t, {
            Y: function() {
                return r
            }
        });
        function r(e) {
            "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e => setTimeout( () => {
                throw e
            }
            ))
        }
    },
    40293: function(e, t, n) {
        n.d(t, {
            r: function() {
                return o
            }
        });
        var r = n(61424);
        function o(e) {
            return r.O.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
        }
    },
    52108: function(e, t, n) {
        function r() {
            return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
        }
        function o() {
            return r() || /Android/gi.test(window.navigator.userAgent)
        }
        n.d(t, {
            gn: function() {
                return r
            },
            tq: function() {
                return o
            }
        })
    },
    27847: function(e, t, n) {
        let r, o;
        n.d(t, {
            AN: function() {
                return a
            },
            Y2: function() {
                return f
            },
            l4: function() {
                return c
            },
            sY: function() {
                return s
            },
            yV: function() {
                return v
            }
        });
        var l = n(2265)
          , u = n(42120)
          , i = n(24536)
          , a = ((r = a || {})[r.None = 0] = "None",
        r[r.RenderStrategy = 1] = "RenderStrategy",
        r[r.Static = 2] = "Static",
        r)
          , c = ((o = c || {})[o.Unmount = 0] = "Unmount",
        o[o.Hidden = 1] = "Hidden",
        o);
        function s(e) {
            let {ourProps: t, theirProps: n, slot: r, defaultTag: o, features: l, visible: u=!0, name: a, mergeRefs: c} = e;
            c = null != c ? c : p;
            let s = m(n, t);
            if (u)
                return d(s, r, o, a, c);
            let f = null != l ? l : 0;
            if (2 & f) {
                let {static: e=!1, ...t} = s;
                if (e)
                    return d(t, r, o, a, c)
            }
            if (1 & f) {
                let {unmount: e=!0, ...t} = s;
                return (0,
                i.E)(e ? 0 : 1, {
                    0: () => null,
                    1: () => d({
                        ...t,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }, r, o, a, c)
                })
            }
            return d(s, r, o, a, c)
        }
        function d(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 ? arguments[2] : void 0
              , r = arguments.length > 3 ? arguments[3] : void 0
              , o = arguments.length > 4 ? arguments[4] : void 0
              , {as: i=n, children: a, refName: c="ref", ...s} = g(e, ["unmount", "static"])
              , d = void 0 !== e.ref ? {
                [c]: e.ref
            } : {}
              , f = "function" == typeof a ? a(t) : a;
            "className"in s && s.className && "function" == typeof s.className && (s.className = s.className(t));
            let p = {};
            if (t) {
                let e = !1
                  , n = [];
                for (let[r,o] of Object.entries(t))
                    "boolean" == typeof o && (e = !0),
                    !0 === o && n.push(r);
                e && (p["data-headlessui-state"] = n.join(" "))
            }
            if (i === l.Fragment && Object.keys(h(s)).length > 0) {
                if (!(0,
                l.isValidElement)(f) || Array.isArray(f) && f.length > 1)
                    throw Error(['Passing props on "Fragment"!', "", "The current component <".concat(r, ' /> is rendering a "Fragment".'), "However we need to passthrough the following props:", Object.keys(s).map(e => "  - ".concat(e)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => "  - ".concat(e)).join("\n")].join("\n"));
                let e = f.props
                  , t = "function" == typeof (null == e ? void 0 : e.className) ? function() {
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return (0,
                    u.A)(null == e ? void 0 : e.className(...n), s.className)
                }
                : (0,
                u.A)(null == e ? void 0 : e.className, s.className);
                return (0,
                l.cloneElement)(f, Object.assign({}, m(f.props, h(g(s, ["ref"]))), p, d, {
                    ref: o(f.ref, d.ref)
                }, t ? {
                    className: t
                } : {}))
            }
            return (0,
            l.createElement)(i, Object.assign({}, g(s, ["ref"]), i !== l.Fragment && d, i !== l.Fragment && p), f)
        }
        function f() {
            let e = (0,
            l.useRef)([])
              , t = (0,
            l.useCallback)(t => {
                for (let n of e.current)
                    null != n && ("function" == typeof n ? n(t) : n.current = t)
            }
            , []);
            return function() {
                for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
                    r[o] = arguments[o];
                if (!r.every(e => null == e))
                    return e.current = r,
                    t
            }
        }
        function p() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.every(e => null == e) ? void 0 : e => {
                for (let n of t)
                    null != n && ("function" == typeof n ? n(e) : n.current = e)
            }
        }
        function m() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            if (0 === t.length)
                return {};
            if (1 === t.length)
                return t[0];
            let r = {}
              , o = {};
            for (let e of t)
                for (let t in e)
                    t.startsWith("on") && "function" == typeof e[t] ? (null != o[t] || (o[t] = []),
                    o[t].push(e[t])) : r[t] = e[t];
            if (r.disabled || r["aria-disabled"])
                return Object.assign(r, Object.fromEntries(Object.keys(o).map(e => [e, void 0])));
            for (let e in o)
                Object.assign(r, {
                    [e](t) {
                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
                            r[l - 1] = arguments[l];
                        for (let n of o[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent)instanceof Event) && t.defaultPrevented)
                                return;
                            n(t, ...r)
                        }
                    }
                });
            return r
        }
        function v(e) {
            var t;
            return Object.assign((0,
            l.forwardRef)(e), {
                displayName: null != (t = e.displayName) ? t : e.name
            })
        }
        function h(e) {
            let t = Object.assign({}, e);
            for (let e in t)
                void 0 === t[e] && delete t[e];
            return t
        }
        function g(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , n = Object.assign({}, e);
            for (let e of t)
                e in n && delete n[e];
            return n
        }
    },
    77165: function(e, t, n) {
        var r = n(2265);
        let o = r.forwardRef(function(e, t) {
            let {title: n, titleId: o, ...l} = e;
            return r.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: t,
                "aria-labelledby": o
            }, l), n ? r.createElement("title", {
                id: o
            }, n) : null, r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6 18 18 6M6 6l12 12"
            }))
        });
        t.Z = o
    }
}]);
