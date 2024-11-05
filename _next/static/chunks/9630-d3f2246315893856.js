"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9630], {
    64874: function(e, l, i) {
        i.d(l, {
            Z: function() {
                return t
            }
        });
        var n = i(57437);
        let o = ["Brokerage APIs", "Data Aggregation", "Embedded Trading", "Announcements"];
        function t(e) {
            let {handleChange: l, selectCategories: i} = e;
            return (0,
            n.jsx)("div", {
                className: "py-[2.5rem] w-full md:w-[20.6rem]",
                children: null == o ? void 0 : o.map( (e, o) => {
                    let t = i.includes(e);
                    return (0,
                    n.jsx)("div", {
                        className: "mb-10 flex flex-col gap-[1.56rem]",
                        children: (0,
                        n.jsxs)("div", {
                            className: "flex gap-[0.88rem] items-center",
                            children: [(0,
                            n.jsx)("input", {
                                type: "checkbox",
                                id: e,
                                name: e,
                                value: e,
                                onChange: l,
                                checked: t,
                                className: "form-checkbox h-5 w-5 text-white bg-[#045856] border-none rounded focus:ring-0",
                                style: {
                                    backgroundColor: t ? "#045856" : void 0
                                }
                            }), (0,
                            n.jsx)("label", {
                                className: "text-[1.125rem] font-ppneuemontreal ".concat(t ? "text-black" : "text-[#808080]"),
                                htmlFor: e,
                                children: "Trade" === e ? "Read/Write" : e
                            })]
                        }, o)
                    }, o)
                }
                )
            })
        }
    },
    93813: function(e, l, i) {
        i.d(l, {
            Z: function() {
                return u
            }
        });
        var n = i(57437)
          , o = i(2265)
          , t = i(33044)
          , r = i(46624)
          , d = i(77165)
          , a = i(91294)
          , s = i(64874);
        function u(e) {
            let {isOpen: l, setIsOpen: i, handleChange: u, selectCategories: c, view: v} = e;
            return (0,
            n.jsx)(t.u.Root, {
                show: l,
                as: o.Fragment,
                children: (0,
                n.jsxs)(r.V, {
                    as: "div",
                    className: "relative z-10",
                    onClose: i,
                    children: [(0,
                    n.jsx)(t.u.Child, {
                        as: o.Fragment,
                        enter: "ease-in-out duration-500",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in-out duration-500",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: (0,
                        n.jsx)("div", {
                            className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "fixed inset-0 overflow-hidden",
                        children: (0,
                        n.jsx)("div", {
                            className: "absolute inset-0 overflow-hidden",
                            children: (0,
                            n.jsx)("div", {
                                className: "pointer-events-none fixed inset-0 flex",
                                children: (0,
                                n.jsx)(t.u.Child, {
                                    as: o.Fragment,
                                    enter: "transform transition ease-in-out duration-500 sm:duration-700",
                                    enterFrom: "-translate-x-full",
                                    enterTo: "translate-x-0",
                                    leave: "transform transition ease-in-out duration-500 sm:duration-700",
                                    leaveFrom: "translate-x-0",
                                    leaveTo: "-translate-x-full",
                                    children: (0,
                                    n.jsxs)(r.V.Panel, {
                                        className: "pointer-events-auto relative w-full",
                                        children: [(0,
                                        n.jsx)(t.u.Child, {
                                            as: o.Fragment,
                                            enter: "ease-in-out duration-500",
                                            enterFrom: "opacity-0",
                                            enterTo: "opacity-100",
                                            leave: "ease-in-out duration-500",
                                            leaveFrom: "opacity-100",
                                            leaveTo: "opacity-0",
                                            children: (0,
                                            n.jsx)("div", {
                                                className: "absolute top-0 right-0 p-4",
                                                children: (0,
                                                n.jsxs)("button", {
                                                    type: "button",
                                                    className: "text-gray-300 hover:text-white focus:outline-none",
                                                    onClick: () => i(!1),
                                                    children: [(0,
                                                    n.jsx)("span", {
                                                        className: "sr-only",
                                                        children: "Close panel"
                                                    }), (0,
                                                    n.jsx)(d.Z, {
                                                        className: "h-[40px] w-[40px] border border-light-gray rounded-[0.875rem] p-[0.4rem] text-[#808080]",
                                                        "aria-hidden": "true"
                                                    })]
                                                })
                                            })
                                        }), (0,
                                        n.jsxs)("div", {
                                            className: "flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl",
                                            children: [(0,
                                            n.jsx)("div", {
                                                className: "px-4 sm:px-6",
                                                children: (0,
                                                n.jsx)(r.V.Title, {
                                                    className: "text-[1.5625rem]",
                                                    children: "Filters"
                                                })
                                            }), (0,
                                            n.jsx)("div", {
                                                className: "relative mt-6 flex-1 px-4 sm:px-6",
                                                children: "blog" === v ? (0,
                                                n.jsx)(s.Z, {
                                                    handleChange: u,
                                                    selectCategories: c
                                                }) : (0,
                                                n.jsx)(a.Z, {
                                                    handleChange: u,
                                                    selectCategories: c
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        })
                    })]
                })
            })
        }
    },
    91294: function(e, l, i) {
        i.d(l, {
            Z: function() {
                return t
            },
            b: function() {
                return o
            }
        });
        var n = i(57437);
        let o = [{
            title: "Region / Country",
            options: ["US", "Canada", "Europe", "Australia", "India"]
        }, {
            title: "Authentication Type",
            options: ["OAuth", "Login  Credentials", "API Credentials"]
        }, {
            title: "Asset Type",
            options: ["Stock", "ETFs", "Crypto", "Options", "Mutual Funds", "ADR"]
        }, {
            title: "Connection Type",
            options: ["Read", "Trade"]
        }, {
            title: "Transactions History",
            options: ["More than 1 year", "More than 5 years", "To Account Opening"]
        }];
        function t(e) {
            let {handleChange: l, selectCategories: i} = e;
            return (0,
            n.jsx)("div", {
                className: "py-[2.5rem] w-full md:w-[20.6rem]",
                children: null == o ? void 0 : o.map( (e, o) => {
                    var t;
                    return (0,
                    n.jsxs)("div", {
                        className: "mb-10 flex flex-col gap-[1.56rem]",
                        children: [(0,
                        n.jsx)("h6", {
                            children: e.title
                        }), (0,
                        n.jsx)("div", {
                            className: "flex flex-col gap-[0.75rem]",
                            children: null == e ? void 0 : null === (t = e.options) || void 0 === t ? void 0 : t.map( (e, o) => {
                                let t = i.includes(e);
                                return (0,
                                n.jsxs)("div", {
                                    className: "flex gap-[0.88rem] items-center",
                                    children: [(0,
                                    n.jsx)("input", {
                                        type: "checkbox",
                                        id: e,
                                        name: e,
                                        value: e,
                                        onChange: l,
                                        checked: t,
                                        className: "form-checkbox h-5 w-5 text-white bg-[#045856] border-none rounded focus:ring-0",
                                        style: {
                                            backgroundColor: t ? "#045856" : void 0
                                        }
                                    }), (0,
                                    n.jsx)("label", {
                                        className: "text-[1.125rem] font-ppneuemontreal ".concat(t ? "text-black" : "text-[#808080]"),
                                        htmlFor: e,
                                        children: "Trade" === e ? "Read/Write" : e
                                    })]
                                }, o)
                            }
                            )
                        })]
                    }, o)
                }
                )
            })
        }
    },
    905: function(e, l, i) {
        i.d(l, {
            z: function() {
                return o
            }
        });
        var n = i(2265);
        let o = () => {
            let[e,l] = (0,
            n.useState)(0)
              , i = () => l(window.innerWidth);
            return (0,
            n.useEffect)( () => (i(),
            window.addEventListener("resize", i),
            () => window.removeEventListener("resize", i)), []),
            e
        }
    },
    19630: function(e, l, i) {
        i.r(l);
        var n = i(57437)
          , o = i(2265)
          , t = i(43281)
          , r = i(27648)
          , d = i(33145)
          , a = i(68788)
          , s = i(25103)
          , u = i.n(s)
          , c = i(61251)
          , v = i(88060)
          , m = i(12413)
          , x = i(905)
          , p = i(93813)
          , h = i(91294)
          , g = i(91269);
        let f = {
            label: e => {
                let {node: l, children: i} = e;
                if ("linearGardientTextColor" === l.data.label)
                    return (0,
                    n.jsx)("span", {
                        className: "text-linear-gradient",
                        children: i
                    })
            }
        };
        l.default = e => {
            let {slice: l, context: i} = e
              , [s,b] = (0,
            o.useState)("A-Z")
              , y = e => (s && e.sort( (e, l) => {
                var i, n, o, t, r, d, a, u, c, v, m, x, p, h, g, f;
                let b = null == e ? void 0 : null === (u = e.data) || void 0 === u ? void 0 : null === (a = u.slices) || void 0 === a ? void 0 : null === (d = a.filter(e => (null == e ? void 0 : e.slice_type) === "brokerages")) || void 0 === d ? void 0 : null === (r = d[0]) || void 0 === r ? void 0 : null === (t = r.primary) || void 0 === t ? void 0 : null === (o = t.title) || void 0 === o ? void 0 : null === (n = o[0]) || void 0 === n ? void 0 : null === (i = n.text) || void 0 === i ? void 0 : i.toLowerCase()
                  , y = null == l ? void 0 : null === (f = l.data) || void 0 === f ? void 0 : null === (g = f.slices) || void 0 === g ? void 0 : null === (h = g.filter(e => (null == e ? void 0 : e.slice_type) === "brokerages")) || void 0 === h ? void 0 : null === (p = h[0]) || void 0 === p ? void 0 : null === (x = p.primary) || void 0 === x ? void 0 : null === (m = x.title) || void 0 === m ? void 0 : null === (v = m[0]) || void 0 === v ? void 0 : null === (c = v.text) || void 0 === c ? void 0 : c.toLowerCase();
                return "A-Z" === s ? b < y ? -1 : b > y ? 1 : 0 : b < y ? 1 : b > y ? -1 : 0
            }
            ),
            e)
              , j = y(null == i ? void 0 : i.brokerages)
              , [N,w] = (0,
            o.useState)("")
              , [k,C] = (0,
            o.useState)([])
              , [_,T] = (0,
            o.useState)(j)
              , [A,Z] = (0,
            o.useState)(0)
              , [F,L] = (0,
            o.useState)(!1)
              , E = null == _ ? void 0 : _.length
              , O = null == _ ? void 0 : _.slice(A, A + 15)
              , S = (0,
            x.z)();
            (0,
            o.useEffect)( () => {
                let e = null == j ? void 0 : j.filter(e => {
                    var l, i, n, o, t, r, d, a, s, u, c, v, m, x, p, h;
                    return (null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : null === (d = a.slices) || void 0 === d ? void 0 : null === (r = d.filter(e => (null == e ? void 0 : e.slice_type) === "brokerages")) || void 0 === r ? void 0 : null === (t = r[0]) || void 0 === t ? void 0 : null === (o = t.primary) || void 0 === o ? void 0 : null === (n = o.title) || void 0 === n ? void 0 : null === (i = n[0]) || void 0 === i ? void 0 : null === (l = i.text) || void 0 === l ? void 0 : l.toLowerCase().includes(null == N ? void 0 : N.toLowerCase())) || (null == e ? void 0 : null === (h = e.data) || void 0 === h ? void 0 : null === (p = h.slices) || void 0 === p ? void 0 : null === (x = p.filter(e => (null == e ? void 0 : e.slice_type) === "brokerages")) || void 0 === x ? void 0 : null === (m = x[0]) || void 0 === m ? void 0 : null === (v = m.primary) || void 0 === v ? void 0 : null === (c = v.description) || void 0 === c ? void 0 : null === (u = c[0]) || void 0 === u ? void 0 : null === (s = u.text) || void 0 === s ? void 0 : s.toLowerCase().includes(null == N ? void 0 : N.toLowerCase()))
                }
                );
                T(y((null == k ? void 0 : k.length) ? null == e ? void 0 : e.filter(e => {
                    var l, i, n, o, t, r, d, a, s, u, c, v, m, x, p, g, f, b, y, j, N, w, C, _, T, A, Z, F, L, E, O, S, M, P, I;
                    return (null == k || !k.some(e => {
                        var l, i;
                        return null === (i = h.b[2]) || void 0 === i ? void 0 : null === (l = i.options) || void 0 === l ? void 0 : l.includes(e)
                    }
                    ) || (null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : null === (o = t.slices) || void 0 === o ? void 0 : null === (n = o.filter(e => (null == e ? void 0 : e.slice_type) === "brokerage_option")) || void 0 === n ? void 0 : null === (i = n[0]) || void 0 === i ? void 0 : null === (l = i.items) || void 0 === l ? void 0 : l.some(e => k.includes(null == e ? void 0 : e.assets_type)))) && (null == k || !k.some(e => {
                        var l, i;
                        return null === (i = h.b[4]) || void 0 === i ? void 0 : null === (l = i.options) || void 0 === l ? void 0 : l.includes(e)
                    }
                    ) || ((null == k ? void 0 : k.includes("To Account Opening")) ? ["To Account Opening"].includes(null == e ? void 0 : null === (u = e.data) || void 0 === u ? void 0 : null === (s = u.slices) || void 0 === s ? void 0 : null === (a = s.filter(e => (null == e ? void 0 : e.slice_type) === "brokerage_option")) || void 0 === a ? void 0 : null === (d = a[0]) || void 0 === d ? void 0 : null === (r = d.primary) || void 0 === r ? void 0 : r.transactions_history) : (null == k ? void 0 : k.includes("More than 5 years")) ? ["More than 5 years", "To Account Opening"].includes(null == e ? void 0 : null === (p = e.data) || void 0 === p ? void 0 : null === (x = p.slices) || void 0 === x ? void 0 : null === (m = x.filter(e => (null == e ? void 0 : e.slice_type) === "brokerage_option")) || void 0 === m ? void 0 : null === (v = m[0]) || void 0 === v ? void 0 : null === (c = v.primary) || void 0 === c ? void 0 : c.transactions_history) : null == k || !k.includes("More than 1 years") || ["More than 1 years", "More than 5 years", "To Account Opening"].includes(null == e ? void 0 : null === (j = e.data) || void 0 === j ? void 0 : null === (y = j.slices) || void 0 === y ? void 0 : null === (b = y.filter(e => (null == e ? void 0 : e.slice_type) === "brokerage_option")) || void 0 === b ? void 0 : null === (f = b[0]) || void 0 === f ? void 0 : null === (g = f.primary) || void 0 === g ? void 0 : g.transactions_history))) && (null == k || !k.some(e => {
                        var l, i;
                        return null === (i = h.b[1]) || void 0 === i ? void 0 : null === (l = i.options) || void 0 === l ? void 0 : l.includes(e)
                    }
                    ) || k.includes(null == e ? void 0 : null === (T = e.data) || void 0 === T ? void 0 : null === (_ = T.slices) || void 0 === _ ? void 0 : null === (C = _.filter(e => (null == e ? void 0 : e.slice_type) === "brokerage_option")) || void 0 === C ? void 0 : null === (w = C[0]) || void 0 === w ? void 0 : null === (N = w.primary) || void 0 === N ? void 0 : N.authentication_type)) && (null == k || !k.some(e => {
                        var l, i;
                        return null === (i = h.b[3]) || void 0 === i ? void 0 : null === (l = i.options) || void 0 === l ? void 0 : l.includes(e)
                    }
                    ) || k.includes(null == e ? void 0 : null === (E = e.data) || void 0 === E ? void 0 : null === (L = E.slices) || void 0 === L ? void 0 : null === (F = L.filter(e => (null == e ? void 0 : e.slice_type) === "brokerage_option")) || void 0 === F ? void 0 : null === (Z = F[0]) || void 0 === Z ? void 0 : null === (A = Z.primary) || void 0 === A ? void 0 : A.connection_type)) && (null == k || !k.some(e => {
                        var l, i;
                        return null === (i = h.b[0]) || void 0 === i ? void 0 : null === (l = i.options) || void 0 === l ? void 0 : l.includes(e)
                    }
                    ) || (null == e ? void 0 : null === (I = e.data) || void 0 === I ? void 0 : null === (P = I.slices) || void 0 === P ? void 0 : null === (M = P.filter(e => (null == e ? void 0 : e.slice_type) === "brokerage_option")) || void 0 === M ? void 0 : null === (S = M[0]) || void 0 === S ? void 0 : null === (O = S.items) || void 0 === O ? void 0 : O.some(e => k.includes(null == e ? void 0 : e.region_country))))
                }
                ) : e)),
                Z(0)
            }
            , [j, N, k, s]);
            let M = "flex gap-3 h-12 relative items-center w-fit rounded-[3px] px-5 py-[11px] border-gray-150 border-2\n  text-black outline-none hover:border-light-cyan group-aria-disabled:!border-gray-150 group-aria-disabled:!cursor-not-allowed"
              , P = e => {
                var l, i;
                let n = [...k]
                  , o = null == e ? void 0 : null === (l = e.target) || void 0 === l ? void 0 : l.value;
                (null === (i = e.target) || void 0 === i ? void 0 : i.checked) ? (null == n ? void 0 : n.includes(o)) || (n.push(o),
                C(n)) : (null == n ? void 0 : n.includes(o)) && (n.push(o),
                C(n.filter(e => e !== o)))
            }
              , I = e => {
                b(e)
            }
            ;
            return (0,
            n.jsx)(g.E.div, {
                initial: {
                    opacity: 0,
                    x: -100
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: .5,
                    ease: "easeIn"
                },
                className: "border-b border-light-gray",
                children: (0,
                n.jsxs)("section", {
                    "data-slice-type": l.slice_type,
                    "data-slice-variation": l.variation,
                    className: "max-w-[93vw] md:max-w-[90rem] m-auto",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex flex-col md:flex-row",
                        children: [(0,
                        n.jsxs)("div", {
                            className: "hidden md:block border-r border-l border-light-gray py-[1.88rem] pl-[1.88rem]",
                            children: [(0,
                            n.jsx)("h4", {
                                children: "Filters"
                            }), (0,
                            n.jsx)(h.Z, {
                                handleChange: P,
                                selectCategories: k
                            })]
                        }), (0,
                        n.jsx)("div", {
                            className: "w-full py-[1.88rem] px-[1.88rem] border-r border-x-light-gray",
                            children: (0,
                            n.jsxs)("div", {
                                className: "flex flex-col gap-[2.5rem]",
                                children: [(0,
                                n.jsxs)("div", {
                                    className: "flex flex-col items-start sm:flex-row sm:items-center justify-between",
                                    children: [(0,
                                    n.jsx)("h4", {
                                        children: "Integrations"
                                    }), (0,
                                    n.jsxs)("div", {
                                        className: "flex items-center mt-[1.25rem] md:mt-0",
                                        children: [(0,
                                        n.jsxs)("button", {
                                            className: "flex items-center gap-1 md:hidden mr-10 border border-light-gray rounded-[0.9375rem] p-2",
                                            onClick: () => L(!0),
                                            children: [(0,
                                            n.jsx)(c.Z, {
                                                className: "h-7 w-7",
                                                "aria-hidden": "true"
                                            }), " "]
                                        }), (0,
                                        n.jsxs)("div", {
                                            className: "flex items-center bg-[#E7E7E7] p-[0.2125rem] rounded-[0.9375rem] text-[0.875rem]",
                                            children: [(0,
                                            n.jsx)("button", {
                                                className: "py-1 px-3 rounded-[0.9375rem] ".concat("A-Z" === s ? "bg-white text-black" : "bg-gray-200 text-gray-500"),
                                                onClick: () => I("A-Z"),
                                                children: "A-Z"
                                            }), (0,
                                            n.jsx)("button", {
                                                className: "py-1 px-3 rounded-[0.9375rem] ".concat("Z-A" === s ? "bg-white text-black" : "bg-gray-200 text-gray-500"),
                                                onClick: () => I("Z-A"),
                                                children: "Z-A"
                                            })]
                                        })]
                                    })]
                                }), (0,
                                n.jsx)("input", {
                                    type: "text",
                                    id: "search",
                                    name: "search",
                                    className: "py-[0.90rem] px-[1.56rem] w-full rounded-[1.25rem] border border-light-gray text-[1.25rem] font-ppneuemontreal font-normal",
                                    placeholder: "Search integration",
                                    onChange: e => w(e.target.value)
                                }), (0,
                                n.jsxs)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.25rem]",
                                    children: [null == O ? void 0 : O.map( (e, l) => {
                                        var i, o, d, s;
                                        let u = null == e ? void 0 : null === (s = e.data) || void 0 === s ? void 0 : null === (d = s.slices) || void 0 === d ? void 0 : null === (o = d.filter(e => (null == e ? void 0 : e.slice_type) === "brokerages")) || void 0 === o ? void 0 : null === (i = o[0]) || void 0 === i ? void 0 : i.primary;
                                        return (0,
                                        n.jsx)(r.default, {
                                            href: null == e ? void 0 : e.url,
                                            children: (0,
                                            n.jsxs)("div", {
                                                className: "border border-light-gray py-[1.88rem] px-[1.56rem] rounded-[1.25rem] relative h-full flex flex-col gap-[1.25rem]",
                                                children: [(0,
                                                n.jsxs)("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [(0,
                                                    n.jsx)("div", {}), (0,
                                                    n.jsx)(t.PrismicNextImage, {
                                                        field: u.image,
                                                        className: "w-[3.625rem] h-[3.625rem] p-[0.3125rem] justify-center flex items-center rounded-[0.625rem] ",
                                                        imgixParams: {
                                                            auto: null
                                                        }
                                                    })]
                                                }), (0,
                                                n.jsxs)("div", {
                                                    className: "flex flex-col gap-[1rem]",
                                                    children: [(0,
                                                    n.jsxs)("div", {
                                                        className: "[&>*]:text-[1.5625rem] [&>*]:tracking-normal flex flex-col gap-[0rem]",
                                                        children: [(0,
                                                        n.jsx)(a.v, {
                                                            field: u.title,
                                                            components: f
                                                        }), (null == u ? void 0 : u.tag) !== "No Tag" && (0,
                                                        n.jsx)("span", {
                                                            className: "!text-[0.675rem] pt-[0.4rem] pb-[0.2rem] px-[1rem] rounded-[0.5625rem] uppercase w-fit text-center text-[#045856] bg-light-cyan",
                                                            children: null == u ? void 0 : u.tag
                                                        })]
                                                    }), (0,
                                                    n.jsx)(a.v, {
                                                        field: u.subtitle,
                                                        components: f
                                                    })]
                                                })]
                                            }, l)
                                        }, l)
                                    }
                                    ), (null == j ? void 0 : j.length) && !(null == _ ? void 0 : _.length) ? (0,
                                    n.jsx)("h5", {
                                        className: "text-[20px]",
                                        children: "No results"
                                    }) : null]
                                }), (null == _ ? void 0 : _.length) > 15 ? (0,
                                n.jsx)(u(), {
                                    hrefBuilder: e => "/",
                                    breakLabel: "...",
                                    nextLabel: (0,
                                    n.jsxs)("button", {
                                        className: M,
                                        children: [(0,
                                        n.jsx)("span", {
                                            className: "hidden md:block",
                                            children: "Next"
                                        }), (0,
                                        n.jsx)(d.default, {
                                            src: m.Z,
                                            alt: "right carret",
                                            className: "min-w-3 min-h-3"
                                        })]
                                    }),
                                    onPageChange: e => {
                                        E && Z(15 * e.selected % E)
                                    }
                                    ,
                                    pageCount: Math.ceil(E / 15),
                                    previousLabel: (0,
                                    n.jsxs)("button", {
                                        className: M,
                                        children: [(0,
                                        n.jsx)(d.default, {
                                            src: v.Z,
                                            alt: "left carret",
                                            className: "min-w-3 min-h-3"
                                        }), (0,
                                        n.jsx)("span", {
                                            className: "hidden md:block",
                                            children: "Previous"
                                        })]
                                    }),
                                    pageRangeDisplayed: 1,
                                    marginPagesDisplayed: S > 768 ? 1 : 0,
                                    renderOnZeroPageCount: null,
                                    activeClassName: "border-2 !border-light-cyan",
                                    containerClassName: "flex gap-4 items-center justify-center pt-8 text-blue-100 list-none",
                                    pageClassName: "flex relative rounded-[3px] border-light-gray border-2 text-black outline-none hover:border-light-cyan",
                                    pageLinkClassName: "px-5 py-3",
                                    previousLinkClassName: "group",
                                    nextLinkClassName: "group"
                                }) : null]
                            })
                        })]
                    }), (0,
                    n.jsx)(p.Z, {
                        isOpen: F,
                        setIsOpen: L,
                        handleChange: P,
                        selectCategories: k,
                        view: "integration"
                    })]
                })
            })
        }
    },
    88060: function(e, l) {
        l.Z = {
            src: "/_next/static/media/bxs_left-arrow.54ddc79b.svg",
            height: 13,
            width: 12,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    12413: function(e, l) {
        l.Z = {
            src: "/_next/static/media/bxs_right-arrow.efc39d90.svg",
            height: 13,
            width: 12,
            blurWidth: 0,
            blurHeight: 0
        }
    }
}]);