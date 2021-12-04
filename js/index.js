(function (e) {
    function t(t) {
        for (var a, r, c = t[0], u = t[1], l = t[2], d = 0, h = []; d < c.length; d++) r = c[d], Object.prototype.hasOwnProperty.call(o, r) && o[r] && h.push(o[r][0]), o[r] = 0;
        for (a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
        s && s(t);
        while (h.length) h.shift()();
        return i.push.apply(i, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], a = !0, c = 1; c < n.length; c++) {
                var u = n[c];
                0 !== o[u] && (a = !1)
            }
            a && (i.splice(t--, 1), e = r(r.s = n[0]))
        }
        return e
    }

    var a = {}, o = {index: 0}, i = [];

    function r(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }

    r.m = e, r.c = a, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) r.d(n, a, function (t) {
            return e[t]
        }.bind(null, a));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "https://cdn.jsdelivr.net/gh/linzihan322/Weichen-Group-CDN@latest/";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [], u = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var l = 0; l < c.length; l++) t(c[l]);
    var s = u;
    i.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("56d7")
    }, "0010": function (e, t, n) {
        e.exports = n.p + "img/Jinghao Chen.jpg"
    }, "00e1": function (e, t, n) {
        e.exports = n.p + "img/Cover3.jpg"
    }, "021a": function (e, t, n) {
        e.exports = n.p + "img/Xinhua Zheng.jpg"
    }, "0313": function (e, t, n) {
        e.exports = n.p + "img/Jingwen Xu.jpg"
    }, "0972": function (e, t, n) {
        "use strict";
        n("7adf")
    }, "0c7d": function (e, t, n) {
        e.exports = n.p + "img/Haosong Jiang.jpg"
    }, "0d15": function (e, t, n) {
        "use strict";
        n("f946")
    }, 1040: function (e, t, n) {
        e.exports = n.p + "img/Mingming Wang.jpg"
    }, 1558: function (e, t, n) {
        e.exports = n.p + "img/Kai Zhang.jpg"
    }, "168c": function (e, t, n) {
        "use strict";
        n("9f95")
    }, 1895: function (e, t, n) {
        e.exports = n.p + "img/Ke Li.jpg"
    }, 19703: function (e, t, n) {
        e.exports = n.p + "img/research.png"
    }, "1cb8": function (e, t, n) {
        e.exports = n.p + "img/Ruize Ma.jpg"
    }, "24c4": function (e, t, n) {
        e.exports = n.p + "img/Mingyan Chuai.jpg"
    }, 3932: function (e, t, n) {
    }, "3d76": function (e, t, n) {
        e.exports = n.p + "img/Yahan Meng.jpg"
    }, "3dfe": function (e, t, n) {
    }, "425b": function (e, t, n) {
        "use strict";
        n("f963")
    }, "43fc": function (e, t, n) {
        e.exports = n.p + "img/Sunhyeong Park.jpg"
    }, "4dde": function (e, t, n) {
        "use strict";
        n("526d")
    }, 5174: function (e, t, n) {
    }, "526d": function (e, t, n) {
    }, 5338: function (e, t, n) {
        e.exports = n.p + "img/Mohsin Ali.jpg"
    }, "559b": function (e, t, n) {
        e.exports = n.p + "img/Muhammad Sajid.jpg"
    }, "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("d81d"), n("d3b7"), n("ddb0");
        var a = n("7a23"), o = {class: "container"};

        function i(e, t, n, i, r, c) {
            var u = Object(a["resolveComponent"])("NavBar"), l = Object(a["resolveComponent"])("router-view"),
                s = Object(a["resolveComponent"])("web-footer"), d = Object(a["resolveComponent"])("el-scrollbar");
            return Object(a["openBlock"])(), Object(a["createBlock"])(a["Fragment"], null, [Object(a["createVNode"])(u), Object(a["createVNode"])(d, {class: "scrollbar"}, {
                default: Object(a["withCtx"])((function () {
                    return [Object(a["createVNode"])("div", o, [Object(a["createVNode"])(l)]), Object(a["createVNode"])(s, {class: "footer"})]
                })), _: 1
            })], 64)
        }

        var r = n("bdf3"), c = n.n(r), u = Object(a["withScopeId"])("data-v-02e74460");
        Object(a["pushScopeId"])("data-v-02e74460");
        var l = {class: "nav-bar"},
            s = Object(a["createVNode"])("img", {src: c.a, width: "140", height: "35", class: "icon"}, null, -1),
            d = {key: 0, class: "el-icon-d-arrow-left scroll-arrow"},
            h = {key: 1, class: "el-icon-d-arrow-right scroll-arrow"};
        Object(a["popScopeId"])();
        var p = u((function (e, t, n, o, i, r) {
            var c = Object(a["resolveComponent"])("el-menu-item"), p = Object(a["resolveComponent"])("el-menu"),
                g = Object(a["resolveComponent"])("el-scrollbar");
            return Object(a["openBlock"])(), Object(a["createBlock"])("div", l, [s, i.desktop ? Object(a["createCommentVNode"])("", !0) : (Object(a["openBlock"])(), Object(a["createBlock"])("i", d)), Object(a["createVNode"])(g, null, {
                default: u((function () {
                    return [Object(a["createVNode"])(p, {
                        "default-active": e.$route.path,
                        class: "menu",
                        mode: "horizontal",
                        "background-color": "#ffffff",
                        "text-color": "#005BAA",
                        "active-text-color": "#1E90FF",
                        router: "true"
                    }, {
                        default: u((function () {
                            return [(Object(a["openBlock"])(!0), Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(i.menuItem, (function (e) {
                                return Object(a["openBlock"])(), Object(a["createBlock"])(c, {
                                    key: e,
                                    index: "/" + e,
                                    route: e
                                }, {
                                    default: u((function () {
                                        return [Object(a["createTextVNode"])(Object(a["toDisplayString"])(e), 1)]
                                    })), _: 2
                                }, 1032, ["index", "route"])
                            })), 128))]
                        })), _: 1
                    }, 8, ["default-active"])]
                })), _: 1
            }), i.desktop ? Object(a["createCommentVNode"])("", !0) : (Object(a["openBlock"])(), Object(a["createBlock"])("i", h))])
        })), g = {
            name: "NavBar", data: function () {
                return {
                    desktop: this.handleResize(),
                    menuItem: ["Home", "News", "Research", "Members", "Publications", "Openings", "Contact"]
                }
            }, mounted: function () {
                var e = this;
                window.onresize = function () {
                    return function () {
                        e.desktop = e.handleResize()
                    }()
                }
            }, methods: {
                handleResize: function () {
                    return document.documentElement.clientWidth > 930
                }
            }
        };
        n("63d3");
        g.render = p, g.__scopeId = "data-v-02e74460";
        var m = g, f = n("b6f7"), b = n.n(f), y = Object(a["withScopeId"])("data-v-49be7a80");
        Object(a["pushScopeId"])("data-v-49be7a80");
        var j = Object(a["createVNode"])("div", {class: "footer desktop"}, [Object(a["createVNode"])("div", {class: "footer-logo"}, [Object(a["createVNode"])("img", {
                src: b.a,
                width: "100",
                height: "100"
            })]), Object(a["createVNode"])("div", {class: "footer-name"}, "Wei Chen Group @ USTC"), Object(a["createVNode"])("div", {class: "footer-info"}, [Object(a["createVNode"])("div", {class: "footer-info-title"}, "CONTACT"), Object(a["createVNode"])("div", {class: "footer-info-text"}, [Object(a["createVNode"])("a", {
                class: "footer-link",
                href: "mailto:weichen1@ustc.edu.cn"
            }, "weichen1@ustc.edu.cn")]), Object(a["createVNode"])("br"), Object(a["createVNode"])("div", {class: "footer-info-title"}, "COPYRIGHT"), Object(a["createVNode"])("div", {class: "footer-info-text"}, "Wei Chen Group 2021"), Object(a["createVNode"])("div", {class: "footer-info-text"}, "Designed by Zihan Lin")])], -1),
            O = Object(a["createVNode"])("div", {class: "footer mobile"}, [Object(a["createVNode"])("div", {class: "footer-logo"}, [Object(a["createVNode"])("img", {
                src: b.a,
                width: "80",
                height: "80"
            })]), Object(a["createVNode"])("div", {class: "footer-info"}, [Object(a["createVNode"])("div", {class: "footer-info-title"}, "CONTACT"), Object(a["createVNode"])("div", {class: "footer-info-text"}, [Object(a["createVNode"])("a", {
                class: "footer-link",
                href: "mailto:weichen1@ustc.edu.cn"
            }, "weichen1@ustc.edu.cn")]), Object(a["createVNode"])("br"), Object(a["createVNode"])("div", {class: "footer-info-title"}, "COPYRIGHT"), Object(a["createVNode"])("div", {class: "footer-info-text"}, "Wei Chen Group 2021"), Object(a["createVNode"])("div", {class: "footer-info-text"}, "Designed by Zihan Lin")])], -1);
        Object(a["popScopeId"])();
        var v = y((function (e, t, n, o, i, r) {
            return Object(a["openBlock"])(), Object(a["createBlock"])(a["Fragment"], null, [j, O], 64)
        })), S = {name: "WebFooter"};
        n("168c");
        S.render = v, S.__scopeId = "data-v-49be7a80";
        var C = S, k = {
            name: "App", components: {NavBar: m, WebFooter: C}, data: function () {
                return {desktop: !1}
            }
        };
        n("d0ae");
        k.render = i;
        var N = k, W = (n("0cfa"), n("5040")), I = n.n(W), B = (n("0769"), n("31b0")), w = n.n(B),
            L = (n("7f17"), n("6573")), x = n.n(L), M = (n("5415"), n("d559")), A = n.n(M), P = (n("17fe"), n("6740")),
            V = n.n(P), H = (n("ce24"), n("3de5")), Z = n.n(H), Y = (n("e750"), n("b3eb")), D = n.n(Y),
            _ = (n("5160"), n("fa2e")), J = n.n(_), F = (n("163d"), n("f440")), T = n.n(F), G = (n("6842"), n("a8a1")),
            R = n.n(G), E = (n("2883"), n("714a")), X = n.n(E), U = (n("5397"), n("5481")), z = n.n(U),
            K = (n("5bf7"), n("6feb")), q = n.n(K), Q = (n("9fb0"), n("ab51")), $ = n.n(Q), ee = (n("398c"), n("b27e")),
            te = n.n(ee), ne = (n("4062"), n("1970")), ae = n.n(ne), oe = (n("71ec"), n("e1fa")), ie = n.n(oe),
            re = (n("43ea"), n("424b")), ce = n.n(re), ue = (n("24da"), n("70b5")), le = n.n(ue),
            se = (n("3b10"), n("4445")), de = n.n(se), he = (n("4b41"), n("3f55")), pe = n.n(he),
            ge = (n("b88a"), n("fdbc4")), me = n.n(ge), fe = (n("45a1"), n("1366")), be = n.n(fe),
            ye = (n("accc"), n("d197")), je = n.n(ye), Oe = (n("08eb"), n("ba7e")), ve = n.n(Oe),
            Se = (n("47b1"), n("5a1e")), Ce = n.n(Se), ke = (n("d4f6"), n("c210")), Ne = n.n(ke),
            We = (n("eb2b"), n("13e1")), Ie = n.n(We), Be = (n("b98e"), n("9aae")), we = n.n(Be),
            Le = (n("cbe4"), n("6c9f")), xe = n.n(Le), Me = (n("41e0"), n("5a5c")), Ae = n.n(Me),
            Pe = (n("9f12"), n("7422")), Ve = n.n(Pe), He = (n("acc7"), n("82b1")), Ze = n.n(He),
            Ye = (n("d709"), n("3779")), De = n.n(Ye), _e = (n("8989"), n("f5c0")), Je = n.n(_e),
            Fe = (n("d9b2"), n("572f")), Te = n.n(Fe), Ge = (n("6525"), n("d844")), Re = n.n(Ge),
            Ee = (n("42dc"), n("19ec")), Xe = n.n(Ee), Ue = (n("3353"), n("5c8f")), ze = n.n(Ue),
            Ke = (n("737e"), n("7d11")), qe = n.n(Ke), Qe = (n("a1a7"), n("9ebf")), $e = n.n(Qe),
            et = (n("1e7f"), n("d94e")), tt = n.n(et), nt = (n("f560"), n("c597")), at = n.n(nt),
            ot = (n("c7e2"), n("54a1")), it = n.n(ot), rt = (n("34c0"), n("aff9")), ct = n.n(rt),
            ut = (n("f60d"), n("a1dd")), lt = n.n(ut), st = (n("3bc8"), n("ee0f")), dt = n.n(st),
            ht = (n("ab0d"), n("a2ec")), pt = n.n(ht), gt = (n("0bd6"), n("05c2")), mt = n.n(gt),
            ft = (n("8ac7"), n("e661")), bt = n.n(ft), yt = (n("6841"), n("ad2e")), jt = n.n(yt),
            Ot = (n("8c51"), n("6560")), vt = n.n(Ot), St = (n("9792"), n("6142")), Ct = n.n(St),
            kt = (n("163c"), n("fa2a")), Nt = n.n(kt), Wt = (n("19b8"), n("5c97")), It = n.n(Wt),
            Bt = (n("971e"), n("624e")), wt = n.n(Bt), Lt = (n("d37b"), n("4c63")), xt = n.n(Lt),
            Mt = (n("28cf"), n("683b")), At = n.n(Mt), Pt = (n("e943"), n("f14a")), Vt = n.n(Pt),
            Ht = (n("5deb"), n("550a")), Zt = n.n(Ht), Yt = (n("884b"), n("0518")), Dt = n.n(Yt),
            _t = (n("e341"), n("89e4")), Jt = n.n(_t), Ft = (n("3728"), n("cb75")), Tt = n.n(Ft),
            Gt = (n("aab6"), n("7184")), Rt = n.n(Gt), Et = (n("bb1e"), n("bec7")), Xt = n.n(Et),
            Ut = (n("828f"), n("015f")), zt = n.n(Ut), Kt = (n("e33e"), n("c83f")), qt = n.n(Kt),
            Qt = (n("0832"), n("b462")), $t = n.n(Qt), en = (n("dc92"), n("43f9")), tn = n.n(en),
            nn = (n("26b5"), n("302b")), an = n.n(nn), on = (n("3405"), n("c024")), rn = n.n(on),
            cn = (n("9b0d"), n("ace2")), un = n.n(cn), ln = (n("f0e3"), n("0b8c")), sn = n.n(ln),
            dn = (n("51bb"), n("28af")), hn = n.n(dn), pn = (n("6bf4"), n("28a4")), gn = n.n(pn),
            mn = (n("250e"), n("9fa4")), fn = n.n(mn), bn = (n("4af4"), n("44fb")), yn = n.n(bn),
            jn = (n("c0ba"), n("c082")), On = n.n(jn), vn = (n("8c515"), n("fe7e")), Sn = n.n(vn),
            Cn = (n("5644"), n("b339")), kn = n.n(Cn), Nn = (n("7296"), n("a826")), Wn = n.n(Nn),
            In = (n("3411"), n("4810")), Bn = n.n(In), wn = (n("7ba9"), n("eae5")), Ln = n.n(wn),
            xn = (n("efe7"), n("c026")), Mn = n.n(xn), An = (n("021b"), n("9951")), Pn = n.n(An),
            Vn = (n("159b"), n("b0c0"), n("3ef0")), Hn = n.n(Vn), Zn = n("51d4"), Yn = n.n(Zn),
            Dn = [Pn.a, Mn.a, Ln.a, Bn.a, Wn.a, kn.a, Sn.a, On.a, yn.a, fn.a, gn.a, hn.a, sn.a, un.a, rn.a, an.a, tn.a, $t.a, qt.a, zt.a, Xt.a, Rt.a, Tt.a, Jt.a, Dt.a, Zt.a, Vt.a, At.a, xt.a, wt.a, It.a, Nt.a, Ct.a, vt.a, jt.a, bt.a, mt.a, pt.a, dt.a, lt.a, ct.a, it.a, at.a, tt.a, $e.a, qe.a, ze.a, Xe.a, Re.a, Te.a, Je.a, De.a, Ze.a, Ve.a, Ae.a, xe.a, we.a, Ie.a, Ne.a, Ce.a, ve.a, je.a, be.a, me.a, pe.a, de.a, le.a, ce.a, ie.a, ae.a, te.a, $.a, q.a, z.a, X.a, R.a, T.a, J.a, D.a, Z.a],
            _n = [V.a, A.a, x.a, w.a, I.a], Jn = function (e) {
                Yn.a.use(Hn.a), Dn.forEach((function (t) {
                    e.component(t.name, t)
                })), _n.forEach((function (t) {
                    e.use(t)
                }))
            }, Fn = n("6c02"), Tn = (n("fb6a"), Object(a["withScopeId"])("data-v-c2c61112"));
        Object(a["pushScopeId"])("data-v-c2c61112");
        var Gn = {class: "main"}, Rn = Object(a["createVNode"])("div", {class: "welcome"}, null, -1),
            En = {class: "carousel-about"}, Xn = {class: "content"};
        Object(a["popScopeId"])();
        var Un = Tn((function (e, t, n, o, i, r) {
            var c = Object(a["resolveComponent"])("el-carousel-item"), u = Object(a["resolveComponent"])("el-carousel"),
                l = Object(a["resolveComponent"])("column-title"), s = Object(a["resolveComponent"])("Publication"),
                d = Object(a["resolveComponent"])("el-timeline-item"), h = Object(a["resolveComponent"])("el-timeline");
            return Object(a["openBlock"])(), Object(a["createBlock"])("div", Gn, [Rn, Object(a["createVNode"])("div", En, [Object(a["createVNode"])(u, {class: "carousel"}, {
                default: Tn((function () {
                    return [(Object(a["openBlock"])(!0), Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(i.carousel, (function (e) {
                        return Object(a["openBlock"])(), Object(a["createBlock"])(c, {key: e}, {
                            default: Tn((function () {
                                return [Object(a["createVNode"])("img", {
                                    src: e,
                                    class: "carousel-img"
                                }, null, 8, ["src"])]
                            })), _: 2
                        }, 1024)
                    })), 128))]
                })), _: 1
            })]), Object(a["createVNode"])("div", Xn, [Object(a["createVNode"])(l, {
                title: "Publications",
                link: "/Publications"
            }), (Object(a["openBlock"])(!0), Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(i.publications.slice(0, 5), (function (e, t) {
                return Object(a["openBlock"])(), Object(a["createBlock"])(s, Object(a["mergeProps"])({key: e.title}, e), {
                    default: Tn((function () {
                        return [Object(a["createTextVNode"])(Object(a["toDisplayString"])(i.publications.length - t) + ".  ", 1)]
                    })), _: 2
                }, 1040)
            })), 128)), Object(a["createVNode"])(l, {
                title: "News&Events",
                link: "/News"
            }), Object(a["createVNode"])(h, {class: "event"}, {
                default: Tn((function () {
                    return [(Object(a["openBlock"])(!0), Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(i.events.slice(0, 5), (function (e, t) {
                        return Object(a["openBlock"])(), Object(a["createBlock"])(d, {
                            key: t,
                            timestamp: e.time,
                            placement: "top"
                        }, {
                            default: Tn((function () {
                                return [Object(a["createVNode"])("p", null, Object(a["toDisplayString"])(e.event), 1)]
                            })), _: 2
                        }, 1032, ["timestamp"])
                    })), 128))]
                })), _: 1
            })])])
        })), zn = n("99da"), Kn = n.n(zn), qn = n("7d75"), Qn = n.n(qn), $n = n("00e1"), ea = n.n($n), ta = [{
            title: "An Ultrafast and Ultra-Low-Temperature Hydrogen Gas-Proton Battery",
            author: "Zhengxin Zhu, Weiping Wang, Yichen Yin, Yahan Meng, Zaichun Liu, Taoli Jiang, Qia Peng, Jifei Sun, Wei Chen*",
            year: 2021,
            journal: "Journal of the American Chemical Society",
            volumn: "",
            issue: "",
            pages: "",
            doi: "https://doi.org/10.1021/jacs.1c09529"
        }, {
            title: "Multifunctional Nickel-Cobalt Phosphates for High-Performance Hydrogen Gas Batteries and Self-Powered Water Splitting",
            author: "Yahan Meng, Mingming Wang, Zhengxin Zhu, Taoli Jiang, Zaichun Liu, Na Chen, Chunyue Shen, Wei Chen*",
            year: 2021,
            journal: "ACS Applied Energy Materials",
            volumn: "4",
            issue: "11",
            pages: "12927-12934",
            doi: "https://doi.org/10.1021/acsaem.1c02582"
        }, {
            title: "High-performance Zn battery with transition metal ions co-regulated electrolytic MnO2",
            author: "Mingyan Chuai, Jinlong Yang*, Mingming Wang, Yuan Yuan, Zaichun Liu, Yan Xu, Jifei Sun, Xinhua Zheng, Na Chen, Wei Chen*",
            year: 2021,
            journal: "eScience",
            volumn: "",
            issue: "",
            pages: "2101024",
            doi: "https://doi.org/10.1016/j.esci.2021.11.002"
        }, {
            title: "Nickel hydrogen gas batteries: From aerospace to grid-scale energy storage applications",
            author: "Taoli Jiang, Wei Chen*",
            year: 2021,
            journal: "Current Opinion in Electrochemistry",
            volumn: "30",
            issue: "",
            pages: "100859",
            doi: "https://doi.org/10.1016/j.coelec.2021.100859"
        }, {
            title: "Boosting Electrolytic MnO2-Zn Batteries by a Bromine Mediator",
            author: "Xinhua Zheng, Yongchao Wang, Yan Xu, Touqeer Ahmad, Yuan Yuan, Jifei Sun, Ruihao Luo, Mingmin Wang, Wei Chen*",
            year: 2021,
            journal: "Nano Letters",
            volumn: "21",
            issue: "20",
            pages: "8863-8871",
            doi: "https://pubs.acs.org/doi/abs/10.1021/acs.nanolett.1c03319"
        }, {
            title: "Electrolyte Regulation of Bismuth Ions toward High Performance Aqueous Manganese-based Batteries",
            author: "Mingming Wang#, Yahan Meng#, Na Chen, Mingyan Chuai, Chunyue Shen, Xinhua Zheng, Yuan Yuan, Jifei Sun, Yan Xu, Wei Chen*",
            year: 2021,
            journal: "ACS Materials Letters",
            volumn: "3",
            issue: "11",
            pages: "1558-1565",
            doi: "https://pubs.acs.org/doi/10.1021/acsmaterialslett.1c00480"
        }, {
            title: "Electrode-Less MnO2-Metal Batteries with Deposition and Stripping Chemistry",
            author: "Mingming Wang, Na Chen, Zhengxin Zhu, Yahan Meng, Chunyue Shen, Xinhua Zheng, Dongsheng Liang, Wei Chen*",
            year: 2021,
            journal: "Small",
            volumn: "17",
            issue: "",
            pages: "2103921",
            doi: "https://doi.org/10.1002/smll.202103921"
        }, {
            title: "High Performance Aqueous Prussian Blue Analogue-Hydrogen Gas Hybrid Batteries",
            author: "Zhengxin Zhu, Yahan Meng, Yichen Yin, Zaichun Liu, Taoli Jiang, Qia Peng, Teng Yin, Mengyao Li, Wei Chen*",
            year: 2021,
            journal: "Energy Storage Materials",
            volumn: "42",
            issue: "",
            pages: "464-469",
            doi: "https://doi.org/10.1016/j.ensm.2021.07.050"
        },

            {
            title: "An Ultrastable Aqueous Iodine-Hydrogen Gas Battery",
            author: "Zhengxin Zhu, Yahan Meng, Yi Cui, Wei Chen*",
            year: 2021,
            journal: "Advanced Functional Materials",
            volumn: "",
            issue: "",
            pages: "2101024",
            doi: "https://doi.org/10.1002/adfm.202101024"
        }, {
            title: "Challenges and strategies on Zn electrodeposition for stable Zn-ion batteries",
            author: "Xinhua Zheng, Touqeer Ahmad, Wei Chen*",
            year: 2021,
            journal: "Energy Storage Materials",
            volumn: "39",
            issue: "",
            pages: "365-394",
            doi: "https://doi.org/10.1016/j.ensm.2021.04.027"
        }, {
            title: "Recent Progress in High-Entropy Alloys for Catalysts: Synthesis, Applications, and Prospects",
            author: "Ke Li, Wei Chen*",
            year: 2021,
            journal: "Materials Today Energy",
            volumn: "",
            issue: "20",
            pages: "100638",
            doi: "https://doi.org/10.1016/j.mtener.2021.100638"
        }, {
            title: "Opportunities of Aqueous Manganese-Based Batteries with Deposition and Stripping Chemistry",
            author: "Mingming Wang, Xinhua Zheng, Xiang Zhang, Dongliang Chao, Shi-Zhang Qiao, Husam N. Alshareef, Yi Cui*, Wei Chen*",
            year: 2021,
            journal: "Advanced Energy Materials",
            volumn: "11",
            issue: "5",
            pages: "2002904",
            url: "<Go to ISI>://WOS:000600499100001",
            doi: "10.1002/aenm.202002904"
        }, {
            title: "A High Performance Aqueous Iron-Hydrogen Gas Battery",
            author: "Zhengxin Zhu, Yahan Meng, Mingming Wang, Yichen Yin, Wei Chen*",
            year: 2021,
            journal: "Materials Today Energy",
            volumn: "19",
            issue: "",
            pages: "100603",
            url: "",
            doi: "https://doi.org/10.1016/j.mtener.2020.100603"
        }, {
            title: "Lithium Intercalation Compounds-Hydrogen Gas Batteries",
            author: "Zhengxin Zhu, Xiang Zhang, Mingming Wang, Wei Chen*",
            year: 2021,
            journal: "Chemical Journal of Chinese Universities",
            volumn: "42",
            issue: "2",
            pages: "1-9",
            url: "",
            doi: "https://doi.org/10.7503/cjcu20200514"
        }, {
            title: 'In Vivo Polymerization ("Hard-Wiring") of Bioanodes Enables Rapid Start-Up and Order-of-Magnitude Higher Power Density in a Microbial Battery',
            author: "Kristian Dubrawski, Sungguen Woo, Wei Chen, Xing Xie, Yi Cui*, Craig S. Criddle*",
            year: 2020,
            journal: "Environmental Science & Technology",
            volumn: "54",
            issue: "22",
            pages: "14732-14739",
            url: "<Go to ISI>://WOS:000592863400060",
            doi: "https://doi.org/10.1021/acs.est.0c05000"
        }, {
            title: "Revealing Molecular Mechanisms in Hierarchical Nanoporous Carbon via Nuclear Magnetic Resonance",
            author: "Haiyan Mao#, Jing Tang#, Jun Xu, Yucan Peng, Jun Chen, Bing Wu, Yuanwen Jiang, Kaipeng Hou, Shuo Chen, Jiangyan Wang, Hye Ryoung Lee, David M. Halat, Bing Zhang, Wei Chen, Ariel Z. Plantz, Zhiyi Lu, Yi Cui*, Jeffrey A. Reimer*",
            year: 2020,
            journal: "Matter",
            volumn: "3",
            issue: "6",
            pages: "2093-2107",
            url: "<Go to ISI>://WOS:000598228500008",
            doi: "10.1016/j.matt.2020.09.024"
        }, {
            title: "A High-Rate Lithium Manganese Oxide-Hydrogen Battery",
            author: "Zhengxin Zhu, Mingming Wang, Yahan Meng, Zihan Lin, Yi Cui*, Wei Chen*",
            year: 2020,
            journal: "Nano Letters",
            volumn: "20",
            issue: "5",
            pages: "3278-3283",
            url: "<Go to ISI>://WOS:000535255300044",
            doi: "10.1021/acs.nanolett.0c00044"
        }, {
            title: "Membrane-Free Zn/MnO2 Flow Battery for Large-Scale Energy Storage",
            author: "Guodong Li#, Wei Chen#, Hao Zhang#, Yongji Gong, Feifei Shi, Jiangyan Wang, Rufan Zhang, Guangxu Chen, Yang Jin, Tong Wu, Zhiyong Tang, Yi Cui*",
            year: 2020,
            journal: "Advanced Energy Materials",
            volumn: "10",
            issue: "9",
            pages: "1902085",
            url: "<Go to ISI>://WOS:000510226100001",
            doi: "10.1002/aenm.201902085"
        }, {
            title: "Highly Stable Phosphonate-Based MOFs with Engineered Bandgaps for Efficient Photocatalytic Hydrogen Production",
            author: "Yun-Pei Zhu, Jun Yin, Edy Abou-Hamad, Xiaokang Liu, Wei Chen, Tao Yao, Omar F. Mohammed, and Husam N. Alshareef*",
            year: 2020,
            journal: "Advanced Materials",
            volumn: "32",
            issue: "16",
            pages: "1906368",
            url: "<Go to ISI>://WOS:000529881300031",
            doi: "10.1002/adma.201906368"
        }, {
            title: "Solubility-Dependent Protective Effects of Binary Alloys for Lithium Anode",
            author: "Yan Xu, Shuyang Zhao, Guangmin Zhou, Wei Chen, Fei Zhou, Ze Rong, Yang Wu, Jia Li, Jinghua Guo*, Yuegang Zhang*",
            year: 2020,
            journal: "ACS Applied Energy Materials",
            volumn: "3",
            issue: "3",
            pages: "2278-2284",
            url: "<Go to ISI>://WOS:000526598300027",
            doi: "10.1021/acsaem.9b02125"
        }, {
            title: "Synergistic Enhancement of Electrocatalytic CO2 Reduction to C2 Oxygenates at Nitrogen-Doped Nanodiamonds/Cu Interface",
            author: "Hongxia Wang#, Yan-Kai Tzeng#, Yongfei Ji#, Yanbin Li, Jun Li, Xueli Zheng, Ankun Yang, Yayuan Liu, Yongji Gong, Lili Cai, Yuzhang Li, Xiaokun Zhang, Wei Chen, Bofei Liu, Haiyu Lu, Nicholas A. Melosh, Zhi-Xun Shen, Karen Chan*, Tianwei Tan*, Steven Chu*, Yi Cui*",
            year: 2020,
            journal: "Nature Nanotechnology",
            volumn: "15",
            issue: "",
            pages: "131-137",
            url: "",
            doi: "https://doi.org/10.1038/s41565-019-0603-y"
        }, {
            title: "A Two-Dimensional MoS2 Catalysis Transistor by Solid-State Ion Gating Manipulation and Adjustment (SIGMA)",
            author: "Yecun Wu, Stefan Ringe, Chun-Lan Wu, Wei Chen, Ankun Yang, Hao Chen, Michael Tang, Guangmin Zhou, Harold Y. Hwang, Karen Chan*, Yi Cui*",
            year: 2019,
            journal: "Nano Letters",
            volumn: "19",
            issue: "10",
            pages: "7293-7300",
            url: "<Go to ISI>://WOS:000490353500074",
            doi: "10.1021/acs.nanolett.9b02888"
        }, {
            title: "Self-Selective Catalyst Synthesis for CO2 Reduction",
            author: "Hongxia Wang#, Zheng Liang#*, Michael Tang#, Guangxu Chen, Yanbin Li, Wei Chen, Dingchang Lin, Zewen Zhang, Guangmin Zhou, Jun Li, Zhiyi Lu, Karen Chan*, Tianwei Tan*, Yi Cui*",
            year: 2019,
            journal: "Joule",
            volumn: "3",
            issue: "8",
            pages: "1927-1936",
            url: "<Go to ISI>://WOS:000482204600015",
            doi: "10.1016/j.joule.2019.05.023"
        }, {
            title: "Ultrathin, flexible, solid polymer composite electrolyte enabled with aligned nanoporous host for lithium batteries",
            author: "Jiayu Wan#, Jin Xie#, Xian Kong, Zhe Liu, Kai Liu, Feifei Shi, Allen Pei, Hao Chen, Wei Chen, Jun Chen, Xiaokun Zhang, Linqi Zong, Jiangyan Wang, Long-Qing Chen, Jian Qin, Yi Cui*",
            year: 2019,
            journal: "Nature Nanotechnology",
            volumn: "14",
            issue: "7",
            pages: "705-711",
            url: "<Go to ISI>://WOS:000473760300023",
            doi: "10.1038/s41565-019-0465-3"
        }, {
            title: "Fast lithium growth and short circuit induced by localized-temperature hotspots in lithium batteries",
            author: "Yangying Zhu#, Jin Xie#, Allen Pei, Bofei Liu, Yecun Wu, Dingchang Lin, Jun Li, Hansen Wang, Hao Chen, Jinwei Xu, Ankun Yang, Chun-Lan Wu, Hongxia Wang, Wei Chen, Yi Cui*",
            year: 2019,
            journal: "Nature Communications",
            volumn: "10",
            issue: "1",
            pages: "2067",
            url: "<Go to ISI>://WOS:000466871300003",
            doi: "10.1038/s41467-019-09924-1"
        }, {
            title: "Surface-engineered mesoporous silicon microparticles as high-Coulombic-efficiency anodes for lithium-ion batteries",
            author: "Jiangyan Wang, Lei Liao, HyeRyoung Lee, Feifei Shi, William Huang, Jie Zhao, Allen Pei, Jing Tang, Xueli Zheng, Wei Chen, Yi Cui*",
            year: 2019,
            journal: "Nano Energy",
            volumn: "61",
            issue: "",
            pages: "404-410",
            url: "<Go to ISI>://WOS:000471201800048",
            doi: "10.1016/j.nanoen.2019.04.070"
        }, {
            title: "Breathing-Mimicking Electrocatalysis for Oxygen Evolution and Reduction",
            author: "Jun Li, Yangying Zhu, Wei Chen, Zhiyi Lu, Jinwei Xu, Allen Pei, Yucan Peng, Xueli Zheng, Zewen Zhang, Steven Chu, Yi Cui*",
            year: 2019,
            journal: "Joule",
            volumn: "3",
            issue: "2",
            pages: "557-569",
            url: "<Go to ISI>://WOS:000460076100021",
            doi: "10.1016/j.joule.2018.11.015"
        }, {
            title: "A manganese-hydrogen battery with potential for grid-scale energy storage",
            author: "Wei Chen#, Guodong Li#, Allen Pei, Yuzhang Li, Lei Liao, Hongxia Wang, Jiayu Wan, Zheng Liang, Guangxu Chen, Hao Zhang, Jiangyan Wang, Yi Cui*",
            year: 2018,
            journal: "Nature Energy",
            volumn: "3",
            issue: "5",
            pages: "428-435",
            url: "<Go to ISI>://WOS:000433029700018",
            doi: "10.1038/s41560-018-0147-7"
        }, {
            title: "Nickel-hydrogen batteries for large-scale energy storage",
            author: "Wei Chen, Yang Jin, Jie Zhao, Nian Liu, Yi Cui*",
            year: 2018,
            journal: "Proceedings of the National Academy of Sciences of the United States of America",
            volumn: "115",
            issue: "46",
            pages: "11694-11699",
            url: "<Go to ISI>://WOS:000449934400032",
            doi: "10.1073/pnas.1809344115"
        }, {
            title: "An Aqueous Inorganic Polymer Binder for High Performance Lithium-Sulfur Batteries with Flame-Retardant Properties",
            author: "Guangmin Zhou#, Kai Liu#, Yanchen Fan#, Mengqi Yuan, Bofei Liu, Wei Liu, Feifei Shi, Yayuan Liu, Wei Chen, Jeffrey Lopez, Denys Zhuo, Jie Zhao, Yuchi Tsao, Xuanyi Huang, Qianfan Zhang*, Yi Cui*",
            year: 2018,
            journal: "ACS Central Science",
            volumn: "4",
            issue: "2",
            pages: "260-267",
            url: "<Go to ISI>://WOS:000426613700018",
            doi: "10.1021/acscentsci.7b00569"
        }, {
            title: "Electrocatalytic N-Doped Graphitic Nanofiber - Metal/Metal Oxide Nanoparticle Composites",
            author: "Hongjie Tang#, Wei Chen#, Jiangyan Wang, Thomas Dugger, Luz Cruz, David Kisailus*",
            year: 2018,
            journal: "Small",
            volumn: "14",
            issue: "11",
            pages: "1703459",
            url: "<Go to ISI>://WOS:000427592400010",
            doi: "10.1002/smll.201703459"
        }, {
            title: "In Situ Investigation on the Nanoscale Capture and Evolution of Aerosols on Nanofibers",
            author: "Rufan Zhang, Bofei Liu, Ankun Yang, Yangying Zhu, Chong Liu, Guangmin Zhou, Jie Sun, Po-Chun Hsu, Wenting Zhao, Dingchang Lin, Yayuan Liu, Allen Pei, Jin Xie, Wei Chen, Jinwei Xu, Yang Jin, Tong Wu, Xuanyi Huang, Yi Cui*",
            year: 2018,
            journal: "Nano Letters",
            volumn: "18",
            issue: "2",
            pages: "1130-1138",
            url: "<Go to ISI>://WOS:000425559700068",
            doi: "10.1021/acs.nanolett.7b04673"
        }, {
            title: "Reactivation of dead sulfide species in lithium polysulfide flow battery for grid scale energy storage",
            author: "Yang Jin#, Guangmin Zhou#, Feifei Shi, Denys Zhuo, Jie Zhao, Kai Liu, Yayuan Liu, Chenxi Zu, Wei Chen, Rufan Zhang, Xuanyi Huang, Yi Cui*",
            year: 2017,
            journal: "Nature Communications",
            volumn: "8",
            issue: "",
            pages: "462",
            url: "<Go to ISI>://WOS:000409458000016",
            doi: "10.1038/s41467-017-00537-0"
        }, {
            title: "Sulfiphilic Nickel Phosphosulfide Enabled Li2S Impregnation in 3D Graphene Cages for Li-S Batteries",
            author: "Guangmin Zhou, Jie Sun, Yang Jin, Wei Chen, Chenxi Zu, Rufan Zhang, Yongcai Qiu, Jie Zhao, Denys Zhuo, Yayuan Liu, Xinyong Tao, Wei Liu, Hye Ryoung Lee, Yi Cui*",
            year: 2017,
            journal: "Advanced Materials",
            volumn: "29",
            issue: "12",
            pages: "1603366",
            url: "<Go to ISI>://WOS:000396998800001",
            doi: "10.1002/adma.201603366"
        }, {
            title: "Conformal Lithium Fluoride Protection Layer on Three-Dimensional Lithium by Nonhazardous Gaseous Reagent Freon",
            author: "Dingchang Lin, Yayuan Liu, Wei Chen, Guangmin Zhou, Kai Liu, Bruce S Dunn, Yi Cui*",
            year: 2017,
            journal: "Nano Letters",
            volumn: "17",
            issue: "6",
            pages: "3731-3737",
            url: "<Go to ISI>://WOS:000403631600060",
            doi: "10.1021/acs.nanolett.7b01020"
        }, {
            title: "In Situ Electrochemically Derived Nanoporous Oxides from Transition Metal Dichalcogenides for Active Oxygen Evolution Catalysts",
            author: "Wei Chen, Yayuan Liu, Yuzhang Li, Jie Sun, Yongcai Qiu, Chong Liu, Guangmin  Zhou, Yi Cui*",
            year: 2016,
            journal: "Nano Letters",
            volumn: "16",
            issue: "12",
            pages: "7588-7596",
            url: "<Go to ISI>://WOS:000389963200040",
            doi: "10.1021/acs.nanolett.6b03458"
        }, {
            title: "Efficient solar-driven water splitting by nanocone BiVO4-perovskite tandem cells",
            author: "Yongcai Qiu#, Wei Liu#, Wei Chen#, Wei Chen#, Guangmin Zhou, Po-Chun Hsu, Rufan Zhang, Zheng Liang, Shoushan Fan, Yuegang Zhang*, Yi Cui*",
            year: 2016,
            journal: "Science Advances",
            volumn: "2",
            issue: "6",
            pages: "1501764",
            url: "<Go to ISI>://WOS:000380073800012",
            doi: "10.1126/sciadv.1501764"
        }, {
            title: "Enhanced Intrinsic Catalytic Activity of lambda-MnO2 by Electrochemical Tuning and Oxygen Vacancy Generation",
            author: "Sanghan Lee, Gyutae Nam, Jie Sun, Jang-Soo Lee, Hyun‐Wook Lee, Wei Chen, Jaephil Cho*, Yi Cui*",
            year: 2016,
            journal: "Angewandte Chemie-International Edition",
            volumn: "55",
            issue: "30",
            pages: "8599-8604",
            url: "<Go to ISI>://WOS:000383253500018",
            doi: "10.1002/anie.201602851"
        }, {
            title: "Composites of a Prussian Blue Analogue and Gelatin-Derived Nitrogen-Doped Carbon-Supported Porous Spinel Oxides as Electrocatalysts for a Zn-Air Battery",
            author: "Jang-Soo Lee, Gyutae Nam, Jie Sun, Shougo Higashi, Hyun‐Wook Lee, Sanghan Lee, Wei Chen, Yi Cui*, Jaephil Cho*",
            year: 2016,
            journal: "Advanced Energy Materials",
            volumn: "6",
            issue: "22",
            pages: "1601052",
            url: "<Go to ISI>://WOS:000388993100007",
            doi: "10.1002/aenm.201601052"
        }, {
            title: "In Situ Electrochemical Oxidation Tuning of Transition Metal Disulfides to Oxides for Enhanced Water Oxidation",
            author: "Wei Chen, Haotian Wang, Yuzhang Li, Yayuan Liu, Jie Sun, Sanghan Lee, Jangsoo Lee, Yi Cui*",
            year: 2015,
            journal: "ACS Central Science",
            volumn: "1",
            issue: "5",
            pages: "244-251",
            url: "<Go to ISI>://WOS:000365968800007",
            doi: "10.1021/acscentsci.5b00227"
        }, {
            title: "Graphene based integrated tandem supercapacitors fabricated directly on separators",
            author: "Wei Chen, Chuan Xia, H. N. Alshareef*",
            year: 2015,
            journal: "Nano Energy",
            volumn: "15",
            issue: "",
            pages: "1-8",
            url: "<Go to ISI>://WOS:000364578900001",
            doi: "10.1016/j.nanoen.2015.03.040"
        }, {
            title: "Highly Stable Supercapacitors with Conducting Polymer Core-Shell Electrodes for Energy Storage Applications",
            author: "Chuan Xia#, Wei Chen#, H. N. Alshareef*",
            year: 2015,
            journal: "Advanced Energy Materials",
            volumn: "5",
            issue: "8",
            pages: "1401805",
            url: "<Go to ISI>://WOS:000353357600003",
            doi: "10.1002/aenm.201401805"
        }, {
            title: "Electrochemical tuning of olivine-type lithium transition-metal phosphates as efficient water oxidation catalysts",
            author: "Yayuan Liu, Haotian Wang, Dingchang Lin, Chong Liu, Po-chun Hsu, Wei Liu, Wei Chen, Yi Cui*",
            year: 2015,
            journal: "Energy & Environmental Science",
            volumn: "8",
            issue: "6",
            pages: "1719-1724",
            url: "<Go to ISI>://WOS:000355985700011",
            doi: "10.1039/c5ee01290b"
        }, {
            title: "One-Step Electrodeposited Nickel Cobalt Sulfide Nanosheet Arrays for High-Performance Asymmetric Supercapacitors",
            author: "Wei Chen, Chuan Xia, H. N. Alshareef*",
            year: 2014,
            journal: "ACS Nano",
            volumn: "8",
            issue: "9",
            pages: "9531-9541",
            url: "<Go to ISI>://WOS:000342184400086",
            doi: "10.1021/nn503814y"
        }, {
            title: "Morphological and Electrochemical Cycling Effects in MnO2 Nanostructures by 3D Electron Tomography",
            author: "Wei Chen, R. B. Rakhi, Qingxiao Wang, M. N. Hedhili, H. N. Alshareef*",
            year: 2014,
            journal: "Advanced Functional Materials",
            volumn: "24",
            issue: "21",
            pages: "3130-3143",
            url: "<Go to ISI>://WOS:000337489400008",
            doi: "10.1002/adfm.201303508"
        }, {
            title: "A general approach toward enhancement of pseudocapacitive performance of conducting polymers by redox-active electrolytes",
            author: "Wei Chen, Chuan Xia, R. B. Rakhi, H. N. Alshareef*",
            year: 2014,
            journal: "Journal of Power Sources",
            volumn: "267",
            issue: "",
            pages: "521-526",
            url: "<Go to ISI>://WOS:000339601800060",
            doi: "10.1016/j.jpowsour.2014.05.131"
        }, {
            title: "Shape-controlled porous nanocarbons for high performance supercapacitors",
            author: "Wei Chen, R. B. Rakhi, M. N. Hedhili, H. N. Alshareef*",
            year: 2014,
            journal: "Journal of Materials Chemistry A",
            volumn: "2",
            issue: "15",
            pages: "5236-5243",
            url: "<Go to ISI>://WOS:000333101600010",
            doi: "10.1039/c3ta15245f"
        }, {
            title: "Enhanced Rate Performance of Mesoporous Co3O4 Nanosheet Supercapacitor Electrodes by Hydrous RuO2 Nanoparticle Decoration",
            author: "R. B. Rakhi, Wei Chen, Mohamed Nejib Hedhili, Dongkyu Cha, H. N. Alshareef*",
            year: 2014,
            journal: "ACS Applied Materials & Interfaces",
            volumn: "6",
            issue: "6",
            pages: "4196-4206",
            url: "",
            doi: "https://doi.org/10.1021/am405849n"
        }, {
            title: "SnO2 Anode Surface Passivation by Atomic Layer Deposited HfO2 Improves Li-Ion Battery Performance",
            author: "Nulati Yesibolati, Muhammad Shahid, Wei Chen, M. N. Hedhili, M. C. Reuter, F. M. Ross, H. N. Alshareef*",
            year: 2014,
            journal: "Small",
            volumn: "10",
            issue: "14",
            pages: "2849-2858",
            url: "<Go to ISI>://WOS:000340660900016",
            doi: "10.1002/smll.201303898"
        }, {
            title: "Facile synthesis of polyaniline nanotubes using reactive oxide templates for high energy density pseudocapacitors",
            author: "Wei Chen, R. B. Rakhi, H. N. Alshareef*",
            year: 2013,
            journal: "Journal of Materials Chemistry A",
            volumn: "1",
            issue: "10",
            pages: "3315-3324",
            url: "<Go to ISI>://WOS:000314784000016",
            doi: "10.1039/c3ta00499f"
        }, {
            title: "Capacitance enhancement of polyaniline coated curved-graphene supercapacitors in a redox-active electrolyte",
            author: "Wei Chen, R. B. Rakhi, H. N. Alshareef*",
            year: 2013,
            journal: "Nanoscale",
            volumn: "5",
            issue: "10",
            pages: "4134-4138",
            url: "<Go to ISI>://WOS:000318362400013",
            doi: "10.1039/c3nr00773a"
        }, {
            title: "Morphology-Dependent Enhancement of the Pseudocapacitance of Template-Guided Tunable Polyaniline Nanostructures",
            author: "Wei Chen, R. B. Rakhi, H. N. Alshareef*",
            year: 2013,
            journal: "Journal of Physical Chemistry C",
            volumn: "117",
            issue: "29",
            pages: "15009-15019",
            url: "<Go to ISI>://WOS:000322503600016",
            doi: "10.1021/jp405300p"
        }, {
            title: "Effect of pH-induced chemical modification of hydrothermally reduced graphene oxide on supercapacitor performance",
            author: "Yaocai Bai, R. B. Rakhi, Wei Chen, H. N. Alshareef*",
            year: 2013,
            journal: "Journal of Power Sources",
            volumn: "233",
            issue: "",
            pages: "313-319",
            url: "<Go to ISI>://WOS:000316827000043",
            doi: "10.1016/j.jpowsour.2013.01.122"
        }, {
            title: "Influence of calcination temperature on the morphology and energy storage properties of cobalt oxide nanostructures directly grown over carbon cloth substrates",
            author: "R. B. Rakhi, Wei Chen, Dongkyu Cha, H. N. Alshareef*",
            year: 2013,
            journal: "Materials for Renewable and Sustainable Energy",
            volumn: "2",
            issue: "3-4",
            pages: "1-13",
            url: "<Go to ISI>://INSPEC:14347287",
            doi: "10.1007/s40243-013-0017-y"
        }, {
            title: "High energy density supercapacitors using macroporous kitchen sponges",
            author: "Wei Chen, R. B. Rakhi, H. N. Alshareef*",
            year: 2012,
            journal: "Journal of Materials Chemistry",
            volumn: "22",
            issue: "29",
            pages: "14394-14402",
            url: "<Go to ISI>://WOS:000305966200013",
            doi: "10.1039/c2jm32030d"
        }, {
            title: "Substrate Dependent Self-Organization of Mesoporous Cobalt Oxide Nanowires with Remarkable Pseudocapacitance",
            author: "R. B. Rakhi, Wei Chen, Dongkyu Cha, H. N. Alshareef*",
            year: 2012,
            journal: "Nano Letters",
            volumn: "12",
            issue: "5",
            pages: "2559-2567",
            url: "<Go to ISI>://WOS:000303696400068",
            doi: "10.1021/nl300779a"
        }, {
            title: "Nanostructured Ternary Electrodes for Energy-Storage Applications",
            author: "R. B. Rakhi, Wei Chen, Dongkyu Cha, H. N. Alshareef*",
            year: 2012,
            journal: "Advanced Energy Materials",
            volumn: "2",
            issue: "3",
            pages: "381-389",
            url: "<Go to ISI>://WOS:000301427900014",
            doi: "10.1002/aenm.201100609"
        }, {
            title: "Carbon nanotube-coated macroporous sponge for microbial fuel cell electrodes",
            author: "Xing Xie, Meng Ye, Liangbing Hu, Nian Liu, James R. McDonough, Wei Chen, H. N. Alshareef, Craig S. Criddle*, Yi Cui*",
            year: 2012,
            journal: "Energy & Environmental Science",
            volumn: "5",
            issue: "1",
            pages: "5265-5270",
            url: "<Go to ISI>://WOS:000299046100016",
            doi: "10.1039/c1ee02122b"
        }, {
            title: "Conducting polymer/carbon nanocoil composite electrodes for efficient supercapacitors",
            author: "R. B. Rakhi, Wei Chen, Dongkyu Cha, H. N. Alshareef*",
            year: 2012,
            journal: "Journal of Materials Chemistry",
            volumn: "22",
            issue: "11",
            pages: "5177-5183",
            url: "<Go to ISI>://WOS:000300571400086",
            doi: "10.1039/c2jm15740c"
        }, {
            title: "High-Performance Nanostructured Supercapacitors on a Sponge",
            author: "Wei Chen, R. B. Rakhi, Liangbing Hu, Xing Xie, Yi Cui, H. N. Alshareef*",
            year: 2011,
            journal: "Nano Letters",
            volumn: "11",
            issue: "12",
            pages: "5165-5172",
            url: "<Go to ISI>://WOS:000297950200012",
            doi: "10.1021/nl2023433"
        }, {
            title: "Symmetrical MnO2-Carbon Nanotube-Textile Nanostructures for Wearable Pseudocapacitors with High Mass Loading",
            author: "Liangbing Hu#, Wei Chen#, Xing Xie, Nian Liu, Yuan Yang, Hui Wu, Yan Yao, Mauro Pasta, H. N. Alshareef, Yi Cui*",
            year: 2011,
            journal: "ACS Nano",
            volumn: "5",
            issue: "11",
            pages: "8904-8913",
            url: "<Go to ISI>://WOS:000297143300051",
            doi: "10.1021/nn203085j"
        }, {
            title: "High performance supercapacitors using metal oxide anchored graphene nanosheet electrodes",
            author: "R. B. Rakhi, Wei Chen, Dongkyu Cha, H. N. Alshareef*",
            year: 2011,
            journal: "Journal of Materials Chemistry",
            volumn: "21",
            issue: "40",
            pages: "16197-16204",
            url: "<Go to ISI>://WOS:000295580800049",
            doi: "10.1039/c1jm12963e"
        }, {
            title: "Electrochemical Energy Storage Devices Using Electrodes Incorporating Carbon Nanocoils and Metal Oxides Nanoparticles",
            author: "R. B. Rakhi, Dongkyu Cha, Wei Chen, H. N. Alshareef*",
            year: 2011,
            journal: "Journal of Physical Chemistry C",
            volumn: "115",
            issue: "29",
            pages: "14392-14399",
            url: "<Go to ISI>://WOS:000292892500054",
            doi: "10.1021/jp202519e"
        }], na = ta, aa = (n("9911"), Object(a["withScopeId"])("data-v-6e039567"));
        Object(a["pushScopeId"])("data-v-6e039567");
        var oa = {class: "column-title"},
            ia = Object(a["createVNode"])("i", {class: "el-icon-d-arrow-right"}, null, -1);
        Object(a["popScopeId"])();
        var ra = aa((function (e, t, n, o, i, r) {
            var c = Object(a["resolveComponent"])("router-link");
            return Object(a["openBlock"])(), Object(a["createBlock"])("div", oa, [Object(a["createVNode"])("span", {
                class: "column-title-text",
                style: "color:" + n.titleColor
            }, Object(a["toDisplayString"])(n.title), 5), null !== n.link && "" !== n.link ? (Object(a["openBlock"])(), Object(a["createBlock"])(c, {
                key: 0,
                class: "column-link",
                to: n.link,
                style: "color:" + n.linkColor
            }, {
                default: aa((function () {
                    return [Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.linkText), 1), ia]
                })), _: 1
            }, 8, ["to", "style"])) : Object(a["createCommentVNode"])("", !0), Object(a["createVNode"])("div", {
                class: "column-split-line",
                style: "background:" + n.splitLineColor
            }, null, 4)])
        })), ca = {
            name: "ColumnTitle",
            props: {
                title: {type: String, default: ""},
                titleColor: {type: String, default: "black"},
                link: {type: String, default: ""},
                linkText: {type: String, default: "More"},
                linkColor: {type: String, default: "#0094ff"},
                splitLineColor: {type: String, default: "#0094ff"}
            }
        };
        n("0d15");
        ca.render = ra, ca.__scopeId = "data-v-6e039567";
        var ua = ca, la = Object(a["withScopeId"])("data-v-27f795e3");
        Object(a["pushScopeId"])("data-v-27f795e3");
        var sa = {key: 0}, da = {key: 1}, ha = {key: 2, class: "journal"}, pa = {key: 3}, ga = {key: 4}, ma = {key: 5},
            fa = {key: 6}, ba = Object(a["createTextVNode"])("DOI: ");
        Object(a["popScopeId"])();
        var ya = la((function (e, t, n, o, i, r) {
            return Object(a["openBlock"])(), Object(a["createBlock"])("p", null, [Object(a["renderSlot"])(e.$slots, "default", {}, void 0, !0), Object(a["createVNode"])("a", {
                hidden: "",
                herf: n.year
            }, null, 8, ["herf"]), "" !== n.author ? (Object(a["openBlock"])(), Object(a["createBlock"])("span", sa, Object(a["toDisplayString"])(n.author) + ", ", 1)) : Object(a["createCommentVNode"])("", !0), "" !== n.title ? (Object(a["openBlock"])(), Object(a["createBlock"])("span", da, Object(a["toDisplayString"])(n.title) + ", ", 1)) : Object(a["createCommentVNode"])("", !0), "" !== n.journal ? (Object(a["openBlock"])(), Object(a["createBlock"])("span", ha, Object(a["toDisplayString"])(n.journal), 1)) : Object(a["createCommentVNode"])("", !0), "" !== n.volume ? (Object(a["openBlock"])(), Object(a["createBlock"])("span", pa, Object(a["toDisplayString"])(e.volumn), 1)) : Object(a["createCommentVNode"])("", !0), "" !== n.issue ? (Object(a["openBlock"])(), Object(a["createBlock"])("span", ga, "(" + Object(a["toDisplayString"])(n.issue) + ")", 1)) : Object(a["createCommentVNode"])("", !0), "" !== n.pages ? (Object(a["openBlock"])(), Object(a["createBlock"])("span", ma, ":" + Object(a["toDisplayString"])(n.pages) + ", ", 1)) : Object(a["createCommentVNode"])("", !0), Object(a["createTextVNode"])(" " + Object(a["toDisplayString"])(n.year) + ". ", 1), "" !== n.doi ? (Object(a["openBlock"])(), Object(a["createBlock"])("span", fa, [ba, Object(a["createVNode"])("a", {
                href: r.getDoi,
                target: "_blank",
                style: {"word-break": "break-word"}
            }, Object(a["toDisplayString"])(r.getDoi), 9, ["href"])])) : Object(a["createCommentVNode"])("", !0)])
        })), ja = (n("2ca0"), {
            name: "Publication",
            props: {
                author: {type: String, default: ""},
                title: {type: String, default: ""},
                journal: {type: String, default: ""},
                volume: {type: String, default: ""},
                issue: {type: String, default: ""},
                pages: {type: String, default: ""},
                doi: {type: String, default: ""},
                url: {type: String, default: ""},
                year: {type: String, default: ""}
            },
            computed: {
                getDoi: function () {
                    return this.doi.startsWith("http") ? this.doi : "https://doi.org/" + this.doi
                }
            }
        });
        n("5ef3");
        ja.render = ya, ja.__scopeId = "data-v-27f795e3";
        var Oa = ja, va = [{
            time: "November 21, 2021",
            event: 'Our research paper entitled "An Ultrafast and Ultra-Low-Temperature Hydrogen Gas-Proton Battery" was published in Journal of the American Chemical Society. Congratulations to Zhengxin!!'
        }, {
            time: "November 10, 2021",
            event: 'Our research paper entitled "Multifunctional Nickel-Cobalt Phosphates for High-Performance Hydrogen Gas Batteries and Self-Powered Water Splitting" was published in ACS Applied Energy Materials. Congratulations to Yahan!\n'
        }, {
            time: "November 6, 2021",
            event: 'Our research paper entitled "High-performance Zn battery with transition metal ions co-regulated electrolytic MnO2" was published in eScience. Congratulations to Mingyan!'
        }, {
            time: "October 14, 2021",
            event: 'Our invited review article entitled "Nickel hydrogen gas batteries: From aerospace to grid-scale energy storage applications" was published in Current Opinion in Electrochemistry. Congratulations to Taoli!'
        }, {
            time: "October 11, 2021",
            event: 'Our research paper entitled “Boosting Electrolytic MnO2-Zn Batteries by a Bromine Mediator“ was published in Nano Letters. Congratulations to Xinhua!'
        }, {
            time: "October 7, 2021",
            event: 'Our research paper entitled “Electrolyte Regulation of Bismuth Ions toward High Performance Aqueous Manganese-based Batteries“ was published in ACS Materials Letters. Congratulations to Mingming!'
        }, {
            time: "September 29, 2021",
            event: 'Our research paper entitled “Electrode-Less MnO2-Metal Batteries with Deposition and Stripping Chemistry“ was published in Small. Congratulations to Mingming!'
        }, {
            time: "August 3, 2021",
            event: 'Our research paper entitled “High Performance Aqueous Prussian Blue Analogue-Hydrogen Gas Hybrid Batteries” was published in Energy Storage Materials. Congratulations to Zhengxin!'
        }, {
            time: "June 26, 2021",
            event: 'Our research paper entitled "An Ultrastable Aqueous Iodine-Hydrogen Gas Battery" was published in Advanced Functional Materials. Congratulations to Zhengxin!'
        }, {
            time: "June 26, 2021",
            event: "Prof. Wei Chen gave an invited talk at University of South China, Hunan."
        }, {
            time: "June 2, 2021",
            event: "Congratulations to Dr. Yan Xu for getting Chinese Postdoc Science Foundation!"
        }, {
            time: "May 27, 2021",
            event: "Prof. Wei Chen gave an invited talk at Shandong University."
        }, {
            time: "May 26, 2021",
            event: "Prof. Wei Chen gave an invited talk at University of Jinan, Shandong."
        }, {
            time: "April 27, 2021",
            event: "Prof. Wei Chen gave an invited talk at Hunan University, Changsha."
        }, {
            time: "April 26, 2021",
            event: "Prof. Wei Chen gave an invited speech at his alma mater Yueyang No. 13 middle school. He was awarded as a Distinguished Alumni and Honorary President of Yueyang No. 13 middle school, Yueyang city, Hunan Province."
        }, {
            time: "April 23, 2021",
            event: "The Chen group had a joyful spring tour in Huiyuan Garden, Hefei."
        }, {
            time: "January 23, 2021",
            event: "The Chen group had a happy end-of-the-year dinner in the city of Hefei!"
        }, {
            time: "January 6, 2021",
            event: 'Our review entitled "Recent Progress in High-Entropy Alloys for Catalysts: Synthesis, Applications, and Prospects"was published in Materials Today Energy. Congratulations to Ke!\n'
        }, {
            time: "December 21, 2020",
            event: 'Our invited review entitled "Opportunities of Aqueous Manganese-Based Batteries with Deposition and Stripping Chemistry"was published in Advanced Energy Materials. Congratulations to Mingming!\n'
        }, {
            time: "December 9, 2020",
            event: 'Our invited paper entitled "A high performance aqueous iron-hydrogen gas battery"was published in Materials Today Energy. Congratulations to Zhengxin!\n'
        }, {
            time: "October 23, 2020",
            event: "The Chen group enjoyed a wonderful trip to Mushan Island in Chaohu Lake, Hefei!"
        }, {
            time: "October 20, 2020",
            event: "Welcome postdocs Dr. Jifei Sun and Dr. Yan Xu to join our group!"
        }, {
            time: "September 25, 2020",
            event: "Welcome international Master student Sunhyeong Park to join our group!"
        }, {
            time: "September 20, 2020",
            event: "Welcome postdocs Dr. Mingyan Chuai, Dr. Yuan Yuan and Dr. Zaichun Liu to join our group!"
        }, {
            time: "September 8, 2020",
            event: "Welcome PhD students Taoli Jiang, Xinhua Zheng and Master students Yahan Meng, Na Chen, Chunyue Shen to join our group!"
        }, {
            time: "July 31, 2020",
            event: 'Our invited paper entitled "Lithium Intercalation Compounds-Hydrogen Gas Batteries"was published in Chemical Journal of Chinese Universities. Good job, Zhengxin!'
        }, {
            time: "July 16, 2020",
            event: "Welcome Dr. Ke Li to join our group as a postdoc!"
        }, {
            time: "April 17, 2020",
            event: 'Our first paper entitled "A High-Rate Lithium Manganese Oxide-Hydrogen Battery"was published in Nano Letters. Good job, Zhengxin!'
        }, {
            time: "January 4, 2020",
            event: "Prof. Wei Chen attended the 1st young scholar forum hosted by Cailiaoren and gave an invited talk in Beijing."
        }, {
            time: "December 1-6, 2019",
            event: 'Prof. Wei Chen attended 2019 MRS Fall meeting at Boston, Massachusetts and gave a talk on "Rechargeable Hydrogen Batteries for Grid Scale Energy Storage".'
        }, {
            time: "November 16-19, 2019",
            event: 'Zhengxin Zhu and Mingming Wang attended the conference of "Next-generation materials for energy applications"in Xiamen University.'
        }, {
            time: "October 21, 2019",
            event: "Prof. Wei Chen gave an invited talk at the Shanghai Tech University."
        }, {
            time: "October 20, 2019",
            event: "Prof. Wei Chen gave an invited talk at the East China Normal University."
        }, {
            time: "September 8, 2019",
            event: "Chen Research Group website is launched!"
        }, {
            time: "August 20, 2019",
            event: "Welcome undergraduate student Haosong Jiang to join our group!"
        }, {
            time: "August 14-16, 2019",
            event: "Prof. Wei Chen attended the 5th International Conferenceon Energy Conversion and Storage at Peking University."
        }, {
            time: "July 24, 2019",
            event: "Prof. Wei Chen gave an invited talk at the Hunan Institute of Science and Technology on Rechargeable Hydrogen Batteries for Grid Scale Energy Storage."
        }, {
            time: "July 17, 2019",
            event: "Welcome Master student Mingming Wang to join our group!"
        }, {
            time: "July 11, 2019",
            event: "Welcome PhD student Zhengxin Zhu to join our group!"
        }, {
            time: "July 8, 2019",
            event: "Prof. Wei Chen started his research group at USTC!"
        }], Sa = va, Ca = {
            name: "Home", components: {ColumnTitle: ua, Publication: Oa}, data: function () {
                return {carousel: [Kn.a, Qn.a, ea.a], events: Sa, publications: na}
            }
        };
        n("df15");
        Ca.render = Un, Ca.__scopeId = "data-v-c2c61112";
        var ka = Ca, Na = Object(a["withScopeId"])("data-v-46084462");
        Object(a["pushScopeId"])("data-v-46084462");
        var Wa = {class: "content"};
        Object(a["popScopeId"])();
        var Ia = Na((function (e, t, n, o, i, r) {
            var c = Object(a["resolveComponent"])("column-title"),
                u = Object(a["resolveComponent"])("el-timeline-item"), l = Object(a["resolveComponent"])("el-timeline"),
                s = Object(a["resolveComponent"])("el-backtop");
            return Object(a["openBlock"])(), Object(a["createBlock"])("div", Wa, [Object(a["createVNode"])(c, {title: "News&Events"}), Object(a["createVNode"])(l, {class: "event"}, {
                default: Na((function () {
                    return [(Object(a["openBlock"])(!0), Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(i.events, (function (e, t) {
                        return Object(a["openBlock"])(), Object(a["createBlock"])(u, {
                            key: t,
                            timestamp: e.time,
                            placement: "top"
                        }, {
                            default: Na((function () {
                                return [Object(a["createVNode"])("p", null, Object(a["toDisplayString"])(e.event), 1)]
                            })), _: 2
                        }, 1032, ["timestamp"])
                    })), 128))]
                })), _: 1
            }), Object(a["createVNode"])(s, {target: ".scrollbar .el-scrollbar__wrap", bottom: "200"})])
        })), Ba = {
            name: "News", components: {ColumnTitle: ua}, data: function () {
                return {events: Sa}
            }
        };
        n("ffc7");
        Ba.render = Ia, Ba.__scopeId = "data-v-46084462";
        var wa = Ba, La = Object(a["withScopeId"])("data-v-6d62ccc2");
        Object(a["pushScopeId"])("data-v-6d62ccc2");
        var xa = {class: "content"}, Ma = {key: 0, class: "publication-year"};
        Object(a["popScopeId"])();
        var Aa = La((function (e, t, n, o, i, r) {
            var c = Object(a["resolveComponent"])("column-title"), u = Object(a["resolveComponent"])("Publication"),
                l = Object(a["resolveComponent"])("el-backtop");
            return Object(a["openBlock"])(), Object(a["createBlock"])("div", xa, [Object(a["createVNode"])(c, {title: "Publications"}), (Object(a["openBlock"])(!0), Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(i.publications, (function (e, t) {
                return Object(a["openBlock"])(), Object(a["createBlock"])(a["Fragment"], {key: e.title}, [r.showYear(e.year) ? (Object(a["openBlock"])(), Object(a["createBlock"])("div", Ma, Object(a["toDisplayString"])(e.year), 1)) : Object(a["createCommentVNode"])("", !0), Object(a["createVNode"])(u, e, {
                    default: La((function () {
                        return [Object(a["createTextVNode"])(Object(a["toDisplayString"])(i.publications.length - t) + ". ", 1)]
                    })), _: 2
                }, 1040)], 64)
            })), 128)), Object(a["createVNode"])(l, {target: ".scrollbar .el-scrollbar__wrap", bottom: "200"})])
        })), Pa = 0, Va = {
            name: "Publications", components: {ColumnTitle: ua, Publication: Oa}, data: function () {
                return {publications: na}
            }, methods: {
                showYear: function (e) {
                    return e !== Pa && (Pa = e, !0)
                }
            }
        };
        n("0972");
        Va.render = Aa, Va.__scopeId = "data-v-6d62ccc2";
        var Ha = Va, Za = Object(a["withScopeId"])("data-v-ca1d286a");
        Object(a["pushScopeId"])("data-v-ca1d286a");
        var Ya = {class: "content"},
            Da = Object(a["createVNode"])("div", {class: "group-title"}, "Principal Investigator", -1),
            _a = {class: "info"}, Ja = {class: "column"},
            Fa = Object(a["createStaticVNode"])('<span class="row name" data-v-ca1d286a>Wei Chen</span><span class="row name-cn" data-v-ca1d286a>陈维</span><a href="mailto:weichen1@ustc.edu.cn" class="row" data-v-ca1d286a>weichen1@ustc.edu.cn</a><a href="https://scholar.google.com/citations?hl=en&amp;user=8QDJgikAAAAJ" target="_blank" class="row" data-v-ca1d286a>Google Scholar</a><a class="row" href="http://applchem.ustc.edu.cn/2018/0607/c15402a388964/page.htm" target="_blank" data-v-ca1d286a> Department of Applied Chemistry Page </a><a class="row" href="http://www.hfnl.ustc.edu.cn/detail?id=16124" target="_blank" data-v-ca1d286a> Hefei National Laboratory for Physical Sciences at the Microscale Page </a>', 6),
            Ta = {class: "time-table"}, Ga = Object(a["createVNode"])("div", {class: "group-title"}, "Postdocs", -1),
            Ra = Object(a["createVNode"])("div", {class: "group-title"}, "Ph.D. Students", -1),
            Ea = Object(a["createVNode"])("div", {class: "group-title"}, "M.S. Students", -1),
            Xa = Object(a["createVNode"])("div", {class: "group-title"}, "Undergraduates", -1),
            Ua = Object(a["createVNode"])("div", {class: "group-title"}, "Visiting Scholars", -1),
            za = Object(a["createVNode"])("div", {class: "group-title"}, "Alumni", -1);
        Object(a["popScopeId"])();
        var Ka = Za((function (e, t, n, o, i, r) {
                var c = Object(a["resolveComponent"])("column-title"), u = Object(a["resolveComponent"])("MemberInfo"),
                    l = Object(a["resolveComponent"])("el-backtop");
                return Object(a["openBlock"])(), Object(a["createBlock"])("div", Ya, [Object(a["createVNode"])(c, {title: "Members"}), Da, Object(a["createVNode"])("div", _a, [Object(a["createVNode"])("img", {
                    class: "photo",
                    src: i.WeiChen
                }, null, 8, ["src"]), Object(a["createVNode"])("div", Ja, [Fa, Object(a["createVNode"])("table", Ta, [(Object(a["openBlock"])(!0), Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(i.timeline, (function (e, t) {
                    return Object(a["openBlock"])(), Object(a["createBlock"])("tr", {key: t}, [Object(a["createVNode"])("td", null, Object(a["toDisplayString"])(e.content), 1), Object(a["createVNode"])("td", null, Object(a["toDisplayString"])(e.time), 1)])
                })), 128))])])]), Ga, (Object(a["openBlock"])(!0), Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(r.postdocs, (function (e, t) {
                    return Object(a["openBlock"])(), Object(a["createBlock"])(u, Object(a["mergeProps"])({key: t}, e), null, 16)
                })), 128)), Ra, (Object(a["openBlock"])(!0), Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(r.phDStudents, (function (e, t) {
                    return Object(a["openBlock"])(), Object(a["createBlock"])(u, Object(a["mergeProps"])({key: t}, e), null, 16)
                })), 128)), Ea, (Object(a["openBlock"])(!0), Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(r.mSStudent, (function (e, t) {
                    return Object(a["openBlock"])(), Object(a["createBlock"])(u, Object(a["mergeProps"])({key: t}, e), null, 16)
                })), 128)), Xa, (Object(a["openBlock"])(!0), Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(r.undergraduate, (function (e, t) {
                    return Object(a["openBlock"])(), Object(a["createBlock"])(u, Object(a["mergeProps"])({key: t}, e), null, 16)
                })), 128)), Ua, (Object(a["openBlock"])(!0), Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(r.visitingScholar, (function (e, t) {
                    return Object(a["openBlock"])(), Object(a["createBlock"])(u, Object(a["mergeProps"])({key: t}, e), null, 16)
                })), 128)), za, (Object(a["openBlock"])(!0), Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(r.alumni, (function (e, t) {
                    return Object(a["openBlock"])(), Object(a["createBlock"])(u, Object(a["mergeProps"])({key: t}, e), null, 16)
                })), 128)), Object(a["createVNode"])(l, {target: ".scrollbar .el-scrollbar__wrap", bottom: "200"})])
            })), qa = (n("4de4"), n("b4ce")), Qa = n.n(qa), $a = n("1895"), eo = n.n($a), to = n("a37c"), no = n.n(to),
            ao = n("24c4"), oo = n.n(ao), io = n("abf9"), ro = n.n(io), co = n("58d5"), uo = n.n(co), lo = n("cc7a"),
            so = n.n(lo), ho = n("a614"), po = n.n(ho), go = n("99b3"), mo = n.n(go), fo = n("021a"), bo = n.n(fo),
            yo = n("5338"), jo = n.n(yo), Oo = n("f1dc"), vo = n.n(Oo), So = n("559b"), Co = n.n(So), ko = n("1040"),
            No = n.n(ko), Wo = n("9c54"), Io = n.n(Wo), Bo = n("1558"), wo = n.n(Bo), Lo = n("3d76"), xo = n.n(Lo),
            Mo = n("f13f"), Ao = n.n(Mo), Po = n("97f2"), Vo = n.n(Po), Ho = n("43fc"), Zo = n.n(Ho), Yo = n("0010"),
            Do = n.n(Yo), _o = n("e51d"), Jo = n.n(_o), Fo = n("c344"), To = n.n(Fo), Go = n("0313"), Ro = n.n(Go),
            Eo = n("0c7d"), Xo = n.n(Eo), Uo = n("67ea"), zo = n.n(Uo), Ko = n("afd7"), qo = n.n(Ko), Qo = n("6bfc"),
            $o = n.n(Qo), ei = n("e9f6"), ti = n.n(ei), ni = n("eb7d"), ai = n.n(ni), oi = n("fa29"), ii = n.n(oi),
            ri = n("f134"), ci = n.n(ri), ui = n("fe89"), li = n.n(ui), si = n("1cb8"), di = n.n(si), hi = [{
                name: "李科",
                name_en: "Ke Li",
                email: "kelee@ustc.edu.cn",
                identity: "Postdoc",
                year: "",
                photo: eo.a,
                duration: ""
            }, {
                name: "刘再春",
                name_en: "Zaichun Liu",
                email: "liuzaichun@ustc.edu.cn",
                identity: "Postdoc",
                year: "",
                photo: no.a
            }, {
                name: "揣明艳",
                name_en: "Mingyan Chuai",
                email: "chuaimy20@ustc.edu.cn",
                identity: "Postdoc",
                year: "",
                photo: oo.a,
                duration: ""
            }, {
                name: "袁园",
                name_en: "Yuan Yuan",
                email: "yuany93@ustc.edu.cn",
                identity: "Postdoc",
                year: "",
                photo: ro.a,
                duration: ""
            }, {
                name: "孙继飞",
                name_en: "Jifei Sun",
                email: "jifeisun@mail.ustc.edu.cn",
                identity: "Postdoc",
                year: "",
                photo: uo.a,
                duration: ""
            }, {
                name: "胥燕",
                name_en: "Yan Xu",
                email: "yanxu15@ustc.edu.cn",
                identity: "Postdoc",
                year: "",
                photo: so.a,
                duration: ""
            }, {
                name: "朱正新",
                name_en: "Zhengxin Zhu",
                email: "zzxalf@mail.ustc.edu.cn",
                identity: "Ph.D. Student",
                year: 2019,
                photo: po.a,
                duration: ""
            }, {
                name: "蒋涛立",
                name_en: "Taoli Jiang",
                email: "jiangtl@mail.ustc.edu.cn",
                identity: "Ph.D. Student",
                year: 2020,
                photo: mo.a,
                duration: ""
            }, {
                name: "郑新华",
                name_en: "Xinhua Zheng",
                email: "xhzheng@mail.ustc.edu.cn",
                identity: "Ph.D. Student",
                year: 2020,
                photo: bo.a,
                duration: ""
            }, {
                name: "穆赫辛 阿里",
                name_en: "Mohsin Ali",
                email: "mohsinali144@mail.ustc.edu.cn",
                identity: "Ph.D. Student",
                year: 2020,
                photo: jo.a,
                duration: ""
            }, {
                name: "",
                name_en: "Touqeer Ahmad",
                email: "touqeer@mail.ustc.edu.cn",
                identity: "Ph.D. Student",
                year: 2020,
                photo: vo.a,
                duration: ""
            }, {
                name: "",
                name_en: "Muhammad Sajid",
                email: "sajid@mail.ustc.edu.cn",
                identity: "Ph.D. Student",
                year: 2020,
                photo: Co.a,
                duration: ""
            }, {
                name: "王明明",
                name_en: "Mingming Wang",
                email: "mmwang1@mail.ustc.edu.cn",
                identity: "Ph.D. Student",
                year: 2021,
                photo: No.a,
                duration: ""
            }, {
                name: "刘双",
                name_en: "Shuang Liu",
                email: "519152106@qq.com",
                identity: "Ph.D. Student",
                year: 2021,
                photo: Io.a,
                duration: ""
            }, {
                name: "张凯",
                name_en: "Kai Zhang",
                email: "aguaizk0216@163.com",
                identity: "Ph.D. Student",
                year: 2021,
                photo: wo.a,
                duration: ""
            }, {
                name: "孟亚寒",
                name_en: "Yahan Meng",
                email: "yahanmeng@mail.ustc.edu.cn",
                identity: "M.S. Student",
                year: 2020,
                photo: xo.a,
                duration: ""
            }, {
                name: "陈娜",
                name_en: "Na Chen",
                email: "chna@mail.ustc.edu.cn",
                identity: "M.S. Student",
                year: 2020,
                photo: Ao.a,
                duration: ""
            }, {
                name: "沈淳悦",
                name_en: "Chunyue Shen",
                email: "shency@mail.ustc.edu.cn",
                identity: "M.S. Student",
                year: 2020,
                photo: Vo.a,
                duration: ""
            }, {
                name: "朴宣炯",
                name_en: "Sunhyeong Park",
                email: "sunh0410@mail.ustc.edu.cn",
                identity: "M.S. Student",
                year: 2020,
                photo: Zo.a,
                duration: ""
            }, {
                name: "陈景豪",
                name_en: "Jinghao Chen",
                email: "m18075015569@163.com",
                identity: "M.S. Student",
                year: 2021,
                photo: Do.a,
                duration: ""
            }, {
                name: "彭洽",
                name_en: "Qia Peng",
                email: "pengqia@mail.ustc.edu.cn",
                identity: "M.S. Student",
                year: 2021,
                photo: Jo.a,
                duration: ""
            }, {
                name: "谢泽辉",
                name_en: "Zehui Xie",
                email: "1228617442@qq.com",
                identity: "M.S. Student",
                year: 2021,
                photo: To.a,
                duration: ""
            }, {
                name: "许婧雯",
                name_en: "Jingwen Xu",
                email: "xjw050269@163.com",
                identity: "M.S. Student",
                year: 2021,
                photo: Ro.a,
                duration: ""
            }, {
                name: "江浩松",
                name_en: "Haosong Jiang",
                email: "chemy_jiang@mail.ustc.edu.cn",
                identity: "Alumni",
                year: 2018,
                photo: Xo.a,
                duration: "2019.8-2021.5"
            }, {
                name: "林子涵",
                name_en: "Zihan Lin",
                email: "linzihan322@mail.ustc.edu.cn",
                identity: "Alumni",
                year: 2018,
                photo: zo.a,
                duration: "2019.8-2021.9"
            }, {
                name: "骆睿昊",
                name_en: "Ruihao Luo",
                email: "nobeen@mail.ustc.edu.cn",
                identity: "Undergraduate",
                year: 2018,
                photo: qo.a,
                duration: ""
            }, {
                name: "梁东升",
                name_en: "Dongsheng Liang",
                email: "liangdongsheng@mail.ustc.edu.cn",
                identity: "Alumni",
                year: 2017,
                photo: $o.a,
                duration: "2019.9-2021.7"
            }, {
                name: "周靖辰",
                name_en: "Jingchen Zhou",
                email: "zc424087508@mail.ustc.edu.cn",
                identity: "Alumni",
                year: 2018,
                photo: ti.a,
                duration: "2020.9-2021.9"
            }, {
                name: "马瑞泽",
                name_en: "Ruize Ma",
                email: "maruize@mail.ustc.edu.cn",
                identity: "Undergraduate",
                year: 2019,
                photo: di.a,
                duration: ""
            }, {
                name: "王卫平",
                name_en: "Weiping Wang",
                email: "wwp2018@mail.ustc.edu.cn",
                identity: "Visiting Scholar",
                year: 2021,
                photo: ai.a,
                duration: ""
            }, {
                name: "明芳望",
                name_en: "Fangwang Ming",
                email: "fangwang.ming@kaust.edu.sa",
                identity: "Alumni",
                year: "",
                photo: ci.a,
                duration: "2019.10-2020.1"
            }, {
                name: "李一民",
                name_en: "Yimin Li",
                email: "libby_cn@mail.ustc.edu.cn",
                identity: "Alumni",
                year: 2018,
                photo: ii.a,
                duration: "2019.12-2021.5"
            }, {
                name: "郑凯",
                name_en: "Kai Zheng",
                email: "zhengk@mail.ustc.edu.cn",
                identity: "Alumni",
                year: "",
                photo: li.a,
                duration: "2021.6-2021.8"
            }], pi = hi, gi = Object(a["withScopeId"])("data-v-73efe385");
        Object(a["pushScopeId"])("data-v-73efe385");
        var mi = {class: "info"}, fi = {class: "name-en"}, bi = {key: 0, class: "name"}, yi = {key: 1, class: "year"},
            ji = {class: "email"}, Oi = {key: 2, class: "duration"};
        Object(a["popScopeId"])();
        var vi = gi((function (e, t, n, o, i, r) {
            var c = Object(a["resolveComponent"])("el-card");
            return Object(a["openBlock"])(), Object(a["createBlock"])(c, {class: "card"}, {
                default: gi((function () {
                    return [Object(a["createVNode"])("img", {
                        src: n.photo,
                        class: "photo"
                    }, null, 8, ["src"]), Object(a["createVNode"])("div", mi, [Object(a["createVNode"])("span", fi, Object(a["toDisplayString"])(n.name_en), 1), "" !== n.name ? (Object(a["openBlock"])(), Object(a["createBlock"])("span", bi, Object(a["toDisplayString"])(n.name), 1)) : Object(a["createCommentVNode"])("", !0), null !== n.year ? (Object(a["openBlock"])(), Object(a["createBlock"])("span", yi, Object(a["toDisplayString"])(n.year), 1)) : Object(a["createCommentVNode"])("", !0), Object(a["createVNode"])("span", ji, Object(a["toDisplayString"])(n.email), 1), "" !== n.duration ? (Object(a["openBlock"])(), Object(a["createBlock"])("span", Oi, Object(a["toDisplayString"])(n.duration), 1)) : Object(a["createCommentVNode"])("", !0)])]
                })), _: 1
            })
        })), Si = (n("a9e3"), {
            name: "MemberInfo",
            props: {
                name: {type: String, default: ""},
                name_en: {type: String, default: ""},
                email: {type: String, default: ""},
                photo: {type: String, default: ""},
                year: {type: Number},
                duration: {type: String, default: ""}
            }
        });
        n("4dde");
        Si.render = vi, Si.__scopeId = "data-v-73efe385";
        var Ci = Si, ki = {
            name: "Publications", components: {MemberInfo: Ci, ColumnTitle: ua}, data: function () {
                return {
                    members: pi,
                    WeiChen: Qa.a,
                    timeline: [{
                        content: "Professor, Dept. of Applied Chemistry, USTC",
                        time: "Jul.2019-"
                    }, {
                        content: "Scientist, EEnotech",
                        time: "Jun.2018-Jun.2019"
                    }, {
                        content: "Postdoc, Stanford University",
                        time: "Apr.2014-May2018"
                    }, {
                        content: "Ph.D., King Abdullah Univ. of Sci.&Tech.",
                        time: "Jan.2011-Dec.2013"
                    }, {
                        content: "M.S., King Abdullah Univ. of Sci.&Tech.",
                        time: "Sept.2009-Dec.2010"
                    }, {content: "B.S., Univ. of Sci.&Tech. Beijing", time: "Sept.2004-Jun.2008"}]
                }
            }, computed: {
                postdocs: function () {
                    return this.members.filter((function (e) {
                        return "Postdoc" === e.identity
                    }))
                }, phDStudents: function () {
                    return this.members.filter((function (e) {
                        return "Ph.D. Student" === e.identity
                    }))
                }, mSStudent: function () {
                    return this.members.filter((function (e) {
                        return "M.S. Student" === e.identity
                    }))
                }, undergraduate: function () {
                    return this.members.filter((function (e) {
                        return "Undergraduate" === e.identity
                    }))
                }, visitingScholar: function () {
                    return this.members.filter((function (e) {
                        return "Visiting Scholar" === e.identity
                    }))
                }, alumni: function () {
                    return this.members.filter((function (e) {
                        return "Alumni" === e.identity
                    }))
                }
            }, methods: {
                showYear: function (e) {
                    return e !== this.year && (this.year = e, !0)
                }
            }
        };
        n("82ff");
        ki.render = Ka, ki.__scopeId = "data-v-ca1d286a";
        var Ni = ki, Wi = Object(a["withScopeId"])("data-v-9bfed8cc");
        Object(a["pushScopeId"])("data-v-9bfed8cc");
        var Ii = {class: "main"},
            Bi = Object(a["createVNode"])("p", null, "The Chen research group is focused on electrochemistry (battery and catalyst), nanomaterials and nanotechnology to address crucial challenges in energy storage and production systems. Central to our vision for the sustainable future is the synthesis of new nanomaterials and the fabrication of novel nanostructures for the development of next-generation energy storage and production systems, as well as investigating and understanding fundamental questions in the energy field. We are currently focused on the following three major areas: ", -1),
            wi = {class: "content"},
            Li = Object(a["createVNode"])("div", null, [Object(a["createTextVNode"])(" 1. Batteries "), Object(a["createVNode"])("p", null, "The Chen research group is interested in the development of new battery chemistry with an emphasis on the grid-scale energy storage application. "), Object(a["createTextVNode"])(" 2. Catalysis "), Object(a["createVNode"])("p", null, "The Chen research group is pursuing a broad range of studies focused on the synthesis of new catalysts with good electrocatalytic activities and the development of novel energy production system to convert small molecules to valuable fuels, as well as the fabrication of new platforms to explore some fundamental phenomenon in the catalytic process. "), Object(a["createTextVNode"])(" 3. Nanomaterials "), Object(a["createVNode"])("p", null, "The Chen research group is focused on the synthesis of new nanomaterials and the development of novel nanostructures with unique electrochemical properties that can enable revolutionary advances in energy storage and production applications. ")], -1),
            xi = {class: "image"};
        Object(a["popScopeId"])();
        var Mi = Wi((function (e, t, n, o, i, r) {
            var c = Object(a["resolveComponent"])("column-title");
            return Object(a["openBlock"])(), Object(a["createBlock"])("div", Ii, [Object(a["createVNode"])(c, {title: "Research"}), Bi, Object(a["createVNode"])("div", wi, [Li, Object(a["createVNode"])("div", xi, [Object(a["createVNode"])("img", {
                src: i.research,
                class: "image"
            }, null, 8, ["src"])])])])
        })), Ai = n("19703"), Pi = n.n(Ai), Vi = {
            name: "Research", components: {ColumnTitle: ua}, data: function () {
                return {research: Pi.a}
            }
        };
        n("8df7");
        Vi.render = Mi, Vi.__scopeId = "data-v-9bfed8cc";
        var Hi = Vi, Zi = Object(a["withScopeId"])("data-v-32a332f6");
        Object(a["pushScopeId"])("data-v-32a332f6");
        var Yi = {class: "content"}, Di = Object(a["createTextVNode"])("Department of Applied Chemistry"),
            _i = Object(a["createTextVNode"])("School of Chemistry and Materials Science"),
            Ji = Object(a["createTextVNode"])("University of Science and Technology of China"),
            Fi = Object(a["createTextVNode"])("96 Jinzhai Road, Hefei, Anhui 230026, China"),
            Ti = Object(a["createTextVNode"])("weichen1@ustc.edu.cn"),
            Gi = Object(a["createTextVNode"])("Room 231, Environment and Resources Building, EAST Campus of USTC"),
            Ri = Object(a["createTextVNode"])("安徽省合肥市包河区金寨路96号 中国科学技术大学东校区环资楼231室"),
            Ei = Object(a["createTextVNode"])("230026"), Xi = Object(a["createTextVNode"])("weichen1@ustc.edu.cn");
        Object(a["popScopeId"])();
        var Ui = Zi((function (e, t, n, o, i, r) {
            var c = Object(a["resolveComponent"])("ColumnTitle"),
                u = Object(a["resolveComponent"])("el-descriptions-item"),
                l = Object(a["resolveComponent"])("el-descriptions");
            return Object(a["openBlock"])(), Object(a["createBlock"])("div", Yi, [Object(a["createVNode"])(c, {title: "Contact"}), Object(a["createVNode"])(l, {
                title: "Professor Wei Chen",
                column: "1",
                border: ""
            }, {
                default: Zi((function () {
                    return [Object(a["createVNode"])(u, {label: "Department"}, {
                        default: Zi((function () {
                            return [Di]
                        })), _: 1
                    }), Object(a["createVNode"])(u, {label: ""}, {
                        default: Zi((function () {
                            return [_i]
                        })), _: 1
                    }), Object(a["createVNode"])(u, {label: ""}, {
                        default: Zi((function () {
                            return [Ji]
                        })), _: 1
                    }), Object(a["createVNode"])(u, {label: "Address"}, {
                        default: Zi((function () {
                            return [Fi]
                        })), _: 1
                    }), Object(a["createVNode"])(u, {label: "Email"}, {
                        default: Zi((function () {
                            return [Ti]
                        })), _: 1
                    }), Object(a["createVNode"])(u, {label: "Office"}, {
                        default: Zi((function () {
                            return [Gi]
                        })), _: 1
                    }), Object(a["createVNode"])(u, {label: ""}, {
                        default: Zi((function () {
                            return [Ri]
                        })), _: 1
                    }), Object(a["createVNode"])(u, {label: "邮编"}, {
                        default: Zi((function () {
                            return [Ei]
                        })), _: 1
                    }), Object(a["createVNode"])(u, {label: "电子邮件"}, {
                        default: Zi((function () {
                            return [Xi]
                        })), _: 1
                    })]
                })), _: 1
            })])
        })), zi = {name: "Contact", components: {ColumnTitle: ua}};
        n("425b");
        zi.render = Ui, zi.__scopeId = "data-v-32a332f6";
        var Ki = zi, qi = Object(a["withScopeId"])("data-v-4b4802b4");
        Object(a["pushScopeId"])("data-v-4b4802b4");
        var Qi = {class: "content"},
            $i = Object(a["createStaticVNode"])('<div class="ad" data-v-4b4802b4><p class="subtitle" data-v-4b4802b4>Postdoc positions are immediately available</p><p data-v-4b4802b4>We accept highly motivated postdocs to join the group and work on (but not limited to) the following projects: </p><p data-v-4b4802b4> 1) Batteries </p><p data-v-4b4802b4> 2) Catalysis </p><p data-v-4b4802b4>3) Nanomaterials and nanostructures</p><p data-v-4b4802b4>4) Emerging techniques for energy storage and production</p><p data-v-4b4802b4> Please click the <a href="https://www.cailiaoren.com/zp_793.html" data-v-4b4802b4>link</a> here or send an email to <a href="mailto:weichen1@ustc.edu.cn" data-v-4b4802b4>weichen1@ustc.edu.cn</a> for details. </p></div><div class="ad" data-v-4b4802b4><p class="subtitle" data-v-4b4802b4>Openings to graduate and undergraduate students, exchange and visiting scholars (long-term available) </p><p data-v-4b4802b4>The Chen research group has capability to hire up to 3 Ph.D. students and up to 3 Master students every year. </p><p data-v-4b4802b4>We welcome creative undergraduate students, exchange and visiting scholars to join our group. </p><p data-v-4b4802b4>Please send an email to <a href="mailto:weichen1@ustc.edu.cn" data-v-4b4802b4>weichen1@ustc.edu.cn</a> for details.</p></div>', 2);
        Object(a["popScopeId"])();
        var er = qi((function (e, t, n, o, i, r) {
            var c = Object(a["resolveComponent"])("ColumnTitle");
            return Object(a["openBlock"])(), Object(a["createBlock"])("div", Qi, [Object(a["createVNode"])(c, {title: "Openings"}), $i])
        })), tr = {name: "Contact", components: {ColumnTitle: ua}};
        n("b04d");
        tr.render = er, tr.__scopeId = "data-v-4b4802b4";
        var nr = tr, ar = [{path: "/", redirect: "/Home"}, {path: "/Home", name: "Home", component: ka}, {
                path: "/News",
                name: "News",
                component: wa
            }, {path: "/Research", name: "Research", component: Hi}, {
                path: "/Publications",
                name: "Publications",
                component: Ha
            }, {path: "/Members", name: "Members", component: Ni}, {
                path: "/Openings",
                name: "Openings",
                component: nr
            }, {path: "/Contact", name: "Contact", component: Ki}],
            or = Object(Fn["a"])({history: Object(Fn["b"])(), routes: ar}), ir = or,
            rr = Object(a["withScopeId"])("data-v-643016c6"), cr = rr((function (e, t, n, o, i, r) {
                return Object(a["openBlock"])(), Object(a["createBlock"])("svg", {
                    ref: "svg",
                    class: r.svgClass,
                    width: n.w,
                    height: n.h,
                    "aria-hidden": "true"
                }, [Object(a["createVNode"])("use", {"xlink:href": r.iconName}, null, 8, ["xlink:href"])], 10, ["width", "height"])
            })), ur = {
                name: "SvgIcon",
                props: {
                    iconClass: {type: String, required: !0},
                    className: {type: String, default: ""},
                    h: {type: Number, default: 100},
                    w: {type: Number, default: 100}
                },
                computed: {
                    iconName: function () {
                        return "#icon-".concat(this.iconClass)
                    }, svgClass: function () {
                        return this.className ? "svg-icon " + this.className : "svg-icon"
                    }
                }
            };
        n("bfd5");
        ur.render = cr, ur.__scopeId = "data-v-643016c6";
        var lr = ur, sr = Object(a["createApp"])(N);
        Jn(sr), sr.use(ir), sr.component("icon", lr);
        var dr = function (e) {
            return e.keys().map(e)
        }, hr = n("cfd9");
        dr(hr), sr.mount("#app"), console.log("Last update:20210907 22:01")
    }, "58d5": function (e, t, n) {
        e.exports = n.p + "img/Jifei Sun.jpg"
    }, "5c5c": function (e, t, n) {
    }, "5ef3": function (e, t, n) {
        "use strict";
        n("7762")
    }, "63d3": function (e, t, n) {
        "use strict";
        n("bfbb")
    }, "67ea": function (e, t, n) {
        e.exports = n.p + "img/Zihan Lin.jpg"
    }, "6bfc": function (e, t, n) {
        e.exports = n.p + "img/Dongsheng Liang.jpg"
    }, 7762: function (e, t, n) {
    }, "7adf": function (e, t, n) {
    }, "7d75": function (e, t, n) {
        e.exports = n.p + "img/Cover2.jpg"
    }, "7ec5": function (e, t, n) {
    }, "82ff": function (e, t, n) {
        "use strict";
        n("7ec5")
    }, 8917: function (e, t, n) {
    }, "8df7": function (e, t, n) {
        "use strict";
        n("e17c")
    }, "97f2": function (e, t, n) {
        e.exports = n.p + "img/Chunyue Shen.jpg"
    }, "99b3": function (e, t, n) {
        e.exports = n.p + "img/Taoli Jiang.jpg"
    }, "99da": function (e, t, n) {
        e.exports = n.p + "img/Cover1-group2020.jpg"
    }, "9c54": function (e, t, n) {
        e.exports = n.p + "img/Shuang Liu.jpg"
    }, "9f95": function (e, t, n) {
    }, a37c: function (e, t, n) {
        e.exports = n.p + "img/Zaichun Liu.jpg"
    }, a5f7: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e017"), o = n.n(a), i = n("21a1"), r = n.n(i), c = new o.a({
            id: "icon-logo",
            use: "icon-logo-usage",
            viewBox: "0 0 916 339",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="hidden" viewBox="0 0 916 339" id="icon-logo"><defs><clipPath id="icon-logo_clip0"><rect x="184" y="242" width="916" height="339" /></clipPath></defs><g clip-path="url(#icon-logo_clip0)" transform="translate(-184 -242)"><path d="M1016.5 359.836C894.395 362.7 878.383 247.098 836.782 248.513 793.199 248.406 782.326 455.019 655.286 455.428L548.686 456.556 296.5 457.5" stroke="#F2F2F2" stroke-width="10.72" stroke-linejoin="round" stroke-miterlimit="10" fill="none" fill-rule="evenodd" /><path d="M499.5 452.941C796.959 450.689 785.256 575.255 829.491 575.5 890.276 570.613 840.32 363.799 1018.5 359.5" stroke="#F2F2F2" stroke-width="10.72" stroke-linejoin="round" stroke-miterlimit="10" fill="none" fill-rule="evenodd" /><path d="M533.5 335.5 517.975 461.5 499.263 461.5 506.861 399.969 454.729 399.969 447.212 461.5 428.5 461.5 444.025 335.5 462.655 335.5 456.609 384.872 508.741 384.872 514.787 335.5 533.5 335.5Z" stroke="#F2F2F2" stroke-linejoin="round" stroke-miterlimit="10" fill="#FFFFFF" fill-rule="evenodd" /><path d="M628.5 335.5 626.388 352.882 580.338 352.882 576.358 385.525 622.409 385.525 620.46 401.683 574.408 401.683 569.211 444.118 615.261 444.118 613.068 461.5 548.5 461.5 563.932 335.5 628.5 335.5Z" stroke="#F2F2F2" stroke-linejoin="round" stroke-miterlimit="10" fill="#FFFFFF" fill-rule="evenodd" /><path d="M741.5 339.039 727.513 467.5 662.635 374.386 653.356 459.247 637.5 459.247 651.417 332.5 716.296 425.458 725.713 339.039 741.5 339.039Z" stroke="#F2F2F2" stroke-linejoin="round" stroke-miterlimit="10" fill="#FFFFFF" fill-rule="evenodd" /><path d="M413.5 346.377 410.588 365.969C399.502 355.137 386.176 349.613 370.611 349.399 356.893 349.211 345.736 353.612 337.138 362.603 328.485 371.541 324.044 383.285 323.815 397.836 323.601 411.444 327.521 422.126 335.575 429.88 343.575 437.581 354.993 441.533 369.83 441.737 382.204 441.907 393.178 438.498 402.752 431.511L399.646 452.749C387.655 456.72 376.509 458.635 366.206 458.493 347.393 458.234 332.336 452.452 321.033 441.145 309.729 429.944 304.222 415.157 304.511 396.785 304.806 378.047 311.153 362.586 323.554 350.401 336.009 338.217 351.504 332.253 370.037 332.508 384.651 332.709 399.138 337.332 413.5 346.377Z" stroke="#F2F2F2" stroke-linejoin="round" stroke-miterlimit="10" fill="#FFFFFF" fill-rule="evenodd" /><path d="M209 335C209 316.775 223.551 302 241.5 302 259.449 302 274 316.775 274 335 274 353.225 259.449 368 241.5 368 223.551 368 209 353.225 209 335Z" fill="#F2F2F2" fill-rule="evenodd" /><path d="M288 274C288 259.641 299.417 248 313.5 248 327.583 248 339 259.641 339 274 339 288.359 327.583 300 313.5 300 299.417 300 288 288.359 288 274Z" fill="#F2F2F2" fill-rule="evenodd" /><path d="M985 352C1020.34 356.025 1061 356.211 1099 358.317L985 366 985 352Z" fill="#F2F2F2" fill-rule="evenodd" /><path d="M0 113C1.22211 72.0039 4.7196 45.4357 4.96252 0 6.79829 45.9778 11.1026 71.3586 10.9982 113L0 113Z" fill="#F2F2F2" fill-rule="evenodd" transform="matrix(1.83697e-16 1 1 -1.83697e-16 185 451)" /></g></symbol>'
        });
        r.a.add(c);
        t["default"] = c
    }, a614: function (e, t, n) {
        e.exports = n.p + "img/Zhengxin Zhu.jpg"
    }, abf9: function (e, t, n) {
        e.exports = n.p + "img/Yuan Yuan.jpg"
    }, afd7: function (e, t, n) {
        e.exports = n.p + "img/Ruihao Luo.jpg"
    }, b04d: function (e, t, n) {
        "use strict";
        n("8917")
    }, b4ce: function (e, t, n) {
        e.exports = n.p + "img/Dr.Wei Chen.jpg"
    }, b6f7: function (e, t, n) {
        e.exports = n.p + "img/ustc.png"
    }, bdf3: function (e, t, n) {
        e.exports = n.p + "img/logo3.png"
    }, bfbb: function (e, t, n) {
    }, bfd5: function (e, t, n) {
        "use strict";
        n("3dfe")
    }, c344: function (e, t, n) {
        e.exports = n.p + "img/Zehui Xie.jpg"
    }, cc7a: function (e, t, n) {
        e.exports = n.p + "img/Yan Xu.jpg"
    }, cfd9: function (e, t, n) {
        var a = {"./logo.svg": "a5f7"};

        function o(e) {
            var t = i(e);
            return n(t)
        }

        function i(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return a[e]
        }

        o.keys = function () {
            return Object.keys(a)
        }, o.resolve = i, e.exports = o, o.id = "cfd9"
    }, d0ae: function (e, t, n) {
        "use strict";
        n("5c5c")
    }, df15: function (e, t, n) {
        "use strict";
        n("3932")
    }, e17c: function (e, t, n) {
    }, e51d: function (e, t, n) {
        e.exports = n.p + "img/Qia Peng.jpg"
    }, e9f6: function (e, t, n) {
        e.exports = n.p + "img/Jingchen Zhou.jpg"
    }, eb7d: function (e, t, n) {
        e.exports = n.p + "img/Weiping Wang.jpg"
    }, f134: function (e, t, n) {
        e.exports = n.p + "img/Fangwang Ming.jpg"
    }, f13f: function (e, t, n) {
        e.exports = n.p + "img/Na Chen.jpg"
    }, f1dc: function (e, t, n) {
        e.exports = n.p + "img/Touqeer Ahmad.jpg"
    }, f946: function (e, t, n) {
    }, f963: function (e, t, n) {
    }, fa29: function (e, t, n) {
        e.exports = n.p + "img/Yimin Li.jpg"
    }, fe89: function (e, t, n) {
        e.exports = n.p + "img/Kai Zheng.jpg"
    }, ffc7: function (e, t, n) {
        "use strict";
        n("5174")
    }
});
//# sourceMappingURL=index.js.map