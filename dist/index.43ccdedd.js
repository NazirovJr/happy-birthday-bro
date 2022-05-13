/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/ (function(e1, t1) {
    var n1, r1, i1 = typeof t1, o1 = e1.location, a1 = e1.document, s1 = a1.documentElement, l1 = e1.jQuery, u1 = e1.$, c1 = {}, p1 = [], f1 = "1.10.2", d1 = p1.concat, h1 = p1.push, g1 = p1.slice, m1 = p1.indexOf, y1 = c1.toString, v1 = c1.hasOwnProperty, b1 = f1.trim, x1 = function(e, t) {
        return new x1.fn.init(e, t, r1);
    }, w1 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T1 = /\S+/g, C1 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N1 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k1 = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E1 = /^[\],:{}\s]*$/, S1 = /(?:^|:|,)(?:\s*\[)+/g, A1 = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j1 = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D1 = /^-ms-/, L1 = /-([\da-z])/gi, H1 = function(e, t) {
        return t.toUpperCase();
    }, q1 = function(e) {
        (a1.addEventListener || "load" === e.type || "complete" === a1.readyState) && (_1(), x1.ready());
    }, _1 = function() {
        a1.addEventListener ? (a1.removeEventListener("DOMContentLoaded", q1, !1), e1.removeEventListener("load", q1, !1)) : (a1.detachEvent("onreadystatechange", q1), e1.detachEvent("onload", q1));
    };
    x1.fn = x1.prototype = {
        jquery: f1,
        constructor: x1,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [
                    null,
                    e,
                    null
                ] : N1.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x1 ? n[0] : n, x1.merge(this, x1.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a1, !0)), k1.test(i[1]) && x1.isPlainObject(n)) for(i in n)x1.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this;
                }
                if (o = a1.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o;
                }
                return this.context = a1, this.selector = e, this;
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x1.isFunction(e) ? r.ready(e) : (e.selector !== t1 && (this.selector = e.selector, this.context = e.context), x1.makeArray(e, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g1.call(this);
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
        },
        pushStack: function(e) {
            var t = x1.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e, t) {
            return x1.each(this, e, t);
        },
        ready: function(e) {
            return x1.ready.promise().done(e), this;
        },
        slice: function() {
            return this.pushStack(g1.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [
                this[n]
            ] : []);
        },
        map: function(e) {
            return this.pushStack(x1.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: h1,
        sort: [].sort,
        splice: [].splice
    }, x1.fn.init.prototype = x1.fn, x1.extend = x1.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x1.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)if (null != (o = arguments[l])) for(i in o)e = s[i], r = o[i], s !== r && (c && r && (x1.isPlainObject(r) || (n = x1.isArray(r))) ? (n ? (n = !1, a = e && x1.isArray(e) ? e : []) : a = e && x1.isPlainObject(e) ? e : {}, s[i] = x1.extend(c, a, r)) : r !== t1 && (s[i] = r));
        return s;
    }, x1.extend({
        expando: "jQuery" + (f1 + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e1.$ === x1 && (e1.$ = u1), t && e1.jQuery === x1 && (e1.jQuery = l1), x1;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x1.readyWait++ : x1.ready(!0);
        },
        ready: function(e) {
            if (e === !0 ? !--x1.readyWait : !x1.isReady) {
                if (!a1.body) return setTimeout(x1.ready);
                x1.isReady = !0, e !== !0 && --x1.readyWait > 0 || (n1.resolveWith(a1, [
                    x1
                ]), x1.fn.trigger && x1(a1).trigger("ready").off("ready"));
            }
        },
        isFunction: function(e) {
            return "function" === x1.type(e);
        },
        isArray: Array.isArray || function(e) {
            return "array" === x1.type(e);
        },
        isWindow: function(e) {
            return null != e && e == e.window;
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c1[y1.call(e)] || "object" : typeof e;
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x1.type(e) || e.nodeType || x1.isWindow(e)) return !1;
            try {
                if (e.constructor && !v1.call(e, "constructor") && !v1.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (r) {
                return !1;
            }
            if (x1.support.ownLast) for(n in e)return v1.call(e, n);
            for(n in e);
            return n === t1 || v1.call(e, n);
        },
        isEmptyObject: function(e) {
            var t;
            for(t in e)return !1;
            return !0;
        },
        error: function(e) {
            throw Error(e);
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a1;
            var r = k1.exec(e), i = !n && [];
            return r ? [
                t.createElement(r[1])
            ] : (r = x1.buildFragment([
                e
            ], t, i), i && x1(i).remove(), x1.merge([], r.childNodes));
        },
        parseJSON: function(n) {
            return e1.JSON && e1.JSON.parse ? e1.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x1.trim(n), n && E1.test(n.replace(A1, "@").replace(j1, "]").replace(S1, ""))) ? Function("return " + n)() : (x1.error("Invalid JSON: " + n), t1);
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e1.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
            } catch (o) {
                r = t1;
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x1.error("Invalid XML: " + n), r;
        },
        noop: function() {},
        globalEval: function(t2) {
            t2 && x1.trim(t2) && (e1.execScript || function(t) {
                e1.eval.call(e1, t);
            })(t2);
        },
        camelCase: function(e) {
            return e.replace(D1, "ms-").replace(L1, H1);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, n) {
            var r, i = 0, o = e.length, a = M1(e);
            if (n) {
                if (a) {
                    for(; o > i; i++)if (r = t.apply(e[i], n), r === !1) break;
                } else for(i in e)if (r = t.apply(e[i], n), r === !1) break;
            } else if (a) {
                for(; o > i; i++)if (r = t.call(e[i], i, e[i]), r === !1) break;
            } else for(i in e)if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e;
        },
        trim: b1 && !b1.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : b1.call(e);
        } : function(e) {
            return null == e ? "" : (e + "").replace(C1, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M1(Object(e)) ? x1.merge(n, "string" == typeof e ? [
                e
            ] : e) : h1.call(n, e)), n;
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m1) return m1.call(t, e, n);
                for(r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in t && t[n] === e) return n;
            }
            return -1;
        },
        merge: function(e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) for(; r > o; o++)e[i++] = n[o];
            else while(n[o] !== t1)e[i++] = n[o++];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for(n = !!n; a > o; o++)r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i;
        },
        map: function(e, t, n) {
            var r, i = 0, o = e.length, a = M1(e), s = [];
            if (a) for(; o > i; i++)r = t(e[i], i, n), null != r && (s[s.length] = r);
            else for(i in e)r = t(e[i], i, n), null != r && (s[s.length] = r);
            return d1.apply([], s);
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x1.isFunction(e) ? (r = g1.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(g1.call(arguments)));
            }, i.guid = e.guid = e.guid || x1.guid++, i) : t1;
        },
        access: function(e2, n2, r, i, o, a, s) {
            var l = 0, u = e2.length, c = null == r;
            if ("object" === x1.type(r)) {
                o = !0;
                for(l in r)x1.access(e2, n2, l, r[l], !0, a, s);
            } else if (i !== t1 && (o = !0, x1.isFunction(i) || (s = !0), c && (s ? (n2.call(e2, i), n2 = null) : (c = n2, n2 = function(e, t, n) {
                return c.call(x1(e), n);
            })), n2)) for(; u > l; l++)n2(e2[l], r, s ? i : i.call(e2[l], l, n2(e2[l], r)));
            return o ? e2 : c ? n2.call(e2) : u ? n2(e2[0], r) : a;
        },
        now: function() {
            return (new Date).getTime();
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for(o in t)a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for(o in t)e.style[o] = a[o];
            return i;
        }
    }), x1.ready.promise = function(t) {
        if (!n1) {
            if (n1 = x1.Deferred(), "complete" === a1.readyState) setTimeout(x1.ready);
            else if (a1.addEventListener) a1.addEventListener("DOMContentLoaded", q1, !1), e1.addEventListener("load", q1, !1);
            else {
                a1.attachEvent("onreadystatechange", q1), e1.attachEvent("onload", q1);
                var r = !1;
                try {
                    r = null == e1.frameElement && a1.documentElement;
                } catch (i) {}
                r && r.doScroll && function o() {
                    if (!x1.isReady) {
                        try {
                            r.doScroll("left");
                        } catch (e) {
                            return setTimeout(o, 50);
                        }
                        _1(), x1.ready();
                    }
                }();
            }
        }
        return n1.promise(t);
    }, x1.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c1["[object " + t + "]"] = t.toLowerCase();
    });
    function M1(e) {
        var t = e.length, n = x1.type(e);
        return x1.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    r1 = x1(a1), function(e3, t3) {
        var n3, r2, i2, o2, a2, s2, l2, u2, c2, p2, f2, d2, h2, g2, m2, y2, v2, b2 = "sizzle" + -new Date, w2 = e3.document, T = 0, C2 = 0, N2 = st(), k2 = st(), E = st(), S = !1, A = function(e, t) {
            return e === t ? (S = !0, 0) : 0;
        }, j = typeof t3, D = -2147483648, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function(e) {
            var t = 0, n = this.length;
            for(; n > t; t++)if (this[t] === e) return t;
            return -1;
        }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
            ID: RegExp("^#(" + R + ")"),
            CLASS: RegExp("^\\.(" + R + ")"),
            TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + $),
            PSEUDO: RegExp("^" + I),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
            bool: RegExp("^(?:" + B + ")$", "i"),
            needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
        };
        try {
            M.apply(H = O.call(w2.childNodes), w2.childNodes), H[w2.childNodes.length].nodeType;
        } catch (ot) {
            M = {
                apply: H.length ? function(e, t) {
                    _.apply(e, O.call(t));
                } : function(e, t) {
                    var n = e.length, r = 0;
                    while(e[n++] = t[r++]);
                    e.length = n - 1;
                }
            };
        }
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w2) !== f2 && p2(t), t = t || f2, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (l = t.nodeType) && 9 !== l) return [];
            if (h2 && !i) {
                if (o = Z.exec(e)) {
                    if (s = o[1]) {
                        if (9 === l) {
                            if (a = t.getElementById(s), !a || !a.parentNode) return n;
                            if (a.id === s) return n.push(a), n;
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v2(t, a) && a.id === s) return n.push(a), n;
                    } else {
                        if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = o[3]) && r2.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n;
                    }
                }
                if (r2.qsa && (!g2 || !g2.test(e))) {
                    if (m = d = b2, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                        while(u--)c[u] = m + yt(c[u]);
                        y = V.test(e) && t.parentNode || t, x = c.join(",");
                    }
                    if (x) try {
                        return M.apply(n, y.querySelectorAll(x)), n;
                    } catch (T) {} finally{
                        d || t.removeAttribute("id");
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i);
        }
        function st() {
            var e = [];
            function t(n, r) {
                return e.push(n += " ") > o2.cacheLength && delete t[e.shift()], t[n] = r;
            }
            return t;
        }
        function lt(e) {
            return e[b2] = !0, e;
        }
        function ut(e) {
            var t = f2.createElement("div");
            try {
                return !!e(t);
            } catch (n) {
                return !1;
            } finally{
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function ct(e, t) {
            var n = e.split("|"), r = e.length;
            while(r--)o2.attrHandle[n[r]] = t;
        }
        function pt(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) return r;
            if (n) {
                while(n = n.nextSibling)if (n === t) return -1;
            }
            return e ? 1 : -1;
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function dt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function ht(e) {
            return lt(function(t) {
                return t = +t, lt(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while(a--)n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        s2 = at.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
        }, r2 = at.support = {}, p2 = at.setDocument = function(e4) {
            var n4 = e4 ? e4.ownerDocument || e4 : w2, i3 = n4.defaultView;
            return n4 !== f2 && 9 === n4.nodeType && n4.documentElement ? (f2 = n4, d2 = n4.documentElement, h2 = !s2(n4), i3 && i3.attachEvent && i3 !== i3.top && i3.attachEvent("onbeforeunload", function() {
                p2();
            }), r2.attributes = ut(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), r2.getElementsByTagName = ut(function(e) {
                return e.appendChild(n4.createComment("")), !e.getElementsByTagName("*").length;
            }), r2.getElementsByClassName = ut(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
            }), r2.getById = ut(function(e) {
                return d2.appendChild(e).id = b2, !n4.getElementsByName || !n4.getElementsByName(b2).length;
            }), r2.getById ? (o2.find.ID = function(e, t) {
                if (typeof t.getElementById !== j && h2) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [
                        n
                    ] : [];
                }
            }, o2.filter.ID = function(e5) {
                var t = e5.replace(rt, it);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (delete o2.find.ID, o2.filter.ID = function(e6) {
                var t = e6.replace(rt, it);
                return function(e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), o2.find.TAG = r2.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t3;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while(n = o[i++])1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, o2.find.CLASS = r2.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== j && h2 ? n.getElementsByClassName(e) : t3;
            }, m2 = [], g2 = [], (r2.qsa = K.test(n4.querySelectorAll)) && (ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g2.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g2.push(":checked");
            }), ut(function(e) {
                var t = n4.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g2.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g2.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g2.push(",.*:");
            })), (r2.matchesSelector = K.test(y2 = d2.webkitMatchesSelector || d2.mozMatchesSelector || d2.oMatchesSelector || d2.msMatchesSelector)) && ut(function(e) {
                r2.disconnectedMatch = y2.call(e, "div"), y2.call(e, "[s!='']:x"), m2.push("!=", I);
            }), g2 = g2.length && RegExp(g2.join("|")), m2 = m2.length && RegExp(m2.join("|")), v2 = K.test(d2.contains) || d2.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) {
                    while(t = t.parentNode)if (t === e) return !0;
                }
                return !1;
            }, A = d2.compareDocumentPosition ? function(e, t) {
                if (e === t) return S = !0, 0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r2.sortDetached && t.compareDocumentPosition(e) === i ? e === n4 || v2(w2, e) ? -1 : t === n4 || v2(w2, t) ? 1 : c2 ? F.call(c2, e) - F.call(c2, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
            } : function(e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [
                    e
                ], l = [
                    t
                ];
                if (e === t) return S = !0, 0;
                if (!o || !a) return e === n4 ? -1 : t === n4 ? 1 : o ? -1 : a ? 1 : c2 ? F.call(c2, e) - F.call(c2, t) : 0;
                if (o === a) return pt(e, t);
                r = e;
                while(r = r.parentNode)s.unshift(r);
                r = t;
                while(r = r.parentNode)l.unshift(r);
                while(s[i] === l[i])i++;
                return i ? pt(s[i], l[i]) : s[i] === w2 ? -1 : l[i] === w2 ? 1 : 0;
            }, n4) : f2;
        }, at.matches = function(e, t) {
            return at(e, null, null, t);
        }, at.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== f2 && p2(e), t = t.replace(Y, "='$1']"), !(!r2.matchesSelector || !h2 || m2 && m2.test(t) || g2 && g2.test(t))) try {
                var n = y2.call(e, t);
                if (n || r2.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (i) {}
            return at(t, f2, null, [
                e
            ]).length > 0;
        }, at.contains = function(e, t) {
            return (e.ownerDocument || e) !== f2 && p2(e), v2(e, t);
        }, at.attr = function(e, n) {
            (e.ownerDocument || e) !== f2 && p2(e);
            var i = o2.attrHandle[n.toLowerCase()], a = i && L.call(o2.attrHandle, n.toLowerCase()) ? i(e, n, !h2) : t3;
            return a === t3 ? r2.attributes || !h2 ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a;
        }, at.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e);
        }, at.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r2.detectDuplicates, c2 = !r2.sortStable && e.slice(0), e.sort(A), S) {
                while(t = e[o++])t === e[o] && (i = n.push(o));
                while(i--)e.splice(n[i], 1);
            }
            return e;
        }, a2 = at.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for(e = e.firstChild; e; e = e.nextSibling)n += a2(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for(; t = e[r]; r++)n += a2(t);
            return n;
        }, o2 = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e;
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t3 ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e7) {
                    var t = e7.replace(rt, it).toLowerCase();
                    return "*" === e7 ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e8) {
                    var t = N2[e8 + " "];
                    return t || (t = RegExp("(^|" + P + ")" + e8 + "(" + P + "|$)")) && N2(e8, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
                    };
                },
                CHILD: function(e9, t4, n, r, i) {
                    var o = "nth" !== e9.slice(0, 3), a = "last" !== e9.slice(-4), s = "of-type" === t4;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, l) {
                        var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                        if (m) {
                            if (o) {
                                while(g){
                                    p = t;
                                    while(p = p[g])if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e9 && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [
                                a ? m.firstChild : m.lastChild
                            ], a && v) {
                                c = m[b2] || (m[b2] = {}), u = c[e9] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                while(p = ++d && p && p[g] || (f = d = 0) || h.pop())if (1 === p.nodeType && ++f && p === t) {
                                    c[e9] = [
                                        T,
                                        d,
                                        f
                                    ];
                                    break;
                                }
                            } else if (v && (u = (t[b2] || (t[b2] = {}))[e9]) && u[0] === T) f = u[1];
                            else while(p = ++d && p && p[g] || (f = d = 0) || h.pop())if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b2] || (p[b2] = {}))[e9] = [
                                T,
                                f
                            ]), p === t)) break;
                            return f -= i, f === r || 0 === f % r && f / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e10, t) {
                    var n5, r = o2.pseudos[e10] || o2.setFilters[e10.toLowerCase()] || at.error("unsupported pseudo: " + e10);
                    return r[b2] ? r(t) : r.length > 1 ? (n5 = [
                        e10,
                        e10,
                        "",
                        t
                    ], o2.setFilters.hasOwnProperty(e10.toLowerCase()) ? lt(function(e, n) {
                        var i, o = r(e, t), a = o.length;
                        while(a--)i = F.call(e, o[a]), e[i] = !(n[i] = o[a]);
                    }) : function(e) {
                        return r(e, 0, n5);
                    }) : r;
                }
            },
            pseudos: {
                not: lt(function(e11) {
                    var t5 = [], n = [], r = l2(e11.replace(z, "$1"));
                    return r[b2] ? lt(function(e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while(s--)(o = a[s]) && (e[s] = !(t[s] = o));
                    }) : function(e, i, o) {
                        return t5[0] = e, r(t5, null, o, n), !n.pop();
                    };
                }),
                has: lt(function(e) {
                    return function(t) {
                        return at(e, t).length > 0;
                    };
                }),
                contains: lt(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || a2(t)).indexOf(e) > -1;
                    };
                }),
                lang: lt(function(e) {
                    return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function(t) {
                        var n;
                        do if (n = h2 ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType)
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e3.location && e3.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === d2;
                },
                focus: function(e) {
                    return e === f2.activeElement && (!f2.hasFocus || f2.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return e.disabled === !1;
                },
                disabled: function(e) {
                    return e.disabled === !0;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty: function(e) {
                    for(e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !o2.pseudos.empty(e);
                },
                header: function(e) {
                    return tt.test(e.nodeName);
                },
                input: function(e) {
                    return et.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
                },
                first: ht(function() {
                    return [
                        0
                    ];
                }),
                last: ht(function(e, t) {
                    return [
                        t - 1
                    ];
                }),
                eq: ht(function(e, t, n) {
                    return [
                        0 > n ? n + t : n
                    ];
                }),
                even: ht(function(e, t) {
                    var n = 0;
                    for(; t > n; n += 2)e.push(n);
                    return e;
                }),
                odd: ht(function(e, t) {
                    var n = 1;
                    for(; t > n; n += 2)e.push(n);
                    return e;
                }),
                lt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for(; --r >= 0;)e.push(r);
                    return e;
                }),
                gt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for(; t > ++r;)e.push(r);
                    return e;
                })
            }
        }, o2.pseudos.nth = o2.pseudos.eq;
        for(n3 in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })o2.pseudos[n3] = ft(n3);
        for(n3 in {
            submit: !0,
            reset: !0
        })o2.pseudos[n3] = dt(n3);
        function gt() {}
        gt.prototype = o2.filters = o2.pseudos, o2.setFilters = new gt;
        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k2[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, l = [], u = o2.preFilter;
            while(s){
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }), s = s.slice(n.length));
                for(a in o2.filter)!(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break;
            }
            return t ? s.length : s ? at.error(e) : k2(e, l).slice(0);
        }
        function yt(e) {
            var t = 0, n = e.length, r = "";
            for(; n > t; t++)r += e[t].value;
            return r;
        }
        function vt(e, t6, n6) {
            var r = t6.dir, o = n6 && "parentNode" === r, a = C2++;
            return t6.first ? function(t, n, i) {
                while(t = t[r])if (1 === t.nodeType || o) return e(t, n, i);
            } : function(t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while(t = t[r])if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
                } else while(t = t[r])if (1 === t.nodeType || o) {
                    if (c = t[b2] || (t[b2] = {}), (u = c[r]) && u[0] === p) {
                        if ((l = u[1]) === !0 || l === i2) return l === !0;
                    } else if (u = c[r] = [
                        p
                    ], u[1] = e(t, n, s) || i2, u[1] === !0) return !0;
                }
            };
        }
        function bt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while(i--)if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function xt(e, t, n, r, i) {
            var o, a = [], s = 0, l = e.length, u = null != t;
            for(; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a;
        }
        function wt(e, t, n, r, i, o3) {
            return r && !r[b2] && (r = wt(r)), i && !i[b2] && (i = wt(i, o3)), lt(function(o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [
                    s
                ] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l), r) {
                    u = xt(y, d), r(u, [], s, l), c = u.length;
                    while(c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p));
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [], c = y.length;
                            while(c--)(p = y[c]) && u.push(m[c] = p);
                            i(null, y = [], u, l);
                        }
                        c = y.length;
                        while(c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p));
                    }
                } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y);
            });
        }
        function Tt(e12) {
            var t, n7, r3, i = e12.length, a = o2.relative[e12[0].type], s = a || o2.relative[" "], l = a ? 1 : 0, c = vt(function(e) {
                return e === t;
            }, s, !0), p = vt(function(e) {
                return F.call(t, e) > -1;
            }, s, !0), f = [
                function(e, n, r) {
                    return !a && (r || n !== u2) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
                }
            ];
            for(; i > l; l++)if (n7 = o2.relative[e12[l].type]) f = [
                vt(bt(f), n7)
            ];
            else {
                if (n7 = o2.filter[e12[l].type].apply(null, e12[l].matches), n7[b2]) {
                    for(r3 = ++l; i > r3; r3++)if (o2.relative[e12[r3].type]) break;
                    return wt(l > 1 && bt(f), l > 1 && yt(e12.slice(0, l - 1).concat({
                        value: " " === e12[l - 2].type ? "*" : ""
                    })).replace(z, "$1"), n7, r3 > l && Tt(e12.slice(l, r3)), i > r3 && Tt(e12 = e12.slice(r3)), i > r3 && yt(e12));
                }
                f.push(n7);
            }
            return bt(f);
        }
        function Ct(e, t) {
            var n = 0, r = t.length > 0, a = e.length > 0, s3 = function(s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u2, N = s || a && o2.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
                for(w && (u2 = l !== f2 && l, i2 = n); null != (h = N[b]); b++){
                    if (a && h) {
                        g = 0;
                        while(m = e[g++])if (m(h, l, c)) {
                            p.push(h);
                            break;
                        }
                        w && (T = k, i2 = ++n);
                    }
                    r && ((h = !m && h) && v--, s && x.push(h));
                }
                if (v += b, r && b !== v) {
                    g = 0;
                    while(m = t[g++])m(x, y, l, c);
                    if (s) {
                        if (v > 0) while(b--)x[b] || y[b] || (y[b] = q.call(p));
                        y = xt(y);
                    }
                    M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p);
                }
                return w && (T = k, u2 = C), x;
            };
            return r ? lt(s3) : s3;
        }
        l2 = at.compile = function(e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                t || (t = mt(e)), n = t.length;
                while(n--)o = Tt(t[n]), o[b2] ? r.push(o) : i.push(o);
                o = E(e, Ct(i, r));
            }
            return o;
        };
        function Nt(e, t, n) {
            var r = 0, i = t.length;
            for(; i > r; r++)at(e, t[r], n);
            return n;
        }
        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r2.getById && 9 === t.nodeType && h2 && o2.relative[s[1].type]) {
                    if (t = (o2.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
                    e = e.slice(s.shift().value.length);
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while(a--){
                    if (u = s[a], o2.relative[c = u.type]) break;
                    if ((p = o2.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
                        break;
                    }
                }
            }
            return l2(e, f)(i, t, !h2, n, V.test(e)), n;
        }
        r2.sortStable = b2.split("").sort(A).join("") === b2, r2.detectDuplicates = S, p2(), r2.sortDetached = ut(function(e) {
            return 1 & e.compareDocumentPosition(f2.createElement("div"));
        }), ut(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || ct("type|href|height|width", function(e, n, r) {
            return r ? t3 : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2);
        }), r2.attributes && ut(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || ct("value", function(e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t3 : e.defaultValue;
        }), ut(function(e) {
            return null == e.getAttribute("disabled");
        }) || ct(B, function(e, n, r) {
            var i;
            return r ? t3 : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null;
        }), x1.find = at, x1.expr = at.selectors, x1.expr[":"] = x1.expr.pseudos, x1.unique = at.uniqueSort, x1.text = at.getText, x1.isXMLDoc = at.isXML, x1.contains = at.contains;
    }(e1);
    var O1 = {};
    function F1(e) {
        var t = O1[e] = {};
        return x1.each(e.match(T1) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    x1.Callbacks = function(e13) {
        e13 = "string" == typeof e13 ? O1[e13] || F1(e13) : x1.extend({}, e13);
        var n8, r4, i4, o, a, s, l = [], u = !e13.once && [], c = function(t) {
            for(r4 = e13.memory && t, i4 = !0, a = s || 0, s = 0, o = l.length, n8 = !0; l && o > a; a++)if (l[a].apply(t[0], t[1]) === !1 && e13.stopOnFalse) {
                r4 = !1;
                break;
            }
            n8 = !1, l && (u ? u.length && c(u.shift()) : r4 ? l = [] : p.disable());
        }, p = {
            add: function() {
                if (l) {
                    var t7 = l.length;
                    (function i(t) {
                        x1.each(t, function(t, n) {
                            var r = x1.type(n);
                            "function" === r ? e13.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n);
                        });
                    })(arguments), n8 ? o = l.length : r4 && (s = t7, c(r4));
                }
                return this;
            },
            remove: function() {
                return l && x1.each(arguments, function(e, t) {
                    var r;
                    while((r = x1.inArray(t, l, r)) > -1)l.splice(r, 1), n8 && (o >= r && o--, a >= r && a--);
                }), this;
            },
            has: function(e) {
                return e ? x1.inArray(e, l) > -1 : !(!l || !l.length);
            },
            empty: function() {
                return l = [], o = 0, this;
            },
            disable: function() {
                return l = u = r4 = t1, this;
            },
            disabled: function() {
                return !l;
            },
            lock: function() {
                return u = t1, r4 || p.disable(), this;
            },
            locked: function() {
                return !u;
            },
            fireWith: function(e, t) {
                return !l || i4 && !u || (t = t || [], t = [
                    e,
                    t.slice ? t.slice() : t
                ], n8 ? u.push(t) : c(t)), this;
            },
            fire: function() {
                return p.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i4;
            }
        };
        return p;
    }, x1.extend({
        Deferred: function(e14) {
            var t9 = [
                [
                    "resolve",
                    "done",
                    x1.Callbacks("once memory"),
                    "resolved"
                ],
                [
                    "reject",
                    "fail",
                    x1.Callbacks("once memory"),
                    "rejected"
                ],
                [
                    "notify",
                    "progress",
                    x1.Callbacks("memory")
                ]
            ], n9 = "pending", r = {
                state: function() {
                    return n9;
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e15 = arguments;
                    return x1.Deferred(function(n) {
                        x1.each(t9, function(t, o) {
                            var a = o[0], s = x1.isFunction(e15[t]) && e15[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && x1.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [
                                    e
                                ] : arguments);
                            });
                        }), e15 = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? x1.extend(e, r) : r;
                }
            }, i = {};
            return r.pipe = r.then, x1.each(t9, function(e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n9 = s;
                }, t9[1 ^ e][2].disable, t9[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this;
                }, i[o[0] + "With"] = a.fireWith;
            }), r.promise(i), e14 && e14.call(i, i), i;
        },
        when: function(e16) {
            var t10 = 0, n10 = g1.call(arguments), r5 = n10.length, i = 1 !== r5 || e16 && x1.isFunction(e16.promise) ? r5 : 0, o = 1 === i ? e16 : x1.Deferred(), a = function(e, t, n) {
                return function(r) {
                    t[e] = this, n[e] = arguments.length > 1 ? g1.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
                };
            }, s, l, u;
            if (r5 > 1) for(s = Array(r5), l = Array(r5), u = Array(r5); r5 > t10; t10++)n10[t10] && x1.isFunction(n10[t10].promise) ? n10[t10].promise().done(a(t10, u, n10)).fail(o.reject).progress(a(t10, l, s)) : --i;
            return i || o.resolveWith(u, n10), o.promise();
        }
    }), x1.support = function(t) {
        var n11, r6, o4, s4, l3, u, c, p, f, d = a1.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n11 = d.getElementsByTagName("*") || [], r6 = d.getElementsByTagName("a")[0], !r6 || !r6.style || !n11.length) return t;
        s4 = a1.createElement("select"), u = s4.appendChild(a1.createElement("option")), o4 = d.getElementsByTagName("input")[0], r6.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r6.getAttribute("style")), t.hrefNormalized = "/a" === r6.getAttribute("href"), t.opacity = /^0.5/.test(r6.style.opacity), t.cssFloat = !!r6.style.cssFloat, t.checkOn = !!o4.value, t.optSelected = u.selected, t.enctype = !!a1.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a1.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o4.checked = !0, t.noCloneChecked = o4.cloneNode(!0).checked, s4.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test;
        } catch (h) {
            t.deleteExpando = !1;
        }
        o4 = a1.createElement("input"), o4.setAttribute("value", ""), t.input = "" === o4.getAttribute("value"), o4.value = "t", o4.setAttribute("type", "radio"), t.radioValue = "t" === o4.value, o4.setAttribute("checked", "t"), o4.setAttribute("name", "t"), l3 = a1.createDocumentFragment(), l3.appendChild(o4), t.appendChecked = o4.checked, t.checkClone = l3.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1;
        }), d.cloneNode(!0).click());
        for(f in {
            submit: !0,
            change: !0,
            focusin: !0
        })d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e1 || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for(f in x1(t))break;
        return t.ownLast = "0" !== f, x1(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a1.getElementsByTagName("body")[0];
            l && (n = a1.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x1.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth;
            }), e1.getComputedStyle && (t.pixelPosition = "1%" !== (e1.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e1.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(a1.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e1.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i1 && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null);
        }), n11 = s4 = l3 = u = r6 = o4 = null, t;
    }({});
    var B1 = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P1 = /([A-Z])/g;
    function R1(e, n, r, i) {
        if (x1.acceptData(e)) {
            var o, a, s = x1.expando, l = e.nodeType, u = l ? x1.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t1 || "string" != typeof n) return c || (c = l ? e[s] = p1.pop() || x1.guid++ : s), u[c] || (u[c] = l ? {} : {
                toJSON: x1.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x1.extend(u[c], n) : u[c].data = x1.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t1 && (a[x1.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x1.camelCase(n)])) : o = a, o;
        }
    }
    function W1(e, t, n) {
        if (x1.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x1.cache : e, s = o ? e[x1.expando] : x1.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x1.isArray(t) ? t = t.concat(x1.map(t, x1.camelCase)) : t in r ? t = [
                        t
                    ] : (t = x1.camelCase(t), t = t in r ? [
                        t
                    ] : t.split(" ")), i = t.length;
                    while(i--)delete r[t[i]];
                    if (n ? !I1(r) : !x1.isEmptyObject(r)) return;
                }
                (n || (delete a[s].data, I1(a[s]))) && (o ? x1.cleanData([
                    e
                ], !0) : x1.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null);
            }
        }
    }
    x1.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x1.cache[e[x1.expando]] : e[x1.expando], !!e && !I1(e);
        },
        data: function(e, t, n) {
            return R1(e, t, n);
        },
        removeData: function(e, t) {
            return W1(e, t);
        },
        _data: function(e, t, n) {
            return R1(e, t, n, !0);
        },
        _removeData: function(e, t) {
            return W1(e, t, !0);
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && x1.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t;
        }
    }), x1.fn.extend({
        data: function(e, n) {
            var r, i, o = null, a = 0, s = this[0];
            if (e === t1) {
                if (this.length && (o = x1.data(s), 1 === s.nodeType && !x1._data(s, "parsedAttrs"))) {
                    for(r = s.attributes; r.length > a; a++)i = r[a].name, 0 === i.indexOf("data-") && (i = x1.camelCase(i.slice(5)), $1(s, i, o[i]));
                    x1._data(s, "parsedAttrs", !0);
                }
                return o;
            }
            return "object" == typeof e ? this.each(function() {
                x1.data(this, e);
            }) : arguments.length > 1 ? this.each(function() {
                x1.data(this, e, n);
            }) : s ? $1(s, e, x1.data(s, e)) : null;
        },
        removeData: function(e) {
            return this.each(function() {
                x1.removeData(this, e);
            });
        }
    });
    function $1(e, n, r) {
        if (r === t1 && 1 === e.nodeType) {
            var i = "data-" + n.replace(P1, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B1.test(r) ? x1.parseJSON(r) : r;
                } catch (o) {}
                x1.data(e, n, r);
            } else r = t1;
        }
        return r;
    }
    function I1(e) {
        var t;
        for(t in e)if (("data" !== t || !x1.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    x1.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x1._data(e, n), r && (!i || x1.isArray(r) ? i = x1._data(e, n, x1.makeArray(r)) : i.push(r)), i || []) : t1;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x1.queue(e, t), r = n.length, i = n.shift(), o = x1._queueHooks(e, t), a = function() {
                x1.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x1._data(e, n) || x1._data(e, n, {
                empty: x1.Callbacks("once memory").add(function() {
                    x1._removeData(e, t + "queue"), x1._removeData(e, n);
                })
            });
        }
    }), x1.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x1.queue(this[0], e) : n === t1 ? this : this.each(function() {
                var t = x1.queue(this, e, n);
                x1._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x1.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                x1.dequeue(this, e);
            });
        },
        delay: function(e, t11) {
            return e = x1.fx ? x1.fx.speeds[e] || e : e, t11 = t11 || "fx", this.queue(t11, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, n) {
            var r, i = 1, o = x1.Deferred(), a = this, s = this.length, l = function() {
                --i || o.resolveWith(a, [
                    a
                ]);
            };
            "string" != typeof e && (n = e, e = t1), e = e || "fx";
            while(s--)r = x1._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n);
        }
    });
    var z1, X1, U1 = /[\t\r\n\f]/g, V1 = /\r/g, Y1 = /^(?:input|select|textarea|button|object)$/i, J1 = /^(?:a|area)$/i, G1 = /^(?:checked|selected)$/i, Q1 = x1.support.getSetAttribute, K1 = x1.support.input;
    x1.fn.extend({
        attr: function(e, t) {
            return x1.access(this, x1.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                x1.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return x1.access(this, x1.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return e = x1.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t1, delete this[e];
                } catch (n) {}
            });
        },
        addClass: function(e) {
            var t12, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
            if (x1.isFunction(e)) return this.each(function(t) {
                x1(this).addClass(e.call(this, t, this.className));
            });
            if (l) {
                for(t12 = (e || "").match(T1) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U1, " ") : " ")) {
                    o = 0;
                    while(i = t12[o++])0 > r.indexOf(" " + i + " ") && (r += i + " ");
                    n.className = x1.trim(r);
                }
            }
            return this;
        },
        removeClass: function(e) {
            var t13, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (x1.isFunction(e)) return this.each(function(t) {
                x1(this).removeClass(e.call(this, t, this.className));
            });
            if (l) {
                for(t13 = (e || "").match(T1) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U1, " ") : "")) {
                    o = 0;
                    while(i = t13[o++])while(r.indexOf(" " + i + " ") >= 0)r = r.replace(" " + i + " ", " ");
                    n.className = e ? x1.trim(r) : "";
                }
            }
            return this;
        },
        toggleClass: function(e, t14) {
            var n12 = typeof e;
            return "boolean" == typeof t14 && "string" === n12 ? t14 ? this.addClass(e) : this.removeClass(e) : x1.isFunction(e) ? this.each(function(n) {
                x1(this).toggleClass(e.call(this, n, this.className, t14), t14);
            }) : this.each(function() {
                if ("string" === n12) {
                    var t, r = 0, o = x1(this), a = e.match(T1) || [];
                    while(t = a[r++])o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                } else (n12 === i1 || "boolean" === n12) && (this.className && x1._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x1._data(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for(; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U1, " ").indexOf(t) >= 0) return !0;
            return !1;
        },
        val: function(e17) {
            var n13, r, i, o5 = this[0];
            if (arguments.length) return i = x1.isFunction(e17), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e17.call(this, n, x1(this).val()) : e17, null == o ? o = "" : "number" == typeof o ? o += "" : x1.isArray(o) && (o = x1.map(o, function(e) {
                    return null == e ? "" : e + "";
                })), r = x1.valHooks[this.type] || x1.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t1 || (this.value = o));
            });
            if (o5) return r = x1.valHooks[o5.type] || x1.valHooks[o5.nodeName.toLowerCase()], r && "get" in r && (n13 = r.get(o5, "value")) !== t1 ? n13 : (n13 = o5.value, "string" == typeof n13 ? n13.replace(V1, "") : null == n13 ? "" : n13);
        }
    }), x1.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x1.find.attr(e, "value");
                    return null != t ? t : e.text;
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
                    for(; s > l; l++)if (n = r[l], !(!n.selected && l !== i || (x1.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x1.nodeName(n.parentNode, "optgroup"))) {
                        if (t = x1(n).val(), o) return t;
                        a.push(t);
                    }
                    return a;
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = x1.makeArray(t), a = i.length;
                    while(a--)r = i[a], (r.selected = x1.inArray(x1(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i1 ? x1.prop(e, n, r) : (1 === s && x1.isXMLDoc(e) || (n = n.toLowerCase(), o = x1.attrHooks[n] || (x1.expr.match.bool.test(n) ? X1 : z1)), r === t1 ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x1.find.attr(e, n), null == a ? t1 : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t1 ? a : (e.setAttribute(n, r + ""), r) : (x1.removeAttr(e, n), t1));
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(T1);
            if (o && 1 === e.nodeType) while(n = o[i++])r = x1.propFix[n] || n, x1.expr.match.bool.test(n) ? K1 && Q1 || !G1.test(n) ? e[r] = !1 : e[x1.camelCase("default-" + n)] = e[r] = !1 : x1.attr(e, n, ""), e.removeAttribute(Q1 ? n : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x1.support.radioValue && "radio" === t && x1.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x1.isXMLDoc(e), a && (n = x1.propFix[n] || n, o = x1.propHooks[n]), r !== t1 ? o && "set" in o && (i = o.set(e, r, n)) !== t1 ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x1.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y1.test(e.nodeName) || J1.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        }
    }), X1 = {
        set: function(e, t, n) {
            return t === !1 ? x1.removeAttr(e, n) : K1 && Q1 || !G1.test(n) ? e.setAttribute(!Q1 && x1.propFix[n] || n, n) : e[x1.camelCase("default-" + n)] = e[n] = !0, n;
        }
    }, x1.each(x1.expr.match.bool.source.match(/\w+/g), function(e18, n14) {
        var r7 = x1.expr.attrHandle[n14] || x1.find.attr;
        x1.expr.attrHandle[n14] = K1 && Q1 || !G1.test(n14) ? function(e, n, i) {
            var o = x1.expr.attrHandle[n], a = i ? t1 : (x1.expr.attrHandle[n] = t1) != r7(e, n, i) ? n.toLowerCase() : null;
            return x1.expr.attrHandle[n] = o, a;
        } : function(e, n, r) {
            return r ? t1 : e[x1.camelCase("default-" + n)] ? n.toLowerCase() : null;
        };
    }), K1 && Q1 || (x1.attrHooks.value = {
        set: function(e, n, r) {
            return x1.nodeName(e, "input") ? (e.defaultValue = n, t1) : z1 && z1.set(e, n, r);
        }
    }), Q1 || (z1 = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t1;
        }
    }, x1.expr.attrHandle.id = x1.expr.attrHandle.name = x1.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t1 : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null;
    }, x1.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t1;
        },
        set: z1.set
    }, x1.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z1.set(e, "" === t ? !1 : t, n);
        }
    }, x1.each([
        "width",
        "height"
    ], function(e19, n) {
        x1.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t1;
            }
        };
    })), x1.support.hrefNormalized || x1.each([
        "href",
        "src"
    ], function(e20, t) {
        x1.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4);
            }
        };
    }), x1.support.style || (x1.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t1;
        },
        set: function(e, t) {
            return e.style.cssText = t + "";
        }
    }), x1.support.optSelected || (x1.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    }), x1.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        x1.propFix[this.toLowerCase()] = this;
    }), x1.support.enctype || (x1.propFix.enctype = "encoding"), x1.each([
        "radio",
        "checkbox"
    ], function() {
        x1.valHooks[this] = {
            set: function(e, n) {
                return x1.isArray(n) ? e.checked = x1.inArray(x1(e).val(), n) >= 0 : t1;
            }
        }, x1.support.checkOn || (x1.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var Z1 = /^(?:input|select|textarea)$/i, et1 = /^key/, tt1 = /^(?:mouse|contextmenu)|click/, nt1 = /^(?:focusinfocus|focusoutblur)$/, rt1 = /^([^.]*)(?:\.(.+)|)$/;
    function it1() {
        return !0;
    }
    function ot() {
        return !1;
    }
    function at1() {
        try {
            return a1.activeElement;
        } catch (e) {}
    }
    x1.event = {
        global: {},
        add: function(e21, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x1._data(e21);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x1.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x1 === i1 || e && x1.event.triggered === e.type ? t1 : x1.event.dispatch.apply(f.elem, arguments);
                }, f.elem = e21), n = (n || "").match(T1) || [
                    ""
                ], u = n.length;
                while(u--)s = rt1.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x1.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x1.event.special[g] || {}, d = x1.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && x1.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e21, o, m, f) !== !1 || (e21.addEventListener ? e21.addEventListener(g, f, !1) : e21.attachEvent && e21.attachEvent("on" + g, f))), p.add && (p.add.call(e21, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x1.event.global[g] = !0);
                e21 = null;
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x1.hasData(e) && x1._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T1) || [
                    ""
                ], u = t.length;
                while(u--)if (s = rt1.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    p = x1.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                    while(o--)a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                    l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x1.removeEvent(e, d, m.handle), delete c[d]);
                } else for(d in c)x1.event.remove(e, d + t[u], n, r, !0);
                x1.isEmptyObject(c) && (delete m.handle, x1._removeData(e, "events"));
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [
                i || a1
            ], g = v1.call(n, "type") ? n.type : n, m = v1.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a1, 3 !== i.nodeType && 8 !== i.nodeType && !nt1.test(g + x1.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x1.expando] ? n : new x1.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t1, n.target || (n.target = i), r = null == r ? [
                n
            ] : x1.makeArray(r, [
                n
            ]), p = x1.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x1.isWindow(i)) {
                    for(c = p.delegateType || g, nt1.test(c + g) || (u = u.parentNode); u; u = u.parentNode)h.push(u), f = u;
                    f === (i.ownerDocument || a1) && h.push(f.defaultView || f.parentWindow || e1);
                }
                d = 0;
                while((u = h[d++]) && !n.isPropagationStopped())n.type = d > 1 ? c : p.bindType || g, s = (x1._data(u, "events") || {})[n.type] && x1._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x1.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x1.acceptData(i) && l && i[g] && !x1.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x1.event.triggered = g;
                    try {
                        i[g]();
                    } catch (y) {}
                    x1.event.triggered = t1, f && (i[l] = f);
                }
                return n.result;
            }
        },
        dispatch: function(e) {
            e = x1.event.fix(e);
            var n, r, i, o, a, s = [], l = g1.call(arguments), u = (x1._data(this, "events") || {})[e.type] || [], c = x1.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x1.event.handlers.call(this, e, u), n = 0;
                while((o = s[n++]) && !e.isPropagationStopped()){
                    e.currentTarget = o.elem, a = 0;
                    while((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x1.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t1 && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type)) {
                for(; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                    for(o = [], a = 0; l > a; a++)i = n[a], r = i.selector + " ", o[r] === t1 && (o[r] = i.needsContext ? x1(r, this).index(u) >= 0 : x1.find(r, this, null, [
                        u
                    ]).length), o[r] && o.push(i);
                    o.length && s.push({
                        elem: u,
                        handlers: o
                    });
                }
            }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s;
        },
        fix: function(e) {
            if (e[x1.expando]) return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt1.test(i) ? this.mouseHooks : et1.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x1.Event(o), t = r.length;
            while(t--)n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || a1), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button, l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a1, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t1 || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== at1() && this.focus) try {
                        return this.focus(), !1;
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at1() && this.blur ? (this.blur(), !1) : t1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x1.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t1;
                },
                _default: function(e) {
                    return x1.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t1 && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x1.extend(new x1.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x1.event.trigger(i, null, t) : x1.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, x1.removeEvent = a1.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i1 && (e[r] = null), e.detachEvent(r, n));
    }, x1.Event = function(e, n) {
        return this instanceof x1.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it1 : ot) : this.type = e, n && x1.extend(this, n), this.timeStamp = e && e.timeStamp || x1.now(), this[x1.expando] = !0, t1) : new x1.Event(e, n);
    }, x1.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it1, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it1, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it1, this.stopPropagation();
        }
    }, x1.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e22, t) {
        x1.event.special[e22] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !x1.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
            }
        };
    }), x1.support.submitBubbles || (x1.event.special.submit = {
        setup: function() {
            return x1.nodeName(this, "form") ? !1 : (x1.event.add(this, "click._submit keypress._submit", function(e23) {
                var n = e23.target, r = x1.nodeName(n, "input") || x1.nodeName(n, "button") ? n.form : t1;
                r && !x1._data(r, "submitBubbles") && (x1.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), x1._data(r, "submitBubbles", !0));
            }), t1);
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x1.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function() {
            return x1.nodeName(this, "form") ? !1 : (x1.event.remove(this, "._submit"), t1);
        }
    }), x1.support.changeBubbles || (x1.event.special.change = {
        setup: function() {
            return Z1.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x1.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
            }), x1.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), x1.event.simulate("change", this, e, !0);
            })), !1) : (x1.event.add(this, "beforeactivate._change", function(e24) {
                var t = e24.target;
                Z1.test(t.nodeName) && !x1._data(t, "changeBubbles") && (x1.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x1.event.simulate("change", this.parentNode, e, !0);
                }), x1._data(t, "changeBubbles", !0));
            }), t1);
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t1;
        },
        teardown: function() {
            return x1.event.remove(this, "._change"), !Z1.test(this.nodeName);
        }
    }), x1.support.focusinBubbles || x1.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e25, t) {
        var n = 0, r = function(e) {
            x1.event.simulate(t, e.target, x1.event.fix(e), !0);
        };
        x1.event.special[t] = {
            setup: function() {
                0 === n++ && a1.addEventListener(e25, r, !0);
            },
            teardown: function() {
                0 === --n && a1.removeEventListener(e25, r, !0);
            }
        };
    }), x1.fn.extend({
        on: function(e26, n, r, i, o) {
            var a, s;
            if ("object" == typeof e26) {
                "string" != typeof n && (r = r || n, n = t1);
                for(a in e26)this.on(a, n, r, e26[a], o);
                return this;
            }
            if (null == r && null == i ? (i = n, r = n = t1) : null == i && ("string" == typeof n ? (i = r, r = t1) : (i = r, r = n, n = t1)), i === !1) i = ot;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return x1().off(e), s.apply(this, arguments);
            }, i.guid = s.guid || (s.guid = x1.guid++)), this.each(function() {
                x1.event.add(this, e26, i, r, n);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x1(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for(o in e)this.off(o, n, e[o]);
                return this;
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t1), r === !1 && (r = ot), this.each(function() {
                x1.event.remove(this, e, r, n);
            });
        },
        trigger: function(e, t) {
            return this.each(function() {
                x1.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x1.event.trigger(e, n, r, !0) : t1;
        }
    });
    var st1 = /^.[^:#\[\.,]*$/, lt1 = /^(?:parents|prev(?:Until|All))/, ut1 = x1.expr.match.needsContext, ct1 = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    x1.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(x1(e).filter(function() {
                for(t = 0; i > t; t++)if (x1.contains(r[t], this)) return !0;
            }));
            for(t = 0; i > t; t++)x1.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x1.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n;
        },
        has: function(e) {
            var t, n = x1(e, this), r = n.length;
            return this.filter(function() {
                for(t = 0; r > t; t++)if (x1.contains(this, n[t])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(ft1(this, e || [], !0));
        },
        filter: function(e) {
            return this.pushStack(ft1(this, e || [], !1));
        },
        is: function(e) {
            return !!ft1(this, "string" == typeof e && ut1.test(e) ? x1(e) : e || [], !1).length;
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = ut1.test(e) || "string" != typeof e ? x1(e, t || this.context) : 0;
            for(; i > r; r++)for(n = this[r]; n && n !== t; n = n.parentNode)if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x1.find.matchesSelector(n, e))) {
                n = o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? x1.unique(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? x1.inArray(this[0], x1(e)) : x1.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x1(e, t) : x1.makeArray(e && e.nodeType ? [
                e
            ] : e), r = x1.merge(this.get(), n);
            return this.pushStack(x1.unique(r));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    });
    function pt1(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType)
        return e;
    }
    x1.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return x1.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return x1.dir(e, "parentNode", n);
        },
        next: function(e) {
            return pt1(e, "nextSibling");
        },
        prev: function(e) {
            return pt1(e, "previousSibling");
        },
        nextAll: function(e) {
            return x1.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return x1.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return x1.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return x1.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return x1.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return x1.sibling(e.firstChild);
        },
        contents: function(e) {
            return x1.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x1.merge([], e.childNodes);
        }
    }, function(e, t) {
        x1.fn[e] = function(n, r) {
            var i = x1.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x1.filter(r, i)), this.length > 1 && (ct1[e] || (i = x1.unique(i)), lt1.test(e) && (i = i.reverse())), this.pushStack(i);
        };
    }), x1.extend({
        filter: function(e27, t, n) {
            var r = t[0];
            return n && (e27 = ":not(" + e27 + ")"), 1 === t.length && 1 === r.nodeType ? x1.find.matchesSelector(r, e27) ? [
                r
            ] : [] : x1.find.matches(e27, x1.grep(t, function(e) {
                return 1 === e.nodeType;
            }));
        },
        dir: function(e, n, r) {
            var i = [], o = e[n];
            while(o && 9 !== o.nodeType && (r === t1 || 1 !== o.nodeType || !x1(o).is(r)))1 === o.nodeType && i.push(o), o = o[n];
            return i;
        },
        sibling: function(e, t) {
            var n = [];
            for(; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    });
    function ft1(e28, t, n) {
        if (x1.isFunction(t)) return x1.grep(e28, function(e, r) {
            return !!t.call(e, r, e) !== n;
        });
        if (t.nodeType) return x1.grep(e28, function(e) {
            return e === t !== n;
        });
        if ("string" == typeof t) {
            if (st1.test(t)) return x1.filter(t, e28, n);
            t = x1.filter(t, e28);
        }
        return x1.grep(e28, function(e) {
            return x1.inArray(e, t) >= 0 !== n;
        });
    }
    function dt1(e) {
        var t = ht1.split("|"), n = e.createDocumentFragment();
        if (n.createElement) while(t.length)n.createElement(t.pop());
        return n;
    }
    var ht1 = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt1 = / jQuery\d+="(?:null|\d+)"/g, mt1 = RegExp("<(?:" + ht1 + ")[\\s/>]", "i"), yt1 = /^\s+/, vt1 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt1 = /<([\w:]+)/, xt1 = /<tbody/i, wt1 = /<|&#?\w+;/, Tt1 = /<(?:script|style|link)/i, Ct1 = /^(?:checkbox|radio)$/i, Nt1 = /checked\s*(?:[^=]|=\s*.checked.)/i, kt1 = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {
        option: [
            1,
            "<select multiple='multiple'>",
            "</select>"
        ],
        legend: [
            1,
            "<fieldset>",
            "</fieldset>"
        ],
        area: [
            1,
            "<map>",
            "</map>"
        ],
        param: [
            1,
            "<object>",
            "</object>"
        ],
        thead: [
            1,
            "<table>",
            "</table>"
        ],
        tr: [
            2,
            "<table><tbody>",
            "</tbody></table>"
        ],
        col: [
            2,
            "<table><tbody></tbody><colgroup>",
            "</colgroup></table>"
        ],
        td: [
            3,
            "<table><tbody><tr>",
            "</tr></tbody></table>"
        ],
        _default: x1.support.htmlSerialize ? [
            0,
            "",
            ""
        ] : [
            1,
            "X<div>",
            "</div>"
        ]
    }, jt = dt1(a1), Dt = jt.appendChild(a1.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x1.fn.extend({
        text: function(e29) {
            return x1.access(this, function(e) {
                return e === t1 ? x1.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a1).createTextNode(e));
            }, null, e29, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove: function(e, t) {
            var n, r = e ? x1.filter(e, this) : this, i = 0;
            for(; null != (n = r[i]); i++)t || 1 !== n.nodeType || x1.cleanData(Ft(n)), n.parentNode && (t && x1.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            var e, t = 0;
            for(; null != (e = this[t]); t++){
                1 === e.nodeType && x1.cleanData(Ft(e, !1));
                while(e.firstChild)e.removeChild(e.firstChild);
                e.options && x1.nodeName(e, "select") && (e.options.length = 0);
            }
            return this;
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return x1.clone(this, e, t);
            });
        },
        html: function(e30) {
            return x1.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t1) return 1 === n.nodeType ? n.innerHTML.replace(gt1, "") : t1;
                if (!("string" != typeof e || Tt1.test(e) || !x1.support.htmlSerialize && mt1.test(e) || !x1.support.leadingWhitespace && yt1.test(e) || At[(bt1.exec(e) || [
                    "",
                    ""
                ])[1].toLowerCase()])) {
                    e = e.replace(vt1, "<$1></$2>");
                    try {
                        for(; i > r; r++)n = this[r] || {}, 1 === n.nodeType && (x1.cleanData(Ft(n, !1)), n.innerHTML = e);
                        n = 0;
                    } catch (o) {}
                }
                n && this.empty().append(e);
            }, null, e30, arguments.length);
        },
        replaceWith: function() {
            var e31 = x1.map(this, function(e) {
                return [
                    e.nextSibling,
                    e.parentNode
                ];
            }), t = 0;
            return this.domManip(arguments, function(n) {
                var r = e31[t++], i = e31[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x1(this).remove(), i.insertBefore(n, r));
            }, !0), t ? this : this.remove();
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, t, n) {
            e = d1.apply([], e);
            var r8, i5, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x1.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x1.support.checkClone) && Nt1.test(h)) return this.each(function(r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n);
            });
            if (c && (l = x1.buildFragment(e, this[0].ownerDocument, !1, !n && this), r8 = l.firstChild, 1 === l.childNodes.length && (l = r8), r8)) {
                for(a = x1.map(Ft(l, "script"), Ht), o = a.length; c > u; u++)i5 = l, u !== f && (i5 = x1.clone(i5, !0, !0), o && x1.merge(a, Ft(i5, "script"))), t.call(this[u], i5, u);
                if (o) for(s = a[a.length - 1].ownerDocument, x1.map(a, qt), u = 0; o > u; u++)i5 = a[u], kt1.test(i5.type || "") && !x1._data(i5, "globalEval") && x1.contains(s, i5) && (i5.src ? x1._evalUrl(i5.src) : x1.globalEval((i5.text || i5.textContent || i5.innerHTML || "").replace(St, "")));
                l = r8 = null;
            }
            return this;
        }
    });
    function Lt(e, t) {
        return x1.nodeName(e, "table") && x1.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function Ht(e) {
        return e.type = (null !== x1.find.attr(e, "type")) + "/" + e.type, e;
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function _t(e, t) {
        var n, r = 0;
        for(; null != (n = e[r]); r++)x1._data(n, "globalEval", !t || x1._data(t[r], "globalEval"));
    }
    function Mt(e, t) {
        if (1 === t.nodeType && x1.hasData(e)) {
            var n, r, i, o = x1._data(e), a = x1._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for(n in s)for(r = 0, i = s[n].length; i > r; r++)x1.event.add(t, n, s[n][r]);
            }
            a.data && (a.data = x1.extend({}, a.data));
        }
    }
    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x1.support.noCloneEvent && t[x1.expando]) {
                i = x1._data(t);
                for(r in i.events)x1.removeEvent(t, r, i.handle);
                t.removeAttribute(x1.expando);
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x1.support.html5Clone && e.innerHTML && !x1.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct1.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
        }
    }
    x1.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e32, t) {
        x1.fn[e32] = function(e) {
            var n, r = 0, i = [], o = x1(e), a = o.length - 1;
            for(; a >= r; r++)n = r === a ? this : this.clone(!0), x1(o[r])[t](n), h1.apply(i, n.get());
            return this.pushStack(i);
        };
    });
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i1 ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i1 ? e.querySelectorAll(n || "*") : t1;
        if (!s) for(s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || x1.nodeName(o, n) ? s.push(o) : x1.merge(s, Ft(o, n));
        return n === t1 || n && x1.nodeName(e, n) ? x1.merge([
            e
        ], s) : s;
    }
    function Bt(e) {
        Ct1.test(e.type) && (e.defaultChecked = e.checked);
    }
    x1.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x1.contains(e.ownerDocument, e);
            if (x1.support.html5Clone || x1.isXMLDoc(e) || !mt1.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x1.support.noCloneEvent && x1.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x1.isXMLDoc(e))) for(r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a)r[a] && Ot(i, r[a]);
            if (t) {
                if (n) for(s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++)Mt(i, r[a]);
                else Mt(e, o);
            }
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o;
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length, f = dt1(t), d = [], h = 0;
            for(; p > h; h++)if (o = e[h], o || 0 === o) {
                if ("object" === x1.type(o)) x1.merge(d, o.nodeType ? [
                    o
                ] : o);
                else if (wt1.test(o)) {
                    s = s || f.appendChild(t.createElement("div")), l = (bt1.exec(o) || [
                        "",
                        ""
                    ])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt1, "<$1></$2>") + c[2], i = c[0];
                    while(i--)s = s.lastChild;
                    if (!x1.support.leadingWhitespace && yt1.test(o) && d.push(t.createTextNode(yt1.exec(o)[0])), !x1.support.tbody) {
                        o = "table" !== l || xt1.test(o) ? "<table>" !== c[1] || xt1.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                        while(i--)x1.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                    }
                    x1.merge(d, s.childNodes), s.textContent = "";
                    while(s.firstChild)s.removeChild(s.firstChild);
                    s = f.lastChild;
                } else d.push(t.createTextNode(o));
            }
            s && f.removeChild(s), x1.support.appendChecked || x1.grep(Ft(d, "input"), Bt), h = 0;
            while(o = d[h++])if ((!r || -1 === x1.inArray(o, r)) && (a = x1.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                i = 0;
                while(o = s[i++])kt1.test(o.type || "") && n.push(o);
            }
            return s = null, f;
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0, l = x1.expando, u = x1.cache, c = x1.support.deleteExpando, f = x1.event.special;
            for(; null != (n = e[s]); s++)if ((t || x1.acceptData(n)) && (o = n[l], a = o && u[o])) {
                if (a.events) for(r in a.events)f[r] ? x1.event.remove(n, r) : x1.removeEvent(n, r, a.handle);
                u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i1 ? n.removeAttribute(l) : n[l] = null, p1.push(o));
            }
        },
        _evalUrl: function(e) {
            return x1.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            });
        }
    }), x1.fn.extend({
        wrapAll: function(e33) {
            if (x1.isFunction(e33)) return this.each(function(t) {
                x1(this).wrapAll(e33.call(this, t));
            });
            if (this[0]) {
                var t15 = x1(e33, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t15.insertBefore(this[0]), t15.map(function() {
                    var e = this;
                    while(e.firstChild && 1 === e.firstChild.nodeType)e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(e) {
            return x1.isFunction(e) ? this.each(function(t) {
                x1(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = x1(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = x1.isFunction(e);
            return this.each(function(n) {
                x1(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                x1.nodeName(this, "body") || x1(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w1 + ")(.*)$", "i"), Yt = RegExp("^(" + w1 + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w1 + ")", "i"), Gt = {
        BODY: "block"
    }, Qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Kt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = [
        "Top",
        "Right",
        "Bottom",
        "Left"
    ], en = [
        "Webkit",
        "O",
        "Moz",
        "ms"
    ];
    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while(i--)if (t = en[i] + n, t in e) return t;
        return r;
    }
    function nn(e, t) {
        return e = t || e, "none" === x1.css(e, "display") || !x1.contains(e.ownerDocument, e);
    }
    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for(; s > a; a++)r = e[a], r.style && (o[a] = x1._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x1._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x1._data(r, "olddisplay", i ? n : x1.css(r, "display"))));
        for(a = 0; s > a; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e;
    }
    x1.fn.extend({
        css: function(e34, n15) {
            return x1.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (x1.isArray(n)) {
                    for(o = Rt(e), i = n.length; i > s; s++)a[n[s]] = x1.css(e, n[s], !1, o);
                    return a;
                }
                return r !== t1 ? x1.style(e, n, r) : x1.css(e, n);
            }, e34, n15, arguments.length > 1);
        },
        show: function() {
            return rn(this, !0);
        },
        hide: function() {
            return rn(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? x1(this).show() : x1(this).hide();
            });
        }
    }), x1.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x1.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x1.camelCase(n), u = e.style;
                if (n = x1.cssProps[l] || (x1.cssProps[l] = tn(u, l)), s = x1.cssHooks[n] || x1.cssHooks[l], r === t1) return s && "get" in s && (o = s.get(e, !1, i)) !== t1 ? o : u[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x1.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x1.cssNumber[l] || (r += "px"), x1.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t1))) try {
                    u[n] = r;
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x1.camelCase(n);
            return n = x1.cssProps[l] || (x1.cssProps[l] = tn(e.style, l)), s = x1.cssHooks[n] || x1.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t1 && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x1.isNumeric(o) ? o || 0 : a) : a;
        }
    }), e1.getComputedStyle ? (Rt = function(t) {
        return e1.getComputedStyle(t, null);
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t1, u = e.style;
        return s && ("" !== l || x1.contains(e.ownerDocument, e) || (l = x1.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l;
    }) : a1.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle;
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s[n] : t1, u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l;
    });
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
        for(; 4 > o; o += 2)"margin" === n && (a += x1.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x1.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x1.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x1.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x1.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a;
    }
    function sn(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x1.support.boxSizing && "border-box" === x1.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (x1.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
    }
    function ln(e) {
        var t = a1, n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x1("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n;
    }
    function un(e, t) {
        var n = x1(t.createElement(e)).appendTo(t.body), r = x1.css(n[0], "display");
        return n.remove(), r;
    }
    x1.each([
        "height",
        "width"
    ], function(e35, n) {
        x1.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x1.css(e, "display")) ? x1.swap(e, Qt, function() {
                    return sn(e, n, i);
                }) : sn(e, n, i) : t1;
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x1.support.boxSizing && "border-box" === x1.css(e, "boxSizing", !1, i), i) : 0);
            }
        };
    }), x1.support.opacity || (x1.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function(e, t) {
            var n = e.style, r = e.currentStyle, i = x1.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x1.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i);
        }
    }), x1(function() {
        x1.support.reliableMarginRight || (x1.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x1.swap(e, {
                    display: "inline-block"
                }, Wt, [
                    e,
                    "marginRight"
                ]) : t1;
            }
        }), !x1.support.pixelPosition && x1.fn.position && x1.each([
            "top",
            "left"
        ], function(e36, n) {
            x1.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x1(e).position()[n] + "px" : r) : t1;
                }
            };
        });
    }), x1.expr && x1.expr.filters && (x1.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x1.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x1.css(e, "display"));
    }, x1.expr.filters.visible = function(e) {
        return !x1.expr.filters.hidden(e);
    }), x1.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x1.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [
                    n
                ];
                for(; 4 > r; r++)i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, Ut.test(e) || (x1.cssHooks[e + t].set = on);
    });
    var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
    x1.fn.extend({
        serialize: function() {
            return x1.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x1.prop(this, "elements");
                return e ? x1.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !x1(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct1.test(e));
            }).map(function(e37, t) {
                var n = x1(this).val();
                return null == n ? null : x1.isArray(n) ? x1.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                };
            }).get();
        }
    }), x1.param = function(e38, n) {
        var r, i = [], o = function(e, t) {
            t = x1.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (n === t1 && (n = x1.ajaxSettings && x1.ajaxSettings.traditional), x1.isArray(e38) || e38.jquery && !x1.isPlainObject(e38)) x1.each(e38, function() {
            o(this.name, this.value);
        });
        else for(r in e38)gn(r, e38[r], n, o);
        return i.join("&").replace(cn, "+");
    };
    function gn(e, t16, n, r) {
        var i6;
        if (x1.isArray(t16)) x1.each(t16, function(t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
        });
        else if (n || "object" !== x1.type(t16)) r(e, t16);
        else for(i6 in t16)gn(e + "[" + i6 + "]", t16[i6], n, r);
    }
    x1.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e39, t) {
        x1.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), x1.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    });
    var mn, yn, vn = x1.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x1.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o1.href;
    } catch (Ln) {
        yn = a1.createElement("a"), yn.href = "", yn = yn.href;
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(T1) || [];
            if (x1.isFunction(n)) while(r = o[i++])"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function qn(e, n, r, i) {
        var o = {}, a = e === jn;
        function s(l4) {
            var u;
            return o[l4] = !0, x1.each(e[l4] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t1 : (n.dataTypes.unshift(c), s(c), !1);
            }), u;
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*");
    }
    function _n(e, n) {
        var r, i, o = x1.ajaxSettings.flatOptions || {};
        for(i in n)n[i] !== t1 && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x1.extend(!0, e, r), e;
    }
    x1.fn.load = function(e40, n, r) {
        if ("string" != typeof e40 && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this, l = e40.indexOf(" ");
        return l >= 0 && (i = e40.slice(l, e40.length), e40 = e40.slice(0, l)), x1.isFunction(n) ? (r = n, n = t1) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x1.ajax({
            url: e40,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? x1("<div>").append(x1.parseHTML(e)).find(i) : e);
        }).complete(r && function(e, t) {
            s.each(r, o || [
                e.responseText,
                t,
                e
            ]);
        }), this;
    }, x1.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function(e41, t) {
        x1.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), x1.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x1.parseJSON,
                "text xml": x1.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x1.ajaxSettings), t) : _n(x1.ajaxSettings, e);
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e42, n16) {
            "object" == typeof e42 && (n16 = e42, e42 = t1), n16 = n16 || {};
            var r9, i7, o, a, s, l, u, c3, p = x1.ajaxSetup({}, n16), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x1(f) : x1.event, h = x1.Deferred(), g = x1.Callbacks("once memory"), m = p.statusCode || {}, y3 = {}, v3 = {}, b = 0, w3 = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!c3) {
                            c3 = {};
                            while(t = Tn.exec(a))c3[t[1].toLowerCase()] = t[2];
                        }
                        t = c3[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? a : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = v3[n] = v3[n] || e, y3[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return b || (p.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) {
                        if (2 > b) for(t in e)m[t] = [
                            m[t],
                            e[t]
                        ];
                        else C.always(e[C.status]);
                    }
                    return this;
                },
                abort: function(e) {
                    var t = e || w3;
                    return u && u.abort(t), k(0, t), this;
                }
            };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e42 || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n16.method || n16.type || p.method || p.type, p.dataTypes = x1.trim(p.dataType || "*").toLowerCase().match(T1) || [
                ""
            ], null == p.crossDomain && (r9 = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r9 || r9[1] === mn[1] && r9[2] === mn[2] && (r9[3] || ("http:" === r9[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x1.param(p.data, p.traditional)), qn(An, p, n16, C), 2 === b) return C;
            l = p.global, l && 0 === x1.active++ && x1.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x1.lastModified[o] && C.setRequestHeader("If-Modified-Since", x1.lastModified[o]), x1.etag[o] && C.setRequestHeader("If-None-Match", x1.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n16.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for(i7 in p.headers)C.setRequestHeader(i7, p.headers[i7]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
            w3 = "abort";
            for(i7 in {
                success: 1,
                error: 1,
                complete: 1
            })C[i7](p[i7]);
            if (u = qn(jn, p, n16, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [
                    C,
                    p
                ]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout");
                }, p.timeout));
                try {
                    b = 1, u.send(y3, k);
                } catch (N) {
                    if (!(2 > b)) throw N;
                    k(-1, N);
                }
            } else k(-1, "No Transport");
            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t1, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x1.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x1.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [
                    y,
                    N,
                    C
                ]) : h.rejectWith(f, [
                    C,
                    N,
                    v
                ]), C.statusCode(m), m = t1, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [
                    C,
                    p,
                    c ? y : v
                ]), g.fireWith(f, [
                    C,
                    N
                ]), l && (d.trigger("ajaxComplete", [
                    C,
                    p
                ]), --x1.active || x1.event.trigger("ajaxStop")));
            }
            return C;
        },
        getJSON: function(e, t, n) {
            return x1.get(e, t, n, "json");
        },
        getScript: function(e, n) {
            return x1.get(e, t1, n, "script");
        }
    }), x1.each([
        "get",
        "post"
    ], function(e43, n) {
        x1[n] = function(e, r, i, o) {
            return x1.isFunction(r) && (o = o || i, i = r, r = t1), x1.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            });
        };
    });
    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes;
        while("*" === u[0])u.shift(), o === t1 && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) {
            for(s in l)if (l[s] && l[s].test(o)) {
                u.unshift(s);
                break;
            }
        }
        if (u[0] in r) a = u[0];
        else {
            for(s in r){
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break;
                }
                i || (i = s);
            }
            a = a || i;
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t1;
    }
    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1]) for(a in e.converters)u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while(o)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) {
            if ("*" === o) o = l;
            else if ("*" !== l && l !== o) {
                if (a = u[l + " " + o] || u["* " + o], !a) {
                    for(i in u)if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break;
                    }
                }
                if (a !== !0) {
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t);
                    } catch (p) {
                        return {
                            state: "parsererror",
                            error: a ? p : "No conversion from " + l + " to " + o
                        };
                    }
                }
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    x1.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x1.globalEval(e), e;
            }
        }
    }), x1.ajaxPrefilter("script", function(e) {
        e.cache === t1 && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), x1.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a1.head || x1("head")[0] || a1.documentElement;
            return {
                send: function(t17, i) {
                    n = a1.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
                    }, r.insertBefore(n, r.firstChild);
                },
                abort: function() {
                    n && n.onload(t1, !0);
                }
            };
        }
    });
    var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/;
    x1.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x1.expando + "_" + vn++;
            return this[e] = !0, e;
        }
    }), x1.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x1.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || x1.error(o + " was not called"), s[0];
        }, n.dataTypes[0] = "json", a = e1[o], e1[o] = function() {
            s = arguments;
        }, i.always(function() {
            e1[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x1.isFunction(a) && a(s[0]), s = a = t1;
        }), "script") : t1;
    });
    var Pn, Rn, Wn = 0, $n = e1.ActiveXObject && function() {
        var e;
        for(e in Pn)Pn[e](t1, !0);
    };
    function In() {
        try {
            return new e1.XMLHttpRequest;
        } catch (t) {}
    }
    function zn() {
        try {
            return new e1.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    x1.ajaxSettings.xhr = e1.ActiveXObject ? function() {
        return !this.isLocal && In() || zn();
    } : In, Rn = x1.ajaxSettings.xhr(), x1.support.cors = !!Rn && "withCredentials" in Rn, Rn = x1.support.ajax = !!Rn, Rn && x1.ajaxTransport(function(n) {
        if (!n.crossDomain || x1.support.cors) {
            var r;
            return {
                send: function(i8, o) {
                    var a, s5, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for(s5 in n.xhrFields)l[s5] = n.xhrFields[s5];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i8["X-Requested-With"] || (i8["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for(s5 in i8)l.setRequestHeader(s5, i8[s5]);
                    } catch (u3) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState)) {
                                if (r = t1, a && (l.onreadystatechange = x1.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();
                                else {
                                    p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                    try {
                                        c = l.statusText;
                                    } catch (f) {
                                        c = "";
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404;
                                }
                            }
                        } catch (d) {
                            i || o(-1, d);
                        }
                        p && o(s, c, p, u);
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x1(e1).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r();
                },
                abort: function() {
                    r && r(t1, !0);
                }
            };
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w1 + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [
        nr
    ], Qn = {
        "*": [
            function(e, t) {
                var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x1.cssNumber[e] ? "" : "px"), a = (x1.cssNumber[e] || "px" !== o && +r) && Yn.exec(x1.css(n.elem, e)), s = 1, l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, x1.style(n.elem, e, a + o);
                    while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n;
            }
        ]
    };
    function Kn() {
        return setTimeout(function() {
            Xn = t1;
        }), Xn = x1.now();
    }
    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
        for(; a > o; o++)if (r = i[o].call(n, t, e)) return r;
    }
    function er(e, t18, n17) {
        var r10, i, o6 = 0, a3 = Gn.length, s = x1.Deferred().always(function() {
            delete l5.elem;
        }), l5 = function() {
            if (i) return !1;
            var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length;
            for(; l > a; a++)u.tweens[a].run(o);
            return s.notifyWith(e, [
                u,
                o,
                n
            ]), 1 > o && l ? n : (s.resolveWith(e, [
                u
            ]), !1);
        }, u = s.promise({
            elem: e,
            props: x1.extend({}, t18),
            opts: x1.extend(!0, {
                specialEasing: {}
            }, n17),
            originalProperties: t18,
            originalOptions: n17,
            startTime: Xn || Kn(),
            duration: n17.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = x1.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? u.tweens.length : 0;
                if (i) return this;
                for(i = !0; r > n; n++)u.tweens[n].run(1);
                return t ? s.resolveWith(e, [
                    u,
                    t
                ]) : s.rejectWith(e, [
                    u,
                    t
                ]), this;
            }
        }), c = u.props;
        for(tr(c, u.opts.specialEasing); a3 > o6; o6++)if (r10 = Gn[o6].call(u, e, c, u.opts)) return r10;
        return x1.map(c, Zn, u), x1.isFunction(u.opts.start) && u.opts.start.call(e, u), x1.fx.timer(x1.extend(l5, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for(n in e)if (r = x1.camelCase(n), i = t[r], o = e[n], x1.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x1.cssHooks[r], a && "expand" in a) {
            o = a.expand(o), delete e[r];
            for(n in o)n in e || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
    }
    x1.Animation = x1.extend(er, {
        tweener: function(e, t) {
            x1.isFunction(e) ? (t = e, e = [
                "*"
            ]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for(; i > r; r++)n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e);
        }
    });
    function nr(e, t19, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x1._data(e, "fxshow");
        n.queue || (s = x1._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l();
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, x1.queue(e, "fx").length || s.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in t19 || "width" in t19) && (n.overflow = [
            p.overflow,
            p.overflowX,
            p.overflowY
        ], "inline" === x1.css(e, "display") && "none" === x1.css(e, "float") && (x1.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x1.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        }));
        for(r in t19)if (i = t19[r], Vn.exec(i)) {
            if (delete t19[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
            c[r] = d && d[r] || x1.style(e, r);
        }
        if (!x1.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x1._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x1(e).show() : u.done(function() {
                x1(e).hide();
            }), u.done(function() {
                var t;
                x1._removeData(e, "fxshow");
                for(t in c)x1.style(e, t, c[t]);
            });
            for(r in c)a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0));
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i);
    }
    x1.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x1.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x1.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x1.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
            },
            set: function(e) {
                x1.fx.step[e.prop] ? x1.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x1.cssProps[e.prop]] || x1.cssHooks[e.prop]) ? x1.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, x1.each([
        "toggle",
        "show",
        "hide"
    ], function(e44, t) {
        var n = x1.fn[t];
        x1.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
        };
    }), x1.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t20, n, r) {
            var i = x1.isEmptyObject(e), o = x1.speed(t20, n, r), a = function() {
                var t = er(this, x1.extend({}, e), o);
                (i || x1._data(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(e45, n18, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r);
            };
            return "string" != typeof e45 && (r = n18, n18 = e45, e45 = t1), n18 && e45 !== !1 && this.queue(e45 || "fx", []), this.each(function() {
                var t = !0, n = null != e45 && e45 + "queueHooks", o = x1.timers, a = x1._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else for(n in a)a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for(n = o.length; n--;)o[n].elem !== this || null != e45 && o[n].queue !== e45 || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && x1.dequeue(this, e45);
            });
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = x1._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x1.timers, a = r ? r.length : 0;
                for(n.finish = !0, x1.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for(t = 0; a > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    });
    function ir(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for(t = t ? 1 : 0; 4 > i; i += 2 - t)n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    x1.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e46, t) {
        x1.fn[e46] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), x1.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x1.extend({}, e) : {
            complete: n || !n && t || x1.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x1.isFunction(t) && t
        };
        return r.duration = x1.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x1.fx.speeds ? x1.fx.speeds[r.duration] : x1.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x1.isFunction(r.old) && r.old.call(this), r.queue && x1.dequeue(this, r.queue);
        }, r;
    }, x1.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, x1.timers = [], x1.fx = rr.prototype.init, x1.fx.tick = function() {
        var e, n = x1.timers, r = 0;
        for(Xn = x1.now(); n.length > r; r++)e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x1.fx.stop(), Xn = t1;
    }, x1.fx.timer = function(e) {
        e() && x1.timers.push(e) && x1.fx.start();
    }, x1.fx.interval = 13, x1.fx.start = function() {
        Un || (Un = setInterval(x1.fx.tick, x1.fx.interval));
    }, x1.fx.stop = function() {
        clearInterval(Un), Un = null;
    }, x1.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x1.fx.step = {}, x1.expr && x1.expr.filters && (x1.expr.filters.animated = function(e) {
        return x1.grep(x1.timers, function(t) {
            return e === t.elem;
        }).length;
    }), x1.fn.offset = function(e) {
        if (arguments.length) return e === t1 ? this : this.each(function(t) {
            x1.offset.setOffset(this, e, t);
        });
        var n, r, o = {
            top: 0,
            left: 0
        }, a = this[0], s = a && a.ownerDocument;
        if (s) return n = s.documentElement, x1.contains(n, a) ? (typeof a.getBoundingClientRect !== i1 && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o;
    }, x1.offset = {
        setOffset: function(e, t, n) {
            var r = x1.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x1(e), o = i.offset(), a = x1.css(e, "top"), s = x1.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x1.inArray("auto", [
                a,
                s
            ]) > -1, u = {}, c = {}, p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x1.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u);
        }
    }, x1.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === x1.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x1.nodeName(e[0], "html") || (n = e.offset()), n.top += x1.css(e[0], "borderTopWidth", !0), n.left += x1.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x1.css(r, "marginTop", !0),
                    left: t.left - n.left - x1.css(r, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s1;
                while(e && !x1.nodeName(e, "html") && "static" === x1.css(e, "position"))e = e.offsetParent;
                return e || s1;
            });
        }
    }), x1.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e47, n) {
        var r = /Y/.test(n);
        x1.fn[e47] = function(i9) {
            return x1.access(this, function(e, i, o) {
                var a = or(e);
                return o === t1 ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x1(a).scrollLeft() : o, r ? o : x1(a).scrollTop()) : e[i] = o, t1);
            }, e47, i9, arguments.length, null);
        };
    });
    function or(e) {
        return x1.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
    }
    x1.each({
        Height: "height",
        Width: "width"
    }, function(e, n19) {
        x1.each({
            padding: "inner" + e,
            content: n19,
            "": "outer" + e
        }, function(r11, i10) {
            x1.fn[i10] = function(i11, o7) {
                var a = arguments.length && (r11 || "boolean" != typeof i11), s = r11 || (i11 === !0 || o7 === !0 ? "margin" : "border");
                return x1.access(this, function(n, r, i) {
                    var o;
                    return x1.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t1 ? x1.css(n, r, s) : x1.style(n, r, i, s);
                }, n19, a ? i11 : t1, a, null);
            };
        });
    }), x1.fn.size = function() {
        return this.length;
    }, x1.fn.andSelf = x1.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x1 : (e1.jQuery = e1.$ = x1, "function" == typeof define && define.amd && define("jquery", [], function() {
        return x1;
    }));
})(window);

//# sourceMappingURL=index.43ccdedd.js.map
