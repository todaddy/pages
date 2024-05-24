(function(t) {
    function e(e) {
        for (var r, a, s = e[0], l = e[1], p = e[2], u = 0, d = []; u < s.length; u++) a = s[u], Object.prototype.hasOwnProperty.call(n, a) && n[a] && d.push(n[a][0]), n[a] = 0;
        for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (t[r] = l[r]);
        c && c(e);
        while (d.length) d.shift()();
        return o.push.apply(o, p || []), i()
    }

    function i() {
        for (var t, e = 0; e < o.length; e++) {
            for (var i = o[e], r = !0, s = 1; s < i.length; s++) {
                var l = i[s];
                0 !== n[l] && (r = !1)
            }
            r && (o.splice(e--, 1), t = a(a.s = i[0]))
        }
        return t
    }
    var r = {},
        n = {
            app: 0
        },
        o = [];

    function a(e) {
        if (r[e]) return r[e].exports;
        var i = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, a), i.l = !0, i.exports
    }
    a.m = t, a.c = r, a.d = function(t, e, i) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, a.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, a.t = function(t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (a.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var r in t) a.d(i, r, function(e) {
                return t[e]
            }.bind(null, r));
        return i
    }, a.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var p = 0; p < s.length; p++) e(s[p]);
    var c = l;
    o.push([0, "chunk-vendors"]), i()
})({
    0: function(t, e, i) {
        t.exports = i("56d7")
    },
    "0554": function(t, e, i) {
        var r = i("96a4");
        "string" === typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        var n = i("499e").default;
        n("17611838", r, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    5420: function(t, e, i) {
        var r = i("72ef");
        "string" === typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        var n = i("499e").default;
        n("29a35ad4", r, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "56d7": function(t, e, i) {
        "use strict";
        i.r(e);
        i("e260"), i("e6cf"), i("cca6"), i("a79d");
        var r = i("2b0e"),
            n = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    attrs: {
                        id: "app"
                    }
                }, [r("div", {
                    staticClass: "big-wheel-box"
                }, [r("big-wheel", {
                    ref: "bigWheel",
                    attrs: {
                        width: "3rem",
                        height: "3rem",
                        prizeList: t.prizeList
                    },
                    on: {
                        over: t.over
                    },
                    scopedSlots: t._u([{
                        key: "item",
                        fn: function(e) {
                            var i = e.item;
                            return [r("div", {
                                staticClass: "prize-name"
                            }, [t._v(t._s(i.txt))])]
                        }
                    }])
                }), r("img", {
                    staticClass: "btn-go",
                    attrs: {
                        src: i("dded")
                    },
                    on: {
                        click: t.go
                    }
                })], 1)])
            },
            o = [],
            a = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    ref: "bigWheel",
                    staticClass: "__big-wheel",
                    style: {
                        width: t.width,
                        height: t.height
                    }
                }, [i("div", {
                    staticClass: "wrap",
                    style: {
                        transform: t.rotateAngle,
                        transition: t.rotateTransition
                    }
                }, [i("canvas", {
                    ref: "canvas",
                    attrs: {
                        id: "canvas"
                    }
                }, [t._v("浏览器版本过低")]), i("div", {
                    staticClass: "prize-wrap"
                }, t._l(t.prizeList, (function(e, r) {
                    return i("div", {
                        key: r,
                        staticClass: "item",
                        style: t._calcRotateAngle(r)
                    }, [t._t("item", null, {
                        item: e
                    })], 2)
                })), 0)])])
            },
            s = [],
            l = (i("cb29"), i("a9e3"), {
                name: "BigWheel",
                props: {
                    prizeList: {
                        type: Array,
                        required: !0
                    },
                    width: {
                        required: !0
                    },
                    height: {
                        required: !0
                    },
                    prizeBgColors: {
                        type: Array,
                        default: function() {
                            return ["#F47F45", "#FFA468"]
                        }
                    },
                    borderColor: {
                        type: String,
                        default: "#ff9800"
                    },
                    turnsNumber: {
                        type: Number,
                        default: 5
                    },
                    turnsTime: {
                        type: Number,
                        default: 5
                    }
                },
                data: function() {
                    return {
                        startRotateDegree: 0,
                        rotateAngle: "rotate(30deg)",
                        rotateTransition: ""
                    }
                },
                methods: {
                    init: function() {
                        var t = this.prizeList.length,
                            e = this.prizeBgColors,
                            i = this.borderColor,
                            r = this.$refs.canvas,
                            n = r.getContext("2d"),
                            o = this.$refs.canvas.width = this.$refs.bigWheel.clientWidth,
                            a = this.$refs.canvas.height = this.$refs.bigWheel.clientHeight;
                        n.translate(0, a), n.rotate(-90 * Math.PI / 180);
                        var s = o / 2 - 1,
                            l = 0,
                            p = 2 * Math.PI / t;
                        n.clearRect(0, 0, o, a), n.strokeStyle = i;
                        for (var c = -1, u = 0; u < t; u++) {
                            var d = u * p;
                            c++, n.fillStyle = e[c], c === e.length - 1 && (c = -1), n.beginPath(), n.arc(.5 * o, .5 * a, s, d, d + p, !1), n.arc(.5 * o, .5 * a, l, d + p, d, !0), n.stroke(), n.fill(), n.save()
                        }
                    },
                    rotate: function(t) {
                        var e = this,
                            i = this.turnsTime,
                            r = this.startRotateDegree + 360 * this.turnsNumber + 360 - (180 / this.prizeList.length + 360 / this.prizeList.length * t) - this.startRotateDegree % 360;
                        this.startRotateDegree = r, this.rotateAngle = "rotate(".concat(r, "deg)"), this.rotateTransition = "transform ".concat(i, "s cubic-bezier(0.250, 0.460, 0.455, 0.995)"), setTimeout((function() {
                            e.$emit("over", e.prizeList[t])
                        }), 1e3 * i + 500)
                    },
                    _calcRotateAngle: function(t) {
                        var e = 360 / this.prizeList.length * t + 180 / this.prizeList.length;
                        return {
                            transform: "rotate(".concat(e, "deg)")
                        }
                    }
                },
                mounted: function() {
                    this.init()
                }
            }),
            p = l,
            c = (i("738d"), i("2877")),
            u = Object(c["a"])(p, a, s, !1, null, "0d3c41f1", null),
            d = u.exports,
            f = d,
            h = {
                name: "App",
                data: function() {
                    return {
                        prizeList: [{
                            txt: "你真棒！"
                        }, {
                            txt: "动画片"
                        }, {
                            txt: "零食"
                        }, {
                            txt: "小礼品"
                        }, {
                            txt: "2元钱"
                        }, {
                            txt: "考试+2分"
                        }, {
                            txt: "买画本"
                        }, {
                            txt: "万能"
                        }, {
                            txt: "去旅行"
                        }, {
                            txt: "免作业券"
                        }],
                        valve: !1
                    }
                },
                methods: {
                    go: function() {
                        if (!this.valve) {
                            this.valve = !0;
                            var t = Math.floor(Math.random() * this.prizeList.length);
                            this.winningIndex = t, this.$refs.bigWheel.rotate(t)
                        }
                    },
                    over: function(t) {
                        this.valve = !1
                    }
                },
                components: {
                    BigWheel: f
                }
            },
            b = h,
            g = (i("5c0b"), Object(c["a"])(b, n, o, !1, null, null, null)),
            m = g.exports;
        i("9536");
        r["a"].config.productionTip = !1, new r["a"]({
            render: function(t) {
                return t(m)
            }
        }).$mount("#app")
    },
    "5c0b": function(t, e, i) {
        "use strict";
        var r = i("0554"),
            n = i.n(r);
        n.a
    },
    "62ff": function(t, e, i) {
        var r = i("24fb");
        e = r(!1), e.push([t.i, "a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,button,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,html,i,iframe,img,input,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font-weight:400;vertical-align:initial}article,aside,details,figcaption,figure,footer,header,menu,nav,section{display:block}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0);font-family:Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;line-height:1.425;color:#333;background:#fff}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:none}table{border-collapse:collapse;border-spacing:0}caption,td,th{font-weight:400;vertical-align:middle}i{font-style:normal}a{text-decoration:none;background:transparent}ol,ul{list-style:none}button,input[type=email],input[type=number],input[type=password],input[type=search],input[type=text],select,textarea{margin:0;font-family:inherit;-webkit-appearance:none}input{-webkit-appearance:none}input::-webkit-search-cancel-button{display:none}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#dbdbdb}*{box-sizing:border-box}html{font-size:26.66667vw}", ""]), t.exports = e
    },
    "72ef": function(t, e, i) {
        var r = i("24fb");
        e = r(!1), e.push([t.i, ".__big-wheel[data-v-0d3c41f1]{position:relative;display:inline-block}.__big-wheel .wrap[data-v-0d3c41f1]{position:absolute;width:100%;height:100%}.__big-wheel .wrap .prize-wrap[data-v-0d3c41f1]{position:absolute;left:25%;top:0;width:50%;height:50%}.__big-wheel .wrap .prize-wrap .item[data-v-0d3c41f1]{position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform-origin:center bottom;transform-origin:center bottom}", ""]), t.exports = e
    },
    "738d": function(t, e, i) {
        "use strict";
        var r = i("5420"),
            n = i.n(r);
        n.a
    },
    9536: function(t, e, i) {
        var r = i("62ff");
        "string" === typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        var n = i("499e").default;
        n("aaa1176e", r, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "96a4": function(t, e, i) {
        var r = i("24fb"),
            n = i("1de5"),
            o = i("9b3b"),
            a = i("d1c1");
        e = r(!1);
        var s = n(o),
            l = n(a);
        e.push([t.i, "#app{position:relative;overflow:hidden;width:100vw;min-height:100vh;background-image:url(" + s + ");background-position:top}#app,#app .big-wheel-box{background-repeat:no-repeat;background-size:100%}#app .big-wheel-box{position:absolute;top:1.7rem;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);text-align:center;font-size:0;background-image:url(" + l + ");background-position:50%;padding:.22rem}#app .big-wheel-box .prize-name{position:absolute;left:.13rem;right:.13rem;top:.2rem;font-size:.14rem;text-align:center;color:#7d2a00}#app .big-wheel-box .prize-img{top:.58rem;width:.3rem;height:.3rem}#app .big-wheel-box .btn-go,#app .big-wheel-box .prize-img{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}#app .big-wheel-box .btn-go{top:1.19rem;width:.8rem}", ""]), t.exports = e
    },
    "9b3b": function(t, e, i) {
        t.exports = i.p + "img/wheel_bg.508927d2.jpg"
    },
    d1c1: function(t, e, i) {
        t.exports = i.p + "img/disk_bg.db061343.png"
    },
    dded: function(t, e, i) {
        t.exports = i.p + "img/go.b819b1a3.png"
    }
});
//# sourceMappingURL=app.4675d847.js.map