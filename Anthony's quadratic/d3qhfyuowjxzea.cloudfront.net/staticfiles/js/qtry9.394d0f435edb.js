! function e(t, r, n) {
    function o(i, u) {
        if (!r[i]) {
            if (!t[i]) {
                var s = "function" == typeof require && require;
                if (!u && s) return s(i, !0);
                if (a) return a(i, !0);
                var l = new Error("Cannot find module '" + i + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var f = r[i] = {
                exports: {}
            };
            t[i][0].call(f.exports, function(e) {
                var r = t[i][1][e];
                return o(r ? r : e)
            }, f, f.exports, e, t, r, n)
        }
        return r[i].exports
    }
    for (var a = "function" == typeof require && require, i = 0; i < n.length; i++) o(n[i]);
    return o
}({
    1: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            return e.coefs
        }

        function i(e) {
            var t = it(e);
            return t.coefs
        }

        function u(e) {
            var t = it(e),
                r = t.getCIndex();
            return r
        }

        function s(e) {
            var t = it(e),
                r = t.countIndex();
            return r
        }

        function l(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = yt(Pt),
                    o = !0;
                if (r.forEach(function(e) {
                        return o = o && e instanceof Ne.default
                    }), o) {
                    var a = n[t](r);
                    return "simplify" === t ? a : ["simplify", a]
                }
                for (var i = !1, u = [], s = 0; s < r.length; s++) {
                    var f, c = r[s];
                    c instanceof Ne.default || i ? f = c : (f = l(c), i = !0), u.push(f)
                }
                var p = [t];
                return p = p.concat(u)
            }
            return e
        }

        function f(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = yt(Pt),
                    o = !0;
                if (r.forEach(function(e) {
                        return o = o && e instanceof Ne.default
                    }), o) {
                    var a = n[t](r);
                    return ["color", "blue", a]
                }
                for (var i = !1, u = [], s = 0; s < r.length; s++) {
                    var l, c = r[s];
                    c instanceof Ne.default || i ? l = c : (l = f(c), i = !0), u.push(l)
                }
                var p = [t];
                return p = p.concat(u)
            }
            return e
        }

        function c(e) {
            return it(e).jsCoefs()
        }

        function p(e) {
            return it(e).jsCoefs2()
        }

        function h(e, t, r, n) {
            var o = ot(e, t, r),
                a = pt(o),
                i = st(e),
                u = st(["color", "purple", t]),
                s = "\\text'Étape:'\\,\\text'Remplacer '\\,\\,(" + u + ")\\,\\,\\text' pour '\\,\\," + r + "\\,\\,\\text' dans '\\,\\," + i + ":";
            a.addMobMsgToRetval(s, ["Étape: Remplacer", u, "for", r, "in", i + ":"]), a.addMMsgToRetval(i);
            var l = ot(e, ["color", "purple", t], r);
            return a.addMMsgToRetval(st(l)), a.simplifyEq(o), a.solveForLinMVar(n), a
        }

        function v(e, t, r, n) {
            var o = h(e, t, r, n);
            return tt(o.toDval())
        }

        function d(e, t, r, n) {
            var o = pt(e),
                a = st(e),
                i = "\\text'Étape:'\\,\\text'Résoudre '\\,\\," + a + "\\,\\,\\text' pour '\\,\\," + r + ":";
            o.addMobMsgToRetval(i, ["Étape: Résoudre", a, "pour " + r + ":"]), o.addAnsMsgToRetval(a), o.solveForLinMVar(r);
            var u = o.eq.rightpoly.polyToExpr(),
                s = h(t, u, r, n);
            o.retval = o.retval.concat(s.retval);
            var l, f;
            if (s.eq.leftpoly.isNum()) s.eq.leftpoly.getCoef("0").getNum() == s.eq.rightpoly.getCoef("0").getNum() ? (o.addMsgToRetval("<hr>"), o.addHeadDivToRetval("Réponse:"), o.addMsgToRetval("Solutions à l'infinies.")) : (o.addMsgToRetval("<hr>"), o.addHeadDivToRetval("Réponse:"), o.addMsgToRetval("Pas de solutions."));
            else {
                if (o.eq.rightpoly.isNum()) l = o.eq.eqToExpr(), f = s.eq.eqToExpr();
                else {
                    var c = s.eq.rightpoly.polyToExpr(),
                        p = h(o.eq.eqToExpr(), c, n, r);
                    o.retval = o.retval.concat(p.retval), l = p.eq.eqToExpr(), f = s.eq.eqToExpr()
                }
                var v = "";
                v = at(l).getEqVar() < at(f).getEqVar() ? st(l) + "\\,\\,\\text' et '\\,\\," + st(f) : st(f) + "\\,\\,\\text' et '\\,\\," + st(l), o.addMsgToRetval("<hr>"), o.addHeadDivToRetval("Réponse:"), o.addMMsgToRetval(v)
            }
            return [o.retval, l, f]
        }

        function g(e, t, r, n) {
            var o = d(e, t, r, n);
            return o
        }

        function m(e) {
            var t = e.eqToExpr();
            return t
        }

        function y(e) {
            var t = it(e),
                r = t.polyToExpr();
            return r
        }

        function x(e) {
            var t = ut(e),
                r = t.polyToExprDec();
            return r
        }

        function b(e) {
            var t = ht(e);
            return st(t)
        }

        function q(e) {
            var t = ut(e),
                r = Dt(t),
                n = r.polyReduce(),
                o = n.pushDcoefs(),
                a = o.polyToExprImag();
            return a
        }

        function E(e) {
            var t = F(e);
            return t[-1][1]
        }

        function M(e, t, r) {
            e.push(["step", t, r])
        }

        function w(e) {
            return new Xe.default(it(e[1]), it(e[2]))
        }

        function T(e) {
            var t = at(e),
                r = st(e),
                n = st(t.eqToExpr()),
                o = r == n,
                a = t.getLeftCoef(1),
                i = t.getLeftCoef(0),
                u = t.getRightCoef(1),
                s = t.getRightCoef(0),
                l = a.getNum(),
                f = i.getNum(),
                c = u.getNum(),
                p = s.getNum(),
                h = !1;
            h = 0 != l && 0 == f && 0 == c || 0 != c && 0 == p && 0 == l;
            var v = !1,
                d = !1;
            1 == l && 0 != f && 0 == c ? f > 0 ? v = !0 : d = !0 : 1 == c && 0 != p && 0 == l && (p > 0 ? v = !0 : d = !0);
            var g = "";
            return o && (h ? g = "isSimpleMultEq" : v ? g = gt(l) && gt(f) && gt(c) && gt(p) ? "isSimpleAddEqInt" : "isSimpleAddEq" : d && (g = "isSimpleSubEq")), g
        }

        function D(e) {
            var t = at(e),
                r = st(e),
                n = st(t.eqToExpr()),
                o = r == n,
                a = t.getLeftCoef(1),
                i = t.getLeftCoef(0),
                u = t.getRightCoef(1),
                s = t.getRightCoef(0),
                l = a.getNum(),
                f = i.getNum(),
                c = u.getNum(),
                p = s.getNum(),
                h = !1;
            (0 != l && 0 == f && 0 == c || 0 != c && 0 == p && 0 == l) && (h = !0), 1 == l && 0 != f && 0 == c ? h = !0 : 1 == c && 0 != p && 0 == l && (h = !0);
            var v = "";
            return v = o ? h ? "isSimpleEq" : 0 == l || 0 == c ? "isEq2" : "isEq3" : "isEqDist"
        }

        function S(e) {
            var t = at(e),
                r = (st(e), st(t.eqToExpr()), t.getLeftCoef(2)),
                n = t.getLeftCoef(1),
                o = t.getLeftCoef(0),
                a = (t.getRightCoef(2), t.getRightCoef(1)),
                i = t.getRightCoef(0),
                u = (r.getNum(), n.getNum()),
                s = (o.getNum(), a.getNum(), a.getNum()),
                l = (i.getNum(), !1);
            u - s == 0 && (l = !0);
            var f = "";
            return l && (f = "isSimpleQuad"), f
        }

        function k(e) {
            var t = at(e),
                r = (st(e), st(t.eqToExpr()), t.getLeftCoef(1)),
                n = t.getLeftCoef(0),
                o = t.getRightCoef(1),
                a = t.getRightCoef(0),
                i = r.fracToExpr(),
                u = n.fracToExpr(),
                s = o.fracToExpr(),
                l = a.fracToExpr();
            return [i, u, s, l]
        }

        function C(e) {
            var t = [],
                r = e.eqToExpr();
            return M(t, r, "Simplifier les deux paranthèses"), t
        }

        function V(e) {
            var t = e.eqToExpr();
            return st(t)
        }

        function N(e) {
            return lt(e.eqToExpr())
        }

        function P(e) {
            var t = Vt(e),
                r = "";
            return r = "Oui" == t.op || "Non" == t.op || "Magnifique" == t.op ? t.op : t.op + lt(t.poly.polyToExpr()), [r, t.msg]
        }

        function L(e) {
            for (var t = [], r = ft(e), n = Nt(r), o = r, a = 0; a < 36; a++) {
                if (o = r, r = l(r), Nt(r) != n) {
                    var i = f(o);
                    M(t, "= " + Nt(i), ""), n = Nt(r)
                }
                if (r instanceof Ne.default) break
            }
            return t
        }

        function F(e) {
            var t = L(e),
                r = ft(e),
                n = Nt(r);
            if (O(e, "space")) {
                var o = st(it(e).polyToExprMixed());
                return M(t, "= " + o, ""), t
            }
            return t.length <= 0 && M(t, "= " + n, ""), t
        }

        function O(e, t) {
            var r = !1;
            if (e instanceof Array) {
                var n = e[0],
                    o = e.slice(1);
                n == t ? r = !0 : o.forEach(function(e) {
                    return r = r || O(e, t)
                })
            }
            return r
        }

        function A(e, t, r) {
            var n = new nt(e, []);
            return n.doOpStep(t, it(r)), tt(n.toDval())
        }

        function I(e) {
            var t = kt(e);
            return tt(t.toDval())
        }

        function R(e) {
            return [">", "<", ">=", "<="].indexOf(e.sign) > -1 && 1 == e.leftpoly.maxDegree() && 0 == e.rightpoly.maxDegree()
        }

        function _(e) {
            var t = [];
            if (R(e)) {
                var r = G(e.rightpoly.getNum(), e.sign);
                t.push(r)
            }
            return t
        }

        function j(e) {
            var t = e.rightpoly.getNum();
            return t
        }

        function G(e, t) {
            var r, n, o, a;
            switch (t) {
                case ">":
                    r = "(", n = e, o = "+inf", a = ")";
                    break;
                case "<":
                    r = "(", n = "-inf", o = e, a = ")";
                    break;
                case ">=":
                    r = "[", n = e, o = "+inf", a = ")";
                    break;
                case "<=":
                    r = "(", n = "-inf", o = e, a = "]"
            }
            var i = {
                leftbound: r,
                leftval: n,
                rightval: o,
                rightbound: a
            };
            return i
        }

        function H(e) {
            var t = _e.simplifyEq(e);
            return t.solveForQuadVar(), t.toDval()
        }

        function $(e) {
            return tt(H(e))
        }

        function U(e) {
            var t = kt(e);
            return t.solveForGenVar(), tt(t.toDval())
        }

        function z(e) {
            var t = it(e);
            return B(t)
        }

        function B(e) {
            var t = Ie.getFactorPolylist(e);
            return t.length > 1 ? St(t) : []
        }

        function Q(e, t) {
            var r = pt(e);
            return r.solveForLinMVar(t), tt(r.toDval())
        }

        function W(e, t) {
            var r = pt(e);
            return r.solveForLinMVar(t), rt(r.toDval())
        }

        function K(e, t) {
            var r = pt(e);
            return "=" == r.eq.sign ? r.solveForMyVar(t) : r.solveForMyVar(t), tt(r.toDval())
        }

        function J(e) {
            var t = _e.simplifyEq(e);
            t.solveForLinVar();
            var r = t.toDval();
            return r.printList = [], r.eqgatoms = [r.eq.eqToExpr(), r.eq.eqToExpr(), "or"], r
        }

        function Y(e) {
            var t = kt(e);
            return t.solveForLinVarMixed(), t.toDval()
        }

        function Z(e) {
            var t = pt(e);
            return mt(e) || t.addStepToRetval(e, "Simplifier les deux parenthèses"), t.toDval()
        }

        function X(e) {
            var t = pt(e);
            return mt(e) || t.addMMsgToRetval(st(t.eq.eqToExpr())), t.solveForLinVar(), t.toDval()
        }

        function ee(e) {
            return tt(J(e))
        }

        function te(e) {
            return rt(J(e))
        }

        function re(e) {
            return tt(Y(e))
        }

        function ne(e) {
            return tt(Z(e))
        }

        function oe(e) {
            return tt(X(e))
        }

        function ae(e) {
            for (var t = [], r = 0; r < e.length; r++) {
                var n = e[r],
                    o = u(n);
                t.push([n, o])
            }
            return t
        }

        function ie(e) {
            for (var t = new Set, r = 0; r < e.length; r++) {
                var n = e[r];
                t.add(n[1])
            }
            var o = Array.from(t);
            return o.sort(Ne.default.compareCIndex), o
        }

        function ue(e) {
            for (var t = ["blue", "green", "red", "purple", "color5", "brown", "black"], r = {}, n = 0; n < e.length; n++) {
                var o = e[n];
                n < t.length ? r[o] = t[n] : r[o] = "black"
            }
            return r
        }

        function se(e, t) {
            var r = e[t];
            return "undefined" == typeof r && (r = "black"), r
        }

        function le(e) {
            var t = wt(e, st),
                r = t.join("+");
            return r
        }

        function fe(e, t, r) {
            return r ? e : t
        }

        function ce(e, t) {
            for (var r = [], n = 0; n < e.length; n++) {
                var o = e[n],
                    a = o[0],
                    i = o[1],
                    u = se(t, i);
                r.push(st(["color", u, a]))
            }
            var s = r.join("+");
            return s
        }

        function pe(e, t, r) {
            for (var n = {}, o = 0; o < e.length; o++) {
                var a = e[o],
                    i = a[0],
                    u = a[1];
                null == n[u] && (n[u] = []);
                var s = se(t, u);
                n[u].push(st(["color", s, i]))
            }
            for (var l = [], o = 0; o < r.length; o++) {
                var u = r[o];
                if (null != n[u]) {
                    var f = n[u].join("+");
                    l.push("(" + f + ")")
                }
            }
            var c = "0";
            return l.length > 0 && (c = l.join("+")), c
        }

        function he(e) {
            var t = x(e),
                r = st(t);
            return r
        }

        function ve(e) {
            var t = [],
                r = he(e);
            return t.push(qt(r)), t
        }

        function de(e) {
            var t = [],
                r = ht(e);
            r instanceof Array || (r = Qe.roundPrec(r));
            var n = st(r);
            if (r instanceof Array) {
                var o = he(e);
                n != o && 0 == it(e).maxDegree() ? (t.push(qt(n)), t.push(Et("", "(Décimal: " + o + ")"))) : t.push(qt(n))
            } else t.push(qt(n));
            return t
        }

        function ge(e) {
            for (var t = 0; t < e.length; t++) {
                var r = e[t];
                if (s(r) > 1) return !1
            }
            return !0
        }

        function me(e) {
            var t = [],
                r = ut(e),
                n = r.polyToExprNoReduce(),
                o = st(n);
            if (t.push(qt(o)), r.polyDegReduces()) {
                r = r.polyDegReduce();
                var a = r.polyToExpr();
                o = st(a), t.push(qt(o))
            }
            if (r.polyNumReduces()) {
                r = r.polyNumReduce();
                var a = r.polyToExpr();
                o = st(a), t.push(qt(o))
            }
            return [t, r, o]
        }

        function ye(e) {
            var t = me(e)[0];
            return t
        }

        function xe(e) {
            var t = me(e),
                r = t[0],
                n = t[1],
                o = t[2];
            if (!n.noDenom() && 1 == n.getVarsTopBottom().length) {
                var a = Tt.exprToPolyFraction(n.polyToExpr()).factorBoth(),
                    i = new Tt([(0, Ve.constant)(1)], a.denom),
                    u = i.multOrCancelList(a.numer),
                    s = st(ht(u.fracToExpr()));
                s != o && (r.push(qt(st(a.fracToExpr()))), r.push(qt(s)))
            }
            return r
        }

        function be(e) {
            var t = [];
            t.push(Mt("Étape par étapes pour simplifier."));
            var r = st(e);
            t.push(xt(r));
            var n = b(e);
            if (r == n) return t.push(Ct("Il n'y a pas de termes semblables.")), t.push(Mt("<hr>")), t.push(dt("Réponse:")), t = t.concat(de(e));
            qe(e) && (t.push(Ct("Distribuer le signe négatif:")), t.push(qt(Ee(e))), t.push(qt(Me(e))), t.push(qt(we(e))));
            var o = Te(e),
                a = we(e),
                i = [];
            ge(o) ? i = o : (i = De(o), t.push(Ct("Distribuer:")), a = le(i), t.push(qt(a)));
            var u = Se(i),
                s = ae(u),
                l = ie(s),
                f = ue(l),
                c = ht(e),
                p = ke(c),
                h = ae(p),
                v = le(u);
            return a != v && t.push(qt(v)), u.length > p.length ? (t.push(Ct("Combiner les termes semblables:")), t.push(qt(ce(s, f))), s.sort(function(e, t) {
                var r = e[1],
                    n = t[1];
                return Ne.default.compareCIndex(r, n)
            }), t.push(qt(pe(s, f, l))), 0 != c && t.push(qt(ce(h, f))), t.push(Mt("<hr>")), t.push(dt("Réponse:")), t = t.concat(de(e))) : (t.push(Mt("<hr>")), t.push(dt("Réponse:")), t = t.concat(de(e)))
        }

        function qe(e) {
            return e instanceof Array && "-" == e[0] && 3 == e.length && ct(e[2]).length > 1
        }

        function Ee(e) {
            return st(qe(e) ? ["+", e[1],
                ["*", ["color", "red", -1], e[2]]
            ] : e)
        }

        function Me(e) {
            if (qe(e)) {
                var t = ct(e[1]),
                    r = ct(e[2]),
                    n = [];
                n = n.concat(t), r.forEach(function(e) {
                    return n.push(["*", ["color", "red", -1], e])
                });
                var o = le(n);
                return o
            }
            return st(e)
        }

        function we(e) {
            if (qe(e)) {
                var t = ct(e[1]),
                    r = ct(e[2]),
                    n = vt(r),
                    o = [];
                o = o.concat(t), n.forEach(function(e) {
                    return o.push(ht(e))
                });
                var a = le(o);
                return a
            }
            return st(e)
        }

        function Te(e) {
            if (qe(e)) {
                var t = ct(e[1]),
                    r = ct(e[2]),
                    n = vt(r),
                    o = [];
                return o = o.concat(t), n.forEach(function(e) {
                    return o.push(ht(e))
                }), o
            }
            return ct(e)
        }

        function De(e) {
            var t = [];
            return e.forEach(function(e) {
                if (s(e) <= 1) t.push(e);
                else if (e instanceof Array && "*" == e[0] && 3 == e.length && (ct(e[1]).length > 1 || ct(e[2]).length > 1)) {
                    var r = ct(e[1]),
                        n = ct(e[2]);
                    r.forEach(function(e) {
                        n.forEach(function(r) {
                            t.push(["*paren", e, r])
                        })
                    })
                } else t = t.concat(ct(ht(e)))
            }), t
        }

        function Se(e) {
            var t = [];
            return e.forEach(function(e) {
                s(e) <= 1 ? t.push(ht(e)) : t = t.concat(ct(ht(e)))
            }), t
        }

        function ke(e) {
            var t = [0];
            return t = e instanceof Array && "+" == e[0] ? e.slice(1) : [e]
        }

        function Ce(e) {
            var t = e[1],
                r = e[2],
                n = [];
            n.push(Mt("Simplifier étapes par étapes."));
            var o = st(e);
            n.push(xt(o));
            var a = b(t) + " = " + b(r);
            if (o == a) return [];
            (qe(t) || qe(r)) && (n.push(bt(Ee(t) + " = " + Ee(r), "(Distribuer le signe négatif)")), n.push(xt(Me(t) + " = " + Me(r))), n.push(xt(we(t) + " = " + we(r))));
            var i = Te(t),
                u = Te(r),
                s = we(t) + " = " + we(r),
                l = [],
                f = [];
            ge(i) && ge(u) ? (l = i, f = u) : (l = De(i), f = De(u), s = le(l) + " = " + le(f), n.push(bt(s, "(Distribuer)")));
            var c = Se(l),
                p = Se(f),
                h = ae(c),
                v = ae(p),
                d = [];
            d = d.concat(h), d = d.concat(v);
            var g = ie(d),
                m = ue(g),
                y = ht(t),
                x = ht(r),
                q = ke(y),
                E = ke(x),
                M = ae(q),
                w = ae(E),
                T = le(c) + " = " + le(p);
            if (s != T && T != a && n.push(xt(T)), c.length > q.length || p.length > E.length) {
                var D = c.length > q.length,
                    S = p.length > E.length,
                    k = b(t),
                    C = b(r);
                h.sort(function(e, t) {
                    var r = e[1],
                        n = t[1];
                    return Ne.default.compareCIndex(r, n)
                }), v.sort(function(e, t) {
                    var r = e[1],
                        n = t[1];
                    return Ne.default.compareCIndex(r, n)
                }), n.push(bt(fe(pe(h, m, g), k, D) + " = " + fe(pe(v, m, g), C, S), "(Combiner les termes semblables)")), 0 == y && 0 == x || n.push(xt(fe(ce(M, m), k, D) + " = " + fe(ce(w, m), C, S)))
            }
            return n
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.polyToCoefs = a, r.exprToCoefs = i, r.exprToCIndex = u, r.exprCountIndex = s, r.myCoefs = c, r.myCoefs2 = p, r.dSubAndSolve = v, r.solveSimpleSystem = d, r.dSolveSimpleSystem = g, r.eqToExpr = m, r.myComp = y, r.myPolyText = b, r.myPolyExprImag = q, r.myPolyText2 = E, r.getDartEq = w, r.getEqInfo = T, r.getEqInfo2 = D, r.getQuadEqInfo2 = S, r.getEqInfoCoefs = k, r.printEqRetval = C, r.printEq = V, r.dEqToTextH = N, r.myTutorSuggest = P, r.dPolyStep = F, r.doMyOp = A, r.doSimplifyEq = I, r.getSegs = _, r.getEqAns = j, r.myQuadEq = H, r.dQuadEq = $, r.dSolveGenEq = U, r.factorExpr = z, r.dSolveForLinVar = Q, r.exSolveForLinVar = W, r.dSolveForMyVar = K, r.dLinEq = ee, r.eLinEq = te, r.dLinEqMixed = re, r.dLinEq2 = ne, r.dLinEq3 = oe, r.getAddTermsAug = ae, r.getCIndexList = ie, r.getColorMap = ue, r.evalGenVar = ve, r.evalGenVarFrac = de, r.checkAddTerms = ge, r.showMFVar = ye, r.showMFVarFactor = xe, r.showAddTermsMVar = be, r.getAddTermsDistNeg = Te, r.getDistTerms = De, r.getDistTerms2 = Se, r.showAddTermsMVar2 = Ce;
        var Ve = e(43),
            Ne = o(Ve),
            Pe = e(6),
            Le = n(Pe),
            Fe = e(7),
            Oe = n(Fe),
            Ae = e(9),
            Ie = n(Ae),
            Re = e(11),
            _e = n(Re),
            je = e(40),
            Ge = n(je),
            He = e(41),
            $e = n(He),
            Ue = e(42),
            ze = n(Ue),
            Be = e(45),
            Qe = n(Be),
            We = e(48),
            Ke = n(We),
            Je = e(49),
            Ye = n(Je),
            Ze = e(8),
            Xe = o(Ze),
            et = e(10),
            tt = (o(et), Oe.Dval, Oe.dvalToJs3),
            rt = Oe.dvalToJsE3,
            nt = Oe.EqScratch,
            ot = (_e.eqScratchToDartval, Ke.evalAtVal),
            at = Oe.exprToEq,
            it = Le.exprToPoly,
            ut = Ye.exprToPolyV12,
            st = Ge.exprToText,
            lt = Ge.exprToTextH,
            ft = Ge.exprToVisit1,
            ct = Ye.getAddTerms,
            pt = _e.getEqScratch,
            ht = Ye.getPolyExpr,
            vt = Ye.getSubTerms,
            dt = Ke.headstr,
            gt = $e.isInt,
            mt = Oe.isSimplifiedEq,
            yt = Le.makeComputePolyOperators,
            xt = Ke.mDiv,
            bt = Ke.mDiva,
            qt = Ke.mDivEq,
            Et = Ke.mDivSmall,
            Mt = Ke.msgstr,
            wt = Ye.myMap,
            Tt = ze.PolyFraction,
            Dt = Ge.polyImagReduce,
            St = ze.polylistToExpr,
            kt = _e.simplifyEq,
            Ct = Ke.stepstr,
            Vt = Oe.tutorSuggest,
            Nt = (_e.Tval, Ge.visit1ToText),
            Pt = Ye.visit1ToVisit2
    }, {}],
    2: [function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function a(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = p;
                return n[t](r)
            }
            return f.default.fracnum(e)
        }

        function i(e) {
            var t = a(e),
                r = t.fracToExpr();
            return c(r)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.exprToFrac = a, r.myFracText = i;
        var u = e(40),
            s = o(u),
            l = e(10),
            f = n(l),
            c = s.exprToText,
            p = {
                color: function(e) {
                    var t = (e[0], e[1]);
                    return a(t)
                },
                simplify: function(e) {
                    var t = e[0];
                    return a(t)
                },
                "?": function(e) {
                    var t = 0;
                    return a(t)
                },
                "+": function(e) {
                    var t = f.default.fracnum(0);
                    return e.forEach(function(e) {
                        return t = t.add(a(e))
                    }), t
                },
                "-": function(e) {
                    return 1 == e.length ? f.default.fracnum(-1).multiply(a(e[0])) : 2 == e.length ? a(e[0]).subtract(a(e[1])) : f.default.fracnum(0)
                },
                "*": function(e) {
                    var t = f.default.fracnum(1);
                    return e.forEach(function(e) {
                        return t = t.multiply(a(e))
                    }), t
                },
                "/": function(e) {
                    if (2 == e.length) {
                        var t = a(e[1]);
                        return a(e[0]).multiply(t.recip())
                    }
                    return f.default.fracnum(0)
                },
                "^": function(e) {
                    var t = a(e[0]),
                        r = a(e[1]),
                        n = r.getNum();
                    return n >= 0 ? new f.default(Math.pow(t.numer, n), Math.pow(t.denom, n)) : new f.default(Math.pow(t.denom, -n), Math.pow(t.numer, -n))
                },
                sqrt: function(e) {
                    var t = a(e[0]);
                    return new f.default(Math.sqrt(t.numer), Math.sqrt(t.denom))
                },
                "=": function(e) {
                    return f.default.fracnum(0)
                },
                var: function(e) {
                    return f.default.fracnum(0)
                },
                "+-": function(e) {
                    return f.default.fracnum(0)
                }
            }
    }, {}],
    3: [function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function a(e) {
            var t = i(e);
            return t
        }

        function i(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = s(i),
                    o = n[t](r);
                return o
            }
            return y(e)
        }

        function u(e, t, r) {
            return 0 == r.outerpoly.maxDegree() ? y(t) : r.foundinner() ? x() : b.makeInner(new q(e, [r.outerpoly]))
        }

        function s(e) {
            var t = {
                color: function(t) {
                    var r = (t[0], t[1]);
                    return e(r)
                },
                simplify: function(t) {
                    var r = t[0];
                    return e(r)
                },
                "?": function(t) {
                    return e(0)
                },
                "+": function(t) {
                    var r = y(0);
                    return t.forEach(function(t) {
                        return r = r.add(e(t))
                    }), r
                },
                "-": function(t) {
                    return 1 == t.length ? y(-1).multiply(e(t[0])) : 2 == t.length ? e(t[0]).subtract(e(t[1])) : y(0)
                },
                "*": function(t) {
                    var r = y(1);
                    return t.forEach(function(t) {
                        return r = r.multiply(e(t))
                    }), r
                },
                "/": function(t) {
                    if (2 == t.length) {
                        var r = e(t[1]);
                        return e(t[0]).divide(r)
                    }
                    return y(0)
                },
                "^": function(t) {
                    var r = e(t[0]),
                        n = e(t[1]);
                    if (n.outerpoly.noDenom() && 0 == n.outerpoly.maxDegree()) {
                        var o = n.outerpoly.getNum();
                        return 0 == o ? y(1) : E(o) ? Math.abs(o) <= 4 ? r.pow(n) : Math.abs(o) <= 10 && r.outerpoly.countCoefs() <= 1 ? r.pow(n) : r.outerpoly.isConst() ? r.pow(n) : b.makeInnerPow(r, n) : r.outerpoly.isConst() && 0 == r.outerpoly.maxDegree() ? y(Math.pow(r.outerpoly.getNum(), o)) : b.makeInnerPow(r, n)
                    }
                    return b.makeInnerPow(r, n)
                },
                space: function(t) {
                    var r = e(t[0]),
                        n = e(t[1]);
                    return r.outerpoly.getNum() >= 0 ? r.add(n) : r.subtract(n)
                },
                sqrt: function(t) {
                    var r = t[0];
                    return u("sqrt", Math.sqrt(e(r).outerpoly.getNum()), e(r))
                },
                sin: function(t) {
                    var r = t[0];
                    return u("sin", Math.sin(e(r).outerpoly.getNum()), e(r))
                },
                cos: function(t) {
                    var r = t[0];
                    return u("cos", Math.cos(e(r).outerpoly.getNum()), e(r))
                },
                tan: function(t) {
                    var r = t[0];
                    return u("tan", Math.tan(e(r).outerpoly.getNum()), e(r))
                },
                log: function(t) {
                    var r = t[0];
                    return u("log", Math.log(e(r).outerpoly.getNum()) / Math.log(10), e(r))
                },
                ln: function(t) {
                    var r = t[0];
                    return u("ln", Math.log(e(r).outerpoly.getNum()), e(r))
                },
                abs: function(t) {
                    var r = t[0];
                    return u("abs", Math.abs(e(r).outerpoly.getNum()), e(r))
                },
                var: function(e) {
                    var t = e[0],
                        r = t + "1",
                        n = {};
                    n[r] = d.default.fracnum(1);
                    var o = new m.default(n);
                    return new b(o)
                },
                "+-": function(e) {
                    return NaN
                }
            };
            return t.frac = t["/"], t.dfrac = t["/"], t["*show"] = t["*"], t["*paren"] = t["*"], t
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.exprToGenPoly = a;
        var l = e(12),
            f = o(l),
            c = e(40),
            p = (o(c), e(41)),
            h = o(p),
            v = e(10),
            d = n(v),
            g = e(43),
            m = n(g),
            y = f.genconstant,
            x = f.genpolyError,
            b = f.GenPolynomial,
            q = f.InnerExpr,
            E = h.isInt
    }, {}],
    4: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Impossible d'appeler une classe en tant que fonction")
        }

        function i(e, t, r) {
            var n = e.leftpoly,
                o = e.sign1,
                a = e.midpoly,
                i = e.sign2,
                u = e.rightpoly,
                l = ["color", "blue", t.fracToExpr()],
                f = [
                    ["+", n.polyToExpr(), l], o, ["+", a.polyToExpr(), l], i, ["+", u.polyToExpr(), l]
                ],
                c = s(f);
            r.push(N(c, "(Ajouter " + t.toStringH() + " à chaque parties)"));
            var h, v, d, g = (0, p.fracToPoly)(t);
            return h = n.add(g), v = a.add(g), d = u.add(g), f = [h.polyToExpr(), o, v.polyToExpr(), i, d.polyToExpr()], c = s(f), r.push(V(c)), new F(h, o, v, i, d)
        }

        function u(e, t, r) {
            var n = e.leftpoly,
                o = e.sign1,
                a = e.midpoly,
                i = e.sign2,
                u = e.rightpoly,
                l = t.fracToExpr(),
                f = [
                    ["/", n.polyToExpr(), l], o, ["/", a.polyToExpr(), l], i, ["/", u.polyToExpr(), l]
                ],
                c = s(f);
            r.push(N(c, "(Diviser toutes les parties par " + t.toString() + ")"));
            var v = L(o, (0, p.fracToPoly)(t)),
                d = L(i, (0, p.fracToPoly)(t)),
                g = a.getVariable(),
                m = n.multiply((0, p.fracToPoly)(D.default.fracnum(1).divide(t))),
                y = "" + g + "1",
                x = {};
            x[y] = D.default.fracnum(1);
            var b = new h.default(x),
                q = u.multiply((0, p.fracToPoly)(D.default.fracnum(1).divide(t)));
            return f = [m.polyToExpr(), v, b.polyToExpr(), d, q.polyToExpr()], c = s(f), r.push(V(c)), new F(m, o, b, i, q)
        }

        function s(e) {
            var t = e[0],
                r = e[1],
                n = e[2],
                o = e[3],
                a = e[4],
                i = [r, t, n],
                u = ["comp", i, o, a],
                s = C(u);
            return s
        }

        function l(e) {
            var t = [],
                r = C(e),
                n = f(e),
                o = (n.getEqVar(), C(n.eqToExpr()));
            t.push(V(r)), r != o && t.push(N(o, "(Simplifier toutes les parties de l'inégalité)"));
            var a = n.midpoly.getCoefFromInt(1),
                s = n.midpoly.getCoefFromInt(0),
                l = a.getNum(),
                c = s.getNum();
            if (0 != c) {
                var h = s.multiply(D.default.fracnum(-1));
                n = i(n, h, t)
            }
            if (0 == l) {
                var v = n.leftpoly.polyToExpr(),
                    d = n.midpoly.polyToExpr(),
                    g = n.rightpoly.polyToExpr();
                1 == S([n.sign1, v, d]) && 1 == S([n.sign2, d, g]) ? t.push(P("Toutes les vraies numéros sont des solutions.")) : t.push(P("Pas de solutions."))
            } else 1 != l && (n = u(n, a, t));
            var m = w.default.Sign(n.midpoly, n.leftpoly, L(n.sign1, (0, p.constant)(-1))).eqToExpr(),
                y = w.default.Sign(n.midpoly, n.rightpoly, n.sign2).eqToExpr(),
                x = [
                    [], null
                ];
            return x.push(t), x.push([m, y, "and"]), x
        }

        function f(e) {
            var t = e[1][1],
                r = e[1][2],
                n = e[3],
                o = e[1][0],
                a = e[2],
                i = k(t),
                u = k(r),
                s = k(n);
            return new F(i, o, u, a, s)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var c = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }();
        r.solveForVarLinCompoundIneq = l;
        var p = e(43),
            h = o(p),
            v = e(5),
            d = n(v),
            g = e(6),
            m = n(g),
            y = e(7),
            x = (n(y), e(40)),
            b = n(x),
            q = e(48),
            E = n(q),
            M = e(8),
            w = o(M),
            T = e(10),
            D = o(T),
            S = d.evalExpr,
            k = m.exprToPoly,
            C = b.exprToText,
            V = E.mDiv,
            N = E.mDiva,
            P = E.msg,
            L = b.signTransform,
            F = function() {
                function e(t, r, n, o, i) {
                    a(this, e), this.leftpoly = t, this.midpoly = n, this.rightpoly = i, this.sign1 = r, this.sign2 = o
                }
                return c(e, [{
                    key: "eqToExpr",
                    value: function() {
                        var e = [this.sign1, this.leftpoly.polyToExpr(), this.midpoly.polyToExpr()],
                            t = ["comp", e, this.sign2, this.rightpoly.polyToExpr()];
                        return t
                    }
                }, {
                    key: "getEqVar",
                    value: function() {
                        var e = this.midpoly.getVariable();
                        return e
                    }
                }, {
                    key: "getLeftCoef",
                    value: function(e) {
                        return this.leftpoly.getCoefFromInt(e)
                    }
                }, {
                    key: "getMidCoef",
                    value: function(e) {
                        return this.midpoly.getCoefFromInt(e)
                    }
                }, {
                    key: "getRightCoef",
                    value: function(e) {
                        return this.rightpoly.getCoefFromInt(e)
                    }
                }]), e
            }()
    }, {}],
    5: [function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function a(e) {
            if ("number" == typeof e) return e;
            var t = e[0],
                r = d[t],
                n = e.slice(1);
            return r(n)
        }

        function i(e) {
            return 0 == e || 1 == e ? 1 : p[e] > 0 ? p[e] : s.isInt(e) && e > 0 ? p[e] = i(e - 1) * e : NaN
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.evalExpr = a, r.factorial = i;
        var u = e(41),
            s = o(u),
            l = e(45),
            f = o(l),
            c = e(10),
            p = (n(c), []),
            h = function(e, t) {
                var r = t[0];
                return e(a(r))
            },
            v = function() {
                var e = {};
                return e.color = function(e) {
                    var t = (e[0], e[1]);
                    return a(t)
                }, e.simplify = function(e) {
                    var t = e[0];
                    return a(t)
                }, e.eof = function(e) {
                    return 0
                }, e.pt = function(e) {
                    return 0
                }, e["?"] = function(e) {
                    return 0
                }, e["!"] = function(e) {
                    var t = e[0],
                        r = a(t);
                    return i(r)
                }, e["+"] = function(e) {
                    var t = 0;
                    return e.forEach(function(e) {
                        return t += a(e)
                    }), t
                }, e["-"] = function(e) {
                    if (1 == e.length) return -a(e[0]);
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = e[r];
                        t += (0 == r ? 1 : -1) * a(n)
                    }
                    return t
                }, e["*"] = function(e) {
                    var t = 1;
                    return e.forEach(function(e) {
                        return t *= a(e)
                    }), t
                }, e["/"] = function(e) {
                    for (var t = 1, r = 0; r < e.length; r++) {
                        var n = e[r],
                            o = a(n);
                        t *= 0 == r ? o : 1 / o
                    }
                    return t
                }, e.space = function(e) {
                    var t = e[0],
                        r = e[1],
                        n = a(t);
                    return n >= 0 ? n + a(r) : n + -1 * a(r)
                }, e["^"] = function(e) {
                    var t = e[0],
                        r = e[1];
                    return Math.pow(a(t), a(r))
                }, e.sqrt = function(e) {
                    return h(Math.sqrt, e)
                }, e.sin = function(e) {
                    return h(Math.sin, e)
                }, e.cos = function(e) {
                    return h(Math.cos, e)
                }, e.tan = function(e) {
                    return h(Math.tan, e)
                }, e.ln = function(e) {
                    return h(Math.log, e)
                }, e.log = function(e) {
                    return h(Math.log, e) / Math.log(10)
                }, e.abs = function(e) {
                    var t = e[0];
                    return Math.abs(a(t))
                }, e["="] = function(e) {
                    var t = e[0],
                        r = e[1],
                        n = f.roundPrecEq(a(t)),
                        o = f.roundPrecEq(a(r));
                    return (n == o || Math.abs(n - o) / (Math.abs(n) + Math.abs(o)) < 1e-4) && isFinite(n) ? 1 : 0
                }, e[">"] = function(e) {
                    var t = e[0],
                        r = e[1],
                        n = f.roundPrec(a(t)),
                        o = f.roundPrec(a(r));
                    return n > o ? 1 : 0
                }, e["<"] = function(e) {
                    var t = e[0],
                        r = e[1],
                        n = f.roundPrec(a(t)),
                        o = f.roundPrec(a(r));
                    return n < o ? 1 : 0
                }, e[">="] = function(e) {
                    var t = e[0],
                        r = e[1],
                        n = f.roundPrec(a(t)),
                        o = f.roundPrec(a(r));
                    return n >= o ? 1 : 0
                }, e["<="] = function(e) {
                    var t = e[0],
                        r = e[1],
                        n = f.roundPrec(a(t)),
                        o = f.roundPrec(a(r));
                    return n <= o ? 1 : 0
                }, e.comp = function(e) {
                    var t = e[0],
                        r = e[1],
                        n = e[2];
                    return 1 == a(t) && 1 == a([r, t[2], n]) ? 1 : 0
                }, e.and = function(e) {
                    var t = e[0],
                        r = e[1];
                    return 1 == a(t) && 1 == a(r) ? 1 : 0
                }, e.or = function(e) {
                    var t = e[0],
                        r = e[1];
                    return 1 == a(t) || 1 == a(r) ? 1 : 0
                }, e[";"] = function(e) {
                    var t = e[0],
                        r = e[1];
                    return 1 == a(t) && 1 == a(r) ? 1 : 0
                }, e["+-"] = function(e) {
                    return NaN
                }, e.frac = e["/"], e.dfrac = e["/"], e["*show"] = e["*"], e["*paren"] = e["*"], e
            },
            d = v()
    }, {}],
    6: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            var t = i(e);
            return t.polyNumReduce()
        }

        function i(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = u(i),
                    o = n[t](r);
                return o.noDenom() ? o : o.polyReduce()
            }
            return (0, l.constant)(e)
        }

        function u(e) {
            var t = function(t) {
                    var r = (0, l.constant)(1);
                    return t.forEach(function(t) {
                        return r = r.multiply(e(t))
                    }), r
                },
                r = function(t) {
                    if (2 == t.length) {
                        var r = e(t[1]);
                        return e(t[0]).divide(r)
                    }
                    return (0, l.constant)(0)
                },
                n = {
                    color: function(t) {
                        var r = (t[0], t[1]);
                        return e(r)
                    },
                    simplify: function(t) {
                        var r = t[0];
                        return e(r).polyNumReduce()
                    },
                    "?": function(t) {
                        return e((0, l.constant)(0))
                    },
                    "!": function(t) {
                        var r = t[0];
                        return s(p.factorial(e(r).getNum()), e(r))
                    },
                    "+": function(t) {
                        var r = (0, l.constant)(0);
                        return t.forEach(function(t) {
                            return r = r.add(e(t))
                        }), r
                    },
                    "-": function(t) {
                        return 1 == t.length ? (0, l.constant)(-1).multiply(e(t[0])) : 2 == t.length ? e(t[0]).subtract(e(t[1])) : (0, l.constant)(0)
                    },
                    "*": t,
                    "/": r,
                    space: function(t) {
                        var r = e(t[0]),
                            n = e(t[1]);
                        return r.getNum() >= 0 ? r.add(n) : r.add((0, l.constant)(-1).multiply(n))
                    },
                    "^": function(t) {
                        var r = e(t[0]),
                            n = e(t[1]),
                            o = (0, l.constant)(1);
                        if (0 == n.maxDegree()) {
                            var a = n.getNum();
                            o = 0 == a ? (0, l.constant)(1) : d.isInt(a) ? r.pow(n) : r.isConst() ? s(Math.pow(r.getNum(), a), r) : (0, l.polyError)()
                        } else o = (0, l.polyError)();
                        return o
                    },
                    sqrt: function(t) {
                        var r = t[0];
                        return s(Math.sqrt(e(r).getNum()), e(r))
                    },
                    sin: function(t) {
                        var r = t[0];
                        return s(Math.sin(e(r).getNum()), e(r))
                    },
                    cos: function(t) {
                        var r = t[0];
                        return s(Math.cos(e(r).getNum()), e(r))
                    },
                    tan: function(t) {
                        var r = t[0];
                        return s(Math.tan(e(r).getNum()), e(r))
                    },
                    log: function(t) {
                        var r = t[0];
                        return s(Math.log(e(r).getNum()) / Math.log(10), e(r))
                    },
                    ln: function(t) {
                        var r = t[0];
                        return s(Math.log(e(r).getNum()), e(r))
                    },
                    abs: function(t) {
                        var r = t[0];
                        return s(Math.abs(e(r).getNum()), e(r))
                    },
                    "=": function(t) {
                        var r = t[0],
                            n = t[1];
                        return e(r) == e(n) ? 1 : 0
                    },
                    var: function(e) {
                        var t = e[0],
                            r = t + "1",
                            n = {};
                        return n[r] = m.default.fracnum(1), new f.default(n)
                    },
                    "+-": function(e) {
                        return NaN
                    },
                    frac: r,
                    dfrac: r,
                    "*show": t,
                    "*paren": t
                };
            return n
        }

        function s(e, t) {
            return 0 == t.maxDegree() ? (0, l.constant)(e) : (0, l.polyError)()
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.exprToPoly = a, r.exprToPolyInner = i, r.makeComputePolyOperators = u;
        var l = e(43),
            f = o(l),
            c = e(5),
            p = n(c),
            h = e(40),
            v = (n(h), e(41)),
            d = n(v),
            g = e(10),
            m = o(g)
    }, {}],
    7: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            var r = ["=", ["var", e], t];
            return u(r)
        }

        function u(e) {
            var t = e[0],
                r = j(e[1]),
                n = j(e[2]);
            return null != e[2] ? A.default.SignExpr(r, n, t, e[2]) : A.default.Sign(r, n, t)
        }

        function s(e) {
            var t = e[0],
                r = j(e[1]),
                n = j(e[2]);
            return A.default.Sign(r, n, t)
        }

        function l(e, t, r) {
            var n = e + " = ";
            t.sort(function(e, t) {
                return e - t
            });
            for (var o = 0; o < t.length; o++) {
                o > 0 && (n += ",");
                var a = t[o];
                n += P.numStr(a, r)
            }
            return n
        }

        function f(e) {
            return e.toList()
        }

        function c(e) {
            return e.eq.eqToExpr()
        }

        function p(e, t, r) {
            if (0 != r) {
                var n = t + r.toString(),
                    o = {};
                return o[n] = e, new b.default(o)
            }
            return (0, x.fracToPoly)(e)
        }

        function h(e) {
            for (var t = e.maxDegree(), r = t - 1; r > 0; r--) {
                var n = e.getCoefFromInt(r).getNum();
                if (0 != n) return !1
            }
            return !0
        }

        function v(e) {
            var t = s(e),
                r = k.exprToText(e),
                n = k.exprToText(t.eqToExpr());
            return r == n
        }

        function d(e, t, r) {
            var n, o = e.leftpoly,
                a = e.rightpoly;
            return "flip" == t ? (o = e.rightpoly, a = e.leftpoly, n = B(e.sign, (0, x.constant)(-1))) : "+" == t ? (o = o.add(r), a = a.add(r), n = e.sign) : "-" == t ? (o = o.subtract(r), a = a.subtract(r), n = e.sign) : "*" == t ? (o = o.multiply(r), a = a.multiply(r), n = B(e.sign, r)) : "/" == t && (o = o.divide(r), a = a.divide(r), n = B(e.sign, r)), new A.default.Sign(o, a, n)
        }

        function g(e) {
            var t, r = "null",
                n = (0, x.constant)(0),
                o = "null",
                a = e.getEqVar(),
                i = e.getLeftCoef(1),
                u = e.getLeftCoef(0),
                s = e.getRightCoef(1),
                l = e.getRightCoef(0);
            if (0 != s.getNum() && 0 == i.getNum()) r = "flip", o = "flip the equation", n = (0, x.fracToPoly)(R.default.fracnum(0));
            else if (0 != s.getNum())
                if (t = s.multNum(-1), t.getNum() > 0) {
                    var f = "" + t.toStringH() + a;
                    r = "+", n = m(t, a), o = "Ajouter " + f + " aux deux parenthèses"
                } else {
                    var f = "" + t.multNum(-1).toStringH() + a;
                    r = "-", n = m(t.multNum(-1), a), o = "Enlever " + f + " aux deux parenthèses"
                }
            else if (0 != u.getNum()) t = u.multNum(-1), t.getNum() > 0 ? (r = "+", n = (0, x.fracToPoly)(t), o = "Ajouter " + t.toStringH() + " aux deux parenthèses") : (r = "-", n = (0, x.fracToPoly)(t.multNum(-1)), o = "Enlever " + t.multNum(-1).toStringH() + " aux deux parenthèses");
            else if (0 == i.subtract(s).getNum()) 1 == _([e.sign, u.subtract(l).getNum(), 0]) ? (r = "yes", o = "All real numbers are solutions.") : (r = "no", o = "There are no solutions.");
            else {
                if (1 != i.subtract(s).getNum()) {
                    var c = i.subtract(s);
                    if (1 == c.denom) return new W("/", (0, x.fracToPoly)(c), "Diviser les deux parenthèses " + c.toStringH());
                    if (V.isInt(c.numer) && V.isInt(c.denom)) {
                        var p = c.recip();
                        return new W("*", (0, x.fracToPoly)(p), "Multiplier les deux parenthèses " + p.toStringH())
                    }
                    return new W("/", (0, x.fracToPoly)(c), "Diviser les deux parenthèses " + c.toStringH())
                }
                r = "Magnifique!", o = "La réponse est " + a + "=" + l.toStringH()
            }
            return new W(r, n, o)
        }

        function m(e, t) {
            var r = t + "1",
                n = {};
            return n[r] = e, new b.default(n)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.Suggestion = r.EqScratch = r.Dval = r.LStep = void 0;
        var y = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }();
        r.exprToEq = s, r.roundStr = l, r.dvalToJs3 = f, r.dvalToJsE3 = c, r.isSimplifiedEq = v, r.doOp = d, r.tutorSuggest = g, r.coefFracVar = m;
        var x = e(43),
            b = o(x),
            q = e(5),
            E = n(q),
            M = e(6),
            w = n(M),
            T = e(9),
            D = n(T),
            S = e(40),
            k = n(S),
            C = e(41),
            V = n(C),
            N = e(45),
            P = n(N),
            L = e(47),
            F = n(L),
            O = e(8),
            A = o(O),
            I = e(10),
            R = o(I),
            _ = E.evalExpr,
            j = w.exprToPoly,
            G = k.exprToText,
            H = k.exprToTextH,
            $ = D.getFactorPolylist,
            U = D.getFactorSmallPolylist,
            z = V.isInt,
            B = k.signTransform,
            Q = (r.LStep = function e(t, r) {
                a(this, e), this.sug = t, this.eq = r
            }, r.Dval = function() {
                function e(t, r) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    a(this, e), this.retval = t, this.eq = r, this.printList = n
                }
                return y(e, [{
                    key: "toList",
                    value: function() {
                        return null == this.printList ? [this.retval, this.eq] : null == this.eqgatoms ? [this.retval, this.eq, this.printList] : [this.retval, this.eq, this.printList, this.eqgatoms]
                    }
                }]), e
            }()),
            W = (r.EqScratch = function() {
                function e(t, r) {
                    a(this, e), this.eq = t, this.retval = r, this.anslist = []
                }
                return y(e, [{
                    key: "addStepToRetval",
                    value: function(e, t) {
                        this.retval.push(["step", e, t])
                    }
                }, {
                    key: "addMsgToRetval",
                    value: function(e) {
                        this.retval.push(["msg", e, ""])
                    }
                }, {
                    key: "addEMsgToRetval",
                    value: function(e) {
                        this.retval.push(["emsg", e, ""])
                    }
                }, {
                    key: "addMMsgToRetval",
                    value: function(e) {
                        this.retval.push(["mmsg", e, ""])
                    }
                }, {
                    key: "addMobMsgToRetval",
                    value: function(e, t) {
                        this.retval.push(["mobmsg", e, "MobDiv", t])
                    }
                }, {
                    key: "addHeadDivToRetval",
                    value: function(e) {
                        this.retval.push(["msg", e, "MHeadDiv"])
                    }
                }, {
                    key: "addAnsToRetval",
                    value: function(e) {
                        this.retval.push(["ans", e, "answer"])
                    }
                }, {
                    key: "addAnsMsgToRetval",
                    value: function(e) {
                        this.retval.push(["ansmsg", e, ""])
                    }
                }, {
                    key: "toDval",
                    value: function() {
                        return new Q(this.retval, this.eq)
                    }
                }, {
                    key: "doOpAddStepText",
                    value: function(e, t) {
                        var r = t.polyToExpr(),
                            n = ["color", "blue", r];
                        if ("flip" == e);
                        else {
                            var o = [this.eq.sign, [e, this.eq.leftpoly.polyToExpr(), n],
                                [e, this.eq.rightpoly.polyToExpr(), n]
                            ];
                            o = "*" == e ? [this.eq.sign, ["*show", n, this.eq.leftpoly.polyToExpr()],
                                ["*show", n, this.eq.rightpoly.polyToExpr()]
                            ] : [this.eq.sign, [e, this.eq.leftpoly.polyToExpr(), n],
                                [e, this.eq.rightpoly.polyToExpr(), n]
                            ];
                            var a = "",
                                i = k.exprToTextH(r);
                            "+" == e ? a = "Ajouter " + i + " aux deux parenthèses" : "-" == e ? a = "Enlever " + i + " aux deux parenthèses" : "*" == e ? a = "Multiplier les deux parenthèses " + i : "/" == e && (a = "Diviser les deux parenthèses par " + i), this.addStepToRetval(o, a)
                        }
                    }
                }, {
                    key: "multDenomEq",
                    value: function() {
                        if (!this.eq.leftpoly.noDenom()) {
                            var e = new b.default(this.eq.leftpoly.dcoefs),
                                t = e.polyToExpr(),
                                r = k.exprToTextH(t),
                                n = "Multiply both sides by " + r,
                                o = new b.default(this.eq.leftpoly.coefs),
                                a = this.eq.rightpoly.multiply(e),
                                i = k.signTransform(this.eq.sign, e);
                            this.eq = new A.default.Sign(o, a, i), this.addStepToRetval(this.eq.eqToExpr(), n)
                        }
                        if (!this.eq.rightpoly.noDenom()) {
                            var e = new b.default(this.eq.rightpoly.dcoefs),
                                t = e.polyToExpr(),
                                r = k.exprToTextH(t),
                                n = "Multiply both sides by " + r,
                                o = this.eq.leftpoly.multiply(e),
                                a = new b.default(this.eq.rightpoly.coefs),
                                i = k.signTransform(this.eq.sign, e);
                            this.eq = new A.default.Sign(o, a, i), this.addStepToRetval(this.eq.eqToExpr(), n)
                        }
                        return this
                    }
                }, {
                    key: "doOpStep",
                    value: function(e, t) {
                        return this.doOpAddStepText(e, t), this.doOpOnEq(e, t), this.addStepToRetval(this.eq.eqToExpr(), "flip" == e ? "Flip the equation" : ""), this
                    }
                }, {
                    key: "doOpOnEq",
                    value: function(e, t) {
                        return this.eq = d(this.eq, e, t), this
                    }
                }, {
                    key: "simplifyEq",
                    value: function(e) {
                        return v(e) || this.addStepToRetval(this.eq.eqToExpr(), "=" == this.eq.sign ? "Simplifier les deux parenthèses" : "Simplify both sides of the inequality"), this
                    }
                }, {
                    key: "solveForLinVar",
                    value: function() {
                        for (var e = 0; e < 36; e++) {
                            var t = g(this.eq);
                            if ("yes" == t.op || "no" == t.op) {
                                this.addAnsMsgToRetval(t.msg), "yes" == t.op && this.anslist.push(s(["=", 0, 0]));
                                break
                            }
                            if ("great" == t.op) {
                                this.addAnsToRetval(this.eq.eqToExpr()), this.anslist.push(this.eq);
                                var r = this.eq.rightpoly.getNum();
                                62847272 == r && this.addMsgToRetval("mathpapa");
                                break
                            }
                            this.doOpStep(t.op, t.poly)
                        }
                        return this
                    }
                }, {
                    key: "getVars",
                    value: function() {
                        var e = [];
                        return e = e.concat(this.eq.leftpoly.getVars()), e = e.concat(this.eq.rightpoly.getVars()), e = Array.from(new Set(e))
                    }
                }, {
                    key: "getVarsLength",
                    value: function() {
                        return this.getVars().length
                    }
                }, {
                    key: "printQuadFormula",
                    value: function() {
                        var e = this.eq.leftpoly.getCoefFromInt(2).getNum(),
                            t = this.eq.leftpoly.getCoefFromInt(1).getNum(),
                            r = this.eq.leftpoly.getCoefFromInt(0).getNum(),
                            n = this.eq.getEqVar(),
                            o = t * t - 4 * e * r,
                            a = 0,
                            u = 0;
                        if (this.addStepToRetval(n + " = {-b±√{b^{2}-4ac}}/{2a}", "Utiliser notre formule avec a=" + e + ", b=" + t + ", c=" + r), this.addMMsgToRetval(n + " = {-(" + t + ")±√{(" + t + ")^{2}-4(" + e + ")(" + r + ")}}/{2(" + e + ")}"), this.addMMsgToRetval(n + " = {" + -1 * t + "±√{" + P.roundPrec(t * t - 4 * e * r) + "}}/{" + 2 * e + "}"), 0 == o) {
                            a = -1 * t / (2 * e);
                            var s = ["=", ["var", n], a];
                            this.addMMsgToRetval(G(s)), this.addAnsToRetval(G(s)), this.anslist.push(i(n, a))
                        } else o < 0 ? this.addAnsMsgToRetval("No real solutions.") : z(o) && z(t) && z(e) ? (a = F.getSurdExprSqrt(["/", ["+", ["-", t],
                                ["sqrt", o]
                            ],
                            ["*", 2, e]
                        ]), u = F.getSurdExprSqrt(["/", ["+", ["-", t],
                                ["-", ["sqrt", o]]
                            ],
                            ["*", 2, e]
                        ]), this.addMMsgToRetval("" + n + " = " + G(a) + "\\,\\,\\text' ou '\\,\\," + n + " = " + G(u)), this.addAnsToRetval("" + n + " = " + G(a) + "\\,\\,\\text' ou '\\,\\," + n + " = " + G(u)), this.anslist.push(i(n, a)), this.anslist.push(i(n, u))) : (a = (-1 * t + Math.pow(o, .5)) / (2 * e), u = (-1 * t - Math.pow(o, .5)) / (2 * e), this.addMMsgToRetval("" + n + " = " + a.toString() + "," + u.toString()), this.addAnsToRetval("" + n + " = " + a.toString() + "," + u.toString()), this.anslist.push(i(n, a)), this.anslist.push(i(n, u)));
                        return this
                    }
                }, {
                    key: "printCubeFormula",
                    value: function() {
                        this.addStepToRetval("", "Use cubic formula");
                        var t = e.useCubeFormula(this.eq.leftpoly),
                            r = this.eq.getEqVar(),
                            n = [];
                        n = n.concat(t);
                        var o = l(r, n);
                        this.addMMsgToRetval(o), this.addAnsToRetval(o);
                        for (var a = 0; a < t.length; a++) {
                            var u = t[a];
                            this.anslist.push(i(r, u))
                        }
                        return this
                    }
                }, {
                    key: "printQuartFormula",
                    value: function() {
                        this.addStepToRetval("", "Use quartic formula");
                        var t = e.useQuartFormula(this.eq.leftpoly),
                            r = this.eq.getEqVar();
                        if (0 == t.length) return this.addMsgToRetval("No real solutions."), this.addAnsMsgToRetval("No real solutions."), this;
                        var n = [];
                        n = n.concat(t);
                        var o = l(r, n, 6);
                        this.addMMsgToRetval(o), this.addAnsToRetval(o);
                        for (var a = 0; a < t.length; a++) {
                            var u = t[a];
                            this.anslist.push(i(r, u))
                        }
                        return this
                    }
                }, {
                    key: "printSolveGenOddRoot",
                    value: function() {
                        this.clearLeftDegree(0);
                        var e = this.eq.leftpoly.maxDegree();
                        this.divideLeftCoef(e);
                        var t = this.eq.rightpoly.getCoefFromInt(0),
                            r = this.eq.getEqVar(),
                            n = 0;
                        if (this.addStepToRetval(r + " = (" + t.toString() + ")^(1/" + e.toString() + ")", "Take root"), 0 == t.getNum()) {
                            var n = 0,
                                o = ["=", ["var", r], 0];
                            this.addMMsgToRetval(k.exprToText(o)), this.addAnsToRetval(k.exprToText(o)), this.anslist.push(i(r, n))
                        } else t.getNum() < 0 ? (n = P.roundPrec(-1 * Math.pow(Math.abs(t.getNum()), 1 / e)), this.addMMsgToRetval("" + r + " = " + n.toString()), this.addAnsToRetval("" + r + " = " + n.toString()), this.anslist.push(i(r, n))) : (n = P.roundPrec(Math.pow(t.getNum(), 1 / e)), this.addMMsgToRetval("" + r + " = " + n.toString()), this.addAnsToRetval("" + r + " = " + n.toString()), this.anslist.push(i(r, n)));
                        return this
                    }
                }, {
                    key: "printSolveGenEvenRoot",
                    value: function() {
                        this.clearLeftDegree(0);
                        var e = this.eq.leftpoly.maxDegree();
                        this.divideLeftCoef(e);
                        var t = this.eq.rightpoly.getCoefFromInt(0),
                            r = this.eq.getEqVar(),
                            n = 0,
                            o = 0;
                        if (this.addStepToRetval(r + " = ±(" + t.toString() + ")^(1/" + e.toString() + ")", "Take root"), 0 == t.getNum()) {
                            var n = 0,
                                a = ["=", ["var", r], 0];
                            this.addMMsgToRetval(G(a)), this.addAnsToRetval(G(a)), this.anslist.push(s(a))
                        } else t.getNum() < 0 ? this.addAnsMsgToRetval("No real solutions.") : (n = P.roundPrec(Math.pow(t.getNum(), 1 / e)), o = P.roundPrec(-1 * Math.pow(t.getNum(), 1 / e)), this.addMMsgToRetval("" + r + " = " + G(n) + "," + G(o)), this.addAnsToRetval("" + r + " = " + G(n) + "," + G(o)), this.anslist.push(i(r, n)), this.anslist.push(i(r, o)));
                        return this
                    }
                }, {
                    key: "printSolveCubeRoot",
                    value: function() {
                        this.clearRightDegree(3), this.clearRightDegree(2), this.clearRightDegree(1), this.clearLeftDegree(0), this.divideLeftCoef(3);
                        var e = this.eq.rightpoly.getCoefFromInt(0),
                            t = this.eq.getEqVar(),
                            r = 0,
                            n = "0";
                        if (this.addStepToRetval(t + " = (" + e.toString() + ")^(1/3)", "Take cube root"), 0 == e.getNum()) {
                            var r = 0,
                                o = ["=", ["var", t], 0];
                            this.addMMsgToRetval(k.exprToText(o)), this.addAnsToRetval(k.exprToText(o)), this.anslist.push(i(t, r))
                        } else e.getNum() < 0 ? (r = -1 * Math.pow(Math.abs(e.getNum()), 1 / 3), n = P.numStr(r), this.addMMsgToRetval("" + t + " = " + n), this.addAnsToRetval("" + t + " = " + n), this.anslist.push(i(t, r))) : (r = Math.pow(e.getNum(), 1 / 3), n = P.numStr(r), this.addMMsgToRetval("" + t + " = " + n), this.addAnsToRetval("" + t + " = " + n), this.anslist.push(i(t, r)));
                        return this
                    }
                }, {
                    key: "printQuadFactor",
                    value: function() {
                        var e = $(this.eq.leftpoly),
                            t = [];
                        t.push("*"), t = t.concat(e);
                        var r = k.visit1ToExpr(t);
                        this.addStepToRetval(G(["=", r, 0]), "Factor left side of equation");
                        var n = [];
                        e.forEach(function(e) {
                            return 1 == e.maxDegree()
                        });
                        for (var o = 0; o < e.length; o++) {
                            var a = e[o];
                            1 == a.maxDegree() && n.push(a)
                        }
                        for (var u = "", o = 0; o < n.length; o++) {
                            o > 0 && (u += "\\,\\,\\text' ou '\\,\\,");
                            var s = n[o];
                            u += G(s.polyToExpr()) + "= 0"
                        }
                        this.addStepToRetval(u, "Set factors equal to 0");
                        var l = n[0],
                            f = n[1];
                        if (l.equalpoly(f)) {
                            var c = l.getVariable(),
                                p = l.getConst().multiply(R.default.fracnum(-1)).divide(l.getCoefFromInt(1)).fracToExpr(),
                                h = c + " = " + G(p);
                            this.addMMsgToRetval(h), this.addAnsToRetval(h), this.anslist.push(i(c, p))
                        } else {
                            var v = l.getVariable(),
                                d = f.getVariable(),
                                g = l.getConst().multiply(R.default.fracnum(-1)).divide(l.getCoefFromInt(1)),
                                m = f.getConst().multiply(R.default.fracnum(-1)).divide(f.getCoefFromInt(1)),
                                y = g.fracToExpr(),
                                x = m.fracToExpr(),
                                b = v + " = " + G(y),
                                q = d + " = " + G(x);
                            this.addMMsgToRetval(b + "\\,\\,\\text' ou '\\,\\," + q), g.getNum() == m.getNum() ? this.addAnsToRetval(b) : this.addAnsToRetval(b + "\\,\\,\\text' ou '\\,\\," + q), this.anslist.push(i(v, y)), this.anslist.push(i(d, x))
                        }
                        return this
                    }
                }, {
                    key: "printGenFactor",
                    value: function() {
                        var t = $(this.eq.leftpoly),
                            r = [];
                        r.push("*"), r = r.concat(t);
                        var n = k.visit1ToExpr(r);
                        this.addStepToRetval(G(["=", n, 0]), "Factor left side of equation");
                        for (var o = [], a = 0; a < t.length; a++) {
                            var u = t[a];
                            u.maxDegree() > 0 && o.push(u)
                        }
                        for (var s = "", a = 0; a < o.length; a++) {
                            a > 0 && (s += "\\,\\,\\text' ou '\\,\\,");
                            var l = o[a];
                            s += G(l.polyToExpr()) + "= 0"
                        }
                        this.addStepToRetval(s, "Set factors equal to 0");
                        for (var f = "", c = [], a = 0; a < o.length; a++) {
                            var u = t[a];
                            if (1 == u.maxDegree()) {
                                var p = u.getConst().multiply(R.default.fracnum(-1)).divide(u.getCoefFromInt(1)).fracToExpr(),
                                    h = G(p);
                                c.length > 0 && (f += "\\,\\,\\text' ou '\\,\\,"), f += u.getVariable() + " = " + h, c.push(h), this.anslist.push(i(u.getVariable(), p))
                            } else if (2 == u.maxDegree())
                                for (var v = e.useQuadFormula(u), d = 0; d < v.length; d++) {
                                    var p = v[d];
                                    c.length > 0 && (f += "\\,\\,\\text' ou '\\,\\,"), f += u.getVariable() + " = " + p.toString(), c.push(p.toString), this.anslist.push(i(u.getVariable(), p))
                                } else if (3 == u.maxDegree())
                                    for (var v = e.useCubeFormula(u), d = 0; d < v.length; d++) {
                                        var p = v[d];
                                        c.length > 0 && (f += "\\,\\,\\text' ou '\\,\\,"), f += u.getVariable() + " = " + P.roundPrec(p).toString(), c.push(p.toString), this.anslist.push(i(u.getVariable(), p))
                                    } else if (4 == u.maxDegree())
                                        for (var v = e.useQuartFormula(u), d = 0; d < v.length; d++) {
                                            var p = v[d];
                                            c.length > 0 && (f += "\\,\\,\\text' ou '\\,\\,"), f += u.getVariable() + " = " + P.roundPrec(p).toString(), c.push(p.toString), this.anslist.push(i(u.getVariable(), p))
                                        } else if (u.maxDegree() > 4) {
                                            var p = 0;
                                            c.length > 0 && (f += "\\,\\,\\text' ou '\\,\\,"), f += u.getVariable() + " = " + p.toString(), c.push(p.toString), this.anslist.push(i(u.getVariable(), p))
                                        }
                        }
                        return this.addMMsgToRetval(f), this.addAnsToRetval(f), this
                    }
                }, {
                    key: "solveForLinVarMixed",
                    value: function() {
                        for (var e = 0; e < 36; e++) {
                            var t = g(this.eq);
                            if ("yes" == t.op || "no" == t.op) {
                                this.addAnsMsgToRetval(t.msg), "yes" == t.op && this.anslist.push(s(["=", 0, 0]));
                                break
                            }
                            if ("great" == t.op) {
                                this.addAnsToRetval([this.eq.sign, this.eq.leftpoly.polyToExpr(), this.eq.rightpoly.polyToExprMixed()]), this.anslist.push(this.eq);
                                break
                            }
                            this.doOpStep(t.op, t.poly)
                        }
                        return this
                    }
                }, {
                    key: "clearLeftDegree",
                    value: function(e) {
                        var t = this.eq.leftpoly.getCoefFromInt(e);
                        return t.getNum() > 0 ? this.doOpStep("-", p(t, this.eq.getEqVar(), e)) : t.getNum() < 0 && this.doOpStep("+", p(t.multiply(R.default.fracnum(-1)), this.eq.getEqVar(), e)), this
                    }
                }, {
                    key: "clearRightDegree",
                    value: function(e) {
                        var t = this.eq.rightpoly.getCoefFromInt(e);
                        return t.getNum() > 0 ? this.doOpStep("-", p(t, this.eq.getEqVar(), e)) : t.getNum() < 0 && this.doOpStep("+", p(t.multiply(R.default.fracnum(-1)), this.eq.getEqVar(), e)), this
                    }
                }, {
                    key: "clearRightPoly",
                    value: function() {
                        return (this.eq.rightpoly.maxDegree() > 0 || 0 != this.eq.rightpoly.getConst().getNum()) && this.doOpStep("-", this.eq.rightpoly), this
                    }
                }, {
                    key: "divideLeftCoef",
                    value: function(e) {
                        return 1 != this.eq.leftpoly.getCoefFromInt(e).getNum() && this.doOpStep("/", (0, x.fracToPoly)(this.eq.leftpoly.getCoefFromInt(e))), this
                    }
                }, {
                    key: "solveForGenVar",
                    value: function() {
                        var e = this.eq.leftpoly.subtract(this.eq.rightpoly);
                        if (e.maxDegree() > 10) return this.errorMsg();
                        if (e.maxDegree() <= 3) return this.eq.leftpoly.maxDegree() > 3 && this.clearRightPoly(), this.solveForCubeVar();
                        if (e.maxDegree() <= 4) return this.eq.leftpoly.maxDegree() > 4 && this.clearRightPoly(), this.solveForQuartVar();
                        if (h(e)) return this.printSolveRoot();
                        this.clearRightPoly();
                        var t = U(this.eq.leftpoly),
                            r = t.length;
                        return t.filter(function(e) {
                            return e.maxDegree() <= 4 || 4 == e.maxDegree() && h(e)
                        }).length == r ? this.printGenFactor() : this.errorMsg()
                    }
                }, {
                    key: "printSolveRoot",
                    value: function() {
                        var e = this.eq.leftpoly.subtract(this.eq.rightpoly);
                        return this.eq.rightpoly.maxDegree() > 0 && this.clearRightPoly(), e.maxDegree() % 2 == 0 ? this.printSolveGenEvenRoot() : this.printSolveGenOddRoot()
                    }
                }, {
                    key: "solveForQuartVar",
                    value: function() {
                        var e = this.eq.leftpoly.subtract(this.eq.rightpoly);
                        if (e.maxDegree() > 4) return this.errorMsg();
                        if (e.maxDegree() < 4) return this.clearRightDegree(4), this.solveForCubeVar();
                        if (h(e)) return this.printSolveRoot();
                        this.clearRightPoly();
                        var t = $(this.eq.leftpoly);
                        return t.filter(function(e) {
                            return e.maxDegree() > 0
                        }).length > 1 ? this.printGenFactor() : this.printQuartFormula()
                    }
                }, {
                    key: "solveForCubeVar",
                    value: function() {
                        var e = this.eq.leftpoly.subtract(this.eq.rightpoly);
                        if (e.maxDegree() > 3) return this.errorMsg();
                        if (e.maxDegree() < 3) return this.clearRightDegree(3), this.solveForQuadVar();
                        if (0 == e.getCoefFromInt(2).getNum() && 0 == e.getCoefFromInt(1).getNum()) return this.printSolveCubeRoot();
                        this.clearRightPoly();
                        var t = $(this.eq.leftpoly);
                        return t.filter(function(e) {
                            return 1 == e.maxDegree()
                        }).length > 0 ? this.printGenFactor() : this.printCubeFormula()
                    }
                }, {
                    key: "printSolveSquareRoot",
                    value: function() {
                        this.clearRightDegree(2), this.clearRightDegree(1), this.clearLeftDegree(0), this.divideLeftCoef(2);
                        var e = this.eq.rightpoly.getCoefFromInt(0),
                            t = this.eq.getEqVar(),
                            r = 0,
                            n = 0,
                            o = t + " = ±√{" + e.toString() + "}";
                        if (this.addStepToRetval(o, "Take square root"), 0 == e.getNum()) {
                            var r = 0,
                                a = ["=", ["var", t], 0];
                            this.addMMsgToRetval(G(a)), this.addAnsToRetval(G(a)), this.anslist.push(s(a))
                        } else e.getNum() < 0 ? this.addAnsMsgToRetval("No real solutions.") : z(e.getNum()) ? (r = F.getSurdExprSqrt(["sqrt", e.getNum()]), n = F.getSurdExprSqrt(["-", ["sqrt", e.getNum()]]), this.addMMsgToRetval("" + t + " = " + G(r) + "\\,\\,\\text' ou '\\,\\," + t + " = " + G(n)), this.addAnsToRetval("" + t + " = " + G(r) + "\\,\\,\\text' ou '\\,\\," + t + " = " + G(n)), this.anslist.push(i(t, r)), this.anslist.push(i(t, n))) : (r = P.roundPrec(Math.pow(e.getNum(), .5)), n = P.roundPrec(-1 * Math.pow(e.getNum(), .5)), this.addMMsgToRetval("" + t + " = " + r.toString() + "," + n.toString()), this.addAnsToRetval("" + t + " = " + r.toString() + "," + n.toString()), this.anslist.push(i(t, r)), this.anslist.push(i(t, n)));
                        return this
                    }
                }, {
                    key: "solveForQuadVar",
                    value: function() {
                        var e = this.eq.leftpoly.subtract(this.eq.rightpoly);
                        if (e.maxDegree() < 2) return this.clearRightDegree(2), this.solveForLinVar();
                        if (0 == e.getCoefFromInt(1).getNum()) return this.printSolveSquareRoot();
                        this.clearRightPoly();
                        var t = $(this.eq.leftpoly);
                        return 2 == t.filter(function(e) {
                            return 1 == e.maxDegree()
                        }).length ? this.printQuadFactor() : this.printQuadFormula()
                    }
                }, {
                    key: "solveForQuadVarFormula",
                    value: function() {
                        var e = this.eq.leftpoly.subtract(this.eq.rightpoly);
                        return e.maxDegree() < 2 ? (this.clearRightDegree(2), this.solveForLinVar()) : (this.clearRightPoly(), this.printQuadFormula())
                    }
                }, {
                    key: "solveForLinMVar",
                    value: function(e) {
                        var t, r, n = (this.eq.sign, this.eq.leftpoly),
                            o = this.eq.rightpoly,
                            a = n.getMCoef(e, 1),
                            i = o.getMCoef(e, 1);
                        0 != i.getNum() && (t = i.multiply(R.default.fracnum(-1)).fracToExpr(), r = ["*", t, ["var", e]], this.doOpStep("+", j(r))), n = this.eq.leftpoly;
                        var u = e + "1";
                        for (var s in n.coefs) s != u && (r = b.default.varterm(n.coefs[s].multiply(R.default.fracnum(-1)), s), null != r && this.doOpStep("+", j(r)));
                        if (0 == a.subtract(i).getNum()) 0 == this.eq.rightpoly.polyToExpr() ? this.addAnsMsgToRetval("All real numbers are solutions.") : this.addAnsMsgToRetval("No solutions.");
                        else if (1 != a.subtract(i).getNum()) {
                            var l = a.subtract(i);
                            this.doOpStep("/", (0, x.fracToPoly)(l))
                        }
                        return this
                    }
                }, {
                    key: "errorMsg",
                    value: function() {
                        return "=" == this.eq.sign ? this.addMsgToRetval('<font color="red" style="line-height:30px">Sorry, I don\'t know how to solve this equation.</font>') : this.addMsgToRetval('<font color="red" style="line-height:30px">Sorry, I don\'t know how to solve this inequality.</font>'), this.addEMsgToRetval('<font color="red" style="line-height:30px">To send feedback/suggestions, please click the button (with the "?") on the bottom right. Thank you.</font>'), this
                    }
                }, {
                    key: "errorMsg2",
                    value: function() {
                        return "=" == this.eq.sign ? this.addMsgToRetval('<font color="red" style="line-height:30px">Sorry, I don\'t know how to solve this equation.</font>') : this.addMsgToRetval('<font color="red" style="line-height:30px">Sorry, I don\'t know how to solve this inequality.</font>'), this.addEMsgToRetval('<font color="red" style="line-height:30px">To send feedback/suggestions, please click the button (with the "?") on the bottom right. Thank you.</font>'), this
                    }
                }, {
                    key: "stepClearDenom",
                    value: function() {
                        if (!this.eq.leftpoly.noDenom()) {
                            var e = new b.default(this.eq.leftpoly.dcoefs),
                                t = e.polyToExpr(),
                                r = k.exprToTextH(t),
                                n = "Multiply both sides by " + r,
                                o = new b.default(this.eq.leftpoly.coefs),
                                a = this.eq.rightpoly.multiply(e).polyReduce(),
                                i = B(this.eq.sign, e);
                            this.eq = new A.default.Sign(o, a, i), this.addStepToRetval(this.eq.eqToExpr(), n)
                        }
                        if (!this.eq.rightpoly.noDenom()) {
                            var e = new b.default(this.eq.rightpoly.dcoefs),
                                t = e.polyToExpr(),
                                r = k.exprToTextH(t),
                                n = "Multiply both sides by " + r,
                                o = this.eq.leftpoly.multiply(e),
                                a = new b.default(this.eq.rightpoly.coefs),
                                i = B(this.eq.sign, e);
                            this.eq = new A.default.Sign(o, a, i), this.addStepToRetval(this.eq.eqToExpr(), n)
                        }
                        return this
                    }
                }, {
                    key: "getEqVarDeg",
                    value: function(e) {
                        var t = [];
                        for (var r in this.eq.leftpoly.coefs)
                            if (b.default.getDegreeForVar(r, e) > 0 && 0 != this.eq.leftpoly.coefs[r].getNum()) {
                                var n = b.default.getDegreeForVar(r, e);
                                t.push(n)
                            } for (var r in this.eq.rightpoly.coefs)
                            if (b.default.getDegreeForVar(r, e) > 0 && 0 != this.eq.rightpoly.coefs[r].getNum()) {
                                var n = b.default.getDegreeForVar(r, e);
                                t.push(n)
                            } return t = V.dedup(t), 1 != t.length ? -1 : t[0]
                    }
                }, {
                    key: "solveForMyVar",
                    value: function(e) {
                        this.stepClearDenom();
                        var t = this.getEqVarDeg(e);
                        if (t == -1) return this.errorMsg(), this;
                        var r;
                        if (1 == t) r = ["var", e];
                        else {
                            if (2 != t || "=" != this.eq.sign) return this.errorMsg(), this;
                            r = ["^", ["var", e], t]
                        }
                        var n = !1;
                        for (var o in this.eq.leftpoly.coefs) b.default.getDegreeForVar(o, e) > 0 && 0 != this.eq.leftpoly.coefs[o].getNum() && (n = !0);
                        var a = !1;
                        for (var o in this.eq.rightpoly.coefs) b.default.getDegreeForVar(o, e) > 0 && 0 != this.eq.rightpoly.coefs[o].getNum() && (a = !0);
                        a && !n && this.doOpStep("flip", (0, x.constant)(0));
                        for (var o in this.eq.rightpoly.coefs)
                            if (b.default.getDegreeForVar(o, e) >= 1 && 0 != this.eq.rightpoly.coefs[o].getNum()) {
                                var i = b.default.varterm(this.eq.rightpoly.coefs[o].multiply(R.default.fracnum(-1)), o);
                                null != i && this.doOpStep("+", j(i))
                            } for (var o in this.eq.leftpoly.coefs)
                            if (0 == b.default.getDegreeForVar(o, e) && 0 != this.eq.leftpoly.coefs[o].getNum()) {
                                var i = b.default.varterm(this.eq.leftpoly.coefs[o].multiply(R.default.fracnum(-1)), o);
                                null != i && this.doOpStep("+", j(i))
                            } var u = this.eq.leftpoly.subtract(j(r));
                        if (!u.isNum() || 0 === !u.getConst().getNum()) {
                            var s = (0, x.constant)(0),
                                l = 0;
                            for (var o in this.eq.leftpoly.coefs)
                                if (b.default.getDegreeForVar(o, e) == t && 0 != this.eq.leftpoly.coefs[o].getNum()) {
                                    var i = b.default.varterm(this.eq.leftpoly.coefs[o], o);
                                    null != i && (s = s.add(j(i).divide(j(r)).polyNumReduce().polyReduce()), l += 1)
                                } if (l > 1 && "=" != this.eq.sign) return this.errorMsg(), this;
                            if (l > 1) this.addStepToRetval(["=", ["*", r, s.polyToExpr()], this.eq.rightpoly.polyToExpr()], "Factor out variable " + e), this.addStepToRetval(["=", ["/", ["*", r, s.polyToExpr()], s.polyToExpr()],
                                ["/", this.eq.rightpoly.polyToExpr(), s.polyToExpr()]
                            ], "Divide both sides by " + H(s.polyToExpr())), this.addStepToRetval(["=", r, this.eq.rightpoly.divide(s).polyNumReduce().polyReduce().polyToExpr()], ""), this.eq = A.default.Sign(j(r), this.eq.rightpoly.divide(s), "=");
                            else {
                                this.doOpAddStepText("/", s);
                                var f, c = j(r);
                                f = 0 == s.maxDegree() ? this.eq.rightpoly.divide(s) : this.eq.rightpoly.divide(s).polyNumReduce().polyReduce();
                                var p = B(this.eq.sign, s);
                                this.eq = new A.default.Sign(c, f, p), this.addStepToRetval(this.eq.eqToExpr(), "")
                            }
                        }
                        if (2 == t) {
                            var h = G(["=", ["var", e],
                                ["sqrt", this.eq.rightpoly.polyToExpr()]
                            ]);
                            h += "\\,\\,\\text' ou '\\,\\,", h += G(["=", ["var", e],
                                ["-", ["sqrt", this.eq.rightpoly.polyToExpr()]]
                            ]), this.addStepToRetval(h, "Take square root"), this.addAnsToRetval(h)
                        } else this.addAnsToRetval(this.eq.eqToExpr());
                        return this
                    }
                }], [{
                    key: "useQuadFormula",
                    value: function(e) {
                        var t = e.getCoefFromInt(2).getNum(),
                            r = e.getCoefFromInt(1).getNum(),
                            n = e.getCoefFromInt(0).getNum(),
                            o = (e.getVariable(), []),
                            a = r * r - 4 * t * n,
                            i = 0,
                            u = 0;
                        return 0 == a ? (i = -1 * r / (2 * t), o.push(i)) : a < 0 ? o = [] : (i = (-1 * r + Math.pow(a, .5)) / (2 * t), u = (-1 * r - Math.pow(a, .5)) / (2 * t), o.push(i), o.push(u)), o
                    }
                }, {
                    key: "useCubeFormula",
                    value: function(e) {
                        var t = e.getCoefFromInt(3),
                            r = e.getCoefFromInt(2).divide(t).getNum(),
                            n = e.getCoefFromInt(1).divide(t).getNum(),
                            o = e.getCoefFromInt(0).divide(t).getNum(),
                            a = (e.getVariable(), (3 * n - r * r) / 3),
                            i = (2 * r * r * r - 9 * r * n + 27 * o) / 27;
                        if (Math.abs(a) < 1e-7) {
                            if (i < 0) {
                                var u = Math.pow(-1 * i, 1 / 3) - r / 3;
                                return [u]
                            }
                            var u = -1 * Math.pow(i, 1 / 3) - r / 3;
                            return [u]
                        }
                        if (Math.abs(i) < 1e-7) {
                            if (a < 0) {
                                var u = -1 * r / 3,
                                    s = -1 * r / 3 + Math.pow(-1 * a, .5),
                                    l = -1 * r / 3 - Math.pow(-1 * a, .5);
                                return [u, s, l]
                            }
                            var u = -1 * r / 3;
                            return [u]
                        }
                        var f = i * i / 4 + a * a * a / 27;
                        if (Math.abs(f) < 1e-7) {
                            if (i < 0) {
                                var u = 2 * Math.pow(-1 * i / 2, 1 / 3) - r / 3,
                                    s = -1 * Math.pow(-1 * i / 2, 1 / 3) - r / 3;
                                return [u, s]
                            }
                            var u = -2 * Math.pow(i / 2, 1 / 3) - r / 3,
                                s = Math.pow(i / 2, 1 / 3) - r / 3;
                            return [u, s]
                        }
                        if (f > 0) {
                            var c, p, h = -1 * i / 2 + Math.pow(f, .5),
                                v = i / 2 + Math.pow(f, .5);
                            c = h < 0 ? -1 * Math.pow(-1 * h, 1 / 3) : Math.pow(h, 1 / 3), p = v < 0 ? -1 * Math.pow(-1 * v, 1 / 3) : Math.pow(v, 1 / 3);
                            var u = c - p - r / 3;
                            return [u]
                        }
                        var d = Math.pow(-1 * a / 3, 1.5),
                            g = Math.acos(-1 * i / (2 * d)),
                            u = 2 * Math.pow(d, 1 / 3) * Math.cos(g / 3) - r / 3,
                            s = 2 * Math.pow(d, 1 / 3) * Math.cos((g + 2 * Math.PI) / 3) - r / 3,
                            l = 2 * Math.pow(d, 1 / 3) * Math.cos((g + 4 * Math.PI) / 3) - r / 3;
                        return [u, s, l]
                    }
                }, {
                    key: "useQuartFormula",
                    value: function(e) {
                        for (var t = e.getCoefFromInt(4).getNum(), r = 1, n = e.getCoefFromInt(3).getNum() / t, o = e.getCoefFromInt(2).getNum() / t, a = e.getCoefFromInt(1).getNum() / t, i = e.getCoefFromInt(0).getNum() / t, u = e.getVariable(), s = o / r - 3 * n * n / (8 * r * r), l = a / r - n * o / (2 * r * r) + n * n * n / (8 * r * r * r), f = i / r - n * a / (4 * r * r) + n * n * o / (16 * r * r * r) - 3 * n * n * n * n / (256 * r * r * r * r), c = b.default.makeAPoly([8, -4 * s, -8 * f, 4 * s * f - l * l], u), p = this.useCubeFormula(c), h = p[0], v = 0; v < p.length && (h = p[v], 0 == h); v++);
                        var d, g, m, y, x = -2 * h - s + 2 * l / Math.sqrt(2 * h - s),
                            q = -2 * h - s - 2 * l / Math.sqrt(2 * h - s),
                            E = 2 * h - s;
                        0 == h && Math.abs(E) < 1e-7 ? (d = -.5 * Math.sqrt(4 * Math.sqrt(-1 * f)) - n / (4 * r), g = NaN, m = .5 * Math.sqrt(4 * Math.sqrt(-1 * f)) - n / (4 * r), y = NaN) : Math.abs(x) < 1e-7 && Math.abs(q) < 1e-7 && Math.abs(E) < 1e-7 ? (d = -1 * n / (4 * r), g = NaN, m = NaN, y = NaN) : Math.abs(l) < 1e-7 && Math.abs(E) < 1e-7 ? (d = Math.sqrt(.5 * (-1 * s + Math.sqrt(s * s - 4 * f))) - n / (4 * r), g = -1 * Math.sqrt(.5 * (-1 * s + Math.sqrt(s * s - 4 * f))) - n / (4 * r), m = Math.sqrt(.5 * (-1 * s - Math.sqrt(s * s - 4 * f))) - n / (4 * r), y = -1 * Math.sqrt(.5 * (-1 * s - Math.sqrt(s * s - 4 * f))) - n / (4 * r)) : (Math.abs(x) < 1e-7 ? (d = -.5 * Math.sqrt(2 * h - s) - n / (4 * r), g = NaN) : (d = -.5 * Math.sqrt(2 * h - s) + .5 * Math.sqrt(-2 * h - s + 2 * l / Math.sqrt(2 * h - s)) - n / (4 * r), g = -.5 * Math.sqrt(2 * h - s) - .5 * Math.sqrt(-2 * h - s + 2 * l / Math.sqrt(2 * h - s)) - n / (4 * r)), Math.abs(q) < 1e-7 ? (m = .5 * Math.sqrt(2 * h - s) - n / (4 * r), y = NaN) : (m = .5 * Math.sqrt(2 * h - s) + .5 * Math.sqrt(-2 * h - s - 2 * l / Math.sqrt(2 * h - s)) - n / (4 * r), y = .5 * Math.sqrt(2 * h - s) - .5 * Math.sqrt(-2 * h - s - 2 * l / Math.sqrt(2 * h - s)) - n / (4 * r)));
                        var M = [d, g, m, y].filter(function(e) {
                            return isFinite(e)
                        });
                        return M
                    }
                }]), e
            }(), r.Suggestion = function e(t, r, n) {
                a(this, e), this.op = t, this.poly = r, this.msg = n
            })
    }, {}],
    8: [function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            u = e(40),
            s = (o(u), e(10)),
            l = (n(s), e(43)),
            f = (n(l), function() {
                function e(t, r) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "=",
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    a(this, e), this.leftpoly = t, this.rightpoly = r, this.sign = n, this.rightexpr = o
                }
                return i(e, [{
                    key: "eqToExpr",
                    value: function() {
                        return [this.sign, this.leftpoly.polyToExpr(), null != this.rightexpr ? this.rightexpr : this.rightpoly.polyToExpr()]
                    }
                }, {
                    key: "getRightExpr",
                    value: function() {
                        return null != this.rightexpr ? this.rightexpr : this.rightpoly.getConst().fracToExpr()
                    }
                }, {
                    key: "getEqVar",
                    value: function() {
                        var e = this.leftpoly.getVariableRaw();
                        return null != e ? e : this.rightpoly.getVariableRaw()
                    }
                }, {
                    key: "getLeftCoef",
                    value: function(e) {
                        return this.leftpoly.getCoefFromInt(e)
                    }
                }, {
                    key: "getRightCoef",
                    value: function(e) {
                        return this.rightpoly.getCoefFromInt(e)
                    }
                }], [{
                    key: "Sign",
                    value: function(t, r, n) {
                        return new e(t, r, n, null)
                    }
                }, {
                    key: "SignExpr",
                    value: function(t, r, n, o) {
                        return new e(t, r, n, o)
                    }
                }]), e
            }());
        r.default = f
    }, {}],
    9: [function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function a(e) {
            var t = [];
            if (e.hasCommonFactor()) {
                var r = e.getCommonFactorPoly();
                e = e.polyDivideByCommonFactor(), t.push(r)
            }
            return e.maxDegree() >= 3 && e.maxDegree() <= 10 ? t = t.concat(l(e)) : 2 == e.maxDegree() ? t = t.concat(u(e)) : 1 == e.maxDegree() ? t = t.concat(s(e)) : t.push(e), t
        }

        function i(e) {
            var t = [];
            if (e.getFactorMinNum() > 1 && e.maxDegree() > 0) {
                var r = e.getFactorMinNum(),
                    n = (0, C.constant)(r);
                e = e.divide(n), t.push(n)
            }
            var o = e.getFactorMinDegreeMap();
            if (Object.keys(o).length > 0 && e.maxDegree() > 1) {
                var a = V.default.degreeMapToPolyList(o);
                if (e = e.polyDivideByDegreeMap(o), t = t.concat(a), 0 == e.maxDegree() && 1 == e.getNum()) return t
            }
            return e.maxDegree() >= 3 && e.maxDegree() <= 10 ? t = t.concat(l(e)) : 2 == e.maxDegree() ? t = t.concat(u(e)) : 1 == e.maxDegree() ? t = t.concat(s(e)) : t.push(e), t
        }

        function u(e) {
            var t = e.getCoefFromInt(2).getNum(),
                r = e.getCoefFromInt(1).getNum(),
                n = e.getCoefFromInt(0).getNum(),
                o = e.getVariableSafe(),
                a = N([t, r, n]),
                i = e,
                u = [];
            a > 1 && (t < 0 && (a *= -1), t /= a, r /= a, n /= a, i = V.default.makeAPoly([t, r, n], o), u.push((0, C.constant)(a)));
            var s = v(Math.abs(t)),
                l = v(Math.abs(n));
            if (t >= 0)
                for (var f = 0; f < s.length; f++) {
                    var c = s[f],
                        p = s[s.length - 1 - f];
                    if (c > p) break;
                    var h = m(t, r, n, p, c, l, o);
                    if (h.length > 1) return u = u.concat(h)
                } else
                    for (var f = 0; f < s.length; f++) {
                        var c = s[f],
                            d = -s[s.length - 1 - f],
                            h = m(t, r, n, d, c, l, o);
                        if (h.length > 1) return u = u.concat(h)
                    }
            return u.push(i), u
        }

        function s(e) {
            var t = e.getCoefFromInt(1).getNum(),
                r = e.getCoefFromInt(0).getNum(),
                n = e.getVariableSafe(),
                o = N([t, r]),
                a = e,
                i = [];
            return o > 1 && (t < 0 && (o *= -1), t /= o, r /= o, a = V.default.makeAPoly([t, r], n), i.push((0, C.constant)(o))), i.push(a), i
        }

        function l(e) {
            var t = x(e),
                r = e.getVariableSafe(),
                n = N(t),
                o = e,
                a = [];
            if (n > 1) {
                t[0] < 0 && (n *= -1);
                for (var i = 0; i < t.length; i++) t[i] = t[i] / n;
                o = V.default.makeAPoly(t, r), a.push((0, C.constant)(n))
            }
            var u = p(t, r);
            return a = a.concat(u)
        }

        function f(e, t) {
            for (var r = x(e), n = [], o = 0; o < r.length - 1; o++) {
                n.push(r[o]);
                for (var a = 0; a < t - 1; a++) n.push(0)
            }
            return n.push(r[r.length - 1]), V.default.makeAPoly(n, e.getVariableSafe())
        }

        function c(e, t) {
            for (var r = [], n = 0; n < e.length; n++) {
                var o = f(e[n], t);
                r.push(o)
            }
            return r
        }

        function p(e, t) {
            if (5 == e.length && 0 == e[1] && 0 == e[3]) {
                for (var r = [e[0], e[2], e[4]], n = h(r, t), o = c(n, 2), a = [], i = 0; i < o.length; i++) {
                    var u = o[i],
                        s = x(u),
                        l = h(s, t);
                    a = a.concat(l)
                }
                return a
            }
            return h(e, t)
        }

        function h(e, t) {
            for (var r = V.default.makeAPoly(e, t), n = [], o = e[0], a = v(Math.abs(o)), i = e[e.length - 1], u = v(Math.abs(i)), s = 0; s < u.length; s++)
                for (var l = u[s], f = -1 * l, c = [f, l], p = 0; p < c.length; p++)
                    for (var h = c[p], d = 0; d < a.length; d++)
                        for (var g = a[d], m = 0; m < e.length; m++) {
                            var x = q.roundPrec(P(L(r.polyToExpr(), h / g, t)));
                            if (0 != x) break;
                            var b;
                            b = r.getCoefFromInt(r.maxDegree()).getNum() > 0 ? V.default.makeAPoly([g, -1 * h], t) : V.default.makeAPoly([-1 * g, h], t), n.push(b), r = y(r, b)
                        }
            return (r.maxDegree() > 0 || 1 != r.getNum()) && n.push(r), n
        }

        function v(e) {
            for (var t = [], r = function(e) {
                    t.indexOf(e) > -1 || t.push(e)
                }, n = e, o = 1; o * o <= n; o++) e % o == 0 && (r(o), r(e / o));
            return d(t)
        }

        function d(e) {
            return e.sort(function(e, t) {
                return e - t
            }), e
        }

        function g(e, t, r, n, o, a) {
            if (e * n + r * t == o) {
                var i = V.default.makeAPoly([e, t], a),
                    u = V.default.makeAPoly([r, n], a);
                return [i, u]
            }
            return []
        }

        function m(e, t, r, n, o, a, i) {
            var u = [];
            if (r >= 0)
                for (var s = 0; s < a.length; s++) {
                    var l = a[s],
                        f = a[a.length - 1 - s],
                        c = -l,
                        p = -f;
                    if (n == o && l > f) break;
                    if (u = g(n, l, o, f, t, i), u.length > 1) return u;
                    if (u = g(n, c, o, p, t, i), u.length > 1) return u
                } else
                    for (var s = 0; s < a.length; s++) {
                        var l = a[s],
                            f = a[a.length - 1 - s],
                            c = -l,
                            p = -f;
                        if (u = g(n, l, o, p, t, i), u.length > 1) return u;
                        if (u = g(n, c, o, f, t, i), u.length > 1) return u
                    }
            return u
        }

        function y(e, t) {
            for (var r = x(e), n = e.getVariableSafe(), o = t.getCoefFromInt(1).getNum(), a = t.getCoefFromInt(0).getNum(), i = [], u = 0; u < r.length - 1; u++) {
                var s = r[u],
                    l = s / o;
                i.push(l), r[u] = r[u] - l * o, r[u + 1] = r[u + 1] - l * a
            }
            return V.default.makeAPoly(i, n)
        }

        function x(e) {
            for (var t = e.maxDegree(), r = [], n = t; n >= 0; n--) {
                var o = e.getCoefFromInt(n).getNum();
                r.push(o)
            }
            return r
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.getFactorPolylist = a, r.getFactorSmallPolylist = i;
        var b = e(45),
            q = o(b),
            E = e(40),
            M = (o(E), e(5)),
            w = o(M),
            T = e(48),
            D = o(T),
            S = e(41),
            k = o(S),
            C = e(43),
            V = n(C),
            N = k.getGCD,
            P = w.evalExpr,
            L = D.evalAtVal
    }, {}],
    10: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            i = e(41),
            u = n(i),
            s = e(45),
            l = n(s),
            f = e(40),
            c = n(f),
            p = (l.roundPrec, c.exprToText),
            h = c.exprToTextH,
            v = function() {
                function e(t, r) {
                    o(this, e), this.numer = t, this.denom = r
                }
                return a(e, [{
                    key: "getNum",
                    value: function() {
                        return this.numer / this.denom
                    }
                }, {
                    key: "fracToArray",
                    value: function() {
                        return ["/", this.numer, this.denom]
                    }
                }, {
                    key: "fracToExpr",
                    value: function() {
                        if (1 == this.denom) return l.roundPrec(this.numer);
                        if (u.isInt(this.numer) && u.isInt(this.denom)) {
                            var e = ["/", this.numer, this.denom];
                            return e
                        }
                        return this.getNum()
                    }
                }, {
                    key: "fracToExprMixed",
                    value: function() {
                        if (1 == this.denom) return l.roundPrec(this.numer);
                        if (u.isInt(this.numer) && u.isInt(this.denom)) {
                            if (Math.abs(this.numer / this.denom) > 1) {
                                if (this.numer / this.denom > 0) {
                                    var e = Math.floor(Math.abs(this.numer / this.denom)),
                                        t = Math.abs(this.numer) - Math.abs(this.denom) * e;
                                    return ["space", e, ["/", t, this.denom]]
                                }
                                var e = Math.floor(Math.abs(this.numer / this.denom)),
                                    t = Math.abs(this.numer) - Math.abs(this.denom) * e;
                                return ["-", ["space", e, ["/", t, this.denom]]]
                            }
                            return ["/", this.numer, this.denom]
                        }
                        return this.getNum()
                    }
                }, {
                    key: "getFracDenPos",
                    value: function() {
                        var t = this.numer * this.denom < 0,
                            r = t ? -1 : 1,
                            n = r * Math.abs(this.numer),
                            o = Math.abs(this.denom);
                        return new e(n, o)
                    }
                }, {
                    key: "reduce",
                    value: function() {
                        var t = u.getGCD([this.numer, this.denom]),
                            r = this.numer / t,
                            n = this.denom / t;
                        return new e(r, n)
                    }
                }, {
                    key: "recip",
                    value: function() {
                        return new e(this.denom, this.numer)
                    }
                }, {
                    key: "negfrac",
                    value: function() {
                        return new e(-this.numer, this.denom)
                    }
                }, {
                    key: "reduces",
                    value: function() {
                        return u.getGCD([this.numer, this.denom]) > 1
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        var r = this.getFracDenPos(),
                            n = t.getFracDenPos(),
                            o = u.getLCM([r.denom, n.denom]),
                            a = o / r.denom,
                            i = [r.numer * a, r.denom * a],
                            s = o / n.denom,
                            l = [n.numer * s, n.denom * s],
                            f = new e(i[0] + l[0], i[1]),
                            c = f.reduce();
                        return c
                    }
                }, {
                    key: "subtract",
                    value: function(e) {
                        return this.add(e.negfrac())
                    }
                }, {
                    key: "multiply",
                    value: function(t) {
                        var r = this.getFracDenPos(),
                            n = t.getFracDenPos(),
                            o = r.numer,
                            a = r.denom,
                            i = n.numer,
                            u = n.denom,
                            s = new e(o * i, a * u),
                            l = s.reduce();
                        return l
                    }
                }, {
                    key: "multNum",
                    value: function(t) {
                        return this.multiply(e.fracnum(t))
                    }
                }, {
                    key: "divide",
                    value: function(e) {
                        return this.multiply(e.recip())
                    }
                }, {
                    key: "pow",
                    value: function(t) {
                        return t >= 0 ? new e(Math.pow(this.numer, t), Math.pow(this.denom, t)) : new e(Math.pow(this.denom, Math.abs(t)), Math.pow(this.numer, Math.abs(t)))
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return p(this.fracToExpr())
                    }
                }, {
                    key: "toStringH",
                    value: function() {
                        return h(this.fracToExpr())
                    }
                }], [{
                    key: "fracnum",
                    value: function(t) {
                        return new e(t, 1)
                    }
                }, {
                    key: "getFracExpr",
                    value: function(e) {
                        return e.fracToExpr()
                    }
                }, {
                    key: "getFracExprMixed",
                    value: function(e) {
                        return e.fracToExprMixed()
                    }
                }, {
                    key: "getFracNum",
                    value: function(e) {
                        return e.getNum()
                    }
                }]), e
            }();
        r.default = v
    }, {}],
    11: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e) {
            var t = u(e),
                r = [],
                n = new ye(t, r);
            return n
        }

        function u(e) {
            var t = e[0],
                r = N.exprToGenPoly(e[1]),
                n = N.exprToGenPoly(e[2]),
                o = de(r, n),
                a = ie.makeMap(r.outerpoly, o.innerMap),
                i = ie.makeMap(o.outerpoly, o.innerMap);
            return me.Sign(a, i, t)
        }

        function s(e, t, r) {
            var n = l(t),
                o = n.printList,
                a = n.anslist,
                i = n.eqgatoms,
                u = [],
                s = e.eq.leftpoly.foundinner() && !e.eq.leftpoly.innerMap["#"].args[0].noDenom();
            return "=" == e.eq.sign && (e.eq.rightpoly.outerpoly.maxDegree() > 0 || s) ? (o.push(pe("<hr>")), E(o, a, u, r)) : u = u.concat(a), ge.eqg(o, u, i)
        }

        function l(e) {
            var t = [],
                r = [],
                n = e[0],
                o = y(n),
                a = !0,
                i = ne(e[2]);
            if (0 == i.maxDegree()) {
                var u = i.getConst().getNum();
                if (u < 0 && ("=" == n || "<=" == n || "<" == n)) return t.push(pe("No solutions. (Absolute value cannot be less than 0.)")), new ge(t, r);
                var s = 0 == u && "=" == n;
                a = !s
            }
            var l = [n, e[1][1], e[2]],
                f = ve(n, (0, k.constant)(-1)),
                c = [f, e[1][1],
                    ["-", e[2]]
                ],
                h = oe(l),
                v = oe(c);
            a ? "and" == o ? t.push(ce("\\text'We know '\\,\\," + h + "\\,\\,\\text' and '\\,\\," + v, ["We know", h, "and", v])) : t.push(ce("\\text'We know either '\\,\\," + h + "\\,\\,\\text' ou '\\,\\," + v, ["We know either", h, "ou", v])) : t.push(ce("\\text'We know '\\,\\," + h, ["We know", h])), t.push(pe("<hr>")), "and" == o ? t.push(fe(h, "(Condition 1)")) : t.push(fe(h, "(Possibility 1)"));
            var d = p(l);
            t = t.concat(d.printList);
            var g = d.myeq.eqToExpr(),
                m = d.anslist,
                x = d.ldanslist,
                b = d.rdanslist;
            r = r.concat(m);
            var q = null;
            if (a) {
                t.push(pe("<hr>")), "and" == o ? t.push(fe(v, "(Condition 2)")) : t.push(fe(v, "(Possibility 2)"));
                var E = p(c);
                t = t.concat(E.printList),
                    q = E.myeq.eqToExpr();
                var M = E.anslist;
                r = r.concat(M)
            }
            return ge.denomeqg(t, r, x, b, [g, q, o])
        }

        function f(e) {
            var t = h(e);
            return t.solveForGenVar(), d(t)
        }

        function c(e) {
            var t = h(e),
                r = null,
                n = null;
            t.eq.leftpoly.noDenom() || (r = C.default.coefsToExprInner(t.eq.leftpoly.dcoefs, Q.default.getFracExpr)), t.eq.rightpoly.noDenom() || (n = C.default.coefsToExprInner(t.eq.rightpoly.dcoefs, Q.default.getFracExpr));
            var o = {};
            if (null != r || null != n) {
                if (null != r) {
                    var a = f(["=", r, 0]);
                    o.ldanslist = a.anslist
                }
                if (null != n) {
                    var i = f(["=", n, 0]);
                    o.rdanslist = i.anslist
                }
            }
            return o
        }

        function p(e) {
            var t = h(e);
            t.multDenomEq(), t.solveForGenVar();
            var r = d(t),
                n = c(e);
            return null != n.ldanslist && (r.ldanslist = n.ldanslist), null != n.rdanslist && (r.rdanslist = n.rdanslist), r
        }

        function h(e) {
            var t = v(e);
            return t.simplifyEq(e), t
        }

        function v(e) {
            var t = re(e),
                r = [],
                n = new X(t, r);
            return n
        }

        function d(e) {
            var t = e.toDval(),
                r = t.retval,
                n = t.eq,
                o = m(r, 1),
                a = o[0],
                i = e.anslist;
            return ge.Eq(a, i, n)
        }

        function g(e, t) {
            var r = [],
                n = e[1],
                o = oe(n),
                a = e[2];
            return null != a && "" != a ? "" != o ? r.push(fe(o, "(" + a + ")")) : r.push(pe("(" + a + ")")) : r.push(le(o)), {
                printList: r,
                stepnum: t
            }
        }

        function m(e, t) {
            for (var r = [], n = 0; n < e.length; n++) {
                var o = e[n],
                    a = o[0];
                if ("step" == a) {
                    var i = g(o, t);
                    r = r.concat(i.printList), t = i.stepnum
                } else if ("msg" == a) {
                    var u = o[1];
                    if (o.length <= 2) r.push(pe(u));
                    else {
                        var s = o[2];
                        r.push(he(u, s))
                    }
                } else if ("emsg" == a) {
                    var u = o[1];
                    if (o.length <= 2) r.push(Y(u));
                    else {
                        var s = o[2];
                        r.push(Z(u, s))
                    }
                } else if ("mmsg" == a) {
                    var u = o[1];
                    r.push(le(u))
                }
            }
            return [r, t]
        }

        function y(e) {
            var t = "";
            return t = ["<", "<="].indexOf(e) > -1 ? "et" : "ou"
        }

        function x(e) {
            for (var t = [], r = [], n = 0; n < e.length; n++) {
                var o = e[n],
                    a = o.sign,
                    i = o.rightpoly.getNum();
                "=" == a ? t.indexOf(i) > -1 || (r.push(o), t.push(i)) : r.push(o)
            }
            return r
        }

        function b(e, t, r, n) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                a = r(e),
                i = a.printList,
                u = a.anslist,
                s = [];
            n ? E(i, u, s, t) : s = u;
            var l = x(s);
            return o && (i.push(pe("<hr>")), i.push(pe("<u>Réponse:</u>")), i.push(M(l, "ou"))), new ge(i, l)
        }

        function q(e, t, r, n, o) {
            if (t.length > 0) {
                e.push(pe(o));
                for (var a = 0; a < t.length; a++) {
                    var i = t[a],
                        u = i.rightpoly.getNum(),
                        s = ee(n, u, i.getEqVar());
                    1 == te(s) ? (r.push(i), e.push(fe(oe(i.eqToExpr()), "(Works in original equation)"))) : e.push(fe(oe(i.eqToExpr()), "(Doesn't work in original equation)"))
                }
            }
        }

        function E(e, t, r, n) {
            q(e, t, r, n, "Regarde tes réponses.")
        }

        function M(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            if (0 == e.length) return pe("Aucune solutions.");
            for (var n = "", o = 0; o < e.length; o++) {
                o > 0 && (n += "\\,\\,\\text' " + t + " '\\,\\,");
                var a = e[o],
                    i = oe(a.eqToExpr());
                if (n += i, 0 == a.leftpoly.maxDegree() && 0 == a.rightpoly.maxDegree() && a.leftpoly.getNum() == a.rightpoly.getNum()) return pe("All real numbers are solutions.")
            }
            return "" == r ? le(n) : fe(n, r)
        }

        function w(e, t, r) {
            return M(e, t, r)
        }

        function T(e) {
            var t = [],
                r = [],
                n = e[0],
                o = y(n),
                a = !0,
                i = ne(e[2]);
            if (0 == i.maxDegree()) {
                var u = i.getConst().getNum();
                if (u < 0 && ("=" == n || "<=" == n || "<" == n)) return t.push(pe("No solutions. (Absolute value cannot be less than 0.)")), new ge(t, r);
                var s = 0 == u && "=" == n;
                a = !s
            }
            var l = [n, e[1][1], e[2]],
                f = ve(n, (0, k.constant)(-1)),
                c = [f, e[1][1],
                    ["-", e[2]]
                ],
                p = oe(l),
                h = oe(c);
            a ? "and" == o ? t.push(ce("\\text'We know '\\,\\," + p + "\\,\\,\\text' and '\\,\\," + h, ["We know", p, "and", h])) : t.push(ce("\\text'We know either '\\,\\," + p + "\\,\\,\\text' ou '\\,\\," + h, ["We know either", p, "or", h])) : t.push(ce("\\text'We know '\\,\\," + p, ["We know", p])), t.push(pe("<hr>")), "and" == o ? t.push(fe(p, "(Condition 1)")) : t.push(fe(p, "(Possibility 1)"));
            var v = D(l);
            t = t.concat(v.printList);
            var d = v.myeq.eqToExpr(),
                g = v.anslist;
            r = r.concat(g);
            var m = null;
            if (a) {
                t.push(pe("<hr>")), "and" == o ? t.push(fe(h, "(Condition 2)")) : t.push(fe(h, "(Possibility 2)"));
                var x = D(c);
                t = t.concat(x.printList), m = x.myeq.eqToExpr();
                var b = x.anslist;
                r = r.concat(b)
            }
            return ge.eqg(t, r, [d, m, o])
        }

        function D(e) {
            var t = h(e);
            return t.solveForLinVar(), d(t)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.GenEqScratch = r.GenEquation = r.Tval = void 0;
        var S = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }();
        r.getGenEqScratch = i, r.doAbsVarEqInner = s, r.showSimpleAbsVarEq = l, r.solveForGenVarPrint = f, r.getDenomAns = c, r.solveForDenomVarPrint2 = p, r.simplifyEq = h, r.getEqScratch = v, r.eqScratchToDartval = d, r.getPrintListR2 = m, r.getAbsOpType = y, r.checkDups = x, r.solvePrint = b, r.checkAnswersGen = q, r.getSolMsg = M, r.getSolMsga = w, r.solveForLinVarPrint = D;
        var k = e(43),
            C = o(k),
            V = e(3),
            N = n(V),
            P = e(5),
            L = n(P),
            F = e(6),
            O = n(F),
            A = e(7),
            I = n(A),
            R = e(12),
            _ = n(R),
            j = e(40),
            G = n(j),
            H = e(48),
            $ = n(H),
            U = e(8),
            z = o(U),
            B = e(10),
            Q = o(B),
            W = I.doOp,
            K = I.Dval,
            J = I.dvalToJs3,
            Y = $.emsgstr,
            Z = $.emsgstr2,
            X = (I.EqLike, I.EqScratch),
            ee = $.evalAtVal,
            te = L.evalExpr,
            re = I.exprToEq,
            ne = O.exprToPoly,
            oe = G.exprToText,
            ae = G.exprToTextH,
            ie = _.GenPolynomial,
            ue = _.InnerExpr,
            se = _.innerexprToExpr,
            le = $.mDiv,
            fe = $.mDiva,
            ce = $.mobDiv,
            pe = $.msgstr,
            he = $.msgstr2,
            ve = G.signTransform,
            de = _.unifyGen,
            ge = r.Tval = function() {
                function e(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                        u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [];
                    a(this, e), this.printList = t, this.anslist = r, this.eqgatoms = n, this.ldanslist = o, this.rdanslist = i, this.tdanslist = u
                }
                return S(e, null, [{
                    key: "ld",
                    value: function(t, r, n) {
                        var o = [];
                        return new e(t, r, o, n)
                    }
                }, {
                    key: "denom",
                    value: function(t, r, n, o) {
                        var a = [];
                        return new e(t, r, a, n, o)
                    }
                }, {
                    key: "Eq",
                    value: function(t, r, n) {
                        var o = [],
                            a = [],
                            i = [],
                            u = [],
                            s = new e(t, r, o, a, i, u);
                        return s.myeq = n, s
                    }
                }, {
                    key: "denomeqg",
                    value: function(t, r, n, o, a) {
                        return new e(t, r, a, n, o)
                    }
                }, {
                    key: "eqg",
                    value: function(t, r, n) {
                        var o = [],
                            a = [];
                        return new e(t, r, n, o, a)
                    }
                }]), e
            }(),
            me = r.GenEquation = function() {
                function e(t, r) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "=";
                    a(this, e), this.leftpoly = t, this.rightpoly = r, this.sign = n
                }
                return S(e, [{
                    key: "eqToExpr",
                    value: function() {
                        return [this.sign, this.leftpoly.polyToExpr(), this.rightpoly.polyToExpr()]
                    }
                }, {
                    key: "getOneInnerExpr",
                    value: function() {
                        return this.leftpoly.foundinner() ? this.leftpoly.innerexpr() : this.rightpoly.foundinner() ? this.rightpoly.innerexpr() : new ue("+", [(0, k.constant)(0)])
                    }
                }, {
                    key: "getOneInnerExprP",
                    value: function() {
                        var e = this.getOneInnerExpr();
                        return se(e)
                    }
                }, {
                    key: "getOneInnerVar",
                    value: function() {
                        return this.getOneInnerExpr().getVariableSafe()
                    }
                }], [{
                    key: "Sign",
                    value: function(t, r, n) {
                        return new e(t, r, n)
                    }
                }, {
                    key: "commonMap",
                    value: function(t, r, n) {
                        var o = new ie.makeMap(t, n),
                            a = new ie.makeMap(r, n);
                        return new e(o, a, "=")
                    }
                }]), e
            }(),
            ye = r.GenEqScratch = function() {
                function e(t, r) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    a(this, e), this.eq = t, this.retval = r, this.anslist = n
                }
                return S(e, [{
                    key: "addStepToRetval",
                    value: function(e, t) {
                        this.retval.push(["step", e, t])
                    }
                }, {
                    key: "addEMsgToRetval",
                    value: function(e) {
                        this.retval.push(["emsg", e, ""])
                    }
                }, {
                    key: "addMsgToRetval",
                    value: function(e) {
                        this.retval.push(["msg", e, ""])
                    }
                }, {
                    key: "addMMsgToRetval",
                    value: function(e) {
                        this.retval.push(["mmsg", e, ""])
                    }
                }, {
                    key: "addHeadDivToRetval",
                    value: function(e) {
                        this.retval.push(["msg", e, "MHeadDiv"])
                    }
                }, {
                    key: "addAnsToRetval",
                    value: function(e) {
                        this.retval.push(["ans", e, "answer"])
                    }
                }, {
                    key: "addAnsMsgToRetval",
                    value: function(e) {
                        this.retval.push(["ansmsg", e, ""])
                    }
                }, {
                    key: "toDval",
                    value: function() {
                        return new K(this.retval, this.eq)
                    }
                }, {
                    key: "doOpAddStepText",
                    value: function(e, t) {
                        var r = t.polyToExpr();
                        this.doOpAddStepTextExpr(e, r)
                    }
                }, {
                    key: "doOpAddStepTextExpr",
                    value: function(e, t) {
                        var r = ["color", "blue", t];
                        if ("flip" == e) this.addStepToRetval("", "Flip the equation");
                        else {
                            var n = [this.eq.sign, [e, this.eq.leftpoly.polyToExpr(), r],
                                    [e, this.eq.rightpoly.polyToExpr(), r]
                                ],
                                o = "",
                                a = ae(t);
                            switch (e) {
                                case "+":
                                    o = "Add " + a + " to both sides";
                                    break;
                                case "-":
                                    o = "Subtract " + a + " from both sides";
                                    break;
                                case "*":
                                    o = "Multiply both sides by " + a;
                                    break;
                                case "/":
                                    o = "Divide both sides by " + a
                            }
                            this.addStepToRetval(n, o)
                        }
                    }
                }, {
                    key: "isConstEq",
                    value: function() {
                        return !(0 != this.eq.leftpoly.outerpoly.maxDegree() || 0 != this.eq.rightpoly.outerpoly.maxDegree() || !this.eq.leftpoly.outerpoly.noDenom() || !this.eq.rightpoly.outerpoly.noDenom())
                    }
                }, {
                    key: "doOpOnEq",
                    value: function(e, t) {
                        var r = z.default.Sign(this.eq.leftpoly.outerpoly, this.eq.rightpoly.outerpoly, this.eq.sign),
                            n = W(r, e, t);
                        return this.eq.leftpoly.outerpoly = n.leftpoly, this.eq.rightpoly.outerpoly = n.rightpoly, this.eq.sign = n.sign, this
                    }
                }, {
                    key: "doOpStep",
                    value: function(e, t) {
                        return this.doOpAddStepText(e, t), this.doOpOnEq(e, t), this.addStepToRetval(this.eq.eqToExpr(), ""), this
                    }
                }, {
                    key: "doOpStepOuter",
                    value: function(e, t, r) {
                        var n = ie.makeMap(t, r),
                            o = n.polyToExpr();
                        return this.doOpAddStepTextExpr(e, o), this.doOpOnEq(e, t), this.addStepToRetval(this.eq.eqToExpr(), ""), this
                    }
                }, {
                    key: "addErrorMsg",
                    value: function() {
                        return "=" == this.eq.sign ? this.addMsgToRetval('<font color="red" style="line-height:30px">Désolé, je ne sais pas comment résoudre cette équation.</font>') : this.addMsgToRetval('<font color="red" style="line-height:30px">Sorry, I don\'t know how to solve this inequality.</font>'), this.addEMsgToRetval('<font color="red" style="line-height:30px">To send feedback/suggestions, please click the button (with the "?") on the bottom right. Thank you.</font>'), this
                    }
                }, {
                    key: "addErrorMsg2",
                    value: function() {
                        return "=" == this.eq.sign ? this.addMsgToRetval('<font color="red" style="line-height:30px">Sorry2, I don\'t know how to solve this equation.</font>') : this.addMsgToRetval('<font color="red" style="line-height:30px">Sorry2, I don\'t know how to solve this inequality.</font>'), this.addEMsgToRetval('<font color="red" style="line-height:30px">To send feedback/suggestions, please click the button (with the "?") on the bottom right. Thank you.</font>'), this
                    }
                }, {
                    key: "errorDval",
                    value: function() {
                        this.addErrorMsg();
                        var e = this.toDval();
                        return e
                    }
                }, {
                    key: "errorDval2",
                    value: function() {
                        this.addErrorMsg2();
                        var e = this.toDval();
                        return e
                    }
                }, {
                    key: "errorDartvalJ",
                    value: function() {
                        this.addErrorMsg();
                        var e = this.toDval();
                        return J(e)
                    }
                }, {
                    key: "errorDartvalJ2",
                    value: function() {
                        this.addErrorMsg2();
                        var e = this.toDval();
                        return J(e)
                    }
                }, {
                    key: "solveForMyVar",
                    value: function(e) {
                        this.eq.leftpoly.innerMap[e];
                        if (!this.eq.leftpoly.outerpoly.noDenom() || !this.eq.rightpoly.outerpoly.noDenom()) return this.addErrorMsg(), this;
                        for (var t in this.eq.leftpoly.outerpoly.coefs)
                            if (C.default.getDegreeForVar(t, e) > 1 && 0 != this.eq.leftpoly.outerpoly.coefs[t].getNum()) return this.addErrorMsg(), this;
                        for (var t in this.eq.rightpoly.outerpoly.coefs)
                            if (C.default.getDegreeForVar(t, e) > 1 && 0 != this.eq.rightpoly.outerpoly.coefs[t].getNum()) return this.addErrorMsg(), this;
                        var r = !1;
                        for (var t in this.eq.leftpoly.outerpoly.coefs) C.default.getDegreeForVar(t, e) > 0 && 0 != this.eq.leftpoly.outerpoly.coefs[t].getNum() && (r = !0);
                        var n = !1;
                        for (var t in this.eq.rightpoly.outerpoly.coefs) C.default.getDegreeForVar(t, e) > 0 && 0 != this.eq.rightpoly.outerpoly.coefs[t].getNum() && (n = !0);
                        n && !r && this.doOpStep("flip", (0, k.constant)(0));
                        for (var t in this.eq.rightpoly.outerpoly.coefs)
                            if (C.default.getDegreeForVar(t, e) >= 1 && 0 != this.eq.rightpoly.outerpoly.coefs[t].getNum()) {
                                var o = C.default.varterm(this.eq.rightpoly.outerpoly.coefs[t].multiply(Q.default.fracnum(-1)), t);
                                null != o && this.doOpStepOuter("+", ne(o), this.eq.leftpoly.innerMap)
                            } for (var t in this.eq.leftpoly.outerpoly.coefs)
                            if (0 == C.default.getDegreeForVar(t, e) && 0 != this.eq.leftpoly.outerpoly.coefs[t].getNum()) {
                                var o = C.default.varterm(this.eq.leftpoly.outerpoly.coefs[t].multiply(Q.default.fracnum(-1)), t);
                                null != o && this.doOpStepOuter("+", ne(o), this.eq.leftpoly.innerMap)
                            } var a = this.eq.leftpoly.outerpoly.subtract(ne(["var", e]));
                        if (!a.isNum() || 0 != a.getConst().getNum()) {
                            var i = (0, k.constant)(0),
                                u = 0;
                            for (var t in this.eq.leftpoly.outerpoly.coefs)
                                if (1 == C.default.getDegreeForVar(t, e) && 0 != this.eq.leftpoly.outerpoly.coefs[t].getNum()) {
                                    var o = C.default.varterm(this.eq.leftpoly.outerpoly.coefs[t], t);
                                    null != o && (i = i.add(ne(o).divide(ne(["var", e])).polyNumReduce().polyReduce()), u += 1)
                                } if (u > 1) this.addStepToRetval(["=", ["*", ["var", e], i.polyToExpr()], this.eq.rightpoly.polyToExpr()], "Factor out variable " + e), this.addStepToRetval(["=", ["/", ["*", ["var", e], i.polyToExpr()], i.polyToExpr()],
                                ["/", this.eq.rightpoly.polyToExpr(), i.polyToExpr()]
                            ], "Divide both sides by " + ae(i.polyToExpr())), this.addStepToRetval(["=", ["var", e], this.eq.rightpoly.outerpoly.divide(i).polyNumReduce().polyReduce().polyToExpr()], ""), this.eq.leftpoly.outerpoly = ne(["var", e]), this.eq.rightpoly.outerpoly = this.eq.rightpoly.outerpoly.divide(i);
                            else {
                                if (i.noDenom() && 0 == i.maxDegree() && 0 == i.getConst().getNum()) return this;
                                this.doOpAddStepText("/", i), this.eq.leftpoly.outerpoly = ne(["var", e]), this.eq.rightpoly.outerpoly = this.eq.rightpoly.outerpoly.divide(i), this.eq.sign = ve(this.eq.sign, i), this.addStepToRetval(this.eq.eqToExpr(), "")
                            }
                        }
                        return this
                    }
                }, {
                    key: "clearLeftTwoVar",
                    value: function(e, t) {
                        for (var r in this.eq.leftpoly.outerpoly.coefs)
                            if (0 == C.default.getDegreeForVar(r, e) && 0 == C.default.getDegreeForVar(r, t)) {
                                var n = C.default.varterm(this.eq.leftpoly.outerpoly.coefs[r].multiply(Q.default.fracnum(-1)), r);
                                null != n && this.doOpStep("+", ne(n))
                            } for (var r in this.eq.rightpoly.outerpoly.coefs)
                            if (C.default.getDegreeForVar(r, e) >= 1 || C.default.getDegreeForVar(r, t) >= 1) {
                                var n = C.default.varterm(this.eq.rightpoly.outerpoly.coefs[r].multiply(Q.default.fracnum(-1)), r);
                                null != n && this.doOpStepOuter("+", ne(n), this.eq.leftpoly.innerMap)
                            } return this
                    }
                }, {
                    key: "clearRightConstOpt",
                    value: function(e, t) {
                        if (0 == this.eq.leftpoly.outerpoly.getCoef("0").getNum()) return this;
                        for (var r in this.eq.rightpoly.outerpoly.coefs)
                            if (0 == C.default.getDegreeForVar(r, e) && 0 == C.default.getDegreeForVar(r, t)) {
                                var n = C.default.varterm(this.eq.rightpoly.outerpoly.coefs[r].multiply(Q.default.fracnum(-1)), r);
                                null != n && this.doOpStep("+", ne(n))
                            } return this
                    }
                }, {
                    key: "doAbsVarEq",
                    value: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            n = s(this, e, t),
                            o = n.printList,
                            a = n.anslist,
                            i = n.eqgatoms,
                            u = x(a);
                        r && (o.push(pe("<hr>")), o.push(pe("<u>Réponse:</u>")), o.push(M(u, y(this.eq.sign)))), this.anslist = this.anslist.concat(u);
                        var l = this.toDval();
                        return l.printList = o, l.eqgatoms = i, l
                    }
                }, {
                    key: "doAbsVarIneq",
                    value: function(e, t) {
                        var r = T(e),
                            n = r.printList,
                            o = r.anslist,
                            a = r.eqgatoms,
                            i = [];
                        "=" == this.eq.sign && this.eq.rightpoly.outerpoly.maxDegree() > 0 ? (n.push(pe("<hr>")), E(n, o, i, t)) : i = i.concat(o), n.push(pe("<hr>")), n.push(pe("<u>Réponse:</u>")), n.push(M(i, y(this.eq.sign)));
                        var u = this.toDval();
                        return u.printList = n, u.eqgatoms = a, u
                    }
                }, {
                    key: "solveDartval",
                    value: function(e, t, r, n) {
                        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            a = b(e, t, r, n, o),
                            i = a.printList,
                            u = a.anslist;
                        null != u && (this.anslist = this.anslist.concat(u));
                        var s = this.toDval();
                        return s.printList = i, s
                    }
                }, {
                    key: "solveEqDartval",
                    value: function(e, t, r) {
                        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return this.solveDartval(this.eq.eqToExpr(), e, t, r, n)
                    }
                }]), e
            }()
    }, {}],
    12: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e) {
            var t = e.op,
                r = e.args,
                n = [];
            r.forEach(function(e) {
                n.push(e.polyToExpr())
            });
            var o = [t];
            return o = o.concat(n)
        }

        function u(e, t) {
            if (e.op != t.op) return !1;
            if (e.args.length != t.args.length) return !1;
            for (var r = 0; r < e.args.length; r++)
                if (!e.args[r].equalpoly(t.args[r])) return !1;
            return !0
        }

        function s(e, t) {
            function r(e) {
                var t = ["#", "&", "%", "@"];
                return t = t.filter(function(t) {
                    return !(e.indexOf(t) > -1)
                }), t.length > 0 ? t[0] : "("
            }
            var n = h.default.MF(Object.assign({}, t.outerpoly.coefs), Object.assign({}, t.outerpoly.dcoefs)),
                o = Object.assign({}, e.innerMap);
            for (var a in t.innerMap) {
                var i = "",
                    s = t.innerMap[a];
                for (var l in e.innerMap) {
                    var f = e.innerMap[l];
                    if (u(s, f)) {
                        i = l;
                        break
                    }
                }
                if ("" == i) {
                    var c = r(Object.keys(o));
                    n = E(q(n.polyToExpr(), ["var", c], a)), o[c] = s
                } else n = E(q(n.polyToExpr(), ["var", i], a))
            }
            return new w.makeMap(n, o)
        }

        function l(e) {
            return new w((0, p.constant)(e))
        }

        function f() {
            return new w((0, p.polyError)())
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.GenPolynomial = r.InnerExpr = void 0;
        var c = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }();
        r.innerexprToExpr = i, r.unifyGen = s, r.genconstant = l, r.genpolyError = f;
        var p = e(43),
            h = o(p),
            v = e(6),
            d = n(v),
            g = e(40),
            m = (n(g), e(48)),
            y = n(m),
            x = e(10),
            b = o(x),
            q = y.evalAtVal,
            E = d.exprToPoly,
            M = r.InnerExpr = function() {
                function e(t, r) {
                    a(this, e), this.op = t, this.args = r
                }
                return c(e, [{
                    key: "getVariable",
                    value: function() {
                        for (var e = null, t = 0; t < this.args.length; t++) {
                            var r = this.args[t];
                            if (e = r.getVariableRaw(), null != e) break
                        }
                        return e
                    }
                }, {
                    key: "getVariableSafe",
                    value: function() {
                        var e = this.getVariable();
                        return null != e ? e : "x"
                    }
                }]), e
            }(),
            w = r.GenPolynomial = function() {
                function e(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    a(this, e), this.outerpoly = t, this.innerMap = r
                }
                return c(e, [{
                    key: "polyToExpr",
                    value: function() {
                        var e = this.outerpoly.polyToExpr();
                        for (var t in this.innerMap) {
                            var r = i(this.innerMap[t]);
                            e = q(e, r, t)
                        }
                        return e
                    }
                }, {
                    key: "foundinner",
                    value: function() {
                        return Object.keys(this.innerMap).length > 0
                    }
                }, {
                    key: "foundlength",
                    value: function() {
                        return Object.keys(this.innerMap).length
                    }
                }, {
                    key: "innerexpr",
                    value: function() {
                        var e = this.innerMap["#"];
                        return null != e ? e : new M("+", [(0, p.constant)(0)])
                    }
                }, {
                    key: "isError",
                    value: function() {
                        return this.outerpoly.isError()
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        if (this.isError() || t.isError()) return f();
                        if (this.foundinner() && t.foundinner()) {
                            var r = s(this, t);
                            return Object.keys(r.innerMap).length <= 2 ? e.makeMap(this.outerpoly.add(r.outerpoly), r.innerMap) : f()
                        }
                        return this.foundinner() ? e.makeMap(this.outerpoly.add(t.outerpoly), this.innerMap) : t.foundinner() ? e.makeMap(this.outerpoly.add(t.outerpoly), t.innerMap) : new e(this.outerpoly.add(t.outerpoly))
                    }
                }, {
                    key: "subtract",
                    value: function(e) {
                        return this.isError() || e.isError() ? f() : this.add(e.multiply(l(-1)))
                    }
                }, {
                    key: "multiply",
                    value: function(t) {
                        return this.isError() || t.isError() ? f() : this.foundinner() && t.foundinner() ? f() : this.foundinner() ? e.makeMap(this.outerpoly.multiply(t.outerpoly), this.innerMap) : t.foundinner() ? e.makeMap(this.outerpoly.multiply(t.outerpoly), t.innerMap) : new e(this.outerpoly.multiply(t.outerpoly))
                    }
                }, {
                    key: "divide",
                    value: function(t) {
                        return this.isError() || t.isError() ? f() : this.foundinner() && t.foundinner() ? f() : this.foundinner() ? e.makeMap(this.outerpoly.divide(t.outerpoly), this.innerMap) : t.foundinner() ? e.makeMap(this.outerpoly.divide(t.outerpoly), t.innerMap) : new e(this.outerpoly.divide(t.outerpoly))
                    }
                }, {
                    key: "pow",
                    value: function(t) {
                        return this.isError() || t.isError() ? f() : this.foundinner() && t.foundinner() ? f() : this.foundinner() ? e.makeMap(this.outerpoly.pow(t.outerpoly), this.innerMap) : t.foundinner() ? e.makeMap(this.outerpoly.pow(t.outerpoly), t.innerMap) : new e(this.outerpoly.pow(t.outerpoly))
                    }
                }], [{
                    key: "makeMap",
                    value: function(t, r) {
                        return new e(t, r)
                    }
                }, {
                    key: "makeInner",
                    value: function(t) {
                        var r = "#1",
                            n = {};
                        n[r] = b.default.fracnum(1);
                        var o = new h.default(n),
                            a = {
                                "#": t
                            };
                        return new e(o, a)
                    }
                }, {
                    key: "makeInnerPow",
                    value: function(t, r) {
                        return t.foundinner() || r.foundinner() ? f() : e.makeInner(new M("^", [t.outerpoly, r.outerpoly]))
                    }
                }]), e
            }()
    }, {}],
    13: [function(e, t, r) {
        "use strict";
        $(function() {
            function e(e) {
                var t = null;
                if (document.cookie && "" !== document.cookie)
                    for (var r = document.cookie.split(";"), n = 0; n < r.length; n++) {
                        var o = $.trim(r[n]);
                        if (o.substring(0, e.length + 1) === e + "=") {
                            t = decodeURIComponent(o.substring(e.length + 1));
                            break
                        }
                    }
                return t
            }

            function t(e) {
                return /^(GET|HEAD|OPTIONS|TRACE)$/.test(e)
            }
            var r = e("csrftoken");
            $.ajaxSetup({
                beforeSend: function(e, n) {
                    t(n.type) || this.crossDomain || e.setRequestHeader("X-CSRFToken", r)
                }
            })
        })
    }, {}],
    14: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.gte2 = r.gteCalc = r.tryCl = void 0;
        var o = e(13),
            a = (n(o), function(e) {
                var t = "/gte/?nocache=" + (new Date).getTime();
                $.ajax({
                    url: t,
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({
                        foo: e
                    })
                })
            });
        r.tryCl = function(e) {
            return a(e), !1
        }, r.gteCalc = function(e, t) {
            var r = "/gte_calc/?nocache=" + (new Date).getTime();
            $.ajax({
                url: r,
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    mymsg: e,
                    myprob: t
                })
            })
        }, r.gte2 = function(e, t) {
            var r = "/gte/?nocache=" + (new Date).getTime();
            $.ajax({
                url: r,
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    foo: e,
                    myprob: t
                })
            })
        }
    }, {}],
    15: [function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function a(e, t, r, n) {
            var o = O(e, t, r),
                a = $(o);
            a.addMsgToRetval("Now that we've found " + r + " let's plug it back in to solve for " + n + ".");
            var i = I(e);
            a.addMsgToRetval("Write down an original equation:"), a.addMMsgToRetval(i);
            var u = I(["color", "purple", t]),
                s = "\\text'Substitute '\\,\\,(" + u + ")\\,\\,\\text' for '\\,\\," + r + "\\,\\,\\text' in '\\,\\," + i + ":";
            a.addMobMsgToRetval(s, ["Substitute", u, "for", r, "in", i + ":"]);
            var l = O(e, ["color", "purple", t], r);
            return a.addMMsgToRetval(I(l)), a.simplifyEq(o), a.solveForLinMVar(n), a
        }

        function i(e, t, r) {
            var n = e.leftpoly.getMCoef(t, 1),
                o = e.leftpoly.getMCoef(r, 1);
            return !(0 === n.getNum() || 0 === o.getNum() || !e.rightpoly.isConst())
        }

        function u(e, t) {
            var r = A([e, t]),
                n = r[0][0],
                o = r[1][0],
                a = U(e),
                u = U(t),
                s = a.leftpoly.getMCoef(n, 1),
                l = a.leftpoly.getMCoef(o, 1),
                f = u.leftpoly.getMCoef(n, 1),
                c = u.leftpoly.getMCoef(o, 1),
                p = [];
            if (i(a, n, o) && i(u, n, o))
                if (0 === s.add(f).getNum()) p = [n, o, (0, F.constant)(1), (0, F.constant)(1), !0];
                else if (0 === l.add(c).getNum()) p = [o, n, (0, F.constant)(1), (0, F.constant)(1), !0];
            else if (0 === s.subtract(f).getNum()) p = [n, o, (0, F.constant)(1), (0, F.constant)(-1), !0];
            else if (0 === l.subtract(c).getNum()) p = [o, n, (0, F.constant)(1), (0, F.constant)(-1), !0];
            else if (T.isInt(s.divide(f).getNum())) {
                var h = M.default.fracnum(1),
                    v = s.divide(f).multNum(-1).reduce();
                p = [n, o, (0, F.fracToPoly)(h), (0, F.fracToPoly)(v), !0]
            } else if (T.isInt(f.divide(s).getNum())) {
                var h = f.divide(s).multNum(-1).reduce(),
                    v = M.default.fracnum(1);
                p = [n, o, (0, F.fracToPoly)(h), (0, F.fracToPoly)(v), !0]
            } else if (T.isInt(l.divide(c).getNum())) {
                var h = M.default.fracnum(1),
                    v = l.divide(c).multNum(-1).reduce();
                p = [o, n, (0, F.fracToPoly)(h), (0, F.fracToPoly)(v), !0]
            } else if (T.isInt(c.divide(l).getNum())) {
                var h = c.divide(l).multNum(-1).reduce(),
                    v = M.default.fracnum(1);
                p = [o, n, (0, F.fracToPoly)(h), (0, F.fracToPoly)(v), !0]
            } else {
                var h = M.default.fracnum(1),
                    v = l.divide(c).multNum(-1).reduce();
                if (1 !== v.denom) {
                    var d = v.denom;
                    h = h.multNum(d), v = v.multNum(d)
                }
                p = [o, n, (0, F.fracToPoly)(h), (0, F.fracToPoly)(v), !0]
            } else p = [o, n, (0, F.constant)(1), (0, F.constant)(-5), !1];
            return p
        }

        function s(e) {
            try {
                var t = e[1],
                    r = e[2],
                    n = u(t, r),
                    o = f(n, 5),
                    a = (o[0], o[1], o[2], o[3], o[4]);
                return a
            } catch (e) {
                return !1
            }
        }

        function l(e) {
            var t = [],
                r = e[1],
                n = e[2],
                o = I(r),
                i = I(n),
                s = o + " ; " + i;
            t.push(H("Let's solve your system of equations by elimination.")), t.push(G(s)), t.push(_("Steps:"));
            var l = u(r, n),
                c = f(l, 5),
                p = c[0],
                h = c[1],
                v = c[2],
                d = c[3],
                g = c[4];
            if (!g) return t.push(H("<font color='red'>Sorry I don't know how to solve this system using elimination.</font>")), t;
            var m = U(r),
                y = U(n);
            if (1 === v.getNum() && 1 === d.getNum()) var x = m,
                b = y;
            else if (1 === v.getNum() && 1 !== d.getNum()) {
                var E = y.leftpoly.multiply(d),
                    M = y.rightpoly.multiply(d),
                    x = m,
                    b = L.default.Sign(E, M, "="),
                    w = I(["color", "blue", d.polyToExpr()]),
                    T = R(d.polyToExpr());
                t.push(H("Multiply the second equation by <span class='blue'>" + T + "</span>, then add the equations together.")), t.push(G("(" + I(r) + ")")), t.push(G(w + "(" + I(n) + ")")), t.push(H("Becomes:"))
            } else {
                var D = m.leftpoly.multiply(v),
                    S = m.rightpoly.multiply(v),
                    k = y.leftpoly.multiply(d),
                    C = y.rightpoly.multiply(d),
                    x = L.default.Sign(D, S, "="),
                    b = L.default.Sign(k, C, "="),
                    V = I(["color", "blue", v.polyToExpr()]),
                    N = R(v.polyToExpr()),
                    w = I(["color", "blue", d.polyToExpr()]),
                    T = R(d.polyToExpr());
                t.push(H("Multiply the first equation by <span class='blue'>" + N + "</span>,and multiply the second equation by <span class='blue'>" + T + "</span>.")), t.push(G(V + "(" + I(r) + ")")), t.push(G(w + "(" + I(n) + ")")), t.push(H("Becomes:"))
            }
            t.push(G(j(x.eqToExpr()))), t.push(G(j(b.eqToExpr()))), t.push(H("Add these equations to eliminate " + p + ":"));
            var P = x.leftpoly.add(b.leftpoly),
                F = x.rightpoly.add(b.rightpoly),
                O = L.default.Sign(P, F, "=");
            t.push(G(I(O.eqToExpr())));
            var A = O.eqToExpr(),
                z = $(A);
            if (O.leftpoly.isNum()) {
                O.leftpoly.getCoef("0").getNum() == O.rightpoly.getCoef("0").getNum() ? (z.addMsgToRetval("<hr>"), z.addHeadDivToRetval("Réponse:"), z.addMsgToRetval("Infinitely many solutions.")) : (z.addMsgToRetval("<hr>"), z.addHeadDivToRetval("Réponse:"), z.addMsgToRetval("No solutions."));
                var B = z.retval,
                    Q = q.getPrintListR2(B, 1),
                    W = Q[0];
                return t = t.concat(W)
            }
            var K = I(A),
                J = "\\text'Then solve '\\,\\," + K + "\\,\\,\\text' for '\\,\\," + h + ":";
            z.addMobMsgToRetval(J, ["Then solve", K, "for " + h + ":"]), z.solveForLinMVar(h);
            var Y = z.eq.rightpoly.polyToExpr(),
                Z = a(r, Y, h, p);
            z.retval = z.retval.concat(Z.retval);
            var X, ee;
            X = z.eq.eqToExpr(), ee = Z.eq.eqToExpr();
            var te = "";
            te = U(X).getEqVar() < U(ee).getEqVar() ? I(X) + "\\,\\,\\text' and '\\,\\," + I(ee) : I(ee) + "\\,\\,\\text' and '\\,\\," + I(X), z.addMsgToRetval("<hr>"), z.addHeadDivToRetval("Answer:"), z.addMMsgToRetval(te);
            var B = z.retval,
                Q = q.getPrintListR2(B, 1),
                W = Q[0];
            return t = t.concat(W)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var f = function() {
            function e(e, t) {
                var r = [],
                    n = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    o = !0, a = e
                } finally {
                    try {
                        !n && u.return && u.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return r
            }
            return function(t, r) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        r.canDoElim = s, r.showSimpleSystemElim = l;
        var c = e(16),
            p = o(c),
            h = e(6),
            v = o(h),
            d = e(1),
            g = (o(d), e(33)),
            m = o(g),
            y = e(40),
            x = o(y),
            b = e(39),
            q = o(b),
            E = e(10),
            M = n(E),
            w = e(41),
            T = o(w),
            D = e(7),
            S = o(D),
            k = e(11),
            C = o(k),
            V = e(48),
            N = o(V),
            P = e(8),
            L = n(P),
            F = e(43),
            O = N.evalAtVal,
            A = (p.getCarraySides, p.getCarrayEqs),
            I = (v.exprToPoly, x.exprToText),
            R = x.exprToTextH,
            _ = m.mHeadDiv,
            j = (m.mHeadDiv2, m.mTopDiv, m.getExprText),
            G = m.mDiv,
            H = (m.mPolyEqExpr, m.getMsg),
            $ = C.getEqScratch,
            U = (S.EqScratch, S.exprToEq)
    }, {}],
    16: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            if ("number" == typeof e) return !0;
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1);
                return "-" === t && 1 === r.length && a(r[0])
            }
            return !1
        }

        function i(e) {
            return "number" != typeof e && ("object" === ("undefined" == typeof e ? "undefined" : mt(e)) ? 2 === e.length && a(e[0]) && a(e[1]) && At(Lt(e[0])) && At(Lt(e[1])) && 0 !== Lt(e[1]) : (console.log("ERROR55"), !1))
        }

        function u(e) {
            var t = Lt(e),
                r = Nt(t);
            return r
        }

        function s(e) {
            var t = Ft(e),
                r = t.polyToExpr();
            return r
        }

        function l(e) {
            return c(e) ? s(h(e) ? e : d(e) ? e : e) : u(e)
        }

        function f(e) {
            return c(e) ? d(e) ? s(e) : g(e) ? s(e) : c(e) ? NaN : u(e) : u(e)
        }

        function c(e, t) {
            var r = !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var n = e[0],
                    o = e.slice(1);
                "var" === n ? r = "undefined" == typeof t || o[0] === t : o.forEach(function(e) {
                    var n = c(e, t);
                    r = r || n
                })
            }
            return r
        }

        function p(e) {
            var t = Ft(e),
                r = t.polyToExpr();
            return r
        }

        function h(e) {
            var t = {};
            t.isUniformHelper = S;
            var r = t.isUniformHelper(e);
            return r
        }

        function v(e) {
            var t = {};
            t.isUniformHelper = k;
            var r = t.isUniformHelper(e);
            return r
        }

        function d(e) {
            var t = {};
            t.isUniformHelper = C;
            var r = t.isUniformHelper(e);
            return r
        }

        function g(e) {
            var t = {};
            t.isUniformHelper = V;
            var r = t.isUniformHelper(e);
            return r
        }

        function m(e) {
            var t = {};
            t.isUniformHelper = D, t.helperVar = "x";
            var r = t.isUniformHelper(e);
            return r
        }

        function y(e) {
            var t = {};
            t.isUniformHelper = D, t.helperVar = "y";
            var r = t.isUniformHelper(e);
            return r
        }

        function x(e, t) {
            var r = {};
            r.isUniformHelper = F, "undefined" != typeof t && (r.thisvar = t);
            var n = r.isUniformHelper(e);
            return n
        }

        function b(e, t) {
            var r = {};
            r.isUniformHelper = N, "undefined" != typeof t && (r.thisvar = t);
            var n = r.isUniformHelper(e);
            return n
        }

        function q(e, t) {
            var r = {};
            r.isUniformHelper = P, "undefined" != typeof t && (r.thisvar = t);
            var n = r.isUniformHelper(e);
            return n
        }

        function E(e, t) {
            var r = {};
            r.isUniformHelper = N, "undefined" != typeof t && (r.thisvar = t);
            r.isUniformHelper(e);
            return r.thisvar
        }

        function M(e, t) {
            var r = {};
            r.isUniformHelper = P, "undefined" != typeof t && (r.thisvar = t);
            r.isUniformHelper(e);
            return r.thisvar
        }

        function w(e) {
            var t = {};
            return t.isHelper = L, t.thisvars = [], t.isHelper(e), t.thisvars
        }

        function T(e) {
            var t = {};
            t.isUniformHelper = F, t.thisvar = "NONE";
            var r = t.isUniformHelper(e);
            return r
        }

        function D(e) {
            if (a(e)) return !0;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                return "+" === t || "-" === t || "*" === t ? !(2 !== r.length || !this.isUniformHelper(r[0]) || !this.isUniformHelper(r[1])) || "-" === t && 1 === r.length && this.isUniformHelper(r[0]) : "/" === t ? 2 === r.length && this.isUniformHelper(r[0]) && this.isUniformHelper(r[1]) : "^" === t ? 2 === r.length && this.isUniformHelper(r[0]) && this.isUniformHelper(r[1]) : "var" === t && 1 === r.length ? r[0] === this.helperVar : "sqrt" === t ? 1 === r.length && this.isUniformHelper(r[0]) : "sin" === t ? 1 === r.length && this.isUniformHelper(r[0]) : "cos" === t ? 1 === r.length && this.isUniformHelper(r[0]) : "tan" === t ? 1 === r.length && this.isUniformHelper(r[0]) : "ln" === t ? 1 === r.length && this.isUniformHelper(r[0]) : "log" === t ? 1 === r.length && this.isUniformHelper(r[0]) : "abs" !== t || 1 === r.length && this.isUniformHelper(r[0])
            }
            return console.log("ERROR55"), !0
        }

        function S(e) {
            if (a(e)) return !0;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                if ("+" === t || "-" === t || "*" === t) {
                    if (2 === r.length && this.isUniformHelper(r[0]) && this.isUniformHelper(r[1])) return !0;
                    if ("+" === t && r.length > 2) {
                        for (var n = 0; n < r.length; n++)
                            if (!this.isUniformHelper(r[n])) return !1;
                        return !0
                    }
                    return "-" === t && 1 === r.length && this.isUniformHelper(r[0])
                }
                return "/" === t ? 2 === r.length && this.isUniformHelper(r[0]) && a(r[1]) && 0 !== Lt(r[1]) : "^" === t ? 2 === r.length && this.isUniformHelper(r[0]) && At(r[1]) && Lt(r[1]) >= 0 : "var" === t && 1 === r.length && ("undefined" == typeof this.thisvar ? (this.thisvar = r[0], !0) : this.thisvar === r[0])
            }
            return console.log("ERROR55"), !1
        }

        function k(e) {
            if (a(e)) return !0;
            if ("object" !== ("undefined" == typeof e ? "undefined" : mt(e))) return console.log("ERROR55"), !1;
            var t = e[0],
                r = e.slice(1);
            return "var" === t && 1 === r.length ? "undefined" == typeof this.thisvar ? (this.thisvar = r[0], !0) : this.thisvar === r[0] : 1 === r.length ? this.isUniformHelper(r[0]) : 2 === r.length ? this.isUniformHelper(r[0]) && this.isUniformHelper(r[1]) : void 0
        }

        function C(e) {
            if (a(e)) return !0;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                if ("+" === t || "-" === t || "*" === t) {
                    if (2 === r.length && this.isUniformHelper(r[0]) && this.isUniformHelper(r[1])) return !0;
                    if ("+" === t && r.length > 2) {
                        for (var n = 0; n < r.length; n++)
                            if (!this.isUniformHelper(r[n])) return !1;
                        return !0
                    }
                    return "-" === t && 1 === r.length && this.isUniformHelper(r[0])
                }
                return "/" === t ? 2 === r.length && this.isUniformHelper(r[0]) && a(r[1]) && 0 !== Lt(r[1]) : "^" === t ? 2 === r.length && this.isUniformHelper(r[0]) && At(r[1]) && Lt(r[1]) >= 0 : "var" === t && 1 === r.length
            }
            return console.log("ERROR55"), !1
        }

        function V(e) {
            if (a(e)) return !0;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                if ("+" === t || "-" === t || "*" === t) {
                    if (2 === r.length && this.isUniformHelper(r[0]) && this.isUniformHelper(r[1])) return !0;
                    if ("+" === t && r.length > 2) {
                        for (var n = 0; n < r.length; n++)
                            if (!this.isUniformHelper(r[n])) return !1;
                        return !0
                    }
                    return "-" === t && 1 === r.length && this.isUniformHelper(r[0])
                }
                return "/" === t ? 2 === r.length && this.isUniformHelper(r[0]) && this.isUniformHelper(r[1]) : "^" === t ? 2 === r.length && this.isUniformHelper(r[0]) && a(r[1]) && At(Lt(r[1])) : "var" === t && 1 === r.length
            }
            return console.log("ERROR55"), !1
        }

        function N(e) {
            if (a(e)) return !0;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                return "+" === t || "-" === t || "*" === t || "=" === t ? !(2 !== r.length || !this.isUniformHelper(r[0]) || !this.isUniformHelper(r[1])) || "-" === t && 1 === r.length && this.isUniformHelper(r[0]) : "/" === t ? 2 === r.length && this.isUniformHelper(r[0]) && a(r[1]) && 0 !== Lt(r[1]) : "^" === t ? 2 === r.length && this.isUniformHelper(r[0]) && At(r[1]) && Lt(r[1]) >= 0 : "var" === t && 1 === r.length && ("undefined" == typeof this.thisvar ? (this.thisvar = r[0],
                    !0) : this.thisvar === r[0])
            }
            return console.log("ERROR55"), !1
        }

        function P(e) {
            if (a(e)) return !0;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                return Pt(t, ["+", "-", "*", "=", ">", "<", ">=", "<="]) >= 0 ? !(2 !== r.length || !this.isUniformHelper(r[0]) || !this.isUniformHelper(r[1])) || "-" === t && 1 === r.length && this.isUniformHelper(r[0]) : "/" === t ? 2 === r.length && this.isUniformHelper(r[0]) && a(r[1]) && 0 !== Lt(r[1]) : "^" === t ? 2 === r.length && this.isUniformHelper(r[0]) && At(r[1]) && Lt(r[1]) >= 0 : "var" === t && 1 === r.length && ("undefined" == typeof this.thisvar ? (this.thisvar = r[0], !0) : this.thisvar === r[0])
            }
            return console.log("ERROR55"), !1
        }

        function L(e) {
            if (a(e)) return !0;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                return "var" === t && 1 === r.length ? (Pt(r[0], this.thisvars) < 0 && this.thisvars.push(r[0]), !0) : 2 === r.length ? (this.isHelper(r[0]), this.isHelper(r[1]), !0) : 1 === r.length && (this.isHelper(r[0]), !0)
            }
            return console.log("ERROR55"), !1
        }

        function F(e) {
            if (a(e)) return At(Lt(e));
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                return "+" === t || "-" === t || "*" === t ? !(2 !== r.length || !this.isUniformHelper(r[0]) || !this.isUniformHelper(r[1])) || ("-" === t ? "-" === t && 1 === r.length && this.isUniformHelper(r[0]) : "+" === t && ("+" === t && 3 === r.length && this.isUniformHelper(r[0]) && this.isUniformHelper(r[1]) && this.isUniformHelper(r[2]))) : "/" !== t && ("^" === t ? 2 === r.length && this.isUniformHelper(r[0]) && At(r[1]) && Lt(r[1]) >= 0 : "var" === t && 1 === r.length && ("undefined" == typeof this.thisvar ? (this.thisvar = r[0], !0) : this.thisvar === r[0]))
            }
            return console.log("ERROR55"), !1
        }

        function O(e) {
            function t(t) {
                var r = !1;
                if (t instanceof Array) {
                    var n = t[0],
                        o = t.slice(1);
                    r = e(n, o)
                }
                return r
            }
            return t
        }

        function A(e) {
            function t(t) {
                var r = !1;
                return t instanceof Array && (r = e(t)), r
            }
            return t
        }

        function I(e) {
            return a(e) ? 0 !== Lt(e) && At(Lt(e)) : jt(e) && "/" === e[0] && a(e[1]) && a(e[2])
        }

        function R(e) {
            return I(e) || Gt(e)
        }

        function _(e) {
            return a(e) || "var" === It(e) || $t(e)
        }

        function j(e) {
            return "var" !== It(e) && ($t(e) && (zt(e) || "var" === It(e[1])))
        }

        function G(e) {
            return "var" !== It(e) && ($t(e) && "var" === It(e[1]) && Lt(e[2]) > 0)
        }

        function H(e, t) {
            if ("number" == typeof e && "number" == typeof t) return e === t;
            if ("string" == typeof e && "string" == typeof t) return e === t;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e)) && "object" === ("undefined" == typeof t ? "undefined" : mt(t))) {
                if (e.length === t.length && e.length > 1 && e[0] === t[0]) {
                    for (var r = 1; r < e.length; r++)
                        if (!H(e[r], t[r])) return !1;
                    return !0
                }
                return !1
            }
            return !1
        }

        function $(e) {
            return !!i(e) && B(e)
        }

        function U(e) {
            return i(e) ? Q(e) : z(e)
        }

        function z(e) {
            var t = Ft(e[0]),
                r = Ft(e[1]),
                n = t.polyToExpr(),
                o = r.polyToExpr();
            return [n, o]
        }

        function B(e) {
            return bt.reduces(e[0], e[1])
        }

        function Q(e) {
            return bt.reduce(e[0], e[1])
        }

        function W(e) {
            if (a(e)) return Lt(e);
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                return ("/" === t || "dfrac" === t) && 2 === r.length && (jt(e) ? Lt(r[0]) : p(r[0]))
            }
            return console.log("ERROR55"), !1
        }

        function K(e) {
            if (a(e)) return 1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                return ("/" === t || "dfrac" === t) && 2 === r.length && (jt(e) ? Lt(r[1]) : p(r[1]))
            }
            return console.log("ERROR55"), !1
        }

        function J(e) {
            return a(e) ? Ot(e) : "var" === It(e) ? Ot(e) : zt(e) ? Ot(e[1]) : $t(e) ? Ot(e[1]) : !!Ut(e) && e[1]
        }

        function Y(e) {
            if (a(e) || "var" === It(e)) return 1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                return !("^" !== t || 2 !== r.length || !a(r[1])) && Lt(r[1])
            }
            return console.log("ERROR55"), !1
        }

        function Z(e) {
            return a(e) ? 1 : "var" === It(e) ? p(e) : G(e) ? p(e) : Wt(e) ? p(e[2]) : Kt(e) && G(e[2]) ? p(e[2]) : !(!Jt(e) || !G(e[1]) && "var" !== It(e[1])) && p(e[1])
        }

        function X(e) {
            return a(e) ? Lt(e) : "var" === It(e) ? 1 : G(e) ? 1 : Wt(e) ? Lt(e[1]) : Kt(e) && G(e[2]) ? Lt(e[1]) : !(!Jt(e) || !G(e[1]) && "var" !== It(e[1])) && -1
        }

        function ee(e) {
            try {
                return e = l(e), a(e) ? 0 : "var" === It(e) ? 1 : G(e) ? Lt(e[2]) : Wt(e) ? 1 : Kt(e) && G(e[2]) ? Lt(e[2][2]) : Jt(e) && G(e[1]) ? Lt(e[1][2]) : !(!Jt(e) || "var" !== It(e[1])) && 1
            } catch (e) {
                return !1
            }
        }

        function te(e) {
            return !a(e) && ("var" === It(e) || (!!G(e) || (!!Wt(e) || (!(!Kt(e) || !G(e[2])) || !(!Jt(e) || !G(e[1]) && "var" !== It(e[1]))))))
        }

        function re(e) {
            var t = [],
                r = 0;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var n = e[0],
                    o = e.slice(1);
                if ("*" === n && 2 === o.length) {
                    var i = re(o[0]),
                        u = i[0],
                        s = i[1];
                    if (!(u.length > 0)) return [
                        [], 0
                    ];
                    var l = re(o[1]),
                        f = l[0],
                        c = l[1];
                    if (!(f.length > 0)) return [
                        [], 0
                    ];
                    t = u, t.push.apply(t, f), r = s + c
                } else a(e) || "var" === It(e) || j(e) ? (a(e) && (r = 1), t = [e]) : t = []
            } else a(e) && (r = 1, t = [e]);
            return [t, r]
        }

        function ne(e) {
            var t = [],
                r = 0;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var n = e[0],
                    o = e.slice(1);
                if ("+" !== n && "-" !== n || 2 !== o.length)
                    if ("+" === n && o.length > 2) {
                        var i = ne(o[0]),
                            u = i[0],
                            s = i[1],
                            l = i,
                            f = u,
                            c = s;
                        t = u, r = s;
                        for (var p = 1; p < o.length; p++) {
                            if (!(f.length > 0)) return [
                                [], 0
                            ];
                            var l = ne(o[p]),
                                f = l[0],
                                c = l[1];
                            if (!(f.length > 0)) return [
                                [], 0
                            ];
                            if ("+" === n) t.push.apply(t, f);
                            else
                                for (var h = 0; h < f.length; h++) {
                                    var v = Ot(["*", -1, f[h]]);
                                    t.push(v)
                                }
                            r = s + c
                        }
                    } else a(e) || d(e) ? (a(e) && (r = 1), t = [e]) : t = [];
                else {
                    var i = ne(o[0]),
                        u = i[0],
                        s = i[1];
                    if (!(u.length > 0)) return [
                        [], 0
                    ];
                    var l = ne(o[1]),
                        f = l[0],
                        c = l[1];
                    if (!(f.length > 0)) return [
                        [], 0
                    ];
                    if (t = u, "+" === n) t.push.apply(t, f);
                    else
                        for (var h = 0; h < f.length; h++) {
                            var v = Ot(["*", -1, f[h]]);
                            t.push(v)
                        }
                    r = s + c
                }
            } else a(e) ? (r = 1, t = [e]) : t = [];
            return [t, r]
        }

        function oe(e) {
            var t = !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                e[0], e.slice(1);
                if (!h(e)) return !1;
                var r = re(e),
                    n = r[0],
                    o = r[1];
                t = n.length > 2 && n.length - o > 1
            }
            return t
        }

        function ae(e) {
            var t = !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                e[0], e.slice(1);
                if (!h(e)) return !1;
                var r = ne(e),
                    n = r[0],
                    o = r[1];
                t = n.length > 1 && n.length - o > 0
            }
            return t
        }

        function ie(e) {
            var t = !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                e[0], e.slice(1);
                if (!d(e)) return !1;
                var r = ne(e),
                    n = r[0];
                r[1];
                t = n.length > 0
            } else a(e) && (t = !0);
            return t
        }

        function ue(e) {
            var t = !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                e[0], e.slice(1);
                if (!d(e)) return !1;
                var r = ne(e),
                    n = r[0],
                    o = r[1];
                t = n.length > 0 && n.length - o > 0
            }
            return t
        }

        function se(e) {
            var t = !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                e[0], e.slice(1);
                if (!d(e)) return !1;
                var r = ne(e),
                    n = r[0],
                    o = r[1];
                t = n.length > 1 && n.length - o > 0
            }
            return t
        }

        function le(e, t) {
            if (a(e)) return !0;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var r = e[0],
                    n = e.slice(1);
                return "+" === r || "-" === r || "*" === r ? !(2 !== n.length || !le(n[0], t) || !le(n[1], t)) || "-" === r && 1 === n.length && le(n[0], t) : "/" === r ? 2 === n.length && le(n[0], t) && a(n[1]) && 0 !== Lt(n[1]) : "^" === r ? 2 === n.length && le(n[0], t) && At(n[1]) && Lt(n[1]) >= 0 : "var" === r && (1 === n.length && n[0] === t)
            }
            return console.log("ERROR55"), !1
        }

        function fe(e) {
            return Rt(e) && dr(e) && rt(e) && et(e).findMaxDegree() <= 1 && 1 == Xe(e).findMaxDegree()
        }

        function ce(e) {
            return Rt(e) && dr(e) && rt(e) && 1 == Xe(e).findMaxDegree()
        }

        function pe(e) {
            return Rt(e) && tt(e) && rt(e) && 1 == Xe(e).findMaxDegree()
        }

        function he(e) {
            return Rt(e) && dr(e) && m(e[2])
        }

        function ve(e) {
            return _t(e) && dr(e) && m(e[2])
        }

        function de(e) {
            return Rt(e) && !c(e)
        }

        function ge(e) {
            return _t(e) && !c(e)
        }

        function me(e) {
            return Rt(e) && d(e[1]) && d(e[2])
        }

        function ye(e) {
            return Rt(e) && g(e[1]) && g(e[2])
        }

        function xe(e) {
            return _t(e) && d(e[1]) && d(e[2])
        }

        function be(e) {
            return _t(e) && g(e[1]) && g(e[2])
        }

        function qe(e) {
            return Rt(e) && b(e) && h(e[1]) && h(e[2]) && Xe(e).findMaxDegree() <= 1 && et(e).findMaxDegree() <= 1
        }

        function Ee(e) {
            return d(e) && se(e)
        }

        function Me(e) {
            return d(e) && ie(e)
        }

        function we(e) {
            return qe(e) && Me(e[1]) && Me(e[2])
        }

        function Te(e) {
            return _t(e) && q(e) && h(e[1]) && h(e[2]) && Xe(e).findMaxDegree() <= 1 && et(e).findMaxDegree() <= 1
        }

        function De(e) {
            return Ke(e) && _t(e[1]) && pt(e[1][1]) && pt(e[1][2]) && pt(e[3])
        }

        function Se(e) {
            return Ke(e) && _t(e[1]) && pt(e[1][1]) && h(e[1][2]) && Ft(e[1][2]).findMaxDegree() <= 1 && pt(e[3])
        }

        function ke(e) {
            return Rt(e) && b(e) && h(e[1]) && h(e[2]) && Xe(e).findMaxDegree() <= 2 && et(e).findMaxDegree() <= 2
        }

        function Ce(e) {
            return Rt(e) && gr(e) && y(e[2])
        }

        function Ve(e) {
            return _t(e) && gr(e) && y(e[2])
        }

        function Ne(e) {
            return pe(e) || he(e) || Ce(e)
        }

        function Pe(e) {
            return Ne(e) || xr(e) || ve(e) || Ve(e)
        }

        function Le(e) {
            var t = [];
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var r = e[0],
                    n = e.slice(1);
                ";" === r && 2 === n.length ? (t = Le(n[0]), t.push(n[1])) : t = [e]
            }
            return t
        }

        function Fe(e) {
            var t = [];
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var r = e[0],
                    n = e.slice(1);
                "," === r ? 2 === n.length ? (t = t.concat(Fe(n[0])), t = t.concat(Fe(n[1]))) : t = [""] : t = [e]
            } else t = [e];
            return t
        }

        function Oe(e) {
            var t = [];
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var r = e[0],
                    n = e.slice(1);
                ";" === r ? 2 === n.length ? (t = t.concat(Oe(n[0])), t = t.concat(Oe(n[1]))) : t = [""] : t = [e]
            } else t = [e];
            return t
        }

        function Ae(e) {
            var t = !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var r = e[0],
                    n = e.slice(1);
                t = ";" === r && 2 === n.length ? Ae(n[0]) && ce(n[1]) : ce(e)
            }
            return t
        }

        function Ie(e) {
            var t = !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var r = e[0],
                    n = e.slice(1);
                t = ";" === r && 2 === n.length ? Ie(n[0]) && Pe(n[1]) : Pe(e)
            }
            return t
        }

        function Re(e) {
            var t = !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var r = e[0],
                    n = e.slice(1);
                t = ";" === r && 2 === n.length ? Re(n[0]) && de(n[1]) : de(e)
            }
            return t
        }

        function _e(e) {
            if (me(e)) {
                var t = Ue([e]);
                if (2 === t.length) {
                    var r = parseInt(t[0].slice(1)),
                        n = t[0][0],
                        o = parseInt(t[1].slice(1)),
                        a = t[1][0],
                        i = [n, a];
                    if (1 === r && 1 === o && Pt("x", i) >= 0 && Pt("y", i) >= 0) return !0
                }
            }
            return !1
        }

        function je(e) {
            if (xe(e)) {
                var t = Ue([e]);
                if (2 === t.length) {
                    var r = parseInt(t[0].slice(1)),
                        n = t[0][0],
                        o = parseInt(t[1].slice(1)),
                        a = t[1][0],
                        i = [n, a];
                    if (1 === r && 1 === o && Pt("x", i) >= 0 && Pt("y", i) >= 0) return !0
                }
            }
            return !1
        }

        function Ge(e) {
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                return (";" === t || "and" === t) && 2 === r.length && (He(r[0]) && He(r[1]) && Be(r[0], r[1]))
            }
            return !1
        }

        function He(e) {
            return me(e) && !$e(e)
        }

        function $e(e) {
            var t = Ft(["-", e[1], e[2]]);
            return 0 === ze([t.polyToExpr()]).length
        }

        function Ue(e) {
            for (var t = [], r = 0; r < e.length; r++) {
                var n = e[r];
                t.push(n[1]), t.push(n[2])
            }
            return ze(t)
        }

        function ze(e) {
            for (var t = [], r = 0; r < e.length; r++) {
                var n = e[r],
                    o = Ft(n).coefs;
                for (var a in o) "0" !== a && Pt(a, t) < 0 && t.push(a)
            }
            return t
        }

        function Be(e, t) {
            var r = Ue([e, t]);
            if (2 === r.length && r[0].indexOf(",") === -1 && r[1].indexOf(",") === -1) {
                var n = parseInt(r[0].slice(1)),
                    o = parseInt(r[1].slice(1));
                if (1 === n && 1 === o) return !0
            }
            return !1
        }

        function Qe(e) {
            var t = !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var r = e[0],
                    n = e.slice(1);
                t = ";" === r && 2 === n.length ? Qe(n[0]) && mr(n[1]) : mr(e)
            }
            return t
        }

        function We(e) {
            var t = !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var r = e[0],
                    n = e.slice(1);
                t = ";" === r && 2 === n.length ? We(n[0]) && me(n[1]) : me(e)
            }
            return t
        }

        function Ke(e) {
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                if ("comp" === t && 3 === r.length) return !0
            }
            return !1
        }

        function Je(e) {
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                if (Pt(t, ["et", "ou"]) >= 0 && 2 === r.length && ge(r[0]) && ge(r[1])) return !0
            }
            return !1
        }

        function Ye(e) {
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                if (Pt(t, ["et", "ou"]) >= 0 && 2 === r.length && de(r[0]) && de(r[1])) return !0
            }
            return !1
        }

        function Ze(e) {
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                if (Pt(t, ["et", "ou"]) >= 0 && 2 === r.length && Te(r[0]) && Te(r[1])) return !0
            }
            return !1
        }

        function Xe(e) {
            var t = (0, yt.constant)(0);
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var r = e[0],
                    n = e.slice(1);
                Pt(r, ["=", ">", "<", ">=", "<="]) >= 0 && 2 === n.length && (t = Ft(n[0]))
            }
            return t
        }

        function et(e) {
            var t = (0, yt.constant)(0);
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var r = e[0],
                    n = e.slice(1);
                Pt(r, ["=", ">", "<", ">=", "<="]) >= 0 && 2 === n.length && (t = Ft(n[1]))
            }
            return t
        }

        function tt(e) {
            var t = !1;
            if (dr(e)) t = !0;
            else if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var r = e[0],
                    n = e.slice(1);
                Pt(r, ["=", ">", "<", ">=", "<="]) >= 0 && 2 === n.length && (t = le(n[0], "y") && c(n[0]))
            }
            return t
        }

        function rt(e) {
            var t = !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var r = e[0],
                    n = e.slice(1);
                Pt(r, ["=", ">", "<", ">=", "<="]) >= 0 && 2 === n.length && (t = le(n[1], "x"))
            }
            return t
        }

        function nt(e) {
            if ("number" == typeof e) return !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                if ("+" === t || "-" === t) {
                    if (2 === r.length && a(r[0]) && a(r[1])) {
                        var n = Lt(r[0]),
                            o = Lt(r[1]);
                        return [n, o]
                    }
                    var n = Lt(r[0]),
                        o = Lt(r[1]);
                    return [n, o]
                }
                var n = Lt(r[0]),
                    o = Lt(r[1]);
                return [n, o]
            }
            return console.log("ERROR55"), !1
        }

        function ot(e) {
            var t = !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var r = e[0],
                    n = e.slice(1);
                "abs" === r ? t = !0 : n.forEach(function(e) {
                    var r = ot(e);
                    t = t || r
                })
            }
            return t
        }

        function at(e) {
            return c(e) && ot(e)
        }

        function it(e) {
            return Rt(e) && c(e) && v(e) && "object" === mt(e[1]) && "object" === mt(e[2]) && "/" == e[1][0] && "/" == e[2][0] && (ct(e[1]) && ct(e[2]) || ft(e[1]) && st(e[2]))
        }

        function ut(e) {
            return Rt(e) && c(e) && v(e) && ("object" === mt(e[1]) && "/" == e[1][0] && ct(e[1]) && "number" == typeof e[2] || "object" === mt(e[2]) && "/" == e[2][0] && ct(e[2]) && "number" == typeof e[1])
        }

        function st(e) {
            return h(e) && Ft(e).findMaxDegree() <= 1
        }

        function lt(e) {
            return h(e) && Ft(e).findMaxDegree() <= 2
        }

        function ft(e) {
            if ("number" == typeof e) return !0;
            if (st(e)) return !0;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                return "/" === t && (2 === r.length && lt(r[0]) && st(r[1]))
            }
            return console.log("ERROR55"), !1
        }

        function ct(e) {
            if ("number" == typeof e) return !0;
            if (st(e)) return !0;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var t = e[0],
                    r = e.slice(1);
                return "/" === t && (2 === r.length && st(r[0]) && st(r[1]))
            }
            return console.log("ERROR55"), !1
        }

        function pt(e) {
            return le(e, "none") && !c(e)
        }

        function ht(e) {
            return Rt(e) && g(e[1]) && g(e[2]) && (qr(e[1]) || qr(e[2]))
        }

        function vt(e) {
            return Pe(e) || _e(e) || je(e)
        }

        function dt(e) {
            var t = !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : mt(e))) {
                var r = e[0],
                    n = e.slice(1);
                t = ";" === r && 2 === n.length ? dt(n[0]) && vt(n[1]) : vt(e)
            }
            return t
        }

        function gt(e) {
            return Ge(e) ? "isSimpleSystem" : c(e) && le(e, "i") ? "isComplexVar" : c(e) && g(e) && 1 == w(e).length && "i" === w(e)[0] ? "isComplexVar" : fe(e) ? "isLinEq" : ce(e) ? "isPolynomial" : Ae(e) ? "isPolySet" : a(e) ? "isNumber" : Yt(e) ? "isSimpleAdd" : sr(e) ? "isSimpleExpDiv" : fr(e) ? "isExpDiv" : jt(e) ? "isFrac" : tr(e) ? "isSimpleFracAdd" : rr(e) ? "isSimpleFracMult" : Zt(e) ? "isSimpleFracExp" : Xt(e) ? "isSimpleGenFracExp" : ur(e) ? "isSimpleExpMult" : lr(e) ? "isExpMult" : hr(e) ? "isSimpleExpExp" : vr(e) ? "isExpExp" : Kt(e) ? "isCoefSimpleExp" : Jt(e) ? "isNegSimpleExp" : Wt(e) ? "isCoefVar" : er(e) ? "isSimpleGenCoefAdd" : nr(e) ? "isCoefSimpleExpMult" : oe(e) ? "isCoefExpProd" : ar(e) ? "isAddTermsSq" : ir(e) ? "isAddTermsCube" : Qt(e) ? "isSimpleExp0" : or(e) ? "isAddTermsMult" : c(e) && ae(e) ? "isAddTerms" : le(e, "x") ? "isSimpleVar" : de(e) ? "isNumEq" : Re(e) ? "isNumEqSet" : ge(e) ? "isNumIneq" : qe(e) && it(e) ? "isSimpleVarFracEq" : qe(e) && ut(e) ? "isSimpleVarFracEq" : qe(e) ? "isVarLinEq" : he(e) ? "isyxEq" : xr(e) ? "isPoint" : Ie(e) && 1 == Le(e).length && Rt(Le(e)[0]) ? "isGraphSetOne" : Ie(e) ? "isGraphSet" : h(e) ? "isUniformVar" : Ee(e) ? "isMVarAddTerms" : d(e) ? "isMVar" : ke(e) ? "isVarQuadEq" : Te(e) ? "isVarLinIneq" : De(e) ? "isNumCompoundIneq" : Se(e) ? "isVarLinCompoundIneq" : Ye(e) ? "isNumCompGatomEq" : Je(e) ? "isNumCompGatomIneq" : Ze(e) ? "isVarLinCompGatomIneq" : "object" === ("undefined" == typeof e ? "undefined" : mt(e)) && 3 == e.length && "@" === e[0] && xr(e[2]) ? "evalStmtAtPt" : "object" === ("undefined" == typeof e ? "undefined" : mt(e)) && 3 == e.length && "@" === e[0] && Qe(e[2]) ? "evalStmtAtVeqSet" : "object" === ("undefined" == typeof e ? "undefined" : mt(e)) && 3 == e.length && "@" === e[0] ? "evalStmt" : _e(e) ? "isStandardEq" : je(e) ? "isStandardIneq" : it(e) ? "isSimpleVarFracEq" : c(e) && g(e) ? "isMFVar" : ye(e) && w(e).length > 1 ? "isMPolyEq" : be(e) && w(e).length > 1 ? "isMPolyIneq" : ht(e) && 1 == w(e).length ? "isVarFracAddEq" : dt(e) ? "isGraphSet" : c(e) && (Rt(e) || _t(e) || We(e)) ? "containsVarEq" : c(e) ? "containsVar" : yr(e) ? "isSetExpr" : "object" === ("undefined" == typeof e ? "undefined" : mt(e)) && e.length >= 1 && "eof" === e[0] ? "isEof" : "isOther"
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.isVarFrac = r.evalAtVal = r.isPoint = r.isSetExpr = r.ansLeftIsY = r.isBaseNum = r.isGenFracExp = r.isExp = r.isMixed = r.isFrac = r.isIneq = r.isEq = r.myExprType = void 0;
        var mt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        r.isNumber = a, r.isIntF = i, r.evalAnsSilent = u, r.evalAnsVarSilent = s, r.evalGenVarSilent = l, r.evalGeneral = f, r.containsVar = c, r.evalExprPoly = p, r.isUniformVar = h, r.isUniformVarInt = x, r.isUniformVarEq = b, r.getUniformVarEq = E, r.getUniformVarIneq = M, r.getGVarEq = w, r.isEqual = H, r.fReduces = $, r.fReduce = U, r.fracReduces = B, r.fracReduce = Q, r.getNumerator = W, r.getDenominator = K, r.getBase = J, r.getPower = Y, r.getAddBase = Z, r.getAddCoef = X, r.getAddPower = ee, r.getProdFactors = re, r.getAddTerms = ne, r.isAddTerms = ae, r.isLinEq = fe, r.isPolynomial = pe, r.isyxEq = he, r.isyxIneq = ve, r.isVarLinEq = qe, r.isVarLinEq2 = we, r.isxEq = Ce, r.isxIneq = Ve, r.getPolys = Le, r.getEvals = Fe, r.getVeqs = Oe, r.isPolySet = Ae, r.isGraphSet = Ie, r.isStandardEq = _e, r.isStandardIneq = je, r.getCarrayEqs = Ue, r.getCarraySides = ze, r.isMPolyEqSet = We, r.ansLeftPoly = Xe, r.ansRightPoly = et, r.getSimpleArgs = nt, r.containsAbs = ot, r.isAbsVar = at, r.isGraphStdSet = dt, r.typeOfAns = gt;
        var yt = e(43),
            xt = (o(yt), e(41)),
            bt = n(xt),
            qt = e(40),
            Et = n(qt),
            Mt = e(48),
            wt = n(Mt),
            Tt = e(6),
            Dt = n(Tt),
            St = e(5),
            kt = n(St),
            Ct = e(49),
            Vt = n(Ct),
            Nt = Et.exprToText,
            Pt = Et.inArray,
            Lt = kt.evalExpr,
            Ft = Dt.exprToPoly,
            Ot = Vt.getPolyExpr,
            At = bt.isInt,
            It = r.myExprType = Et.myExprType,
            Rt = r.isEq = O(function(e, t) {
                return "=" === e && 2 === t.length
            }),
            _t = r.isIneq = O(function(e, t) {
                return Pt(e, [">", "<", ">=", "<="]) >= 0 && 2 === t.length
            }),
            jt = r.isFrac = O(function(e, t) {
                return ("/" === e || "dfrac" === e) && 2 === t.length && T(t[0]) && T(t[1]) && At(Lt(t[0])) && At(Lt(t[1])) && 0 !== Lt(t[1])
            }),
            Gt = r.isMixed = O(function(e, t) {
                return "space" === e && 2 === t.length && T(t[0]) && At(Lt(t[0])) && jt(t[1])
            }),
            Ht = O(function(e, t) {
                return ("/" === e || "dfrac" === e) && 2 === t.length && x(t[0]) && x(t[1]) && !(a(t[1]) && 0 === Lt(t[1]))
            }),
            $t = r.isExp = O(function(e, t) {
                return "^" === e && 2 === t.length && a(t[1]) && (a(t[0]) || h(t[0]) && At(Lt(t[1])))
            }),
            Ut = r.isGenFracExp = O(function(e, t) {
                return "^" === e && 2 === t.length && a(t[1]) && Ht(t[0]) && At(Lt(t[1]))
            }),
            zt = r.isBaseNum = O(function(e, t) {
                return "^" === e && 2 === t.length && a(t[0]) && a(t[1])
            }),
            Bt = A(function(e) {
                var t = e[0];
                e.slice(1);
                return "^" === t && $t(e) && At(Y(e)) && Math.abs(Y(e)) < 15
            }),
            Qt = A(function(e) {
                return Bt(e) && 0 !== Y(e)
            }),
            Wt = O(function(e, t) {
                return "*" === e && 2 === t.length && a(t[0]) && "var" === It(t[1])
            }),
            Kt = O(function(e, t) {
                return "*" === e && 2 === t.length && a(t[0]) && Bt(t[1])
            }),
            Jt = O(function(e, t) {
                return "-" === e && 1 === t.length && (Bt(t[0]) || "var" === It(t[0]))
            }),
            Yt = O(function(e, t) {
                return ("+" === e || "-" === e) && 2 === t.length && a(t[0]) && a(t[1])
            }),
            Zt = (O(function(e, t) {
                return "*" === e && 2 === t.length && a(t[0]) && a(t[1])
            }), O(function(e, t) {
                return "^" === e && 2 === t.length && jt(t[0]) && a(t[1]) && At(Lt(t[1])) && Math.abs(Lt(t[1])) < 10
            })),
            Xt = A(function(e) {
                var t = e[0],
                    r = e.slice(1);
                return "^" === t && Ut(e) && Math.abs(Lt(r[1])) < 10
            }),
            er = O(function(e, t) {
                return ("+" === e || "-" === e) && 2 === t.length && te(t[0]) && te(t[1]) && H(Z(t[0]), Z(t[1])) && At(X(t[0])) && At(X(t[1])) && 0 !== X(t[0]) && 0 !== X(t[1]) && Math.abs(X(t[0])) + Math.abs(X(t[1])) < 15
            }),
            tr = O(function(e, t) {
                return ("+" === e || "-" === e) && 2 === t.length && I(t[0]) && I(t[1]) && (jt(t[0]) || jt(t[1]))
            }),
            rr = (O(function(e, t) {
                return ("+" === e || "-" === e) && 2 === t.length && R(t[0]) && R(t[1]) && (Gt(t[0]) || Gt(t[1]))
            }), O(function(e, t) {
                return ("*" === e || "/" === e) && 2 === t.length && I(t[0]) && I(t[1]) && (jt(t[0]) || jt(t[1]))
            })),
            nr = (O(function(e, t) {
                return ("*" === e || "/" === e) && 2 === t.length && R(t[0]) && R(t[1]) && (Gt(t[0]) || Gt(t[1]))
            }), O(function(e, t) {
                if ("*" === e && 2 === t.length) {
                    var r = t[0][2],
                        n = t[1][2];
                    return 2 === t.length && Kt(t[0]) && Kt(t[1]) && (j(r) || j(n)) && H(J(r), J(n)) && Y(r) > 0 && Y(n) > 0 && Math.abs(Y(r)) + Math.abs(Y(n)) < 30
                }
                return !1
            })),
            or = A(function(e) {
                var t = e[0],
                    r = e.slice(1);
                return "*" === t && 2 === r.length && d(e) && (ue(r[0]) || a(r[0])) && (ue(r[1]) || a(r[1])) && (se(r[0]) || se(r[1]))
            }),
            ar = O(function(e, t) {
                return "^" === e && 2 === t.length && se(t[0]) && "var" !== It(t[0]) && !a(t[0]) && !c(t[1]) && 2 === Lt(t[1])
            }),
            ir = O(function(e, t) {
                return "^" === e && 2 === t.length && se(t[0]) && "var" !== It(t[0]) && !a(t[0]) && !c(t[1]) && 3 === Lt(t[1])
            }),
            ur = O(function(e, t) {
                return "*" === e && 2 === t.length && _(t[0]) && _(t[1]) && (j(t[0]) || j(t[1])) && H(J(t[0]), J(t[1])) && 0 !== J(t[0]) && At(Y(t[0])) && At(Y(t[1])) && Math.abs(Y(t[0])) + Math.abs(Y(t[1])) < 30
            }),
            sr = O(function(e, t) {
                return "/" === e && 2 === t.length && _(t[0]) && _(t[1]) && (j(t[0]) || j(t[1])) && H(J(t[0]), J(t[1])) && 0 !== J(t[0]) && At(Y(t[0])) && At(Y(t[1])) && Math.abs(Y(t[0])) + Math.abs(Y(t[1])) < 30 && Y(t[0]) >= 0 && Y(t[1]) >= 0
            }),
            lr = O(function(e, t) {
                return "*" === e && 2 === t.length && _(t[0]) && _(t[1]) && (j(t[0]) || j(t[1])) && H(J(t[0]), J(t[1])) && 0 !== J(t[0])
            }),
            fr = O(function(e, t) {
                return "/" === e && 2 === t.length && _(t[0]) && _(t[1]) && (j(t[0]) || j(t[1])) && H(J(t[0]), J(t[1])) && 0 !== J(t[0])
            }),
            cr = O(function(e, t) {
                return "var" === e && 1 === t.length && "y" === t[0]
            }),
            pr = O(function(e, t) {
                return "var" === e && 1 === t.length && "x" === t[0]
            }),
            hr = O(function(e, t) {
                return "^" === e && 2 === t.length && $t(t[0]) && At(Y(t[0])) && a(t[1]) && At(Lt(t[1])) && Lt(t[1]) > 0 && Math.abs(Y(t[0])) * Math.abs(Lt(t[1])) < 20
            }),
            vr = O(function(e, t) {
                return "^" === e && 2 === t.length && $t(t[0]) && a(t[1]) && (zt(t[0]) || At(t[1]))
            }),
            dr = (O(function(e, t) {
                return "=" === e && 2 === t.length && cr(t[0]) && le(t[1], "x")
            }), r.ansLeftIsY = O(function(e, t) {
                return Pt(e, ["=", ">", "<", ">=", "<="]) >= 0 && 2 === t.length && cr(t[0])
            })),
            gr = O(function(e, t) {
                return Pt(e, ["=", ">", "<", ">=", "<="]) >= 0 && 2 === t.length && pr(t[0])
            }),
            mr = O(function(e, t) {
                return "=" === e && 2 === t.length
            }),
            yr = r.isSetExpr = O(function(e, t) {
                return ";" === e && 2 === t.length
            }),
            xr = r.isPoint = O(function(e, t) {
                return "pt" === e && 2 === t.length && !c(t[0]) && !c(t[1])
            }),
            br = (r.evalAtVal = wt.evalAtVal, r.isVarFrac = O(function(e, t) {
                return ("/" === e || "dfrac" === e) && 2 === t.length && x(t[0]) && x(t[1]) && c(t[1])
            })),
            qr = O(function(e, t) {
                return ("+" === e || "-" === e) && 2 === t.length && (br(t[0]) || br(t[1]))
            })
    }, {}],
    17: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e, t, r, n) {
            var o = 0;
            o = "undefined" == typeof n ? 0 : n;
            var a = c.currentGraph(),
                i = a.raphael.set(),
                u = 0;
            $.each(e, function(e, t) {
                u += t
            });
            var s = 0;
            $.each(e, function(e, n) {
                i.push(a.arc([o, 0], r, 360 * s / u, 360 * (s + n) / u, !0, {
                    stroke: "none",
                    fill: t[e]
                })), s += n
            });
            for (var l = 0; l < u; l++) i.push(a.line([o, 0], a.relpolar(r, 360 * l / u, o), {
                stroke: "#fff"
            }));
            return i
        }

        function a(e) {
            "undefined" == typeof e && (e = "out"), p += 1;
            var t = "grid0" + p,
                r = document.createElement("div");
            r.setAttribute("id", t), $("#" + e).append(r), document.getElementById(t).innerHTML = "";
            var n = document.getElementById(t),
                o = c.createGraph(n);
            return o.init({
                range: [
                    [-2, 10],
                    [-2, 1]
                ],
                scale: 30
            }), c.setCurrentGraph(o), document.getElementById(t).style.display = "", o
        }

        function i(e, t, r) {
            var n = Math.abs(e[0]),
                a = Math.abs(e[1]);
            o([n, a - n], [t, "#bbbbbb"], 1, r)
        }

        function u(e, t) {
            var r = "#0000f0";
            a(t), i(e, r, 0)
        }

        function s(e, t, r) {
            var n = "#0000f0",
                o = "#50C878";
            a(r), i(e, n, 0), t && i(t, o, 2.5)
        }

        function l(e, t, r) {
            var n = "#0000f0",
                i = "#50C878";
            if (a(r), t) {
                var u = Math.abs(e[0]),
                    s = Math.abs(t[0]),
                    l = Math.abs(e[1]);
                o([u, s, l - u - s], [n, i, "#bbbbbb"], 1, 0)
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.drawFraction = u, r.drawFractions = s, r.drawMultiPie = l;
        var f = e(19),
            c = n(f),
            p = 0
    }, {}],
    18: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e, t, r) {
            try {
                var n, o, a;
                if ("and" === r) {
                    if (s(e, t)) return n = l(e), o = l(t), a = f(n, o)
                } else if ("or" === r && s(e, t)) return n = l(e), o = l(t), a = [n, o]
            } catch (t) {
                try {
                    console.log(t.message), ga("send", "event", "GetErrorGatoms", "" + e + " EE" + t.message, "" + t.message)
                } catch (e) {}
            }
        }

        function a(e, t, r) {
            try {
                var n, o, a;
                "and" === r ? s(e, t) && (n = l(e), o = l(t), a = f(n, o), m.showSegsOnLine(a)) : "or" === r && s(e, t) && (n = l(e), o = l(t), m.showSegsOnLine([n, o]))
            } catch (t) {
                try {
                    console.log(t.message), ga("send", "event", "DrawErrorGatoms", "" + e + " EE" + t.message, "" + t.message)
                } catch (e) {}
            }
        }

        function i(e) {
            try {
                e.length > 0 && m.showSegsOnLine(e)
            } catch (e) {
                try {
                    console.log(e.message);
                    var t = "dummy";
                    ga("send", "event", "DrawErrorSegs2", "" + t + " EE" + e.message, "" + e.message)
                } catch (e) {}
            }
        }

        function u(e) {
            var t = e[0],
                r = e[1],
                n = e[2];
            try {
                if (1 === t.findMaxDegree() && 1 === t.getCoefFromInt(1).getNum() && 0 === r.findMaxDegree() && y(n, [">", "<", ">=", "<="]) >= 0) return !0
            } catch (e) {
                return !1
            }
            return !1
        }

        function s(e, t) {
            try {
                var r = e[0],
                    n = t[0];
                if (u(e) && u(t) && r.getVariableSafe() === n.getVariableSafe()) return !0
            } catch (e) {
                return !1
            }
            return !1
        }

        function l(e) {
            var t, r, n, o, a = e[1].getCoefFromInt(0).getNum(),
                i = e[2];
            ">" === i ? (t = "(", r = a, n = "+inf", o = ")") : "<" === i ? (t = "(", r = "-inf", n = a, o = ")") : ">=" === i ? (t = "[", r = a, n = "+inf", o = ")") : "<=" === i && (t = "(", r = "-inf", n = a, o = "]");
            var u = {
                leftbound: t,
                leftval: r,
                rightval: n,
                rightbound: o
            };
            return u
        }

        function f(e, t) {
            var r, n, o, a, i = [],
                u = e.leftbound,
                s = e.leftval,
                l = e.rightval,
                f = e.rightbound,
                p = t.leftbound,
                h = t.leftval,
                v = t.rightval,
                d = t.rightbound;
            s === h ? (n = s, r = "[" === u && "[" === p ? "[" : "(") : "-inf" === s ? (n = h, r = p) : "-inf" === h ? (n = s, r = u) : s > h ? (n = s, r = u) : (n = h, r = p), l === v ? (o = l, a = "]" === f && "]" === d ? "]" : ")") : "+inf" === l ? (o = v, a = d) : "+inf" === v ? (o = l, a = f) : l < v ? (o = l, a = f) : (o = v, a = d);
            var g = {
                leftbound: r,
                leftval: n,
                rightval: o,
                rightbound: a
            };
            return c(g) && i.push(g), i
        }

        function c(e) {
            var t = e.leftbound,
                r = e.leftval,
                n = e.rightval,
                o = e.rightbound;
            if ("-inf" === r && "-inf" !== n) return !0;
            if ("+inf" === n && "+inf" !== r) return !0;
            if (d.isNumber(r) && d.isNumber(n)) {
                if (r < n) return !0;
                if (r === n && "[" === t && "]" === o) return !0
            }
            return !1
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.getGatomSegs = o, r.tryDrawGatoms = a, r.tryDrawSegs2 = i;
        var p = e(40),
            h = n(p),
            v = e(16),
            d = n(v),
            g = e(23),
            m = n(g),
            y = h.inArray
    }, {}],
    19: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o() {
            return p.currentGraph
        }

        function a(e) {
            return p.currentGraph = e, p.currentGraph
        }

        function i(e) {
            var t, r, n = 40,
                o = 40;
            $(e).css("position", "relative");
            var a = Raphael(e);
            $(e).children("div").css("position", "absolute");
            var i = {
                    "stroke-width": 2,
                    fill: "none"
                },
                u = function e(t) {
                    if ("number" == typeof t) return e([t, t]);
                    var r = t[0],
                        a = t[1];
                    return [r * n, a * o]
                },
                l = function e(a) {
                    if ("number" == typeof a) return e([a, a]);
                    var i = a[0],
                        u = a[1];
                    return [(i - t[0]) * n, (r[1] - u) * o]
                },
                f = function(e) {
                    function t(e) {
                        return 0 === e ? e : e < 0 ? -t(-e) : Math.max(1e-6, Math.min(e, 1e20))
                    }
                    return $.map(e, function(e, r) {
                        if (e === !0) return "z";
                        var n = l(e);
                        return (0 === r ? "M" : "L") + t(n[0]) + " " + t(n[1])
                    }).join("")
                },
                p = function(e) {
                    var i = {
                            scale: function(e) {
                                "number" == typeof e && (e = [e, e]), n = e[0], o = e[1], a.setSize((t[1] - t[0]) * n, (r[1] - r[0]) * o)
                            },
                            clipRect: function(e) {
                                var t = e[0],
                                    r = e[1];
                                return t[1] += r[1], {
                                    "clip-rect": l(t).concat(u(r)).join(" ")
                                }
                            },
                            strokeWidth: function(e) {
                                return {
                                    "stroke-width": parseFloat(e)
                                }
                            },
                            rx: function(e) {
                                return {
                                    rx: u([e, 0])[0]
                                }
                            },
                            ry: function(e) {
                                return {
                                    ry: u([0, e])[1]
                                }
                            },
                            r: function(e) {
                                var t = u([e, e]);
                                return {
                                    rx: t[0],
                                    ry: t[1]
                                }
                            }
                        },
                        s = {};
                    return $.each(e || {}, function(e, t) {
                        var r = i[e];
                        if ("function" == typeof r) $.extend(s, r(t));
                        else {
                            var n = e.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();
                            s[n] = t
                        }
                    }), s
                },
                h = function(e, t) {
                    var r = Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2)),
                        n = Math.atan2(e[1], e[0]);
                    return n < 0 && (n += 2 * Math.PI), t || (n = 180 * n / Math.PI), [r, n]
                },
                v = function(e, t) {
                    return "number" == typeof e && (e = [e, e]), t = t * Math.PI / 180, [e[0] * Math.cos(t), e[1] * Math.sin(t)]
                },
                d = function(e, t, r) {
                    return "number" == typeof e && (e = [e, e]), t = t * Math.PI / 180, [e[0] * Math.cos(t) + r, e[1] * Math.sin(t)]
                },
                g = function e(t) {
                    var r = t.constructor.prototype;
                    if (r === Raphael.el) {
                        if ("path" === t.type && "undefined" == typeof t.arrowheadsDrawn) {
                            var n = t.attr("stroke-width"),
                                o = .6 + .4 * n,
                                i = t.getTotalLength();
                            if (0 !== i) {
                                var u = a.set(),
                                    s = a.path("M-3 4 C-2.75 2.5 0 0.25 0.75 0C0 -0.25 -2.75 -2.5 -3 -4"),
                                    l = t.getPointAtLength(i - .4),
                                    f = t.getPointAtLength(i - .75 * o),
                                    c = 180 * Math.atan2(l.y - f.y, l.x - f.x) / Math.PI,
                                    p = t.attr();
                                delete p.path;
                                var h = t.getSubpath(0, i - .75 * o);
                                return h = a.path(h).attr(p), h.arrowheadsDrawn = !0, t.remove(), s.rotate(c, .75, 0).scale(o, o, .75, 0).translate(f.x, f.y).attr(p).attr({
                                    "stroke-linejoin": "round",
                                    "stroke-linecap": "round"
                                }), s.arrowheadsDrawn = !0, u.push(h), u.push(s), u
                            }
                        }
                    } else if (r === Raphael.st)
                        for (var v = 0, i = t.items.length; v < i; v++) e(t.items[v])
                },
                m = {
                    circle: function(e, t) {
                        return a.ellipse.apply(a, l(e).concat(u([t, t])))
                    },
                    ellipse: function(e, t) {
                        return a.ellipse.apply(a, l(e).concat(u(t)))
                    },
                    arc: function(e, t, r, n, o) {
                        r = (r % 360 + 360) % 360, n = (n % 360 + 360) % 360;
                        var i = l(e),
                            s = u(t),
                            f = v(t, r),
                            c = v(t, n),
                            p = l([e[0] + f[0], e[1] + f[1]]),
                            h = l([e[0] + c[0], e[1] + c[1]]),
                            d = ((n - r) % 360 + 360) % 360 > 180;
                        return a.path("M" + p.join(" ") + "A" + s.join(" ") + " 0 " + (d ? 1 : 0) + " 0 " + h.join(" ") + (o ? "L" + i.join(" ") + "z" : ""))
                    },
                    path: function(e) {
                        var t = a.path(f(e));
                        return t.graphiePath = e, t
                    },
                    line: function(e, t) {
                        return this.path([e, t])
                    },
                    grid: function(e, t) {
                        for (var r = i.step || [1, 1], n = a.set(), o = r[0] * Math.ceil(e[0] / r[0]); o <= e[1]; o += r[0]) n.push(this.line([o, t[0]], [o, t[1]]));
                        for (var u = r[1] * Math.ceil(t[0] / r[1]); u <= t[1]; u += r[1]) n.push(this.line([e[0], u], [e[1], u]));
                        return n
                    },
                    label: function(t, r, n, o) {
                        r = "" + r;
                        var a, u = {
                                center: [-.5, -.5],
                                above: [-.5, -1],
                                "above right": [0, -1],
                                right: [0, -.5],
                                "below right": [0, 0],
                                "below f": [-.2, 0],
                                below: [-.5, 0],
                                below2: [-.7, 0],
                                "below left": [-1, 0],
                                left: [-1, -.5],
                                left2: [-1.5, -.65],
                                left3: [-.9, -.7],
                                left4: [-1.1, -.65],
                                "above left": [-1, -1]
                            },
                            s = l(t);
                        a = $("<span>").append(M(r)), a.css("visibility", "hidden"), a.addClass("labelclass");
                        var f = i["label-distance"];
                        a.css({
                            position: "absolute",
                            left: s[0],
                            top: s[1],
                            padding: (null != f ? f : 7) + "px"
                        }).appendTo(e);
                        var c = function(e) {
                                a.css("visibility", "");
                                var t = u[n || "center"];
                                a.css({
                                    marginLeft: Math.round(e[0] * t[0]),
                                    marginTop: Math.round(e[1] * t[1])
                                })
                            },
                            p = [a.outerWidth(), a.outerHeight()];
                        if (p[1] > 18) c(p);
                        else {
                            var h = 9 * r.length + 13;
                            "0" === r ? h = 17 : 1 === r.length ? h = 17 : ("-" === r[0] && (h += 15), r.indexOf(".") !== -1 && (h -= 12)), c([h, 26])
                        }
                        return a
                    },
                    plotParametric: function(e, t) {
                        i.strokeLinejoin || (i.strokeLinejoin = "round"), i.strokeLinecap || (i.strokeLinecap = "round");
                        for (var r = [], n = t[0], o = t[1], a = (o - n) / (i["plot-points"] || 800), u = n; u <= o; u += a) r.push(e(u));
                        return this.path(r)
                    },
                    plotParametric2: function(e, t, r) {
                        i.strokeLinejoin || (i.strokeLinejoin = "round"), i.strokeLinecap || (i.strokeLinecap = "round");
                        var n = [],
                            o = [],
                            a = t[0],
                            u = t[1],
                            s = (u - a) / 150;
                        "undefined" == typeof r && (r = 1);
                        for (var l = a; l <= u; l += s) {
                            var f = e(l);
                            "number" != typeof f[r] || isNaN(f[r]) ? (n.length > 1 && o.push(n.slice(0)), n = []) : n.push(f)
                        }
                        return n.length > 1 && o.push(n.slice(0)), o
                    },
                    plotPolar: function(e, t) {
                        var r = t[0],
                            o = t[1];
                        return i["plot-points"] || (i["plot-points"] = 2 * (o - r) * n), this.plotParametric(function(t) {
                            return v(e(t), 180 * t / Math.PI)
                        }, t)
                    },
                    plot: function(e, t) {
                        var r = t[0],
                            o = t[1];
                        return i["plot-points"] || (i["plot-points"] = 2 * (o - r) * n), this.plotParametric(function(t) {
                            return [t, e(t)]
                        }, t)
                    },
                    plot2: function(e, t) {
                        var r = t[0],
                            o = t[1];
                        return i["plot-points"] || (i["plot-points"] = 2 * (o - r) * n), this.plotParametric2(function(t) {
                            return [t, e(t)]
                        }, t, 1)
                    },
                    plot2X: function(e, t) {
                        var r = t[0],
                            n = t[1];
                        return i["plot-points"] || (i["plot-points"] = 2 * (n - r) * o), this.plotParametric2(function(t) {
                            return [e(t), t]
                        }, t, 0)
                    }
                },
                y = {
                    raphael: a,
                    init: function(i) {
                        var u = i.scale || [40, 40];
                        u = "number" == typeof u ? [u, u] : u, n = u[0], o = u[1], null == i.range, t = i.range[0], r = i.range[1];
                        var s = (t[1] - t[0]) * n,
                            l = (r[1] - r[0]) * o;
                        return a.setSize(s, l), $(e).css({
                            width: s,
                            height: l
                        }), this
                    },
                    style: function(e, t) {
                        var r, n = p(e);
                        if ("function" == typeof t) {
                            var o = i;
                            i = $.extend({}, i, n), r = t.call(y), i = o
                        } else $.extend(i, n);
                        return r
                    },
                    scalePoint: l,
                    scaleVector: u,
                    polar: v,
                    relpolar: d,
                    cartToPolar: h
                };
            return $.each(m, function(e) {
                y[e] = function() {
                    var t, r = arguments[arguments.length - 1],
                        n = i;
                    if ("object" !== ("undefined" == typeof r ? "undefined" : s(r)) || $.isArray(r)) i = $.extend({}, i), t = m[e].apply(m, arguments);
                    else {
                        i = $.extend({}, i, p(r));
                        var o = [].slice.call(arguments, 0, arguments.length - 1);
                        t = m[e].apply(m, o)
                    }
                    var a = t.constructor.prototype;
                    return a === Raphael.el || a === Raphael.st ? (t.attr(i), i.arrows && (t = g(t))) : t instanceof $ && t.css(i), i = n, t
                }
            }), y.graphInit = function(e) {
                e = e || {}, $.each(e, function(t, r) {
                    t.match(/.*Opacity$/) || "range" === t || "number" != typeof r || (e[t] = [r, r]), "range" === t && (r.constructor === Array ? r[0].constructor !== Array && (e[t] = [
                        [-r[0], r[0]],
                        [-r[1], r[1]]
                    ]) : "number" == typeof r && (e[t] = [
                        [-r, r],
                        [-r, r]
                    ]))
                });
                var t = function(e) {
                        try {
                            var t = c(e);
                            return t
                        } catch (t) {
                            return e
                        }
                    },
                    r = e.range || [
                        [-10, 10],
                        [-10, 10]
                    ],
                    n = e.scale || [20, 20],
                    o = e.grid || !0,
                    a = e.gridOpacity || .1,
                    i = e.gridStep || [1, 1],
                    u = e.axes || !0,
                    s = e.axisArrows || "",
                    l = e.axisOpacity || 1,
                    f = e.ticks || !0,
                    p = e.tickStep || [2, 2],
                    h = e.tickLen || [5, 5],
                    v = e.tickOpacity || 1,
                    d = e.labels || e.labelStep || !1,
                    g = e.labelStep || [1, 1],
                    m = e.labelOpacity || 1,
                    y = e.unityLabels || !1,
                    x = e.labelFormat || t,
                    b = e.xLabelFormat || x,
                    q = e.yLabelFormat || x,
                    E = null == e.smartLabelPositioning || e.smartLabelPositioning;
                if (E) {
                    var M = function(e) {
                        return function(t) {
                            return e(t) + ""
                        }
                    };
                    b = M(b), q = M(q)
                }
                this.init({
                    range: r,
                    scale: n
                }), o && this.grid(r[0], r[1], {
                    stroke: "#000000",
                    opacity: a,
                    step: i
                }), u && this.style({
                    stroke: "#000000",
                    opacity: l,
                    strokeWidth: 2,
                    arrows: "->"
                }, function() {
                    this.path([
                            [0, 0],
                            [r[0][0], 0]
                        ]), this.path([
                            [0, 0],
                            [r[0][1], 0]
                        ]),
                        this.path([
                            [0, 0],
                            [0, r[1][0]]
                        ]), this.path([
                            [0, 0],
                            [0, r[1][1]]
                        ])
                }), f && this.style({
                    stroke: "#000000",
                    opacity: v,
                    strokeWidth: 1
                }, function() {
                    for (var e = i[0] * p[0], t = h[0] / n[1], o = r[0][0], a = r[0][1], u = e; u <= a; u += e)(u < a || !s) && this.line([u, -t], [u, t]);
                    for (var u = -e; u >= o; u -= e)(u > o || !s) && this.line([u, -t], [u, t]);
                    e = i[1] * p[1], t = h[1] / n[0], o = r[1][0], a = r[1][1];
                    for (var l = e; l <= a; l += e)(l < a || !s) && this.line([-t, l], [t, l]);
                    for (var l = -e; l >= o; l -= e)(l > o || !s) && this.line([-t, l], [t, l])
                }), d && this.style({
                    stroke: "#000000",
                    opacity: m
                }, function() {
                    for (var e = i[0] * p[0] * g[0], t = r[0][0], n = r[0][1], o = e; o <= n; o += e)(o < n || !s) && this.label([o, 0], b(o), "below2");
                    for (var o = -e * (y ? 1 : 2); o >= t; o -= e)(o > t || !s) && this.label([o, 0], b(o), "below");
                    e = i[1] * p[1] * g[1], t = r[1][0], n = r[1][1];
                    for (var a = e; a <= n; a += e)(a < n || !s) && (a < 10 ? this.label([0, a], q(a), "left2") : this.label([0, a], q(a), "left4"));
                    for (var a = -e * (y ? 1 : 2); a >= t; a -= e)(a > t || !s) && this.label([0, a], q(a), "left3")
                })
            }, y
        }

        function u(e, t) {
            var r = p.currentGraph;
            t = $.extend({
                xpixels: 500,
                ypixels: 500,
                xdivisions: 20,
                ydivisions: 20,
                labels: !0,
                unityLabels: !0,
                range: void 0 === e ? [
                    [-10, 10],
                    [-10, 10]
                ] : e
            }, t), t.scale = [t.xpixels / (t.range[0][1] - t.range[0][0]), t.ypixels / (t.range[1][1] - t.range[1][0])], t.gridStep = [(t.range[0][1] - t.range[0][0]) / t.xdivisions, (t.range[1][1] - t.range[1][0]) / t.ydivisions], r.xpixels = t.xpixels, r.ypixels = t.ypixels, r.range = t.range, r.scale = t.scale, r.graphInit(t)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        r.currentGraph = o, r.setCurrentGraph = a, r.createGraph = i, r.initAutoscaledGraph = u;
        var l = e(45),
            f = n(l),
            c = f.numStr,
            p = {}
    }, {}],
    20: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e, t) {
            var r = u(t);
            l(r, e)
        }

        function a(e, t, r) {
            var n = s(t, r);
            l(n, e)
        }

        function i() {
            if (N)
                for (var e = 0; e < N.length; e++) N[e].remove();
            N = []
        }

        function u(e) {
            return v && !j() || (v = I(e)), i(), F(e, !0), O("graphoptdiv", !0), v
        }

        function s(e, t) {
            return v && !j() || (v = R(e, t)), i(), F(e, !0), O("graphoptdiv", !0), v
        }

        function l(e, t) {
            var r = ["blue", "red", "green"];
            t.map(function(t, n) {
                var o;
                o = n >= r.length ? "black" : r[n], b.isPolynomial(t) ? f(t, e, o) : b.isyxEq(t) ? c(t, e, o) : b.isxEq(t) ? h(t, e, o) : b.isPoint(t) ? p(t, e, o) : b.isyxIneq(t) ? c(t, e, o) : b.isxIneq(t) ? h(t, e, o) : (b.isStandardEq(t) || b.isStandardIneq(t)) && c(D.solveStandardEq(t), e, o)
            })
        }

        function f(e, t, r) {
            var n = D.solveForY(e),
                o = b.ansRightPoly(n),
                a = e[0];
            "=" === a ? U(t, o.polyToExpr(), r) : z(t, o.polyToExpr(), r, a)
        }

        function c(e, t, r) {
            var n = e[2],
                o = e[0];
            "=" === o ? U(t, n, r) : z(t, n, r, o)
        }

        function p(e, t, r) {
            var n = L(e[1]),
                o = L(e[2]);
            G(t, n, o, r)
        }

        function h(e, t, r) {
            var n = e[2],
                o = e[0];
            "=" === o ? B(t, n, r) : Q(t, n, r, o)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.drawGenGraph = r.drawMyPoint = r.goodWindow = r.predrawgraph = r.windowEdit = void 0, r.drawGraphsId = o, r.drawGraphsIdW = a, r.clearPaths = i;
        var v, d = e(40),
            g = n(d),
            m = e(5),
            y = n(m),
            x = e(16),
            b = n(x),
            q = e(19),
            E = n(q),
            M = e(35),
            w = n(M),
            T = e(33),
            D = n(T),
            S = e(34),
            k = n(S),
            C = e(38),
            V = n(C),
            N = [],
            P = g.inArray,
            L = y.evalExpr,
            F = k.showElem,
            O = k.showElemJ,
            A = [
                [-10, 10],
                [-10, 10]
            ];
        w.setWindowSize(A);
        var I = (r.windowEdit = function(e) {
                w.setWindowSize(e)
            }, r.predrawgraph = function(e) {
                document.getElementById(e).innerHTML = "", F(e, !1);
                var t = document.getElementById(e),
                    r = E.createGraph(t);
                if (E.setCurrentGraph(r), w.mobmode()) E.initAutoscaledGraph(w.mywindowsize(), {
                    xpixels: 280,
                    ypixels: 280
                });
                else {
                    var n = _();
                    E.initAutoscaledGraph(n)
                }
                return r
            }),
            R = function(e, t) {
                document.getElementById(e).innerHTML = "", F(e, !1);
                var r = document.getElementById(e),
                    n = E.createGraph(r);
                if (E.setCurrentGraph(n), w.mobmode()) "number" != typeof t ? E.initAutoscaledGraph(w.mywindowsize(), {
                    xpixels: 280,
                    ypixels: 280
                }) : t <= 374.9 ? E.initAutoscaledGraph(w.mywindowsize(), {
                    xpixels: 280,
                    ypixels: 280
                }) : t <= 413.9 ? E.initAutoscaledGraph(w.mywindowsize(), {
                    xpixels: 335,
                    ypixels: 335
                }) : E.initAutoscaledGraph(w.mywindowsize(), {
                    xpixels: 374,
                    ypixels: 374
                });
                else {
                    var o = _();
                    E.initAutoscaledGraph(o)
                }
                return n
            },
            _ = (r.goodWindow = function(e) {
                try {
                    var t = e[0],
                        r = (e[1], t[0]),
                        n = t[1],
                        o = t[0],
                        a = t[1];
                    return r < n && o < a
                } catch (e) {
                    return !1
                }
            }, function() {
                var e = [
                        [-10, 10],
                        [-10, 10]
                    ],
                    t = e;
                V.printOutDiv("outgraph", "");
                try {
                    var r = parseFloat($("#gdsource1").val()),
                        n = parseFloat($("#gdsource2").val()),
                        o = parseFloat($("#gdsource3").val()),
                        a = parseFloat($("#gdsource4").val());
                    if (r < n && o < a) {
                        if (t = [
                                [r, n],
                                [o, a]
                            ], j()) {
                            try {
                                var i = $("#source").val();
                                ga("send", "event", "windowsize", i, "" + r + " " + n + " " + o + " " + a)
                            } catch (e) {}
                            V.appendOutDiv("outgraph", '<font style="line-height:30px">Your window is xmin:' + r + " xmax:" + n + " ymin:" + o + " ymax:" + a + "</font>")
                        }
                    } else V.appendOutDiv("outgraph", '<font color="red" style="line-height:30px">Sorry, I don\'t understand your window size.</font>'), t = e
                } catch (r) {
                    V.appendOutDiv("outgraph", '<font color="red" style="line-height:30px">Sorry, I don\'t understand your window size.</font>'), t = e
                }
                return t
            }),
            j = function() {
                try {
                    var e = parseFloat($("#gdsource1").val()),
                        t = parseFloat($("#gdsource2").val()),
                        r = parseFloat($("#gdsource3").val()),
                        n = parseFloat($("#gdsource4").val()),
                        o = v.range;
                    if (e !== o[0][0] || t !== o[0][1] || r !== o[1][0] || n !== o[1][1]) return !0
                } catch (e) {
                    return !1
                }
            },
            G = r.drawMyPoint = function(e, t, r, n) {
                if ("undefined" == typeof n && (n = "blue"), "number" == typeof t && "number" == typeof r) {
                    var o = e.style({
                        stroke: n,
                        fill: n
                    }, function() {
                        return e.ellipse([t, r], [5 / e.scale[0], 5 / e.scale[1]]).toBack()
                    });
                    N.push(o)
                }
            },
            H = function(e, t, r) {
                return e > r + 10 * (r - t) ? r + 5 * (r - t) : e < t - 10 * (r - t) ? t - 5 * (r - t) : e
            },
            U = r.drawGenGraph = function(e, t, r) {
                "undefined" == typeof r && (r = "blue");
                for (var n = e.range[0][0], o = e.range[0][1], a = e.range[1][0], i = e.range[1][1], u = e.plot2(function(e) {
                        var r = L(b.evalAtVal(t, e));
                        return H(r, a, i)
                    }, [n, o]), s = 0; s < u.length; s++) {
                    var l = u[s],
                        f = e.style({
                            stroke: r,
                            strokeWidth: 3
                        }, function() {
                            return e.path(l).toBack()
                        });
                    N.push(f)
                }
            },
            z = function(e, t, r, n) {
                "undefined" == typeof r && (r = "blue");
                var o = e.range[0][0],
                    a = e.range[0][1],
                    i = e.range[1][0],
                    u = e.range[1][1],
                    s = e.plot2(function(e) {
                        var r = L(b.evalAtVal(t, e));
                        return H(r, i, u)
                    }, [o, a]),
                    l = "";
                P(n, [">", "<"]) >= 0 && (l = "- ");
                for (var f = 0; f < s.length; f++) {
                    var c = s[f],
                        p = e.style({
                            stroke: r,
                            strokeWidth: 3,
                            strokeDasharray: l
                        }, function() {
                            return e.path(c).toBack()
                        });
                    N.push(p)
                }
                var h = u;
                P(n, ["<", "<="]) >= 0 && (h = i);
                var v = [
                    [o, h]
                ];
                for (f = 0; f < s.length; f++) c = s[f], v.push.apply(v, c);
                v.push([a, h]);
                var d = e.style({
                    fill: r,
                    stroke: null,
                    opacity: .3
                }, function() {
                    return e.path(v).toBack()
                });
                N.push(d)
            },
            B = function(e, t, r) {
                "undefined" == typeof r && (r = "blue");
                for (var n = e.range[1][0], o = e.range[1][1], a = e.range[0][0], i = e.range[0][1], u = e.plot2X(function(e) {
                        var r = L(b.evalAtVal(t, e));
                        return H(r, a, i)
                    }, [n, o]), s = 0; s < u.length; s++) {
                    var l = u[s],
                        f = e.style({
                            stroke: r,
                            strokeWidth: 3
                        }, function() {
                            return e.path(l).toBack()
                        });
                    N.push(f)
                }
            },
            Q = function(e, t, r, n) {
                "undefined" == typeof r && (r = "blue");
                var o = e.range[0][0],
                    a = e.range[0][1],
                    i = e.range[1][0],
                    u = e.range[1][1],
                    s = e.plot2X(function(e) {
                        var r = L(b.evalAtVal(t, e));
                        return H(r, o, a)
                    }, [i, u]),
                    l = "";
                P(n, [">", "<"]) >= 0 && (l = "- ");
                for (var f = 0; f < s.length; f++) {
                    var c = s[f],
                        p = e.style({
                            stroke: r,
                            strokeWidth: 3,
                            strokeDasharray: l
                        }, function() {
                            return e.path(c).toBack()
                        });
                    N.push(p)
                }
                var h = a;
                P(n, ["<", "<="]) >= 0 && (h = o);
                var v = [
                    [h, i]
                ];
                for (f = 0; f < s.length; f++) c = s[f], v.push.apply(v, c);
                v.push([h, u]);
                var d = e.style({
                    fill: r,
                    stroke: null,
                    opacity: .3
                }, function() {
                    return e.path(v).toBack()
                });
                N.push(d)
            }
    }, {}],
    21: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.getOneStepSub = void 0;
        var o = e(16),
            a = n(o),
            i = e(33),
            u = n(i),
            s = u.fracExpr,
            l = u.getExprText,
            f = u.getExprTextH;
        r.getOneStepSub = function(e) {
            var t = a.getGVarEq(e).sort()[0],
                r = e,
                n = s(["-", r[1],
                    ["var", t]
                ]),
                o = f(n),
                i = f(r[2]),
                u = (f(i), s(["-", i, n])),
                c = f(u),
                p = [];
            return p.push(["msgstr", "Let me teach you how to solve your equation:"]), p.push(["MDiv", l(e)]), p.push(["msgstr", "<br>What number is <span style='color:purple'>" + t + "</span>?"]), p.push(["msgstr", "<br>The trick in algebra is to do the opposite. The opposite of adding " + o + " is subtracing " + o + ". So let's subtract " + o + "."]), p.push(["msgstr", "<br>"]), p.push(["MDiv", l(["=", ["-", r[1],
                    ["color", "blue", n]
                ],
                ["-", r[2],
                    ["color", "blue", n]
                ]
            ])]), p.push(["MDiv", l(["=", ["var", t],
                ["-", r[2], n]
            ])]), p.push(["MDiv", l(["=", ["var", t], u])]), p.push(["msgstr", "<br>It looks like " + t + "=" + c + ". Let's make sure this answer works by plugging it in:"]), p.push(["msgstr", "<br>"]), p.push(["MDiv", l(r)]), p.push(["MDiv", l(a.evalAtVal(r, ["color", "purple", u], t))]), p.push(["MDiv", l(["=", i, i])]), p.push(["msgstr", "<br>Since it works, our answer is:"]), p.push(["MDiv", l(["=", ["var", t], u])]), p.push(["msgstr", '<br><hr>Practice solving equations!<br><a href="/one-step/subtraction/practice/"  style=""><button type="submit" class="btn btn-success" style="color: #ffffff; height: 34px; font-size:20px;line-height: 24px; margin-top:  10px;">Algebra Practice &raquo;</button></a><br><br><br>']), p
        }
    }, {}],
    22: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e, t) {
            var r = ie(e);
            return P.appendOutMDiv(t, r), r
        }

        function a(e) {
            try {
                var t = Q(e);
                if (t.length > 1) {
                    ie(t), ie(ue(e)), ie(e);
                    return !0
                }
            } catch (e) {}
            try {
                return !(!b.isAddTerms(e) || !b.isUniformVarInt(e) || 2 !== ne(e).findMaxDegree() || W(e) !== K(e))
            } catch (e) {}
            return !1
        }

        function i(e, t) {
            try {
                P.appendOutMHeadDiv2(e, t)
            } catch (e) {
                se("MHeadDiv2", "P:", "" + e.message)
            }
        }

        function u(e, t, r, n) {
            try {
                n ? P.appendOutMTopDiv(e, t, r, n) : P.appendOutMTopDiv(e, t, r)
            } catch (o) {
                n ? P.appendOutMStrDiv(e, t, r, n) : P.appendOutMStrDiv(e, t, r), se("MTopDiv", "P:", "" + o.message)
            }
        }

        function s(e, t, r) {
            var n = V.getPrintListR(e, r),
                o = n[0];
            return r = n[1], F.appendPrintList(t, o), r
        }

        function l(e, t) {
            ge = s(e, t, 1)
        }

        function f(e) {
            try {
                o(e, "stepout");
                var t = te(e);
                if (l(t, "stepout"), t.length > 1) return !0
            } catch (t) {
                fe("stepdiv", !1), le(e, "PolyError", t.message)
            }
            return !1
        }

        function c(e) {
            try {
                var t = Q(e);
                if (t.length > 1) {
                    var r = ie(t),
                        n = ie(ue(e)),
                        o = ie(e);
                    return ce("factorout", ""), u("factorout", o, "Factor "), he("factorout", n), he("factorout", "=" + r), pe("factorout", P.makeDivStr("<hr>")), i("factorout", "Réponse:"), he("factorout", r), !0
                }
                ce("factorout", "");
                var o = ie(e),
                    n = ie(ue(e)),
                    a = [];
                return a.push(["MDiv", o, "MTopDiv", "Factor"]), a.push(["MDiv", "=" + n]), a.push(["msgstr", "Doesn't factor"]), a.push(["append", P.makeDivStr("<hr>")]), a.push(["msgstr", "<u>Réponse:</u>"]), a.push(["MDiv", n]), F.appendPrintList("factorout", a), !0
            } catch (t) {
                fe("factordiv", !1), le(e, "FactorError", t.message)
            }
            return !1
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.myMathObj = r.solveVarPrintList = void 0, r.isFactorStep = a, r.printPolyStep = f, r.printFactorStep = c;
        var p, h = e(40),
            v = n(h),
            d = e(6),
            g = n(d),
            m = e(1),
            y = n(m),
            x = e(16),
            b = n(x),
            q = e(35),
            E = n(q),
            M = e(33),
            w = n(M),
            T = e(34),
            D = n(T),
            S = e(18),
            k = n(S),
            C = e(39),
            V = n(C),
            N = e(38),
            P = n(N),
            L = e(37),
            F = n(L),
            O = e(25),
            A = n(O),
            I = e(30),
            R = n(I),
            _ = e(24),
            j = n(_),
            G = e(31),
            H = n(G),
            U = e(36),
            z = n(U),
            B = y.dSolveForMyVar,
            Q = y.factorExpr,
            W = y.myPolyText,
            K = v.exprToText,
            J = y.showAddTermsMVar2,
            Y = y.dLinEq2,
            Z = y.dLinEq3,
            X = y.getSegs,
            ee = y.myTutorSuggest,
            te = y.dPolyStep,
            re = v.inArray,
            ne = g.exprToPoly,
            oe = b.typeOfAns,
            ae = w.mDiv,
            ie = w.getExprText,
            ue = w.fracExpr,
            se = w.trackIt,
            le = w.trackE,
            fe = D.showElemJ,
            ce = P.printOut,
            pe = P.appendOut,
            he = P.appendOutMDiv,
            ve = r.solveVarPrintList = function(e, t) {
                var r = B(e, t),
                    n = r[0],
                    o = (r[1], V.getPrintListR(n, 1)),
                    a = o[0];
                return a
            },
            de = r.myMathObj = {
                ans: ["=", ["var", "x"], 1],
                atab: "sol",
                showSolTab: function() {
                    $(".mytab").removeClass("active"), $("#soltab").addClass("active"), $(".mydiv").hide(), $("#soldiv").show(), de.atab = "sol"
                },
                isSolShow: !1,
                showSolShow: function() {
                    de.isSolShow ? ($("#solouti").hide(), de.isSolShow = !1, $("#solshowlink").html("Montrer les étapes.")) : ($("#solouti").show(), de.isSolShow = !0, $("#solshowlink").html("Enlever les étapes."))
                },
                showSolVarTab: function() {
                    $(".mytab").removeClass("active"), $("#solvartab").addClass("active"), $(".mydiv").hide(), $("#solvardiv").show(), de.atab = "solvar"
                },
                showYouTab: function() {
                    $(".mytab").removeClass("active"), $("#youtab").addClass("active"), $(".mydiv").hide(), $("#youdiv").show(), de.atab = "you"
                },
                showSimpTab: function() {
                    $(".mytab").removeClass("active"), $("#simptab").addClass("active"), $(".mydiv").hide(), $("#simpdiv").show(), de.atab = "simp"
                },
                showFactorTab: function() {
                    $(".mytab").removeClass("active"), $("#factortab").addClass("active"), $(".mydiv").hide(), $("#factordiv").show(), de.atab = "factor"
                },
                showStepTab: function() {
                    $(".mytab").removeClass("active"), $("#steptab").addClass("active"), $(".mydiv").hide(), $("#stepdiv").show(), de.atab = "step"
                },
                showEvalTab: function() {
                    $(".mytab").removeClass("active"), $("#evaltab").addClass("active"), $(".mydiv").hide(), $("#evaldiv").show(), de.atab = "eval"
                },
                showGraphTab: function() {
                    $(".mytab").removeClass("active"), $("#graphtab").addClass("active"), $(".mydiv").hide(), $("#graphdiv").show(), de.atab = "graph"
                },
                showPracticeTab: function() {
                    $(".mytab").removeClass("active"), $("#practicetab").addClass("active"), $(".mydiv").hide(), $("#practicediv").show(), de.atab = "practice"
                },
                showMPolyEq: function(e) {
                    if (de.ans = e, !E.testMode()) {
                        ce("solvarout1", ""), $("#solvarval").html("");
                        for (var t = b.getGVarEq(de.ans).sort(), r = 0; r < t.length; r++) {
                            var n = t[r];
                            $("#solvarval").append('<option value="' + n + '">' + n + "</option>")
                        }
                        de.solveVarInner()
                    }
                },
                showTval: function(e, t) {
                    de.ans = e, "undefined" != typeof t.eans && (de.ans = t.eans, e = t.eans);
                    var r = t.printList,
                        n = "simp";
                    t.doSolve ? n = "sol" : t.doGraph ? n = "graph" : t.doMainEval ? n = "eval" : t.doSolveVar && (n = "solvar");
                    var o = [n];
                    t.doSolveVar && de.showMPolyEq(e), F.appendPrintList(n + "out", r), t.doSolveVar && "solvar" !== n && o.push("solvar");
                    try {
                        if (b.isVarLinEq2(e) && "isVarLinEq" == oe(e)) {
                            var i = J(e),
                                u = Y(e),
                                s = u[0],
                                l = V.getPrintListR(s, 1),
                                p = l[0],
                                h = l[1],
                                v = Z(e),
                                d = v[0],
                                g = V.getPrintList(d, h),
                                m = [];
                            m.push(["msgstr", "Essayons de résoudre votre équation:"]), m.push(ae(ie(e))), m = m.concat(p), 2 === h && i.length > 2 && (ce("solouti", ""), F.appendPrintList("solouti", i.slice(2)), ce("solout", ""), F.appendPrintList("solout", m), ce("solout3", ""), F.appendPrintList("solout3", g), fe("solouto", !0))
                        }
                    } catch (e) {}
                    try {
                        if (b.isGraphStdSet(e) && "graph" !== n) {
                            var y = H.manyGraphs(e).printList;
                            F.appendPrintList("graphout", y), o.push("graph")
                        }
                    } catch (e) {}
                    if (t.doStep && !b.containsVar(e)) {
                        var x = f(e);
                        x && o.push("step")
                    }
                    if (t.doFactor) {
                        var q = a(e);
                        q && (c(e), o.push("factor"))
                    }
                    try {
                        var E = z.getLessonMsg2(e);
                        E.length > 0 && (F.appendPrintList("lessonout", E), o.push("lesson"))
                    } catch (t) {
                        fe("lessondiv", !1), le(e, "LessonError", t.message)
                    }
                    try {
                        var M = !0;
                        if ("isVarLinEq" == oe(e) && M) {
                            var w = 'Practice solving equations!<br><a href="/practice-tutor/2/"  style=""><button type="submit" class="btn btn-success" style="color: #ffffff; height: 34px; font-size:20px;line-height: 24px; margin-top:  10px;">Algebra Practice &raquo;</button></a><br><br><br><br><br>';
                            ce("practiceout", w), o.push("practice")
                        }
                    } catch (t) {
                        fe("practicediv", !1), le(e, "PracticeError", t.message)
                    }
                    if (t.doEval) {
                        var T = de.optEval(e);
                        T && o.push("eval")
                    }
                    if (t.doIneq) {
                        var D = t.myeq;
                        if (null !== D && "undefined" != typeof D) {
                            var S = X(D);
                            k.tryDrawSegs2(S)
                        }
                    }
                    if (t.doGatom) {
                        var C = t.gatoms;
                        "undefined" != typeof C && k.tryDrawGatoms.apply(this, t.gatoms)
                    }
                    de.showTabs(o)
                },
                optEval: function(e) {
                    var t = b.getGVarEq(e).sort().slice(0, 3);
                    if (t.length > 0) {
                        pe("evalout", P.makeSmallDivStr("Evaluate: Enter a number for each variable.")), he("evalout", ie(e));
                        for (var r = 0; r < 3; r++) {
                            var n = r + 1;
                            if (t.length > r) {
                                var o = t[r];
                                $("#evalsource" + n).val(""), $("#evalvar" + n).html(o + "="), $("#evalvarouter" + n).show()
                            } else $("#evalsource" + n).val(""), $("#evalvar" + n).html(""), $("#evalvarouter" + n).hide()
                        }
                        return ce("evalout1", ""), ce("evaluatestep", ""), ye = function() {
                            de.evalInner()
                        }, !0
                    }
                    return !1
                },
                solveVarInner: function() {
                    var e = de.ans,
                        t = $("#solvarval").val(),
                        r = ve(e, t);
                    ce("solvarout3", "");
                    var n = [];
                    n.push(["msgstr", "Let's solve for " + t + "."]), n.push(ae(ie(e))), n = n.concat(r), F.appendPrintList("solvarout3", n)
                },
                evalInner: function() {
                    var e = b.getGVarEq(de.ans).sort().slice(0, 3);
                    ce("evalout1", "");
                    var t = "",
                        r = "",
                        n = "";
                    try {
                        if (e.length > 0 && (t = $("#evalsource1").val().trim()), e.length > 1 && (r = $("#evalsource2").val().trim()), e.length > 2 && (n = $("#evalsource3").val().trim()), "" === t && "" === r && "" === n) return P.appendOutDiv("evalout1", '<font color="red">Please enter a number for your variable(s).</font>'), !1;
                        var a = de.ans,
                            i = [];
                        if ("" !== t) {
                            var s = A.parser2.parse(t);
                            a = b.evalAtVal(a, ["color", "purple", s], e[0]), i.push("" + e[0] + "=" + ie(s))
                        }
                        if ("" !== r) {
                            var l = A.parser2.parse(r);
                            a = b.evalAtVal(a, ["color", "purple", l], e[1]), i.push("" + e[1] + "=" + ie(l))
                        }
                        if ("" !== n) {
                            var f = A.parser2.parse(n);
                            a = b.evalAtVal(a, ["color", "purple", f], e[2]), i.push("" + e[2] + "=" + ie(f))
                        }
                        var c = i.join(", ");
                        ce("evaluatestep", "&nbsp;"), u("evaluatestep", c, "Evaluate for "), he("evaluatestep", ie(a));
                        var p = ue(a);
                        if (!w.isNotNan(p)) throw o(a, "evaluatestep"), {
                            message: "got error"
                        };
                        var h = R.getRetByF(R.tFunc(j.evalGenVarFrac, !0), a, 0, []);
                        F.appendPrintList("evaluatestep", h.printList), le(de.ans, "evalinner", t + " , " + r + " , " + n)
                    } catch (e) {
                        return P.appendOutDiv("evalout1", '<font color="red">Sorry I don\'t understand your input.</font>'), le(de.ans, "evalerror", t + " , " + r + " , " + n), !1
                    }
                },
                showTabs: function(e) {
                    $(".mytab").hide(), $("#mytabs").show(), ce("out", "");
                    for (var t = 0; t < e.length; t++) $("#" + e[t] + "tab").show();
                    "graph" !== de.atab ? de.atab = e[0] : re("graph", e) === -1 && (de.atab = e[0]);
                    try {
                        var r = de.ans;
                        W(r) === K(r) && re("factor", e) > -1 && Q(r).length > 1 && (de.atab = "factor")
                    } catch (e) {}
                    return re("graph", e) > -1 && b.isGraphSet(r) && "sol" !== de.atab && (de.atab = "graph"), "sol" === de.atab ? de.showSolTab() : "solvar" === de.atab ? de.showSolVarTab() : "you" === de.atab ? de.showYouTab() : "simp" === de.atab ? de.showSimpTab() : "factor" === de.atab ? de.showFactorTab() : "step" === de.atab ? de.showStepTab() : "eval" === de.atab ? de.showEvalTab() : "graph" === de.atab ? de.showGraphTab() : 0 !== e.length && le(de.ans, "TabError", "mytaberror"), de.atab
                },
                tutorsuggest: function() {
                    return ee(p)
                }
            },
            ge = 1,
            me = function() {},
            ye = me,
            xe = function(e) {
                return e.preventDefault(), ye(), !1
            }
    }, {}],
    23: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e, t, r, n, o, a, i) {
            r = r || 1, n = n || 0, o = o || 0;
            var u = y.currentGraph(),
                s = u.raphael.set();
            s.push(u.line([n, o], [n + t - e, o]));
            for (var l = 0; l <= t - e; l += r) s.push(u.line([n + l, o - .2], [n + l, o + .2])), u.label([n + l, o - .2], ((e + l) * a).toFixed(i), "below", {
                labelDistance: 3
            });
            return s
        }

        function a(e, t, r, n, a, i, u) {
            var s = "#0000f0",
                f = 1 / 8,
                c = 0,
                p = .6,
                h = .3,
                g = l("grid3", e),
                m = v(r, n, a, u, e),
                y = m[0],
                x = m[1];
            o(y, x, u, 1, 0, a, i), g.style({
                stroke: "black"
            }, function() {
                g.path([
                    [1 + (0 - y), c + 0],
                    [1 + (0 - y), c + p + .2]
                ])
            }), d(g, {
                stroke: s,
                arrows: "->"
            }, y, 0, t, c + h, a), g.circle([1 + t / a - y, c], f, {
                stroke: "none",
                fill: s
            }), document.getElementById("grid3").style.display = ""
        }

        function i(e, t, r, n, a, i, u, s) {
            var f = "#0000f0",
                c = "#f00000",
                p = "#50C878",
                h = 1 / 8,
                g = 0,
                m = .9,
                y = .6,
                x = .3,
                b = l("grid3", e),
                q = v(n, a, i, s, e),
                E = q[0],
                M = q[1];
            o(E, M, s, 1, 0, i, u), b.style({
                stroke: "black"
            }, function() {
                b.path([
                    [1 + (0 - E), g + 0],
                    [1 + (0 - E), g + m + .2]
                ])
            }), d(b, {
                stroke: f,
                arrows: "->"
            }, E, 0, t, g + m, i), d(b, {
                stroke: p,
                arrows: "->"
            }, E, t, r, g + y, i), d(b, {
                stroke: c
            }, E, 0, r, g + x, i), b.circle([1 + r / i - E, g], h, {
                stroke: "none",
                fill: c
            }), document.getElementById("grid3").style.display = ""
        }

        function u(e) {
            var t = Math.min(0, e),
                r = Math.max(0, e),
                n = r - t,
                o = 14,
                i = h(n, o),
                u = i[0],
                s = i[1],
                l = i[2];
            u > .001 && n > 5e-4 && a(o, e, t, r, u, s, l)
        }

        function s(e, t) {
            if (t) {
                var r = M(e),
                    n = Math.min(0, t, r),
                    o = Math.max(0, t, r),
                    a = o - n,
                    u = 14,
                    s = h(a, u),
                    l = s[0],
                    f = s[1],
                    c = s[2];
                l > .001 && a > 5e-4 && i(u, t, r, n, o, l, f, c)
            }
        }

        function l(e, t) {
            document.getElementById(e).innerHTML = "";
            var r = document.getElementById(e),
                n = y.createGraph(r);
            return n.init({
                range: [
                    [0, t + 2],
                    [-3, 2]
                ]
            }), y.setCurrentGraph(n), n
        }

        function f(e, t, r, n, a, i) {
            var u = 0,
                s = .6,
                f = l("grid3", e),
                c = v(t, r, n, i, e),
                p = c[0],
                h = c[1];
            o(p, h, i, 1, 0, n, a), f.style({
                stroke: "black"
            }, function() {
                f.path([
                    [1 + (0 - p), u + 0],
                    [1 + (0 - p), u + s + .2]
                ])
            });
            var d = {
                graph: f,
                scale: n,
                start: p,
                end: h
            };
            return d
        }

        function c(e) {
            for (var t, r = [0], n = 0; n < e.length; n++) {
                t = e[n];
                var o = t.leftval,
                    a = t.rightval;
                "-inf" === o ? r.push(-5) : r.push(o), "+inf" === a ? r.push(5) : r.push(a)
            }
            var i = Math.min.apply(Math, r),
                u = Math.max.apply(Math, r),
                s = u - i,
                l = 14,
                c = h(s, l);
            b.mobmode() && (l = 6, c = h(s, 10));
            var v = c[0],
                d = c[1],
                g = c[2];
            if (v > .001 && s > 5e-4) {
                for (var m = f(l, i, u, v, d, g), n = 0; n < e.length; n++) t = e[n], p(m, t);
                document.getElementById("grid3").style.display = ""
            }
        }

        function p(e, t) {
            var r = "#0000f0",
                n = .2,
                o = 0,
                a = e.graph,
                i = e.scale,
                u = e.start,
                s = e.end,
                l = u * i,
                f = s * i,
                c = t.leftbound,
                p = t.leftval,
                h = t.rightval,
                v = t.rightbound,
                g = "->";
            "-inf" === p ? d(a, {
                stroke: r,
                arrows: g,
                strokeWidth: 4.5
            }, u, l + .2, l, o, i) : "(" === c ? a.circle([1 + p / i - u, o], n, {
                stroke: r,
                fill: null
            }) : a.circle([1 + p / i - u, o], n, {
                stroke: r,
                fill: r
            });
            var m, y;
            m = "-inf" === p ? l + n * i : p + n * i, y = "+inf" === h ? f - n * i : h - n * i, d(a, {
                stroke: r,
                strokeWidth: 4.5
            }, u, m, y, o, i), "+inf" === h ? d(a, {
                stroke: r,
                arrows: g,
                strokeWidth: 4.5
            }, u, f - .2, f, o, i) : ")" === v ? a.circle([1 + h / i - u, o], n, {
                stroke: r,
                fill: null
            }) : a.circle([1 + h / i - u, o], n, {
                stroke: r,
                fill: r
            })
        }

        function h(e, t) {
            for (var r, n = t - 4, o = 0, a = [1, 2, 5], i = !1, u = 1, s = -3; s < 4; s++)
                for (var l = 0; l < 3; l++) {
                    var f = a[l] * Math.pow(10, s);
                    e < n * f && !i && (o = f, u = s >= -1 && s < 2 ? 1 : 2, r = u * a[l] === 10 ? Math.max(0, -s - 1) : Math.max(0, -s), i = !0)
                }
            return [o, r, u]
        }

        function v(e, t, r, n, o) {
            var a = Math.floor(e / (r * n)),
                i = Math.ceil(t / (r * n)),
                u = i - a,
                s = Math.floor((o / n - u) / 2),
                l = Math.ceil((o / n - u) / 2),
                f = a - s,
                c = i + l,
                p = f * n,
                h = c * n;
            return [p, h]
        }

        function d(e, t, r, n, o, a, i) {
            var u = e.style(t, function() {
                return e.path([
                    [1 + n / i - r, a],
                    [1 + o / i - r, a]
                ])
            });
            return u
        }

        function g(e, t, r, n, o, a) {
            var i = e.style(t, function() {
                return e.path([
                    [1 + n / a - r, o],
                    [1 + n / a - r, .3]
                ])
            });
            return i
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.showNumberOnLine = u, r.showNumberLine = s, r.initNumberLine = l, r.showSegsOnLine = c, r.scaledVector = d, r.scaledVectorD = g;
        var m = e(19),
            y = n(m),
            x = e(35),
            b = n(x),
            q = e(5),
            E = n(q),
            M = E.evalExpr
    }, {}],
    24: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            return ie.myExprIsShort(e) ? nt(e) : ie.myexprParenthesize(e, nt)
        }

        function a(e, t) {
            if (0 === t) return "1";
            if (1 === t) return ke(e);
            for (var r = [], n = "", a = 0; a < t; a++) r.push(o(e));
            return n = r.join(" * ")
        }

        function i(e) {
            var t = [];
            return t
        }

        function u(e) {
            var t = [],
                r = "";
            try {
                r = nt(e)
            } catch (t) {
                r = ke(e), ot("PWarn", "P:" + r, "" + t.message)
            }
            return t.push(Ke(r)), t
        }

        function s(e) {
            var t = [],
                r = at(e);
            return t.push(Je(r)), t
        }

        function l(e, t, r, n, o, i, u) {
            var s = [],
                l = a(e, t);
            if ("undefined" != typeof o) var f = ke(["color", o, l]);
            else var f = l;
            var c = a(r, n);
            if ("undefined" != typeof i) var p = ke(["color", i, c]);
            else var p = c;
            var h = "{" + f + "}/{" + p + "}";
            if (1 !== t || 1 !== n || u) {
                var v = Ce(h);
                s.push(Je(v))
            }
            return s
        }

        function f(e, t, r, n, o, a) {
            var i = [],
                u = K(e, t),
                s = K(r, n),
                l = ["dfrac", u, s];
            if (Ie(u) || Ie(s)) {
                var f = Re(u),
                    c = Re(s);
                s = ["dfrac", f, c];
                var p = ke(s);
                Ue([f, c]) && i.push(Je(p))
            } else {
                i.push(Je(ke(l)));
                var f = We(u),
                    c = We(s);
                Ve(e) && Ve(t) && Ve(r) && Ve(n) && (1 !== t || 1 !== n) && (l = ["dfrac", f, c], Ue([f, c]) && i.push(Je(ke(l))))
            }
            return i
        }

        function c(e) {
            var t = [],
                r = ye.evalGenVarSilent(e),
                n = nt(r);
            return t.push(Je(n)), t
        }

        function p(e) {
            var t = [],
                r = it(e);
            "number" == typeof r && (r = Ne(r));
            var n = nt(r),
                o = r;
            if ("number" != typeof r) {
                o = ye.evalGenVarSilent(r);
                var a = nt(o);
                n !== a && a.indexOf("NaN") === -1 ? t.push(et(n, "(Decimal: " + a + ")")) : t.push(Je(n))
            } else t.push(Je(n));
            return t
        }

        function h(e) {
            var t = [],
                r = ut(e);
            "number" == typeof r && (r = Ne(r));
            var n = nt(r),
                o = r;
            if ("number" != typeof r) {
                o = ye.evalGenVarSilent(r);
                var a = nt(o);
                n !== a ? t.push(et(n, "(Decimal: " + a + ")")) : t.push(Je(n))
            } else t.push(Je(n));
            return t
        }

        function v(e) {
            var t = [],
                r = st(e);
            "number" == typeof r && (r = Ne(r));
            var n = nt(r),
                o = r;
            if ("number" != typeof r) {
                o = ye.evalGenVarSilent(r);
                var a = nt(o);
                n !== a ? t.push(et(n, "(Decimal: " + a + ")")) : t.push(Je(n))
            } else t.push(Je(n));
            return t
        }

        function d(e) {
            var t = [],
                r = lt(e);
            "number" == typeof r && (r = Ne(r));
            var n = nt(r),
                o = r;
            if ("number" != typeof r) {
                o = ye.evalGenVarSilent(r);
                var a = nt(o);
                n !== a ? t.push(Je(n)) : t.push(Je(n))
            } else t.push(Je(n));
            return t
        }

        function g(e) {
            var t = [],
                r = Oe(e),
                n = Ae(e);
            if (Fe(e)) n < -1 && (t = t.concat(f(1, 1, r, -n, "black", "black")));
            else if (ge.isGenFracExp(e)) {
                var o = Y(e[1]),
                    a = o[0],
                    i = o[1],
                    u = We(e[2]);
                u > 1 && (Ve(u) && (t = t.concat(l(a, u, i, u, "black", "black", !1))), t = t.concat(f(a, u, i, u, "black", "black")))
            }
            return t = t.concat(p(e))
        }

        function m(e) {
            var t = [],
                r = Oe(e),
                n = Ae(e),
                o = ["^", r, n];
            if ("number" !== je(r) && "var" !== je(r) && "dfrac" !== je(r) && t.push(Je(Ce(o))), n < -1 || n > 1) {
                var a = W(r, n, !1);
                t.push(Je(Ce(a))), Fe(e) && n > 1 && t.push(Je(Ce(o)))
            }
            return t = t.concat(g(e))
        }

        function y(e) {
            var t = [],
                r = "blue",
                n = Oe(e[1]),
                o = Ae(e[1]),
                i = ["color", r, ["^", n, o]],
                u = We(e[2]),
                s = ["^", i, u];
            t.push(Je(Ce(s)));
            var l = ke(i),
                f = a(l, u);
            t.push(Je(Ce(f)));
            var c = W(n, o, !1),
                p = ke(["color", r, c]),
                h = a(p, u);
            t.push(Je(Ce(h)));
            var v = o * u,
                d = ["^", n, v];
            return t = t.concat(m(d))
        }

        function x(e) {
            var t = [],
                r = "blue",
                n = "green",
                o = Oe(e[1]),
                a = Ae(e[1]),
                i = ["^", o, ["color", r, a]],
                u = We(e[2]),
                s = ["^", i, ["color", n, u]];
            t.push(Je(Ce(s)));
            var l = ["^", o, ["*", ["color", r, a],
                ["color", n, u]
            ]];
            t.push(Je(Ce(l)));
            var f = ["^", o, a * u];
            return t.push(Je(Ce(f))), t = t.concat(g(f))
        }

        function b(e) {
            var t = [],
                r = "blue",
                n = "green",
                o = Oe(e[1]),
                a = Ae(e[1]),
                i = ["^", o, a],
                u = Oe(e[2]),
                s = Ae(e[2]),
                l = ["^", u, s],
                f = ["*show", ["color", r, i],
                    ["color", n, l]
                ];
            t.push(rt(f));
            var c = W(o, a, !1),
                p = W(u, s, !1),
                h = ["*show", ["color", r, c],
                    ["color", n, p]
                ];
            t.push(rt(h));
            var v = ["^", u, a + s];
            return t = t.concat(m(v))
        }

        function q(e) {
            var t = [],
                r = "blue",
                n = "green",
                o = (e[0], Y(e[1])),
                a = We(e[2]),
                i = Z(o, r),
                u = ["color", n, a],
                s = ["^", i, u];
            if (t.push(rt(s)), 1 === a ? t.push(rt(i)) : a < 0 && (a = -a, o = [o[1], o[0]], i = Z(o, r), 1 !== a ? (u = ["color", n, a], s = ["^", i, u]) : s = i, t.push(rt(s))), 0 !== a) {
                var l = ["^", X(o), a];
                if (Ue(o) || 1 === Math.abs(o[1]))
                    if (Ue(o) && (o = ze(o)), 1 === Math.abs(o[1])) {
                        if (ge.isIntF(o)) var f = o[0] / o[1];
                        else var f = Re(["/", o[0], o[1]]);
                        i = ["color", r, f], u = ["color", n, a], s = ["^", i, u], 1 !== a && t.push(rt(s));
                        var l = ["^", f, a]
                    } else {
                        i = Z(o, r), u = ["color", n, a], s = ["^", i, u], t.push(rt(s));
                        var l = ["^", X(o), a]
                    } t = t.concat(m(l))
            } else t = t.concat(p(1));
            return t
        }

        function E(e) {
            var t = [],
                r = "blue",
                n = "green",
                o = Oe(e[1]),
                a = Ae(e[1]),
                i = ["^", o, ["color", r, a]],
                u = Oe(e[2]),
                s = Ae(e[2]),
                l = ["^", u, ["color", n, s]],
                f = ["*", i, l];
            t.push(rt(f));
            var c = ["^", u, ["+", ["color", r, a],
                ["color", n, s]
            ]];
            t.push(rt(c));
            var p = ["^", u, a + s];
            return t.push(rt(p)), Le(u) && (t = t.concat(g(p))), t
        }

        function M(e) {
            var t = [],
                r = "blue",
                n = "green",
                o = Oe(e[1]),
                a = Ae(e[1]),
                i = ["^", o, ["color", r, a]],
                u = Oe(e[2]),
                s = Ae(e[2]),
                l = ["^", u, ["color", n, s]],
                f = ["/", i, l];
            t.push(rt(f));
            var c = ["^", u, ["-", ["color", r, a],
                ["color", n, s]
            ]];
            t.push(rt(c));
            var p = ["^", u, a - s];
            return t.push(rt(p)), Le(u) ? t = t.concat(g(p)) : console.log("error99"), t
        }

        function w(e) {
            var t = [],
                r = "blue",
                n = "green",
                o = Oe(e[1]),
                a = Ae(e[1]),
                i = ["^", o, a],
                u = Oe(e[2]),
                s = Ae(e[2]),
                f = ["^", u, s],
                c = ["dfrac", ["color", r, i],
                    ["color", n, f]
                ];
            t.push(rt(c)), t = t.concat(l(o, a, u, s, r, n, !0));
            var p = ["^", u, a - s];
            return t = a - s > 0 ? t.concat(m(p)) : t.concat(g(p))
        }

        function T(e) {
            var t = [],
                r = "blue",
                n = "green",
                o = We(e[1]),
                a = o,
                i = Oe(e[2]),
                u = Ae(e[2]),
                s = ["^", i, u],
                c = ["*show", ["color", r, a],
                    ["color", n, s]
                ];
            t.push(rt(c));
            var h = o,
                v = nt(["color", r, h]),
                d = W(i, u, !0),
                g = nt(["color", n, d]),
                m = v + " * " + g;
            return t.push(Je(m)), Ve(o) && Ve(i) && Ve(u) && u < 0 ? (t = t.concat(l(o, 1, i, -u, "black", "black", !1)), t = t.concat(f(o, 1, i, -u, "black", "black"))) : Fe(e[2]) || ge.isUniformVar(e[2][1]) && u < 0 && (t = t.concat(l(o, 1, i, -u, "black", "black", !1)), t = t.concat(f(o, 1, i, -u, "black", "black"))), t = t.concat(p(e))
        }

        function D(e) {
            var t = [],
                r = "green",
                n = We(e[1]),
                o = e[2],
                a = ["*show", ["color", r, n],
                    ["color", r, o]
                ];
            if (t.push(rt(a)), Ve(n) && Math.abs(n) > 1 && Math.abs(n) < 10) {
                var i = ee(n, o, r);
                t.push(rt(i))
            }
            return t = t.concat(p(e))
        }

        function S(e) {
            var t, r = [],
                n = "green",
                o = Oe(e[1]),
                a = Ae(e[1]);
            if ("var" !== je(e[1])) {
                var i = ["^", o, a],
                    u = n;
                t = ["-", ["color", u, i]], r.push(rt(t))
            } else var i = o,
                u = n;
            return t = ["*", -1, i], r = "var" !== je(e[1]) ? r.concat(T(t)) : r.concat(D(t))
        }

        function k(e) {
            var t = [],
                r = "blue",
                n = "green",
                o = e[0],
                a = Ge(e[1]),
                i = He(e[1]),
                u = ["*", a, i],
                s = Ge(e[2]),
                l = He(e[2]),
                f = ["*", s, l],
                c = [o, ["color", r, u],
                    ["color", n, f]
                ];
            t.push(rt(c)), "-" === o && (o = "+", s = -s, f = ["*", s, l], c = [o, ["color", r, u],
                ["color", n, f]
            ], t.push(rt(c)));
            var h = ee(a, i, r),
                v = ee(s, l, n),
                d = ["+", h, v];
            t.push(rt(d));
            var g = ee(a + s, l);
            return Math.abs(a + s) > 1 && Math.abs(a) + Math.abs(s) !== Math.abs(a + s) && t.push(rt(g)), t = t.concat(p(e))
        }

        function C(e) {
            var t = [],
                r = "blue",
                n = "green",
                a = e[1],
                i = e[2],
                u = Re(a[2]),
                s = Re(i[2]),
                l = We(a[1]),
                f = We(i[1]),
                c = Ce(["color", r, o(Re(a))]);
            return c += " * ", c += Ce(["color", n, o(Re(i))]), t.push(Je(c)), c = Ce(["color", r, o(l)]), c += " * ", c += Ce(["color", r, o(u)]), c += " * ", c += Ce(["color", n, o(f)]), c += " * ", c += Ce(["color", n, o(s)]), t.push(Je(c)), c = "(", c += Ce(["color", r, o(l)]), c += " * ", c += Ce(["color", n, o(f)]), c += ")", c += " * ", c += "(", c += Ce(["color", r, o(u)]), c += " * ", c += Ce(["color", n, o(s)]), c += ")", t.push(Je(c)), c = Ce(We(["*", l, f])), c += " * ", c += Ce(Re(["*", u, s])), t.push(Je(c)), t = t.concat(p(e))
        }

        function V(e) {
            for (var t = [], r = "blue", n = "green", a = Pe(e), i = a[0], u = [], s = 0; s < i.length; s++) {
                var l;
                l = Le(i[s]) || Fe(i[s]) ? r : n;
                var f;
                f = Fe(i[s]) ? it(i[s]) : i[s], u.push(Ce(o(["color", l, f])))
            }
            var c = u.join(" * ");
            t.push(Je(c));
            for (var h = [], v = ["*"], d = ["*"], s = 0; s < i.length; s++) Le(i[s]) || Fe(i[s]) ? v.push(i[s]) : d.push(i[s]);
            if (v.length > 1) {
                var g = it(v);
                h.push(ke(["color", r, g]))
            }
            if (d.length > 1) {
                var m = it(d);
                h.push(ke(["color", n, m]))
            }
            return c = h.join(" * "), t.push(Je(c)), t = t.concat(p(e))
        }

        function N(e) {
            var t = [],
                r = "blue",
                n = "green",
                o = e[1],
                a = e[2],
                i = _e(o),
                u = i[0],
                s = _e(a),
                l = s[0],
                f = te(u, r),
                c = te(l, n),
                h = "(" + f + ")(" + c + ")";
            t.push(Je(h));
            for (var v = [], d = [], g = ["+"], m = 0; m < u.length; m++)
                for (var y = 0; y < l.length; y++) v.push(re(u[m], l[y], r, n)), d = 0 === d.length ? it(["*", u[m], l[y]]) : ["+", d, it(["*", u[m], l[y]])], g.push(it(["*", u[m], l[y]]));
            h = v.join(" + "), t.push(Je(h));
            var x = ft(e);
            return ge.isEqual(g, x) || t.push(rt(d)), t = t.concat(p(e))
        }

        function P(e) {
            var t = e[1],
                r = (e[2], t.slice(0));
            return N(["*", t, r])
        }

        function L(e) {
            var t = [],
                r = e[1],
                n = e[2],
                o = r.slice(0);
            if (n < -1 || n > 1) {
                var a = W(r, n, !1);
                t.push(Je(a))
            }
            var i = it(["^", o, 2]);
            return t = t.concat(N(["*", r, i]))
        }

        function F(e) {
            for (var t = [], r = "blue", n = "green", o = "red", a = "purple", i = "color5", u = "brown", s = "black", l = [], f = 0; f < e.length; f++) {
                var c;
                c = 0 === $e(e[f]) ? r : 1 === $e(e[f]) ? n : 2 === $e(e[f]) ? o : 3 === $e(e[f]) ? a : 4 === $e(e[f]) ? i : 5 === $e(e[f]) ? u : s;
                var p;
                p = Le(e[f]) ? We(e[f]) : e[f], l.push(nt(["color", c, p]))
            }
            var h = l.join(" + ");
            return t.push(Je(h)), t
        }

        function O(e) {
            var t = [],
                r = _e(e),
                n = r[0],
                o = it(e),
                a = 0,
                i = !1;
            return Le(o) ? (i = We(o), a = [i]) : a = o.length > 1 && "+" === o[0] ? o.slice(1) : [o], n.length > a.length ? (t = t.concat(F(n)), 0 !== i && (t = t.concat(F(a))), t = t.concat(c(e))) : t = t.concat(p(e)), t
        }

        function A(e) {
            try {
                var t = Te(e);
                return t
            } catch (t) {
                return O(e)
            }
        }

        function I(e) {
            if (ge.isVarFrac(e)) {
                var t = De(e);
                return t
            }
            var t = De(e);
            return t
        }

        function R(e, t, r, n) {
            var o = [],
                a = e[0],
                i = t[0],
                u = e[1],
                s = ["dfrac", ["+", ["color", r, a],
                    ["color", n, i]
                ], u];
            o.push(rt(s)), ne(e) && ne(t) && e[0] + t[0] <= e[1] && o.push(["drawMultiPie", [e, t]]);
            var l = [a + i, u],
                f = ["dfrac", l[0], l[1]];
            return Be(l) && o.push(rt(f)), o
        }

        function _(e, t, r, n) {
            var o = [],
                a = e[0],
                i = e[1],
                u = t[0],
                s = t[1],
                l = ["dfrac", ["*", ["color", r, a],
                        ["color", n, u]
                    ],
                    ["*", ["color", r, i],
                        ["color", n, s]
                    ]
                ];
            o.push(rt(l));
            var f = [a * u, i * s],
                c = ["dfrac", f[0], f[1]];
            return Be(f) && o.push(rt(c)), o
        }

        function j(e, t, r, n, o) {
            var a = [],
                i = Z(t, n),
                u = Z(r, o),
                s = [e, i, u];
            return a.push(rt(s)), a
        }

        function G(e, t, r, n, o) {
            var a = [];
            return a = a.concat(j(e, t, r, n, o)), "+" === e && ne(t) && ne(r) && a.push(["drawFractions", [t, r]]), a
        }

        function H(e) {
            var t = [],
                r = Y(e);
            return ne(r) && t.push(["drawFraction", [r]]), t = t.concat(p(e))
        }

        function $(e) {
            var t = [],
                r = "blue",
                n = "green",
                o = e[0],
                a = Y(e[1]),
                i = Y(e[2]);
            t = t.concat(G(o, a, i, r, n));
            var u, s;
            if ("+" === o ? (u = a, s = i) : (u = a, s = [-i[0], i[1]], t = t.concat(j("+", u, s, r, n))), u[1] === s[1]) t = t.concat(R(u, s, r, n));
            else {
                var l = Qe(u),
                    f = Qe(s);
                if ((Be(u) || Be(s)) && (t = t.concat(j("+", l, f, r, n))), l[1] === f[1]) t = t.concat(R(l, f, r, n));
                else {
                    var c = se.getLCM([l[1], f[1]]),
                        h = c / l[1],
                        v = [l[0] * h, l[1] * h],
                        d = c / f[1],
                        g = [f[0] * d, f[1] * d];
                    t = t.concat(G("+", v, g, r, n)), t = t.concat(R(v, g, r, n))
                }
            }
            return t = t.concat(p(e))
        }

        function U(e) {
            var t = [],
                r = "blue",
                n = "green",
                o = e[0],
                a = Y(e[1]),
                i = Y(e[2]);
            t = t.concat(j(o, a, i, r, n));
            var u, s;
            "*" === o ? (u = a, s = i) : (u = a, s = [i[1], i[0]], t = t.concat(j("*", u, s, r, n)));
            var l = Qe(u),
                f = Qe(s);
            return (Be(u) || Be(s)) && (t = t.concat(j("*", l, f, r, n))), t = t.concat(_(l, f, r, n)), t = t.concat(p(e))
        }

        function z(e) {
            var t = [],
                r = ye.solveStandardEq(e);
            return t.push(["graph", [r]]), t
        }

        function B(e) {
            return Q(e)
        }

        function Q(e) {
            var t = [],
                r = e[1],
                n = e[2],
                o = ct(r),
                a = ct(n),
                i = Ee.orderSolveEqs(o, a),
                u = i[0],
                s = i[1],
                l = ke(u),
                f = ke(s),
                c = l + " ; " + f,
                p = oe(e, "Solve");
            t = t.concat(p), t.push(tt("I will solve your system by substitution.")), be.canDoElim(e) && t.push(tt("(You can also <a href='/elimination-calculator/?q=" + encodeURIComponent(c) + "'>solve this system by elimination</a>.)")), t.push(Ke(c));
            var h = Ee.orderSolveVars(u, s),
                v = h[0],
                d = h[1],
                g = Se(u, s, v, d),
                m = g[0],
                y = we.getPrintListR2(m, 1),
                x = y[0];
            return t = t.concat(x)
        }

        function W(e, t, r) {
            "undefined" == typeof r && (r = !0);
            var n = t >= 0 ? t : -t,
                o = a(e, n);
            return t > 0 ? r ? "(" + o + ")" : o : t < 0 ? "{1}/{" + o + "}" : "1"
        }

        function K(e, t) {
            return 1 === t ? e : ["^", e, t]
        }

        function J(e) {
            var t = e[0],
                r = e[1],
                n = t * r < 0,
                o = n ? -1 : 1,
                a = o * Math.abs(t),
                i = Math.abs(r);
            return [a, i]
        }

        function Y(e) {
            var t = ge.getNumerator(e),
                r = ge.getDenominator(e);
            if (ge.isFrac(e)) var n = J([t, r]);
            else var n = [t, r];
            return n
        }

        function Z(e, t) {
            var r = ["color", t, ["dfrac", e[0], e[1]]];
            return r
        }

        function X(e) {
            var t = ["dfrac", e[0], e[1]];
            return t
        }

        function ee(e, t, r) {
            var n = ["+"];
            if (e > 0)
                for (var o = 0; o < e; o++) {
                    if ("undefined" != typeof r) var a = ["color", r, t];
                    else var a = ["color", r, t];
                    n.push(a)
                } else
                    for (var o = 0; o < -e; o++) {
                        if ("undefined" != typeof r) var a = ["color", r, ["-", t]];
                        else var a = ["color", r, ["-", t]];
                        n.push(a)
                    }
            return n
        }

        function te(e, t) {
            for (var r = [], n = 0; n < e.length; n++) {
                var o;
                o = Le(e[n]) ? We(e[n]) : e[n], r.push(nt(["color", t, o]))
            }
            var a = r.join(" + ");
            return a
        }

        function re(e, t, r, n) {
            var o;
            o = Le(e) ? We(e) : e;
            var a;
            a = Le(t) ? We(t) : t;
            var i = "(" + nt(["color", r, o]) + ")",
                u = "(" + nt(["color", n, a]) + ")";
            return i + u
        }

        function ne(e) {
            return e[0] > 0 && e[0] < e[1] && e[1] < 16
        }

        function oe(e, t) {
            var r = [];
            return r.push(Ze("Problem:")), r.push(Xe(nt(e), t)), r.push(["append", we.makeDivStr("<hr>")]), r.push(Ye("Steps:")), r
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.showNone = i, r.printStmt = u, r.evalAns = s, r.evalGenVarFrac = p, r.evalGenVarFracMixed = h, r.evalGenVarFracSqrt = v, r.evalGenVarFracImag = d, r.showSimpleExp = m, r.showSimpleExpExp = y, r.showExpExp = x, r.showSimpleExpMult = b, r.showSimpleFracExp = q, r.showExpMult = E, r.showExpDiv = M, r.showSimpleExpDiv = w, r.showCoefSimpleExp = T, r.showCoefVar = D, r.showNegSimpleExp = S, r.showSimpleGenCoefAdd = k, r.showCoefSimpleExpMult = C, r.showCoefExpProd = V, r.showAddTermsMult = N, r.showAddTermsSq = P, r.showAddTermsCube = L, r.showAddTermsMVarOuter = A, r.showMFVarOuter = I, r.showFrac = H, r.showSimpleFracAdd = $, r.showSimpleFracMult = U, r.showStandardEq = z, r.showSimpleSystem = B, r.showSimpleSystemSub = Q;
        var ae = e(40),
            ie = n(ae),
            ue = e(41),
            se = n(ue),
            le = e(45),
            fe = n(le),
            ce = e(5),
            pe = n(ce),
            he = e(1),
            ve = n(he),
            de = e(16),
            ge = n(de),
            me = e(33),
            ye = n(me),
            xe = e(15),
            be = n(xe),
            qe = e(32),
            Ee = n(qe),
            Me = e(39),
            we = n(Me),
            Te = ve.showAddTermsMVar,
            De = ve.showMFVarFactor,
            Se = ve.dSolveSimpleSystem,
            ke = ie.exprToText,
            Ce = ie.exprToText,
            Ve = se.isInt,
            Ne = fe.roundPrec,
            Pe = ge.getProdFactors,
            Le = ge.isNumber,
            Fe = ge.isBaseNum,
            Oe = ge.getBase,
            Ae = ge.getPower,
            Ie = ge.containsVar,
            Re = ge.evalExprPoly,
            _e = ge.getAddTerms,
            je = ge.myExprType,
            Ge = ge.getAddCoef,
            He = ge.getAddBase,
            $e = ge.getAddPower,
            Ue = ge.fReduces,
            ze = ge.fReduce,
            Be = ge.fracReduces,
            Qe = ge.fracReduce,
            We = pe.evalExpr,
            Ke = ye.mDiv,
            Je = (ye.mDiva, ye.mDivEq),
            Ye = ye.mHeadDiv,
            Ze = ye.mHeadDiv2,
            Xe = ye.mTopDiv,
            et = ye.mDivEqa,
            tt = ye.getMsg,
            rt = ye.mFracText,
            nt = ye.getExprText,
            ot = ye.trackIt,
            at = ye.evalAnsSilent,
            it = ye.fracExpr,
            ut = ye.fracExprMixed,
            st = ye.fracExprSqrt,
            lt = ye.fracExprImag,
            ft = ye.evalGenVarSilent,
            ct = ye.mPolyEqExpr
    }, {}],
    25: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        r.parser2 = mycalc
    }, {}],
    26: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            for (var t = !1, r = "", n = 0; n < e.length; n++) "|" === e[n] && "\\left|" !== e.substring(n - 5, n + 1) && "\\right|" !== e.substring(n - 6, n + 1) ? t ? (r += ")|", t = !1) : (r += "|(", t = !0) : r += e[n];
            return r
        }

        function a(e) {
            for (var t = "", r = 0; r < e.length; r++) t += "²" === e[r] ? "^2" : e[r];
            return t
        }

        function i(e) {
            for (var t = "", r = 0; r < e.length; r++) t += "³" === e[r] ? "^3" : e[r];
            return t
        }

        function u(e) {
            var t = e;
            return e.indexOf("|") >= 0 && (t = o(t)), e.indexOf("²") >= 0 && (t = a(t)), e.indexOf("³") >= 0 && (t = i(t)), t
        }

        function s(e) {
            for (var t = "", r = "", n = "", o = 0; o < e.length; o++) {
                var n = e[o];
                /[A-Za-z]/.test(r) && /[0-9]/.test(n) && "\\le" !== e.substring(o - 3, o) && "\\ge" !== e.substring(o - 3, o) && (t += "^"), t += n, r = n
            }
            return t
        }

        function l(e) {
            for (var t = "", r = 0; r < e.length; r++) t += e[r], "\\le" === e.substring(r - 2, r + 1) && "\\left" !== e.substring(r - 2, r + 3) ? t += " " : "\\ge" === e.substring(r - 2, r + 1) && (t += " ");
            return t
        }

        function f(e) {
            var t = e;
            try {
                x.parser2.parse(e), t = e
            } catch (a) {
                try {
                    var r = e.split("=");
                    if (3 === r.length) {
                        var n = r[1].split(" ");
                        if (2 === n.length) {
                            var o = n.join(";");
                            t = [r[0], o, r[2]].join("=")
                        }
                    }
                } catch (e) {}
            }
            return t
        }

        function c(e) {
            var t = e;
            try {
                x.parser2.parse(e)
            } catch (r) {
                try {
                    x.parser2.parse(e + ")"), t = e + ")"
                } catch (r) {
                    try {
                        x.parser2.parse(e + "))"), t = e + "))"
                    } catch (r) {
                        try {
                            x.parser2.parse("(" + e), t = "(" + e
                        } catch (e) {}
                    }
                }
            }
            return t
        }

        function p(e) {
            var t = e;
            try {
                x.parser2.parse(e), t = e
            } catch (a) {
                try {
                    var r = e.split("=");
                    if (2 === r.length) {
                        var n = c(r[0]),
                            o = c(r[1]);
                        t = [n, o].join("=")
                    }
                } catch (e) {}
            }
            return t
        }

        function h(e) {
            return e = e.replace("simplify", ""), e = e.replace("evaluate", ""), e = e.replace("solve", ""), e = e.replace("factor", ""), e = e.replace("graph", "")
        }

        function v(e) {
            var t = e;
            try {
                x.parser2.parse(e), t = e
            } catch (r) {
                try {
                    e = e.replace(/\$/g, ""), e = e.replace(/\u200b/g, ""), e = e.replace(/\u00d7/g, "x"), t = e
                } catch (e) {}
            }
            return t
        }

        function d(e) {
            return e = e.replace(/log/g, " log "), e = e.replace(/ln/g, " ln "), e = e.replace(/\\sqrt{/g, "sqrt{"), e = e.replace(/\\cdot/g, "\\cdot "), e = e.replace(/\\div/g, "\\div "), e = e.replace(/\\sin/g, "\\sin "), e = e.replace(/\\cos/g, "\\cos "), e = e.replace(/\\tan/g, "\\tan "), e = e.replace(/\\ /g, " "), e = e.replace(/sqrt/g, " sqrt "), e = e.replace(/times/g, " * ")
        }

        function g(e) {
            var t = e;
            try {
                x.parser2.parse(e), t = e
            } catch (r) {
                try {
                    e = e.replace(/,/g, ""), x.parser2.parse(e), t = e
                } catch (e) {}
            }
            return t
        }

        function m(e) {
            var t = e.toLowerCase();
            return t = t.replace(b, "$1&$2"), t = t.replace(q, "$1&$2"), t = t.replace(E, "$1&$2/$3"), t = t.replace(M, "$1&$2/$3"), t = u(t), t = v(t), t = d(t), t = l(t), t = s(t), t = f(t), t = c(t), t = p(t), t = h(t), t = g(t)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.insertSemi = f, r.preProcess = m;
        var y = e(25),
            x = n(y),
            b = /(\d+)\s(\d+[\/\\]\d+)/g,
            q = /(\d+)\\\s(\d+[\/\\]\d+)/g,
            E = /(\d+)\\\s\\frac\{(\d+)\}\{(\d+)\}/g,
            M = /(\d+)\\frac\{(\d+)\}\{(\d+)\}/g
    }, {}],
    27: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            var t = [],
                r = V(e);
            return t.push(["MDiv", r]), g.isAbsVar(e) ? t.push(["msgstr", '<font color="red" style="line-height:30px">Sorry, I don\'t currently support this absolute value.</font>']) : g.isEq(e) ? t.push(["msgstr", '<font color="red" style="line-height:30px">Sorry, I don\'t know how to solve this equation.</font>']) : g.isIneq(e) ? t.push(["msgstr", '<font color="red" style="line-height:30px">Sorry, I don\'t currently support this inequality.</font>']) : g.isMPolyEqSet(e) ? t.push(["msgstr", '<font color="red" style="line-height:30px">Sorry, I don\'t know how to solve this system of equations.</font>']) : t.push(["msgstr", '<font color="red" style="line-height:30px">Sorry, I don\'t know how to calculate your input.</font>']), N(t), {
                printList: t
            }
        }

        function a(e) {
            var t = [],
                r = V(e);
            return t.push(["MDiv", r]), t.push(["msgstr", '<font color="red" style="line-height:30px">Sorry, I had trouble calculating your input.</font>']), N(t), {
                printList: t
            }
        }

        function i(e) {
            try {
                if (g.isEq(e) || g.isIneq(e)) {
                    var t = e[0],
                        r = D(e[1]),
                        n = D(e[2]),
                        i = e[1],
                        u = e[2];
                    b.isNotNan(r) && (i = r), b.isNotNan(n) && (u = n);
                    var s = [t, i, u],
                        l = T(s);
                    if (k(e, "space") && "isVarLinEq" === l) return c(E.showVarLinEqMixed, e, "varLinEq", [L]);
                    if ("containsVar" !== l && "containsVarEq" !== l) {
                        var f = h(s),
                            p = V(s),
                            v = V(e);
                        return f.printList && p !== v && (f.printList.unshift(S(p)), f.printList.unshift(C("Simplifies to:")), f.printList.unshift(S(v))), f
                    }
                    var f = c(E.showVarGenEq, e, "varGenEq", [L]);
                    return "=" !== e[0] && (f.doGatom = !0), f
                }
                return o(e)
            } catch (t) {
                return a(e)
            }
        }

        function u(e) {
            try {
                if (g.isSetExpr(e)) return o(e);
                var t = D(e),
                    r = T(t);
                if (k(e, "space")) return p(f(w.evalGenVarFracMixed, !0), e, [A, I]);
                if ("containsVar" !== r && "containsVarEq" !== r && b.isNotNan(t)) {
                    var n = h(t),
                        i = V(t),
                        u = V(e);
                    return n.printList && i !== u && (n.printList.unshift(C("Simplifies to:")), n.printList.unshift(S(u))), n
                }
                if (b.isNotNan(t)) {
                    var n = {};
                    return n.printList = [], n.doMainEval = !0, n.doEval = !0, n
                }
                var n = {};
                return n.printList = [], n.doMainEval = !0, n.doEval = !0, n
            } catch (t) {
                return a(e)
            }
        }

        function s(e, t) {
            "undefined" == typeof t && (t = []);
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                e[n] = !0
            }
            return e
        }

        function l(e, t, r) {
            var n = e(t);
            return n = s(n, r)
        }

        function f(e, t) {
            var r = function(r) {
                var n = [];
                t && (n = w.printStmt(r));
                var o = e(r);
                n = n.concat(o);
                var a = {
                    printList: n
                };
                return a
            };
            return r
        }

        function c(e, t, r, n) {
            var o = l(e, t, n);
            return o.myRet = r, o
        }

        function p(e, t, r) {
            return c(e, t, P(t), r)
        }

        function h(e) {
            switch (T(e)) {
                case "isLinEq":
                    return c(E.myGraphs, [e], "graph1", [_, F]);
                case "isComplexVar":
                    return p(f(w.evalGenVarFracImag, !0), e, []);
                case "isPolynomial":
                    return c(E.myGraphs, [e], "graph2", [_]);
                case "isPolySet":
                    return c(E.manyGraphs, e, "graph3", [_]);
                case "isNumber":
                    return p(E.showNumber, e, [A, I]);
                case "isSimpleAdd":
                    return p(E.showSimpleAdd, e, [A, I]);
                case "isSimpleExpDiv":
                    return p(f(w.showSimpleExpDiv, !0), e, [A, I]);
                case "isExpDiv":
                    return p(f(w.showExpDiv, !0), e, [A, I]);
                case "isFrac":
                    return p(f(w.showFrac, !0), e, [A, I]);
                case "isSimpleFracAdd":
                    return p(f(w.showSimpleFracAdd, !0), e, [A, I]);
                case "isSimpleFracMult":
                    return p(f(w.showSimpleFracMult, !0), e, [A, I]);
                case "isSimpleFracExp":
                    return p(f(w.showSimpleFracExp, !0), e, [A, I]);
                case "isSimpleGenFracExp":
                    return p(f(w.showSimpleFracExp, !0), e, [A, I]);
                case "isSimpleExpMult":
                    return p(f(w.showSimpleExpMult, !0), e, [A, I]);
                case "isExpMult":
                    return p(f(w.showExpMult, !0), e, [A, I]);
                case "isSimpleExpExp":
                    return p(f(w.showSimpleExpExp, !0), e, [A, I]);
                case "isExpExp":
                    return p(f(w.showExpExp, !0), e, [A, I]);
                case "isCoefSimpleExp":
                    return p(f(w.showCoefSimpleExp, !0), e, [A, I]);
                case "isNegSimpleExp":
                    return p(f(w.showNegSimpleExp, !0), e, [A, I]);
                case "isCoefVar":
                    return p(f(w.showCoefVar, !0), e, [A, I]);
                case "isSimpleGenCoefAdd":
                    return p(f(w.showSimpleGenCoefAdd, !0), e, [A, I]);
                case "isCoefSimpleExpMult":
                    return p(f(w.showCoefSimpleExpMult, !0), e, [A, I]);
                case "isCoefExpProd":
                    return p(f(w.showCoefExpProd, !0), e, [A, I]);
                case "isAddTermsSq":
                    return p(f(w.showAddTermsSq, !0), e, [A, I]);
                case "isAddTermsCube":
                    return p(f(w.showAddTermsCube, !0), e, [A, I]);
                case "isSimpleExp0":
                    return p(f(w.showSimpleExp, !0), e, [A, I]);
                case "isAddTerms":
                    return p(f(w.showAddTermsMVarOuter, !1), e, [A, I, R]);
                case "isAddTermsMult":
                    return p(f(w.showAddTermsMult, !0), e, [A, I]);
                case "isSimpleVar":
                    return p(f(w.evalGenVarFrac, !0), e, [A, I]);
                case "isyxEq":
                    return c(E.myGraphs, [e], "graph4", [_]);
                case "isPoint":
                    return c(E.myGraphs, [e], "graph5", [_]);
                case "isGraphSetOne":
                    return c(E.manyGraphs, e, "graph6", [_, F]);
                case "isGraphSet":
                    return c(E.manyGraphs, e, "graph6", [_]);
                case "isUniformVar":
                    return p(f(w.evalGenVarFrac, !0), e, [A, I]);
                case "isMVarAddTerms":
                    return p(f(w.showAddTermsMVarOuter, !1), e, [A, I]);
                case "isMVar":
                    return p(f(w.evalGenVarFrac, !0), e, [A, I]);
                case "isNumEq":
                    return c(E.showNumEq, e, "numEq", []);
                case "isNumEqSet":
                    return c(E.showNumEqSet, e, "numEqSet", []);
                case "isNumIneq":
                    return c(E.showNumEq, e, "numIneq", []);
                case "isVarLinEq":
                    return c(E.showVarLinEq, e, "varLinEq", [L]);
                case "isVarQuadEq":
                    return c(E.showVarQuadEq, e, "varQuadEq", [L]);
                case "isVarLinIneq":
                    return c(E.showVarLinIneq, e, "varLinIneq", [L, O]);
                case "isNumCompoundIneq":
                    return c(f(w.evalAns, !0), e, "numCompoundIneq", [I]);
                case "isVarLinCompoundIneq":
                    return c(E.showVarLinCompoundIneq, e, "varLinCompoundIneq", [L, O]);
                case "isNumCompGatomEq":
                    return c(E.showNumCompGatomEq, e, "numCompGatomEq", []);
                case "isNumCompGatomIneq":
                    return c(E.showNumCompGatomEq, e, "numCompGatomIneq", []);
                case "isVarLinCompGatomIneq":
                    return c(E.showVarLinCompGatomIneq, e, "varLinCompGatomIneq", [L, O]);
                case "evalStmtAtPt":
                    return v(E.showEvalStmtAtPt, e);
                case "evalStmtAtVeqSet":
                    return v(E.showEvalStmtAtVeqSet, e);
                case "evalStmt":
                    return v(E.showEvalStmt, e);
                case "isStandardEq":
                    return c(f(w.showStandardEq, !1), e, "standardEq", [F]);
                case "isStandardIneq":
                    return c(f(w.showStandardEq, !1), e, "standardIneq", [F]);
                case "isMPolyEq":
                    return c(f(w.showNone, !1), e, "mPolyEq", [F]);
                case "isMPolyIneq":
                    return c(f(w.showNone, !1), e, "mPolyIneq", [F]);
                case "isSimpleSystem":
                    return c(f(w.showSimpleSystem, !1), e, "simpleSystem", [L]);
                case "isSimpleVarFracEq":
                    return c(E.showSimpleVarFracEq, e, "simpleVarFracEq", [L]);
                case "isMFVar":
                    return p(f(w.showMFVarOuter, !0), e, [A, I]);
                case "isVarFracAddEq":
                    return c(E.showVarFracAddEq, e, "varFracAddEq", [L]);
                case "containsVarEq":
                    return c(i, e, "containsVarEq", [L]);
                case "containsVar":
                    return k(e, "space") ? p(f(w.evalGenVarFracMixed, !0), e, [A, I]) : c(u, e, "containsVar", []);
                case "isSetExpr":
                    return c(E.showSetExpr, e, "setExpr", []);
                case "isEof":
                    return {
                        myRet: "eof",
                        doEof: !0
                    };
                case "isOther":
                default:
                    return k(e, "space") ? p(f(w.evalGenVarFracMixed, !0), e, [A, I]) : k(e, "sqrt") ? p(f(w.evalGenVarFracSqrt, !0), e, [I]) : p(f(w.evalGenVarFrac, !0), e, [A, I])
            }
        }

        function v(e, t) {
            var r = e(t),
                n = h(r.eans);
            return n.printList && (n.printList.shift(), n.printList.unshift(S(r.pretext)), n.printList.unshift(S(V(t)))), n.doEval = !1, n.eans = r.eans, n
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.showVarLinEq = r.doSolve = void 0, r.tFunc = f, r.getRetByF = c, r.runAnsInner = h;
        var d = e(16),
            g = n(d),
            m = e(49),
            y = n(m),
            x = e(33),
            b = n(x),
            q = e(28),
            E = n(q),
            M = e(24),
            w = n(M),
            T = g.typeOfAns,
            D = y.getPolyExpr,
            S = b.mDiv,
            k = b.containsOp,
            C = b.getMsg,
            V = b.getExprText,
            N = b.listError,
            P = b.evalGeneral,
            L = r.doSolve = "doSolve",
            F = "doSolveVar",
            O = "doGatom",
            A = "doStep",
            I = "doEval",
            R = "doFactor",
            _ = "doGraph",
            j = {};
        j.runAnsInner = h, j.tFunc = f, j.getRetByF = c, j.doSolve = L, j.showVarLinEq = E.showVarLinEq;
        r.showVarLinEq = E.showVarLinEq
    }, {}],
    28: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            var t = ["blue", "red", "green"],
                r = [];
            e.map(function(e, n) {
                var o;
                o = n >= t.length ? "black" : t[n];
                var a = i(e, o);
                r.push(a)
            });
            var n = r.join(" ; ");
            return n
        }

        function a(e) {
            var t = [];
            e.map(function(e, r) {
                var n = ke(e);
                t.push(n)
            });
            var r = t.join(" ; ");
            return r
        }

        function i(e, t) {
            var r = "";
            if (te.isPolynomial(e)) {
                var n = Ce(e);
                r = u(n, t)
            } else te.isyxEq(e) ? r = u(e, t) : te.isxEq(e) ? r = u(e, t) : te.isPoint(e) ? r = s(e, t) : te.isyxIneq(e) ? r = u(e, t) : te.isxIneq(e) ? r = u(e, t) : (te.isStandardEq(e) || te.isStandardIneq(e)) && (r = u(ae.solveStandardEq(e), t));
            return r
        }

        function u(e, t) {
            var r = ye(["color", t, e]);
            return r
        }

        function s(e, t) {
            var r = qe(e[1]),
                n = qe(e[2]),
                o = ye(["color", t, ["pt", r, n]]);
            return o
        }

        function l(e) {
            var t = o(e),
                r = [];
            return ne.mobmode() || r.push(["MDiv", a(e)]), r.push(["MDiv", t]), r.push(["graph", e]), {
                printList: r
            }
        }

        function f(e) {
            var t = xe(e);
            return l(t)
        }

        function c(e, t) {
            var r = o(e),
                n = [];
            return ne.mobmode() || n.push(["MDiv", a(e)]), n.push(["MDiv", r]), n.push(["graph", e, t]), {
                printList: n
            }
        }

        function p(e, t) {
            var r = xe(e);
            return c(r, t)
        }

        function h(e) {
            var t = [];
            t.push(["MDiv", ke(e)]);
            var r = qe(e);
            return t.push(we(r)), ne.mobmode() || t.push(["showNumberOnLine", [r]]), {
                printList: t
            }
        }

        function v(e) {
            var t = [];
            t.push(["MDiv", ke(e)]);
            var r = "blue",
                n = "green",
                o = e[0],
                a = te.getSimpleArgs(e),
                i = a[0],
                u = a[1],
                s = [o, ["color", r, i],
                    ["color", n, u]
                ];
            t.push(Te(s));
            var l, f;
            if ("+" === o) l = i, f = u;
            else {
                l = i, f = -u;
                var c = ["+", ["color", r, l],
                    ["color", n, f]
                ];
                t.push(Te(c))
            }
            t.push(["showNumberLine", [e, l, f]]), t.push(Se(e));
            var p = t;
            return {
                printList: p
            }
        }

        function d(e) {
            var t = e[0],
                r = qe(e[1]),
                n = qe(e[2]),
                o = G.exprToTextN([t, r, n]);
            return o
        }

        function g(e) {
            var t = [];
            t.push(["MDiv", G.exprToTextQ(e)]);
            var r = d(e);
            return t.push(["MDiv", r]), 1 === qe(e) ? t.push(["msgstr", '<font color="green" style="line-height:30px">True</font>']) : t.push(["msgstr", '<font color="red" style="line-height:30px">False</font>']), {
                printList: t
            }
        }

        function m(e) {
            var t = xe(e),
                r = "";
            t.map(function(e, t) {
                var n = d(e);
                t > 0 && (r += " ; "), r += n
            });
            var n = [];
            return n.push(["MDiv", ke(e)]), n.push(["MDiv", r]), {
                printList: n
            }
        }

        function y(e) {
            var t = [];
            return te.isEq(e) ? t.push(["msgstr", "Essayons de résoudre votre équation:"]) : t.push(["msgstr", "Let's solve your inequality step-by-step."]), t.push(Me(ke(e))), t
        }

        function x(e) {
            var t = [];
            return te.isEq(e) ? t.push(["msgstr", "Essayons de résoudre votre équation:"]) : t.push(["msgstr", "Let's solve your inequality step-by-step."]), t
        }

        function b(e, t, r, n) {
            var o = t(e),
                a = o[0],
                i = o[1],
                u = ue.getPrintList(a, n);
            return u = r.concat(u), {
                printList: u,
                myeq: i
            }
        }

        function q(e, t, r, n) {
            var o, a, i, u = t(e),
                s = u[0],
                l = u[1],
                f = u[2],
                c = u[3];
            try {
                "undefined" != typeof c && (a = Ve(c[0]), i = Ve(c[1]), o = c[2])
            } catch (e) {}
            var p = ue.getPrintListR(s, n)[0];
            return p = r.concat(p), p = p.concat(f), {
                printList: p,
                myeq: l,
                gatoms: [a, i, o]
            }
        }

        function E(e) {
            var t = y(e);
            return b(e, se, t, 1)
        }

        function M(e) {
            try {
                if (!te.isVarLinEq2(e) || "isVarLinEq" != te.typeOfAns(e)) return E(e);
                var t = le(e),
                    r = fe(e),
                    n = r[0],
                    o = r[1],
                    a = ue.getPrintListR(n, 1),
                    i = a[0],
                    u = a[1],
                    s = ce(e),
                    l = s[0],
                    f = ue.getPrintList(l, u),
                    c = [];
                if (c.push(["msgstr", "Essayons de résoudre votre équation:"]), c.push(Me(ke(e))), c = c.concat(i), 2 === u && t.length > 2) {
                    var p = [];
                    return p = p.concat(c), p = p.concat(t.slice(2)), p = p.concat(f), {
                        printList: p,
                        myeq: o
                    }
                }
            } catch (e) {}
            return E(e)
        }

        function w(e) {
            var t = y(e);
            return b(e, pe, t, 1)
        }

        function T(e) {
            var t = x(e);
            return q(e, me, t, 1)
        }

        function D(e) {
            var t = [];
            t.push(["MDiv", ke(e)]);
            var r = e[0],
                n = e[1],
                o = e[2],
                a = d(n),
                i = d(o),
                u = "";
            return u += a, u += "\\,\\,\\text' " + r + " '\\,\\,", u += i, t.push(["MDiv", u]), 1 === qe(e) ? t.push(["msgstr", '<font color="green" style="line-height:30px">True</font>']) : t.push(["msgstr", '<font color="red" style="line-height:30px">False</font>']), {
                printList: t
            }
        }

        function S(e) {
            var t = x(e),
                r = q(e, de, t, 1);
            return r
        }

        function k(e) {
            var t = x(e),
                r = q(e, ge, t, 1);
            return r
        }

        function C(e) {
            var t = y(e);
            return b(e, he, t, 1)
        }

        function V(e) {
            var t = y(e);
            return q(e, se, t, 1)
        }

        function N(e) {
            var t = y(e),
                r = ye(e),
                n = ye(e),
                o = 1;
            if ("object" === _(e[1]) && "/" === e[1][0] && "object" === _(e[2]) && "/" === e[2][0]) {
                var a = e[1][1],
                    i = e[1][2],
                    u = e[2][1],
                    s = e[2][2],
                    l = ["=", ["*show", a, s],
                        ["*show", u, i]
                    ];
                r = ye(l);
                var f = "Cross-multiply",
                    c = "Step " + o + ": " + f + ".";
                t.push(["stepstr", c]), t.push(["MDiv", n]), t.push(["MDiv", r]), o++;
                var p = Ee(i),
                    h = Ee(s),
                    v = Ee(a).multiply(h),
                    d = v.polyToExpr(),
                    g = Ee(u).multiply(p),
                    m = g.polyToExpr();
                e = ["=", d, m], r = ye(e), t.push(["MDiv", r])
            } else if ("object" === _(e[1]) && "/" === e[1][0]) {
                var a = e[1][1],
                    i = e[1][2],
                    x = ["=", ["*show", e[1], i],
                        ["*show", e[2], i]
                    ];
                r = ye(x);
                var q = ye(i),
                    f = "Multiply both sides by " + q,
                    c = "Step " + o + ": " + f + ".";
                t.push(["stepstr", c]), t.push(["MDiv", n]), t.push(["MDiv", r]), o++;
                var p = Ee(i),
                    g = Ee(e[2]).multiply(p),
                    m = g.polyToExpr();
                e = ["=", a, m], r = ye(e), t.push(["MDiv", r])
            } else if ("object" === _(e[2]) && "/" === e[2][0]) {
                var u = e[2][1],
                    s = e[2][2],
                    E = ["=", ["*show", e[1], s],
                        ["*show", e[2], s]
                    ];
                r = ye(E);
                var M = ye(s),
                    f = "Multiply both sides by " + M,
                    c = "Step " + o + ": " + f + ".";
                t.push(["stepstr", c]), t.push(["MDiv", n]), t.push(["MDiv", r]), o++;
                var h = Ee(s),
                    v = Ee(e[1]).multiply(h),
                    d = v.polyToExpr();
                e = ["=", d, u], r = ye(e), t.push(["MDiv", r])
            }
            var w, T, D;
            2 === Ee(e[1]).findMaxDegree() || 2 === Ee(e[2]).findMaxDegree() ? (w = b(e, he, [], o), D = w.printList, T = w.myeq) : (w = b(e, se, [], o), D = w.printList, T = w.myeq);
            var S = t.concat(D);
            return {
                printList: S,
                myeq: T
            }
        }

        function P(e) {
            var t = se(e),
                r = t[0],
                n = (t[1], ue.getPrintListR2(r, 1)),
                o = n[0],
                a = ve(e),
                i = Ve(a);
            return {
                printList: o,
                reta: i,
                eqexpr: a
            }
        }

        function L(e) {
            var t = y(e),
                r = e[0],
                n = e[1],
                o = e[2],
                a = ye(n),
                i = ye(o);
            "et" === r ? t.push(["MDiv", "\\text'We know '\\,\\," + a + "\\,\\,\\text' et '\\,\\," + i]) : t.push(["MDiv", "\\text'We know either '\\,\\," + a + "\\,\\,\\text' ou '\\,\\," + i]), t.push(["append", "<hr>"]), "et" === r ? t.push(["MDiva", a, "(Condition 1)"]) : t.push(["MDiva", a, "(Possibility 1)"]);
            var u = P(n),
                s = u.reta;
            t = t.concat(u.printList);
            var l = ke(u.eqexpr);
            t.push(["append", "<hr>"]), "et" === r ? t.push(["MDiva", i, "(Condition 2)"]) : t.push(["MDiva", i, "(Possibilité 2)"]);
            var f = P(o),
                c = f.reta;
            t = t.concat(f.printList);
            var p = ke(f.eqexpr);
            t.push(["append", "<hr>"]), t.push(De("Réponse:")), "et" === r ? t.push(["MDiv", l + "\\,\\,\\text' et '\\,\\," + p]) : t.push(["MDiv", l + "\\,\\,\\text' ou '\\,\\," + p]);
            var h = t,
                v = null;
            return {
                printList: h,
                myeq: v,
                gatoms: [s, c, r]
            }
        }

        function F(e) {
            var t = "";
            return t = te.isEq(e) || te.isIneq(e) ? d(e) : qe(e)
        }

        function O(e) {
            var t = xe(e),
                r = "";
            t.map(function(e, t) {
                var n = F(e);
                t > 0 && (r += " ; "), r += n
            });
            var n = [];
            return n.push(["MDiv", ke(e)]), n.push(["MDiv", r]), {
                printList: n
            }
        }

        function A(e) {
            var t = be(e[1], ["color", "purple", e[2][1]], "x"),
                r = be(t, ["color", "purple", e[2][2]], "y"),
                n = ke(r),
                o = be(e[1], e[2][1], "x"),
                a = be(o, e[2][2], "y");
            return {
                pretext: n,
                eans: a
            }
        }

        function I(e) {
            for (var t = te.getVeqs(e[2]), r = e[1], n = e[1], o = 0; o < t.length; o++) {
                var a = t[o][1],
                    i = t[o][2];
                "" !== i && (r = be(r, ["color", "purple", i], a), n = be(n, i, a))
            }
            var u = ke(r);
            return {
                pretext: u,
                eans: n
            }
        }

        function R(e) {
            for (var t = te.getGVarEq(e[1]).sort(), r = te.getEvals(e[2]), n = e[1], o = e[1], a = 0; a < Math.min(t.length, r.length); a++) {
                var i = t[a],
                    u = r[a];
                "" === u || "object" === ("undefined" == typeof u ? "undefined" : _(u)) && "var" === u[0] || (n = be(n, ["color", "purple", u], i), o = be(o, u, i))
            }
            var s = ke(n);
            return {
                pretext: s,
                eans: o
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        r.myGraphs = l, r.manyGraphs = f, r.manyGraphsW = p, r.showNumber = h, r.showSimpleAdd = v, r.showNumEq = g, r.showNumEqSet = m, r.showVarLinEq = M, r.showVarLinEqMixed = w, r.showVarLinCompoundIneq = T, r.showNumCompGatomEq = D, r.showVarGenEq = S, r.showVarFracAddEq = k, r.showVarQuadEq = C, r.showVarLinIneq = V, r.showSimpleVarFracEq = N, r.showVarLinCompGatomIneq = L, r.showSetExpr = O, r.showEvalStmtAtPt = A, r.showEvalStmtAtVeqSet = I, r.showEvalStmt = R;
        var j = e(40),
            G = n(j),
            H = e(5),
            $ = n(H),
            U = e(6),
            z = n(U),
            B = e(44),
            Q = n(B),
            W = e(4),
            K = n(W),
            J = e(46),
            Y = n(J),
            Z = e(49),
            X = n(Z),
            ee = e(16),
            te = n(ee),
            re = e(35),
            ne = n(re),
            oe = e(33),
            ae = n(oe),
            ie = e(39),
            ue = n(ie),
            se = Q.dLinEq,
            le = Q.showAddTermsMVar2,
            fe = Q.dLinEq2,
            ce = Q.dLinEq3,
            pe = Q.dLinEqMixed,
            he = Q.dQuadEq,
            ve = Q.eLinEq,
            de = Y.dGenEq,
            ge = X.dVarFracAddEq,
            me = K.solveForVarLinCompoundIneq,
            ye = G.exprToText,
            xe = te.getPolys,
            be = te.evalAtVal,
            qe = $.evalExpr,
            Ee = z.exprToPoly,
            Me = ae.mDiv,
            we = ae.mDivEq,
            Te = ae.mFracText,
            De = ae.mHeadDiv,
            Se = ae.mDivEvalAns,
            ke = ae.getExprText,
            Ce = ae.solveForY,
            Ve = ae.getRetaFromExpr
    }, {}],
    29: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o() {
            return TryUtil.MyLatex ? TryUtil.MyLatex.latex() : $("#source").val()
        }

        function a(e) {
            TryUtil.MyLatex ? TryUtil.MyLatex.latex(e) : $("#source").val(e)
        }

        function i(e, t) {
            var r = Y(e);
            return Q.appendOutMDiv(t, r), r
        }

        function u(e) {
            K(e, '<font color="red" style="line-height:30px">You can visit the <a href="/calc/examples/">examples page</a> to see what the calculator currently supports.</font><br><br>')
        }

        function s(e, t) {
            G.testMode() || X.showTval(e, t)
        }

        function l() {
            re("out3", !1), Q.printOutDiv("out0", '<font color="red">Entrer une équation ou expression.</font>'), re("examples_btn", !0)
        }

        function f(e) {
            var t = te(e);
            return t.printList && s(e, t), t.doEof && l(), t.myRet
        }

        function c(e) {
            var t = !1;
            try {
                var r = M.exprToPoly(e),
                    n = r.getCoefFromInt(2).getNum();
                t = m.myPolyText(e) === J(e) && m.factorExpr(e).length > 1 && T.isAddTerms(e) && T.isUniformVarInt(e) && 2 === r.findMaxDegree() && 1 === n
            } catch (e) {}
            return t
        }

        function p() {
            ne("grid2", !1), ne("grid3", !1), ne("out", !1), ne("out3", !1), ne("stepout", !1), ne("factorout", !1), ne("mytabs", !1), ne("soldiv", !1), ne("solouto", !1), ne("solvardiv", !1), ne("youdiv", !1), ne("simpdiv", !1), ne("factordiv", !1), ne("stepdiv", !1), ne("evaldiv", !1), ne("graphdiv", !1), ne("lessondiv", !1), ne("practicediv", !1), ne("sliderdiv-check", !1), ne("examples_btn", !0), ne("sliderdiv", !1), ne("sliderdiv2", !1), ne("lessonrow", !1), ne("sollesson", !1), ne("links2", !1), ne("graphoptdiv", !1), 0 != $("#clear2row").length && (ne("parse_btn", !0), ne("exampleslink", !0), ne("clear2row", !1))
        }

        function h(e) {
            function t(t) {
                try {
                    try {
                        t = L.preProcess(t)
                    } catch (e) {}
                    var r = N.parser2.parse(t);
                    if (Q.printOutMDiv2("outintro", Y(r)), e("#outintro").css("background-color", "white"), !T.isEq(r) && "object" === ("undefined" == typeof r ? "undefined" : d(r)) && r.length > 1 && !T.containsVar(r)) try {
                        var n = I.evalAnsSilent(r);
                        Q.printOutMDiv2("outintro", Y(r) + "\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\cl green {= " + n + "}")
                    } catch (e) {}
                } catch (n) {
                    var r = N.parser2.parse(t + "__");
                    Q.printOutMDiv2("outintro", Y(r)), e("#outintro").css("background-color", "white")
                }
            }

            function r() {
                var r = 0;
                if ("undefined" != typeof TryUtil.MyLatex) var n = document.getElementById("source3");
                else var n = document.getElementById("source");
                n.onkeyup = function() {
                    clearTimeout(r), r = setTimeout(function() {
                        try {
                            var r = o();
                            r = r.trim(), "" == r ? (ee("outintro", '<span class="outlead" style="">What do you want to calculate?</span>'), e("#outintro").css("background-color", "white"), re("examples_btn", !0), p()) : t(r)
                        } catch (t) {
                            e("#outintro").css("background-color", "white")
                        }
                    }, 100)
                }
            }

            function n() {
                var r = 0;
                clearTimeout(r), r = setTimeout(function() {
                    try {
                        var r = o();
                        r = r.trim(), "" == r ? (ee("outintro", '<span class="outlead" style="">What do you want to calculate?</span>'), e("#outintro").css("background-color", "white"), re("examples_btn", !0)) : t(r)
                    } catch (t) {
                        e("#outintro").css("background-color", "white")
                    }
                }, 100)
            }

            function s() {
                if ("undefined" != typeof TryUtil.MyLatex) var e = document.getElementById("source3");
                else var e = document.getElementById("source");
                e.onkeyup = function() {
                    n()
                }
            }

            function l() {
                ne("sliderdiv", !1), ne("sliderdiv2", !1), X.init();
                var t = document.getElementById("source");
                t.focus(), p(), ee("out0", "");
                var o = I.getParam("q");
                e("#shareUrl").length > 0 && e("#shareUrl").val("https://www.mathpapa.com/algebra-calculator.html"), null !== o ? (a(o), h(), 0 != e("#clear2row").length && n(), ne("calcexamplesdiv", !0)) : a(""), 0 == e("#clear2row").length ? 0 == e("#keypad_btn").length && r() : 0 == e("#keypad_btn").length && s();
                try {
                    0 == e("#clear2row").length ? e("#outintro").length > 0 && ee("outintro", '<span class="outlead" style="">What do you want to calculate?</span>') : e("#outintro").length > 0 && ee("outintro", '<span class="outlead" style="">What do you want to calculate?</span>')
                } catch (e) {}
            }

            function h() {
                var t = o();
                return e("#shareUrl").length > 0 && e("#shareUrl").val("https://www.mathpapa.com/algebra-calculator.html?q=" + encodeURIComponent(t)), y(t)
            }

            function v() {
                ne("examples_btn", !1), ne("out", !0), ne("out3", !0), ne("stepout", !0), ne("factorout", !0), ee("out", ""), ee("out0", ""), ee("out3", ""), ee("solout", ""), ee("solouti", ""), ee("solout3", ""), ee("solvarout", ""), ee("solvarout3", ""), ee("simpout", ""), ee("simpout3", ""), ee("stepout", ""), ee("factorout", ""), ee("evalout", ""), ee("evaluateintro", ""), ee("evaluatestep", ""), ee("graphout", ""), ee("lessonout", ""), ee("practiceout", ""), 0 != e("#clear2row").length && (ne("parse_btn", !1), ne("exampleslink", !1), ne("clear2row", !0))
            }

            function g(e, t) {
                for (var r = "", n = 0; n < e.length; n++) r += e[n] === t ? '<font color="red">' + e[n] + "</font>" : e[n];
                return r
            }

            function m(e) {
                var t = e;
                try {
                    N.parser2.parse(e), t = e
                } catch (s) {
                    try {
                        var r = e.split("="),
                            n = !1,
                            o = "";
                        if (3 === r.length) {
                            for (var a = r[1].split(" "), i = 0; i < a.length; i++) {
                                var u = a[i];
                                "" !== u ? (o += u, n || (o += ","), n = !0) : o += " "
                            }
                            t = [r[0], o, r[2]].join("=")
                        }
                    } catch (e) {}
                }
                return t
            }

            function y(t, r) {
                p(), v();
                var n, a = !1,
                    s = t;
                try {
                    try {
                        t = L.preProcess(t)
                    } catch (e) {}
                    if (r) n = t;
                    else {
                        var l = (s.match(/=/g) || []).length;
                        try {
                            n = N.parser2.parse(t)
                        } catch (e) {
                            if ("=" === t.slice(-1)) Q.printOutDiv("out0", '<span style="font-family: Courier">' + Z(t.slice(0, -1)) + '<font color="red">=</font></span>'), W("out0", 'Trying to ignore last <font color="red">=</font>'), n = N.parser2.parse(t.slice(0, -1));
                            else if (2 == l) {
                                Q.printOutDiv("out0", "Trying to insert comma between equations");
                                var h = m(t);
                                W("out0", '<span style="font-family: Courier">' + g(Z(h), ",") + "</span>"), W("out0", '<a href="/calc/tutorial/solving-systems-of-equations/">How to enter a system of equations into Algebra Calculator</a>'), n = N.parser2.parse(h)
                            } else n = N.parser2.parse(t)
                        }
                    }
                    G.setK("ans0", n), ee("out", "");
                    i(n, "out");
                    a = f(n);
                    try {
                        var d = I.typeOfAns(n);
                        "isEof" != d && x.gte2("cl2~`~" + I.getVersion() + "~`~" + s + "~`~" + d, s), ae("calcevent", {
                            etype: d,
                            osource: s
                        }), oe("CalcG " + d, s, "parser")
                    } catch (e) {}
                } catch (e) {
                    var y = e;
                    console.log(e.message), Q.printOutDiv("out0", "");
                    var b = e.message.replace(/\n/g, "<br>"),
                        q = e.message.split("\n");
                    try {
                        x.tryCl("cl2~`~" + I.getvstr() + "~`~" + s + "~`~")
                    } catch (e) {}
                    try {
                        if (b.indexOf("Raphael") !== -1) W("out0", '<font color="red">Sorry, try reloading the page. There is an error.</font>');
                        else if (b.indexOf("not a function") !== -1 || b.indexOf("defined") !== -1 || b.indexOf("find variable") !== -1) W("out0", '<font color="red">Sorry, try reloading the page. The error might be due to an older internet browser.</font>');
                        else {
                            var l = (s.match(/=/g) || []).length,
                                E = (s.match(/_/g) || []).length;
                            l > 1 ? (W("out0", '<span style="font-family: Courier">' + g(Z(s), "=") + "</span>"), W("out0", '<font color="red">Your input has more than one equals sign.</font>'), W("out0", '<font color="red">Do you want to solve a <a href="/calc/tutorial/solving-systems-of-equations/">system of equations</a>? (<a href="/calc/tutorial/solving-systems-of-equations/">Learn how.</a>)</font>')) : E > 0 && (W("out0", '<span style="font-family: Courier">' + g(Z(s), "_") + "</span>"), W("out0", '<font color="red">The calculator does not understand underscore _.</font>'))
                        }
                        var M = [];
                        q.length > 2 ? q[0].indexOf("Parse") !== -1 ? (M.push(["msgstr", "Error: Cannot parse"]), M.push(["msgstr", '<span style="font-family: Courier">' + Z(q[1]) + "</span>"]), M.push(["msgstr", '<span style="font-family: Courier">' + Z(q[2]) + "</span>"])) : q[0].indexOf("Lexical") !== -1 ? (M.push(["msgstr", "Error: Unrecognized character"]), M.push(["msgstr", '<span style="font-family: Courier">' + Z(q[1]) + "</span>"]), M.push(["msgstr", '<span style="font-family: Courier">' + Z(q[2]) + "</span>"])) : (M.push(["msgstr", "Error"]), M.push(["msgstr", '<span style="font-family: Courier">' + g(Z(s), "_") + "</span>"])) : (M.push(["msgstr", "Error"]), M.push(["msgstr", '<span style="font-family: Courier">' + g(Z(s), "_") + "</span>"])), z.appendPrintList("out0", M)
                    } catch (e) {}
                    K("out0", '<font color="red" style="line-height:30px">Please check your input and try again.</font>'), u("out0"), oe("CalcB", s, "parser"), oe("Error", s + "E:" + b, "" + y.message);
                    try {
                        t.indexOf("|") >= 0 && (W("out0", '<font color="red">Try using abs() for absolute value.</font>'), W("out0", '<font color="red">(For example, instead of |-3|, try abs(-3) for absolute value.)</font>')), t.indexOf("\\") >= 0 && W("out0", '<font color="red">To divide, use / instead of \\.</font>')
                    } catch (e) {}
                    re("examples_btn", !0), ee("out", ""), ee("out3", ""), a = !1
                }
                try {
                    var w = o(),
                        D = c(n);
                    if (D) {
                        e("#links2").html('<br><br><a href="/lessons/factor-expressions/?q=' + encodeURIComponent(w) + '"  style=""><span class="chat-img pull-left"><img height="40" width="40" src="https://www.mathpapa.com/static/images/mathpapa512s.png" alt="User Avatar" class="img-circle" />&nbsp;Teach Me How to Factor</span></a><br><br><br>'), e("#links2").show();
                        try {
                            x.tryCl("clfexshow~`~" + I.getvstr() + "~`~" + w + "~`~")
                        } catch (e) {}
                    } else if (T.isVarLinEq(n)) {
                        e("#links2").html('<br><br><br><div style="background-color: #f5f5f5; min-height: 120px; padding: 1px 10px 10px 10px"><h4>Video Lesson</h4><a href="/lessons/solving-equations/home/"><img style="height:70px; float:left; margin-right:10px" class="mp-shadow-image" src="/static/images/solveshot.png" /></a><a href="/lessons/solving-equations/home/" style=""><b>Solving Basic Equations (Lesson 1)</b></a><br>Learn step-by-step how to master solving equations.</div><br><br><br>'), e("#links2").show();
                        try {
                            x.tryCl("clcshowcourse61a~`~" + I.getvstr() + "~`~" + w + "~`~")
                        } catch (e) {}
                    } else if (T.isLinEq(n)) {
                        if ("coursechat" === TryUtil.setChat && !TryUtil.isEligible) {
                            e("#links2").html('<br><br><br><a href="/landing/courses_pricing_graph/"  style=""><span class="chat-img pull-left"><img height="40" width="40" src="https://www.mathpapa.com/static/images/mathpapa512s.png" alt="User Avatar" class="img-circle" />&nbsp;Learn How to Graph Equations with MathPapa Premium</span></a><br><br><br>'),
                                e("#links2").show();
                            try {
                                x.tryCl("clcshowcoursegraph~`~" + I.getvstr() + "~`~" + w + "~`~")
                            } catch (e) {}
                        }
                    } else e("#links2").html(""), e("#links2").hide()
                } catch (e) {}
                return a
            }
            "undefined" == typeof console && (console = {}, console.log = function(t) {
                e("#out").html("error")
            }), G.setK("runCommand", h), G.setK("try5Ready", l)
        }

        function v() {
            G.setT("MutMyComp", m.myComp), G.setT("MutGGCD", C.getGCD), G.setT("MutGLCM", C.getLCM), G.setT("MutFExpr", m.factorExpr), G.setT("MutMyPText", m.myPolyText), G.setT("preProcess", L.preProcess), G.setT("runAnsInner", te), G.setT("par2", N.parser2), G.setT("getEText", Y), G.setT("runAnsMain", f), G.setT("typeOfA", T.typeOfAns), G.setT("evalAnsVarSilent", T.evalExprPoly), G.setT("evalAnsMFVarSilent", T.evalExprPoly), G.setT("evalE", q.evalExpr), G.setT("isEqual", T.isEqual), G.setT("solveVarPrintList", S.solveVarPrintList)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        r.maintry8 = h, r.tSet = v;
        var g = e(44),
            m = n(g),
            y = e(14),
            x = n(y),
            b = e(5),
            q = n(b),
            E = e(6),
            M = n(E),
            w = e(16),
            T = n(w),
            D = e(22),
            S = n(D),
            k = e(41),
            C = n(k),
            V = e(25),
            N = n(V),
            P = e(26),
            L = n(P),
            F = e(27),
            O = n(F),
            A = e(33),
            I = n(A),
            R = e(34),
            _ = n(R),
            j = e(35),
            G = n(j),
            H = e(36),
            U = (n(H), e(37)),
            z = n(U),
            B = e(38),
            Q = n(B),
            W = Q.appendOutDiv,
            K = Q.appendOutDiv2,
            J = I.getExprText,
            Y = I.getExprText,
            Z = I.escapeHtml,
            X = S.myMathObj,
            ee = Q.printOut,
            te = O.runAnsInner,
            re = _.showElem,
            ne = _.showElemJ,
            oe = (I.trackE, I.trackIt),
            ae = I.trackItM;
        G.setTestMode(!1);
        try {
            TryUtil.resetPage = p
        } catch (e) {}
        G.setK("maintry8", h), G.setK("tSet", v)
    }, {}],
    30: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            var t = [],
                r = V(e);
            return t.push(["MDiv", r]), g.isAbsVar(e) ? t.push(["msgstr", '<font color="red" style="line-height:30px">Sorry, I don\'t currently support this absolute value.</font>']) : g.isEq(e) ? t.push(["msgstr", '<font color="red" style="line-height:30px">Sorry, I don\'t know how to solve this equation.</font>']) : g.isIneq(e) ? t.push(["msgstr", '<font color="red" style="line-height:30px">Sorry, I don\'t currently support this inequality.</font>']) : g.isMPolyEqSet(e) ? t.push(["msgstr", '<font color="red" style="line-height:30px">Sorry, I don\'t know how to solve this system of equations.</font>']) : t.push(["msgstr", '<font color="red" style="line-height:30px">Sorry, I don\'t know how to calculate your input.</font>']), N(t), {
                printList: t
            }
        }

        function a(e) {
            var t = [],
                r = V(e);
            return t.push(["MDiv", r]), t.push(["msgstr", '<font color="red" style="line-height:30px">Sorry, I had trouble calculating your input.</font>']), N(t), {
                printList: t
            }
        }

        function i(e) {
            try {
                if (g.isEq(e) || g.isIneq(e)) {
                    var t = e[0],
                        r = D(e[1]),
                        n = D(e[2]),
                        i = e[1],
                        u = e[2];
                    b.isNotNan(r) && (i = r), b.isNotNan(n) && (u = n);
                    var s = [t, i, u],
                        l = T(s);
                    if (k(e, "space") && "isVarLinEq" === l) return c(E.showVarLinEqMixed, e, "varLinEq", [L]);
                    if ("containsVar" !== l && "containsVarEq" !== l) {
                        var f = h(s),
                            p = V(s),
                            v = V(e);
                        return f.printList && p !== v && (f.printList.unshift(S(p)), f.printList.unshift(C("Simplifies to:")), f.printList.unshift(S(v))), f
                    }
                    var f = c(E.showVarGenEq, e, "varGenEq", [L]);
                    return "=" !== e[0] && (f.doGatom = !0), f
                }
                return o(e)
            } catch (t) {
                return a(e)
            }
        }

        function u(e) {
            try {
                if (g.isSetExpr(e)) return o(e);
                var t = D(e),
                    r = T(t);
                if (k(e, "space")) return p(f(w.evalGenVarFracMixed, !0), e, [A, I]);
                if ("containsVar" !== r && "containsVarEq" !== r && b.isNotNan(t)) {
                    var n = h(t),
                        i = V(t),
                        u = V(e);
                    return n.printList && i !== u && (n.printList.unshift(C("Simplifies to:")), n.printList.unshift(S(u))), n
                }
                if (b.isNotNan(t)) {
                    var n = {};
                    return n.printList = [], n.doMainEval = !0, n.doEval = !0, n
                }
                var n = {};
                return n.printList = [], n.doMainEval = !0, n.doEval = !0, n
            } catch (t) {
                return a(e)
            }
        }

        function s(e, t) {
            "undefined" == typeof t && (t = []);
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                e[n] = !0
            }
            return e
        }

        function l(e, t, r) {
            var n = e(t);
            return n = s(n, r)
        }

        function f(e, t) {
            var r = function(r) {
                var n = [];
                t && (n = w.printStmt(r));
                var o = e(r);
                n = n.concat(o);
                var a = {
                    printList: n
                };
                return a
            };
            return r
        }

        function c(e, t, r, n) {
            var o = l(e, t, n);
            return o.myRet = r, o
        }

        function p(e, t, r) {
            return c(e, t, P(t), r)
        }

        function h(e) {
            switch (T(e)) {
                case "isLinEq":
                    return c(E.myGraphs, [e], "graph1", [_, F]);
                case "isComplexVar":
                    return p(f(w.evalGenVarFracImag, !0), e, []);
                case "isPolynomial":
                    return c(E.myGraphs, [e], "graph2", [_]);
                case "isPolySet":
                    return c(E.manyGraphs, e, "graph3", [_]);
                case "isNumber":
                    return p(E.showNumber, e, [A, I]);
                case "isSimpleAdd":
                    return p(E.showSimpleAdd, e, [A, I]);
                case "isSimpleExpDiv":
                    return p(f(w.showSimpleExpDiv, !0), e, [A, I]);
                case "isExpDiv":
                    return p(f(w.showExpDiv, !0), e, [A, I]);
                case "isFrac":
                    return p(f(w.showFrac, !0), e, [A, I]);
                case "isSimpleFracAdd":
                    return p(f(w.showSimpleFracAdd, !0), e, [A, I]);
                case "isSimpleFracMult":
                    return p(f(w.showSimpleFracMult, !0), e, [A, I]);
                case "isSimpleFracExp":
                    return p(f(w.showSimpleFracExp, !0), e, [A, I]);
                case "isSimpleGenFracExp":
                    return p(f(w.showSimpleFracExp, !0), e, [A, I]);
                case "isSimpleExpMult":
                    return p(f(w.showSimpleExpMult, !0), e, [A, I]);
                case "isExpMult":
                    return p(f(w.showExpMult, !0), e, [A, I]);
                case "isSimpleExpExp":
                    return p(f(w.showSimpleExpExp, !0), e, [A, I]);
                case "isExpExp":
                    return p(f(w.showExpExp, !0), e, [A, I]);
                case "isCoefSimpleExp":
                    return p(f(w.showCoefSimpleExp, !0), e, [A, I]);
                case "isNegSimpleExp":
                    return p(f(w.showNegSimpleExp, !0), e, [A, I]);
                case "isCoefVar":
                    return p(f(w.showCoefVar, !0), e, [A, I]);
                case "isSimpleGenCoefAdd":
                    return p(f(w.showSimpleGenCoefAdd, !0), e, [A, I]);
                case "isCoefSimpleExpMult":
                    return p(f(w.showCoefSimpleExpMult, !0), e, [A, I]);
                case "isCoefExpProd":
                    return p(f(w.showCoefExpProd, !0), e, [A, I]);
                case "isAddTermsSq":
                    return p(f(w.showAddTermsSq, !0), e, [A, I]);
                case "isAddTermsCube":
                    return p(f(w.showAddTermsCube, !0), e, [A, I]);
                case "isSimpleExp0":
                    return p(f(w.showSimpleExp, !0), e, [A, I]);
                case "isAddTerms":
                    return p(f(w.showAddTermsMVarOuter, !1), e, [A, I, R]);
                case "isAddTermsMult":
                    return p(f(w.showAddTermsMult, !0), e, [A, I]);
                case "isSimpleVar":
                    return p(f(w.evalGenVarFrac, !0), e, [A, I]);
                case "isyxEq":
                    return c(E.myGraphs, [e], "graph4", [_]);
                case "isPoint":
                    return c(E.myGraphs, [e], "graph5", [_]);
                case "isGraphSetOne":
                    return c(E.manyGraphs, e, "graph6", [_, F]);
                case "isGraphSet":
                    return c(E.manyGraphs, e, "graph6", [_]);
                case "isUniformVar":
                    return p(f(w.evalGenVarFrac, !0), e, [A, I]);
                case "isMVarAddTerms":
                    return p(f(w.showAddTermsMVarOuter, !1), e, [A, I]);
                case "isMVar":
                    return p(f(w.evalGenVarFrac, !0), e, [A, I]);
                case "isNumEq":
                    return c(E.showNumEq, e, "numEq", []);
                case "isNumEqSet":
                    return c(E.showNumEqSet, e, "numEqSet", []);
                case "isNumIneq":
                    return c(E.showNumEq, e, "numIneq", []);
                case "isVarLinEq":
                    return c(E.showVarLinEq, e, "varLinEq", [L]);
                case "isVarQuadEq":
                    return c(E.showVarQuadEq, e, "varQuadEq", [L]);
                case "isVarLinIneq":
                    return c(E.showVarLinIneq, e, "varLinIneq", [L, O]);
                case "isNumCompoundIneq":
                    return c(f(w.evalAns, !0), e, "numCompoundIneq", [I]);
                case "isVarLinCompoundIneq":
                    return c(E.showVarLinCompoundIneq, e, "varLinCompoundIneq", [L, O]);
                case "isNumCompGatomEq":
                    return c(E.showNumCompGatomEq, e, "numCompGatomEq", []);
                case "isNumCompGatomIneq":
                    return c(E.showNumCompGatomEq, e, "numCompGatomIneq", []);
                case "isVarLinCompGatomIneq":
                    return c(E.showVarLinCompGatomIneq, e, "varLinCompGatomIneq", [L, O]);
                case "evalStmtAtPt":
                    return v(E.showEvalStmtAtPt, e);
                case "evalStmtAtVeqSet":
                    return v(E.showEvalStmtAtVeqSet, e);
                case "evalStmt":
                    return v(E.showEvalStmt, e);
                case "isStandardEq":
                    return c(f(w.showStandardEq, !1), e, "standardEq", [F]);
                case "isStandardIneq":
                    return c(f(w.showStandardEq, !1), e, "standardIneq", [F]);
                case "isMPolyEq":
                    return c(f(w.showNone, !1), e, "mPolyEq", [F]);
                case "isMPolyIneq":
                    return c(f(w.showNone, !1), e, "mPolyIneq", [F]);
                case "isSimpleSystem":
                    return c(f(w.showSimpleSystem, !1), e, "simpleSystem", [L]);
                case "isSimpleVarFracEq":
                    return c(E.showSimpleVarFracEq, e, "simpleVarFracEq", [L]);
                case "isMFVar":
                    return p(f(w.showMFVarOuter, !0), e, [A, I]);
                case "isVarFracAddEq":
                    return c(E.showVarFracAddEq, e, "varFracAddEq", [L]);
                case "containsVarEq":
                    return c(i, e, "containsVarEq", [L]);
                case "containsVar":
                    return k(e, "space") ? p(f(w.evalGenVarFracMixed, !0), e, [A, I]) : c(u, e, "containsVar", []);
                case "isSetExpr":
                    return c(E.showSetExpr, e, "setExpr", []);
                case "isEof":
                    return {
                        myRet: "eof",
                        doEof: !0
                    };
                case "isOther":
                default:
                    return k(e, "space") ? p(f(w.evalGenVarFracMixed, !0), e, [A, I]) : k(e, "sqrt") ? p(f(w.evalGenVarFracSqrt, !0), e, [I]) : p(f(w.evalGenVarFrac, !0), e, [A, I])
            }
        }

        function v(e, t) {
            var r = e(t),
                n = h(r.eans);
            return n.printList && (n.printList.shift(), n.printList.unshift(S(r.pretext)), n.printList.unshift(S(V(t)))), n.doEval = !1, n.eans = r.eans, n
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.showVarLinEq = r.doSolve = void 0, r.tFunc = f, r.getRetByF = c, r.runAnsInner = h;
        var d = e(16),
            g = n(d),
            m = e(49),
            y = n(m),
            x = e(33),
            b = n(x),
            q = e(31),
            E = n(q),
            M = e(24),
            w = n(M),
            T = g.typeOfAns,
            D = y.getPolyExpr,
            S = b.mDiv,
            k = b.containsOp,
            C = b.getMsg,
            V = b.getExprText,
            N = b.listError,
            P = b.evalGeneral,
            L = r.doSolve = "doSolve",
            F = "doSolveVar",
            O = "doGatom",
            A = "doStep",
            I = "doEval",
            R = "doFactor",
            _ = "doGraph",
            j = {};
        j.runAnsInner = h, j.tFunc = f, j.getRetByF = c, j.doSolve = L, j.showVarLinEq = E.showVarLinEq;
        r.showVarLinEq = E.showVarLinEq
    }, {}],
    31: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            var t = ["blue", "red", "green"],
                r = [];
            e.map(function(e, n) {
                var o;
                o = n >= t.length ? "black" : t[n];
                var a = i(e, o);
                r.push(a)
            });
            var n = r.join(" ; ");
            return n
        }

        function a(e) {
            var t = [];
            e.map(function(e, r) {
                var n = ke(e);
                t.push(n)
            });
            var r = t.join(" ; ");
            return r
        }

        function i(e, t) {
            var r = "";
            if (te.isPolynomial(e)) {
                var n = Ce(e);
                r = u(n, t)
            } else te.isyxEq(e) ? r = u(e, t) : te.isxEq(e) ? r = u(e, t) : te.isPoint(e) ? r = s(e, t) : te.isyxIneq(e) ? r = u(e, t) : te.isxIneq(e) ? r = u(e, t) : (te.isStandardEq(e) || te.isStandardIneq(e)) && (r = u(ae.solveStandardEq(e), t));
            return r
        }

        function u(e, t) {
            var r = ye(["color", t, e]);
            return r
        }

        function s(e, t) {
            var r = qe(e[1]),
                n = qe(e[2]),
                o = ye(["color", t, ["pt", r, n]]);
            return o
        }

        function l(e) {
            var t = o(e),
                r = [];
            return ne.mobmode() || r.push(["MDiv", a(e)]), r.push(["MDiv", t]), r.push(["graph", e]), {
                printList: r
            }
        }

        function f(e) {
            var t = xe(e);
            return l(t)
        }

        function c(e, t) {
            var r = o(e),
                n = [];
            return ne.mobmode() || n.push(["MDiv", a(e)]), n.push(["MDiv", r]), n.push(["graph", e, t]), {
                printList: n
            }
        }

        function p(e, t) {
            var r = xe(e);
            return c(r, t)
        }

        function h(e) {
            var t = [];
            t.push(["MDiv", ke(e)]);
            var r = qe(e);
            return t.push(we(r)), ne.mobmode() || t.push(["showNumberOnLine", [r]]), {
                printList: t
            }
        }

        function v(e) {
            var t = [];
            t.push(["MDiv", ke(e)]);
            var r = "blue",
                n = "green",
                o = e[0],
                a = te.getSimpleArgs(e),
                i = a[0],
                u = a[1],
                s = [o, ["color", r, i],
                    ["color", n, u]
                ];
            t.push(Te(s));
            var l, f;
            if ("+" === o) l = i, f = u;
            else {
                l = i, f = -u;
                var c = ["+", ["color", r, l],
                    ["color", n, f]
                ];
                t.push(Te(c))
            }
            t.push(["showNumberLine", [e, l, f]]), t.push(Se(e));
            var p = t;
            return {
                printList: p
            }
        }

        function d(e) {
            var t = e[0],
                r = qe(e[1]),
                n = qe(e[2]),
                o = G.exprToTextN([t, r, n]);
            return o
        }

        function g(e) {
            var t = [];
            t.push(["MDiv", G.exprToTextQ(e)]);
            var r = d(e);
            return t.push(["MDiv", r]), 1 === qe(e) ? t.push(["msgstr", '<font color="green" style="line-height:30px">True</font>']) : t.push(["msgstr", '<font color="red" style="line-height:30px">False</font>']), {
                printList: t
            }
        }

        function m(e) {
            var t = xe(e),
                r = "";
            t.map(function(e, t) {
                var n = d(e);
                t > 0 && (r += " ; "), r += n
            });
            var n = [];
            return n.push(["MDiv", ke(e)]), n.push(["MDiv", r]), {
                printList: n
            }
        }

        function y(e) {
            var t = [];
            return te.isEq(e) ? t.push(["msgstr", "Essayons de résoudre votre équation:"]) : t.push(["msgstr", "Let's solve your inequality step-by-step."]), t.push(Me(ke(e))), t
        }

        function x(e) {
            var t = [];
            return te.isEq(e) ? t.push(["msgstr", "Essayons de résoudre votre équation:"]) : t.push(["msgstr", "Let's solve your inequality step-by-step."]), t
        }

        function b(e, t, r, n) {
            var o = t(e),
                a = o[0],
                i = o[1],
                u = ue.getPrintList(a, n);
            return u = r.concat(u), {
                printList: u,
                myeq: i
            }
        }

        function q(e, t, r, n) {
            var o, a, i, u = t(e),
                s = u[0],
                l = u[1],
                f = u[2],
                c = u[3];
            try {
                "undefined" != typeof c && (a = Ve(c[0]), i = Ve(c[1]), o = c[2])
            } catch (e) {}
            var p = ue.getPrintListR(s, n)[0];
            return p = r.concat(p), p = p.concat(f), {
                printList: p,
                myeq: l,
                gatoms: [a, i, o]
            }
        }

        function E(e) {
            var t = y(e);
            return b(e, se, t, 1)
        }

        function M(e) {
            try {
                if (!te.isVarLinEq2(e) || "isVarLinEq" != te.typeOfAns(e)) return E(e);
                var t = le(e),
                    r = fe(e),
                    n = r[0],
                    o = r[1],
                    a = ue.getPrintListR(n, 1),
                    i = a[0],
                    u = a[1],
                    s = ce(e),
                    l = s[0],
                    f = ue.getPrintList(l, u),
                    c = [];
                if (c.push(["msgstr", "Essayons de résoudre votre équation:"]), c.push(Me(ke(e))), c = c.concat(i), 2 === u && t.length > 2) {
                    var p = [];
                    return p = p.concat(c), p = p.concat(t.slice(2)), p = p.concat(f), {
                        printList: p,
                        myeq: o
                    }
                }
            } catch (e) {}
            return E(e)
        }

        function w(e) {
            var t = y(e);
            return b(e, pe, t, 1)
        }

        function T(e) {
            var t = x(e);
            return q(e, me, t, 1)
        }

        function D(e) {
            var t = [];
            t.push(["MDiv", ke(e)]);
            var r = e[0],
                n = e[1],
                o = e[2],
                a = d(n),
                i = d(o),
                u = "";
            return u += a, u += "\\,\\,\\text' " + r + " '\\,\\,", u += i, t.push(["MDiv", u]), 1 === qe(e) ? t.push(["msgstr", '<font color="green" style="line-height:30px">True</font>']) : t.push(["msgstr", '<font color="red" style="line-height:30px">False</font>']), {
                printList: t
            }
        }

        function S(e) {
            var t = x(e),
                r = q(e, de, t, 1);
            return r
        }

        function k(e) {
            var t = x(e),
                r = q(e, ge, t, 1);
            return r
        }

        function C(e) {
            var t = y(e);
            return b(e, he, t, 1)
        }

        function V(e) {
            var t = y(e);
            return q(e, se, t, 1)
        }

        function N(e) {
            var t = y(e),
                r = ye(e),
                n = ye(e),
                o = 1;
            if ("object" === _(e[1]) && "/" === e[1][0] && "object" === _(e[2]) && "/" === e[2][0]) {
                var a = e[1][1],
                    i = e[1][2],
                    u = e[2][1],
                    s = e[2][2],
                    l = ["=", ["*show", a, s],
                        ["*show", u, i]
                    ];
                r = ye(l);
                var f = "Cross-multiply",
                    c = "Step " + o + ": " + f + ".";
                t.push(["stepstr", c]), t.push(["MDiv", n]), t.push(["MDiv", r]), o++;
                var p = Ee(i),
                    h = Ee(s),
                    v = Ee(a).multiply(h),
                    d = v.polyToExpr(),
                    g = Ee(u).multiply(p),
                    m = g.polyToExpr();
                e = ["=", d, m], r = ye(e), t.push(["MDiv", r])
            } else if ("object" === _(e[1]) && "/" === e[1][0]) {
                var a = e[1][1],
                    i = e[1][2],
                    x = ["=", ["*show", e[1], i],
                        ["*show", e[2], i]
                    ];
                r = ye(x);
                var q = ye(i),
                    f = "Multiply both sides by " + q,
                    c = "Step " + o + ": " + f + ".";
                t.push(["stepstr", c]), t.push(["MDiv", n]), t.push(["MDiv", r]), o++;
                var p = Ee(i),
                    g = Ee(e[2]).multiply(p),
                    m = g.polyToExpr();
                e = ["=", a, m], r = ye(e), t.push(["MDiv", r])
            } else if ("object" === _(e[2]) && "/" === e[2][0]) {
                var u = e[2][1],
                    s = e[2][2],
                    E = ["=", ["*show", e[1], s],
                        ["*show", e[2], s]
                    ];
                r = ye(E);
                var M = ye(s),
                    f = "Multiply both sides by " + M,
                    c = "Step " + o + ": " + f + ".";
                t.push(["stepstr", c]), t.push(["MDiv", n]), t.push(["MDiv", r]), o++;
                var h = Ee(s),
                    v = Ee(e[1]).multiply(h),
                    d = v.polyToExpr();
                e = ["=", d, u], r = ye(e), t.push(["MDiv", r])
            }
            var w, T, D;
            2 === Ee(e[1]).findMaxDegree() || 2 === Ee(e[2]).findMaxDegree() ? (w = b(e, he, [], o), D = w.printList, T = w.myeq) : (w = b(e, se, [], o), D = w.printList, T = w.myeq);
            var S = t.concat(D);
            return {
                printList: S,
                myeq: T
            }
        }

        function P(e) {
            var t = se(e),
                r = t[0],
                n = (t[1], ue.getPrintListR2(r, 1)),
                o = n[0],
                a = ve(e),
                i = Ve(a);
            return {
                printList: o,
                reta: i,
                eqexpr: a
            }
        }

        function L(e) {
            var t = y(e),
                r = e[0],
                n = e[1],
                o = e[2],
                a = ye(n),
                i = ye(o);
            "and" === r ? t.push(["MDiv", "\\text'We know '\\,\\," + a + "\\,\\,\\text' and '\\,\\," + i]) : t.push(["MDiv", "\\text'We know either '\\,\\," + a + "\\,\\,\\text' ou '\\,\\," + i]), t.push(["append", "<hr>"]), "and" === r ? t.push(["MDiva", a, "(Condition 1)"]) : t.push(["MDiva", a, "(Possibility 1)"]);
            var u = P(n),
                s = u.reta;
            t = t.concat(u.printList);
            var l = ke(u.eqexpr);
            t.push(["append", "<hr>"]), "and" === r ? t.push(["MDiva", i, "(Condition 2)"]) : t.push(["MDiva", i, "(Possibility 2)"]);
            var f = P(o),
                c = f.reta;
            t = t.concat(f.printList);
            var p = ke(f.eqexpr);
            t.push(["append", "<hr>"]), t.push(De("Réponse:")), "et" === r ? t.push(["MDiv", l + "\\,\\,\\text' et '\\,\\," + p]) : t.push(["MDiv", l + "\\,\\,\\text' ou '\\,\\," + p]);
            var h = t,
                v = null;
            return {
                printList: h,
                myeq: v,
                gatoms: [s, c, r]
            }
        }

        function F(e) {
            var t = "";
            return t = te.isEq(e) || te.isIneq(e) ? d(e) : qe(e)
        }

        function O(e) {
            var t = xe(e),
                r = "";
            t.map(function(e, t) {
                var n = F(e);
                t > 0 && (r += " ; "), r += n
            });
            var n = [];
            return n.push(["MDiv", ke(e)]), n.push(["MDiv", r]), {
                printList: n
            }
        }

        function A(e) {
            var t = be(e[1], ["color", "purple", e[2][1]], "x"),
                r = be(t, ["color", "purple", e[2][2]], "y"),
                n = ke(r),
                o = be(e[1], e[2][1], "x"),
                a = be(o, e[2][2], "y");
            return {
                pretext: n,
                eans: a
            }
        }

        function I(e) {
            for (var t = te.getVeqs(e[2]), r = e[1], n = e[1], o = 0; o < t.length; o++) {
                var a = t[o][1],
                    i = t[o][2];
                "" !== i && (r = be(r, ["color", "purple", i], a), n = be(n, i, a))
            }
            var u = ke(r);
            return {
                pretext: u,
                eans: n
            }
        }

        function R(e) {
            for (var t = te.getGVarEq(e[1]).sort(), r = te.getEvals(e[2]), n = e[1], o = e[1], a = 0; a < Math.min(t.length, r.length); a++) {
                var i = t[a],
                    u = r[a];
                "" === u || "object" === ("undefined" == typeof u ? "undefined" : _(u)) && "var" === u[0] || (n = be(n, ["color", "purple", u], i), o = be(o, u, i))
            }
            var s = ke(n);
            return {
                pretext: s,
                eans: o
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        r.myGraphs = l, r.manyGraphs = f, r.manyGraphsW = p, r.showNumber = h, r.showSimpleAdd = v, r.showNumEq = g, r.showNumEqSet = m, r.showVarLinEq = M, r.showVarLinEqMixed = w, r.showVarLinCompoundIneq = T, r.showNumCompGatomEq = D, r.showVarGenEq = S, r.showVarFracAddEq = k, r.showVarQuadEq = C, r.showVarLinIneq = V, r.showSimpleVarFracEq = N, r.showVarLinCompGatomIneq = L, r.showSetExpr = O, r.showEvalStmtAtPt = A, r.showEvalStmtAtVeqSet = I, r.showEvalStmt = R;
        var j = e(40),
            G = n(j),
            H = e(5),
            $ = n(H),
            U = e(6),
            z = n(U),
            B = e(1),
            Q = n(B),
            W = e(4),
            K = n(W),
            J = e(46),
            Y = n(J),
            Z = e(49),
            X = n(Z),
            ee = e(16),
            te = n(ee),
            re = e(35),
            ne = n(re),
            oe = e(33),
            ae = n(oe),
            ie = e(39),
            ue = n(ie),
            se = Q.dLinEq,
            le = Q.showAddTermsMVar2,
            fe = Q.dLinEq2,
            ce = Q.dLinEq3,
            pe = Q.dLinEqMixed,
            he = Q.dQuadEq,
            ve = Q.eLinEq,
            de = Y.dGenEq,
            ge = X.dVarFracAddEq,
            me = K.solveForVarLinCompoundIneq,
            ye = G.exprToText,
            xe = te.getPolys,
            be = te.evalAtVal,
            qe = $.evalExpr,
            Ee = z.exprToPoly,
            Me = ae.mDiv,
            we = ae.mDivEq,
            Te = ae.mFracText,
            De = ae.mHeadDiv,
            Se = ae.mDivEvalAns,
            ke = ae.getExprText,
            Ce = ae.solveForY,
            Ve = ae.getRetaFromExpr
    }, {}],
    32: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            var t = d(["-", e[1], e[2]]);
            return 1 === h([t.polyToExpr()]).length
        }

        function a(e) {
            var t = d(["-", e[1], e[2]]),
                r = d(e[1]),
                n = h([e[1]]);
            for (var o in t.coefs)
                if ("0" !== o && 1 === t.getCoef(o).getNum() && 1 === r.getCoef(o).getNum() && 1 === n.length) return !0;
            return !1
        }

        function i(e) {
            var t = d(["-", e[1], e[2]]);
            for (var r in t.coefs)
                if ("0" !== r && 1 === Math.abs(t.getCoef(r).getNum())) return !0;
            return !1
        }

        function u(e, t) {
            var r, n;
            return o(e) ? (r = e, n = t) : o(t) ? (r = t, n = e) : a(e) ? (r = e, n = t) : a(t) ? (r = t, n = e) : i(e) ? (r = e, n = t) : i(t) ? (r = t, n = e) : (r = e, n = t), [r, n]
        }

        function s(e, t) {
            var r, n, o = v([e, t]),
                a = o[0][0],
                i = o[1][0],
                u = v([e]);
            if (1 === u.length) {
                var s = u[0][0];
                s === a ? (r = a, n = i) : (r = i, n = a)
            } else {
                var l = u[0],
                    f = u[1],
                    c = d(["-", e[1], e[2]]),
                    p = d(e[1]);
                1 === c.getCoef(l).getNum() && 1 === p.getCoef(l).getNum() || 0 === c.getCoef(f).getNum() ? (r = l[0], n = f[0]) : 1 === c.getCoef(f).getNum() && 1 === p.getCoef(f).getNum() || 0 === c.getCoef(l).getNum() ? (r = f[0], n = l[0]) : 1 === Math.abs(c.getCoef(l).getNum()) ? (r = l[0], n = f[0]) : 1 === Math.abs(c.getCoef(f).getNum()) ? (r = f[0], n = l[0]) : (r = l[0], n = f[0])
            }
            return [r, n]
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.orderSolveEqs = u, r.orderSolveVars = s;
        var l = e(16),
            f = n(l),
            c = e(6),
            p = n(c),
            h = f.getCarraySides,
            v = f.getCarrayEqs,
            d = p.exprToPoly,
            g = {};
        g.orderSolveEqs = u, g.orderSolveVars = s
    }, {}],
    33: [function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function a(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        }

        function i(e) {
            return "number" != typeof e || !isNaN(e)
        }

        function u() {
            var e = re;
            return "string" == typeof TryUtil.abver && (e += TryUtil.abver), e
        }

        function s(e, t) {
            var r = !1;
            if ("object" === ("undefined" == typeof e ? "undefined" : R(e))) {
                var n = e[0],
                    o = e.slice(1);
                n === t ? r = !0 : o.forEach(function(e) {
                    var n = s(e, t);
                    r = r || n
                })
            }
            return r
        }

        function l() {
            return re
        }

        function f(e) {
            var t, r, n = window.location.search.substring(1),
                o = n.split("&");
            for (t = 0; t < o.length; t++)
                if (r = o[t].split("="), r[0] == e) return decodeURIComponent(r[1]);
            return null
        }

        function c(e) {
            return ["MDiv", e]
        }

        function p(e, t) {
            return ["MDiva", e, t]
        }

        function h(e) {
            return ["MDivEq", e]
        }

        function v(e) {
            return ["msgstr", e, "MHeadDiv"]
        }

        function d(e) {
            return ["msgstr", e, "MHeadDiv2"]
        }

        function g(e, t) {
            return ["MDiv", e, "MTopDiv", t]
        }

        function m(e, t) {
            return ["MDivEq", e, t]
        }

        function y(e) {
            return ["msgstr", e]
        }

        function x(e) {
            return h(q(e))
        }

        function b(e) {
            return h(fe(e))
        }

        function q(e) {
            return ce(e)
        }

        function E(e) {
            var t = "";
            try {
                t = ne(e)
            } catch (r) {
                t = ce(e)
            }
            return t
        }

        function M(e) {
            var t, r, n = e[0],
                o = B.ansRightPoly(e);
            if (B.ansLeftIsY(e)) r = o;
            else {
                var a = ee.default.fracnum(0),
                    i = ee.default.fracnum(0),
                    u = B.ansLeftPoly(e);
                1 === u.findMaxDegree() && (a = u.getCoefFromInt(1)), i = u.getCoefFromInt(0), r = o.add((0, te.fracToPoly)(i.multiply(ee.default.fracnum(-1)))).divide((0, te.fracToPoly)(a))
            }
            return t = [n, ["var", "y"], r.polyToExpr()]
        }

        function w(e, t, r) {
            try {
                ga("send", "event", u() + " " + e, t, r)
            } catch (e) {}
        }

        function T(e, t, r) {
            try {
                var n = ce(e);
                w(t, " EE" + r, "" + n), H.tryCl("trackE~`~" + l() + "~`~" + n + "~`~" + t)
            } catch (e) {
                w(t, " PE" + r, "" + r)
            }
        }

        function D(e, t) {
            try {} catch (e) {}
        }

        function S(e) {
            return e.push(["emsgstr", '<font color="red" style="line-height:30px">Please visit the <a href="/calc/examples/">examples page</a> to see what the calculator currently supports.</font>']), e
        }

        function k(e) {
            var t;
            t = B.isEq(e) ? B.getUniformVarEq(e) : B.getUniformVarIneq(e);
            var r = B.ansLeftPoly(e),
                n = B.ansRightPoly(e),
                o = e[0],
                a = [r, n, o];
            return a
        }

        function C(e) {
            var t = e[0],
                r = le(e[1]),
                n = le(e[2]),
                o = [t, r, n];
            return o
        }

        function V(e) {
            var t = "";
            try {
                t = oe(e)
            } catch (r) {
                t = le(e)
            }
            return t
        }

        function N(e) {
            var t = "";
            try {
                t = ae(e), "number" == typeof t && (t = le(e))
            } catch (r) {
                t = le(e)
            }
            return t
        }

        function P(e) {
            var t = "";
            try {
                t = ie(e), "number" == typeof t && isNaN(t) && (t = le(e))
            } catch (r) {
                t = le(e)
            }
            return t
        }

        function L(e) {
            var t = e[2],
                r = [t, e[0].polyToExpr(), e[1].polyToExpr()];
            return r
        }

        function F(e) {
            var t = e[0],
                r = se(e[1]),
                n = se(e[2]);
            return [r, n, t]
        }

        function O(e, t) {
            var r = ue(e, t),
                n = k(r);
            return n
        }

        function A(e, t) {
            var r = L(e),
                n = O(r, t);
            return n
        }

        function I(e) {
            var t = C(e),
                r = F(t);
            return r = A(r, "y"), t = L(r)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.evalAnsSilent = r.evalGenVarSilent = r.evalGeneral = r.typeOfAns = r.fracExpr = void 0;
        var R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        r.escapeHtml = a, r.isNotNan = i, r.getVersion = u, r.containsOp = s, r.getvstr = l, r.getParam = f, r.mDiv = c, r.mDiva = p, r.mDivEq = h, r.mHeadDiv = v, r.mHeadDiv2 = d, r.mTopDiv = g, r.mDivEqa = m, r.getMsg = y, r.mFracText = x, r.mDivEvalAns = b, r.getExprText = q, r.getExprTextH = E, r.solveForY = M, r.trackIt = w, r.trackE = T, r.trackItM = D, r.listError = S, r.getRetaFromExpr = k, r.mPolyEqExpr = C, r.fracExprMixed = V, r.fracExprSqrt = N, r.fracExprImag = P, r.solveStandardEq = I;
        var _ = e(1),
            j = o(_),
            G = e(14),
            H = o(G),
            $ = e(6),
            U = o($),
            z = e(16),
            B = o(z),
            Q = e(40),
            W = o(Q),
            K = e(47),
            J = o(K),
            Y = e(49),
            Z = o(Y),
            X = e(10),
            ee = n(X),
            te = e(43),
            re = "041917",
            ne = W.exprToTextH,
            oe = Z.getPolyExprMixed,
            ae = J.getSurdExprSqrt,
            ie = j.myPolyExprImag,
            ue = j.exSolveForLinVar,
            se = U.exprToPoly,
            le = r.fracExpr = Z.getPolyExpr,
            fe = (r.typeOfAns = B.typeOfAns, r.evalGeneral = B.evalGeneral, r.evalGenVarSilent = B.evalGenVarSilent, r.evalAnsSilent = B.evalAnsSilent),
            ce = W.exprToText;
        try {
            TryUtil.getVersion = u
        } catch (e) {}
    }, {}],
    34: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.showElemJ = r.showElem = void 0;
        var o = e(35),
            a = n(o),
            i = r.showElem = function(e, t) {
                a.testMode() || (document.getElementById(e).style.display = t ? "" : "none")
            },
            u = r.showElemJ = function(e, t) {
                a.testMode() || $("#" + e).length > 0 && (t ? $("#" + e).show() : $("#" + e).hide())
            },
            s = {};
        s.showElem = i, s.showElemJ = u
    }, {}],
    35: [function(e, t, r) {
        "use strict";

        function n(e) {
            return KhanUtil[e]
        }

        function o(e, t) {
            KhanUtil[e] = t
        }

        function a(e) {
            return TryUtil[e]
        }

        function i(e, t) {
            TryUtil[e] = t
        }

        function u() {
            return KhanUtil.mobmode
        }

        function s(e) {
            return KhanUtil.mobmode = e, KhanUtil.mobmode
        }

        function l() {
            return KhanUtil.testMode
        }

        function f(e) {
            return KhanUtil.testMode = e, KhanUtil.testMode
        }

        function c() {
            return KhanUtil.mywindowsize
        }

        function p(e) {
            return KhanUtil.mywindowsize = e, KhanUtil.mywindowsize
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.getK = n, r.setK = o, r.getT = a, r.setT = i, r.mobmode = u, r.setMobmode = s, r.testMode = l, r.setTestMode = f, r.mywindowsize = c, r.setWindowSize = p
    }, {}],
    36: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            var t = [];
            try {
                var r = h.typeOfAns(e);
                switch (r) {
                    case "isSimpleFracAdd":
                        t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to add and subtract fractions"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=52ZlXsFJULI">Adding and subtracting fractions</a>']);
                        break;
                    case "isComplexVar":
                        "object" === ("undefined" == typeof e ? "undefined" : a(e)) && "/" === e[0] && c.containsVar(e[2]) ? (t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to divide complex numbers"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=Z8j5RDOibV4"">Dividing Complex Numbers</a>'])) : (t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to calculate with complex numbers"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=ysVcAYo7UPI">Introduction to i and Imaginary Numbers</a>']), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=cWn6g8Qqvs4">Multiplying Complex Numbers</a>']));
                        break;
                    case "isSimpleFracMult":
                        t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to multiply and divide fractions"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=CTKMK1ZGLuk">Multiplying fractions</a>']), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=zQMU-lsMb3U">Dividing fractions</a>']);
                        break;
                    case "evalStmtAtVeqSet":
                        t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to evaluate expressions"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=BXHNzUaIRR0">Evaluating Expressions with Two Variables</a>']);
                        break;
                    case "isSimpleVarFracEq":
                        t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to solve linear equations after cross-multiplying"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=9IUEk9fn2Vs">Algebra: Linear Equations 4</a>']);
                        break;
                    case "isLinEq":
                        t.push(["MDiv", E(e)]), t.push(["msgstr", 'Lesson: <a href="/lessons/graphing-lines/home/1/">Learn how to graph lines</a>']), t.push(["msgstr", '<a href="/lessons/graphing-lines/home/1/"><img class="mp-shadow-image" src="/static/images/graphvidshot1.png" /></a>']);
                        break;
                    case "isVarLinIneq":
                        t.push(["MDiv", E(e)]), t.push(["msgstr", 'Lesson: <a href="/lessons/solving-inequalities/home/1/">Learn how to solve inequalities</a>']), t.push(["msgstr", '<a href="/lessons/solving-inequalities/home/1/"><img class="mp-shadow-image" src="/static/images/ineqshot1.png" /></a>']);
                        break;
                    case "isSimpleExp0":
                        t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to compute exponents"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=8htcZca0JIA">Level 1 Exponents (positive exponents)</a>']), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=1Nt-t9YJM8k">Level 2 Exponents (negative exponents)</a>']);
                        break;
                    case "isAddTerms":
                        m(e).length > 6 && (t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to simplify expressions"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=3NHSwiv_pSE">Combining Like Terms and the Distributive Property</a><br><br><br>']));
                        try {
                            var n = y(e);
                            n.length > 1 && 2 === q(e).findMaxDegree() && (t.push(["MDiv", E(M(e))]), t.push(["msgstr", "Learn how to factor quadratic expressions"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=eF6zYNzlZKQ">Factoring Quadratic Expressions</a>']))
                        } catch (e) {
                            return t
                        }
                        break;
                    case "isPolynomial":
                        2 === c.ansRightPoly(e).findMaxDegree() && (t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to graph quadratic functions"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=3a7UbMJpeIM">Graphing a Quadratic Function</a>']));
                        break;
                    case "isSimpleSystem":
                        t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to solve systems of equations"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=V7H1oUHXPkg">Solving Linear Systems by Substitution</a>']);
                        break;
                    case "isAddTermsMult":
                        t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to multiply polynomials"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=fGThIRpWEE4">Multiplication of Polynomials</a>']);
                        break;
                    case "containsVarEq":
                        c.isEq(e) && c.containsAbs(e[1]) ? (t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to solve absolute value equations"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=u6zDpUL5RkU">Absolute Value Equations</a>'])) : c.isIneq(e) && c.containsAbs(e[1]) && (t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to solve absolute value inequalities"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=iI_2Piwn_og">Absolute Value Inequalities</a>']));
                        break;
                    case "isVarLinEq":
                        var o = (g(e), x(e));
                        t.push(["MDiv", E(e)]), t.push(["msgstr", 'Lesson: <a href="/lessons/solving-equations/home/1/">Learn how to solve simple equations</a>']), t.push(["msgstr", '<a href="/lessons/solving-equations/home/1/"><img class="mp-shadow-image" src="/static/images/solveshot.png" /></a>']);
                        break;
                    case "isVarQuadEq":
                        try {
                            var o = b(e);
                            if ("isSimpleQuad" === o) return t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to solve simple quadratics"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=RweAgQwLdMs">Simple Quadratic Equation</a>']), t;
                            var n = y(["-", e[1], e[2]]);
                            n.length > 1 ? (t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to solve quadratic equations"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=N30tN9158Kc">Solving a quadratic by factoring</a>']), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=iulx0z1lz8M">Quadratic Formula 1</a>'])) : (t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn to solve equations with the quadratic formula"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=iulx0z1lz8M">Quadratic Formula 1</a>']))
                        } catch (r) {
                            t.push(["MDiv", E(e)]), t.push(["msgstr", "Apprendre comment utiliser la formule quadratique."]), t.push(["msgstr", 'Bientôt disponible'])
                        }
                        break;
                    case "isOther":
                        h.containsOp(e, "sqrt") && ("object" === ("undefined" == typeof e ? "undefined" : a(e)) && "/" === e[0] && h.containsOp(e[2], "sqrt") ? (t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to rationalize radical expressions"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=gY5TvlHg4Vk">How to Rationalize a Denominator</a>'])) : (t.push(["MDiv", E(e)]), t.push(["msgstr", "Learn how to simplify radical expressions"]), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=6QJtWfIiyZo">Simplifying radicals</a>']), t.push(["msgstr", 'Khan Academy Video: <a target="_blank" href="https://www.youtube.com/watch?v=VWlFMfPVmkU">More Simplifying Radical Expressions</a>'])));
                        break;
                    default:
                        return []
                }
                return t
            } catch (e) {}
            return []
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.getLessonMsg = void 0;
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        r.getLessonMsg2 = o;
        var i = e(6),
            u = n(i),
            s = e(1),
            l = n(s),
            f = e(16),
            c = n(f),
            p = e(33),
            h = n(p),
            v = e(14),
            d = (n(v), e(21)),
            g = (n(d), l.getEqInfo),
            m = l.showAddTermsMVar,
            y = l.factorExpr,
            x = l.getEqInfo2,
            b = l.getQuadEqInfo2,
            q = u.exprToPoly,
            E = h.getExprText,
            M = h.fracExpr,
            w = (r.getLessonMsg = function(e) {
                var t = h.typeOfAns(e),
                    r = "";
                if ("isVarLinEq" === t) {
                    var n = g(e),
                        o = w(n),
                        a = "",
                        i = "",
                        u = "";
                    o && (a = o.newvid, i = o.newtitle, u = o.newlink), "" != i && "" != u && ("isSimpleAddEqInt" === n ? r = '<br><br><br><h3>MathPapa Lesson</h3>Learn from the basics how to solve equations!<br><a href="/basic-algebra/2/" style=""><button type="submit" class="btn btn-danger" style="color: #ffffff; height: 34px; font-size:20px;line-height: 24px; margin-top:10px;">Algebra Lessons &raquo;</button></a>' : "3gYoxG84SWU" === a ? (r = '<br><br><br><h3>Learn this lesson</h3><a href="' + u + '" style=""><button type="submit" class="btn btn-danger" style="color: #ffffff; height: 34px; font-size:20px;line-height: 24px; margin-top:10px;">' + i + " &raquo;</button></a>",
                        r = "") : (r = '<br><br><br><a href="' + u + '" style="">Lesson: ' + i + "</a>", r = ""))
                }
                return r
            }, function(e) {
                var t;
                switch (e) {
                    case "isSimpleAddEq":
                        t = {
                            newvid: "qleMwfvwHic",
                            newtitle: "How to Solve Equations Using Subtraction",
                            newlink: "/algebra-lessons/solving-equations-using-subtraction/"
                        };
                        break;
                    case "isSimpleAddEqInt":
                        t = {
                            newvid: "Fj4rSlM3JnE",
                            newtitle: "MathPapa Lesson",
                            newlink: "/basic-algebra/2/"
                        };
                        break;
                    case "isSimpleSubEq":
                        t = {
                            newvid: "3gYoxG84SWU",
                            newtitle: "Solving Equations Using Addition",
                            newlink: "/algebra-lessons/solving-equations-using-addition/"
                        };
                        break;
                    case "isSimpleMultEq":
                        t = {
                            newvid: "DvFOvWMSN3o",
                            newtitle: "How to Solve Equations Using Division",
                            newlink: "/algebra-lessons/solving-equations-using-division/"
                        };
                        break;
                    default:
                        t = {
                            newvid: "",
                            newtitle: "",
                            newlink: ""
                        }
                }
                return t
            })
    }, {}],
    37: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e, t) {
            if ("undefined" != typeof t)
                for (var r = 0; r < t.length; r++) {
                    var n = t[r],
                        o = n[0],
                        a = n[1];
                    if ("append" === o) s.appendOut(e, a);
                    else if ("MDiv" === o) {
                        var u = n[2];
                        if ("undefined" != typeof u && "MTopDiv" === u) {
                            var l = n[3];
                            s.appendOutMTopDiv(e, a, l)
                        } else if ("undefined" != typeof u && "MobDiv" === u) {
                            var c = n[3];
                            try {
                                var h = s.getMobDiv(c);
                                $("#" + e).append(h)
                            } catch (t) {
                                s.appendOutMDiv(e, a)
                            }
                        } else s.appendOutMDiv(e, a)
                    } else if ("MDiva" === o) {
                        var l = n[2];
                        s.viewvars.mobile ? s.appendOutMDiva(e, a, l) : s.appendOutMDiv(e, a, l)
                    } else if ("MDivEq" === o) {
                        var l = n[2];
                        s.viewvars.mobile ? s.appendOutMDiva2(e, "=\\,\\,\\," + a, l) : s.appendOutMDiva2(e, "=" + a, l)
                    } else if ("MDivSmall" === o) {
                        var l = n[2];
                        s.viewvars.mobile ? s.appendOutMDiva2(e, a, l) : s.appendOutMDiva2(e, a, l)
                    } else if ("MDiv2" === o) s.appendOutMDiv(e, a, n[2]);
                    else if ("stepstr" === o) {
                        var u = n[2];
                        s.appendOutMyMsg(e, a, u)
                    } else if ("msgstr" === o) {
                        var u = n[2];
                        s.appendOutMyMsg(e, a, u)
                    } else if ("emsgstr" === o) {
                        var u = n[2];
                        i.mobmode() || s.appendOutMyMsg(e, '<font color="red">Please visit the <a href="/calc/examples/">examples page</a> to see what the calculator currently supports.</font>', u)
                    } else if ("graph" === o) {
                        var d = n[2];
                        s.viewvars.mobile ? p.drawGraphsId(a, "gridm") : "number" == typeof d ? p.drawGraphsIdW(a, "grid2", d) : p.drawGraphsId(a, "grid2")
                    } else if ("windowedit" === o) {
                        var u = n[2],
                            m = a;
                        p.goodWindow(m) ? p.windowEdit(m) : (m = [
                            [-10, 10],
                            [-10, 10]
                        ], p.windowEdit(m), s.appendOutMyMsg(e, '<font color="red" style="line-height:30px">Sorry, I don\'t understand your window size.</font>', u))
                    } else if ("drawFraction" === o) s.viewvars.mobile || f.drawFraction.apply(this, a.concat([e]));
                    else if ("drawFractions" === o) s.viewvars.mobile || f.drawFractions.apply(this, a.concat([e]));
                    else if ("drawMultiPie" === o) s.viewvars.mobile || f.drawMultiPie.apply(this, a.concat([e]));
                    else if ("showNumberLine" === o) i.mobmode() || v.showNumberLine.apply(this, a);
                    else if ("showNumberOnLine" === o) i.mobmode() || v.showNumberOnLine.apply(this, a);
                    else if ("drawSegs" === o) {
                        var y = a;
                        i.mobmode() && g.tryDrawSegs2(y)
                    } else "eof" === o && s.viewvars.mobile && s.appendOut(e, "Entrer une équation ou une expression.")
                }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.appendPrintList = o;
        var a = e(35),
            i = n(a),
            u = e(38),
            s = n(u),
            l = e(17),
            f = n(l),
            c = e(20),
            p = n(c),
            h = e(23),
            v = n(h),
            d = e(18),
            g = n(d),
            m = {};
        m.appendPrintList = o
    }, {}],
    38: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            return ["msgstr", e, "MHeadDiv"]
        }

        function a(e, t) {
            l.mobile ? f(e, p(t)) : f(e, d(t))
        }

        function i(e, t, r) {
            "undefined" == typeof r ? a(e, t) : "MHeadDiv" === r ? m(e, t) : "MHeadDiv2" === r ? y(e, t) : a(e, t)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.appendOutSmallDiv = r.printOutSmallDiv = r.appendOutDiv2 = r.appendOutDiv = r.appendOutMDiv2 = r.appendOutMHeadDiv2 = r.appendOutMHeadDiv = r.appendOutMTopDiv = r.appendOutMStrDiv = r.appendOutMDiva2 = r.appendOutMDiva = r.appendOutMDiv = r.getMobDiv = r.appendOutCodeDiv = r.appendOutM = r.appendOutCode = r.printOutMDiv2 = r.printOutMDiv = r.printOutCodeDiv = r.printOutCode = r.printOutDiv = r.makeCodeStr = r.makeSmallDivStr = r.makeSmallStr = r.makeDiv2Str = r.makeDivStr = r.printOut = r.appendOut = r.viewvars = void 0, r.mHeadDivAns = o, r.appendOutInnerMsg = a, r.appendOutMyMsg = i;
        var u = e(35),
            s = n(u),
            l = r.viewvars = {
                mobile: !1
            },
            f = r.appendOut = function(e, t) {
                $("#" + e).html($("#" + e).html() + t)
            },
            c = r.printOut = function(e, t) {
                $("#" + e).html(t)
            },
            p = r.makeDivStr = function(e) {
                return '<div class="vspacediv">' + e + "</div>"
            },
            h = r.makeDiv2Str = function(e) {
                return '<div class="">' + e + "</div>"
            },
            v = r.makeSmallStr = function(e) {
                return s.mobmode() ? "<span style='font-size: 18px'>" + e + "</span>" : "<span style='font-size: 24px'>" + e + "</span>"
            },
            d = r.makeSmallDivStr = function(e) {
                return p(v(e))
            },
            g = r.makeCodeStr = function(e) {
                return "<code>" + e + "</code>"
            },
            m = (r.printOutDiv = function(e, t) {
                c(e, p(t))
            }, r.printOutCode = function(e, t) {
                c(e, g(t))
            }, r.printOutCodeDiv = function(e, t) {
                c(e, p(g(t)))
            }, r.printOutMDiv = function(e, t) {
                var r = M(t),
                    n = $("<div />", {
                        class: "vspacediv"
                    }).append(r);
                $("#" + e).empty().append(n)
            }, r.printOutMDiv2 = function(e, t) {
                var r = M(t),
                    n = $("<div />", {
                        class: "vspacediv2"
                    }).append(r);
                $("#" + e).empty().append(n)
            }, r.appendOutCode = function(e, t) {
                f(e, g(t))
            }, r.appendOutM = function(e, t) {
                var r = M(t);
                $("#" + e).append(r)
            }, r.appendOutCodeDiv = function(e, t) {
                f(e, p(g(t)))
            }, r.getMobDiv = function(e) {
                for (var t = $("<div />", {
                        class: "vspacediv"
                    }), r = 0; r < e.length; r++) {
                    var n, o = e[r];
                    n = 0 === r ? s.mobmode() ? '<span style="margin-right: 5px; font-size: 18px">' + o + "</span>" : '<span style="margin-right: 10px; font-size: 24px">' + o + "</span>" : r % 2 === 0 ? s.mobmode() ? '<span style="margin-left: 5px; margin-right: 5px; font-size: 18px">' + o + "</span>" : '<span style="margin-left: 10px; margin-right: 10px; font-size: 24px">' + o + "</span>" : M(o), t = t.append(n)
                }
                return t
            }, r.appendOutMDiv = function(e, t, r) {
                void 0 === r && (r = "");
                var n, o = M(t);
                n = s.mobmode() ? '<span style="font-size: 18px; margin-left: 10px;">' + r + "</span>" : '<span style="font-size: 20px; margin-left: 10px;">' + r + "</span>";
                var a = $("<div />", {
                    class: "vspacediv"
                }).append(o).append(n);
                $("#" + e).append(a)
            }, r.appendOutMDiva = function(e, t, r) {
                void 0 === r && (r = "");
                var n = M(t),
                    o = '<span style="margin-left: 10px;">' + r + "</span>",
                    a = $("<div />", {
                        class: "vspacediv"
                    }).append(n).append(o);
                $("#" + e).append(a)
            }, r.appendOutMDiva2 = function(e, t, r) {
                void 0 === r && (r = "");
                var n = M(t),
                    o = '<span style="margin-left: 20px; font-size: 16px;">' + r + "</span>",
                    a = $("<div />", {
                        class: "vspacediv"
                    }).append(n).append(o);
                $("#" + e).append(a)
            }, r.appendOutMStrDiv = function(e, t, r, n) {
                void 0 === r && (r = ""), void 0 === n && (n = "");
                var o = M(t),
                    a = $("<div />", {
                        class: "vspacediv2"
                    }).append(r).append(o).append(n);
                $("#" + e).append(a)
            }, r.appendOutMTopDiv = function(e, t, r, n) {
                void 0 === r && (r = ""), void 0 === n && (n = "");
                var o, a = M(t);
                s.mobmode() ? (o = $("<div />", {
                    class: "vspacediv2"
                }).append('<span style="font-size: 18px; margin-right: 5px; line-height: 30px;">' + r + " </span>").append(a).append(n), $("#" + e).append(o)) : (o = $("<div />", {
                    class: "vspacediv2"
                }).append('<span style="font-size: 24px; margin-right: 5px; line-height: 30px;">' + r + " </span>").append(a).append(n), $("#" + e).append(o))
            }, r.appendOutMHeadDiv = function(e, t) {
                void 0 === t && (t = "");
                var r = $("<div />", {
                    class: "",
                    style: "margin-bottom: 5px;"
                }).append('<span style="font-size: 16px; margin-left: 0px; margin-right: 5px; line-height: 30px;"><u>' + t + "</u></span>");
                $("#" + e).append(r)
            }),
            y = r.appendOutMHeadDiv2 = function(e, t) {
                void 0 === t && (t = "");
                var r = $("<div />", {
                    class: ""
                }).append('<span style="font-size: 16px; margin-left: 0px; margin-right: 5px; line-height: 30px;"><u>' + t + "</u></span>");
                $("#" + e).append(r)
            };
        r.appendOutMDiv2 = function(e, t) {
            var r = M(t),
                n = $("<div />", {
                    class: "vspacediv2"
                }).append(r);
            $("#" + e).append(n)
        }, r.appendOutDiv = function(e, t) {
            f(e, p(t))
        }, r.appendOutDiv2 = function(e, t) {
            f(e, h(t))
        }, r.printOutSmallDiv = function(e, t) {
            c(e, d(t))
        }, r.appendOutSmallDiv = function(e, t) {
            f(e, d(t))
        }
    }, {}],
    39: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e, t, r) {
            "undefined" == typeof r && (r = c);
            for (var n = [], o = 0; o < e.length; o++) {
                var a = e[o],
                    i = a[0];
                if ("step" === i) {
                    var u = r(a, t);
                    n = n.concat(u.printList), t = u.stepnum
                } else if ("msg" === i) {
                    var s = a[1];
                    n.push(["msgstr", s])
                } else if ("emsg" === i) {
                    var s = a[1];
                    n.push(["emsgstr", s])
                } else if ("mmsg" === i) {
                    var s = a[1];
                    n.push(["MDiv", s])
                } else if ("mmsga" === i) {
                    var s = a[1],
                        p = a[2];
                    n.push(["MDiva", s, p])
                } else if ("ans" === i) {
                    n.push(["append", f("<hr>")]), n.push(["msgstr", "<u>Réponse:</u>"]);
                    var h = a[1],
                        v = l(h);
                    n.push(["MDiv", v])
                } else if ("ansmsg" === i) {
                    n.push(["append", f("<hr>")]), n.push(["msgstr", "<u>Réponse:</u>"]);
                    var s = a[1];
                    n.push(["msgstr", s])
                }
            }
            return [n, t]
        }

        function a(e, t) {
            for (var r = [], n = 0; n < e.length; n++) {
                var o = e[n],
                    a = o[0];
                if ("step" === a) {
                    var i = p(o, t);
                    r = r.concat(i.printList), t = i.stepnum
                } else if ("msg" === a) {
                    var u = o[1],
                        s = o[2];
                    r.push(["msgstr", u, s])
                } else if ("mmsg" === a) {
                    var u = o[1];
                    r.push(["MDiv", u])
                } else if ("mobmsg" === a) {
                    var u = o[1],
                        l = o[2],
                        f = o[3];
                    r.push(["MDiv", u, l, f])
                }
            }
            return [r, t]
        }

        function i(e, t, r) {
            var n;
            n = "undefined" == typeof r ? o(e, t, r) : o(e, t);
            var a = n[0];
            return a
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.makeDivStr = void 0, r.getPrintListR = o, r.getPrintListR2 = a, r.getPrintList = i;
        var u = e(40),
            s = n(u),
            l = s.exprToText,
            f = r.makeDivStr = function(e) {
                return '<div class="vspacediv">' + e + "</div>"
            },
            c = function(e, t) {
                var r = [],
                    n = e[1],
                    o = l(n),
                    a = e[2];
                if (void 0 !== a && "" !== a) {
                    var i = "Step " + t + ": " + a + ".";
                    r.push(["stepstr", i]), t += 1
                }
                return void 0 !== o && "" !== o && r.push(["MDiv", o]), {
                    printList: r,
                    stepnum: t
                }
            },
            p = function(e, t) {
                var r = [],
                    n = e[1],
                    o = l(n),
                    a = e[2];
                return void 0 !== a && "" !== a ? r.push(["MDiva", o, "(" + a + ")"]) : r.push(["MDiv", o]), {
                    printList: r,
                    stepnum: t
                }
            },
            h = {};
        h.makeDivStr = f, h.getPrintListR = o, h.getPrintListR2 = a, h.getPrintList = i
    }, {}],
    40: [function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function a(e, t) {
            return t.indexOf(e)
        }

        function i(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = l(i);
                return n[t](r)
            }
            return (0, j.constant)(e)
        }

        function u(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = l(u);
                return n[t](r)
            }
            return e.polyToExpr()
        }

        function s(e, t, r) {
            var n = [];
            n = t.map(function(e) {
                return r(e)
            });
            var o = [e];
            return o = o.concat(n)
        }

        function l(e) {
            var t = function(t) {
                    return s("*", t, e)
                },
                r = {
                    color: function t(r) {
                        var t = r[0],
                            n = r[1];
                        return ["color", t, e(n)]
                    },
                    "+": function(t) {
                        return s("+", t, e)
                    },
                    "-": function(t) {
                        return s("-", t, e)
                    },
                    "*": t,
                    "/": function(t) {
                        return s("/", t, e)
                    },
                    "^": function(t) {
                        return s("^", t, e)
                    },
                    space: function(t) {
                        return s("space", t, e)
                    },
                    frac: function(t) {
                        return s("frac", t, e)
                    },
                    dfrac: function(t) {
                        return s("dfrac", t, e)
                    },
                    sqrt: function(t) {
                        return s("sqrt", t, e)
                    },
                    sin: function(t) {
                        return s("sin", t, e)
                    },
                    cos: function(t) {
                        return s("cos", t, e)
                    },
                    tan: function(t) {
                        return s("tan", t, e)
                    },
                    log: function(t) {
                        return s("log", t, e)
                    },
                    ln: function(t) {
                        return s("ln", t, e)
                    },
                    "=": function(t) {
                        return s("=", t, e)
                    },
                    simplify: function(t) {
                        return s("simplify", t, e)
                    },
                    "?": function(t) {
                        return s("?", t, e)
                    },
                    "!": function(t) {
                        return s("!", t, e)
                    },
                    abs: function(t) {
                        return s("abs", t, e)
                    },
                    var: function(e) {
                        var t = e[0],
                            r = t + "1",
                            n = {};
                        return n[r] = _.default.fracnum(1), new G.default(n)
                    },
                    "+-": function(t) {
                        return s("+-", t, e)
                    },
                    "*show": t,
                    "*paren": t
                };
            return r
        }

        function f(e) {
            var t = {
                color: function t(r) {
                    var t = r[0],
                        n = r[1];
                    return "\\cl " + t + " {" + e(n) + "}"
                },
                color2: function(t) {
                    var r = (t[0], t[1]);
                    return e(r)
                },
                simplify: function(t) {
                    var r = t[0];
                    return e(r)
                },
                "!": function(t) {
                    var r = t[0];
                    return r instanceof Array ? "(" + e(r) + ")!" : e(r) + "!"
                },
                eof: function(e) {
                    return ""
                },
                pt: function(t) {
                    var r = t[0],
                        n = t[1];
                    return "(" + e(r) + ", " + e(n) + ")"
                },
                space: function(t) {
                    var r = t[0],
                        n = t[1],
                        o = "";
                    if ("/" == n[0]) {
                        var a = e(n[1]),
                            i = e(n[2]);
                        o = "{" + a + "}/{" + i + "}"
                    } else if ("simplify" == n[0] && n[1] instanceof Array && "/" == n[1][0]) {
                        var a = e(n[1][1]),
                            i = e(n[1][2]);
                        o = "{" + a + "}/{" + i + "}"
                    } else o = e(n);
                    var u = H(r);
                    return u >= 0 ? "" + u.toString() + " " + o : "-" + (-u).toString() + " " + o
                },
                "@": function(t) {
                    var r = t[0],
                        n = t[1];
                    return e(r) + "\\,\\, @ \\,\\," + e(["color", "purple", n])
                },
                "+": function(t) {
                    var r = t.filter(function(e) {
                        return null != e
                    });
                    r = r.map(function(t) {
                        var r, n = t;
                        switch (h(n)) {
                            default:
                                r = !1
                        }
                        return t = e(t), r && (t = "(" + t + ")"), ("-" != t.substring(0, 1) || r) && (t = "+" + t), t
                    });
                    var n = r.join("");
                    return "+" == n.substring(0, 1) ? n.substring(1) : n
                },
                "+my": function(t) {
                    var r = t.filter(function(e) {
                        return null != e
                    });
                    r = r.map(function(t) {
                        var r, n = t;
                        switch (h(n)) {
                            case "*":
                                r = v(t);
                                break;
                            default:
                                r = !1
                        }
                        return t = e(t), r && (t = "(" + t + ")"), ("-" != t.substring(0, 1) || r) && (t = "+" + t), t
                    });
                    var n = r.join("");
                    return "+" == n.substring(0, 1) ? n.substring(1) : n
                },
                "-": function(t) {
                    if (1 === t.length) {
                        var r = ["*old", -1, t[0]];
                        return e(r)
                    }
                    for (var n = [], o = 0; o < t.length; o++) {
                        var a, i = t[o],
                            u = i,
                            s = d(u);
                        switch (h(u)) {
                            case "+":
                            case "-":
                                a = o > 0;
                                break;
                            default:
                                a = !1
                        }
                        i = e(i), (s && o > 0 || a) && (i = "(" + i + ")"), n.push(i)
                    }
                    var l = n.join("-");
                    return l
                },
                "*old": function(t) {
                    var r = Array.prototype.slice.call(t, 1);
                    if (r.unshift("*"), 1 == t[0] && r.length > 1) return e(r);
                    if (t[0] == -1 && r.length > 1) {
                        var n = e(r);
                        return d(r[1]) ? "-(" + n + ")" : "-" + n
                    }
                    return e(["*"].concat(t))
                },
                "*": function(t) {
                    var r = ["*"];
                    if (r = r.concat(t), t.length > 1) {
                        for (var n = new RegExp("\\d"), o = n.test(e(t[1]).substring(0, 1)), a = "number" == h(t[0]) && "number" == h(t[1]), i = [], u = 0; u < t.length; u++) {
                            var s = t[u],
                                l = !1;
                            switch (h(s)) {
                                case "number":
                                    u > 0 && (l = !0);
                                    break;
                                case "/":
                                    l = u > 0;
                                    break;
                                case "?":
                                    l = !0;
                                    break;
                                default:
                                    l = !g(s) || 1 == u && o
                            }
                            a || (a = l), s = e(s), a && (s = "(" + s + ")"), i.push(s)
                        }
                        return i.join("")
                    }
                    return e(t[0])
                },
                "*show": function(t) {
                    var r = ["*"];
                    if (r = r.concat(t), t.length > 1) {
                        for (var n = "number" == h(t[0]) && "number" == h(t[1]), o = [], a = 0; a < t.length; a++) {
                            var i = t[a],
                                u = !1;
                            switch (h(i)) {
                                case "number":
                                    a > 0 && (u = !0);
                                    break;
                                default:
                                    u = !g(i)
                            }
                            n || (n = u), i = e(i), n && (i = "(" + i + ")"), o.push(i)
                        }
                        return o.join("*")
                    }
                    return e(t[0])
                },
                "*paren": function(t) {
                    var r = ["*"];
                    if (r = r.concat(t), t.length > 1) {
                        for (var n = [], o = 0; o < t.length; o++) {
                            var a = t[o];
                            a = e(a), a = "(" + a + ")", n.push(a)
                        }
                        return n.join("")
                    }
                    return "(" + e(t[0]) + ")"
                },
                times: function(t) {
                    var r = t[0],
                        n = t[1],
                        o = !g(r),
                        a = !g(n);
                    return r = e(r), n = e(n), r = o ? "(" + r + ")" : r, n = a ? "(" + n + ")" : n, r + " \\times " + n
                },
                "/": function(t) {
                    var r = t[0],
                        n = t[1],
                        o = !1,
                        a = !1;
                    return r = e(r), n = e(n), r = o ? "(" + r + ")" : r, n = a ? "(" + n + ")" : n, "\\,{" + r + "}/{" + n + "}\\,"
                },
                "/h": function(t) {
                    var r = t[0],
                        n = t[1],
                        o = !y(r),
                        a = !y(n);
                    return r = e(r), n = e(n), r = o ? "(" + r + ")" : r, n = a ? "(" + n + ")" : n, "" + r + "/" + n
                },
                frac: function(t) {
                    var r = t[0],
                        n = t[1];
                    return "\\frac{" + e(r) + "}{" + e(n) + "}"
                },
                dfrac: function(t) {
                    var r = t[0],
                        n = t[1];
                    return "{" + e(r) + "}/{" + e(n) + "}"
                },
                "^": function(t) {
                    var r = t[0],
                        n = t[1],
                        o = m(r),
                        a = o[0];
                    o[1];
                    return r = b(r, a, e), n = e(n), r + "^{" + n + "}"
                },
                "^h": function(t) {
                    var r = t[0],
                        n = t[1],
                        o = m(r),
                        a = o[0];
                    o[1];
                    return r = b(r, a, e), n = e(n), r + "^" + n
                },
                sqrt: function(t) {
                    var r = t[0];
                    return "√{" + e(r) + "}"
                },
                sin: function(t) {
                    var r = t[0];
                    return "\\sin{" + q(r, e) + "}"
                },
                cos: function(t) {
                    var r = t[0];
                    return "\\cos{" + q(r, e) + "}"
                },
                tan: function(t) {
                    var r = t[0];
                    return "\\tan{" + q(r, e) + "}"
                },
                sec: function(t) {
                    var r = t[0];
                    return "\\sec{" + q(r, e) + "}"
                },
                csc: function(t) {
                    var r = t[0];
                    return "\\sec{" + q(r, e) + "}"
                },
                cot: function(t) {
                    var r = t[0];
                    return "\\sec{" + q(r, e) + "}"
                },
                ln: function(t) {
                    var r = t[0];
                    return "\\ln{" + q(r, e) + "}"
                },
                log: function(t) {
                    var r = t[0];
                    return "\\log{" + q(r, e) + "}"
                },
                abs: function(t) {
                    var r = t[0];
                    return "|" + e(r) + "|"
                },
                var: function(e) {
                    var t = e[0];
                    return t
                },
                "?": function(e) {
                    return "\\cl red {?}"
                },
                "=": function(t) {
                    var r = t[0],
                        n = t[1];
                    return e(r) + " = " + e(n)
                },
                ">": function(t) {
                    var r = t[0],
                        n = t[1];
                    return e(r) + " > " + e(n)
                },
                "<": function(t) {
                    var r = t[0],
                        n = t[1];
                    return e(r) + " < " + e(n)
                },
                ">=": function(t) {
                    var r = t[0],
                        n = t[1];
                    return e(r) + " ≥ " + e(n)
                },
                "<=": function(t) {
                    var r = t[0],
                        n = t[1];
                    return e(r) + " ≤ " + e(n)
                },
                comp: function(t) {
                    var r = t[0],
                        n = t[1],
                        o = t[2];
                    return ">" == n ? e(r) + " > " + e(o) : "<" == n ? e(r) + " < " + e(o) : ">=" == n ? e(r) + " ≥ " + e(o) : e(r) + " ≤ " + e(o)
                },
                and: function(t) {
                    var r = t[0],
                        n = t[1];
                    return e(r) + "\\,\\,\\text' et '\\,\\," + e(n)
                },
                or: function(t) {
                    var r = t[0],
                        n = t[1];
                    return e(r) + "\\,\\,\\text' ou '\\,\\," + e(n)
                },
                ";": function(t) {
                    var r = t[0],
                        n = t[1];
                    return e(r) + " ; " + e(n)
                },
                ",": function(t) {
                    var r = t[0],
                        n = t[1];
                    return null == n ? e(r) + " , " : e(r) + " , " + e(n)
                },
                "+-": function(t) {
                    return 1 == t.length ? "\\pm " + q(t[0], e) : t.map(e).join(" \\pm ")
                }
            };
            return t
        }

        function c(e) {
            var t = f(e);
            return t["="] = function(t) {
                var r = t[0],
                    n = t[1];
                return e(r) + " {\\,=↖{?}\\,} " + e(n)
            }, t
        }

        function p(e) {
            var t = f(e);
            return t["="] = function(e) {
                var t = e[0],
                    r = e[1],
                    n = $(H(t)),
                    o = $(H(r));
                return n === o ? n + " \\cl green {=} " + o : n + " \\cl red {\\≠\\,} " + o
            }, t[">"] = function(e) {
                var t = e[0],
                    r = e[1],
                    n = $(H(t)),
                    o = $(H(r));
                return n > o ? n + " \\cl green {>} " + o : n + " \\cl red {\\≯\\,} " + o
            }, t[">="] = function(e) {
                var t = e[0],
                    r = e[1],
                    n = $(H(t)),
                    o = $(H(r));
                return n >= o ? n + " \\cl green {≥} " + o : n + " \\cl red {\\≱\\,} " + o
            }, t["<"] = function(e) {
                var t = e[0],
                    r = e[1],
                    n = $(H(t)),
                    o = $(H(r));
                return n < o ? n + " \\cl green {<} " + o : n + " \\cl red {\\≮\\,} " + o
            }, t["<="] = function(e) {
                var t = e[0],
                    r = e[1],
                    n = $(H(t)),
                    o = $(H(r));
                return n <= o ? n + " \\cl green {≤} " + o : n + " \\cl red {\\≰\\,} " + o
            }, t
        }

        function h(e) {
            return e instanceof Array ? "color" == e[0] ? h(e[2]) : "simplify" == e[0] ? h(e[1]) : "-" == e[0] && 2 == e.length && "number" == h(e[1]) ? "number" : e[0] : "number" == typeof e ? "number" : "string" == typeof e ? "string" : "other"
        }

        function v(e) {
            var t = e[1];
            switch (h(t)) {
                case "*":
                    return v(t);
                case "-":
                    return 2 == t.length;
                case "number":
                    return H(t) < 0;
                case "string":
                    return "-" == t.substring(0, 1);
                default:
                    return !1
            }
        }

        function d(e) {
            switch (h(e)) {
                case "color":
                    return d(e[2]);
                case "simplify":
                    return d(e[1]);
                case "/":
                    return d(e[1]);
                case "+":
                case "-":
                    return !0;
                case "number":
                    return H(e) < 0;
                case "string":
                    return "-" == e.substring(0, 1);
                default:
                    return !1
            }
        }

        function g(e) {
            switch (h(e)) {
                case "color":
                    return g(e[2]);
                case "simplify":
                    return g(e[1]);
                case "+":
                case "-":
                case "/":
                case "frac":
                case "dfrac":
                    return !1;
                case "^":
                    return "number" != h(e[1]) || H(e[1]) < 0;
                case "number":
                    return H(e) >= 0;
                case "*":
                    return !(v(e) || e[1] instanceof Array && "/" == e[1][0]);
                case "var":
                case "sqrt":
                    return !0;
                default:
                    return e.length <= 1
            }
        }

        function m(e) {
            var t, r;
            switch (h(e)) {
                case "+":
                case "-":
                case "*":
                case "/":
                case "^":
                case "ln":
                case "dfrac":
                case "sqrt":
                    t = !0;
                    break;
                case "number":
                    t = H(e) < 0;
                    break;
                case "color":
                    t = m(e[2]);
                    break;
                case "simplify":
                    t = m(e[1]);
                    break;
                case "sin":
                case "cos":
                case "tan":
                case "csc":
                case "sec":
                case "cot":
                    t = !1, r = !0;
                    break;
                default:
                    t = !1, r = !1
            }
            return [t, r]
        }

        function y(e) {
            switch (h(e)) {
                case "color":
                    return y(e[2]);
                case "simplify":
                    return y(e[1]);
                case "+":
                case "-":
                case "/":
                case "frac":
                case "dfrac":
                case "*":
                    return !1;
                case "^":
                    return "number" != h(e[1]) || e[1] < 0;
                case "number":
                    return H(e) >= 0;
                case "var":
                case "sqrt":
                    return !0;
                default:
                    return e.length <= 1
            }
        }

        function x(e, t) {
            return "dfrac" == h(e) ? "(" + t(e) + ")" : "(" + t(e) + ")"
        }

        function b(e, t, r) {
            return t ? x(e, r) : r(e)
        }

        function q(e, t) {
            return x(e, t)
        }

        function E(e) {
            var t = u(e);
            return M(t)
        }

        function M(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = f(M);
                return n[t](r)
            }
            return "number" == typeof e ? I.numStr(e) : e.toString()
        }

        function w(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = f(w);
                return n["/"] = n["/h"], n["^"] = n["^h"], n[t](r)
            }
            return "number" == typeof e ? I.numStr(e) : e.toString()
        }

        function T(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = f(T);
                return n["/"] = n["/h"], n["^"] = n["^h"], n.color = n.color2, n[t](r)
            }
            return "number" == typeof e ? I.numStr(e) : e.toString()
        }

        function D(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = c(D);
                return n[t](r)
            }
            return "number" == typeof e ? I.numStr(e) : e.toString()
        }

        function S(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = p(S);
                return n[t](r)
            }
            return "number" == typeof e ? I.numStr(e) : e.toString()
        }

        function k(e, t) {
            var r, n = "=";
            return r = 0 == t.maxDegree() ? t.getNum() : t.getNonConst().getNum(), "=" == e ? n = "=" : r >= 0 ? n = e : ">" == e ? n = "<" : "<" == e ? n = ">" : ">=" == e ? n = "<=" : "<=" == e ? n = ">=" : "≤" == e ? n = "≥" : "≥" == e && (n = "≤"), n
        }

        function C(e) {
            if (e.noDenom()) {
                var t = N(e.coefs);
                return new G.default(t)
            }
            var r = N(e.dcoefs),
                t = N(e.coefs),
                n = G.default.MF(t, r),
                o = V(n);
            return o
        }

        function V(e) {
            if (1 != G.default.maxDegreeOfCoefs(e.dcoefs)) return e;
            var t = new G.default(e.coefs),
                r = new G.default(e.dcoefs),
                n = r.getCoefFromInt(1),
                o = r.getCoefFromInt(0),
                a = {};
            a.i1 = n.multiply(_.default.fracnum(-1)), a[0] = o;
            var i = new G.default(a),
                u = r.multiply(i),
                s = t.multiply(i),
                l = N(u.coefs),
                f = N(s.coefs),
                c = G.default.MF(f, l);
            return c
        }

        function N(e) {
            var t = {};
            for (var r in e) {
                var n = G.default.getDegreeMap(r),
                    o = n.i,
                    a = e[r],
                    i = {};
                if (null != o && o > 1) {
                    var u = Math.floor(o / 2),
                        s = {
                            i: 2 * u
                        };
                    i = G.default.reduceDegrees(n, s), a = a.multiply(_.default.fracnum(Math.pow(-1, u)))
                } else i = n;
                var l = G.default.degreeMapToIndex(i);
                null == t[l] ? t[l] = a : t[l] = t[l].add(a)
            }
            return t
        }

        function P(e) {
            var t = [];
            for (var r in e) 0 != e[r].getNum() && t.push(r);
            return t
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.inArray = a, r.exprToVisit1 = i, r.visit1ToExpr = u, r.makeVisitorOperators = l, r.myExprType = h, r.myExprIsShort = g, r.myexprParenthesize = q, r.visit1ToText = E, r.exprToText = M, r.exprToTextH = w, r.exprToTextC = T, r.exprToTextQ = D, r.exprToTextN = S, r.signTransform = k, r.polyImagReduce = C, r.getNonzeroKeys = P;
        var L = e(5),
            F = o(L),
            O = e(41),
            A = (o(O), e(45)),
            I = o(A),
            R = e(10),
            _ = n(R),
            j = e(43),
            G = n(j),
            H = F.evalExpr,
            $ = I.roundPrec
    }, {}],
    41: [function(e, t, r) {
        "use strict";

        function n(e) {
            return "number" == typeof e && e % 1 === 0
        }

        function o(e) {
            if (e.length > 2) {
                var t = [].slice.call(e, 1);
                return o([e[0], o(t)])
            }
            if (2 === e.length) {
                var r, a = e[0],
                    i = e[1];
                if (a = Math.abs(a), i = Math.abs(i), !n(a) || !n(i)) return 1;
                if (0 == a) return i;
                if (0 == i) return a;
                for (; i >= 1;) r = a % i, a = i, i = r;
                return a
            }
            return 1 === e.length ? Math.abs(e[0]) : 0
        }

        function a(e) {
            if (e.length > 2) {
                var t = [].slice.call(e, 1);
                return a([e[0], a(t)])
            }
            if (2 === e.length) {
                var r = e[0],
                    n = e[1];
                return Math.abs(r * n) / o([r, n])
            }
            return 1 === e.length ? e[0] : 1
        }

        function i(e, t) {
            var r = o([e, t]);
            return e /= r, t /= r, [e, t]
        }

        function u(e, t) {
            return o([e, t]) > 1
        }

        function s(e) {
            var t = e.filter(function(t, r) {
                return e.indexOf(t) === r
            });
            return t
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.isInt = n, r.getGCD = o, r.getLCM = a, r.reduce = i, r.reduces = u, r.dedup = s
    }, {}],
    42: [function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e) {
            var t = [];
            return t.push("*"), t = t.concat(e), g(t)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.PolyFraction = void 0;
        var u = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }();
        r.polylistToExpr = i;
        var s = e(40),
            l = o(s),
            f = e(6),
            c = o(f),
            p = e(9),
            h = o(p),
            v = e(43),
            d = (n(v), c.exprToPoly),
            g = l.visit1ToExpr;
        r.PolyFraction = function() {
            function e(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                a(this, e), this.numer = t, this.denom = r
            }
            return u(e, [{
                key: "fracToExpr",
                value: function() {
                    var e, t = i(this.numer);
                    if (0 == this.denom.length) e = t;
                    else {
                        var r = i(this.denom);
                        e = ["/", t, r]
                    }
                    return e
                }
            }, {
                key: "factorDenom",
                value: function() {
                    return 1 == this.denom.length ? new e(this.numer, h.getFactorSmallPolylist(this.denom[0])) : new e(this.numer, this.denom)
                }
            }, {
                key: "factorBoth",
                value: function() {
                    var t;
                    t = 1 == this.numer.length ? h.getFactorSmallPolylist(this.numer[0]) : this.numer;
                    var r;
                    return r = 1 == this.denom.length ? h.getFactorSmallPolylist(this.denom[0]) : this.denom, new e(t, r)
                }
            }, {
                key: "multOrCancel",
                value: function(t) {
                    var r = [];
                    r = r.concat(this.numer);
                    var n = [],
                        o = !1;
                    if (this.denom.forEach(function(e) {
                            var r = e.equalpoly(t);
                            r && !o ? o = !0 : n.push(e)
                        }), o) return new e(r, n);
                    var a = [],
                        i = !1,
                        u = t.multiply((0, v.constant)(-1));
                    return this.denom.forEach(function(e) {
                        var t = e.equalpoly(u);
                        t && !i ? (i = !0, r.push((0, v.constant)(-1))) : a.push(e)
                    }), i || r.push(t), new e(r, a)
                }
            }, {
                key: "multOrCancelList",
                value: function(t) {
                    var r = new e(this.numer, this.denom);
                    return t.forEach(function(e) {
                        r = r.multOrCancel(e)
                    }), r
                }
            }], [{
                key: "Numer",
                value: function(t) {
                    return new e(t, [])
                }
            }, {
                key: "exprToPolyFraction",
                value: function(t) {
                    return t instanceof Array && "/" == t[0] && 3 == t.length ? new e([d(t[1])], [d(t[2])]) : e.Numer([d(t)])
                }
            }]), e
        }()
    }, {}],
    43: [function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e) {
            return new v({
                0: h.default.fracnum(e)
            })
        }

        function u() {
            return i(NaN)
        }

        function s(e) {
            return new v({
                0: e
            })
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }();
        r.constant = i, r.polyError = u, r.fracToPoly = s;
        var f = e(41),
            c = o(f),
            p = e(10),
            h = n(p),
            v = function() {
                function e(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            0: h.default.fracnum(1)
                        },
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    a(this, e), this.coefs = t, this.dcoefs = r, this.d1 = n
                }
                return l(e, [{
                    key: "maxDegree",
                    value: function() {
                        return e.maxDegreeOfCoefs(this.coefs)
                    }
                }, {
                    key: "findMaxDegree",
                    value: function() {
                        return this.maxDegree()
                    }
                }, {
                    key: "equalpoly",
                    value: function(e) {
                        var t = !1;
                        if (this.maxDegree() == e.maxDegree()) {
                            for (var r = this.maxDegree(), n = 0; n <= r; n++) this.getCoefFromInt(n).getNum() != e.getCoefFromInt(n).getNum() && (t = !0);
                            this.getVariableRaw() != e.getVariableRaw() && (t = !0)
                        } else t = !0;
                        return this.noDenom() == e.noDenom() ? this.noDenom() || this.dcoefs != e.dcoefs && (t = !0) : t = !0, !t
                    }
                }, {
                    key: "jsCoefs",
                    value: function() {
                        var e = {},
                            t = {};
                        for (var r in this.coefs) e[r] = this.coefs[r].fracToArray();
                        for (var r in this.dcoefs) t[r] = this.dcoefs[r].fracToArray();
                        return [e, t]
                    }
                }, {
                    key: "jsCoefs2",
                    value: function() {
                        return [this.coefs, this.dcoefs]
                    }
                }, {
                    key: "getNum",
                    value: function() {
                        return this.getConst().getNum()
                    }
                }, {
                    key: "getConst",
                    value: function() {
                        return 0 != e.pickCoef(this.dcoefs, "0").getNum() ? e.pickCoef(this.coefs, "0").divide(e.pickCoef(this.dcoefs, "0")) : e.pickCoef(this.coefs, "0")
                    }
                }, {
                    key: "getNonConst",
                    value: function() {
                        return 0 != e.pickCoef(this.dcoefs, "0").getNum() ? e.pickNonConstCoef(this.coefs).divide(e.pickCoef(this.dcoefs, "0")) : e.pickNonConstCoef(this.coefs)
                    }
                }, {
                    key: "getCoef",
                    value: function(t) {
                        return e.pickCoef(this.coefs, t)
                    }
                }, {
                    key: "getCoefFromInt",
                    value: function(e) {
                        if (0 == e) return this.getCoef("0");
                        var t = this.getVariableSafe() + e.toString();
                        return this.getCoef(t)
                    }
                }, {
                    key: "getMCoef",
                    value: function(e, t) {
                        if (0 == t) return this.getCoef("0");
                        var r = e + t.toString();
                        return this.getCoef(r)
                    }
                }, {
                    key: "noDenom",
                    value: function() {
                        return 0 == this.d1 || 1 == e.pickCoef(this.dcoefs, "0").getNum() && 1 == e.countCoefsInner(this.dcoefs)
                    }
                }, {
                    key: "isError",
                    value: function() {
                        return isNaN(e.pickCoef(this.coefs, "0").getNum())
                    }
                }, {
                    key: "neg1Denom",
                    value: function() {
                        if (0 == Object.keys(this.dcoefs).length) return !1;
                        for (var t in this.dcoefs)
                            if (e.pickCoef(this.dcoefs, t).getNum() > 0) return !1;
                        return !0
                    }
                }, {
                    key: "isConst",
                    value: function() {
                        return this.noDenom() && 0 != e.pickCoef(this.coefs, "0").getNum() && 1 == e.countCoefsInner(this.coefs)
                    }
                }, {
                    key: "isNum",
                    value: function() {
                        for (var e in this.coefs)
                            if ("0" != e && 0 != this.coefs[e].getNum()) return !1;
                        return !0
                    }
                }, {
                    key: "polyToExprInner",
                    value: function(t) {
                        if (this.noDenom()) return e.coefsToExprInner(this.coefs, t);
                        var r = this.polyReduce();
                        return r.polyToExprInnerHelper(t)
                    }
                }, {
                    key: "polyToExprInnerImag",
                    value: function(t) {
                        if (this.noDenom()) return e.coefsToExprInnerImag(this.coefs, t);
                        var r = this.polyReduce(),
                            n = e.coefsToExprInnerImag(r.coefs, t),
                            o = e.coefsToExprInnerImag(r.dcoefs, t);
                        return ["/", n, o]
                    }
                }, {
                    key: "polyToExprInnerNoReduce",
                    value: function(t) {
                        return this.noDenom() ? e.coefsToExprInner(this.coefs, t) : this.polyToExprInnerHelper(t)
                    }
                }, {
                    key: "polyToExprInnerHelper",
                    value: function(t) {
                        if (this.noDenom()) return e.coefsToExprInner(this.coefs, t);
                        var r = e.coefsToExprInner(this.coefs, t),
                            n = e.coefsToExprInner(this.dcoefs, t);
                        return ["/", r, n]
                    }
                }, {
                    key: "polyToExpr",
                    value: function() {
                        return this.polyToExprInner(h.default.getFracExpr)
                    }
                }, {
                    key: "polyToExprImag",
                    value: function() {
                        return this.polyToExprInnerImag(h.default.getFracExpr)
                    }
                }, {
                    key: "polyToExprMixed",
                    value: function() {
                        return this.polyToExprInner(h.default.getFracExprMixed)
                    }
                }, {
                    key: "polyToExprNoReduce",
                    value: function() {
                        return this.polyToExprInnerNoReduce(h.default.getFracExpr)
                    }
                }, {
                    key: "polyToExprDec",
                    value: function() {
                        return this.polyToExprInner(h.default.fracnum)
                    }
                }, {
                    key: "polyDegReduce",
                    value: function() {
                        var t = this.getPolyMinDegreeMap(),
                            r = e.reduceCoefsDeg(this.dcoefs, t),
                            n = e.reduceCoefsDeg(this.coefs, t);
                        return e.MF(n, r)
                    }
                }, {
                    key: "polyDivideByCommonFactor",
                    value: function() {
                        var e = this.getFactorMinDegreeMap(),
                            t = this.getFactorMinNum(),
                            r = this.polyDivideByDegreeMap(e);
                        return r.divide(i(t))
                    }
                }, {
                    key: "polyDivideByDegreeMap",
                    value: function(t) {
                        var r = this.dcoefs,
                            n = e.reduceCoefsDeg(this.coefs, t),
                            o = e.MF(n, r);
                        return o
                    }
                }, {
                    key: "polyDenomReduce",
                    value: function() {
                        var t = e.getDenomLCM(this.dcoefs),
                            r = e.getDenomLCM(this.coefs),
                            n = e.multCoefsNum(this.dcoefs, r * t),
                            o = e.multCoefsNum(this.coefs, r * t),
                            a = e.MF(o, n);
                        return a.neg1Denom() ? a.polyNeg1Reduce() : a
                    }
                }, {
                    key: "pushDcoefs",
                    value: function() {
                        if (this.noDenom()) return this;
                        var t = new e(this.coefs),
                            r = new e(this.dcoefs);
                        return t.divide(r)
                    }
                }, {
                    key: "polyReduce",
                    value: function() {
                        var e = this.polyDenomReduce();
                        return e.polyDegReduces() && (e = e.polyDegReduce()), e
                    }
                }, {
                    key: "polyNumReduce",
                    value: function() {
                        var t = this.getPolyMinNum(),
                            r = e.reduceCoefsNum(this.dcoefs, t),
                            n = e.reduceCoefsNum(this.coefs, t),
                            o = e.MF(n, r);
                        return o.neg1Denom() ? o.polyNeg1Reduce() : o
                    }
                }, {
                    key: "polyNeg1Reduce",
                    value: function() {
                        var t = e.reduceCoefsNum(this.dcoefs, -1),
                            r = e.reduceCoefsNum(this.coefs, -1);
                        return e.MF(r, t)
                    }
                }, {
                    key: "getPolyMinDegreeMap",
                    value: function() {
                        if (this.noDenom()) return {};
                        var t;
                        for (var r in this.dcoefs) {
                            var n = e.getDegreeMap(r);
                            t = e.getMinDegreeMap(t, n)
                        }
                        for (var r in this.coefs) {
                            var n = e.getDegreeMap(r);
                            t = e.getMinDegreeMap(t, n)
                        }
                        return null == t ? {} : t
                    }
                }, {
                    key: "getFactorMinDegreeMap",
                    value: function() {
                        var t = null;
                        for (var r in this.coefs)
                            if (0 != this.coefs[r].getNum()) {
                                var n = e.getDegreeMap(r);
                                t = e.getMinDegreeMap(t, n)
                            } return null == t ? {} : t
                    }
                }, {
                    key: "countCoefs",
                    value: function() {
                        return e.countCoefsInner(this.coefs)
                    }
                }, {
                    key: "getCommonFactorPoly",
                    value: function() {
                        var t = this.getFactorMinDegreeMap(),
                            r = e.degreeMapToPoly(t),
                            n = this.getFactorMinNum();
                        return r.multiply(i(n))
                    }
                }, {
                    key: "getPolyMinNum",
                    value: function() {
                        if (this.noDenom()) return 1;
                        var t = -1;
                        for (var r in this.dcoefs) {
                            var n = this.dcoefs[r];
                            t = e.getMinNumber(t, n.numer)
                        }
                        for (var r in this.coefs) {
                            var n = this.coefs[r];
                            t = e.getMinNumber(t, n.numer)
                        }
                        return t ? t : 1
                    }
                }, {
                    key: "getFactorMinNum",
                    value: function() {
                        var t = -1;
                        for (var r in this.coefs) {
                            var n = this.coefs[r];
                            t = c.isInt(n.getNum()) ? e.getMinNumber0(t, n.numer) : 1
                        }
                        return c.isInt(t) && 0 != t ? t : 1
                    }
                }, {
                    key: "polyDegReduces",
                    value: function() {
                        var e = this.getPolyMinDegreeMap();
                        return Object.keys(e).length > 0
                    }
                }, {
                    key: "hasCommonFactor",
                    value: function() {
                        var e = this.getFactorMinDegreeMap();
                        return Object.keys(e).length > 0 && this.countCoefs() > 1
                    }
                }, {
                    key: "polyNumReduces",
                    value: function() {
                        var e = this.getPolyMinNum();
                        return e > 1 || !!this.neg1Denom()
                    }
                }, {
                    key: "getCIndex",
                    value: function() {
                        var e = "0";
                        for (var t in this.coefs) "0" != t && 0 != this.coefs[t].getNum() && (e = t);
                        return e
                    }
                }, {
                    key: "countIndex",
                    value: function() {
                        var e = 0;
                        for (var t in this.coefs) 0 != this.coefs[t].getNum() && (e += 1);
                        return e
                    }
                }, {
                    key: "getVars",
                    value: function() {
                        return e.getVarsFromMyCoefs(this.coefs)
                    }
                }, {
                    key: "getVarsTopBottom",
                    value: function() {
                        var t = e.getVarsFromMyCoefs(this.coefs);
                        this.noDenom() || (t = t.concat(e.getVarsFromMyCoefs(this.dcoefs)));
                        var r = c.dedup(t);
                        return r
                    }
                }, {
                    key: "getVariableRaw",
                    value: function() {
                        var t = e.getVarFromCoefs(this.coefs);
                        return "undefined" != typeof t ? t : this.noDenom() ? t : e.getVarFromCoefs(this.dcoefs)
                    }
                }, {
                    key: "getVariable",
                    value: function() {
                        var e = this.getVariableSafe();
                        return e
                    }
                }, {
                    key: "getVariableSafe",
                    value: function() {
                        var e = this.getVariableRaw();
                        return e || (e = "x"), e
                    }
                }, {
                    key: "maxDenomDegree",
                    value: function() {
                        return this.noDenom() ? 0 : e.maxDegreeOfCoefs(this.dcoefs)
                    }
                }, {
                    key: "gcd",
                    value: function e(t) {
                        "number" == typeof t && (t = i(t));
                        var e, r = [];
                        for (var n in this.coefs) {
                            var o = this.getCoef(n),
                                a = Math.abs(o.getNum());
                            if (0 != a) {
                                if (!c.isInt(a)) return 1;
                                r.push(a)
                            }
                        }
                        for (var n in t.coefs) {
                            var o = t.getCoef(n),
                                a = Math.abs(o.getNum());
                            if (0 != a) {
                                if (!c.isInt(a)) return 1;
                                r.push(a)
                            }
                        }
                        return e = 0 == Object.keys(this.coefs).length ? 1 : 1 == Object.keys(this.coefs).length ? r[0] : c.getGCD(r)
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        if (this.isError() || t.isError()) return u();
                        var r, n;
                        if (this.noDenom() && t.noDenom()) return r = e.getAddCoefs(this.coefs, t.coefs), new e(r);
                        if (e.checkSameCoefs(this.dcoefs, t.dcoefs)) return r = e.getAddCoefs(this.coefs, t.coefs), e.MF(r, this.dcoefs);
                        var o = e.getMultCoefs(this.coefs, t.dcoefs),
                            a = e.getMultCoefs(t.coefs, this.dcoefs);
                        return r = e.getAddCoefs(o, a), n = e.getMultCoefs(this.dcoefs, t.dcoefs), e.MF(r, n);
                    }
                }, {
                    key: "subtract",
                    value: function(e) {
                        return this.isError() || e.isError() ? u() : this.add(e.multiply(i(-1)))
                    }
                }, {
                    key: "multiply",
                    value: function(t) {
                        if (this.isError() || t.isError()) return u();
                        var r = {},
                            n = {};
                        if (t.isConst()) {
                            for (var o in this.coefs) r[o] = this.getCoef(o).multiply(t.getConst());
                            return e.MF(r, this.dcoefs)
                        }
                        return r = e.getMultCoefs(this.coefs, t.coefs), n = e.getMultCoefs(this.dcoefs, t.dcoefs), e.MF(r, n)
                    }
                }, {
                    key: "divide",
                    value: function(t) {
                        if (this.isError() || t.isError()) return u();
                        var r = {};
                        if (t.isConst()) {
                            for (var n in this.coefs) r[n] = this.coefs[n].divide(t.getConst());
                            return e.MF(r, this.dcoefs)
                        }
                        var o = e.MF(t.dcoefs, t.coefs);
                        return this.multiply(o)
                    }
                }, {
                    key: "pow",
                    value: function(t) {
                        if (this.isError() || t.isError()) return u();
                        var r;
                        if (!t.isConst()) return u();
                        r = t.getConst();
                        var n = r.getNum();
                        if (this.isConst()) return s(this.getConst().pow(n));
                        var o = i(1);
                        if (Math.abs(n - Math.round(n)) > 1e-4) return u();
                        if (Math.abs(n) > 40) {
                            if (this.noDenom() && 1 == Object.keys(this.coefs).length) {
                                var a = {};
                                for (var l in this.coefs) {
                                    var f = e.createCoefPower(l, n);
                                    a[f] = this.getCoef(l).pow(n)
                                }
                                return new e(a)
                            }
                            return u()
                        }
                        if (n >= 0)
                            for (var l = 0; l < n; l++) o = o.multiply(this);
                        else
                            for (var l = 0; l < -n; l++) o = o.divide(this);
                        return o
                    }
                }], [{
                    key: "PolynomialC",
                    value: function(t) {
                        var r = {
                            0: h.default.fracnum(1)
                        };
                        return new e(t, r, 0)
                    }
                }, {
                    key: "MF",
                    value: function(t, r) {
                        return new e(t, r, 1)
                    }
                }, {
                    key: "makeAPoly",
                    value: function(t, r) {
                        for (var n = {}, o = 0; o < t.length; o++) {
                            var a = t.length - 1 - o,
                                i = t[o];
                            0 != a ? n[r + a.toString()] = h.default.fracnum(i) : n[0] = h.default.fracnum(i)
                        }
                        return e.PolynomialC(n)
                    }
                }, {
                    key: "getDegree",
                    value: function(e) {
                        var t = 0;
                        if ("0" === e) return t;
                        for (var r = e.split(","), n = 0; n < r.length; n++) {
                            var o = r[n],
                                a = parseInt(o.substring(1));
                            t += a
                        }
                        return t
                    }
                }, {
                    key: "pickCoef",
                    value: function(e, t) {
                        var r = e[t];
                        return null == r && (r = h.default.fracnum(0)), r
                    }
                }, {
                    key: "maxDegreeOfCoefs",
                    value: function(t) {
                        var r = 0;
                        for (var n in t) {
                            var o = e.getDegree(n);
                            o > r && 0 != e.pickCoef(t, n).getNum() && (r = o)
                        }
                        return r
                    }
                }, {
                    key: "formatCoefTerm",
                    value: function(e, t, r) {
                        return 1 == e.getNum() ? t : e.getNum() == -1 ? ["-", t] : ["*", r(e), t]
                    }
                }, {
                    key: "getDenomLCM",
                    value: function(e) {
                        var t = [];
                        for (var r in e) t.push(e[r].denom);
                        var n = c.getLCM(t);
                        return n
                    }
                }, {
                    key: "varterm",
                    value: function(t, r) {
                        return e.vartermInner(t, r, h.default.getFracExpr)
                    }
                }, {
                    key: "vartermInner",
                    value: function(t, r, n) {
                        if (null == t || 0 == t.getNum()) return null;
                        var o, a = 0,
                            i = 1;
                        if ("0" == r) return n(t);
                        for (var u = r.split(","), s = 0; s < u.length; s++) {
                            var l = u[s];
                            o = l[0];
                            var a = parseInt(l.substring(1));
                            i = 0 == s ? e.makeAtom(o, a) : ["*", i, e.makeAtom(o, a)]
                        }
                        return e.formatCoefTerm(t, i, n)
                    }
                }, {
                    key: "getDegreeForVar",
                    value: function(e, t) {
                        if ("0" == e) return 0;
                        for (var r = e.split(","), n = 0; n < r.length; n++) {
                            var o = r[n];
                            if (o[0] == t) {
                                var a = parseInt(o.substring(1));
                                return a
                            }
                        }
                        return 0
                    }
                }, {
                    key: "getDegreeMap",
                    value: function(e) {
                        var t = {};
                        if ("0" == e) return t;
                        for (var r = e.split(","), n = 0; n < r.length; n++) {
                            var o = r[n],
                                a = o[0],
                                i = parseInt(o.substring(1));
                            0 != i && (t[a] = i)
                        }
                        return t
                    }
                }, {
                    key: "getMinDegreeMap",
                    value: function(e, t) {
                        var r = {};
                        if (null == e) return t;
                        for (var n in t)
                            if (null != e[n]) {
                                var o = Math.min(e[n], t[n]);
                                0 != o && (r[n] = o)
                            } return r
                    }
                }, {
                    key: "getMinNumber",
                    value: function(e, t) {
                        var r = 1;
                        return e === -1 ? c.isInt(t) && 0 != t ? t : 1 : c.isInt(e) && c.isInt(t) ? (r = c.getGCD([e, t]), 0 == r && (r = 1), r) : 1
                    }
                }, {
                    key: "getMinNumber0",
                    value: function(e, t) {
                        var r = 1;
                        return e === -1 ? c.isInt(t) && 0 != t ? t : 0 : c.isInt(e) && c.isInt(t) ? (r = c.getGCD([e, t]), 0 == r && (r = 1), r) : 1
                    }
                }, {
                    key: "reduceDegrees",
                    value: function(e, t) {
                        var r = {};
                        if (null == t) return e;
                        for (var n in e) {
                            var o = 0;
                            o = null != t[n] ? e[n] - t[n] : e[n], 0 != o && (r[n] = o)
                        }
                        return r
                    }
                }, {
                    key: "compareDegrees",
                    value: function(e, t) {
                        if ("0" == e && "0" == t) return 0;
                        if ("0" == e) return 1;
                        if ("0" == t) return -1;
                        for (var r = [], n = [], o = [], a = [], i = e.split(","), u = 0; u < i.length; u++) {
                            var s = i[u],
                                l = s[0],
                                f = parseInt(s.substring(1));
                            r.push(l), n.push(f)
                        }
                        for (var c = t.split(","), u = 0; u < c.length; u++) {
                            var s = c[u],
                                l = s[0],
                                f = parseInt(s.substring(1));
                            o.push(l), a.push(f)
                        }
                        for (var u = 0; u < Math.min(r.length, o.length); u++) {
                            var p = r[u],
                                h = n[u],
                                v = o[u],
                                d = a[u];
                            if (p < v) return -1;
                            if (p > v) return 1;
                            if (h < d) return 1;
                            if (h > d) return -1
                        }
                        return 0
                    }
                }, {
                    key: "makeAtom",
                    value: function(e, t) {
                        return 0 == t ? 1 : 1 == t ? ["var", e] : ["^", ["var", e], t]
                    }
                }, {
                    key: "createCoef",
                    value: function(t, r) {
                        var n = {};
                        if ("0" == t && "0" == r) return "0";
                        if ("0" == t) return r;
                        if ("0" == r) return t;
                        for (var o = t.split(","), a = 0; a < o.length; a++) {
                            var i = o[a],
                                u = i[0],
                                s = parseInt(i.substring(1));
                            null == n[u] ? n[u] = s : n[u] += s
                        }
                        for (var l = r.split(","), a = 0; a < l.length; a++) {
                            var i = l[a],
                                u = i[0],
                                s = parseInt(i.substring(1));
                            null == n[u] ? n[u] = s : n[u] += s
                        }
                        var f = e.degreeMapToIndex(n);
                        return f
                    }
                }, {
                    key: "createCoefPower",
                    value: function(t, r) {
                        for (var n = {}, o = t.split(","), a = 0; a < o.length; a++) {
                            var i = o[a],
                                u = i[0],
                                s = parseInt(i.substring(1));
                            null == n[u] ? n[u] = s * r : n[u] += s * r
                        }
                        var l = e.degreeMapToIndex(n);
                        return l
                    }
                }, {
                    key: "degreeMapToIndex",
                    value: function(e) {
                        var t = [];
                        t = Object.keys(e).map(function(e) {
                            return e
                        }), t.sort();
                        for (var r = [], n = 0; n < t.length; n++) {
                            var o = t[n],
                                a = "" + o + e[o].toString();
                            r.push(a)
                        }
                        var i = r.join(",");
                        return "" == i && (i = "0"), i
                    }
                }, {
                    key: "degreeMapToPolyList",
                    value: function(t) {
                        var r = [],
                            n = [];
                        Object.keys(t).forEach(function(e) {
                            return n.push(e)
                        }), n.sort();
                        for (var o = 0; o < n.length; o++)
                            for (var a = n[o], i = t[a], u = 0; u < i; u++) {
                                var s = "" + a + "1",
                                    l = {};
                                l[s] = h.default.fracnum(1), r.push(new e(l))
                            }
                        return r
                    }
                }, {
                    key: "pickNonConstCoef",
                    value: function(e) {
                        var t = h.default.fracnum(0);
                        for (var r in e)
                            if ("0" != r) return t = e[r];
                        return t
                    }
                }, {
                    key: "reduceCoefsDeg",
                    value: function(t, r) {
                        var n = {};
                        for (var o in t) {
                            var a = e.getDegreeMap(o),
                                i = e.reduceDegrees(a, r),
                                u = e.degreeMapToIndex(i);
                            0 != t[o].getNum() && (n[u] = t[o])
                        }
                        return n
                    }
                }, {
                    key: "multCoefsNum",
                    value: function(e, t) {
                        var r = {};
                        for (var n in e) {
                            var o = e[n];
                            r[n] = o.multiply(h.default.fracnum(t))
                        }
                        return r
                    }
                }, {
                    key: "reduceCoefsNum",
                    value: function(e, t) {
                        var r = {};
                        for (var n in e) {
                            var o = e[n];
                            r[n] = o.divide(h.default.fracnum(t))
                        }
                        return r
                    }
                }, {
                    key: "countCoefsInner",
                    value: function(e) {
                        var t = 0;
                        for (var r in e) 0 != e[r].getNum() && (t += 1);
                        return t
                    }
                }, {
                    key: "degreeMapToPoly",
                    value: function(t) {
                        var r = {},
                            n = e.degreeMapToIndex(t);
                        return r[n] = h.default.fracnum(1), new e(r)
                    }
                }, {
                    key: "compareCIndex",
                    value: function(t, r) {
                        var n = e.getDegree(t),
                            o = e.getDegree(r);
                        return n == o ? e.compareDegrees(t, r) : n < o ? 1 : -1
                    }
                }, {
                    key: "coefsToExprInner",
                    value: function(t, r) {
                        var n = ["+"],
                            o = [],
                            a = [];
                        for (var i in t) "0" != i ? o.push(i) : a.push(i);
                        o.sort(e.compareCIndex), o = o.concat(a);
                        var u = !0,
                            s = !1,
                            l = void 0;
                        try {
                            for (var f, c = o[Symbol.iterator](); !(u = (f = c.next()).done); u = !0) {
                                var i = f.value,
                                    p = e.vartermInner(t[i], i, r);
                                null != p && n.push(p)
                            }
                        } catch (e) {
                            s = !0, l = e
                        } finally {
                            try {
                                !u && c.return && c.return()
                            } finally {
                                if (s) throw l
                            }
                        }
                        return 1 == n.length ? n = 0 : 2 == n.length && (n = n[1]), n
                    }
                }, {
                    key: "coefsToExprInnerImag",
                    value: function(t, r) {
                        var n = ["+"],
                            o = [],
                            a = [],
                            i = [];
                        for (var u in t) "0" != u ? o.push(u) : a.push(u);
                        o.sort(e.compareCIndex), i = i.concat(a), i = i.concat(o);
                        var s = !0,
                            l = !1,
                            f = void 0;
                        try {
                            for (var c, p = i[Symbol.iterator](); !(s = (c = p.next()).done); s = !0) {
                                var u = c.value,
                                    h = e.vartermInner(t[u], u, r);
                                null != h && n.push(h)
                            }
                        } catch (e) {
                            l = !0, f = e
                        } finally {
                            try {
                                !s && p.return && p.return()
                            } finally {
                                if (l) throw f
                            }
                        }
                        return 1 == n.length ? n = 0 : 2 == n.length && (n = n[1]), n
                    }
                }, {
                    key: "getVarsFromMyCoefs",
                    value: function(e) {
                        var t = [];
                        for (var r in e)
                            if ("0" != r && 0 != e[r].getNum())
                                for (var n = r.split(","), o = 0; o < n.length; o++) {
                                    var a = n[o],
                                        i = a[0];
                                    t.indexOf(i) > -1 || t.push(i)
                                }
                        return t
                    }
                }, {
                    key: "getVarFromCoefs",
                    value: function(e) {
                        var t;
                        for (var r in e)
                            if ("0" != r) {
                                var n = r.split(",");
                                if (1 == n.length) {
                                    var o = n[0];
                                    if (t = o[0], "undefined" != typeof t) break
                                }
                            } return t
                    }
                }, {
                    key: "getAddCoefs",
                    value: function(e, t) {
                        var r = {};
                        for (var n in e) null == r[n] ? r[n] = e[n] : r[n] = r[n].add(e[n]);
                        for (var n in t) null == r[n] ? r[n] = t[n] : r[n] = r[n].add(t[n]);
                        return r
                    }
                }, {
                    key: "checkSameCoefs",
                    value: function(t, r) {
                        for (var n in t)
                            if (null != t[n] && 0 != t[n].getNum() && e.pickCoef(t, n).getNum() != e.pickCoef(r, n).getNum()) return !1;
                        for (var n in r)
                            if (null != r[n] && 0 != r[n].getNum() && e.pickCoef(t, n).getNum() != e.pickCoef(r, n).getNum()) return !1;
                        return !0
                    }
                }, {
                    key: "getMultCoefs",
                    value: function(t, r) {
                        var n = {};
                        for (var o in t)
                            if (0 != e.pickCoef(t, o).getNum())
                                for (var a in r)
                                    if (0 != e.pickCoef(r, a).getNum()) {
                                        var i = e.pickCoef(t, o).multiply(e.pickCoef(r, a)),
                                            u = e.createCoef(o, a);
                                        null == n[u] ? n[u] = i : n[u] = n[u].add(i)
                                    } return n
                    }
                }]), e
            }();
        r.default = v
    }, {}],
    44: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e) {
            return e.coefs
        }

        function i(e) {
            var t = it(e);
            return t.coefs
        }

        function u(e) {
            var t = it(e),
                r = t.getCIndex();
            return r
        }

        function s(e) {
            var t = it(e),
                r = t.countIndex();
            return r
        }

        function l(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = yt(Pt),
                    o = !0;
                if (r.forEach(function(e) {
                        return o = o && e instanceof Ne.default
                    }), o) {
                    var a = n[t](r);
                    return "simplify" === t ? a : ["simplify", a]
                }
                for (var i = !1, u = [], s = 0; s < r.length; s++) {
                    var f, c = r[s];
                    c instanceof Ne.default || i ? f = c : (f = l(c), i = !0), u.push(f)
                }
                var p = [t];
                return p = p.concat(u)
            }
            return e
        }

        function f(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = yt(Pt),
                    o = !0;
                if (r.forEach(function(e) {
                        return o = o && e instanceof Ne.default
                    }), o) {
                    var a = n[t](r);
                    return ["color", "blue", a]
                }
                for (var i = !1, u = [], s = 0; s < r.length; s++) {
                    var l, c = r[s];
                    c instanceof Ne.default || i ? l = c : (l = f(c), i = !0), u.push(l)
                }
                var p = [t];
                return p = p.concat(u)
            }
            return e
        }

        function c(e) {
            return it(e).jsCoefs()
        }

        function p(e) {
            return it(e).jsCoefs2()
        }

        function h(e, t, r, n) {
            var o = ot(e, t, r),
                a = pt(o),
                i = st(e),
                u = st(["color", "purple", t]),
                s = "\\text'Step:'\\,\\text'Substitute '\\,\\,(" + u + ")\\,\\,\\text' for '\\,\\," + r + "\\,\\,\\text' in '\\,\\," + i + ":";
            a.addMobMsgToRetval(s, ["Step: Substitute", u, "for", r, "in", i + ":"]), a.addMMsgToRetval(i);
            var l = ot(e, ["color", "purple", t], r);
            return a.addMMsgToRetval(st(l)), a.simplifyEq(o), a.solveForLinMVar(n), a
        }

        function v(e, t, r, n) {
            var o = h(e, t, r, n);
            return tt(o.toDval())
        }

        function d(e, t, r, n) {
            var o = pt(e),
                a = st(e),
                i = "\\text'Step:'\\,\\text'Solve '\\,\\," + a + "\\,\\,\\text' for '\\,\\," + r + ":";
            o.addMobMsgToRetval(i, ["Step: Solve", a, "for " + r + ":"]), o.addAnsMsgToRetval(a), o.solveForLinMVar(r);
            var u = o.eq.rightpoly.polyToExpr(),
                s = h(t, u, r, n);
            o.retval = o.retval.concat(s.retval);
            var l, f;
            if (s.eq.leftpoly.isNum()) s.eq.leftpoly.getCoef("0").getNum() == s.eq.rightpoly.getCoef("0").getNum() ? (o.addMsgToRetval("<hr>"), o.addHeadDivToRetval("Réponse:"), o.addMsgToRetval("Infinitely many solutions.")) : (o.addMsgToRetval("<hr>"), o.addHeadDivToRetval("Réponse:"), o.addMsgToRetval("No solutions."));
            else {
                if (o.eq.rightpoly.isNum()) l = o.eq.eqToExpr(), f = s.eq.eqToExpr();
                else {
                    var c = s.eq.rightpoly.polyToExpr(),
                        p = h(o.eq.eqToExpr(), c, n, r);
                    o.retval = o.retval.concat(p.retval), l = p.eq.eqToExpr(), f = s.eq.eqToExpr()
                }
                var v = "";
                v = at(l).getEqVar() < at(f).getEqVar() ? st(l) + "\\,\\,\\text' et '\\,\\," + st(f) : st(f) + "\\,\\,\\text' et '\\,\\," + st(l), o.addMsgToRetval("<hr>"), o.addHeadDivToRetval("Réponse:"), o.addMMsgToRetval(v)
            }
            return [o.retval, l, f]
        }

        function g(e, t, r, n) {
            var o = d(e, t, r, n);
            return o
        }

        function m(e) {
            var t = e.eqToExpr();
            return t
        }

        function y(e) {
            var t = it(e),
                r = t.polyToExpr();
            return r
        }

        function x(e) {
            var t = ut(e),
                r = t.polyToExprDec();
            return r
        }

        function b(e) {
            var t = ht(e);
            return st(t)
        }

        function q(e) {
            var t = ut(e),
                r = Dt(t),
                n = r.polyReduce(),
                o = n.pushDcoefs(),
                a = o.polyToExprImag();
            return a
        }

        function E(e) {
            var t = F(e);
            return t[-1][1]
        }

        function M(e, t, r) {
            e.push(["step", t, r])
        }

        function w(e) {
            return new Xe.default(it(e[1]), it(e[2]))
        }

        function T(e) {
            var t = at(e),
                r = st(e),
                n = st(t.eqToExpr()),
                o = r == n,
                a = t.getLeftCoef(1),
                i = t.getLeftCoef(0),
                u = t.getRightCoef(1),
                s = t.getRightCoef(0),
                l = a.getNum(),
                f = i.getNum(),
                c = u.getNum(),
                p = s.getNum(),
                h = !1;
            h = 0 != l && 0 == f && 0 == c || 0 != c && 0 == p && 0 == l;
            var v = !1,
                d = !1;
            1 == l && 0 != f && 0 == c ? f > 0 ? v = !0 : d = !0 : 1 == c && 0 != p && 0 == l && (p > 0 ? v = !0 : d = !0);
            var g = "";
            return o && (h ? g = "isSimpleMultEq" : v ? g = gt(l) && gt(f) && gt(c) && gt(p) ? "isSimpleAddEqInt" : "isSimpleAddEq" : d && (g = "isSimpleSubEq")), g
        }

        function D(e) {
            var t = at(e),
                r = st(e),
                n = st(t.eqToExpr()),
                o = r == n,
                a = t.getLeftCoef(1),
                i = t.getLeftCoef(0),
                u = t.getRightCoef(1),
                s = t.getRightCoef(0),
                l = a.getNum(),
                f = i.getNum(),
                c = u.getNum(),
                p = s.getNum(),
                h = !1;
            (0 != l && 0 == f && 0 == c || 0 != c && 0 == p && 0 == l) && (h = !0), 1 == l && 0 != f && 0 == c ? h = !0 : 1 == c && 0 != p && 0 == l && (h = !0);
            var v = "";
            return v = o ? h ? "isSimpleEq" : 0 == l || 0 == c ? "isEq2" : "isEq3" : "isEqDist"
        }

        function S(e) {
            var t = at(e),
                r = (st(e), st(t.eqToExpr()), t.getLeftCoef(2)),
                n = t.getLeftCoef(1),
                o = t.getLeftCoef(0),
                a = (t.getRightCoef(2), t.getRightCoef(1)),
                i = t.getRightCoef(0),
                u = (r.getNum(), n.getNum()),
                s = (o.getNum(), a.getNum(), a.getNum()),
                l = (i.getNum(), !1);
            u - s == 0 && (l = !0);
            var f = "";
            return l && (f = "isSimpleQuad"), f
        }

        function k(e) {
            var t = at(e),
                r = (st(e), st(t.eqToExpr()), t.getLeftCoef(1)),
                n = t.getLeftCoef(0),
                o = t.getRightCoef(1),
                a = t.getRightCoef(0),
                i = r.fracToExpr(),
                u = n.fracToExpr(),
                s = o.fracToExpr(),
                l = a.fracToExpr();
            return [i, u, s, l]
        }

        function C(e) {
            var t = [],
                r = e.eqToExpr();
            return M(t, r, "Simplify both sides"), t
        }

        function V(e) {
            var t = e.eqToExpr();
            return st(t)
        }

        function N(e) {
            return lt(e.eqToExpr())
        }

        function P(e) {
            var t = Vt(e),
                r = "";
            return r = "yes" == t.op || "no" == t.op || "great" == t.op ? t.op : t.op + lt(t.poly.polyToExpr()), [r, t.msg]
        }

        function L(e) {
            for (var t = [], r = ft(e), n = Nt(r), o = r, a = 0; a < 36; a++) {
                if (o = r, r = l(r), Nt(r) != n) {
                    var i = f(o);
                    M(t, "= " + Nt(i), ""), n = Nt(r)
                }
                if (r instanceof Ne.default) break
            }
            return t
        }

        function F(e) {
            var t = L(e),
                r = ft(e),
                n = Nt(r);
            if (O(e, "space")) {
                var o = st(it(e).polyToExprMixed());
                return M(t, "= " + o, ""), t
            }
            return t.length <= 0 && M(t, "= " + n, ""), t
        }

        function O(e, t) {
            var r = !1;
            if (e instanceof Array) {
                var n = e[0],
                    o = e.slice(1);
                n == t ? r = !0 : o.forEach(function(e) {
                    return r = r || O(e, t)
                })
            }
            return r
        }

        function A(e, t, r) {
            var n = new nt(e, []);
            return n.doOpStep(t, it(r)), tt(n.toDval())
        }

        function I(e) {
            var t = kt(e);
            return tt(t.toDval())
        }

        function R(e) {
            return [">", "<", ">=", "<="].indexOf(e.sign) > -1 && 1 == e.leftpoly.maxDegree() && 0 == e.rightpoly.maxDegree()
        }

        function _(e) {
            var t = [];
            if (R(e)) {
                var r = G(e.rightpoly.getNum(), e.sign);
                t.push(r)
            }
            return t
        }

        function j(e) {
            var t = e.rightpoly.getNum();
            return t
        }

        function G(e, t) {
            var r, n, o, a;
            switch (t) {
                case ">":
                    r = "(", n = e, o = "+inf", a = ")";
                    break;
                case "<":
                    r = "(", n = "-inf", o = e, a = ")";
                    break;
                case ">=":
                    r = "[", n = e, o = "+inf", a = ")";
                    break;
                case "<=":
                    r = "(", n = "-inf", o = e, a = "]"
            }
            var i = {
                leftbound: r,
                leftval: n,
                rightval: o,
                rightbound: a
            };
            return i
        }

        function H(e) {
            var t = _e.simplifyEq(e);
            return t.solveForQuadVarFormula(), t.toDval()
        }

        function $(e) {
            return tt(H(e))
        }

        function U(e) {
            var t = kt(e);
            return t.solveForGenVar(), tt(t.toDval())
        }

        function z(e) {
            var t = it(e);
            return B(t)
        }

        function B(e) {
            var t = Ie.getFactorPolylist(e);
            return t.length > 1 ? St(t) : []
        }

        function Q(e, t) {
            var r = pt(e);
            return r.solveForLinMVar(t), tt(r.toDval())
        }

        function W(e, t) {
            var r = pt(e);
            return r.solveForLinMVar(t), rt(r.toDval())
        }

        function K(e, t) {
            var r = pt(e);
            return "=" == r.eq.sign ? r.solveForMyVar(t) : r.solveForMyVar(t), tt(r.toDval())
        }

        function J(e) {
            var t = _e.simplifyEq(e);
            t.solveForLinVar();
            var r = t.toDval();
            return r.printList = [], r.eqgatoms = [r.eq.eqToExpr(), r.eq.eqToExpr(), "or"], r
        }

        function Y(e) {
            var t = kt(e);
            return t.solveForLinVarMixed(), t.toDval()
        }

        function Z(e) {
            var t = pt(e);
            return mt(e) || t.addStepToRetval(e, "Simplifier les deux parenthèses"), t.toDval()
        }

        function X(e) {
            var t = pt(e);
            return mt(e) || t.addMMsgToRetval(st(t.eq.eqToExpr())), t.solveForLinVar(), t.toDval()
        }

        function ee(e) {
            return tt(J(e))
        }

        function te(e) {
            return rt(J(e))
        }

        function re(e) {
            return tt(Y(e))
        }

        function ne(e) {
            return tt(Z(e))
        }

        function oe(e) {
            return tt(X(e))
        }

        function ae(e) {
            for (var t = [], r = 0; r < e.length; r++) {
                var n = e[r],
                    o = u(n);
                t.push([n, o])
            }
            return t
        }

        function ie(e) {
            for (var t = new Set, r = 0; r < e.length; r++) {
                var n = e[r];
                t.add(n[1])
            }
            var o = Array.from(t);
            return o.sort(Ne.default.compareCIndex), o
        }

        function ue(e) {
            for (var t = ["blue", "green", "red", "purple", "color5", "brown", "black"], r = {}, n = 0; n < e.length; n++) {
                var o = e[n];
                n < t.length ? r[o] = t[n] : r[o] = "black"
            }
            return r
        }

        function se(e, t) {
            var r = e[t];
            return "undefined" == typeof r && (r = "black"), r
        }

        function le(e) {
            var t = wt(e, st),
                r = t.join("+");
            return r
        }

        function fe(e, t, r) {
            return r ? e : t
        }

        function ce(e, t) {
            for (var r = [], n = 0; n < e.length; n++) {
                var o = e[n],
                    a = o[0],
                    i = o[1],
                    u = se(t, i);
                r.push(st(["color", u, a]))
            }
            var s = r.join("+");
            return s
        }

        function pe(e, t, r) {
            for (var n = {}, o = 0; o < e.length; o++) {
                var a = e[o],
                    i = a[0],
                    u = a[1];
                null == n[u] && (n[u] = []);
                var s = se(t, u);
                n[u].push(st(["color", s, i]))
            }
            for (var l = [], o = 0; o < r.length; o++) {
                var u = r[o];
                if (null != n[u]) {
                    var f = n[u].join("+");
                    l.push("(" + f + ")")
                }
            }
            var c = "0";
            return l.length > 0 && (c = l.join("+")), c
        }

        function he(e) {
            var t = x(e),
                r = st(t);
            return r
        }

        function ve(e) {
            var t = [],
                r = he(e);
            return t.push(qt(r)), t
        }

        function de(e) {
            var t = [],
                r = ht(e);
            r instanceof Array || (r = Qe.roundPrec(r));
            var n = st(r);
            if (r instanceof Array) {
                var o = he(e);
                n != o && 0 == it(e).maxDegree() ? (t.push(qt(n)), t.push(Et("", "(Decimal: " + o + ")"))) : t.push(qt(n))
            } else t.push(qt(n));
            return t
        }

        function ge(e) {
            for (var t = 0; t < e.length; t++) {
                var r = e[t];
                if (s(r) > 1) return !1
            }
            return !0
        }

        function me(e) {
            var t = [],
                r = ut(e),
                n = r.polyToExprNoReduce(),
                o = st(n);
            if (t.push(qt(o)), r.polyDegReduces()) {
                r = r.polyDegReduce();
                var a = r.polyToExpr();
                o = st(a), t.push(qt(o))
            }
            if (r.polyNumReduces()) {
                r = r.polyNumReduce();
                var a = r.polyToExpr();
                o = st(a), t.push(qt(o))
            }
            return [t, r, o]
        }

        function ye(e) {
            var t = me(e)[0];
            return t
        }

        function xe(e) {
            var t = me(e),
                r = t[0],
                n = t[1],
                o = t[2];
            if (!n.noDenom() && 1 == n.getVarsTopBottom().length) {
                var a = Tt.exprToPolyFraction(n.polyToExpr()).factorBoth(),
                    i = new Tt([(0, Ve.constant)(1)], a.denom),
                    u = i.multOrCancelList(a.numer),
                    s = st(ht(u.fracToExpr()));
                s != o && (r.push(qt(st(a.fracToExpr()))), r.push(qt(s)))
            }
            return r
        }

        function be(e) {
            var t = [];
            t.push(Mt("Let's simplify step-by-step."));
            var r = st(e);
            t.push(xt(r));
            var n = b(e);
            if (r == n) return t.push(Ct("There are no like terms.")), t.push(Mt("<hr>")), t.push(dt("Réponse:")), t = t.concat(de(e));
            qe(e) && (t.push(Ct("Distribute the Negative Sign:")), t.push(qt(Ee(e))), t.push(qt(Me(e))), t.push(qt(we(e))));
            var o = Te(e),
                a = we(e),
                i = [];
            ge(o) ? i = o : (i = De(o), t.push(Ct("Distribute:")), a = le(i), t.push(qt(a)));
            var u = Se(i),
                s = ae(u),
                l = ie(s),
                f = ue(l),
                c = ht(e),
                p = ke(c),
                h = ae(p),
                v = le(u);
            return a != v && t.push(qt(v)), u.length > p.length ? (t.push(Ct("Combine Like Terms:")), t.push(qt(ce(s, f))), s.sort(function(e, t) {
                var r = e[1],
                    n = t[1];
                return Ne.default.compareCIndex(r, n)
            }), t.push(qt(pe(s, f, l))), 0 != c && t.push(qt(ce(h, f))), t.push(Mt("<hr>")), t.push(dt("Réponse:")), t = t.concat(de(e))) : (t.push(Mt("<hr>")), t.push(dt("Réponse:")), t = t.concat(de(e)))
        }

        function qe(e) {
            return e instanceof Array && "-" == e[0] && 3 == e.length && ct(e[2]).length > 1
        }

        function Ee(e) {
            return st(qe(e) ? ["+", e[1],
                ["*", ["color", "red", -1], e[2]]
            ] : e)
        }

        function Me(e) {
            if (qe(e)) {
                var t = ct(e[1]),
                    r = ct(e[2]),
                    n = [];
                n = n.concat(t), r.forEach(function(e) {
                    return n.push(["*", ["color", "red", -1], e])
                });
                var o = le(n);
                return o
            }
            return st(e)
        }

        function we(e) {
            if (qe(e)) {
                var t = ct(e[1]),
                    r = ct(e[2]),
                    n = vt(r),
                    o = [];
                o = o.concat(t), n.forEach(function(e) {
                    return o.push(ht(e))
                });
                var a = le(o);
                return a
            }
            return st(e)
        }

        function Te(e) {
            if (qe(e)) {
                var t = ct(e[1]),
                    r = ct(e[2]),
                    n = vt(r),
                    o = [];
                return o = o.concat(t), n.forEach(function(e) {
                    return o.push(ht(e))
                }), o
            }
            return ct(e)
        }

        function De(e) {
            var t = [];
            return e.forEach(function(e) {
                if (s(e) <= 1) t.push(e);
                else if (e instanceof Array && "*" == e[0] && 3 == e.length && (ct(e[1]).length > 1 || ct(e[2]).length > 1)) {
                    var r = ct(e[1]),
                        n = ct(e[2]);
                    r.forEach(function(e) {
                        n.forEach(function(r) {
                            t.push(["*paren", e, r])
                        })
                    })
                } else t = t.concat(ct(ht(e)))
            }), t
        }

        function Se(e) {
            var t = [];
            return e.forEach(function(e) {
                s(e) <= 1 ? t.push(ht(e)) : t = t.concat(ct(ht(e)))
            }), t
        }

        function ke(e) {
            var t = [0];
            return t = e instanceof Array && "+" == e[0] ? e.slice(1) : [e]
        }

        function Ce(e) {
            var t = e[1],
                r = e[2],
                n = [];
            n.push(Mt("Let's simplify step-by-step."));
            var o = st(e);
            n.push(xt(o));
            var a = b(t) + " = " + b(r);
            if (o == a) return [];
            (qe(t) || qe(r)) && (n.push(bt(Ee(t) + " = " + Ee(r), "(Distribute the Negative Sign)")), n.push(xt(Me(t) + " = " + Me(r))), n.push(xt(we(t) + " = " + we(r))));
            var i = Te(t),
                u = Te(r),
                s = we(t) + " = " + we(r),
                l = [],
                f = [];
            ge(i) && ge(u) ? (l = i, f = u) : (l = De(i), f = De(u), s = le(l) + " = " + le(f), n.push(bt(s, "(Distribute)")));
            var c = Se(l),
                p = Se(f),
                h = ae(c),
                v = ae(p),
                d = [];
            d = d.concat(h), d = d.concat(v);
            var g = ie(d),
                m = ue(g),
                y = ht(t),
                x = ht(r),
                q = ke(y),
                E = ke(x),
                M = ae(q),
                w = ae(E),
                T = le(c) + " = " + le(p);
            if (s != T && T != a && n.push(xt(T)), c.length > q.length || p.length > E.length) {
                var D = c.length > q.length,
                    S = p.length > E.length,
                    k = b(t),
                    C = b(r);
                h.sort(function(e, t) {
                    var r = e[1],
                        n = t[1];
                    return Ne.default.compareCIndex(r, n)
                }), v.sort(function(e, t) {
                    var r = e[1],
                        n = t[1];
                    return Ne.default.compareCIndex(r, n)
                }), n.push(bt(fe(pe(h, m, g), k, D) + " = " + fe(pe(v, m, g), C, S), "(Combine Like Terms)")), 0 == y && 0 == x || n.push(xt(fe(ce(M, m), k, D) + " = " + fe(ce(w, m), C, S)))
            }
            return n
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.polyToCoefs = a, r.exprToCoefs = i, r.exprToCIndex = u, r.exprCountIndex = s, r.myCoefs = c, r.myCoefs2 = p, r.dSubAndSolve = v, r.solveSimpleSystem = d, r.dSolveSimpleSystem = g, r.eqToExpr = m, r.myComp = y, r.myPolyText = b, r.myPolyExprImag = q, r.myPolyText2 = E, r.getDartEq = w, r.getEqInfo = T, r.getEqInfo2 = D, r.getQuadEqInfo2 = S, r.getEqInfoCoefs = k, r.printEqRetval = C, r.printEq = V, r.dEqToTextH = N, r.myTutorSuggest = P, r.dPolyStep = F, r.doMyOp = A, r.doSimplifyEq = I, r.getSegs = _, r.getEqAns = j, r.myQuadEq = H, r.dQuadEq = $, r.dSolveGenEq = U, r.factorExpr = z, r.dSolveForLinVar = Q, r.exSolveForLinVar = W, r.dSolveForMyVar = K, r.dLinEq = ee, r.eLinEq = te, r.dLinEqMixed = re, r.dLinEq2 = ne, r.dLinEq3 = oe, r.getAddTermsAug = ae, r.getCIndexList = ie, r.getColorMap = ue, r.evalGenVar = ve, r.evalGenVarFrac = de, r.checkAddTerms = ge, r.showMFVar = ye, r.showMFVarFactor = xe, r.showAddTermsMVar = be, r.getAddTermsDistNeg = Te, r.getDistTerms = De, r.getDistTerms2 = Se, r.showAddTermsMVar2 = Ce;
        var Ve = e(43),
            Ne = o(Ve),
            Pe = e(6),
            Le = n(Pe),
            Fe = e(7),
            Oe = n(Fe),
            Ae = e(9),
            Ie = n(Ae),
            Re = e(11),
            _e = n(Re),
            je = e(40),
            Ge = n(je),
            He = e(41),
            $e = n(He),
            Ue = e(42),
            ze = n(Ue),
            Be = e(45),
            Qe = n(Be),
            We = e(48),
            Ke = n(We),
            Je = e(49),
            Ye = n(Je),
            Ze = e(8),
            Xe = o(Ze),
            et = e(10),
            tt = (o(et), Oe.Dval, Oe.dvalToJs3),
            rt = Oe.dvalToJsE3,
            nt = Oe.EqScratch,
            ot = (_e.eqScratchToDartval, Ke.evalAtVal),
            at = Oe.exprToEq,
            it = Le.exprToPoly,
            ut = Ye.exprToPolyV12,
            st = Ge.exprToText,
            lt = Ge.exprToTextH,
            ft = Ge.exprToVisit1,
            ct = Ye.getAddTerms,
            pt = _e.getEqScratch,
            ht = Ye.getPolyExpr,
            vt = Ye.getSubTerms,
            dt = Ke.headstr,
            gt = $e.isInt,
            mt = Oe.isSimplifiedEq,
            yt = Le.makeComputePolyOperators,
            xt = Ke.mDiv,
            bt = Ke.mDiva,
            qt = Ke.mDivEq,
            Et = Ke.mDivSmall,
            Mt = Ke.msgstr,
            wt = Ye.myMap,
            Tt = ze.PolyFraction,
            Dt = Ge.polyImagReduce,
            St = ze.polylistToExpr,
            kt = _e.simplifyEq,
            Ct = Ke.stepstr,
            Vt = Oe.tutorSuggest,
            Nt = (_e.Tval, Ge.visit1ToText),
            Pt = Ye.visit1ToVisit2
    }, {}],
    45: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            null == t && (t = 6);
            var r = e.toFixed(t);
            if (r.indexOf(".") > -1 && !(r.indexOf("e") > -1)) {
                var n = r.length - 1;
                for (n = r.length - 1; n > 0 && "0" == r[n]; n--);
                var o = r.substring(0, n + 1);
                return o.lastIndexOf(".") == o.length - 1 ? (o = o.substring(0, n), "-0" == o ? "0" : o) : o
            }
            return r
        }

        function o(e) {
            if (!isFinite(e)) return e;
            var t = 1e3;
            if (e >= 0) {
                var r = Math.floor(e),
                    n = e - r;
                n = Math.round(n * t) / t, e = r + n
            } else {
                var o = Math.ceil(e),
                    a = e - o;
                a = Math.round(a * t) / t, e = o + a
            }
            return e
        }

        function a(e) {
            if (!isFinite(e)) return e;
            var t = 1e6;
            if (e >= 0) {
                var r = Math.floor(e),
                    n = e - r;
                (Math.abs(n) > 1e-5 || 0 != r) && (n = Math.round(n * t) / t, e = r + n)
            } else {
                var o = Math.ceil(e),
                    a = e - o;
                (Math.abs(a) > 1e-5 || 0 != o) && (a = Math.round(a * t) / t, e = o + a)
            }
            return e
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.numStr = n, r.roundPrecEq = o, r.roundPrec = a
    }, {}],
    46: [function(e, t, r) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            var r = s(e.eq.eqToExpr(), t, m, !0, e.eq.leftpoly.innerMap["#"].getVariableSafe(), !0),
                n = e.toDval();
            return n.printList = r, n
        }

        function u(e, t, r) {
            var n = s(e.eq.eqToExpr(), t, g(r), !0, e.eq.leftpoly.innerMap["#"].getVariableSafe(), !0),
                o = e.toDval();
            return o.printList = n, o
        }

        function s(e, t, r, n, o, a) {
            var i = [];
            i.push(Be("Let's find the critical points of the inequality."));
            var u = e[0],
                s = "=";
            s = "<" == u || ">" == u ? "<" : "≤";
            var f = ["=", e[1], e[2]];
            i.push(He(Se(f)));
            var c = r(f),
                p = c.printList,
                h = c.anslist,
                v = c.ldanslist,
                d = c.rdanslist,
                g = c.tdanslist,
                m = [];
            null != v && (m = m.concat(v)), null != d && (m = m.concat(d));
            var y = Array.from(new Set(m.map(function(e) {
                    return e.getRightExpr()
                }))),
                x = Array.from(y.map(function(e) {
                    return new tt(e, Te(e), !1)
                })),
                b = Array.from(new Set(h.map(function(e) {
                    return e.getRightExpr()
                }))),
                q = Array.from(b.map(function(e) {
                    return new tt(e, Te(e), !0)
                }));
            q = q.concat(x);
            var E, M = Array.from(q.map(function(e) {
                return e.val
            }));
            if (null != g) {
                E = g.filter(function(e) {
                    return !(M.indexOf(e.rightpoly.getConst().getNum()) > -1)
                });
                var w = Array.from(new Set(E.map(function(e) {
                        return e.getRightExpr()
                    }))),
                    T = w.map(function(e) {
                        return tt.domain(e)
                    });
                q = q.concat(T)
            }
            if (a) {
                p.push(Be("<hr>")), p.push(Be("<u>Critical points:</u>"));
                var D = !1;
                null != h && h.length > 0 && (m.length > 0 ? p.push(Re(h, Pe("="), "(Makes both sides equal)")) : p.push(Ie(h, Pe("="))), D = !0), null != v && v.length > 0 && (p.push(Re(v, Pe("="), "(Makes left denominator equal to 0)")), D = !0), null != d && d.length > 0 && (p.push(Re(d, Pe("="), "(Makes right denominator equal to 0)")), D = !0), null != E && E.length > 0 && (p.push(Re(E, Pe("="), "(Makes term equal to 0)")), D = !0), D || p.push(Be("No critical points."))
            }
            q.sort(function(e, t) {
                return e.val == t.val ? 0 : e.val > t.val ? 1 : -1
            });
            var S = [],
                k = [],
                C = [];
            if (0 == q.length) S.push(new rt(tt.v(NaN, !1), tt.v(NaN, !1)));
            else if (1 == q.length) S.push(new rt(tt.v(NaN, !1), q[0])), S.push(new rt(q[0], tt.v(NaN, !1)));
            else
                for (var V = 0; V <= q.length; V++) {
                    var N = void 0,
                        P = void 0;
                    N = 0 == V ? tt.v(NaN, !1) : q[V - 1], P = V == q.length ? tt.v(NaN, !1) : q[V], S.push(new rt(N, P))
                }
            if (S.length > 0) {
                p.push(Be("Check intervals in between critical points. (Test values in the intervals to see if they work.)"));
                for (var V = 0; V < S.length; V++) {
                    var L = S[V],
                        F = L.lbound,
                        O = L.rbound,
                        A = Te(F.fracexpr),
                        I = Te(O.fracexpr),
                        R = (A + I) / 2;
                    isNaN(A) && isNaN(I) ? R = 0 : isNaN(A) ? R = I - 1 : isNaN(I) && (R = A + 1);
                    var _ = we(t, R, o);
                    1 == Te(_) ? (k.push(L), p.push($e(l(L, o, s), "(Works in original inequality)"))) : (C.push(L), p.push($e(l(L, o, s), "(Doesn't work in original inequality)")))
                }
            }
            p.push(Be("<hr>")), p.push(Be("<u>Réponse:</u>"));
            for (var j = k.map(function(e) {
                    return l(e, o, s)
                }), V = 0; V < C.length - 1; V++) "≤" == s && C[V].rbound.val == C[V + 1].lbound.val && C[V].rbound.notOpen && j.push(o + "=" + Se(C[V].rbound.fracexpr));
            return j.length > 0 ? p.push(He(j.join("\\,\\,\\text' ou '\\,\\,"))) : p.push(Be("No solutions.")), i = i.concat(p)
        }

        function l(e, t, r) {
            var n = e.lbound,
                o = e.rbound,
                a = n.fracexpr,
                i = o.fracexpr,
                u = Te(a),
                s = Te(i),
                l = r,
                f = r;
            n.notOpen || (l = "<"), o.notOpen || (f = "<"), n.isDomain && (l = "≤"), o.isDomain && (f = "≤");
            var c = "";
            return c = isNaN(u) && isNaN(s) ? "\\text'All real numbers'" : isNaN(u) ? t + f + Se(i) : isNaN(s) ? t + We(l, (0, Q.constant)(-1)) + Se(a) : Se(a) + l + t + f + Se(i)
        }

        function f(e, t, r) {
            var n = Fe(t);
            if (n.getVarsLength() > 1 || "=" == n.eq.sign) return e.errorDval();
            if (n.eq.leftpoly.noDenom() && n.eq.rightpoly.noDenom()) {
                var o = s(n.eq.eqToExpr(), r, Ye, !0, n.eq.getEqVar(), !1),
                    a = e.toDval();
                return a.printList = o, a
            }
            if (n.eq.leftpoly.maxDenomDegree() > 4 || n.eq.rightpoly.maxDenomDegree() > 4) return e.errorDval();
            var o = s(n.eq.eqToExpr(), r, p, !0, n.eq.getEqVar(), !0),
                a = e.toDval();
            return a.printList = o, a
        }

        function c(e) {
            var t = Ke(e);
            return t.solveForCubeVar(), Me(t)
        }

        function p(e) {
            var t = Ke(e);
            t.eq.leftpoly.noDenom() && t.eq.rightpoly.noDenom() || t.multDenomEq(), t.solveForGenVar();
            var r = Me(t),
                n = r.printList,
                o = r.anslist,
                a = v(e, n, o),
                i = Le(e);
            return null != i.ldanslist && (a.ldanslist = i.ldanslist), null != i.rdanslist && (a.rdanslist = i.rdanslist), a
        }

        function h(e, t, r, n) {
            t.length > 0 && e.push(Be("<hr>")), xe(e, t, r, n, "Check possible critical points.")
        }

        function v(e, t, r) {
            var n = [];
            return h(t, r, n, e), new et(t, n)
        }

        function d(e, t, r) {
            var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if ("=" != t[0]) {
                var a = f(e, t, r);
                return a
            }
            var i = Fe(t);
            if (i.getVarsLength() > 1) return e.errorDval();
            var u = [];
            if (i.eq.leftpoly.noDenom() && i.eq.rightpoly.noDenom())
                if (n) {
                    var s = Xe(i.eq.eqToExpr(), r, Ye, !0, o);
                    u = s.printList
                } else i.solveForGenVar(), u = [];
            else {
                i.multDenomEq();
                var s = Xe(i.eq.eqToExpr(), r, Ye, !0, o);
                u = s.printList
            }
            var l = i.toDval().retval;
            e.retval = e.retval.concat(l);
            var a = e.toDval();
            return a.printList = u, e.anslist = e.anslist.concat(i.anslist), a
        }

        function g(e) {
            function t(t) {
                var r = m(t),
                    n = Oe(e);
                y(n, e, e, !1);
                return r.tdanslist = n.anslist, r
            }
            return t
        }

        function m(e) {
            var t = Oe(e),
                r = e,
                n = y(t, e, r),
                o = n.retval,
                a = n.eq,
                i = n.printList,
                u = Ae(o, 1),
                s = u[0];
            null != i && (s = s.concat(i));
            var l = t.anslist;
            return et.Eq(s, l, a)
        }

        function y(e, t, r) {
            var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                o = Y.exprToGenPoly(t[1]),
                a = Y.exprToGenPoly(t[2]);
            return 0 == o.foundlength() && 0 == a.foundlength() ? d(e, t, r, !1, n) : e.isConstEq() ? d(e, e.eq.eqToExpr(), r, !1, n) : 1 == o.foundlength() && 1 == a.foundlength() ? _(e, o, a, r, n) : 1 == o.foundlength() && 0 == a.foundlength() ? k(e, r, n) : 0 == o.foundlength() && 1 == a.foundlength() ? k(e, r, n) : 2 == o.foundlength() && 0 == a.foundlength() ? M(e, o, a, r, n) : e.errorDval()
        }

        function x(e) {
            var t = Oe(e),
                r = Se(e),
                n = Se(t.eq.eqToExpr()),
                o = e;
            return t.retval.push(["step", r, ""]), t.eq.leftpoly.isError() || t.eq.rightpoly.isError() ? t.errorDartvalJ() : (r != n && t.retval.push(["step", n, ""]), Ee(y(t, e, o, !0)))
        }

        function b(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = e.eq.leftpoly.innerMap["#"],
                o = e.eq.leftpoly.innerMap["&"];
            e.clearLeftTwoVar("#", "&");
            var a = e.eq.leftpoly.outerpoly.pow((0, Q.constant)(2)),
                i = new Ne.makeMap(a, e.eq.leftpoly.innerMap),
                u = new Ne.makeMap(e.eq.rightpoly.outerpoly.pow((0, Q.constant)(2)), e.eq.leftpoly.innerMap);
            e.retval.push(["step", ["=", i.polyToExpr(), u.polyToExpr()], "Square both sides"]);
            var s = a.coefs["#2"],
                l = a.coefs["#1,&1"],
                f = a.coefs["&2"],
                c = n.args[0],
                p = o.args[0],
                h = W.default.formatCoefTerm(s, c.polyToExpr(), ye.default.getFracExpr),
                v = W.default.formatCoefTerm(l, ["sqrt", ["*", c.polyToExpr(), p.polyToExpr()]], ye.default.getFracExpr),
                d = W.default.formatCoefTerm(f, p.polyToExpr(), ye.default.getFracExpr);
            e.retval.push(Ue(Se(["=", ["+", h, v, d], u.polyToExpr()])));
            var g = W.default.formatCoefTerm(l, ["var", "#"], ye.default.getFracExpr),
                m = De(["+", g, h, d]),
                y = c.multiply(p),
                x = {
                    "#": new _e("sqrt", [y])
                };
            return e.eq = new Ve.commonMap(m, u.outerpoly, x), e.retval.push(Ue(Se(e.eq.eqToExpr()))), k(e, t, r)
        }

        function q(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            e.clearLeftTwoVar("#", "&");
            var n = e.eq.leftpoly.outerpoly.coefs["#1"],
                o = e.eq.leftpoly.outerpoly.coefs["&1"];
            if (1 != n.getNum() || 1 != o.getNum()) return e.errorDval();
            var a = e.eq.leftpoly.innerMap["#"],
                i = e.eq.leftpoly.innerMap["&"],
                u = a.args[0],
                s = i.args[0],
                l = "log";
            "ln" == a.op && (l = "ln"), e.retval.push(Ue(Se(["=", [l, ["*", u.polyToExpr(), s.polyToExpr()]], e.eq.rightpoly.polyToExpr()])));
            var f = De(["var", "#"]),
                c = u.multiply(s),
                p = {
                    "#": new _e(l, [c])
                },
                h = Ne.makeMap(f, p);
            return e.eq = new Ve(h, e.eq.rightpoly), e.retval.push(Ue(Se(e.eq.eqToExpr()))), S(e, t, e.eq.leftpoly.innerMap["#"], "#", !0, r)
        }

        function E(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = e.eq.leftpoly.innerMap["#"],
                o = e.eq.rightpoly.innerMap["&"];
            e.clearRightConstOpt("#", "&");
            var a = e.eq.leftpoly.outerpoly.pow((0, Q.constant)(2)),
                i = e.eq.rightpoly.outerpoly.pow((0, Q.constant)(2)),
                u = Ne.makeMap(a, e.eq.leftpoly.innerMap),
                s = Ne.makeMap(i, e.eq.rightpoly.innerMap);
            e.retval.push(["step", ["=", u.polyToExpr(), s.polyToExpr()], "Square both sides"]);
            var l, f = a.getCoef("#2"),
                c = a.getCoef("#1"),
                p = a.getCoef("0"),
                h = n.args[0],
                v = o.args[0],
                g = i.getCoef("&2"),
                m = i.getCoef("&1"),
                y = i.getCoef("0"),
                x = W.default.formatCoefTerm(f, h.polyToExpr(), ye.default.getFracExpr),
                b = W.default.formatCoefTerm(c, ["sqrt", h.polyToExpr()], ye.default.getFracExpr),
                q = p.fracToExpr(),
                E = W.default.formatCoefTerm(g, v.polyToExpr(), ye.default.getFracExpr),
                M = W.default.formatCoefTerm(m, ["sqrt", v.polyToExpr()], ye.default.getFracExpr),
                w = y.fracToExpr();
            l = 0 != p.getNum() ? ["+", x, b, q] : x;
            var D;
            D = 0 != y.getNum() ? ["+", E, M, w] : E, e.retval.push(Ue(Se(["=", l, D])));
            var S = W.default.formatCoefTerm(c, ["var", "#"], ye.default.getFracExpr),
                k = W.default.formatCoefTerm(m, ["var", "&"], ye.default.getFracExpr),
                C = De(["+", S, x, q]),
                V = De(["+", k, E, w]);
            return e.eq = Ve.commonMap(C, V, e.eq.leftpoly.innerMap), e.retval.push(Ue(Se(e.eq.eqToExpr()))), 0 != p.getNum() ? T(e, t, e.eq.leftpoly.innerMap["#"], "#", r) : 0 != y.getNum() ? T(e, t, e.eq.rightpoly.innerMap["&"], "&", r) : d(e, e.eq.eqToExpr(), t, !0, r)
        }

        function M(e, t, r, n) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                a = A(e.eq.sign, t, r);
            if (!a) return e.errorDval();
            var u = e.eq.leftpoly.innerMap["#"],
                s = e.eq.leftpoly.innerMap["&"];
            return "abs" == u.op && "abs" == s.op ? "=" != e.eq.sign ? i(e, n) : I(e, n, o) : "=" != e.eq.sign ? e.errorDval() : "sqrt" == u.op && "sqrt" == s.op ? b(e, n, o) : "log" == u.op && "log" == s.op ? q(e, n, o) : "ln" == u.op && "ln" == s.op ? q(e, n, o) : e.errorDval()
        }

        function w(e, t, r, n) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (e.eq.leftpoly.outerpoly.maxDegree() > 2 || e.eq.rightpoly.outerpoly.maxDegree() > 2) return e.errorDval();
            if (!e.eq.leftpoly.outerpoly.noDenom() || !e.eq.rightpoly.outerpoly.noDenom()) return e.errorDval();
            var a = r.args[0],
                i = [];
            if (i = i.concat(a.getVars()), i = i.concat(e.eq.leftpoly.outerpoly.getVars()), i = i.concat(e.eq.rightpoly.outerpoly.getVars()), i = Array.from(new Set(i)),
                i.length > 2) return e.errorDval();
            if (e.solveForMyVar(n), e.isConstEq()) return d(e, e.eq.eqToExpr(), t);
            for (var u in e.eq.leftpoly.outerpoly.coefs)
                if (W.default.getDegreeForVar(u, n) >= 1 && W.default.getDegree(u) > 1) return e.errorDval();
            for (var u in e.eq.rightpoly.outerpoly.coefs)
                if (W.default.getDegreeForVar(u, n) >= 1 && W.default.getDegree(u) > 1) return e.errorDval();
            if (e.retval.length > 2 ? e.retval.push(["step", e.eq.eqToExpr(), "Solve Absolute Value"]) : (e.retval.push(ze("Solve Absolute Value.")), e.retval.push(Ue(Se(e.eq.eqToExpr())))), "=" == e.eq.sign) {
                var l = e.doAbsVarEq(e.eq.eqToExpr(), t, o);
                return l
            }
            if (a.maxDegree() > 1 || a.maxDenomDegree() > 1) return e.errorDval();
            if (0 == e.eq.rightpoly.outerpoly.maxDegree() && a.noDenom()) {
                var l = e.doAbsVarIneq(e.eq.eqToExpr(), t);
                return l
            }
            var f = s(e.eq.eqToExpr(), t, z, !0, e.eq.getOneInnerVar(), !0),
                l = e.toDval();
            return l.printList = f, l
        }

        function T(e, t, r, n) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (e.eq.leftpoly.outerpoly.maxDegree() > 2 || e.eq.rightpoly.outerpoly.maxDegree() > 2) return e.errorDval();
            if (!e.eq.leftpoly.outerpoly.noDenom() || !e.eq.rightpoly.outerpoly.noDenom()) return e.errorDval();
            if ("=" != e.eq.sign) return u(e, t, ["=", r.args[0].polyToExpr(), 0]);
            var a = r.args[0];
            if (!a.noDenom()) return e.errorDval();
            var i = [];
            if (i = i.concat(a.getVars()), i = i.concat(e.eq.leftpoly.outerpoly.getVars()), i = i.concat(e.eq.rightpoly.outerpoly.getVars()), i = Array.from(new Set(i)), i.length > 2) return e.errorDval();
            if (e.solveForMyVar(n), e.eq.rightpoly.outerpoly.maxDegree() > 2) return e.errorDval();
            e.retval.length > 2 ? e.retval.push(["step", e.eq.eqToExpr(), "Solve Square Root"]) : (e.retval.push(ze("Solve Square Root.")), e.retval.push(Ue(Se(e.eq.eqToExpr()))));
            var s = e.solveEqDartval(t, N, !0, o);
            return s
        }

        function D(e, t, r, n) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (e.eq.leftpoly.outerpoly.maxDegree() > 1 || e.eq.rightpoly.outerpoly.maxDegree() > 1) return e.errorDval();
            if (!e.eq.leftpoly.outerpoly.noDenom() || !e.eq.rightpoly.outerpoly.noDenom()) return e.errorDval();
            var a = r.args[0],
                s = r.args[1],
                l = [];
            if (l = l.concat(s.getVarsTopBottom()), l = l.concat(e.eq.leftpoly.outerpoly.getVars()), l = l.concat(e.eq.rightpoly.outerpoly.getVars()), l = Array.from(new Set(l)), l.length > 2) return e.errorDval();
            if (s.noDenom()) {
                if (!(0 == a.maxDegree() && s.maxDegree() <= 4 || 1 == a.maxDegree() && 0 == s.maxDegree())) return e.errorDval()
            } else if (0 != a.maxDegree() || 0 != s.maxDegree() || 1 != s.maxDenomDegree()) return e.errorDval();
            if ("=" != e.eq.sign) return 1 != a.maxDegree() || 0 != s.maxDegree() || Ge(s.getConst().getNum()) ? i(e, t) : u(e, t, ["=", r.args[0].polyToExpr(), 0]);
            if (e.solveForMyVar(n), e.eq.rightpoly.outerpoly.maxDegree() > 0 && (!s.noDenom() || 0 != s.maxDegree() || 1 != Math.abs(s.getConst().numer) || !Ge(s.getConst().denom))) return e.errorDval();
            if (e.retval.length > 2 ? e.retval.push(["step", e.eq.eqToExpr(), "Solve Exponent"]) : (e.retval.push(ze("Solve Exponent.")), e.retval.push(Ue(Se(e.eq.eqToExpr())))), s.noDenom() && 0 == a.maxDegree() && s.maxDegree() <= 4) {
                var f = e.solveEqDartval(t, H(Ye), !1, o);
                return f
            }
            if (s.noDenom() && 1 == a.maxDegree() && 0 == s.maxDegree()) {
                var f = e.solveEqDartval(t, U, !0, o);
                return f
            }
            if (s.noDenom() || 0 != a.maxDegree() || 0 != s.maxDegree() || 1 != s.maxDenomDegree()) return e.errorDval();
            var f = e.solveEqDartval(t, H(Je), !0, o);
            return f
        }

        function S(e, t, r, n) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            if (e.eq.leftpoly.outerpoly.maxDegree() > 1 || e.eq.rightpoly.outerpoly.maxDegree() > 1) return e.errorDval();
            if (!e.eq.leftpoly.outerpoly.noDenom() || !e.eq.rightpoly.outerpoly.noDenom()) return e.errorDval();
            if ("=" != e.eq.sign) return e.errorDval();
            var i = r.args[0];
            if (i.noDenom()) {
                if (i.maxDegree() > 3) return e.errorDval()
            } else if (!(i.maxDegree() <= 1 && i.maxDenomDegree() <= 1)) return e.errorDval();
            var u = [];
            if (u = u.concat(i.getVarsTopBottom()), u = u.concat(e.eq.leftpoly.outerpoly.getVars()), u = u.concat(e.eq.rightpoly.outerpoly.getVars()), u = Array.from(new Set(u)), u.length > 2) return e.errorDval();
            if (e.solveForMyVar("#"), e.eq.rightpoly.outerpoly.maxDegree() > 0) return e.errorDval();
            e.retval.length > 2 ? e.retval.push(["step", e.eq.eqToExpr(), "Solve Logarithm"]) : (e.retval.push(ze("Solve Logarithm.")), e.retval.push(Ue(Se(e.eq.eqToExpr()))));
            var s = !1;
            if (o && (s = !0), i.noDenom()) {
                var l = e.solveEqDartval(t, C(Ye), s, a);
                return l
            }
            var l = e.solveEqDartval(t, C(Je), !0, a);
            return l
        }

        function k(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = e.eq.getOneInnerExpr(),
                o = n.op;
            return "abs" == o ? w(e, t, n, "#", r) : "sqrt" == o ? T(e, t, n, "#", r) : "^" == o ? D(e, t, n, "#", r) : "log" == o || "ln" == o ? S(e, t, n, "#", !1, r) : e.errorDval()
        }

        function C(e) {
            function t(t) {
                var r = V(t, e);
                return r
            }
            return t
        }

        function V(e, t) {
            var r = [],
                n = e[0],
                o = e[1][0],
                a = 10,
                i = 10;
            "ln" == o && (a = ["var", "e"], i = Math.E);
            var u = [n, ["^", a, e[1]],
                    ["^", a, e[2]]
                ],
                s = Se(u);
            r.push($e(s, "(Take exponent of both sides)"));
            var l = [n, e[1][1],
                    ["^", a, e[2]]
                ],
                f = Se(l);
            r.push(He(f));
            var c = [n, e[1][1], he.roundPrec(Te(["^", i, e[2]]))],
                p = Se(c);
            r.push(He(p));
            var h = t(c);
            r = r.concat(h.printList);
            var v = h.anslist;
            return new et(r, v)
        }

        function N(e) {
            var t = [],
                r = e[0],
                n = [r, e[1][1],
                    ["^", e[2], 2]
                ],
                o = Se(n);
            t.push($e(o, "(Square both sides)"));
            var a = [r, e[1][1], De(["^", e[2], 2]).polyToExpr()],
                i = Se(a);
            t.push(He(i));
            var u = Je(a);
            t = t.concat(u.printList);
            var s = u.anslist,
                l = u.ldanslist,
                f = u.rdanslist;
            return et.denom(t, s, l, f)
        }

        function P(e, t) {
            var r = e.innerexpr(),
                n = (r.op, t.innerexpr());
            n.op;
            if (!e.outerpoly.noDenom() || !t.outerpoly.noDenom()) return !1;
            var o = r.args[0],
                a = n.args[0];
            if (o.maxDegree() > 2) return !1;
            if (!o.noDenom()) return !1;
            if (a.maxDegree() > 2) return !1;
            if (!a.noDenom()) return !1;
            var i = [];
            return i = i.concat(o.getVars()), i = i.concat(a.getVars()), i = Array.from(new Set(i)), !(i.length > 1)
        }

        function L(e, t) {
            return 1 == e.outerpoly.maxDegree() && 1 == Object.keys(e.outerpoly.coefs).length && (1 == e.outerpoly.getCoefFromInt(1).getNum() && 0 == e.outerpoly.getCoefFromInt(0).getNum() && (1 == t.outerpoly.maxDegree() && 1 == Object.keys(t.outerpoly.coefs).length && (1 == t.outerpoly.getCoefFromInt(1).getNum() && 0 == t.outerpoly.getCoefFromInt(0).getNum())))
        }

        function F(e) {
            var t = ["#", "0"];
            return t = t.concat(e.outerpoly.getVars()), t = Array.from(new Set(t)), 2 == t.length
        }

        function O(e, t) {
            return !(!F(e) || !F(t))
        }

        function A(e, t, r) {
            var n = t.innerMap["#"],
                o = t.innerMap["&"];
            if (!t.outerpoly.noDenom() || !r.outerpoly.noDenom()) return !1;
            var a = n.args[0],
                i = o.args[0];
            if (a.maxDegree() > 2) return !1;
            if (!a.noDenom()) return !1;
            if (i.maxDegree() > 2) return !1;
            if (!i.noDenom()) return !1;
            var u = [];
            if (u = u.concat(a.getVars()), u = u.concat(i.getVars()), u = Array.from(new Set(u)), u.length > 1) return !1;
            var s = [];
            return s = s.concat(u), s = s.concat(t.outerpoly.getVars()), s = s.concat(r.outerpoly.getVars()), s = Array.from(new Set(s)), 3 == s.length && (!(t.outerpoly.maxDegree() > 1) && !(r.outerpoly.maxDegree() > 1))
        }

        function I(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            e.solveForMyVar("#");
            var n = e.eq.rightpoly.innerMap["#"].args[0],
                o = Ne.makeMap(n, e.eq.leftpoly.innerMap),
                a = Ne.makeMap(e.eq.rightpoly.outerpoly, e.eq.rightpoly.innerMap),
                i = new Ve(o, a),
                u = new Ve(o.multiply(ke(1)), a.multiply(ke(-1))),
                s = Se(i.eqToExpr()),
                l = Se(["=", i.leftpoly.polyToExpr(), ["-", i.rightpoly.polyToExpr()]]);
            e.retval.push(Ue("\\text'Either '\\,\\," + s + "\\,\\,\\text' ou '\\,\\," + l)), e.retval.push(ze("<hr>"));
            var f = (e.eq.rightpoly.innerMap["&"], []);
            f.push(He("\\text'Part 1: '\\,\\," + s));
            var c = new Ce(i, []);
            c.solveForMyVar("&");
            var p = Ae(c.retval, 1)[0];
            f = f.concat(p);
            var h = qe(c, c.eq.eqToExpr(), t),
                v = h.printList,
                d = h.anslist;
            f = f.concat(v), f.push(Be("<hr>")), f.push(Be("<hr>")), f.push(He("\\text'Part 2: '\\,\\," + l));
            var g = new Ce(u, []);
            g.solveForMyVar("&");
            var m = Ae(g.retval, 1)[0];
            f = f.concat(m);
            var y = qe(g, g.eq.eqToExpr(), t),
                x = y.printList,
                b = y.anslist;
            f = f.concat(x);
            var q = [];
            q = q.concat(d), q = q.concat(b);
            var E = be(q);
            r && (f.push(Be("<hr>")), f.push(Be("<u>Réponse:</u>")), f.push(Ie(E, Pe(e.eq.sign)))), e.anslist = e.anslist.concat(E);
            var M = e.toDval();
            return M.printList = f, M
        }

        function R(e, t, r, n) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (t.innerexpr().args[0].equalpoly(r.innerexpr().args[0])) return w(e, n, t.innerexpr(), "#", o);
            if (L(t, r)) {
                e.retval.push(ze("Solve Absolute Value.")), e.retval.push(Ue(Se(e.eq.eqToExpr())));
                var a = e.doAbsVarEq([e.eq.sign, t.polyToExpr(), je(r.innerexpr())[1]], n, o);
                return a
            }
            return O(t, r) ? I(e, n, o) : e.errorDval()
        }

        function _(e, t, r, n) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                a = t.innerexpr(),
                u = a.op,
                s = r.innerexpr(),
                l = s.op;
            if ("abs" == u && "abs" == l) {
                var f = P(t, r);
                if (!f) return e.errorDval();
                if ("=" != e.eq.sign) return i(e, n);
                var c = R(e, t, r, n, o);
                return c
            }
            if ("^" == u && "^" == l) {
                if (!t.outerpoly.noDenom() || !r.outerpoly.noDenom()) return e.errorDval();
                var p = a.args[0],
                    h = a.args[1],
                    v = s.args[0],
                    d = s.args[1];
                if (p.maxDegree() > 0) return e.errorDval();
                if (h.maxDegree() > 1) return e.errorDval();
                if (!h.noDenom()) return e.errorDval();
                if (v.maxDegree() > 0) return e.errorDval();
                if (d.maxDegree() > 1) return e.errorDval();
                if (!d.noDenom()) return e.errorDval();
                var g = [];
                if (g = g.concat(h.getVars()), g = g.concat(d.getVars()), g = Array.from(new Set(g)), g.length > 1) return e.errorDval();
                if (1 != t.outerpoly.maxDegree()) return e.errorDval();
                if (1 != t.outerpoly.getCoefFromInt(1).getNum() || 0 != t.outerpoly.getCoefFromInt(0).getNum()) return e.errorDval();
                if (1 != r.outerpoly.maxDegree()) return e.errorDval();
                if (1 != r.outerpoly.getCoefFromInt(1).getNum() || 0 != r.outerpoly.getCoefFromInt(0).getNum()) return e.errorDval();
                if ("=" != e.eq.sign) return i(e, n);
                e.retval.push(ze("Solve Exponent.")), e.retval.push(Ue(Se(e.eq.eqToExpr())));
                var c = e.solveEqDartval(n, G, !1, o);
                return c
            }
            if ("sqrt" == u && "sqrt" == l) {
                var f = P(t, r);
                if (!f) return e.errorDval();
                if ("=" != e.eq.sign) return e.errorDval();
                if (t.innerexpr().args[0].equalpoly(r.innerexpr().args[0])) return T(e, n, t.innerexpr(), "#", o);
                if (L(t, r)) {
                    e.retval.push(ze("Solve Square Root.")), e.retval.push(Ue(Se(e.eq.eqToExpr())));
                    var c = e.solveEqDartval(n, j, !0, o);
                    return c
                }
                return O(t, r) ? E(e, n, o) : e.errorDval()
            }
            return e.errorDval()
        }

        function j(e) {
            var t = [],
                r = e[0],
                n = [r, ["^", e[1], 2],
                    ["^", e[2], 2]
                ],
                o = Se(n);
            t.push($e(o, "(Square both sides)"));
            var a = [r, e[1][1], e[2][1]],
                i = Se(a);
            t.push(He(i));
            var u = c(a);
            t = t.concat(u.printList);
            var s = u.anslist;
            return new et(t, s)
        }

        function G(e) {
            var t = [],
                r = e[0],
                n = [r, ["log", e[1]],
                    ["log", e[2]]
                ],
                o = Se(n);
            t.push($e(o, "(Take log of both sides)"));
            var a = [r, ["*show", e[1][2],
                        ["log", e[1][1]]
                    ],
                    ["*show", e[2][2],
                        ["log", e[2][1]]
                    ]
                ],
                i = Se(a);
            t.push(He(i));
            var u = [r, e[1][2],
                    ["*show", ["/", ["log", e[2][1]],
                        ["log", e[1][1]]
                    ], e[2][2]]
                ],
                s = Se(u);
            t.push(He(s));
            var l = [r, e[1][2],
                    ["*show", he.roundPrec(Te(["/", ["log", e[2][1]],
                        ["log", e[1][1]]
                    ])), e[2][2]]
                ],
                f = Se(l);
            t.push(He(f));
            var c = Ze(l);
            t = t.concat(c.printList);
            var p = c.anslist;
            return new et(t, p)
        }

        function H(e) {
            function t(t) {
                var r = $(t, e);
                return r
            }
            return t
        }

        function $(e, t) {
            var r = [],
                n = e[0],
                o = [n, ["log", e[1]],
                    ["log", e[2]]
                ],
                a = Se(o);
            r.push($e(a, "(Take log of both sides)"));
            var i = [n, ["*show", e[1][2],
                        ["log", e[1][1]]
                    ],
                    ["log", e[2]]
                ],
                u = Se(i);
            r.push(He(u));
            var s = [n, e[1][2],
                    ["/", ["log", e[2]],
                        ["log", e[1][1]]
                    ]
                ],
                l = Se(s);
            r.push(He(l));
            var f = [n, e[1][2], he.roundPrec(Te(["/", ["log", e[2]],
                    ["log", e[1][1]]
                ]))],
                c = Se(f);
            r.push(He(c));
            var p = t(f);
            r = r.concat(p.printList);
            var h = p.anslist;
            return new et(r, h)
        }

        function U(e) {
            var t = [],
                r = e[0],
                n = (0, K.fracToPoly)(ye.default.fracnum(1).divide(De(e[1][2]).getConst())).polyToExpr(),
                o = [r, ["^", e[1], n],
                    ["^", e[2], n]
                ],
                a = Se(o);
            t.push($e(a, "(Raise both sides to power)"));
            var i = [r, e[1][1], De(["^", e[2], n]).polyToExpr()],
                u = Se(i);
            t.push(He(u));
            var s = Ye(i);
            t = t.concat(s.printList);
            var l = s.anslist;
            return new et(t, l)
        }

        function z(e) {
            var t = Qe(e),
                r = t.printList,
                n = t.anslist,
                o = t.ldanslist,
                a = t.rdanslist,
                i = v(e, r, n);
            return null != o && (i.ldanslist = o), null != a && (i.rdanslist = a), i
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var B = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }();
        r.solveForCubeVarPrint = c, r.dGenEq = x;
        var Q = e(43),
            W = o(Q),
            K = e(43),
            J = e(3),
            Y = n(J),
            Z = e(5),
            X = n(Z),
            ee = e(6),
            te = n(ee),
            re = e(7),
            ne = n(re),
            oe = e(11),
            ae = n(oe),
            ie = e(12),
            ue = n(ie),
            se = e(40),
            le = n(se),
            fe = e(41),
            ce = n(fe),
            pe = e(45),
            he = n(pe),
            ve = e(48),
            de = n(ve),
            ge = e(8),
            me = (o(ge), e(10)),
            ye = o(me),
            xe = ae.checkAnswersGen,
            be = ae.checkDups,
            qe = ae.doAbsVarEqInner,
            Ee = (ne.Dval, ne.dvalToJs3),
            Me = ae.eqScratchToDartval,
            we = de.evalAtVal,
            Te = X.evalExpr,
            De = te.exprToPoly,
            Se = le.exprToText,
            ke = ue.genconstant,
            Ce = ae.GenEqScratch,
            Ve = ae.GenEquation,
            Ne = ue.GenPolynomial,
            Pe = ae.getAbsOpType,
            Le = ae.getDenomAns,
            Fe = ae.getEqScratch,
            Oe = ae.getGenEqScratch,
            Ae = ae.getPrintListR2,
            Ie = ae.getSolMsg,
            Re = ae.getSolMsga,
            _e = ue.InnerExpr,
            je = ue.innerexprToExpr,
            Ge = ce.isInt,
            He = de.mDiv,
            $e = de.mDiva,
            Ue = de.mmsg,
            ze = de.msg,
            Be = de.msgstr,
            Qe = ae.showSimpleAbsVarEq,
            We = le.signTransform,
            Ke = ae.simplifyEq,
            Je = ae.solveForDenomVarPrint2,
            Ye = ae.solveForGenVarPrint,
            Ze = ae.solveForLinVarPrint,
            Xe = ae.solvePrint,
            et = ae.Tval,
            tt = function() {
                function e(t, r) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    a(this, e), this.fracexpr = t, this.val = r, this.notOpen = n, this.isDomain = o
                }
                return B(e, null, [{
                    key: "makeDomain",
                    value: function(t, r, n, o) {
                        return new e(t, r, n, o)
                    }
                }, {
                    key: "v",
                    value: function(t, r) {
                        var n = Te(t);
                        return new e(t, n, r)
                    }
                }, {
                    key: "domain",
                    value: function(t) {
                        var r = Te(t);
                        return e.makeDomain(t, r, !0, !0)
                    }
                }]), e
            }(),
            rt = function e(t, r) {
                a(this, e), this.lbound = t, this.rbound = r
            }
    }, {}],
    47: [function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e) {
            var t = l(e),
                r = s(t);
            return r
        }

        function u(e) {
            var t = i(e),
                r = t.surdReduce(),
                n = r.surdToExprSqrt();
            return n
        }

        function s(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = v(s);
                return n[t](r)
            }
            return e
        }

        function l(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = k.makeVisitorOperators(l);
                return n[t](r)
            }
            return f(e)
        }

        function f(e) {
            return new F({
                1: P.default.fracnum(e)
            })
        }

        function c() {
            return f(NaN)
        }

        function p(e) {
            return new F({
                1: e
            })
        }

        function h(e, t) {
            return t.isConst() ? f(e) : c()
        }

        function v(e) {
            var t = {
                color: function(t) {
                    var r = (t[0], t[1]);
                    return e(r)
                },
                "?": function(t) {
                    return e(0)
                },
                "+": function(t) {
                    var r = f(0);
                    return t.forEach(function(t) {
                        return r = r.add(e(t))
                    }), r
                },
                "-": function(t) {
                    return 1 == t.length ? f(-1).multiply(e(t[0])) : 2 == t.length ? e(t[0]).subtract(e(t[1])) : c()
                },
                "*": function(t) {
                    var r = f(1);
                    return t.forEach(function(t) {
                        return r = r.multiply(e(t))
                    }), r
                },
                "/": function(t) {
                    if (2 == t.length) {
                        var r = e(t[1]);
                        return e(t[0]).divide(r)
                    }
                    return c()
                },
                "^": function(t) {
                    var r = e(t[0]),
                        n = e(t[1]),
                        o = f(1);
                    if (n.isConst()) {
                        var a = n.getNum();
                        o = 0 == a ? f(1) : V.isInt(a) ? r.pow(n) : r.isConst() ? h(Math.pow(r.getNum(), a), r) : c()
                    } else o = c();
                    return o
                },
                sqrt: function(t) {
                    var r = t[0],
                        n = e(r);
                    if (n.isConst()) {
                        var o = {},
                            a = e(r).getNum();
                        return o[a] = P.default.fracnum(1), new F(o)
                    }
                    return c()
                },
                sin: function(t) {
                    var r = t[0];
                    return h(Math.sin(e(r).getNum()), e(r))
                },
                cos: function(t) {
                    var r = t[0];
                    return h(Math.cos(e(r).getNum()), e(r))
                },
                tan: function(t) {
                    var r = t[0];
                    return h(Math.tan(e(r).getNum()), e(r))
                },
                log: function(t) {
                    var r = t[0];
                    return h(Math.log(e(r).getNum()) / Math.log(10), e(r))
                },
                ln: function(t) {
                    var r = t[0];
                    return h(Math.log(e(r).getNum()), e(r))
                },
                abs: function(t) {
                    var r = t[0];
                    return h(Math.abs(e(r).getNum()), e(r))
                }
            };
            return t.frac = t["/"], t.dfrac = t["/"], t["*show"] = t["*"], t["*paren"] = t["*"], t
        }

        function d(e) {
            if (E(e.dcoefs) > 2) return c();
            var t = new F(e.coefs),
                r = new F(e.dcoefs),
                n = k.getNonzeroKeys(e.dcoefs);
            if (2 == n.length) {
                var o = n[0],
                    a = n[1],
                    i = r.getCoef(a),
                    u = r.getCoef(o),
                    s = {};
                s[a] = i.multiply(P.default.fracnum(-1)), s[o] = u;
                var l = new F(s),
                    f = r.multiply(l),
                    p = t.multiply(l),
                    h = x(f.coefs),
                    v = x(p.coefs),
                    d = new F(v),
                    g = new F(h);
                return d.divide(g)
            }
            if (1 == n.length) {
                var o = n[0],
                    u = r.getCoef(o),
                    s = {};
                s[o] = u;
                var l = new F(s),
                    f = r.multiply(l),
                    p = t.multiply(l),
                    h = x(f.coefs),
                    v = x(p.coefs),
                    d = new F(v),
                    g = new F(h);
                return d.divide(g)
            }
            return c()
        }

        function g(e, t) {
            var r = e[t];
            return null == r && (r = P.default.fracnum(0)), r
        }

        function m(e, t) {
            var r = {};
            for (var n in e)
                if (0 != g(e, n).getNum())
                    for (var o in t)
                        if (0 != g(t, o).getNum()) {
                            var a = g(e, n).multiply(g(t, o)),
                                i = Number(n) * Number(o),
                                u = i.toString();
                            null == r[u] ? r[u] = a : r[u] = r[u].add(a)
                        } return r
        }

        function y(e, t) {
            var r = {};
            for (var n in e) null == r[n] ? r[n] = e[n] : r[n] = r[n].add(e[n]);
            for (var n in t) null == r[n] ? r[n] = t[n] : r[n] = r[n].add(t[n]);
            return r
        }

        function x(e) {
            var t = {};
            for (var r in e) {
                var n = 0;
                try {
                    n = Number(r)
                } catch (e) {
                    n = 0
                }
                if (n <= 0 || !V.isInt(n)) return {
                    "-1": P.default.fracnum(0)
                };
                for (var o = Math.floor(Math.sqrt(n)), a = n, i = e[r], u = 2; u <= o; u++)
                    for (; a % (u * u) == 0;) a /= u * u, i = i.multiply(P.default.fracnum(u));
                var s = a.toString();
                null == t[s] ? t[s] = i : t[s] = t[s].add(i)
            }
            return t
        }

        function b(e, t) {
            var r = ["+"],
                n = [];
            n = n.concat(Object.keys(e)), n.sort();
            var o = !0,
                a = !1,
                i = void 0;
            try {
                for (var u, s = n[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                    var l = u.value,
                        f = F.vartermInnerSurd(e[l], l, t);
                    null != f && r.push(f)
                }
            } catch (e) {
                a = !0, i = e
            } finally {
                try {
                    !o && s.return && s.return()
                } finally {
                    if (a) throw i
                }
            }
            return 1 == r.length ? r = 0 : 2 == r.length && (r = r[1]), r
        }

        function q(e, t, r) {
            return 1 == e.getNum() ? t : e.getNum() == -1 ? ["-", t] : ["*", r(e), t]
        }

        function E(e) {
            var t = 0;
            for (var r in e) 0 != e[r].getNum() && (t += 1);
            return t
        }

        function M(e, t) {
            for (var r in e)
                if (null != e[r] && 0 != e[r].getNum() && g(e, r).getNum() != g(t, r).getNum()) return !1;
            for (var r in t)
                if (null != t[r] && 0 != t[r].getNum() && g(e, r).getNum() != g(t, r).getNum()) return !1;
            return !0
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var w = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }();
        r.getSurdExprSqrt = u;
        var T = e(2),
            D = o(T),
            S = e(40),
            k = o(S),
            C = e(41),
            V = o(C),
            N = e(10),
            P = n(N),
            L = D.exprToFrac,
            F = function() {
                function e(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            1: P.default.fracnum(1)
                        },
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    a(this, e), this.coefs = t, this.dcoefs = r, this.d1 = n
                }
                return w(e, [{
                    key: "getNum",
                    value: function() {
                        return this.getConst().getNum()
                    }
                }, {
                    key: "getConst",
                    value: function() {
                        return L(this.surdToExprSqrt())
                    }
                }, {
                    key: "getCoef",
                    value: function(e) {
                        return g(this.coefs, e)
                    }
                }, {
                    key: "noDenom",
                    value: function() {
                        return 0 == this.d1 || 1 == g(this.dcoefs, "1").getNum() && 1 == E(this.dcoefs)
                    }
                }, {
                    key: "isError",
                    value: function() {
                        return isNaN(g(this.coefs, "1").getNum())
                    }
                }, {
                    key: "isConst",
                    value: function() {
                        return this.noDenom() && !this.isError() && 0 != g(this.coefs, "1").getNum() && 1 == E(this.coefs)
                    }
                }, {
                    key: "surdToExprInner",
                    value: function(e) {
                        return this.noDenom() ? b(this.coefs, e) : this.surdToExprInnerHelper(e)
                    }
                }, {
                    key: "surdToExprInnerHelper",
                    value: function(e) {
                        if (this.noDenom()) return b(this.coefs, e);
                        var t = b(this.coefs, e),
                            r = b(this.dcoefs, e);
                        return ["/", t, r]
                    }
                }, {
                    key: "surdToExprSqrt",
                    value: function() {
                        return this.surdToExprInner(P.default.getFracExpr)
                    }
                }, {
                    key: "surdReduce",
                    value: function() {
                        if (this.noDenom()) {
                            var t = x(this.coefs);
                            return "undefined" == typeof t[-1] ? new e(t) : c()
                        }
                        var t = x(this.coefs),
                            r = x(this.dcoefs);
                        if (null == t || null == r) return c();
                        var n = new e.MF(t, r),
                            o = d(n);
                        return o
                    }
                }, {
                    key: "countCoefs",
                    value: function() {
                        var e = 0;
                        for (var t in this.coefs) 0 != this.coefs[t].getNum() && (e += 1);
                        return e
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        if (this.isError() || t.isError()) return c();
                        var r, n;
                        if (this.noDenom() && t.noDenom()) return r = y(this.coefs, t.coefs), new e(r);
                        if (M(this.dcoefs, t.dcoefs)) return r = y(this.coefs, t.coefs), new e.MF(r, this.dcoefs);
                        var o = m(this.coefs, t.dcoefs),
                            a = m(t.coefs, this.dcoefs);
                        return r = y(o, a), n = m(this.dcoefs, t.dcoefs), new e.MF(r, n)
                    }
                }, {
                    key: "subtract",
                    value: function(e) {
                        return this.isError() || e.isError() ? c() : this.add(e.multiply(f(-1)))
                    }
                }, {
                    key: "multiply",
                    value: function(t) {
                        if (this.isError() || t.isError()) return c();
                        var r = {},
                            n = {};
                        if (t.isConst()) {
                            for (var o in this.coefs) r[o] = this.getCoef(o).multiply(t.getConst());
                            return new e.MF(r, this.dcoefs)
                        }
                        return r = m(this.coefs, t.coefs), n = m(this.dcoefs, t.dcoefs), e.MF(r, n)
                    }
                }, {
                    key: "divide",
                    value: function(t) {
                        if (this.isError() || t.isError()) return c();
                        var r = {};
                        if (t.isConst()) {
                            for (var n in this.coefs) r[n] = this.coefs[n].divide(t.getConst());
                            return e.MF(r, this.dcoefs)
                        }
                        var o = new e.MF(t.dcoefs, t.coefs);
                        return this.multiply(o)
                    }
                }, {
                    key: "pow",
                    value: function(e) {
                        if (this.isError() || e.isError()) return c();
                        var t;
                        if (!e.isConst()) return c();
                        t = e.getConst();
                        var r = t.getNum();
                        if (this.isConst()) return p(this.getConst().pow(r));
                        var n = f(1);
                        if (Math.abs(r - Math.round(r)) > 1e-4) return c();
                        if (r >= 0)
                            for (var o = 0; o < r; o++) n = n.multiply(this);
                        else
                            for (var o = 0; o < -r; o++) n = n.divide(this);
                        return n
                    }
                }], [{
                    key: "MF",
                    value: function(t, r) {
                        return new e(t, r, 1)
                    }
                }, {
                    key: "vartermInnerSurd",
                    value: function(e, t, r) {
                        return null == e || 0 == e.getNum() ? null : "1" === t ? r(e) : q(e, ["sqrt", Number(t)], r)
                    }
                }]), e
            }()
    }, {}],
    48: [function(e, t, r) {
        "use strict";

        function n(e, t, r) {
            if (e instanceof Array) {
                var o = e[0],
                    a = e.slice(1);
                if ("var" === o) return null == r ? t : a[0] == r ? t : e;
                var i = [];
                return i.push(o), a.forEach(function(e) {
                    var o = n(e, t, r);
                    i.push(o)
                }), i
            }
            return e
        }

        function o(e) {
            return ["MDiv", e]
        }

        function a(e, t) {
            return ["MDiv", e, "MobDiv", t]
        }

        function i(e, t) {
            return ["MDiva", e, t]
        }

        function u(e) {
            return ["MDivEq", e]
        }

        function s(e, t) {
            return ["MDivEq", e, t]
        }

        function l(e, t) {
            return ["MDivSmall", e, t]
        }

        function f(e) {
            return ["stepstr", e]
        }

        function c(e) {
            return ["msgstr", e, "MHeadDiv"]
        }

        function p(e) {
            return ["msgstr", e]
        }

        function h(e) {
            return ["emsgstr", e]
        }

        function v(e) {
            return ["msg", e]
        }

        function d(e) {
            return ["mmsg", e]
        }

        function g(e, t) {
            return ["mmsg", e, t]
        }

        function m(e, t) {
            return ["msgstr", e, t]
        }

        function y(e, t) {
            return ["emsgstr", e, t]
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.evalAtVal = n, r.mDiv = o, r.mobDiv = a, r.mDiva = i, r.mDivEq = u, r.mDivEqa = s, r.mDivSmall = l, r.stepstr = f, r.headstr = c, r.msgstr = p, r.emsgstr = h, r.msg = v, r.mmsg = d, r.mmsg2 = g, r.msgstr2 = m, r.emsgstr2 = y
    }, {}],
    49: [function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }

        function a(e, t) {
            var r = [];
            return e.forEach(function(e) {
                return r.push(t(e))
            }), r
        }

        function i(e) {
            var t = a(e, function(e) {
                    return A(e.fracToExpr())
                }),
                r = t.join("+");
            return r
        }

        function u(e) {
            var t = new Map;
            return e.forEach(function(e) {
                var r = JSON.stringify(e.coefs);
                t.has(r) ? t.set(r, t.get(r) + 1) : t.set(r, 1)
            }), t
        }

        function s(e, t) {
            var r = new Map;
            return Array.from(e.keys()).forEach(function(t) {
                r.set(t, e.get(t))
            }), Array.from(t.keys()).forEach(function(e) {
                r.has(e) ? r.set(e, Math.max(r.get(e), t.get(e))) : r.set(e, t.get(e))
            }), r
        }

        function l(e) {
            var t = [];
            return Array.from(e.keys()).forEach(function(r) {
                for (var n = e.get(r), o = 0; o < n; o++) {
                    var a = JSON.parse(r),
                        i = {};
                    Object.keys(a).forEach(function(e) {
                        var t = a[e];
                        i[e] = new O.default(t.numer, t.denom)
                    });
                    var u = new L.default(i);
                    t.push(u)
                }
            }), t
        }

        function f(e) {
            var t = a(e, function(e) {
                    return e.fracToExpr()
                }),
                r = ["+"];
            return r = r.concat(t)
        }

        function c(e) {
            var t = [];
            return e.forEach(function(e) {
                if (e instanceof Array && "*" == e[0] && 3 == e.length && !(e[1] instanceof Array)) {
                    var r = ["*", ["-", e[1]], e[2]];
                    t.push(r)
                } else {
                    var r = d(["*", -1, e]);
                    t.push(r)
                }
            }), t
        }

        function p(e) {
            var t = z(e),
                r = [],
                n = A(e),
                o = e;
            t.retval.push(["step", n, ""]);
            var c = h(e[1]),
                p = h(e[2]),
                v = a(c, _.exprToPolyFraction),
                d = a(p, _.exprToPolyFraction),
                g = a(v, function(e) {
                    return e.factorDenom()
                }),
                m = a(d, function(e) {
                    return e.factorDenom()
                }),
                y = i(g) + " = " + i(m);
            y != n && r.push(H(y));
            var x = new Map;
            g.forEach(function(e) {
                var t = u(e.denom);
                x = s(x, t)
            }), m.forEach(function(e) {
                var t = u(e.denom);
                x = s(x, t)
            });
            var b = l(x),
                q = [];
            if (b.forEach(function(e) {
                    e.maxDegree() > 0 && q.push(e)
                }), !(q.length > 0)) return t.errorDartvalJ();
            r.push($("Multiply all terms by " + I(j(q)) + " and cancel:"));
            var E = a(g, function(e) {
                    return e.multOrCancelList(q)
                }),
                M = a(m, function(e) {
                    return e.multOrCancelList(q)
                }),
                w = i(E) + "=" + i(M);
            r.push(H(w));
            var T = ["=", f(E), f(M)],
                D = B(T, o, C.solveForCubeVarPrint, !0, !0),
                S = D.printList;
            r = r.concat(S);
            var k = t.toDval();
            return k.printList = r, U(k)
        }

        function h(e) {
            var t = [];
            if (e instanceof Array) {
                var r = e[0],
                    n = e.slice(1);
                if ("+" != r && "-" != r || 2 != n.length)
                    if ("+" == r && n.length > 2) {
                        var o = h(n[0]);
                        t = o;
                        for (var a = 1; a < n.length; a++) {
                            var i = h(n[a]);
                            t = t.concat(i)
                        }
                    } else if ("-" == r && n.length > 1) {
                    var o = h(n[0]);
                    t = t.concat(c(o))
                } else t = [e];
                else {
                    var o = h(n[0]),
                        i = h(n[1]);
                    t = o, t = "+" == r ? t.concat(i) : t.concat(c(i))
                }
            } else t = [e];
            return t
        }

        function v(e) {
            var t = R(e),
                r = m(t);
            return r
        }

        function d(e) {
            var t = v(e),
                r = t.polyToExpr();
            return r
        }

        function g(e) {
            var t = v(e),
                r = t.polyToExprMixed();
            return r
        }

        function m(e) {
            if (e instanceof Array) {
                var t = e[0],
                    r = e.slice(1),
                    n = G(m);
                return n[t](r)
            }
            return e
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.myMap = a, r.getSubTerms = c, r.dVarFracAddEq = p, r.getAddTerms = h, r.exprToPolyV12 = v, r.getPolyExpr = d, r.getPolyExprMixed = g, r.visit1ToVisit2 = m;
        var y = e(11),
            x = o(y),
            b = e(42),
            q = o(b),
            E = e(6),
            M = o(E),
            w = e(48),
            T = o(w),
            D = e(40),
            S = o(D),
            k = e(46),
            C = o(k),
            V = e(7),
            N = o(V),
            P = e(43),
            L = n(P),
            F = e(10),
            O = n(F),
            A = S.exprToText,
            I = S.exprToTextH,
            R = S.exprToVisit1,
            _ = q.PolyFraction,
            j = q.polylistToExpr,
            G = M.makeComputePolyOperators,
            H = T.mDiv,
            $ = T.msgstr,
            U = N.dvalToJs3,
            z = (N.Dval, x.Tval, x.getGenEqScratch),
            B = x.solvePrint
    }, {}]
}, {}, [29]);