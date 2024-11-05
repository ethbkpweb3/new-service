(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7715], {
    9826: function(e, t, n) {
        "use strict";
        n.d(t, {
            PrismicNextLink: function() {
                return d
            }
        });
        var r = n(57437)
          , o = n(2265)
          , l = n(27648);
        let u = e => {
            let t = /^(\/(?!\/)|#)/.test(e)
              , n = !t && !/^https?:\/\//.test(e);
            return t && !n
        }
          , a = {
            Any: "Any",
            Document: "Document",
            Media: "Media",
            Web: "Web"
        }
          , i = e => {
            var t;
            return {
                link_type: a.Document,
                id: e.id,
                uid: e.uid || void 0,
                type: e.type,
                tags: e.tags,
                lang: e.lang,
                url: null == e.url ? void 0 : e.url,
                slug: null == (t = e.slugs) ? void 0 : t[0],
                ...e.data && Object.keys(e.data).length > 0 ? {
                    data: e.data
                } : {}
            }
        }
          , s = (e, ...t) => {
            let n;
            if (!e)
                return null;
            let r = "link_type"in e ? e : i(e)
              , [o] = t;
            switch (n = "function" == typeof o || null == o ? {
                linkResolver: o
            } : {
                ...o
            },
            r.link_type) {
            case a.Media:
            case a.Web:
                return "url"in r ? r.url : null;
            case a.Document:
                if ("id"in r && n.linkResolver) {
                    let e = n.linkResolver(r);
                    if (null != e)
                        return e
                }
                if ("url"in r && r.url)
                    return r.url;
                return null;
            case a.Any:
            default:
                return null
            }
        }
        ;
        var c = n(47339);
        let p = (e, t={}) => {
            if (e && ("link_type"in e ? (0,
            c.p)(e) : e)) {
                let n = "target"in e ? e.target : void 0
                  , r = s(e, t.linkResolver)
                  , o = null == r ? void 0 : r
                  , l = "string" == typeof o && !u(o)
                  , a = t.rel ? t.rel({
                    href: o,
                    isExternal: l,
                    target: n
                }) : l ? "noreferrer" : void 0;
                return {
                    href: o,
                    target: n,
                    rel: null == a ? void 0 : a
                }
            }
            return {}
        }
          , d = o.forwardRef(function(e, t) {
            let {field: n, document: o, linkResolver: u, children: a, ...i} = e
              , {href: s, rel: c, ...d} = p(null != n ? n : o, {
                linkResolver: u,
                rel: "function" == typeof i.rel ? i.rel : void 0
            })
              , f = ("href"in i ? i.href : s) || ""
              , v = c;
            return "rel"in i && "function" != typeof i.rel && (v = i.rel),
            (0,
            r.jsx)(l.default, {
                ref: t,
                ...d,
                ...i,
                href: f,
                rel: v,
                children: "children"in e ? a : null == n ? void 0 : n.text
            })
        })
    },
    58103: function(e, t, n) {
        "use strict";
        n.d(t, {
            R: function() {
                return r
            }
        });
        let r = "io.prismic.preview"
    },
    99376: function(e, t, n) {
        "use strict";
        var r = n(35475);
        n.o(r, "usePathname") && n.d(t, {
            usePathname: function() {
                return r.usePathname
            }
        }),
        n.o(r, "useRouter") && n.d(t, {
            useRouter: function() {
                return r.useRouter
            }
        })
    },
    49608: function() {},
    97425: function() {},
    81074: function(e) {
        e.exports = {
            style: {
                fontFamily: "'__Libre_Franklin_c817e6', '__Libre_Franklin_Fallback_c817e6'",
                fontWeight: 400,
                fontStyle: "normal"
            },
            className: "__className_c817e6",
            variable: "__variable_c817e6"
        }
    },
    19642: function(e, t, n) {
        "use strict";
        let r, o;
        n.d(t, {
            J: function() {
                return j
            }
        });
        var l = n(2265)
          , u = n(31094)
          , a = n(13323)
          , i = n(96802)
          , s = n(17684)
          , c = n(64518)
          , p = n(31948)
          , d = n(32539)
          , f = n(40048);
        function v(e) {
            var t;
            if (e.type)
                return e.type;
            let n = null != (t = e.as) ? t : "button";
            if ("string" == typeof n && "button" === n.toLowerCase())
                return "button"
        }
        var m = n(28851)
          , b = n(93689)
          , y = n(18369)
          , P = n(38198)
          , E = n(37863)
          , g = n(47634)
          , S = n(37105)
          , h = n(24536)
          , T = n(40293)
          , k = n(27847)
          , M = n(37388)
          , _ = ((r = _ || {})[r.Open = 0] = "Open",
        r[r.Closed = 1] = "Closed",
        r)
          , I = ((o = I || {})[o.TogglePopover = 0] = "TogglePopover",
        o[o.ClosePopover = 1] = "ClosePopover",
        o[o.SetButton = 2] = "SetButton",
        o[o.SetButtonId = 3] = "SetButtonId",
        o[o.SetPanel = 4] = "SetPanel",
        o[o.SetPanelId = 5] = "SetPanelId",
        o);
        let O = {
            0: e => {
                let t = {
                    ...e,
                    popoverState: (0,
                    h.E)(e.popoverState, {
                        0: 1,
                        1: 0
                    })
                };
                return 0 === t.popoverState && (t.__demoMode = !1),
                t
            }
            ,
            1: e => 1 === e.popoverState ? e : {
                ...e,
                popoverState: 1
            },
            2: (e, t) => e.button === t.button ? e : {
                ...e,
                button: t.button
            },
            3: (e, t) => e.buttonId === t.buttonId ? e : {
                ...e,
                buttonId: t.buttonId
            },
            4: (e, t) => e.panel === t.panel ? e : {
                ...e,
                panel: t.panel
            },
            5: (e, t) => e.panelId === t.panelId ? e : {
                ...e,
                panelId: t.panelId
            }
        }
          , R = (0,
        l.createContext)(null);
        function w(e) {
            let t = (0,
            l.useContext)(R);
            if (null === t) {
                let t = Error("<".concat(e, " /> is missing a parent <Popover /> component."));
                throw Error.captureStackTrace && Error.captureStackTrace(t, w),
                t
            }
            return t
        }
        R.displayName = "PopoverContext";
        let N = (0,
        l.createContext)(null);
        function x(e) {
            let t = (0,
            l.useContext)(N);
            if (null === t) {
                let t = Error("<".concat(e, " /> is missing a parent <Popover /> component."));
                throw Error.captureStackTrace && Error.captureStackTrace(t, x),
                t
            }
            return t
        }
        N.displayName = "PopoverAPIContext";
        let C = (0,
        l.createContext)(null);
        function F() {
            return (0,
            l.useContext)(C)
        }
        C.displayName = "PopoverGroupContext";
        let A = (0,
        l.createContext)(null);
        function B(e, t) {
            return (0,
            h.E)(t.type, O, e, t)
        }
        A.displayName = "PopoverPanelContext";
        let D = k.AN.RenderStrategy | k.AN.Static
          , z = k.AN.RenderStrategy | k.AN.Static
          , j = Object.assign((0,
        k.yV)(function(e, t) {
            var n;
            let {__demoMode: r=!1, ...o} = e
              , s = (0,
            l.useRef)(null)
              , c = (0,
            b.T)(t, (0,
            b.h)(e => {
                s.current = e
            }
            ))
              , v = (0,
            l.useRef)([])
              , y = (0,
            l.useReducer)(B, {
                __demoMode: r,
                popoverState: r ? 0 : 1,
                buttons: v,
                button: null,
                buttonId: null,
                panel: null,
                panelId: null,
                beforePanelSentinel: (0,
                l.createRef)(),
                afterPanelSentinel: (0,
                l.createRef)()
            })
              , [{popoverState: P, button: g, buttonId: T, panel: M, panelId: _, beforePanelSentinel: I, afterPanelSentinel: O},w] = y
              , x = (0,
            f.i)(null != (n = s.current) ? n : g)
              , C = (0,
            l.useMemo)( () => {
                if (!g || !M)
                    return !1;
                for (let e of document.querySelectorAll("body > *"))
                    if (Number(null == e ? void 0 : e.contains(g)) ^ Number(null == e ? void 0 : e.contains(M)))
                        return !0;
                let e = (0,
                S.GO)()
                  , t = e.indexOf(g)
                  , n = (t + e.length - 1) % e.length
                  , r = (t + 1) % e.length
                  , o = e[n]
                  , l = e[r];
                return !M.contains(o) && !M.contains(l)
            }
            , [g, M])
              , D = (0,
            p.E)(T)
              , z = (0,
            p.E)(_)
              , j = (0,
            l.useMemo)( () => ({
                buttonId: D,
                panelId: z,
                close: () => w({
                    type: 1
                })
            }), [D, z, w])
              , L = F()
              , G = null == L ? void 0 : L.registerPopover
              , W = (0,
            a.z)( () => {
                var e;
                return null != (e = null == L ? void 0 : L.isFocusWithinPopoverGroup()) ? e : (null == x ? void 0 : x.activeElement) && ((null == g ? void 0 : g.contains(x.activeElement)) || (null == M ? void 0 : M.contains(x.activeElement)))
            }
            );
            (0,
            l.useEffect)( () => null == G ? void 0 : G(j), [G, j]);
            let[Y,Z] = (0,
            u.k)()
              , V = (0,
            m.v)({
                mainTreeNodeRef: null == L ? void 0 : L.mainTreeNodeRef,
                portals: Y,
                defaultContainers: [g, M]
            });
            (0,
            i.O)(null == x ? void 0 : x.defaultView, "focus", e => {
                var t, n, r, o;
                e.target !== window && e.target instanceof HTMLElement && 0 === P && (W() || g && M && (V.contains(e.target) || null != (n = null == (t = I.current) ? void 0 : t.contains) && n.call(t, e.target) || null != (o = null == (r = O.current) ? void 0 : r.contains) && o.call(r, e.target) || w({
                    type: 1
                })))
            }
            , !0),
            (0,
            d.O)(V.resolveContainers, (e, t) => {
                w({
                    type: 1
                }),
                (0,
                S.sP)(t, S.tJ.Loose) || (e.preventDefault(),
                null == g || g.focus())
            }
            , 0 === P);
            let H = (0,
            a.z)(e => {
                w({
                    type: 1
                });
                let t = e ? e instanceof HTMLElement ? e : "current"in e && e.current instanceof HTMLElement ? e.current : g : g;
                null == t || t.focus()
            }
            )
              , J = (0,
            l.useMemo)( () => ({
                close: H,
                isPortalled: C
            }), [H, C])
              , K = (0,
            l.useMemo)( () => ({
                open: 0 === P,
                close: H
            }), [P, H]);
            return l.createElement(A.Provider, {
                value: null
            }, l.createElement(R.Provider, {
                value: y
            }, l.createElement(N.Provider, {
                value: J
            }, l.createElement(E.up, {
                value: (0,
                h.E)(P, {
                    0: E.ZM.Open,
                    1: E.ZM.Closed
                })
            }, l.createElement(Z, null, (0,
            k.sY)({
                ourProps: {
                    ref: c
                },
                theirProps: o,
                slot: K,
                defaultTag: "div",
                name: "Popover"
            }), l.createElement(V.MainTreeNode, null))))))
        }), {
            Button: (0,
            k.yV)(function(e, t) {
                let n = (0,
                s.M)()
                  , {id: r="headlessui-popover-button-".concat(n), ...o} = e
                  , [u,i] = w("Popover.Button")
                  , {isPortalled: p} = x("Popover.Button")
                  , d = (0,
                l.useRef)(null)
                  , m = "headlessui-focus-sentinel-".concat((0,
                s.M)())
                  , E = F()
                  , T = null == E ? void 0 : E.closeOthers
                  , _ = null !== (0,
                l.useContext)(A);
                (0,
                l.useEffect)( () => {
                    if (!_)
                        return i({
                            type: 3,
                            buttonId: r
                        }),
                        () => {
                            i({
                                type: 3,
                                buttonId: null
                            })
                        }
                }
                , [_, r, i]);
                let[I] = (0,
                l.useState)( () => Symbol())
                  , O = (0,
                b.T)(d, t, _ ? null : e => {
                    if (e)
                        u.buttons.current.push(I);
                    else {
                        let e = u.buttons.current.indexOf(I);
                        -1 !== e && u.buttons.current.splice(e, 1)
                    }
                    u.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),
                    e && i({
                        type: 2,
                        button: e
                    })
                }
                )
                  , R = (0,
                b.T)(d, t)
                  , N = (0,
                f.i)(d)
                  , C = (0,
                a.z)(e => {
                    var t, n, r;
                    if (_) {
                        if (1 === u.popoverState)
                            return;
                        switch (e.key) {
                        case M.R.Space:
                        case M.R.Enter:
                            e.preventDefault(),
                            null == (n = (t = e.target).click) || n.call(t),
                            i({
                                type: 1
                            }),
                            null == (r = u.button) || r.focus()
                        }
                    } else
                        switch (e.key) {
                        case M.R.Space:
                        case M.R.Enter:
                            e.preventDefault(),
                            e.stopPropagation(),
                            1 === u.popoverState && (null == T || T(u.buttonId)),
                            i({
                                type: 0
                            });
                            break;
                        case M.R.Escape:
                            if (0 !== u.popoverState)
                                return null == T ? void 0 : T(u.buttonId);
                            if (!d.current || null != N && N.activeElement && !d.current.contains(N.activeElement))
                                return;
                            e.preventDefault(),
                            e.stopPropagation(),
                            i({
                                type: 1
                            })
                        }
                }
                )
                  , B = (0,
                a.z)(e => {
                    _ || e.key === M.R.Space && e.preventDefault()
                }
                )
                  , D = (0,
                a.z)(t => {
                    var n, r;
                    (0,
                    g.P)(t.currentTarget) || e.disabled || (_ ? (i({
                        type: 1
                    }),
                    null == (n = u.button) || n.focus()) : (t.preventDefault(),
                    t.stopPropagation(),
                    1 === u.popoverState && (null == T || T(u.buttonId)),
                    i({
                        type: 0
                    }),
                    null == (r = u.button) || r.focus()))
                }
                )
                  , z = (0,
                a.z)(e => {
                    e.preventDefault(),
                    e.stopPropagation()
                }
                )
                  , j = 0 === u.popoverState
                  , L = (0,
                l.useMemo)( () => ({
                    open: j
                }), [j])
                  , G = function(e, t) {
                    let[n,r] = (0,
                    l.useState)( () => v(e));
                    return (0,
                    c.e)( () => {
                        r(v(e))
                    }
                    , [e.type, e.as]),
                    (0,
                    c.e)( () => {
                        n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
                    }
                    , [n, t]),
                    n
                }(e, d)
                  , W = _ ? {
                    ref: R,
                    type: G,
                    onKeyDown: C,
                    onClick: D
                } : {
                    ref: O,
                    id: u.buttonId,
                    type: G,
                    "aria-expanded": 0 === u.popoverState,
                    "aria-controls": u.panel ? u.panelId : void 0,
                    onKeyDown: C,
                    onKeyUp: B,
                    onClick: D,
                    onMouseDown: z
                }
                  , Y = (0,
                y.l)()
                  , Z = (0,
                a.z)( () => {
                    let e = u.panel;
                    e && (0,
                    h.E)(Y.current, {
                        [y.N.Forwards]: () => (0,
                        S.jA)(e, S.TO.First),
                        [y.N.Backwards]: () => (0,
                        S.jA)(e, S.TO.Last)
                    }) === S.fE.Error && (0,
                    S.jA)((0,
                    S.GO)().filter(e => "true" !== e.dataset.headlessuiFocusGuard), (0,
                    h.E)(Y.current, {
                        [y.N.Forwards]: S.TO.Next,
                        [y.N.Backwards]: S.TO.Previous
                    }), {
                        relativeTo: u.button
                    })
                }
                );
                return l.createElement(l.Fragment, null, (0,
                k.sY)({
                    ourProps: W,
                    theirProps: o,
                    slot: L,
                    defaultTag: "button",
                    name: "Popover.Button"
                }), j && !_ && p && l.createElement(P._, {
                    id: m,
                    features: P.A.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: Z
                }))
            }),
            Overlay: (0,
            k.yV)(function(e, t) {
                let n = (0,
                s.M)()
                  , {id: r="headlessui-popover-overlay-".concat(n), ...o} = e
                  , [{popoverState: u},i] = w("Popover.Overlay")
                  , c = (0,
                b.T)(t)
                  , p = (0,
                E.oJ)()
                  , d = null !== p ? (p & E.ZM.Open) === E.ZM.Open : 0 === u
                  , f = (0,
                a.z)(e => {
                    if ((0,
                    g.P)(e.currentTarget))
                        return e.preventDefault();
                    i({
                        type: 1
                    })
                }
                )
                  , v = (0,
                l.useMemo)( () => ({
                    open: 0 === u
                }), [u]);
                return (0,
                k.sY)({
                    ourProps: {
                        ref: c,
                        id: r,
                        "aria-hidden": !0,
                        onClick: f
                    },
                    theirProps: o,
                    slot: v,
                    defaultTag: "div",
                    features: D,
                    visible: d,
                    name: "Popover.Overlay"
                })
            }),
            Panel: (0,
            k.yV)(function(e, t) {
                let n = (0,
                s.M)()
                  , {id: r="headlessui-popover-panel-".concat(n), focus: o=!1, ...u} = e
                  , [i,p] = w("Popover.Panel")
                  , {close: d, isPortalled: v} = x("Popover.Panel")
                  , m = "headlessui-focus-sentinel-before-".concat((0,
                s.M)())
                  , g = "headlessui-focus-sentinel-after-".concat((0,
                s.M)())
                  , T = (0,
                l.useRef)(null)
                  , _ = (0,
                b.T)(T, t, e => {
                    p({
                        type: 4,
                        panel: e
                    })
                }
                )
                  , I = (0,
                f.i)(T)
                  , O = (0,
                k.Y2)();
                (0,
                c.e)( () => (p({
                    type: 5,
                    panelId: r
                }),
                () => {
                    p({
                        type: 5,
                        panelId: null
                    })
                }
                ), [r, p]);
                let R = (0,
                E.oJ)()
                  , N = null !== R ? (R & E.ZM.Open) === E.ZM.Open : 0 === i.popoverState
                  , C = (0,
                a.z)(e => {
                    var t;
                    if (e.key === M.R.Escape) {
                        if (0 !== i.popoverState || !T.current || null != I && I.activeElement && !T.current.contains(I.activeElement))
                            return;
                        e.preventDefault(),
                        e.stopPropagation(),
                        p({
                            type: 1
                        }),
                        null == (t = i.button) || t.focus()
                    }
                }
                );
                (0,
                l.useEffect)( () => {
                    var t;
                    e.static || 1 === i.popoverState && (null == (t = e.unmount) || t) && p({
                        type: 4,
                        panel: null
                    })
                }
                , [i.popoverState, e.unmount, e.static, p]),
                (0,
                l.useEffect)( () => {
                    if (i.__demoMode || !o || 0 !== i.popoverState || !T.current)
                        return;
                    let e = null == I ? void 0 : I.activeElement;
                    T.current.contains(e) || (0,
                    S.jA)(T.current, S.TO.First)
                }
                , [i.__demoMode, o, T, i.popoverState]);
                let F = (0,
                l.useMemo)( () => ({
                    open: 0 === i.popoverState,
                    close: d
                }), [i, d])
                  , B = {
                    ref: _,
                    id: r,
                    onKeyDown: C,
                    onBlur: o && 0 === i.popoverState ? e => {
                        var t, n, r, o, l;
                        let u = e.relatedTarget;
                        u && T.current && (null != (t = T.current) && t.contains(u) || (p({
                            type: 1
                        }),
                        (null != (r = null == (n = i.beforePanelSentinel.current) ? void 0 : n.contains) && r.call(n, u) || null != (l = null == (o = i.afterPanelSentinel.current) ? void 0 : o.contains) && l.call(o, u)) && u.focus({
                            preventScroll: !0
                        })))
                    }
                    : void 0,
                    tabIndex: -1
                }
                  , D = (0,
                y.l)()
                  , j = (0,
                a.z)( () => {
                    let e = T.current;
                    e && (0,
                    h.E)(D.current, {
                        [y.N.Forwards]: () => {
                            var t;
                            (0,
                            S.jA)(e, S.TO.First) === S.fE.Error && (null == (t = i.afterPanelSentinel.current) || t.focus())
                        }
                        ,
                        [y.N.Backwards]: () => {
                            var e;
                            null == (e = i.button) || e.focus({
                                preventScroll: !0
                            })
                        }
                    })
                }
                )
                  , L = (0,
                a.z)( () => {
                    let e = T.current;
                    e && (0,
                    h.E)(D.current, {
                        [y.N.Forwards]: () => {
                            var e;
                            if (!i.button)
                                return;
                            let t = (0,
                            S.GO)()
                              , n = t.indexOf(i.button)
                              , r = t.slice(0, n + 1)
                              , o = [...t.slice(n + 1), ...r];
                            for (let t of o.slice())
                                if ("true" === t.dataset.headlessuiFocusGuard || null != (e = i.panel) && e.contains(t)) {
                                    let e = o.indexOf(t);
                                    -1 !== e && o.splice(e, 1)
                                }
                            (0,
                            S.jA)(o, S.TO.First, {
                                sorted: !1
                            })
                        }
                        ,
                        [y.N.Backwards]: () => {
                            var t;
                            (0,
                            S.jA)(e, S.TO.Previous) === S.fE.Error && (null == (t = i.button) || t.focus())
                        }
                    })
                }
                );
                return l.createElement(A.Provider, {
                    value: r
                }, N && v && l.createElement(P._, {
                    id: m,
                    ref: i.beforePanelSentinel,
                    features: P.A.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: j
                }), (0,
                k.sY)({
                    mergeRefs: O,
                    ourProps: B,
                    theirProps: u,
                    slot: F,
                    defaultTag: "div",
                    features: z,
                    visible: N,
                    name: "Popover.Panel"
                }), N && v && l.createElement(P._, {
                    id: g,
                    ref: i.afterPanelSentinel,
                    features: P.A.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: L
                }))
            }),
            Group: (0,
            k.yV)(function(e, t) {
                let n = (0,
                l.useRef)(null)
                  , r = (0,
                b.T)(n, t)
                  , [o,u] = (0,
                l.useState)([])
                  , i = (0,
                m.H)()
                  , s = (0,
                a.z)(e => {
                    u(t => {
                        let n = t.indexOf(e);
                        if (-1 !== n) {
                            let e = t.slice();
                            return e.splice(n, 1),
                            e
                        }
                        return t
                    }
                    )
                }
                )
                  , c = (0,
                a.z)(e => (u(t => [...t, e]),
                () => s(e)))
                  , p = (0,
                a.z)( () => {
                    var e;
                    let t = (0,
                    T.r)(n);
                    if (!t)
                        return !1;
                    let r = t.activeElement;
                    return !!(null != (e = n.current) && e.contains(r)) || o.some(e => {
                        var n, o;
                        return (null == (n = t.getElementById(e.buttonId.current)) ? void 0 : n.contains(r)) || (null == (o = t.getElementById(e.panelId.current)) ? void 0 : o.contains(r))
                    }
                    )
                }
                )
                  , d = (0,
                a.z)(e => {
                    for (let t of o)
                        t.buttonId.current !== e && t.close()
                }
                )
                  , f = (0,
                l.useMemo)( () => ({
                    registerPopover: c,
                    unregisterPopover: s,
                    isFocusWithinPopoverGroup: p,
                    closeOthers: d,
                    mainTreeNodeRef: i.mainTreeNodeRef
                }), [c, s, p, d, i.mainTreeNodeRef])
                  , v = (0,
                l.useMemo)( () => ({}), []);
                return l.createElement(C.Provider, {
                    value: f
                }, (0,
                k.sY)({
                    ourProps: {
                        ref: r
                    },
                    theirProps: e,
                    slot: v,
                    defaultTag: "div",
                    name: "Popover.Group"
                }), l.createElement(i.MainTreeNode, null))
            })
        })
    },
    4355: function(e, t, n) {
        "use strict";
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
                d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            }))
        });
        t.Z = o
    }
}]);