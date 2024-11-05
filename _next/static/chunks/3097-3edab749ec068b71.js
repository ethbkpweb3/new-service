"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3097], {
    58103: function(e, t, r) {
        r.d(t, {
            R: function() {
                return s
            }
        });
        let s = "io.prismic.preview"
    },
    11925: function(e, t, r) {
        r.d(t, {
            L: function() {
                return a
            }
        });
        var s = r(72439)
          , n = r(58103);
        let i = e => "object" == typeof e && null !== e && "ref"in e
          , a = e => {
            "previewData"in e && e.previewData ? i(e.previewData) && e.client.queryContentFromRef(e.previewData.ref) : "req"in e && e.req ? e.client.enableAutoPreviewsFromReq(e.req) : e.client.queryContentFromRef(async () => {
                var e;
                let t;
                let r = !1;
                try {
                    r = (await (0,
                    s.draftMode)()).isEnabled
                } catch {
                    return
                }
                if (r) {
                    try {
                        t = null == (e = (await (0,
                        s.cookies)()).get(n.R)) ? void 0 : e.value
                    } catch {
                        return
                    }
                    if (t && /\.prismic\.io/.test(t))
                        return t
                }
            }
            )
        }
    },
    51057: function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "DraftMode", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let s = r(51845)
          , n = r(86999);
        class i {
            get isEnabled() {
                return this._provider.isEnabled
            }
            enable() {
                let e = s.staticGenerationAsyncStorage.getStore();
                return e && (0,
                n.trackDynamicDataAccessed)(e, "draftMode().enable()"),
                this._provider.enable()
            }
            disable() {
                let e = s.staticGenerationAsyncStorage.getStore();
                return e && (0,
                n.trackDynamicDataAccessed)(e, "draftMode().disable()"),
                this._provider.disable()
            }
            constructor(e) {
                this._provider = e
            }
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    72439: function(e, t, r) {
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
            cookies: function() {
                return h
            },
            draftMode: function() {
                return f
            },
            headers: function() {
                return d
            }
        });
        let s = r(40692)
          , n = r(22637)
          , i = r(99767)
          , a = r(90295)
          , o = r(51057)
          , l = r(86999)
          , u = r(51845)
          , c = r(20544);
        function d() {
            let e = "headers"
              , t = u.staticGenerationAsyncStorage.getStore();
            if (t) {
                if (t.forceStatic)
                    return n.HeadersAdapter.seal(new Headers({}));
                (0,
                l.trackDynamicDataAccessed)(t, e)
            }
            return (0,
            c.getExpectedRequestStore)(e).headers
        }
        function h() {
            let e = "cookies"
              , t = u.staticGenerationAsyncStorage.getStore();
            if (t) {
                if (t.forceStatic)
                    return s.RequestCookiesAdapter.seal(new i.RequestCookies(new Headers({})));
                (0,
                l.trackDynamicDataAccessed)(t, e)
            }
            let r = (0,
            c.getExpectedRequestStore)(e)
              , n = a.actionAsyncStorage.getStore();
            return (null == n ? void 0 : n.isAction) || (null == n ? void 0 : n.isAppRoute) ? r.mutableCookies : r.cookies
        }
        function f() {
            let e = (0,
            c.getExpectedRequestStore)("draftMode");
            return new o.DraftMode(e.draftMode)
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    82408: function(e) {
        var t = Object.defineProperty
          , r = Object.getOwnPropertyDescriptor
          , s = Object.getOwnPropertyNames
          , n = Object.prototype.hasOwnProperty
          , i = {};
        function a(e) {
            var t;
            let r = ["path"in e && e.path && `Path=${e.path}`, "expires"in e && (e.expires || 0 === e.expires) && `Expires=${("number" == typeof e.expires ? new Date(e.expires) : e.expires).toUTCString()}`, "maxAge"in e && "number" == typeof e.maxAge && `Max-Age=${e.maxAge}`, "domain"in e && e.domain && `Domain=${e.domain}`, "secure"in e && e.secure && "Secure", "httpOnly"in e && e.httpOnly && "HttpOnly", "sameSite"in e && e.sameSite && `SameSite=${e.sameSite}`, "partitioned"in e && e.partitioned && "Partitioned", "priority"in e && e.priority && `Priority=${e.priority}`].filter(Boolean)
              , s = `${e.name}=${encodeURIComponent(null != (t = e.value) ? t : "")}`;
            return 0 === r.length ? s : `${s}; ${r.join("; ")}`
        }
        function o(e) {
            let t = new Map;
            for (let r of e.split(/; */)) {
                if (!r)
                    continue;
                let e = r.indexOf("=");
                if (-1 === e) {
                    t.set(r, "true");
                    continue
                }
                let[s,n] = [r.slice(0, e), r.slice(e + 1)];
                try {
                    t.set(s, decodeURIComponent(null != n ? n : "true"))
                } catch {}
            }
            return t
        }
        function l(e) {
            var t, r;
            if (!e)
                return;
            let[[s,n],...i] = o(e)
              , {domain: a, expires: l, httponly: d, maxage: h, path: f, samesite: p, secure: y, partitioned: g, priority: m} = Object.fromEntries(i.map( ([e,t]) => [e.toLowerCase(), t]));
            return function(e) {
                let t = {};
                for (let r in e)
                    e[r] && (t[r] = e[r]);
                return t
            }({
                name: s,
                value: decodeURIComponent(n),
                domain: a,
                ...l && {
                    expires: new Date(l)
                },
                ...d && {
                    httpOnly: !0
                },
                ..."string" == typeof h && {
                    maxAge: Number(h)
                },
                path: f,
                ...p && {
                    sameSite: u.includes(t = (t = p).toLowerCase()) ? t : void 0
                },
                ...y && {
                    secure: !0
                },
                ...m && {
                    priority: c.includes(r = (r = m).toLowerCase()) ? r : void 0
                },
                ...g && {
                    partitioned: !0
                }
            })
        }
        ( (e, r) => {
            for (var s in r)
                t(e, s, {
                    get: r[s],
                    enumerable: !0
                })
        }
        )(i, {
            RequestCookies: () => d,
            ResponseCookies: () => h,
            parseCookie: () => o,
            parseSetCookie: () => l,
            stringifyCookie: () => a
        }),
        e.exports = ( (e, i, a, o) => {
            if (i && "object" == typeof i || "function" == typeof i)
                for (let a of s(i))
                    n.call(e, a) || void 0 === a || t(e, a, {
                        get: () => i[a],
                        enumerable: !(o = r(i, a)) || o.enumerable
                    });
            return e
        }
        )(t({}, "__esModule", {
            value: !0
        }), i);
        var u = ["strict", "lax", "none"]
          , c = ["low", "medium", "high"]
          , d = class {
            constructor(e) {
                this._parsed = new Map,
                this._headers = e;
                let t = e.get("cookie");
                if (t)
                    for (let[e,r] of o(t))
                        this._parsed.set(e, {
                            name: e,
                            value: r
                        })
            }
            [Symbol.iterator]() {
                return this._parsed[Symbol.iterator]()
            }
            get size() {
                return this._parsed.size
            }
            get(...e) {
                let t = "string" == typeof e[0] ? e[0] : e[0].name;
                return this._parsed.get(t)
            }
            getAll(...e) {
                var t;
                let r = Array.from(this._parsed);
                if (!e.length)
                    return r.map( ([e,t]) => t);
                let s = "string" == typeof e[0] ? e[0] : null == (t = e[0]) ? void 0 : t.name;
                return r.filter( ([e]) => e === s).map( ([e,t]) => t)
            }
            has(e) {
                return this._parsed.has(e)
            }
            set(...e) {
                let[t,r] = 1 === e.length ? [e[0].name, e[0].value] : e
                  , s = this._parsed;
                return s.set(t, {
                    name: t,
                    value: r
                }),
                this._headers.set("cookie", Array.from(s).map( ([e,t]) => a(t)).join("; ")),
                this
            }
            delete(e) {
                let t = this._parsed
                  , r = Array.isArray(e) ? e.map(e => t.delete(e)) : t.delete(e);
                return this._headers.set("cookie", Array.from(t).map( ([e,t]) => a(t)).join("; ")),
                r
            }
            clear() {
                return this.delete(Array.from(this._parsed.keys())),
                this
            }
            [Symbol.for("edge-runtime.inspect.custom")]() {
                return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`
            }
            toString() {
                return [...this._parsed.values()].map(e => `${e.name}=${encodeURIComponent(e.value)}`).join("; ")
            }
        }
          , h = class {
            constructor(e) {
                var t, r, s;
                this._parsed = new Map,
                this._headers = e;
                let n = null != (s = null != (r = null == (t = e.getSetCookie) ? void 0 : t.call(e)) ? r : e.get("set-cookie")) ? s : [];
                for (let e of Array.isArray(n) ? n : function(e) {
                    if (!e)
                        return [];
                    var t, r, s, n, i, a = [], o = 0;
                    function l() {
                        for (; o < e.length && /\s/.test(e.charAt(o)); )
                            o += 1;
                        return o < e.length
                    }
                    for (; o < e.length; ) {
                        for (t = o,
                        i = !1; l(); )
                            if ("," === (r = e.charAt(o))) {
                                for (s = o,
                                o += 1,
                                l(),
                                n = o; o < e.length && "=" !== (r = e.charAt(o)) && ";" !== r && "," !== r; )
                                    o += 1;
                                o < e.length && "=" === e.charAt(o) ? (i = !0,
                                o = n,
                                a.push(e.substring(t, s)),
                                t = o) : o = s + 1
                            } else
                                o += 1;
                        (!i || o >= e.length) && a.push(e.substring(t, e.length))
                    }
                    return a
                }(n)) {
                    let t = l(e);
                    t && this._parsed.set(t.name, t)
                }
            }
            get(...e) {
                let t = "string" == typeof e[0] ? e[0] : e[0].name;
                return this._parsed.get(t)
            }
            getAll(...e) {
                var t;
                let r = Array.from(this._parsed.values());
                if (!e.length)
                    return r;
                let s = "string" == typeof e[0] ? e[0] : null == (t = e[0]) ? void 0 : t.name;
                return r.filter(e => e.name === s)
            }
            has(e) {
                return this._parsed.has(e)
            }
            set(...e) {
                let[t,r,s] = 1 === e.length ? [e[0].name, e[0].value, e[0]] : e
                  , n = this._parsed;
                return n.set(t, function(e={
                    name: "",
                    value: ""
                }) {
                    return "number" == typeof e.expires && (e.expires = new Date(e.expires)),
                    e.maxAge && (e.expires = new Date(Date.now() + 1e3 * e.maxAge)),
                    (null === e.path || void 0 === e.path) && (e.path = "/"),
                    e
                }({
                    name: t,
                    value: r,
                    ...s
                })),
                function(e, t) {
                    for (let[,r] of (t.delete("set-cookie"),
                    e)) {
                        let e = a(r);
                        t.append("set-cookie", e)
                    }
                }(n, this._headers),
                this
            }
            delete(...e) {
                let[t,r,s] = "string" == typeof e[0] ? [e[0]] : [e[0].name, e[0].path, e[0].domain];
                return this.set({
                    name: t,
                    path: r,
                    domain: s,
                    value: "",
                    expires: new Date(0)
                })
            }
            [Symbol.for("edge-runtime.inspect.custom")]() {
                return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`
            }
            toString() {
                return [...this._parsed.values()].map(a).join("; ")
            }
        }
    },
    22637: function(e, t, r) {
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
            HeadersAdapter: function() {
                return i
            },
            ReadonlyHeadersError: function() {
                return n
            }
        });
        let s = r(30650);
        class n extends Error {
            constructor() {
                super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers")
            }
            static callable() {
                throw new n
            }
        }
        class i extends Headers {
            constructor(e) {
                super(),
                this.headers = new Proxy(e,{
                    get(t, r, n) {
                        if ("symbol" == typeof r)
                            return s.ReflectAdapter.get(t, r, n);
                        let i = r.toLowerCase()
                          , a = Object.keys(e).find(e => e.toLowerCase() === i);
                        if (void 0 !== a)
                            return s.ReflectAdapter.get(t, a, n)
                    },
                    set(t, r, n, i) {
                        if ("symbol" == typeof r)
                            return s.ReflectAdapter.set(t, r, n, i);
                        let a = r.toLowerCase()
                          , o = Object.keys(e).find(e => e.toLowerCase() === a);
                        return s.ReflectAdapter.set(t, o ?? r, n, i)
                    },
                    has(t, r) {
                        if ("symbol" == typeof r)
                            return s.ReflectAdapter.has(t, r);
                        let n = r.toLowerCase()
                          , i = Object.keys(e).find(e => e.toLowerCase() === n);
                        return void 0 !== i && s.ReflectAdapter.has(t, i)
                    },
                    deleteProperty(t, r) {
                        if ("symbol" == typeof r)
                            return s.ReflectAdapter.deleteProperty(t, r);
                        let n = r.toLowerCase()
                          , i = Object.keys(e).find(e => e.toLowerCase() === n);
                        return void 0 === i || s.ReflectAdapter.deleteProperty(t, i)
                    }
                })
            }
            static seal(e) {
                return new Proxy(e,{
                    get(e, t, r) {
                        switch (t) {
                        case "append":
                        case "delete":
                        case "set":
                            return n.callable;
                        default:
                            return s.ReflectAdapter.get(e, t, r)
                        }
                    }
                })
            }
            merge(e) {
                return Array.isArray(e) ? e.join(", ") : e
            }
            static from(e) {
                return e instanceof Headers ? e : new i(e)
            }
            append(e, t) {
                let r = this.headers[e];
                "string" == typeof r ? this.headers[e] = [r, t] : Array.isArray(r) ? r.push(t) : this.headers[e] = t
            }
            delete(e) {
                delete this.headers[e]
            }
            get(e) {
                let t = this.headers[e];
                return void 0 !== t ? this.merge(t) : null
            }
            has(e) {
                return void 0 !== this.headers[e]
            }
            set(e, t) {
                this.headers[e] = t
            }
            forEach(e, t) {
                for (let[r,s] of this.entries())
                    e.call(t, s, r, this)
            }
            *entries() {
                for (let e of Object.keys(this.headers)) {
                    let t = e.toLowerCase()
                      , r = this.get(t);
                    yield[t, r]
                }
            }
            *keys() {
                for (let e of Object.keys(this.headers)) {
                    let t = e.toLowerCase();
                    yield t
                }
            }
            *values() {
                for (let e of Object.keys(this.headers)) {
                    let t = this.get(e);
                    yield t
                }
            }
            [Symbol.iterator]() {
                return this.entries()
            }
        }
    },
    40692: function(e, t, r) {
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
            MutableRequestCookiesAdapter: function() {
                return d
            },
            ReadonlyRequestCookiesError: function() {
                return a
            },
            RequestCookiesAdapter: function() {
                return o
            },
            appendMutableCookies: function() {
                return c
            },
            getModifiedCookieValues: function() {
                return u
            }
        });
        let s = r(99767)
          , n = r(30650)
          , i = r(51845);
        class a extends Error {
            constructor() {
                super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options")
            }
            static callable() {
                throw new a
            }
        }
        class o {
            static seal(e) {
                return new Proxy(e,{
                    get(e, t, r) {
                        switch (t) {
                        case "clear":
                        case "delete":
                        case "set":
                            return a.callable;
                        default:
                            return n.ReflectAdapter.get(e, t, r)
                        }
                    }
                })
            }
        }
        let l = Symbol.for("next.mutated.cookies");
        function u(e) {
            let t = e[l];
            return t && Array.isArray(t) && 0 !== t.length ? t : []
        }
        function c(e, t) {
            let r = u(t);
            if (0 === r.length)
                return !1;
            let n = new s.ResponseCookies(e)
              , i = n.getAll();
            for (let e of r)
                n.set(e);
            for (let e of i)
                n.set(e);
            return !0
        }
        class d {
            static wrap(e, t) {
                let r = new s.ResponseCookies(new Headers);
                for (let t of e.getAll())
                    r.set(t);
                let a = []
                  , o = new Set
                  , u = () => {
                    let e = i.staticGenerationAsyncStorage.getStore();
                    if (e && (e.pathWasRevalidated = !0),
                    a = r.getAll().filter(e => o.has(e.name)),
                    t) {
                        let e = [];
                        for (let t of a) {
                            let r = new s.ResponseCookies(new Headers);
                            r.set(t),
                            e.push(r.toString())
                        }
                        t(e)
                    }
                }
                ;
                return new Proxy(r,{
                    get(e, t, r) {
                        switch (t) {
                        case l:
                            return a;
                        case "delete":
                            return function(...t) {
                                o.add("string" == typeof t[0] ? t[0] : t[0].name);
                                try {
                                    e.delete(...t)
                                } finally {
                                    u()
                                }
                            }
                            ;
                        case "set":
                            return function(...t) {
                                o.add("string" == typeof t[0] ? t[0] : t[0].name);
                                try {
                                    return e.set(...t)
                                } finally {
                                    u()
                                }
                            }
                            ;
                        default:
                            return n.ReflectAdapter.get(e, t, r)
                        }
                    }
                })
            }
        }
    },
    99767: function(e, t, r) {
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
            RequestCookies: function() {
                return s.RequestCookies
            },
            ResponseCookies: function() {
                return s.ResponseCookies
            },
            stringifyCookie: function() {
                return s.stringifyCookie
            }
        });
        let s = r(82408)
    },
    58861: function(e, t, r) {
        r.d(t, {
            e: function() {
                return eo
            }
        });
        let s = e => Array.isArray(e) ? e : [e]
          , n = (e={}, t) => ({
            ...e,
            filters: [...e.filters || [], ...s(t)]
        })
          , i = e => "function" == typeof e ? e : () => e
          , a = "7.11.1"
          , o = e => `https://prismic.dev/msg/client/v${a}/${e}`
          , l = e => Array.isArray(e) ? `[${e.map(l).join(", ")}]` : "string" == typeof e ? `"${e}"` : e instanceof Date ? `${e.getTime()}` : `${e}`
          , u = e => (t, ...r) => {
            let s = r.map(l).join(", ")
              , n = t && r.length ? ", " : "";
            return `[${e}(${t}${n}${s})]`
        }
          , c = e => {
            let t = u(e);
            return e => t(e)
        }
          , d = {
            at: u("at"),
            not: u("not"),
            any: u("any"),
            in: u("in"),
            fulltext: u("fulltext"),
            has: c("has"),
            missing: c("missing"),
            similar: (e => {
                let t = u(e);
                return (...e) => t("", ...e)
            }
            )("similar"),
            geopointNear: u("geopoint.near"),
            numberLessThan: u("number.lt"),
            numberGreaterThan: u("number.gt"),
            numberInRange: u("number.inRange"),
            dateAfter: u("date.after"),
            dateBefore: u("date.before"),
            dateBetween: u("date.between"),
            dateDayOfMonth: u("date.day-of-month"),
            dateDayOfMonthAfter: u("date.day-of-month-after"),
            dateDayOfMonthBefore: u("date.day-of-month-before"),
            dateDayOfWeek: u("date.day-of-week"),
            dateDayOfWeekAfter: u("date.day-of-week-after"),
            dateDayOfWeekBefore: u("date.day-of-week-before"),
            dateMonth: u("date.month"),
            dateMonthAfter: u("date.month-after"),
            dateMonthBefore: u("date.month-before"),
            dateYear: u("date.year"),
            dateHour: u("date.hour"),
            dateHourAfter: u("date.hour-after"),
            dateHourBefore: u("date.hour-before")
        }
          , h = e => d.at("document.tags", s(e));
        var f, p, y, g = Object.defineProperty, m = (e, t, r) => t in e ? g(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r, w = (e, t, r) => m(e, "symbol" != typeof t ? t + "" : t, r);
        class b extends Error {
            constructor(e="An invalid API response was returned", t, r) {
                super(e),
                w(this, "url"),
                w(this, "response"),
                this.url = t,
                this.response = r
            }
        }
        let v = (e, t) => {
            let r = e.find(e => t(e));
            if (!r)
                throw new b("Ref could not be found.",void 0,void 0);
            return r
        }
          , R = e => v(e, e => e.isMasterRef)
          , A = (e, t) => v(e, e => e.id === t)
          , k = (e, t) => v(e, e => e.label === t)
          , S = e => e.replace(/%3B/g, ";")
          , P = e => {
            let t;
            for (let r of e.split("; ")) {
                let e = r.split("=");
                if ("io.prismic.preview" === S(e[0]).replace(/%3D/g, "=")) {
                    t = S(e.slice(1).join("="));
                    break
                }
            }
            return t
        }
          , j = e => e.replace(/(\n| )*( |{|})(\n| )*/gm, (e, t, r) => r)
          , C = e => d.any("document.tags", s(e))
          , _ = e => d.at("document.type", e);
        class O extends b {
        }
        class x extends b {
        }
        class D extends b {
        }
        class F extends O {
        }
        class q extends O {
        }
        class M extends O {
        }
        class $ extends x {
        }
        let L = {
            Any: "Any",
            Document: "Document",
            Media: "Media",
            Web: "Web"
        }
          , E = e => {
            var t;
            return {
                link_type: L.Document,
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
          , T = (e, ...t) => {
            let r;
            if (!e)
                return null;
            let s = "link_type"in e ? e : E(e)
              , [n] = t;
            switch (r = "function" == typeof n || null == n ? {
                linkResolver: n
            } : {
                ...n
            },
            s.link_type) {
            case L.Media:
            case L.Web:
                return "url"in s ? s.url : null;
            case L.Document:
                if ("id"in s && r.linkResolver) {
                    let e = r.linkResolver(s);
                    if (null != e)
                        return e
                }
                if ("url"in s && s.url)
                    return s.url;
                return null;
            case L.Any:
            default:
                return null
            }
        }
          , I = e => new Promise(t => setTimeout(t, e))
          , B = ({interval: e}={}) => {
            let t = []
              , r = !1
              , s = 0
              , n = () => {
                var e;
                !r && t.length > 0 && (null == (e = t.shift()) || e(),
                r = !0)
            }
              , i = () => {
                r = !1,
                n()
            }
              , a = async (t, r, n) => {
                let a = Date.now() - s;
                e && a < e && await I(e - a);
                let o = (async () => t(...n))();
                r(o);
                try {
                    await o
                } catch {}
                s = Date.now(),
                i()
            }
              , o = (e, s, i) => {
                new Promise(e => {
                    t.push(e)
                }
                ).then(a.bind(void 0, e, s, i)),
                (async () => {
                    await Promise.resolve(),
                    r || n()
                }
                )()
            }
            ;
            return (e, ...t) => new Promise(r => {
                o(e, r, t)
            }
            )
        }
        ;
        var U = Object.defineProperty
          , J = (e, t, r) => t in e ? U(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r
          , N = (e, t, r) => J(e, "symbol" != typeof t ? t + "" : t, r);
        class H {
            constructor(e) {
                if (N(this, "fetchFn"),
                N(this, "fetchOptions"),
                N(this, "queuedFetchJobs", {}),
                N(this, "dedupedFetchJobs", {}),
                this.fetchOptions = e.fetchOptions,
                "function" == typeof e.fetch)
                    this.fetchFn = e.fetch;
                else if ("function" == typeof globalThis.fetch)
                    this.fetchFn = globalThis.fetch;
                else
                    throw new b("A valid fetch implementation was not provided. In environments where fetch is not available (including Node.js), a fetch implementation must be provided via a polyfill or the `fetch` option.",void 0,void 0);
                this.fetchFn === globalThis.fetch && (this.fetchFn = this.fetchFn.bind(globalThis))
            }
            async fetch(e, t={}) {
                var r, s, n, i, a;
                let o = {
                    ...this.fetchOptions,
                    ...t.fetchOptions,
                    headers: {
                        ...null == (r = this.fetchOptions) ? void 0 : r.headers,
                        ...null == (s = t.fetchOptions) ? void 0 : s.headers
                    },
                    signal: (null == (n = t.fetchOptions) ? void 0 : n.signal) || t.signal || (null == (i = this.fetchOptions) ? void 0 : i.signal)
                };
                return (null == (a = t.fetchOptions) ? void 0 : a.body) ? this.queueFetch(e, o) : this.dedupeFetch(e, o)
            }
            queueFetch(e, t={}) {
                let r = new URL(e).hostname;
                return this.queuedFetchJobs[r] || (this.queuedFetchJobs[r] = B({
                    interval: 1500
                })),
                this.queuedFetchJobs[r]( () => this.createFetchJob(e, t))
            }
            dedupeFetch(e, t={}) {
                let r;
                return this.dedupedFetchJobs[e] && this.dedupedFetchJobs[e].has(t.signal) ? r = this.dedupedFetchJobs[e].get(t.signal) : (this.dedupedFetchJobs[e] = this.dedupedFetchJobs[e] || new Map,
                r = this.createFetchJob(e, t).finally( () => {
                    var r, s;
                    null == (r = this.dedupedFetchJobs[e]) || r.delete(t.signal),
                    (null == (s = this.dedupedFetchJobs[e]) ? void 0 : s.size) === 0 && delete this.dedupedFetchJobs[e]
                }
                ),
                this.dedupedFetchJobs[e].set(t.signal, r)),
                r
            }
            createFetchJob(e, t={}) {
                return this.fetchFn(e, t).then(async e => {
                    let t, r;
                    if (e.ok)
                        try {
                            t = await e.json()
                        } catch {}
                    else
                        try {
                            r = await e.text(),
                            t = JSON.parse(r)
                        } catch {}
                    return {
                        status: e.status,
                        headers: e.headers,
                        json: t,
                        text: r
                    }
                }
                )
            }
        }
        let z = {
            accessToken: "access_token"
        }
          , G = e => "string" == typeof e ? e : "desc" === e.direction ? `${e.field} desc` : e.field
          , W = (e, t) => {
            let {filters: r, predicates: n, ...i} = t
              , o = new URL("documents/search",`${e}/`);
            if (r)
                for (let e of s(r))
                    o.searchParams.append("q", `[${e}]`);
            if (n)
                for (let e of s(n))
                    o.searchParams.append("q", `[${e}]`);
            for (let e in i) {
                let t = z[e] || e
                  , r = i[e];
                if ("orderings" === t) {
                    let e = i[t];
                    if (null != e) {
                        let t = s(e).map(e => G(e)).join(",");
                        r = `[${t}]`
                    }
                } else
                    "routes" === t && "object" == typeof i[t] && (r = JSON.stringify(s(i[t])));
                null != r && o.searchParams.set(t, s(r).join(","))
            }
            return o.searchParams.set("x-c", `js-${a}`),
            o.toString()
        }
          , Q = e => /^[a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]$/.test(e)
          , Z = e => {
            if (Q(e))
                return `https://${e}.cdn.prismic.io/api/v2`;
            throw new b(`An invalid Prismic repository name was given: ${e}`,void 0,void 0)
        }
          , V = e => {
            try {
                let t = new URL(e).hostname;
                if (t.endsWith("prismic.io") || t.endsWith("wroom.io") || t.endsWith("wroom.test"))
                    return t.split(".")[0]
            } catch {}
            throw new b(`An invalid Prismic Document API endpoint was provided: ${e}`,void 0,void 0)
        }
          , Y = e => {
            try {
                return new URL(e),
                !0
            } catch {
                return !1
            }
        }
        ;
        var K = Object.defineProperty
          , X = e => {
            throw TypeError(e)
        }
          , ee = (e, t, r) => t in e ? K(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r
          , et = (e, t, r) => ee(e, "symbol" != typeof t ? t + "" : t, r)
          , er = (e, t, r) => t.has(e) || X("Cannot " + r)
          , es = (e, t, r) => (er(e, t, "read from private field"),
        r ? r.call(e) : t.get(e))
          , en = (e, t, r) => t.has(e) ? X("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r)
          , ei = (e, t, r, s) => (er(e, t, "write to private field"),
        s ? s.call(e, r) : t.set(e, r),
        r);
        (f = y || (y = {})).Master = "Master",
        f.ReleaseID = "ReleaseID",
        f.ReleaseLabel = "ReleaseLabel",
        f.Manual = "Manual";
        class ea extends H {
            constructor(e, t={}) {
                if (super(t),
                en(this, p),
                et(this, "documentAPIEndpoint"),
                et(this, "accessToken"),
                et(this, "routes"),
                et(this, "brokenRoute"),
                et(this, "defaultParams"),
                et(this, "refState", {
                    mode: y.Master,
                    autoPreviewsEnabled: !0
                }),
                et(this, "cachedRepository"),
                et(this, "cachedRepositoryExpiration", 0),
                t.documentAPIEndpoint || Y(e),
                Y(e)) {
                    this.documentAPIEndpoint = e;
                    try {
                        this.repositoryName = V(e)
                    } catch (t) {
                        console.warn(`[@prismicio/client] A repository name could not be inferred from the provided endpoint (\`${e}\`). Some methods will be disabled. Create the client using a repository name to prevent this warning. For more details, see ${o("prefer-repository-name")}`)
                    }
                } else
                    this.documentAPIEndpoint = t.documentAPIEndpoint || Z(e),
                    this.repositoryName = e;
                this.accessToken = t.accessToken,
                this.routes = t.routes,
                this.brokenRoute = t.brokenRoute,
                this.defaultParams = t.defaultParams,
                t.ref && this.queryContentFromRef(t.ref),
                this.graphQLFetch = this.graphQLFetch.bind(this)
            }
            set repositoryName(e) {
                ei(this, p, e)
            }
            get repositoryName() {
                if (!es(this, p))
                    throw new b(`A repository name is required for this method but one could not be inferred from the provided API endpoint (\`${this.documentAPIEndpoint}\`). To fix this error, provide a repository name when creating the client. For more details, see ${o("prefer-repository-name")}`,void 0,void 0);
                return es(this, p)
            }
            set endpoint(e) {
                this.documentAPIEndpoint = e
            }
            get endpoint() {
                return this.documentAPIEndpoint
            }
            enableAutoPreviews() {
                this.refState.autoPreviewsEnabled = !0
            }
            enableAutoPreviewsFromReq(e) {
                this.refState.httpRequest = e,
                this.refState.autoPreviewsEnabled = !0
            }
            disableAutoPreviews() {
                this.refState.autoPreviewsEnabled = !1
            }
            async get(e) {
                let t = await this.buildQueryURL(e);
                return await this.fetch(t, e)
            }
            async getFirst(e) {
                var t;
                let r = {
                    ...e
                };
                e && e.page || (null == e ? void 0 : e.pageSize) || (r.pageSize = (null == (t = this.defaultParams) ? void 0 : t.pageSize) ?? 1);
                let s = await this.buildQueryURL(r)
                  , n = (await this.fetch(s, e)).results[0];
                if (n)
                    return n;
                throw new x("No documents were returned",s,void 0)
            }
            async dangerouslyGetAll(e={}) {
                var t;
                let r;
                let {limit: s=1 / 0, ...n} = e
                  , i = {
                    ...n,
                    pageSize: Math.min(s, n.pageSize || (null == (t = this.defaultParams) ? void 0 : t.pageSize) || 100)
                }
                  , a = [];
                for (; (!r || r.next_page) && a.length < s; ) {
                    let e = r ? r.page + 1 : void 0;
                    r = await this.get({
                        ...i,
                        page: e
                    }),
                    a.push(...r.results),
                    r.next_page && await new Promise(e => setTimeout(e, 500))
                }
                return a.slice(0, s)
            }
            async getByID(e, t) {
                return await this.getFirst(n(t, d.at("document.id", e)))
            }
            async getByIDs(e, t) {
                return await this.get(n(t, d.in("document.id", e)))
            }
            async getAllByIDs(e, t) {
                return await this.dangerouslyGetAll(n(t, d.in("document.id", e)))
            }
            async getByUID(e, t, r) {
                return await this.getFirst(n(r, [_(e), d.at(`my.${e}.uid`, t)]))
            }
            async getByUIDs(e, t, r) {
                return await this.get(n(r, [_(e), d.in(`my.${e}.uid`, t)]))
            }
            async getAllByUIDs(e, t, r) {
                return await this.dangerouslyGetAll(n(r, [_(e), d.in(`my.${e}.uid`, t)]))
            }
            async getSingle(e, t) {
                return await this.getFirst(n(t, _(e)))
            }
            async getByType(e, t) {
                return await this.get(n(t, _(e)))
            }
            async getAllByType(e, t) {
                return await this.dangerouslyGetAll(n(t, _(e)))
            }
            async getByTag(e, t) {
                return await this.get(n(t, C(e)))
            }
            async getAllByTag(e, t) {
                return await this.dangerouslyGetAll(n(t, C(e)))
            }
            async getByEveryTag(e, t) {
                return await this.get(n(t, h(e)))
            }
            async getAllByEveryTag(e, t) {
                return await this.dangerouslyGetAll(n(t, h(e)))
            }
            async getBySomeTags(e, t) {
                return await this.get(n(t, C(e)))
            }
            async getAllBySomeTags(e, t) {
                return await this.dangerouslyGetAll(n(t, C(e)))
            }
            async getRepository(e) {
                let t = new URL(this.documentAPIEndpoint);
                return this.accessToken && t.searchParams.set("access_token", this.accessToken),
                await this.fetch(t.toString(), e)
            }
            async getRefs(e) {
                return (await this.getRepository(e)).refs
            }
            async getRefByID(e, t) {
                return A(await this.getRefs(t), e)
            }
            async getRefByLabel(e, t) {
                return k(await this.getRefs(t), e)
            }
            async getMasterRef(e) {
                return R(await this.getRefs(e))
            }
            async getReleases(e) {
                return (await this.getRefs(e)).filter(e => !e.isMasterRef)
            }
            async getReleaseByID(e, t) {
                return A(await this.getReleases(t), e)
            }
            async getReleaseByLabel(e, t) {
                return k(await this.getReleases(t), e)
            }
            async getTags(e) {
                try {
                    let t = await this.getCachedRepositoryForm("tags", e)
                      , r = new URL(t.action);
                    return this.accessToken && r.searchParams.set("access_token", this.accessToken),
                    await this.fetch(r.toString(), e)
                } catch {
                    return (await this.getRepository(e)).tags
                }
            }
            async buildQueryURL({signal: e, fetchOptions: t, ...r}={}) {
                let s = r.ref || await this.getResolvedRefString({
                    signal: e,
                    fetchOptions: t
                })
                  , n = r.integrationFieldsRef || (await this.getCachedRepository({
                    signal: e,
                    fetchOptions: t
                })).integrationFieldsRef || void 0;
                return W(this.documentAPIEndpoint, {
                    ...this.defaultParams,
                    ...r,
                    ref: s,
                    integrationFieldsRef: n,
                    routes: r.routes || this.routes,
                    brokenRoute: r.brokenRoute || this.brokenRoute,
                    accessToken: r.accessToken || this.accessToken
                })
            }
            async resolvePreviewURL(e) {
                var t, r;
                let s = e.documentID
                  , n = e.previewToken;
                if (void 0 !== globalThis.location) {
                    let e = new URLSearchParams(globalThis.location.search);
                    s = s || e.get("documentId"),
                    n = n || e.get("token")
                } else if (this.refState.httpRequest) {
                    if ("query"in this.refState.httpRequest)
                        s = s || (null == (t = this.refState.httpRequest.query) ? void 0 : t.documentId),
                        n = n || (null == (r = this.refState.httpRequest.query) ? void 0 : r.token);
                    else if ("url"in this.refState.httpRequest && this.refState.httpRequest.url) {
                        let e = new URL(this.refState.httpRequest.url,"missing-host://").searchParams;
                        s = s || e.get("documentId"),
                        n = n || e.get("token")
                    }
                }
                if (null != s && null != n) {
                    let t = T(await this.getByID(s, {
                        ref: n,
                        lang: "*",
                        signal: e.signal,
                        fetchOptions: e.fetchOptions
                    }), {
                        linkResolver: e.linkResolver
                    });
                    if ("string" == typeof t)
                        return t
                }
                return e.defaultURL
            }
            queryLatestContent() {
                this.refState.mode = y.Master
            }
            queryContentFromReleaseByID(e) {
                this.refState = {
                    ...this.refState,
                    mode: y.ReleaseID,
                    releaseID: e
                }
            }
            queryContentFromReleaseByLabel(e) {
                this.refState = {
                    ...this.refState,
                    mode: y.ReleaseLabel,
                    releaseLabel: e
                }
            }
            queryContentFromRef(e) {
                this.refState = {
                    ...this.refState,
                    mode: y.Manual,
                    ref: e
                }
            }
            async graphQLFetch(e, t) {
                let r = await this.getCachedRepository()
                  , s = await this.getResolvedRefString()
                  , n = {
                    "Prismic-ref": s,
                    Authorization: this.accessToken ? `Token ${this.accessToken}` : "",
                    ...t ? t.headers : {}
                };
                r.integrationFieldsRef && (n["Prismic-integration-field-ref"] = r.integrationFieldsRef);
                let i = {};
                for (let e in n)
                    n[e] && (i[e.toLowerCase()] = n[e]);
                let a = new URL(e);
                a.searchParams.set("ref", s);
                let o = a.searchParams.get("query");
                return o && a.searchParams.set("query", j(o)),
                await this.fetchFn(a.toString(), {
                    ...t,
                    headers: i
                })
            }
            async getCachedRepository(e) {
                return (!this.cachedRepository || Date.now() >= this.cachedRepositoryExpiration) && (this.cachedRepositoryExpiration = Date.now() + 5e3,
                this.cachedRepository = await this.getRepository(e)),
                this.cachedRepository
            }
            async getCachedRepositoryForm(e, t) {
                let r = (await this.getCachedRepository(t)).forms[e];
                if (!r)
                    throw new b(`Form with name "${e}" could not be found`,void 0,void 0);
                return r
            }
            async getResolvedRefString(e) {
                var t, r;
                if (this.refState.autoPreviewsEnabled) {
                    let e, s;
                    if ((null == (t = this.refState.httpRequest) ? void 0 : t.headers) ? "get"in this.refState.httpRequest.headers && "function" == typeof this.refState.httpRequest.headers.get ? s = this.refState.httpRequest.headers.get("cookie") : "cookie"in this.refState.httpRequest.headers && (s = this.refState.httpRequest.headers.cookie) : (null == (r = globalThis.document) ? void 0 : r.cookie) && (s = globalThis.document.cookie),
                    s && (e = P(s)),
                    e)
                        return e
                }
                let s = await this.getCachedRepository(e)
                  , n = this.refState.mode;
                if (n === y.ReleaseID)
                    return A(s.refs, this.refState.releaseID).ref;
                if (n === y.ReleaseLabel)
                    return k(s.refs, this.refState.releaseLabel).ref;
                if (n === y.Manual) {
                    let e = await i(this.refState.ref)();
                    if ("string" == typeof e)
                        return e
                }
                return R(s.refs).ref
            }
            async fetch(e, t={}) {
                let r = await super.fetch(e, t);
                if (404 !== r.status && 429 !== r.status && null == r.json)
                    throw new b(void 0,e,r.json || r.text);
                switch (r.status) {
                case 200:
                case 201:
                    return r.json;
                case 400:
                    throw new D(r.json.message,e,r.json);
                case 401:
                case 403:
                    throw new O(r.json.error || r.json.message,e,r.json);
                case 404:
                    if (void 0 === r.json)
                        throw new $(`Prismic repository not found. Check that "${this.documentAPIEndpoint}" is pointing to the correct repository.`,e,e.startsWith(this.documentAPIEndpoint) ? void 0 : r.text);
                    if ("api_notfound_error" === r.json.type)
                        throw new M(r.json.message,e,r.json);
                    if ("api_security_error" === r.json.type && /preview token.*expired/i.test(r.json.message))
                        throw new F(r.json.message,e,r.json);
                    throw new x(r.json.message,e,r.json);
                case 410:
                    throw new q(r.json.message,e,r.json);
                case 429:
                    {
                        let s = Number(r.headers.get("retry-after"))
                          , n = Number.isNaN(s) ? 1e3 : s;
                        return await new Promise( (r, s) => {
                            setTimeout(async () => {
                                try {
                                    r(await this.fetch(e, t))
                                } catch (e) {
                                    s(e)
                                }
                            }
                            , n)
                        }
                        )
                    }
                }
                throw new b(void 0,e,r.json)
            }
        }
        p = new WeakMap;
        let eo = (e, t) => new ea(e,t)
    }
}]);