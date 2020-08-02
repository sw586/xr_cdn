(function () {/*

 Murloc JavaScript Library v@VERSION
 https://github.com/coocy/Murloc

 Includes Sizzle.js
 http://sizzlejs.com/
*/
    var h = void 0, m = !0, n = null, q = !1; function aa(a) { return function () { return a } }
    var r = document, w = window, da = "ontouchend" in w, ea = w.navigator, fa = ea.userAgent, ga = /Android|HTC/i.test(fa) || da && /Linux/i.test(ea.platform + ""), ha = !!r.all, na = /MicroMessenger/i.test(fa), x = parseFloat(w.devicePixelRatio) || 1, oa = ga ? 10 : 6, pa = da ? "touchstart" : "mousedown", sa = da ? "touchmove" : "mousemove", ta = da ? "touchend" : "mouseup", ua = 1, va = r.getElementsByClassName, wa = ",+~[>#. ".split(""), xa = wa.length, ya = /<|&#?\w+;/, za = [], Da = za.concat, Ea = za.slice, Fa = {}, Ga = Fa.toString, Ha = Fa.hasOwnProperty;
    try { Da.apply([], r.getElementsByTagName("a")) } catch (Ia) { Da = { apply: function (a, b) { for (var c, d = 0; c = b[d++];) a.push(c); return a } } } String.prototype.hasOwnProperty("trim") || (String.prototype.trim = function () { return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") }); Array.prototype.hasOwnProperty("indexOf") || (Array.prototype.indexOf = function (a) { for (var b = 0, c = this.length; b < c; b++) if (this[b] === a) return b; return -1 });
    Function.prototype.hasOwnProperty("bind") || (Function.prototype.bind = function (a) { var b = this; return function () { return b.apply(a || this, arguments) } }); if (ha) try { r.execCommand("BackgroundImageCache", q, m) } catch (Ja) { } ga && (w.screen.width / w.innerWidth).toFixed(2) == x.toFixed(2) && (ua = 1 / x);
    function y(a, b) {
        if (!(this instanceof y)) return new y(a, b); this.a = []; if (a) if (a.nodeType || a === w) this.a = [a], this.length = 1; else if ("string" === typeof a) { if (ya.test(a)) this.a = Oa(a); else { "string" === typeof b ? (a = b + " " + a, b = n) : b = b instanceof y ? b.a : b ? [b] : n; var c = []; if (b) for (var d = b.length, e = 0; e < d; e++) c = Da.apply(c, Pa(a, b[e])); else c = Pa(a); this.a = c } this.length = this.a.length } else {
            if (a instanceof y) return a; if ("[object Function]" === Ga.call(a)) Qa(a); else if (a.length) this.a = Da.apply([], a), this.length = this.a.length;
            else return this
        } else this.length = 0
    } var Ra, Sa = 1; function Pa(a, b) { b = b || r; for (var c = a.slice(1), d, e = m, f = xa; f--;) if (-1 != c.indexOf(wa[f])) { e = q; break } if (e) { if ("#" == a.charAt(0)) return (d = r.getElementById(c)) ? [d] : []; if ("." == a.charAt(0)) { if (va) return b.getElementsByClassName(c) } else return b.getElementsByTagName(a) } return Ta(a, b) }
    var Ua = 1, Va = r.querySelectorAll && !ha || q, Wa = Va ? function (a, b) { return b.querySelectorAll(a) } : function (a, b) { return Sizzle(a, b) }, Ta = Va ? function (a, b) { if (r !== b) { for (var c = b.id || (b.id = "__rid" + Ua++), d = a.split(","), e = d.length; e--;) d[e] = "#" + c + " " + d[e]; a = d.join(",") } return Wa(a, r) } : Wa; function Xa(a) { return "[object Object]" === Ga.call(a) && a && (a.constructor ? Ha.call(a.constructor.prototype, "isPrototypeOf") : q) && !a.nodeType && !a.window }
    function Ya(a, b) { var c, d; for (c in b) d = b[c], a[c] = "[object Object]" === Ga.call(d) && d ? Ya({}, d) : db(d); return a } y.prototype.extend = Ya; function db(a) { if (a instanceof Array) { for (var b = [], c = 0, d = a.length; c < d; c++) b[c] = db(a[c]); return b } return "[object Object]" === Ga.call(a) && a ? Ya({}, a) : a } function eb(a) { return a.replace(/-+(.)?/g, function (a, c) { return c ? c.toUpperCase() : "" }) }
    (function (a) {
        function b(a, b, c) { a = "0x" + b - 65536; return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320) } function c(a, b) { a === b && (Ba = m); return 0 } function d(a, b, c, d) {
            var e, f, g, k, l; (b ? b.ownerDocument || b : Q) !== K && ia(b); b = b || K; c = c || []; if (!a || "string" !== typeof a) return c; if (1 !== (k = b.nodeType) && 9 !== k) return []; if (Y && !d) {
                if (e = hd.exec(a)) if (g = e[1]) if (9 === k) if ((f = b.getElementById(g)) && f.parentNode) { if (f.id === g) return c.push(f), c } else return c; else {
                    if (b.ownerDocument && (f =
                    b.ownerDocument.getElementById(g)) && La(b, f) && f.id === g) return c.push(f), c
                } else { if (e[2]) return ja.apply(c, b.getElementsByTagName(a)), c; if ((g = e[3]) && A.getElementsByClassName && b.getElementsByClassName) return ja.apply(c, b.getElementsByClassName(g)), c } if (A.Ob && (!I || !I.test(a))) {
                    f = e = D; g = b; l = 9 === k && a; if (1 === k && "object" !== b.nodeName.toLowerCase()) {
                        k = Ma(a); (e = b.getAttribute("id")) ? f = e.replace(id, "\\$&") : b.setAttribute("id", f); f = "[id='" + f + "'] "; for (g = k.length; g--;) k[g] = f + M(k[g]); g = zb.test(a) && E(b.parentNode) ||
                        b; l = k.join(",")
                    } if (l) try { return ja.apply(c, g.querySelectorAll(l)), c } catch (t) { } finally { e || b.removeAttribute("id") }
                }
            } return ic(a.replace(Za, "$1"), b, c, d)
        } function e() { function a(c, d) { b.push(c + " ") > v.qb && delete a[b.shift()]; return a[c + " "] = d } var b = []; return a } function f(a) { a[D] = m; return a } function g(a) { var b = K.createElement("div"); try { return !!a(b) } catch (c) { return q } finally { b.parentNode && b.parentNode.removeChild(b) } } function k(a, b) { for (var c = a.split("|"), d = a.length; d--;) v.ka[c[d]] = b } function l(a, b) {
            var c =
            b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || jc) - (~a.sourceIndex || jc); if (d) return d; if (c) for (; c = c.nextSibling;) if (c === b) return -1; return a ? 1 : -1
        } function p(a) { return function (b) { return "input" === b.nodeName.toLowerCase() && b.type === a } } function s(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function u(a) { return f(function (b) { b = +b; return f(function (c, d) { for (var e, f = a([], c.length, b), g = f.length; g--;) if (c[e = f[g]]) c[e] = !(d[e] = c[e]) }) }) } function E(a) {
            return a &&
            typeof a.getElementsByTagName !== Ca && a
        } function ba() { } function M(a) { for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value; return d } function R(a, b, c) { var d = b.dir, e = c && "parentNode" === d, f = jd++; return b.Z ? function (b, c, B) { for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, B) } : function (b, c, B) { var O, g, k = [S, f]; if (B) for (; b = b[d];) { if ((1 === b.nodeType || e) && a(b, c, B)) return m } else for (; b = b[d];) if (1 === b.nodeType || e) { g = b[D] || (b[D] = {}); if ((O = g[d]) && O[0] === S && O[1] === f) return k[2] = O[2]; g[d] = k; if (k[2] = a(b, c, B)) return m } } } function T(a) {
            return 1 <
            a.length ? function (b, c, d) { for (var e = a.length; e--;) if (!a[e](b, c, d)) return q; return m } : a[0]
        } function ca(a, b, c, d, e) { for (var f, g = [], k = 0, l = a.length, t = b != n; k < l; k++) if (f = a[k]) if (!c || c(f, d, e)) g.push(f), t && b.push(k); return g } function t(a, b, c, e, g, k) {
            e && !e[D] && (e = t(e)); g && !g[D] && (g = t(g, k)); return f(function (f, k, l, Ka) {
                var t, p, H = [], v = [], N = k.length, s; if (!(s = f)) { s = b || "*"; for (var C = l.nodeType ? [l] : l, u = [], A = 0, U = C.length; A < U; A++) d(s, C[A], u); s = u } s = a && (f || !b) ? ca(s, H, a, l, Ka) : s; C = c ? g || (f ? a : N || e) ? [] : k : s; c && c(s, C, l, Ka); if (e) {
                    t =
                    ca(C, v); e(t, [], l, Ka); for (l = t.length; l--;) if (p = t[l]) C[v[l]] = !(s[v[l]] = p)
                } if (f) { if (g || a) { if (g) { t = []; for (l = C.length; l--;) if (p = C[l]) t.push(s[l] = p); g(n, C = [], t, Ka) } for (l = C.length; l--;) if ((p = C[l]) && -1 < (t = g ? qa.call(f, p) : H[l])) f[t] = !(k[t] = p) } } else C = ca(C === k ? C.splice(N, C.length) : C), g ? g(n, k, C, Ka) : ja.apply(k, C)
            })
        } function H(a) {
            var b, c, d, e = a.length, f = v.L[a[0].type]; c = f || v.L[" "]; for (var g = f ? 1 : 0, k = R(function (a) { return a === b }, c, m), l = R(function (a) { return -1 < qa.call(b, a) }, c, m), p = [function (a, c, d) {
            return !f && (d || c !==
            $a) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }]; g < e; g++) if (c = v.L[a[g].type]) p = [R(T(p), c)]; else { c = v.filter[a[g].type].apply(n, a[g].matches); if (c[D]) { for (d = ++g; d < e && !v.L[a[d].type]; d++); return t(1 < g && T(p), 1 < g && M(a.slice(0, g - 1).concat({ value: " " === a[g - 2].type ? "*" : "" })).replace(Za, "$1"), c, g < d && H(a.slice(g, d)), d < e && H(a = a.slice(d)), d < e && M(a)) } p.push(c) } return T(p)
        } function N(a, b) {
            function c(f, B, k, l, t) {
                var p, H, s, N = 0, u = "0", A = f && [], C = [], U = $a, D = f || g && v.find.TAG("*", t), E = S += U == n ? 1 : Math.random() || 0.1, I = D.length; for (t &&
                ($a = B !== K && B) ; u !== I && (p = D[u]) != n; u++) { if (g && p) { for (H = 0; s = a[H++];) if (s(p, B, k)) { l.push(p); break } t && (S = E) } e && ((p = !s && p) && N--, f && A.push(p)) } N += u; if (e && u !== N) { for (H = 0; s = b[H++];) s(A, C, B, k); if (f) { if (0 < N) for (; u--;) !A[u] && !C[u] && (C[u] = kd.call(l)); C = ca(C) } ja.apply(l, C); t && (!f && 0 < C.length && 1 < N + b.length) && d.a(l) } t && (S = E, $a = U); return A
            } var e = 0 < b.length, g = 0 < a.length; return e ? f(c) : c
        } var U, A, v, ab, kc, Ma, Ab, ic, $a, ka, Ba, ia, K, Z, Y, I, ra, bb, La, D = "sizzle" + -new Date, Q = a.document, S = 0, jd = 0, lc = e(), mc = e(), nc = e(), Ca = "undefined",
        jc = -2147483648, ld = {}.hasOwnProperty, la = [], kd = la.pop, md = la.push, ja = la.push, oc = la.slice, qa = la.indexOf || function (a) { for (var b = 0, c = this.length; b < c; b++) if (this[b] === a) return b; return -1 }, pc = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), qc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + pc + "))|)[\\x20\\t\\r\\n\\f]*\\]", Bb = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        qc + ")*)|.*)\\)|)", Za = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), nd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, od = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, pd = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), qd = RegExp(Bb), rd = RegExp("^" + pc + "$"), cb = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"), ATTR: RegExp("^" + qc), PSEUDO: RegExp("^" +
            Bb), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"), bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"), needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
            "i")
        }, sd = /^(?:input|select|textarea|button)$/i, td = /^h\d$/i, Na = /^[^{]+\{\s*\[native \w/, hd = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, zb = /[+~]/, id = /'|\\/g, ma = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"); try { ja.apply(la = oc.call(Q.childNodes), Q.childNodes), la[Q.childNodes.length].nodeType } catch (Wd) { ja = { apply: la.length ? function (a, b) { md.apply(a, oc.call(b)) } : function (a, b) { for (var c = a.length, d = 0; a[c++] = b[d++];); a.length = c - 1 } } } A = d.Ua = {}; kc = d.o = function (a) {
            return (a = a && (a.ownerDocument ||
            a).documentElement) ? "HTML" !== a.nodeName : q
        }; ia = d.P = function (a) {
            var d = a ? a.ownerDocument || a : Q; a = d.defaultView; if (d === K || 9 !== d.nodeType || !d.documentElement) return K; K = d; Z = d.documentElement; Y = !kc(d); a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function () { ia() }, q) : a.attachEvent && a.attachEvent("onunload", function () { ia() })); A.attributes = g(function (a) { a.className = "i"; return !a.getAttribute("className") }); A.getElementsByTagName = g(function (a) { a.appendChild(d.createComment("")); return !a.getElementsByTagName("*").length });
            A.getElementsByClassName = Na.test(d.getElementsByClassName) && g(function (a) { a.innerHTML = "<div class='a'></div><div class='a i'></div>"; a.firstChild.className = "i"; return 2 === a.getElementsByClassName("i").length }); A.Va = g(function (a) { Z.appendChild(a).id = D; return !d.getElementsByName || !d.getElementsByName(D).length }); A.Va ? (v.find.ID = function (a, b) { if (typeof b.getElementById !== Ca && Y) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, v.filter.ID = function (a) {
                var c = a.replace(ma, b); return function (a) {
                    return a.getAttribute("id") ===
                    c
                }
            }) : (delete v.find.ID, v.filter.ID = function (a) { var c = a.replace(ma, b); return function (a) { return (a = typeof a.getAttributeNode !== Ca && a.getAttributeNode("id")) && a.value === c } }); v.find.TAG = A.getElementsByTagName ? function (a, b) { if (typeof b.getElementsByTagName !== Ca) return b.getElementsByTagName(a) } : function (a, b) { var c, d = [], e = 0, Aa = b.getElementsByTagName(a); if ("*" === a) { for (; c = Aa[e++];) 1 === c.nodeType && d.push(c); return d } return Aa }; v.find.CLASS = A.getElementsByClassName && function (a, b) {
                if (typeof b.getElementsByClassName !==
                Ca && Y) return b.getElementsByClassName(a)
            }; ra = []; I = []; if (A.Ob = Na.test(d.querySelectorAll)) g(function (a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>"; a.querySelectorAll("[msallowclip^='']").length && I.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"); a.querySelectorAll("[selected]").length || I.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"); a.querySelectorAll(":checked").length ||
                I.push(":checked")
            }), g(function (a) { var b = d.createElement("input"); b.setAttribute("type", "hidden"); a.appendChild(b).setAttribute("name", "D"); a.querySelectorAll("[name=d]").length && I.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="); a.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"); a.querySelectorAll("*,:x"); I.push(",.*:") }); (A.matchesSelector = Na.test(bb = Z.matches || Z.webkitMatchesSelector || Z.mozMatchesSelector || Z.Fb || Z.msMatchesSelector)) && g(function (a) {
                A.ub = bb.call(a, "div"); bb.call(a,
                "[s!='']:x"); ra.push("!=", Bb)
            }); I = I.length && RegExp(I.join("|")); ra = ra.length && RegExp(ra.join("|")); La = (a = Na.test(Z.compareDocumentPosition)) || Na.test(Z.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || !(1 === d.nodeType && (c.contains ? c.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16))) } : function (a, b) { if (b) for (; b = b.parentNode;) if (b === a) return m; return q }; c = a ? function (a, b) {
                if (a === b) return Ba = m, 0; var c = !a.compareDocumentPosition -
                !b.compareDocumentPosition; if (c) return c; c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1; return c & 1 || !A.Sb && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === Q && La(Q, a) ? -1 : b === d || b.ownerDocument === Q && La(Q, b) ? 1 : ka ? qa.call(ka, a) - qa.call(ka, b) : 0 : c & 4 ? -1 : 1
            } : function (a, b) {
                if (a === b) return Ba = m, 0; var c, e = 0; c = a.parentNode; var Aa = b.parentNode, f = [a], g = [b]; if (!c || !Aa) return a === d ? -1 : b === d ? 1 : c ? -1 : Aa ? 1 : ka ? qa.call(ka, a) - qa.call(ka, b) : 0; if (c === Aa) return l(a, b); for (c = a; c = c.parentNode;) f.unshift(c);
                for (c = b; c = c.parentNode;) g.unshift(c); for (; f[e] === g[e];) e++; return e ? l(f[e], g[e]) : f[e] === Q ? -1 : g[e] === Q ? 1 : 0
            }; return d
        }; d.matches = function (a, b) { return d(a, n, n, b) }; d.matchesSelector = function (a, b) { (a.ownerDocument || a) !== K && ia(a); b = b.replace(pd, "='$1']"); if (A.matchesSelector && Y && (!ra || !ra.test(b)) && (!I || !I.test(b))) try { var c = bb.call(a, b); if (c || A.ub || a.document && 11 !== a.document.nodeType) return c } catch (e) { } return 0 < d(b, K, n, [a]).length }; d.contains = function (a, b) {
            (a.ownerDocument || a) !== K && ia(a); return La(a,
            b)
        }; d.b = function (a, b) { (a.ownerDocument || a) !== K && ia(a); var c = v.ka[b.toLowerCase()], c = c && ld.call(v.ka, b.toLowerCase()) ? c(a, b, !Y) : h; return c !== h ? c : A.attributes || !Y ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : n }; d.error = function (a) { throw Error("Syntax error, unrecognized expression: " + a); }; d.a = function (a) { var b, d = [], e = 0, f = 0; Ba = !A.tb; ka = !A.Tb && a.slice(0); a.sort(c); if (Ba) { for (; b = a[f++];) b === a[f] && (e = d.push(f)); for (; e--;) a.splice(d[e], 1) } ka = n }; ab = d.zb = function (a) {
            var b, c = "", d = 0; if (b =
            a.nodeType) if (1 === b || 9 === b || 11 === b) { if ("string" === typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += ab(a) } else { if (3 === b || 4 === b) return a.nodeValue } else for (; b = a[d++];) c += ab(b); return c
        }; v = d.O = {
            qb: 50, dc: f, match: cb, ka: {}, find: {}, L: { ">": { dir: "parentNode", Z: m }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", Z: m }, "~": { dir: "previousSibling" } }, Mb: {
                ATTR: function (a) {
                    a[1] = a[1].replace(ma, b); a[3] = (a[3] || a[4] || a[5] || "").replace(ma, b); "~=" === a[2] && (a[3] = " " + a[3] + " "); return a.slice(0,
                    4)
                }, CHILD: function (a) { a[1] = a[1].toLowerCase(); "nth" === a[1].slice(0, 3) ? (a[3] || d.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && d.error(a[0]); return a }, PSEUDO: function (a) { var b, c = !a[6] && a[2]; if (cb.CHILD.test(a[0])) return n; if (a[3]) a[2] = a[4] || a[5] || ""; else if (c && qd.test(c) && (b = Ma(c, m)) && (b = c.indexOf(")", c.length - b) - c.length)) a[0] = a[0].slice(0, b), a[2] = c.slice(0, b); return a.slice(0, 3) }
            }, filter: {
                TAG: function (a) {
                    var c = a.replace(ma, b).toLowerCase();
                    return "*" === a ? aa(m) : function (a) { return a.nodeName && a.nodeName.toLowerCase() === c }
                }, CLASS: function (a) { var b = lc[a + " "]; return b || (b = RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && lc(a, function (a) { return b.test("string" === typeof a.className && a.className || typeof a.getAttribute !== Ca && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) {
                    return function (e) {
                        e = d.b(e, a); if (e == n) return "!=" === b; if (!b) return m; e += ""; return "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && -1 <
                        e.indexOf(c) : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? -1 < (" " + e + " ").indexOf(c) : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : q
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), k = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, l) {
                        var O, B, t, p, H; c = f !== g ? "nextSibling" : "previousSibling"; var s = b.parentNode, N = k && b.nodeName.toLowerCase(); l = !l && !k; if (s) {
                            if (f) {
                                for (; c;) {
                                    for (B = b; B = B[c];) if (k ? B.nodeName.toLowerCase() === N : 1 === B.nodeType) return q;
                                    H = c = "only" === a && !H && "nextSibling"
                                } return m
                            } H = [g ? s.firstChild : s.lastChild]; if (g && l) { l = s[D] || (s[D] = {}); O = l[a] || []; p = O[0] === S && O[1]; t = O[0] === S && O[2]; for (B = p && s.childNodes[p]; B = ++p && B && B[c] || (t = p = 0) || H.pop() ;) if (1 === B.nodeType && ++t && B === b) { l[a] = [S, p, t]; break } } else if (l && (O = (b[D] || (b[D] = {}))[a]) && O[0] === S) t = O[1]; else for (; B = ++p && B && B[c] || (t = p = 0) || H.pop() ;) if ((k ? B.nodeName.toLowerCase() === N : 1 === B.nodeType) && ++t) if (l && ((B[D] || (B[D] = {}))[a] = [S, t]), B === b) break; t -= e; return t === d || 0 === t % d && 0 <= t / d
                        }
                    }
                }, PSEUDO: function (a,
                b) { var c, e = v.F[a] || v.eb[a.toLowerCase()] || d.error("unsupported pseudo: " + a); return e[D] ? e(b) : 1 < e.length ? (c = [a, a, "", b], v.eb.hasOwnProperty(a.toLowerCase()) ? f(function (a, c) { for (var d, f = e(a, b), g = f.length; g--;) d = qa.call(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e }
            }, F: {
                not: f(function (a) { var b = [], c = [], d = Ab(a.replace(Za, "$1")); return d[D] ? f(function (a, b, c, e) { e = d(a, n, e, []); for (var f = a.length; f--;) if (c = e[f]) a[f] = !(b[f] = c) }) : function (a, e, f) { b[0] = a; d(b, n, f, c); return !c.pop() } }), has: f(function (a) {
                    return function (b) {
                        return 0 <
                        d(a, b).length
                    }
                }), contains: f(function (a) { return function (b) { return -1 < (b.textContent || b.innerText || ab(b)).indexOf(a) } }), lang: f(function (a) { rd.test(a || "") || d.error("unsupported lang: " + a); a = a.replace(ma, b).toLowerCase(); return function (b) { var c; do if (c = Y ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return q } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, setFilters_prototype$root: function (a) {
                    return a ===
                    Z
                }, focus: function (a) { return a === K.activeElement && (!K.hasFocus || K.hasFocus()) && !(!a.type && !a.href && !~a.tabIndex) }, setFilters_prototype$enabled: function (a) { return a.disabled === q }, disabled: function (a) { return a.disabled === m }, checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { a.parentNode && a.parentNode.selectedIndex; return a.selected === m }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling) if (6 > a.nodeType) return q; return m },
                parent: function (a) { return !v.F.empty(a) }, header: function (a) { return td.test(a.nodeName) }, setFilters_prototype$input: function (a) { return sd.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, setFilters_prototype$text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && ((b = a.getAttribute("type")) == n || "text" === b.toLowerCase()) }, first: u(function () { return [0] }), last: u(function (a, b) { return [b - 1] }), eq: u(function (a, b,
                c) { return [0 > c ? c + b : c] }), even: u(function (a, b) { for (var c = 0; c < b; c += 2) a.push(c); return a }), odd: u(function (a, b) { for (var c = 1; c < b; c += 2) a.push(c); return a }), lt: u(function (a, b, c) { for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b); return a }), gt: u(function (a, b, c) { for (c = 0 > c ? c + b : c; ++c < b;) a.push(c); return a })
            }
        }; v.F.nth = v.F.eq; for (U in { hc: m, cc: m, file: m, gc: m, pa: m }) v.F[U] = p(U); for (U in { submit: m, reset: m }) v.F[U] = s(U); ba.prototype = v.filters = v.F; v.eb = new ba; Ma = d.Wa = function (a, b) {
            var c, e, f, g, k, l, t; if (k = mc[a + " "]) return b ? 0 : k.slice(0); k =
            a; l = []; for (t = v.Mb; k;) { if (!c || (e = nd.exec(k))) e && (k = k.slice(e[0].length) || k), l.push(f = []); c = q; if (e = od.exec(k)) c = e.shift(), f.push({ value: c, type: e[0].replace(Za, " ") }), k = k.slice(c.length); for (g in v.filter) if ((e = cb[g].exec(k)) && (!t[g] || (e = t[g](e)))) c = e.shift(), f.push({ value: c, type: g, matches: e }), k = k.slice(c.length); if (!c) break } return b ? k.length : k ? d.error(a) : mc(a, l).slice(0)
        }; Ab = d.d = function (a, b) {
            var c, d = [], e = [], f = nc[a + " "]; if (!f) {
                b || (b = Ma(a)); for (c = b.length; c--;) f = H(b[c]), f[D] ? d.push(f) : e.push(f); f = nc(a,
                N(e, d)); f.Pb = a
            } return f
        }; ic = d.g = function (a, c, d, e) {
            var f, g, k, l, t = "function" === typeof a && a, p = !e && Ma(a = t.Pb || a); d = d || []; if (1 === p.length) {
                g = p[0] = p[0].slice(0); if (2 < g.length && "ID" === (k = g[0]).type && A.Va && 9 === c.nodeType && Y && v.L[g[1].type]) { if (c = (v.find.ID(k.matches[0].replace(ma, b), c) || [])[0]) t && (c = c.parentNode); else return d; a = a.slice(g.shift().value.length) } for (f = cb.needsContext.test(a) ? 0 : g.length; f--;) {
                    k = g[f]; if (v.L[l = k.type]) break; if (l = v.find[l]) if (e = l(k.matches[0].replace(ma, b), zb.test(g[0].type) &&
                    E(c.parentNode) || c)) { g.splice(f, 1); a = e.length && M(g); if (!a) return ja.apply(d, e), d; break }
                }
            } (t || Ab(a, p))(e, c, !Y, d, zb.test(a) && E(c.parentNode) || c); return d
        }; A.Tb = D.split("").sort(c).join("") === D; A.tb = !!Ba; ia(); A.Sb = g(function (a) { return a.compareDocumentPosition(K.createElement("div")) & 1 }); g(function (a) { a.innerHTML = "<a href='#'></a>"; return "#" === a.firstChild.getAttribute("href") }) || k("type|href|height|width", function (a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }); (!A.attributes ||
        !g(function (a) { a.innerHTML = "<input/>"; a.firstChild.setAttribute("value", ""); return "" === a.firstChild.getAttribute("value") })) && k("value", function (a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }); g(function (a) { return a.getAttribute("disabled") == n }) || k("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (a, b, c) {
            var d; if (!c) return a[b] === m ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value :
            n
        }); "function" === typeof define && define.bc ? define(function () { return d }) : "undefined" !== typeof module && module.yb ? module.yb = d : a.Sizzle = d
    })(window);
    var JSON = w.JSON || {
        ob: { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, nb: function (a) { return JSON.ob[a] || "\\u00" + Math.floor(a.charCodeAt() / 16).toString(16) + (a.charCodeAt() % 16).toString(16) }, stringify: function (a) {
            type = a instanceof Array ? "array" : typeof a; switch (type) {
                case "string": return '"' + a.replace(/[\x00-\x1f\\"]/g, JSON.nb) + '"'; case "array": for (var b = [], c = 0, d = a.length; c < d; c++) b.push(JSON.stringify(a[c])); return "[" + b.join(",") + "]"; case "object": case "hash": b = []; for (c in a) d =
                a[c], (d = JSON.stringify(d)) && b.push(JSON.stringify(c) + ":" + d); return "{" + b.join(",") + "}"; case "number": case "boolean": return String(a); case q: return "null"
            } return n
        }, parse: function (a) { return eval("(" + a + ")") }
    }; function fb(a, b) { function c() { if (!f && (!this.readyState || "loading" !== this.readyState)) f = m, b && b.apply(n, []), e.onload = e.onreadystatechange = n, d.removeChild(e) } var d = r.getElementsByTagName("head")[0] || r.body, e = r.createElement("script"), f = q; e.src = a; e.onload = c; e.onreadystatechange = c; d.appendChild(e) }
    function gb(a) { var b = [], c, d, e; for (c in a) if (d = a[c], d instanceof Array) for (e = d.length; e--;) b.push(c + "[]=" + encodeURIComponent(d[e])); else b.push(c + "=" + encodeURIComponent(h === d ? "" : d)); return b.join("&") } function hb(a) { var b; try { b = Ea.call(a) } catch (c) { b = Da.apply([], a) } return b } function z(a, b) { for (var c = 0, d = a.a.length, e; c < d && !(e = a.a[c], q === b.call(e, c, e)) ; c++); return a }
    y.prototype.slice = function (a, b) { var c = this.length; a = a + (0 > a ? c : 0); b = h == b ? c : b; b = b + (0 > b ? c : 0); c = new y; this.a = hb(this.a); c.a = Ea.call(this.a, a, b); c.length = c.a.length; return c }; y.prototype.Z = function () { return this.j(0) }; y.prototype.$a = function () { return this.j(-1) }; y.prototype.j = function (a) { return y(this.get(a)) }; y.prototype.get = function (a) { if (h === a) return this.a; a = parseInt(a, 10); var b = this.length; a = a + (0 > a ? b : 0); return 0 > a ? h : this.a[a] }; var ib;
    function jb(a, b) { if (!b || !a || a === r) return q; var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.Fb || a.matchesSelector; if (c) return c.call(a, b); var c = a.parentNode, d = !c || 9 < c.nodeType, e, f, g = 0; d && (c = ib || (ib = r.createElement("div")), c.appendChild(a)); for (e = Wa(b, c) ; f = e[g++];) if (f === a) return m; d && c.removeChild(a); return q } y.prototype.filter = function (a) { var b = new y, c = []; a && z(this, function (b, e) { jb(e, a) && c.push(e) }); b.a = c; b.length = c.length; return b };
    function kb(a, b) { var c, d = new y, e = []; c = c || r; z(a, function (a, d) { do if (1 === d.nodeType && (!b || b && jb(d, b))) { e.push(d); break } while ((d = d.parentNode) && d !== c && 0 > e.indexOf(d)) }); d.a = e; d.length = e.length; return d } y.prototype.parent = function (a) { var b = new y, c = []; z(this, function (b, e) { var f = e.parentNode; (!a || a && jb(f, a)) && 0 > c.indexOf(f) && c.push(f) }); b.a = c; b.length = c.length; return b };
    y.prototype.children = function (a) { var b = new y, c = []; z(this, function (a, b) { var d = b.children; if (!d) for (var d = [], e = b.firstChild; e; e = e.nextSibling) 1 === e.nodeType && d.push(e); c = Da.apply(c, d) }); if (h !== a) { for (var d = [], e, f = 0; e = c[f++];) jb(e, a) && d.push(e); c = n; c = d } b.a = c; b.length = c.length; return b }; y.prototype.find = function (a) { return y(a, this) }; function lb(a) { return a.__ruid || (a.__ruid = Sa++) } var F, mb;
    function Oa(a) {
        var b = []; if (ya.test(a)) {
            mb || (mb = r.createElement("div"), F = { option: ["<select multiple>", "", 1], optgroup: ["<select multiple>", "", 1], tr: ["<table>", "</table>", 2], td: ["<table><tr>", "</tr></table>", 3], col: ["<table><colgroup>", "</colgroup></table>", 3], "*": [""] }, F.tbody = F.tfoot = F.colgroup = F.caption = F.thead = F.tr, F.th = F.td, F.optgroup = F.optgroup); a = a.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, "<$1></$2>"); b = mb; if (ha) {
                var c = (/<([\w:]+)/.exec(a) || ["", ""])[1].toLowerCase(),
                d = "", d = 0; c && (d = F[c] || F["*"], a = d[0] + a + (d[1] || ""), d = d[2] || 0); for (b.innerHTML = a; d--;) b = b.lastChild
            } else b.innerHTML = a; b = hb(b.childNodes)
        } else b.push(r.createTextNode(a)); return b
    } function nb(a) { if (a.nodeType) return [a]; var b = []; if (a instanceof y) b = Da.apply(b, a.a); else if ("string" !== typeof a && !isNaN(a.length)) for (var c = 0, d = a.length; c < d; c++) b = Da.apply(b, nb(a[c])); else b = Da.apply(b, Oa(a + "")); return b }
    function ob(a, b, c, d) { var e = c ? "insertBefore" : "appendChild", f = []; a = nb(a); for (var g, k = b.length, l = 0, p, s, u; l < k; l++) { g = b[l]; if (h !== d) { if (target = 0 === d ? g : g.nextSibling, g = g.parentNode, !g) continue } else target = c ? g[c] : h; p = 0; for (s = a.length; p < s; p++) u = a[p], u = l < k - 1 ? pb(u, m) : u, g[e](u, target), f.push(u) } return f } y.prototype.Nb = function (a) { ob(arguments, this.a, "firstChild") }; y.prototype.append = function (a) { ob(arguments, this.a); return this }; function qb(a, b) { a.a = ob(a.a, y(b).a); a.length = a.a.length; return a }
    function pb(a, b) { var c = a.cloneNode(m); if (b) { var d = a.__ruid || "0", e = rb[d], d = sb[d], f; if (d || e) f = lb(c), d && (sb[f] = db(d)), e && (rb[f] = db(e)) } return c } function tb(a) { var b = new y, c = []; z(a, function (a, b) { c.push(pb(b, h)) }); b.a = c; b.length = c.length; return b } var rb = {};
    y.prototype.data = function (a, b) { if (2 > arguments.length && ("string" === typeof a || h === a)) { var c = rb[(this.a[0] || {}).__ruid || "0"]; return a ? c && c[a] : c } "string" === typeof a && (c = {}, h !== b && (c[a + ""] = b), a = c); return z(this, function (b, c) { var f = lb(c), f = rb[f] || (rb[f] = {}), g; for (g in a) f[g] = a[g] }) }; function Qa(a) { m === ub ? a() : (vb.push(a), wb()); return this } y.prototype.o = Qa; var vb = [], xb = q, ub = q, yb = n; function Cb() { ha && "interactive" == r.readyState ? (yb && clearTimeout(yb), yb = setTimeout(Cb, 10)) : (wb(), xb = m) }
    function wb() { if (q === xb) { var a = r.readyState; 0 > "loading|uninitialized".indexOf(a) ? ha && "interactive" == a ? Cb() : Db() : (xb = m, r.addEventListener ? r.addEventListener("DOMContentLoaded", Db) : (a = r.getElementById("_ir_"), a || (r.write('<script id="_ir_" defer="true" src="://">\x3c/script>'), a = r.getElementById("_ir_"), a || (a = r.createElement("script"), a.id = "_ir_", r.getElementsByTagName("head")[0].appendChild(a))), a.onreadystatechange = a.onload = function () { "complete" == this.readyState && Db() })) } }
    function Db() { if (q === ub) { ub = m; for (var a = vb, b = 0, c = a.length; b < c; b++) try { a[b]() } catch (d) { } vb = [] } } var Eb = { "float": n }; function Fb(a, b) { var c = a; c in Eb && (c = Eb[c], n === c && ("float" === a && (c = "cssFloat" in b.style ? "cssFloat" : "styleFloat"), Eb[a] = c)); return c }
    y.prototype.c = function (a, b) {
        if ("string" === typeof a && 2 > arguments.length) { var c = this.a[0]; a = eb(a); var d; if (c && (a = Fb(a, c), d = (c.currentStyle || w.getComputedStyle(c, ""))[a], "" === d && (d = c.style[a]), h !== d && (d += ""), /^-?(\d*\.)?\d+[^\d\.]+/.test(d) && !/px$/i.test(d))) { var e = c.style.left; c.style.left = "fontSize" === a ? "1em" : d || 0; d = c.style.pixelLeft + "px"; c.style.left = e } return d } return z(this, function (c, d) {
            if ("string" === typeof a) { var e = {}; e[a] = b; a = e } for (var l in a) {
                e = a[l]; l = eb(l); l = Fb(l, d); "" !== e && (!isNaN(e) && 0 > "opacity|zIndex|lineHeight|zoom|fontWeight".indexOf(l)) &&
                (e += 0 > l.indexOf("Duration") ? "px" : "ms"); try { d.style[l] = e } catch (p) { }
            }
        })
    }; function Gb(a) { a = a.a[0]; var b = { left: 0, top: 0 }; if (a) { do b.left += a.offsetLeft || 0, b.top += a.offsetTop || 0, a = a.offsetParent; while (a) } return b } function Hb(a, b) { if (a) { if (a == a.window) return r.documentElement["client" + b]; a = a.documentElement || a; return a["offset" + b] } return n } y.prototype.width = function () { return Hb(this.a[0], "Width") }; y.prototype.height = function () { return Hb(this.a[0], "Height") };
    y.prototype.oa = function (a) { if (0 < arguments.length) { if (h === a) return this; a += ""; if (ha) { var b = Oa(a), c = b.length, d, e = this.a.length; return z(this, function (a, f) { if (f && 1 === f.nodeType) { f.innerHTML = ""; for (var l = 0; l < c; l++) d = b[l], d = a < e - 1 ? d.cloneNode(m) : d, f.appendChild(d) } }) } return z(this, function (b, c) { c && 1 === c.nodeType && (c.innerHTML = a) }) } var f = this.a[0]; return f && f.innerHTML }; var Ib;
    y.prototype.d = function (a) { Ib || (Ib = "textContent" in r ? "textContent" : "innerText"); if (0 < arguments.length) return h === a ? this : z(this, function (b, d) { try { d[Ib] = a } catch (e) { } }); var b = this.a[0]; return "innerText" == Ib ? b && Sizzle.zb(b) : b && b[Ib] }; y.prototype.P = function (a) { if (0 < arguments.length) return !a && 0 !== a && (a = ""), z(this, function (b, d) { d.value = a }); var b = this.a[0]; return b && b.value };
    y.prototype.b = function (a, b) { if (1 < arguments.length) return z(this, function (c, e) { e.setAttribute(a, b) }); if ("object" === typeof a) { for (var c in a) this.b(c, a[c]); return this } c = (c = (c = this.a[0]) && c.getAttributeNode(a)) && c.nodeValue; return n === c ? h : c }; function G(a, b) { for (var c = (b || "").match(/\S+/g) || [], d = c.length, e = 0, f, g = a.length; e < g; e++) for (f = 0; f < d; f++) if (-1 < (" " + a.a[e].className.replace(/\s+/g, " ") + " ").indexOf(" " + c[f] + " ")) return m; return q }
    function J(a, b) { var c = (b || "").match(/\S+/g) || [], d = c.length; return z(a, function (a, b) { var g = " " + (b.className || "") + " ", k, l; for (l = 0; l < d; l++) k = c[l], 0 > g.indexOf(" " + k + " ") && (g += k + " "); b.className = g.trim() }) }
    y.prototype.e = function (a) { var b = (a || "").match(/\S+/g) || [], c = b.length, d = 1 > arguments.length; this.a = hb(this.a); return z(this, function (a, f) { if (d) f.className = ""; else { var g = " " + f.className.replace(/\s+/g, " ") + " ", k = g, l, p; for (p = 0; p < c; p++) l = b[p], -1 < g.indexOf(l) && (g = g.replace(" " + l + " ", " ")); k != g && (f.className = g.trim()) } }) };
    function Jb(a, b, c) { var d = (b || "").match(/\S+/g) || [], e = d.length; a.a = hb(a.a); z(a, function (a, b) { var k = " " + b.className.replace(/\s+/g, " ") + " ", l, p, s, u; for (u = 0; u < e; u++) l = d[u], p = 0 > k.indexOf(" " + l + " "), (s = h === c ? p : c) ? p && (k += l + " ") : k = k.replace(" " + l + " ", " "); b.className = k.trim() }) }
    function Kb(a) { function b(a, b) { var f = c[a]; "undefined" == typeof f ? c[a] = b : f instanceof Array ? f.push(b) : c[a] = [f, b] } var c = {}; z(a, function (a, e) { var f = e.nodeName; if ("FORM" == f) y().extend(c, Kb(y(e.elements))); else { var g = e.name, k, l; g && /INPUT|SELECT|BUTTON|TEXTAREA/i.test(f) && (k = (e.type + "").toUpperCase(), g = g.replace(/\[\]$/, ""), l = e.value, "SELECT" === f ? (a = e.selectedIndex, 0 <= a && (f = e.options[a], b(g, f.value))) : "RADIO" === k || "CHECKBOX" === k ? e.checked && b(g, l) : b(g, l)) } }); return c }
    function Lb(a) {
        var b = m; z(a, function (a, d) {
            for (var e = y(d).find("*"), f = 0, g = e.length, k, l = q, p = {}; f < g; f++) {
                var s = e.get(f), u = s.name; if (u) {
                    var E = s.getAttribute("required"), ba = y(s), M = (s.value + "").trim(), R = s.getAttribute("label") || s.getAttribute("placeholder") || u; k = ""; if (n !== E && /CHECKBOX|RADIO/i.test(s.type)) p[u] = p[u] || { vb: ba, xb: E || "\u8bf7\u9009\u62e9\u6b64\u9879", jb: [] }, s.checked && p[u].jb.push(M); else if ("" === M) n !== E && (k = E || "\u8bf7\u586b\u5199\u6b64\u9879"); else if (E = s.getAttribute("length")) {
                        var M = M.length,
                        T = E.split(","), E = parseInt(T[0] || 0, 10), T = parseInt(T[1] || 0, 10), ca = (s.getAttribute("length_label") || "").split(","), t = ca[0] || R + "\u957f\u5ea6\u4e0d\u80fd\u5c11\u4e8e" + E + "\u4e2a\u5b57", R = ca[1] || R + "\u957f\u5ea6\u4e0d\u80fd\u591a\u4e8e" + E + "\u4e2a\u5b57"; M < E ? k = t : T && M > T && (k = R)
                    } ba.ya(k, y(d)); k && (0 > "file|radio|checkbox|button".indexOf(s.type) && !l && (s.focus(), l = m), b = q)
                }
            } for (u in p) e = p[u], 1 > e.jb.length && (e.vb.ya(e.xb, y(d)), b = q)
        }); return b
    }
    y.prototype.ya = function (a, b) { return z(this, function (c, d) { var e = d.name.replace(/[\[\]]/g, ""), f = y(d), g = b.find('.input_error[target="' + e + '"]'); a ? (1 > g.length ? (e = y('<div class="input_error" target="' + e + '">' + a + "</div>"), e.a = ob(e.a, y(d).a, 1, 1), e.length = e.a.length) : g.oa(a).c("display", "block"), J(f, "error")) : (f.e("error"), g.c("display", "none")) }) };
    function Mb(a, b) { z(a, function (a, d) { var e = y(".form_tip", d); 1 > e.length && (e = y('<div class="form_tip"></p>'), e.a = ob(e.a, y(d).a, "firstChild"), e.length = e.a.length); e.c("display", "block").b("class", "form_tip error_message").oa(b) }) } function Nb(a) { z(a, function (a, c) { y(".form_tip", c).c("display", "none") }) } var Ob = da; Ob && (!ga && 0 > fa.indexOf("PlayStation")) && (Ob = m);
    function Pb(a) { if (a instanceof Pb) return a; var b = a.changedTouches, b = b && 0 < b.length ? b[0] : a; this.event = a; this.C = b; this.target = a.target || a.srcElement; this.type = a.type; return this } Pb.prototype = { event: n, C: n, target: n, type: n, Ya: q, currentTarget: n, preventDefault: function () { var a = this.event; a.preventDefault ? a.preventDefault() : a.returnValue = q }, stopPropagation: function () { var a = this.event; this.Ya = m; a.stopPropagation && a.stopPropagation() } };
    var sb = {}, Qb = "|click|mouseover|mouseout|mousemove|focus|blur|focusin|focusout|touchstart|touchmove|touchend|touchcancel|webkitanimationstart|webkittransitionstart|webkitanimationend|webkittransitionend" + ("onsubmit" in r ? "|submit" : ""), Rb = n, Sb = { focus: "focusin", blur: "focusout" }, Tb = r.addEventListener ? function (a, b, c, d) { b.addEventListener(a, c, d) } : function (a, b, c) { b.attachEvent("on" + a, function () { c.apply(b, arguments) }) };
    function Ub(a) { a = new Pb(a); var b = a.type, c = this == this.window ? this : a.target; if ("click" === b && Ob && !a.C.Za && !("INPUT" == c.nodeName && "file" == c.type) && "external" != c.getAttribute("rel")) a.preventDefault(); else for (; c;) { var d = (sb[c.__ruid || "0"] || {})[b] || [], e = m, f = (sb["t" + c.nodeName] || {})[b]; f && (d = d.concat(f)); for (var f = 0, g = d.length; f < g; f++) { a.currentTarget = c; var k = d[f].apply(c, [a]); q === k && (e = k) } q === e && (a.preventDefault(), a.stopPropagation()); if (m === a.Ya) break; c = c.parentNode } }
    function L(a, b, c) { if ("object" === typeof b) { for (var d in b) L(a, d, b[d]); return a } return z(a, function (a, d) { var g = lb(d), k = b, l = g, g = d, p = sb[l] || (sb[l] = {}), s = q; n === Rb && ("onfocusin" in r ? Rb = Sb : Rb = {}); k = Rb[k] || k; k in p || (s = m, -1 < Qb.indexOf(k.toLowerCase()) && (g != r && g != g.window) && (g = r, l = lb(g), l = sb[l] || (sb[l] = {}), k in l ? s = q : l[k] = [])); s && Tb(k, g, Ub, -1 < "|focus|blur|".indexOf(k)); (p[k] || (p[k] = [])).push(c) }) }
    y.prototype.g = r.createEventObject ? function (a) { return z(this, function (b, c) { if (a in c) c[a]() }) } : function (a) { var b = r.createEvent("MouseEvents"); b.initEvent(a, m, m); b.Za = m; return z(this, function (c, d) { if (a in d) d[a](); else d.dispatchEvent && d.dispatchEvent(b) }) };
    var P = {
        Ka: "active", aa: q, rb: da ? 200 : 0, Xa: "__RR_EVENT_INITED__", Bb: function () { if (!w[P.Xa]) { var a = { wa: pa, va: sa, ua: ta }, b; for (b in a) Tb(a[b], r, P[b], q); Tb("touchcancel", r, P.K, q); Ob && Tb("click", r, Ub, q); w[P.Xa] = m } }, wa: function (a) { a = new Pb(a); var b = a.C; a = a.target; P.Na(); P.aa = m; P.Qa = a; P.H = [b.screenX * ua, b.screenY * ua]; for (P.za = []; a;) b = lb(a), ((sb[b] || {}).click || -1 < ["A", "INPUT", "BUTTON"].indexOf(a.nodeName)) && P.za.push(J(y(a), P.Ka)), a = a.parentNode }, va: function (a) {
            var b = P; b.aa && (a = new Pb(a), a = a.C, Math.pow(Math.pow(a.screenX *
            ua - b.H[0], 2) + Math.pow(a.screenY * ua - b.H[1], 2), 0.5) > oa && b.K())
        }, ua: function () { if (P.aa) { var a = P.Qa; P.K(); if (Ob && !("external" == a.getAttribute("rel") || "INPUT" == a.nodeName && "file" == a.type)) { var b = r.createEvent("MouseEvents"); b.initEvent("click", m, m); b.Za = m; a.dispatchEvent(b) } } }, K: function () { P.aa = q; P.Qa = n; setTimeout(P.Na, P.rb) }, Na: function () { var a = P.za, b = P.Ka; if (a) { for (var c = 0, d = a.length; c < d; c++) a[c].e(b); P.za = n } }
    }; P.Bb(); y.prototype.click = function (a) { return 0 < arguments.length ? L(this, "click", a) : this.g("click") };
    y.prototype.focus = function (a) { return 0 < arguments.length ? L(this, "focus", a) : this.g("focus") }; y.prototype.submit = function (a) { return 0 < arguments.length ? L(this, "submit", a) : this.g("submit") }; y.prototype.error = function (a) { return 0 < arguments.length ? L(this, "error", a) : this.g("error") }; function Vb() { } var Wb = "undefined" !== typeof FormData, Xb = n;
    function Yb(a, b) { var c = b, d = {}; "string" == typeof a ? d.url = a : "object" == typeof a && (c = a, d.url = c.url); c = c || {}; d.xa = c.xa || n; d.la = c.la || Vb; d.sb = c.sb || Vb; d.Pa = c.Pa || c.Ub || Vb; d.Ta = c.Ta || c.error || Vb; d.ja = c.ja || c.complete || Vb; d.ib = c.ib || n; d.pb = !!c.pb; d.dataType = (c.dataType || "json").toLowerCase(); d.data = c.data || {}; d.timeout = c.timeout || 0; d.type = (c.type || "GET").toUpperCase(); this.options = d; return this }
    Yb.prototype = {
        R: q, get: function (a) { this.options.type = "GET"; a && (this.options.url = a); return this.send() }, abort: function () { this.R && (this.Ca && this.Ca.abort(), this.R = q); return this }, send: function () {
            var a = this.Ca || (w.XMLHttpRequest ? new XMLHttpRequest : q); if (a) {
                this.abort(); this.Ca = a; this.qa = q; var b = this, c = this.options, d = function () {
                    if (b && !(m === b.qa || m == b.Aa)) {
                        var d = a.responseText; b.responseText = d; a.onreadystatechange = Vb; b.R = q; d ? "json" == c.dataType ? d && (responseData = Zb(d)) ? (b.ic = responseData, $b(b, responseData,
                        a.status)) : ac(b, "parsererror") : $b(b, d, a.status) : ac(b, "parsererror"); b.qa = m; b = n
                    }
                }; a.onerror = function () { b.R = q; ac(b, "offline") }; a.onload = d; c.xa && (a.onprogress = c.xa); a.onreadystatechange = function () { bc(b); 4 === this.readyState && 0 !== this.status && d() }
            } else return ac(this, "error"), this; if (Xb) for (var e = db(c), f = 0, g = Xb.length; f < g; f++) Xb[f](c, e, this); if (q !== c.la(this, c)) {
                var g = c.data, e = "string" == typeof g ? g : gb(g), f = c.url, k = q; Wb && m === g instanceof FormData ? (e = g, k = m) : e = "string" == typeof g ? g : gb(g); "GET" == c.type && !k ?
                (g = "", 0 < e.length && (g = -1 < f.indexOf("?") ? "&" : "?"), a.open("get", f + g + e, m)) : (a.open("post", f, m), k ? "upload" in a && (a.upload.onprogress = c.ib) : a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")); a.setRequestHeader("Accept", "*/*"); if (f = c.headers) for (var l in f) a.setRequestHeader(l, f[l]); this.Aa = q; a.send(e); this.R = m
            } return this
        }
    }; function ac(a, b) { a.options.Ta.apply(a, [a, b]); a.options.ja.apply(a, [a, b]) } function $b(a, b, c) { a.options.Pa.apply(a, [b, c, a]); a.options.ja.apply(a, [a, "success"]) }
    function bc(a) { var b = a.options; b.timeout && (a.r && (clearTimeout(a.r), a.r = n), a.r = setTimeout(function () { m === a.Aa || m === a.qa || (a.abort(), a.Aa = m, ac(a, "timeout")) }.bind({ r: a.r }), 1E3 * b.timeout)) } function Zb(a) { if ("" !== a) try { return JSON.parse(a) } catch (b) { try { return eval("(" + a + ")") } catch (c) { console.log("JSON.parse(eval) failed!") } } return n } function cc(a) { (new Yb(a, h)).send() } var dc;
    function ec(a, b) {
        b.attributes = Ya({ data: b.url, type: "application/x-shockwave-flash" }, b.attributes || {}); b = Ya({ url: "", width: n, height: n, ma: n, U: {}, onload: n }, b || {}); b.U.movie = b.url; var c = ["<object"]; ha && (b.attributes.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"); for (var d in b.attributes) c.push(" " + d + '="' + b.attributes[d] + '"'); c.push(">"); b.ma && (b.U.flashvars = gb(b.ma)); for (d in b.U) c.push('<param name="' + d + '" value="' + b.U[d] + '"></param>'); c.push("</object>"); var c = c.join(""), e = y(c).get(0), f = []; z(a,
        function (a, c) { var d = e.cloneNode(m); c.parentNode && c.parentNode.replaceChild(d, c); f.push(d); b.onload && (d.r = setInterval(function () { var a = 0; try { a = d.PercentLoaded() } catch (c) { } 100 <= a && (clearInterval(d.r), d.r = n, b.onload.call(d)) }, 10)) }); e = n; a.a = f; return a
    } function fc(a) { a = Math.round(a); isNaN(a) && (a = 0); var b = Math.floor(a / 60); a %= 60; 10 > a && (a = "0" + a); if (60 > b) return 10 > b && (b = "0" + b), b + ":" + a; var c = Math.floor(b / 60), b = b % 60; 10 > b && (b = "0" + b); 10 > c && (c = "0" + c); return c + ":" + b + ":" + a }
    var gc = { onReady: function (a) { (a = gc.Ma[a]) && a() }, onEvent: function (a, b) { var c = gc.Sa[a]; c && c[b] && c[b]() }, onError: function (a, b) { var c = gc.Ra[a]; c && c(b) }, Ma: {}, Sa: {}, Ra: {} };
    function hc(a, b) {
        b = Ya({ p: q, autoplay: q, loop: q, muted: q }, b); window.videojs = window.videojs || {}; window.videojs.Flash = gc; var c = "player_" + lb(a.get(0)); gc.Ma[c] = this.bb.bind(this); gc.Sa[c] = { play: b.S, playing: this.kb.bind(this), pause: this.B.bind(this), ended: this.m.bind(this), durationchange: this.q.bind(this), onProgress: this.w.bind(this), loadstart: b.D, rtmpretry: b.D, seeking: b.D }; gc.Ra[c] = b.Gb; this.o = []; this.options = b; this.d = ec(qb(y("<i>"), a), {
            url: b.Lb, ma: {
                readyFunction: "videojs.Flash.onReady", eventProxyFunction: "videojs.Flash.onEvent",
                errorEventProxyFunction: "videojs.Flash.onError", autoplay: b.autoplay, preload: m, loop: b.loop, muted: b.muted
            }, attributes: { id: c, name: c }, U: { menu: "false", allowFullscreen: "true", allowScriptAccess: "always", allowNetworking: "all", bgcolor: "#000000", quality: "high", wmode: "opaque" }
        }).get(0); return this
    }
    hc.prototype = {
        bb: function () { if (this.d.vjs_getProperty) { this.g = m; for (var a = 0, b = this.o.length; a < b; a++) this.o[a].call(this) } else setTimeout(this.bb.bind(this), 50) }, gb: aa(q), l: function () { return this.g ? !rc(this, "paused") : q }, kb: function () { this.r = setInterval(this.q.bind(this), 250) }, B: function () { this.r && clearInterval(this.r); this.options.B && this.options.B.call(this) }, m: function () { this.B(); this.options.m && this.options.m.call(this) }, w: function () {
            var a = rc(this, "buffered"); 0 < a.length && (a = a[0][1]); this.buffered =
            a; this.total = rc(this, "duration"); this.options.w && this.options.w.call(this)
        }, q: function () { this.duration = rc(this, "duration"); this.currentTime = rc(this, "currentTime"); this.options.q && this.options.q.call(this); this.w() }, play: function (a) {
            if (this.g) {
                if (a && this.src !== a) if (this.src = a, "string" == typeof a) this.d.vjs_src(a); else if (Xa(a)) if (this.options.p = !!a.living, this.options.p) { var b = a.rtmp.source; sc(this, "rtmpConnection", a.rtmp.server); sc(this, "rtmpStream", b) } else this.d.vjs_src(a); if (!this.l()) {
                    var c = this;
                    this.d.vjs_play()
                }
            } else c = this, this.o.push(function () { c.play(a) })
        }, pause: function () { this.g && this.d.vjs_pause() }, Ea: function (a) { this.g && sc(this, "currentTime", a) }, Da: aa(q)
    }; function sc(a, b, c) { a.d.vjs_setProperty(b, c) } function rc(a, b) { return a.d.vjs_getProperty(b) }
    function tc(a, b) { this.options = b = Ya({ p: q }, b); this.d = L(qb(y('<video webkit-playsinline="isiPhoneShowPlaysinline">'), a), { play: b.S, pause: b.B, playing: b.S, timeupdate: this.q.bind(this), progress: this.w.bind(this), waiting: b.D, seeking: b.D, ended: b.m }).get(0); return this }
    tc.prototype = {
        l: function () { return !this.d.paused }, gb: aa(m), w: function () { var a = this.d.buffered; try { a = a.end(0) } catch (b) { } this.buffered = a; this.total = this.d.duration; this.options.w && this.options.w.call(this) }, q: function () { this.duration = this.d.duration; this.currentTime = this.d.currentTime; this.options.q && this.options.q.call(this) }, play: function (a) { if (a && this.src !== a) { this.src = a; var b; "string" == typeof a ? b = this.src : Xa(a) && (this.options.p = !!a.living, b = a.hls || a.m3u8 || a.mp4); b && (this.d.src = b) } this.l() || this.d.play() },
        pause: function () { this.d.pause() }, Ea: function (a) { this.d.currentTime = a }, Da: function () { this.l() && (this.d.webkitEnterFullscreen && this.d.webkitEnterFullscreen(), this.d.mozRequestFullScreen && this.d.mozRequestFullScreen()) }
    }; function uc() { if (!dc) { var a = r.createElement("video"), b = document.createElement("track"); b.kind = "captions"; a.appendChild(b); dc = a } return dc } function vc() { var a = uc(), b = m; try { a.volume = 0.5 } catch (c) { b = q } vc = (b = b && !!a.canPlayType) ? aa(m) : aa(q); return b }
    function wc(a) { if (vc()) { var b = uc(), c = ""; try { c = b.canPlayType(a) } catch (d) { } return "" != c } return q }
    function xc(a, b) {
        var c = y(a); this.options = Ya({ ab: n }, b || {}); if (this.p = G(c, "player_living")) J(c, "player_living"), this.options.autoplay = m; var d = this; L(c.click(function () { d.play() }), "mousemove", this.P.bind(this)); this.f = c; if (c = c.b("src")) this.src = c; this.o = this.f.find(".current_time"); this.O = this.f.find(".played"); this.Wa = this.f.find(".buffered"); this.d = this.f.find(".duration"); this.duration = this.d.b("duration") || 0; this.d.d(" / " + fc(this.duration)); this.f.find(".button_play").click(this.Db.bind(this));
        this.Ab = this.f.find(".fullscreen").click(this.Ua.bind(this)); this.options.autoplay && setTimeout(function () { d.play() }, 0); return this
    }
    xc.prototype = {
        a: n, P: function () { var a = this; a.a && (this.f.e("controls_hidden"), this.g && clearTimeout(this.g), this.g = setTimeout(function () { a.a.l() && J(a.f, "controls_hidden") }, 3500)) }, S: function () { J(this.f, "player_playing").e("player_init player_loading"); var a = this; this.g = setTimeout(function () { a.a.l() && J(a.f, "controls_hidden") }, 3500) }, B: function () { this.f.e("player_playing controls_hidden") }, q: function () {
            if (0 < this.a.duration) {
                var a = 100 * (this.a.currentTime / this.a.duration); if (100 <= a) return this.m(), q; this.O.c("width",
                a + "%"); this.o.d(fc(this.a.currentTime)); this.d.d(" / " + fc(this.a.duration))
            }
        }, Gb: function () { }, m: function () { this.a.pause(); this.a.Ea(0); this.O.c("width", "0"); this.o.d("00:00"); var a = this; setTimeout(function () { J(a.f.e("player_loading"), "player_init") }, 0) }, D: function () { J(this.f, "player_loading").e("player_init") }, pause: function () { this.a.pause() }, play: function (a, b) {
            0 < arguments.length && a !== this.src && (this.src = a, Xa(a) && (this.p = !!a.living, Jb(this.f, "player_living", this.p))); if (!this.a && this.src) {
                var c = this.p ||
                a && a.match(/\.m3u8$/i), d = "flash"; if (c && (wc("application/x-mpegURL") || wc("application/vnd.apple.mpegURL")) || !c && wc("video/mp4")) d = "html5"; var c = { Lb: this.f.b("player"), p: this.p, S: this.S.bind(this), B: this.B.bind(this), m: this.m.bind(this), q: this.q.bind(this), w: this.Eb.bind(this), D: this.D.bind(this) }, e = this.f.find(".video"); "flash" == d ? this.a = new hc(e, c) : this.a = this.a = new tc(e, c); Jb(this.Ab, "hidden", !this.a.gb())
            } if (this.a && this.a.l()) this.P(); else {
                if (!b && this.options.ab && q === this.options.ab.call(this)) return q;
                this.src && this.a.play(this.src)
            } return q
        }, Db: function () { this.a.l() ? this.a.pause() : this.a.play(); return q }, Eb: function () { var a = this.a.total; 0 < a && this.Wa.c({ width: 100 * (this.a.buffered / a) + "%" }) }, Ua: function () { this.a.Da(); return q }
    }; y.prototype.O = function () { z(this, function (a, b) { var c = y(b), d = c.data("player"); d || (d = new xc(b, h), c.data("player", d)) }) };
    function yc() { var a = document.createElement("div"), b = ["Webkit", "Moz", "Ms", "O"], c, d = q; if ("transition" in a.style) d = m; else for (c in b) if (b[c] + "Transition" in a.style) { d = m; break } yc = d ? aa(m) : aa(q); return d } var x = parseFloat(window.devicePixelRatio) || 1, zc = window.isWeb; function Ac(a) { z(y(a || document.body), function (a, c) { var d = y("*[img-src]", c), e, f = d.length; for (e = 0; e < f; e++) new Bc(d.j(e)); d = y("*[img-bg-src]", c); e; f = d.length; for (e = 0; e < f; e++) new Cc(d.j(e)) }) } y().o(function () { setTimeout(Ac, 100) });
    function Bc(a) { if (!G(a, "_loaded")) { J(a, "_loaded"); var b; 1 < x && (b = a.b("img-src-2x")); if (zc) { var c = a.b("img-src-web"); c && (b = c) } b || (b = a.b("img-src")); a.append('<img src="' + b + '">') } }
    function Cc(a) { if (!G(a, "_loaded")) { J(a, "_loaded"); var b; 1 < x && (b = a.b("img-bg-src-2x")); if (zc) { var c = a.b("img-bg-src-web"); c && (b = c) } b || (b = a.b("img-bg-src")); this.Q = a; c = a.b("img-bg-size"); !("backgroundSize" in document.body.style) && c ? (this.pa = c = new Image, c.onload = this.onload.bind(this), c.src = b || a.b("img-bg-url")) : b && a.c("background-image", "url(" + b + ")") } }
    Cc.prototype = {
        onload: function () { var a = this.pa; this.width = a.width; this.height = a.height; this.Q.Nb(J(y(a), "bg_cover_image")); this.La = this.Q.b("img-bg-size") || "cover"; this.backgroundPosition = this.Q.b("img-bg-position") || "center"; L(y(w), "resize", this.G.bind(this)); this.G() }, G: function () {
            var a = this.Q.width(), b = this.Q.height(), c = y(this.pa); if (0 < a || 0 < b) if ("width" !== this.La && this.width / this.height >= a / b || "height" === this.La) {
                var d = b, e = this.width * d / this.height; c.c({
                    "margin-top": "auto", "margin-left": (a - e) / ("center" ===
                    this.backgroundPosition ? 2 : 1), width: e, height: d
                })
            } else e = a, d = this.height * e / this.width, c.c({ "margin-top": (b - d) / 2, "margin-left": "auto", width: e, height: d })
        }
    };
    function Dc(a) { a = y(a); var b = a.find(".image_page_item"); this.I = J(b.j(0), "image_item_c"); this.n = 0; this.ra = b.length; this.ga = b; this.lb = a.find(".scroller_wrap .image_item").click(this.na.bind(this)); 1 < this.ra && (this.Ha = J(a.find(".slider_handle_left").click(this.Rb.bind(this)), "slider_handle_show"), this.Ia = J(a.find(".slider_handle_right").click(this.Qb.bind(this)), "slider_handle_show")); Ec(this) }
    Dc.prototype = {
        Rb: function () { 0 < this.n && (J(this.I.e("flip_left"), "flip_right").e("image_item_c image_item_c_flip_in"), this.I = J(this.ga.j(--this.n).e("flip_left flip_right"), "image_item_c image_item_c_flip_in"), this.Ia.e("disabled"), Jb(this.Ha, "disabled", 0 == this.n), Ec(this)) }, Qb: function () {
            this.n < this.ra - 1 && (J(this.I.e("flip_right"), "flip_left").e("image_item_c image_item_c_flip_in"), this.I = J(this.ga.j(++this.n).e("flip_left flip_right"), "image_item_c"), this.Ha.e("disabled"), Jb(this.Ia, "disabled", this.n >=
            this.ra - 1), Ec(this))
        }, na: function (a) { a = y(a.currentTarget); a = parseInt(a.b("index")); this.n !== a && (J(this.I.e("flip_left flip_right"), a < this.n ? "flip_right" : "flip_left").e("image_item_c image_item_c_flip_in"), this.I = J(this.ga.j(a).e("flip_left flip_right"), "image_item_c" + (a < this.n ? " image_item_c_flip_in" : "")), this.n = a, Ec(this, m)) }
    };
    function Ec(a, b) {
        a.fa && a.fa.e("image_item_c"); a.fa = J(a.lb.j(a.n), "image_item_c"); if (!b) {
            var c = a.fa, d = c.parent(); if (0 != d.length) {
                var e = d.get(0); paddingRight = paddingLeft = e.offsetLeft; toX = -(c.get(0).offsetLeft - paddingLeft); lastCell = e.lastElementChild || e.lastChild; scrollerWidth = lastCell.offsetLeft + lastCell.offsetWidth + paddingLeft + paddingRight; windowWidth = d.parent().width(); maxX = scrollerWidth - windowWidth; d.b("startX"); e = e.firstElementChild || e.firstChild; do if (0 < e.offsetLeft + e.offsetWidth + toX) break; while (e =
                e.nextElementSibling || e.nextSibling); d.data("currentElement", e); -toX < windowWidth && -toX + c.width() < windowWidth || (c = {}, c[V("Transform")] = "translate3d(" + toX + "px,0,0)", c[V("TransitionDuration")] = "800ms", d.b("startX", toX).c(c))
            }
        }
    }
    var W = {
        Ja: function (a, b, c, d) { return c * a / d + b }, Zb: { u: function (a, b, c, d) { return c * (a /= d) * a + b }, i: function (a, b, c, d) { return -c * (a /= d) * (a - 2) + b }, h: function (a, b, c, d) { return 1 > (a /= d / 2) ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b } }, X: { u: function (a, b, c, d) { return c * (a /= d) * a * a + b }, i: function (a, b, c, d) { return c * ((a = a / d - 1) * a * a + 1) + b }, h: function (a, b, c, d) { return 1 > (a /= d / 2) ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b } }, $b: {
            u: function (a, b, c, d) { return c * (a /= d) * a * a * a + b }, i: function (a, b, c, d) { return -c * ((a = a / d - 1) * a * a * a - 1) + b }, h: function (a, b, c, d) {
                return 1 >
                (a /= d / 2) ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b
            }
        }, ac: { u: function (a, b, c, d) { return c * (a /= d) * a * a * a * a + b }, i: function (a, b, c, d) { return c * ((a = a / d - 1) * a * a * a * a + 1) + b }, h: function (a, b, c, d) { return 1 > (a /= d / 2) ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b } }, mb: { u: function (a, b, c, d) { return -c * Math.cos(a / d * (Math.PI / 2)) + c + b }, i: function (a, b, c, d) { return c * Math.sin(a / d * (Math.PI / 2)) + b }, h: function (a, b, c, d) { return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b } }, Yb: {
            u: function (a, b, c, d) { return 0 == a ? b : c * Math.pow(2, 10 * (a / d - 1)) + b }, i: function (a, b, c,
            d) { return a == d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b }, h: function (a, b, c, d) { return 0 == a ? b : a == d ? b + c : 1 > (a /= d / 2) ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b }
        }, Wb: { u: function (a, b, c, d) { return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b }, i: function (a, b, c, d) { return c * Math.sqrt(1 - (a = a / d - 1) * a) + b }, h: function (a, b, c, d) { return 1 > (a /= d / 2) ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b } }, Xb: {
            u: function (a, b, c, d, e, f) {
                var g; if (0 == a) return b; if (1 == (a /= d)) return b + c; "undefined" == typeof f && (f = 0.3 * d); !e || e < Math.abs(c) ?
                (g = f / 4, e = c) : g = f / (2 * Math.PI) * Math.asin(c / e); return -(e * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - g) * 2 * Math.PI / f)) + b
            }, i: function (a, b, c, d, e, f) { var g; if (0 == a) return b; if (1 == (a /= d)) return b + c; "undefined" == typeof f && (f = 0.3 * d); !e || e < Math.abs(c) ? (e = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c / e); return e * Math.pow(2, -10 * a) * Math.sin((a * d - g) * 2 * Math.PI / f) + c + b }, h: function (a, b, c, d, e, f) {
                var g; if (0 == a) return b; if (2 == (a /= d / 2)) return b + c; "undefined" == typeof f && (f = d * 0.3 * 1.5); !e || e < Math.abs(c) ? (e = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c /
                e); return 1 > a ? -0.5 * e * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - g) * 2 * Math.PI / f) + b : 0.5 * e * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * d - g) * 2 * Math.PI / f) + c + b
            }
        }, Vb: { u: function (a, b, c, d, e) { "undefined" == typeof e && (e = 1.70158); return c * (a /= d) * a * ((e + 1) * a - e) + b }, i: function (a, b, c, d, e) { "undefined" == typeof e && (e = 1.70158); return c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b }, h: function (a, b, c, d, e) { "undefined" == typeof e && (e = 1.70158); return 1 > (a /= d / 2) ? c / 2 * a * a * (((e *= 1.525) + 1) * a - e) + b : c / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + b } }, ia: {
            u: function (a, b, c, d) {
                return c -
                W.ia.i(d - a, 0, c, d) + b
            }, i: function (a, b, c, d) { return (a /= d) < 1 / 2.75 ? c * 7.5625 * a * a + b : a < 2 / 2.75 ? c * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b : a < 2.5 / 2.75 ? c * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b }, h: function (a, b, c, d) { return a < d / 2 ? 0.5 * W.ia.u(2 * a, 0, c, d) + b : 0.5 * W.ia.i(2 * a - d, 0, c, d) + 0.5 * c + b }
        }
    }; Math.jc = W;
    function Fc(a) { for (var b = w.requestAnimationFrame, c = ["webkit", "moz", "ms", "o"], d, e = 0, f = c.length, e = 0; e < f && !(d = c[e], b = w[d + "RequestAnimationFrame"]) ; e++); if (!b) var g = 0, b = function (a) { var b = +new Date, c = Math.max(0, 16 - (b - g)), d = setTimeout(function () { a(b + c) }, c); g = b + c; return d }; Fc = function (a) { return b.call(w, a) }; return b.call(w, a) } var Gc = new Date;
    function V(a, b) { if (h === Ra) { var c = document.createElement("div"), d = ["Webkit", "Moz", "Ms", "O"], e; if ("transform" in c.style) Ra = ""; else for (e in d) if (d[e] + "Transform" in c.style) { Ra = d[e]; break } } return Ra ? (b ? Ra.toLowerCase() : Ra) + a : b ? a.toLowerCase() : a.replace(/^(.)/, function (a, b) { return b ? b.toLowerCase() : "" }) } var Hc = q, Ic = [], Jc = {}; function Kc(a) { var b = lb(a.element); Jc[b] = a; Hc ? a.update(new Date - Gc) : Lc() }
    function Lc() { Hc = m; var a = 0, b, c, d = new Date - Gc; for (uid in Jc) b = Jc[uid], c = b.update(d), q === c ? (c = b.options.m, delete Jc[uid], c && c.call(b.element, b)) : a++; b = 0; for (d = Ic.length; b < d; b++) Ic[b](); 0 < a ? Fc(Lc) : Hc = q } var Mc = { x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scaleX: 1, scaleY: 1, scaleZ: 1 };
    function Nc(a, b, c, d, e) { e = e || {}; e.A = e.A || W.Ja; this.M = e.M || 0; this.V = e.V || 0; this.element = a; Xa(a) || (this.N = y(a)); this.duration = b; this.s = 0; this.sa = new Date - Gc; this.startTime = e.ec || 0; this.wb = this.startTime + this.M + this.duration; this.debug = e.debug; this.options = e; c || (c = (this.N ? this.N.data("tween_data") : a) || {}, d.transform && !c.transform && (c.transform = db(Mc))); this.$ = c; this.Ba = d; this.play(); this.update(this.sa); return this }
    Nc.prototype = {
        update: function (a) {
            if (!this.l) return m; this.s += a - this.sa; this.sa = a; if (this.s < this.startTime) return m; this.Cb || (this.Cb = m, this.options.Jb && this.options.Jb.call(this.element, this)); if (this.s < this.startTime + this.M) return m; if (this.s < this.wb) Oc(this), this.options.T && this.options.T.call(this.element, this); else {
                if (0 === this.V) return Oc(this), this.l = q; 0 === this.M ? (this.s = this.s - this.duration - this.M, Oc(this)) : (Oc(this), this.s = this.s - this.duration - this.M); this.options.T && this.options.T.call(this.element,
                this); this.options.Ib && this.options.Ib.call(this.element, this); 0 < this.V && this.V--
            } return m
        }, play: function () { this.element && (this.l = m) }, pause: function () { this.l = q }
    }; function Pc(a, b, c) { return a.options.A(a.s - a.startTime, b, c - b, a.duration) }
    function Oc(a) {
        var b, c, d, e, f, g = {}, k; for (k in a.Ba) if (d = a.Ba[k], "style" == k) { b = {}; for (c in d) b[c] = Pc(a, a.$[k][c], d[c]); g.style = b } else if ("transform" == k) { f = {}; for (e in Mc) { var l = e in a.$[k] ? a.$[k][e] : Mc[e]; f[e] = Pc(a, l, e in d ? d[e] : l) } b = b || {}; b[V() + "Transform"] = "translate3D(" + f.x + "px," + f.y + "px," + f.z + "px) rotateX(" + f.rotateX + "deg)  rotateY(" + f.rotateY + "deg)  rotateZ(" + f.rotateZ + "deg)  scale3D(" + f.scaleX + "," + f.scaleY + "," + f.scaleZ + ") "; g.transform = f } else d = Pc(a, a.$[k], d), a.element[k] = d; b && a.N.c(b); a.N && a.N.data("tween_data",
        g)
    } y.prototype.Ba = function (a, b, c) { return z(this, function (d, e) { Kc(new Nc(e, a, n, b, c)) }) }; function Qc(a, b, c, d, e) { z(a, function (a, g) { Kc(new Nc(g, b, c, d, e)) }) }
    function Rc(a) {
        var b = "onwheel" in a ? "wheel" : r.onmousewheel !== h ? "mousewheel" : "DOMMouseScroll"; this.fb = yc(); this.v = L(L(y(a), b, this.Hb.bind(this)), pa, this.wa.bind(this)); this.ha = L(this.v.find(".vscroller"), V("TransitionEnd", m), this.Kb.bind(this)); L(L(L(y(r), ta, this.ua.bind(this)), sa, this.va.bind(this)), "touchcancel", this.K.bind(this)); this.className = this.v.b("class").replace(/\s*scroller_page_[0-9]+/, ""); this.t = parseInt(this.v.b("page") || 1); this.hb = this.v.find(".banner_item").length; this.v.find(".scroller_page b").click(this.na.bind(this));
        this.fb || L(y(w), "resize", this.G.bind(this))
    }
    Rc.prototype = {
        J: q, ba: q, ca: q, H: [0, 0], na: function (a) { a = y(a.currentTarget).b("index"); this.scrollTo(a); this.v.b("class", "banner_wrap vscroll_wrap vscroller_page_" + a) }, G: function () { this.scrollTo(this.t, m) }, scrollTo: function (a, b) { if (!this.fb) { var c = this, d = this.v.height() * (1 - a), e = parseInt(this.ha.c("top")); isNaN(e) && (e = 0); b ? this.ha.c("top", d) : Qc(this.ha, 700, { style: { top: e } }, { style: { top: d } }, { A: W.X.h, m: function () { c.J = q } }) } }, Kb: function () { this.J = q }, Hb: function (a) {
            if (this.J) return q; var b = a.event; a = b.wheelDelta;
            b = b.deltaY; a ? -100 > a ? Sc(this) : 100 < a && Tc(this) : b && (3 < b ? Sc(this) : -3 > b && Tc(this)); return q
        }, wa: function (a) { if (!this.J) { var b = a.C; this.ba = m; this.startTime = new Date; this.H = [b.clientX, b.clientY]; this.da = this.H[1] } a.preventDefault() }, va: function (a) { if (q !== this.ba) { var b = a.C, c = b.clientX - this.H[0], b = b.clientY - this.H[1]; this.ta = this.da + b; if (!this.ca) { if (Math.abs(c) > Math.abs(b)) { this.ba = q; return } this.ca = m } a.preventDefault() } }, ua: function (a) {
            this.ca && (0.2 < Math.abs(this.ta - this.da) / (new Date - this.startTime) && (this.ta <
            this.da ? Sc(this) : this.ta > this.da && Tc(this)), a.preventDefault(), this.K())
        }, K: function () { this.ba = this.ca = q }
    }; function Tc(a) { 1 < a.t && (a.t--, a.scrollTo(a.t), a.v.b("class", a.className + " vscroller_page_" + a.t), a.J = m) } function Sc(a) { a.t < a.hb && (a.t++, a.scrollTo(a.t), a.v.b("class", a.className + " vscroller_page_" + a.t + (a.t == a.hb ? " vscroller_page_last" : "")), a.J = m) }
    function Uc(a) { this.f = a = y(a); this.cb = parseInt(a.b("percent")); this.Ga = qb(y("<canvas></canvas>"), this.f); (this.Y = this.Ga.get(0)) ? (this.Oa = this.Y.getContext("2d"), this.G(), L(y(w), "resize", this.G.bind(this))) : qb(y('<img src="' + this.f.b("placeholder") + '">'), this.f) }
    Uc.prototype = {
        G: function () {
            this.width = this.f.width(); this.f.get(0); this.f.parent().height(); this.height = this.f.height(); this.Ga.c({ width: this.width, height: this.height }); this.Y.width = this.width * x; this.Y.height = this.height * x; this.Oa.scale(x, x); var a = this.width / 2, b = this.height / 2, c = 0.1 * this.height, d = Math.min(a, b) - c, e = this.Oa; e.clearRect(0, 0, this.width, this.height); e.lineWidth = d; e.beginPath(); e.strokeStyle = "#ef9a38"; e.arc(a, b, d / 2, 0, 2 * Math.PI, q); e.stroke(); e.beginPath(); e.strokeStyle = "#80bf43"; e.arc(a,
            b, d / 2, -0.5 * Math.PI, -0.5 * Math.PI + 2 * Math.PI * this.cb / 100, q); e.stroke(); e.fillStyle = "#ffffff"; e.font = "18px Arial"; e.textAlign = "center"; e.fillText(this.cb + "%", a, b + 22); a = this.width - c - 60; c = this.height - c; remarkHeight = remarkWidth = 16; e.lineCap = "square"; e.fillStyle = "#80bf43"; e.strokeStyle = "#f1f0ea"; e.lineWidth = 2; e.beginPath(); e.rect(a, c - remarkHeight - 24 + 3, remarkWidth, remarkHeight); e.fill(); e.stroke(); e.beginPath(); e.fillStyle = "#ef9a38"; e.rect(a, c - remarkHeight + 3, remarkWidth, remarkHeight); e.fill(); e.stroke(); e.fillStyle =
            "#333333"; e.font = "13px Arial"; e.textAlign = "left"; e.fillText("\u5408\u683c", a + 20, c - 24); e.fillText("\u4e0d\u5408\u683c", a + 20, c)
        }
    }; var X = 0, Vc = [0, 0], Wc = 0, Xc = 0, Yc = 0, Zc = q; function $c() { var a; a = a || r; z(y(".scroller", a), function (a, c) { var d = L(L(y(c), pa, ad), V("TransitionEnd", m), bd); $elChildren = d.children(); pageCount = $elChildren.length; d.b("page_count", pageCount).b("page", 1); cd(d) }) }
    function cd(a) { var b = a.parent(); a = a.children().$a().get(0); var c = b.width(), d = a.offsetLeft + a.offsetWidth; 0 === c && (b.c("display", "block"), c = b.width(), d = a.offsetLeft + a.offsetWidth, b.c("display", "")); showHanle = d > c; Jb(b.find(".slider_handle"), "slider_handle_show", showHanle) }
    function ad(a) {
        var b; if (a && (b = a.C, b.which && 1 < b.which)) return; a = y(this); var c = this.childElementCount || this.children.length; if ("1" != a.b("is_moving") && 0 < c) {
            Xc = 0; dd = ed = this.offsetLeft; c = this.lastElementChild || this.lastChild; X = parseInt(a.b("startX") || 0, 10); if (c) { if (!fd) { var d = parseInt(a.c("left")); isNaN(d) && (d = 0); dd = ed -= d } Xc = c.offsetLeft + c.offsetWidth + ed + dd } if (!(Xc <= this.parentNode.offsetWidth)) {
                $ = a; Zc = m; a.c(V("TransitionDuration"), "0s"); gd = ud = n; Yc = a.parent().width(); a = this.firstElementChild || this.firstChild;
                do if (c = a.offsetLeft, !ud && 0 <= c + X && (ud = a), c + a.offsetWidth + X > Yc) { gd = a; break } while (a = a.nextElementSibling || a.nextSibling); vd = 0; b && (Vc = [b.clientX, b.clientY])
            }
        }
    } function wd(a) { if (q !== Zc) { var b = a.C, c = b.clientX - Vc[0], b = b.clientY - Vc[1]; 0 < c && 0 <= X ? Wc = X + c / 2 : 0 > c && -X - c >= Xc - Yc ? Wc = -(Xc - Yc) + (c - vd) / 2 : (Wc = X + c, vd = c); !xd && Math.abs(b) > Math.abs(c) ? Zc = q : ($.b("is_moving", 1), a.preventDefault(), xd = m, yd(Wc)) } }
    function zd(a, b) {
        if (xd && $) {
            var c = 0, d = parseInt($.b("page")); $.children(); $.b("page_count"); var e = Math.abs(Wc - X), f = n; if (b || 10 < e) {
                if (Wc < X && !b || "next" == b) gd ? (c = -1 * gd.offsetLeft, f = gd, d++) : (c = -1 * ud.offsetLeft, f = ud), e = Xc - Yc, c < -e && (c = -e); else if ((Wc > X && !b || "prev" == b) && ud) { var e = ud, g = Yc - e.offsetWidth - e.offsetLeft; do if (c = -1 * e.offsetLeft, c >= g) { f = e; d--; break } while (e = e.previousElementSibling || e.previousSibling) } $.b("page", d); 0 < c && (c = 0); Jb($.parent().find(".slider_handle_left"), "disabled", 0 === c); d = $.children().$a().get(0);
                Jb($.parent().find(".slider_handle_right"), "disabled", d.offsetLeft + d.offsetWidth + c <= Yc); X != c && $.b("is_moving", 1); $.c(V("TransitionDuration"), "400ms"); yd(c); $.b("startX", c); f && $.data("currentElement", f)
            } a && (a.preventDefault(), a.stopPropagation()); Ad()
        }
    } function Ad() { Zc = xd = q } function bd() { var a = y(this), b = parseInt(a.b("page")), c = y(".scroller_page b", this.parentNode), d = a.children(); a.b("page_count"); c.e("c"); J(c.j(b - 1), "c"); d.j(b - 1); a.b("is_moving", 0) }
    function yd(a) { var b = $; if (fd) b.c(V("Transform"), "translate3d(" + a + "px,0,0)"); else { var c = parseInt(b.c("left")); isNaN(c) && (c = 0); Qc(b, 500, { style: { left: c } }, { style: { left: a } }, { A: W.X.h, m: function () { b.b("is_moving", 0) } }) } } var fd, ed, dd, $, ud, gd, vd, xd; function Bd(a, b) { var c = y(b), d = c.parent().find(".scroller"); G(c, "disabled") || "1" == d.b("is_moving") || (xd = m, ad.call(d.get(0)), zd.call(d.get(0), n, a)) }
    y().o(function () {
        fd = yc(); $c(); L(L(L(L(y(r), ta, zd), sa, wd), "touchcancel", Ad), "click", Ad); L(y(w), "resize", function () {
            z(y(".scroller"), function (a, b) {
                var c = y(b); c.b("is_moving", 0); cd(c); var d = c.data("currentElement"), e = c.parent().width(), d = d || b.firstElementChild || b.firstChild, f = b.lastElementChild || b.lastChild; c.b("startX"); b.offsetLeft + f.offsetLeft + f.offsetWidth <= e || (Xc = f.offsetLeft + f.offsetWidth + 2 * b.offsetLeft, Yc = e, d && (e = -d.offsetLeft, d = {}, f = Xc - Yc, e < -f && (e = -f), fd ? (d[V("Transform")] = "translate3d(" + e + "px,0,0)",
                d[V("TransitionDuration")] = 0) : d.left = e, c.b("startX", e).c(d)))
            })
        }); y(".banner_wrap .img_wrap").click(function (a) { if ("1" == y(".banner_wrap .scroller").b("is_moving")) return q; a.stopPropagation() }); y(".scroller_wrap .slider_handle_right").click(function () { Bd("next", this); return q }); y(".scroller_wrap .slider_handle_left").click(function () { Bd("prev", this); return q })
    });
    function Cd(a) { L(a, "mouseleave", this.W.bind(this)); L(L(a.find(".y_item"), "mouseover", this.W.bind(this)), "click", this.setItem.bind(this)); this.f = a; this.ea = n; this.Fa = a.find(".y_item").Z(); this.W(); var b = this; L(y(w), "resize", function () { b.W() }) }
    Cd.prototype = { W: function (a) { a = a ? y(a.currentTarget) : this.f; G(a, "y_item") || (a = this.Fa); this.ea && this.ea.e("c"); this.ea = J(a, "c"); var b = a.get(0); a = a.find(".y_text"); var c = a.get(0), d = this.f.width(), e = c.offsetWidth + 20; e > d && (e = d - 40, a.c("width", e - 20)); c = b.offsetLeft; b = e / -2 + b.offsetWidth; d = d - e - c; b = Math.max(-c, b); 0 > d && (b = d); a.c("left", b) }, setItem: function (a) { this.Fa = y(a.currentTarget); this.W(a) } }; var Dd;
    function Ed() { var a = y(this).parent(); G(a, "show_menu") || Fd(); Jb(a, "show_menu"); G(a, "show_menu") && J(Dd, "ui_show_menu"); return q } function Fd(a) { a && 0 < kb(y(a.target), ".drop_menu").length ? a.stopPropagation() : (y(".show_menu").e("show_menu"), Dd.e("ui_show_menu")) } y().o(function () { Dd = Dd || y(r.body); y(".show_menu_handle").click(Ed); Dd.click(Fd) }); var r = document, w = window, Gd = "";
    function Hd() { Gd = y("html").b("appid") || Gd; fb("//www.mengniu.com.cn/wx_js_sign?callback=weixinCallback&url=" + encodeURIComponent(location.href.replace(/#.*/, ""))) }
    function Id(a) { var b = w.wx; a.jsApiList = "onMenuShareTimeline onMenuShareAppMessage onMenuShareQQ onMenuShareWeibo hideMenuItems chooseImage uploadImage downloadImage previewImage".split(" "); b.config(a); b.ready(function () { b.hideMenuItems({ menuList: ["menuItem:exposeArticle", "menuItem:share:facebook"] }) }); "undefined" !== typeof WeixinJSBridge ? Jd() : r.addEventListener("WeixinJSBridgeReady", Jd) }
    function Jd() { var a = WeixinJSBridge; a.on("menu:share:appmessage", Kd); a.on("menu:share:timeline", Ld); a.on("menu:share:weibo", Md, q); a.on("menu:share:email", Nd, q); a.call("showOptionMenu") } function Od(a, b) { var c, d; for (c in b) d = b[c], d !== n && (a[c] = "object" == typeof d && !d.nodeType && !(d instanceof Array) ? RR.fc.prototype.extend({}, d) : d); return a }
    function Pd() { for (var a = r.getElementsByTagName("meta"), b = 0, c = a.length, d, e, f = {}; b < c; b++) if (d = a[b], e = d.getAttribute("property") || "", e = e.match(/^og:([^\s]+)/i)) f[e[1]] = d.getAttribute("content") || ""; a = { img_url: f.image || "", img_width: "150", img_height: "150", link: f.url || location.href, desc: (f.description || "").replace(/\s+/, " "), title: (f.title || r.getElementsByTagName("title")[0].innerHTML || "").replace(/\s+/, " "), content: (f.content || "").replace(/\s+/, " ") }; "" === a.content && (a.content = a.desc ? a.desc : a.title); return a }
    function Qd() { } function Rd() { } function Kd() { var a = Pd(); WeixinJSBridge.invoke("sendAppMessage", Od(a, {}), Qd) } function Ld() { var a = Pd(); WeixinJSBridge.invoke("shareTimeline", Od(a, { title: a.content }), Rd) } function Md() { var a = Pd(); WeixinJSBridge.invoke("shareWeibo", { img_url: a.img_url || "", url: a.link, title: a.desc, content: a.content + " " + a.link + "" }, function () { }) } function Nd() { var a = Pd(); WeixinJSBridge.invoke("sendEmail", { title: a.title, content: a.content + "\r\n" + a.link }, function () { }) }
    na && (fb("//res.wx.qq.com/open/js/jweixin-1.0.0.js", Hd), w.weixinCallback = Id); Xb || (Xb = []); Xb.push(function (a) { "json" == a.dataType && (a.headers = { Accept: "*/*", "X-AJAX": 1 }, a.data.json = 1); if ("POST" === a.type) { var b; a: { b = r.cookie.split(";"); for (var c, d = 0; d < b.length; d++) if (c = b[d].split("="), "SID" == c[0].trim()) { b = unescape(c[1]); break a } b = n } b && (a.data.session_key = encodeURIComponent(b)) } }); function Sd() { return w.pageYOffset || r.body && r.body.scrollTop || r.documentElement.scrollTop || 0 }
    y.prototype.ya = function (a, b) { return z(this, function (c, d) { var e = d.name.replace(/[\[\]]/g, ""), f = kb(y(d), ".cell"), e = b.find('.input_error[target="' + e + '"]'); a ? (0 < e.length && e.oa(a).c("display", "block"), J(f, "error")) : (f.e("error"), e.c("display", "none")) }) }; function Td(a, b) { if (!("" == b || 0 == a.length)) { str = encodeURIComponent(a + ""); for (var c = "", d = str.length, e = b.length, f, g, k = 0; k < d; k++) f = str.charCodeAt(k), g = k === d - 1 ? "" : "ghijklmnopqrstuvwxyz".charAt(f % 20), c += (f ^ b.charCodeAt(k % e)).toString(16) + g; return c } }
    function Ud(a) { var b = w.innerHeight || document.documentElement.clientHeight; a = Math.min(a, (r.body.scrollHeight || b) - b); Kc(new Nc({}, 500, { y: Sd() }, { y: a }, { T: function () { w.scrollTo(0, this.y) }, A: W.mb.i })) }
    if ("mengniu.com.cn" == location.host || "www.mengniu.com.cn" == location.host) { fb("//hm.baidu.com/hm.js?aaec298cf02873ac06b2f6f92025d8f1"); var Vd = "//stm-" + ("https:" === location.protocol ? "collect" : "cdn") + ".cn.miaozhen.com/"; w.stm_clicki("require", "heatmap", Vd + "plugins/heatmap.js"); w.stm_clicki("heatmap:on", 5); fb(Vd + "clicki.min.js") } zc = w.isWeb;
    Qa(function () {
        Dd = Dd || y(r.body); var a = yc(); J(y("html"), a ? "can_transition" : "no_transition"); if (zc) {
            var b = y(".page_wrap-about .banner_wrap"); 0 < b.length && L(L(y(".water_column a"), "mouseenter", function () { b.b("class", "banner_wrap banner_hover banner_hover_" + y(this).b("index")) }), "mouseleave", function () { b.b("class", "banner_wrap") }); var c = y(".page_wrap-duty .content_area"); 0 < c.length && (L(L(y(".page_wrap-duty .banner_item"), "mouseenter", function () { c.b("class", "content_area banner_hover banner_hover_" + y(this).b("index")) }),
            "mouseleave", function () { c.b("class", "content_area") }), L(L(y(".page_wrap-duty .banner_item .text,.page_wrap-duty .banner_item em").click(function (a) { var b = parseInt(y(this).b("index")); isNaN(b) || y(".banner_item_" + b).click(); a.preventDefault() }), "mouseenter", function () { c.b("class", "content_area banner_hover banner_hover_" + y(this).b("index")); return q }), "mouseleave", function () { c.b("class", "content_area"); return q })); if (!a) {
                y(".main_nav li").click(function () {
                    var a = y(this).find("a").b("href"); location.href =
                    a; return q
                }); var d = y(".main_nav"); if (0 < d.length) { var e = d.height(), f = y(".main_nav .nav_item"), g = Gb(d).top, a = function () { var a = r.documentElement.clientHeight; a < e + g ? (a = Math.max(a, 440), f.c("height", Math.floor((a - g) / 5)), a = "main_nav main_nav_" + 100 * Math.floor(a / 100), d.b("className", a).b("class", a)) : (f.c("height", ""), d.b("className", "main_nav").b("class", "main_nav")) }; L(y(w), "resize", a); a() }
            }
        } a = y(".more_wrap .view_more"); if (0 < a.length) {
            var k = kb(a, ".article_inner"), l = k.children(), p, s; z(l, function (a, b) {
                var c =
                y(b), d; if (G(c, "more_wrap")) J(y(c.get(0).previousSibling), "has_view_more"); else { d = c.get(0).nodeName; if (G(c, "content_title") && ("H2" == d || "H3" == d)) d = y('<div class="block_view_more_wrap"><div class="block_view_more_content"></div></div>'), d.a = ob(d.a, y(c).a, 1, 0), d.length = d.a.length, p = d, s = p.find(".block_view_more_content"), G(y(p.get(0).previousSibling), "more_wrap") && J(p, "before_view_more"); s && qb(c, s) }
            }); var l = y(".block_view_more_wrap"), u = function (a) {
                var b = a.find(".block_image").j(0), c = 0, c = 0 < b.length ? b.get(0).offsetTop +
                b.height() + 20 : 400; if (!zc || !G(b, "block_image_float_right") && !G(b, "block_image_float_left")) c += 0.3 * b.height(); a.c("height", "auto"); return c = Math.min(c, a.height(), 1.5 * a.find(".block_content").width())
            }, E = function () { z(l, function (a, b) { var c = y(b); G(c, "has_view_more") && (G(c, "show_view_more") ? c.c("height", c.find(".block_view_more_content").height()) : c.c("height", u(c))) }) }; E(); L(y(w), "resize", E); a.click(function (a) {
                var b = kb(y(this), ".more_wrap"), c = y(b.get(0).previousSibling), d = c.find(".block_view_more_content");
                Qc(c, 500, { style: { height: parseInt(c.c("height")) } }, { style: { height: d.height() } }, { A: W.X.h, m: function () { } }); J(c, "show_view_more"); J(b, "show_view_more"); a.preventDefault()
            }); k.find(".close").click(function () { var a = kb(y(this), ".more_wrap"), b = y(a.get(0).previousSibling), c = b.find(".block_view_more_content"), d = Gb(a).top, e = Sd(); Qc(b, 500, { style: { height: c.height() } }, { style: { height: u(b) } }, { A: W.X.h, T: function () { w.scrollTo(0, e + (Gb(a).top - d)) } }); b.e("show_view_more"); a.e("show_view_more"); return q })
        } var ba = y(".nav");
        y(".mobile_menu").click(function () { G(ba, "show_main_nav") ? J(ba.e("show_main_nav"), "close_main_nav") : J(ba, "show_main_nav").e("close_main_nav") }); y(".block_product .tab_item a").click(function (a) { var b = y(this); kb(b, ".block_product").b("class", "block_product show_tab_" + b.b("index")).b("className", "block_product show_tab_" + b.b("index")); a.preventDefault() }); y(".block_prize_list .tab_item").click(function (a) {
            var b = y(this), c = kb(b, ".block_prize_list"), d = b.find("b").d(); c.find(".data_title").d(d); c.find(".tab_item").e("c");
            J(b, "c"); c.b("class", "block_prize_list show_tab_" + b.b("index")).b("className", "block_prize_list show_tab_" + b.b("index")); a.preventDefault()
        }); y(".player").O(); z(y(".block_images_box"), function (a, b) { new Dc(b) }); y(".water_column em,.block_bg i").click(function (a) { var b = this.parentNode.href; b && (location.href = b); a.preventDefault() }); z(y(".vscroll_wrap"), function (a, b) { new Rc(b) }); z(y(".data_chart"), function (a, b) { new Uc(b) }); a = y(".share_weibo"); if (0 < a.length) {
            1 < x && y(".share_weixin .qrcode img").b("src",
            "/qrcode/" + encodeURIComponent(location.pathname) + "/240/"); var k = encodeURIComponent(location.href), E = encodeURIComponent(y('meta[property="og:title"]').b("content") || document.title), M = encodeURIComponent(y('meta[property="og:image"]').b("content")); a.b("href", "http://service.weibo.com/share/share.php?url=" + k + "&appkey=&title=" + E + "&pic=" + M + "&ralateUid=1653196740&searchPic=false").b("target", "_blank"); y(".share_qq").b("href", "http://connect.qq.com/widget/shareqq/index.html?url=" + k + "&title=" + E + "&pic=" + M).b("target",
            "_blank"); if (zc) { var R = y(".share_wrap"), T = y(".share_wrap_placeholder"), ca = R.parent(), a = function () { var a = Gb(T); Jb(Dd, "share_fixed", Sd() > a.top); R.c({ width: ca.width(), left: a.left }) }; L(y(w), { scroll: a, resize: a }); a() }
        } a = y(".block_17y"); 0 < a.length && new Cd(a); a = y(".page_wrap-product"); 0 < a.length && ("webkitMaskImage" in document.createElement("div").style ? J(a, "product_mask_wrap") : J(a, "product_no_mask_wrap")); L(y(".media_form"), "submit", function () {
            var a = y(this), b = a.b("action"); if (m === Lb(a)) {
                var c = Kb(a), d = y(".media_form_t").P(),
                e = a.b("cid"), d = Td(+new Date + e, d); c.k = d; cc({ type: "POST", url: b, data: c, dataType: "json", la: function () { if (G(a, "loading")) return q; Nb(a); J(a, "loading") }, Ub: function (b) { "1" == b.result ? (J(y(".contact_content_inner"), "media_form_success"), Ud(Gb(y(".contact_content_wrap")).top - 100)) : "0" == b.result && (Mb(a, b.message), Ud(Gb(a).top - 50)) }, error: function () { alert("\u62b1\u6b49\uff0c\u51fa\u9519\u4e86") }, complete: function () { a.e("loading") } })
            } return q
        }); a = y(".content_scrolling"); 0 < a.length && (qb(tb(a.find("table")).c({
            position: "absolute",
            top: "100%", width: "100%", left: "0"
        }), a), Qc(a, 8E3, { style: { top: 0 } }, { style: { top: -a.height() } }, { A: W.Ja, V: Infinity }))
    }); L(y(w), "load", function () { J(y("html"), "loaded") });
})()