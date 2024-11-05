(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1248, 6732, 8839, 2451], {
    72431: function() {},
    35532: function(e, a, r) {
        Promise.resolve().then(r.bind(r, 43281)),
        Promise.resolve().then(r.bind(r, 9826)),
        Promise.resolve().then(r.bind(r, 17690)),
        Promise.resolve().then(r.bind(r, 76733)),
        Promise.resolve().then(r.t.bind(r, 65878, 23)),
        Promise.resolve().then(r.t.bind(r, 88003, 23)),
        Promise.resolve().then(r.bind(r, 81523)),
        Promise.resolve().then(r.bind(r, 70049)),
        Promise.resolve().then(r.bind(r, 1613)),
        Promise.resolve().then(r.bind(r, 55397)),
        Promise.resolve().then(r.bind(r, 60965)),
        Promise.resolve().then(r.bind(r, 93905)),
        Promise.resolve().then(r.bind(r, 85290)),
        Promise.resolve().then(r.bind(r, 13229)),
        Promise.resolve().then(r.bind(r, 86916)),
        Promise.resolve().then(r.bind(r, 10833)),
        Promise.resolve().then(r.bind(r, 5496)),
        Promise.resolve().then(r.bind(r, 25379)),
        Promise.resolve().then(r.bind(r, 99075)),
        Promise.resolve().then(r.bind(r, 19630)),
        Promise.resolve().then(r.bind(r, 46047)),
        Promise.resolve().then(r.bind(r, 18645)),
        Promise.resolve().then(r.bind(r, 6289)),
        Promise.resolve().then(r.bind(r, 2447)),
        Promise.resolve().then(r.bind(r, 12665)),
        Promise.resolve().then(r.bind(r, 86732)),
        Promise.resolve().then(r.bind(r, 18839)),
        Promise.resolve().then(r.bind(r, 67577)),
        Promise.resolve().then(r.bind(r, 82451))
    },
    85290: function(e, a, r) {
        "use strict";
        r.d(a, {
            PartnerSlider: function() {
                return n
            }
        });
        var l = r(57437);
        r(2265);
        var i = r(6406)
          , t = r(43281)
          , s = r(9826);
        let n = e => {
            var a;
            let {data: r} = e;
            return (0,
            l.jsx)(i.Z, {
                dots: !1,
                infinite: !0,
                slidesToShow: 7,
                slidesToScroll: 1,
                speed: 2e3,
                arrows: !1,
                autoplay: !0,
                autoplaySpeed: 2e3,
                cssEase: "linear",
                responsive: [{
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }],
                children: null == r ? void 0 : null === (a = r.partners) || void 0 === a ? void 0 : a.map( (e, a) => (0,
                l.jsx)("div", {
                    children: (0,
                    l.jsx)("div", {
                        className: "rounded-2xl bg-white shadow-md w-[178px] h-[178px]",
                        children: (0,
                        l.jsx)(s.PrismicNextLink, {
                            field: e.link,
                            className: "w-full h-full flex items-center justify-center rounded-2xl ",
                            children: (0,
                            l.jsx)(t.PrismicNextImage, {
                                field: e.image,
                                imgixParams: {
                                    auto: null
                                }
                            })
                        }, a)
                    })
                }, a))
            })
        }
    },
    52101: function(e, a, r) {
        "use strict";
        r.d(a, {
            e: function() {
                return o
            }
        });
        var l = r(58861)
          , i = r(11925)
          , t = JSON.parse('{"AF":"snaptrade-v3"}');
        let s = r(40257).env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || t.AF
          , n = [{
            type: "page",
            path: "/:uid"
        }, {
            type: "home",
            uid: "home",
            path: "/"
        }, {
            type: "blogs",
            uid: "blogs",
            path: "/blogs"
        }, {
            type: "blog",
            path: "/blogs/:uid"
        }, {
            type: "integration",
            path: "/:uid"
        }, {
            type: "brokerage",
            path: "/brokerage-integrations/:uid"
        }]
          , o = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , a = l.e(s, {
                routes: n,
                fetchOptions: {
                    next: {
                        tags: ["prismic"]
                    },
                    cache: "force-cache"
                },
                ...e
            });
            return i.L({
                client: a
            }),
            a
        }
    },
    86916: function(e, a, r) {
        "use strict";
        r.r(a),
        r.d(a, {
            default: function() {
                return y
            }
        });
        var l = r(57437)
          , i = r(2265)
          , t = r(25103)
          , s = r.n(t)
          , n = r(43281)
          , o = r(68788)
          , d = r(33145)
          , c = r(27648)
          , m = r(88060)
          , x = r(12413)
          , u = r(905)
          , p = r(91269)
          , v = r(76007);
        let h = e => {
            var a, r, i, t;
            let {blog: s, isLarge: d=!1} = e
              , m = (0,
            v.p6)(null == s ? void 0 : null === (a = s.data) || void 0 === a ? void 0 : a.published_at);
            return (0,
            l.jsx)("div", {
                children: (0,
                l.jsxs)(c.default, {
                    href: null == s ? void 0 : s.url,
                    className: "flex flex-col gap-[1.56rem]",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "relative w-full",
                        children: [(0,
                        l.jsx)(n.PrismicNextImage, {
                            field: null == s ? void 0 : null === (r = s.data) || void 0 === r ? void 0 : r.hero_image,
                            className: "w-full h-auto object-cover rounded-[1.25rem]",
                            imgixParams: {
                                auto: null
                            }
                        }), (0,
                        l.jsx)("p", {
                            className: "absolute top-2 left-2 bg-light-cyan w-fit px-[0.5rem] pt-[0.2rem] rounded-[0.57rem] items-center text-[#045856] uppercase font-ppformula",
                            children: null == s ? void 0 : null === (i = s.data) || void 0 === i ? void 0 : i.category
                        })]
                    }), (0,
                    l.jsx)("div", {
                        className: " ".concat(d ? "md:[&>*]:text-[1.875rem]" : "md:[&>*]:text-[0.9375rem]", " [&>*]:leading-normal [&>*]:tracking-normal text-[0.9375rem]"),
                        children: (0,
                        l.jsx)(o.v, {
                            field: null == s ? void 0 : null === (t = s.data) || void 0 === t ? void 0 : t.title
                        })
                    }), (0,
                    l.jsx)("p", {
                        className: "text-[#045856]",
                        children: m
                    })]
                })
            }, null == s ? void 0 : s.id)
        }
          , f = e => {
            var a;
            let {searchKey: r, blogs: t=[], selectCategories: n=[]} = e
              , [o,c] = i.useState(t)
              , [v,f] = i.useState([])
              , [g,b] = i.useState(0)
              , j = null == o ? void 0 : null === (a = o.filter(e => {
                var a;
                return null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.istrending
            }
            )) || void 0 === a ? void 0 : a.filter( (e, a) => 0 === a)
              , y = null == o ? void 0 : o.filter(e => {
                var a;
                return !(null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.istrending)
            }
            )
              , N = null == y ? void 0 : y.length
              , w = null == y ? void 0 : y.slice(g, g + 6)
              , _ = (0,
            u.z)();
            i.useEffect( () => {
                let e = [...t, ...v]
                  , a = null == e ? void 0 : e.filter(e => {
                    var a, l, i, t, s, n;
                    return (null == e ? void 0 : null === (l = e.data) || void 0 === l ? void 0 : null === (a = l.author_name) || void 0 === a ? void 0 : a.toLowerCase().includes(null == r ? void 0 : r.toLowerCase())) || (null == e ? void 0 : null === (n = e.data) || void 0 === n ? void 0 : null === (s = n.title) || void 0 === s ? void 0 : null === (t = s[0]) || void 0 === t ? void 0 : null === (i = t.text) || void 0 === i ? void 0 : i.toLowerCase().includes(null == r ? void 0 : r.toLowerCase()))
                }
                )
                  , l = (null == n ? void 0 : n.length) ? null == a ? void 0 : a.filter(e => {
                    var a;
                    return n.includes(null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.category)
                }
                ) : a;
                c((null == l ? void 0 : l.length) ? l : null == e ? void 0 : e.filter(e => {
                    var a;
                    return !(null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.istrending)
                }
                ))
            }
            , [v, t, r, n]);
            let P = "flex gap-3 h-12 relative items-center w-fit rounded-[3px] px-5 py-[11px] border-2 border-gray-150 border \n  text-black outline-none hover:border-light-cyan group-aria-disabled:!border-gray-150 group-aria-disabled:!cursor-not-allowed";
            return (0,
            l.jsx)(p.E.div, {
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
                children: (0,
                l.jsxs)("div", {
                    className: "w-full",
                    children: [null == j ? void 0 : j.map( (e, a) => (0,
                    l.jsx)(h, {
                        blog: e,
                        isLarge: !0
                    }, a)), (0,
                    l.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-x-[1.5rem] gap-y-[3rem] mt-[2rem]",
                        children: null == w ? void 0 : w.map( (e, a) => (0,
                        l.jsx)(h, {
                            blog: e
                        }, a))
                    }), (null == y ? void 0 : y.length) > 6 ? (0,
                    l.jsx)(s(), {
                        breakLabel: "...",
                        nextLabel: (0,
                        l.jsxs)("button", {
                            className: P,
                            children: [(0,
                            l.jsx)("span", {
                                className: "hidden md:block",
                                children: "Next"
                            }), (0,
                            l.jsx)(d.default, {
                                src: x.Z,
                                alt: "right carret",
                                className: "min-w-3 min-h-3"
                            })]
                        }),
                        onPageChange: e => {
                            N && b(6 * e.selected % N)
                        }
                        ,
                        pageCount: Math.ceil(N / 6),
                        previousLabel: (0,
                        l.jsxs)("button", {
                            className: P,
                            children: [(0,
                            l.jsx)(d.default, {
                                src: m.Z,
                                alt: "left carret",
                                className: "min-w-3 min-h-3"
                            }), (0,
                            l.jsx)("span", {
                                className: "hidden md:block",
                                children: "Previous"
                            })]
                        }),
                        pageRangeDisplayed: 1,
                        marginPagesDisplayed: _ > 768 ? 1 : 0,
                        renderOnZeroPageCount: null,
                        activeClassName: "border-2 !border-light-cyan",
                        containerClassName: "flex gap-4 items-center justify-center pt-[6rem] text-blue-100 list-none",
                        pageClassName: "flex relative rounded-[3px] border-light-gray border-2 text-black outline-none hover:border-light-cyan",
                        pageLinkClassName: "px-5 py-3",
                        previousLinkClassName: "group",
                        nextLinkClassName: "group"
                    }) : null]
                })
            })
        }
        ;
        var g = r(64874)
          , b = r(61251)
          , j = r(93813)
          , y = e => {
            let {slice: a, context: r} = e
              , [t,s] = (0,
            i.useState)("")
              , [n,o] = (0,
            i.useState)([])
              , [d,c] = (0,
            i.useState)(!1)
              , m = e => {
                var a, r;
                let l = [...n]
                  , i = null == e ? void 0 : null === (a = e.target) || void 0 === a ? void 0 : a.value;
                (null === (r = e.target) || void 0 === r ? void 0 : r.checked) ? (null == l ? void 0 : l.includes(i)) || (l.push(i),
                o(l)) : (null == l ? void 0 : l.includes(i)) && (l.push(i),
                o(l.filter(e => e !== i)))
            }
            ;
            return (0,
            l.jsx)(p.E.div, {
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
                l.jsxs)("section", {
                    "data-slice-type": a.slice_type,
                    "data-slice-variation": a.variation,
                    className: "max-w-[93vw] md:max-w-[90rem] m-auto",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "flex flex-col md:flex-row",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "hidden md:block border-r border-l border-light-gray py-[1.88rem] pl-[1.88rem]",
                            children: [(0,
                            l.jsx)("h4", {
                                children: "Filters"
                            }), (0,
                            l.jsx)(g.Z, {
                                handleChange: m,
                                selectCategories: n
                            })]
                        }), (0,
                        l.jsx)("div", {
                            className: "w-full py-[1.88rem] px-[1.88rem] border-r border-x-light-gray ",
                            children: (0,
                            l.jsxs)("div", {
                                className: "flex flex-col gap-[2.5rem]",
                                children: [(0,
                                l.jsx)("div", {
                                    className: "flex items-center mt-[1.25rem] md:mt-0",
                                    children: (0,
                                    l.jsx)("button", {
                                        className: "flex items-center gap-1 md:hidden mr-10 border border-light-gray rounded-[0.9375rem] p-2",
                                        onClick: () => c(!0),
                                        children: (0,
                                        l.jsx)(b.Z, {
                                            className: "h-7 w-7",
                                            "aria-hidden": "true"
                                        })
                                    })
                                }), (0,
                                l.jsx)("input", {
                                    type: "text",
                                    id: "search",
                                    name: "search",
                                    className: "py-[0.90rem] px-[1.56rem] w-full rounded-[1.25rem] border border-light-gray text-[1.25rem] font-ppneuemontreal font-normal",
                                    placeholder: "Search integration",
                                    onChange: e => s(e.target.value)
                                }), (0,
                                l.jsx)(f, {
                                    searchKey: t,
                                    blogs: null == r ? void 0 : r.posts,
                                    selectCategories: n
                                })]
                            })
                        })]
                    }), (0,
                    l.jsx)(j.Z, {
                        isOpen: d,
                        setIsOpen: c,
                        handleChange: m,
                        selectCategories: n,
                        view: "blog"
                    })]
                })
            })
        }
    },
    10833: function(e, a, r) {
        "use strict";
        r.r(a);
        var l = r(57437)
          , i = r(68788)
          , t = r(91269)
          , s = r(60965);
        a.default = e => {
            var a, r, n, o, d, c;
            let {slice: m, context: x} = e;
            return (0,
            l.jsx)("section", {
                "data-slice-type": m.slice_type,
                "data-slice-variation": m.variation,
                className: "border-b border-light-gray",
                children: (0,
                l.jsxs)(t.E.div, {
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
                    className: "py-[4.375rem] max-w-[93vw] md:max-w-[90rem] m-[auto] flex gap-[5.75rem] flex-col md:flex-row",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "font-ppformula flex flex-col gap-[2.5rem] ",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "flex flex-col gap-[0.94rem]",
                            children: [(0,
                            l.jsx)("span", {
                                className: "integration-badge",
                                children: "Region/Country"
                            }), (0,
                            l.jsx)("span", {
                                children: null == m ? void 0 : null === (n = m.items) || void 0 === n ? void 0 : null === (r = n.map( (e, a) => e.region_country)) || void 0 === r ? void 0 : null === (a = r.filter(e => "None" !== e)) || void 0 === a ? void 0 : a.join(", ")
                            })]
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex flex-col gap-[0.94rem]",
                            children: [(0,
                            l.jsx)("span", {
                                className: "integration-badge",
                                children: "Authentication Type"
                            }), (0,
                            l.jsx)("span", {
                                children: m.primary.authentication_type
                            })]
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex flex-col gap-[0.94rem]",
                            children: [(0,
                            l.jsx)("span", {
                                className: "integration-badge",
                                children: "Assets Type"
                            }), (0,
                            l.jsx)("span", {
                                children: null == m ? void 0 : null === (c = m.items) || void 0 === c ? void 0 : null === (d = c.map( (e, a) => e.assets_type)) || void 0 === d ? void 0 : null === (o = d.filter(e => "None" !== e)) || void 0 === o ? void 0 : o.join(", ")
                            })]
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex flex-col gap-[0.94rem]",
                            children: [(0,
                            l.jsx)("span", {
                                className: "integration-badge",
                                children: "Connection Type"
                            }), (0,
                            l.jsx)("span", {
                                children: m.primary.connection_type
                            })]
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex flex-col gap-[0.94rem]",
                            children: [(0,
                            l.jsx)("span", {
                                className: "integration-badge",
                                children: "Transactions History"
                            }), (0,
                            l.jsx)("span", {
                                children: m.primary.transactions_history
                            })]
                        })]
                    }), (0,
                    l.jsxs)("div", {
                        className: "flex flex-col gap-[3.56rem] max-w-[50rem] [&_a]:underline",
                        children: [(0,
                        l.jsx)("h4", {
                            children: "About This Integration"
                        }), (0,
                        l.jsx)(i.v, {
                            field: m.primary.overview
                        }), (0,
                        l.jsx)(s.default, {
                            label: m.primary.primary_button_label,
                            link: m.primary.primary_button_link,
                            class: "!no-underline"
                        })]
                    })]
                })
            })
        }
    },
    5496: function(e, a, r) {
        "use strict";
        r.r(a);
        var l = r(57437)
          , i = r(68788)
          , t = r(43281)
          , s = r(60965)
          , n = r(28819)
          , o = r(91269);
        let d = {
            label: e => {
                let {node: a, children: r} = e;
                if ("linearGardientTextColor" === a.data.label)
                    return (0,
                    l.jsx)("span", {
                        className: "text-linear-gradient",
                        children: r
                    })
            }
            ,
            heading2: e => {
                let {node: a, children: r} = e;
                return (0,
                l.jsx)("h2", {
                    className: "md:text-[3.4375rem] md:leading-[4.0625rem] leading-[4.0625rem]",
                    children: r
                })
            }
        };
        a.default = e => {
            var a, r, m, x, u, p;
            let {slice: v} = e
              , {ref: h, inView: f} = (0,
            n.YD)({
                triggerOnce: !0,
                threshold: .1
            });
            return (0,
            l.jsxs)("section", {
                "data-slice-type": v.slice_type,
                "data-slice-variation": v.variation,
                className: "bg-pale-cyan z-[999px]",
                children: [(0,
                l.jsxs)(o.E.div, {
                    initial: {
                        opacity: 0,
                        x: -100
                    },
                    animate: f ? {
                        opacity: 1,
                        x: 0
                    } : {},
                    transition: {
                        duration: .5
                    },
                    ref: h,
                    children: [(0,
                    l.jsx)("div", {
                        className: "".concat("default" === v.variation && "border-t border-light-aqua")
                    }), (0,
                    l.jsx)("div", {
                        className: " max-w-[93vw] md:max-w-[90rem] m-[auto] ".concat("default" === v.variation ? "border-x border-light-aqua py-[7.5rem]" : "md:border-x border-light-teal"),
                        children: (0,
                        l.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-12 px-[1.25rem] md:px-0 ".concat("default" === v.variation ? "border-y border-light-aqua bg-white" : "border-light-teal bg-pale-cyan"),
                            children: [(0,
                            l.jsxs)("div", {
                                className: "relative ".concat("security" === v.variation || "toS" === v.variation ? "col-span-2" : "col-span-3"),
                                children: [(0,
                                l.jsx)("div", {
                                    className: "absolute inset-y-0 left-1/2 transform -translate-x-1/2 border-l md:hidden ".concat("default" === v.variation ? "border-light-gray" : "border-light-teal")
                                }), (0,
                                l.jsx)("div", {
                                    className: "p-[3.5rem] md:border-b md:border-solid h-[50%] relative ".concat("default" === v.variation ? "md:border-light-gray" : "md:border-light-teal"),
                                    children: "security" === v.variation || "toS" === v.variation || "integration" === v.variation ? (0,
                                    l.jsx)(c, {
                                        className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                                    }) : (0,
                                    l.jsx)(t.PrismicNextImage, {
                                        field: null === (a = v.items[0]) || void 0 === a ? void 0 : a.logo,
                                        className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-[3.125rem] w-[3.75rem]"
                                    })
                                }), (0,
                                l.jsx)("div", {
                                    className: "p-[3.5rem] border-b border-solid md:border-none ".concat("default" === v.variation ? "border-light-gray" : "border-light-teal")
                                })]
                            }), (0,
                            l.jsxs)("div", {
                                className: "border-x border-solid text-center relative ".concat("default" === v.variation ? "border-light-gray" : "border-light-teal", " ").concat("security" === v.variation || "toS" === v.variation ? "col-span-8" : "col-span-6"),
                                children: ["security" === v.variation ? (0,
                                l.jsx)("div", {
                                    className: "flex justify-center items-center pb-[4.38rem] md:pb-[3.44rem] pt-[5rem] md:pt-[9.38rem] h-[18%] m-auto text-center",
                                    children: (0,
                                    l.jsx)(t.PrismicNextImage, {
                                        field: v.primary.security_badge
                                    })
                                }) : "integration" === v.variation ? (0,
                                l.jsx)("div", {
                                    className: "flex justify-center items-center pt-[5rem] md:pt-[9.38rem] h-[18%] m-auto text-center",
                                    children: (0,
                                    l.jsx)(t.PrismicNextImage, {
                                        field: v.primary.image,
                                        className: "w-[10.25rem] h-[10.25rem] rounded-[1.875rem]"
                                    })
                                }) : (0,
                                l.jsx)("div", {
                                    className: "p-[1.75rem] h-[18%]"
                                }), (0,
                                l.jsxs)("div", {
                                    className: "p-[3.5rem] h-[64%] flex flex-col justify-center items-center gap-[2.8125rem] font-ppformula",
                                    children: [(0,
                                    l.jsx)(i.v, {
                                        field: v.primary.title,
                                        components: d
                                    }), "default" === v.variation ? (0,
                                    l.jsxs)(l.Fragment, {
                                        children: [(0,
                                        l.jsxs)("div", {
                                            className: "flex flex-col gap-[0.94rem]",
                                            children: [(0,
                                            l.jsx)("p", {
                                                className: "font-medium font-ppformula",
                                                children: v.primary.subtitle
                                            }), (0,
                                            l.jsx)("p", {
                                                className: "font-normal",
                                                children: v.primary.second_subtitle
                                            })]
                                        }), (0,
                                        l.jsx)(s.default, {
                                            label: v.primary.primary_button_label,
                                            link: v.primary.primary_button_link,
                                            class: "w-[80vw]"
                                        })]
                                    }) : (0,
                                    l.jsx)("div", {
                                        className: "max-w-[26.625rem]",
                                        children: "integration" === v.variation ? (0,
                                        l.jsx)(i.v, {
                                            field: v.primary.subtitle,
                                            components: d
                                        }) : (0,
                                        l.jsx)("p", {
                                            className: "".concat("security" === v.variation || "toS" === v.variation && "font-ppformula"),
                                            children: v.primary.subtitle
                                        })
                                    }), "security" === v.variation && (0,
                                    l.jsx)("div", {
                                        className: "max-w-[26.625rem]",
                                        children: (0,
                                        l.jsx)("p", {
                                            children: v.primary.second_subtitle
                                        })
                                    })]
                                }), (0,
                                l.jsx)("div", {
                                    className: "p-[1rem]"
                                }), "security" === v.variation || "toS" === v.variation || "integration" === v.variation ? (0,
                                l.jsx)(c, {
                                    className: "absolute right-0 top-[-0.6%] md:top-[13%] transform translate-x-1/2"
                                }) : (0,
                                l.jsx)(t.PrismicNextImage, {
                                    field: null === (r = v.items[1]) || void 0 === r ? void 0 : r.logo,
                                    className: "absolute right-3 md:right-0 top-[-5%] md:top-[13%] transform translate-x-1/2 border border-solid rounded-[3.125rem] w-[3.75rem] overflow-hidden"
                                }), "security" === v.variation || "toS" === v.variation || "integration" === v.variation ? (0,
                                l.jsx)(c, {
                                    className: "absolute right-0 top-[99.3%] md:top-[77%] transform translate-x-1/2"
                                }) : (0,
                                l.jsx)(t.PrismicNextImage, {
                                    field: null === (m = v.items[2]) || void 0 === m ? void 0 : m.logo,
                                    className: "absolute right-3 md:right-0 top-[95%] md:top-[77%] transform translate-x-1/2 rounded-[3.125rem]  w-[3.75rem] z-10"
                                }), "security" === v.variation || "toS" === v.variation || "integration" === v.variation ? (0,
                                l.jsx)(c, {
                                    className: "absolute left-[-1rem] top-[-0.6%] md:top-[13%] transform translate-x-1/2"
                                }) : (0,
                                l.jsx)(t.PrismicNextImage, {
                                    field: null === (x = v.items[3]) || void 0 === x ? void 0 : x.logo,
                                    className: "absolute left-[-3rem] md:left-[-3.75rem] top-[-5%] md:top-[13%] transform translate-x-1/2 rounded-[3.125rem] w-[3.75rem] "
                                }), "security" === v.variation || "toS" === v.variation || "integration" === v.variation ? (0,
                                l.jsx)(c, {
                                    className: "absolute left-[-1rem] top-[99.3%] md:top-[77%] transform translate-x-1/2"
                                }) : (0,
                                l.jsx)(t.PrismicNextImage, {
                                    field: null === (u = v.items[4]) || void 0 === u ? void 0 : u.logo,
                                    className: "absolute left-[-3rem] md:left-[-3.75rem] top-[95%] md:top-[77%] transform translate-x-1/2 rounded-[3.125rem] w-[3.75rem] z-10 "
                                })]
                            }), (0,
                            l.jsxs)("div", {
                                className: "relative ".concat("security" === v.variation || "toS" === v.variation ? "col-span-2" : "col-span-3"),
                                children: [(0,
                                l.jsx)("div", {
                                    className: "absolute inset-y-0 left-1/2 transform -translate-x-1/2 border-l md:hidden ".concat("default" === v.variation ? "border-light-gray" : "border-light-teal")
                                }), (0,
                                l.jsx)("div", {
                                    className: "p-[3.5rem] border-t md:border-b md:border-none border-solid h-[50%] relative ".concat("default" === v.variation ? "border-light-gray" : "border-light-teal"),
                                    children: "security" === v.variation || "toS" === v.variation || "integration" === v.variation ? (0,
                                    l.jsx)(c, {
                                        className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                                    }) : (0,
                                    l.jsx)(t.PrismicNextImage, {
                                        field: null === (p = v.items[5]) || void 0 === p ? void 0 : p.logo,
                                        className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border border-solid rounded-[3.125rem] w-[3.75rem]"
                                    })
                                }), (0,
                                l.jsx)("div", {
                                    className: "p-[3.5rem] md:border-t ".concat("default" === v.variation ? "border-light-gray" : "border-light-teal")
                                })]
                            })]
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "".concat("aboutUs" === v.variation || "comparison" === v.variation && "border-b border-light-teal")
                    })]
                }), "comparison" === v.variation && (0,
                l.jsxs)("div", {
                    className: "max-w-[93vw] md:max-w-[45rem] m-[auto] pt-[10rem] border-x-dashlength border-dashed border-light-aqua",
                    children: [(0,
                    l.jsx)("div", {
                        className: "text-center ",
                        children: (0,
                        l.jsx)(i.v, {
                            field: v.primary.faq_title,
                            components: d
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "flex flex-col gap-[1.25rem] mt-[3.44rem]",
                        children: (0,
                        l.jsx)(l.Fragment, {
                            children: v.primary.faqs.map( (e, a) => (0,
                            l.jsxs)("div", {
                                className: "bg-white m-0 mx-auto p-8 border-y-dashlength border-dashed border-light-aqua",
                                children: [(0,
                                l.jsx)(i.v, {
                                    field: e.question
                                }), (0,
                                l.jsx)(i.v, {
                                    field: e.answer
                                })]
                            }, a))
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "py-20"
                    })]
                })]
            })
        }
        ;
        let c = e => {
            let {className: a} = e;
            return (0,
            l.jsx)("div", {
                className: "w-4 h-4 rounded-[3.125rem] bg-light-teal ".concat(a)
            })
        }
    },
    25379: function(e, a, r) {
        "use strict";
        r.r(a);
        var l = r(57437)
          , i = r(68788)
          , t = r(68446);
        let s = {
            preformatted: e => {
                let {node: a} = e;
                return (0,
                l.jsx)(t.Z1, {
                    customStyle: {
                        overflow: "scroll",
                        borderRadius: "4px"
                    },
                    text: a.text,
                    language: "text",
                    showLineNumbers: !0,
                    theme: t.Vg
                })
            }
        };
        a.default = e => {
            let {slice: a} = e;
            return (0,
            l.jsx)("section", {
                "data-slice-type": a.slice_type,
                "data-slice-variation": a.variation,
                className: "py-10 px-6",
                children: (0,
                l.jsx)("div", {
                    className: "m-0 m-auto w-full max-w-[590px] bg-gray-100 rounded",
                    children: (0,
                    l.jsx)(i.v, {
                        field: a.primary.content,
                        components: s
                    })
                })
            })
        }
    },
    46047: function(e, a, r) {
        "use strict";
        r.r(a);
        var l = r(57437)
          , i = r(60965)
          , t = r(43281)
          , s = r(68788)
          , n = r(28819)
          , o = r(91269);
        let d = {
            label: e => {
                let {node: a, children: r} = e;
                if ("linearGardientTextColor" === a.data.label)
                    return (0,
                    l.jsx)("span", {
                        className: "text-linear-gradient",
                        children: r
                    })
            }
            ,
            paragraph: e => {
                let {node: a, children: r} = e;
                return (0,
                l.jsx)("p", {
                    className: "text-[#BFBFBF]",
                    children: r
                })
            }
        };
        a.default = e => {
            var a, r;
            let {slice: c} = e
              , {ref: m, inView: x} = (0,
            n.YD)({
                triggerOnce: !0,
                threshold: .1
            });
            return (0,
            l.jsx)("section", {
                "data-slice-type": c.slice_type,
                "data-slice-variation": c.variation,
                children: (0,
                l.jsxs)(o.E.div, {
                    initial: {
                        opacity: 0,
                        y: 200
                    },
                    animate: x ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .5
                    },
                    ref: m,
                    children: [(0,
                    l.jsx)("div", {
                        className: "border-t border-light-gray"
                    }), (0,
                    l.jsxs)("div", {
                        className: "flex flex-col items-center text-center gap-[5rem] py-[7.5rem] max-w-[93vw] md:max-w-[90rem] m-[auto] border-x border-light-gray ".concat("comparison" === c.variation && "bg-black text-white"),
                        children: [(0,
                        l.jsx)("div", {
                            children: (0,
                            l.jsx)(s.v, {
                                field: c.primary.title,
                                components: d
                            })
                        }), "comparison" === c.variation ? (0,
                        l.jsx)("div", {
                            className: "border-y border-[#404040] flex flex-col md:flex-row gap-[1.25rem] w-full",
                            children: null === (a = c.items) || void 0 === a ? void 0 : a.map( (e, a) => (0,
                            l.jsxs)("div", {
                                className: "border-y md:border-x border-[#404040] px-[1.88rem] py-[3.44rem] flex flex-col gap-[5.31rem] text-left flex-1",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "flex gap-10 items-start",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "max-h-12",
                                        children: (0,
                                        l.jsx)(s.v, {
                                            field: e.title,
                                            components: d
                                        })
                                    }), (0,
                                    l.jsx)(t.PrismicNextImage, {
                                        field: e.icon,
                                        imgixParams: {
                                            auto: null
                                        },
                                        className: "rounded-[0.625rem] p-[0.3125rem] w-[2.5rem] h-[2.5rem] shrink-0",
                                        style: {
                                            background: "radial-gradient(130.99% 131.13% at 53.32% 55.13%, rgba(82, 196, 194, 0.00) 0%, #52C4C2 100%)"
                                        }
                                    })]
                                }), (0,
                                l.jsx)(s.v, {
                                    field: e.description,
                                    components: d
                                })]
                            }, a))
                        }) : (0,
                        l.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-[6.25rem] items-start text-center",
                            children: null === (r = c.items) || void 0 === r ? void 0 : r.map( (e, a) => (0,
                            l.jsxs)("div", {
                                className: "flex flex-col gap-[2.1875rem] items-center text-center px-[2rem]",
                                children: [(0,
                                l.jsx)(t.PrismicNextImage, {
                                    field: e.icon,
                                    imgixParams: {
                                        auto: null
                                    },
                                    className: "bg-light-cyan rounded-[0.625rem] p-[0.3125rem] w-[2.5rem] h-[2.5rem]"
                                }), (0,
                                l.jsx)(s.v, {
                                    field: e.title,
                                    components: d
                                }), (0,
                                l.jsx)(s.v, {
                                    field: e.description,
                                    components: d
                                })]
                            }, a))
                        }), "default" === c.variation && (0,
                        l.jsx)("div", {
                            children: (0,
                            l.jsx)(i.default, {
                                label: c.primary.primary_button_label,
                                link: c.primary.primary_button_link
                            })
                        })]
                    })]
                })
            })
        }
    },
    18645: function(e, a, r) {
        "use strict";
        r.r(a);
        var l = r(57437)
          , i = r(68788)
          , t = r(2265)
          , s = r(52101)
          , n = r(43281)
          , o = r(27648);
        let d = {
            label: e => {
                let {node: a, children: r} = e;
                if ("linearGardientTextColor" === a.data.label)
                    return (0,
                    l.jsx)("span", {
                        className: "text-linear-gradient",
                        children: r
                    })
            }
        };
        a.default = e => {
            let {slice: a} = e
              , [r,c] = (0,
            t.useState)([])
              , m = (0,
            s.e)();
            return (0,
            t.useEffect)( () => {
                (async () => {
                    var e;
                    let r = null === (e = a.items) || void 0 === e ? void 0 : e.map(e => {
                        var a;
                        return null == e ? void 0 : null === (a = e.bloglink) || void 0 === a ? void 0 : a.id
                    }
                    );
                    (null == r ? void 0 : r.length) && c(await m.getAllByIDs(r))
                }
                )()
            }
            , [a.items]),
            (0,
            l.jsx)("section", {
                "data-slice-type": a.slice_type,
                "data-slice-variation": a.variation,
                className: "py-[118px] px-6",
                children: (0,
                l.jsxs)("div", {
                    className: "m-0 m-auto w-full max-w-[590px]",
                    children: [(0,
                    l.jsx)(i.v, {
                        field: a.primary.title,
                        components: d
                    }), (0,
                    l.jsx)("div", {
                        children: null == r ? void 0 : r.map( (e, a) => {
                            var r, t, s;
                            return (0,
                            l.jsxs)("div", {
                                className: "mt-[35px] flex flex-col md:flex-row gap-6 text-left items-center",
                                children: [(0,
                                l.jsx)(n.PrismicNextImage, {
                                    field: null == e ? void 0 : null === (r = e.data) || void 0 === r ? void 0 : r.hero_image,
                                    className: "w-full md:w-[200px] object-contain",
                                    imgixParams: {
                                        auto: null
                                    }
                                }), (0,
                                l.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "text-linear-gradient text-sm font-bold",
                                        children: null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.category
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "[&>*]:text-[24px] [&>*]:leading-[32px] [&>*]:font-semibold",
                                        children: (0,
                                        l.jsx)(i.v, {
                                            field: null == e ? void 0 : null === (s = e.data) || void 0 === s ? void 0 : s.title
                                        })
                                    }), (0,
                                    l.jsx)(o.default, {
                                        href: null == e ? void 0 : e.url,
                                        children: (0,
                                        l.jsx)("div", {
                                            className: "text-sm text-gray-100",
                                            children: "Read More →"
                                        })
                                    })]
                                })]
                            }, a)
                        }
                        )
                    })]
                })
            })
        }
    },
    6289: function(e, a, r) {
        "use strict";
        r.r(a);
        var l = r(57437)
          , i = r(43281)
          , t = r(68788)
          , s = r(28819)
          , n = r(91269);
        let o = {
            label: e => {
                let {node: a, children: r} = e;
                if ("linearGardientTextColor" === a.data.label)
                    return (0,
                    l.jsx)("span", {
                        className: "text-linear-gradient",
                        children: r
                    })
            }
        };
        a.default = e => {
            var a;
            let {slice: r} = e
              , {ref: d, inView: c} = (0,
            s.YD)({
                triggerOnce: !0,
                threshold: .1
            });
            return (0,
            l.jsx)("section", {
                "data-slice-type": r.slice_type,
                "data-slice-variation": r.variation,
                className: "bg-black text-white",
                children: (0,
                l.jsx)(n.E.div, {
                    initial: {
                        opacity: 0,
                        y: 200
                    },
                    animate: c ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .5
                    },
                    ref: d,
                    children: (0,
                    l.jsxs)("div", {
                        className: "text-center py-[9.38rem] max-w-[93vw] md:max-w-[90rem] m-[auto] border-x border-[#404040] flex flex-col gap-[5.62rem]",
                        children: [(0,
                        l.jsx)(t.v, {
                            field: r.primary.title,
                            components: o
                        }), (0,
                        l.jsx)("div", {
                            className: "flex flex-col md:flex-row border-y border-[#404040] gap-[1.25rem] m-auto",
                            children: null == r ? void 0 : null === (a = r.items) || void 0 === a ? void 0 : a.map( (e, a) => (0,
                            l.jsxs)("div", {
                                className: "relative flex flex-col md:flex-row pt-[3.44rem] px-[1.88rem] ".concat(0 === a ? "border-b md:border-r border-[#404040]" : "border-t md:border-l border-[#404040]", " w-[100%] md:w-[50%] gap-[2.5rem]"),
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "flex flex-col gap-[3.12rem] justify-end items-start text-left md:w-[50%] w-full pb-[9.56rem]",
                                    children: [(0,
                                    l.jsx)(t.v, {
                                        field: e.title,
                                        components: o
                                    }), (0,
                                    l.jsx)(t.v, {
                                        field: e.description,
                                        components: o
                                    })]
                                }), (0,
                                l.jsx)("div", {
                                    className: "md:w-[50%] w-full relative",
                                    children: (0,
                                    l.jsx)(i.PrismicNextImage, {
                                        className: "absolute bottom-[3.37rem] right-0 w-[6.25rem] h-[6.25rem] md:w-[10.9375rem] md:h-[10.9375rem]",
                                        field: null == e ? void 0 : e.image,
                                        imgixParams: {
                                            auto: null
                                        }
                                    })
                                })]
                            }, a))
                        })]
                    })
                })
            })
        }
    },
    2447: function(e, a, r) {
        "use strict";
        r.r(a);
        var l = r(57437)
          , i = r(68788)
          , t = r(60965)
          , s = r(91269);
        let n = {
            label: e => {
                let {node: a, children: r} = e;
                if ("linearGardientTextColor" === a.data.label)
                    return (0,
                    l.jsx)("span", {
                        className: "text-linear-gradient",
                        children: r
                    })
            }
        };
        a.default = e => {
            let {slice: a} = e;
            return (0,
            l.jsx)(s.E.div, {
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
                l.jsxs)("section", {
                    "data-slice-type": a.slice_type,
                    "data-slice-variation": a.variation,
                    className: "pt-[7.75rem] max-w-[93vw] md:max-w-[90rem] m-auto border-x border-light-gray flex flex-col min-h-[90rem]",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "flex flex-col gap-[6rem]",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "flex flex-col gap-[2rem]",
                            children: [(0,
                            l.jsx)("div", {
                                className: "text-center",
                                children: (0,
                                l.jsx)(i.v, {
                                    field: a.primary.title,
                                    components: n
                                })
                            }), (0,
                            l.jsx)("div", {
                                className: "w-[24.375rem] md:w-[27.5rem] justify-center text-center m-auto",
                                children: (0,
                                l.jsx)(i.v, {
                                    field: a.primary.description,
                                    components: n
                                })
                            })]
                        }), (0,
                        l.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-[1rem] m-auto md:px-4",
                            children: [(0,
                            l.jsxs)("div", {
                                className: "border-2 border-light-gray flex flex-col justify-between gap-[2.19rem] py-[2.5rem] px-[1.25rem] md:rounded-[1rem] min-h-[50rem]",
                                children: [(0,
                                l.jsx)("div", {
                                    className: "flex flex-col gap-[2.20rem]",
                                    children: (0,
                                    l.jsx)("div", {
                                        className: "flex gap-[0.37rem] items-center",
                                        children: (0,
                                        l.jsx)(i.v, {
                                            field: a.primary.free_title,
                                            components: n
                                        })
                                    })
                                }), (0,
                                l.jsx)("div", {
                                    className: "flex-grow",
                                    children: (0,
                                    l.jsx)("ul", {
                                        className: "custom-bullet-list flex flex-col gap-[1rem]",
                                        children: a.primary.free.map( (e, a) => (0,
                                        l.jsx)("li", {
                                            className: "pricing",
                                            children: (0,
                                            l.jsx)("p", {
                                                children: e.feature
                                            })
                                        }, a))
                                    })
                                }), (0,
                                l.jsx)(t.default, {
                                    label: a.primary.free_button_label,
                                    link: a.primary.free_button_link,
                                    class: "!w-full mt-auto"
                                })]
                            }), (0,
                            l.jsxs)("div", {
                                className: "border-2 border-light-gray flex flex-col justify-between gap-[2.19rem] py-[2.5rem] px-[1.25rem] md:rounded-[1rem] min-h-[50rem]",
                                children: [(0,
                                l.jsx)("div", {
                                    className: "flex flex-col gap-[2.20rem]",
                                    children: (0,
                                    l.jsx)("div", {
                                        className: "flex gap-[0.37rem] items-center ",
                                        children: (0,
                                        l.jsx)(i.v, {
                                            field: a.primary.standard_price,
                                            components: n
                                        })
                                    })
                                }), (0,
                                l.jsx)("div", {
                                    className: "flex-grow",
                                    children: (0,
                                    l.jsx)("ul", {
                                        className: "custom-bullet-list flex flex-col gap-[1rem]",
                                        children: a.primary.standard.map( (e, a) => (0,
                                        l.jsx)("li", {
                                            className: "pricing ",
                                            children: (0,
                                            l.jsx)("p", {
                                                children: e.feature
                                            })
                                        }, a))
                                    })
                                }), (0,
                                l.jsx)(t.default, {
                                    label: a.primary.standard_button_label,
                                    link: a.primary.standard_button_link,
                                    class: "!w-full mt-auto"
                                })]
                            }), (0,
                            l.jsxs)("div", {
                                className: "border-2 border-light-gray flex flex-col justify-between gap-[2.19rem] py-[2.5rem] px-[1.25rem] md:rounded-[1rem] min-h-[50rem]",
                                children: [(0,
                                l.jsx)("div", {
                                    className: "flex flex-col gap-[2.20rem]",
                                    children: (0,
                                    l.jsx)("div", {
                                        className: "flex gap-[0.37rem] items-center",
                                        children: (0,
                                        l.jsx)(i.v, {
                                            field: a.primary.enterprise_title,
                                            components: n
                                        })
                                    })
                                }), (0,
                                l.jsx)("div", {
                                    className: "flex-grow",
                                    children: (0,
                                    l.jsx)("ul", {
                                        className: "custom-bullet-list flex flex-col gap-[1rem]",
                                        children: a.primary.enterprise.map( (e, a) => (0,
                                        l.jsx)("li", {
                                            className: "pricing",
                                            children: (0,
                                            l.jsx)("p", {
                                                children: e.feature
                                            })
                                        }, a))
                                    })
                                }), (0,
                                l.jsx)(t.default, {
                                    label: a.primary.enterprise_button_label,
                                    link: a.primary.enterprise_button_link,
                                    class: "!w-full mt-auto"
                                })]
                            })]
                        })]
                    }), (0,
                    l.jsx)("div", {
                        className: "flex flex-col gap-2 ml-4 mt-auto mb-2",
                        children: a.primary.footnotes.map( (e, a) => (0,
                        l.jsx)("p", {
                            className: "text-[#808080] text-[0.8rem]",
                            children: e.footnote
                        }, a))
                    })]
                })
            })
        }
    },
    86732: function(e, a, r) {
        "use strict";
        r.r(a),
        r.d(a, {
            default: function() {
                return n
            }
        });
        var l = r(57437)
          , i = r(68788)
          , t = r(91269);
        let s = {
            label: e => {
                let {node: a, children: r} = e;
                if ("codespan" === a.data.label)
                    return (0,
                    l.jsx)("code", {
                        children: r
                    })
            }
        };
        function n(e) {
            let {slice: a, context: r} = e
              , n = "default" === a.variation ? "max-w-[660px]" : "pp" === a.variation ? "max-w-[875px] pt-[60px] pb-[100px]" : "max-w-full";
            return (0,
            l.jsx)(t.E.div, {
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
                children: (0,
                l.jsx)("section", {
                    "data-slice-type": a.slice_type,
                    "data-slice-variation": a.variation,
                    className: "pt-2 pb-[6rem] px-6",
                    children: (0,
                    l.jsx)("div", {
                        className: "w-full ".concat(n, "  m-0 m-auto [&>ul]:pl-5 [&_a]:text-black [&_a]:underline [&>ol]:pl-5 [&>*:not(:last-child)]:my-4"),
                        children: (0,
                        l.jsx)(i.v, {
                            field: a.primary.content,
                            components: s
                        })
                    })
                })
            })
        }
    },
    18839: function(e, a, r) {
        "use strict";
        r.r(a);
        var l = r(57437)
          , i = r(68788)
          , t = r(2265);
        let s = {
            label: e => {
                let {node: a, children: r} = e;
                if ("linearGardientTextColor" === a.data.label)
                    return (0,
                    l.jsx)("span", {
                        className: "text-linear-gradient",
                        children: r
                    })
            }
        };
        a.default = e => {
            let {slice: a} = e
              , [r,n] = (0,
            t.useState)("")
              , o = async () => {
                if (r) {
                    var e;
                    let a = await fetch("/api/subscribe", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: r
                        })
                    });
                    (null === (e = await a.json()) || void 0 === e ? void 0 : e.success) === !0 && n("")
                }
            }
            ;
            return (0,
            l.jsx)("section", {
                "data-slice-type": a.slice_type,
                "data-slice-variation": a.variation,
                className: "px-6 md:px-20",
                children: (0,
                l.jsx)("div", {
                    className: "bg-yellow-100 py-[106px] px-6",
                    children: (0,
                    l.jsxs)("div", {
                        className: "m-auto max-w-[716px] w-full",
                        children: [(0,
                        l.jsx)(i.v, {
                            field: a.primary.title,
                            components: s
                        }), (0,
                        l.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            l.jsx)(i.v, {
                                field: a.primary.description,
                                components: s
                            })
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex flex-col md:flex-row gap-4 md:gap-10 mt-6",
                            children: [(0,
                            l.jsxs)("div", {
                                className: "w-full",
                                children: [(0,
                                l.jsx)("label", {
                                    className: "caption text-dark-500 mb-1 font-semibold",
                                    children: "Email"
                                }), (0,
                                l.jsx)("input", {
                                    type: "email",
                                    id: "email",
                                    name: "email",
                                    className: "mt-2 py-3 px-4 w-full rounded border border-gray-400",
                                    placeholder: "example@mail.com",
                                    onChange: e => n(e.target.value)
                                })]
                            }), (0,
                            l.jsx)("button", {
                                type: "submit",
                                className: "flex md:mt-6 w-full md:w-[164px] items-center justify-center w-full text-center relative inline-block rounded-[3px] md:py-4 py-4 bg-[linear-gradient(180deg,_#EAB965_0%,_#E6960D_72.32%)]",
                                onClick: o,
                                children: a.primary.button_label
                            })]
                        })]
                    })
                })
            })
        }
    },
    67577: function(e, a, r) {
        "use strict";
        r.r(a),
        r.d(a, {
            default: function() {
                return m
            }
        });
        var l = r(57437)
          , i = r(68788)
          , t = r(43281)
          , s = r(28819)
          , n = r(91269);
        let o = {
            label: e => {
                let {node: a, children: r} = e;
                if ("linearGardientTextColor" === a.data.label)
                    return (0,
                    l.jsx)("span", {
                        className: "text-linear-gradient",
                        children: r
                    })
            }
            ,
            paragraph: e => {
                let {node: a, children: r} = e;
                return (0,
                l.jsx)("p", {
                    className: "text-[1.5625rem] xl:text-[2rem] font-normal text-white leading-[2.5rem]",
                    children: r
                })
            }
        };
        var d = e => {
            let {item: a, index: r} = e
              , {ref: d, inView: c} = (0,
            s.YD)({
                triggerOnce: !0,
                threshold: .1
            });
            return (0,
            l.jsxs)(n.E.div, {
                ref: d,
                initial: {
                    opacity: 0,
                    y: 200,
                    rotate: r % 2 == 0 ? -5 : 5
                },
                animate: c ? {
                    opacity: 1,
                    y: 0,
                    rotate: 0
                } : {},
                transition: {
                    duration: .5
                },
                className: "flex flex-col xl:flex-row mb-[1.875rem]",
                children: [(0,
                l.jsxs)("div", {
                    className: "bg-white px-[1.25rem] xl:px-[2.5rem] py-[3.4375rem] flex flex-col gap-[6.69rem] items-start text-left w-[100%] xl:w-[39%]",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "flex flex-col gap-[2.81rem]",
                        children: [(0,
                        l.jsx)(t.PrismicNextImage, {
                            field: a.use_case_icon,
                            imgixParams: {
                                auto: null
                            },
                            className: "bg-light-cyan rounded-[0.625rem] p-[0.3125rem] w-[2.5rem] h-[2.5rem]"
                        }), (0,
                        l.jsx)(i.v, {
                            field: a.use_case_title,
                            components: o
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex flex-col items-start gap-[1.875rem]",
                            children: [(0,
                            l.jsx)("p", {
                                className: "text-[1.125rem] font-medium leading-[1.5rem]",
                                children: a.use_case_paragraph_1
                            }), (0,
                            l.jsx)("p", {
                                className: "text-[1rem] font-normal leading-[1.5rem]",
                                children: a.use_case_paragraph_2
                            })]
                        })]
                    }), (0,
                    l.jsxs)("ul", {
                        className: "custom-bullet-list flex flex-col gap-[0.62rem] font-ppneuemontreal w-[21rem] xl:[27.875rem]",
                        children: [(0,
                        l.jsx)("li", {
                            children: a.first_bullet_point
                        }), (0,
                        l.jsx)("div", {
                            className: "border-b border-light-gray"
                        }), (0,
                        l.jsx)("li", {
                            children: a.second_bullet_point
                        }), (0,
                        l.jsx)("div", {
                            className: "border-b border-light-gray"
                        }), (0,
                        l.jsx)("li", {
                            children: a.third_bullet_point
                        })]
                    })]
                }), (0,
                l.jsxs)("div", {
                    className: "bg-[black] flex flex-col gap-[5.81rem] xl:justify-between text-center px-[1.25rem] xl:px-[6.25rem] py-[3.4375rem] w-[100%] xl:w-[61%]",
                    children: [(0,
                    l.jsx)("div", {
                        className: "flex justify-center items-center",
                        children: (0,
                        l.jsx)(t.PrismicNextImage, {
                            field: a.quote_icon,
                            imgixParams: {
                                auto: null
                            },
                            className: ""
                        })
                    }), (0,
                    l.jsx)(i.v, {
                        field: a.quote,
                        components: o
                    }), (0,
                    l.jsxs)("div", {
                        children: [(0,
                        l.jsx)("h6", {
                            className: "text-white",
                            children: a.author_name
                        }), (0,
                        l.jsx)("p", {
                            className: "text-[#A7A7A7]",
                            children: a.author_job
                        })]
                    })]
                })]
            })
        }
        ;
        let c = {
            label: e => {
                let {node: a, children: r} = e;
                if ("linearGardientTextColor" === a.data.label)
                    return (0,
                    l.jsx)("span", {
                        className: "text-linear-gradient",
                        children: r
                    })
            }
            ,
            paragraph: e => {
                let {node: a, children: r} = e;
                return (0,
                l.jsx)("p", {
                    className: "text-[1.5625rem] xl:text-[2rem] font-normal text-white leading-[2.5rem]",
                    children: r
                })
            }
        };
        var m = e => {
            var a;
            let {slice: r} = e;
            return (0,
            l.jsxs)("section", {
                "data-slice-type": r.slice_type,
                "data-slice-variation": r.variation,
                className: "bg-pale-cyan",
                children: [(0,
                l.jsx)("div", {
                    className: "border-t border-light-aqua"
                }), (0,
                l.jsxs)("div", {
                    className: "flex flex-col gap-[5.62rem] text-center py-[7.5rem] max-w-[93vw] md:max-w-[90rem] m-[auto] border-x border-light-aqua",
                    children: [(0,
                    l.jsx)(i.v, {
                        field: r.primary.title,
                        components: c
                    }), (0,
                    l.jsx)("div", {
                        children: null === (a = r.items) || void 0 === a ? void 0 : a.map( (e, a) => (0,
                        l.jsx)(d, {
                            item: e
                        }, a))
                    })]
                })]
            })
        }
    },
    82451: function(e, a, r) {
        "use strict";
        r.r(a);
        var l = r(57437)
          , i = r(2265)
          , t = r(68788)
          , s = r(33145)
          , n = r(91269);
        let o = {
            label: e => {
                let {node: a, children: r} = e;
                if ("linearGardientTextColor" === a.data.label)
                    return (0,
                    l.jsx)("span", {
                        className: "text-linear-gradient",
                        children: r
                    })
            }
            ,
            listItem: e => {
                let {children: a} = e;
                return (0,
                l.jsx)("li", {
                    className: "ml-[2rem] font-ppneuemontreal",
                    children: a
                })
            }
        };
        a.default = e => {
            let {slice: a} = e
              , [r,d] = (0,
            i.useState)(0)
              , c = e => {
                d(r === e ? null : e)
            }
            ;
            return (0,
            l.jsx)("section", {
                "data-slice-type": a.slice_type,
                "data-slice-variation": a.variation,
                className: "md:border-b border-light-gray",
                children: (0,
                l.jsx)(n.E.div, {
                    className: "flex justify-center items-center px-[0.625rem] py-[0.5625rem]",
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
                    children: (0,
                    l.jsx)("div", {
                        className: "max-w-[93vw] md:max-w-[94rem] m-[auto]",
                        children: (0,
                        l.jsxs)("div", {
                            className: "flex flex-row",
                            children: [(0,
                            l.jsxs)("div", {
                                className: "hidden md:flex flex-col items-start gap-[3.125rem] self-stretch pt-[5rem] pr-[1.88rem] pb-[2.19rem] pl-[1.88rem] border-r border-light-gray min-w-[25rem]",
                                children: [(0,
                                l.jsx)("h4", {
                                    children: "Sections"
                                }), (0,
                                l.jsx)("div", {
                                    className: "flex flex-col",
                                    children: a.primary.sections.map( (e, a) => (0,
                                    l.jsx)("a", {
                                        href: "#section-".concat(a),
                                        className: "cursor-pointer ".concat(r === a ? "bg-light-cyan p-[0.94rem] rounded-[0.625rem]" : "p-[0.94rem]"),
                                        onClick: e => {
                                            var r, l;
                                            e.preventDefault(),
                                            d(a),
                                            null === (l = document) || void 0 === l || null === (r = l.getElementById("section-".concat(a))) || void 0 === r || r.scrollIntoView({
                                                behavior: "smooth"
                                            })
                                        }
                                        ,
                                        children: (0,
                                        l.jsx)("div", {
                                            className: "*:text-[0.9375rem]",
                                            children: (0,
                                            l.jsx)(t.v, {
                                                field: e.title
                                            })
                                        })
                                    }, a))
                                })]
                            }), (0,
                            l.jsx)("div", {
                                id: "content-container",
                                className: "hidden md:flex pl-[1.88rem] py-[5rem] px-[1.88rem] flex-col gap-[5rem]  w-full md:w-auto",
                                children: a.primary.sections.map( (e, a) => (0,
                                l.jsxs)("div", {
                                    id: "section-".concat(a),
                                    className: "flex flex-col gap-[2.5rem]",
                                    children: [(0,
                                    l.jsx)(t.v, {
                                        field: e.title
                                    }), (0,
                                    l.jsx)(t.v, {
                                        field: e.content,
                                        components: o
                                    })]
                                }, a))
                            }), (0,
                            l.jsx)("div", {
                                className: "flex flex-col md:hidden w-full",
                                children: a.primary.sections.map( (e, a) => {
                                    let i = r === a;
                                    return (0,
                                    l.jsxs)("div", {
                                        id: "section-".concat(a),
                                        className: "flex flex-col gap-[2.5rem] mb-4 md:mb-0 border-b border-light-gray py-[1.88rem]",
                                        children: [(0,
                                        l.jsxs)("div", {
                                            className: "cursor-pointer flex justify-between items-center ",
                                            onClick: () => c(a),
                                            children: [(0,
                                            l.jsx)("div", {
                                                className: "*:text-[0.9375rem]",
                                                children: (0,
                                                l.jsx)(t.v, {
                                                    field: e.title,
                                                    components: o
                                                })
                                            }), (0,
                                            l.jsx)(s.default, {
                                                src: i ? "/chevron-up.svg" : "/chevron-down.svg",
                                                alt: i ? "Collapse section" : "Expand section",
                                                width: 24,
                                                height: 24
                                            })]
                                        }), i && (0,
                                        l.jsx)("div", {
                                            className: "*:text-[0.9375rem] p-4",
                                            children: (0,
                                            l.jsx)(t.v, {
                                                field: e.content,
                                                components: o
                                            })
                                        })]
                                    }, a)
                                }
                                )
                            })]
                        })
                    })
                })
            })
        }
    },
    1613: function(e, a, r) {
        "use strict";
        r.r(a),
        a.default = {
            src: "/_next/static/media/check-circle-broken.aa27c848.svg",
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    55397: function(e, a, r) {
        "use strict";
        r.r(a),
        a.default = {
            src: "/_next/static/media/x-close.481be504.svg",
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    13229: function(e, a, r) {
        "use strict";
        r.r(a),
        a.default = {
            src: "/_next/static/media/quote.acc7ffea.svg",
            height: 74,
            width: 85,
            blurWidth: 0,
            blurHeight: 0
        }
    }
}]);