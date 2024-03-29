!function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";

    function i(t, e) {
        e = e || J;
        var i = e.createElement("script");
        i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
    }

    function n(t) {
        var e = !!t && "length" in t && t.length, i = dt.type(t);
        return "function" !== i && !dt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function o(t, e, i) {
        if (dt.isFunction(e)) return dt.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return dt.grep(t, function (t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (xt.test(e)) return dt.filter(e, t, i);
            e = dt.filter(e, t)
        }
        return dt.grep(t, function (t) {
            return ot.call(e, t) > -1 !== i && 1 === t.nodeType
        })
    }

    function r(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) ;
        return t
    }

    function s(t) {
        var e = {};
        return dt.each(t.match(Pt) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function a(t) {
        return t
    }

    function l(t) {
        throw t
    }

    function u(t, e, i) {
        var n;
        try {
            t && dt.isFunction(n = t.promise) ? n.call(t).done(e).fail(i) : t && dt.isFunction(n = t.then) ? n.call(t, e, i) : e.call(void 0, t)
        } catch (t) {
            i.call(void 0, t)
        }
    }

    function c() {
        J.removeEventListener("DOMContentLoaded", c), t.removeEventListener("load", c), dt.ready()
    }

    function h() {
        this.expando = dt.expando + h.uid++
    }

    function d(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType) if (n = "data-" + e.replace(Mt, "-$&").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
            try {
                i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Rt.test(i) ? JSON.parse(i) : i)
            } catch (o) {
            }
            Dt.set(t, e, i)
        } else i = void 0;
        return i
    }

    function p(t, e, i, n) {
        var o, r = 1, s = 20, a = n ? function () {
            return n.cur()
        } : function () {
            return dt.css(t, e, "")
        }, l = a(), u = i && i[3] || (dt.cssNumber[e] ? "" : "px"), c = (dt.cssNumber[e] || "px" !== u && +l) && Nt.exec(dt.css(t, e));
        if (c && c[3] !== u) {
            u = u || c[3], i = i || [], c = +l || 1;
            do r = r || ".5", c /= r, dt.style(t, e, c + u); while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return i && (c = +c || +l || 0, o = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = c, n.end = o)), o
    }

    function f(t) {
        var e, i = t.ownerDocument, n = t.nodeName, o = Ht[n];
        return o ? o : (e = i.body.appendChild(i.createElement(n)), o = dt.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), Ht[n] = o, o)
    }

    function m(t, e) {
        for (var i, n, o = [], r = 0, s = t.length; r < s; r++) n = t[r], n.style && (i = n.style.display, e ? ("none" === i && (o[r] = It.get(n, "display") || null, o[r] || (n.style.display = "")), "" === n.style.display && Ft(n) && (o[r] = f(n))) : "none" !== i && (o[r] = "none", It.set(n, "display", i)));
        for (r = 0; r < s; r++) null != o[r] && (t[r].style.display = o[r]);
        return t
    }

    function g(t, e) {
        var i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && dt.nodeName(t, e) ? dt.merge([t], i) : i
    }

    function v(t, e) {
        for (var i = 0, n = t.length; i < n; i++) It.set(t[i], "globalEval", !e || It.get(e[i], "globalEval"))
    }

    function y(t, e, i, n, o) {
        for (var r, s, a, l, u, c, h = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++) if (r = t[p], r || 0 === r) if ("object" === dt.type(r)) dt.merge(d, r.nodeType ? [r] : r); else if (Yt.test(r)) {
            for (s = s || h.appendChild(e.createElement("div")), a = (Bt.exec(r) || ["", ""])[1].toLowerCase(), l = Xt[a] || Xt._default, s.innerHTML = l[1] + dt.htmlPrefilter(r) + l[2], c = l[0]; c--;) s = s.lastChild;
            dt.merge(d, s.childNodes), s = h.firstChild, s.textContent = ""
        } else d.push(e.createTextNode(r));
        for (h.textContent = "", p = 0; r = d[p++];) if (n && dt.inArray(r, n) > -1) o && o.push(r); else if (u = dt.contains(r.ownerDocument, r), s = g(h.appendChild(r), "script"), u && v(s), i) for (c = 0; r = s[c++];) Ut.test(r.type || "") && i.push(r);
        return h
    }

    function _() {
        return !0
    }

    function b() {
        return !1
    }

    function w() {
        try {
            return J.activeElement
        } catch (t) {
        }
    }

    function x(t, e, i, n, o, r) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in e) x(t, a, i, n, e[a], r);
            return t
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), o === !1) o = b; else if (!o) return t;
        return 1 === r && (s = o, o = function (t) {
            return dt().off(t), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = dt.guid++)), t.each(function () {
            dt.event.add(this, e, o, n, i)
        })
    }

    function T(t, e) {
        return dt.nodeName(t, "table") && dt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
    }

    function S(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function C(t) {
        var e = ee.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function k(t, e) {
        var i, n, o, r, s, a, l, u;
        if (1 === e.nodeType) {
            if (It.hasData(t) && (r = It.access(t), s = It.set(e, r), u = r.events)) {
                delete s.handle, s.events = {};
                for (o in u) for (i = 0, n = u[o].length; i < n; i++) dt.event.add(e, o, u[o][i])
            }
            Dt.hasData(t) && (a = Dt.access(t), l = dt.extend({}, a), Dt.set(e, l))
        }
    }

    function E(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && Wt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }

    function P(t, e, n, o) {
        e = it.apply([], e);
        var r, s, a, l, u, c, h = 0, d = t.length, p = d - 1, f = e[0], m = dt.isFunction(f);
        if (m || d > 1 && "string" == typeof f && !ct.checkClone && te.test(f)) return t.each(function (i) {
            var r = t.eq(i);
            m && (e[0] = f.call(this, i, r.html())), P(r, e, n, o)
        });
        if (d && (r = y(e, t[0].ownerDocument, !1, t, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
            for (a = dt.map(g(r, "script"), S), l = a.length; h < d; h++) u = r, h !== p && (u = dt.clone(u, !0, !0), l && dt.merge(a, g(u, "script"))), n.call(t[h], u, h);
            if (l) for (c = a[a.length - 1].ownerDocument, dt.map(a, C), h = 0; h < l; h++) u = a[h], Ut.test(u.type || "") && !It.access(u, "globalEval") && dt.contains(c, u) && (u.src ? dt._evalUrl && dt._evalUrl(u.src) : i(u.textContent.replace(ie, ""), c))
        }
        return t
    }

    function A(t, e, i) {
        for (var n, o = e ? dt.filter(e, t) : t, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || dt.cleanData(g(n)), n.parentNode && (i && dt.contains(n.ownerDocument, n) && v(g(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    function L(t, e, i) {
        var n, o, r, s, a = t.style;
        return i = i || re(t), i && (s = i.getPropertyValue(e) || i[e], "" !== s || dt.contains(t.ownerDocument, t) || (s = dt.style(t, e)), !ct.pixelMarginRight() && oe.test(s) && ne.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function z(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function O(t) {
        if (t in ce) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = ue.length; i--;) if (t = ue[i] + e, t in ce) return t
    }

    function I(t, e, i) {
        var n = Nt.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function D(t, e, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; r < 4; r += 2) "margin" === i && (s += dt.css(t, i + qt[r], !0, o)), n ? ("content" === i && (s -= dt.css(t, "padding" + qt[r], !0, o)), "margin" !== i && (s -= dt.css(t, "border" + qt[r] + "Width", !0, o))) : (s += dt.css(t, "padding" + qt[r], !0, o), "padding" !== i && (s += dt.css(t, "border" + qt[r] + "Width", !0, o)));
        return s
    }

    function R(t, e, i) {
        var n, o = !0, r = re(t), s = "border-box" === dt.css(t, "boxSizing", !1, r);
        if (t.getClientRects().length && (n = t.getBoundingClientRect()[e]), n <= 0 || null == n) {
            if (n = L(t, e, r), (n < 0 || null == n) && (n = t.style[e]), oe.test(n)) return n;
            o = s && (ct.boxSizingReliable() || n === t.style[e]), n = parseFloat(n) || 0
        }
        return n + D(t, e, i || (s ? "border" : "content"), o, r) + "px"
    }

    function M(t, e, i, n, o) {
        return new M.prototype.init(t, e, i, n, o)
    }

    function j() {
        de && (t.requestAnimationFrame(j), dt.fx.tick())
    }

    function N() {
        return t.setTimeout(function () {
            he = void 0
        }), he = dt.now()
    }

    function q(t, e) {
        var i, n = 0, o = {height: t};
        for (e = e ? 1 : 0; n < 4; n += 2 - e) i = qt[n], o["margin" + i] = o["padding" + i] = t;
        return e && (o.opacity = o.width = t), o
    }

    function F(t, e, i) {
        for (var n, o = (W.tweeners[e] || []).concat(W.tweeners["*"]), r = 0, s = o.length; r < s; r++) if (n = o[r].call(i, e, t)) return n
    }

    function $(t, e, i) {
        var n, o, r, s, a, l, u, c, h = "width" in e || "height" in e, d = this, p = {}, f = t.style, g = t.nodeType && Ft(t), v = It.get(t, "fxshow");
        i.queue || (s = dt._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
            s.unqueued || a()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, dt.queue(t, "fx").length || s.empty.fire()
            })
        }));
        for (n in e) if (o = e[n], pe.test(o)) {
            if (delete e[n], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                if ("show" !== o || !v || void 0 === v[n]) continue;
                g = !0
            }
            p[n] = v && v[n] || dt.style(t, n)
        }
        if (l = !dt.isEmptyObject(e), l || !dt.isEmptyObject(p)) {
            h && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], u = v && v.display, null == u && (u = It.get(t, "display")), c = dt.css(t, "display"), "none" === c && (u ? c = u : (m([t], !0), u = t.style.display || u, c = dt.css(t, "display"), m([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === dt.css(t, "float") && (l || (d.done(function () {
                f.display = u
            }), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function () {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
            })), l = !1;
            for (n in p) l || (v ? "hidden" in v && (g = v.hidden) : v = It.access(t, "fxshow", {display: u}), r && (v.hidden = !g), g && m([t], !0), d.done(function () {
                g || m([t]), It.remove(t, "fxshow");
                for (n in p) dt.style(t, n, p[n])
            })), l = F(g ? v[n] : 0, n, d), n in v || (v[n] = l.start, g && (l.end = l.start, l.start = 0))
        }
    }

    function H(t, e) {
        var i, n, o, r, s;
        for (i in t) if (n = dt.camelCase(i), o = e[n], r = t[i], dt.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), s = dt.cssHooks[n], s && "expand" in s) {
            r = s.expand(r), delete t[n];
            for (i in r) i in t || (t[i] = r[i], e[i] = o)
        } else e[n] = o
    }

    function W(t, e, i) {
        var n, o, r = 0, s = W.prefilters.length, a = dt.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (o) return !1;
            for (var e = he || N(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, r = 1 - n, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(r);
            return a.notifyWith(t, [u, r, i]), r < 1 && l ? i : (a.resolveWith(t, [u]), !1)
        }, u = a.promise({
            elem: t, props: dt.extend({}, e), opts: dt.extend(!0, {specialEasing: {}, easing: dt.easing._default}, i), originalProperties: e, originalOptions: i, startTime: he || N(), duration: i.duration, tweens: [], createTween: function (e, i) {
                var n = dt.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n), n
            }, stop: function (e) {
                var i = 0, n = e ? u.tweens.length : 0;
                if (o) return this;
                for (o = !0; i < n; i++) u.tweens[i].run(1);
                return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
            }
        }), c = u.props;
        for (H(c, u.opts.specialEasing); r < s; r++) if (n = W.prefilters[r].call(u, t, c, u.opts)) return dt.isFunction(n.stop) && (dt._queueHooks(u.elem, u.opts.queue).stop = dt.proxy(n.stop, n)), n;
        return dt.map(c, F, u), dt.isFunction(u.opts.start) && u.opts.start.call(t, u), dt.fx.timer(dt.extend(l, {elem: t, anim: u, queue: u.opts.queue})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function B(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function U(t, e, i, n) {
        var o;
        if (dt.isArray(e)) dt.each(e, function (e, o) {
            i || ke.test(t) ? n(t, o) : U(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
        }); else if (i || "object" !== dt.type(e)) n(t, e); else for (o in e) U(t + "[" + o + "]", e[o], i, n)
    }

    function X(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, o = 0, r = e.toLowerCase().match(Pt) || [];
            if (dt.isFunction(i)) for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function Y(t, e, i, n) {
        function o(a) {
            var l;
            return r[a] = !0, dt.each(t[a] || [], function (t, a) {
                var u = a(e, i, n);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
            }), l
        }

        var r = {}, s = t === Ne;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function V(t, e) {
        var i, n, o = dt.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && dt.extend(!0, t, n), t
    }

    function Q(t, e, i) {
        for (var n, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n) for (o in a) if (a[o] && a[o].test(n)) {
            l.unshift(o);
            break
        }
        if (l[0] in i) r = l[0]; else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r) return r !== l[0] && l.unshift(r), i[r]
    }

    function G(t, e, i, n) {
        var o, r, s, a, l, u = {}, c = t.dataTypes.slice();
        if (c[1]) for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
        for (r = c.shift(); r;) if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
            if (s = u[l + " " + r] || u["* " + r], !s) for (o in u) if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0) if (s && t["throws"]) e = s(e); else try {
                e = s(e)
            } catch (h) {
                return {state: "parsererror", error: s ? h : "No conversion from " + l + " to " + r}
            }
        }
        return {state: "success", data: e}
    }

    function Z(t) {
        return dt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }

    var K = [], J = t.document, tt = Object.getPrototypeOf, et = K.slice, it = K.concat, nt = K.push, ot = K.indexOf, rt = {}, st = rt.toString, at = rt.hasOwnProperty, lt = at.toString, ut = lt.call(Object), ct = {}, ht = "3.1.0", dt = function (t, e) {
        return new dt.fn.init(t, e)
    }, pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ft = /^-ms-/, mt = /-([a-z])/g, gt = function (t, e) {
        return e.toUpperCase()
    };
    dt.fn = dt.prototype = {
        jquery: ht, constructor: dt, length: 0, toArray: function () {
            return et.call(this)
        }, get: function (t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : et.call(this)
        }, pushStack: function (t) {
            var e = dt.merge(this.constructor(), t);
            return e.prevObject = this, e
        }, each: function (t) {
            return dt.each(this, t)
        }, map: function (t) {
            return this.pushStack(dt.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        }, slice: function () {
            return this.pushStack(et.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: nt, sort: K.sort, splice: K.splice
    }, dt.extend = dt.fn.extend = function () {
        var t, e, i, n, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || dt.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) i = s[e], n = t[e], s !== n && (u && n && (dt.isPlainObject(n) || (o = dt.isArray(n))) ? (o ? (o = !1, r = i && dt.isArray(i) ? i : []) : r = i && dt.isPlainObject(i) ? i : {}, s[e] = dt.extend(u, r, n)) : void 0 !== n && (s[e] = n));
        return s
    }, dt.extend({
        expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === dt.type(t)
        }, isArray: Array.isArray, isWindow: function (t) {
            return null != t && t === t.window
        }, isNumeric: function (t) {
            var e = dt.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, isPlainObject: function (t) {
            var e, i;
            return !(!t || "[object Object]" !== st.call(t) || (e = tt(t)) && (i = at.call(e, "constructor") && e.constructor, "function" != typeof i || lt.call(i) !== ut))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? rt[st.call(t)] || "object" : typeof t
        }, globalEval: function (t) {
            i(t)
        }, camelCase: function (t) {
            return t.replace(ft, "ms-").replace(mt, gt)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e) {
            var i, o = 0;
            if (n(t)) for (i = t.length; o < i && e.call(t[o], o, t[o]) !== !1; o++) ; else for (o in t) if (e.call(t[o], o, t[o]) === !1) break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(pt, "")
        }, makeArray: function (t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? dt.merge(i, "string" == typeof t ? [t] : t) : nt.call(i, t)), i
        }, inArray: function (t, e, i) {
            return null == e ? -1 : ot.call(e, t, i)
        }, merge: function (t, e) {
            for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
            return t.length = o, t
        }, grep: function (t, e, i) {
            for (var n, o = [], r = 0, s = t.length, a = !i; r < s; r++) n = !e(t[r], r), n !== a && o.push(t[r]);
            return o
        }, map: function (t, e, i) {
            var o, r, s = 0, a = [];
            if (n(t)) for (o = t.length; s < o; s++) r = e(t[s], s, i), null != r && a.push(r); else for (s in t) r = e(t[s], s, i), null != r && a.push(r);
            return it.apply([], a)
        }, guid: 1, proxy: function (t, e) {
            var i, n, o;
            if ("string" == typeof e && (i = t[e], e = t, t = i), dt.isFunction(t)) return n = et.call(arguments, 2), o = function () {
                return t.apply(e || this, n.concat(et.call(arguments)))
            }, o.guid = t.guid = t.guid || dt.guid++, o
        }, now: Date.now, support: ct
    }), "function" == typeof Symbol && (dt.fn[Symbol.iterator] = K[Symbol.iterator]), dt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        rt["[object " + e + "]"] = e.toLowerCase()
    });
    var vt = function (t) {
        function e(t, e, i, n) {
            var o, r, s, a, l, u, c, d = e && e.ownerDocument, f = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return i;
            if (!n && ((e ? e.ownerDocument || e : $) !== I && O(e), e = e || I, R)) {
                if (11 !== f && (l = vt.exec(t))) if (o = l[1]) {
                    if (9 === f) {
                        if (!(s = e.getElementById(o))) return i;
                        if (s.id === o) return i.push(s), i
                    } else if (d && (s = d.getElementById(o)) && q(e, s) && s.id === o) return i.push(s), i
                } else {
                    if (l[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                    if ((o = l[3]) && x.getElementsByClassName && e.getElementsByClassName) return K.apply(i, e.getElementsByClassName(o)), i
                }
                if (x.qsa && !X[t + " "] && (!M || !M.test(t))) {
                    if (1 !== f) d = e, c = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(wt, xt) : e.setAttribute("id", a = F), u = k(t), r = u.length; r--;) u[r] = "#" + a + " " + p(u[r]);
                        c = u.join(","), d = yt.test(t) && h(e.parentNode) || e
                    }
                    if (c) try {
                        return K.apply(i, d.querySelectorAll(c)), i
                    } catch (m) {
                    } finally {
                        a === F && e.removeAttribute("id")
                    }
                }
            }
            return P(t.replace(at, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > T.cacheLength && delete t[e.shift()], t[i + " "] = n
            }

            var e = [];
            return t
        }

        function n(t) {
            return t[F] = !0, t
        }

        function o(t) {
            var e = I.createElement("fieldset");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) T.attrHandle[i[n]] = e
        }

        function s(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i) for (; i = i.nextSibling;) if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function u(t) {
            return function (e) {
                return "label" in e && e.disabled === t || "form" in e && e.disabled === t || "form" in e && e.disabled === !1 && (e.isDisabled === t || e.isDisabled !== !t && ("label" in e || !St(e)) !== t)
            }
        }

        function c(t) {
            return n(function (e) {
                return e = +e, n(function (i, n) {
                    for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function h(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function d() {
        }

        function p(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function f(t, e, i) {
            var n = e.dir, o = e.next, r = o || n, s = i && "parentNode" === r, a = W++;
            return e.first ? function (e, i, o) {
                for (; e = e[n];) if (1 === e.nodeType || s) return t(e, i, o)
            } : function (e, i, l) {
                var u, c, h, d = [H, a];
                if (l) {
                    for (; e = e[n];) if ((1 === e.nodeType || s) && t(e, i, l)) return !0
                } else for (; e = e[n];) if (1 === e.nodeType || s) if (h = e[F] || (e[F] = {}), c = h[e.uniqueID] || (h[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[n] || e; else {
                    if ((u = c[r]) && u[0] === H && u[1] === a) return d[2] = u[2];
                    if (c[r] = d, d[2] = t(e, i, l)) return !0
                }
            }
        }

        function m(t) {
            return t.length > 1 ? function (e, i, n) {
                for (var o = t.length; o--;) if (!t[o](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function g(t, i, n) {
            for (var o = 0, r = i.length; o < r; o++) e(t, i[o], n);
            return n
        }

        function v(t, e, i, n, o) {
            for (var r, s = [], a = 0, l = t.length, u = null != e; a < l; a++) (r = t[a]) && (i && !i(r, n, o) || (s.push(r), u && e.push(a)));
            return s
        }

        function y(t, e, i, o, r, s) {
            return o && !o[F] && (o = y(o)), r && !r[F] && (r = y(r, s)), n(function (n, s, a, l) {
                var u, c, h, d = [], p = [], f = s.length, m = n || g(e || "*", a.nodeType ? [a] : a, []), y = !t || !n && e ? m : v(m, d, t, a, l), _ = i ? r || (n ? t : f || o) ? [] : s : y;
                if (i && i(y, _, a, l), o) for (u = v(_, p), o(u, [], a, l), c = u.length; c--;) (h = u[c]) && (_[p[c]] = !(y[p[c]] = h));
                if (n) {
                    if (r || t) {
                        if (r) {
                            for (u = [], c = _.length; c--;) (h = _[c]) && u.push(y[c] = h);
                            r(null, _ = [], u, l)
                        }
                        for (c = _.length; c--;) (h = _[c]) && (u = r ? tt(n, h) : d[c]) > -1 && (n[u] = !(s[u] = h))
                    }
                } else _ = v(_ === s ? _.splice(f, _.length) : _), r ? r(null, s, _, l) : K.apply(s, _)
            })
        }

        function _(t) {
            for (var e, i, n, o = t.length, r = T.relative[t[0].type], s = r || T.relative[" "], a = r ? 1 : 0, l = f(function (t) {
                return t === e
            }, s, !0), u = f(function (t) {
                return tt(e, t) > -1
            }, s, !0), c = [function (t, i, n) {
                var o = !r && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                return e = null, o
            }]; a < o; a++) if (i = T.relative[t[a].type]) c = [f(m(c), i)]; else {
                if (i = T.filter[t[a].type].apply(null, t[a].matches), i[F]) {
                    for (n = ++a; n < o && !T.relative[t[n].type]; n++) ;
                    return y(a > 1 && m(c), a > 1 && p(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(at, "$1"), i, a < n && _(t.slice(a, n)), n < o && _(t = t.slice(n)), n < o && p(t))
                }
                c.push(i)
            }
            return m(c)
        }

        function b(t, i) {
            var o = i.length > 0, r = t.length > 0, s = function (n, s, a, l, u) {
                var c, h, d, p = 0, f = "0", m = n && [], g = [], y = A, _ = n || r && T.find.TAG("*", u), b = H += null == y ? 1 : Math.random() || .1, w = _.length;
                for (u && (A = s === I || s || u); f !== w && null != (c = _[f]); f++) {
                    if (r && c) {
                        for (h = 0, s || c.ownerDocument === I || (O(c), a = !R); d = t[h++];) if (d(c, s || I, a)) {
                            l.push(c);
                            break
                        }
                        u && (H = b)
                    }
                    o && ((c = !d && c) && p--, n && m.push(c))
                }
                if (p += f, o && f !== p) {
                    for (h = 0; d = i[h++];) d(m, g, s, a);
                    if (n) {
                        if (p > 0) for (; f--;) m[f] || g[f] || (g[f] = G.call(l));
                        g = v(g)
                    }
                    K.apply(l, g), u && !n && g.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                }
                return u && (H = b, A = y), m
            };
            return o ? n(s) : s
        }

        var w, x, T, S, C, k, E, P, A, L, z, O, I, D, R, M, j, N, q, F = "sizzle" + 1 * new Date, $ = t.document, H = 0, W = 0, B = i(), U = i(), X = i(), Y = function (t, e) {
                return t === e && (z = !0), 0
            }, V = {}.hasOwnProperty, Q = [], G = Q.pop, Z = Q.push, K = Q.push, J = Q.slice, tt = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                return -1
            }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", it = "[\\x20\\t\\r\\n\\f]", nt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]", rt = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            st = new RegExp(it + "+", "g"), at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"), lt = new RegExp("^" + it + "*," + it + "*"), ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"), ct = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"), ht = new RegExp(rt), dt = new RegExp("^" + nt + "$"), pt = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt + "|[*])"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + rt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            }, ft = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, gt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, _t = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), bt = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, xt = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, Tt = function () {
                O()
            }, St = f(function (t) {
                return t.disabled === !0
            }, {dir: "parentNode", next: "legend"});
        try {
            K.apply(Q = J.call($.childNodes), $.childNodes), Q[$.childNodes.length].nodeType
        } catch (Ct) {
            K = {
                apply: Q.length ? function (t, e) {
                    Z.apply(t, J.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];) ;
                    t.length = i - 1
                }
            }
        }
        x = e.support = {}, C = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, O = e.setDocument = function (t) {
            var e, i, n = t ? t.ownerDocument || t : $;
            return n !== I && 9 === n.nodeType && n.documentElement ? (I = n, D = I.documentElement, R = !C(I), $ !== I && (i = I.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), x.attributes = o(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = o(function (t) {
                return t.appendChild(I.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = gt.test(I.getElementsByClassName), x.getById = o(function (t) {
                return D.appendChild(t).id = F, !I.getElementsByName || !I.getElementsByName(F).length
            }), x.getById ? (T.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && R) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }, T.filter.ID = function (t) {
                var e = t.replace(_t, bt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete T.find.ID, T.filter.ID = function (t) {
                var e = t.replace(_t, bt);
                return function (t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), T.find.TAG = x.getElementsByTagName ? function (t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var i, n = [], o = 0, r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }, T.find.CLASS = x.getElementsByClassName && function (t, e) {
                if ("undefined" != typeof e.getElementsByClassName && R) return e.getElementsByClassName(t)
            }, j = [], M = [], (x.qsa = gt.test(I.querySelectorAll)) && (o(function (t) {
                D.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || M.push(".#.+[+~]")
            }), o(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = I.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + it + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && M.push(":enabled", ":disabled"), D.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
            })), (x.matchesSelector = gt.test(N = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function (t) {
                x.disconnectedMatch = N.call(t, "*"), N.call(t, "[s!='']:x"), j.push("!=", rt)
            }), M = M.length && new RegExp(M.join("|")), j = j.length && new RegExp(j.join("|")), e = gt.test(D.compareDocumentPosition), q = e || gt.test(D.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function (t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return !0;
                return !1
            }, Y = e ? function (t, e) {
                if (t === e) return z = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === I || t.ownerDocument === $ && q($, t) ? -1 : e === I || e.ownerDocument === $ && q($, e) ? 1 : L ? tt(L, t) - tt(L, e) : 0 : 4 & i ? -1 : 1)
            } : function (t, e) {
                if (t === e) return z = !0, 0;
                var i, n = 0, o = t.parentNode, r = e.parentNode, a = [t], l = [e];
                if (!o || !r) return t === I ? -1 : e === I ? 1 : o ? -1 : r ? 1 : L ? tt(L, t) - tt(L, e) : 0;
                if (o === r) return s(t, e);
                for (i = t; i = i.parentNode;) a.unshift(i);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (; a[n] === l[n];) n++;
                return n ? s(a[n], l[n]) : a[n] === $ ? -1 : l[n] === $ ? 1 : 0
            }, I) : I
        }, e.matches = function (t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function (t, i) {
            if ((t.ownerDocument || t) !== I && O(t), i = i.replace(ct, "='$1']"), x.matchesSelector && R && !X[i + " "] && (!j || !j.test(i)) && (!M || !M.test(i))) try {
                var n = N.call(t, i);
                if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (o) {
            }
            return e(i, I, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== I && O(t), q(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== I && O(t);
            var i = T.attrHandle[e.toLowerCase()], n = i && V.call(T.attrHandle, e.toLowerCase()) ? i(t, e, !R) : void 0;
            return void 0 !== n ? n : x.attributes || !R ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.escape = function (t) {
            return (t + "").replace(wt, xt)
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, i = [], n = 0, o = 0;
            if (z = !x.detectDuplicates, L = !x.sortStable && t.slice(0), t.sort(Y), z) {
                for (; e = t[o++];) e === t[o] && (n = i.push(o));
                for (; n--;) t.splice(i[n], 1)
            }
            return L = null, t
        }, S = e.getText = function (t) {
            var e, i = "", n = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += S(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else for (; e = t[n++];) i += S(e);
            return i
        }, T = e.selectors = {
            cacheLength: 50, createPseudo: n, match: pt, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(_t, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(_t, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ht.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            }, filter: {
                TAG: function (t) {
                    var e = t.replace(_t, bt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && B(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                }, ATTR: function (t, i, n) {
                    return function (o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === i : !i || (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (t, e, i, n, o) {
                    var r = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === n && 0 === o ? function (t) {
                        return !!t.parentNode
                    } : function (e, i, l) {
                        var u, c, h, d, p, f, m = r !== s ? "nextSibling" : "previousSibling", g = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a, _ = !1;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (d = e; d = d[m];) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                for (d = g, h = d[F] || (d[F] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[t] || [], p = u[0] === H && u[1], _ = p && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (_ = p = 0) || f.pop();) if (1 === d.nodeType && ++_ && d === e) {
                                    c[t] = [H, p, _];
                                    break
                                }
                            } else if (y && (d = e, h = d[F] || (d[F] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[t] || [], p = u[0] === H && u[1], _ = p), _ === !1) for (; (d = ++p && d && d[m] || (_ = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++_ || (y && (h = d[F] || (d[F] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), c[t] = [H, _]), d !== e));) ;
                            return _ -= o, _ === n || _ % n === 0 && _ / n >= 0
                        }
                    }
                }, PSEUDO: function (t, i) {
                    var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[F] ? r(i) : r.length > 1 ? (o = [t, t, "", i], T.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                        for (var n, o = r(t, i), s = o.length; s--;) n = tt(t, o[s]), t[n] = !(e[n] = o[s])
                    }) : function (t) {
                        return r(t, 0, o)
                    }) : r
                }
            }, pseudos: {
                not: n(function (t) {
                    var e = [], i = [], o = E(t.replace(at, "$1"));
                    return o[F] ? n(function (t, e, i, n) {
                        for (var r, s = o(t, null, n, []), a = t.length; a--;) (r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function (t, n, r) {
                        return e[0] = t, o(e, null, r, i), e[0] = null, !i.pop()
                    }
                }), has: n(function (t) {
                    return function (i) {
                        return e(t, i).length > 0
                    }
                }), contains: n(function (t) {
                    return t = t.replace(_t, bt), function (e) {
                        return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                    }
                }), lang: n(function (t) {
                    return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(_t, bt).toLowerCase(), function (e) {
                        var i;
                        do if (i = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                }, root: function (t) {
                    return t === D
                }, focus: function (t) {
                    return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: u(!1), disabled: u(!0), checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0
                }, parent: function (t) {
                    return !T.pseudos.empty(t)
                }, header: function (t) {
                    return mt.test(t.nodeName)
                }, input: function (t) {
                    return ft.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: c(function () {
                    return [0]
                }), last: c(function (t, e) {
                    return [e - 1]
                }), eq: c(function (t, e, i) {
                    return [i < 0 ? i + e : i]
                }), even: c(function (t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t
                }), odd: c(function (t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t
                }), lt: c(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }), gt: c(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) T.pseudos[w] = a(w);
        for (w in{submit: !0, reset: !0}) T.pseudos[w] = l(w);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, k = e.tokenize = function (t, i) {
            var n, o, r, s, a, l, u, c = U[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (a = t, l = [], u = T.preFilter; a;) {
                n && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = ut.exec(a)) && (n = o.shift(), r.push({value: n, type: o[0].replace(at, " ")}), a = a.slice(n.length));
                for (s in T.filter) !(o = pt[s].exec(a)) || u[s] && !(o = u[s](o)) || (n = o.shift(), r.push({value: n, type: s, matches: o}), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : U(t, l).slice(0)
        }, E = e.compile = function (t, e) {
            var i, n = [], o = [], r = X[t + " "];
            if (!r) {
                for (e || (e = k(t)), i = e.length; i--;) r = _(e[i]), r[F] ? n.push(r) : o.push(r);
                r = X(t, b(o, n)), r.selector = t
            }
            return r
        }, P = e.select = function (t, e, i, n) {
            var o, r, s, a, l, u = "function" == typeof t && t, c = !n && k(t = u.selector || t);
            if (i = i || [], 1 === c.length) {
                if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && R && T.relative[r[1].type]) {
                    if (e = (T.find.ID(s.matches[0].replace(_t, bt), e) || [])[0], !e) return i;
                    u && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (o = pt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !T.relative[a = s.type]);) if ((l = T.find[a]) && (n = l(s.matches[0].replace(_t, bt), yt.test(r[0].type) && h(e.parentNode) || e))) {
                    if (r.splice(o, 1), t = n.length && p(r), !t) return K.apply(i, n), i;
                    break
                }
            }
            return (u || E(t, c))(n, e, !R, i, !e || yt.test(t) && h(e.parentNode) || e), i
        }, x.sortStable = F.split("").sort(Y).join("") === F, x.detectDuplicates = !!z, O(), x.sortDetached = o(function (t) {
            return 1 & t.compareDocumentPosition(I.createElement("fieldset"))
        }), o(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), o(function (t) {
            return null == t.getAttribute("disabled")
        }) || r(et, function (t, e, i) {
            var n;
            if (!i) return t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    dt.find = vt, dt.expr = vt.selectors, dt.expr[":"] = dt.expr.pseudos, dt.uniqueSort = dt.unique = vt.uniqueSort, dt.text = vt.getText, dt.isXMLDoc = vt.isXML, dt.contains = vt.contains, dt.escapeSelector = vt.escape;
    var yt = function (t, e, i) {
        for (var n = [], o = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
            if (o && dt(t).is(i)) break;
            n.push(t)
        }
        return n
    }, _t = function (t, e) {
        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
        return i
    }, bt = dt.expr.match.needsContext, wt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, xt = /^.[^:#\[\.,]*$/;
    dt.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? dt.find.matchesSelector(n, t) ? [n] : [] : dt.find.matches(t, dt.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, dt.fn.extend({
        find: function (t) {
            var e, i, n = this.length, o = this;
            if ("string" != typeof t) return this.pushStack(dt(t).filter(function () {
                for (e = 0; e < n; e++) if (dt.contains(o[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) dt.find(t, o[e], i);
            return n > 1 ? dt.uniqueSort(i) : i
        }, filter: function (t) {
            return this.pushStack(o(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(o(this, t || [], !0))
        }, is: function (t) {
            return !!o(this, "string" == typeof t && bt.test(t) ? dt(t) : t || [], !1).length
        }
    });
    var Tt, St = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Ct = dt.fn.init = function (t, e, i) {
        var n, o;
        if (!t) return this;
        if (i = i || Tt, "string" == typeof t) {
            if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : St.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof dt ? e[0] : e, dt.merge(this, dt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : J, !0)), wt.test(n[1]) && dt.isPlainObject(e)) for (n in e) dt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return o = J.getElementById(n[2]), o && (this[0] = o, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : dt.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(dt) : dt.makeArray(t, this)
    };
    Ct.prototype = dt.fn, Tt = dt(J);
    var kt = /^(?:parents|prev(?:Until|All))/, Et = {children: !0, contents: !0, next: !0, prev: !0};
    dt.fn.extend({
        has: function (t) {
            var e = dt(t, this), i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++) if (dt.contains(this, e[t])) return !0
            })
        }, closest: function (t, e) {
            var i, n = 0, o = this.length, r = [], s = "string" != typeof t && dt(t);
            if (!bt.test(t)) for (; n < o; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && dt.find.matchesSelector(i, t))) {
                r.push(i);
                break
            }
            return this.pushStack(r.length > 1 ? dt.uniqueSort(r) : r)
        }, index: function (t) {
            return t ? "string" == typeof t ? ot.call(dt(t), this[0]) : ot.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(dt.uniqueSort(dt.merge(this.get(), dt(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), dt.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return yt(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
            return yt(t, "parentNode", i)
        }, next: function (t) {
            return r(t, "nextSibling")
        }, prev: function (t) {
            return r(t, "previousSibling")
        }, nextAll: function (t) {
            return yt(t, "nextSibling")
        }, prevAll: function (t) {
            return yt(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
            return yt(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
            return yt(t, "previousSibling", i)
        }, siblings: function (t) {
            return _t((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return _t(t.firstChild)
        }, contents: function (t) {
            return t.contentDocument || dt.merge([], t.childNodes)
        }
    }, function (t, e) {
        dt.fn[t] = function (i, n) {
            var o = dt.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = dt.filter(n, o)), this.length > 1 && (Et[t] || dt.uniqueSort(o), kt.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var Pt = /\S+/g;
    dt.Callbacks = function (t) {
        t = "string" == typeof t ? s(t) : dt.extend({}, t);
        var e, i, n, o, r = [], a = [], l = -1, u = function () {
            for (o = t.once, n = e = !0; a.length; l = -1) for (i = a.shift(); ++l < r.length;) r[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = r.length, i = !1);
            t.memory || (i = !1), e = !1, o && (r = i ? [] : "")
        }, c = {
            add: function () {
                return r && (i && !e && (l = r.length - 1, a.push(i)), function n(e) {
                    dt.each(e, function (e, i) {
                        dt.isFunction(i) ? t.unique && c.has(i) || r.push(i) : i && i.length && "string" !== dt.type(i) && n(i)
                    })
                }(arguments), i && !e && u()), this
            }, remove: function () {
                return dt.each(arguments, function (t, e) {
                    for (var i; (i = dt.inArray(e, r, i)) > -1;) r.splice(i, 1), i <= l && l--
                }), this
            }, has: function (t) {
                return t ? dt.inArray(t, r) > -1 : r.length > 0
            }, empty: function () {
                return r && (r = []), this
            }, disable: function () {
                return o = a = [], r = i = "", this
            }, disabled: function () {
                return !r
            }, lock: function () {
                return o = a = [], i || e || (r = i = ""), this
            }, locked: function () {
                return !!o
            }, fireWith: function (t, i) {
                return o || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || u()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return c
    }, dt.extend({
        Deferred: function (e) {
            var i = [["notify", "progress", dt.Callbacks("memory"), dt.Callbacks("memory"), 2], ["resolve", "done", dt.Callbacks("once memory"), dt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", dt.Callbacks("once memory"), dt.Callbacks("once memory"), 1, "rejected"]], n = "pending", o = {
                state: function () {
                    return n
                }, always: function () {
                    return r.done(arguments).fail(arguments), this
                }, "catch": function (t) {
                    return o.then(null, t)
                }, pipe: function () {
                    var t = arguments;
                    return dt.Deferred(function (e) {
                        dt.each(i, function (i, n) {
                            var o = dt.isFunction(t[n[4]]) && t[n[4]];
                            r[n[1]](function () {
                                var t = o && o.apply(this, arguments);
                                t && dt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, o ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                }, then: function (e, n, o) {
                    function r(e, i, n, o) {
                        return function () {
                            var u = this, c = arguments, h = function () {
                                var t, h;
                                if (!(e < s)) {
                                    if (t = n.apply(u, c), t === i.promise()) throw new TypeError("Thenable self-resolution");
                                    h = t && ("object" == typeof t || "function" == typeof t) && t.then, dt.isFunction(h) ? o ? h.call(t, r(s, i, a, o), r(s, i, l, o)) : (s++, h.call(t, r(s, i, a, o), r(s, i, l, o), r(s, i, a, i.notifyWith))) : (n !== a && (u = void 0, c = [t]), (o || i.resolveWith)(u, c))
                                }
                            }, d = o ? h : function () {
                                try {
                                    h()
                                } catch (t) {
                                    dt.Deferred.exceptionHook && dt.Deferred.exceptionHook(t, d.stackTrace), e + 1 >= s && (n !== l && (u = void 0, c = [t]), i.rejectWith(u, c))
                                }
                            };
                            e ? d() : (dt.Deferred.getStackHook && (d.stackTrace = dt.Deferred.getStackHook()), t.setTimeout(d))
                        }
                    }

                    var s = 0;
                    return dt.Deferred(function (t) {
                        i[0][3].add(r(0, t, dt.isFunction(o) ? o : a, t.notifyWith)), i[1][3].add(r(0, t, dt.isFunction(e) ? e : a)), i[2][3].add(r(0, t, dt.isFunction(n) ? n : l))
                    }).promise()
                }, promise: function (t) {
                    return null != t ? dt.extend(t, o) : o
                }
            }, r = {};
            return dt.each(i, function (t, e) {
                var s = e[2], a = e[5];
                o[e[1]] = s.add, a && s.add(function () {
                    n = a
                }, i[3 - t][2].disable, i[0][2].lock), s.add(e[3].fire), r[e[0]] = function () {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[e[0] + "With"] = s.fireWith
            }), o.promise(r), e && e.call(r, r), r
        }, when: function (t) {
            var e = arguments.length, i = e, n = Array(i), o = et.call(arguments), r = dt.Deferred(), s = function (t) {
                return function (i) {
                    n[t] = this, o[t] = arguments.length > 1 ? et.call(arguments) : i, --e || r.resolveWith(n, o)
                }
            };
            if (e <= 1 && (u(t, r.done(s(i)).resolve, r.reject), "pending" === r.state() || dt.isFunction(o[i] && o[i].then))) return r.then();
            for (; i--;) u(o[i], s(i), r.reject);
            return r.promise()
        }
    });
    var At = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    dt.Deferred.exceptionHook = function (e, i) {
        t.console && t.console.warn && e && At.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, dt.readyException = function (e) {
        t.setTimeout(function () {
            throw e
        })
    };
    var Lt = dt.Deferred();
    dt.fn.ready = function (t) {
        return Lt.then(t)["catch"](function (t) {
            dt.readyException(t)
        }), this
    }, dt.extend({
        isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? dt.readyWait++ : dt.ready(!0)
        }, ready: function (t) {
            (t === !0 ? --dt.readyWait : dt.isReady) || (dt.isReady = !0, t !== !0 && --dt.readyWait > 0 || Lt.resolveWith(J, [dt]))
        }
    }), dt.ready.then = Lt.then, "complete" === J.readyState || "loading" !== J.readyState && !J.documentElement.doScroll ? t.setTimeout(dt.ready) : (J.addEventListener("DOMContentLoaded", c), t.addEventListener("load", c));
    var zt = function (t, e, i, n, o, r, s) {
        var a = 0, l = t.length, u = null == i;
        if ("object" === dt.type(i)) {
            o = !0;
            for (a in i) zt(t, e, a, i[a], !0, r, s)
        } else if (void 0 !== n && (o = !0, dt.isFunction(n) || (s = !0), u && (s ? (e.call(t, n), e = null) : (u = e, e = function (t, e, i) {
            return u.call(dt(t), i)
        })), e)) for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
        return o ? t : u ? e.call(t) : l ? e(t[0], i) : r
    }, Ot = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    h.uid = 1, h.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, Ot(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {value: e, configurable: !0}))), e
        }, set: function (t, e, i) {
            var n, o = this.cache(t);
            if ("string" == typeof e) o[dt.camelCase(e)] = i; else for (n in e) o[dt.camelCase(n)] = e[n];
            return o
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][dt.camelCase(e)]
        }, access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        }, remove: function (t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    dt.isArray(e) ? e = e.map(dt.camelCase) : (e = dt.camelCase(e), e = e in n ? [e] : e.match(Pt) || []), i = e.length;
                    for (; i--;) delete n[e[i]]
                }
                (void 0 === e || dt.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !dt.isEmptyObject(e)
        }
    };
    var It = new h, Dt = new h, Rt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Mt = /[A-Z]/g;
    dt.extend({
        hasData: function (t) {
            return Dt.hasData(t) || It.hasData(t)
        }, data: function (t, e, i) {
            return Dt.access(t, e, i)
        }, removeData: function (t, e) {
            Dt.remove(t, e)
        }, _data: function (t, e, i) {
            return It.access(t, e, i)
        }, _removeData: function (t, e) {
            It.remove(t, e)
        }
    }), dt.fn.extend({
        data: function (t, e) {
            var i, n, o, r = this[0], s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = Dt.get(r), 1 === r.nodeType && !It.get(r, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = dt.camelCase(n.slice(5)), d(r, n, o[n])));
                    It.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function () {
                Dt.set(this, t)
            }) : zt(this, function (e) {
                var i;
                if (r && void 0 === e) {
                    if (i = Dt.get(r, t), void 0 !== i) return i;
                    if (i = d(r, t), void 0 !== i) return i
                } else this.each(function () {
                    Dt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                Dt.remove(this, t)
            })
        }
    }), dt.extend({
        queue: function (t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = It.get(t, e), i && (!n || dt.isArray(i) ? n = It.access(t, e, dt.makeArray(i)) : n.push(i)), n || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var i = dt.queue(t, e), n = i.length, o = i.shift(), r = dt._queueHooks(t, e), s = function () {
                dt.dequeue(t, e)
            };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !n && r && r.empty.fire()
        }, _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return It.get(t, i) || It.access(t, i, {
                empty: dt.Callbacks("once memory").add(function () {
                    It.remove(t, [e + "queue", i])
                })
            })
        }
    }), dt.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? dt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = dt.queue(this, t, e);
                dt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && dt.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                dt.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var i, n = 1, o = dt.Deferred(), r = this, s = this.length, a = function () {
                --n || o.resolveWith(r, [r])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = It.get(r[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var jt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Nt = new RegExp("^(?:([+-])=|)(" + jt + ")([a-z%]*)$", "i"), qt = ["Top", "Right", "Bottom", "Left"], Ft = function (t, e) {
        return t = e || t, "none" === t.style.display || "" === t.style.display && dt.contains(t.ownerDocument, t) && "none" === dt.css(t, "display")
    }, $t = function (t, e, i, n) {
        var o, r, s = {};
        for (r in e) s[r] = t.style[r], t.style[r] = e[r];
        o = i.apply(t, n || []);
        for (r in e) t.style[r] = s[r];
        return o
    }, Ht = {};
    dt.fn.extend({
        show: function () {
            return m(this, !0)
        }, hide: function () {
            return m(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Ft(this) ? dt(this).show() : dt(this).hide()
            })
        }
    });
    var Wt = /^(?:checkbox|radio)$/i, Bt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Ut = /^$|\/(?:java|ecma)script/i, Xt = {option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
    Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, Xt.th = Xt.td;
    var Yt = /<|&#?\w+;/;
    !function () {
        var t = J.createDocumentFragment(), e = t.appendChild(J.createElement("div")), i = J.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), ct.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ct.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Vt = J.documentElement, Qt = /^key/, Gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Zt = /^([^.]*)(?:\.(.+)|)/;
    dt.event = {
        global: {}, add: function (t, e, i, n, o) {
            var r, s, a, l, u, c, h, d, p, f, m, g = It.get(t);
            if (g) for (i.handler && (r = i, i = r.handler, o = r.selector), o && dt.find.matchesSelector(Vt, o), i.guid || (i.guid = dt.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (e) {
                return "undefined" != typeof dt && dt.event.triggered !== e.type ? dt.event.dispatch.apply(t, arguments) : void 0
            }), e = (e || "").match(Pt) || [""], u = e.length; u--;) a = Zt.exec(e[u]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (h = dt.event.special[p] || {}, p = (o ? h.delegateType : h.bindType) || p, h = dt.event.special[p] || {}, c = dt.extend({
                type: p,
                origType: m,
                data: n,
                handler: i,
                guid: i.guid,
                selector: o,
                needsContext: o && dt.expr.match.needsContext.test(o),
                namespace: f.join(".")
            }, r), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, h.setup && h.setup.call(t, n, f, s) !== !1 || t.addEventListener && t.addEventListener(p, s)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), dt.event.global[p] = !0)
        }, remove: function (t, e, i, n, o) {
            var r, s, a, l, u, c, h, d, p, f, m, g = It.hasData(t) && It.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(Pt) || [""], u = e.length; u--;) if (a = Zt.exec(e[u]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                    for (h = dt.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, d = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;) c = d[r], !o && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(r, 1), c.selector && d.delegateCount--, h.remove && h.remove.call(t, c));
                    s && !d.length && (h.teardown && h.teardown.call(t, f, g.handle) !== !1 || dt.removeEvent(t, p, g.handle), delete l[p])
                } else for (p in l) dt.event.remove(t, p + e[u], i, n, !0);
                dt.isEmptyObject(l) && It.remove(t, "handle events")
            }
        }, dispatch: function (t) {
            var e, i, n, o, r, s, a = dt.event.fix(t), l = new Array(arguments.length), u = (It.get(this, "events") || {})[a.type] || [], c = dt.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, a) !== !1) {
                for (s = dt.event.handlers.call(this, a, u), e = 0; (o = s[e++]) && !a.isPropagationStopped();) for (a.currentTarget = o.elem, i = 0; (r = o.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, n = ((dt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), void 0 !== n && (a.result = n) === !1 && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        }, handlers: function (t, e) {
            var i, n, o, r, s = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                for (n = [], i = 0; i < a; i++) r = e[i], o = r.selector + " ", void 0 === n[o] && (n[o] = r.needsContext ? dt(o, this).index(l) > -1 : dt.find(o, this, null, [l]).length), n[o] && n.push(r);
                n.length && s.push({elem: l, handlers: n})
            }
            return a < e.length && s.push({elem: this, handlers: e.slice(a)}), s
        }, addProp: function (t, e) {
            Object.defineProperty(dt.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: dt.isFunction(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (t) {
            return t[dt.expando] ? t : new dt.Event(t)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== w() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === w() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && dt.nodeName(this, "input")) return this.click(), !1
                }, _default: function (t) {
                    return dt.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, dt.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, dt.Event = function (t, e) {
        return this instanceof dt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? _ : b, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && dt.extend(this, e), this.timeStamp = t && t.timeStamp || dt.now(), void (this[dt.expando] = !0)) : new dt.Event(t, e)
    }, dt.Event.prototype = {
        constructor: dt.Event, isDefaultPrevented: b, isPropagationStopped: b, isImmediatePropagationStopped: b, isSimulated: !1, preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = _, t && !this.isSimulated && t.preventDefault()
        }, stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = _, t && !this.isSimulated && t.stopPropagation()
        }, stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = _, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, dt.each({
        altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (t) {
            var e = t.button;
            return null == t.which && Qt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Gt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, dt.event.addProp), dt.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (t, e) {
        dt.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var i, n = this, o = t.relatedTarget, r = t.handleObj;
                return o && (o === n || dt.contains(n, o)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), dt.fn.extend({
        on: function (t, e, i, n) {
            return x(this, t, e, i, n)
        }, one: function (t, e, i, n) {
            return x(this, t, e, i, n, 1)
        }, off: function (t, e, i) {
            var n, o;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, dt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = b), this.each(function () {
                dt.event.remove(this, t, i, e)
            })
        }
    });
    var Kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Jt = /<script|<style|<link/i, te = /checked\s*(?:[^=]|=\s*.checked.)/i, ee = /^true\/(.*)/, ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    dt.extend({
        htmlPrefilter: function (t) {
            return t.replace(Kt, "<$1></$2>")
        }, clone: function (t, e, i) {
            var n, o, r, s, a = t.cloneNode(!0), l = dt.contains(t.ownerDocument, t);
            if (!(ct.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || dt.isXMLDoc(t))) for (s = g(a), r = g(t), n = 0, o = r.length; n < o; n++) E(r[n], s[n]);
            if (e) if (i) for (r = r || g(t), s = s || g(a), n = 0, o = r.length; n < o; n++) k(r[n], s[n]); else k(t, a);
            return s = g(a, "script"), s.length > 0 && v(s, !l && g(t, "script")), a
        }, cleanData: function (t) {
            for (var e, i, n, o = dt.event.special, r = 0; void 0 !== (i = t[r]); r++) if (Ot(i)) {
                if (e = i[It.expando]) {
                    if (e.events) for (n in e.events) o[n] ? dt.event.remove(i, n) : dt.removeEvent(i, n, e.handle);
                    i[It.expando] = void 0
                }
                i[Dt.expando] && (i[Dt.expando] = void 0)
            }
        }
    }), dt.fn.extend({
        detach: function (t) {
            return A(this, t, !0)
        }, remove: function (t) {
            return A(this, t)
        }, text: function (t) {
            return zt(this, function (t) {
                return void 0 === t ? dt.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return P(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.appendChild(t)
                }
            })
        }, prepend: function () {
            return P(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return P(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return P(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (dt.cleanData(g(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return dt.clone(this, t, e)
            })
        }, html: function (t) {
            return zt(this, function (t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Jt.test(t) && !Xt[(Bt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = dt.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) e = this[i] || {}, 1 === e.nodeType && (dt.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (o) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return P(this, arguments, function (e) {
                var i = this.parentNode;
                dt.inArray(this, t) < 0 && (dt.cleanData(g(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), dt.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (t, e) {
        dt.fn[t] = function (t) {
            for (var i, n = [], o = dt(t), r = o.length - 1, s = 0; s <= r; s++) i = s === r ? this : this.clone(!0), dt(o[s])[e](i), nt.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var ne = /^margin/, oe = new RegExp("^(" + jt + ")(?!px)[a-z%]+$", "i"), re = function (e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e)
    };
    !function () {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Vt.appendChild(s);
                var e = t.getComputedStyle(a);
                i = "1%" !== e.top, r = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Vt.removeChild(s), a = null
            }
        }

        var i, n, o, r, s = J.createElement("div"), a = J.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ct.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), dt.extend(ct, {
            pixelPosition: function () {
                return e(), i
            }, boxSizingReliable: function () {
                return e(), n
            }, pixelMarginRight: function () {
                return e(), o
            }, reliableMarginLeft: function () {
                return e(), r
            }
        }))
    }();
    var se = /^(none|table(?!-c[ea]).+)/, ae = {position: "absolute", visibility: "hidden", display: "block"}, le = {letterSpacing: "0", fontWeight: "400"}, ue = ["Webkit", "Moz", "ms"], ce = J.createElement("div").style;
    dt.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = L(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        }, cssNumber: {animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": "cssFloat"}, style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = dt.camelCase(e), l = t.style;
                return e = dt.cssProps[a] || (dt.cssProps[a] = O(a) || a), s = dt.cssHooks[e] || dt.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e] : (r = typeof i, "string" === r && (o = Nt.exec(i)) && o[1] && (i = p(t, e, o), r = "number"), void (null != i && i === i && ("number" === r && (i += o && o[3] || (dt.cssNumber[a] ? "" : "px")), ct.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i))))
            }
        }, css: function (t, e, i, n) {
            var o, r, s, a = dt.camelCase(e);
            return e = dt.cssProps[a] || (dt.cssProps[a] = O(a) || a), s = dt.cssHooks[e] || dt.cssHooks[a], s && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = L(t, e, n)), "normal" === o && e in le && (o = le[e]), "" === i || i ? (r = parseFloat(o), i === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), dt.each(["height", "width"], function (t, e) {
        dt.cssHooks[e] = {
            get: function (t, i, n) {
                if (i) return !se.test(dt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? R(t, e, n) : $t(t, ae, function () {
                    return R(t, e, n)
                })
            }, set: function (t, i, n) {
                var o, r = n && re(t), s = n && D(t, e, n, "border-box" === dt.css(t, "boxSizing", !1, r), r);
                return s && (o = Nt.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = dt.css(t, e)), I(t, i, s)
            }
        }
    }), dt.cssHooks.marginLeft = z(ct.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(L(t, "marginLeft")) || t.getBoundingClientRect().left - $t(t, {marginLeft: 0}, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), dt.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        dt.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[t + qt[n] + e] = r[n] || r[n - 2] || r[0];
                return o
            }
        }, ne.test(t) || (dt.cssHooks[t + e].set = I)
    }), dt.fn.extend({
        css: function (t, e) {
            return zt(this, function (t, e, i) {
                var n, o, r = {}, s = 0;
                if (dt.isArray(e)) {
                    for (n = re(t), o = e.length; s < o; s++) r[e[s]] = dt.css(t, e[s], !1, n);
                    return r
                }
                return void 0 !== i ? dt.style(t, e, i) : dt.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), dt.Tween = M, M.prototype = {
        constructor: M, init: function (t, e, i, n, o, r) {
            this.elem = t, this.prop = i, this.easing = o || dt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (dt.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var t = M.propHooks[this.prop];
            return t && t.get ? t.get(this) : M.propHooks._default.get(this)
        }, run: function (t) {
            var e, i = M.propHooks[this.prop];
            return this.options.duration ? this.pos = e = dt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = dt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            }, set: function (t) {
                dt.fx.step[t.prop] ? dt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[dt.cssProps[t.prop]] && !dt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : dt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, dt.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, dt.fx = M.prototype.init, dt.fx.step = {};
    var he, de, pe = /^(?:toggle|show|hide)$/, fe = /queueHooks$/;
    dt.Animation = dt.extend(W, {
        tweeners: {
            "*": [function (t, e) {
                var i = this.createTween(t, e);
                return p(i.elem, t, Nt.exec(e), i), i
            }]
        }, tweener: function (t, e) {
            dt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Pt);
            for (var i, n = 0, o = t.length; n < o; n++) i = t[n], W.tweeners[i] = W.tweeners[i] || [], W.tweeners[i].unshift(e)
        }, prefilters: [$], prefilter: function (t, e) {
            e ? W.prefilters.unshift(t) : W.prefilters.push(t)
        }
    }), dt.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? dt.extend({}, t) : {complete: i || !i && e || dt.isFunction(t) && t, duration: t, easing: i && e || e && !dt.isFunction(e) && e};
        return dt.fx.off || J.hidden ? n.duration = 0 : n.duration = "number" == typeof n.duration ? n.duration : n.duration in dt.fx.speeds ? dt.fx.speeds[n.duration] : dt.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            dt.isFunction(n.old) && n.old.call(this), n.queue && dt.dequeue(this, n.queue)
        }, n
    }, dt.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(Ft).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
        }, animate: function (t, e, i, n) {
            var o = dt.isEmptyObject(t), r = dt.speed(e, i, n), s = function () {
                var e = W(this, dt.extend({}, t), r);
                (o || It.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        }, stop: function (t, e, i) {
            var n = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0, o = null != t && t + "queueHooks", r = dt.timers, s = It.get(this);
                if (o) s[o] && s[o].stop && n(s[o]); else for (o in s) s[o] && s[o].stop && fe.test(o) && n(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i), e = !1, r.splice(o, 1));
                !e && i || dt.dequeue(this, t)
            })
        }, finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, i = It.get(this), n = i[t + "queue"], o = i[t + "queueHooks"], r = dt.timers, s = n ? n.length : 0;
                for (i.finish = !0, dt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), dt.each(["toggle", "show", "hide"], function (t, e) {
        var i = dt.fn[e];
        dt.fn[e] = function (t, n, o) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(q(e, !0), t, n, o)
        }
    }), dt.each({slideDown: q("show"), slideUp: q("hide"), slideToggle: q("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (t, e) {
        dt.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), dt.timers = [], dt.fx.tick = function () {
        var t, e = 0, i = dt.timers;
        for (he = dt.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
        i.length || dt.fx.stop(), he = void 0
    }, dt.fx.timer = function (t) {
        dt.timers.push(t), t() ? dt.fx.start() : dt.timers.pop()
    }, dt.fx.interval = 13, dt.fx.start = function () {
        de || (de = t.requestAnimationFrame ? t.requestAnimationFrame(j) : t.setInterval(dt.fx.tick, dt.fx.interval))
    }, dt.fx.stop = function () {
        t.cancelAnimationFrame ? t.cancelAnimationFrame(de) : t.clearInterval(de), de = null
    }, dt.fx.speeds = {slow: 600, fast: 200, _default: 400}, dt.fn.delay = function (e, i) {
        return e = dt.fx ? dt.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function (i, n) {
            var o = t.setTimeout(i, e);
            n.stop = function () {
                t.clearTimeout(o)
            }
        })
    }, function () {
        var t = J.createElement("input"), e = J.createElement("select"), i = e.appendChild(J.createElement("option"));
        t.type = "checkbox", ct.checkOn = "" !== t.value, ct.optSelected = i.selected, t = J.createElement("input"), t.value = "t", t.type = "radio", ct.radioValue = "t" === t.value
    }();
    var me, ge = dt.expr.attrHandle;
    dt.fn.extend({
        attr: function (t, e) {
            return zt(this, dt.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                dt.removeAttr(this, t)
            })
        }
    }), dt.extend({
        attr: function (t, e, i) {
            var n, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof t.getAttribute ? dt.prop(t, e, i) : (1 === r && dt.isXMLDoc(t) || (o = dt.attrHooks[e.toLowerCase()] || (dt.expr.match.bool.test(e) ? me : void 0)), void 0 !== i ? null === i ? void dt.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : (n = dt.find.attr(t, e), null == n ? void 0 : n))
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ct.radioValue && "radio" === e && dt.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var i, n = 0, o = e && e.match(Pt);
            if (o && 1 === t.nodeType) for (; i = o[n++];) t.removeAttribute(i)
        }
    }), me = {
        set: function (t, e, i) {
            return e === !1 ? dt.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, dt.each(dt.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = ge[e] || dt.find.attr;
        ge[e] = function (t, e, n) {
            var o, r, s = e.toLowerCase();
            return n || (r = ge[s], ge[s] = o, o = null != i(t, e, n) ? s : null, ge[s] = r), o
        }
    });
    var ve = /^(?:input|select|textarea|button)$/i, ye = /^(?:a|area)$/i;
    dt.fn.extend({
        prop: function (t, e) {
            return zt(this, dt.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[dt.propFix[t] || t]
            })
        }
    }), dt.extend({
        prop: function (t, e, i) {
            var n, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && dt.isXMLDoc(t) || (e = dt.propFix[e] || e, o = dt.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = dt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ve.test(t.nodeName) || ye.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), ct.optSelected || (dt.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), dt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        dt.propFix[this.toLowerCase()] = this
    });
    var _e = /[\t\r\n\f]/g;
    dt.fn.extend({
        addClass: function (t) {
            var e, i, n, o, r, s, a, l = 0;
            if (dt.isFunction(t)) return this.each(function (e) {
                dt(this).addClass(t.call(this, e, B(this)))
            });
            if ("string" == typeof t && t) for (e = t.match(Pt) || []; i = this[l++];) if (o = B(i), n = 1 === i.nodeType && (" " + o + " ").replace(_e, " ")) {
                for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                a = dt.trim(n), o !== a && i.setAttribute("class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, i, n, o, r, s, a, l = 0;
            if (dt.isFunction(t)) return this.each(function (e) {
                dt(this).removeClass(t.call(this, e, B(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(Pt) || []; i = this[l++];) if (o = B(i), n = 1 === i.nodeType && (" " + o + " ").replace(_e, " ")) {
                for (s = 0; r = e[s++];) for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                a = dt.trim(n), o !== a && i.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : dt.isFunction(t) ? this.each(function (i) {
                dt(this).toggleClass(t.call(this, i, B(this), e), e)
            }) : this.each(function () {
                var e, n, o, r;
                if ("string" === i) for (n = 0, o = dt(this), r = t.match(Pt) || []; e = r[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== i || (e = B(this), e && It.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : It.get(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];) if (1 === i.nodeType && (" " + B(i) + " ").replace(_e, " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var be = /\r/g, we = /[\x20\t\r\n\f]+/g;
    dt.fn.extend({
        val: function (t) {
            var e, i, n, o = this[0];
            return arguments.length ? (n = dt.isFunction(t), this.each(function (i) {
                var o;
                1 === this.nodeType && (o = n ? t.call(this, i, dt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : dt.isArray(o) && (o = dt.map(o, function (t) {
                    return null == t ? "" : t + ""
                })), e = dt.valHooks[this.type] || dt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = dt.valHooks[o.type] || dt.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(be, "") : null == i ? "" : i)) : void 0
        }
    }), dt.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = dt.find.attr(t, "value");
                    return null != e ? e : dt.trim(dt.text(t)).replace(we, " ")
                }
            }, select: {
                get: function (t) {
                    for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type, s = r ? null : [], a = r ? o + 1 : n.length, l = o < 0 ? a : r ? o : 0; l < a; l++) if (i = n[l], (i.selected || l === o) && !i.disabled && (!i.parentNode.disabled || !dt.nodeName(i.parentNode, "optgroup"))) {
                        if (e = dt(i).val(), r) return e;
                        s.push(e)
                    }
                    return s
                }, set: function (t, e) {
                    for (var i, n, o = t.options, r = dt.makeArray(e), s = o.length; s--;) n = o[s], (n.selected = dt.inArray(dt.valHooks.option.get(n), r) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), r
                }
            }
        }
    }), dt.each(["radio", "checkbox"], function () {
        dt.valHooks[this] = {
            set: function (t, e) {
                if (dt.isArray(e)) return t.checked = dt.inArray(dt(t).val(), e) > -1
            }
        }, ct.checkOn || (dt.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var xe = /^(?:focusinfocus|focusoutblur)$/;
    dt.extend(dt.event, {
        trigger: function (e, i, n, o) {
            var r, s, a, l, u, c, h, d = [n || J], p = at.call(e, "type") ? e.type : e, f = at.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = n = n || J, 3 !== n.nodeType && 8 !== n.nodeType && !xe.test(p + dt.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[dt.expando] ? e : new dt.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : dt.makeArray(i, [e]), h = dt.event.special[p] || {}, o || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                if (!o && !h.noBubble && !dt.isWindow(n)) {
                    for (l = h.delegateType || p, xe.test(l + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (n.ownerDocument || J) && d.push(a.defaultView || a.parentWindow || t)
                }
                for (r = 0; (s = d[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : h.bindType || p, c = (It.get(s, "events") || {})[e.type] && It.get(s, "handle"), c && c.apply(s, i), c = u && s[u], c && c.apply && Ot(s) && (e.result = c.apply(s, i), e.result === !1 && e.preventDefault());
                return e.type = p, o || e.isDefaultPrevented() || h._default && h._default.apply(d.pop(), i) !== !1 || !Ot(n) || u && dt.isFunction(n[p]) && !dt.isWindow(n) && (a = n[u], a && (n[u] = null), dt.event.triggered = p, n[p](), dt.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        }, simulate: function (t, e, i) {
            var n = dt.extend(new dt.Event, i, {type: t, isSimulated: !0});
            dt.event.trigger(n, null, e)
        }
    }), dt.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                dt.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return dt.event.trigger(t, e, i, !0)
        }
    }), dt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        dt.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), dt.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), ct.focusin = "onfocusin" in t, ct.focusin || dt.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = function (t) {
            dt.event.simulate(e, t.target, dt.event.fix(t))
        };
        dt.event.special[e] = {
            setup: function () {
                var n = this.ownerDocument || this, o = It.access(n, e);
                o || n.addEventListener(t, i, !0), It.access(n, e, (o || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, o = It.access(n, e) - 1;
                o ? It.access(n, e, o) : (n.removeEventListener(t, i, !0), It.remove(n, e))
            }
        }
    });
    var Te = t.location, Se = dt.now(), Ce = /\?/;
    dt.parseXML = function (e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (n) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || dt.error("Invalid XML: " + e), i
    };
    var ke = /\[\]$/, Ee = /\r?\n/g, Pe = /^(?:submit|button|image|reset|file)$/i, Ae = /^(?:input|select|textarea|keygen)/i;
    dt.param = function (t, e) {
        var i, n = [], o = function (t, e) {
            var i = dt.isFunction(e) ? e() : e;
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (dt.isArray(t) || t.jquery && !dt.isPlainObject(t)) dt.each(t, function () {
            o(this.name, this.value)
        }); else for (i in t) U(i, t[i], e, o);
        return n.join("&")
    }, dt.fn.extend({
        serialize: function () {
            return dt.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = dt.prop(this, "elements");
                return t ? dt.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !dt(this).is(":disabled") && Ae.test(this.nodeName) && !Pe.test(t) && (this.checked || !Wt.test(t))
            }).map(function (t, e) {
                var i = dt(this).val();
                return null == i ? null : dt.isArray(i) ? dt.map(i, function (t) {
                    return {name: e.name, value: t.replace(Ee, "\r\n")}
                }) : {name: e.name, value: i.replace(Ee, "\r\n")}
            }).get()
        }
    });
    var Le = /%20/g, ze = /#.*$/, Oe = /([?&])_=[^&]*/, Ie = /^(.*?):[ \t]*([^\r\n]*)$/gm, De = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Re = /^(?:GET|HEAD)$/, Me = /^\/\//, je = {}, Ne = {}, qe = "*/".concat("*"), Fe = J.createElement("a");
    Fe.href = Te.href, dt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Te.href,
            type: "GET",
            isLocal: De.test(Te.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {"*": qe, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"},
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": dt.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? V(V(t, dt.ajaxSettings), e) : V(dt.ajaxSettings, t)
        },
        ajaxPrefilter: X(je),
        ajaxTransport: X(Ne),
        ajax: function (e, i) {
            function n(e, i, n, a) {
                var u, d, p, b, w, x = i;
                c || (c = !0, l && t.clearTimeout(l), o = void 0, s = a || "", T.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (b = Q(f, T, n)), b = G(f, b, T, u), u ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (dt.lastModified[r] = w), w = T.getResponseHeader("etag"), w && (dt.etag[r] = w)), 204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = b.state, d = b.data, p = b.error, u = !p)) : (p = x, !e && x || (x = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (i || x) + "", u ? v.resolveWith(m, [d, x, T]) : v.rejectWith(m, [T, x, p]), T.statusCode(_), _ = void 0, h && g.trigger(u ? "ajaxSuccess" : "ajaxError", [T, f, u ? d : p]), y.fireWith(m, [T, x]), h && (g.trigger("ajaxComplete", [T, f]), --dt.active || dt.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var o, r, s, a, l, u, c, h, d, p, f = dt.ajaxSetup({}, i), m = f.context || f, g = f.context && (m.nodeType || m.jquery) ? dt(m) : dt.event, v = dt.Deferred(), y = dt.Callbacks("once memory"), _ = f.statusCode || {}, b = {}, w = {}, x = "canceled", T = {
                readyState: 0, getResponseHeader: function (t) {
                    var e;
                    if (c) {
                        if (!a) for (a = {}; e = Ie.exec(s);) a[e[1].toLowerCase()] = e[2];
                        e = a[t.toLowerCase()]
                    }
                    return null == e ? null : e
                }, getAllResponseHeaders: function () {
                    return c ? s : null
                }, setRequestHeader: function (t, e) {
                    return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, b[t] = e), this
                }, overrideMimeType: function (t) {
                    return null == c && (f.mimeType = t), this
                }, statusCode: function (t) {
                    var e;
                    if (t) if (c) T.always(t[T.status]); else for (e in t) _[e] = [_[e], t[e]];
                    return this
                }, abort: function (t) {
                    var e = t || x;
                    return o && o.abort(e), n(0, e), this
                }
            };
            if (v.promise(T), f.url = ((e || f.url || Te.href) + "").replace(Me, Te.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Pt) || [""], null == f.crossDomain) {
                u = J.createElement("a");
                try {
                    u.href = f.url, u.href = u.href, f.crossDomain = Fe.protocol + "//" + Fe.host != u.protocol + "//" + u.host
                } catch (S) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = dt.param(f.data, f.traditional)), Y(je, f, i, T), c) return T;
            h = dt.event && f.global, h && 0 === dt.active++ && dt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Re.test(f.type), r = f.url.replace(ze, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Le, "+")) : (p = f.url.slice(r.length), f.data && (r += (Ce.test(r) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (r = r.replace(Oe, ""), p = (Ce.test(r) ? "&" : "?") + "_=" + Se++ + p), f.url = r + p), f.ifModified && (dt.lastModified[r] && T.setRequestHeader("If-Modified-Since", dt.lastModified[r]), dt.etag[r] && T.setRequestHeader("If-None-Match", dt.etag[r])), (f.data && f.hasContent && f.contentType !== !1 || i.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + qe + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) T.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (f.beforeSend.call(m, T, f) === !1 || c)) return T.abort();
            if (x = "abort", y.add(f.complete), T.done(f.success), T.fail(f.error), o = Y(Ne, f, i, T)) {
                if (T.readyState = 1, h && g.trigger("ajaxSend", [T, f]), c) return T;
                f.async && f.timeout > 0 && (l = t.setTimeout(function () {
                    T.abort("timeout")
                }, f.timeout));
                try {
                    c = !1, o.send(b, n)
                } catch (S) {
                    if (c) throw S;
                    n(-1, S)
                }
            } else n(-1, "No Transport");
            return T
        },
        getJSON: function (t, e, i) {
            return dt.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return dt.get(t, void 0, e, "script")
        }
    }), dt.each(["get", "post"], function (t, e) {
        dt[e] = function (t, i, n, o) {
            return dt.isFunction(i) && (o = o || n, n = i, i = void 0), dt.ajax(dt.extend({url: t, type: e, dataType: o, data: i, success: n}, dt.isPlainObject(t) && t))
        }
    }), dt._evalUrl = function (t) {
        return dt.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, dt.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (dt.isFunction(t) && (t = t.call(this[0])), e = dt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        }, wrapInner: function (t) {
            return dt.isFunction(t) ? this.each(function (e) {
                dt(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = dt(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = dt.isFunction(t);
            return this.each(function (i) {
                dt(this).wrapAll(e ? t.call(this, i) : t)
            })
        }, unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                dt(this).replaceWith(this.childNodes)
            }), this
        }
    }), dt.expr.pseudos.hidden = function (t) {
        return !dt.expr.pseudos.visible(t)
    }, dt.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, dt.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    };
    var $e = {0: 200, 1223: 204}, He = dt.ajaxSettings.xhr();
    ct.cors = !!He && "withCredentials" in He, ct.ajax = He = !!He, dt.ajaxTransport(function (e) {
        var i, n;
        if (ct.cors || He && !e.crossDomain) return {
            send: function (o, r) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o) a.setRequestHeader(s, o[s]);
                i = function (t) {
                    return function () {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r($e[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (l) {
                    if (i) throw l
                }
            }, abort: function () {
                i && i()
            }
        }
    }), dt.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), dt.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /\b(?:java|ecma)script\b/}, converters: {
            "text script": function (t) {
                return dt.globalEval(t), t
            }
        }
    }), dt.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), dt.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function (n, o) {
                    e = dt("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", i = function (t) {
                        e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), J.head.appendChild(e[0])
                }, abort: function () {
                    i && i()
                }
            }
        }
    });
    var We = [], Be = /(=)\?(?=&|$)|\?\?/;
    dt.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = We.pop() || dt.expando + "_" + Se++;
            return this[t] = !0, t
        }
    }), dt.ajaxPrefilter("json jsonp", function (e, i, n) {
        var o, r, s, a = e.jsonp !== !1 && (Be.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Be.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = dt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Be, "$1" + o) : e.jsonp !== !1 && (e.url += (Ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
            return s || dt.error(o + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
            s = arguments
        }, n.always(function () {
            void 0 === r ? dt(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = i.jsonpCallback, We.push(o)), s && dt.isFunction(r) && r(s[0]), s = r = void 0
        }), "script"
    }), ct.createHTMLDocument = function () {
        var t = J.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), dt.parseHTML = function (t, e, i) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (i = e, e = !1);
        var n, o, r;
        return e || (ct.createHTMLDocument ? (e = J.implementation.createHTMLDocument(""), n = e.createElement("base"), n.href = J.location.href, e.head.appendChild(n)) : e = J), o = wt.exec(t), r = !i && [], o ? [e.createElement(o[1])] : (o = y([t], e, r), r && r.length && dt(r).remove(), dt.merge([], o.childNodes))
    }, dt.fn.load = function (t, e, i) {
        var n, o, r, s = this, a = t.indexOf(" ");
        return a > -1 && (n = dt.trim(t.slice(a)), t = t.slice(0, a)), dt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && dt.ajax({url: t, type: o || "GET", dataType: "html", data: e}).done(function (t) {
            r = arguments, s.html(n ? dt("<div>").append(dt.parseHTML(t)).find(n) : t)
        }).always(i && function (t, e) {
            s.each(function () {
                i.apply(this, r || [t.responseText, e, t])
            })
        }), this
    }, dt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        dt.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), dt.expr.pseudos.animated = function (t) {
        return dt.grep(dt.timers, function (e) {
            return t === e.elem
        }).length
    }, dt.offset = {
        setOffset: function (t, e, i) {
            var n, o, r, s, a, l, u, c = dt.css(t, "position"), h = dt(t), d = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), r = dt.css(t, "top"), l = dt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (n = h.position(), s = n.top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), dt.isFunction(e) && (e = e.call(t, i, dt.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : h.css(d)
        }
    }, dt.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                dt.offset.setOffset(this, t, e)
            });
            var e, i, n, o, r = this[0];
            return r ? r.getClientRects().length ? (n = r.getBoundingClientRect(), n.width || n.height ? (o = r.ownerDocument, i = Z(o), e = o.documentElement, {top: n.top + i.pageYOffset - e.clientTop, left: n.left + i.pageXOffset - e.clientLeft}) : n) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, i = this[0], n = {top: 0, left: 0};
                return "fixed" === dt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), dt.nodeName(t[0], "html") || (n = t.offset()), n = {top: n.top + dt.css(t[0], "borderTopWidth", !0), left: n.left + dt.css(t[0], "borderLeftWidth", !0)}), {top: e.top - n.top - dt.css(i, "marginTop", !0), left: e.left - n.left - dt.css(i, "marginLeft", !0)}
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === dt.css(t, "position");) t = t.offsetParent;
                return t || Vt
            })
        }
    }), dt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var i = "pageYOffset" === e;
        dt.fn[t] = function (n) {
            return zt(this, function (t, n, o) {
                var r = Z(t);
                return void 0 === o ? r ? r[e] : t[n] : void (r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : t[n] = o)
            }, t, n, arguments.length)
        }
    }), dt.each(["top", "left"], function (t, e) {
        dt.cssHooks[e] = z(ct.pixelPosition, function (t, i) {
            if (i) return i = L(t, e), oe.test(i) ? dt(t).position()[e] + "px" : i
        })
    }), dt.each({Height: "height", Width: "width"}, function (t, e) {
        dt.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
            dt.fn[n] = function (o, r) {
                var s = arguments.length && (i || "boolean" != typeof o), a = i || (o === !0 || r === !0 ? "margin" : "border");
                return zt(this, function (e, i, o) {
                    var r;
                    return dt.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? dt.css(e, i, a) : dt.style(e, i, o, a)
                }, e, s ? o : void 0, s)
            }
        })
    }), dt.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        }, undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), dt.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return dt
    });
    var Ue = t.jQuery, Xe = t.$;
    return dt.noConflict = function (e) {
        return t.$ === dt && (t.$ = Xe), e && t.jQuery === dt && (t.jQuery = Ue), dt
    }, e || (t.jQuery = t.$ = dt), dt
}), !function (t) {
    function e() {
    }

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function (e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function o(e, i) {
            t.fn[e] = function (o) {
                if ("string" == typeof o) {
                    for (var s = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                        var u = this[a], c = t.data(u, e);
                        if (c) if (t.isFunction(c[o]) && "_" !== o.charAt(0)) {
                            var h = c[o].apply(c, s);
                            if (void 0 !== h) return h
                        } else r("no such method '" + o + "' for " + e + " instance"); else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var n = t.data(this, e);
                    n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
                })
            }
        }

        if (t) {
            var r = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            };
            return t.bridget = function (t, e) {
                i(e), o(t, e)
            }, t.bridget
        }
    }

    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window), function (t) {
    function e(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    function i(t, e) {
        var i = n(t, e) ? r : o;
        i(t, e)
    }

    var n, o, r;
    "classList" in document.documentElement ? (n = function (t, e) {
        return t.classList.contains(e)
    }, o = function (t, e) {
        t.classList.add(e)
    }, r = function (t, e) {
        t.classList.remove(e)
    }) : (n = function (t, i) {
        return e(i).test(t.className)
    }, o = function (t, e) {
        n(t, e) || (t.className = t.className + " " + e)
    }, r = function (t, i) {
        t.className = t.className.replace(e(i), " ")
    });
    var s = {hasClass: n, addClass: o, removeClass: r, toggleClass: i, has: n, add: o, remove: r, toggle: i};
    "function" == typeof define && define.amd ? define("classie/classie", s) : "object" == typeof exports ? module.exports = s : t.classie = s
}(window), function () {
    "use strict";

    function t() {
    }

    function e(t, e) {
        for (var i = t.length; i--;) if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    var n = t.prototype, o = this, r = o.EventEmitter;
    n.getListeners = function (t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function (t) {
        var e, i = [];
        for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function (t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function (t, i) {
        var n, o = this.getListenersAsObject(t), r = "object" == typeof i;
        for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {listener: i, once: !1});
        return this
    }, n.on = i("addListener"), n.addOnceListener = function (t, e) {
        return this.addListener(t, {listener: e, once: !0})
    }, n.once = i("addOnceListener"), n.defineEvent = function (t) {
        return this.getListeners(t), this
    }, n.defineEvents = function (t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function (t, i) {
        var n, o, r = this.getListenersAsObject(t);
        for (o in r) r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function (t, e, i) {
        var n, o, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp) for (n = i.length; n--;) r.call(this, e, i[n]); else for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
        return this
    }, n.removeEvent = function (t) {
        var e, i = typeof t, n = this._getEvents();
        if ("string" === i) delete n[t]; else if (t instanceof RegExp) for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e]; else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e) {
        var i, n, o, r, s = this.getListenersAsObject(t);
        for (o in s) if (s.hasOwnProperty(o)) for (n = s[o].length; n--;) i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, n._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this), function (t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }

    var i = document.documentElement, n = function () {
    };
    i.addEventListener ? n = function (t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function (t, i, n) {
        t[i + n] = n.handleEvent ? function () {
            var i = e(t);
            n.handleEvent.call(n, i)
        } : function () {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var o = function () {
    };
    i.removeEventListener ? o = function (t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (o = function (t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var r = {bind: n, unbind: o};
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window), function (t) {
    function e(t) {
        if (t) {
            if ("string" == typeof n[t]) return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, o = 0, r = i.length; r > o; o++) if (e = i[o] + t, "string" == typeof n[e]) return e
        }
    }

    var i = "Webkit Moz ms Ms O".split(" "), n = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function (t, e) {
    function i(t) {
        var e = parseFloat(t), i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function n() {
    }

    function o() {
        for (var t = {width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0}, e = 0, i = a.length; i > e; e++) {
            var n = a[e];
            t[n] = 0
        }
        return t
    }

    function r(e) {
        function n() {
            if (!d) {
                d = !0;
                var n = t.getComputedStyle;
                if (u = function () {
                    var t = n ? function (t) {
                        return n(t, null)
                    } : function (t) {
                        return t.currentStyle
                    };
                    return function (e) {
                        var i = t(e);
                        return i || s("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                    }
                }(), c = e("boxSizing")) {
                    var o = document.createElement("div");
                    o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[c] = "border-box";
                    var r = document.body || document.documentElement;
                    r.appendChild(o);
                    var a = u(o);
                    h = 200 === i(a.width), r.removeChild(o)
                }
            }
        }

        function r(t) {
            if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var e = u(t);
                if ("none" === e.display) return o();
                var r = {};
                r.width = t.offsetWidth, r.height = t.offsetHeight;
                for (var s = r.isBorderBox = !(!c || !e[c] || "border-box" !== e[c]), d = 0, p = a.length; p > d; d++) {
                    var f = a[d], m = e[f];
                    m = l(t, m);
                    var g = parseFloat(m);
                    r[f] = isNaN(g) ? 0 : g
                }
                var v = r.paddingLeft + r.paddingRight, y = r.paddingTop + r.paddingBottom, _ = r.marginLeft + r.marginRight, b = r.marginTop + r.marginBottom, w = r.borderLeftWidth + r.borderRightWidth, x = r.borderTopWidth + r.borderBottomWidth, T = s && h, S = i(e.width);
                S !== !1 && (r.width = S + (T ? 0 : v + w));
                var C = i(e.height);
                return C !== !1 && (r.height = C + (T ? 0 : y + x)), r.innerWidth = r.width - (v + w), r.innerHeight = r.height - (y + x), r.outerWidth = r.width + _, r.outerHeight = r.height + b, r
            }
        }

        function l(e, i) {
            if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
            var n = e.style, o = n.left, r = e.runtimeStyle, s = r && r.left;
            return s && (r.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, s && (r.left = s), i
        }

        var u, c, h, d = !1;
        return r
    }

    var s = "undefined" == typeof console ? n : function (t) {
        console.error(t)
    }, a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("desandro-get-style-property")) : t.getSize = r(t.getStyleProperty)
}(window), function (t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }

    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || i || n()
    }

    function n() {
        e.isReady = !0;
        for (var t = 0, i = s.length; i > t; t++) {
            var n = s[t];
            n()
        }
    }

    function o(o) {
        return "complete" === r.readyState ? n() : (o.bind(r, "DOMContentLoaded", i), o.bind(r, "readystatechange", i), o.bind(t, "load", i)), e
    }

    var r = t.document, s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
}(window), function (t) {
    "use strict";

    function e(t, e) {
        return t[s](e)
    }

    function i(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }

    function n(t, e) {
        i(t);
        for (var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length; r > o; o++) if (n[o] === t) return !0;
        return !1
    }

    function o(t, n) {
        return i(t), e(t, n)
    }

    var r, s = function () {
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
            var o = e[i], r = o + "MatchesSelector";
            if (t[r]) return r
        }
    }();
    if (s) {
        var a = document.createElement("div"), l = e(a, "div");
        r = l ? e : o
    } else r = n;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return r;
    }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
}(Element.prototype), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
}(window, function (t, e, i) {
    var n = {};
    n.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, n.modulo = function (t, e) {
        return (t % e + e) % e
    };
    var o = Object.prototype.toString;
    n.isArray = function (t) {
        return "[object Array]" == o.call(t)
    }, n.makeArray = function (t) {
        var e = [];
        if (n.isArray(t)) e = t; else if (t && "number" == typeof t.length) for (var i = 0, o = t.length; o > i; i++) e.push(t[i]); else e.push(t);
        return e
    }, n.indexOf = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
        return -1
    }, n.removeFrom = function (t, e) {
        var i = n.indexOf(t, e);
        -1 != i && t.splice(i, 1)
    }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
        return t instanceof HTMLElement
    } : function (t) {
        return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
    }, n.setText = function () {
        function t(t, i) {
            e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
        }

        var e;
        return t
    }(), n.getParent = function (t, e) {
        for (; t != document.body;) if (t = t.parentNode, i(t, e)) return t
    }, n.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, n.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, n.filterFindElements = function (t, e) {
        t = n.makeArray(t);
        for (var o = [], r = 0, s = t.length; s > r; r++) {
            var a = t[r];
            if (n.isElement(a)) if (e) {
                i(a, e) && o.push(a);
                for (var l = a.querySelectorAll(e), u = 0, c = l.length; c > u; u++) o.push(l[u])
            } else o.push(a)
        }
        return o
    }, n.debounceMethod = function (t, e, i) {
        var n = t.prototype[e], o = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments, r = this;
            this[o] = setTimeout(function () {
                n.apply(r, e), delete r[o]
            }, i || 100)
        }
    }, n.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var r = t.console;
    return n.htmlInit = function (i, o) {
        e(function () {
            for (var e = n.toDashed(o), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, u = s.length; u > l; l++) {
                var c, h = s[l], d = h.getAttribute(a);
                try {
                    c = d && JSON.parse(d)
                } catch (p) {
                    r && r.error("Error parsing " + a + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + p);
                    continue
                }
                var f = new i(h, c), m = t.jQuery;
                m && m.data(h, o, f)
            }
        })
    }, n
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function (i) {
        return e(t, i)
    }) : "object" == typeof exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize))
}(window, function (t, e) {
    function i(t, e) {
        this.element = t, this.parent = e, this.create()
    }

    var n = "attachEvent" in t;
    return i.prototype.create = function () {
        this.element.style.position = "absolute", n && this.element.setAttribute("unselectable", "on"), this.x = 0, this.shift = 0
    }, i.prototype.destroy = function () {
        this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = ""
    }, i.prototype.getSize = function () {
        this.size = e(this.element)
    }, i.prototype.setPosition = function (t) {
        this.x = t, this.setDefaultTarget(), this.renderPosition(t)
    }, i.prototype.setDefaultTarget = function () {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
    }, i.prototype.renderPosition = function (t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t)
    }, i.prototype.wrapShift = function (t) {
        this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
    }, i.prototype.remove = function () {
        this.element.parentNode.removeChild(this.element)
    }, i
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/animate", ["get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.getStyleProperty, t.fizzyUIUtils))
}(window, function (t, e, i) {
    for (var n, o = 0, r = "webkit moz ms o".split(" "), s = t.requestAnimationFrame, a = t.cancelAnimationFrame, l = 0; l < r.length && (!s || !a); l++) n = r[l], s = s || t[n + "RequestAnimationFrame"], a = a || t[n + "CancelAnimationFrame"] || t[n + "CancelRequestAnimationFrame"];
    s && a || (s = function (e) {
        var i = (new Date).getTime(), n = Math.max(0, 16 - (i - o)), r = t.setTimeout(function () {
            e(i + n)
        }, n);
        return o = i + n, r
    }, a = function (e) {
        t.clearTimeout(e)
    });
    var u = {};
    u.startAnimation = function () {
        this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
    }, u.animate = function () {
        this.applyDragForce(), this.applySelectedAttraction();
        var t = this.x;
        if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
            var e = this;
            s(function () {
                e.animate()
            })
        }
    };
    var c = e("transform"), h = !!e("perspective");
    return u.positionSlider = function () {
        var t = this.x;
        this.options.wrapAround && this.cells.length > 1 && (t = i.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), t += this.cursorPosition, t = this.options.rightToLeft && c ? -t : t;
        var e = this.getPositionValue(t);
        c ? this.slider.style[c] = h && this.isAnimating ? "translate3d(" + e + ",0,0)" : "translateX(" + e + ")" : this.slider.style[this.originSide] = e
    }, u.positionSliderAtSelected = function () {
        if (this.cells.length) {
            var t = this.cells[this.selectedIndex];
            this.x = -t.target, this.positionSlider()
        }
    }, u.getPositionValue = function (t) {
        return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
    }, u.settle = function (t) {
        this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, h && this.positionSlider(), this.dispatchEvent("settle"))
    }, u.shiftWrapCells = function (t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1)
    }, u._shiftCells = function (t, e, i) {
        for (var n = 0, o = t.length; o > n; n++) {
            var r = t[n], s = e > 0 ? i : 0;
            r.wrapShift(s), e -= r.size.outerWidth
        }
    }, u._unshiftCells = function (t) {
        if (t && t.length) for (var e = 0, i = t.length; i > e; e++) t[e].wrapShift(0)
    }, u.integratePhysics = function () {
        this.velocity += this.accel, this.x += this.velocity, this.velocity *= this.getFrictionFactor(), this.accel = 0
    }, u.applyForce = function (t) {
        this.accel += t
    }, u.getFrictionFactor = function () {
        return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
    }, u.getRestingPosition = function () {
        return this.x + this.velocity / (1 - this.getFrictionFactor())
    }, u.applyDragForce = function () {
        if (this.isPointerDown) {
            var t = this.dragX - this.x, e = t - this.velocity;
            this.applyForce(e)
        }
    }, u.applySelectedAttraction = function () {
        var t = this.cells.length;
        if (!this.isPointerDown && !this.isFreeScrolling && t) {
            var e = this.cells[this.selectedIndex], i = this.options.wrapAround && t > 1 ? this.slideableWidth * Math.floor(this.selectedIndex / t) : 0, n = -1 * (e.target + i) - this.x, o = n * this.options.selectedAttraction;
            this.applyForce(o)
        }
    }, u
}), function (t, e) {
    "use strict";
    if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["classie/classie", "eventEmitter/EventEmitter", "eventie/eventie", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./animate"], function (i, n, o, r, s, a, l) {
        return e(t, i, n, o, r, s, a, l)
    }); else if ("object" == typeof exports) module.exports = e(t, require("desandro-classie"), require("wolfy87-eventemitter"), require("eventie"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./animate")); else {
        var i = t.Flickity;
        t.Flickity = e(t, t.classie, t.EventEmitter, t.eventie, t.getSize, t.fizzyUIUtils, i.Cell, i.animatePrototype)
    }
}(window, function (t, e, i, n, o, r, s, a) {
    function l(t, e) {
        for (t = r.makeArray(t); t.length;) e.appendChild(t.shift())
    }

    function u(t, e) {
        var i = r.getQueryElement(t);
        return i ? (this.element = i, c && (this.$element = c(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e), void this._create()) : void (d && d.error("Bad element for Flickity: " + (i || t)))
    }

    var c = t.jQuery, h = t.getComputedStyle, d = t.console, p = 0, f = {};
    u.defaults = {accessibility: !0, cellAlign: "center", freeScrollFriction: .075, friction: .28, percentPosition: !0, resize: !0, selectedAttraction: .025, setGallerySize: !0}, u.createMethods = [], r.extend(u.prototype, i.prototype), u.prototype._create = function () {
        var e = this.guid = ++p;
        this.element.flickityGUID = e, f[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.accel = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", u.setUnselectable(this.viewport), this._createSlider(), (this.options.resize || this.options.watchCSS) && (n.bind(t, "resize", this), this.isResizeBound = !0);
        for (var i = 0, o = u.createMethods.length; o > i; i++) {
            var r = u.createMethods[i];
            this[r]()
        }
        this.options.watchCSS ? this.watchCSS() : this.activate()
    }, u.prototype.option = function (t) {
        r.extend(this.options, t)
    }, u.prototype.activate = function () {
        if (!this.isActive) {
            this.isActive = !0, e.add(this.element, "flickity-enabled"), this.options.rightToLeft && e.add(this.element, "flickity-rtl"), this.getSize();
            var t = this._filterFindCellElements(this.element.children);
            l(t, this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, n.bind(this.element, "keydown", this)), this.emit("activate");
            var i, o = this.options.initialIndex;
            i = this.isInitActivated ? this.selectedIndex : void 0 !== o && this.cells[o] ? o : 0, this.select(i, !1, !0), this.isInitActivated = !0
        }
    }, u.prototype._createSlider = function () {
        var t = document.createElement("div");
        t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
    }, u.prototype._filterFindCellElements = function (t) {
        return r.filterFindElements(t, this.options.cellSelector)
    }, u.prototype.reloadCells = function () {
        this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
    }, u.prototype._makeCells = function (t) {
        for (var e = this._filterFindCellElements(t), i = [], n = 0, o = e.length; o > n; n++) {
            var r = e[n], a = new s(r, this);
            i.push(a)
        }
        return i
    }, u.prototype.getLastCell = function () {
        return this.cells[this.cells.length - 1]
    }, u.prototype.positionCells = function () {
        this._sizeCells(this.cells), this._positionCells(0)
    }, u.prototype._positionCells = function (t) {
        t = t || 0, this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
        var e = 0;
        if (t > 0) {
            var i = this.cells[t - 1];
            e = i.x + i.size.outerWidth
        }
        for (var n, o = this.cells.length, r = t; o > r; r++) n = this.cells[r], n.setPosition(e), e += n.size.outerWidth, this.maxCellHeight = Math.max(n.size.outerHeight, this.maxCellHeight);
        this.slideableWidth = e, this._containCells()
    }, u.prototype._sizeCells = function (t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            n.getSize()
        }
    }, u.prototype._init = u.prototype.reposition = function () {
        this.positionCells(), this.positionSliderAtSelected()
    }, u.prototype.getSize = function () {
        this.size = o(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
    };
    var m = {center: {left: .5, right: .5}, left: {left: 0, right: 1}, right: {right: 0, left: 1}};
    u.prototype.setCellAlign = function () {
        var t = m[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
    }, u.prototype.setGallerySize = function () {
        this.options.setGallerySize && (this.viewport.style.height = this.maxCellHeight + "px")
    }, u.prototype._getWrapShiftCells = function () {
        if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
            var t = this.cursorPosition, e = this.cells.length - 1;
            this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
        }
    }, u.prototype._getGapCells = function (t, e, i) {
        for (var n = []; t > 0;) {
            var o = this.cells[e];
            if (!o) break;
            n.push(o), e += i, t -= o.size.outerWidth
        }
        return n
    }, u.prototype._containCells = function () {
        if (this.options.contain && !this.options.wrapAround && this.cells.length) for (var t = this.options.rightToLeft ? "marginRight" : "marginLeft", e = this.options.rightToLeft ? "marginLeft" : "marginRight", i = this.cells[0].size[t], n = this.getLastCell(), o = this.slideableWidth - n.size[e], r = o - this.size.innerWidth * (1 - this.cellAlign), s = o < this.size.innerWidth, a = 0, l = this.cells.length; l > a; a++) {
            var u = this.cells[a];
            u.setDefaultTarget(), s ? u.target = o * this.cellAlign : (u.target = Math.max(u.target, this.cursorPosition + i), u.target = Math.min(u.target, r))
        }
    }, u.prototype.dispatchEvent = function (t, e, i) {
        var n = [e].concat(i);
        if (this.emitEvent(t, n), c && this.$element) if (e) {
            var o = c.Event(e);
            o.type = t, this.$element.trigger(o, i)
        } else this.$element.trigger(t, i)
    }, u.prototype.select = function (t, e, i) {
        if (this.isActive) {
            t = parseInt(t, 10);
            var n = this.cells.length;
            this.options.wrapAround && n > 1 && (0 > t ? this.x -= this.slideableWidth : t >= n && (this.x += this.slideableWidth)), (this.options.wrapAround || e) && (t = r.modulo(t, n)), this.cells[t] && (this.selectedIndex = t, this.setSelectedCell(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.dispatchEvent("cellSelect"))
        }
    }, u.prototype.previous = function (t) {
        this.select(this.selectedIndex - 1, t)
    }, u.prototype.next = function (t) {
        this.select(this.selectedIndex + 1, t)
    }, u.prototype.setSelectedCell = function () {
        this._removeSelectedCellClass(), this.selectedCell = this.cells[this.selectedIndex], this.selectedElement = this.selectedCell.element, e.add(this.selectedElement, "is-selected")
    }, u.prototype._removeSelectedCellClass = function () {
        this.selectedCell && e.remove(this.selectedCell.element, "is-selected")
    }, u.prototype.getCell = function (t) {
        for (var e = 0, i = this.cells.length; i > e; e++) {
            var n = this.cells[e];
            if (n.element == t) return n
        }
    }, u.prototype.getCells = function (t) {
        t = r.makeArray(t);
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var o = t[i], s = this.getCell(o);
            s && e.push(s)
        }
        return e
    }, u.prototype.getCellElements = function () {
        for (var t = [], e = 0, i = this.cells.length; i > e; e++) t.push(this.cells[e].element);
        return t
    }, u.prototype.getParentCell = function (t) {
        var e = this.getCell(t);
        return e ? e : (t = r.getParent(t, ".flickity-slider > *"), this.getCell(t))
    }, u.prototype.getAdjacentCellElements = function (t, e) {
        if (!t) return [this.selectedElement];
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.cells.length;
        if (1 + 2 * t >= i) return this.getCellElements();
        for (var n = [], o = e - t; e + t >= o; o++) {
            var s = this.options.wrapAround ? r.modulo(o, i) : o, a = this.cells[s];
            a && n.push(a.element)
        }
        return n
    }, u.prototype.uiChange = function () {
        this.emit("uiChange")
    }, u.prototype.childUIPointerDown = function (t) {
        this.emitEvent("childUIPointerDown", [t])
    }, u.prototype.onresize = function () {
        this.watchCSS(), this.resize()
    }, r.debounceMethod(u, "onresize", 150), u.prototype.resize = function () {
        this.isActive && (this.getSize(), this.options.wrapAround && (this.x = r.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.positionSliderAtSelected())
    };
    var g = u.supportsConditionalCSS = function () {
        var t;
        return function () {
            if (void 0 !== t) return t;
            if (!h) return void (t = !1);
            var e = document.createElement("style"), i = document.createTextNode('body:after { content: "foo"; display: none; }');
            e.appendChild(i), document.head.appendChild(e);
            var n = h(document.body, ":after").content;
            return t = -1 != n.indexOf("foo"), document.head.removeChild(e), t
        }
    }();
    u.prototype.watchCSS = function () {
        var t = this.options.watchCSS;
        if (t) {
            var e = g();
            if (!e) {
                var i = "fallbackOn" == t ? "activate" : "deactivate";
                return void this[i]()
            }
            var n = h(this.element, ":after").content;
            -1 != n.indexOf("flickity") ? this.activate() : this.deactivate()
        }
    }, u.prototype.onkeydown = function (t) {
        if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element)) if (37 == t.keyCode) {
            var e = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(), this[e]()
        } else if (39 == t.keyCode) {
            var i = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(), this[i]()
        }
    }, u.prototype.deactivate = function () {
        if (this.isActive) {
            e.remove(this.element, "flickity-enabled"), e.remove(this.element, "flickity-rtl");
            for (var t = 0, i = this.cells.length; i > t; t++) {
                var o = this.cells[t];
                o.destroy()
            }
            this._removeSelectedCellClass(), this.element.removeChild(this.viewport), l(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), n.unbind(this.element, "keydown", this)), this.isActive = !1, this.emit("deactivate")
        }
    }, u.prototype.destroy = function () {
        this.deactivate(), this.isResizeBound && n.unbind(t, "resize", this), this.emit("destroy"), c && this.$element && c.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid]
    }, r.extend(u.prototype, a);
    var v = "attachEvent" in t;
    return u.setUnselectable = function (t) {
        v && t.setAttribute("unselectable", "on")
    }, u.data = function (t) {
        t = r.getQueryElement(t);
        var e = t && t.flickityGUID;
        return e && f[e]
    }, r.htmlInit(u, "flickity"), c && c.bridget && c.bridget("flickity", u), u.Cell = s, u
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["eventEmitter/EventEmitter", "eventie/eventie"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.Unipointer = e(t, t.EventEmitter, t.eventie)
}(window, function (t, e, i) {
    function n() {
    }

    function o() {
    }

    o.prototype = new e, o.prototype.bindStartEvent = function (t) {
        this._bindStartEvent(t, !0)
    }, o.prototype.unbindStartEvent = function (t) {
        this._bindStartEvent(t, !1)
    }, o.prototype._bindStartEvent = function (e, n) {
        n = void 0 === n || !!n;
        var o = n ? "bind" : "unbind";
        t.navigator.pointerEnabled ? i[o](e, "pointerdown", this) : t.navigator.msPointerEnabled ? i[o](e, "MSPointerDown", this) : (i[o](e, "mousedown", this), i[o](e, "touchstart", this))
    }, o.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, o.prototype.getTouch = function (t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            if (n.identifier == this.pointerIdentifier) return n
        }
    }, o.prototype.onmousedown = function (t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    }, o.prototype.ontouchstart = function (t) {
        this._pointerDown(t, t.changedTouches[0])
    }, o.prototype.onMSPointerDown = o.prototype.onpointerdown = function (t) {
        this._pointerDown(t, t)
    }, o.prototype._pointerDown = function (t, e) {
        this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
    }, o.prototype.pointerDown = function (t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
    };
    var r = {mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"], MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]};
    return o.prototype._bindPostStartEvents = function (e) {
        if (e) {
            for (var n = r[e.type], o = e.preventDefault ? t : document, s = 0, a = n.length; a > s; s++) {
                var l = n[s];
                i.bind(o, l, this)
            }
            this._boundPointerEvents = {events: n, node: o}
        }
    }, o.prototype._unbindPostStartEvents = function () {
        var t = this._boundPointerEvents;
        if (t && t.events) {
            for (var e = 0, n = t.events.length; n > e; e++) {
                var o = t.events[e];
                i.unbind(t.node, o, this)
            }
            delete this._boundPointerEvents
        }
    }, o.prototype.onmousemove = function (t) {
        this._pointerMove(t, t)
    }, o.prototype.onMSPointerMove = o.prototype.onpointermove = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
    }, o.prototype.ontouchmove = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e)
    }, o.prototype._pointerMove = function (t, e) {
        this.pointerMove(t, e)
    }, o.prototype.pointerMove = function (t, e) {
        this.emitEvent("pointerMove", [t, e])
    }, o.prototype.onmouseup = function (t) {
        this._pointerUp(t, t)
    }, o.prototype.onMSPointerUp = o.prototype.onpointerup = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
    }, o.prototype.ontouchend = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e)
    }, o.prototype._pointerUp = function (t, e) {
        this._pointerDone(), this.pointerUp(t, e)
    }, o.prototype.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e])
    }, o.prototype._pointerDone = function () {
        this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone()
    }, o.prototype.pointerDone = n, o.prototype.onMSPointerCancel = o.prototype.onpointercancel = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
    }, o.prototype.ontouchcancel = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e)
    }, o.prototype._pointerCancel = function (t, e) {
        this._pointerDone(), this.pointerCancel(t, e)
    }, o.prototype.pointerCancel = function (t, e) {
        this.emitEvent("pointerCancel", [t, e])
    }, o.getPointerPoint = function (t) {
        return {x: void 0 !== t.pageX ? t.pageX : t.clientX, y: void 0 !== t.pageY ? t.pageY : t.clientY}
    }, o
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("unidragger/unidragger", ["eventie/eventie", "unipointer/unipointer"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("unipointer")) : t.Unidragger = e(t, t.eventie, t.Unipointer)
}(window, function (t, e, i) {
    function n() {
    }

    function o(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }

    function r() {
    }

    function s() {
        return !1
    }

    r.prototype = new i, r.prototype.bindHandles = function () {
        this._bindHandles(!0)
    }, r.prototype.unbindHandles = function () {
        this._bindHandles(!1)
    };
    var a = t.navigator;
    r.prototype._bindHandles = function (t) {
        t = void 0 === t || !!t;
        var i;
        i = a.pointerEnabled ? function (e) {
            e.style.touchAction = t ? "none" : ""
        } : a.msPointerEnabled ? function (e) {
            e.style.msTouchAction = t ? "none" : ""
        } : function () {
            t && u(s)
        };
        for (var n = t ? "bind" : "unbind", o = 0, r = this.handles.length; r > o; o++) {
            var s = this.handles[o];
            this._bindStartEvent(s, t), i(s), e[n](s, "click", this)
        }
    };
    var l = "attachEvent" in document.documentElement, u = l ? function (t) {
        "IMG" == t.nodeName && (t.ondragstart = s);
        for (var e = t.querySelectorAll("img"), i = 0, n = e.length; n > i; i++) {
            var o = e[i];
            o.ondragstart = s
        }
    } : n;
    r.prototype.pointerDown = function (i, n) {
        if ("INPUT" == i.target.nodeName && "range" == i.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
        this._dragPointerDown(i, n);
        var o = document.activeElement;
        o && o.blur && o.blur(), this._bindPostStartEvents(i), this.pointerDownScroll = r.getScrollPosition(), e.bind(t, "scroll", this), this.emitEvent("pointerDown", [i, n])
    }, r.prototype._dragPointerDown = function (t, e) {
        this.pointerDownPoint = i.getPointerPoint(e);
        var n = "touchstart" == t.type, r = t.target.nodeName;
        n || "SELECT" == r || o(t)
    }, r.prototype.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
    }, r.prototype._dragPointerMove = function (t, e) {
        var n = i.getPointerPoint(e), o = {x: n.x - this.pointerDownPoint.x, y: n.y - this.pointerDownPoint.y};
        return !this.isDragging && this.hasDragStarted(o) && this._dragStart(t, e), o
    }, r.prototype.hasDragStarted = function (t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
    }, r.prototype.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
    }, r.prototype._dragPointerUp = function (t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
    }, r.prototype.pointerDone = function () {
        e.unbind(t, "scroll", this)
    }, r.prototype._dragStart = function (t, e) {
        this.isDragging = !0, this.dragStartPoint = r.getPointerPoint(e), this.isPreventingClicks = !0, this.dragStart(t, e)
    }, r.prototype.dragStart = function (t, e) {
        this.emitEvent("dragStart", [t, e])
    }, r.prototype._dragMove = function (t, e, i) {
        this.isDragging && this.dragMove(t, e, i)
    }, r.prototype.dragMove = function (t, e, i) {
        o(t), this.emitEvent("dragMove", [t, e, i])
    }, r.prototype._dragEnd = function (t, e) {
        this.isDragging = !1;
        var i = this;
        setTimeout(function () {
            delete i.isPreventingClicks
        }), this.dragEnd(t, e)
    }, r.prototype.dragEnd = function (t, e) {
        this.emitEvent("dragEnd", [t, e])
    }, r.prototype.pointerDone = function () {
        e.unbind(t, "scroll", this), delete this.pointerDownScroll
    }, r.prototype.onclick = function (t) {
        this.isPreventingClicks && o(t)
    }, r.prototype._staticClick = function (t, e) {
        if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
            var i = t.target.nodeName;
            if (("INPUT" == i || "TEXTAREA" == i) && t.target.focus(), this.staticClick(t, e), "mouseup" != t.type) {
                this.isIgnoringMouseUp = !0;
                var n = this;
                setTimeout(function () {
                    delete n.isIgnoringMouseUp
                }, 400)
            }
        }
    }, r.prototype.staticClick = function (t, e) {
        this.emitEvent("staticClick", [t, e])
    }, r.prototype.onscroll = function () {
        var t = r.getScrollPosition(), e = this.pointerDownScroll.x - t.x, i = this.pointerDownScroll.y - t.y;
        (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
    }, r.getPointerPoint = function (t) {
        return {x: void 0 !== t.pageX ? t.pageX : t.clientX, y: void 0 !== t.pageY ? t.pageY : t.clientY}
    };
    var c = void 0 !== t.pageYOffset;
    return r.getScrollPosition = function () {
        return {x: c ? t.pageXOffset : document.body.scrollLeft, y: c ? t.pageYOffset : document.body.scrollTop}
    }, r.getPointerPoint = i.getPointerPoint, r
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/drag", ["classie/classie", "eventie/eventie", "./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (i, n, o, r, s) {
        return e(t, i, n, o, r, s)
    }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("eventie"), require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.classie, t.eventie, t.Flickity, t.Unidragger, t.fizzyUIUtils)
}(window, function (t, e, i, n, o, r) {
    function s(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }

    function a(e) {
        var i = o.getPointerPoint(e);
        return i.y - t.pageYOffset
    }

    r.extend(n.defaults, {draggable: !0, touchVerticalScroll: !0}), n.createMethods.push("_createDrag"), r.extend(n.prototype, o.prototype), n.prototype._createDrag = function () {
        this.on("activate", this.bindDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.unbindDrag)
    }, n.prototype.bindDrag = function () {
        this.options.draggable && !this.isDragBound && (e.add(this.element, "is-draggable"), this.handles = [this.viewport], this.bindHandles(), this.isDragBound = !0)
    }, n.prototype.unbindDrag = function () {
        this.isDragBound && (e.remove(this.element, "is-draggable"), this.unbindHandles(), delete this.isDragBound)
    }, n.prototype._uiChangeDrag = function () {
        delete this.isFreeScrolling
    }, n.prototype._childUIPointerDownDrag = function (t) {
        s(t), this.pointerDownFocus(t)
    }, n.prototype.pointerDown = function (n, r) {
        if ("INPUT" == n.target.nodeName && "range" == n.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
        this._dragPointerDown(n, r);
        var s = document.activeElement;
        s && s.blur && s != this.element && s != document.body && s.blur(), this.pointerDownFocus(n), this.dragX = this.x, e.add(this.viewport, "is-pointer-down"), this._bindPostStartEvents(n), this.pointerDownScroll = o.getScrollPosition(), i.bind(t, "scroll", this), this.dispatchEvent("pointerDown", n, [r])
    };
    var l = {touchstart: !0, MSPointerDown: !0}, u = {INPUT: !0, SELECT: !0};
    n.prototype.pointerDownFocus = function (e) {
        if (this.options.accessibility && !l[e.type] && !u[e.target.nodeName]) {
            var i = t.pageYOffset;
            this.element.focus(), t.pageYOffset != i && t.scrollTo(t.pageXOffset, i)
        }
    }, n.prototype.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.touchVerticalScrollMove(t, e, i), this._dragMove(t, e, i), this.dispatchEvent("pointerMove", t, [e, i])
    }, n.prototype.hasDragStarted = function (t) {
        return !this.isTouchScrolling && Math.abs(t.x) > 3
    }, n.prototype.pointerUp = function (t, i) {
        delete this.isTouchScrolling, e.remove(this.viewport, "is-pointer-down"), this.dispatchEvent("pointerUp", t, [i]), this._dragPointerUp(t, i)
    };
    var c = {touchmove: !0, MSPointerMove: !0};
    return n.prototype.touchVerticalScrollMove = function (e, i, n) {
        var o = this.options.touchVerticalScroll, r = "withDrag" == o ? !o : this.isDragging || !o;
        !r && c[e.type] && !this.isTouchScrolling && Math.abs(n.y) > 10 && (this.startScrollY = t.pageYOffset, this.pointerWindowStartY = a(i), this.isTouchScrolling = !0)
    }, n.prototype.dragStart = function (t, e) {
        this.dragStartPosition = this.x, this.startAnimation(), this.dispatchEvent("dragStart", t, [e])
    }, n.prototype.dragMove = function (t, e, i) {
        s(t), this.previousDragX = this.dragX;
        var n = this.options.rightToLeft ? -1 : 1, o = this.dragStartPosition + i.x * n;
        if (!this.options.wrapAround && this.cells.length) {
            var r = Math.max(-this.cells[0].target, this.dragStartPosition);
            o = o > r ? .5 * (o + r) : o;
            var a = Math.min(-this.getLastCell().target, this.dragStartPosition);
            o = a > o ? .5 * (o + a) : o
        }
        this.dragX = o, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
    }, n.prototype.dragEnd = function (t, e) {
        this.options.freeScroll && (this.isFreeScrolling = !0);
        var i = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
            var n = this.getRestingPosition();
            this.isFreeScrolling = -n > this.cells[0].target && -n < this.getLastCell().target
        } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
        delete this.previousDragX, this.select(i), this.dispatchEvent("dragEnd", t, [e])
    }, n.prototype.dragEndRestingSelect = function () {
        var t = this.getRestingPosition(), e = Math.abs(this.getCellDistance(-t, this.selectedIndex)), i = this._getClosestResting(t, e, 1), n = this._getClosestResting(t, e, -1), o = i.distance < n.distance ? i.index : n.index;
        return o
    }, n.prototype._getClosestResting = function (t, e, i) {
        for (var n = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function (t, e) {
            return e >= t
        } : function (t, e) {
            return e > t
        }; r(e, o) && (n += i, o = e, e = this.getCellDistance(-t, n), null !== e);) e = Math.abs(e);
        return {distance: o, index: n - i}
    }, n.prototype.getCellDistance = function (t, e) {
        var i = this.cells.length, n = this.options.wrapAround && i > 1, o = n ? r.modulo(e, i) : e, s = this.cells[o];
        if (!s) return null;
        var a = n ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (s.target + a)
    }, n.prototype.dragEndBoostSelect = function () {
        if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
        var t = this.getCellDistance(-this.dragX, this.selectedIndex), e = this.previousDragX - this.dragX;
        return t > 0 && e > 0 ? 1 : 0 > t && 0 > e ? -1 : 0
    }, n.prototype.staticClick = function (t, e) {
        var i = this.getParentCell(t.target), n = i && i.element, o = i && r.indexOf(this.cells, i);
        this.dispatchEvent("staticClick", t, [e, n, o])
    }, n
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function (i) {
        return e(t, i)
    }) : "object" == typeof exports ? module.exports = e(t, require("unipointer")) : t.TapListener = e(t, t.Unipointer)
}(window, function (t, e) {
    function i(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }

    function n(t) {
        this.bindTap(t)
    }

    n.prototype = new e, n.prototype.bindTap = function (t) {
        t && (this.unbindTap(), this.tapElement = t, this._bindStartEvent(t, !0))
    }, n.prototype.unbindTap = function () {
        this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement)
    };
    var o = n.prototype.pointerDown;
    n.prototype.pointerDown = function (t) {
        "touchstart" == t.type && i(t), o.apply(this, arguments)
    };
    var r = void 0 !== t.pageYOffset;
    return n.prototype.pointerUp = function (i, n) {
        var o = e.getPointerPoint(n), s = this.tapElement.getBoundingClientRect(), a = r ? t.pageXOffset : document.body.scrollLeft, l = r ? t.pageYOffset : document.body.scrollTop, u = o.x >= s.left + a && o.x <= s.right + a && o.y >= s.top + l && o.y <= s.bottom + l;
        u && this.emitEvent("tap", [i, n])
    }, n.prototype.destroy = function () {
        this.pointerDone(), this.unbindTap()
    }, n
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["eventie/eventie", "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.eventie, t.Flickity, t.TapListener, t.fizzyUIUtils)
}(window, function (t, e, i, n, o) {
    function r(t, e) {
        this.direction = t, this.parent = e, this._create()
    }

    function s(t) {
        return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
    }

    var a = "http://www.w3.org/2000/svg", l = function () {
        function t() {
            if (void 0 !== e) return e;
            var t = document.createElement("div");
            return t.innerHTML = "<svg/>", e = (t.firstChild && t.firstChild.namespaceURI) == a
        }

        var e;
        return t
    }();
    return r.prototype = new n, r.prototype._create = function () {
        this.isEnabled = !0, this.isPrevious = -1 == this.direction;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        if (e.className = "flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), i.setUnselectable(e), l()) {
            var n = this.createSVG();
            e.appendChild(n)
        } else this.setArrowText(), e.className += " no-svg";
        var o = this;
        this.onCellSelect = function () {
            o.update()
        }, this.parent.on("cellSelect", this.onCellSelect), this.on("tap", this.onTap),
            this.on("pointerDown", function (t, e) {
                o.parent.childUIPointerDown(e)
            })
    }, r.prototype.activate = function () {
        this.bindTap(this.element), e.bind(this.element, "click", this), this.parent.element.appendChild(this.element)
    }, r.prototype.deactivate = function () {
        this.parent.element.removeChild(this.element), n.prototype.destroy.call(this), e.unbind(this.element, "click", this)
    }, r.prototype.createSVG = function () {
        var t = document.createElementNS(a, "svg");
        t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(a, "path"), i = s(this.parent.options.arrowShape);
        return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
    }, r.prototype.setArrowText = function () {
        var t = this.parent.options, e = this.isLeft ? t.leftArrowText : t.rightArrowText;
        o.setText(this.element, e)
    }, r.prototype.onTap = function () {
        if (this.isEnabled) {
            this.parent.uiChange();
            var t = this.isPrevious ? "previous" : "next";
            this.parent[t]()
        }
    }, r.prototype.handleEvent = o.handleEvent, r.prototype.onclick = function () {
        var t = document.activeElement;
        t && t == this.element && this.onTap()
    }, r.prototype.enable = function () {
        this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
    }, r.prototype.disable = function () {
        this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
    }, r.prototype.update = function () {
        var t = this.parent.cells;
        if (this.parent.options.wrapAround && t.length > 1) return void this.enable();
        var e = t.length ? t.length - 1 : 0, i = this.isPrevious ? 0 : e, n = this.parent.selectedIndex == i ? "disable" : "enable";
        this[n]()
    }, r.prototype.destroy = function () {
        this.deactivate()
    }, o.extend(i.defaults, {prevNextButtons: !0, leftArrowText: "‹", rightArrowText: "›", arrowShape: {x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30}}), i.createMethods.push("_createPrevNextButtons"), i.prototype._createPrevNextButtons = function () {
        this.options.prevNextButtons && (this.prevButton = new r((-1), this), this.nextButton = new r(1, this), this.on("activate", this.activatePrevNextButtons))
    }, i.prototype.activatePrevNextButtons = function () {
        this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
    }, i.prototype.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
    }, i.PrevNextButton = r, i
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["eventie/eventie", "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.eventie, t.Flickity, t.TapListener, t.fizzyUIUtils)
}(window, function (t, e, i, n, o) {
    function r(t) {
        this.parent = t, this._create()
    }

    return r.prototype = new n, r.prototype._create = function () {
        this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", i.setUnselectable(this.holder), this.dots = [];
        var t = this;
        this.onCellSelect = function () {
            t.updateSelected()
        }, this.parent.on("cellSelect", this.onCellSelect), this.on("tap", this.onTap), this.on("pointerDown", function (e, i) {
            t.parent.childUIPointerDown(i)
        })
    }, r.prototype.activate = function () {
        this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder)
    }, r.prototype.deactivate = function () {
        this.parent.element.removeChild(this.holder), n.prototype.destroy.call(this)
    }, r.prototype.setDots = function () {
        var t = this.parent.cells.length - this.dots.length;
        t > 0 ? this.addDots(t) : 0 > t && this.removeDots(-t)
    }, r.prototype.addDots = function (t) {
        for (var e = document.createDocumentFragment(), i = []; t;) {
            var n = document.createElement("li");
            n.className = "dot", e.appendChild(n), i.push(n), t--
        }
        this.holder.appendChild(e), this.dots = this.dots.concat(i)
    }, r.prototype.removeDots = function (t) {
        for (var e = this.dots.splice(this.dots.length - t, t), i = 0, n = e.length; n > i; i++) {
            var o = e[i];
            this.holder.removeChild(o)
        }
    }, r.prototype.updateSelected = function () {
        this.selectedDot && (this.selectedDot.className = "dot"), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected")
    }, r.prototype.onTap = function (t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = o.indexOf(this.dots, e);
            this.parent.select(i)
        }
    }, r.prototype.destroy = function () {
        this.deactivate()
    }, i.PageDots = r, o.extend(i.defaults, {pageDots: !0}), i.createMethods.push("_createPageDots"), i.prototype._createPageDots = function () {
        this.options.pageDots && (this.pageDots = new r(this), this.on("activate", this.activatePageDots), this.on("cellAddedRemoved", this.onCellAddedRemovedPageDots), this.on("deactivate", this.deactivatePageDots))
    }, i.prototype.activatePageDots = function () {
        this.pageDots.activate()
    }, i.prototype.onCellAddedRemovedPageDots = function () {
        this.pageDots.setDots()
    }, i.prototype.deactivatePageDots = function () {
        this.pageDots.deactivate()
    }, i.PageDots = r, i
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/player", ["eventEmitter/EventEmitter", "eventie/eventie", "fizzy-ui-utils/utils", "./flickity"], function (t, i, n, o) {
        return e(t, i, n, o)
    }) : "object" == typeof exports ? module.exports = e(require("wolfy87-eventemitter"), require("eventie"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EventEmitter, t.eventie, t.fizzyUIUtils, t.Flickity)
}(window, function (t, e, i, n) {
    function o(t) {
        if (this.isPlaying = !1, this.parent = t, s) {
            var e = this;
            this.onVisibilityChange = function () {
                e.visibilityChange()
            }
        }
    }

    var r, s;
    return "hidden" in document ? (r = "hidden", s = "visibilitychange") : "webkitHidden" in document && (r = "webkitHidden", s = "webkitvisibilitychange"), o.prototype = new t, o.prototype.play = function () {
        this.isPlaying = !0, delete this.isPaused, s && document.addEventListener(s, this.onVisibilityChange, !1), this.tick()
    }, o.prototype.tick = function () {
        if (this.isPlaying && !this.isPaused) {
            this.tickTime = new Date;
            var t = this.parent.options.autoPlay;
            t = "number" == typeof t ? t : 3e3;
            var e = this;
            this.timeout = setTimeout(function () {
                e.parent.next(!0), e.tick()
            }, t)
        }
    }, o.prototype.stop = function () {
        this.isPlaying = !1, delete this.isPaused, this.clear(), s && document.removeEventListener(s, this.onVisibilityChange, !1)
    }, o.prototype.clear = function () {
        clearTimeout(this.timeout)
    }, o.prototype.pause = function () {
        this.isPlaying && (this.isPaused = !0, this.clear())
    }, o.prototype.unpause = function () {
        this.isPaused && this.play()
    }, o.prototype.visibilityChange = function () {
        var t = document[r];
        this[t ? "pause" : "unpause"]()
    }, i.extend(n.defaults, {pauseAutoPlayOnHover: !0}), n.createMethods.push("_createPlayer"), n.prototype._createPlayer = function () {
        this.player = new o(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
    }, n.prototype.activatePlayer = function () {
        this.options.autoPlay && (this.player.play(), e.bind(this.element, "mouseenter", this), this.isMouseenterBound = !0)
    }, n.prototype.stopPlayer = function () {
        this.player.stop()
    }, n.prototype.deactivatePlayer = function () {
        this.player.stop(), this.isMouseenterBound && (e.unbind(this.element, "mouseenter", this), delete this.isMouseenterBound)
    }, n.prototype.onmouseenter = function () {
        this.options.pauseAutoPlayOnHover && (this.player.pause(), e.bind(this.element, "mouseleave", this))
    }, n.prototype.onmouseleave = function () {
        this.player.unpause(), e.unbind(this.element, "mouseleave", this)
    }, n.Player = o, n
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
}(window, function (t, e, i) {
    function n(t) {
        for (var e = document.createDocumentFragment(), i = 0, n = t.length; n > i; i++) {
            var o = t[i];
            e.appendChild(o.element)
        }
        return e
    }

    return e.prototype.insert = function (t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
            var o = this.cells.length;
            e = void 0 === e ? o : e;
            var r = n(i), s = e == o;
            if (s) this.slider.appendChild(r); else {
                var a = this.cells[e].element;
                this.slider.insertBefore(r, a)
            }
            if (0 === e) this.cells = i.concat(this.cells); else if (s) this.cells = this.cells.concat(i); else {
                var l = this.cells.splice(e, o - e);
                this.cells = this.cells.concat(i).concat(l)
            }
            this._sizeCells(i);
            var u = e > this.selectedIndex ? 0 : i.length;
            this._cellAddedRemoved(e, u)
        }
    }, e.prototype.append = function (t) {
        this.insert(t, this.cells.length)
    }, e.prototype.prepend = function (t) {
        this.insert(t, 0)
    }, e.prototype.remove = function (t) {
        var e, n, o, r = this.getCells(t), s = 0;
        for (e = 0, n = r.length; n > e; e++) {
            o = r[e];
            var a = i.indexOf(this.cells, o) < this.selectedIndex;
            s -= a ? 1 : 0
        }
        for (e = 0, n = r.length; n > e; e++) o = r[e], o.remove(), i.removeFrom(this.cells, o);
        r.length && this._cellAddedRemoved(0, s)
    }, e.prototype._cellAddedRemoved = function (t, e) {
        e = e || 0, this.selectedIndex += e, this.selectedIndex = Math.max(0, Math.min(this.cells.length - 1, this.selectedIndex)), this.emitEvent("cellAddedRemoved", [t, e]), this.cellChange(t, !0)
    }, e.prototype.cellSizeChange = function (t) {
        var e = this.getCell(t);
        if (e) {
            e.getSize();
            var n = i.indexOf(this.cells, e);
            this.cellChange(n)
        }
    }, e.prototype.cellChange = function (t, e) {
        var i = this.slideableWidth;
        this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize(), this.options.freeScroll ? (this.x += i - this.slideableWidth, this.positionSlider()) : (e && this.positionSliderAtSelected(), this.select(this.selectedIndex))
    }, e
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["classie/classie", "eventie/eventie", "./flickity", "fizzy-ui-utils/utils"], function (i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("eventie"), require("./flickity"), require("fizzy-ui-utils")) : e(t, t.classie, t.eventie, t.Flickity, t.fizzyUIUtils)
}(window, function (t, e, i, n, o) {
    "use strict";

    function r(t) {
        if ("IMG" == t.nodeName && t.getAttribute("data-flickity-lazyload")) return [t];
        var e = t.querySelectorAll("img[data-flickity-lazyload]");
        return o.makeArray(e)
    }

    function s(t, e) {
        this.img = t, this.flickity = e, this.load()
    }

    return n.createMethods.push("_createLazyload"), n.prototype._createLazyload = function () {
        this.on("cellSelect", this.lazyLoad)
    }, n.prototype.lazyLoad = function () {
        var t = this.options.lazyLoad;
        if (t) {
            for (var e = "number" == typeof t ? t : 0, i = this.getAdjacentCellElements(e), n = [], o = 0, a = i.length; a > o; o++) {
                var l = i[o], u = r(l);
                n = n.concat(u)
            }
            for (o = 0, a = n.length; a > o; o++) {
                var c = n[o];
                new s(c, this)
            }
        }
    }, s.prototype.handleEvent = o.handleEvent, s.prototype.load = function () {
        i.bind(this.img, "load", this), i.bind(this.img, "error", this), this.img.src = this.img.getAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload")
    }, s.prototype.onload = function (t) {
        this.complete(t, "flickity-lazyloaded")
    }, s.prototype.onerror = function (t) {
        this.complete(t, "flickity-lazyerror")
    }, s.prototype.complete = function (t, n) {
        i.unbind(this.img, "load", this), i.unbind(this.img, "error", this);
        var o = this.flickity.getParentCell(this.img), r = o && o.element;
        this.flickity.cellSizeChange(r), e.add(this.img, n), this.flickity.dispatchEvent("lazyLoad", t, r)
    }, n.LazyLoader = s, n
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}(window, function (t) {
    return t
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["classie/classie", "flickity/js/index", "fizzy-ui-utils/utils"], function (i, n, o) {
        return e(t, i, n, o)
    }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.classie, t.Flickity, t.fizzyUIUtils)
}(window, function (t, e, i, n) {
    return i.createMethods.push("_createAsNavFor"), i.prototype._createAsNavFor = function () {
        this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
            var e = this;
            setTimeout(function () {
                e.setNavCompanion(t)
            })
        }
    }, i.prototype.setNavCompanion = function (t) {
        t = n.getQueryElement(t);
        var e = i.data(t);
        if (e && e != this) {
            this.navCompanion = e;
            var o = this;
            this.onNavCompanionSelect = function () {
                o.navCompanionSelect()
            }, e.on("cellSelect", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect()
        }
    }, i.prototype.navCompanionSelect = function () {
        if (this.navCompanion) {
            var t = this.navCompanion.selectedIndex;
            this.select(t), this.removeNavSelectedElement(), this.selectedIndex == t && (this.navSelectedElement = this.cells[t].element, e.add(this.navSelectedElement, "is-nav-selected"))
        }
    }, i.prototype.activateAsNavFor = function () {
        this.navCompanionSelect()
    }, i.prototype.removeNavSelectedElement = function () {
        this.navSelectedElement && (e.remove(this.navSelectedElement, "is-nav-selected"), delete this.navSelectedElement)
    }, i.prototype.onNavStaticClick = function (t, e, i, n) {
        "number" == typeof n && this.navCompanion.select(n)
    }, i.prototype.deactivateAsNavFor = function () {
        this.removeNavSelectedElement()
    }, i.prototype.destroyAsNavFor = function () {
        this.navCompanion && (this.navCompanion.off("cellSelect", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
    }, i
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["eventEmitter/EventEmitter", "eventie/eventie"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
}(window, function (t, e, i) {
    function n(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function o(t) {
        return "[object Array]" == h.call(t)
    }

    function r(t) {
        var e = [];
        if (o(t)) e = t; else if ("number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]); else e.push(t);
        return e
    }

    function s(t, e, i) {
        if (!(this instanceof s)) return new s(t, e, i);
        "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = r(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), u && (this.jqDeferred = new u.Deferred);
        var o = this;
        setTimeout(function () {
            o.check()
        })
    }

    function a(t) {
        this.img = t
    }

    function l(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }

    var u = t.jQuery, c = t.console, h = Object.prototype.toString;
    s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function () {
        this.images = [];
        for (var t = 0; t < this.elements.length; t++) {
            var e = this.elements[t];
            this.addElementImages(e)
        }
    }, s.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && d[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var d = {1: !0, 9: !0, 11: !0};
    s.prototype.addElementBackgroundImages = function (t) {
        for (var e = p(t), i = /url\(['"]*([^'"\)]+)['"]*\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
            var o = n && n[1];
            o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
        }
    };
    var p = t.getComputedStyle || function (t) {
        return t.currentStyle
    };
    return s.prototype.addImage = function (t) {
        var e = new a(t);
        this.images.push(e)
    }, s.prototype.addBackground = function (t, e) {
        var i = new l(t, e);
        this.images.push(i)
    }, s.prototype.check = function () {
        function t(t, i, n) {
            setTimeout(function () {
                e.progress(t, i, n)
            })
        }

        var e = this;
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
        for (var i = 0; i < this.images.length; i++) {
            var n = this.images[i];
            n.once("progress", t), n.check()
        }
    }, s.prototype.progress = function (t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emit("progress", this, t, e), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && c && c.log("progress: " + i, t, e)
    }, s.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emit(t, this), this.emit("always", this), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, a.prototype = new e, a.prototype.check = function () {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, i.bind(this.proxyImage, "load", this), i.bind(this.proxyImage, "error", this), i.bind(this.img, "load", this), i.bind(this.img, "error", this), void (this.proxyImage.src = this.img.src))
    }, a.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, a.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emit("progress", this, this.img, e)
    }, a.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, a.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, a.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, a.prototype.unbindEvents = function () {
        i.unbind(this.proxyImage, "load", this), i.unbind(this.proxyImage, "error", this), i.unbind(this.img, "load", this), i.unbind(this.img, "error", this)
    }, l.prototype = new a, l.prototype.check = function () {
        i.bind(this.img, "load", this), i.bind(this.img, "error", this), this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, l.prototype.unbindEvents = function () {
        i.unbind(this.img, "load", this), i.unbind(this.img, "error", this)
    }, l.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emit("progress", this, this.element, e)
    }, s.makeJQueryPlugin = function (e) {
        e = e || t.jQuery, e && (u = e, u.fn.imagesLoaded = function (t, e) {
            var i = new s(this, t, e);
            return i.jqDeferred.promise(u(this))
        })
    }, s.makeJQueryPlugin(), s
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded)
}(window, function (t, e, i) {
    "use strict";
    return e.createMethods.push("_createImagesLoaded"), e.prototype._createImagesLoaded = function () {
        this.on("activate", this.imagesLoaded)
    }, e.prototype.imagesLoaded = function () {
        function t(t, i) {
            var n = e.getParentCell(i.img);
            e.cellSizeChange(n && n.element), e.options.freeScroll || e.positionSliderAtSelected()
        }

        if (this.options.imagesLoaded) {
            var e = this;
            i(this.slider).on("progress", t)
        }
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], function (i) {
        return e(i, t, t.document, t.Math)
    }) : "undefined" != typeof exports ? module.exports = e(require("jquery"), t, t.document, t.Math) : e(jQuery, t, t.document, t.Math)
}("undefined" != typeof window ? window : this, function (t, e, i, n, o) {
    var r = t(e), s = t(i);
    t.fn.fullpage = function (a) {
        function l(t) {
            t.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'), "#fff" != a.controlArrowColor && (t.find(".fp-controlArrow.fp-next").css("border-color", "transparent transparent transparent " + a.controlArrowColor), t.find(".fp-controlArrow.fp-prev").css("border-color", "transparent " + a.controlArrowColor + " transparent transparent")), a.loopHorizontal || t.find(".fp-controlArrow.fp-prev").hide()
        }

        function u() {
            ht.append('<div id="fp-nav"><ul></ul></div>'), mt = t("#fp-nav"), mt.addClass(function () {
                return a.showActiveTooltip ? "fp-show-active " + a.navigationPosition : a.navigationPosition
            });
            for (var e = 0; e < t(".fp-section").length; e++) {
                var i = "";
                a.anchors.length && (i = a.anchors[e]);
                var i = '<li><a href="#' + i + '"><span></span></a>', n = a.navigationTooltips[e];
                "undefined" != typeof n && "" !== n && (i += '<div class="fp-tooltip ' + a.navigationPosition + '">' + n + "</div>"), i += "</li>", mt.find("ul").append(i)
            }
        }

        function c() {
            t(".fp-section").each(function () {
                var e = t(this).find(".fp-slide");
                e.length ? e.each(function () {
                    q(t(this))
                }) : q(t(this))
            }), h()
        }

        function h() {
            var e = t(".fp-section.active"), i = e.find("SLIDES_WRAPPER"), n = e.find(".fp-scrollable");
            i.length && (n = i.find(".fp-slide.active")), n.mouseover(), E(e), P(e), t.isFunction(a.afterLoad) && a.afterLoad.call(e, e.data("anchor"), e.index(".fp-section") + 1), t.isFunction(a.afterRender) && a.afterRender.call(bt)
        }

        function d() {
            var e;
            if (!a.autoScrolling || a.scrollBar) {
                for (var o = r.scrollTop(), s = 0, l = n.abs(o - i.querySelectorAll(".fp-section")[0].offsetTop), u = i.querySelectorAll(".fp-section"), c = 0; c < u.length; ++c) {
                    var h = n.abs(o - u[c].offsetTop);
                    h < l && (s = c, l = h)
                }
                e = t(u).eq(s)
            }
            if (!a.autoScrolling || a.scrollBar) {
                if (!e.hasClass("active")) {
                    if (It = !0, o = t(".fp-section.active"), s = o.index(".fp-section") + 1, l = N(e), u = e.data("anchor"), c = e.index(".fp-section") + 1, h = e.find(".fp-slide.active"), h.length) var d = h.data("anchor"), p = h.index();
                    Tt && (e.addClass("active").siblings().removeClass("active"), t.isFunction(a.onLeave) && a.onLeave.call(o, s, c, l), t.isFunction(a.afterLoad) && a.afterLoad.call(e, u, c), E(e), j(u, c - 1), a.anchors.length && (pt = u, V(p, d, u, c))), clearTimeout(At), At = setTimeout(function () {
                        It = !1
                    }, 100)
                }
                a.fitToSection && (clearTimeout(Lt), Lt = setTimeout(function () {
                    Tt && (t(".fp-section.active").is(e) && (xt = !0), T(e), xt = !1)
                }, 1e3))
            }
        }

        function p(t) {
            return t.find(".fp-slides").length ? t.find(".fp-slide.active").find(".fp-scrollable") : t.find(".fp-scrollable")
        }

        function f(t, e) {
            if (Ct.m[t]) {
                var i, n;
                if ("down" == t ? (i = "bottom", n = dt.moveSectionDown) : (i = "top", n = dt.moveSectionUp), 0 < e.length) {
                    if (!(i = "top" === i ? !e.scrollTop() : "bottom" === i ? e.scrollTop() + 1 + e.innerHeight() >= e[0].scrollHeight : void 0)) return !0;
                    n()
                } else n()
            }
        }

        function m(e) {
            var i = e.originalEvent;
            if (!g(e.target) && v(i)) {
                a.autoScrolling && e.preventDefault(), e = t(".fp-section.active");
                var o = p(e);
                Tt && !vt && (i = it(i), Mt = i.y, jt = i.x, e.find(".fp-slides").length && n.abs(Rt - jt) > n.abs(Dt - Mt) ? n.abs(Rt - jt) > r.width() / 100 * a.touchSensitivity && (Rt > jt ? Ct.m.right && dt.moveSlideRight() : Ct.m.left && dt.moveSlideLeft()) : a.autoScrolling && n.abs(Dt - Mt) > r.height() / 100 * a.touchSensitivity && (Dt > Mt ? f("down", o) : Mt > Dt && f("up", o)))
            }
        }

        function g(e, i) {
            i = i || 0;
            var n = t(e).parent();
            return !!(i < a.normalScrollElementTouchThreshold && n.is(a.normalScrollElements)) || i != a.normalScrollElementTouchThreshold && g(n, ++i)
        }

        function v(t) {
            return "undefined" == typeof t.pointerType || "mouse" != t.pointerType
        }

        function y(t) {
            t = t.originalEvent, a.fitToSection && ct.stop(), v(t) && (t = it(t), Dt = t.y, Rt = t.x)
        }

        function _(t, e) {
            for (var i = 0, o = t.slice(n.max(t.length - e, 1)), r = 0; r < o.length; r++) i += o[r];
            return n.ceil(i / e)
        }

        function b(i) {
            var o = (new Date).getTime();
            if (a.autoScrolling && !gt) {
                i = i || e.event;
                var r = i.wheelDelta || -i.deltaY || -i.detail, s = n.max(-1, n.min(1, r));
                return 149 < St.length && St.shift(), St.push(n.abs(r)), a.scrollBar && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), i = t(".fp-section.active"), i = p(i), r = o - Nt, Nt = o, 200 < r && (St = []), Tt && (o = _(St, 10), r = _(St, 70), o >= r && (0 > s ? f("down", i) : f("up", i))), !1
            }
            a.fitToSection && ct.stop()
        }

        function w(e) {
            var i = t(".fp-section.active").find(".fp-slides"), n = i.find(".fp-slide").length;
            if (!(!i.length || vt || 2 > n)) {
                var n = i.find(".fp-slide.active"), o = null, o = "prev" === e ? n.prev(".fp-slide") : n.next(".fp-slide");
                if (!o.length) {
                    if (!a.loopHorizontal) return;
                    o = "prev" === e ? n.siblings(":last") : n.siblings(":first")
                }
                vt = !0, O(i, o)
            }
        }

        function x() {
            t(".fp-slide.active").each(function () {
                nt(t(this), "internal")
            })
        }

        function T(e, i, n) {
            var o = e.position();
            if ("undefined" != typeof o && (i = {element: e, callback: i, isMovementUp: n, dest: o, dtop: o.top, yMovement: N(e), anchorLink: e.data("anchor"), sectionIndex: e.index(".fp-section"), activeSlide: e.find(".fp-slide.active"), activeSection: t(".fp-section.active"), leavingSection: t(".fp-section.active").index(".fp-section") + 1, localIsResizing: xt}, !(i.activeSection.is(e) && !xt || a.scrollBar && r.scrollTop() === i.dtop))) {
                if (i.activeSlide.length) var s = i.activeSlide.data("anchor"), l = i.activeSlide.index();
                if (a.autoScrolling && a.continuousVertical && "undefined" != typeof i.isMovementUp && (!i.isMovementUp && "up" == i.yMovement || i.isMovementUp && "down" == i.yMovement) && (i.isMovementUp ? t(".fp-section.active").before(i.activeSection.nextAll(".fp-section")) : t(".fp-section.active").after(i.activeSection.prevAll(".fp-section").get().reverse()), ot(t(".fp-section.active").position().top), x(), i.wrapAroundElements = i.activeSection, i.dest = i.element.position(), i.dtop = i.dest.top, i.yMovement = N(i.element)), t.isFunction(a.onLeave) && !i.localIsResizing) {
                    if (!1 === a.onLeave.call(i.activeSection, i.leavingSection, i.sectionIndex + 1, i.yMovement)) return;
                    A(i.activeSection)
                }
                e.addClass("active").siblings().removeClass("active"), Tt = !1, V(l, s, i.anchorLink, i.sectionIndex), S(i), pt = i.anchorLink, j(i.anchorLink, i.sectionIndex)
            }
        }

        function S(e) {
            if (a.css3 && a.autoScrolling && !a.scrollBar) W("translate3d(0px, -" + e.dtop + "px, 0px)", !0), a.scrollingSpeed ? Et = setTimeout(function () {
                k(e)
            }, a.scrollingSpeed) : k(e); else {
                var i = C(e);
                t(i.element).animate(i.options, a.scrollingSpeed, a.easing).promise().done(function () {
                    k(e)
                })
            }
        }

        function C(t) {
            var e = {};
            return a.autoScrolling && !a.scrollBar ? (e.options = {top: -t.dtop}, e.element = ".fullpage-wrapper") : (e.options = {scrollTop: t.dtop}, e.element = "html, body"), e
        }

        function k(e) {
            e.wrapAroundElements && e.wrapAroundElements.length && (e.isMovementUp ? t(".fp-section:first").before(e.wrapAroundElements) : t(".fp-section:last").after(e.wrapAroundElements), ot(t(".fp-section.active").position().top), x()), e.element.find(".fp-scrollable").mouseover(), t.isFunction(a.afterLoad) && !e.localIsResizing && a.afterLoad.call(e.element, e.anchorLink, e.sectionIndex + 1), E(e.element), P(e.element), Tt = !0, t.isFunction(e.callback) && e.callback.call(this)
        }

        function E(e) {
            var i = e.find(".fp-slide.active");
            i.length && (e = t(i)), e.find("img[data-src], video[data-src], audio[data-src]").each(function () {
                t(this).attr("src", t(this).data("src")), t(this).removeAttr("data-src")
            })
        }

        function P(e) {
            e.find("video, audio").each(function () {
                var e = t(this).get(0);
                e.hasAttribute("autoplay") && "function" == typeof e.play && e.play()
            })
        }

        function A(e) {
            e.find("video, audio").each(function () {
                var e = t(this).get(0);
                e.hasAttribute("data-ignore") || "function" != typeof e.pause || e.pause()
            })
        }

        function L() {
            if (!It && !a.lockAnchors) {
                var t = e.location.hash.replace("#", "").split("/"), i = t[0], t = t[1];
                if (i.length) {
                    var n = "undefined" == typeof pt, o = "undefined" == typeof pt && "undefined" == typeof t && !vt;
                    (i && i !== pt && !n || o || !vt && ft != t) && U(i, t)
                }
            }
        }

        function z(t) {
            Tt && (t.pageY < qt ? dt.moveSectionUp() : t.pageY > qt && dt.moveSectionDown()), qt = t.pageY
        }

        function O(e, i) {
            var o = i.position(), r = i.index(), s = e.closest(".fp-section"), l = s.index(".fp-section"), u = s.data("anchor"), c = s.find(".fp-slidesNav"), h = G(i), d = xt;
            if (a.onSlideLeave) {
                var p, f = s.find(".fp-slide.active"), m = f.index();
                if (p = m == r ? "none" : m > r ? "left" : "right", !d && "none" !== p && t.isFunction(a.onSlideLeave) && !1 === a.onSlideLeave.call(f, u, l + 1, m, p, r)) return void (vt = !1)
            }
            i.addClass("active").siblings().removeClass("active"), E(i), !a.loopHorizontal && a.controlArrows && (s.find(".fp-controlArrow.fp-prev").toggle(0 !== r), s.find(".fp-controlArrow.fp-next").toggle(!i.is(":last-child"))), s.hasClass("active") && V(r, h, u, l);
            var g = function () {
                d || t.isFunction(a.afterSlideLoad) && a.afterSlideLoad.call(i, u, l + 1, h, r), vt = !1
            };
            a.css3 ? (o = "translate3d(-" + n.round(o.left) + "px, 0px, 0px)", R(e.find(".fp-slidesContainer"), 0 < a.scrollingSpeed).css(rt(o)), Pt = setTimeout(function () {
                g()
            }, a.scrollingSpeed, a.easing)) : e.animate({scrollLeft: n.round(o.left)}, a.scrollingSpeed, a.easing, function () {
                g()
            }), c.find(".active").removeClass("active"), c.find("li").eq(r).find("a").addClass("active")
        }

        function I() {
            if (D(), yt) {
                var e = t(i.activeElement);
                e.is("textarea") || e.is("input") || e.is("select") || (e = r.height(), n.abs(e - Ft) > 20 * n.max(Ft, e) / 100 && (dt.reBuild(!0), Ft = e))
            } else clearTimeout(kt), kt = setTimeout(function () {
                dt.reBuild(!0)
            }, 350)
        }

        function D() {
            var t = a.responsive || a.responsiveWidth, e = a.responsiveHeight;
            t && dt.setResponsive(r.width() < t), e && (bt.hasClass("fp-responsive") || dt.setResponsive(r.height() < e))
        }

        function R(t) {
            var e = "all " + a.scrollingSpeed + "ms " + a.easingcss3;
            return t.removeClass("fp-notransition"), t.css({"-webkit-transition": e, transition: e})
        }

        function M(t, e) {
            if (825 > t || 900 > e) {
                var i = n.min(100 * t / 825, 100 * e / 900).toFixed(2);
                ht.css("font-size", i + "%")
            } else ht.css("font-size", "100%")
        }

        function j(e, i) {
            a.menu && (t(a.menu).find(".active").removeClass("active"), t(a.menu).find('[data-menuanchor="' + e + '"]').addClass("active")), a.navigation && (t("#fp-nav").find(".active").removeClass("active"), e ? t("#fp-nav").find('a[href="#' + e + '"]').addClass("active") : t("#fp-nav").find("li").eq(i).find("a").addClass("active"))
        }

        function N(e) {
            var i = t(".fp-section.active").index(".fp-section");
            return e = e.index(".fp-section"), i == e ? "none" : i > e ? "up" : "down"
        }

        function q(t) {
            t.css("overflow", "hidden");
            var e, i = t.closest(".fp-section"), n = t.find(".fp-scrollable");
            n.length ? e = n.get(0).scrollHeight : (e = t.get(0).scrollHeight, a.verticalCentered && (e = t.find(".fp-tableCell").get(0).scrollHeight)), i = wt - parseInt(i.css("padding-bottom")) - parseInt(i.css("padding-top")), e > i ? n.length ? n.css("height", i + "px").parent().css("height", i + "px") : (a.verticalCentered ? t.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />') : t.wrapInner('<div class="fp-scrollable" />'), t.find(".fp-scrollable").slimScroll({
                allowPageScroll: !0,
                height: i + "px",
                size: "10px",
                alwaysVisible: !0
            })) : F(t), t.css("overflow", "")
        }

        function F(t) {
            t.find(".fp-scrollable").children().first().unwrap().unwrap(), t.find(".slimScrollBar").remove(), t.find(".slimScrollRail").remove()
        }

        function $(t) {
            t.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:' + H(t) + 'px;" />')
        }

        function H(t) {
            var e = wt;
            return (a.paddingTop || a.paddingBottom) && (e = t, e.hasClass("fp-section") || (e = t.closest(".fp-section")), t = parseInt(e.css("padding-top")) + parseInt(e.css("padding-bottom")), e = wt - t), e
        }

        function W(t, e) {
            e ? R(bt) : bt.addClass("fp-notransition"), bt.css(rt(t)), setTimeout(function () {
                bt.removeClass("fp-notransition")
            }, 10)
        }

        function B(e) {
            var i = t('.fp-section[data-anchor="' + e + '"]');
            return i.length || (i = t(".fp-section").eq(e - 1)), i
        }

        function U(t, e) {
            var i = B(t);
            "undefined" == typeof e && (e = 0), t === pt || i.hasClass("active") ? X(i, e) : T(i, function () {
                X(i, e)
            })
        }

        function X(t, e) {
            if ("undefined" != typeof e) {
                var i, n = t.find(".fp-slides");
                i = t.find(".fp-slides");
                var o = i.find('.fp-slide[data-anchor="' + e + '"]');
                o.length || (o = i.find(".fp-slide").eq(e)), i = o, i.length && O(n, i)
            }
        }

        function Y(t, e) {
            t.append('<div class="fp-slidesNav"><ul></ul></div>');
            var i = t.find(".fp-slidesNav");
            i.addClass(a.slidesNavPosition);
            for (var n = 0; n < e; n++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
            i.css("margin-left", "-" + i.width() / 2 + "px"), i.find("li").first().find("a").addClass("active")
        }

        function V(t, e, i, n) {
            n = "", a.anchors.length && !a.lockAnchors && (t ? ("undefined" != typeof i && (n = i), "undefined" == typeof e && (e = t), ft = e, Q(n + "/" + e)) : ("undefined" != typeof t && (ft = e), Q(i))), Z()
        }

        function Q(t) {
            if (a.recordHistory) location.hash = t; else if (yt || _t) history.replaceState(o, o, "#" + t); else {
                var i = e.location.href.split("#")[0];
                e.location.replace(i + "#" + t)
            }
        }

        function G(t) {
            var e = t.data("anchor");
            return t = t.index(), "undefined" == typeof e && (e = t), e
        }

        function Z() {
            var e = t(".fp-section.active"), i = e.find(".fp-slide.active"), n = e.data("anchor"), o = G(i), e = e.index(".fp-section"), e = String(e);
            a.anchors.length && (e = n), i.length && (e = e + "-" + o), e = e.replace("/", "-").replace("#", ""), ht[0].className = ht[0].className.replace(RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g"), ""), ht.addClass("fp-viewing-" + e)
        }

        function K() {
            var t, n = i.createElement("p"), r = {webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform"};
            i.body.insertBefore(n, null);
            for (var s in r) n.style[s] !== o && (n.style[s] = "translate3d(1px,1px,1px)", t = e.getComputedStyle(n).getPropertyValue(r[s]));
            return i.body.removeChild(n), t !== o && 0 < t.length && "none" !== t
        }

        function J() {
            if (yt || _t) {
                var e = et();
                t(".fullpage-wrapper").off("touchstart " + e.down).on("touchstart " + e.down, y), t(".fullpage-wrapper").off("touchmove " + e.move).on("touchmove " + e.move, m)
            }
        }

        function tt() {
            if (yt || _t) {
                var e = et();
                t(".fullpage-wrapper").off("touchstart " + e.down), t(".fullpage-wrapper").off("touchmove " + e.move)
            }
        }

        function et() {
            return e.PointerEvent ? {down: "pointerdown", move: "pointermove"} : {down: "MSPointerDown", move: "MSPointerMove"}
        }

        function it(t) {
            var e = [];
            return e.y = "undefined" != typeof t.pageY && (t.pageY || t.pageX) ? t.pageY : t.touches[0].pageY, e.x = "undefined" != typeof t.pageX && (t.pageY || t.pageX) ? t.pageX : t.touches[0].pageX,
            _t && v(t) && a.scrollBar && (e.y = t.touches[0].pageY, e.x = t.touches[0].pageX), e
        }

        function nt(t, e) {
            dt.setScrollingSpeed(0, "internal"), "undefined" != typeof e && (xt = !0), O(t.closest(".fp-slides"), t), "undefined" != typeof e && (xt = !1), dt.setScrollingSpeed(Ot.scrollingSpeed, "internal")
        }

        function ot(t) {
            a.scrollBar ? bt.scrollTop(t) : a.css3 ? W("translate3d(0px, -" + t + "px, 0px)", !1) : bt.css("top", -t)
        }

        function rt(t) {
            return {"-webkit-transform": t, "-moz-transform": t, "-ms-transform": t, transform: t}
        }

        function st(t, e, i) {
            switch (e) {
                case"up":
                    Ct[i].up = t;
                    break;
                case"down":
                    Ct[i].down = t;
                    break;
                case"left":
                    Ct[i].left = t;
                    break;
                case"right":
                    Ct[i].right = t;
                    break;
                case"all":
                    "m" == i ? dt.setAllowScrolling(t) : dt.setKeyboardScrolling(t)
            }
        }

        function at() {
            ot(0), t("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove(), t(".fp-section").css({height: "", "background-color": "", padding: ""}), t(".fp-slide").css({width: ""}), bt.css({height: "", position: "", "-ms-touch-action": "", "touch-action": ""}), t(".fp-section, .fp-slide").each(function () {
                F(t(this)), t(this).removeClass("fp-table active")
            }), bt.addClass("fp-notransition"), bt.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function () {
                t(this).replaceWith(this.childNodes)
            }), ct.scrollTop(0)
        }

        function lt(t, e, i) {
            a[t] = e, "internal" !== i && (Ot[t] = e)
        }

        function ut(t, e) {
            console && console[t] && console[t]("fullPage: " + e)
        }

        var ct = t("html, body"), ht = t("body"), dt = t.fn.fullpage;
        a = t.extend({
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            resize: !1,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            sectionSelector: ".section",
            slideSelector: ".slide",
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null
        }, a), function () {
            a.continuousVertical && (a.loopTop || a.loopBottom) && (a.continuousVertical = !1, ut("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), a.scrollBar && a.scrollOverflow && ut("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), a.continuousVertical && a.scrollBar && (a.continuousVertical = !1, ut("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), t.each(a.anchors, function (e, i) {
                (t("#" + i).length || t('[name="' + i + '"]').length) && ut("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")
            })
        }(), t.extend(t.easing, {
            easeInOutCubic: function (t, e, i, n, o) {
                return 1 > (e /= o / 2) ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
            }
        }), t.extend(t.easing, {
            easeInQuart: function (t, e, i, n, o) {
                return n * (e /= o) * e * e * e + i
            }
        }), dt.setAutoScrolling = function (e, i) {
            lt("autoScrolling", e, i);
            var n = t(".fp-section.active");
            a.autoScrolling && !a.scrollBar ? (ct.css({overflow: "hidden", height: "100%"}), dt.setRecordHistory(a.recordHistory, "internal"), bt.css({"-ms-touch-action": "none", "touch-action": "none"}), n.length && ot(n.position().top)) : (ct.css({overflow: "visible", height: "initial"}), dt.setRecordHistory(!1, "internal"), bt.css({"-ms-touch-action": "", "touch-action": ""}), ot(0), n.length && ct.scrollTop(n.position().top))
        }, dt.setRecordHistory = function (t, e) {
            lt("recordHistory", t, e)
        }, dt.setScrollingSpeed = function (t, e) {
            lt("scrollingSpeed", t, e)
        }, dt.setFitToSection = function (t, e) {
            lt("fitToSection", t, e)
        }, dt.setLockAnchors = function (t) {
            a.lockAnchors = t
        }, dt.setMouseWheelScrolling = function (t) {
            t ? i.addEventListener ? (i.addEventListener("mousewheel", b, !1), i.addEventListener("wheel", b, !1), i.addEventListener("DOMMouseScroll", b, !1)) : i.attachEvent("onmousewheel", b) : i.addEventListener ? (i.removeEventListener("mousewheel", b, !1), i.removeEventListener("wheel", b, !1), i.removeEventListener("DOMMouseScroll", b, !1)) : i.detachEvent("onmousewheel", b)
        }, dt.setAllowScrolling = function (e, i) {
            "undefined" != typeof i ? (i = i.replace(/ /g, "").split(","), t.each(i, function (t, i) {
                st(e, i, "m")
            })) : e ? (dt.setMouseWheelScrolling(!0), J()) : (dt.setMouseWheelScrolling(!1), tt())
        }, dt.setKeyboardScrolling = function (e, i) {
            "undefined" != typeof i ? (i = i.replace(/ /g, "").split(","), t.each(i, function (t, i) {
                st(e, i, "k")
            })) : a.keyboardScrolling = e
        }, dt.moveSectionUp = function () {
            var e = t(".fp-section.active").prev(".fp-section");
            e.length || !a.loopTop && !a.continuousVertical || (e = t(".fp-section").last()), e.length && T(e, null, !0)
        }, dt.moveSectionDown = function () {
            var e = t(".fp-section.active").next(".fp-section");
            e.length || !a.loopBottom && !a.continuousVertical || (e = t(".fp-section").first()), !e.length || a.onBeforeMoveSection && t.isFunction(a.onBeforeMoveSection) && !1 === a.onBeforeMoveSection.call(this, direction, currentSlide, destiny, slides, activeSection) || T(e, null, !1)
        }, dt.silentMoveTo = function (t, e) {
            dt.setScrollingSpeed(0, "internal"), dt.moveTo(t, e), dt.setScrollingSpeed(Ot.scrollingSpeed, "internal")
        }, dt.moveTo = function (t, e) {
            var i = B(t);
            "undefined" != typeof e ? U(t, e) : 0 < i.length && T(i)
        }, dt.moveSlideRight = function () {
            w("next")
        }, dt.moveSlideLeft = function () {
            w("prev")
        }, dt.reBuild = function (e) {
            if (!bt.hasClass("fp-destroyed")) {
                xt = !0;
                var i = r.width();
                wt = r.height(), a.resize && M(wt, i), t(".fp-section").each(function () {
                    var e = t(this).find(".fp-slides"), i = t(this).find(".fp-slide");
                    a.verticalCentered && t(this).find(".fp-tableCell").css("height", H(t(this)) + "px"), t(this).css("height", wt + "px"), a.scrollOverflow && (i.length ? i.each(function () {
                        q(t(this))
                    }) : q(t(this))), 1 < i.length && O(e, e.find(".fp-slide.active"))
                }), (i = t(".fp-section.active").index(".fp-section")) && dt.silentMoveTo(i + 1), xt = !1, t.isFunction(a.afterResize) && e && a.afterResize.call(bt), t.isFunction(a.afterReBuild) && !e && a.afterReBuild.call(bt)
            }
        }, dt.setResponsive = function (e) {
            var i = bt.hasClass("fp-responsive");
            e ? i || (dt.setAutoScrolling(!1, "internal"), dt.setFitToSection(!1, "internal"), t("#fp-nav").hide(), bt.addClass("fp-responsive")) : i && (dt.setAutoScrolling(Ot.autoScrolling, "internal"), dt.setFitToSection(Ot.autoScrolling, "internal"), t("#fp-nav").show(), bt.removeClass("fp-responsive"))
        };
        var pt, ft, mt, gt, vt = !1, yt = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), _t = "ontouchstart" in e || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints, bt = t(this), wt = r.height(), xt = !1, Tt = !0, St = [], Ct = {m: {up: !0, down: !0, left: !0, right: !0}};
        Ct.k = t.extend(!0, {}, Ct.m);
        var kt, Et, Pt, At, Lt, zt, Ot = t.extend(!0, {}, a);
        t(this).length && (bt.css({height: "100%", position: "relative"}), bt.addClass("fullpage-wrapper"), t("html").addClass("fp-enabled")), a.css3 && (a.css3 = K()), dt.setAllowScrolling(!0), bt.removeClass("fp-destroyed"), t(a.sectionSelector).each(function () {
            t(this).addClass("fp-section")
        }), t(a.slideSelector).each(function () {
            t(this).addClass("fp-slide")
        }), a.navigation && u(), t(".fp-section").each(function (e) {
            var i = t(this), n = t(this).find(".fp-slide"), o = n.length;
            if (e || 0 !== t(".fp-section.active").length || t(this).addClass("active"), t(this).css("height", wt + "px"), a.paddingTop && t(this).css("padding-top", a.paddingTop), a.paddingBottom && t(this).css("padding-bottom", a.paddingBottom), "undefined" != typeof a.sectionsColor[e] && t(this).css("background-color", a.sectionsColor[e]), "undefined" != typeof a.anchors[e] && (t(this).attr("data-anchor", a.anchors[e]), t(this).hasClass("active") && j(a.anchors[e], e)), 0 < o) {
                e = 100 * o;
                var r = 100 / o;
                n.wrapAll('<div class="fp-slidesContainer" />'), n.parent().wrap('<div class="fp-slides" />'), t(this).find(".fp-slidesContainer").css("width", e + "%"), 1 < o && (a.controlArrows && l(t(this)), a.slidesNavigation && Y(t(this), o)), n.each(function (e) {
                    t(this).css("width", r + "%"), a.verticalCentered && $(t(this))
                }), i = i.find(".fp-slide.active"), i.length ? nt(i) : n.eq(0).addClass("active")
            } else a.verticalCentered && $(t(this))
        }).promise().done(function () {
            dt.setAutoScrolling(a.autoScrolling, "internal");
            var n = t(".fp-section.active").find(".fp-slide.active");
            if (n.length && (0 !== t(".fp-section.active").index(".fp-section") || 0 === t(".fp-section.active").index(".fp-section") && 0 !== n.index()) && nt(n), a.fixedElements && a.css3 && t(a.fixedElements).appendTo(ht), a.navigation && (mt.css("margin-top", "-" + mt.height() / 2 + "px"), mt.find("li").eq(t(".fp-section.active").index(".fp-section")).find("a").addClass("active")), a.menu && a.css3 && t(a.menu).closest(".fullpage-wrapper").length && t(a.menu).appendTo(ht), a.scrollOverflow ? ("complete" === i.readyState && c(), r.on("load", c)) : h(), D(), !a.animateAnchor && (n = e.location.hash.replace("#", "").split("/")[0], n.length)) {
                var o = t('[data-anchor="' + n + '"]');
                o.length && (a.autoScrolling ? ot(o.position().top) : (ot(0), ct.scrollTop(o.position().top)), j(n, null), t.isFunction(a.afterLoad) && a.afterLoad.call(o, n, o.index(".fp-section") + 1), o.addClass("active").siblings().removeClass("active"))
            }
            Z(), r.on("load", function () {
                var t = e.location.hash.replace("#", "").split("/"), i = t[0], t = t[1];
                i && U(i, t)
            })
        });
        var It = !1;
        r.on("scroll", d);
        var Dt = 0, Rt = 0, Mt = 0, jt = 0, Nt = (new Date).getTime();
        r.on("hashchange", L), s.keydown(function (e) {
            clearTimeout(zt);
            var i = t(":focus");
            i.is("textarea") || i.is("input") || i.is("select") || !a.keyboardScrolling || !a.autoScrolling || (-1 < t.inArray(e.which, [40, 38, 32, 33, 34]) && e.preventDefault(), zt = setTimeout(function () {
                var i = e.shiftKey;
                switch (gt = e.ctrlKey, e.which) {
                    case 38:
                    case 33:
                        Ct.k.up && dt.moveSectionUp();
                        break;
                    case 32:
                        if (i && Ct.k.up) {
                            dt.moveSectionUp();
                            break
                        }
                    case 40:
                    case 34:
                        Ct.k.down && dt.moveSectionDown();
                        break;
                    case 36:
                        Ct.k.up && dt.moveTo(1);
                        break;
                    case 35:
                        Ct.k.down && dt.moveTo(t(".fp-section").length);
                        break;
                    case 37:
                        Ct.k.left && dt.moveSlideLeft();
                        break;
                    case 39:
                        Ct.k.right && dt.moveSlideRight()
                }
            }, 150))
        }), s.keyup(function (t) {
            gt = t.ctrlKey
        }), t(e).blur(function () {
            gt = !1
        }), bt.mousedown(function (t) {
            2 == t.which && (qt = t.pageY, bt.on("mousemove", z))
        }), bt.mouseup(function (t) {
            2 == t.which && bt.off("mousemove")
        });
        var qt = 0;
        s.on("click touchstart", "#fp-nav a", function (e) {
            e.preventDefault(), e = t(this).parent().index(), T(t(".fp-section").eq(e))
        }), s.on("click touchstart", ".fp-slidesNav a", function (e) {
            e.preventDefault(), e = t(this).closest(".fp-section").find(".fp-slides");
            var i = e.find(".fp-slide").eq(t(this).closest("li").index());
            O(e, i)
        }), a.normalScrollElements && (s.on("mouseenter", a.normalScrollElements, function () {
            dt.setMouseWheelScrolling(!1)
        }), s.on("mouseleave", a.normalScrollElements, function () {
            dt.setMouseWheelScrolling(!0)
        })), t(".fp-section").on("click touchstart", ".fp-controlArrow", function () {
            t(this).hasClass("fp-prev") ? Ct.m.left && dt.moveSlideLeft() : Ct.m.right && dt.moveSlideRight()
        }), r.resize(I);
        var Ft = wt;
        dt.destroy = function (e) {
            dt.setAutoScrolling(!1, "internal"), dt.setAllowScrolling(!1), dt.setKeyboardScrolling(!1), bt.addClass("fp-destroyed"), clearTimeout(Pt), clearTimeout(Et), clearTimeout(kt), clearTimeout(At), clearTimeout(Lt), r.off("scroll", d).off("hashchange", L).off("resize", I), s.off("click", "#fp-nav a").off("mouseenter", "#fp-nav li").off("mouseleave", "#fp-nav li").off("click", ".fp-slidesNav a").off("mouseover", a.normalScrollElements).off("mouseout", a.normalScrollElements), t(".fp-section").off("click", ".fp-controlArrow"), e && at()
        }
    }
}), function (e) {
    jQuery.fn.extend({
        slimScroll: function (i) {
            var n = e.extend({width: "auto", height: "250px", size: "7px", color: "#000", position: "right", distance: "1px", start: "top", opacity: .4, alwaysVisible: !1, disableFadeOut: !1, railVisible: !1, railColor: "#333", railOpacity: .2, railDraggable: !0, railClass: "slimScrollRail", barClass: "slimScrollBar", wrapperClass: "slimScrollDiv", allowPageScroll: !1, wheelStep: 20, touchScrollStep: 200, borderRadius: "7px", railBorderRadius: "7px"}, i);
            return this.each(function () {
                function o(t) {
                    if (h) {
                        t = t || window.event;
                        var i = 0;
                        t.wheelDelta && (i = -t.wheelDelta / 120), t.detail && (i = t.detail / 3), e(t.target || t.srcTarget || t.srcElement).closest("." + n.wrapperClass).is(b.parent()) && r(i, !0), t.preventDefault && !_ && t.preventDefault(), _ || (t.returnValue = !1)
                    }
                }

                function r(t, e, i) {
                    _ = !1;
                    var o = t, r = b.outerHeight() - x.outerHeight();
                    e && (o = parseInt(x.css("top")) + t * parseInt(n.wheelStep) / 100 * x.outerHeight(), o = Math.min(Math.max(o, 0), r), o = 0 < t ? Math.ceil(o) : Math.floor(o), x.css({top: o + "px"})), v = parseInt(x.css("top")) / (b.outerHeight() - x.outerHeight()), o = v * (b[0].scrollHeight - b.outerHeight()), i && (o = t, t = o / b[0].scrollHeight * b.outerHeight(), t = Math.min(Math.max(t, 0), r), x.css({top: t + "px"})), b.scrollTop(o), b.trigger("slimscrolling", ~~o), u(), c()
                }

                function s() {
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", o, !1), this.addEventListener("mousewheel", o, !1)) : document.attachEvent("onmousewheel", o)
                }

                function a() {
                    window.removeEventListener ? (this.removeEventListener("DOMMouseScroll", o), this.removeEventListener("mousewheel", o)) : document.detachEvent("onmousewheel", o)
                }

                function l() {
                    g = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), 30), x.css({height: g + "px"});
                    var t = g == b.outerHeight() ? "none" : "block";
                    x.css({display: t})
                }

                function u() {
                    l(), clearTimeout(f), v == ~~v ? (_ = n.allowPageScroll, y != v && b.trigger("slimscroll", 0 == ~~v ? "top" : "bottom")) : _ = !1, y = v, g >= b.outerHeight() ? _ = !0 : (x.stop(!0, !0).fadeIn("fast"), n.railVisible && T.stop(!0, !0).fadeIn("fast"))
                }

                function c() {
                    n.alwaysVisible || (f = setTimeout(function () {
                        n.disableFadeOut && h || d || p || (x.fadeOut("slow"), T.fadeOut("slow"))
                    }, 1e3))
                }

                var h, d, p, f, m, g, v, y, _ = !1, b = e(this);
                if (b.parent().hasClass(n.wrapperClass)) {
                    var w = b.scrollTop(), x = b.parent().find("." + n.barClass), T = b.parent().find("." + n.railClass);
                    if (l(), e.isPlainObject(i)) {
                        if ("height" in i && "auto" == i.height) {
                            b.parent().css("height", "auto"), b.css("height", "auto");
                            var S = b.parent().parent().height();
                            b.parent().css("height", S), b.css("height", S)
                        }
                        if ("scrollTo" in i) w = parseInt(n.scrollTo); else if ("scrollBy" in i) w += parseInt(n.scrollBy); else if ("destroy" in i) return a(), x.remove(), T.remove(), void b.unwrap();
                        r(w, !1, !0)
                    }
                } else {
                    n.height = "auto" == i.height ? b.parent().height() : i.height, w = e("<div></div>").addClass(n.wrapperClass).css({position: "relative", overflow: "hidden", width: n.width, height: n.height}), b.css({overflow: "hidden", width: n.width, height: n.height});
                    var T = e("<div></div>").addClass(n.railClass).css({width: n.size, height: "100%", position: "absolute", top: 0, display: n.alwaysVisible && n.railVisible ? "block" : "none", "border-radius": n.railBorderRadius, background: n.railColor, opacity: n.railOpacity, zIndex: 90}),
                        x = e("<div></div>").addClass(n.barClass).css({background: n.color, width: n.size, position: "absolute", top: 0, opacity: n.opacity, display: n.alwaysVisible ? "block" : "none", "border-radius": n.borderRadius, BorderRadius: n.borderRadius, MozBorderRadius: n.borderRadius, WebkitBorderRadius: n.borderRadius, zIndex: 99}), S = "right" == n.position ? {right: n.distance} : {left: n.distance};
                    T.css(S), x.css(S), b.wrap(w), b.parent().append(x), b.parent().append(T), n.railDraggable && x.bind("mousedown", function (i) {
                        var n = e(document);
                        return p = !0, t = parseFloat(x.css("top")), pageY = i.pageY, n.bind("mousemove.slimscroll", function (e) {
                            currTop = t + e.pageY - pageY, x.css("top", currTop), r(0, x.position().top, !1)
                        }), n.bind("mouseup.slimscroll", function (t) {
                            p = !1, c(), n.unbind(".slimscroll")
                        }), !1
                    }).bind("selectstart.slimscroll", function (t) {
                        return t.stopPropagation(), t.preventDefault(), !1
                    }), T.hover(function () {
                        u()
                    }, function () {
                        c()
                    }), x.hover(function () {
                        d = !0
                    }, function () {
                        d = !1
                    }), b.hover(function () {
                        h = !0, u(), c()
                    }, function () {
                        h = !1, c()
                    }), b.bind("touchstart", function (t, e) {
                        t.originalEvent.touches.length && (m = t.originalEvent.touches[0].pageY)
                    }), b.bind("touchmove", function (t) {
                        _ || t.originalEvent.preventDefault(), t.originalEvent.touches.length && (r((m - t.originalEvent.touches[0].pageY) / n.touchScrollStep, !0), m = t.originalEvent.touches[0].pageY)
                    }), l(), "bottom" === n.start ? (x.css({top: b.outerHeight() - x.outerHeight()}), r(0, !0)) : "top" !== n.start && (r(e(n.start).position().top, null, !0), n.alwaysVisible || x.hide()), s()
                }
            }), this
        }
    }), jQuery.fn.extend({slimscroll: jQuery.fn.slimScroll})
}(jQuery);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var n = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++])) ;
            return i
        }, o = function (t, e, n) {
            i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = o.prototype.render
        }, r = 1e-10, s = i._internals, a = s.isSelector, l = s.isArray, u = o.prototype = i.to({}, .1, {}), c = [];
        o.version = "1.17.0", u.constructor = o, u.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf, o.getTweensOf = i.getTweensOf, o.lagSmoothing = i.lagSmoothing, o.ticker = i.ticker, o.render = i.render, u.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, u.updateTo = function (t, e) {
            var n, o = this.ratio, r = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (n in t) this.vars[n] = t[n];
            if (this._initted || r) if (e) this._initted = !1, r && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var s = this._time;
                this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
            } else if (this._time > 0 || r) {
                this._initted = !1, this._init();
                for (var a, l = 1 / (1 - o), u = this._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next
            }
            return this
        }, u.render = function (t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, o, a, l, u, c, h, d, p = this._dirty ? this.totalDuration() : this._totalDuration, f = this._time, m = this._totalTime, g = this._cycle, v = this._duration, y = this._rawPrevTime;
            if (t >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, o = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || y < 0 || y === r) && y !== t && (i = !0, y > r && (o = "onReverseComplete")), this._rawPrevTime = d = !e || t || y === t ? t : r)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && y > 0) && (o = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = d = !e || t || y === t ? t : r)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType ? (u = this._time / v, c = this._easeType, h = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / v < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / v)), f === this._time && !i && g === this._cycle) return void (m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = f, this._totalTime = m, this._rawPrevTime = y, this._cycle = g, s.lazyTweens.push(this), void (this._lazy = [t, e]);
                this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : o || (o = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== v || e || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
            this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), o && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o), 0 === v && this._rawPrevTime === r && d !== r && (this._rawPrevTime = 0)))
        }, o.to = function (t, e, i) {
            return new o(t, e, i)
        }, o.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new o(t, e, i)
        }, o.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new o(t, e, n)
        }, o.staggerTo = o.allTo = function (t, e, r, s, u, h, d) {
            s = s || 0;
            var p, f, m, g, v = r.delay || 0, y = [], _ = function () {
                r.onComplete && r.onComplete.apply(r.onCompleteScope || this, arguments), u.apply(d || r.callbackScope || this, h || c)
            };
            for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], s < 0 && (t = n(t), t.reverse(), s *= -1), p = t.length - 1, m = 0; m <= p; m++) {
                f = {};
                for (g in r) f[g] = r[g];
                f.delay = v, m === p && u && (f.onComplete = _), y[m] = new o(t[m], e, f), v += s
            }
            return y
        }, o.staggerFrom = o.allFrom = function (t, e, i, n, r, s, a) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, o.staggerTo(t, e, i, n, r, s, a)
        }, o.staggerFromTo = o.allFromTo = function (t, e, i, n, r, s, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, o.staggerTo(t, e, n, r, s, a, l)
        }, o.delayedCall = function (t, e, i, n, r) {
            return new o(e, 0, {delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, useFrames: r, overwrite: 0})
        }, o.set = function (t, e) {
            return new o(t, 0, e)
        }, o.isTweening = function (t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var h = function (t, e) {
            for (var n = [], o = 0, r = t._first; r;) r instanceof i ? n[o++] = r : (e && (n[o++] = r), n = n.concat(h(r, e)), o = n.length), r = r._next;
            return n
        }, d = o.getAllTweens = function (e) {
            return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
        };
        o.killAll = function (t, i, n, o) {
            null == i && (i = !0), null == n && (n = !0);
            var r, s, a, l = d(0 != o), u = l.length, c = i && n && o;
            for (a = 0; a < u; a++) s = l[a], (c || s instanceof e || (r = s.target === s.vars.onComplete) && n || i && !r) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
        }, o.killChildTweensOf = function (t, e) {
            if (null != t) {
                var r, u, c, h, d, p = s.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t)) for (h = t.length; --h > -1;) o.killChildTweensOf(t[h], e); else {
                    r = [];
                    for (c in p) for (u = p[c].target.parentNode; u;) u === t && (r = r.concat(p[c].tweens)), u = u.parentNode;
                    for (d = r.length, h = 0; h < d; h++) e && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(!1, !1)
                }
            }
        };
        var p = function (t, i, n, o) {
            i = i !== !1, n = n !== !1, o = o !== !1;
            for (var r, s, a = d(o), l = i && n && o, u = a.length; --u > -1;) s = a[u], (l || s instanceof e || (r = s.target === s.vars.onComplete) && n || i && !r) && s.paused(t)
        };
        return o.pauseAll = function (t, e, i) {
            p(!0, t, e, i)
        }, o.resumeAll = function (t, e, i) {
            p(!1, t, e, i)
        }, o.globalTimeScale = function (e) {
            var n = t._rootTimeline, o = i.ticker.time;
            return arguments.length ? (e = e || r, n._startTime = o - (o - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, o = i.ticker.frame, n._startTime = o - (o - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
        }, u.progress = function (t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, u.totalProgress = function (t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }, u.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, u.duration = function (e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, u.totalDuration = function (t) {
            return arguments.length ? this._repeat === -1 ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, u.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, o
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var n = function (t) {
            e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var i, n, o = this.vars;
            for (n in o) i = o[n], l(i) && i.join("").indexOf("{self}") !== -1 && (o[n] = this._swapSelfInParams(i));
            l(o.tweens) && this.add(o.tweens, 0, o.align, o.stagger)
        }, o = 1e-10, r = i._internals, s = n._internals = {}, a = r.isSelector, l = r.isArray, u = r.lazyTweens, c = r.lazyRender, h = [], d = _gsScope._gsDefine.globals, p = function (t) {
            var e, i = {};
            for (e in t) i[e] = t[e];
            return i
        }, f = s.pauseCallback = function (t, e, i, n) {
            var r, s = t._timeline, a = s._totalTime, l = t._startTime, u = t._rawPrevTime < 0 || 0 === t._rawPrevTime && s._reversed, c = u ? 0 : o, d = u ? o : 0;
            if (e || !this._forcingPlayhead) {
                for (s.pause(l), r = t._prev; r && r._startTime === l;) r._rawPrevTime = d, r = r._prev;
                for (r = t._next; r && r._startTime === l;) r._rawPrevTime = c, r = r._next;
                e && e.apply(n || s.vars.callbackScope || s, i || h), !this._forcingPlayhead && s._paused || s.seek(a)
            }
        }, m = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++])) ;
            return i
        }, g = n.prototype = new e;
        return n.version = "1.17.0", g.constructor = n, g.kill()._gc = g._forcingPlayhead = !1, g.to = function (t, e, n, o) {
            var r = n.repeat && d.TweenMax || i;
            return e ? this.add(new r(t, e, n), o) : this.set(t, n, o)
        }, g.from = function (t, e, n, o) {
            return this.add((n.repeat && d.TweenMax || i).from(t, e, n), o)
        }, g.fromTo = function (t, e, n, o, r) {
            var s = o.repeat && d.TweenMax || i;
            return e ? this.add(s.fromTo(t, e, n, o), r) : this.set(t, o, r)
        }, g.staggerTo = function (t, e, o, r, s, l, u, c) {
            var h, d = new n({onComplete: l, onCompleteParams: u, callbackScope: c, smoothChildTiming: this.smoothChildTiming});
            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), r = r || 0, r < 0 && (t = m(t), t.reverse(), r *= -1), h = 0; h < t.length; h++) o.startAt && (o.startAt = p(o.startAt)), d.to(t[h], e, p(o), h * r);
            return this.add(d, s)
        }, g.staggerFrom = function (t, e, i, n, o, r, s, a) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, o, r, s, a)
        }, g.staggerFromTo = function (t, e, i, n, o, r, s, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, o, r, s, a, l)
        }, g.call = function (t, e, n, o) {
            return this.add(i.delayedCall(0, t, e, n), o)
        }, g.set = function (t, e, n) {
            return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
        }, n.exportRoot = function (t, e) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var o, r, s = new n(t), a = s._timeline;
            for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, o = a._first; o;) r = o._next, e && o instanceof i && o.target === o.vars.onComplete || s.add(o, o._startTime - o._delay), o = r;
            return a.add(s, 0), s
        }, g.add = function (o, r, s, a) {
            var u, c, h, d, p, f;
            if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, o)), !(o instanceof t)) {
                if (o instanceof Array || o && o.push && l(o)) {
                    for (s = s || "normal", a = a || 0, u = r, c = o.length, h = 0; h < c; h++) l(d = o[h]) && (d = new n({tweens: d})), this.add(d, u), "string" != typeof d && "function" != typeof d && ("sequence" === s ? u = d._startTime + d.totalDuration() / d._timeScale : "start" === s && (d._startTime -= d.delay())), u += a;
                    return this._uncache(!0)
                }
                if ("string" == typeof o) return this.addLabel(o, r);
                if ("function" != typeof o) throw"Cannot add " + o + " into the timeline; it is not a tween, timeline, function, or string.";
                o = i.delayedCall(0, o)
            }
            if (e.prototype.add.call(this, o, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (p = this, f = p.rawTime() > o._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
            return this
        }, g.remove = function (e) {
            if (e instanceof t) return this._remove(e, !1);
            if (e instanceof Array || e && e.push && l(e)) {
                for (var i = e.length; --i > -1;) this.remove(e[i]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, g._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);
            var n = this._last;
            return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, g.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, g.insert = g.insertMultiple = function (t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }, g.appendMultiple = function (t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }, g.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, g.addPause = function (t, e, n, o) {
            var r = i.delayedCall(0, f, ["{self}", e, n, o], this);
            return r.data = "isPause", this.add(r, t)
        }, g.removeLabel = function (t) {
            return delete this._labels[t], this
        }, g.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, g._parseTimeOrLabel = function (e, i, n, o) {
            var r;
            if (o instanceof t && o.timeline === this) this.remove(o); else if (o && (o instanceof Array || o.push && l(o))) for (r = o.length; --r > -1;) o[r] instanceof t && o[r].timeline === this && this.remove(o[r]);
            if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration()); else {
                if (r = e.indexOf("="), r === -1) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, n) : this.duration()
            }
            return Number(e) + i
        }, g.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }, g.stop = function () {
            return this.paused(!0)
        }, g.gotoAndPlay = function (t, e) {
            return this.play(t, e)
        }, g.gotoAndStop = function (t, e) {
            return this.pause(t, e)
        }, g.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, s, a, l, h = this._dirty ? this.totalDuration() : this._totalDuration, d = this._time, p = this._startTime, f = this._timeScale, m = this._paused;
            if (t >= h) this._totalTime = this._time = h, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === o) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > o && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : o, t = h + 1e-4; else if (t < 1e-7) if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== o && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t; else {
                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : o, 0 === t && r) for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                t = 0, this._initted || (l = !0)
            } else this._totalTime = this._time = this._rawPrevTime = t;
            if (this._time !== d && this._first || i || l) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= d) for (n = this._first; n && (s = n._next, !this._paused || m);) (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                    n = s; else for (n = this._last; n && (s = n._prev, !this._paused || m);) (n._active || n._startTime <= d && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                this._onUpdate && (e || (u.length && c(), this._callback("onUpdate"))), a && (this._gc || p !== this._startTime && f === this._timeScale || (0 === this._time || h >= this.totalDuration()) && (r && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
            }
        }, g._hasPausedChild = function () {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                t = t._next
            }
            return !1
        }, g.getChildren = function (t, e, n, o) {
            o = o || -9999999999;
            for (var r = [], s = this._first, a = 0; s;) s._startTime < o || (s instanceof i ? e !== !1 && (r[a++] = s) : (n !== !1 && (r[a++] = s), t !== !1 && (r = r.concat(s.getChildren(!0, e, n)), a = r.length))), s = s._next;
            return r
        }, g.getTweensOf = function (t, e) {
            var n, o, r = this._gc, s = [], a = 0;
            for (r && this._enabled(!0, !0), n = i.getTweensOf(t), o = n.length; --o > -1;) (n[o].timeline === this || e && this._contains(n[o])) && (s[a++] = n[o]);
            return r && this._enabled(!1, !0), s
        }, g.recent = function () {
            return this._recent
        }, g._contains = function (t) {
            for (var e = t.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
            }
            return !1
        }, g.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var n, o = this._first, r = this._labels; o;) o._startTime >= i && (o._startTime += t), o = o._next;
            if (e) for (n in r) r[n] >= i && (r[n] += t);
            return this._uncache(!0)
        }, g._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, o = !1; --n > -1;) i[n]._kill(t, e) && (o = !0);
            return o
        }, g.clear = function (t) {
            var e = this.getChildren(!1, !0, !0), i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0)
        }, g.invalidate = function () {
            for (var e = this._first; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, g._enabled = function (t, i) {
            if (t === this._gc) for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
            return e.prototype._enabled.call(this, t, i)
        }, g.totalTime = function (e, i, n) {
            this._forcingPlayhead = !0;
            var o = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, o
        }, g.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, g.totalDuration = function (t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, o = this._last, r = 999999999999; o;) e = o._prev, o._dirty && o.totalDuration(), o._startTime > r && this._sortChildren && !o._paused ? this.add(o, o._startTime - o._delay) : r = o._startTime, o._startTime < 0 && !o._paused && (n -= o._startTime, this._timeline.smoothChildTiming && (this._startTime += o._startTime / this._timeScale), this.shiftChildren(-o._startTime, !1, -9999999999), r = 0), i = o._startTime + o._totalDuration / o._timeScale, i > n && (n = i), o = e;
                    this._duration = this._totalDuration = n, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
        }, g.paused = function (e) {
            if (!e) for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }, g.usesFrames = function () {
            for (var e = this._timeline; e._timeline;) e = e._timeline;
            return e === t._rootFramesTimeline
        }, g.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, n
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
        var n = function (e) {
            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
        }, o = 1e-10, r = e._internals, s = r.lazyTweens, a = r.lazyRender, l = new i(null, null, 1, 0), u = n.prototype = new t;
        return u.constructor = n, u.kill()._gc = !1, n.version = "1.17.0", u.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, u.addCallback = function (t, i, n, o) {
            return this.add(e.delayedCall(0, t, n, o), i)
        }, u.removeCallback = function (t, e) {
            if (t) if (null == e) this._kill(null, t); else for (var i = this.getTweensOf(t, !1), n = i.length, o = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === o && i[n]._enabled(!1, !1);
            return this
        }, u.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }, u.tweenTo = function (t, i) {
            i = i || {};
            var n, o, r, s = {ease: l, useFrames: this.usesFrames(), immediateRender: !1};
            for (o in i) s[o] = i[o];
            return s.time = this._parseTimeOrLabel(t), n = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, r = new e(this, n, s), s.onStart = function () {
                r.target.paused(!0), r.vars.time !== r.target.time() && n === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), i.onStart && r._callback("onStart")
            }, r
        }, u.tweenFromTo = function (t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {onComplete: this.seek, onCompleteParams: [t], callbackScope: this}, i.immediateRender = i.immediateRender !== !1;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }, u.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, l, u, c, h, d = this._dirty ? this.totalDuration() : this._totalDuration, p = this._duration, f = this._time, m = this._totalTime, g = this._startTime, v = this._timeScale, y = this._rawPrevTime, _ = this._paused, b = this._cycle;
            if (t >= d) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, u = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || y < 0 || y === o) && y !== t && this._first && (c = !0, y > o && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : o, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-4); else if (t < 1e-7) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === p && y !== o && (y > 0 || t < 0 && y >= 0) && !this._locked) && (u = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0, u = "onReverseComplete") : y >= 0 && this._first && (c = !0), this._rawPrevTime = t; else {
                if (this._rawPrevTime = p || !e || t || this._rawPrevTime === t ? t : o, 0 === t && r) for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                t = 0, this._initted || (c = !0)
            } else 0 === p && y < 0 && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (h = p + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time));
            if (this._cycle !== b && !this._locked) {
                var w = this._yoyo && 0 !== (1 & b), x = w === (this._yoyo && 0 !== (1 & this._cycle)), T = this._totalTime, S = this._cycle, C = this._rawPrevTime, k = this._time;
                if (this._totalTime = b * p, this._cycle < b ? w = !w : this._totalTime += p, this._time = f, this._rawPrevTime = 0 === p ? y - 1e-4 : y, this._cycle = b, this._locked = !0, f = w ? 0 : p, this.render(f, e, 0 === p), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), x && (f = w ? p + 1e-4 : -1e-4, this.render(f, !0, !1)), this._locked = !1, this._paused && !_) return;
                this._time = k, this._totalTime = T, this._cycle = S, this._rawPrevTime = C
            }
            if (!(this._time !== f && this._first || i || c)) return void (m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= f) for (n = this._first; n && (l = n._next, !this._paused || _);) (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l; else for (n = this._last; n && (l = n._prev, !this._paused || _);) (n._active || n._startTime <= f && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
            this._onUpdate && (e || (s.length && a(), this._callback("onUpdate"))), u && (this._locked || this._gc || g !== this._startTime && v === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (r && (s.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this._callback(u)))
        }, u.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n, o, r = [], s = this.getChildren(t, e, i), a = 0, l = s.length;
            for (n = 0; n < l; n++) o = s[n], o.isActive() && (r[a++] = o);
            return r
        }, u.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), n = i.length;
            for (e = 0; e < n; e++) if (i[e].time > t) return i[e].name;
            return null
        }, u.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;) if (e[i].time < t) return e[i].name;
            return null
        }, u.getLabelsArray = function () {
            var t, e = [], i = 0;
            for (t in this._labels) e[i++] = {time: this._labels[t], name: t};
            return e.sort(function (t, e) {
                return t.time - e.time
            }), e
        }, u.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, u.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, u.totalDuration = function (e) {
            return arguments.length ? this._repeat === -1 ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, u.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, u.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, u.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, n
    }, !0), function () {
        var t = 180 / Math.PI, e = [], i = [], n = [], o = {}, r = _gsScope._gsDefine.globals, s = function (t, e, i, n) {
            this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
        }, a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", l = function (t, e, i, n) {
            var o = {a: t}, r = {}, s = {}, a = {c: n}, l = (t + e) / 2, u = (e + i) / 2, c = (i + n) / 2, h = (l + u) / 2, d = (u + c) / 2, p = (d - h) / 8;
            return o.b = l + (t - l) / 4, r.b = h + p, o.c = r.a = (o.b + r.b) / 2, r.c = s.a = (h + d) / 2, s.b = d - p, a.b = c + (n - c) / 4, s.c = a.a = (s.b + a.b) / 2, [o, r, s, a]
        }, u = function (t, o, r, s, a) {
            var u, c, h, d, p, f, m, g, v, y, _, b, w, x = t.length - 1, T = 0, S = t[0].a;
            for (u = 0; u < x; u++) p = t[T], c = p.a, h = p.d, d = t[T + 1].d, a ? (_ = e[u], b = i[u], w = (b + _) * o * .25 / (s ? .5 : n[u] || .5), f = h - (h - c) * (s ? .5 * o : 0 !== _ ? w / _ : 0), m = h + (d - h) * (s ? .5 * o : 0 !== b ? w / b : 0), g = h - (f + ((m - f) * (3 * _ / (_ + b) + .5) / 4 || 0))) : (f = h - (h - c) * o * .5, m = h + (d - h) * o * .5, g = h - (f + m) / 2), f += g, m += g, p.c = v = f, 0 !== u ? p.b = S : p.b = S = p.a + .6 * (p.c - p.a), p.da = h - c, p.ca = v - c, p.ba = S - c, r ? (y = l(c, S, v, h), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, S = m;
            p = t[T], p.b = S, p.c = S + .4 * (p.d - S), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = S - p.a, r && (y = l(p.a, S, p.c, p.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
        }, c = function (t, n, o, r) {
            var a, l, u, c, h, d, p = [];
            if (r) for (t = [r].concat(t), l = t.length; --l > -1;) "string" == typeof (d = t[l][n]) && "=" === d.charAt(1) && (t[l][n] = r[n] + Number(d.charAt(0) + d.substr(2)));
            if (a = t.length - 2, a < 0) return p[0] = new s(t[0][n], 0, 0, t[a < -1 ? 0 : 1][n]), p;
            for (l = 0; l < a; l++) u = t[l][n], c = t[l + 1][n], p[l] = new s(u, 0, 0, c), o && (h = t[l + 2][n], e[l] = (e[l] || 0) + (c - u) * (c - u), i[l] = (i[l] || 0) + (h - c) * (h - c));
            return p[l] = new s(t[l][n], 0, 0, t[l + 1][n]), p
        }, h = function (t, r, s, l, h, d) {
            var p, f, m, g, v, y, _, b, w = {}, x = [], T = d || t[0];
            h = "string" == typeof h ? "," + h + "," : a, null == r && (r = 1);
            for (f in t[0]) x.push(f);
            if (t.length > 1) {
                for (b = t[t.length - 1], _ = !0, p = x.length; --p > -1;) if (f = x[p], Math.abs(T[f] - b[f]) > .05) {
                    _ = !1;
                    break
                }
                _ && (t = t.concat(), d && t.unshift(d), t.push(t[1]), d = t[t.length - 3])
            }
            for (e.length = i.length = n.length = 0, p = x.length; --p > -1;) f = x[p], o[f] = h.indexOf("," + f + ",") !== -1, w[f] = c(t, f, o[f], d);
            for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
            if (!l) {
                for (p = x.length; --p > -1;) if (o[f]) for (m = w[x[p]], y = m.length - 1, g = 0; g < y; g++) v = m[g + 1].da / i[g] + m[g].da / e[g], n[g] = (n[g] || 0) + v * v;
                for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
            }
            for (p = x.length, g = s ? 4 : 1; --p > -1;) f = x[p], m = w[f], u(m, r, s, l, o[f]), _ && (m.splice(0, g), m.splice(m.length - g, g));
            return w
        }, d = function (t, e, i) {
            e = e || "soft";
            var n, o, r, a, l, u, c, h, d, p, f, m = {}, g = "cubic" === e ? 3 : 2, v = "soft" === e, y = [];
            if (v && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw"invalid Bezier data";
            for (d in t[0]) y.push(d);
            for (u = y.length; --u > -1;) {
                for (d = y[u], m[d] = l = [], p = 0, h = t.length, c = 0; c < h; c++) n = null == i ? t[c][d] : "string" == typeof (f = t[c][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && c > 1 && c < h - 1 && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                for (h = p - g + 1, p = 0, c = 0; c < h; c += g) n = l[c], o = l[c + 1], r = l[c + 2], a = 2 === g ? 0 : l[c + 3], l[p++] = f = 3 === g ? new s(n, o, r, a) : new s(n, (2 * o + n) / 3, (2 * o + r) / 3, r);
                l.length = p
            }
            return m
        }, p = function (t, e, i) {
            for (var n, o, r, s, a, l, u, c, h, d, p, f = 1 / i, m = t.length; --m > -1;) for (d = t[m], r = d.a, s = d.d - r, a = d.c - r, l = d.b - r, n = o = 0, c = 1; c <= i; c++) u = f * c, h = 1 - u, n = o - (o = (u * u * s + 3 * h * (u * a + h * l)) * u), p = m * i + c - 1, e[p] = (e[p] || 0) + n * n
        }, f = function (t, e) {
            e = e >> 0 || 6;
            var i, n, o, r, s = [], a = [], l = 0, u = 0, c = e - 1, h = [], d = [];
            for (i in t) p(t[i], s, e);
            for (o = s.length, n = 0; n < o; n++) l += Math.sqrt(s[n]), r = n % e, d[r] = l, r === c && (u += l, r = n / e >> 0, h[r] = d, a[r] = u, l = 0, d = []);
            return {length: u, lengths: a, segments: h}
        }, m = _gsScope._gsDefine.plugin({
            propName: "bezier", priority: -1, version: "1.3.4", API: 2, global: !0, init: function (t, e, i) {
                this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var n, o, r, s, a, l = e.values || [], u = {}, c = l[0], p = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]] : null;
                for (n in c) this._props.push(n);
                for (r = this._props.length; --r > -1;) n = this._props[r], this._overwriteProps.push(n), o = this._func[n] = "function" == typeof t[n], u[n] = o ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : d(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                    var m = f(this._beziers, this._timeRes);
                    this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (p = this._autoRotate) for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), r = p.length; --r > -1;) {
                    for (s = 0; s < 3; s++) n = p[r][s], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                    n = p[r][2], this._initialRotations[r] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            }, set: function (e) {
                var i, n, o, r, s, a, l, u, c, h, d = this._segCount, p = this._func, f = this._target, m = e !== this._startRatio;
                if (this._timeRes) {
                    if (c = this._lengths, h = this._curSeg, e *= this._length, o = this._li, e > this._l2 && o < d - 1) {
                        for (u = d - 1; o < u && (this._l2 = c[++o]) <= e;) ;
                        this._l1 = c[o - 1], this._li = o, this._curSeg = h = this._segments[o], this._s2 = h[this._s1 = this._si = 0]
                    } else if (e < this._l1 && o > 0) {
                        for (; o > 0 && (this._l1 = c[--o]) >= e;) ;
                        0 === o && e < this._l1 ? this._l1 = 0 : o++, this._l2 = c[o], this._li = o, this._curSeg = h = this._segments[o], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                    }
                    if (i = o, e -= this._l1, o = this._si, e > this._s2 && o < h.length - 1) {
                        for (u = h.length - 1; o < u && (this._s2 = h[++o]) <= e;) ;
                        this._s1 = h[o - 1], this._si = o
                    } else if (e < this._s1 && o > 0) {
                        for (; o > 0 && (this._s1 = h[--o]) >= e;) ;
                        0 === o && e < this._s1 ? this._s1 = 0 : o++, this._s2 = h[o], this._si = o
                    }
                    a = (o + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                } else i = e < 0 ? 0 : e >= 1 ? d - 1 : d * e >> 0, a = (e - i * (1 / d)) * d;
                for (n = 1 - a, o = this._props.length; --o > -1;) r = this._props[o], s = this._beziers[r][i], l = (a * a * s.da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a, this._round[r] && (l = Math.round(l)), p[r] ? f[r](l) : f[r] = l;
                if (this._autoRotate) {
                    var g, v, y, _, b, w, x, T = this._autoRotate;
                    for (o = T.length; --o > -1;) r = T[o][2], w = T[o][3] || 0, x = T[o][4] === !0 ? 1 : t, s = this._beziers[T[o][0]], g = this._beziers[T[o][1]], s && g && (s = s[i], g = g[i], v = s.a + (s.b - s.a) * a, _ = s.b + (s.c - s.b) * a, v += (_ - v) * a, _ += (s.c + (s.d - s.c) * a - _) * a, y = g.a + (g.b - g.a) * a, b = g.b + (g.c - g.b) * a, y += (b - y) * a, b += (g.c + (g.d - g.c) * a - b) * a, l = m ? Math.atan2(b - y, _ - v) * x + w : this._initialRotations[o], p[r] ? f[r](l) : f[r] = l)
                }
            }
        }), g = m.prototype;
        m.bezierThrough = h, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function (t, e, i) {
            return new s(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, m._cssRegister = function () {
            var t = r.CSSPlugin;
            if (t) {
                var e = t._internals, i = e._parseToProxy, n = e._setPluginRatio, o = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function (t, e, r, s, a, l) {
                        e instanceof Array && (e = {values: e}), l = new m;
                        var u, c, h, d = e.values, p = d.length - 1, f = [], g = {};
                        if (p < 0) return a;
                        for (u = 0; u <= p; u++) h = i(t, d[u], s, a, l, p !== u), f[u] = h.end;
                        for (c in e) g[c] = e[c];
                        return g.values = f, a = new o(t, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (u = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != h.end.left ? [["left", "top", "rotation", u, !1]] : null != h.end.x && [["x", "y", "rotation", u, !1]]), g.autoRotate && (s._transform || s._enableTransforms(!1), h.autoRotate = s._target._gsTransform), l._onInitTween(h.proxy, g, s._tween), a
                    }
                })
            }
        }, g._roundProps = function (t, e) {
            for (var i = this._overwriteProps, n = i.length; --n > -1;) (t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
        }, g._kill = function (t) {
            var e, i, n = this._props;
            for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
        var i, n, o, r, s = function () {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
        }, a = _gsScope._gsDefine.globals, l = {}, u = s.prototype = new t("css");
        u.constructor = s, s.version = "1.17.0", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, u = "px", s.suffixMap = {top: u, right: u, bottom: u, left: u, width: u, height: u, fontSize: u, padding: u, margin: u, perspective: u, lineHeight: ""};
        var c, h, d, p, f, m, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g, v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, b = /(?:\d|\-|\+|=|#|\.)*/g, w = /opacity *= *([^)]*)/i, x = /opacity:([^;]*)/i, T = /alpha\(opacity *=.+?\)/i, S = /^(rgb|hsl)/, C = /([A-Z])/g, k = /-([a-z])/gi, E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, P = function (t, e) {
            return e.toUpperCase()
        }, A = /(?:Left|Right|Width)/i, L = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, z = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, O = /,(?=[^\)]*(?:\(|$))/gi, I = Math.PI / 180, D = 180 / Math.PI, R = {}, M = document, j = function (t) {
            return M.createElementNS ? M.createElementNS("http://www.w3.org/1999/xhtml", t) : M.createElement(t)
        }, N = j("div"), q = j("img"), F = s._internals = {_specialProps: l}, $ = navigator.userAgent, H = function () {
            var t = $.indexOf("Android"), e = j("a");
            return d = $.indexOf("Safari") !== -1 && $.indexOf("Chrome") === -1 && (t === -1 || Number($.substr(t + 8, 1)) > 3), f = d && Number($.substr($.indexOf("Version/") + 8, 1)) < 6, p = $.indexOf("Firefox") !== -1, (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec($) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec($)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
        }(), W = function (t) {
            return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, B = function (t) {
            window.console && console.log(t)
        }, U = "", X = "", Y = function (t, e) {
            e = e || N;
            var i, n, o = e.style;
            if (void 0 !== o[t]) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === o[i[n] + t];) ;
            return n >= 0 ? (X = 3 === n ? "ms" : i[n], U = "-" + X.toLowerCase() + "-", X + t) : null
        }, V = M.defaultView ? M.defaultView.getComputedStyle : function () {
        }, Q = s.getStyle = function (t, e, i, n, o) {
            var r;
            return H || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || V(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == o || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : o) : W(t)
        }, G = F.convertToPixels = function (t, i, n, o, r) {
            if ("px" === o || !o) return n;
            if ("auto" === o || !n) return 0;
            var a, l, u, c = A.test(i), h = t, d = N.style, p = n < 0;
            if (p && (n = -n), "%" === o && i.indexOf("border") !== -1) a = n / 100 * (c ? t.clientWidth : t.clientHeight); else {
                if (d.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== o && h.appendChild) d[c ? "borderLeftWidth" : "borderTopWidth"] = n + o; else {
                    if (h = t.parentNode || M.body, l = h._gsCache, u = e.ticker.frame, l && c && l.time === u) return l.width * n / 100;
                    d[c ? "width" : "height"] = n + o
                }
                h.appendChild(N), a = parseFloat(N[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(N), c && "%" === o && s.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.time = u, l.width = a / n * 100), 0 !== a || r || (a = G(t, i, n, o, !0))
            }
            return p ? -a : a
        }, Z = F.calculateOffset = function (t, e, i) {
            if ("absolute" !== Q(t, "position", i)) return 0;
            var n = "left" === e ? "Left" : "Top", o = Q(t, "margin" + n, i);
            return t["offset" + n] - (G(t, e, parseFloat(o), o.replace(b, "")) || 0)
        }, K = function (t, e) {
            var i, n, o, r = {};
            if (e = e || V(t, null)) if (i = e.length) for (; --i > -1;) o = e[i], o.indexOf("-transform") !== -1 && St !== o || (r[o.replace(k, P)] = e.getPropertyValue(o)); else for (i in e) i.indexOf("Transform") !== -1 && Tt !== i || (r[i] = e[i]); else if (e = t.currentStyle || t.style) for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(k, P)] = e[i]);
            return H || (r.opacity = W(t)), n = Mt(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, kt && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
        }, J = function (t, e, i, n, o) {
            var r, s, a, l = {}, u = t.style;
            for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (r = i[s]) || o && o[s]) && s.indexOf("Origin") === -1 && ("number" != typeof r && "string" != typeof r || (l[s] = "auto" !== r || "left" !== s && "top" !== s ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[s] || "" === e[s].replace(_, "") ? r : 0 : Z(t, s), void 0 !== u[s] && (a = new pt(u, s, u[s], a))));
            if (n) for (s in n) "className" !== s && (l[s] = n[s]);
            return {difs: l, firstMPT: a}
        }, tt = {width: ["Left", "Right"], height: ["Top", "Bottom"]}, et = ["marginLeft", "marginRight", "marginTop", "marginBottom"], it = function (t, e, i) {
            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), o = tt[e], r = o.length;
            for (i = i || V(t, null); --r > -1;) n -= parseFloat(Q(t, "padding" + o[r], i, !0)) || 0, n -= parseFloat(Q(t, "border" + o[r] + "Width", i, !0)) || 0;
            return n
        }, nt = function (t, e) {
            null != t && "" !== t && "auto" !== t && "auto auto" !== t || (t = "0 0");
            var i = t.split(" "), n = t.indexOf("left") !== -1 ? "0%" : t.indexOf("right") !== -1 ? "100%" : i[0], o = t.indexOf("top") !== -1 ? "0%" : t.indexOf("bottom") !== -1 ? "100%" : i[1];
            return null == o ? o = "center" === n ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === n || isNaN(parseFloat(n)) && (n + "").indexOf("=") === -1) && (n = "50%"), t = n + " " + o + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = n.indexOf("%") !== -1, e.oyp = o.indexOf("%") !== -1, e.oxr = "=" === n.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(n.replace(_, "")), e.oy = parseFloat(o.replace(_, "")), e.v = t), e || t
        }, ot = function (t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }, rt = function (t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
        }, st = function (t, e, i, n) {
            var o, r, s, a, l, u = 1e-6;
            return null == t ? a = e : "number" == typeof t ? a = t : (o = 360, r = t.split("_"), l = "=" === t.charAt(1), s = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (t.indexOf("rad") === -1 ? 1 : D) - (l ? 0 : e), r.length && (n && (n[i] = e + s), t.indexOf("short") !== -1 && (s %= o, s !== s % (o / 2) && (s = s < 0 ? s + o : s - o)), t.indexOf("_cw") !== -1 && s < 0 ? s = (s + 9999999999 * o) % o - (s / o | 0) * o : t.indexOf("ccw") !== -1 && s > 0 && (s = (s - 9999999999 * o) % o - (s / o | 0) * o)), a = e + s), a < u && a > -u && (a = 0), a
        }, at = {aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0]}, lt = function (t, e, i) {
            return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        }, ut = s.parseColor = function (t) {
            var e, i, n, o, r, s;
            return t && "" !== t ? "number" == typeof t ? [t >> 16, t >> 8 & 255, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t] ? at[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, t >> 8 & 255, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(g), o = Number(t[0]) % 360 / 360, r = Number(t[1]) / 100, s = Number(t[2]) / 100, i = s <= .5 ? s * (r + 1) : s + r - s * r, e = 2 * s - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = lt(o + 1 / 3, e, i), t[1] = lt(o, e, i), t[2] = lt(o - 1 / 3, e, i), t) : (t = t.match(g) || at.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : at.black
        }, ct = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (u in at) ct += "|" + u + "\\b";
        ct = new RegExp(ct + ")", "gi");
        var ht = function (t, e, i, n) {
            if (null == t) return function (t) {
                return t
            };
            var o, r = e ? (t.match(ct) || [""])[0] : "", s = t.split(r).join("").match(y) || [], a = t.substr(0, t.indexOf(s[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", u = t.indexOf(" ") !== -1 ? " " : ",", c = s.length, h = c > 0 ? s[0].replace(g, "") : "";
            return c ? o = e ? function (t) {
                var e, d, p, f;
                if ("number" == typeof t) t += h; else if (n && O.test(t)) {
                    for (f = t.replace(O, "|").split("|"), p = 0; p < f.length; p++) f[p] = o(f[p]);
                    return f.join(",")
                }
                if (e = (t.match(ct) || [r])[0], d = t.split(e).join("").match(y) || [], p = d.length, c > p--) for (; ++p < c;) d[p] = i ? d[(p - 1) / 2 | 0] : s[p];
                return a + d.join(u) + u + e + l + (t.indexOf("inset") !== -1 ? " inset" : "")
            } : function (t) {
                var e, r, d;
                if ("number" == typeof t) t += h; else if (n && O.test(t)) {
                    for (r = t.replace(O, "|").split("|"), d = 0; d < r.length; d++) r[d] = o(r[d]);
                    return r.join(",")
                }
                if (e = t.match(y) || [], d = e.length, c > d--) for (; ++d < c;) e[d] = i ? e[(d - 1) / 2 | 0] : s[d];
                return a + e.join(u) + l
            } : function (t) {
                return t
            }
        }, dt = function (t) {
            return t = t.split(","), function (e, i, n, o, r, s, a) {
                var l, u = (i + "").split(" ");
                for (a = {}, l = 0; l < 4; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                return o.parse(e, a, r, s)
            }
        }, pt = (F._setPluginRatio = function (t) {
            this.plugin.setRatio(t);
            for (var e, i, n, o, r = this.data, s = r.proxy, a = r.firstMPT, l = 1e-6; a;) e = s[a.v], a.r ? e = Math.round(e) : e < l && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
            if (r.autoRotate && (r.autoRotate.rotation = s.rotation), 1 === t) for (a = r.firstMPT; a;) {
                if (i = a.t, i.type) {
                    if (1 === i.type) {
                        for (o = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) o += i["xn" + n] + i["xs" + (n + 1)];
                        i.e = o
                    }
                } else i.e = i.s + i.xs0;
                a = a._next
            }
        }, function (t, e, i, n, o) {
            this.t = t, this.p = e, this.v = i, this.r = o, n && (n._prev = this, this._next = n)
        }), ft = (F._parseToProxy = function (t, e, i, n, o, r) {
            var s, a, l, u, c, h = n, d = {}, p = {}, f = i._transform, m = R;
            for (i._transform = null, R = e, n = c = i.parse(t, e, n, o), R = m, r && (i._transform = f, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                if (n.type <= 1 && (a = n.p, p[a] = n.s + n.c, d[a] = n.s, r || (u = new pt(n, "s", a, u, n.r), n.c = 0), 1 === n.type)) for (s = n.l; --s > 0;) l = "xn" + s, a = n.p + "_" + l, p[a] = n.data[l], d[a] = n[l], r || (u = new pt(n, l, a, u, n.rxp[l]));
                n = n._next
            }
            return {proxy: d, end: p, firstMPT: u, pt: c}
        }, F.CSSPropTween = function (t, e, n, o, s, a, l, u, c, h, d) {
            this.t = t, this.p = e, this.s = n, this.c = o, this.n = l || e, t instanceof ft || r.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === d ? n + o : d, s && (this._next = s, s._prev = this)
        }), mt = function (t, e, i, n, o, r) {
            var s = new ft(t, e, i, n - i, o, (-1), r);
            return s.b = i, s.e = s.xs0 = n, s
        }, gt = s.parseComplex = function (t, e, i, n, o, r, s, a, l, u) {
            i = i || r || "", s = new ft(t, e, 0, 0, s, u ? 2 : 1, null, (!1), a, i, n), n += "";
            var h, d, p, f, m, y, _, b, w, x, T, C, k = i.split(", ").join(",").split(" "), E = n.split(", ").join(",").split(" "), P = k.length, A = c !== !1;
            for (n.indexOf(",") === -1 && i.indexOf(",") === -1 || (k = k.join(" ").replace(O, ", ").split(" "), E = E.join(" ").replace(O, ", ").split(" "), P = k.length), P !== E.length && (k = (r || "").split(" "), P = k.length), s.plugin = l, s.setRatio = u, h = 0; h < P; h++) if (f = k[h], m = E[h], b = parseFloat(f), b || 0 === b) s.appendXtra("", b, ot(m, b), m.replace(v, ""), A && m.indexOf("px") !== -1, !0); else if (o && ("#" === f.charAt(0) || at[f] || S.test(f))) C = "," === m.charAt(m.length - 1) ? ")," : ")", f = ut(f), m = ut(m), w = f.length + m.length > 6, w && !H && 0 === m[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(E[h]).join("transparent")) : (H || (w = !1), s.appendXtra(w ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], w ? "," : C, !0), w && (f = f.length < 4 ? 1 : f[3], s.appendXtra("", f, (m.length < 4 ? 1 : m[3]) - f, C, !1))); else if (y = f.match(g)) {
                if (_ = m.match(v), !_ || _.length !== y.length) return s;
                for (p = 0, d = 0; d < y.length; d++) T = y[d], x = f.indexOf(T, p), s.appendXtra(f.substr(p, x - p), Number(T), ot(_[d], T), "", A && "px" === f.substr(x + T.length, 2), 0 === d), p = x + T.length;
                s["xs" + s.l] += f.substr(p)
            } else s["xs" + s.l] += s.l ? " " + f : f;
            if (n.indexOf("=") !== -1 && s.data) {
                for (C = s.xs0 + s.data.s, h = 1; h < s.l; h++) C += s["xs" + h] + s.data["xn" + h];
                s.e = C + s["xs" + h]
            }
            return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
        }, vt = 9;
        for (u = ft.prototype, u.l = u.pr = 0; --vt > 0;) u["xn" + vt] = 0, u["xs" + vt] = "";
        u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function (t, e, i, n, o, r) {
            var s = this, a = s.l;
            return s["xs" + a] += r && a ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = o, s["xn" + a] = e, s.plugin || (s.xfirst = new ft(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, o, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {s: e + i}, s.rxp = {}, s.s = e, s.c = i, s.r = o, s)) : (s["xs" + a] += e + (n || ""), s)
        };
        var yt = function (t, e) {
            e = e || {}, this.p = e.prefix ? Y(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ht(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        }, _t = F._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = {parser: i});
            var n, o, r = t.split(","), s = e.defaultValue;
            for (i = i || [s], n = 0; n < r.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, o = new yt(r[n], e)
        }, bt = function (t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                _t(t, {
                    parser: function (t, i, n, o, r, s, u) {
                        var c = a.com.greensock.plugins[e];
                        return c ? (c._cssRegister(), l[n].parse(t, i, n, o, r, s, u)) : (B("Error: " + e + " js file not loaded."), r)
                    }
                })
            }
        };
        u = yt.prototype, u.parseComplex = function (t, e, i, n, o, r) {
            var s, a, l, u, c, h, d = this.keyword;
            if (this.multi && (O.test(i) || O.test(e) ? (a = e.replace(O, "|").split("|"), l = i.replace(O, "|").split("|")) : d && (a = [e], l = [i])), l) {
                for (u = l.length > a.length ? l.length : a.length, s = 0; s < u; s++) e = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, d && (c = e.indexOf(d), h = i.indexOf(d), c !== h && (h === -1 ? a[s] = a[s].split(d).join("") : c === -1 && (a[s] += " " + d)));
                e = a.join(", "), i = l.join(", ")
            }
            return gt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, o, r)
        }, u.parse = function (t, e, i, n, r, s, a) {
            return this.parseComplex(t.style, this.format(Q(t, this.p, o, !1, this.dflt)), this.format(e), r, s)
        }, s.registerSpecialProp = function (t, e, i) {
            _t(t, {
                parser: function (t, n, o, r, s, a, l) {
                    var u = new ft(t, o, 0, 0, s, 2, o, (!1), i);
                    return u.plugin = a, u.setRatio = e(t, n, r._tween, o), u
                }, priority: i
            })
        }, s.useSVGTransformAttr = d || p;
        var wt, xt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Tt = Y("transform"), St = U + "transform", Ct = Y("transformOrigin"), kt = null !== Y("perspective"), Et = F.Transform = function () {
            this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(s.defaultForce3D === !1 || !kt) && (s.defaultForce3D || "auto")
        }, Pt = window.SVGElement, At = function (t, e, i) {
            var n, o = M.createElementNS("http://www.w3.org/2000/svg", t), r = /([a-z])([A-Z])/g;
            for (n in i) o.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(o), o
        }, Lt = M.documentElement, zt = function () {
            var t, e, i, n = m || /Android/i.test($) && !window.chrome;
            return M.createElementNS && !n && (t = At("svg", Lt), e = At("rect", t, {width: 100, height: 50, x: 100}), i = e.getBoundingClientRect().width, e.style[Ct] = "50% 50%", e.style[Tt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(p && kt), Lt.removeChild(t)), n
        }(), Ot = function (t, e, i, n, o) {
            var r, a, l, u, c, h, d, p, f, m, g, v, y, _, b = t._gsTransform, w = Rt(t, !0);
            b && (y = b.xOrigin, _ = b.yOrigin), (!n || (r = n.split(" ")).length < 2) && (d = t.getBBox(), e = nt(e).split(" "), r = [(e[0].indexOf("%") !== -1 ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (e[1].indexOf("%") !== -1 ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = u = parseFloat(r[0]), i.yOrigin = c = parseFloat(r[1]), n && w !== Dt && (h = w[0], d = w[1], p = w[2], f = w[3], m = w[4], g = w[5], v = h * f - d * p, a = u * (f / v) + c * (-p / v) + (p * g - f * m) / v, l = u * (-d / v) + c * (h / v) - (h * g - d * m) / v, u = i.xOrigin = r[0] = a, c = i.yOrigin = r[1] = l), b && (o || o !== !1 && s.defaultSmoothOrigin !== !1 ? (a = u - y, l = c - _, b.xOffset += a * w[0] + l * w[2] - a, b.yOffset += a * w[1] + l * w[3] - l) : b.xOffset = b.yOffset = 0), t.setAttribute("data-svg-origin", r.join(" "))
        }, It = function (t) {
            return !!(Pt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
        }, Dt = [1, 0, 0, 1, 0, 0], Rt = function (t, e) {
            var i, n, o, r, s, a = t._gsTransform || new Et, l = 1e5;
            if (Tt ? n = Q(t, St, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(L), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (a.svg || t.getBBox && It(t)) && (i && (t.style[Tt] + "").indexOf("matrix") !== -1 && (n = t.style[Tt], i = 0), o = t.getAttribute("transform"), i && o && (o.indexOf("matrix") !== -1 ? (n = o, i = 0) : o.indexOf("translate") !== -1 && (n = "matrix(1,0,0,1," + o.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Dt;
            for (o = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], vt = o.length; --vt > -1;) r = Number(o[vt]), o[vt] = (s = r - (r |= 0)) ? (s * l + (s < 0 ? -.5 : .5) | 0) / l + r : r;
            return e && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o
        }, Mt = F.getTransform = function (t, i, n, r) {
            if (t._gsTransform && n && !r) return t._gsTransform;
            var a, l, u, c, h, d, p = n ? t._gsTransform || new Et : new Et, f = p.scaleX < 0, m = 2e-5, g = 1e5, v = kt ? parseFloat(Q(t, Ct, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0, y = parseFloat(s.defaultTransformPerspective) || 0;
            if (p.svg = !(!t.getBBox || !It(t)), p.svg && (Ot(t, Q(t, Ct, o, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), wt = s.useSVGTransformAttr || zt), a = Rt(t), a !== Dt) {
                if (16 === a.length) {
                    var _, b, w, x, T, S = a[0], C = a[1], k = a[2], E = a[3], P = a[4], A = a[5], L = a[6], z = a[7], O = a[8], I = a[9], R = a[10], M = a[12], j = a[13], N = a[14], q = a[11], F = Math.atan2(L, R);
                    p.zOrigin && (N = -p.zOrigin, M = O * N - a[12], j = I * N - a[13], N = R * N + p.zOrigin - a[14]), p.rotationX = F * D, F && (x = Math.cos(-F), T = Math.sin(-F), _ = P * x + O * T, b = A * x + I * T, w = L * x + R * T, O = P * -T + O * x, I = A * -T + I * x, R = L * -T + R * x, q = z * -T + q * x, P = _, A = b, L = w), F = Math.atan2(O, R), p.rotationY = F * D, F && (x = Math.cos(-F), T = Math.sin(-F), _ = S * x - O * T, b = C * x - I * T, w = k * x - R * T, I = C * T + I * x, R = k * T + R * x, q = E * T + q * x, S = _, C = b, k = w), F = Math.atan2(C, S), p.rotation = F * D, F && (x = Math.cos(-F), T = Math.sin(-F), S = S * x + P * T, b = C * x + A * T, A = C * -T + A * x, L = k * -T + L * x, C = b), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY += 180), p.scaleX = (Math.sqrt(S * S + C * C) * g + .5 | 0) / g, p.scaleY = (Math.sqrt(A * A + I * I) * g + .5 | 0) / g, p.scaleZ = (Math.sqrt(L * L + R * R) * g + .5 | 0) / g, p.skewX = 0, p.perspective = q ? 1 / (q < 0 ? -q : q) : 0, p.x = M, p.y = j, p.z = N, p.svg && (p.x -= p.xOrigin - (p.xOrigin * S - p.yOrigin * P), p.y -= p.yOrigin - (p.yOrigin * C - p.xOrigin * A))
                } else if ((!kt || r || !a.length || p.x !== a[4] || p.y !== a[5] || !p.rotationX && !p.rotationY) && (void 0 === p.x || "none" !== Q(t, "display", i))) {
                    var $ = a.length >= 6, H = $ ? a[0] : 1, W = a[1] || 0, B = a[2] || 0, U = $ ? a[3] : 1;
                    p.x = a[4] || 0, p.y = a[5] || 0, u = Math.sqrt(H * H + W * W), c = Math.sqrt(U * U + B * B), h = H || W ? Math.atan2(W, H) * D : p.rotation || 0, d = B || U ? Math.atan2(B, U) * D + h : p.skewX || 0, Math.abs(d) > 90 && Math.abs(d) < 270 && (f ? (u *= -1, d += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (c *= -1, d += d <= 0 ? 180 : -180)), p.scaleX = u, p.scaleY = c, p.rotation = h, p.skewX = d, kt && (p.rotationX = p.rotationY = p.z = 0, p.perspective = y, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * H + p.yOrigin * B), p.y -= p.yOrigin - (p.xOrigin * W + p.yOrigin * U))
                }
                p.zOrigin = v;
                for (l in p) p[l] < m && p[l] > -m && (p[l] = 0)
            }
            return n && (t._gsTransform = p, p.svg && (wt && t.style[Tt] ? e.delayedCall(.001, function () {
                Ft(t.style, Tt)
            }) : !wt && t.getAttribute("transform") && e.delayedCall(.001, function () {
                t.removeAttribute("transform")
            }))), p
        }, jt = function (t) {
            var e, i, n = this.data, o = -n.rotation * I, r = o + n.skewX * I, s = 1e5, a = (Math.cos(o) * n.scaleX * s | 0) / s, l = (Math.sin(o) * n.scaleX * s | 0) / s, u = (Math.sin(r) * -n.scaleY * s | 0) / s, c = (Math.cos(r) * n.scaleY * s | 0) / s, h = this.t.style, d = this.t.currentStyle;
            if (d) {
                i = l, l = -u, u = -i, e = d.filter, h.filter = "";
                var p, f, g = this.t.offsetWidth, v = this.t.offsetHeight, y = "absolute" !== d.position, _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c, x = n.x + g * n.xPercent / 100, T = n.y + v * n.yPercent / 100;
                if (null != n.ox && (p = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2, f = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2, x += p - (p * a + f * l), T += f - (p * u + f * c)), y ? (p = g / 2, f = v / 2, _ += ", Dx=" + (p - (p * a + f * l) + x) + ", Dy=" + (f - (p * u + f * c) + T) + ")") : _ += ", sizingMethod='auto expand')", e.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? h.filter = e.replace(z, _) : h.filter = _ + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === l && 0 === u && 1 === c && (y && _.indexOf("Dx=0, Dy=0") === -1 || w.test(e) && 100 !== parseFloat(RegExp.$1) || e.indexOf(e.indexOf("Alpha")) === -1 && h.removeAttribute("filter")), !y) {
                    var S, C, k, E = m < 8 ? 1 : -1;
                    for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((a < 0 ? -a : a) * g + (l < 0 ? -l : l) * v)) / 2 + x), n.ieOffsetY = Math.round((v - ((c < 0 ? -c : c) * v + (u < 0 ? -u : u) * g)) / 2 + T), vt = 0; vt < 4; vt++) C = et[vt], S = d[C], i = S.indexOf("px") !== -1 ? parseFloat(S) : G(this.t, C, parseFloat(S), S.replace(b, "")) || 0, k = i !== n[C] ? vt < 2 ? -n.ieOffsetX : -n.ieOffsetY : vt < 2 ? p - n.ieOffsetX : f - n.ieOffsetY, h[C] = (n[C] = Math.round(i - k * (0 === vt || 2 === vt ? 1 : E))) + "px"
                }
            }
        }, Nt = F.set3DTransformRatio = F.setTransformRatio = function (t) {
            var e, i, n, o, r, s, a, l, u, c, h, d, f, m, g, v, y, _, b, w, x, T, S, C = this.data, k = this.t.style, E = C.rotation, P = C.rotationX, A = C.rotationY, L = C.scaleX, z = C.scaleY, O = C.scaleZ, D = C.x, R = C.y, M = C.z, j = C.svg, N = C.perspective, q = C.force3D;
            if (((1 === t || 0 === t) && "auto" === q && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !q) && !M && !N && !A && !P || wt && j || !kt) return void (E || C.skewX || j ? (E *= I, T = C.skewX * I, S = 1e5, e = Math.cos(E) * L, o = Math.sin(E) * L, i = Math.sin(E - T) * -z, r = Math.cos(E - T) * z, T && "simple" === C.skewType && (y = Math.tan(T), y = Math.sqrt(1 + y * y), i *= y, r *= y, C.skewY && (e *= y, o *= y)), j && (D += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset, R += C.yOrigin - (C.xOrigin * o + C.yOrigin * r) + C.yOffset, wt && (C.xPercent || C.yPercent) && (m = this.t.getBBox(), D += .01 * C.xPercent * m.width, R += .01 * C.yPercent * m.height), m = 1e-6, D < m && D > -m && (D = 0), R < m && R > -m && (R = 0)), b = (e * S | 0) / S + "," + (o * S | 0) / S + "," + (i * S | 0) / S + "," + (r * S | 0) / S + "," + D + "," + R + ")", j && wt ? this.t.setAttribute("transform", "matrix(" + b) : k[Tt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + b) : k[Tt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + L + ",0,0," + z + "," + D + "," + R + ")");
            if (p && (m = 1e-4, L < m && L > -m && (L = O = 2e-5), z < m && z > -m && (z = O = 2e-5), !N || C.z || C.rotationX || C.rotationY || (N = 0)), E || C.skewX) E *= I, g = e = Math.cos(E), v = o = Math.sin(E), C.skewX && (E -= C.skewX * I, g = Math.cos(E), v = Math.sin(E), "simple" === C.skewType && (y = Math.tan(C.skewX * I), y = Math.sqrt(1 + y * y), g *= y, v *= y, C.skewY && (e *= y, o *= y))), i = -v, r = g; else {
                if (!(A || P || 1 !== O || N || j)) return void (k[Tt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + R + "px," + M + "px)" + (1 !== L || 1 !== z ? " scale(" + L + "," + z + ")" : ""));
                e = r = 1, i = o = 0
            }
            u = 1, n = s = a = l = c = h = 0, d = N ? -1 / N : 0, f = C.zOrigin, m = 1e-6, w = ",", x = "0", E = A * I, E && (g = Math.cos(E), v = Math.sin(E), a = -v, c = d * -v, n = e * v, s = o * v, u = g, d *= g, e *= g, o *= g), E = P * I, E && (g = Math.cos(E), v = Math.sin(E), y = i * g + n * v, _ = r * g + s * v, l = u * v, h = d * v, n = i * -v + n * g, s = r * -v + s * g, u *= g, d *= g, i = y, r = _), 1 !== O && (n *= O, s *= O, u *= O, d *= O), 1 !== z && (i *= z, r *= z, l *= z, h *= z), 1 !== L && (e *= L, o *= L, a *= L, c *= L), (f || j) && (f && (D += n * -f, R += s * -f, M += u * -f + f), j && (D += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset, R += C.yOrigin - (C.xOrigin * o + C.yOrigin * r) + C.yOffset), D < m && D > -m && (D = x), R < m && R > -m && (R = x), M < m && M > -m && (M = 0)), b = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", b += (e < m && e > -m ? x : e) + w + (o < m && o > -m ? x : o) + w + (a < m && a > -m ? x : a), b += w + (c < m && c > -m ? x : c) + w + (i < m && i > -m ? x : i) + w + (r < m && r > -m ? x : r), P || A ? (b += w + (l < m && l > -m ? x : l) + w + (h < m && h > -m ? x : h) + w + (n < m && n > -m ? x : n), b += w + (s < m && s > -m ? x : s) + w + (u < m && u > -m ? x : u) + w + (d < m && d > -m ? x : d) + w) : b += ",0,0,0,0,1,0,", b += D + w + R + w + M + w + (N ? 1 + -M / N : 1) + ")", k[Tt] = b
        };
        u = Et.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, _t("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function (t, e, i, n, r, a, l) {
                if (n._lastParsedTransform === l) return r;
                n._lastParsedTransform = l;
                var u, c, h, d, p, f, m, g, v, y = t._gsTransform, _ = n._transform = Mt(t, o, !0, l.parseTransform), b = t.style, w = 1e-6, x = xt.length, T = l, S = {}, C = "transformOrigin";
                if ("string" == typeof T.transform && Tt) h = N.style, h[Tt] = T.transform, h.display = "block", h.position = "absolute", M.body.appendChild(N), u = Mt(N, null, !1), M.body.removeChild(N), null != T.xPercent && (u.xPercent = rt(T.xPercent, _.xPercent)), null != T.yPercent && (u.yPercent = rt(T.yPercent, _.yPercent)); else if ("object" == typeof T) {
                    if (u = {scaleX: rt(null != T.scaleX ? T.scaleX : T.scale, _.scaleX), scaleY: rt(null != T.scaleY ? T.scaleY : T.scale, _.scaleY), scaleZ: rt(T.scaleZ, _.scaleZ), x: rt(T.x, _.x), y: rt(T.y, _.y), z: rt(T.z, _.z), xPercent: rt(T.xPercent, _.xPercent), yPercent: rt(T.yPercent, _.yPercent), perspective: rt(T.transformPerspective, _.perspective)}, m = T.directionalRotation, null != m) if ("object" == typeof m) for (h in m) T[h] = m[h]; else T.rotation = m;
                    "string" == typeof T.x && T.x.indexOf("%") !== -1 && (u.x = 0, u.xPercent = rt(T.x, _.xPercent)), "string" == typeof T.y && T.y.indexOf("%") !== -1 && (u.y = 0, u.yPercent = rt(T.y, _.yPercent)), u.rotation = st("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : _.rotation, _.rotation, "rotation", S), kt && (u.rotationX = st("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : _.rotationX || 0, _.rotationX, "rotationX", S), u.rotationY = st("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : _.rotationY || 0, _.rotationY, "rotationY", S)), u.skewX = null == T.skewX ? _.skewX : st(T.skewX, _.skewX), u.skewY = null == T.skewY ? _.skewY : st(T.skewY, _.skewY), (c = u.skewY - _.skewY) && (u.skewX += c, u.rotation += c)
                }
                for (kt && null != T.force3D && (_.force3D = T.force3D, f = !0), _.skewType = T.skewType || _.skewType || s.defaultSkewType, p = _.force3D || _.z || _.rotationX || _.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, p || null == T.scale || (u.scaleZ = 1); --x > -1;) i = xt[x], d = u[i] - _[i], (d > w || d < -w || null != T[i] || null != R[i]) && (f = !0, r = new ft(_, i, _[i], d, r), i in S && (r.e = S[i]), r.xs0 = 0, r.plugin = a, n._overwriteProps.push(r.n));
                return d = T.transformOrigin, _.svg && (d || T.svgOrigin) && (g = _.xOffset, v = _.yOffset, Ot(t, nt(d), u, T.svgOrigin, T.smoothOrigin), r = mt(_, "xOrigin", (y ? _ : u).xOrigin, u.xOrigin, r, C), r = mt(_, "yOrigin", (y ? _ : u).yOrigin, u.yOrigin, r, C), g === _.xOffset && v === _.yOffset || (r = mt(_, "xOffset", y ? g : _.xOffset, _.xOffset, r, C), r = mt(_, "yOffset", y ? v : _.yOffset, _.yOffset, r, C)), d = wt ? null : "0px 0px"), (d || kt && p && _.zOrigin) && (Tt ? (f = !0, i = Ct, d = (d || Q(t, i, o, !1, "50% 50%")) + "", r = new ft(b, i, 0, 0, r, (-1), C), r.b = b[i], r.plugin = a, kt ? (h = _.zOrigin, d = d.split(" "), _.zOrigin = (d.length > 2 && (0 === h || "0px" !== d[2]) ? parseFloat(d[2]) : h) || 0, r.xs0 = r.e = d[0] + " " + (d[1] || "50%") + " 0px", r = new ft(_, "zOrigin", 0, 0, r, (-1), r.n), r.b = h, r.xs0 = r.e = _.zOrigin) : r.xs0 = r.e = d) : nt(d + "", _)), f && (n._transformType = _.svg && wt || !p && 3 !== this._transformType ? 2 : 3), r
            }, prefix: !0
        }), _t("boxShadow", {defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset"}), _t("borderRadius", {
            defaultValue: "0px", parser: function (t, e, i, r, s, a) {
                e = this.format(e);
                var l, u, c, h, d, p, f, m, g, v, y, _, b, w, x, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], C = t.style;
                for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < S.length; u++) this.p.indexOf("border") && (S[u] = Y(S[u])), d = h = Q(t, S[u], o, !1, "0px"), d.indexOf(" ") !== -1 && (h = d.split(" "), d = h[0], h = h[1]), p = c = l[u], f = parseFloat(d), _ = d.substr((f + "").length), b = "=" === p.charAt(1), b ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), y = p.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(p), y = p.substr((m + "").length)), "" === y && (y = n[i] || _), y !== _ && (w = G(t, "borderLeft", f, _), x = G(t, "borderTop", f, _), "%" === y ? (d = w / g * 100 + "%", h = x / v * 100 + "%") : "em" === y ? (T = G(t, "borderLeft", 1, "em"), d = w / T + "em", h = x / T + "em") : (d = w + "px", h = x + "px"), b && (p = parseFloat(d) + m + y, c = parseFloat(h) + m + y)), s = gt(C, S[u], d + " " + h, p + " " + c, !1, "0px", s);
                return s
            }, prefix: !0, formatter: ht("0px 0px 0px 0px", !1, !0)
        }), _t("backgroundPosition", {
            defaultValue: "0 0", parser: function (t, e, i, n, r, s) {
                var a, l, u, c, h, d, p = "background-position", f = o || V(t, null), g = this.format((f ? m ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), v = this.format(e);
                if (g.indexOf("%") !== -1 != (v.indexOf("%") !== -1) && (d = Q(t, "backgroundImage").replace(E, ""), d && "none" !== d)) {
                    for (a = g.split(" "), l = v.split(" "), q.setAttribute("src", d), u = 2; --u > -1;) g = a[u], c = g.indexOf("%") !== -1, c !== (l[u].indexOf("%") !== -1) && (h = 0 === u ? t.offsetWidth - q.width : t.offsetHeight - q.height, a[u] = c ? parseFloat(g) / 100 * h + "px" : parseFloat(g) / h * 100 + "%");
                    g = a.join(" ")
                }
                return this.parseComplex(t.style, g, v, r, s)
            }, formatter: nt
        }), _t("backgroundSize", {defaultValue: "0 0", formatter: nt}), _t("perspective", {defaultValue: "0px", prefix: !0}), _t("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), _t("transformStyle", {prefix: !0}), _t("backfaceVisibility", {prefix: !0}), _t("userSelect", {prefix: !0}), _t("margin", {parser: dt("marginTop,marginRight,marginBottom,marginLeft")}), _t("padding", {parser: dt("paddingTop,paddingRight,paddingBottom,paddingLeft")}), _t("clip", {
            defaultValue: "rect(0px,0px,0px,0px)", parser: function (t, e, i, n, r, s) {
                var a, l, u;
                return m < 9 ? (l = t.currentStyle, u = m < 8 ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(Q(t, this.p, o, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, s)
            }
        }), _t("textShadow", {defaultValue: "0px 0px 0px #999", color: !0, multi: !0}), _t("autoRound,strictUnits", {
            parser: function (t, e, i, n, o) {
                return o
            }
        }), _t("border", {
            defaultValue: "0px solid #000", parser: function (t, e, i, n, r, s) {
                return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", o, !1, "0px") + " " + Q(t, "borderTopStyle", o, !1, "solid") + " " + Q(t, "borderTopColor", o, !1, "#000")), this.format(e), r, s)
            }, color: !0, formatter: function (t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(ct) || ["#000"])[0]
            }
        }), _t("borderWidth", {parser: dt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), _t("float,cssFloat,styleFloat", {
            parser: function (t, e, i, n, o, r) {
                var s = t.style, a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                return new ft(s, a, 0, 0, o, (-1), i, (!1), 0, s[a], e)
            }
        });
        var qt = function (t) {
            var e, i = this.t, n = i.filter || Q(this.data, "filter") || "", o = this.s + this.c * t | 0;
            100 === o && (n.indexOf("atrix(") === -1 && n.indexOf("radient(") === -1 && n.indexOf("oader(") === -1 ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = n.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + o + ")"), n.indexOf("pacity") === -1 ? 0 === o && this.xn1 || (i.filter = n + " alpha(opacity=" + o + ")") : i.filter = n.replace(w, "opacity=" + o))
        };
        _t("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (t, e, i, n, r, s) {
                var a = parseFloat(Q(t, "opacity", o, !1, "1")), l = t.style, u = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === Q(t, "visibility", o) && 0 !== e && (a = 0), H ? r = new ft(l, "opacity", a, e - a, r) : (r = new ft(l, "opacity", 100 * a, 100 * (e - a), r), r.xn1 = u ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = s, r.setRatio = qt), u && (r = new ft(l, "visibility", 0, 0, r, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
            }
        });
        var Ft = function (t, e) {
            e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e))
        }, $t = function (t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ft(i, e.p), e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        _t("className", {
            parser: function (t, e, n, r, s, a, l) {
                var u, c, h, d, p, f = t.getAttribute("class") || "", m = t.style.cssText;
                if (s = r._classNamePT = new ft(t, n, 0, 0, s, 2), s.setRatio = $t, s.pr = -11, i = !0, s.b = f, c = K(t, o), h = t._gsClassPT) {
                    for (d = {}, p = h.data; p;) d[p.p] = 1, p = p._next;
                    h.setRatio(1)
                }
                return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), u = J(t, c, K(t), l, d), t.setAttribute("class", f), s.data = u.firstMPT, t.style.cssText = m, s = s.xfirst = r.parse(t, u.difs, s, a)
            }
        });
        var Ht = function (t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, o, r, s = this.t.style, a = l.transform.parse;
                if ("all" === this.e) s.cssText = "", o = !0; else for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? o = !0 : i = "transformOrigin" === i ? Ct : l[i].p), Ft(s, i);
                o && (Ft(s, Tt), r = this.t._gsTransform, r && (r.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
            }
        };
        for (_t("clearProps", {
            parser: function (t, e, n, o, r) {
                return r = new ft(t, n, 0, 0, r, 2), r.setRatio = Ht, r.e = e, r.pr = -10, r.data = o._tween, i = !0, r
            }
        }), u = "bezier,throwProps,physicsProps,physics2D".split(","), vt = u.length; vt--;) bt(u[vt]);
        u = s.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function (t, e, a) {
            if (!t.nodeType) return !1;
            this._target = t, this._tween = a, this._vars = e, c = e.autoRound, i = !1, n = e.suffixMap || s.suffixMap, o = V(t, ""), r = this._overwriteProps;
            var u, p, m, g, v, y, _, b, w, T = t.style;
            if (h && "" === T.zIndex && (u = Q(t, "zIndex", o), "auto" !== u && "" !== u || this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (g = T.cssText, u = K(t, o), T.cssText = g + ";" + e, u = J(t, u, K(t)).difs, !H && x.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, T.cssText = g), e.className ? this._firstPT = p = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = p = this.parse(t, e, null), this._transformType) {
                for (w = 3 === this._transformType, Tt ? d && (h = !0, "" === T.zIndex && (_ = Q(t, "zIndex", o), "auto" !== _ && "" !== _ || this._addLazySet(T, "zIndex", 0)), f && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : T.zoom = 1, m = p; m && m._next;) m = m._next;
                b = new ft(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, m), b.setRatio = Tt ? Nt : jt, b.data = this._transform || Mt(t, o, !0), b.tween = a, b.pr = -1, r.pop()
            }
            if (i) {
                for (; p;) {
                    for (y = p._next, m = g; m && m.pr > p.pr;) m = m._next;
                    (p._prev = m ? m._prev : v) ? p._prev._next = p : g = p, (p._next = m) ? m._prev = p : v = p, p = y
                }
                this._firstPT = g
            }
            return !0
        }, u.parse = function (t, e, i, r) {
            var s, a, u, h, d, p, f, m, g, v, y = t.style;
            for (s in e) p = e[s], a = l[s], a ? i = a.parse(t, p, s, this, i, r, e) : (d = Q(t, s, o) + "", g = "string" == typeof p, "color" === s || "fill" === s || "stroke" === s || s.indexOf("Color") !== -1 || g && S.test(p) ? (g || (p = ut(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = gt(y, s, d, p, !0, "transparent", i, 0, r)) : !g || p.indexOf(" ") === -1 && p.indexOf(",") === -1 ? (u = parseFloat(d), f = u || 0 === u ? d.substr((u + "").length) : "", "" !== d && "auto" !== d || ("width" === s || "height" === s ? (u = it(t, s, o), f = "px") : "left" === s || "top" === s ? (u = Z(t, s, o), f = "px") : (u = "opacity" !== s ? 0 : 1, f = "")), v = g && "=" === p.charAt(1), v ? (h = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), h *= parseFloat(p), m = p.replace(b, "")) : (h = parseFloat(p), m = g ? p.replace(b, "") : ""), "" === m && (m = s in n ? n[s] : f), p = h || 0 === h ? (v ? h + u : h) + m : e[s], f !== m && "" !== m && (h || 0 === h) && u && (u = G(t, s, u, f), "%" === m ? (u /= G(t, s, 100, "%") / 100, e.strictUnits !== !0 && (d = u + "%")) : "em" === m ? u /= G(t, s, 1, "em") : "px" !== m && (h = G(t, s, h, m), m = "px"), v && (h || 0 === h) && (p = h + u + m)), v && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== y[s] && (p || p + "" != "NaN" && null != p) ? (i = new ft(y, s, h || u || 0, 0, i, (-1), s, (!1), 0, d, p), i.xs0 = "none" !== p || "display" !== s && s.indexOf("Style") === -1 ? p : d) : B("invalid " + s + " tween value: " + e[s]) : (i = new ft(y, s, u, h - u, i, 0, s, c !== !1 && ("px" === m || "zIndex" === s), 0, d, p), i.xs0 = m)) : i = gt(y, s, d, p, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
            return i
        }, u.setRatio = function (t) {
            var e, i, n, o = this._firstPT, r = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; o;) {
                if (e = o.c * t + o.s, o.r ? e = Math.round(e) : e < r && e > -r && (e = 0), o.type) if (1 === o.type) if (n = o.l, 2 === n) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2; else if (3 === n) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3; else if (4 === n) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4; else if (5 === n) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4 + o.xn4 + o.xs5; else {
                    for (i = o.xs0 + e + o.xs1, n = 1; n < o.l; n++) i += o["xn" + n] + o["xs" + (n + 1)];
                    o.t[o.p] = i
                } else o.type === -1 ? o.t[o.p] = o.xs0 : o.setRatio && o.setRatio(t); else o.t[o.p] = e + o.xs0;
                o = o._next
            } else for (; o;) 2 !== o.type ? o.t[o.p] = o.b : o.setRatio(t), o = o._next; else for (; o;) {
                if (2 !== o.type) if (o.r && o.type !== -1) if (e = Math.round(o.s + o.c), o.type) {
                    if (1 === o.type) {
                        for (n = o.l, i = o.xs0 + e + o.xs1, n = 1; n < o.l; n++) i += o["xn" + n] + o["xs" + (n + 1)];
                        o.t[o.p] = i
                    }
                } else o.t[o.p] = e + o.xs0; else o.t[o.p] = o.e; else o.setRatio(t);
                o = o._next
            }
        }, u._enableTransforms = function (t) {
            this._transform = this._transform || Mt(this._target, o, !0), this._transformType = this._transform.svg && wt || !t && 3 !== this._transformType ? 2 : 3
        };
        var Wt = function (t) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        u._addLazySet = function (t, e, i) {
            var n = this._firstPT = new ft(t, e, 0, 0, this._firstPT, 2);
            n.e = i, n.setRatio = Wt, n.data = this
        }, u._linkCSSP = function (t, e, i, n) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, u._kill = function (e) {
            var i, n, o, r = e;
            if (e.autoAlpha || e.alpha) {
                r = {};
                for (n in e) r[n] = e[n];
                r.opacity = 1, r.autoAlpha && (r.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (o = i.xfirst, o && o._prev ? this._linkCSSP(o._prev, i._next, o._prev._prev) : o === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, o._prev), this._classNamePT = null), t.prototype._kill.call(this, r)
        };
        var Bt = function (t, e, i) {
            var n, o, r, s;
            if (t.slice) for (o = t.length; --o > -1;) Bt(t[o], e, i); else for (n = t.childNodes, o = n.length; --o > -1;) r = n[o], s = r.type, r.style && (e.push(K(r)), i && i.push(r)), 1 !== s && 9 !== s && 11 !== s || !r.childNodes.length || Bt(r, e, i)
        };
        return s.cascadeTo = function (t, i, n) {
            var o, r, s, a, l = e.to(t, i, n), u = [l], c = [], h = [], d = [], p = e._internals.reservedProps;
            for (t = l._targets || l.target, Bt(t, c, d), l.render(i, !0, !0), Bt(t, h), l.render(0, !0, !0), l._enabled(!0), o = d.length; --o > -1;) if (r = J(d[o], c[o], h[o]), r.firstMPT) {
                r = r.difs;
                for (s in n) p[s] && (r[s] = n[s]);
                a = {};
                for (s in r) a[s] = c[o][s];
                u.push(e.fromTo(d[o], i, a, r))
            }
            return u
        }, t.activate([s]), s
    }, !0), function () {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps", priority: -1, API: 2, init: function (t, e, i) {
                return this._tween = i, !0
            }
        }), e = t.prototype;
        e._onInitAllProps = function () {
            for (var t, e, i, n = this._tween, o = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), r = o.length, s = {}, a = n._propLookup.roundProps; --r > -1;) s[o[r]] = 1;
            for (r = o.length; --r > -1;) for (t = o[r], e = n._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(s, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a), e = i;
            return !1
        }, e._add = function (t, e, i, n) {
            this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
        }
    }(), function () {
        var t = /(?:\d|\-|\+|=|#|\.)*/g, e = /[A-Za-z%]/g;
        _gsScope._gsDefine.plugin({
            propName: "attr", API: 2, version: "0.4.0", init: function (i, n, o) {
                var r, s, a, l, u;
                if ("function" != typeof i.setAttribute) return !1;
                this._target = i, this._proxy = {}, this._start = {}, this._end = {}, this._suffix = {};
                for (r in n) this._start[r] = this._proxy[r] = s = i.getAttribute(r) + "", this._end[r] = a = n[r] + "", this._suffix[r] = l = e.test(a) ? a.replace(t, "") : e.test(s) ? s.replace(t, "") : "", l && (u = a.indexOf(l), u !== -1 && (a = a.substr(0, u))), this._addTween(this._proxy, r, parseFloat(s), a, r) || (this._suffix[r] = ""), "=" === a.charAt(1) && (this._end[r] = this._firstPT.s + this._firstPT.c + l), this._overwriteProps.push(r);
                return !0
            }, set: function (t) {
                this._super.setRatio.call(this, t);
                for (var e, i = this._overwriteProps, n = i.length, o = 1 === t ? this._end : t ? this._proxy : this._start, r = o === this._proxy; --n > -1;) e = i[n], this._target.setAttribute(e, o[e] + (r ? this._suffix[e] : ""))
            }
        })
    }(), _gsScope._gsDefine.plugin({
        propName: "directionalRotation", version: "0.2.1", API: 2, init: function (t, e, i) {
            "object" != typeof e && (e = {rotation: e}), this.finals = {};
            var n, o, r, s, a, l, u = e.useRadians === !0 ? 2 * Math.PI : 360, c = 1e-6;
            for (n in e) "useRadians" !== n && (l = (e[n] + "").split("_"), o = l[0], r = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), s = this.finals[n] = "string" == typeof o && "=" === o.charAt(1) ? r + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0, a = s - r, l.length && (o = l.join("_"), o.indexOf("short") !== -1 && (a %= u, a !== a % (u / 2) && (a = a < 0 ? a + u : a - u)), o.indexOf("_cw") !== -1 && a < 0 ? a = (a + 9999999999 * u) % u - (a / u | 0) * u : o.indexOf("ccw") !== -1 && a > 0 && (a = (a - 9999999999 * u) % u - (a / u | 0) * u)), (a > c || a < -c) && (this._addTween(t, n, r, r + a, n), this._overwriteProps.push(n)));
            return !0
        }, set: function (t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t); else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
        var e, i, n, o = _gsScope.GreenSockGlobals || _gsScope, r = o.com.greensock, s = 2 * Math.PI, a = Math.PI / 2, l = r._class, u = function (e, i) {
            var n = l("easing." + e, function () {
            }, !0), o = n.prototype = new t;
            return o.constructor = n, o.getRatio = i, n
        }, c = t.register || function () {
        }, h = function (t, e, i, n, o) {
            var r = l("easing." + t, {easeOut: new e, easeIn: new i, easeInOut: new n}, !0);
            return c(r, t), r
        }, d = function (t, e, i) {
            this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
        }, p = function (e, i) {
            var n = l("easing." + e, function (t) {
                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
            }, !0), o = n.prototype = new t;
            return o.constructor = n, o.getRatio = i, o.config = function (t) {
                return new n(t)
            }, n
        }, f = h("Back", p("BackOut", function (t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), p("BackIn", function (t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), p("BackInOut", function (t) {
            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), m = l("easing.SlowMo", function (t, e, i) {
            e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
        }, !0), g = m.prototype = new t;
        return g.constructor = m, g.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), g.config = m.config = function (t, e, i) {
            return new m(t, e, i)
        }, e = l("easing.SteppedEase", function (t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function (t) {
            return t < 0 ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, g.config = e.config = function (t) {
            return new e(t)
        }, i = l("easing.RoughEase", function (e) {
            e = e || {};
            for (var i, n, o, r, s, a, l = e.taper || "none", u = [], c = 0, h = 0 | (e.points || 20), p = h, f = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / h * p, n = g ? g.getRatio(i) : i, "none" === l ? o = v : "out" === l ? (r = 1 - i, o = r * r * v) : "in" === l ? o = i * i * v : i < .5 ? (r = 2 * i, o = r * r * .5 * v) : (r = 2 * (1 - i), o = r * r * .5 * v), f ? n += Math.random() * o - .5 * o : p % 2 ? n += .5 * o : n -= .5 * o, m && (n > 1 ? n = 1 : n < 0 && (n = 0)), u[c++] = {
                x: i,
                y: n
            };
            for (u.sort(function (t, e) {
                return t.x - e.x
            }), a = new d(1, 1, null), p = h; --p > -1;) s = u[p], a = new d(s.x, s.y, a);
            this._prev = new d(0, 0, 0 !== a.t ? a : a.next)
        }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else for (; e.prev && t <= e.t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, g.config = function (t) {
            return new i(t)
        }, i.ease = new i, h("Bounce", u("BounceOut", function (t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), u("BounceIn", function (t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), u("BounceInOut", function (t) {
            var e = t < .5;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), h("Circ", u("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), u("CircIn", function (t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), u("CircInOut", function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), n = function (e, i, n) {
            var o = l("easing." + e, function (t, e) {
                this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0), this._p2 = s / this._p2
            }, !0), r = o.prototype = new t;
            return r.constructor = o, r.getRatio = i, r.config = function (t, e) {
                return new o(t, e)
            }, o
        }, h("Elastic", n("ElasticOut", function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), n("ElasticIn", function (t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
        }, .3), n("ElasticInOut", function (t) {
            return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }, .45)), h("Expo", u("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t)
        }), u("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), u("ExpoInOut", function (t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), h("Sine", u("SineOut", function (t) {
            return Math.sin(t * a)
        }), u("SineIn", function (t) {
            return -Math.cos(t * a) + 1
        }), u("SineInOut", function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), l("easing.EaseLookup", {
            find: function (e) {
                return t.map[e]
            }
        }, !0), c(o.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), f
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var n, o, r, s, a, l = function (t) {
            var e, n = t.split("."), o = i;
            for (e = 0; e < n.length; e++) o[n[e]] = o = o[n[e]] || {};
            return o
        }, u = l("com.greensock"), c = 1e-10, h = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++])) ;
            return i
        }, d = function () {
        }, p = function () {
            var t = Object.prototype.toString, e = t.call([]);
            return function (i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), f = {}, m = function (n, o, r, s) {
            this.sc = f[n] ? f[n].sc : [], f[n] = this, this.gsClass = null, this.func = r;
            var a = [];
            this.check = function (u) {
                for (var c, h, d, p, g = o.length, v = g; --g > -1;) (c = f[o[g]] || new m(o[g], [])).gsClass ? (a[g] = c.gsClass, v--) : u && c.sc.push(this);
                if (0 === v && r) for (h = ("com.greensock." + n).split("."), d = h.pop(), p = l(h.join("."))[d] = this.gsClass = r.apply(r, a), s && (i[d] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function () {
                    return p
                }) : n === e && "undefined" != typeof module && module.exports && (module.exports = p)), g = 0; g < this.sc.length; g++) this.sc[g].check()
            }, this.check(!0)
        }, g = t._gsDefine = function (t, e, i, n) {
            return new m(t, e, i, n)
        }, v = u._class = function (t, e, i) {
            return e = e || function () {
            }, g(t, [], function () {
                return e
            }, i), e
        };
        g.globals = i;
        var y = [0, 0, 1, 1], _ = [], b = v("easing.Ease", function (t, e, i, n) {
            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? y.concat(e) : y
        }, !0), w = b.map = {}, x = b.register = function (t, e, i, n) {
            for (var o, r, s, a, l = e.split(","), c = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;) for (r = l[c], o = n ? v("easing." + r, null, !0) : u.easing[r] || {}, s = h.length; --s > -1;) a = h[s], w[r + "." + a] = w[a + r] = o[a] = t.getRatio ? t : t[a] || new t
        };
        for (r = b.prototype, r._calcEnd = !1, r.getRatio = function (t) {
            if (this._func) return this._params[0] = t,
                this._func.apply(null, this._params);
            var e = this._type, i = this._power, n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
        }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], o = n.length; --o > -1;) r = n[o] + ",Power" + o, x(new b(null, null, 1, o), r, "easeOut", !0), x(new b(null, null, 2, o), r, "easeIn" + (0 === o ? ",easeNone" : "")), x(new b(null, null, 3, o), r, "easeInOut");
        w.linear = u.easing.Linear.easeIn, w.swing = u.easing.Quad.easeInOut;
        var T = v("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        r = T.prototype, r.addEventListener = function (t, e, i, n, o) {
            o = o || 0;
            var r, l, u = this._listeners[t], c = 0;
            for (null == u && (this._listeners[t] = u = []), l = u.length; --l > -1;) r = u[l], r.c === e && r.s === i ? u.splice(l, 1) : 0 === c && r.pr < o && (c = l + 1);
            u.splice(c, 0, {c: e, s: i, up: n, pr: o}), this !== s || a || s.wake()
        }, r.removeEventListener = function (t, e) {
            var i, n = this._listeners[t];
            if (n) for (i = n.length; --i > -1;) if (n[i].c === e) return void n.splice(i, 1)
        }, r.dispatchEvent = function (t) {
            var e, i, n, o = this._listeners[t];
            if (o) for (e = o.length, i = this._eventTarget; --e > -1;) n = o[e], n && (n.up ? n.c.call(n.s || i, {type: t, target: i}) : n.c.call(n.s || i))
        };
        var S = t.requestAnimationFrame, C = t.cancelAnimationFrame, k = Date.now || function () {
            return (new Date).getTime()
        }, E = k();
        for (n = ["ms", "moz", "webkit", "o"], o = n.length; --o > -1 && !S;) S = t[n[o] + "RequestAnimationFrame"], C = t[n[o] + "CancelAnimationFrame"] || t[n[o] + "CancelRequestAnimationFrame"];
        v("Ticker", function (t, e) {
            var i, n, o, r, l, u = this, h = k(), p = e !== !1 && S, f = 500, m = 33, g = "tick", v = function (t) {
                var e, s, a = k() - E;
                a > f && (h += a - m), E += a, u.time = (E - h) / 1e3, e = u.time - l, (!i || e > 0 || t === !0) && (u.frame++, l += e + (e >= r ? .004 : r - e), s = !0), t !== !0 && (o = n(v)), s && u.dispatchEvent(g)
            };
            T.call(u), u.time = u.frame = 0, u.tick = function () {
                v(!0)
            }, u.lagSmoothing = function (t, e) {
                f = t || 1 / c, m = Math.min(e, f, 0)
            }, u.sleep = function () {
                null != o && (p && C ? C(o) : clearTimeout(o), n = d, o = null, u === s && (a = !1))
            }, u.wake = function () {
                null !== o ? u.sleep() : u.frame > 10 && (E = k() - f + 5), n = 0 === i ? d : p && S ? S : function (t) {
                    return setTimeout(t, 1e3 * (l - u.time) + 1 | 0)
                }, u === s && (a = !0), v(2)
            }, u.fps = function (t) {
                return arguments.length ? (i = t, r = 1 / (i || 60), l = this.time + r, void u.wake()) : i
            }, u.useRAF = function (t) {
                return arguments.length ? (u.sleep(), p = t, void u.fps(i)) : p
            }, u.fps(t), setTimeout(function () {
                p && u.frame < 5 && u.useRAF(!1)
            }, 1500)
        }), r = u.Ticker.prototype = new u.events.EventDispatcher, r.constructor = u.Ticker;
        var P = v("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, W) {
                a || s.wake();
                var i = this.vars.useFrames ? H : W;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        s = P.ticker = new u.Ticker, r = P.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
        var A = function () {
            a && k() - E > 2e3 && s.wake(), setTimeout(A, 2e3)
        };
        A(), r.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, r.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, r.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, r.seek = function (t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, r.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, r.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, r.render = function (t, e, i) {
        }, r.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
        }, r.isActive = function () {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
        }, r._enabled = function (t, e) {
            return a || s.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, r._kill = function (t, e) {
            return this._enabled(!1, !1)
        }, r.kill = function (t, e) {
            return this._kill(t, e), this
        }, r._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, r._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, r._callback = function (t) {
            var e = this.vars;
            e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || _)
        }, r.eventCallback = function (t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var o = this.vars;
                if (1 === arguments.length) return o[t];
                null == e ? delete o[t] : (o[t] = e, o[t + "Params"] = p(i) && i.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(i) : i, o[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, r.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, r.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, r.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, r.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, r.totalTime = function (t, e, i) {
            if (a || s.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration, o = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : o._time) - (this._reversed ? n - t : t) / this._timeScale, o._dirty || this._uncache(!1), o._timeline) for (; o._timeline;) o._timeline._time !== (o._startTime + o._totalTime) / o._timeScale && o.totalTime(o._totalTime, !0), o = o._timeline
                }
                this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (this.render(t, e, !1), D.length && U())
            }
            return this
        }, r.progress = r.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, r.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, r.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, r.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, r.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, r.paused = function (t) {
            if (!arguments.length) return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (a || t || s.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
        };
        var L = v("core.SimpleTimeline", function (t) {
            P.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        r = L.prototype = new P, r.constructor = L, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function (t, e, i, n) {
            var o, r;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), o = this._last, this._sortChildren) for (r = t._startTime; o && o._startTime > r;) o = o._prev;
            return o ? (t._next = o._next, o._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = o, this._recent = t, this._timeline && this._uncache(!0), this
        }, r._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, r.render = function (t, e, i) {
            var n, o = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; o;) n = o._next, (o._active || t >= o._startTime && !o._paused) && (o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (t - o._startTime) * o._timeScale, e, i) : o.render((t - o._startTime) * o._timeScale, e, i)), o = n
        }, r.rawTime = function () {
            return a || s.wake(), this._totalTime
        };
        var z = v("TweenLite", function (e, i, n) {
            if (P.call(this, i, n), this.render = z.prototype.render, null == e) throw"Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : z.selector(e) || e;
            var o, r, s, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? $[z.defaultOverwrite] : "number" == typeof l ? l >> 0 : $[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0]) for (this._targets = s = h(e), this._propLookup = [], this._siblings = [], o = 0; o < s.length; o++) r = s[o], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (s.splice(o--, 1), this._targets = s = s.concat(h(r))) : (this._siblings[o] = X(r, this, !1), 1 === l && this._siblings[o].length > 1 && V(r, this, null, 1, this._siblings[o])) : (r = s[o--] = z.selector(r), "string" == typeof r && s.splice(o + 1, 1)) : s.splice(o--, 1); else this._propLookup = {}, this._siblings = X(e, this, !1), 1 === l && this._siblings.length > 1 && V(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
        }, !0), O = function (e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }, I = function (t, e) {
            var i, n = {};
            for (i in t) F[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (n[i] = t[i], delete t[i]);
            t.css = n
        };
        r = z.prototype = new P, r.constructor = z, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, z.version = "1.17.0", z.defaultEase = r._ease = new b(null, null, 1, 1), z.defaultOverwrite = "auto", z.ticker = s, z.autoSleep = 120, z.lagSmoothing = function (t, e) {
            s.lagSmoothing(t, e)
        }, z.selector = t.$ || t.jQuery || function (e) {
            var i = t.$ || t.jQuery;
            return i ? (z.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var D = [], R = {}, M = z._internals = {isArray: p, isSelector: O, lazyTweens: D}, j = z._plugins = {}, N = M.tweenLookup = {}, q = 0, F = M.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1
        }, $ = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0}, H = P._rootFramesTimeline = new L, W = P._rootTimeline = new L, B = 30, U = M.lazyRender = function () {
            var t, e = D.length;
            for (R = {}; --e > -1;) t = D[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
            D.length = 0
        };
        W._startTime = s.time, H._startTime = s.frame, W._active = H._active = !0, setTimeout(U, 1), P._updateRoot = z.render = function () {
            var t, e, i;
            if (D.length && U(), W.render((s.time - W._startTime) * W._timeScale, !1, !1), H.render((s.frame - H._startTime) * H._timeScale, !1, !1), D.length && U(), s.frame >= B) {
                B = s.frame + (parseInt(z.autoSleep, 10) || 120);
                for (i in N) {
                    for (e = N[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete N[i]
                }
                if (i = W._first, (!i || i._paused) && z.autoSleep && !H._first && 1 === s._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || s.sleep()
                }
            }
        }, s.addEventListener("tick", P._updateRoot);
        var X = function (t, e, i) {
            var n, o, r = t._gsTweenID;
            if (N[r || (t._gsTweenID = r = "t" + q++)] || (N[r] = {target: t, tweens: []}), e && (n = N[r].tweens, n[o = n.length] = e, i)) for (; --o > -1;) n[o] === e && n.splice(o, 1);
            return N[r].tweens
        }, Y = function (t, e, i, n) {
            var o, r, s = t.vars.onOverwrite;
            return s && (o = s(t, e, i, n)), s = z.onOverwrite, s && (r = s(t, e, i, n)), o !== !1 && r !== !1
        }, V = function (t, e, i, n, o) {
            var r, s, a, l;
            if (1 === n || n >= 4) {
                for (l = o.length, r = 0; r < l; r++) if ((a = o[r]) !== e) a._gc || a._kill(null, t, e) && (s = !0); else if (5 === n) break;
                return s
            }
            var u, h = e._startTime + c, d = [], p = 0, f = 0 === e._duration;
            for (r = o.length; --r > -1;) (a = o[r]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || Q(e, 0, f), 0 === Q(a, u, f) && (d[p++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((f || !a._initted) && h - a._startTime <= 2e-10 || (d[p++] = a)));
            for (r = p; --r > -1;) if (a = d[r], 2 === n && a._kill(i, t, e) && (s = !0), 2 !== n || !a._firstPT && a._initted) {
                if (2 !== n && !Y(a, e)) continue;
                a._enabled(!1, !1) && (s = !0)
            }
            return s
        }, Q = function (t, e, i) {
            for (var n = t._timeline, o = n._timeScale, r = t._startTime; n._timeline;) {
                if (r += n._startTime, o *= n._timeScale, n._paused) return -100;
                n = n._timeline
            }
            return r /= o, r > e ? r - e : i && r === e || !t._initted && r - e < 2 * c ? c : (r += t.totalDuration() / t._timeScale / o) > e + c ? 0 : r - e - c
        };
        r._init = function () {
            var t, e, i, n, o, r = this.vars, s = this._overwrittenProps, a = this._duration, l = !!r.immediateRender, u = r.ease;
            if (r.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), o = {};
                for (n in r.startAt) o[n] = r.startAt[n];
                if (o.overwrite = !1, o.immediateRender = !0, o.lazy = l && r.lazy !== !1, o.startAt = o.delay = null, this._startAt = z.to(this.target, 0, o), l) if (this._time > 0) this._startAt = null; else if (0 !== a) return
            } else if (r.runBackwards && 0 !== a) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                0 !== this._time && (l = !1), i = {};
                for (n in r) F[n] && "autoCSS" !== n || (i[n] = r[n]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && r.lazy !== !1, i.immediateRender = l, this._startAt = z.to(this.target, 0, i), l) {
                    if (0 === this._time) return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = u = u ? u instanceof b ? u : "function" == typeof u ? new b(u, r.easeParams) : w[u] || z.defaultEase : z.defaultEase, r.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, s);
            if (e && z._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards) for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, r._initProps = function (e, i, n, o) {
            var r, s, a, l, u, c;
            if (null == e) return !1;
            R[e._gsTweenID] && U(), this.vars.css || e.style && e !== t && e.nodeType && j.css && this.vars.autoCSS !== !1 && I(this.vars, e);
            for (r in this.vars) {
                if (c = this.vars[r], F[r]) c && (c instanceof Array || c.push && p(c)) && c.join("").indexOf("{self}") !== -1 && (this.vars[r] = c = this._swapSelfInParams(c, this)); else if (j[r] && (l = new j[r])._onInitTween(e, this.vars[r], this)) {
                    for (this._firstPT = u = {_next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: !0, n: r, pg: !0, pr: l._priority}, s = l._overwriteProps.length; --s > -1;) i[l._overwriteProps[s]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[r] = u = {_next: this._firstPT, t: e, p: r, f: "function" == typeof e[r], n: r, pg: !1, pr: 0}, u.s = u.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), u.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - u.s || 0;
                u && u._next && (u._next._prev = u)
            }
            return o && this._kill(o, e) ? this._initProps(e, i, n, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && V(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, o)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (R[e._gsTweenID] = !0), a)
        }, r.render = function (t, e, i) {
            var n, o, r, s, a = this._time, l = this._duration, u = this._rawPrevTime;
            if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, o = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || u < 0 || u === c && "isPause" !== this.data) && u !== t && (i = !0, u > c && (o = "onReverseComplete")), this._rawPrevTime = s = !e || t || u === t ? t : c); else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (o = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = s = !e || t || u === t ? t : c)), this._initted || (i = !0); else if (this._totalTime = this._time = t, this._easeType) {
                var h = t / l, d = this._easeType, p = this._easePower;
                (1 === d || 3 === d && h >= .5) && (h = 1 - h), 3 === d && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), 1 === d ? this.ratio = 1 - h : 2 === d ? this.ratio = h : t / l < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, D.push(this), void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : o || (o = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                this._onUpdate && (t < 0 && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._callback("onUpdate")), o && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o), 0 === l && this._rawPrevTime === c && s !== c && (this._rawPrevTime = 0)))
            }
        }, r._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : z.selector(e) || e;
            var n, o, r, s, a, l, u, c, h, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((p(e) || O(e)) && "number" != typeof e[0]) for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0); else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;) if (e === this._targets[n]) {
                        a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], o = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                        break
                    }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, o = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (u = t || a, c = t !== o && "all" !== o && t !== a && ("object" != typeof t || !t._tempKill), i && (z.onOverwrite || this.vars.onOverwrite)) {
                        for (r in u) a[r] && (h || (h = []), h.push(r));
                        if ((h || !t) && !Y(this, i, e, h)) return !1
                    }
                    for (r in u) (s = a[r]) && (d && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(u) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[r]), c && (o[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, r.invalidate = function () {
            return this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], P.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
        }, r._enabled = function (t, e) {
            if (a || s.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n) for (i = n.length; --i > -1;) this._siblings[i] = X(n[i], this, !0); else this._siblings = X(this.target, this, !0)
            }
            return P.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && z._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, z.to = function (t, e, i) {
            return new z(t, e, i)
        }, z.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new z(t, e, i)
        }, z.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new z(t, e, n)
        }, z.delayedCall = function (t, e, i, n, o) {
            return new z(e, 0, {delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: o, overwrite: 0})
        }, z.set = function (t, e) {
            return new z(t, 0, e)
        }, z.getTweensOf = function (t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : z.selector(t) || t;
            var i, n, o, r;
            if ((p(t) || O(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1;) n = n.concat(z.getTweensOf(t[i], e));
                for (i = n.length; --i > -1;) for (r = n[i], o = i; --o > -1;) r === n[o] && n.splice(i, 1)
            } else for (n = X(t).concat(), i = n.length; --i > -1;) (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }, z.killTweensOf = z.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = z.getTweensOf(t, e), o = n.length; --o > -1;) n[o]._kill(i, t)
        };
        var G = v("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = G.prototype
        }, !0);
        if (r = G.prototype, G.version = "1.10.1", G.API = 2, r._firstPT = null, r._addTween = function (t, e, i, n, o, r) {
            var s, a;
            if (null != n && (s = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - Number(i) : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)))) return this._firstPT = a = {_next: this._firstPT, t: t, p: e, s: i, c: s, f: "function" == typeof t[e], n: o || e, r: r}, a._next && (a._next._prev = a), a
        }, r.setRatio = function (t) {
            for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : e < n && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
        }, r._kill = function (t) {
            var e, i = this._overwriteProps, n = this._firstPT;
            if (null != t[this._propName]) this._overwriteProps = []; else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
            for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
            return !1
        }, r._roundProps = function (t, e) {
            for (var i = this._firstPT; i;) (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
        }, z._onPluginEvent = function (t, e) {
            var i, n, o, r, s, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a;) {
                    for (s = a._next, n = o; n && n.pr > a.pr;) n = n._next;
                    (a._prev = n ? n._prev : r) ? a._prev._next = a : o = a, (a._next = n) ? n._prev = a : r = a, a = s
                }
                a = e._firstPT = o
            }
            for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
            return i
        }, G.activate = function (t) {
            for (var e = t.length; --e > -1;) t[e].API === G.API && (j[(new t[e])._propName] = t[e]);
            return !0
        }, g.plugin = function (t) {
            if (!(t && t.propName && t.init && t.API)) throw"illegal plugin definition.";
            var e, i = t.propName, n = t.priority || 0, o = t.overwriteProps, r = {init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps"}, s = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                G.call(this, i, n), this._overwriteProps = o || []
            }, t.global === !0), a = s.prototype = new G(i);
            a.constructor = s, s.API = t.API;
            for (e in r) "function" == typeof t[e] && (a[r[e]] = t[e]);
            return s.version = t.version, G.activate([s]), s
        }, n = t._gsQueue) {
            for (o = 0; o < n.length; o++) n[o]();
            for (r in f) f[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
        }
        a = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), function () {
    function t() {
    }

    function e(t, e) {
        for (var i = t.length; i--;) if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    var n = t.prototype, o = this, r = o.EventEmitter;
    n.getListeners = function (t) {
        var e, i, n = this._getEvents();
        if ("object" == typeof t) {
            e = {};
            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function (t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function (t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function (t, i) {
        var n, o = this.getListenersAsObject(t), r = "object" == typeof i;
        for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {listener: i, once: !1});
        return this
    }, n.on = i("addListener"), n.addOnceListener = function (t, e) {
        return this.addListener(t, {listener: e, once: !0})
    }, n.once = i("addOnceListener"), n.defineEvent = function (t) {
        return this.getListeners(t), this
    }, n.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function (t, i) {
        var n, o, r = this.getListenersAsObject(t);
        for (o in r) r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function (t, e, i) {
        var n, o, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp) for (n = i.length; n--;) r.call(this, e, i[n]); else for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
        return this
    }, n.removeEvent = function (t) {
        var e, i = typeof t, n = this._getEvents();
        if ("string" === i) delete n[t]; else if ("object" === i) for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e]; else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e) {
        var i, n, o, r, s = this.getListenersAsObject(t);
        for (o in s) if (s.hasOwnProperty(o)) for (n = s[o].length; n--;) i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, n._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this), function (t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }

    var i = document.documentElement, n = function () {
    };
    i.addEventListener ? n = function (t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function (t, i, n) {
        t[i + n] = n.handleEvent ? function () {
            var i = e(t);
            n.handleEvent.call(n, i)
        } : function () {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var o = function () {
    };
    i.removeEventListener ? o = function (t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (o = function (t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var r = {bind: n, unbind: o};
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : t.eventie = r
}(this), function (t, e) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
}(window, function (t, e, i) {
    function n(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function o(t) {
        return "[object Array]" === d.call(t)
    }

    function r(t) {
        var e = [];
        if (o(t)) e = t; else if ("number" == typeof t.length) for (var i = 0, n = t.length; n > i; i++) e.push(t[i]); else e.push(t);
        return e
    }

    function s(t, e, i) {
        if (!(this instanceof s)) return new s(t, e);
        "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = r(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), u && (this.jqDeferred = new u.Deferred);
        var o = this;
        setTimeout(function () {
            o.check()
        })
    }

    function a(t) {
        this.img = t
    }

    function l(t) {
        this.src = t, p[t] = this
    }

    var u = t.jQuery, c = t.console, h = void 0 !== c, d = Object.prototype.toString;
    s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function () {
        this.images = [];
        for (var t = 0, e = this.elements.length; e > t; t++) {
            var i = this.elements[t];
            "IMG" === i.nodeName && this.addImage(i);
            var n = i.nodeType;
            if (n && (1 === n || 9 === n || 11 === n)) for (var o = i.querySelectorAll("img"), r = 0, s = o.length; s > r; r++) {
                var a = o[r];
                this.addImage(a)
            }
        }
    }, s.prototype.addImage = function (t) {
        var e = new a(t);
        this.images.push(e)
    }, s.prototype.check = function () {
        function t(t, o) {
            return e.options.debug && h && c.log("confirm", t, o), e.progress(t), i++, i === n && e.complete(), !0
        }

        var e = this, i = 0, n = this.images.length;
        if (this.hasAnyBroken = !1, !n) return void this.complete();
        for (var o = 0; n > o; o++) {
            var r = this.images[o];
            r.on("confirm", t), r.check()
        }
    }, s.prototype.progress = function (t) {
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
        var e = this;
        setTimeout(function () {
            e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
        })
    }, s.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var e = this;
        setTimeout(function () {
            if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                var i = e.hasAnyBroken ? "reject" : "resolve";
                e.jqDeferred[i](e)
            }
        })
    }, u && (u.fn.imagesLoaded = function (t, e) {
        var i = new s(this, t, e);
        return i.jqDeferred.promise(u(this))
    }), a.prototype = new e, a.prototype.check = function () {
        var t = p[this.img.src] || new l(this.img.src);
        if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
        if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        var e = this;
        t.on("confirm", function (t, i) {
            return e.confirm(t.isLoaded, i), !0
        }), t.check()
    }, a.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emit("confirm", this, e)
    };
    var p = {};
    return l.prototype = new e, l.prototype.check = function () {
        if (!this.isChecked) {
            var t = new Image;
            i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
        }
    }, l.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, l.prototype.onload = function (t) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(t)
    }, l.prototype.onerror = function (t) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
    }, l.prototype.confirm = function (t, e) {
        this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
    }, l.prototype.unbindProxyEvents = function (t) {
        i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
    }, s
}), !function (t) {
    function e() {
    }

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function (e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function o(e, i) {
            t.fn[e] = function (o) {
                if ("string" == typeof o) {
                    for (var s = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                        var u = this[a], c = t.data(u, e);
                        if (c) if (t.isFunction(c[o]) && "_" !== o.charAt(0)) {
                            var h = c[o].apply(c, s);
                            if (void 0 !== h) return h
                        } else r("no such method '" + o + "' for " + e + " instance"); else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var n = t.data(this, e);
                    n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
                })
            }
        }

        if (t) {
            var r = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            };
            return t.bridget = function (t, e) {
                i(e), o(t, e)
            }, t.bridget
        }
    }

    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window), function (t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }

    var i = document.documentElement, n = function () {
    };
    i.addEventListener ? n = function (t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function (t, i, n) {
        t[i + n] = n.handleEvent ? function () {
            var i = e(t);
            n.handleEvent.call(n, i)
        } : function () {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var o = function () {
    };
    i.removeEventListener ? o = function (t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (o = function (t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var r = {bind: n, unbind: o};
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window), function () {
    "use strict";

    function t() {
    }

    function e(t, e) {
        for (var i = t.length; i--;) if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    var n = t.prototype, o = this, r = o.EventEmitter;
    n.getListeners = function (t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function (t) {
        var e, i = [];
        for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function (t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function (t, i) {
        var n, o = this.getListenersAsObject(t), r = "object" == typeof i;
        for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {listener: i, once: !1});
        return this
    }, n.on = i("addListener"), n.addOnceListener = function (t, e) {
        return this.addListener(t, {listener: e, once: !0})
    }, n.once = i("addOnceListener"), n.defineEvent = function (t) {
        return this.getListeners(t), this
    }, n.defineEvents = function (t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function (t, i) {
        var n, o, r = this.getListenersAsObject(t);
        for (o in r) r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function (t, e, i) {
        var n, o, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp) for (n = i.length; n--;) r.call(this, e, i[n]); else for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
        return this
    }, n.removeEvent = function (t) {
        var e, i = typeof t, n = this._getEvents();
        if ("string" === i) delete n[t]; else if (t instanceof RegExp) for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e]; else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e) {
        var i, n, o, r, s = this.getListenersAsObject(t);
        for (o in s) if (s.hasOwnProperty(o)) for (n = s[o].length; n--;) i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, n._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this), function (t) {
    function e(t) {
        if (t) {
            if ("string" == typeof n[t]) return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, o = 0, r = i.length; r > o; o++) if (e = i[o] + t, "string" == typeof n[e]) return e
        }
    }

    var i = "Webkit Moz ms Ms O".split(" "), n = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function (t, e) {
    function i(t) {
        var e = parseFloat(t), i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function n() {
    }

    function o() {
        for (var t = {width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0}, e = 0, i = a.length; i > e; e++) {
            var n = a[e];
            t[n] = 0
        }
        return t
    }

    function r(e) {
        function n() {
            if (!d) {
                d = !0;
                var n = t.getComputedStyle;
                if (u = function () {
                    var t = n ? function (t) {
                        return n(t, null)
                    } : function (t) {
                        return t.currentStyle
                    };
                    return function (e) {
                        var i = t(e);
                        return i || s("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                    }
                }(), c = e("boxSizing")) {
                    var o = document.createElement("div");
                    o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[c] = "border-box";
                    var r = document.body || document.documentElement;
                    r.appendChild(o);
                    var a = u(o);
                    h = 200 === i(a.width), r.removeChild(o)
                }
            }
        }

        function r(t) {
            if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var e = u(t);
                if ("none" === e.display) return o();
                var r = {};
                r.width = t.offsetWidth, r.height = t.offsetHeight;
                for (var s = r.isBorderBox = !(!c || !e[c] || "border-box" !== e[c]), d = 0, p = a.length; p > d; d++) {
                    var f = a[d], m = e[f];
                    m = l(t, m);
                    var g = parseFloat(m);
                    r[f] = isNaN(g) ? 0 : g
                }
                var v = r.paddingLeft + r.paddingRight, y = r.paddingTop + r.paddingBottom, _ = r.marginLeft + r.marginRight, b = r.marginTop + r.marginBottom, w = r.borderLeftWidth + r.borderRightWidth, x = r.borderTopWidth + r.borderBottomWidth, T = s && h, S = i(e.width);
                S !== !1 && (r.width = S + (T ? 0 : v + w));
                var C = i(e.height);
                return C !== !1 && (r.height = C + (T ? 0 : y + x)), r.innerWidth = r.width - (v + w), r.innerHeight = r.height - (y + x), r.outerWidth = r.width + _, r.outerHeight = r.height + b, r
            }
        }

        function l(e, i) {
            if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
            var n = e.style, o = n.left, r = e.runtimeStyle, s = r && r.left;
            return s && (r.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, s && (r.left = s), i
        }

        var u, c, h, d = !1;
        return r
    }

    var s = "undefined" == typeof console ? n : function (t) {
        console.error(t)
    }, a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("desandro-get-style-property")) : t.getSize = r(t.getStyleProperty)
}(window), function (t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }

    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || i || n()
    }

    function n() {
        e.isReady = !0;
        for (var t = 0, i = s.length; i > t; t++) {
            var n = s[t];
            n()
        }
    }

    function o(o) {
        return "complete" === r.readyState ? n() : (o.bind(r, "DOMContentLoaded", i), o.bind(r, "readystatechange", i), o.bind(t, "load", i)), e
    }

    var r = t.document, s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
}(window), function (t) {
    "use strict";

    function e(t, e) {
        return t[s](e)
    }

    function i(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }

    function n(t, e) {
        i(t);
        for (var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length; r > o; o++) if (n[o] === t) return !0;
        return !1
    }

    function o(t, n) {
        return i(t), e(t, n)
    }

    var r, s = function () {
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
            var o = e[i], r = o + "MatchesSelector";
            if (t[r]) return r
        }
    }();
    if (s) {
        var a = document.createElement("div"), l = e(a, "div");
        r = l ? e : o
    } else r = n;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return r
    }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
}(Element.prototype), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
}(window, function (t, e, i) {
    var n = {};
    n.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, n.modulo = function (t, e) {
        return (t % e + e) % e
    };
    var o = Object.prototype.toString;
    n.isArray = function (t) {
        return "[object Array]" == o.call(t)
    }, n.makeArray = function (t) {
        var e = [];
        if (n.isArray(t)) e = t; else if (t && "number" == typeof t.length) for (var i = 0, o = t.length; o > i; i++) e.push(t[i]); else e.push(t);
        return e
    }, n.indexOf = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
        return -1
    }, n.removeFrom = function (t, e) {
        var i = n.indexOf(t, e);
        -1 != i && t.splice(i, 1)
    }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
        return t instanceof HTMLElement
    } : function (t) {
        return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
    }, n.setText = function () {
        function t(t, i) {
            e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
        }

        var e;
        return t
    }(), n.getParent = function (t, e) {
        for (; t != document.body;) if (t = t.parentNode, i(t, e)) return t
    }, n.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, n.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, n.filterFindElements = function (t, e) {
        t = n.makeArray(t);
        for (var o = [], r = 0, s = t.length; s > r; r++) {
            var a = t[r];
            if (n.isElement(a)) if (e) {
                i(a, e) && o.push(a);
                for (var l = a.querySelectorAll(e), u = 0, c = l.length; c > u; u++) o.push(l[u])
            } else o.push(a)
        }
        return o
    }, n.debounceMethod = function (t, e, i) {
        var n = t.prototype[e], o = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments, r = this;
            this[o] = setTimeout(function () {
                n.apply(r, e), delete r[o]
            }, i || 100)
        }
    }, n.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var r = t.console;
    return n.htmlInit = function (i, o) {
        e(function () {
            for (var e = n.toDashed(o), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, u = s.length; u > l; l++) {
                var c, h = s[l], d = h.getAttribute(a);
                try {
                    c = d && JSON.parse(d)
                } catch (p) {
                    r && r.error("Error parsing " + a + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + p);
                    continue
                }
                var f = new i(h, c), m = t.jQuery;
                m && m.data(h, o, f)
            }
        })
    }, n
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
}(window, function (t, e, i, n, o) {
    "use strict";

    function r(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function s(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }

    function a(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }

    var l = t.getComputedStyle, u = l ? function (t) {
        return l(t, null)
    } : function (t) {
        return t.currentStyle
    }, c = n("transition"), h = n("transform"), d = c && h, p = !!n("perspective"), f = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend"}[c], m = ["transform", "transition", "transitionDuration", "transitionProperty"], g = function () {
        for (var t = {}, e = 0, i = m.length; i > e; e++) {
            var o = m[e], r = n(o);
            r && r !== o && (t[o] = r)
        }
        return t
    }();
    o.extend(s.prototype, e.prototype), s.prototype._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, s.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, s.prototype.getSize = function () {
        this.size = i(this.element)
    }, s.prototype.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            var n = g[i] || i;
            e[n] = t[i]
        }
    }, s.prototype.getPosition = function () {
        var t = u(this.element), e = this.layout.options, i = e.isOriginLeft, n = e.isOriginTop, o = t[i ? "left" : "right"], r = t[n ? "top" : "bottom"], s = this.layout.size, a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.width : parseInt(o, 10), l = -1 != r.indexOf("%") ? parseFloat(r) / 100 * s.height : parseInt(r, 10);
        a = isNaN(a) ? 0 : a, l = isNaN(l) ? 0 : l, a -= i ? s.paddingLeft : s.paddingRight, l -= n ? s.paddingTop : s.paddingBottom, this.position.x = a, this.position.y = l
    }, s.prototype.layoutPosition = function () {
        var t = this.layout.size, e = this.layout.options, i = {}, n = e.isOriginLeft ? "paddingLeft" : "paddingRight", o = e.isOriginLeft ? "left" : "right", r = e.isOriginLeft ? "right" : "left", s = this.position.x + t[n];
        i[o] = this.getXValue(s), i[r] = "";
        var a = e.isOriginTop ? "paddingTop" : "paddingBottom", l = e.isOriginTop ? "top" : "bottom", u = e.isOriginTop ? "bottom" : "top", c = this.position.y + t[a];
        i[l] = this.getYValue(c), i[u] = "", this.css(i), this.emitEvent("layout", [this])
    }, s.prototype.getXValue = function (t) {
        var e = this.layout.options;
        return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, s.prototype.getYValue = function (t) {
        var e = this.layout.options;
        return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, s.prototype._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x, n = this.position.y, o = parseInt(t, 10), r = parseInt(e, 10), s = o === this.position.x && r === this.position.y;
        if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i, l = e - n, u = {};
        u.transform = this.getTranslate(a, l), this.transition({to: u, onTransitionEnd: {transform: this.layoutPosition}, isCleaning: !0})
    }, s.prototype.getTranslate = function (t, e) {
        var i = this.layout.options;
        return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, p ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)"
    }, s.prototype.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, s.prototype.moveTo = d ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function (t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, s.prototype._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, s.prototype._transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var v = "opacity," + a(g.transform || "transform");
    s.prototype.enableTransition = function () {
        this.isTransitioning || (this.css({transitionProperty: v, transitionDuration: this.layout.options.transitionDuration}), this.element.addEventListener(f, this, !1))
    }, s.prototype.transition = s.prototype[c ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, s.prototype.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var y = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
    s.prototype.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn, i = y[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], r(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                var n = e.onEnd[i];
                n.call(this), delete e.onEnd[i]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, s.prototype.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(f, this, !1), this.isTransitioning = !1
    }, s.prototype._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var _ = {transitionProperty: "", transitionDuration: ""};
    return s.prototype.removeTransitionStyles = function () {
        this.css(_)
    }, s.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, s.prototype.remove = function () {
        if (!c || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
        var t = this;
        this.once("transitionEnd", function () {
            t.removeElem()
        }), this.hide()
    }, s.prototype.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e})
    }, s.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, s.prototype.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, s.prototype.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e})
    }, s.prototype.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, s.prototype.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, s
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, r, s) {
        return e(t, i, n, o, r, s)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, n, o, r) {
    "use strict";

    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i) return void (a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, l && (this.$element = l(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
        var n = ++c;
        this.element.outlayerGUID = n, h[n] = this, this._create(), this.options.isInitLayout && this.layout()
    }

    var a = t.console, l = t.jQuery, u = function () {
    }, c = 0, h = {};
    return s.namespace = "outlayer", s.Item = r, s.defaults = {containerStyle: {position: "relative"}, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: {opacity: 0, transform: "scale(0.001)"}, visibleStyle: {opacity: 1, transform: "scale(1)"}}, o.extend(s.prototype, i.prototype), s.prototype.option = function (t) {
        o.extend(this.options, t)
    }, s.prototype._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, s.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, s.prototype._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, r = e.length; r > o; o++) {
            var s = e[o], a = new i(s, this);
            n.push(a)
        }
        return n
    }, s.prototype._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }, s.prototype.getItemElements = function () {
        for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
        return t
    }, s.prototype.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, s.prototype._init = s.prototype.layout, s.prototype._resetLayout = function () {
        this.getSize()
    }, s.prototype.getSize = function () {
        this.size = n(this.element)
    }, s.prototype._getMeasurement = function (t, e) {
        var i, r = this.options[t];
        r ? ("string" == typeof r ? i = this.element.querySelector(r) : o.isElement(r) && (i = r), this[t] = i ? n(i)[e] : r) : this[t] = 0
    }, s.prototype.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, s.prototype._getItemsForLayout = function (t) {
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var o = t[i];
            o.isIgnored || e.push(o)
        }
        return e
    }, s.prototype._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            for (var i = [], n = 0, o = t.length; o > n; n++) {
                var r = t[n], s = this._getItemLayoutPosition(r);
                s.item = r, s.isInstant = e || r.isLayoutInstant, i.push(s)
            }
            this._processLayoutQueue(i)
        }
    }, s.prototype._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, s.prototype._processLayoutQueue = function (t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            this._positionItem(n.item, n.x, n.y, n.isInstant)
        }
    }, s.prototype._positionItem = function (t, e, i, n) {
        n ? t.goTo(e, i) : t.moveTo(e, i)
    }, s.prototype._postLayout = function () {
        this.resizeContainer()
    }, s.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, s.prototype._getContainerSize = u, s.prototype._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, s.prototype._emitCompleteOnItems = function (t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            s++, s === r && i()
        }

        var o = this, r = e.length;
        if (!e || !r) return void i();
        for (var s = 0, a = 0, l = e.length; l > a; a++) {
            var u = e[a];
            u.once(t, n)
        }
    }, s.prototype.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), l) if (this.$element = this.$element || l(this.element), e) {
            var o = l.Event(e);
            o.type = t, this.$element.trigger(o, i)
        } else this.$element.trigger(t, i)
    }, s.prototype.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, s.prototype.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, s.prototype.stamp = function (t) {
        if (t = this._find(t)) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this.ignore(n)
            }
        }
    }, s.prototype.unstamp = function (t) {
        if (t = this._find(t)) for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            o.removeFrom(this.stamps, n), this.unignore(n)
        }
    }, s.prototype._find = function (t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)) : void 0
    }, s.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
                var i = this.stamps[t];
                this._manageStamp(i)
            }
        }
    }, s.prototype._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)}
    }, s.prototype._manageStamp = u, s.prototype._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(), i = this._boundingRect, o = n(t), r = {left: e.left - i.left - o.marginLeft, top: e.top - i.top - o.marginTop, right: i.right - e.right - o.marginRight, bottom: i.bottom - e.bottom - o.marginBottom};
        return r
    }, s.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, s.prototype.bindResize = function () {
        this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
    }, s.prototype.unbindResize = function () {
        this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
    }, s.prototype.onresize = function () {
        function t() {
            e.resize(), delete e.resizeTimeout
        }

        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var e = this;
        this.resizeTimeout = setTimeout(t, 100)
    }, s.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, s.prototype.needsResizeLayout = function () {
        var t = n(this.element), e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, s.prototype.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, s.prototype.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, s.prototype.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, s.prototype.reveal = function (t) {
        this._emitCompleteOnItems("reveal", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.reveal()
        }
    }, s.prototype.hide = function (t) {
        this._emitCompleteOnItems("hide", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.hide()
        }
    }, s.prototype.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, s.prototype.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, s.prototype.getItem = function (t) {
        for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            if (n.element === t) return n
        }
    }, s.prototype.getItems = function (t) {
        t = o.makeArray(t);
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var r = t[i], s = this.getItem(r);
            s && e.push(s)
        }
        return e
    }, s.prototype.remove = function (t) {
        var e = this.getItems(t);
        if (this._emitCompleteOnItems("remove", e), e && e.length) for (var i = 0, n = e.length; n > i; i++) {
            var r = e[i];
            r.remove(), o.removeFrom(this.items, r)
        }
    }, s.prototype.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "";
        for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            n.destroy()
        }
        this.unbindResize();
        var o = this.element.outlayerGUID;
        delete h[o], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && h[e]
    }, s.create = function (t, e) {
        function i() {
            s.apply(this, arguments)
        }

        return Object.create ? i.prototype = Object.create(s.prototype) : o.extend(i.prototype, s.prototype), i.prototype.constructor = i, i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = s.data, i.Item = function () {
            r.apply(this, arguments)
        }, i.Item.prototype = new r, o.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
    }, s.Item = r, s
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }

    e.prototype = new t.Item, e.prototype._create = function () {
        this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
    }, e.prototype.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData, e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var i = e.prototype.destroy;
    return e.prototype.destroy = function () {
        i.apply(this, arguments), this.css({display: ""})
    }, e
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }

    return function () {
        function t(t) {
            return function () {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }

        for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], o = 0, r = n.length; r > o; o++) {
            var s = n[o];
            i.prototype[s] = t(s)
        }
    }(), i.prototype.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element), i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, i.prototype._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, i.prototype.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, i.prototype.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, i.prototype.getSegmentSize = function (t, e) {
        var i = t + e, n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var o = this.getFirstItemSize();
            this[i] = o && o[n] || this.isotope.size["inner" + e]
        }
    }, i.prototype.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, i.prototype.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, i.prototype.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function (t, e) {
        function n() {
            i.apply(this, arguments)
        }

        return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
    }, i
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
}(window, function (t, e, i) {
    var n = t.create("masonry");
    return n.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
        var t = this.cols;
        for (this.colYs = []; t--;) this.colYs.push(0);
        this.maxY = 0
    }, n.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter, o = this.containerWidth + this.gutter, r = o / n, s = n - o % n, a = s && 1 > s ? "round" : "floor";
        r = Math[a](r), this.cols = Math.max(r, 1)
    }, n.prototype.getContainerWidth = function () {
        var t = this.options.isFitWidth ? this.element.parentNode : this.element, i = e(t);
        this.containerWidth = i && i.innerWidth
    }, n.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth, n = e && 1 > e ? "round" : "ceil", o = Math[n](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var r = this._getColGroup(o), s = Math.min.apply(Math, r), a = i.indexOf(r, s), l = {x: this.columnWidth * a, y: s}, u = s + t.size.outerHeight, c = this.cols + 1 - r.length, h = 0; c > h; h++) this.colYs[a + h] = u;
        return l
    }, n.prototype._getColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }, n.prototype._manageStamp = function (t) {
        var i = e(t), n = this._getElementOffset(t), o = this.options.isOriginLeft ? n.left : n.right, r = o + i.outerWidth, s = Math.floor(o / this.columnWidth);
        s = Math.max(0, s);
        var a = Math.floor(r / this.columnWidth);
        a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, u = s; a >= u; u++) this.colYs[u] = Math.max(l, this.colYs[u])
    }, n.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
    }, n.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, n.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t !== this.containerWidth
    }, n
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
    "use strict";

    function i(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    var n = t.create("masonry"), o = n.prototype._getElementOffset, r = n.prototype.layout, s = n.prototype._getMeasurement;
    i(n.prototype, e.prototype), n.prototype._getElementOffset = o, n.prototype.layout = r, n.prototype._getMeasurement = s;
    var a = n.prototype.measureColumns;
    n.prototype.measureColumns = function () {
        this.items = this.isotope.filteredItems, a.call(this)
    };
    var l = n.prototype._manageStamp;
    return n.prototype._manageStamp = function () {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
    }, n
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("fitRows");
    return e.prototype._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, e.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {x: this.x, y: this.y};
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, e.prototype._getContainerSize = function () {
        return {height: this.maxY}
    }, e
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("vertical", {horizontalAlignment: 0});
    return e.prototype._resetLayout = function () {
        this.y = 0
    }, e.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
        return this.y += t.size.outerHeight, {x: e, y: i}
    }, e.prototype._getContainerSize = function () {
        return {height: this.y}
    }, e
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (i, n, o, r, s, a) {
        return e(t, i, n, o, r, s, a)
    }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, n, o, r, s) {
    function a(t, e) {
        return function (i, n) {
            for (var o = 0, r = t.length; r > o; o++) {
                var s = t[o], a = i.sortData[s], l = n.sortData[s];
                if (a > l || l > a) {
                    var u = void 0 !== e[s] ? e[s] : e, c = u ? 1 : -1;
                    return (a > l ? 1 : -1) * c
                }
            }
            return 0
        }
    }

    var l = t.jQuery, u = String.prototype.trim ? function (t) {
        return t.trim()
    } : function (t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, c = document.documentElement, h = c.textContent ? function (t) {
        return t.textContent
    } : function (t) {
        return t.innerText
    }, d = e.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
    d.Item = r, d.LayoutMode = s, d.prototype._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in s.modes) this._initLayoutMode(t)
    }, d.prototype.reloadItems = function () {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, d.prototype._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0, n = t.length; n > i; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, d.prototype._initLayoutMode = function (t) {
        var e = s.modes[t], i = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, d.prototype.layout = function () {
        return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
    }, d.prototype._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, d.prototype.arrange = function (t) {
        function e() {
            n.reveal(i.needReveal), n.hide(i.needHide)
        }

        this.option(t), this._getIsInstant();
        var i = this._filter(this.items);
        this.filteredItems = i.matches;
        var n = this;
        this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
    }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function () {
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        return this._isInstant = t, t
    }, d.prototype._bindArrangeComplete = function () {
        function t() {
            e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }

        var e, i, n, o = this;
        this.once("layoutComplete", function () {
            e = !0, t()
        }), this.once("hideComplete", function () {
            i = !0, t()
        }), this.once("revealComplete", function () {
            n = !0, t()
        })
    }, d.prototype._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], o = [], r = this._getFilterTest(e), s = 0, a = t.length; a > s; s++) {
            var l = t[s];
            if (!l.isIgnored) {
                var u = r(l);
                u && i.push(l), u && l.isHidden ? n.push(l) : u || l.isHidden || o.push(l)
            }
        }
        return {matches: i, needReveal: n, needHide: o}
    }, d.prototype._getFilterTest = function (t) {
        return l && this.options.isJQueryFiltering ? function (e) {
            return l(e.element).is(t)
        } : "function" == typeof t ? function (e) {
            return t(e.element)
        } : function (e) {
            return n(e.element, t)
        }
    }, d.prototype.updateSortData = function (t) {
        var e;
        t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, d.prototype._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = p(i)
        }
    }, d.prototype._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.updateSortData()
        }
    };
    var p = function () {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = u(t).split(" "), n = i[0], o = n.match(/^\[(.+)\]$/), r = o && o[1], s = e(r, n), a = d.sortDataParsers[i[1]];
            return t = a ? function (t) {
                return t && a(s(t))
            } : function (t) {
                return t && s(t)
            }
        }

        function e(t, e) {
            var i;
            return i = t ? function (e) {
                return e.getAttribute(t)
            } : function (t) {
                var i = t.querySelector(e);
                return i && h(i)
            }
        }

        return t
    }();
    d.sortDataParsers = {
        parseInt: function (t) {
            return parseInt(t, 10)
        }, parseFloat: function (t) {
            return parseFloat(t)
        }
    }, d.prototype._sort = function () {
        var t = this.options.sortBy;
        if (t) {
            var e = [].concat.apply(t, this.sortHistory), i = a(e, this.options.sortAscending);
            this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }, d.prototype._mode = function () {
        var t = this.options.layoutMode, e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, d.prototype._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, d.prototype._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t)
    }, d.prototype._manageStamp = function (t) {
        this._mode()._manageStamp(t)
    }, d.prototype._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, d.prototype.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, d.prototype.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, d.prototype.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, d.prototype._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, d.prototype.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, o = e.length;
            for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
            var r = this._filter(e).matches;
            for (i = 0; o > i; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
            this.reveal(r)
        }
    };
    var f = d.prototype.remove;
    return d.prototype.remove = function (t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        f.call(this, t);
        var i = e && e.length;
        if (i) for (var n = 0; i > n; n++) {
            var r = e[n];
            o.removeFrom(this.filteredItems, r)
        }
    }, d.prototype.shuffle = function () {
        for (var t = 0, e = this.items.length; e > t; t++) {
            var i = this.items[t];
            i.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, d.prototype._noTransition = function (t) {
        var e = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var i = t.call(this);
        return this.options.transitionDuration = e, i
    }, d.prototype.getFilteredItemElements = function () {
        for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
        return t
    }, d
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad", swing: function (t, e, i, n, o) {
        return jQuery.easing[jQuery.easing.def](t, e, i, n, o)
    }, easeInQuad: function (t, e, i, n, o) {
        return n * (e /= o) * e + i
    }, easeOutQuad: function (t, e, i, n, o) {
        return -n * (e /= o) * (e - 2) + i
    }, easeInOutQuad: function (t, e, i, n, o) {
        return (e /= o / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
    }, easeInCubic: function (t, e, i, n, o) {
        return n * (e /= o) * e * e + i
    }, easeOutCubic: function (t, e, i, n, o) {
        return n * ((e = e / o - 1) * e * e + 1) + i
    }, easeInOutCubic: function (t, e, i, n, o) {
        return (e /= o / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
    }, easeInQuart: function (t, e, i, n, o) {
        return n * (e /= o) * e * e * e + i
    }, easeOutQuart: function (t, e, i, n, o) {
        return -n * ((e = e / o - 1) * e * e * e - 1) + i
    }, easeInOutQuart: function (t, e, i, n, o) {
        return (e /= o / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
    }, easeInQuint: function (t, e, i, n, o) {
        return n * (e /= o) * e * e * e * e + i
    }, easeOutQuint: function (t, e, i, n, o) {
        return n * ((e = e / o - 1) * e * e * e * e + 1) + i
    }, easeInOutQuint: function (t, e, i, n, o) {
        return (e /= o / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
    }, easeInSine: function (t, e, i, n, o) {
        return -n * Math.cos(e / o * (Math.PI / 2)) + n + i
    }, easeOutSine: function (t, e, i, n, o) {
        return n * Math.sin(e / o * (Math.PI / 2)) + i
    }, easeInOutSine: function (t, e, i, n, o) {
        return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + i
    }, easeInExpo: function (t, e, i, n, o) {
        return 0 == e ? i : n * Math.pow(2, 10 * (e / o - 1)) + i
    }, easeOutExpo: function (t, e, i, n, o) {
        return e == o ? i + n : n * (-Math.pow(2, -10 * e / o) + 1) + i
    }, easeInOutExpo: function (t, e, i, n, o) {
        return 0 == e ? i : e == o ? i + n : (e /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
    }, easeInCirc: function (t, e, i, n, o) {
        return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + i
    }, easeOutCirc: function (t, e, i, n, o) {
        return n * Math.sqrt(1 - (e = e / o - 1) * e) + i
    }, easeInOutCirc: function (t, e, i, n, o) {
        return (e /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
    }, easeInElastic: function (t, e, i, n, o) {
        var r = 1.70158, s = 0, a = n;
        if (0 == e) return i;
        if (1 == (e /= o)) return i + n;
        if (s || (s = .3 * o), a < Math.abs(n)) {
            a = n;
            var r = s / 4
        } else var r = s / (2 * Math.PI) * Math.asin(n / a);
        return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s)) + i
    }, easeOutElastic: function (t, e, i, n, o) {
        var r = 1.70158, s = 0, a = n;
        if (0 == e) return i;
        if (1 == (e /= o)) return i + n;
        if (s || (s = .3 * o), a < Math.abs(n)) {
            a = n;
            var r = s / 4
        } else var r = s / (2 * Math.PI) * Math.asin(n / a);
        return a * Math.pow(2, -10 * e) * Math.sin((e * o - r) * (2 * Math.PI) / s) + n + i
    }, easeInOutElastic: function (t, e, i, n, o) {
        var r = 1.70158, s = 0, a = n;
        if (0 == e) return i;
        if (2 == (e /= o / 2)) return i + n;
        if (s || (s = o * (.3 * 1.5)), a < Math.abs(n)) {
            a = n;
            var r = s / 4
        } else var r = s / (2 * Math.PI) * Math.asin(n / a);
        return e < 1 ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s)) + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s) * .5 + n + i
    }, easeInBack: function (t, e, i, n, o, r) {
        return void 0 == r && (r = 1.70158), n * (e /= o) * e * ((r + 1) * e - r) + i
    }, easeOutBack: function (t, e, i, n, o, r) {
        return void 0 == r && (r = 1.70158), n * ((e = e / o - 1) * e * ((r + 1) * e + r) + 1) + i
    }, easeInOutBack: function (t, e, i, n, o, r) {
        return void 0 == r && (r = 1.70158), (e /= o / 2) < 1 ? n / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + i : n / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + i
    }, easeInBounce: function (t, e, i, n, o) {
        return n - jQuery.easing.easeOutBounce(t, o - e, 0, n, o) + i
    }, easeOutBounce: function (t, e, i, n, o) {
        return (e /= o) < 1 / 2.75 ? n * (7.5625 * e * e) + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
    }, easeInOutBounce: function (t, e, i, n, o) {
        return e < o / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, n, o) + .5 * n + i
    }
}), !function (t) {
    function e() {
    }

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function (e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function o(e, i) {
            t.fn[e] = function (o) {
                if ("string" == typeof o) {
                    for (var s = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                        var u = this[a], c = t.data(u, e);
                        if (c) if (t.isFunction(c[o]) && "_" !== o.charAt(0)) {
                            var h = c[o].apply(c, s);
                            if (void 0 !== h) return h
                        } else r("no such method '" + o + "' for " + e + " instance"); else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var n = t.data(this, e);
                    n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
                })
            }
        }

        if (t) {
            var r = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            };
            return t.bridget = function (t, e) {
                i(e), o(t, e)
            }, t.bridget
        }
    }

    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window), function (t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }

    var i = document.documentElement, n = function () {
    };
    i.addEventListener ? n = function (t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function (t, i, n) {
        t[i + n] = n.handleEvent ? function () {
            var i = e(t);
            n.handleEvent.call(n, i)
        } : function () {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var o = function () {
    };
    i.removeEventListener ? o = function (t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (o = function (t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var r = {bind: n, unbind: o};
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window), function () {
    function t() {
    }

    function e(t, e) {
        for (var i = t.length; i--;) if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    var n = t.prototype, o = this, r = o.EventEmitter;
    n.getListeners = function (t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function (t) {
        var e, i = [];
        for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function (t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function (t, i) {
        var n, o = this.getListenersAsObject(t), r = "object" == typeof i;
        for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {listener: i, once: !1});
        return this
    }, n.on = i("addListener"), n.addOnceListener = function (t, e) {
        return this.addListener(t, {listener: e, once: !0})
    }, n.once = i("addOnceListener"), n.defineEvent = function (t) {
        return this.getListeners(t), this
    }, n.defineEvents = function (t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function (t, i) {
        var n, o, r = this.getListenersAsObject(t);
        for (o in r) r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function (t, e, i) {
        var n, o, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp) for (n = i.length; n--;) r.call(this, e, i[n]); else for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
        return this
    }, n.removeEvent = function (t) {
        var e, i = typeof t, n = this._getEvents();
        if ("string" === i) delete n[t]; else if (t instanceof RegExp) for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e]; else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e) {
        var i, n, o, r, s = this.getListenersAsObject(t);
        for (o in s) if (s.hasOwnProperty(o)) for (n = s[o].length; n--;) i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, n._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this), function (t) {
    function e(t) {
        if (t) {
            if ("string" == typeof n[t]) return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, o = 0, r = i.length; r > o; o++) if (e = i[o] + t, "string" == typeof n[e]) return e
        }
    }

    var i = "Webkit Moz ms Ms O".split(" "), n = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function (t) {
    function e(t) {
        var e = parseFloat(t), i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function i() {
    }

    function n() {
        for (var t = {width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0}, e = 0, i = s.length; i > e; e++) {
            var n = s[e];
            t[n] = 0
        }
        return t
    }

    function o(i) {
        function o() {
            if (!d) {
                d = !0;
                var n = t.getComputedStyle;
                if (u = function () {
                    var t = n ? function (t) {
                        return n(t, null)
                    } : function (t) {
                        return t.currentStyle
                    };
                    return function (e) {
                        var i = t(e);
                        return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                    }
                }(), c = i("boxSizing")) {
                    var o = document.createElement("div");
                    o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[c] = "border-box";
                    var s = document.body || document.documentElement;
                    s.appendChild(o);
                    var a = u(o);
                    h = 200 === e(a.width), s.removeChild(o)
                }
            }
        }

        function a(t) {
            if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var i = u(t);
                if ("none" === i.display) return n();
                var r = {};
                r.width = t.offsetWidth, r.height = t.offsetHeight;
                for (var a = r.isBorderBox = !(!c || !i[c] || "border-box" !== i[c]), d = 0, p = s.length; p > d; d++) {
                    var f = s[d], m = i[f];
                    m = l(t, m);
                    var g = parseFloat(m);
                    r[f] = isNaN(g) ? 0 : g
                }
                var v = r.paddingLeft + r.paddingRight, y = r.paddingTop + r.paddingBottom, _ = r.marginLeft + r.marginRight, b = r.marginTop + r.marginBottom, w = r.borderLeftWidth + r.borderRightWidth, x = r.borderTopWidth + r.borderBottomWidth, T = a && h, S = e(i.width);
                S !== !1 && (r.width = S + (T ? 0 : v + w));
                var C = e(i.height);
                return C !== !1 && (r.height = C + (T ? 0 : y + x)), r.innerWidth = r.width - (v + w), r.innerHeight = r.height - (y + x), r.outerWidth = r.width + _, r.outerHeight = r.height + b, r
            }
        }

        function l(e, i) {
            if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
            var n = e.style, o = n.left, r = e.runtimeStyle, s = r && r.left;
            return s && (r.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, s && (r.left = s), i
        }

        var u, c, h, d = !1;
        return a
    }

    var r = "undefined" == typeof console ? i : function (t) {
        console.error(t)
    }, s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window), function (t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }

    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || i || n()
    }

    function n() {
        e.isReady = !0;
        for (var t = 0, i = s.length; i > t; t++) {
            var n = s[t];
            n()
        }
    }

    function o(o) {
        return "complete" === r.readyState ? n() : (o.bind(r, "DOMContentLoaded", i), o.bind(r, "readystatechange", i), o.bind(t, "load", i)), e
    }

    var r = t.document, s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
}(window), function (t) {
    function e(t, e) {
        return t[s](e)
    }

    function i(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }

    function n(t, e) {
        i(t);
        for (var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length; r > o; o++) if (n[o] === t) return !0;
        return !1
    }

    function o(t, n) {
        return i(t), e(t, n)
    }

    var r, s = function () {
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
            var o = e[i], r = o + "MatchesSelector";
            if (t[r]) return r
        }
    }();
    if (s) {
        var a = document.createElement("div"), l = e(a, "div");
        r = l ? e : o
    } else r = n;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return r
    }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
}(Element.prototype), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
}(window, function (t, e, i) {
    var n = {};
    n.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, n.modulo = function (t, e) {
        return (t % e + e) % e
    };
    var o = Object.prototype.toString;
    n.isArray = function (t) {
        return "[object Array]" == o.call(t)
    }, n.makeArray = function (t) {
        var e = [];
        if (n.isArray(t)) e = t; else if (t && "number" == typeof t.length) for (var i = 0, o = t.length; o > i; i++) e.push(t[i]); else e.push(t);
        return e
    }, n.indexOf = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
        return -1
    }, n.removeFrom = function (t, e) {
        var i = n.indexOf(t, e);
        -1 != i && t.splice(i, 1)
    }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
        return t instanceof HTMLElement
    } : function (t) {
        return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
    }, n.setText = function () {
        function t(t, i) {
            e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
        }

        var e;
        return t
    }(), n.getParent = function (t, e) {
        for (; t != document.body;) if (t = t.parentNode, i(t, e)) return t
    }, n.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, n.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, n.filterFindElements = function (t, e) {
        t = n.makeArray(t);
        for (var o = [], r = 0, s = t.length; s > r; r++) {
            var a = t[r];
            if (n.isElement(a)) if (e) {
                i(a, e) && o.push(a);
                for (var l = a.querySelectorAll(e), u = 0, c = l.length; c > u; u++) o.push(l[u])
            } else o.push(a)
        }
        return o
    }, n.debounceMethod = function (t, e, i) {
        var n = t.prototype[e], o = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments, r = this;
            this[o] = setTimeout(function () {
                n.apply(r, e), delete r[o]
            }, i || 100)
        }
    }, n.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var r = t.console;
    return n.htmlInit = function (i, o) {
        e(function () {
            for (var e = n.toDashed(o), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, u = s.length; u > l; l++) {
                var c, h = s[l], d = h.getAttribute(a);
                try {
                    c = d && JSON.parse(d)
                } catch (p) {
                    r && r.error("Error parsing " + a + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + p);
                    continue
                }
                var f = new i(h, c), m = t.jQuery;
                m && m.data(h, o, f)
            }
        })
    }, n
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
}(window, function (t, e, i, n, o) {
    function r(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function s(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }

    function a(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }

    var l = t.getComputedStyle, u = l ? function (t) {
        return l(t, null)
    } : function (t) {
        return t.currentStyle
    }, c = n("transition"), h = n("transform"), d = c && h, p = !!n("perspective"), f = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend"}[c], m = ["transform", "transition", "transitionDuration", "transitionProperty"], g = function () {
        for (var t = {}, e = 0, i = m.length; i > e; e++) {
            var o = m[e], r = n(o);
            r && r !== o && (t[o] = r)
        }
        return t
    }();
    o.extend(s.prototype, e.prototype), s.prototype._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, s.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, s.prototype.getSize = function () {
        this.size = i(this.element)
    }, s.prototype.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            var n = g[i] || i;
            e[n] = t[i]
        }
    }, s.prototype.getPosition = function () {
        var t = u(this.element), e = this.layout.options, i = e.isOriginLeft, n = e.isOriginTop, o = t[i ? "left" : "right"], r = t[n ? "top" : "bottom"], s = this.layout.size, a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.width : parseInt(o, 10), l = -1 != r.indexOf("%") ? parseFloat(r) / 100 * s.height : parseInt(r, 10);
        a = isNaN(a) ? 0 : a, l = isNaN(l) ? 0 : l, a -= i ? s.paddingLeft : s.paddingRight, l -= n ? s.paddingTop : s.paddingBottom, this.position.x = a, this.position.y = l
    }, s.prototype.layoutPosition = function () {
        var t = this.layout.size, e = this.layout.options, i = {}, n = e.isOriginLeft ? "paddingLeft" : "paddingRight", o = e.isOriginLeft ? "left" : "right", r = e.isOriginLeft ? "right" : "left", s = this.position.x + t[n];
        i[o] = this.getXValue(s), i[r] = "";
        var a = e.isOriginTop ? "paddingTop" : "paddingBottom", l = e.isOriginTop ? "top" : "bottom", u = e.isOriginTop ? "bottom" : "top", c = this.position.y + t[a];
        i[l] = this.getYValue(c), i[u] = "", this.css(i), this.emitEvent("layout", [this])
    }, s.prototype.getXValue = function (t) {
        var e = this.layout.options;
        return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, s.prototype.getYValue = function (t) {
        var e = this.layout.options;
        return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, s.prototype._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x, n = this.position.y, o = parseInt(t, 10), r = parseInt(e, 10), s = o === this.position.x && r === this.position.y;
        if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i, l = e - n, u = {};
        u.transform = this.getTranslate(a, l), this.transition({to: u, onTransitionEnd: {transform: this.layoutPosition}, isCleaning: !0})
    }, s.prototype.getTranslate = function (t, e) {
        var i = this.layout.options;
        return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, p ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)"
    }, s.prototype.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, s.prototype.moveTo = d ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function (t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, s.prototype._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, s.prototype._transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var v = "opacity," + a(g.transform || "transform");
    s.prototype.enableTransition = function () {
        this.isTransitioning || (this.css({transitionProperty: v, transitionDuration: this.layout.options.transitionDuration}), this.element.addEventListener(f, this, !1))
    }, s.prototype.transition = s.prototype[c ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, s.prototype.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var y = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
    s.prototype.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn, i = y[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], r(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                var n = e.onEnd[i];
                n.call(this), delete e.onEnd[i]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, s.prototype.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(f, this, !1), this.isTransitioning = !1
    }, s.prototype._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var _ = {transitionProperty: "", transitionDuration: ""};
    return s.prototype.removeTransitionStyles = function () {
        this.css(_)
    }, s.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, s.prototype.remove = function () {
        if (!c || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
        var t = this;
        this.once("transitionEnd", function () {
            t.removeElem()
        }), this.hide()
    }, s.prototype.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e})
    }, s.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, s.prototype.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, s.prototype.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e})
    }, s.prototype.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, s.prototype.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, s
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, r, s) {
        return e(t, i, n, o, r, s)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, n, o, r) {
    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i) return void (a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, l && (this.$element = l(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
        var n = ++c;
        this.element.outlayerGUID = n, h[n] = this, this._create(), this.options.isInitLayout && this.layout()
    }

    var a = t.console, l = t.jQuery, u = function () {
    }, c = 0, h = {};
    return s.namespace = "outlayer", s.Item = r, s.defaults = {containerStyle: {position: "relative"}, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: {opacity: 0, transform: "scale(0.001)"}, visibleStyle: {opacity: 1, transform: "scale(1)"}}, o.extend(s.prototype, i.prototype), s.prototype.option = function (t) {
        o.extend(this.options, t)
    }, s.prototype._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, s.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, s.prototype._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, r = e.length; r > o; o++) {
            var s = e[o], a = new i(s, this);
            n.push(a)
        }
        return n
    }, s.prototype._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }, s.prototype.getItemElements = function () {
        for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
        return t
    }, s.prototype.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, s.prototype._init = s.prototype.layout, s.prototype._resetLayout = function () {
        this.getSize()
    }, s.prototype.getSize = function () {
        this.size = n(this.element)
    }, s.prototype._getMeasurement = function (t, e) {
        var i, r = this.options[t];
        r ? ("string" == typeof r ? i = this.element.querySelector(r) : o.isElement(r) && (i = r), this[t] = i ? n(i)[e] : r) : this[t] = 0
    }, s.prototype.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, s.prototype._getItemsForLayout = function (t) {
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var o = t[i];
            o.isIgnored || e.push(o)
        }
        return e
    }, s.prototype._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            for (var i = [], n = 0, o = t.length; o > n; n++) {
                var r = t[n], s = this._getItemLayoutPosition(r);
                s.item = r, s.isInstant = e || r.isLayoutInstant, i.push(s)
            }
            this._processLayoutQueue(i)
        }
    }, s.prototype._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, s.prototype._processLayoutQueue = function (t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            this._positionItem(n.item, n.x, n.y, n.isInstant)
        }
    }, s.prototype._positionItem = function (t, e, i, n) {
        n ? t.goTo(e, i) : t.moveTo(e, i)
    }, s.prototype._postLayout = function () {
        this.resizeContainer();
    }, s.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, s.prototype._getContainerSize = u, s.prototype._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, s.prototype._emitCompleteOnItems = function (t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            s++, s === r && i()
        }

        var o = this, r = e.length;
        if (!e || !r) return void i();
        for (var s = 0, a = 0, l = e.length; l > a; a++) {
            var u = e[a];
            u.once(t, n)
        }
    }, s.prototype.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), l) if (this.$element = this.$element || l(this.element), e) {
            var o = l.Event(e);
            o.type = t, this.$element.trigger(o, i)
        } else this.$element.trigger(t, i)
    }, s.prototype.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, s.prototype.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, s.prototype.stamp = function (t) {
        if (t = this._find(t)) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this.ignore(n)
            }
        }
    }, s.prototype.unstamp = function (t) {
        if (t = this._find(t)) for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            o.removeFrom(this.stamps, n), this.unignore(n)
        }
    }, s.prototype._find = function (t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)) : void 0
    }, s.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
                var i = this.stamps[t];
                this._manageStamp(i)
            }
        }
    }, s.prototype._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)}
    }, s.prototype._manageStamp = u, s.prototype._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(), i = this._boundingRect, o = n(t), r = {left: e.left - i.left - o.marginLeft, top: e.top - i.top - o.marginTop, right: i.right - e.right - o.marginRight, bottom: i.bottom - e.bottom - o.marginBottom};
        return r
    }, s.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, s.prototype.bindResize = function () {
        this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
    }, s.prototype.unbindResize = function () {
        this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
    }, s.prototype.onresize = function () {
        function t() {
            e.resize(), delete e.resizeTimeout
        }

        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var e = this;
        this.resizeTimeout = setTimeout(t, 100)
    }, s.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, s.prototype.needsResizeLayout = function () {
        var t = n(this.element), e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, s.prototype.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, s.prototype.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, s.prototype.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, s.prototype.reveal = function (t) {
        this._emitCompleteOnItems("reveal", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.reveal()
        }
    }, s.prototype.hide = function (t) {
        this._emitCompleteOnItems("hide", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.hide()
        }
    }, s.prototype.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, s.prototype.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, s.prototype.getItem = function (t) {
        for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            if (n.element === t) return n
        }
    }, s.prototype.getItems = function (t) {
        t = o.makeArray(t);
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var r = t[i], s = this.getItem(r);
            s && e.push(s)
        }
        return e
    }, s.prototype.remove = function (t) {
        var e = this.getItems(t);
        if (this._emitCompleteOnItems("remove", e), e && e.length) for (var i = 0, n = e.length; n > i; i++) {
            var r = e[i];
            r.remove(), o.removeFrom(this.items, r)
        }
    }, s.prototype.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "";
        for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            n.destroy()
        }
        this.unbindResize();
        var o = this.element.outlayerGUID;
        delete h[o], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && h[e]
    }, s.create = function (t, e) {
        function i() {
            s.apply(this, arguments)
        }

        return Object.create ? i.prototype = Object.create(s.prototype) : o.extend(i.prototype, s.prototype), i.prototype.constructor = i, i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = s.data, i.Item = function () {
            r.apply(this, arguments)
        }, i.Item.prototype = new r, o.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
    }, s.Item = r, s
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
}(window, function (t, e, i) {
    var n = t.create("masonry");
    return n.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
        var t = this.cols;
        for (this.colYs = []; t--;) this.colYs.push(0);
        this.maxY = 0
    }, n.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter, o = this.containerWidth + this.gutter, r = o / n, s = n - o % n, a = s && 1 > s ? "round" : "floor";
        r = Math[a](r), this.cols = Math.max(r, 1)
    }, n.prototype.getContainerWidth = function () {
        var t = this.options.isFitWidth ? this.element.parentNode : this.element, i = e(t);
        this.containerWidth = i && i.innerWidth
    }, n.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth, n = e && 1 > e ? "round" : "ceil", o = Math[n](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var r = this._getColGroup(o), s = Math.min.apply(Math, r), a = i.indexOf(r, s), l = {x: this.columnWidth * a, y: s}, u = s + t.size.outerHeight, c = this.cols + 1 - r.length, h = 0; c > h; h++) this.colYs[a + h] = u;
        return l
    }, n.prototype._getColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }, n.prototype._manageStamp = function (t) {
        var i = e(t), n = this._getElementOffset(t), o = this.options.isOriginLeft ? n.left : n.right, r = o + i.outerWidth, s = Math.floor(o / this.columnWidth);
        s = Math.max(0, s);
        var a = Math.floor(r / this.columnWidth);
        a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
        for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, u = s; a >= u; u++) this.colYs[u] = Math.max(l, this.colYs[u])
    }, n.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
    }, n.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, n.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t !== this.containerWidth
    }, n
}), !function () {
    "use strict";

    function t(n) {
        if (!n) throw new Error("No options passed to Waypoint constructor");
        if (!n.element) throw new Error("No element option passed to Waypoint constructor");
        if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }

    var e = 0, i = {};
    t.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function () {
        return this.enabled = !1, this
    }, t.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function () {
        return this.group.next(this)
    }, t.prototype.previous = function () {
        return this.group.previous(this)
    }, t.invokeAll = function (t) {
        var e = [];
        for (var n in i) e.push(i[n]);
        for (var o = 0, r = e.length; r > o; o++) e[o][t]()
    }, t.destroyAll = function () {
        t.invokeAll("destroy")
    }, t.disableAll = function () {
        t.invokeAll("disable")
    }, t.enableAll = function () {
        t.invokeAll("enable")
    }, t.refreshAll = function () {
        t.Context.refreshAll()
    }, t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0}, t.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(), function () {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {x: this.adapter.scrollLeft(), y: this.adapter.scrollTop()}, this.waypoints = {vertical: {}, horizontal: {}}, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }

    var i = 0, n = {}, o = window.Waypoint, r = window.onload;
    e.prototype.add = function (t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal), e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete n[this.key])
    }, e.prototype.createThrottledResizeHandler = function () {
        function t() {
            e.handleResize(), e.didResize = !1
        }

        var e = this;
        this.adapter.on("resize.waypoints", function () {
            e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function () {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }

        var e = this;
        this.adapter.on("scroll.waypoints", function () {
            (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function () {
        o.Context.refreshAll()
    }, e.prototype.handleScroll = function () {
        var t = {}, e = {horizontal: {newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left"}, vertical: {newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up"}};
        for (var i in e) {
            var n = e[i], o = n.newScroll > n.oldScroll, r = o ? n.forward : n.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s], l = n.oldScroll < a.triggerPoint, u = n.newScroll >= a.triggerPoint, c = l && u, h = !l && !u;
                (c || h) && (a.queueTrigger(r), t[a.group.id] = a.group)
            }
        }
        for (var d in t) t[d].flushTriggers();
        this.oldScroll = {x: e.horizontal.newScroll, y: e.vertical.newScroll}
    }, e.prototype.innerHeight = function () {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function () {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var n = 0, o = t.length; o > n; n++) t[n].destroy()
    }, e.prototype.refresh = function () {
        var t, e = this.element == this.element.window, i = this.adapter.offset(), n = {};
        this.handleScroll(), t = {horizontal: {contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left"}, vertical: {contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top"}};
        for (var o in t) {
            var r = t[o];
            for (var s in this.waypoints[o]) {
                var a, l, u, c, h, d = this.waypoints[o][s], p = d.options.offset, f = d.triggerPoint, m = 0, g = null == f;
                d.element !== d.element.window && (m = d.adapter.offset()[r.offsetProp]), "function" == typeof p ? p = p.apply(d) : "string" == typeof p && (p = parseFloat(p), d.options.offset.indexOf("%") > -1 && (p = Math.ceil(r.contextDimension * p / 100))), a = r.contextScroll - r.contextOffset, d.triggerPoint = m + a - p, l = f < r.oldScroll, u = d.triggerPoint >= r.oldScroll, c = l && u, h = !l && !u, !g && c ? (d.queueTrigger(r.backward), n[d.group.id] = d.group) : !g && h ? (d.queueTrigger(r.forward), n[d.group.id] = d.group) : g && r.oldScroll >= d.triggerPoint && (d.queueTrigger(r.forward), n[d.group.id] = d.group)
            }
        }
        for (var v in n) n[v].flushTriggers();
        return this
    }, e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function () {
        for (var t in n) n[t].refresh()
    }, e.findByElement = function (t) {
        return n[t.waypointContextKey]
    }, window.onload = function () {
        r && r(), e.refreshAll()
    }, o.requestAnimationFrame = function (e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, o.Context = e
}(), function () {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
    }

    var n = {vertical: {}, horizontal: {}}, o = window.Waypoint;
    i.prototype.add = function (t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {up: [], down: [], left: [], right: []}
    }, i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
            var n = this.triggerQueues[i], o = "up" === i || "left" === i;
            n.sort(o ? e : t);
            for (var r = 0, s = n.length; s > r; r += 1) {
                var a = n[r];
                (a.options.continuous || r === n.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints), n = i === this.waypoints.length - 1;
        return n ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function (t) {
        var e = o.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function () {
        return this.waypoints[0]
    }, i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function (t) {
        return n[t.axis][t.name] || new i(t)
    }, o.Group = i
}(), function () {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }

    var e = window.jQuery, i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
        t.prototype[i] = function () {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function (i, n) {
        t[n] = e[n]
    }), i.adapters.push({name: "jquery", Adapter: t}), i.Adapter = t
}(), function () {
    "use strict";

    function t(t) {
        return function () {
            var i = [], n = arguments[0];
            return t.isFunction(arguments[0]) && (n = t.extend({}, arguments[1]), n.handler = arguments[0]), this.each(function () {
                var o = t.extend({}, n, {element: this});
                "string" == typeof o.context && (o.context = t(this).closest(o.context)[0]), i.push(new e(o))
            }), i
        }
    }

    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    t.extend(t.fn, {
        validate: function (e) {
            if (!this.length) return void (e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = t.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function (e) {
                i.settings.submitHandler && (i.submitButton = e.target), t(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.on("submit.validate", function (e) {
                function n() {
                    var n, o;
                    return !i.settings.submitHandler || (i.submitButton && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), o = i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && n.remove(), void 0 !== o && o)
                }

                return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
            })), i)
        }, valid: function () {
            var e, i, n;
            return t(this[0]).is("form") ? e = this.validate().form() : (n = [], e = !0, i = t(this[0].form).validate(), this.each(function () {
                e = i.element(this) && e, n = n.concat(i.errorList)
            }), i.errorList = n), e
        }, rules: function (e, i) {
            var n, o, r, s, a, l, u = this[0];
            if (e) switch (n = t.data(u.form, "validator").settings, o = n.rules, r = t.validator.staticRules(u), e) {
                case"add":
                    t.extend(r, t.validator.normalizeRule(i)), delete r.messages, o[u.name] = r, i.messages && (n.messages[u.name] = t.extend(n.messages[u.name], i.messages));
                    break;
                case"remove":
                    return i ? (l = {}, t.each(i.split(/\s/), function (e, i) {
                        l[i] = r[i], delete r[i], "required" === i && t(u).removeAttr("aria-required")
                    }), l) : (delete o[u.name], r)
            }
            return s = t.validator.normalizeRules(t.extend({}, t.validator.classRules(u), t.validator.attributeRules(u), t.validator.dataRules(u), t.validator.staticRules(u)), u), s.required && (a = s.required, delete s.required, s = t.extend({required: a}, s), t(u).attr("aria-required", "true")), s.remote && (a = s.remote, delete s.remote, s = t.extend(s, {remote: a})), s
        }
    }), t.extend(t.expr[":"], {
        blank: function (e) {
            return !t.trim("" + t(e).val())
        }, filled: function (e) {
            return !!t.trim("" + t(e).val())
        }, unchecked: function (e) {
            return !t(e).prop("checked")
        }
    }), t.validator = function (e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function (e, i) {
        return 1 === arguments.length ? function () {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function (t, i) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                return i
            })
        }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusCleanup: !1, focusInvalid: !0, errorContainer: t([]), errorLabelContainer: t([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function (t) {
                this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
            }, onfocusout: function (t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            }, onkeyup: function (e, i) {
                var n = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === i.which && "" === this.elementValue(e) || t.inArray(i.keyCode, n) !== -1 || (e.name in this.submitted || e === this.lastElement) && this.element(e)
            }, onclick: function (t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            }, highlight: function (e, i, n) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n)
            }, unhighlight: function (e, i, n) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n)
            }
        },
        setDefaults: function (e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function e(e) {
                    var i = t.data(this.form, "validator"), n = "on" + e.type.replace(/^validate/, ""), o = i.settings;
                    o[n] && !t(this).is(o.ignore) && o[n].call(i, this, e)
                }

                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, n = this.groups = {};
                t.each(this.settings.groups, function (e, i) {
                    "string" == typeof i && (i = i.split(/\s/)), t.each(i, function (t, i) {
                        n[i] = e
                    })
                }), i = this.settings.rules, t.each(i, function (e, n) {
                    i[e] = t.validator.normalizeRule(n)
                }), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            }, form: function () {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            }, element: function (e) {
                var i = this.clean(e), n = this.validationTargetFor(i), o = !0;
                return this.lastElement = n, void 0 === n ? delete this.invalid[i.name] : (this.prepareElement(n), this.currentElements = t(n), o = this.check(n) !== !1, o ? delete this.invalid[n.name] : this.invalid[n.name] = !0), t(e).attr("aria-invalid", !o), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), o
            }, showErrors: function (e) {
                if (e) {
                    t.extend(this.errorMap, e), this.errorList = [];
                    for (var i in e) this.errorList.push({message: e[i], element: this.findByName(i)[0]});
                    this.successList = t.grep(this.successList, function (t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
                var e, i = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight) for (e = 0; i[e]; e++) this.settings.unhighlight.call(this, i[e], this.settings.errorClass, ""); else i.removeClass(this.settings.errorClass)
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (t) {
                var e, i = 0;
                for (e in t) i++;
                return i
            }, hideErrors: function () {
                this.hideThese(this.toHide)
            }, hideThese: function (t) {
                t.not(this.containers).text(""), this.addWrapper(t).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {
                }
            }, findLastActive: function () {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function (t) {
                    return t.element.name === e.name
                }).length && e
            }, elements: function () {
                var e = this, i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in i || !e.objectLength(t(this).rules())) && (i[this.name] = !0, !0)
                })
            }, clean: function (e) {
                return t(e)[0]
            }, errors: function () {
                var e = this.settings.errorClass.split(" ").join(".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            }, reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (t) {
                this.reset(), this.toHide = this.errorsFor(t)
            }, elementValue: function (e) {
                var i, n = t(e), o = e.type;
                return "radio" === o || "checkbox" === o ? this.findByName(e.name).filter(":checked").val() : "number" === o && "undefined" != typeof e.validity ? !e.validity.badInput && n.val() : (i = n.val(), "string" == typeof i ? i.replace(/\r/g, "") : i)
            }, check: function (e) {
                e = this.validationTargetFor(this.clean(e));
                var i, n, o, r = t(e).rules(), s = t.map(r, function (t, e) {
                    return e
                }).length, a = !1, l = this.elementValue(e);
                for (n in r) {
                    o = {method: n, parameters: r[n]};
                    try {
                        if (i = t.validator.methods[n].call(this, l, e, o.parameters), "dependency-mismatch" === i && 1 === s) {
                            a = !0;
                            continue
                        }
                        if (a = !1, "pending" === i) return void (this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!i) return this.formatAndAdd(e, o), !1
                    } catch (u) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method.", u), u instanceof TypeError && (u.message += ".  Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method."), u
                    }
                }
                if (!a) return this.objectLength(r) && this.successList.push(e), !0
            }, customDataMessage: function (e, i) {
                return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
            }, customMessage: function (t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            }, findDefined: function () {
                for (var t = 0; t < arguments.length; t++) if (void 0 !== arguments[t]) return arguments[t]
            }, defaultMessage: function (e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            }, formatAndAdd: function (e, i) {
                var n = this.defaultMessage(e, i.method), o = /\$?\{(\d+)\}/g;
                "function" == typeof n ? n = n.call(this, i.parameters, e) : o.test(n) && (n = t.validator.format(n.replace(o, "{$1}"), i.parameters)), this.errorList.push({message: n, element: e, method: i.method}), this.errorMap[e.name] = n, this.submitted[e.name] = n
            }, addWrapper: function (t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            }, defaultShowErrors: function () {
                var t, e, i;
                for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight) for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return t(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (e, i) {
                var n, o, r, s = this.errorsFor(e), a = this.idOrName(e), l = t(e).attr("aria-describedby");
                s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(i || ""), n = s, this.settings.wrapper && (n = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement(n, t(e)) : n.insertAfter(e), s.is("label") ? s.attr("for", a) : 0 === s.parents("label[for='" + a + "']").length && (r = s.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), l ? l.match(new RegExp("\\b" + r + "\\b")) || (l += " " + r) : l = r, t(e).attr("aria-describedby", l), o = this.groups[e.name], o && t.each(this.groups, function (e, i) {
                    i === o && t("[name='" + e + "']", this.currentForm).attr("aria-describedby", s.attr("id"))
                }))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
            }, errorsFor: function (e) {
                var i = this.idOrName(e), n = t(e).attr("aria-describedby"), o = "label[for='" + i + "'], label[for='" + i + "'] *";
                return n && (o = o + ", #" + n.replace(/\s+/g, ", #")), this.errors().filter(o)
            }, idOrName: function (t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            }, validationTargetFor: function (e) {
                return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
            }, checkable: function (t) {
                return /radio|checkbox/i.test(t.type)
            }, findByName: function (e) {
                return t(this.currentForm).find("[name='" + e + "']")
            }, getLength: function (e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case"select":
                        return t("option:selected", i).length;
                    case"input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            }, depend: function (t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            }, dependTypes: {
                "boolean": function (t) {
                    return t
                }, string: function (e, i) {
                    return !!t(e, i.form).length
                }, "function": function (t, e) {
                    return t(e)
                }
            }, optional: function (e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            }, startRequest: function (t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            }, stopRequest: function (e, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {old: null, valid: !0, message: this.defaultMessage(e, "remote")})
            }, destroy: function () {
                this.resetForm(), t(this.currentForm).off(".validate").removeData("validator")
            }
        },
        classRuleSettings: {required: {required: !0}, email: {email: !0}, url: {url: !0}, date: {date: !0}, dateISO: {dateISO: !0}, number: {number: !0}, digits: {digits: !0}, creditcard: {creditcard: !0}},
        addClassRules: function (e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        },
        classRules: function (e) {
            var i = {}, n = t(e).attr("class");
            return n && t.each(n.split(" "), function () {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }), i
        },
        normalizeAttributeRule: function (t, e, i, n) {
            /min|max/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0)
        },
        attributeRules: function (e) {
            var i, n, o = {}, r = t(e), s = e.getAttribute("type");
            for (i in t.validator.methods) "required" === i ? (n = e.getAttribute(i), "" === n && (n = !0), n = !!n) : n = r.attr(i),
                this.normalizeAttributeRule(o, s, i, n);
            return o.maxlength && /-1|2147483647|524288/.test(o.maxlength) && delete o.maxlength, o
        },
        dataRules: function (e) {
            var i, n, o = {}, r = t(e), s = e.getAttribute("type");
            for (i in t.validator.methods) n = r.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(o, s, i, n);
            return o
        },
        staticRules: function (e) {
            var i = {}, n = t.data(e.form, "validator");
            return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}), i
        },
        normalizeRules: function (e, i) {
            return t.each(e, function (n, o) {
                if (o === !1) return void delete e[n];
                if (o.param || o.depends) {
                    var r = !0;
                    switch (typeof o.depends) {
                        case"string":
                            r = !!t(o.depends, i.form).length;
                            break;
                        case"function":
                            r = o.depends.call(i, i)
                    }
                    r ? e[n] = void 0 === o.param || o.param : delete e[n]
                }
            }), t.each(e, function (n, o) {
                e[n] = t.isFunction(o) ? o(i) : o
            }), t.each(["minlength", "maxlength"], function () {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function () {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
            }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function (e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function () {
                    i[this] = !0
                }), e = i
            }
            return e
        },
        addMethod: function (e, i, n) {
            t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function (e, i, n) {
                if (!this.depend(n, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var o = t(i).val();
                    return o && o.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : e.length > 0
            }, email: function (t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            }, url: function (t, e) {
                return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
            }, date: function (t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            }, dateISO: function (t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            }, number: function (t, e) {
                return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            }, digits: function (t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            }, creditcard: function (t, e) {
                if (this.optional(e)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t)) return !1;
                var i, n, o = 0, r = 0, s = !1;
                if (t = t.replace(/\D/g, ""), t.length < 13 || t.length > 19) return !1;
                for (i = t.length - 1; i >= 0; i--) n = t.charAt(i), r = parseInt(n, 10), s && (r *= 2) > 9 && (r -= 9), o += r, s = !s;
                return o % 10 === 0
            }, minlength: function (e, i, n) {
                var o = t.isArray(e) ? e.length : this.getLength(e, i);
                return this.optional(i) || o >= n
            }, maxlength: function (e, i, n) {
                var o = t.isArray(e) ? e.length : this.getLength(e, i);
                return this.optional(i) || o <= n
            }, rangelength: function (e, i, n) {
                var o = t.isArray(e) ? e.length : this.getLength(e, i);
                return this.optional(i) || o >= n[0] && o <= n[1]
            }, min: function (t, e, i) {
                return this.optional(e) || t >= i
            }, max: function (t, e, i) {
                return this.optional(e) || t <= i
            }, range: function (t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            }, equalTo: function (e, i, n) {
                var o = t(n);
                return this.settings.onfocusout && o.off(".validate-equalTo").on("blur.validate-equalTo", function () {
                    t(i).valid()
                }), e === o.val()
            }, remote: function (e, i, n) {
                if (this.optional(i)) return "dependency-mismatch";
                var o, r, s = this.previousValue(i);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), s.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = s.message, n = "string" == typeof n && {url: n} || n, s.old === e ? s.valid : (s.old = e, o = this, this.startRequest(i), r = {}, r[i.name] = e, t.ajax(t.extend(!0, {
                    mode: "abort", port: "validate" + i.name, dataType: "json", data: r, context: o.currentForm, success: function (n) {
                        var r, a, l, u = n === !0 || "true" === n;
                        o.settings.messages[i.name].remote = s.originalMessage, u ? (l = o.formSubmitted, o.prepareElement(i), o.formSubmitted = l, o.successList.push(i), delete o.invalid[i.name], o.showErrors()) : (r = {}, a = n || o.defaultMessage(i, "remote"), r[i.name] = s.message = t.isFunction(a) ? a(e) : a, o.invalid[i.name] = !0, o.showErrors(r)), s.valid = u, o.stopRequest(i, u)
                    }
                }, n)), "pending")
            }
        }
    });
    var e, i = {};
    t.ajaxPrefilter ? t.ajaxPrefilter(function (t, e, n) {
        var o = t.port;
        "abort" === t.mode && (i[o] && i[o].abort(), i[o] = n)
    }) : (e = t.ajax, t.ajax = function (n) {
        var o = ("mode" in n ? n : t.ajaxSettings).mode, r = ("port" in n ? n : t.ajaxSettings).port;
        return "abort" === o ? (i[r] && i[r].abort(), i[r] = e.apply(this, arguments), i[r]) : e.apply(this, arguments)
    })
}), function (t) {
    "use strict";

    function e(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    function i(t, e) {
        var i = n(t, e) ? r : o;
        i(t, e)
    }

    var n, o, r;
    "classList" in document.documentElement ? (n = function (t, e) {
        return t.classList.contains(e)
    }, o = function (t, e) {
        t.classList.add(e)
    }, r = function (t, e) {
        t.classList.remove(e)
    }) : (n = function (t, i) {
        return e(i).test(t.className)
    }, o = function (t, e) {
        n(t, e) || (t.className = t.className + " " + e)
    }, r = function (t, i) {
        t.className = t.className.replace(e(i), " ")
    });
    var s = {hasClass: n, addClass: o, removeClass: r, toggleClass: i, has: n, add: o, remove: r, toggle: i};
    "function" == typeof define && define.amd ? define(s) : "object" == typeof exports ? module.exports = s : t.classie = s
}(window), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    "use strict";
    var e = window.Slick || {};
    e = function () {
        function e(e, n) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(e),
                appendDots: t(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, i) {
                    return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = t(e), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = t(e).data("slick") || {}, r.options = t.extend({}, r.defaults, n, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = t.proxy(r.autoPlay, r), r.autoPlayClear = t.proxy(r.autoPlayClear, r), r.autoPlayIterator = t.proxy(r.autoPlayIterator, r), r.changeSlide = t.proxy(r.changeSlide, r), r.clickHandler = t.proxy(r.clickHandler, r), r.selectHandler = t.proxy(r.selectHandler, r), r.setPosition = t.proxy(r.setPosition, r), r.swipeHandler = t.proxy(r.swipeHandler, r), r.dragHandler = t.proxy(r.dragHandler, r), r.keyHandler = t.proxy(r.keyHandler, r), r.instanceUid = i++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
        }

        var i = 0;
        return e
    }(), e.prototype.activateADA = function () {
        var t = this;
        t.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
        var o = this;
        if ("boolean" == typeof i) n = i, i = null; else if (i < 0 || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : n === !0 ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (e, i) {
            t(i).attr("data-slick-index", e)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.animateHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({height: e}, t.options.speed)
        }
    }, e.prototype.animateSlide = function (e, i) {
        var n = {}, o = this;
        o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (e = -e), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({left: e}, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({top: e}, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), t({animStart: o.currentLeft}).animate({animStart: e}, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function (t) {
                t = Math.ceil(t), o.options.vertical === !1 ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
            },
            complete: function () {
                i && i.call()
            }
        })) : (o.applyTransition(), e = Math.ceil(e), o.options.vertical === !1 ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function () {
            o.disableTransition(), i.call()
        }, o.options.speed))
    }, e.prototype.getNavTarget = function () {
        var e = this, i = e.options.asNavFor;
        return i && null !== i && (i = t(i).not(e.$slider)), i
    }, e.prototype.asNavFor = function (e) {
        var i = this, n = i.getNavTarget();
        null !== n && "object" == typeof n && n.each(function () {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function (t) {
        var e = this, i = {};
        e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var t = this, e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
    }, e.prototype.buildArrows = function () {
        var e = this;
        e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, i, n = this;
        if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
            for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var t, e, i, n, o, r, s, a = this;
        if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), t = 0; t < o; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var u = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var c = t * s + (e * a.options.slidesPerRow + i);
                        r.get(c) && u.appendChild(r.get(c))
                    }
                    l.appendChild(u)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n), a.$slider.children().children().children().css({width: 100 / a.options.slidesPerRow + "%", display: "inline-block"})
        }
    }, e.prototype.checkResponsive = function (e, i) {
        var n, o, r, s = this, a = !1, l = s.$slider.width(), u = window.innerWidth || t(window).width();
        if ("window" === s.respondTo ? r = u : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(u, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            o = null;
            for (n in s.breakpoints) s.breakpoints.hasOwnProperty(n) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = o), e || a === !1 || s.$slider.trigger("breakpoint", [s, a])
        }
    }, e.prototype.changeSlide = function (e, i) {
        var n, o, r, s = this, a = t(e.currentTarget);
        switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll !== 0, n = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
            case"previous":
                o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
                break;
            case"next":
                o = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
                break;
            case"index":
                var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(l), !1, i), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (t) {
        var e, i, n = this;
        if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1]; else for (var o in e) {
            if (t < e[o]) {
                t = i;
                break
            }
            i = e[o]
        }
        return t
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
        var t, e = this;
        e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
    }, e.prototype.clickHandler = function (t) {
        var e = this;
        e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function (e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            t(this).attr("style", t(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, e.prototype.disableTransition = function (t) {
        var e = this, i = {};
        i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, e.prototype.fadeSlide = function (t, e) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(t).css({zIndex: i.options.zIndex}), i.$slides.eq(t).animate({opacity: 1}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({opacity: 1, zIndex: i.options.zIndex}), e && setTimeout(function () {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, e.prototype.fadeSlideOut = function (t) {
        var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(t).animate({opacity: 0, zIndex: e.options.zIndex - 2}, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({opacity: 0, zIndex: e.options.zIndex - 2}))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        var t = this;
        return t.currentSlide
    }, e.prototype.getDotCount = function () {
        var t = this, e = 0, i = 0, n = 0;
        if (t.options.infinite === !0) for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else if (t.options.centerMode === !0) n = t.slideCount; else if (t.options.asNavFor) for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return n - 1
    }, e.prototype.getLeft = function (t) {
        var e, i, n, o = this, r = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = o.options.vertical === !1 ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + r, o.options.variableWidth === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = o.options.rtl === !0 ? n[0] ? (o.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, o.options.centerMode === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = o.options.rtl === !0 ? n[0] ? (o.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
        var e = this;
        return e.options[t]
    }, e.prototype.getNavigableIndexes = function () {
        var t, e = this, i = 0, n = 0, o = [];
        for (e.options.infinite === !1 ? t = e.slideCount : (i = e.options.slidesToScroll * -1, n = e.options.slidesToScroll * -1, t = 2 * e.slideCount); i < t;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, i, n, o = this;
        return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function (e, r) {
            if (r.offsetLeft - n + t(r).outerWidth() / 2 > o.swipeLeft * -1) return i = r, !1
        }), e = Math.abs(t(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
        var i = this;
        i.changeSlide({data: {message: "index", index: parseInt(t)}}, e)
    }, e.prototype.init = function (e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden": "true", tabindex: "-1"}).find("a, input, button, select").attr({tabindex: "-1"}), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
            t(this).attr({role: "option", "aria-describedby": "slick-slide" + e.instanceUid + i})
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function (i) {
            t(this).attr({role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + e.instanceUid + i, id: "slick-slide" + e.instanceUid + i})
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
    }, e.prototype.initArrowEvents = function () {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, t.changeSlide))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.initUI = function () {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, e.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({data: {message: e.options.rtl === !0 ? "next" : "previous"}}) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({data: {message: e.options.rtl === !0 ? "previous" : "next"}}))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            t("img[data-lazy]", e).each(function () {
                var e = t(this), i = t(this).attr("data-lazy"), n = document.createElement("img");
                n.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        e.attr("src", i).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, e, i])
                    })
                }, n.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, i])
                }, n.src = i
            })
        }

        var i, n, o, r, s = this;
        s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = Math.ceil(o + s.options.slidesToShow), s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)), i = s.$slider.find(".slick-slide").slice(o, r), e(i), s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"), e(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), e(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(s.options.slidesToShow * -1), e(n))
    }, e.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(), t.$slideTrack.css({opacity: 1}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        var t = this;
        t.changeSlide({data: {message: "next"}})
    }, e.prototype.orientationChange = function () {
        var t = this;
        t.checkResponsive(), t.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        var t = this;
        t.autoPlayClear(), t.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, e.prototype.postSlide = function (t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        var t = this;
        t.changeSlide({data: {message: "previous"}})
    }, e.prototype.preventDefault = function (t) {
        t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var i, n, o, r = this, s = t("img[data-lazy]", r.$slider);
        s.length ? (i = s.first(), n = i.attr("data-lazy"), o = document.createElement("img"), o.onload = function () {
            i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), r.options.adaptiveHeight === !0 && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, i, n]), r.progressiveLazyLoad()
        }, o.onerror = function () {
            e < 3 ? setTimeout(function () {
                r.progressiveLazyLoad(e + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, n]), r.progressiveLazyLoad())
        }, o.src = n) : r.$slider.trigger("allImagesLoaded", [r])
    }, e.prototype.refresh = function (e) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {currentSlide: i}), o.init(), e || o.changeSlide({data: {message: "index", index: i}}, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, i, n, o = this, r = o.options.responsive || null;
        if ("array" === t.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (e in r) if (n = o.breakpoints.length - 1, i = r[e].breakpoint, r.hasOwnProperty(e)) {
                for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                o.breakpoints.push(i), o.breakpointSettings[i] = r[e].settings
            }
            o.breakpoints.sort(function (t, e) {
                return o.options.mobileFirst ? t - e : e - t
            })
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(),
            e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
        var n = this;
        return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, !(n.slideCount < 1 || t < 0 || t > n.slideCount - 1) && (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
    }, e.prototype.setCSS = function (t) {
        var e, i, n = this, o = {};
        n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
    }, e.prototype.setDimensions = function () {
        var t = this;
        t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({padding: "0px " + t.options.centerPadding}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({padding: t.options.centerPadding + " 0px"})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, i = this;
        i.$slides.each(function (n, o) {
            e = i.slideWidth * n * -1, i.options.rtl === !0 ? t(o).css({position: "relative", right: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0}) : t(o).css({position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0})
        }), i.$slides.eq(i.currentSlide).css({zIndex: i.options.zIndex - 1, opacity: 1})
    }, e.prototype.setHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, i, n, o, r, s = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], r = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")), "single" === r) s.options[n] = o; else if ("multiple" === r) t.each(n, function (t, e) {
            s.options[t] = e
        }); else if ("responsive" === r) for (i in o) if ("array" !== t.type(s.options.responsive)) s.options.responsive = [o[i]]; else {
            for (e = s.options.responsive.length - 1; e >= 0;) s.options.responsive[e].breakpoint === o[i].breakpoint && s.options.responsive.splice(e, 1), e--;
            s.options.responsive.push(o[i])
        }
        a && (s.unload(), s.reinit())
    }, e.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function () {
        var t = this, e = document.body.style;
        t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
    }, e.prototype.setSlideClasses = function (t) {
        var e, i, n, o, r = this;
        i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(t).addClass("slick-current"), r.options.centerMode === !0 ? (e = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = r.options.infinite === !0 ? r.options.slidesToShow + t : t, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, i, n, o = this;
        if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                t(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function (t) {
        var e = this;
        t || e.autoPlay(), e.interrupted = t
    }, e.prototype.selectHandler = function (e) {
        var i = this, n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"), o = parseInt(n.attr("data-slick-index"));
        return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
    }, e.prototype.slideHandler = function (t, e, i) {
        var n, o, r, s, a, l = null, u = this;
        if (e = e || !1, (u.animating !== !0 || u.options.waitForAnimate !== !0) && !(u.options.fade === !0 && u.currentSlide === t || u.slideCount <= u.options.slidesToShow)) return e === !1 && u.asNavFor(t), n = t, l = u.getLeft(n), s = u.getLeft(u.currentSlide), u.currentLeft = null === u.swipeLeft ? s : u.swipeLeft, u.options.infinite === !1 && u.options.centerMode === !1 && (t < 0 || t > u.getDotCount() * u.options.slidesToScroll) ? void (u.options.fade === !1 && (n = u.currentSlide, i !== !0 ? u.animateSlide(s, function () {
            u.postSlide(n)
        }) : u.postSlide(n))) : u.options.infinite === !1 && u.options.centerMode === !0 && (t < 0 || t > u.slideCount - u.options.slidesToScroll) ? void (u.options.fade === !1 && (n = u.currentSlide, i !== !0 ? u.animateSlide(s, function () {
            u.postSlide(n)
        }) : u.postSlide(n))) : (u.options.autoplay && clearInterval(u.autoPlayTimer), o = n < 0 ? u.slideCount % u.options.slidesToScroll !== 0 ? u.slideCount - u.slideCount % u.options.slidesToScroll : u.slideCount + n : n >= u.slideCount ? u.slideCount % u.options.slidesToScroll !== 0 ? 0 : n - u.slideCount : n, u.animating = !0, u.$slider.trigger("beforeChange", [u, u.currentSlide, o]), r = u.currentSlide, u.currentSlide = o, u.setSlideClasses(u.currentSlide), u.options.asNavFor && (a = u.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(u.currentSlide)), u.updateDots(), u.updateArrows(), u.options.fade === !0 ? (i !== !0 ? (u.fadeSlideOut(r), u.fadeSlide(o, function () {
            u.postSlide(o)
        })) : u.postSlide(o), void u.animateHeight()) : void (i !== !0 ? u.animateSlide(l, function () {
            u.postSlide(o)
        }) : u.postSlide(o)))
    }, e.prototype.startLoad = function () {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var t, e, i, n, o = this;
        return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : n <= 360 && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && n <= 225 ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (t) {
        var e, i, n = this;
        if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case"left":
                case"down":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, e.prototype.swipeHandler = function (t) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && t.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case"start":
                e.swipeStart(t);
                break;
            case"move":
                e.swipeMove(t);
                break;
            case"end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function (t) {
        var e, i, n, o, r, s = this;
        return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!s.dragging || r && 1 !== r.length) && (e = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), i = s.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(), o = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), n = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.options.infinite === !1 && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), s.options.vertical === !1 ? s.swipeLeft = e + n * o : s.swipeLeft = e + n * (s.$list.height() / s.listWidth) * o, s.options.verticalSwiping === !0 && (s.swipeLeft = e + n * o), s.options.fade !== !0 && s.options.touchMove !== !1 && (s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
    }, e.prototype.swipeStart = function (t) {
        var e, i = this;
        return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void (i.dragging = !0))
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var t, e = this;
        t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, e.prototype.visibility = function () {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }, t.fn.slick = function () {
        var t, i, n = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = n.length;
        for (t = 0; t < s; t++) if ("object" == typeof o || "undefined" == typeof o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, r), "undefined" != typeof i) return i;
        return n
    }
});