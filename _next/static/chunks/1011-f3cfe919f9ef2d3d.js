(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1011], {
    17690: function(e, t, r) {
        "use strict";
        r.d(t, {
            PrismicPreviewClient: function() {
                return c
            }
        });
        var n = r(2265)
          , a = r(27325)
          , i = r(99376)
          , o = r(58103);
        let s = e => e.replace(/%3B/g, ";")
          , l = e => {
            let t;
            for (let r of e.split("; ")) {
                let e = r.split("=");
                if (s(e[0]).replace(/%3D/g, "=") === o.R) {
                    t = s(e.slice(1).join("="));
                    continue
                }
            }
            return t
        }
          , u = e => (decodeURIComponent(e).match(/"([^"]+)\.prismic\.io"/) || [])[1];
        function c(e) {
            let t, {repositoryName: r, updatePreviewURL: o="/api/preview", exitPreviewURL: s="/api/exit-preview", isDraftMode: c} = e, h = c, d = !0, f = "";
            try {
                let e = (0,
                a.useRouter)();
                d = !1,
                f = e.basePath,
                h || (h = e.isPreview),
                t = () => e.replace(e.asPath, void 0, {
                    scroll: !1
                })
            } catch (e) {
                t = (0,
                i.useRouter)().refresh
            }
            return (0,
            n.useEffect)( () => {
                let e = async () => {
                    let e = f + o;
                    (await globalThis.fetch(e)).redirected ? t() : console.error('[<PrismicPreview>] Failed to start or update Preview Mode using the "'.concat(e, '" API endpoint. Does it exist?'))
                }
                  , n = async r => {
                    r.preventDefault(),
                    d ? t() : await e()
                }
                  , a = async e => {
                    e.preventDefault();
                    let r = f + s;
                    (await globalThis.fetch(r)).ok ? t() : console.error('[<PrismicPreview>] Failed to exit Preview Mode using the "'.concat(r, '" API endpoint. Does it exist?'))
                }
                ;
                if (window.addEventListener("prismicPreviewUpdate", n),
                window.addEventListener("prismicPreviewEnd", a),
                !h) {
                    let t = l(globalThis.document.cookie);
                    if (t) {
                        let n = window.location.href.startsWith(window.location.origin + f)
                          , a = u(t);
                        n && a === r && e()
                    }
                }
                return () => {
                    window.removeEventListener("prismicPreviewUpdate", n),
                    window.removeEventListener("prismicPreviewEnd", a)
                }
            }
            , [f, s, d, h, t, r, o]),
            null
        }
    },
    76733: function(e, t, r) {
        "use strict";
        r.d(t, {
            PrismicToolbar: function() {
                return c
            }
        });
        var n = r(2265)
          , a = Object.defineProperty
          , i = (e, t, r) => t in e ? a(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r
          , o = (e, t, r) => i(e, "symbol" != typeof t ? t + "" : t, r);
        class s extends Error {
            constructor(e="An invalid API response was returned", t, r) {
                super(e),
                o(this, "url"),
                o(this, "response"),
                this.url = t,
                this.response = r
            }
        }
        let l = e => /^[a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]$/.test(e)
          , u = e => {
            if (l(e))
                return `https://static.cdn.prismic.io/prismic.js?new=true&repo=${e}`;
            throw new s(`An invalid Prismic repository name was given: ${e}`,void 0,void 0)
        }
        ;
        r(40257);
        let c = e => {
            let {repositoryName: t} = e
              , r = u(t);
            return n.useEffect( () => {
                if (!document.querySelector('script[src="'.concat(r, '"]'))) {
                    let e = document.createElement("script");
                    e.src = r,
                    e.defer = !0,
                    e.dataset.prismicToolbar = "",
                    e.dataset.repositoryName = t,
                    document.body.appendChild(e)
                }
            }
            , [t, r]),
            null
        }
    },
    40257: function(e, t, r) {
        "use strict";
        var n, a;
        e.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof (null == (a = r.g.process) ? void 0 : a.env) ? r.g.process : r(44227)
    },
    11235: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "detectDomainLocale", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r]
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    8221: function(e, t) {
        "use strict";
        let r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            DOMAttributeNames: function() {
                return n
            },
            default: function() {
                return o
            },
            isEqualNode: function() {
                return i
            }
        });
        let n = {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv",
            noModule: "noModule"
        };
        function a(e) {
            let {type: t, props: r} = e
              , a = document.createElement(t);
            for (let e in r) {
                if (!r.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === r[e])
                    continue;
                let i = n[e] || e.toLowerCase();
                "script" === t && ("async" === i || "defer" === i || "noModule" === i) ? a[i] = !!r[e] : a.setAttribute(i, r[e])
            }
            let {children: i, dangerouslySetInnerHTML: o} = r;
            return o ? a.innerHTML = o.__html || "" : i && (a.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : ""),
            a
        }
        function i(e, t) {
            if (e instanceof HTMLElement && t instanceof HTMLElement) {
                let r = t.getAttribute("nonce");
                if (r && !e.getAttribute("nonce")) {
                    let n = t.cloneNode(!0);
                    return n.setAttribute("nonce", ""),
                    n.nonce = r,
                    r === e.nonce && e.isEqualNode(n)
                }
            }
            return e.isEqualNode(t)
        }
        function o() {
            return {
                mountedInstances: new Set,
                updateHead: e => {
                    let t = {};
                    e.forEach(e => {
                        if ("link" === e.type && e.props["data-optimized-fonts"]) {
                            if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]'))
                                return;
                            e.props.href = e.props["data-href"],
                            e.props["data-href"] = void 0
                        }
                        let r = t[e.type] || [];
                        r.push(e),
                        t[e.type] = r
                    }
                    );
                    let n = t.title ? t.title[0] : null
                      , a = "";
                    if (n) {
                        let {children: e} = n.props;
                        a = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
                    }
                    a !== document.title && (document.title = a),
                    ["meta", "base", "link", "style", "script"].forEach(e => {
                        r(e, t[e] || [])
                    }
                    )
                }
            }
        }
        r = (e, t) => {
            let r = document.getElementsByTagName("head")[0]
              , n = r.querySelector("meta[name=next-head-count]")
              , o = Number(n.content)
              , s = [];
            for (let t = 0, r = n.previousElementSibling; t < o; t++,
            r = (null == r ? void 0 : r.previousElementSibling) || null) {
                var l;
                (null == r ? void 0 : null == (l = r.tagName) ? void 0 : l.toLowerCase()) === e && s.push(r)
            }
            let u = t.map(a).filter(e => {
                for (let t = 0, r = s.length; t < r; t++)
                    if (i(s[t], e))
                        return s.splice(t, 1),
                        !1;
                return !0
            }
            );
            s.forEach(e => {
                var t;
                return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
            }
            ),
            u.forEach(e => r.insertBefore(e, n)),
            n.content = (o - s.length + u.length).toString()
        }
        ,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    71154: function(e, t, r) {
        "use strict";
        function n(e, t) {
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "removeLocale", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r(63381),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    6680: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            createRouteLoader: function() {
                return m
            },
            getClientBuildManifest: function() {
                return f
            },
            isAssetError: function() {
                return u
            },
            markAssetError: function() {
                return l
            }
        }),
        r(47043),
        r(96899);
        let n = r(36390)
          , a = r(63515)
          , i = r(65157);
        function o(e, t, r) {
            let n, a = t.get(e);
            if (a)
                return "future"in a ? a.future : Promise.resolve(a);
            let i = new Promise(e => {
                n = e
            }
            );
            return t.set(e, a = {
                resolve: n,
                future: i
            }),
            r ? r().then(e => (n(e),
            e)).catch(r => {
                throw t.delete(e),
                r
            }
            ) : i
        }
        let s = Symbol("ASSET_LOAD_ERROR");
        function l(e) {
            return Object.defineProperty(e, s, {})
        }
        function u(e) {
            return e && s in e
        }
        let c = function(e) {
            try {
                return e = document.createElement("link"),
                !!window.MSInputMethodContext && !!document.documentMode || e.relList.supports("prefetch")
            } catch (e) {
                return !1
            }
        }()
          , h = () => (0,
        i.getDeploymentIdQueryOrEmptyString)();
        function d(e, t, r) {
            return new Promise( (n, i) => {
                let o = !1;
                e.then(e => {
                    o = !0,
                    n(e)
                }
                ).catch(i),
                (0,
                a.requestIdleCallback)( () => setTimeout( () => {
                    o || i(r)
                }
                , t))
            }
            )
        }
        function f() {
            return self.__BUILD_MANIFEST ? Promise.resolve(self.__BUILD_MANIFEST) : d(new Promise(e => {
                let t = self.__BUILD_MANIFEST_CB;
                self.__BUILD_MANIFEST_CB = () => {
                    e(self.__BUILD_MANIFEST),
                    t && t()
                }
            }
            ), 3800, l(Error("Failed to load client build manifest")))
        }
        function p(e, t) {
            return f().then(r => {
                if (!(t in r))
                    throw l(Error("Failed to lookup route: " + t));
                let a = r[t].map(t => e + "/_next/" + encodeURI(t));
                return {
                    scripts: a.filter(e => e.endsWith(".js")).map(e => (0,
                    n.__unsafeCreateTrustedScriptURL)(e) + h()),
                    css: a.filter(e => e.endsWith(".css")).map(e => e + h())
                }
            }
            )
        }
        function m(e) {
            let t = new Map
              , r = new Map
              , n = new Map
              , i = new Map;
            function s(e) {
                {
                    var t;
                    let n = r.get(e.toString());
                    return n || (document.querySelector('script[src^="' + e + '"]') ? Promise.resolve() : (r.set(e.toString(), n = new Promise( (r, n) => {
                        (t = document.createElement("script")).onload = r,
                        t.onerror = () => n(l(Error("Failed to load script: " + e))),
                        t.crossOrigin = void 0,
                        t.src = e,
                        document.body.appendChild(t)
                    }
                    )),
                    n))
                }
            }
            function u(e) {
                let t = n.get(e);
                return t || n.set(e, t = fetch(e, {
                    credentials: "same-origin"
                }).then(t => {
                    if (!t.ok)
                        throw Error("Failed to load stylesheet: " + e);
                    return t.text().then(t => ({
                        href: e,
                        content: t
                    }))
                }
                ).catch(e => {
                    throw l(e)
                }
                )),
                t
            }
            return {
                whenEntrypoint: e => o(e, t),
                onEntrypoint(e, r) {
                    (r ? Promise.resolve().then( () => r()).then(e => ({
                        component: e && e.default || e,
                        exports: e
                    }), e => ({
                        error: e
                    })) : Promise.resolve(void 0)).then(r => {
                        let n = t.get(e);
                        n && "resolve"in n ? r && (t.set(e, r),
                        n.resolve(r)) : (r ? t.set(e, r) : t.delete(e),
                        i.delete(e))
                    }
                    )
                },
                loadRoute(r, n) {
                    return o(r, i, () => {
                        let a;
                        return d(p(e, r).then(e => {
                            let {scripts: n, css: a} = e;
                            return Promise.all([t.has(r) ? [] : Promise.all(n.map(s)), Promise.all(a.map(u))])
                        }
                        ).then(e => this.whenEntrypoint(r).then(t => ({
                            entrypoint: t,
                            styles: e[1]
                        }))), 3800, l(Error("Route did not complete loading: " + r))).then(e => {
                            let {entrypoint: t, styles: r} = e
                              , n = Object.assign({
                                styles: r
                            }, t);
                            return "error"in t ? t : n
                        }
                        ).catch(e => {
                            if (n)
                                throw e;
                            return {
                                error: e
                            }
                        }
                        ).finally( () => null == a ? void 0 : a())
                    }
                    )
                },
                prefetch(t) {
                    let r;
                    return (r = navigator.connection) && (r.saveData || /2g/.test(r.effectiveType)) ? Promise.resolve() : p(e, t).then(e => Promise.all(c ? e.scripts.map(e => {
                        var t, r, n;
                        return t = e.toString(),
                        r = "script",
                        new Promise( (e, a) => {
                            if (document.querySelector('\n      link[rel="prefetch"][href^="' + t + '"],\n      link[rel="preload"][href^="' + t + '"],\n      script[src^="' + t + '"]'))
                                return e();
                            n = document.createElement("link"),
                            r && (n.as = r),
                            n.rel = "prefetch",
                            n.crossOrigin = void 0,
                            n.onload = e,
                            n.onerror = () => a(l(Error("Failed to prefetch: " + t))),
                            n.href = t,
                            document.head.appendChild(n)
                        }
                        )
                    }
                    ) : [])).then( () => {
                        (0,
                        a.requestIdleCallback)( () => this.loadRoute(t, !0).catch( () => {}
                        ))
                    }
                    ).catch( () => {}
                    )
                }
            }
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    27325: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            Router: function() {
                return i.default
            },
            createRouter: function() {
                return m
            },
            default: function() {
                return f
            },
            makePublicRouterInstance: function() {
                return g
            },
            useRouter: function() {
                return p
            },
            withRouter: function() {
                return l.default
            }
        });
        let n = r(47043)
          , a = n._(r(2265))
          , i = n._(r(28384))
          , o = r(25523)
          , s = n._(r(2467))
          , l = n._(r(36146))
          , u = {
            router: null,
            readyCallbacks: [],
            ready(e) {
                if (this.router)
                    return e();
                "undefined" != typeof window && this.readyCallbacks.push(e)
            }
        }
          , c = ["pathname", "route", "query", "asPath", "components", "isFallback", "basePath", "locale", "locales", "defaultLocale", "isReady", "isPreview", "isLocaleDomain", "domainLocales"]
          , h = ["push", "replace", "reload", "back", "prefetch", "beforePopState"];
        function d() {
            if (!u.router)
                throw Error('No router instance found.\nYou should only use "next/router" on the client side of your app.\n');
            return u.router
        }
        Object.defineProperty(u, "events", {
            get: () => i.default.events
        }),
        c.forEach(e => {
            Object.defineProperty(u, e, {
                get: () => d()[e]
            })
        }
        ),
        h.forEach(e => {
            u[e] = function() {
                for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return d()[e](...r)
            }
        }
        ),
        ["routeChangeStart", "beforeHistoryChange", "routeChangeComplete", "routeChangeError", "hashChangeStart", "hashChangeComplete"].forEach(e => {
            u.ready( () => {
                i.default.events.on(e, function() {
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                        r[n] = arguments[n];
                    let a = "on" + e.charAt(0).toUpperCase() + e.substring(1);
                    if (u[a])
                        try {
                            u[a](...r)
                        } catch (e) {
                            console.error("Error when running the Router event: " + a),
                            console.error((0,
                            s.default)(e) ? e.message + "\n" + e.stack : e + "")
                        }
                })
            }
            )
        }
        );
        let f = u;
        function p() {
            let e = a.default.useContext(o.RouterContext);
            if (!e)
                throw Error("NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted");
            return e
        }
        function m() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return u.router = new i.default(...t),
            u.readyCallbacks.forEach(e => e()),
            u.readyCallbacks = [],
            u.router
        }
        function g(e) {
            let t = {};
            for (let r of c) {
                if ("object" == typeof e[r]) {
                    t[r] = Object.assign(Array.isArray(e[r]) ? [] : {}, e[r]);
                    continue
                }
                t[r] = e[r]
            }
            return t.events = i.default.events,
            h.forEach(r => {
                t[r] = function() {
                    for (var t = arguments.length, n = Array(t), a = 0; a < t; a++)
                        n[a] = arguments[a];
                    return e[r](...n)
                }
            }
            ),
            t
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    88003: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            default: function() {
                return y
            },
            handleClientScriptLoad: function() {
                return g
            },
            initScriptLoader: function() {
                return _
            }
        });
        let n = r(47043)
          , a = r(53099)
          , i = r(57437)
          , o = n._(r(54887))
          , s = a._(r(2265))
          , l = r(48701)
          , u = r(8221)
          , c = r(63515)
          , h = new Map
          , d = new Set
          , f = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"]
          , p = e => {
            if (o.default.preinit) {
                e.forEach(e => {
                    o.default.preinit(e, {
                        as: "style"
                    })
                }
                );
                return
            }
            if ("undefined" != typeof window) {
                let t = document.head;
                e.forEach(e => {
                    let r = document.createElement("link");
                    r.type = "text/css",
                    r.rel = "stylesheet",
                    r.href = e,
                    t.appendChild(r)
                }
                )
            }
        }
          , m = e => {
            let {src: t, id: r, onLoad: n= () => {}
            , onReady: a=null, dangerouslySetInnerHTML: i, children: o="", strategy: s="afterInteractive", onError: l, stylesheets: c} = e
              , m = r || t;
            if (m && d.has(m))
                return;
            if (h.has(t)) {
                d.add(m),
                h.get(t).then(n, l);
                return
            }
            let g = () => {
                a && a(),
                d.add(m)
            }
              , _ = document.createElement("script")
              , v = new Promise( (e, t) => {
                _.addEventListener("load", function(t) {
                    e(),
                    n && n.call(this, t),
                    g()
                }),
                _.addEventListener("error", function(e) {
                    t(e)
                })
            }
            ).catch(function(e) {
                l && l(e)
            });
            for (let[r,n] of (i ? (_.innerHTML = i.__html || "",
            g()) : o ? (_.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : "",
            g()) : t && (_.src = t,
            h.set(t, v)),
            Object.entries(e))) {
                if (void 0 === n || f.includes(r))
                    continue;
                let e = u.DOMAttributeNames[r] || r.toLowerCase();
                _.setAttribute(e, n)
            }
            "worker" === s && _.setAttribute("type", "text/partytown"),
            _.setAttribute("data-nscript", s),
            c && p(c),
            document.body.appendChild(_)
        }
        ;
        function g(e) {
            let {strategy: t="afterInteractive"} = e;
            "lazyOnload" === t ? window.addEventListener("load", () => {
                (0,
                c.requestIdleCallback)( () => m(e))
            }
            ) : m(e)
        }
        function _(e) {
            e.forEach(g),
            [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                let t = e.id || e.getAttribute("src");
                d.add(t)
            }
            )
        }
        function v(e) {
            let {id: t, src: r="", onLoad: n= () => {}
            , onReady: a=null, strategy: u="afterInteractive", onError: h, stylesheets: f, ...p} = e
              , {updateScripts: g, scripts: _, getIsSsr: v, appDir: y, nonce: P} = (0,
            s.useContext)(l.HeadManagerContext)
              , b = (0,
            s.useRef)(!1);
            (0,
            s.useEffect)( () => {
                let e = t || r;
                b.current || (a && e && d.has(e) && a(),
                b.current = !0)
            }
            , [a, t, r]);
            let w = (0,
            s.useRef)(!1);
            if ((0,
            s.useEffect)( () => {
                !w.current && ("afterInteractive" === u ? m(e) : "lazyOnload" === u && ("complete" === document.readyState ? (0,
                c.requestIdleCallback)( () => m(e)) : window.addEventListener("load", () => {
                    (0,
                    c.requestIdleCallback)( () => m(e))
                }
                )),
                w.current = !0)
            }
            , [e, u]),
            ("beforeInteractive" === u || "worker" === u) && (g ? (_[u] = (_[u] || []).concat([{
                id: t,
                src: r,
                onLoad: n,
                onReady: a,
                onError: h,
                ...p
            }]),
            g(_)) : v && v() ? d.add(t || r) : v && !v() && m(e)),
            y) {
                if (f && f.forEach(e => {
                    o.default.preinit(e, {
                        as: "style"
                    })
                }
                ),
                "beforeInteractive" === u)
                    return r ? (o.default.preload(r, p.integrity ? {
                        as: "script",
                        integrity: p.integrity,
                        nonce: P,
                        crossOrigin: p.crossOrigin
                    } : {
                        as: "script",
                        nonce: P,
                        crossOrigin: p.crossOrigin
                    }),
                    (0,
                    i.jsx)("script", {
                        nonce: P,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([r, {
                                ...p,
                                id: t
                            }]) + ")"
                        }
                    })) : (p.dangerouslySetInnerHTML && (p.children = p.dangerouslySetInnerHTML.__html,
                    delete p.dangerouslySetInnerHTML),
                    (0,
                    i.jsx)("script", {
                        nonce: P,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, {
                                ...p,
                                id: t
                            }]) + ")"
                        }
                    }));
                "afterInteractive" === u && r && o.default.preload(r, p.integrity ? {
                    as: "script",
                    integrity: p.integrity,
                    nonce: P,
                    crossOrigin: p.crossOrigin
                } : {
                    as: "script",
                    nonce: P,
                    crossOrigin: p.crossOrigin
                })
            }
            return null
        }
        Object.defineProperty(v, "__nextScript", {
            value: !0
        });
        let y = v;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    36390: function(e, t) {
        "use strict";
        let r;
        function n(e) {
            var t;
            return (null == (t = function() {
                if (void 0 === r && "undefined" != typeof window) {
                    var e;
                    r = (null == (e = window.trustedTypes) ? void 0 : e.createPolicy("nextjs", {
                        createHTML: e => e,
                        createScript: e => e,
                        createScriptURL: e => e
                    })) || null
                }
                return r
            }()) ? void 0 : t.createScriptURL(e)) || e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "__unsafeCreateTrustedScriptURL", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    36146: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return i
            }
        }),
        r(47043);
        let n = r(57437);
        r(2265);
        let a = r(27325);
        function i(e) {
            function t(t) {
                return (0,
                n.jsx)(e, {
                    router: (0,
                    a.useRouter)(),
                    ...t
                })
            }
            return t.getInitialProps = e.getInitialProps,
            t.origGetInitialProps = e.origGetInitialProps,
            t
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    44227: function(e) {
        !function() {
            var t = {
                229: function(e) {
                    var t, r, n, a = e.exports = {};
                    function i() {
                        throw Error("setTimeout has not been defined")
                    }
                    function o() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function s(e) {
                        if (t === setTimeout)
                            return setTimeout(e, 0);
                        if ((t === i || !t) && setTimeout)
                            return t = setTimeout,
                            setTimeout(e, 0);
                        try {
                            return t(e, 0)
                        } catch (r) {
                            try {
                                return t.call(null, e, 0)
                            } catch (r) {
                                return t.call(this, e, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            t = "function" == typeof setTimeout ? setTimeout : i
                        } catch (e) {
                            t = i
                        }
                        try {
                            r = "function" == typeof clearTimeout ? clearTimeout : o
                        } catch (e) {
                            r = o
                        }
                    }();
                    var l = []
                      , u = !1
                      , c = -1;
                    function h() {
                        u && n && (u = !1,
                        n.length ? l = n.concat(l) : c = -1,
                        l.length && d())
                    }
                    function d() {
                        if (!u) {
                            var e = s(h);
                            u = !0;
                            for (var t = l.length; t; ) {
                                for (n = l,
                                l = []; ++c < t; )
                                    n && n[c].run();
                                c = -1,
                                t = l.length
                            }
                            n = null,
                            u = !1,
                            function(e) {
                                if (r === clearTimeout)
                                    return clearTimeout(e);
                                if ((r === o || !r) && clearTimeout)
                                    return r = clearTimeout,
                                    clearTimeout(e);
                                try {
                                    r(e)
                                } catch (t) {
                                    try {
                                        return r.call(null, e)
                                    } catch (t) {
                                        return r.call(this, e)
                                    }
                                }
                            }(e)
                        }
                    }
                    function f(e, t) {
                        this.fun = e,
                        this.array = t
                    }
                    function p() {}
                    a.nextTick = function(e) {
                        var t = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++)
                                t[r - 1] = arguments[r];
                        l.push(new f(e,t)),
                        1 !== l.length || u || s(d)
                    }
                    ,
                    f.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    a.title = "browser",
                    a.browser = !0,
                    a.env = {},
                    a.argv = [],
                    a.version = "",
                    a.versions = {},
                    a.on = p,
                    a.addListener = p,
                    a.once = p,
                    a.off = p,
                    a.removeListener = p,
                    a.removeAllListeners = p,
                    a.emit = p,
                    a.prependListener = p,
                    a.prependOnceListener = p,
                    a.listeners = function(e) {
                        return []
                    }
                    ,
                    a.binding = function(e) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    a.cwd = function() {
                        return "/"
                    }
                    ,
                    a.chdir = function(e) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    a.umask = function() {
                        return 0
                    }
                }
            }
              , r = {};
            function n(e) {
                var a = r[e];
                if (void 0 !== a)
                    return a.exports;
                var i = r[e] = {
                    exports: {}
                }
                  , o = !0;
                try {
                    t[e](i, i.exports, n),
                    o = !1
                } finally {
                    o && delete r[e]
                }
                return i.exports
            }
            n.ab = "//";
            var a = n(229);
            e.exports = a
        }()
    },
    61875: function(e, t) {
        "use strict";
        function r(e) {
            return "/api" === e || !!(null == e ? void 0 : e.startsWith("/api/"))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isAPIRoute", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    2467: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            default: function() {
                return a
            },
            getProperError: function() {
                return i
            }
        });
        let n = r(99832);
        function a(e) {
            return "object" == typeof e && null !== e && "name"in e && "message"in e
        }
        function i(e) {
            return a(e) ? e : Error((0,
            n.isPlainObject)(e) ? JSON.stringify(e) : e + "")
        }
    },
    74574: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "BloomFilter", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        class r {
            static from(e, t) {
                void 0 === t && (t = 1e-4);
                let n = new r(e.length,t);
                for (let t of e)
                    n.add(t);
                return n
            }
            export() {
                return {
                    numItems: this.numItems,
                    errorRate: this.errorRate,
                    numBits: this.numBits,
                    numHashes: this.numHashes,
                    bitArray: this.bitArray
                }
            }
            import(e) {
                this.numItems = e.numItems,
                this.errorRate = e.errorRate,
                this.numBits = e.numBits,
                this.numHashes = e.numHashes,
                this.bitArray = e.bitArray
            }
            add(e) {
                this.getHashValues(e).forEach(e => {
                    this.bitArray[e] = 1
                }
                )
            }
            contains(e) {
                return this.getHashValues(e).every(e => this.bitArray[e])
            }
            getHashValues(e) {
                let t = [];
                for (let r = 1; r <= this.numHashes; r++) {
                    let n = function(e) {
                        let t = 0;
                        for (let r = 0; r < e.length; r++)
                            t = Math.imul(t ^ e.charCodeAt(r), 1540483477),
                            t ^= t >>> 13,
                            t = Math.imul(t, 1540483477);
                        return t >>> 0
                    }("" + e + r) % this.numBits;
                    t.push(n)
                }
                return t
            }
            constructor(e, t=1e-4) {
                this.numItems = e,
                this.errorRate = t,
                this.numBits = Math.ceil(-(e * Math.log(t)) / (Math.log(2) * Math.log(2))),
                this.numHashes = Math.ceil(this.numBits / e * Math.log(2)),
                this.bitArray = Array(this.numBits).fill(0)
            }
        }
    },
    43579: function(e, t) {
        "use strict";
        function r(e, t) {
            let r;
            let n = e.split("/");
            return (t || []).some(t => !!n[1] && n[1].toLowerCase() === t.toLowerCase() && (r = t,
            n.splice(1, 1),
            e = n.join("/") || "/",
            !0)),
            {
                pathname: e,
                detectedLocale: r
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "normalizeLocalePath", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    99832: function(e, t) {
        "use strict";
        function r(e) {
            return Object.prototype.toString.call(e)
        }
        function n(e) {
            if ("[object Object]" !== r(e))
                return !1;
            let t = Object.getPrototypeOf(e);
            return null === t || t.hasOwnProperty("isPrototypeOf")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            getObjectClassLabel: function() {
                return r
            },
            isPlainObject: function() {
                return n
            }
        })
    },
    29081: function(e, t) {
        "use strict";
        function r() {
            let e = Object.create(null);
            return {
                on(t, r) {
                    (e[t] || (e[t] = [])).push(r)
                },
                off(t, r) {
                    e[t] && e[t].splice(e[t].indexOf(r) >>> 0, 1)
                },
                emit(t) {
                    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                        n[a - 1] = arguments[a];
                    (e[t] || []).slice().map(e => {
                        e(...n)
                    }
                    )
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    8645: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "denormalizePagePath", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = r(86279)
          , a = r(27524);
        function i(e) {
            let t = (0,
            a.normalizePathSep)(e);
            return t.startsWith("/index/") && !(0,
            n.isDynamicRoute)(t) ? t.slice(6) : "/index" !== t ? t : "/"
        }
    },
    27524: function(e, t) {
        "use strict";
        function r(e) {
            return e.replace(/\\/g, "/")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "normalizePathSep", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    28384: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            createKey: function() {
                return W
            },
            default: function() {
                return G
            },
            matchesMiddleware: function() {
                return N
            }
        });
        let n = r(47043)
          , a = r(53099)
          , i = r(26674)
          , o = r(6680)
          , s = r(88003)
          , l = a._(r(2467))
          , u = r(8645)
          , c = r(43579)
          , h = n._(r(29081))
          , d = r(3987)
          , f = r(38104)
          , p = r(85907);
        r(72431);
        let m = r(4199)
          , g = r(9964)
          , _ = r(57497);
        r(11235);
        let v = r(63381)
          , y = r(55449)
          , P = r(71154)
          , b = r(35076)
          , w = r(1634)
          , S = r(11283)
          , j = r(25246)
          , O = r(61875)
          , E = r(93331)
          , L = r(79114)
          , R = r(75902)
          , x = r(53552)
          , C = r(86146)
          , A = r(17053)
          , M = r(37205)
          , I = r(7092);
        function T() {
            return Object.assign(Error("Route Cancelled"), {
                cancelled: !0
            })
        }
        async function N(e) {
            let t = await Promise.resolve(e.router.pageLoader.getMiddleware());
            if (!t)
                return !1;
            let {pathname: r} = (0,
            v.parsePath)(e.asPath)
              , n = (0,
            S.hasBasePath)(r) ? (0,
            b.removeBasePath)(r) : r
              , a = (0,
            w.addBasePath)((0,
            y.addLocale)(n, e.locale));
            return t.some(e => new RegExp(e.regexp).test(a))
        }
        function k(e) {
            let t = (0,
            d.getLocationOrigin)();
            return e.startsWith(t) ? e.substring(t.length) : e
        }
        function H(e, t, r) {
            let[n,a] = (0,
            j.resolveHref)(e, t, !0)
              , i = (0,
            d.getLocationOrigin)()
              , o = n.startsWith(i)
              , s = a && a.startsWith(i);
            n = k(n),
            a = a ? k(a) : a;
            let l = o ? n : (0,
            w.addBasePath)(n)
              , u = r ? k((0,
            j.resolveHref)(e, r)) : a || n;
            return {
                url: l,
                as: s ? u : (0,
                w.addBasePath)(u)
            }
        }
        function D(e, t) {
            let r = (0,
            i.removeTrailingSlash)((0,
            u.denormalizePagePath)(e));
            return "/404" === r || "/_error" === r ? e : (t.includes(r) || t.some(t => {
                if ((0,
                f.isDynamicRoute)(t) && (0,
                g.getRouteRegex)(t).re.test(r))
                    return e = t,
                    !0
            }
            ),
            (0,
            i.removeTrailingSlash)(e))
        }
        async function B(e) {
            if (!await N(e) || !e.fetchData)
                return null;
            let t = await e.fetchData()
              , r = await function(e, t, r) {
                let n = {
                    basePath: r.router.basePath,
                    i18n: {
                        locales: r.router.locales
                    },
                    trailingSlash: !1
                }
                  , a = t.headers.get("x-nextjs-rewrite")
                  , s = a || t.headers.get("x-nextjs-matched-path")
                  , l = t.headers.get("x-matched-path");
                if (!l || s || l.includes("__next_data_catchall") || l.includes("/_error") || l.includes("/404") || (s = l),
                s) {
                    if (s.startsWith("/")) {
                        let t = (0,
                        p.parseRelativeUrl)(s)
                          , l = (0,
                        E.getNextPathnameInfo)(t.pathname, {
                            nextConfig: n,
                            parseData: !0
                        })
                          , u = (0,
                        i.removeTrailingSlash)(l.pathname);
                        return Promise.all([r.router.pageLoader.getPageList(), (0,
                        o.getClientBuildManifest)()]).then(i => {
                            let[o,{__rewrites: s}] = i
                              , h = (0,
                            y.addLocale)(l.pathname, l.locale);
                            if ((0,
                            f.isDynamicRoute)(h) || !a && o.includes((0,
                            c.normalizeLocalePath)((0,
                            b.removeBasePath)(h), r.router.locales).pathname)) {
                                let r = (0,
                                E.getNextPathnameInfo)((0,
                                p.parseRelativeUrl)(e).pathname, {
                                    nextConfig: n,
                                    parseData: !0
                                });
                                h = (0,
                                w.addBasePath)(r.pathname),
                                t.pathname = h
                            }
                            if (!o.includes(u)) {
                                let e = D(u, o);
                                e !== u && (u = e)
                            }
                            let d = o.includes(u) ? u : D((0,
                            c.normalizeLocalePath)((0,
                            b.removeBasePath)(t.pathname), r.router.locales).pathname, o);
                            if ((0,
                            f.isDynamicRoute)(d)) {
                                let e = (0,
                                m.getRouteMatcher)((0,
                                g.getRouteRegex)(d))(h);
                                Object.assign(t.query, e || {})
                            }
                            return {
                                type: "rewrite",
                                parsedAs: t,
                                resolvedHref: d
                            }
                        }
                        )
                    }
                    let t = (0,
                    v.parsePath)(e);
                    return Promise.resolve({
                        type: "redirect-external",
                        destination: "" + (0,
                        L.formatNextPathnameInfo)({
                            ...(0,
                            E.getNextPathnameInfo)(t.pathname, {
                                nextConfig: n,
                                parseData: !0
                            }),
                            defaultLocale: r.router.defaultLocale,
                            buildId: ""
                        }) + t.query + t.hash
                    })
                }
                let u = t.headers.get("x-nextjs-redirect");
                if (u) {
                    if (u.startsWith("/")) {
                        let e = (0,
                        v.parsePath)(u)
                          , t = (0,
                        L.formatNextPathnameInfo)({
                            ...(0,
                            E.getNextPathnameInfo)(e.pathname, {
                                nextConfig: n,
                                parseData: !0
                            }),
                            defaultLocale: r.router.defaultLocale,
                            buildId: ""
                        });
                        return Promise.resolve({
                            type: "redirect-internal",
                            newAs: "" + t + e.query + e.hash,
                            newUrl: "" + t + e.query + e.hash
                        })
                    }
                    return Promise.resolve({
                        type: "redirect-external",
                        destination: u
                    })
                }
                return Promise.resolve({
                    type: "next"
                })
            }(t.dataHref, t.response, e);
            return {
                dataHref: t.dataHref,
                json: t.json,
                response: t.response,
                text: t.text,
                cacheKey: t.cacheKey,
                effect: r
            }
        }
        let U = Symbol("SSG_DATA_NOT_FOUND");
        function q(e) {
            try {
                return JSON.parse(e)
            } catch (e) {
                return null
            }
        }
        function F(e) {
            let {dataHref: t, inflightCache: r, isPrefetch: n, hasMiddleware: a, isServerRender: i, parseJSON: s, persistCache: l, isBackground: u, unstable_skipClientCache: c} = e
              , {href: h} = new URL(t,window.location.href)
              , d = e => {
                var u;
                return (function e(t, r, n) {
                    return fetch(t, {
                        credentials: "same-origin",
                        method: n.method || "GET",
                        headers: Object.assign({}, n.headers, {
                            "x-nextjs-data": "1"
                        })
                    }).then(a => !a.ok && r > 1 && a.status >= 500 ? e(t, r - 1, n) : a)
                }
                )(t, i ? 3 : 1, {
                    headers: Object.assign({}, n ? {
                        purpose: "prefetch"
                    } : {}, n && a ? {
                        "x-middleware-prefetch": "1"
                    } : {}),
                    method: null != (u = null == e ? void 0 : e.method) ? u : "GET"
                }).then(r => r.ok && (null == e ? void 0 : e.method) === "HEAD" ? {
                    dataHref: t,
                    response: r,
                    text: "",
                    json: {},
                    cacheKey: h
                } : r.text().then(e => {
                    if (!r.ok) {
                        if (a && [301, 302, 307, 308].includes(r.status))
                            return {
                                dataHref: t,
                                response: r,
                                text: e,
                                json: {},
                                cacheKey: h
                            };
                        if (404 === r.status) {
                            var n;
                            if (null == (n = q(e)) ? void 0 : n.notFound)
                                return {
                                    dataHref: t,
                                    json: {
                                        notFound: U
                                    },
                                    response: r,
                                    text: e,
                                    cacheKey: h
                                }
                        }
                        let s = Error("Failed to load static props");
                        throw i || (0,
                        o.markAssetError)(s),
                        s
                    }
                    return {
                        dataHref: t,
                        json: s ? q(e) : null,
                        response: r,
                        text: e,
                        cacheKey: h
                    }
                }
                )).then(e => (l && "no-cache" !== e.response.headers.get("x-middleware-cache") || delete r[h],
                e)).catch(e => {
                    throw c || delete r[h],
                    ("Failed to fetch" === e.message || "NetworkError when attempting to fetch resource." === e.message || "Load failed" === e.message) && (0,
                    o.markAssetError)(e),
                    e
                }
                )
            }
            ;
            return c && l ? d({}).then(e => ("no-cache" !== e.response.headers.get("x-middleware-cache") && (r[h] = Promise.resolve(e)),
            e)) : void 0 !== r[h] ? r[h] : r[h] = d(u ? {
                method: "HEAD"
            } : {})
        }
        function W() {
            return Math.random().toString(36).slice(2, 10)
        }
        function z(e) {
            let {url: t, router: r} = e;
            if (t === (0,
            w.addBasePath)((0,
            y.addLocale)(r.asPath, r.locale)))
                throw Error("Invariant: attempted to hard navigate to the same URL " + t + " " + location.href);
            window.location.href = t
        }
        let V = e => {
            let {route: t, router: r} = e
              , n = !1
              , a = r.clc = () => {
                n = !0
            }
            ;
            return () => {
                if (n) {
                    let e = Error('Abort fetching component for route: "' + t + '"');
                    throw e.cancelled = !0,
                    e
                }
                a === r.clc && (r.clc = null)
            }
        }
        ;
        class G {
            reload() {
                window.location.reload()
            }
            back() {
                window.history.back()
            }
            forward() {
                window.history.forward()
            }
            push(e, t, r) {
                return void 0 === r && (r = {}),
                {url: e, as: t} = H(this, e, t),
                this.change("pushState", e, t, r)
            }
            replace(e, t, r) {
                return void 0 === r && (r = {}),
                {url: e, as: t} = H(this, e, t),
                this.change("replaceState", e, t, r)
            }
            async _bfl(e, t, r, n) {
                {
                    let l = !1
                      , u = !1;
                    for (let c of [e, t])
                        if (c) {
                            let t = (0,
                            i.removeTrailingSlash)(new URL(c,"http://n").pathname)
                              , h = (0,
                            w.addBasePath)((0,
                            y.addLocale)(t, r || this.locale));
                            if (t !== (0,
                            i.removeTrailingSlash)(new URL(this.asPath,"http://n").pathname)) {
                                var a, o, s;
                                for (let e of (l = l || !!(null == (a = this._bfl_s) ? void 0 : a.contains(t)) || !!(null == (o = this._bfl_s) ? void 0 : o.contains(h)),
                                [t, h])) {
                                    let t = e.split("/");
                                    for (let e = 0; !u && e < t.length + 1; e++) {
                                        let r = t.slice(0, e).join("/");
                                        if (r && (null == (s = this._bfl_d) ? void 0 : s.contains(r))) {
                                            u = !0;
                                            break
                                        }
                                    }
                                }
                                if (l || u) {
                                    if (n)
                                        return !0;
                                    return z({
                                        url: (0,
                                        w.addBasePath)((0,
                                        y.addLocale)(e, r || this.locale, this.defaultLocale)),
                                        router: this
                                    }),
                                    new Promise( () => {}
                                    )
                                }
                            }
                        }
                }
                return !1
            }
            async change(e, t, r, n, a) {
                var u, c, h, j, O, E, L, C, I;
                let k, B;
                if (!(0,
                x.isLocalURL)(t))
                    return z({
                        url: t,
                        router: this
                    }),
                    !1;
                let q = 1 === n._h;
                q || n.shallow || await this._bfl(r, void 0, n.locale);
                let F = q || n._shouldResolveHref || (0,
                v.parsePath)(t).pathname === (0,
                v.parsePath)(r).pathname
                  , W = {
                    ...this.state
                }
                  , V = !0 !== this.isReady;
                this.isReady = !0;
                let X = this.isSsr;
                if (q || (this.isSsr = !1),
                q && this.clc)
                    return !1;
                let J = W.locale;
                d.ST && performance.mark("routeChange");
                let {shallow: K=!1, scroll: $=!0} = n
                  , Q = {
                    shallow: K
                };
                this._inFlightRoute && this.clc && (X || G.events.emit("routeChangeError", T(), this._inFlightRoute, Q),
                this.clc(),
                this.clc = null),
                r = (0,
                w.addBasePath)((0,
                y.addLocale)((0,
                S.hasBasePath)(r) ? (0,
                b.removeBasePath)(r) : r, n.locale, this.defaultLocale));
                let Z = (0,
                P.removeLocale)((0,
                S.hasBasePath)(r) ? (0,
                b.removeBasePath)(r) : r, W.locale);
                this._inFlightRoute = r;
                let Y = J !== W.locale;
                if (!q && this.onlyAHashChange(Z) && !Y) {
                    W.asPath = Z,
                    G.events.emit("hashChangeStart", r, Q),
                    this.changeState(e, t, r, {
                        ...n,
                        scroll: !1
                    }),
                    $ && this.scrollToHash(Z);
                    try {
                        await this.set(W, this.components[W.route], null)
                    } catch (e) {
                        throw (0,
                        l.default)(e) && e.cancelled && G.events.emit("routeChangeError", e, Z, Q),
                        e
                    }
                    return G.events.emit("hashChangeComplete", r, Q),
                    !0
                }
                let ee = (0,
                p.parseRelativeUrl)(t)
                  , {pathname: et, query: er} = ee;
                try {
                    [k,{__rewrites: B}] = await Promise.all([this.pageLoader.getPageList(), (0,
                    o.getClientBuildManifest)(), this.pageLoader.getMiddleware()])
                } catch (e) {
                    return z({
                        url: r,
                        router: this
                    }),
                    !1
                }
                this.urlIsNew(Z) || Y || (e = "replaceState");
                let en = r;
                et = et ? (0,
                i.removeTrailingSlash)((0,
                b.removeBasePath)(et)) : et;
                let ea = (0,
                i.removeTrailingSlash)(et)
                  , ei = r.startsWith("/") && (0,
                p.parseRelativeUrl)(r).pathname;
                if (null == (u = this.components[et]) ? void 0 : u.__appRouter)
                    return z({
                        url: r,
                        router: this
                    }),
                    new Promise( () => {}
                    );
                let eo = !!(ei && ea !== ei && (!(0,
                f.isDynamicRoute)(ea) || !(0,
                m.getRouteMatcher)((0,
                g.getRouteRegex)(ea))(ei)))
                  , es = !n.shallow && await N({
                    asPath: r,
                    locale: W.locale,
                    router: this
                });
                if (q && es && (F = !1),
                F && "/_error" !== et && (n._shouldResolveHref = !0,
                ee.pathname = D(et, k),
                ee.pathname === et || (et = ee.pathname,
                ee.pathname = (0,
                w.addBasePath)(et),
                es || (t = (0,
                _.formatWithValidation)(ee)))),
                !(0,
                x.isLocalURL)(r))
                    return z({
                        url: r,
                        router: this
                    }),
                    !1;
                en = (0,
                P.removeLocale)((0,
                b.removeBasePath)(en), W.locale),
                ea = (0,
                i.removeTrailingSlash)(et);
                let el = !1;
                if ((0,
                f.isDynamicRoute)(ea)) {
                    let e = (0,
                    p.parseRelativeUrl)(en)
                      , n = e.pathname
                      , a = (0,
                    g.getRouteRegex)(ea);
                    el = (0,
                    m.getRouteMatcher)(a)(n);
                    let i = ea === n
                      , o = i ? (0,
                    M.interpolateAs)(ea, n, er) : {};
                    if (el && (!i || o.result))
                        i ? r = (0,
                        _.formatWithValidation)(Object.assign({}, e, {
                            pathname: o.result,
                            query: (0,
                            A.omit)(er, o.params)
                        })) : Object.assign(er, el);
                    else {
                        let e = Object.keys(a.groups).filter(e => !er[e] && !a.groups[e].optional);
                        if (e.length > 0 && !es)
                            throw Error((i ? "The provided `href` (" + t + ") value is missing query values (" + e.join(", ") + ") to be interpolated properly. " : "The provided `as` value (" + n + ") is incompatible with the `href` value (" + ea + "). ") + "Read more: https://nextjs.org/docs/messages/" + (i ? "href-interpolation-failed" : "incompatible-href-as"))
                    }
                }
                q || G.events.emit("routeChangeStart", r, Q);
                let eu = "/404" === this.pathname || "/_error" === this.pathname;
                try {
                    let i = await this.getRouteInfo({
                        route: ea,
                        pathname: et,
                        query: er,
                        as: r,
                        resolvedAs: en,
                        routeProps: Q,
                        locale: W.locale,
                        isPreview: W.isPreview,
                        hasMiddleware: es,
                        unstable_skipClientCache: n.unstable_skipClientCache,
                        isQueryUpdating: q && !this.isFallback,
                        isMiddlewareRewrite: eo
                    });
                    if (q || n.shallow || await this._bfl(r, "resolvedAs"in i ? i.resolvedAs : void 0, W.locale),
                    "route"in i && es) {
                        ea = et = i.route || ea,
                        Q.shallow || (er = Object.assign({}, i.query || {}, er));
                        let e = (0,
                        S.hasBasePath)(ee.pathname) ? (0,
                        b.removeBasePath)(ee.pathname) : ee.pathname;
                        if (el && et !== e && Object.keys(el).forEach(e => {
                            el && er[e] === el[e] && delete er[e]
                        }
                        ),
                        (0,
                        f.isDynamicRoute)(et)) {
                            let e = !Q.shallow && i.resolvedAs ? i.resolvedAs : (0,
                            w.addBasePath)((0,
                            y.addLocale)(new URL(r,location.href).pathname, W.locale), !0);
                            (0,
                            S.hasBasePath)(e) && (e = (0,
                            b.removeBasePath)(e));
                            let t = (0,
                            g.getRouteRegex)(et)
                              , n = (0,
                            m.getRouteMatcher)(t)(new URL(e,location.href).pathname);
                            n && Object.assign(er, n)
                        }
                    }
                    if ("type"in i) {
                        if ("redirect-internal" === i.type)
                            return this.change(e, i.newUrl, i.newAs, n);
                        return z({
                            url: i.destination,
                            router: this
                        }),
                        new Promise( () => {}
                        )
                    }
                    let o = i.Component;
                    if (o && o.unstable_scriptLoader && [].concat(o.unstable_scriptLoader()).forEach(e => {
                        (0,
                        s.handleClientScriptLoad)(e.props)
                    }
                    ),
                    (i.__N_SSG || i.__N_SSP) && i.props) {
                        if (i.props.pageProps && i.props.pageProps.__N_REDIRECT) {
                            n.locale = !1;
                            let t = i.props.pageProps.__N_REDIRECT;
                            if (t.startsWith("/") && !1 !== i.props.pageProps.__N_REDIRECT_BASE_PATH) {
                                let r = (0,
                                p.parseRelativeUrl)(t);
                                r.pathname = D(r.pathname, k);
                                let {url: a, as: i} = H(this, t, t);
                                return this.change(e, a, i, n)
                            }
                            return z({
                                url: t,
                                router: this
                            }),
                            new Promise( () => {}
                            )
                        }
                        if (W.isPreview = !!i.props.__N_PREVIEW,
                        i.props.notFound === U) {
                            let e;
                            try {
                                await this.fetchComponent("/404"),
                                e = "/404"
                            } catch (t) {
                                e = "/_error"
                            }
                            if (i = await this.getRouteInfo({
                                route: e,
                                pathname: e,
                                query: er,
                                as: r,
                                resolvedAs: en,
                                routeProps: {
                                    shallow: !1
                                },
                                locale: W.locale,
                                isPreview: W.isPreview,
                                isNotFound: !0
                            }),
                            "type"in i)
                                throw Error("Unexpected middleware effect on /404")
                        }
                    }
                    q && "/_error" === this.pathname && (null == (h = self.__NEXT_DATA__.props) ? void 0 : null == (c = h.pageProps) ? void 0 : c.statusCode) === 500 && (null == (j = i.props) ? void 0 : j.pageProps) && (i.props.pageProps.statusCode = 500);
                    let u = n.shallow && W.route === (null != (O = i.route) ? O : ea)
                      , d = null != (E = n.scroll) ? E : !q && !u
                      , _ = null != a ? a : d ? {
                        x: 0,
                        y: 0
                    } : null
                      , v = {
                        ...W,
                        route: ea,
                        pathname: et,
                        query: er,
                        asPath: Z,
                        isFallback: !1
                    };
                    if (q && eu) {
                        if (i = await this.getRouteInfo({
                            route: this.pathname,
                            pathname: this.pathname,
                            query: er,
                            as: r,
                            resolvedAs: en,
                            routeProps: {
                                shallow: !1
                            },
                            locale: W.locale,
                            isPreview: W.isPreview,
                            isQueryUpdating: q && !this.isFallback
                        }),
                        "type"in i)
                            throw Error("Unexpected middleware effect on " + this.pathname);
                        "/_error" === this.pathname && (null == (C = self.__NEXT_DATA__.props) ? void 0 : null == (L = C.pageProps) ? void 0 : L.statusCode) === 500 && (null == (I = i.props) ? void 0 : I.pageProps) && (i.props.pageProps.statusCode = 500);
                        try {
                            await this.set(v, i, _)
                        } catch (e) {
                            throw (0,
                            l.default)(e) && e.cancelled && G.events.emit("routeChangeError", e, Z, Q),
                            e
                        }
                        return !0
                    }
                    if (G.events.emit("beforeHistoryChange", r, Q),
                    this.changeState(e, t, r, n),
                    !(q && !_ && !V && !Y && (0,
                    R.compareRouterStates)(v, this.state))) {
                        try {
                            await this.set(v, i, _)
                        } catch (e) {
                            if (e.cancelled)
                                i.error = i.error || e;
                            else
                                throw e
                        }
                        if (i.error)
                            throw q || G.events.emit("routeChangeError", i.error, Z, Q),
                            i.error;
                        q || G.events.emit("routeChangeComplete", r, Q),
                        d && /#.+$/.test(r) && this.scrollToHash(r)
                    }
                    return !0
                } catch (e) {
                    if ((0,
                    l.default)(e) && e.cancelled)
                        return !1;
                    throw e
                }
            }
            changeState(e, t, r, n) {
                void 0 === n && (n = {}),
                ("pushState" !== e || (0,
                d.getURL)() !== r) && (this._shallow = n.shallow,
                window.history[e]({
                    url: t,
                    as: r,
                    options: n,
                    __N: !0,
                    key: this._key = "pushState" !== e ? this._key : W()
                }, "", r))
            }
            async handleRouteInfoError(e, t, r, n, a, i) {
                if (console.error(e),
                e.cancelled)
                    throw e;
                if ((0,
                o.isAssetError)(e) || i)
                    throw G.events.emit("routeChangeError", e, n, a),
                    z({
                        url: n,
                        router: this
                    }),
                    T();
                try {
                    let n;
                    let {page: a, styleSheets: i} = await this.fetchComponent("/_error")
                      , o = {
                        props: n,
                        Component: a,
                        styleSheets: i,
                        err: e,
                        error: e
                    };
                    if (!o.props)
                        try {
                            o.props = await this.getInitialProps(a, {
                                err: e,
                                pathname: t,
                                query: r
                            })
                        } catch (e) {
                            console.error("Error in error page `getInitialProps`: ", e),
                            o.props = {}
                        }
                    return o
                } catch (e) {
                    return this.handleRouteInfoError((0,
                    l.default)(e) ? e : Error(e + ""), t, r, n, a, !0)
                }
            }
            async getRouteInfo(e) {
                let {route: t, pathname: r, query: n, as: a, resolvedAs: o, routeProps: s, locale: u, hasMiddleware: h, isPreview: d, unstable_skipClientCache: f, isQueryUpdating: p, isMiddlewareRewrite: m, isNotFound: g} = e
                  , v = t;
                try {
                    var y, P, w, S;
                    let e = this.components[v];
                    if (s.shallow && e && this.route === v)
                        return e;
                    let t = V({
                        route: v,
                        router: this
                    });
                    h && (e = void 0);
                    let l = !e || "initial"in e ? void 0 : e
                      , j = {
                        dataHref: this.pageLoader.getDataHref({
                            href: (0,
                            _.formatWithValidation)({
                                pathname: r,
                                query: n
                            }),
                            skipInterpolation: !0,
                            asPath: g ? "/404" : o,
                            locale: u
                        }),
                        hasMiddleware: !0,
                        isServerRender: this.isSsr,
                        parseJSON: !0,
                        inflightCache: p ? this.sbc : this.sdc,
                        persistCache: !d,
                        isPrefetch: !1,
                        unstable_skipClientCache: f,
                        isBackground: p
                    }
                      , E = p && !m ? null : await B({
                        fetchData: () => F(j),
                        asPath: g ? "/404" : o,
                        locale: u,
                        router: this
                    }).catch(e => {
                        if (p)
                            return null;
                        throw e
                    }
                    );
                    if (E && ("/_error" === r || "/404" === r) && (E.effect = void 0),
                    p && (E ? E.json = self.__NEXT_DATA__.props : E = {
                        json: self.__NEXT_DATA__.props
                    }),
                    t(),
                    (null == E ? void 0 : null == (y = E.effect) ? void 0 : y.type) === "redirect-internal" || (null == E ? void 0 : null == (P = E.effect) ? void 0 : P.type) === "redirect-external")
                        return E.effect;
                    if ((null == E ? void 0 : null == (w = E.effect) ? void 0 : w.type) === "rewrite") {
                        let t = (0,
                        i.removeTrailingSlash)(E.effect.resolvedHref)
                          , a = await this.pageLoader.getPageList();
                        if ((!p || a.includes(t)) && (v = t,
                        r = E.effect.resolvedHref,
                        n = {
                            ...n,
                            ...E.effect.parsedAs.query
                        },
                        o = (0,
                        b.removeBasePath)((0,
                        c.normalizeLocalePath)(E.effect.parsedAs.pathname, this.locales).pathname),
                        e = this.components[v],
                        s.shallow && e && this.route === v && !h))
                            return {
                                ...e,
                                route: v
                            }
                    }
                    if ((0,
                    O.isAPIRoute)(v))
                        return z({
                            url: a,
                            router: this
                        }),
                        new Promise( () => {}
                        );
                    let L = l || await this.fetchComponent(v).then(e => ({
                        Component: e.page,
                        styleSheets: e.styleSheets,
                        __N_SSG: e.mod.__N_SSG,
                        __N_SSP: e.mod.__N_SSP
                    }))
                      , R = null == E ? void 0 : null == (S = E.response) ? void 0 : S.headers.get("x-middleware-skip")
                      , x = L.__N_SSG || L.__N_SSP;
                    R && (null == E ? void 0 : E.dataHref) && delete this.sdc[E.dataHref];
                    let {props: C, cacheKey: A} = await this._getData(async () => {
                        if (x) {
                            if ((null == E ? void 0 : E.json) && !R)
                                return {
                                    cacheKey: E.cacheKey,
                                    props: E.json
                                };
                            let e = (null == E ? void 0 : E.dataHref) ? E.dataHref : this.pageLoader.getDataHref({
                                href: (0,
                                _.formatWithValidation)({
                                    pathname: r,
                                    query: n
                                }),
                                asPath: o,
                                locale: u
                            })
                              , t = await F({
                                dataHref: e,
                                isServerRender: this.isSsr,
                                parseJSON: !0,
                                inflightCache: R ? {} : this.sdc,
                                persistCache: !d,
                                isPrefetch: !1,
                                unstable_skipClientCache: f
                            });
                            return {
                                cacheKey: t.cacheKey,
                                props: t.json || {}
                            }
                        }
                        return {
                            headers: {},
                            props: await this.getInitialProps(L.Component, {
                                pathname: r,
                                query: n,
                                asPath: a,
                                locale: u,
                                locales: this.locales,
                                defaultLocale: this.defaultLocale
                            })
                        }
                    }
                    );
                    return L.__N_SSP && j.dataHref && A && delete this.sdc[A],
                    this.isPreview || !L.__N_SSG || p || F(Object.assign({}, j, {
                        isBackground: !0,
                        persistCache: !1,
                        inflightCache: this.sbc
                    })).catch( () => {}
                    ),
                    C.pageProps = Object.assign({}, C.pageProps),
                    L.props = C,
                    L.route = v,
                    L.query = n,
                    L.resolvedAs = o,
                    this.components[v] = L,
                    L
                } catch (e) {
                    return this.handleRouteInfoError((0,
                    l.getProperError)(e), r, n, a, s)
                }
            }
            set(e, t, r) {
                return this.state = e,
                this.sub(t, this.components["/_app"].Component, r)
            }
            beforePopState(e) {
                this._bps = e
            }
            onlyAHashChange(e) {
                if (!this.asPath)
                    return !1;
                let[t,r] = this.asPath.split("#", 2)
                  , [n,a] = e.split("#", 2);
                return !!a && t === n && r === a || t === n && r !== a
            }
            scrollToHash(e) {
                let[,t=""] = e.split("#", 2);
                (0,
                I.handleSmoothScroll)( () => {
                    if ("" === t || "top" === t) {
                        window.scrollTo(0, 0);
                        return
                    }
                    let e = decodeURIComponent(t)
                      , r = document.getElementById(e);
                    if (r) {
                        r.scrollIntoView();
                        return
                    }
                    let n = document.getElementsByName(e)[0];
                    n && n.scrollIntoView()
                }
                , {
                    onlyHashChange: this.onlyAHashChange(e)
                })
            }
            urlIsNew(e) {
                return this.asPath !== e
            }
            async prefetch(e, t, r) {
                if (void 0 === t && (t = e),
                void 0 === r && (r = {}),
                "undefined" != typeof window && (0,
                C.isBot)(window.navigator.userAgent))
                    return;
                let n = (0,
                p.parseRelativeUrl)(e)
                  , a = n.pathname
                  , {pathname: o, query: s} = n
                  , l = o
                  , u = await this.pageLoader.getPageList()
                  , c = t
                  , h = void 0 !== r.locale ? r.locale || void 0 : this.locale
                  , d = await N({
                    asPath: t,
                    locale: h,
                    router: this
                });
                n.pathname = D(n.pathname, u),
                (0,
                f.isDynamicRoute)(n.pathname) && (o = n.pathname,
                n.pathname = o,
                Object.assign(s, (0,
                m.getRouteMatcher)((0,
                g.getRouteRegex)(n.pathname))((0,
                v.parsePath)(t).pathname) || {}),
                d || (e = (0,
                _.formatWithValidation)(n)));
                let y = await B({
                    fetchData: () => F({
                        dataHref: this.pageLoader.getDataHref({
                            href: (0,
                            _.formatWithValidation)({
                                pathname: l,
                                query: s
                            }),
                            skipInterpolation: !0,
                            asPath: c,
                            locale: h
                        }),
                        hasMiddleware: !0,
                        isServerRender: !1,
                        parseJSON: !0,
                        inflightCache: this.sdc,
                        persistCache: !this.isPreview,
                        isPrefetch: !0
                    }),
                    asPath: t,
                    locale: h,
                    router: this
                });
                if ((null == y ? void 0 : y.effect.type) === "rewrite" && (n.pathname = y.effect.resolvedHref,
                o = y.effect.resolvedHref,
                s = {
                    ...s,
                    ...y.effect.parsedAs.query
                },
                c = y.effect.parsedAs.pathname,
                e = (0,
                _.formatWithValidation)(n)),
                (null == y ? void 0 : y.effect.type) === "redirect-external")
                    return;
                let P = (0,
                i.removeTrailingSlash)(o);
                await this._bfl(t, c, r.locale, !0) && (this.components[a] = {
                    __appRouter: !0
                }),
                await Promise.all([this.pageLoader._isSsg(P).then(t => !!t && F({
                    dataHref: (null == y ? void 0 : y.json) ? null == y ? void 0 : y.dataHref : this.pageLoader.getDataHref({
                        href: e,
                        asPath: c,
                        locale: h
                    }),
                    isServerRender: !1,
                    parseJSON: !0,
                    inflightCache: this.sdc,
                    persistCache: !this.isPreview,
                    isPrefetch: !0,
                    unstable_skipClientCache: r.unstable_skipClientCache || r.priority && !0
                }).then( () => !1).catch( () => !1)), this.pageLoader[r.priority ? "loadPage" : "prefetch"](P)])
            }
            async fetchComponent(e) {
                let t = V({
                    route: e,
                    router: this
                });
                try {
                    let r = await this.pageLoader.loadPage(e);
                    return t(),
                    r
                } catch (e) {
                    throw t(),
                    e
                }
            }
            _getData(e) {
                let t = !1
                  , r = () => {
                    t = !0
                }
                ;
                return this.clc = r,
                e().then(e => {
                    if (r === this.clc && (this.clc = null),
                    t) {
                        let e = Error("Loading initial props cancelled");
                        throw e.cancelled = !0,
                        e
                    }
                    return e
                }
                )
            }
            _getFlightData(e) {
                return F({
                    dataHref: e,
                    isServerRender: !0,
                    parseJSON: !1,
                    inflightCache: this.sdc,
                    persistCache: !1,
                    isPrefetch: !1
                }).then(e => {
                    let {text: t} = e;
                    return {
                        data: t
                    }
                }
                )
            }
            getInitialProps(e, t) {
                let {Component: r} = this.components["/_app"]
                  , n = this._wrapApp(r);
                return t.AppTree = n,
                (0,
                d.loadGetInitialProps)(r, {
                    AppTree: n,
                    Component: e,
                    router: this,
                    ctx: t
                })
            }
            get route() {
                return this.state.route
            }
            get pathname() {
                return this.state.pathname
            }
            get query() {
                return this.state.query
            }
            get asPath() {
                return this.state.asPath
            }
            get locale() {
                return this.state.locale
            }
            get isFallback() {
                return this.state.isFallback
            }
            get isPreview() {
                return this.state.isPreview
            }
            constructor(e, t, n, {initialProps: a, pageLoader: o, App: s, wrapApp: l, Component: u, err: c, subscription: h, isFallback: m, locale: g, locales: v, defaultLocale: y, domainLocales: P, isPreview: b}) {
                this.sdc = {},
                this.sbc = {},
                this.isFirstPopStateEvent = !0,
                this._key = W(),
                this.onPopState = e => {
                    let t;
                    let {isFirstPopStateEvent: r} = this;
                    this.isFirstPopStateEvent = !1;
                    let n = e.state;
                    if (!n) {
                        let {pathname: e, query: t} = this;
                        this.changeState("replaceState", (0,
                        _.formatWithValidation)({
                            pathname: (0,
                            w.addBasePath)(e),
                            query: t
                        }), (0,
                        d.getURL)());
                        return
                    }
                    if (n.__NA) {
                        window.location.reload();
                        return
                    }
                    if (!n.__N || r && this.locale === n.options.locale && n.as === this.asPath)
                        return;
                    let {url: a, as: i, options: o, key: s} = n;
                    this._key = s;
                    let {pathname: l} = (0,
                    p.parseRelativeUrl)(a);
                    (!this.isSsr || i !== (0,
                    w.addBasePath)(this.asPath) || l !== (0,
                    w.addBasePath)(this.pathname)) && (!this._bps || this._bps(n)) && this.change("replaceState", a, i, Object.assign({}, o, {
                        shallow: o.shallow && this._shallow,
                        locale: o.locale || this.defaultLocale,
                        _h: 0
                    }), t)
                }
                ;
                let S = (0,
                i.removeTrailingSlash)(e);
                this.components = {},
                "/_error" !== e && (this.components[S] = {
                    Component: u,
                    initial: !0,
                    props: a,
                    err: c,
                    __N_SSG: a && a.__N_SSG,
                    __N_SSP: a && a.__N_SSP
                }),
                this.components["/_app"] = {
                    Component: s,
                    styleSheets: []
                };
                {
                    let {BloomFilter: e} = r(74574)
                      , t = {
                        numItems: 11,
                        errorRate: 1e-4,
                        numBits: 211,
                        numHashes: 14,
                        bitArray: [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1]
                    }
                      , n = {
                        numItems: 3,
                        errorRate: 1e-4,
                        numBits: 58,
                        numHashes: 14,
                        bitArray: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0]
                    };
                    (null == t ? void 0 : t.numHashes) && (this._bfl_s = new e(t.numItems,t.errorRate),
                    this._bfl_s.import(t)),
                    (null == n ? void 0 : n.numHashes) && (this._bfl_d = new e(n.numItems,n.errorRate),
                    this._bfl_d.import(n))
                }
                this.events = G.events,
                this.pageLoader = o;
                let j = (0,
                f.isDynamicRoute)(e) && self.__NEXT_DATA__.autoExport;
                if (this.basePath = "",
                this.sub = h,
                this.clc = null,
                this._wrapApp = l,
                this.isSsr = !0,
                this.isLocaleDomain = !1,
                this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.isExperimentalCompile || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !j && !self.location.search),
                this.state = {
                    route: S,
                    pathname: e,
                    query: t,
                    asPath: j ? e : n,
                    isPreview: !!b,
                    locale: void 0,
                    isFallback: m
                },
                this._initialMatchesMiddlewarePromise = Promise.resolve(!1),
                "undefined" != typeof window) {
                    if (!n.startsWith("//")) {
                        let r = {
                            locale: g
                        }
                          , a = (0,
                        d.getURL)();
                        this._initialMatchesMiddlewarePromise = N({
                            router: this,
                            locale: g,
                            asPath: a
                        }).then(i => (r._shouldResolveHref = n !== e,
                        this.changeState("replaceState", i ? a : (0,
                        _.formatWithValidation)({
                            pathname: (0,
                            w.addBasePath)(e),
                            query: t
                        }), a, r),
                        i))
                    }
                    window.addEventListener("popstate", this.onPopState)
                }
            }
        }
        G.events = (0,
        h.default)()
    },
    87571: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "addLocale", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = r(68498)
          , a = r(10580);
        function i(e, t, r, i) {
            if (!t || t === r)
                return e;
            let o = e.toLowerCase();
            return !i && ((0,
            a.pathHasPrefix)(o, "/api") || (0,
            a.pathHasPrefix)(o, "/" + t.toLowerCase())) ? e : (0,
            n.addPathPrefix)(e, "/" + t)
        }
    },
    99235: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "addPathSuffix", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let n = r(63381);
        function a(e, t) {
            if (!e.startsWith("/") || !t)
                return e;
            let {pathname: r, query: a, hash: i} = (0,
            n.parsePath)(e);
            return "" + r + t + a + i
        }
    },
    75902: function(e, t) {
        "use strict";
        function r(e, t) {
            let r = Object.keys(e);
            if (r.length !== Object.keys(t).length)
                return !1;
            for (let n = r.length; n--; ) {
                let a = r[n];
                if ("query" === a) {
                    let r = Object.keys(e.query);
                    if (r.length !== Object.keys(t.query).length)
                        return !1;
                    for (let n = r.length; n--; ) {
                        let a = r[n];
                        if (!t.query.hasOwnProperty(a) || e.query[a] !== t.query[a])
                            return !1
                    }
                } else if (!t.hasOwnProperty(a) || e[a] !== t[a])
                    return !1
            }
            return !0
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "compareRouterStates", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    79114: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "formatNextPathnameInfo", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let n = r(26674)
          , a = r(68498)
          , i = r(99235)
          , o = r(87571);
        function s(e) {
            let t = (0,
            o.addLocale)(e.pathname, e.locale, e.buildId ? void 0 : e.defaultLocale, e.ignorePrefix);
            return (e.buildId || !e.trailingSlash) && (t = (0,
            n.removeTrailingSlash)(t)),
            e.buildId && (t = (0,
            i.addPathSuffix)((0,
            a.addPathPrefix)(t, "/_next/data/" + e.buildId), "/" === e.pathname ? "index.json" : ".json")),
            t = (0,
            a.addPathPrefix)(t, e.basePath),
            !e.buildId && e.trailingSlash ? t.endsWith("/") ? t : (0,
            i.addPathSuffix)(t, "/") : (0,
            n.removeTrailingSlash)(t)
        }
    },
    96899: function(e, t) {
        "use strict";
        function r(e, t) {
            return void 0 === t && (t = ""),
            ("/" === e ? "/index" : /^\/index(\/|$)/.test(e) ? "/index" + e : e) + t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    93331: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getNextPathnameInfo", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = r(43579)
          , a = r(2133)
          , i = r(10580);
        function o(e, t) {
            var r, o;
            let {basePath: s, i18n: l, trailingSlash: u} = null != (r = t.nextConfig) ? r : {}
              , c = {
                pathname: e,
                trailingSlash: "/" !== e ? e.endsWith("/") : u
            };
            s && (0,
            i.pathHasPrefix)(c.pathname, s) && (c.pathname = (0,
            a.removePathPrefix)(c.pathname, s),
            c.basePath = s);
            let h = c.pathname;
            if (c.pathname.startsWith("/_next/data/") && c.pathname.endsWith(".json")) {
                let e = c.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/")
                  , r = e[0];
                c.buildId = r,
                h = "index" !== e[1] ? "/" + e.slice(1).join("/") : "/",
                !0 === t.parseData && (c.pathname = h)
            }
            if (l) {
                let e = t.i18nProvider ? t.i18nProvider.analyze(c.pathname) : (0,
                n.normalizeLocalePath)(c.pathname, l.locales);
                c.locale = e.detectedLocale,
                c.pathname = null != (o = e.pathname) ? o : c.pathname,
                !e.detectedLocale && c.buildId && (e = t.i18nProvider ? t.i18nProvider.analyze(h) : (0,
                n.normalizeLocalePath)(h, l.locales)).detectedLocale && (c.locale = e.detectedLocale)
            }
            return c
        }
    },
    85907: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "parseRelativeUrl", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = r(3987)
          , a = r(48637);
        function i(e, t) {
            let r = new URL("undefined" == typeof window ? "http://n" : (0,
            n.getLocationOrigin)())
              , i = t ? new URL(t,r) : e.startsWith(".") ? new URL("undefined" == typeof window ? "http://n" : window.location.href) : r
              , {pathname: o, searchParams: s, search: l, hash: u, href: c, origin: h} = new URL(e,i);
            if (h !== r.origin)
                throw Error("invariant: invalid relative URL, router received " + e);
            return {
                pathname: o,
                query: (0,
                a.searchParamsToUrlQuery)(s),
                search: l,
                hash: u,
                href: c.slice(r.origin.length)
            }
        }
    },
    2133: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "removePathPrefix", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let n = r(10580);
        function a(e, t) {
            if (!(0,
            n.pathHasPrefix)(e, t))
                return e;
            let r = e.slice(t.length);
            return r.startsWith("/") ? r : "/" + r
        }
    }
}]);
