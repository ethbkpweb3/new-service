"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8788], {
    68788: function(e, t, n) {
        n.d(t, {
            v: function() {
                return F
            }
        });
        var l = n(57437);
        let r = (...e) => (...t) => {
            for (let n = 0; n < e.length; n++) {
                let l = e[n];
                if (l) {
                    let e = l(...t);
                    if (null != e)
                        return e
                }
            }
        }
          , i = {
            listItem: "list-item",
            oListItem: "o-list-item",
            list: "group-list-item",
            oList: "group-o-list-item",
            span: "span"
        }
          , s = {
            [i.listItem]: "listItem",
            [i.oListItem]: "oListItem",
            [i.list]: "list",
            [i.oList]: "oList"
        }
          , o = e => (t, n, l, r, i) => {
            let o = e[s[t] || t];
            if (o)
                return o({
                    type: t,
                    node: n,
                    text: l,
                    children: r,
                    key: i
                })
        }
        ;
        var a = n(2265);
        let u = () => (++u.i).toString();
        u.i = 0;
        let d = e => {
            let t = h(e)
              , n = [];
            for (let e = 0; e < t.length; e++)
                n.push(c(t[e]));
            return {
                key: u(),
                children: n
            }
        }
          , p = (e, t=[]) => ({
            key: u(),
            type: e.type,
            text: "text"in e ? e.text : void 0,
            node: e,
            children: t
        })
          , m = e => p({
            type: i.span,
            text: e,
            spans: []
        })
          , h = e => {
            let t = e.slice(0);
            for (let e = 0; e < t.length; e++) {
                let n = t[e];
                if (n.type === i.listItem || n.type === i.oListItem) {
                    let l = [n];
                    for (; t[e + 1] && t[e + 1].type === n.type; )
                        l.push(t[e + 1]),
                        t.splice(e, 1);
                    n.type === i.listItem ? t[e] = {
                        type: i.list,
                        items: l
                    } : t[e] = {
                        type: i.oList,
                        items: l
                    }
                }
            }
            return t
        }
          , c = e => {
            if ("text"in e)
                return p(e, x(e.spans, e));
            if ("items"in e) {
                let t = [];
                for (let n = 0; n < e.items.length; n++)
                    t.push(c(e.items[n]));
                return p(e, t)
            }
            return p(e)
        }
          , x = (e, t, n) => {
            if (!e.length)
                return [m(t.text)];
            let l = e.slice(0);
            l.sort( (e, t) => e.start - t.start || t.end - e.end);
            let r = [];
            for (let e = 0; e < l.length; e++) {
                let i = l[e]
                  , s = n && n.start || 0
                  , o = i.start - s
                  , a = i.end - s
                  , u = t.text.slice(o, a)
                  , d = [];
                for (let t = e; t < l.length; t++) {
                    let e = l[t];
                    e !== i && (e.start >= i.start && e.end <= i.end ? (d.push(e),
                    l.splice(t, 1),
                    t--) : e.start < i.end && e.end > i.start && (d.push({
                        ...e,
                        end: i.end
                    }),
                    l[t] = {
                        ...e,
                        start: i.end
                    }))
                }
                0 === e && o > 0 && r.push(m(t.text.slice(0, o)));
                let h = {
                    ...i,
                    text: u
                };
                r.push(p(h, x(d, {
                    ...t,
                    text: u
                }, i))),
                a < t.text.length && r.push(m(t.text.slice(a, l[e + 1] ? l[e + 1].start - s : void 0)))
            }
            return r
        }
          , f = (e, t) => g(d(e).children, t)
          , g = (e, t) => {
            let n = [];
            for (let l = 0; l < e.length; l++) {
                let r = e[l]
                  , i = t(r.type, r.node, r.text, g(r.children, t), r.key);
                null != i && n.push(i)
            }
            return n
        }
          , y = e => {
            let t = /^(\/(?!\/)|#)/.test(e)
              , n = !t && !/^https?:\/\//.test(e);
            return t && !n
        }
          , k = {
            Any: "Any",
            Document: "Document",
            Media: "Media",
            Web: "Web"
        }
          , j = e => {
            var t;
            return {
                link_type: k.Document,
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
          , v = (e, ...t) => {
            let n;
            if (!e)
                return null;
            let l = "link_type"in e ? e : j(e)
              , [r] = t;
            switch (n = "function" == typeof r || null == r ? {
                linkResolver: r
            } : {
                ...r
            },
            l.link_type) {
            case k.Media:
            case k.Web:
                return "url"in l ? l.url : null;
            case k.Document:
                if ("id"in l && n.linkResolver) {
                    let e = n.linkResolver(l);
                    if (null != e)
                        return e
                }
                if ("url"in l && l.url)
                    return l.url;
                return null;
            case k.Any:
            default:
                return null
            }
        }
          , b = e => null != e
          , C = e => !!b(e) && (1 === e.length && "text"in e[0] ? !!e[0].text : !!e.length)
          , L = e => b(e) && ("id"in e || "url"in e)
          , _ = (e, t={}) => {
            if (e && ("link_type"in e ? L(e) : e)) {
                let n = "target"in e ? e.target : void 0
                  , l = v(e, t.linkResolver)
                  , r = null == l ? void 0 : l
                  , i = "string" == typeof r && !y(r)
                  , s = t.rel ? t.rel({
                    href: r,
                    isExternal: i,
                    target: n
                }) : i ? "noreferrer" : void 0;
                return {
                    href: r,
                    target: n,
                    rel: null == s ? void 0 : s
                }
            }
            return {}
        }
          , I = e => {
            let t = /^(\/(?!\/)|#)/.test(e)
              , n = !t && !/^https?:\/\//.test(e);
            return t && !n
        }
        ;
        n(40257);
        let R = a.forwardRef(function(e, t) {
            let {field: n, document: r, linkResolver: i, internalComponent: s, externalComponent: o, children: a, ...u} = e
              , {href: d, rel: p, ...m} = _(n ?? r, {
                linkResolver: i,
                rel: "function" == typeof u.rel ? u.rel : void 0
            })
              , h = p;
            "rel"in u && "function" != typeof u.rel && (h = u.rel);
            let c = ("href"in u ? u.href : d) || ""
              , x = c && I(c) ? s || "a" : o || "a";
            return (0,
            l.jsx)(x, {
                ref: t,
                ...m,
                ...u,
                href: c,
                rel: h,
                children: "children"in e ? a : null == n ? void 0 : n.text
            })
        });
        n(40257);
        let T = e => {
            if ("direction"in e && "rtl" === e.direction)
                return "rtl"
        }
          , M = e => o({
            heading1: ({node: e, children: t, key: n}) => (0,
            l.jsx)("h1", {
                dir: T(e),
                children: t
            }, n),
            heading2: ({node: e, children: t, key: n}) => (0,
            l.jsx)("h2", {
                dir: T(e),
                children: t
            }, n),
            heading3: ({node: e, children: t, key: n}) => (0,
            l.jsx)("h3", {
                dir: T(e),
                children: t
            }, n),
            heading4: ({node: e, children: t, key: n}) => (0,
            l.jsx)("h4", {
                dir: T(e),
                children: t
            }, n),
            heading5: ({node: e, children: t, key: n}) => (0,
            l.jsx)("h5", {
                dir: T(e),
                children: t
            }, n),
            heading6: ({node: e, children: t, key: n}) => (0,
            l.jsx)("h6", {
                dir: T(e),
                children: t
            }, n),
            paragraph: ({node: e, children: t, key: n}) => (0,
            l.jsx)("p", {
                dir: T(e),
                children: t
            }, n),
            preformatted: ({node: e, key: t}) => (0,
            l.jsx)("pre", {
                children: e.text
            }, t),
            strong: ({children: e, key: t}) => (0,
            l.jsx)("strong", {
                children: e
            }, t),
            em: ({children: e, key: t}) => (0,
            l.jsx)("em", {
                children: e
            }, t),
            listItem: ({node: e, children: t, key: n}) => (0,
            l.jsx)("li", {
                dir: T(e),
                children: t
            }, n),
            oListItem: ({node: e, children: t, key: n}) => (0,
            l.jsx)("li", {
                dir: T(e),
                children: t
            }, n),
            list: ({children: e, key: t}) => (0,
            l.jsx)("ul", {
                children: e
            }, t),
            oList: ({children: e, key: t}) => (0,
            l.jsx)("ol", {
                children: e
            }, t),
            image: ({node: t, key: n}) => {
                let r = (0,
                l.jsx)("img", {
                    src: t.url,
                    alt: t.alt ?? void 0,
                    "data-copyright": t.copyright ? t.copyright : void 0
                });
                return (0,
                l.jsx)("p", {
                    className: "block-img",
                    children: t.linkTo ? (0,
                    l.jsx)(R, {
                        linkResolver: e.linkResolver,
                        internalComponent: e.internalLinkComponent,
                        externalComponent: e.externalLinkComponent,
                        field: t.linkTo,
                        children: r
                    }) : r
                }, n)
            }
            ,
            embed: ({node: e, key: t}) => (0,
            l.jsx)("div", {
                "data-oembed": e.oembed.embed_url,
                "data-oembed-type": e.oembed.type,
                "data-oembed-provider": e.oembed.provider_name,
                dangerouslySetInnerHTML: {
                    __html: e.oembed.html ?? ""
                }
            }, t),
            hyperlink: ({node: t, children: n, key: r}) => (0,
            l.jsx)(R, {
                field: t.data,
                linkResolver: e.linkResolver,
                internalComponent: e.internalLinkComponent,
                externalComponent: e.externalLinkComponent,
                children: n
            }, r),
            label: ({node: e, children: t, key: n}) => (0,
            l.jsx)("span", {
                className: e.data.label,
                children: t
            }, n),
            span: ({text: e, key: t}) => {
                let n = []
                  , r = 0;
                for (let t of e.split("\n"))
                    r > 0 && n.push((0,
                    l.jsx)("br", {}, `${r}__break`)),
                    n.push((0,
                    l.jsx)(a.Fragment, {
                        children: t
                    }, `${r}__line`)),
                    r++;
                return (0,
                l.jsx)(a.Fragment, {
                    children: n
                }, t)
            }
        });
        function w({linkResolver: e, field: t, fallback: n, components: i, externalLinkComponent: s, internalLinkComponent: u, ...d}) {
            return a.useMemo( () => {
                if (!C(t))
                    return null != n ? (0,
                    l.jsx)(l.Fragment, {
                        children: n
                    }) : null;
                {
                    let n = r("object" == typeof i ? o(i) : i, M({
                        linkResolver: e,
                        internalLinkComponent: u,
                        externalLinkComponent: s
                    }))
                      , d = f(t, (e, t, l, r, i) => {
                        let s = n(e, t, l, r, i);
                        return a.isValidElement(s) && null == s.key ? a.cloneElement(s, {
                            key: i
                        }) : s
                    }
                    );
                    return (0,
                    l.jsx)(l.Fragment, {
                        children: d
                    })
                }
            }
            , [t, u, s, i, e, n])
        }
        let D = a.createContext({})
          , E = () => a.useContext(D) || {}
          , F = function({components: e, ...t}) {
            let n = E()
              , i = r("object" == typeof e ? o(e) : e, "object" == typeof n.richTextComponents ? o(n.richTextComponents) : n.richTextComponents);
            return (0,
            l.jsx)(w, {
                components: i,
                internalLinkComponent: n.internalLinkComponent,
                externalLinkComponent: n.externalLinkComponent,
                ...t
            })
        }
    }
}]);
