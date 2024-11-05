"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2665], {
    60965: function(e, l, a) {
        a.r(l),
        a.d(l, {
            default: function() {
                return n
            }
        });
        var r = a(57437)
          , t = a(9826)
          , i = a(91269);
        function n(e) {
            return (0,
            r.jsx)(i.E.div, {
                whileHover: {
                    scale: 1.05
                },
                children: (0,
                r.jsx)(t.PrismicNextLink, {
                    field: e.link,
                    className: "w-[90vw] bg-[#0E0E0E] pt-[1.4rem] rounded-[1rem] text-white inline-flex justify-center py-[1.15rem] px-[1.88rem] leading-none align-middle content-center items-center gap-[0.625rem] text-center md:w-auto ".concat(null == e ? void 0 : e.class),
                    onClick: () => {
                        var l;
                        null === (l = analytics) || void 0 === l || l.track("Button Clicked", {
                            buttonName: null == e ? void 0 : e.label
                        })
                    }
                    ,
                    children: null == e ? void 0 : e.label
                })
            })
        }
    },
    76007: function(e, l, a) {
        a.d(l, {
            $x: function() {
                return i
            },
            oH: function() {
                return r
            },
            p6: function() {
                return t
            }
        });
        let r = e => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
          , t = e => {
            if (!e)
                return "";
            let l = new Date(e)
              , [a,,r] = l.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            }).split(" ")
              , t = l.getDate();
            return "".concat(a, " ").concat((e => {
                if (e > 3 && e < 21)
                    return "".concat(e, "th");
                switch (e % 10) {
                case 1:
                    return "".concat(e, "st");
                case 2:
                    return "".concat(e, "nd");
                case 3:
                    return "".concat(e, "rd");
                default:
                    return "".concat(e, "th")
                }
            }
            )(t), ", ").concat(r)
        }
          , i = e => {
            let[l,a] = e.split("-").map(e => parseInt(e, 10));
            return new Date(l,a - 1).toLocaleString("default", {
                month: "long",
                year: "numeric"
            })
        }
    },
    12665: function(e, l, a) {
        a.r(l);
        var r = a(57437)
          , t = a(2265)
          , i = a(68788)
          , n = a(33145)
          , s = a(91269)
          , o = a(76007)
          , c = a(84772)
          , d = a.n(c)
          , m = a(71586)
          , u = a(60965)
          , p = a(49240)
          , x = a(25368)
          , f = a(99376);
        let h = {
            label: e => {
                let {node: l, children: a} = e;
                return "linearGardientTextColor" === l.data.label ? (0,
                r.jsx)("span", {
                    className: "text-linear-gradient",
                    children: a
                }) : "headerP" === l.data.label ? (0,
                r.jsx)("span", {
                    className: "font-ppformula text-[#A7A7A7] uppercase",
                    children: a
                }) : "smallP" === l.data.label ? (0,
                r.jsx)("span", {
                    className: "text-[#808080] text-[0.875rem] font-normal",
                    children: a
                }) : void 0
            }
            ,
            paragraph: e => {
                let {children: l} = e;
                return (0,
                r.jsx)("p", {
                    className: "text-[1.125rem]",
                    children: l
                })
            }
            ,
            heading4: e => {
                let {children: l} = e;
                return (0,
                r.jsx)("h4", {
                    className: "text-[2.4375rem]",
                    children: l
                })
            }
        }
          , v = {
            control: e => ({
                ...e,
                padding: "0.10rem 0.34rem",
                borderRadius: "0.875rem",
                border: "1px solid #E7E7E7",
                fontFamily: "ppneuemontreal"
            }),
            option: (e, l) => ({
                ...e,
                fontFamily: "ppneuemontreal",
                backgroundColor: "white",
                color: "black",
                ":hover": {
                    backgroundColor: "lightgray",
                    color: "black"
                }
            }),
            menu: e => ({
                ...e,
                overflowY: "auto",
                borderRadius: "0.875rem"
            }),
            multiValue: e => ({
                ...e,
                backgroundColor: "#D4F0F0",
                borderRadius: "0.5625rem",
                color: "#045856",
                padding: "0.38rem 0.5rem"
            })
        }
          , y = (0,
        x.ZP)();
        l.default = e => {
            var l;
            let {slice: a, context: c} = e
              , [x,g] = (0,
            t.useState)(!1)
              , b = (0,
            t.useRef)(null)
              , [j,w] = (0,
            t.useState)({})
              , [N,k] = (0,
            t.useState)(!1)
              , [S,C] = (0,
            t.useState)({})
              , E = (0,
            f.useRouter)();
            (0,
            t.useEffect)( () => {
                let e = sessionStorage.getItem("filled-form");
                e && C(JSON.parse(e))
            }
            , []),
            (0,
            t.useEffect)( () => {
                b.current && S && Object.keys(S).forEach(e => {
                    var l;
                    let a = null === (l = b.current) || void 0 === l ? void 0 : l.elements.namedItem(e);
                    a && (Array.isArray(S[e]) ? Array.from(a.options).forEach(l => {
                        l.selected = S[e].includes(l.value)
                    }
                    ) : a.value = S[e])
                }
                )
            }
            , [S]);
            let _ = (e, l) => {
                if (Array.isArray(e)) {
                    let a = e.map(e => e.value);
                    C(e => ({
                        ...e,
                        [l]: a
                    }))
                } else
                    C(a => ({
                        ...a,
                        [l]: e ? e.value : ""
                    }))
            }
              , A = async e => {
                var l, r, t, i, n, s, c;
                e.preventDefault();
                let d = e.target
                  , m = null === (l = d.email) || void 0 === l ? void 0 : l.value
                  , u = null === (r = d.Company_Name) || void 0 === r ? void 0 : r.value
                  , p = null === (t = d.name) || void 0 === t ? void 0 : t.value;
                null === (i = analytics) || void 0 === i || i.identify(u, {
                    companyName: u,
                    email: m,
                    name: p,
                    source: "Website"
                }),
                null === (n = analytics) || void 0 === n || n.track("Button Clicked", {
                    buttonName: "Submit"
                });
                let x = {
                    type: "contactSales" === a.variation ? "contact-sales" : "api-key-request"
                }
                  , f = {};
                if (null === (s = a.primary.fields) || void 0 === s || s.forEach(e => {
                    let l = e.uid;
                    if (S[l]) {
                        let e = S[l];
                        Array.isArray(e) && 0 === e.length ? f[l] = "This field is required" : "email" !== l || (0,
                        o.oH)(e) ? x[l] = e : f[l] = "Invalid Email"
                    } else if (l && d[l]) {
                        let e = d[l].value;
                        "email" !== l || (0,
                        o.oH)(e) ? e ? x[l] = e : f[l] = "This field is required" : f[l] = "Invalid Email"
                    } else
                        f[l] = "This field is required"
                }
                ),
                Object.keys(f).length)
                    w(f);
                else {
                    k(!0);
                    let e = await fetch("/api/send-email", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(x)
                    });
                    if (!(await e.json()).success) {
                        k(!1);
                        return
                    }
                    sessionStorage.setItem("filled-form", JSON.stringify(x)),
                    null === (c = analytics) || void 0 === c || c.track("Test Key Form Submitted", {
                        companyName: u,
                        email: m,
                        name: p,
                        source: "Website"
                    }),
                    "contactSales" === a.variation ? E.push("/schedule-call") : (g(!0),
                    k(!1))
                }
            }
            ;
            return (0,
            r.jsx)(s.E.div, {
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
                r.jsx)("section", {
                    "data-slice-type": a.slice_type,
                    "data-slice-variation": a.variation,
                    className: "max-w-[93vw] md:max-w-[90rem] m-auto border-x border-light-gray flex flex-col",
                    children: (0,
                    r.jsx)("form", {
                        onSubmit: A,
                        ref: b,
                        children: (0,
                        r.jsxs)("div", {
                            className: "md:flex",
                            children: [(0,
                            r.jsxs)("div", {
                                className: "flex flex-col w-[100%] md:w-[40%] py-[7rem] px-[2.1875rem] gap-[2.81rem] items-start self-stretch border-r border-x-light-gray bg-black text-white",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "flex flex-col gap-[6.19rem]",
                                    children: [(0,
                                    r.jsx)(i.v, {
                                        field: a.primary.title,
                                        components: h
                                    }), (0,
                                    r.jsx)(i.v, {
                                        field: a.primary.description,
                                        components: h
                                    })]
                                }), "default" === a.variation ? (0,
                                r.jsxs)("div", {
                                    className: "flex flex-col [&_a]:underline",
                                    children: [(0,
                                    r.jsx)("p", {
                                        className: "font-ppformula uppercase text-[#A7A7A7]",
                                        children: "Additional Info"
                                    }), (0,
                                    r.jsx)(i.v, {
                                        field: a.primary.additional_info,
                                        components: h
                                    })]
                                }) : a.primary.perks.map( (e, l) => (0,
                                r.jsxs)("div", {
                                    className: "flex gap-[0.625rem] items-center justify-center",
                                    children: [(0,
                                    r.jsx)(n.default, {
                                        src: "/check-icon.svg",
                                        alt: "Check icon",
                                        width: 17,
                                        height: 17
                                    }), (0,
                                    r.jsx)("p", {
                                        className: "text-[#BFBFBF]",
                                        children: e.perk
                                    })]
                                }, l))]
                            }), x && "scheduleCall" !== a.variation ? (0,
                            r.jsxs)("div", {
                                className: "flex flex-col gap-[2.81rem] items-center justify-center text-center h-[70vh] md:w-[50rem]",
                                children: [(0,
                                r.jsx)(n.default, {
                                    src: "/submit_confirmation.svg",
                                    alt: "Success icon",
                                    width: 150,
                                    height: 150
                                }), (0,
                                r.jsx)(i.v, {
                                    field: a.primary.confirmation_title,
                                    components: h
                                }), (0,
                                r.jsx)("p", {
                                    className: "max-w-[30rem]",
                                    children: a.primary.confirmation_detail
                                }), (0,
                                r.jsx)(u.default, {
                                    label: a.primary.confirmation_primary_button_label,
                                    link: a.primary.confirmation_primary_button_link,
                                    class: "w-[80vw]"
                                })]
                            }) : "scheduleCall" !== a.variation ? (0,
                            r.jsxs)("div", {
                                className: "flex flex-col w-[100%] md:w-[60%] gap-[2.2rem] py-[7rem] px-[2.1875rem]",
                                children: [(0,
                                r.jsx)("h4", {
                                    children: "Please complete the form"
                                }), null === (l = a.primary.fields) || void 0 === l ? void 0 : l.map( (e, l) => {
                                    var t, i, n;
                                    let s = null === (t = e.label) || void 0 === t ? void 0 : t.toString()
                                      , o = null === (i = e.placeholder) || void 0 === i ? void 0 : i.toString()
                                      , c = null === (n = e.uid) || void 0 === n ? void 0 : n.toString();
                                    if ("lead_inquiry" === c) {
                                        let e = a.primary[c].map(e => ({
                                            value: e.option,
                                            label: e.option
                                        }));
                                        return (0,
                                        r.jsxs)("div", {
                                            className: "flex flex-col gap-[0.75rem]",
                                            children: [(0,
                                            r.jsx)("label", {
                                                htmlFor: c,
                                                children: s
                                            }), (0,
                                            r.jsx)(p.ZP, {
                                                id: c,
                                                components: y,
                                                isMulti: !0,
                                                options: e,
                                                styles: v,
                                                placeholder: o,
                                                onChange: e => _(e, c)
                                            })]
                                        }, l)
                                    }
                                    if (e.isdropdown) {
                                        let e = a.primary[c].map(e => ({
                                            value: e.option,
                                            label: e.option
                                        }));
                                        return (0,
                                        r.jsxs)("div", {
                                            className: "flex flex-col gap-[0.75rem]",
                                            children: [(0,
                                            r.jsx)("label", {
                                                htmlFor: c,
                                                children: s
                                            }), (0,
                                            r.jsx)(p.ZP, {
                                                id: c,
                                                options: e,
                                                styles: v,
                                                placeholder: o,
                                                onChange: e => _(e, c)
                                            })]
                                        }, l)
                                    }
                                    return (0,
                                    r.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [e.istextarea ? (0,
                                        r.jsxs)("div", {
                                            className: "flex flex-col gap-[0.75rem]",
                                            children: [(0,
                                            r.jsx)("label", {
                                                htmlFor: c,
                                                children: s
                                            }), (0,
                                            r.jsx)("textarea", {
                                                placeholder: o,
                                                id: c,
                                                name: c,
                                                className: "px-[0.94rem] py-[0.25rem] rounded-[0.875rem] border border-x-light-gray font-ppneuemontreal hover:outline-none focus:outline-none h-[7rem]",
                                                onChange: () => {
                                                    w({})
                                                }
                                            })]
                                        }) : (0,
                                        r.jsxs)("div", {
                                            className: "flex flex-col gap-[0.75rem]",
                                            children: [(0,
                                            r.jsx)("label", {
                                                htmlFor: c,
                                                children: s
                                            }), (0,
                                            r.jsx)("input", {
                                                placeholder: o,
                                                id: c,
                                                name: c,
                                                className: "px-[0.94rem] py-[0.50rem] rounded-[0.875rem] border border-x-light-gray font-ppneuemontreal",
                                                onChange: () => {
                                                    w({})
                                                }
                                            })]
                                        }), c && j[c] ? (0,
                                        r.jsxs)("span", {
                                            className: "flex items-center text-red-700 font-ppneuemontreal text-[1rem]",
                                            children: [(0,
                                            r.jsx)(m.Z, {
                                                className: "h-4 w-4"
                                            }), j[c]]
                                        }) : null]
                                    }, l)
                                }
                                ), (0,
                                r.jsx)("button", {
                                    type: "submit",
                                    className: d()("flex justify-center items-center pt-[1.12rem] w-[10rem] rounded-[1rem] text-white py-[0.875rem] px-[0.9375rem] gap-[0.625rem] text-center", {
                                        "bg-[#0E0E0E]": !N,
                                        "bg-gray-400 cursor-not-allowed": N
                                    }),
                                    disabled: N,
                                    children: N ? (0,
                                    r.jsxs)("svg", {
                                        className: "animate-spin h-5 w-5",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        children: [(0,
                                        r.jsx)("circle", {
                                            className: "opacity-25",
                                            cx: "12",
                                            cy: "12",
                                            r: "10",
                                            stroke: "currentColor",
                                            strokeWidth: "4"
                                        }), (0,
                                        r.jsx)("path", {
                                            className: "opacity-75",
                                            fill: "currentColor",
                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        })]
                                    }) : a.primary.button_label
                                }), "default" === a.variation && (0,
                                r.jsx)("div", {
                                    className: "[&_a]:underline",
                                    children: (0,
                                    r.jsx)(i.v, {
                                        field: a.primary.agreetos,
                                        components: h
                                    })
                                })]
                            }) : (0,
                            r.jsxs)("div", {
                                className: "flex flex-col w-[100%] md:w-[60%] gap-[2.2rem] py-[7rem] px-[2.1875rem]",
                                children: [(0,
                                r.jsx)("h4", {
                                    children: "Schedule a call with us"
                                }), (0,
                                r.jsx)("iframe", {
                                    id: "simplymeet-widget",
                                    src: "https://app.simplymeet.me/marc-williams-f6mezb/25min?view=compact&name=".concat(S.name, "&email=").concat(S.email),
                                    style: {
                                        inset: "0px",
                                        zIndex: "1000",
                                        borderWidth: "0px",
                                        display: "block",
                                        overflow: "none",
                                        width: "100%",
                                        minHeight: "700px"
                                    },
                                    allowFullScreen: !0
                                })]
                            })]
                        })
                    })
                })
            })
        }
    }
}]);
