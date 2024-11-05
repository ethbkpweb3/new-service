"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9075], {
    93905: function(e, i, a) {
        a.r(i),
        a.d(i, {
            default: function() {
                return n
            }
        });
        var r = a(57437)
          , l = a(9826)
          , t = a(91269);
        function n(e) {
            return (0,
            r.jsx)(t.E.div, {
                whileHover: {
                    scale: 1.05
                },
                children: (0,
                r.jsx)(l.PrismicNextLink, {
                    field: e.link,
                    className: "w-[90vw] text-[#0E0E0E] pt-[1.4rem] rounded-[1rem] backdrop-blur-[7.5px] leading-none py-[1.12rem] px-[1.88rem]  align-middle inline-flex justify-center items-center text-center gap-[0.625rem] border border-light-gray md:w-auto ".concat(null == e ? void 0 : e.class),
                    onClick: () => {
                        var i;
                        null === (i = analytics) || void 0 === i || i.track("Button Clicked", {
                            buttonName: null == e ? void 0 : e.label
                        })
                    }
                    ,
                    children: null == e ? void 0 : e.label
                })
            })
        }
    },
    99075: function(e, i, a) {
        a.r(i);
        var r = a(57437)
          , l = a(43281)
          , t = a(68788)
          , n = a(9826)
          , s = a(60965)
          , m = a(93905)
          , o = a(2265)
          , d = a(91269)
          , c = a(51772);
        let x = {
            label: e => {
                let {node: i, children: a} = e;
                if ("linearGardientTextColor" === i.data.label)
                    return (0,
                    r.jsx)("span", {
                        className: "text-linear-gradient",
                        children: a
                    })
            }
            ,
            heading2: e => {
                let {node: i, children: a} = e;
                return (0,
                r.jsx)("h2", {
                    className: "text-[3.4375rem] md:text-[4.0625rem] font-medium",
                    children: a
                })
            }
        };
        i.default = e => {
            var i, a, p, u, y, v, f, b, j, h, g, _, N, k;
            let {slice: w, context: E} = e
              , [P,I] = (0,
            o.useState)(!1);
            return (0,
            r.jsxs)("section", {
                "data-slice-type": w.slice_type,
                "data-slice-variation": w.variation,
                className: "py-[4.375rem] max-w-[93vw] md:max-w-[90rem] m-[auto] border-x border-light-gray flex flex-col gap-[4.375rem] ",
                children: [(0,
                r.jsxs)("div", {
                    className: "flex flex-col gap-[3.125rem] items-center",
                    children: ["default" === w.variation ? (0,
                    r.jsxs)(d.E.div, {
                        className: "flex gap-[0.625rem] justify-center items-center px-[0.625rem] py-[0.5625rem] rounded-[0.875rem] border border-light-gray text-[0.875rem] uppercase",
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
                        children: [(0,
                        r.jsx)("span", {
                            className: "uppercase",
                            children: null === (i = w.primary) || void 0 === i ? void 0 : i.backby_title
                        }), (0,
                        r.jsxs)(n.PrismicNextLink, {
                            field: w.primary.backby_link,
                            className: "flex gap-[0.375rem;]",
                            children: [(0,
                            r.jsx)(l.PrismicNextImage, {
                                field: null === (a = w.primary) || void 0 === a ? void 0 : a.backby_image,
                                imgixParams: {
                                    auto: null
                                },
                                className: "w-[1.1875rem] h-[1.1875rem]"
                            }), (0,
                            r.jsx)("div", {
                                children: (0,
                                r.jsx)("span", {
                                    className: "text-[#FB651E]",
                                    children: "Combinator"
                                })
                            })]
                        })]
                    }) : "comparison" !== w.variation && (0,
                    r.jsx)(d.E.div, {
                        className: "flex gap-[0.625rem] justify-center items-center px-[0.625rem] py-[0.5625rem] rounded-[0.875rem] bg-[#D4F0F0] text-[0.875rem] text-[#045856] uppercase",
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
                        r.jsx)("span", {
                            className: "uppercase",
                            children: w.primary.our_mission
                        })
                    }), "comparison" === w.variation ? (0,
                    r.jsxs)("div", {
                        className: "flex flex-col md:flex-row gap-[4rem] md:gap-0",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "flex flex-col gap-[3.44rem] p-[0.5rem]",
                            children: [(0,
                            r.jsx)(d.E.div, {
                                className: "text-left",
                                initial: {
                                    opacity: 0,
                                    y: -20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .5,
                                    ease: "easeIn"
                                },
                                children: (0,
                                r.jsx)("div", {
                                    children: (0,
                                    r.jsx)(t.v, {
                                        field: w.primary.title,
                                        components: x
                                    })
                                })
                            }), (0,
                            r.jsx)(d.E.div, {
                                className: "w-[24.375rem] md:w-[27.5rem] justify-center text-left",
                                initial: {
                                    opacity: 0,
                                    y: -20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: .5,
                                    ease: "easeIn"
                                },
                                children: (0,
                                r.jsx)(t.v, {
                                    field: w.primary.description,
                                    components: x
                                })
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex flex-col gap-[0.94rem] md:flex-row",
                                children: [(null === (p = w.primary) || void 0 === p ? void 0 : p.primary_button_label) ? (0,
                                r.jsx)(s.default, {
                                    label: w.primary.primary_button_label,
                                    link: w.primary.primary_button_link
                                }) : null, (null === (u = w.primary) || void 0 === u ? void 0 : u.secondary_button_label) ? (0,
                                r.jsx)(m.default, {
                                    label: w.primary.secondary_button_label,
                                    link: w.primary.secondary_button_link
                                }) : null]
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            children: [(null === (y = w.primary) || void 0 === y ? void 0 : y.image) && (0,
                            r.jsx)(d.E.div, {
                                initial: {
                                    opacity: 0,
                                    x: -100,
                                    scale: .8
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0,
                                    scale: 1
                                },
                                transition: {
                                    duration: .5,
                                    ease: "easeOut"
                                },
                                children: (0,
                                r.jsx)(l.PrismicNextImage, {
                                    field: w.primary.image,
                                    imgixParams: {
                                        auto: null
                                    },
                                    className: "w-[90rem] hidden md:block"
                                })
                            }), (null === (v = w.primary) || void 0 === v ? void 0 : v.image_mobile) && (0,
                            r.jsx)(d.E.div, {
                                initial: {
                                    opacity: 0,
                                    x: -100,
                                    scale: .8
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0,
                                    scale: 1
                                },
                                transition: {
                                    duration: .5,
                                    ease: "easeOut"
                                },
                                children: (0,
                                r.jsx)(l.PrismicNextImage, {
                                    field: w.primary.image_mobile,
                                    imgixParams: {
                                        auto: null
                                    },
                                    className: "w-[90rem] block md:hidden"
                                })
                            })]
                        })]
                    }) : (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)(d.E.div, {
                            className: "text-center",
                            initial: {
                                opacity: 0,
                                y: -20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .5,
                                ease: "easeIn"
                            },
                            children: (0,
                            r.jsx)("div", {
                                children: (0,
                                r.jsx)(t.v, {
                                    field: w.primary.title,
                                    components: x
                                })
                            })
                        }), (0,
                        r.jsx)(d.E.div, {
                            className: "w-[24.375rem] md:w-[27.5rem] justify-center text-center",
                            initial: {
                                opacity: 0,
                                y: -20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .5,
                                ease: "easeIn"
                            },
                            children: "textHero" !== w.variation && (null === (f = w.primary) || void 0 === f ? void 0 : f.description) ? (0,
                            r.jsx)(t.v, {
                                field: w.primary.description,
                                components: x
                            }) : null
                        })]
                    }), (0,
                    r.jsx)(d.E.div, {
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
                        children: "default" === w.variation || "aboutUs" === w.variation ? (0,
                        r.jsxs)("div", {
                            className: "flex flex-col gap-[0.94rem] md:flex-row",
                            children: [(null === (b = w.primary) || void 0 === b ? void 0 : b.primary_button_label) ? (0,
                            r.jsx)(s.default, {
                                label: w.primary.primary_button_label,
                                link: w.primary.primary_button_link
                            }) : null, (null === (j = w.primary) || void 0 === j ? void 0 : j.secondary_button_label) ? (0,
                            r.jsx)(m.default, {
                                label: w.primary.secondary_button_label,
                                link: w.primary.secondary_button_link
                            }) : null]
                        }) : null
                    }), "textHero" !== w.variation && "comparison" !== w.variation && ((null === (h = w.primary) || void 0 === h ? void 0 : h.image) || (null === (g = w.primary) || void 0 === g ? void 0 : g.image_mobile)) ? (0,
                    r.jsxs)("div", {
                        children: [(null === (_ = w.primary) || void 0 === _ ? void 0 : _.image_mobile) && (0,
                        r.jsx)(d.E.div, {
                            initial: {
                                opacity: 0,
                                x: -100,
                                scale: .8
                            },
                            animate: {
                                opacity: 1,
                                x: 0,
                                scale: 1
                            },
                            transition: {
                                duration: .5,
                                ease: "easeOut"
                            },
                            children: (0,
                            r.jsx)(l.PrismicNextImage, {
                                field: w.primary.image_mobile,
                                imgixParams: {
                                    auto: null
                                },
                                className: "w-[90rem] block md:hidden"
                            })
                        }), (null === (N = w.primary) || void 0 === N ? void 0 : N.image) && (0,
                        r.jsx)(d.E.div, {
                            initial: {
                                opacity: 0,
                                x: -100,
                                scale: .8
                            },
                            animate: {
                                opacity: 1,
                                x: 0,
                                scale: 1
                            },
                            transition: {
                                duration: .5,
                                ease: "easeOut"
                            },
                            children: (0,
                            r.jsx)(l.PrismicNextImage, {
                                field: w.primary.image,
                                imgixParams: {
                                    auto: null
                                },
                                className: "w-[90rem] hidden md:block"
                            })
                        })]
                    }) : null]
                }), ("aboutUs" === w.variation || "comparison" === w.variation) && (0,
                r.jsx)("div", {
                    className: "text-center max-w-[50rem] m-auto",
                    children: (0,
                    r.jsxs)("div", {
                        className: "flex flex-col gap-[2.1875rem] items-center text-center px-[2rem]",
                        children: [(0,
                        r.jsx)(t.v, {
                            field: w.primary.extra_subtitle,
                            components: x
                        }), (0,
                        r.jsx)(t.v, {
                            field: w.primary.extra_subdescription,
                            components: x
                        })]
                    })
                }), "default" === w.variation && (0,
                r.jsxs)("div", {
                    className: "flex flex-col items-center justify-center text-center gap-[3.4375rem]",
                    children: [(0,
                    r.jsx)("p", {
                        className: "text-[#404040] text-center",
                        children: w.primary.trusted_by_title
                    }), (0,
                    r.jsx)("div", {
                        children: (0,
                        r.jsx)(c.Z, {
                            autoFill: !0,
                            gradient: !0,
                            children: null === (k = w.primary.repeatable_zone) || void 0 === k ? void 0 : k.map( (e, i) => (0,
                            r.jsx)(n.PrismicNextLink, {
                                field: e.link,
                                children: (0,
                                r.jsx)(l.PrismicNextImage, {
                                    field: e.logo,
                                    className: "px-5 w-[150px] max-h-[50px]",
                                    imgixParams: {
                                        auto: null
                                    }
                                })
                            }, i))
                        })
                    })]
                })]
            })
        }
    }
}]);
