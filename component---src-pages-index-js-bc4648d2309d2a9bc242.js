(self.webpackChunkportfolio_gatsby = self.webpackChunkportfolio_gatsby || []).push([[678], {
  7228: function(t) {
    t.exports = function(t, e) {
      (null == e || e > t.length) && (e = t.length)
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
      return r
    }, t.exports.default = t.exports, t.exports.__esModule = !0
  },
  3646: function(t, e, n) {
    var r = n(7228)
    t.exports = function(t) {if (Array.isArray(t)) return r(t)}, t.exports.default = t.exports, t.exports.__esModule = !0
  },
  9100: function(t, e, n) {
    var r = n(9489), o = n(7067)

    function i (e, n, a) {
      return o() ? (t.exports = i = Reflect.construct, t.exports.default = t.exports, t.exports.__esModule = !0) : (t.exports = i = function(t, e, n) {
        var o = [null]
        o.push.apply(o, e)
        var i = new (Function.bind.apply(t, o))
        return n && r(i, n.prototype), i
      }, t.exports.default = t.exports, t.exports.__esModule = !0), i.apply(null, arguments)
    }

    t.exports = i, t.exports.default = t.exports, t.exports.__esModule = !0
  },
  9713: function(t) {
    t.exports = function(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t
    }, t.exports.default = t.exports, t.exports.__esModule = !0
  },
  7067: function(t) {
    t.exports = function() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1
      if (Reflect.construct.sham) return !1
      if ("function" == typeof Proxy) return !0
      try {return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0} catch (t) {return !1}
    }, t.exports.default = t.exports, t.exports.__esModule = !0
  },
  6860: function(t) {t.exports = function(t) {if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)}, t.exports.default = t.exports, t.exports.__esModule = !0},
  8206: function(t) {t.exports = function() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}, t.exports.default = t.exports, t.exports.__esModule = !0},
  319: function(t, e, n) {
    var r = n(3646), o = n(6860), i = n(379), a = n(8206)
    t.exports = function(t) {return r(t) || o(t) || i(t) || a()}, t.exports.default = t.exports, t.exports.__esModule = !0
  },
  379: function(t, e, n) {
    var r = n(7228)
    t.exports = function(t, e) {
      if (t) {
        if ("string" == typeof t) return r(t, e)
        var n = Object.prototype.toString.call(t).slice(8, -1)
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
      }
    }, t.exports.default = t.exports, t.exports.__esModule = !0
  },
  7757: function(t, e, n) {t.exports = n(5666)},
  5264: function(t, e, n) {
    "use strict"
    n.d(e, { Z: function() {return o} })
    var r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
      o = function(t) {
        var e = {}
        return function(n) {return void 0 === e[n] && (e[n] = t(n)), e[n]}
      }((function(t) {return r.test(t) || 111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && t.charCodeAt(2) < 91}))
  },
  6725: function(t, e, n) {
    var r = n(3395)
    t.exports = { MDXRenderer: r }
  },
  3395: function(t, e, n) {
    var r = n(9100), o = n(319), i = n(9713), a = n(7316), u = ["scope", "children"]

    function s (t, e) {
      var n = Object.keys(t)
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t)
        e && (r = r.filter((function(e) {return Object.getOwnPropertyDescriptor(t, e).enumerable}))), n.push.apply(n, r)
      }
      return n
    }

    function c (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {}
        e % 2 ? s(Object(n), !0).forEach((function(e) {i(t, e, n[e])})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(e) {Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))}))
      }
      return t
    }

    var l = n(7294), f = n(4983).mdx, d = n(9480).useMDXScope
    t.exports = function(t) {
      var e = t.scope, n = t.children, i = a(t, u), s = d(e), p = l.useMemo((function() {
        if (!n) return null
        var t = c({ React: l, mdx: f }, s), e = Object.keys(t), i = e.map((function(e) {return t[e]}))
        return r(Function, ["_fn"].concat(o(e), ["" + n])).apply(void 0, [{}].concat(o(i)))
      }), [n, e])
      return l.createElement(p, c({}, i))
    }
  },
  8634: function(t, e, n) {
    "use strict"
    n.r(e), n.d(e, { default: function() {return Va} })
    var r = n(7294), o = n(1998), i = n(3751)

    function a (t, e, n, r, o, i, a) {
      try {var u = t[i](a), s = u.value} catch (c) {return void n(c)}
      u.done ? e(s) : Promise.resolve(s).then(r, o)
    }

    var u = n(7757), s = n.n(u), c = n(6725),
      l = function(t, e) {return (l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {t.__proto__ = e} || function(t, e) {for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])})(t, e)}

    function f (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null")

      function n () {this.constructor = t}

      l(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }

    var d = function() {
      return (d = Object.assign || function(t) {
        for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
        return t
      }).apply(this, arguments)
    }

    function p (t, e) {
      var n = {}
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r])
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
      }
      return n
    }

    Object.create

    function v (t, e) {
      var n = "function" == typeof Symbol && t[Symbol.iterator]
      if (!n) return t
      var r, o, i = n.call(t), a = []
      try {for (; (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)} catch (u) {o = { error: u }} finally {try {r && !r.done && (n = i.return) && n.call(i)} finally {if (o) throw o.error}}
      return a
    }

    function m (t, e, n) {
      if (n || 2 === arguments.length) for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o])
      return t.concat(r || e)
    }

    Object.create
    var h = function(t, e, n) {return Math.min(Math.max(n, t), e)}, y = .001

    function g (t) {
      var e, n, r = t.duration, o = void 0 === r ? 800 : r, i = t.bounce, a = void 0 === i ? .25 : i, u = t.velocity,
        s = void 0 === u ? 0 : u, c = t.mass, l = void 0 === c ? 1 : c, f = 1 - a
      f = h(.05, 1, f), o = h(.01, 10, o / 1e3), f < 1 ? (e = function(t) {
        var e = t * f, n = e * o, r = e - s, i = x(t, f), a = Math.exp(-n)
        return y - r / i * a
      }, n = function(t) {
        var n = t * f * o, r = n * s + s, i = Math.pow(f, 2) * Math.pow(t, 2) * o, a = Math.exp(-n),
          u = x(Math.pow(t, 2), f)
        return (-e(t) + y > 0 ? -1 : 1) * ((r - i) * a) / u
      }) : (e = function(t) {return Math.exp(-t * o) * ((t - s) * o + 1) - .001}, n = function(t) {return Math.exp(-t * o) * (o * o * (s - t))})
      var d = function(t, e, n) {
        for (var r = n, o = 1; o < 12; o++) r -= t(r) / e(r)
        return r
      }(e, n, 5 / o)
      if (o *= 1e3, isNaN(d)) return { stiffness: 100, damping: 10, duration: o }
      var p = Math.pow(d, 2) * l
      return { stiffness: p, damping: 2 * f * Math.sqrt(l * p), duration: o }
    }

    function x (t, e) {return t * Math.sqrt(1 - e * e)}

    var b = ["duration", "bounce"], w = ["stiffness", "damping", "mass"]

    function E (t, e) {return e.some((function(e) {return void 0 !== t[e]}))}

    function P (t) {
      var e = t.from, n = void 0 === e ? 0 : e, r = t.to, o = void 0 === r ? 1 : r, i = t.restSpeed,
        a = void 0 === i ? 2 : i, u = t.restDelta, s = p(t, ["from", "to", "restSpeed", "restDelta"]),
        c = { done: !1, value: n }, l = function(t) {
          var e = d({
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1
          }, t)
          if (!E(t, w) && E(t, b)) {
            var n = g(t);
            (e = d(d(d({}, e), n), { velocity: 0, mass: 1 })).isResolvedFromDuration = !0
          }
          return e
        }(s), f = l.stiffness, v = l.damping, m = l.mass, h = l.velocity, y = l.duration, P = l.isResolvedFromDuration,
        T = A, k = A

      function S () {
        var t = h ? -h / 1e3 : 0, e = o - n, r = v / (2 * Math.sqrt(f * m)), i = Math.sqrt(f / m) / 1e3
        if (null != u || (u = Math.abs(o - n) <= 1 ? .01 : .4), r < 1) {
          var a = x(i, r)
          T = function(n) {
            var u = Math.exp(-r * i * n)
            return o - u * ((t + r * i * e) / a * Math.sin(a * n) + e * Math.cos(a * n))
          }, k = function(n) {
            var o = Math.exp(-r * i * n)
            return r * i * o * (Math.sin(a * n) * (t + r * i * e) / a + e * Math.cos(a * n)) - o * (Math.cos(a * n) * (t + r * i * e) - a * e * Math.sin(a * n))
          }
        } else if (1 === r) T = function(n) {return o - Math.exp(-i * n) * (e + (t + i * e) * n)} else {
          var s = i * Math.sqrt(r * r - 1)
          T = function(n) {
            var a = Math.exp(-r * i * n), u = Math.min(s * n, 300)
            return o - a * ((t + r * i * e) * Math.sinh(u) + s * e * Math.cosh(u)) / s
          }
        }
      }

      return S(), {
        next: function(t) {
          var e = T(t)
          if (P) c.done = t >= y else {
            var n = 1e3 * k(t), r = Math.abs(n) <= a, i = Math.abs(o - e) <= u
            c.done = r && i
          }
          return c.value = c.done ? o : e, c
        }, flipTarget: function() {
          var t
          h = -h, n = (t = [o, n])[0], o = t[1], S()
        }
      }
    }

    P.needsInterpolation = function(t, e) {return "string" == typeof t || "string" == typeof e}
    var A = function(t) {return 0}, T = function(t, e, n) {
        var r = e - t
        return 0 === r ? 1 : (n - t) / r
      }, k = function(t, e, n) {return -n * t + n * e + t},
      S = function(t, e) {return function(n) {return Math.max(Math.min(n, e), t)}},
      C = function(t) {return t % 1 ? Number(t.toFixed(5)) : t}, M = /(-)?([\d]*\.?[\d])+/g,
      L = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
      V = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i

    function R (t) {return "string" == typeof t}

    var O = { test: function(t) {return "number" == typeof t}, parse: parseFloat, transform: function(t) {return t} },
      j = d(d({}, O), { transform: S(0, 1) }), D = d(d({}, O), { default: 1 }),
      N = function(t, e) {return function(n) {return Boolean(R(n) && V.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e))}},
      B = function(t, e, n) {
        return function(r) {
          var o
          if (!R(r)) return r
          var i = r.match(M), a = i[0], u = i[1], s = i[2], c = i[3]
          return (o = {})[t] = parseFloat(a), o[e] = parseFloat(u), o[n] = parseFloat(s), o.alpha = void 0 !== c ? parseFloat(c) : 1, o
        }
      }, F = S(0, 255), I = d(d({}, O), { transform: function(t) {return Math.round(F(t))} }), _ = {
        test: N("rgb", "red"),
        parse: B("red", "green", "blue"),
        transform: function(t) {
          var e = t.red, n = t.green, r = t.blue, o = t.alpha, i = void 0 === o ? 1 : o
          return "rgba(" + I.transform(e) + ", " + I.transform(n) + ", " + I.transform(r) + ", " + C(j.transform(i)) + ")"
        }
      }
    var U = {
        test: N("#"), parse: function(t) {
          var e = "", n = "", r = "", o = ""
          return t.length > 5 ? (e = t.substr(1, 2), n = t.substr(3, 2), r = t.substr(5, 2), o = t.substr(7, 2)) : (e = t.substr(1, 1), n = t.substr(2, 1), r = t.substr(3, 1), o = t.substr(4, 1), e += e, n += n, r += r, o += o), {
            red: parseInt(e, 16),
            green: parseInt(n, 16),
            blue: parseInt(r, 16),
            alpha: o ? parseInt(o, 16) / 255 : 1
          }
        }, transform: _.transform
      }, H = function(t) {
        return {
          test: function(e) {return R(e) && e.endsWith(t) && 1 === e.split(" ").length},
          parse: parseFloat,
          transform: function(e) {return "" + e + t}
        }
      }, X = H("deg"), z = H("%"), Y = H("px"), W = H("vh"), G = H("vw"), Z = d(d({}, z), {
        parse: function(t) {return z.parse(t) / 100},
        transform: function(t) {return z.transform(100 * t)}
      }), q = {
        test: N("hsl", "hue"),
        parse: B("hue", "saturation", "lightness"),
        transform: function(t) {
          var e = t.hue, n = t.saturation, r = t.lightness, o = t.alpha, i = void 0 === o ? 1 : o
          return "hsla(" + Math.round(e) + ", " + z.transform(C(n)) + ", " + z.transform(C(r)) + ", " + C(j.transform(i)) + ")"
        }
      }, K = function(t, e, n) {
        var r = t * t, o = e * e
        return Math.sqrt(Math.max(0, n * (o - r) + r))
      }, $ = [U, _, q], J = function(t) {return $.find((function(e) {return e.test(t)}))},
      Q = function(t) {return "'" + t + "' is not an animatable color. Use the equivalent color code instead."},
      tt = function(t, e) {
        var n = J(t), r = J(e)
        Q(t), Q(e), n.transform, r.transform
        var o = n.parse(t), i = r.parse(e), a = d({}, o), u = n === q ? k : K
        return function(t) {
          for (var e in a) "alpha" !== e && (a[e] = u(o[e], i[e], t))
          return a.alpha = k(o.alpha, i.alpha, t), n.transform(a)
        }
      }, et = {
        test: function(t) {return _.test(t) || U.test(t) || q.test(t)},
        parse: function(t) {return _.test(t) ? _.parse(t) : q.test(t) ? q.parse(t) : U.parse(t)},
        transform: function(t) {return R(t) ? t : t.hasOwnProperty("red") ? _.transform(t) : q.transform(t)}
      }, nt = "${c}", rt = "${n}"

    function ot (t) {
      var e = [], n = 0, r = t.match(L)
      r && (n = r.length, t = t.replace(L, nt), e.push.apply(e, r.map(et.parse)))
      var o = t.match(M)
      return o && (t = t.replace(M, rt), e.push.apply(e, o.map(O.parse))), { values: e, numColors: n, tokenised: t }
    }

    function it (t) {return ot(t).values}

    function at (t) {
      var e = ot(t), n = e.values, r = e.numColors, o = e.tokenised, i = n.length
      return function(t) {
        for (var e = o, n = 0; n < i; n++) e = e.replace(n < r ? nt : rt, n < r ? et.transform(t[n]) : C(t[n]))
        return e
      }
    }

    var ut = function(t) {return "number" == typeof t ? 0 : t}
    var st = {
        test: function(t) {
          var e, n, r, o
          return isNaN(t) && R(t) && (null !== (n = null === (e = t.match(M)) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) + (null !== (o = null === (r = t.match(L)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) > 0
        }, parse: it, createTransformer: at, getAnimatableNone: function(t) {
          var e = it(t)
          return at(t)(e.map(ut))
        }
      }, ct = function(t) {return "number" == typeof t}, lt = function(t, e) {return function(n) {return e(t(n))}},
      ft = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        return t.reduce(lt)
      }

    function dt (t, e) {return ct(t) ? function(n) {return k(t, e, n)} : et.test(t) ? tt(t, e) : ht(t, e)}

    var pt = function(t, e) {
      var n = m([], t), r = n.length, o = t.map((function(t, n) {return dt(t, e[n])}))
      return function(t) {
        for (var e = 0; e < r; e++) n[e] = o[e](t)
        return n
      }
    }, vt = function(t, e) {
      var n = d(d({}, t), e), r = {}
      for (var o in n) void 0 !== t[o] && void 0 !== e[o] && (r[o] = dt(t[o], e[o]))
      return function(t) {
        for (var e in r) n[e] = r[e](t)
        return n
      }
    }

    function mt (t) {
      for (var e = st.parse(t), n = e.length, r = 0, o = 0, i = 0, a = 0; a < n; a++) r || "number" == typeof e[a] ? r++ : void 0 !== e[a].hue ? i++ : o++
      return { parsed: e, numNumbers: r, numRGB: o, numHSL: i }
    }

    var ht = function(t, e) {
      var n = st.createTransformer(e), r = mt(t), o = mt(e)
      return r.numHSL === o.numHSL && r.numRGB === o.numRGB && (r.numNumbers, o.numNumbers), ft(pt(r.parsed, o.parsed), n)
    }, yt = function(t, e) {return function(n) {return k(t, e, n)}}

    function gt (t, e, n) {
      for (var r, o = [], i = n || ("number" == typeof (r = t[0]) ? yt : "string" == typeof r ? et.test(r) ? tt : ht : Array.isArray(r) ? pt : "object" == typeof r ? vt : void 0), a = t.length - 1, u = 0; u < a; u++) {
        var s = i(t[u], t[u + 1])
        if (e) {
          var c = Array.isArray(e) ? e[u] : e
          s = ft(c, s)
        }
        o.push(s)
      }
      return o
    }

    function xt (t, e, n) {
      var r = void 0 === n ? {} : n, o = r.clamp, i = void 0 === o || o, a = r.ease, u = r.mixer, s = t.length
      e.length, !a || !Array.isArray(a) || a.length, t[0] > t[s - 1] && (t = [].concat(t), e = [].concat(e), t.reverse(), e.reverse())
      var c = gt(e, a, u), l = 2 === s ? function(t, e) {
        var n = t[0], r = t[1], o = e[0]
        return function(t) {return o(T(n, r, t))}
      }(t, c) : function(t, e) {
        var n = t.length, r = n - 1
        return function(o) {
          var i = 0, a = !1
          if (o <= t[0] ? a = !0 : o >= t[r] && (i = r - 1, a = !0), !a) {
            for (var u = 1; u < n && !(t[u] > o || u === r); u++)
            i = u - 1
          }
          var s = T(t[i], t[i + 1], o)
          return e[i](s)
        }
      }(t, c)
      return i ? function(e) {return l(h(t[0], t[s - 1], e))} : l
    }

    var bt, wt = function(t) {return function(e) {return 1 - t(1 - e)}},
      Et = function(t) {return function(e) {return e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2}},
      Pt = function(t) {return function(e) {return e * e * ((t + 1) * e - t)}}, At = function(t) {return t},
      Tt = (bt = 2, function(t) {return Math.pow(t, bt)}), kt = wt(Tt), St = Et(Tt),
      Ct = function(t) {return 1 - Math.sin(Math.acos(t))}, Mt = wt(Ct), Lt = Et(Mt), Vt = Pt(1.525), Rt = wt(Vt),
      Ot = Et(Vt), jt = function(t) {
        var e = Pt(t)
        return function(t) {return (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))}
      }(1.525), Dt = function(t) {
        if (1 === t || 0 === t) return t
        var e = t * t
        return t < .36363636363636365 ? 7.5625 * e : t < .7272727272727273 ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255 : 10.8 * t * t - 20.52 * t + 10.72
      }, Nt = wt(Dt)

    function Bt (t, e) {return t.map((function() {return e || St})).splice(0, t.length - 1)}

    function Ft (t) {
      var e = t.from, n = void 0 === e ? 0 : e, r = t.to, o = void 0 === r ? 1 : r, i = t.ease, a = t.offset,
        u = t.duration, s = void 0 === u ? 300 : u, c = { done: !1, value: n }, l = Array.isArray(o) ? o : [n, o],
        f = function(t, e) {return t.map((function(t) {return t * e}))}(a && a.length === l.length ? a : function(t) {
          var e = t.length
          return t.map((function(t, n) {return 0 !== n ? n / (e - 1) : 0}))
        }(l), s)

      function d () {return xt(f, l, { ease: Array.isArray(i) ? i : Bt(l, i) })}

      var p = d()
      return {
        next: function(t) {return c.value = p(t), c.done = t >= s, c},
        flipTarget: function() {l.reverse(), p = d()}
      }
    }

    var It = {
      keyframes: Ft,
      spring: P,
      decay: function(t) {
        var e = t.velocity, n = void 0 === e ? 0 : e, r = t.from, o = void 0 === r ? 0 : r, i = t.power,
          a = void 0 === i ? .8 : i, u = t.timeConstant, s = void 0 === u ? 350 : u, c = t.restDelta,
          l = void 0 === c ? .5 : c, f = t.modifyTarget, d = { done: !1, value: o }, p = a * n, v = o + p,
          m = void 0 === f ? v : f(v)
        return m !== v && (p = m - o), {
          next: function(t) {
            var e = -p * Math.exp(-t / s)
            return d.done = !(e > l || e < -l), d.value = d.done ? m : m + e, d
          }, flipTarget: function() {}
        }
      }
    }
    var _t = 1 / 60 * 1e3,
      Ut = "undefined" != typeof performance ? function() {return performance.now()} : function() {return Date.now()},
      Ht = "undefined" != typeof window ? function(t) {return window.requestAnimationFrame(t)} : function(t) {return setTimeout((function() {return t(Ut())}), _t)}
    var Xt = !0, zt = !1, Yt = !1, Wt = { delta: 0, timestamp: 0 },
      Gt = ["read", "update", "preRender", "render", "postRender"], Zt = Gt.reduce((function(t, e) {
        return t[e] = function(t) {
          var e = [], n = [], r = 0, o = !1, i = new WeakSet, a = {
            schedule: function(t, a, u) {
              void 0 === a && (a = !1), void 0 === u && (u = !1)
              var s = u && o, c = s ? e : n
              return a && i.add(t), -1 === c.indexOf(t) && (c.push(t), s && o && (r = e.length)), t
            }, cancel: function(t) {
              var e = n.indexOf(t);
              -1 !== e && n.splice(e, 1), i.delete(t)
            }, process: function(u) {
              var s
              if (o = !0, e = (s = [n, e])[0], (n = s[1]).length = 0, r = e.length) for (var c = 0; c < r; c++) {
                var l = e[c]
                l(u), i.has(l) && (a.schedule(l), t())
              }
              o = !1
            }
          }
          return a
        }((function() {return zt = !0})), t
      }), {}), qt = Gt.reduce((function(t, e) {
        var n = Zt[e]
        return t[e] = function(t, e, r) {return void 0 === e && (e = !1), void 0 === r && (r = !1), zt || te(), n.schedule(t, e, r)}, t
      }), {}), Kt = Gt.reduce((function(t, e) {return t[e] = Zt[e].cancel, t}), {}),
      $t = Gt.reduce((function(t, e) {return t[e] = function() {return Zt[e].process(Wt)}, t}), {}),
      Jt = function(t) {return Zt[t].process(Wt)},
      Qt = function t (e) {zt = !1, Wt.delta = Xt ? _t : Math.max(Math.min(e - Wt.timestamp, 40), 1), Wt.timestamp = e, Yt = !0, Gt.forEach(Jt), Yt = !1, zt && (Xt = !1, Ht(t))},
      te = function() {zt = !0, Xt = !0, Yt || Ht(Qt)}, ee = function() {return Wt}, ne = qt

    function re (t, e, n) {return void 0 === n && (n = 0), t - e - n}

    var oe = function(t) {
      var e = function(e) {
        var n = e.delta
        return t(n)
      }
      return { start: function() {return ne.update(e, !0)}, stop: function() {return Kt.update(e)} }
    }

    function ie (t) {
      var e, n, r, o, i, a = t.from, u = t.autoplay, s = void 0 === u || u, c = t.driver, l = void 0 === c ? oe : c,
        f = t.elapsed, v = void 0 === f ? 0 : f, m = t.repeat, h = void 0 === m ? 0 : m, y = t.repeatType,
        g = void 0 === y ? "loop" : y, x = t.repeatDelay, b = void 0 === x ? 0 : x, w = t.onPlay, E = t.onStop,
        A = t.onComplete, T = t.onRepeat, k = t.onUpdate,
        S = p(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]),
        C = S.to, M = 0, L = S.duration, V = !1, R = !0, O = function(t) {
          if (Array.isArray(t.to)) return Ft
          if (It[t.type]) return It[t.type]
          var e = new Set(Object.keys(t))
          return e.has("ease") || e.has("duration") && !e.has("dampingRatio") ? Ft : e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta") ? P : Ft
        }(S);
      (null === (n = (e = O).needsInterpolation) || void 0 === n ? void 0 : n.call(e, a, C)) && (i = xt([0, 100], [a, C], { clamp: !1 }), a = 0, C = 100)
      var j = O(d(d({}, S), { from: a, to: C }))

      function D () {M++, "reverse" === g ? v = function(t, e, n, r) {return void 0 === n && (n = 0), void 0 === r && (r = !0), r ? re(e + -t, e, n) : e - (t - e) + n}(v, L, b, R = M % 2 == 0) : (v = re(v, L, b), "mirror" === g && j.flipTarget()), V = !1, T && T()}

      function N (t) {
        if (R || (t = -t), v += t, !V) {
          var e = j.next(Math.max(0, v))
          o = e.value, i && (o = i(o)), V = R ? e.done : v <= 0
        }
        null == k || k(o), V && (0 === M && (null != L || (L = v)), M < h ? function(t, e, n, r) {return r ? t >= e + n : t <= -n}(v, L, b, R) && D() : (r.stop(), A && A()))
      }

      return s && (null == w || w(), (r = l(N)).start()), { stop: function() {null == E || E(), r.stop()} }
    }

    function ae (t, e) {return e ? t * (1e3 / e) : 0}

    var ue = function(t) {return 1e3 * t}, se = function(t, e) {return 1 - 3 * e + 3 * t},
      ce = function(t, e) {return 3 * e - 6 * t}, le = function(t) {return 3 * t},
      fe = function(t, e, n) {return ((se(e, n) * t + ce(e, n)) * t + le(e)) * t},
      de = function(t, e, n) {return 3 * se(e, n) * t * t + 2 * ce(e, n) * t + le(e)}
    var pe = .1

    function ve (t, e, n, r) {
      if (t === e && n === r) return At
      for (var o = new Float32Array(11), i = 0; i < 11; ++i) o[i] = fe(i * pe, t, n)

      function a (e) {
        for (var r = 0, i = 1; 10 !== i && o[i] <= e; ++i) r += pe
        --i
        var a = r + (e - o[i]) / (o[i + 1] - o[i]) * pe, u = de(a, t, n)
        return u >= .001 ? function(t, e, n, r) {
          for (var o = 0; o < 8; ++o) {
            var i = de(e, n, r)
            if (0 === i) return e
            e -= (fe(e, n, r) - t) / i
          }
          return e
        }(e, a, t, n) : 0 === u ? a : function(t, e, n, r, o) {
          var i, a, u = 0
          do {(i = fe(a = e + (n - e) / 2, r, o) - t) > 0 ? n = a : e = a} while (Math.abs(i) > 1e-7 && ++u < 10)
          return a
        }(e, r, r + pe, t, n)
      }

      return function(t) {return 0 === t || 1 === t ? t : fe(a(t), e, r)}
    }

    var me = {
        linear: At,
        easeIn: Tt,
        easeInOut: St,
        easeOut: kt,
        circIn: Ct,
        circInOut: Lt,
        circOut: Mt,
        backIn: Vt,
        backInOut: Ot,
        backOut: Rt,
        anticipate: jt,
        bounceIn: Nt,
        bounceInOut: function(t) {return t < .5 ? .5 * (1 - Dt(1 - 2 * t)) : .5 * Dt(2 * t - 1) + .5},
        bounceOut: Dt
      }, he = function(t) {
        if (Array.isArray(t)) {
          t.length
          var e = v(t, 4)
          return ve(e[0], e[1], e[2], e[3])
        }
        return "string" == typeof t ? me[t] : t
      },
      ye = function(t, e) {return "zIndex" !== t && (!("number" != typeof e && !Array.isArray(e)) || !("string" != typeof e || !st.test(e) || e.startsWith("url(")))},
      ge = function(t) {return Array.isArray(t)},
      xe = function() {return { type: "spring", stiffness: 500, damping: 25, restDelta: .5, restSpeed: 10 }},
      be = function(t) {
        return {
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restDelta: .01,
          restSpeed: 10
        }
      }, we = function() {return { type: "keyframes", ease: "linear", duration: .3 }},
      Ee = function(t) {return { type: "keyframes", duration: .8, values: t }}, Pe = {
        x: xe,
        y: xe,
        z: xe,
        rotate: xe,
        rotateX: xe,
        rotateY: xe,
        rotateZ: xe,
        scaleX: be,
        scaleY: be,
        scale: be,
        opacity: we,
        backgroundColor: we,
        color: we,
        default: be
      }, Ae = new Set(["brightness", "contrast", "saturate", "opacity"])

    function Te (t) {
      var e = t.slice(0, -1).split("("), n = e[0], r = e[1]
      if ("drop-shadow" === n) return t
      var o = (r.match(M) || [])[0]
      if (!o) return t
      var i = r.replace(o, ""), a = Ae.has(n) ? 1 : 0
      return o !== r && (a *= 100), n + "(" + a + i + ")"
    }

    var ke = /([a-z-]*)\(.*?\)/g, Se = d(d({}, st), {
      getAnimatableNone: function(t) {
        var e = t.match(ke)
        return e ? e.map(Te).join(" ") : t
      }
    }), Ce = d(d({}, O), { transform: Math.round }), Me = {
      borderWidth: Y,
      borderTopWidth: Y,
      borderRightWidth: Y,
      borderBottomWidth: Y,
      borderLeftWidth: Y,
      borderRadius: Y,
      radius: Y,
      borderTopLeftRadius: Y,
      borderTopRightRadius: Y,
      borderBottomRightRadius: Y,
      borderBottomLeftRadius: Y,
      width: Y,
      maxWidth: Y,
      height: Y,
      maxHeight: Y,
      size: Y,
      top: Y,
      right: Y,
      bottom: Y,
      left: Y,
      padding: Y,
      paddingTop: Y,
      paddingRight: Y,
      paddingBottom: Y,
      paddingLeft: Y,
      margin: Y,
      marginTop: Y,
      marginRight: Y,
      marginBottom: Y,
      marginLeft: Y,
      rotate: X,
      rotateX: X,
      rotateY: X,
      rotateZ: X,
      scale: D,
      scaleX: D,
      scaleY: D,
      scaleZ: D,
      skew: X,
      skewX: X,
      skewY: X,
      distance: Y,
      translateX: Y,
      translateY: Y,
      translateZ: Y,
      x: Y,
      y: Y,
      z: Y,
      perspective: Y,
      transformPerspective: Y,
      opacity: j,
      originX: Z,
      originY: Z,
      originZ: Y,
      zIndex: Ce,
      fillOpacity: j,
      strokeOpacity: j,
      numOctaves: Ce
    }, Le = d(d({}, Me), {
      color: et,
      backgroundColor: et,
      outlineColor: et,
      fill: et,
      stroke: et,
      borderColor: et,
      borderTopColor: et,
      borderRightColor: et,
      borderBottomColor: et,
      borderLeftColor: et,
      filter: Se,
      WebkitFilter: Se
    }), Ve = function(t) {return Le[t]}

    function Re (t, e) {
      var n, r = Ve(t)
      return r !== Se && (r = st), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e)
    }

    function Oe (t) {
      var e = t.ease, n = t.times, r = t.yoyo, o = t.flip, i = t.loop,
        a = p(t, ["ease", "times", "yoyo", "flip", "loop"]), u = d({}, a)
      return n && (u.offset = n), a.duration && (u.duration = ue(a.duration)), a.repeatDelay && (u.repeatDelay = ue(a.repeatDelay)), e && (u.ease = function(t) {return Array.isArray(t) && "number" != typeof t[0]}(e) ? e.map(he) : he(e)), "tween" === a.type && (u.type = "keyframes"), (r || i || o) && (!0, r ? u.repeatType = "reverse" : i ? u.repeatType = "loop" : o && (u.repeatType = "mirror"), u.repeat = i || r || o || a.repeat), "spring" !== a.type && (u.type = "keyframes"), u
    }

    function je (t, e, n) {
      var r, o, i, a
      return Array.isArray(e.to) && (null !== (r = t.duration) && void 0 !== r || (t.duration = .8)), function(t) {Array.isArray(t.to) && null === t.to[0] && (t.to = m([], v(t.to)), t.to[0] = t.from)}(e), function(t) {
        t.when, t.delay, t.delayChildren, t.staggerChildren, t.staggerDirection, t.repeat, t.repeatType, t.repeatDelay, t.from
        var e = p(t, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"])
        return !!Object.keys(e).length
      }(t) || (t = d(d({}, t), (o = n, i = e.to, a = ge(i) ? Ee : Pe[o] || Pe.default, d({ to: i }, a(i))))), d(d({}, e), Oe(t))
    }

    function De (t, e, n, r, o) {
      var i, a = Fe(r, t), u = null !== (i = a.from) && void 0 !== i ? i : e.get(), s = ye(t, n)
      "none" === u && s && "string" == typeof n ? u = Re(t, n) : Ne(u) && "string" == typeof n ? u = Be(n) : !Array.isArray(n) && Ne(n) && "string" == typeof u && (n = Be(u))
      var c = ye(t, u)
      return c && s && !1 !== a.type ? function() {
        var r = { from: u, to: n, velocity: e.getVelocity(), onComplete: o, onUpdate: function(t) {return e.set(t)} }
        return "inertia" === a.type || "decay" === a.type ? function(t) {
          var e, n = t.from, r = void 0 === n ? 0 : n, o = t.velocity, i = void 0 === o ? 0 : o, a = t.min, u = t.max,
            s = t.power, c = void 0 === s ? .8 : s, l = t.timeConstant, f = void 0 === l ? 750 : l,
            p = t.bounceStiffness, v = void 0 === p ? 500 : p, m = t.bounceDamping, h = void 0 === m ? 10 : m,
            y = t.restDelta, g = void 0 === y ? 1 : y, x = t.modifyTarget, b = t.driver, w = t.onUpdate,
            E = t.onComplete

          function P (t) {return void 0 !== a && t < a || void 0 !== u && t > u}

          function A (t) {return void 0 === a ? u : void 0 === u || Math.abs(a - t) < Math.abs(u - t) ? a : u}

          function T (t) {
            null == e || e.stop(), e = ie(d(d({}, t), {
              driver: b, onUpdate: function(e) {
                var n
                null == w || w(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
              }, onComplete: E
            }))
          }

          function k (t) {T(d({ type: "spring", stiffness: v, damping: h, restDelta: g }, t))}

          if (P(r)) k({ from: r, velocity: i, to: A(r) }) else {
            var S = c * i + r
            void 0 !== x && (S = x(S))
            var C, M, L = A(S), V = L === a ? -1 : 1
            T({
              type: "decay",
              from: r,
              velocity: i,
              timeConstant: f,
              power: c,
              restDelta: g,
              modifyTarget: x,
              onUpdate: P(S) ? function(t) {
                C = M, M = t, i = ae(t - C, ee().delta), (1 === V && t > L || -1 === V && t < L) && k({
                  from: t,
                  to: L,
                  velocity: i
                })
              } : void 0
            })
          }
          return { stop: function() {return null == e ? void 0 : e.stop()} }
        }(d(d({}, r), a)) : ie(d(d({}, je(a, r, t)), {
          onUpdate: function(t) {
            var e
            r.onUpdate(t), null === (e = a.onUpdate) || void 0 === e || e.call(a, t)
          }, onComplete: function() {
            var t
            r.onComplete(), null === (t = a.onComplete) || void 0 === t || t.call(a)
          }
        }))
      } : function() {
        var t
        return e.set(n), o(), null === (t = null == a ? void 0 : a.onComplete) || void 0 === t || t.call(a), { stop: function() {} }
      }
    }

    function Ne (t) {return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")}

    function Be (t) {return "number" == typeof t ? 0 : Re("", t)}

    function Fe (t, e) {return t[e] || t.default || t}

    function Ie (t, e, n, r) {
      return void 0 === r && (r = {}), e.start((function(o) {
        var i, a, u = De(t, e, n, r, o), s = function(t, e) {
          var n
          return null !== (n = (Fe(t, e) || {}).delay) && void 0 !== n ? n : 0
        }(r, t), c = function() {return a = u()}
        return s ? i = setTimeout(c, ue(s)) : c(), function() {clearTimeout(i), null == a || a.stop()}
      }))
    }

    function _e (t, e) {-1 === t.indexOf(e) && t.push(e)}

    function Ue (t, e) {
      var n = t.indexOf(e)
      n > -1 && t.splice(n, 1)
    }

    var He = function() {
      function t () {this.subscriptions = []}

      return t.prototype.add = function(t) {
        var e = this
        return _e(this.subscriptions, t), function() {return Ue(e.subscriptions, t)}
      }, t.prototype.notify = function(t, e, n) {
        var r = this.subscriptions.length
        if (r) if (1 === r) this.subscriptions[0](t, e, n) else for (var o = 0; o < r; o++) {
          var i = this.subscriptions[o]
          i && i(t, e, n)
        }
      }, t.prototype.getSize = function() {return this.subscriptions.length}, t.prototype.clear = function() {this.subscriptions.length = 0}, t
    }(), Xe = function() {
      function t (t) {
        var e, n = this
        this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new He, this.velocityUpdateSubscribers = new He, this.renderSubscribers = new He, this.canTrackVelocity = !1, this.updateAndNotify = function(t, e) {
          void 0 === e && (e = !0), n.prev = n.current, n.current = t
          var r = ee(), o = r.delta, i = r.timestamp
          n.lastUpdated !== i && (n.timeDelta = o, n.lastUpdated = i, ne.postRender(n.scheduleVelocityCheck)), n.prev !== n.current && n.updateSubscribers.notify(n.current), n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()), e && n.renderSubscribers.notify(n.current)
        }, this.scheduleVelocityCheck = function() {return ne.postRender(n.velocityCheck)}, this.velocityCheck = function(t) {t.timestamp !== n.lastUpdated && (n.prev = n.current, n.velocityUpdateSubscribers.notify(n.getVelocity()))}, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (e = this.current, !isNaN(parseFloat(e)))
      }

      return t.prototype.onChange = function(t) {return this.updateSubscribers.add(t)}, t.prototype.clearListeners = function() {this.updateSubscribers.clear()}, t.prototype.onRenderRequest = function(t) {return t(this.get()), this.renderSubscribers.add(t)}, t.prototype.attach = function(t) {this.passiveEffect = t}, t.prototype.set = function(t, e) {void 0 === e && (e = !0), e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)}, t.prototype.get = function() {return this.current}, t.prototype.getPrevious = function() {return this.prev}, t.prototype.getVelocity = function() {return this.canTrackVelocity ? ae(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0}, t.prototype.start = function(t) {
        var e = this
        return this.stop(), new Promise((function(n) {e.hasAnimated = !0, e.stopAnimation = t(n)})).then((function() {return e.clearAnimation()}))
      }, t.prototype.stop = function() {this.stopAnimation && this.stopAnimation(), this.clearAnimation()}, t.prototype.isAnimating = function() {return !!this.stopAnimation}, t.prototype.clearAnimation = function() {this.stopAnimation = null}, t.prototype.destroy = function() {this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()}, t
    }()

    function ze (t) {return new Xe(t)}

    var Ye = function(t) {return function(e) {return e.test(t)}},
      We = [O, Y, z, X, G, W, { test: function(t) {return "auto" === t}, parse: function(t) {return t} }],
      Ge = function(t) {return We.find(Ye(t))}, Ze = m(m([], v(We)), [et, st]),
      qe = function(t) {return Ze.find(Ye(t))}

    function Ke (t) {return Array.isArray(t)}

    function $e (t) {return "string" == typeof t || Ke(t)}

    function Je (t, e, n, r, o) {
      var i
      return void 0 === r && (r = {}), void 0 === o && (o = {}), "string" == typeof e && (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]), "function" == typeof e ? e(null != n ? n : t.custom, r, o) : e
    }

    function Qe (t, e, n) {
      var r = t.getProps()
      return Je(r, e, null != n ? n : r.custom, function(t) {
        var e = {}
        return t.forEachValue((function(t, n) {return e[n] = t.get()})), e
      }(t), function(t) {
        var e = {}
        return t.forEachValue((function(t, n) {return e[n] = t.getVelocity()})), e
      }(t))
    }

    function tn (t) {
      var e
      return "function" == typeof (null === (e = t.animate) || void 0 === e ? void 0 : e.start) || $e(t.initial) || $e(t.animate) || $e(t.whileHover) || $e(t.whileDrag) || $e(t.whileTap) || $e(t.whileFocus) || $e(t.exit)
    }

    function en (t) {return Boolean(tn(t) || t.variants)}

    function nn (t, e, n) {t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, ze(n))}

    function rn (t, e) {
      var n = Qe(t, e), r = n ? t.makeTargetAnimatable(n, !1) : {}, o = r.transitionEnd, i = void 0 === o ? {} : o
      r.transition
      var a, u = p(r, ["transitionEnd", "transition"])
      for (var s in u = d(d({}, u), i)) {nn(t, s, (a = u[s], ge(a) ? a[a.length - 1] || 0 : a))}
    }

    function on (t, e) {
      m([], v(e)).reverse().forEach((function(n) {
        var r, o = t.getVariant(n)
        o && rn(t, o), null === (r = t.variantChildren) || void 0 === r || r.forEach((function(t) {on(t, e)}))
      }))
    }

    function an (t, e) {if (e) return (e[t] || e.default || e).from}

    function un (t, e, n) {
      var r
      if (void 0 === n && (n = {}), t.notifyAnimationStart(), Array.isArray(e)) {
        var o = e.map((function(e) {return sn(t, e, n)}))
        r = Promise.all(o)
      } else if ("string" == typeof e) r = sn(t, e, n) else {
        var i = "function" == typeof e ? Qe(t, e, n.custom) : e
        r = cn(t, i, n)
      }
      return r.then((function() {return t.notifyAnimationComplete(e)}))
    }

    function sn (t, e, n) {
      var r
      void 0 === n && (n = {})
      var o = Qe(t, e, n.custom), i = (o || {}).transition, a = void 0 === i ? t.getDefaultTransition() || {} : i
      n.transitionOverride && (a = n.transitionOverride)
      var u = o ? function() {return cn(t, o, n)} : function() {return Promise.resolve()},
        s = (null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size) ? function(r) {
          void 0 === r && (r = 0)
          var o = a.delayChildren, i = void 0 === o ? 0 : o, u = a.staggerChildren, s = a.staggerDirection
          return function(t, e, n, r, o, i) {
            void 0 === n && (n = 0)
            void 0 === r && (r = 0)
            void 0 === o && (o = 1)
            var a = [], u = (t.variantChildren.size - 1) * r,
              s = 1 === o ? function(t) {return void 0 === t && (t = 0), t * r} : function(t) {return void 0 === t && (t = 0), u - t * r}
            return Array.from(t.variantChildren).sort(ln).forEach((function(t, r) {a.push(sn(t, e, d(d({}, i), { delay: n + s(r) })).then((function() {return t.notifyAnimationComplete(e)})))})), Promise.all(a)
          }(t, e, i + r, u, s, n)
        } : function() {return Promise.resolve()}, c = a.when
      if (c) {
        var l = v("beforeChildren" === c ? [u, s] : [s, u], 2), f = l[0], p = l[1]
        return f().then(p)
      }
      return Promise.all([u(), s(n.delay)])
    }

    function cn (t, e, n) {
      var r, o = void 0 === n ? {} : n, i = o.delay, a = void 0 === i ? 0 : i, u = o.transitionOverride, s = o.type,
        c = t.makeTargetAnimatable(e), l = c.transition, f = void 0 === l ? t.getDefaultTransition() : l,
        v = c.transitionEnd, m = p(c, ["transition", "transitionEnd"])
      u && (f = u)
      var h = [], y = s && (null === (r = t.animationState) || void 0 === r ? void 0 : r.getState()[s])
      for (var g in m) {
        var x = t.getValue(g), b = m[g]
        if (!(!x || void 0 === b || y && fn(y, g))) {
          var w = Ie(g, x, b, d({ delay: a }, f))
          h.push(w)
        }
      }
      return Promise.all(h).then((function() {v && rn(t, v)}))
    }

    function ln (t, e) {return t.sortNodePosition(e)}

    function fn (t, e) {
      var n = t.protectedKeys, r = t.needsAnimating, o = n.hasOwnProperty(e) && !0 !== r[e]
      return r[e] = !1, o
    }

    function dn () {
      var t = !1, e = [], n = new Set, r = {
        subscribe: function(t) {return n.add(t), function() {n.delete(t)}},
        start: function(r, o) {
          if (t) {
            var i = []
            return n.forEach((function(t) {i.push(un(t, r, { transitionOverride: o }))})), Promise.all(i)
          }
          return new Promise((function(t) {e.push({ animation: [r, o], resolve: t })}))
        },
        set: function(t) {return n.forEach((function(e) {!function(t, e) {Array.isArray(e) ? on(t, e) : "string" == typeof e ? on(t, [e]) : rn(t, e)}(e, t)}))},
        stop: function() {n.forEach((function(t) {!function(t) {t.forEachValue((function(t) {return t.stop()}))}(t)}))},
        mount: function() {
          return t = !0, e.forEach((function(t) {
            var e = t.animation, n = t.resolve
            r.start.apply(r, m([], v(e))).then(n)
          })), function() {t = !1, r.stop()}
        }
      }
      return r
    }

    function pn (t) {
      var e = (0, r.useRef)(null)
      return null === e.current && (e.current = t()), e.current
    }

    function vn () {
      var t = pn(dn)
      return (0, r.useEffect)(t.mount, []), t
    }

    var mn = function(t) {return { isEnabled: function(e) {return t.some((function(t) {return !!e[t]}))} }}, hn = {
      measureLayout: mn(["layout", "layoutId", "drag", "_layoutResetTransform"]),
      animation: mn(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag"]),
      exit: mn(["exit"]),
      drag: mn(["drag", "dragControls"]),
      focus: mn(["whileFocus"]),
      hover: mn(["whileHover", "onHoverStart", "onHoverEnd"]),
      tap: mn(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
      pan: mn(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
      layoutAnimation: mn(["layout", "layoutId"])
    }
    var yn = (0, r.createContext)({ strict: !1 }), gn = Object.keys(hn), xn = gn.length
    var bn = (0, r.createContext)({ transformPagePoint: function(t) {return t}, isStatic: !1 }),
      wn = (0, r.createContext)({})
    var En = (0, r.createContext)(null)

    function Pn () {
      var t = (0, r.useContext)(En)
      if (null === t) return [!0, null]
      var e = t.isPresent, n = t.onExitComplete, o = t.register, i = Sn();
      (0, r.useEffect)((function() {return o(i)}), [])
      return !e && n ? [!1, function() {return null == n ? void 0 : n(i)}] : [!0]
    }

    function An (t) {return null === t || t.isPresent}

    var Tn = 0, kn = function() {return Tn++}, Sn = function() {return pn(kn)}, Cn = (0, r.createContext)(null),
      Mn = "undefined" != typeof window, Ln = Mn ? r.useLayoutEffect : r.useEffect

    function Vn (t, e, n, o) {
      var i = (0, r.useContext)(bn), a = (0, r.useContext)(yn), u = (0, r.useContext)(wn).visualElement,
        s = (0, r.useContext)(En), c = function(t) {
          var e = t.layoutId, n = (0, r.useContext)(Cn)
          return n && void 0 !== e ? n + "-" + e : e
        }(n), l = (0, r.useRef)(void 0)
      o || (o = a.renderer), !l.current && o && (l.current = o(t, {
        visualState: e,
        parent: u,
        props: d(d({}, n), { layoutId: c }),
        presenceId: null == s ? void 0 : s.id,
        blockInitialAnimation: !1 === (null == s ? void 0 : s.initial)
      }))
      var f = l.current
      return Ln((function() {f && (f.setProps(d(d(d({}, i), n), { layoutId: c })), f.isPresent = An(s), f.isPresenceRoot = !u || u.presenceId !== (null == s ? void 0 : s.id), f.syncRender())})), (0, r.useEffect)((function() {
        var t
        f && (null === (t = f.animationState) || void 0 === t || t.animateChanges())
      })), Ln((function() {return function() {return null == f ? void 0 : f.notifyUnmount()}}), []), f
    }

    function Rn (t) {return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")}

    function On (t, e) {
      var n = function(t, e) {
        if (tn(t)) {
          var n = t.initial, r = t.animate
          return { initial: !1 === n || $e(n) ? n : void 0, animate: $e(r) ? r : void 0 }
        }
        return !1 !== t.inherit ? e : {}
      }(t, (0, r.useContext)(wn)), o = n.initial, i = n.animate
      return (0, r.useMemo)((function() {return { initial: o, animate: i }}), e ? [jn(o), jn(i)] : [])
    }

    function jn (t) {return Array.isArray(t) ? t.join(" ") : t}

    function Dn (t) {
      var e = t.preloadedFeatures, n = t.createVisualElement, o = t.useRender, i = t.useVisualState, a = t.Component
      return e && function(t) {
        for (var e in t) {
          var n = t[e]
          null !== n && (hn[e].Component = n)
        }
      }(e), (0, r.forwardRef)((function(t, e) {
        var u = (0, r.useContext)(bn).isStatic, s = null, c = On(t, u), l = i(t, u)
        return !u && Mn && (c.visualElement = Vn(a, l, t, n), s = function(t, e, n) {
          var o = []
          if ((0, r.useContext)(yn), !e) return null
          for (var i = 0; i < xn; i++) {
            var a = gn[i], u = hn[a], s = u.isEnabled, c = u.Component
            s(t) && c && o.push(r.createElement(c, d({ key: a }, t, { visualElement: e })))
          }
          return o
        }(t, c.visualElement)), r.createElement(r.Fragment, null, r.createElement(wn.Provider, { value: c }, o(a, t, function(t, e, n) {
          return (0, r.useCallback)((function(r) {
            var o
            r && (null === (o = t.mount) || void 0 === o || o.call(t, r)), e && (r ? e.mount(r) : e.unmount()), n && ("function" == typeof n ? n(r) : Rn(n) && (n.current = r))
          }), [e])
        }(l, c.visualElement, e), l, u)), s)
      }))
    }

    function Nn (t) {
      function e (e, n) {return void 0 === n && (n = {}), Dn(t(e, n))}

      var n = new Map
      return new Proxy(e, { get: function(t, r) {return n.has(r) || n.set(r, e(r)), n.get(r)} })
    }

    var Bn = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"]

    function Fn (t) {return "string" == typeof t && !t.includes("-") && !!(Bn.indexOf(t) > -1 || /[A-Z]/.test(t))}

    var In = {}
    var _n = ["", "X", "Y", "Z"], Un = ["transformPerspective", "x", "y", "z"]

    function Hn (t, e) {return Un.indexOf(t) - Un.indexOf(e)}

    ["translate", "scale", "rotate", "skew"].forEach((function(t) {return _n.forEach((function(e) {return Un.push(t + e)}))}))
    var Xn = new Set(Un)

    function zn (t) {return Xn.has(t)}

    var Yn = new Set(["originX", "originY", "originZ"])

    function Wn (t) {return Yn.has(t)}

    function Gn (t, e) {
      var n = e.layout, r = e.layoutId
      return zn(t) || Wn(t) || (n || void 0 !== r) && (!!In[t] || "opacity" === t)
    }

    var Zn = function(t) {return null !== t && "object" == typeof t && t.getVelocity},
      qn = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }

    function Kn (t) {return t.startsWith("--")}

    var $n = function(t, e) {return e && "number" == typeof t ? e.transform(t) : t}

    function Jn (t, e, n, r, o, i, a, u) {
      var s, c = t.style, l = t.vars, f = t.transform, d = t.transformKeys, p = t.transformOrigin
      d.length = 0
      var v = !1, m = !1, h = !0
      for (var y in e) {
        var g = e[y]
        if (Kn(y)) l[y] = g else {
          var x = Me[y], b = $n(g, x)
          if (zn(y)) {
            if (v = !0, f[y] = b, d.push(y), !h) continue
            g !== (null !== (s = x.default) && void 0 !== s ? s : 0) && (h = !1)
          } else if (Wn(y)) p[y] = b, m = !0 else if ((null == n ? void 0 : n.isHydrated) && (null == r ? void 0 : r.isHydrated) && In[y]) {
            var w = In[y].process(g, r, n), E = In[y].applyTo
            if (E) for (var P = E.length, A = 0; A < P; A++) c[E[A]] = w else c[y] = w
          } else c[y] = b
        }
      }
      r && n && a && u ? (c.transform = a(r.deltaFinal, r.treeScale, v ? f : void 0), i && (c.transform = i(f, c.transform)), c.transformOrigin = u(r)) : (v && (c.transform = function(t, e, n, r) {
        var o = t.transform, i = t.transformKeys, a = e.enableHardwareAcceleration, u = void 0 === a || a,
          s = e.allowTransformNone, c = void 0 === s || s, l = ""
        i.sort(Hn)
        for (var f = !1, d = i.length, p = 0; p < d; p++) {
          var v = i[p]
          l += (qn[v] || v) + "(" + o[v] + ") ", "z" === v && (f = !0)
        }
        return !f && u ? l += "translateZ(0)" : l = l.trim(), r ? l = r(o, n ? "" : l) : c && n && (l = "none"), l
      }(t, o, h, i)), m && (c.transformOrigin = function(t) {
        var e = t.originX, n = void 0 === e ? "50%" : e, r = t.originY, o = void 0 === r ? "50%" : r, i = t.originZ
        return n + " " + o + " " + (void 0 === i ? 0 : i)
      }(p)))
    }

    var Qn = function() {return { style: {}, transform: {}, transformKeys: [], transformOrigin: {}, vars: {} }}

    function tr (t, e, n) {for (var r in e) Zn(e[r]) || Gn(r, n) || (t[r] = e[r])}

    function er (t, e, n) {
      var o = {}
      return tr(o, t.style || {}, t), Object.assign(o, function(t, e, n) {
        var o = t.transformTemplate
        return (0, r.useMemo)((function() {
          var t = {
            style: {},
            transform: {},
            transformKeys: [],
            transformOrigin: {},
            vars: {}
          }
          Jn(t, e, void 0, void 0, { enableHardwareAcceleration: !n }, o)
          var r = t.style
          return d(d({}, t.vars), r)
        }), [e])
      }(t, e, n)), t.transformValues && (o = t.transformValues(o)), o
    }

    function nr (t, e, n) {
      var r = {}, o = er(t, e, n)
      return Boolean(t.drag) && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), r.style = o, r
    }

    var rr = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "_layoutResetTransform", "onLayoutAnimationComplete", "onViewportBoxUpdate", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover"])

    function or (t) {return rr.has(t)}

    var ir = function(t) {return !or(t)}
    try {
      var ar = n(5264).Z
      ir = function(t) {return t.startsWith("on") ? !or(t) : ar(t)}
    } catch (Ra) {}

    function ur (t, e, n) {return "string" == typeof t ? t : Y.transform(e + n * t)}

    var sr = function(t, e) {return Y.transform(t * e)},
      cr = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
      lr = { offset: "strokeDashoffset", array: "strokeDasharray" }

    function fr (t, e, n, r, o, i, a, u) {
      var s = e.attrX, c = e.attrY, l = e.originX, f = e.originY, d = e.pathLength, v = e.pathSpacing,
        m = void 0 === v ? 1 : v, h = e.pathOffset, y = void 0 === h ? 0 : h
      Jn(t, p(e, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, r, o, i, a, u), t.attrs = t.style, t.style = {}
      var g = t.attrs, x = t.style, b = t.dimensions, w = t.totalPathLength
      g.transform && (b && (x.transform = g.transform), delete g.transform), b && (void 0 !== l || void 0 !== f || x.transform) && (x.transformOrigin = function(t, e, n) {return ur(e, t.x, t.width) + " " + ur(n, t.y, t.height)}(b, void 0 !== l ? l : .5, void 0 !== f ? f : .5)), void 0 !== s && (g.x = s), void 0 !== c && (g.y = c), void 0 !== w && void 0 !== d && function(t, e, n, r, o, i) {
        void 0 === r && (r = 1), void 0 === o && (o = 0), void 0 === i && (i = !0)
        var a = i ? cr : lr
        t[a.offset] = sr(-o, e)
        var u = sr(n, e), s = sr(r, e)
        t[a.array] = u + " " + s
      }(g, w, d, m, y, !1)
    }

    var dr = function() {
      return d(d({}, {
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
      }), { attrs: {} })
    }

    function pr (t, e) {
      var n = (0, r.useMemo)((function() {
        var n = dr()
        return fr(n, e, void 0, void 0, { enableHardwareAcceleration: !1 }, t.transformTemplate), d(d({}, n.attrs), { style: d({}, n.style) })
      }), [e])
      if (t.style) {
        var o = {}
        tr(o, t.style, t), n.style = d(d({}, o), n.style)
      }
      return n
    }

    function vr (t) {
      void 0 === t && (t = !1)
      return function(e, n, o, i, a) {
        var u = i.latestValues, s = (Fn(e) ? pr : nr)(n, u, a), c = function(t, e, n) {
          var r = {}
          for (var o in t) (ir(o) || !0 === n && or(o) || !e && !or(o)) && (r[o] = t[o])
          return r
        }(n, "string" == typeof e, t), l = d(d(d({}, c), s), { ref: o })
        return (0, r.createElement)(e, l)
      }
    }

    var mr = /([a-z])([A-Z])/g, hr = function(t) {return t.replace(mr, "$1-$2").toLowerCase()}

    function yr (t, e) {
      var n = e.style, r = e.vars
      for (var o in Object.assign(t.style, n), r) t.style.setProperty(o, r[o])
    }

    var gr = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform"])

    function xr (t, e) {for (var n in yr(t, e), e.attrs) t.setAttribute(gr.has(n) ? n : hr(n), e.attrs[n])}

    function br (t) {
      var e = t.style, n = {}
      for (var r in e) (Zn(e[r]) || Gn(r, t)) && (n[r] = e[r])
      return n
    }

    function wr (t) {
      var e = br(t)
      for (var n in t) {if (Zn(t[n])) e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]}
      return e
    }

    function Er (t) {return "object" == typeof t && "function" == typeof t.start}

    function Pr (t) {
      var e, n = Zn(t) ? t.get() : t
      return e = n, Boolean(e && "object" == typeof e && e.mix && e.toValue) ? n.toValue() : n
    }

    function Ar (t, e, n, r) {
      var o = t.scrapeMotionValuesFromProps, i = t.createRenderState, a = t.onMount,
        u = { latestValues: kr(e, n, r, o), renderState: i() }
      return a && (u.mount = function(t) {return a(e, t, u)}), u
    }

    var Tr = function(t) {
      return function(e, n) {
        var o = (0, r.useContext)(wn), i = (0, r.useContext)(En)
        return n ? Ar(t, e, o, i) : pn((function() {return Ar(t, e, o, i)}))
      }
    }

    function kr (t, e, n, r) {
      var o = {}, i = !1 === (null == n ? void 0 : n.initial), a = r(t)
      for (var u in a) o[u] = Pr(a[u])
      var s = t.initial, c = t.animate, l = tn(t), f = en(t)
      e && f && !l && !1 !== t.inherit && (null != s || (s = e.initial), null != c || (c = e.animate))
      var d = i || !1 === s ? c : s
      d && "boolean" != typeof d && !Er(d) && (Array.isArray(d) ? d : [d]).forEach((function(e) {
        var n = Je(t, e)
        if (n) {
          var r = n.transitionEnd
          n.transition
          var i = p(n, ["transitionEnd", "transition"])
          for (var a in i) o[a] = i[a]
          for (var a in r) o[a] = r[a]
        }
      }))
      return o
    }

    var Sr = {
      useVisualState: Tr({
        scrapeMotionValuesFromProps: wr,
        createRenderState: dr,
        onMount: function(t, e, n) {
          var r = n.renderState, o = n.latestValues
          try {r.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()} catch (i) {
            r.dimensions = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            }
          }
          "path" === e.tagName && (r.totalPathLength = e.getTotalLength()), fr(r, o, void 0, void 0, { enableHardwareAcceleration: !1 }, t.transformTemplate), xr(e, r)
        }
      })
    }
    var Cr, Mr = { useVisualState: Tr({ scrapeMotionValuesFromProps: br, createRenderState: Qn }) }

    function Lr (t, e, n, r) {return t.addEventListener(e, n, r), function() {return t.removeEventListener(e, n, r)}}

    function Vr (t, e, n, o) {
      (0, r.useEffect)((function() {
        var r = t.current
        if (n && r) return Lr(r, e, n, o)
      }), [t, e, n, o])
    }

    function Rr (t) {return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent}

    function Or (t) {return !!t.touches}

    !function(t) {t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.Exit = "exit"}(Cr || (Cr = {}))
    var jr = { pageX: 0, pageY: 0 }

    function Dr (t, e) {
      void 0 === e && (e = "page")
      var n = t.touches[0] || t.changedTouches[0] || jr
      return { x: n[e + "X"], y: n[e + "Y"] }
    }

    function Nr (t, e) {return void 0 === e && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] }}

    function Br (t, e) {return void 0 === e && (e = "page"), { point: Or(t) ? Dr(t, e) : Nr(t, e) }}

    var Fr = function(t, e) {
        void 0 === e && (e = !1)
        var n, r = function(e) {return t(e, Br(e))}
        return e ? (n = r, function(t) {
          var e = t instanceof MouseEvent;
          (!e || e && 0 === t.button) && n(t)
        }) : r
      }, Ir = {
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointercancel: "mousecancel",
        pointerover: "mouseover",
        pointerout: "mouseout",
        pointerenter: "mouseenter",
        pointerleave: "mouseleave"
      },
      _r = { pointerdown: "touchstart", pointermove: "touchmove", pointerup: "touchend", pointercancel: "touchcancel" }

    function Ur (t) {return Mn && null === window.onpointerdown ? t : Mn && null === window.ontouchstart ? _r[t] : Mn && null === window.onmousedown ? Ir[t] : t}

    function Hr (t, e, n, r) {return Lr(t, Ur(e), Fr(n, "pointerdown" === e), r)}

    function Xr (t, e, n, r) {return Vr(t, Ur(e), n && Fr(n, "pointerdown" === e), r)}

    function zr (t) {
      var e = null
      return function() {return null === e && (e = t, function() {e = null})}
    }

    var Yr = zr("dragHorizontal"), Wr = zr("dragVertical")

    function Gr (t) {
      var e = !1
      if ("y" === t) e = Wr() else if ("x" === t) e = Yr() else {
        var n = Yr(), r = Wr()
        n && r ? e = function() {n(), r()} : (n && n(), r && r())
      }
      return e
    }

    function Zr () {
      var t = Gr(!0)
      return !t || (t(), !1)
    }

    function qr (t, e, n) {
      return function(r, o) {
        var i
        Rr(r) && !Zr() && (null == n || n(r, o), null === (i = t.animationState) || void 0 === i || i.setActive(Cr.Hover, e))
      }
    }

    var Kr = function t (e, n) {return !!n && (e === n || t(e, n.parentElement))}

    function $r (t) {return (0, r.useEffect)((function() {return function() {return t()}}), [])}

    var Jr = function(t) {return function(e) {return t(e), null}}, Qr = {
      tap: Jr((function(t) {
        var e = t.onTap, n = t.onTapStart, o = t.onTapCancel, i = t.whileTap, a = t.visualElement, u = e || n || o || i,
          s = (0, r.useRef)(!1), c = (0, r.useRef)(null)

        function l () {
          var t
          null === (t = c.current) || void 0 === t || t.call(c), c.current = null
        }

        function f () {
          var t
          return l(), s.current = !1, null === (t = a.animationState) || void 0 === t || t.setActive(Cr.Tap, !1), !Zr()
        }

        function d (t, n) {f() && (Kr(a.getInstance(), t.target) ? null == e || e(t, n) : null == o || o(t, n))}

        function p (t, e) {f() && (null == o || o(t, e))}

        Xr(a, "pointerdown", u ? function(t, e) {
          var r
          l(), s.current || (s.current = !0, c.current = ft(Hr(window, "pointerup", d), Hr(window, "pointercancel", p)), null == n || n(t, e), null === (r = a.animationState) || void 0 === r || r.setActive(Cr.Tap, !0))
        } : void 0), $r(l)
      })), focus: Jr((function(t) {
        var e = t.whileFocus, n = t.visualElement
        Vr(n, "focus", e ? function() {
          var t
          null === (t = n.animationState) || void 0 === t || t.setActive(Cr.Focus, !0)
        } : void 0), Vr(n, "blur", e ? function() {
          var t
          null === (t = n.animationState) || void 0 === t || t.setActive(Cr.Focus, !1)
        } : void 0)
      })), hover: Jr((function(t) {
        var e = t.onHoverStart, n = t.onHoverEnd, r = t.whileHover, o = t.visualElement
        Xr(o, "pointerenter", e || r ? qr(o, !0, e) : void 0), Xr(o, "pointerleave", n || r ? qr(o, !1, n) : void 0)
      }))
    }

    function to (t, e) {
      if (!Array.isArray(e)) return !1
      var n = e.length
      if (n !== t.length) return !1
      for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1
      return !0
    }

    var eo = [Cr.Animate, Cr.Hover, Cr.Tap, Cr.Drag, Cr.Focus, Cr.Exit], no = m([], v(eo)).reverse(), ro = eo.length

    function oo (t) {
      var e, n = function(t) {
          return function(e) {
            return Promise.all(e.map((function(e) {
              var n = e.animation, r = e.options
              return un(t, n, r)
            })))
          }
        }(t),
        r = ((e = {})[Cr.Animate] = io(!0), e[Cr.Hover] = io(), e[Cr.Tap] = io(), e[Cr.Drag] = io(), e[Cr.Focus] = io(), e[Cr.Exit] = io(), e),
        o = {}, i = !0, a = function(e, n) {
          var r = Qe(t, n)
          if (r) {
            r.transition
            var o = r.transitionEnd, i = p(r, ["transition", "transitionEnd"])
            e = d(d(d({}, e), i), o)
          }
          return e
        }

      function u (e, u) {
        for (var s, c = t.getProps(), l = t.getVariantContext(!0) || {}, f = [], p = new Set, h = {}, y = 1 / 0, g = function(n) {
          var o = no[n], g = r[o], x = null !== (s = c[o]) && void 0 !== s ? s : l[o], b = $e(x),
            w = o === u ? g.isActive : null
          !1 === w && (y = n)
          var E = x === l[o] && x !== c[o] && b
          if (E && i && t.manuallyAnimateOnMount && (E = !1), g.protectedKeys = d({}, h), !g.isActive && null === w || !x && !g.prevProp || Er(x) || "boolean" == typeof x) return "continue"
          var P = function(t, e) {
              if ("string" == typeof e) return e !== t
              if (Ke(e)) return !to(e, t)
              return !1
            }(g.prevProp, x) || o === u && g.isActive && !E && b || n > y && b, A = Array.isArray(x) ? x : [x],
            T = A.reduce(a, {})
          !1 === w && (T = {})
          var k = g.prevResolvedValues, S = void 0 === k ? {} : k, C = d(d({}, S), T),
            M = function(t) {P = !0, p.delete(t), g.needsAnimating[t] = !0}
          for (var L in C) {
            var V = T[L], R = S[L]
            h.hasOwnProperty(L) || (V !== R ? ge(V) && ge(R) ? to(V, R) ? g.protectedKeys[L] = !0 : M(L) : void 0 !== V ? M(L) : p.add(L) : void 0 !== V && p.has(L) ? M(L) : g.protectedKeys[L] = !0)
          }
          g.prevProp = x, g.prevResolvedValues = T, g.isActive && (h = d(d({}, h), T)), i && t.blockInitialAnimation && (P = !1), P && !E && f.push.apply(f, m([], v(A.map((function(t) {
            return {
              animation: t,
              options: d({ type: o }, e)
            }
          })))))
        }, x = 0; x < ro; x++) g(x)
        if (o = d({}, h), p.size) {
          var b = {}
          p.forEach((function(e) {
            var n = t.getBaseTarget(e)
            void 0 !== n && (b[e] = n)
          })), f.push({ animation: b })
        }
        var w = Boolean(f.length)
        return i && !1 === c.initial && !t.manuallyAnimateOnMount && (w = !1), i = !1, w ? n(f) : Promise.resolve()
      }

      return {
        isAnimated: function(t) {return void 0 !== o[t]}, animateChanges: u, setActive: function(e, n, o) {
          var i
          return r[e].isActive === n ? Promise.resolve() : (null === (i = t.variantChildren) || void 0 === i || i.forEach((function(t) {
            var r
            return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
          })), r[e].isActive = n, u(o, e))
        }, setAnimateFunction: function(e) {n = e(t)}, getState: function() {return r}
      }
    }

    function io (t) {
      return void 0 === t && (t = !1), {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
      }
    }

    var ao = {
        animation: Jr((function(t) {
          var e = t.visualElement, n = t.animate
          e.animationState || (e.animationState = oo(e)), Er(n) && (0, r.useEffect)((function() {return n.subscribe(e)}), [n])
        })),
        exit: Jr((function(t) {
          var e = t.custom, n = t.visualElement, o = v(Pn(), 2), i = o[0], a = o[1], u = (0, r.useContext)(En);
          (0, r.useEffect)((function() {
            var t, r,
              o = null === (t = n.animationState) || void 0 === t ? void 0 : t.setActive(Cr.Exit, !i, { custom: null !== (r = null == u ? void 0 : u.custom) && void 0 !== r ? r : e })
            !i && (null == o || o.then(a))
          }), [i])
        }))
      }, uo = function(t) {return t.hasOwnProperty("x") && t.hasOwnProperty("y")},
      so = function(t) {return uo(t) && t.hasOwnProperty("z")}, co = function(t, e) {return Math.abs(t - e)}

    function lo (t, e) {
      if (ct(t) && ct(e)) return co(t, e)
      if (uo(t) && uo(e)) {
        var n = co(t.x, e.x), r = co(t.y, e.y), o = so(t) && so(e) ? co(t.z, e.z) : 0
        return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2))
      }
    }

    var fo = function() {
      function t (t, e, n) {
        var r = this, o = (void 0 === n ? {} : n).transformPagePoint
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
          if (r.lastMoveEvent && r.lastMoveEventInfo) {
            var t = mo(r.lastMoveEventInfo, r.history), e = null !== r.startEvent,
              n = lo(t.offset, { x: 0, y: 0 }) >= 3
            if (e || n) {
              var o = t.point, i = ee().timestamp
              r.history.push(d(d({}, o), { timestamp: i }))
              var a = r.handlers, u = a.onStart, s = a.onMove
              e || (u && u(r.lastMoveEvent, t), r.startEvent = r.lastMoveEvent), s && s(r.lastMoveEvent, t)
            }
          }
        }, this.handlePointerMove = function(t, e) {r.lastMoveEvent = t, r.lastMoveEventInfo = po(e, r.transformPagePoint), Rr(t) && 0 === t.buttons ? r.handlePointerUp(t, e) : ne.update(r.updatePoint, !0)}, this.handlePointerUp = function(t, e) {
          r.end()
          var n = r.handlers, o = n.onEnd, i = n.onSessionEnd, a = mo(po(e, r.transformPagePoint), r.history)
          r.startEvent && o && o(t, a), i && i(t, a)
        }, !(Or(t) && t.touches.length > 1)) {
          this.handlers = e, this.transformPagePoint = o
          var i = po(Br(t), this.transformPagePoint), a = i.point, u = ee().timestamp
          this.history = [d(d({}, a), { timestamp: u })]
          var s = e.onSessionStart
          s && s(t, mo(i, this.history)), this.removeListeners = ft(Hr(window, "pointermove", this.handlePointerMove), Hr(window, "pointerup", this.handlePointerUp), Hr(window, "pointercancel", this.handlePointerUp))
        }
      }

      return t.prototype.updateHandlers = function(t) {this.handlers = t}, t.prototype.end = function() {this.removeListeners && this.removeListeners(), Kt.update(this.updatePoint)}, t
    }()

    function po (t, e) {return e ? { point: e(t.point) } : t}

    function vo (t, e) {return { x: t.x - e.x, y: t.y - e.y }}

    function mo (t, e) {
      var n = t.point
      return { point: n, delta: vo(n, yo(e)), offset: vo(n, ho(e)), velocity: go(e, .1) }
    }

    function ho (t) {return t[0]}

    function yo (t) {return t[t.length - 1]}

    function go (t, e) {
      if (t.length < 2) return { x: 0, y: 0 }
      for (var n = t.length - 1, r = null, o = yo(t); n >= 0 && (r = t[n], !(o.timestamp - r.timestamp > ue(e)));) n--
      if (!r) return { x: 0, y: 0 }
      var i = (o.timestamp - r.timestamp) / 1e3
      if (0 === i) return { x: 0, y: 0 }
      var a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i }
      return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
    }

    function xo (t) {return t}

    function bo (t) {
      var e = t.top
      return { x: { min: t.left, max: t.right }, y: { min: e, max: t.bottom } }
    }

    var wo = { translate: 0, scale: 1, origin: 0, originPoint: 0 }

    function Eo () {return { x: d({}, wo), y: d({}, wo) }}

    function Po (t) {return [t("x"), t("y")]}

    function Ao (t, e, n) {
      var r = e.min, o = e.max
      return void 0 !== r && t < r ? t = n ? k(r, t, n.min) : Math.max(t, r) : void 0 !== o && t > o && (t = n ? k(o, t, n.max) : Math.min(t, o)), t
    }

    function To (t, e, n) {
      return {
        min: void 0 !== e ? t.min + e : void 0,
        max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
      }
    }

    function ko (t, e) {
      var n, r = e.min - t.min, o = e.max - t.max
      return e.max - e.min < t.max - t.min && (r = (n = v([o, r], 2))[0], o = n[1]), { min: t.min + r, max: t.min + o }
    }

    function So (t, e, n) {return { min: Co(t, e), max: Co(t, n) }}

    function Co (t, e) {
      var n
      return "number" == typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0
    }

    function Mo (t, e) {
      return bo(function(t, e) {
        var n = t.top, r = t.left, o = t.bottom, i = t.right
        void 0 === e && (e = xo)
        var a = e({ x: r, y: n }), u = e({ x: i, y: o })
        return { top: a.y, left: a.x, bottom: u.y, right: u.x }
      }(t.getBoundingClientRect(), e))
    }

    function Lo (t, e, n) {return void 0 === e && (e = 0), void 0 === n && (n = .01), lo(t, e) < n}

    function Vo (t) {return t.max - t.min}

    function Ro (t, e) {
      var n = .5, r = Vo(t), o = Vo(e)
      return o > r ? n = T(e.min, e.max - r, t.min) : r > o && (n = T(t.min, t.max - o, e.min)), h(0, 1, n)
    }

    function Oo (t, e, n, r) {void 0 === r && (r = .5), t.origin = r, t.originPoint = k(e.min, e.max, t.origin), t.scale = Vo(n) / Vo(e), Lo(t.scale, 1, 1e-4) && (t.scale = 1), t.translate = k(n.min, n.max, t.origin) - t.originPoint, Lo(t.translate) && (t.translate = 0)}

    function jo (t, e, n, r) {Oo(t.x, e.x, n.x, Do(r.originX)), Oo(t.y, e.y, n.y, Do(r.originY))}

    function Do (t) {return "number" == typeof t ? t : .5}

    function No (t, e, n) {t.min = n.min + e.min, t.max = t.min + Vo(e)}

    var Bo = function(t, e) {return t.depth - e.depth}

    function Fo (t) {return t.projection.isEnabled || t.shouldResetTransform()}

    function Io (t, e) {
      void 0 === e && (e = [])
      var n = t.parent
      return n && Io(n, e), Fo(t) && e.push(t), e
    }

    function _o (t) {
      if (!t.shouldResetTransform()) {
        var e, n = t.getLayoutState()
        t.notifyBeforeLayoutMeasure(n.layout), n.isHydrated = !0, n.layout = t.measureViewportBox(), n.layoutCorrected = (e = n.layout, {
          x: d({}, e.x),
          y: d({}, e.y)
        }), t.notifyLayoutMeasure(n.layout, t.prevViewportBox || n.layout), ne.update((function() {return t.rebaseProjectionTarget()}))
      }
    }

    function Uo (t, e) {return { min: e.min - t.min, max: e.max - t.min }}

    function Ho (t, e) {return { x: Uo(t.x, e.x), y: Uo(t.y, e.y) }}

    function Xo (t, e) {
      var n = t.getLayoutId(), r = e.getLayoutId()
      return n !== r || void 0 === r && t !== e
    }

    function zo (t) {
      var e = t.getProps(), n = e.drag, r = e._dragX
      return n && !r
    }

    function Yo (t, e) {t.min = e.min, t.max = e.max}

    function Wo (t, e, n) {return n + e * (t - n)}

    function Go (t, e, n, r, o) {return void 0 !== o && (t = Wo(t, o, r)), Wo(t, n, r) + e}

    function Zo (t, e, n, r, o) {void 0 === e && (e = 0), void 0 === n && (n = 1), t.min = Go(t.min, e, n, r, o), t.max = Go(t.max, e, n, r, o)}

    function qo (t, e) {
      var n = e.x, r = e.y
      Zo(t.x, n.translate, n.scale, n.originPoint), Zo(t.y, r.translate, r.scale, r.originPoint)
    }

    function Ko (t, e, n, r) {
      var o = v(r, 3), i = o[0], a = o[1], u = o[2]
      t.min = e.min, t.max = e.max
      var s = void 0 !== n[u] ? n[u] : .5, c = k(e.min, e.max, s)
      Zo(t, n[i], n[a], c, n.scale)
    }

    var $o = ["x", "scaleX", "originX"], Jo = ["y", "scaleY", "originY"]

    function Qo (t, e, n) {Ko(t.x, e.x, n, $o), Ko(t.y, e.y, n, Jo)}

    function ti (t, e, n, r, o) {return t = Wo(t -= e, 1 / n, r), void 0 !== o && (t = Wo(t, 1 / o, r)), t}

    function ei (t, e, n) {
      var r = v(n, 3), o = r[0], i = r[1], a = r[2]
      !function(t, e, n, r, o) {
        void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === r && (r = .5)
        var i = k(t.min, t.max, r) - e
        t.min = ti(t.min, e, n, i, o), t.max = ti(t.max, e, n, i, o)
      }(t, e[o], e[i], e[a], e.scale)
    }

    function ni (t, e) {ei(t.x, e, $o), ei(t.y, e, Jo)}

    var ri = new Set

    function oi (t, e, n) {t[n] || (t[n] = []), t[n].push(e)}

    function ii (t) {return ri.add(t), function() {return ri.delete(t)}}

    function ai () {
      if (ri.size) {
        var t = 0, e = [[]], n = [], r = function(n) {return oi(e, n, t)}, o = function(e) {oi(n, e, t), t++}
        ri.forEach((function(e) {e(r, o), t = 0})), ri.clear()
        for (var i = n.length, a = 0; a <= i; a++) e[a] && e[a].forEach(si), n[a] && n[a].forEach(si)
      }
    }

    var ui, si = function(t) {return t()}, ci = new WeakMap, li = function() {
      function t (t) {
        var e = t.visualElement
        this.isDragging = !1, this.currentDirection = null, this.constraints = !1, this.elastic = {
          x: {
            min: 0,
            max: 1
          }, y: { min: 0, max: 1 }
        }, this.props = {}, this.hasMutatedConstraints = !1, this.cursorProgress = {
          x: .5,
          y: .5
        }, this.originPoint = {}, this.openGlobalLock = null, this.panSession = null, this.visualElement = e, this.visualElement.enableLayoutProjection(), ci.set(e, this)
      }

      return t.prototype.start = function(t, e) {
        var n = this, r = void 0 === e ? {} : e, o = r.snapToCursor, i = void 0 !== o && o, a = r.cursorProgress,
          u = this.props.transformPagePoint
        this.panSession = new fo(t, {
          onSessionStart: function(t) {
            var e
            n.stopMotion()
            var r = function(t) {return Br(t, "client")}(t).point
            null === (e = n.cancelLayout) || void 0 === e || e.call(n), n.cancelLayout = ii((function(t, e) {
              var o = Io(n.visualElement), u = function(t) {
                var e = []
                return t.children.forEach((function t (n) {Fo(n) && e.push(n), n.children.forEach(t)})), e.sort(Bo)
              }(n.visualElement), s = m(m([], v(o)), v(u)), c = !1
              n.isLayoutDrag() && n.visualElement.lockProjectionTarget(), e((function() {s.forEach((function(t) {return t.resetTransform()}))})), t((function() {_o(n.visualElement), u.forEach(_o)})), e((function() {s.forEach((function(t) {return t.restoreTransform()})), i && (c = n.snapToCursor(r))})), t((function() {
                Boolean(n.getAxisMotionValue("x") && !n.isExternalDrag()) || n.visualElement.rebaseProjectionTarget(!0, n.visualElement.measureViewportBox(!1)), n.visualElement.scheduleUpdateLayoutProjection()
                var t = n.visualElement.projection
                Po((function(e) {
                  if (!c) {
                    var o = t.target[e], i = o.min, u = o.max
                    n.cursorProgress[e] = a ? a[e] : T(i, u, r[e])
                  }
                  var s = n.getAxisMotionValue(e)
                  s && (n.originPoint[e] = s.get())
                }))
              })), e((function() {$t.update(), $t.preRender(), $t.render(), $t.postRender()})), t((function() {return n.resolveDragConstraints()}))
            }))
          }, onStart: function(t, e) {
            var r, o, i, a = n.props, u = a.drag, s = a.dragPropagation;
            (!u || s || (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = Gr(u), n.openGlobalLock)) && (ai(), n.isDragging = !0, n.currentDirection = null, null === (o = (r = n.props).onDragStart) || void 0 === o || o.call(r, t, e), null === (i = n.visualElement.animationState) || void 0 === i || i.setActive(Cr.Drag, !0))
          }, onMove: function(t, e) {
            var r, o, i, a, u = n.props, s = u.dragPropagation, c = u.dragDirectionLock
            if (s || n.openGlobalLock) {
              var l = e.offset
              if (c && null === n.currentDirection) return n.currentDirection = function(t, e) {
                void 0 === e && (e = 10)
                var n = null
                Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x")
                return n
              }(l), void (null !== n.currentDirection && (null === (o = (r = n.props).onDirectionLock) || void 0 === o || o.call(r, n.currentDirection)))
              n.updateAxis("x", e.point, l), n.updateAxis("y", e.point, l), null === (a = (i = n.props).onDrag) || void 0 === a || a.call(i, t, e), ui = t
            }
          }, onSessionEnd: function(t, e) {return n.stop(t, e)}
        }, { transformPagePoint: u })
      }, t.prototype.resolveDragConstraints = function() {
        var t = this, e = this.props, n = e.dragConstraints, r = e.dragElastic,
          o = this.visualElement.getLayoutState().layoutCorrected
        this.constraints = !!n && (Rn(n) ? this.resolveRefConstraints(o, n) : function(t, e) {
          var n = e.top, r = e.left, o = e.bottom, i = e.right
          return { x: To(t.x, r, i), y: To(t.y, n, o) }
        }(o, n)), this.elastic = function(t) {
          return !1 === t ? t = 0 : !0 === t && (t = .35), {
            x: So(t, "left", "right"),
            y: So(t, "top", "bottom")
          }
        }(r), this.constraints && !this.hasMutatedConstraints && Po((function(e) {
          t.getAxisMotionValue(e) && (t.constraints[e] = function(t, e) {
            var n = {}
            return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
          }(o[e], t.constraints[e]))
        }))
      }, t.prototype.resolveRefConstraints = function(t, e) {
        var n = this.props, r = n.onMeasureDragConstraints, o = n.transformPagePoint, i = e.current
        this.constraintsBox = Mo(i, o)
        var a = function(t, e) {return { x: ko(t.x, e.x), y: ko(t.y, e.y) }}(t, this.constraintsBox)
        if (r) {
          var u = r(function(t) {
            var e = t.x, n = t.y
            return { top: n.min, bottom: n.max, left: e.min, right: e.max }
          }(a))
          this.hasMutatedConstraints = !!u, u && (a = bo(u))
        }
        return a
      }, t.prototype.cancelDrag = function() {
        var t, e
        this.visualElement.unlockProjectionTarget(), null === (t = this.cancelLayout) || void 0 === t || t.call(this), this.isDragging = !1, this.panSession && this.panSession.end(), this.panSession = null, !this.props.dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(Cr.Drag, !1)
      }, t.prototype.stop = function(t, e) {
        var n, r, o
        null === (n = this.panSession) || void 0 === n || n.end(), this.panSession = null
        var i = this.isDragging
        if (this.cancelDrag(), i) {
          var a = e.velocity
          this.animateDragEnd(a), null === (o = (r = this.props).onDragEnd) || void 0 === o || o.call(r, t, e)
        }
      }, t.prototype.snapToCursor = function(t) {
        var e = this
        return Po((function(n) {
          if (fi(n, e.props.drag, e.currentDirection)) {
            var r = e.getAxisMotionValue(n)
            if (!r) return e.cursorProgress[n] = .5, !0
            var o = e.visualElement.getLayoutState().layout, i = o[n].max - o[n].min, a = o[n].min + i / 2,
              u = t[n] - a
            e.originPoint[n] = t[n], r.set(u)
          }
        })).includes(!0)
      }, t.prototype.updateAxis = function(t, e, n) {if (fi(t, this.props.drag, this.currentDirection)) return this.getAxisMotionValue(t) ? this.updateAxisMotionValue(t, n) : this.updateVisualElementAxis(t, e)}, t.prototype.updateAxisMotionValue = function(t, e) {
        var n = this.getAxisMotionValue(t)
        if (e && n) {
          var r = this.originPoint[t] + e[t], o = this.constraints ? Ao(r, this.constraints[t], this.elastic[t]) : r
          n.set(o)
        }
      }, t.prototype.updateVisualElementAxis = function(t, e) {
        var n, r = this.visualElement.getLayoutState().layout[t], o = r.max - r.min, i = this.cursorProgress[t],
          a = function(t, e, n, r, o) {
            var i = t - e * n
            return r ? Ao(i, r, o) : i
          }(e[t], o, i, null === (n = this.constraints) || void 0 === n ? void 0 : n[t], this.elastic[t])
        this.visualElement.setProjectionTargetAxis(t, a, a + o)
      }, t.prototype.setProps = function(t) {
        var e = t.drag, n = void 0 !== e && e, r = t.dragDirectionLock, o = void 0 !== r && r, i = t.dragPropagation,
          a = void 0 !== i && i, u = t.dragConstraints, s = void 0 !== u && u, c = t.dragElastic,
          l = void 0 === c ? .35 : c, f = t.dragMomentum, v = void 0 === f || f,
          m = p(t, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"])
        this.props = d({
          drag: n,
          dragDirectionLock: o,
          dragPropagation: a,
          dragConstraints: s,
          dragElastic: l,
          dragMomentum: v
        }, m)
      }, t.prototype.getAxisMotionValue = function(t) {
        var e = this.props, n = e.layout, r = e.layoutId, o = "_drag" + t.toUpperCase()
        return this.props[o] ? this.props[o] : n || void 0 !== r ? void 0 : this.visualElement.getValue(t, 0)
      }, t.prototype.isLayoutDrag = function() {return !this.getAxisMotionValue("x")}, t.prototype.isExternalDrag = function() {
        var t = this.props, e = t._dragX, n = t._dragY
        return e || n
      }, t.prototype.animateDragEnd = function(t) {
        var e = this, n = this.props, r = n.drag, o = n.dragMomentum, i = n.dragElastic, a = n.dragTransition,
          u = function(t, e) {
            void 0 === e && (e = !0)
            var n, r = t.getProjectionParent()
            return !!r && (e ? ni(n = Ho(r.projection.target, t.projection.target), r.getLatestValues()) : n = Ho(r.getLayoutState().layout, t.getLayoutState().layout), Po((function(e) {return t.setProjectionTargetAxis(e, n[e].min, n[e].max, !0)})), !0)
          }(this.visualElement, this.isLayoutDrag() && !this.isExternalDrag()), s = this.constraints || {}
        if (u && Object.keys(s).length && this.isLayoutDrag()) {
          var c = this.visualElement.getProjectionParent()
          if (c) {
            var l = Ho(c.projection.targetFinal, s)
            Po((function(t) {
              var e = l[t], n = e.min, r = e.max
              s[t] = { min: isNaN(n) ? void 0 : n, max: isNaN(r) ? void 0 : r }
            }))
          }
        }
        var f = Po((function(n) {
          var c
          if (fi(n, r, e.currentDirection)) {
            var l = null !== (c = null == s ? void 0 : s[n]) && void 0 !== c ? c : {}, f = i ? 200 : 1e6,
              p = i ? 40 : 1e7, v = d(d({
                type: "inertia",
                velocity: o ? t[n] : 0,
                bounceStiffness: f,
                bounceDamping: p,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10
              }, a), l)
            return e.getAxisMotionValue(n) ? e.startAxisValueAnimation(n, v) : e.visualElement.startLayoutAnimation(n, v, u)
          }
        }))
        return Promise.all(f).then((function() {
          var t, n
          null === (n = (t = e.props).onDragTransitionEnd) || void 0 === n || n.call(t)
        }))
      }, t.prototype.stopMotion = function() {
        var t = this
        Po((function(e) {
          var n = t.getAxisMotionValue(e)
          n ? n.stop() : t.visualElement.stopLayoutAnimation()
        }))
      }, t.prototype.startAxisValueAnimation = function(t, e) {
        var n = this.getAxisMotionValue(t)
        if (n) {
          var r = n.get()
          return n.set(r), n.set(r), Ie(t, n, 0, e)
        }
      }, t.prototype.scalePoint = function() {
        var t = this, e = this.props, n = e.drag
        if (Rn(e.dragConstraints) && this.constraintsBox) {
          this.stopMotion()
          var r = { x: 0, y: 0 }
          Po((function(e) {r[e] = Ro(t.visualElement.projection.target[e], t.constraintsBox[e])})), this.updateConstraints((function() {
            Po((function(e) {
              if (fi(e, n, null)) {
                var o = function(t, e, n) {
                  var r = t.max - t.min, o = k(e.min, e.max - r, n)
                  return { min: o, max: o + r }
                }(t.visualElement.projection.target[e], t.constraintsBox[e], r[e]), i = o.min, a = o.max
                t.visualElement.setProjectionTargetAxis(e, i, a)
              }
            }))
          })), setTimeout(ai, 1)
        }
      }, t.prototype.updateConstraints = function(t) {
        var e = this
        this.cancelLayout = ii((function(n, r) {
          var o = Io(e.visualElement)
          r((function() {return o.forEach((function(t) {return t.resetTransform()}))})), n((function() {return _o(e.visualElement)})), r((function() {return o.forEach((function(t) {return t.restoreTransform()}))})), n((function() {e.resolveDragConstraints()})), t && r(t)
        }))
      }, t.prototype.mount = function(t) {
        var e = this, n = Hr(t.getInstance(), "pointerdown", (function(t) {
            var n = e.props, r = n.drag, o = n.dragListener
            r && (void 0 === o || o) && e.start(t)
          })), r = Lr(window, "resize", (function() {e.scalePoint()})),
          o = t.onLayoutUpdate((function() {e.isDragging && e.resolveDragConstraints()})), i = t.prevDragCursor
        return i && this.start(ui, { cursorProgress: i }), function() {null == n || n(), null == r || r(), null == o || o(), e.cancelDrag()}
      }, t
    }()

    function fi (t, e, n) {return !(!0 !== e && e !== t || null !== n && n !== t)}

    var di, pi, vi = {
      pan: Jr((function(t) {
        var e = t.onPan, n = t.onPanStart, o = t.onPanEnd, i = t.onPanSessionStart, a = t.visualElement,
          u = e || n || o || i, s = (0, r.useRef)(null), c = (0, r.useContext)(bn).transformPagePoint,
          l = { onSessionStart: i, onStart: n, onMove: e, onEnd: function(t, e) {s.current = null, o && o(t, e)} };
        (0, r.useEffect)((function() {null !== s.current && s.current.updateHandlers(l)})), Xr(a, "pointerdown", u && function(t) {s.current = new fo(t, l, { transformPagePoint: c })}), $r((function() {return s.current && s.current.end()}))
      })),
      drag: Jr((function(t) {
        var e = t.dragControls, n = t.visualElement, o = (0, r.useContext)(bn).transformPagePoint,
          i = pn((function() {return new li({ visualElement: n })}))
        i.setProps(d(d({}, t), { transformPagePoint: o })), (0, r.useEffect)((function() {return e && e.subscribe(i)}), [i]), (0, r.useEffect)((function() {return i.mount(n)}), [])
      }))
    }

    function mi (t) {return "string" == typeof t && t.startsWith("var(--")}

    !function(t) {t[t.Entering = 0] = "Entering", t[t.Present = 1] = "Present", t[t.Exiting = 2] = "Exiting"}(di || (di = {})), function(t) {t[t.Hide = 0] = "Hide", t[t.Show = 1] = "Show"}(pi || (pi = {}))
    var hi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/

    function yi (t, e, n) {
      void 0 === n && (n = 1)
      var r = v(function(t) {
        var e = hi.exec(t)
        if (!e) return []
        var n = v(e, 3)
        return [n[1], n[2]]
      }(t), 2), o = r[0], i = r[1]
      if (o) {
        var a = window.getComputedStyle(e).getPropertyValue(o)
        return a ? a.trim() : mi(i) ? yi(i, e, n + 1) : i
      }
    }

    function gi (t, e) {return t / (e.max - e.min) * 100}

    var xi = "_$css"
    var bi = {
      process: function(t, e, n) {
        var r = n.target
        if ("string" == typeof t) {
          if (!Y.test(t)) return t
          t = parseFloat(t)
        }
        return gi(t, r.x) + "% " + gi(t, r.y) + "%"
      }
    }, wi = {
      borderRadius: d(d({}, bi), { applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }),
      borderTopLeftRadius: bi,
      borderTopRightRadius: bi,
      borderBottomLeftRadius: bi,
      borderBottomRightRadius: bi,
      boxShadow: {
        process: function(t, e) {
          var n = e.delta, r = e.treeScale, o = t, i = t.includes("var("), a = []
          i && (t = t.replace(hi, (function(t) {return a.push(t), xi})))
          var u = st.parse(t)
          if (u.length > 5) return o
          var s = st.createTransformer(t), c = "number" != typeof u[0] ? 1 : 0, l = n.x.scale * r.x,
            f = n.y.scale * r.y
          u[0 + c] /= l, u[1 + c] /= f
          var d = k(l, f, .5)
          "number" == typeof u[2 + c] && (u[2 + c] /= d), "number" == typeof u[3 + c] && (u[3 + c] /= d)
          var p = s(u)
          if (i) {
            var v = 0
            p = p.replace(xi, (function() {
              var t = a[v]
              return v++, t
            }))
          }
          return p
        }
      }
    }, Ei = function(t) {
      function e () {
        var e = null !== t && t.apply(this, arguments) || this
        return e.frameTarget = {
          x: { min: 0, max: 1 },
          y: { min: 0, max: 1 }
        }, e.currentAnimationTarget = { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } }, e.isAnimating = {
          x: !1,
          y: !1
        }, e.stopAxisAnimation = { x: void 0, y: void 0 }, e.isAnimatingTree = !1, e.animate = function(t, n, r) {
          void 0 === r && (r = {})
          var o = r.originBox, i = r.targetBox, a = r.visibilityAction, u = r.shouldStackAnimate, s = r.onComplete,
            c = r.prevParent,
            l = p(r, ["originBox", "targetBox", "visibilityAction", "shouldStackAnimate", "onComplete", "prevParent"]),
            f = e.props, v = f.visualElement, m = f.layout
          if (!1 === u) return e.isAnimatingTree = !1, e.safeToRemove()
          if (!e.isAnimatingTree || !0 === u) {
            u && (e.isAnimatingTree = !0), n = o || n, t = i || t
            var h = !1, y = v.getProjectionParent()
            if (y) {
              var g = y.prevViewportBox, x = y.getLayoutState().layout
              c && (i && (x = c.getLayoutState().layout), o && !Xo(c, y) && c.prevViewportBox && (g = c.prevViewportBox)), g && Ci(c, o, i) && (h = !0, n = Ho(g, n), t = Ho(x, t))
            }
            var b = Pi(n, t), w = Po((function(r) {
              var o, i
              if ("position" === m) {
                var u = t[r].max - t[r].min
                n[r].max = n[r].min + u
              }
              if (!v.projection.isTargetLocked) return void 0 === a ? b ? e.animateAxis(r, t[r], n[r], d(d({}, l), { isRelative: h })) : (null === (i = (o = e.stopAxisAnimation)[r]) || void 0 === i || i.call(o), v.setProjectionTargetAxis(r, t[r].min, t[r].max, h)) : void v.setVisibility(a === pi.Show)
            }))
            return v.syncRender(), Promise.all(w).then((function() {e.isAnimatingTree = !1, s && s(), v.notifyLayoutAnimationComplete()}))
          }
        }, e
      }

      return f(e, t), e.prototype.componentDidMount = function() {
        var t = this, e = this.props.visualElement
        e.animateMotionValue = Ie, e.enableLayoutProjection(), this.unsubLayoutReady = e.onLayoutUpdate(this.animate), e.layoutSafeToRemove = function() {return t.safeToRemove()}, function(t) {for (var e in t) In[e] = t[e]}(wi)
      }, e.prototype.componentWillUnmount = function() {
        var t = this
        this.unsubLayoutReady(), Po((function(e) {
          var n, r
          return null === (r = (n = t.stopAxisAnimation)[e]) || void 0 === r ? void 0 : r.call(n)
        }))
      }, e.prototype.animateAxis = function(t, e, n, r) {
        var o, i, a = this, u = void 0 === r ? {} : r, s = u.transition, c = u.isRelative
        if (!this.isAnimating[t] || !ki(e, this.currentAnimationTarget[t])) {
          null === (i = (o = this.stopAxisAnimation)[t]) || void 0 === i || i.call(o), this.isAnimating[t] = !0
          var l = this.props.visualElement, f = this.frameTarget[t], d = l.getProjectionAnimationProgress()[t]
          d.clearListeners(), d.set(0), d.set(0)
          var p = function() {
            var r = d.get() / 1e3
            !function(t, e, n, r) {t.min = k(e.min, n.min, r), t.max = k(e.max, n.max, r)}(f, n, e, r), l.setProjectionTargetAxis(t, f.min, f.max, c)
          }
          p()
          var v = d.onChange(p)
          this.stopAxisAnimation[t] = function() {a.isAnimating[t] = !1, d.stop(), v()}, this.currentAnimationTarget[t] = e
          var m = s || l.getDefaultTransition() || Si
          return Ie("x" === t ? "layoutX" : "layoutY", d, 1e3, m && Fe(m, "layout")).then(this.stopAxisAnimation[t])
        }
      }, e.prototype.safeToRemove = function() {
        var t, e
        null === (e = (t = this.props).safeToRemove) || void 0 === e || e.call(t)
      }, e.prototype.render = function() {return null}, e
    }(r.Component)

    function Pi (t, e) {return !(Ti(t) || Ti(e) || ki(t.x, e.x) && ki(t.y, e.y))}

    var Ai = { min: 0, max: 0 }

    function Ti (t) {return ki(t.x, Ai) && ki(t.y, Ai)}

    function ki (t, e) {return t.min === e.min && t.max === e.max}

    var Si = { duration: .45, ease: [.4, 0, .1, 1] }

    function Ci (t, e, n) {return t || !t && !(e || n)}

    var Mi = { layoutReady: function(t) {return t.notifyLayoutReady()} }

    function Li () {
      var t = new Set
      return {
        add: function(e) {return t.add(e)},
        flush: function(e) {
          var n = void 0 === e ? Mi : e, r = n.layoutReady, o = n.parent
          ii((function(e, n) {
            var i = Array.from(t).sort(Bo), a = o ? Io(o) : []
            n((function() {m(m([], v(a)), v(i)).forEach((function(t) {return t.resetTransform()}))})), e((function() {i.forEach(_o)})), n((function() {a.forEach((function(t) {return t.restoreTransform()})), i.forEach(r)})), e((function() {i.forEach((function(t) {t.isPresent && (t.presence = di.Present)}))})), n((function() {$t.preRender(), $t.render()})), e((function() {ne.postRender((function() {return i.forEach(Vi)})), t.clear()}))
          })), ai()
        }
      }
    }

    function Vi (t) {t.prevViewportBox = t.projection.target}

    var Ri = (0, r.createContext)(Li()), Oi = (0, r.createContext)(Li())

    function ji (t) {return !!t.forceUpdate}

    var Di = function(t) {
      function e () {return null !== t && t.apply(this, arguments) || this}

      return f(e, t), e.prototype.componentDidMount = function() {
        var t = this.props, e = t.syncLayout, n = t.framerSyncLayout, r = t.visualElement
        ji(e) && e.register(r), ji(n) && n.register(r), r.onUnmount((function() {ji(e) && e.remove(r), ji(n) && n.remove(r)}))
      }, e.prototype.getSnapshotBeforeUpdate = function() {
        var t = this.props, e = t.syncLayout, n = t.visualElement
        return ji(e) ? e.syncUpdate() : (!function(t) {t.shouldResetTransform() || (t.prevViewportBox = t.measureViewportBox(!1), t.rebaseProjectionTarget(!1, t.prevViewportBox))}(n), e.add(n)), null
      }, e.prototype.componentDidUpdate = function() {
        var t = this.props.syncLayout
        ji(t) || t.flush()
      }, e.prototype.render = function() {return null}, e
    }(r.Component)
    var Ni = {
      measureLayout: function(t) {
        var e = (0, r.useContext)(Ri), n = (0, r.useContext)(Oi)
        return r.createElement(Di, d({}, t, { syncLayout: e, framerSyncLayout: n }))
      }, layoutAnimation: function(t) {
        var e = v(Pn(), 2)[1]
        return r.createElement(Ei, d({}, t, { safeToRemove: e }))
      }
    }

    function Bi () {
      return {
        isHydrated: !1,
        layout: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
        layoutCorrected: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
        treeScale: { x: 1, y: 1 },
        delta: Eo(),
        deltaFinal: Eo(),
        deltaTransform: ""
      }
    }

    var Fi = Bi()

    function Ii (t, e, n) {
      var r = t.x, o = t.y, i = "translate3d(" + r.translate / e.x + "px, " + o.translate / e.y + "px, 0) "
      if (n) {
        var a = n.rotate, u = n.rotateX, s = n.rotateY
        a && (i += "rotate(" + a + ") "), u && (i += "rotateX(" + u + ") "), s && (i += "rotateY(" + s + ") ")
      }
      return i += "scale(" + r.scale + ", " + o.scale + ")", n || i !== Ui ? i : ""
    }

    function _i (t) {
      var e = t.deltaFinal
      return 100 * e.x.origin + "% " + 100 * e.y.origin + "% 0"
    }

    var Ui = Ii(Fi.delta, Fi.treeScale, { x: 1, y: 1 }),
      Hi = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "SetAxisTarget", "Unmount"]

    function Xi (t, e, n, r) {
      var o, i, a = t.delta, u = t.layout, s = t.layoutCorrected, c = t.treeScale, l = e.target
      i = u, Yo((o = s).x, i.x), Yo(o.y, i.y), function(t, e, n) {
        var r = n.length
        if (r) {
          var o, i
          e.x = e.y = 1
          for (var a = 0; a < r; a++) i = (o = n[a]).getLayoutState().delta, e.x *= i.x.scale, e.y *= i.y.scale, qo(t, i), zo(o) && Qo(t, t, o.getLatestValues())
        }
      }(s, c, n), jo(a, s, l, r)
    }

    var zi = function() {
      function t () {this.children = [], this.isDirty = !1}

      return t.prototype.add = function(t) {_e(this.children, t), this.isDirty = !0}, t.prototype.remove = function(t) {Ue(this.children, t), this.isDirty = !0}, t.prototype.forEach = function(t) {this.isDirty && this.children.sort(Bo), this.isDirty = !1, this.children.forEach(t)}, t
    }()
    var Yi = function(t) {
      var e = t.treeType, n = void 0 === e ? "" : e, r = t.build, o = t.getBaseTarget, i = t.makeTargetAnimatable,
        a = t.measureViewportBox, u = t.render, s = t.readValueFromInstance, c = t.resetTransform,
        l = t.restoreTransform, f = t.removeValueFromRenderState, p = t.sortNodePosition,
        h = t.scrapeMotionValuesFromProps
      return function(t, e) {
        var y = t.parent, g = t.props, x = t.presenceId, b = t.blockInitialAnimation, w = t.visualState
        void 0 === e && (e = {})
        var E, P, A, T, k, S, C = w.latestValues, M = w.renderState, L = function() {
          var t = Hi.map((function() {return new He})), e = {}, n = {
            clearAllListeners: function() {return t.forEach((function(t) {return t.clear()}))},
            updatePropListeners: function(t) {
              return Hi.forEach((function(r) {
                var o
                null === (o = e[r]) || void 0 === o || o.call(e)
                var i = "on" + r, a = t[i]
                a && (e[r] = n[i](a))
              }))
            }
          }
          return t.forEach((function(t, e) {
            n["on" + Hi[e]] = function(e) {return t.add(e)}, n["notify" + Hi[e]] = function() {
              for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
              return t.notify.apply(t, m([], v(e)))
            }
          })), n
        }(), V = {
          isEnabled: !1,
          isHydrated: !1,
          isTargetLocked: !1,
          target: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
          targetFinal: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } }
        }, R = V, O = C, j = Bi(), D = !1, N = new Map, B = new Map, F = {}, I = d({}, C)

        function _ () {E && (q.isProjectionReady() && (Qo(R.targetFinal, R.target, O), jo(j.deltaFinal, j.layoutCorrected, R.targetFinal, C)), U(), u(E, M))}

        function U () {
          var t = C
          if (T && T.isActive()) {
            var n = T.getCrossfadeState(q)
            n && (t = n)
          }
          r(q, M, t, R, j, e, g)
        }

        function H () {L.notifyUpdate(C)}

        function X () {q.layoutTree.forEach(Gi)}

        var z = h(g)
        for (var Y in z) {
          var W = z[Y]
          void 0 !== C[Y] && Zn(W) && W.set(C[Y], !1)
        }
        var G = tn(g), Z = en(g), q = d(d({
          treeType: n,
          current: null,
          depth: y ? y.depth + 1 : 0,
          parent: y,
          children: new Set,
          path: y ? m(m([], v(y.path)), [y]) : [],
          layoutTree: y ? y.layoutTree : new zi,
          presenceId: x,
          projection: V,
          variantChildren: Z ? new Set : void 0,
          isVisible: void 0,
          manuallyAnimateOnMount: Boolean(null == y ? void 0 : y.isMounted()),
          blockInitialAnimation: b,
          isMounted: function() {return Boolean(E)},
          mount: function(t) {E = q.current = t, q.pointTo(q), Z && y && !G && (S = null == y ? void 0 : y.addVariantChild(q)), null == y || y.children.add(q)},
          unmount: function() {Kt.update(H), Kt.render(_), Kt.preRender(q.updateLayoutProjection), B.forEach((function(t) {return t()})), q.stopLayoutAnimation(), q.layoutTree.remove(q), null == S || S(), null == y || y.children.delete(q), null == A || A(), L.clearAllListeners()},
          addVariantChild: function(t) {
            var e, n = q.getClosestVariantNode()
            if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t), function() {return n.variantChildren.delete(t)}
          },
          sortNodePosition: function(t) {return p && n === t.treeType ? p(q.getInstance(), t.getInstance()) : 0},
          getClosestVariantNode: function() {return Z ? q : null == y ? void 0 : y.getClosestVariantNode()},
          scheduleUpdateLayoutProjection: y ? y.scheduleUpdateLayoutProjection : function() {return ne.preRender(q.updateTreeLayoutProjection, !1, !0)},
          getLayoutId: function() {return g.layoutId},
          getInstance: function() {return E},
          getStaticValue: function(t) {return C[t]},
          setStaticValue: function(t, e) {return C[t] = e},
          getLatestValues: function() {return C},
          setVisibility: function(t) {q.isVisible !== t && (q.isVisible = t, q.scheduleRender())},
          makeTargetAnimatable: function(t, e) {return void 0 === e && (e = !0), i(q, t, g, e)},
          addValue: function(t, e) {
            q.hasValue(t) && q.removeValue(t), N.set(t, e), C[t] = e.get(), function(t, e) {
              var n = e.onChange((function(e) {C[t] = e, g.onUpdate && ne.update(H, !1, !0)})),
                r = e.onRenderRequest(q.scheduleRender)
              B.set(t, (function() {n(), r()}))
            }(t, e)
          },
          removeValue: function(t) {
            var e
            N.delete(t), null === (e = B.get(t)) || void 0 === e || e(), B.delete(t), delete C[t], f(t, M)
          },
          hasValue: function(t) {return N.has(t)},
          getValue: function(t, e) {
            var n = N.get(t)
            return void 0 === n && void 0 !== e && (n = ze(e), q.addValue(t, n)), n
          },
          forEachValue: function(t) {return N.forEach(t)},
          readValue: function(t) {
            var n
            return null !== (n = C[t]) && void 0 !== n ? n : s(E, t, e)
          },
          setBaseTarget: function(t, e) {I[t] = e},
          getBaseTarget: function(t) {
            if (o) {
              var e = o(g, t)
              if (void 0 !== e && !Zn(e)) return e
            }
            return I[t]
          }
        }, L), {
          build: function() {return U(), M},
          scheduleRender: function() {ne.render(_, !1, !0)},
          syncRender: _,
          setProps: function(t) {
            g = t, L.updatePropListeners(t), F = function(t, e, n) {
              var r
              for (var o in e) {
                var i = e[o], a = n[o]
                if (Zn(i)) t.addValue(o, i) else if (Zn(a)) t.addValue(o, ze(i)) else if (a !== i) if (t.hasValue(o)) {
                  var u = t.getValue(o)
                  !u.hasAnimated && u.set(i)
                } else t.addValue(o, ze(null !== (r = t.getStaticValue(o)) && void 0 !== r ? r : i))
              }
              for (var o in n) void 0 === e[o] && t.removeValue(o)
              return e
            }(q, h(g), F)
          },
          getProps: function() {return g},
          getVariant: function(t) {
            var e
            return null === (e = g.variants) || void 0 === e ? void 0 : e[t]
          },
          getDefaultTransition: function() {return g.transition},
          getVariantContext: function(t) {
            if (void 0 === t && (t = !1), t) return null == y ? void 0 : y.getVariantContext()
            if (!G) {
              var e = (null == y ? void 0 : y.getVariantContext()) || {}
              return void 0 !== g.initial && (e.initial = g.initial), e
            }
            for (var n = {}, r = 0; r < Ki; r++) {
              var o = qi[r], i = g[o];
              ($e(i) || !1 === i) && (n[o] = i)
            }
            return n
          },
          enableLayoutProjection: function() {V.isEnabled = !0, q.layoutTree.add(q)},
          lockProjectionTarget: function() {V.isTargetLocked = !0},
          unlockProjectionTarget: function() {q.stopLayoutAnimation(), V.isTargetLocked = !1},
          getLayoutState: function() {return j},
          setCrossfader: function(t) {T = t},
          isProjectionReady: function() {return V.isEnabled && V.isHydrated && j.isHydrated},
          startLayoutAnimation: function(t, e, n) {
            void 0 === n && (n = !1)
            var r = q.getProjectionAnimationProgress()[t], o = n ? V.relativeTarget[t] : V.target[t], i = o.min,
              a = o.max - i
            return r.clearListeners(), r.set(i), r.set(i), r.onChange((function(e) {q.setProjectionTargetAxis(t, e, e + a, n)})), q.animateMotionValue(t, r, 0, e)
          },
          stopLayoutAnimation: function() {Po((function(t) {return q.getProjectionAnimationProgress()[t].stop()}))},
          measureViewportBox: function(t) {
            void 0 === t && (t = !0)
            var n = a(E, e)
            return t || ni(n, C), n
          },
          getProjectionAnimationProgress: function() {return k || (k = { x: ze(0), y: ze(0) }), k},
          setProjectionTargetAxis: function(t, e, n, r) {
            var o
            void 0 === r && (r = !1), r ? (V.relativeTarget || (V.relativeTarget = {
              x: { min: 0, max: 1 },
              y: { min: 0, max: 1 }
            }), o = V.relativeTarget[t]) : (V.relativeTarget = void 0, o = V.target[t]), V.isHydrated = !0, o.min = e, o.max = n, D = !0, L.notifySetAxisTarget()
          },
          rebaseProjectionTarget: function(t, e) {
            void 0 === e && (e = j.layout)
            var n = q.getProjectionAnimationProgress(), r = n.x, o = n.y,
              i = !(V.relativeTarget || V.isTargetLocked || r.isAnimating() || o.isAnimating());
            (t || i) && Po((function(t) {
              var n = e[t], r = n.min, o = n.max
              q.setProjectionTargetAxis(t, r, o)
            }))
          },
          notifyLayoutReady: function(t) {
            !function(t) {
              var e = t.getProjectionParent()
              if (e) {
                var n = Ho(e.getLayoutState().layout, t.getLayoutState().layout)
                Po((function(e) {t.setProjectionTargetAxis(e, n[e].min, n[e].max, !0)}))
              } else t.rebaseProjectionTarget()
            }(q), q.notifyLayoutUpdate(j.layout, q.prevViewportBox || j.layout, t)
          },
          resetTransform: function() {return c(q, E, g)},
          restoreTransform: function() {return l(E, M)},
          updateLayoutProjection: function() {
            if (q.isProjectionReady()) {
              var t = j.delta, e = j.treeScale, n = e.x, r = e.y, o = j.deltaTransform
              Xi(j, R, q.path, C), D && q.notifyViewportBoxUpdate(R.target, t), D = !1
              var i = Ii(t, e)
              i === o && n === e.x && r === e.y || q.scheduleRender(), j.deltaTransform = i
            }
          },
          updateTreeLayoutProjection: function() {q.layoutTree.forEach(Wi), ne.preRender(X, !1, !0)},
          getProjectionParent: function() {
            if (void 0 === P) {
              for (var t = !1, e = q.path.length - 1; e >= 0; e--) {
                var n = q.path[e]
                if (n.projection.isEnabled) {
                  t = n
                  break
                }
              }
              P = t
            }
            return P
          },
          resolveRelativeTargetBox: function() {
            var t = q.getProjectionParent()
            if (V.relativeTarget && t && (function(t, e) {No(t.target.x, t.relativeTarget.x, e.target.x), No(t.target.y, t.relativeTarget.y, e.target.y)}(V, t.projection), zo(t))) {
              var e = V.target
              Qo(e, e, t.getLatestValues())
            }
          },
          shouldResetTransform: function() {return Boolean(g._layoutResetTransform)},
          pointTo: function(t) {
            R = t.projection, O = t.getLatestValues(), null == A || A(), A = ft(t.onSetAxisTarget(q.scheduleUpdateLayoutProjection), t.onLayoutAnimationComplete((function() {
              var t
              q.isPresent ? q.presence = di.Present : null === (t = q.layoutSafeToRemove) || void 0 === t || t.call(q)
            })))
          },
          isPresent: !0,
          presence: di.Entering
        })
        return q
      }
    }

    function Wi (t) {t.resolveRelativeTargetBox()}

    function Gi (t) {t.updateLayoutProjection()}

    var Zi, qi = m(["initial"], v(eo)), Ki = qi.length,
      $i = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
      Ji = function(t) {return $i.has(t)}, Qi = function(t, e) {t.set(e, !1), t.set(e)},
      ta = function(t) {return t === O || t === Y}
    !function(t) {t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"}(Zi || (Zi = {}))
    var ea = function(t, e) {return parseFloat(t.split(", ")[e])}, na = function(t, e) {
      return function(n, r) {
        var o = r.transform
        if ("none" === o || !o) return 0
        var i = o.match(/^matrix3d\((.+)\)$/)
        if (i) return ea(i[1], e)
        var a = o.match(/^matrix\((.+)\)$/)
        return a ? ea(a[1], t) : 0
      }
    }, ra = new Set(["x", "y", "z"]), oa = Un.filter((function(t) {return !ra.has(t)}))
    var ia = {
      width: function(t) {
        var e = t.x
        return e.max - e.min
      }, height: function(t) {
        var e = t.y
        return e.max - e.min
      }, top: function(t, e) {
        var n = e.top
        return parseFloat(n)
      }, left: function(t, e) {
        var n = e.left
        return parseFloat(n)
      }, bottom: function(t, e) {
        var n = t.y, r = e.top
        return parseFloat(r) + (n.max - n.min)
      }, right: function(t, e) {
        var n = t.x, r = e.left
        return parseFloat(r) + (n.max - n.min)
      }, x: na(4, 13), y: na(5, 14)
    }, aa = function(t, e, n, r) {
      void 0 === n && (n = {}), void 0 === r && (r = {}), e = d({}, e), r = d({}, r)
      var o = Object.keys(e).filter(Ji), i = [], a = !1, u = []
      if (o.forEach((function(o) {
        var s = t.getValue(o)
        if (t.hasValue(o)) {
          var c, l = n[o], f = e[o], d = Ge(l)
          if (ge(f)) for (var p = f.length, v = null === f[0] ? 1 : 0; v < p; v++) c ? Ge(f[v]) : (c = Ge(f[v])) === d || ta(d) && ta(c) else c = Ge(f)
          if (d !== c) if (ta(d) && ta(c)) {
            var m = s.get()
            "string" == typeof m && s.set(parseFloat(m)), "string" == typeof f ? e[o] = parseFloat(f) : Array.isArray(f) && c === Y && (e[o] = f.map(parseFloat))
          } else (null == d ? void 0 : d.transform) && (null == c ? void 0 : c.transform) && (0 === l || 0 === f) ? 0 === l ? s.set(c.transform(l)) : e[o] = d.transform(f) : (a || (i = function(t) {
            var e = []
            return oa.forEach((function(n) {
              var r = t.getValue(n)
              void 0 !== r && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
            })), e.length && t.syncRender(), e
          }(t), a = !0), u.push(o), r[o] = void 0 !== r[o] ? r[o] : e[o], Qi(s, f))
        }
      })), u.length) {
        var s = function(t, e, n) {
          var r = e.measureViewportBox(), o = e.getInstance(), i = getComputedStyle(o), a = i.display,
            u = { top: i.top, left: i.left, bottom: i.bottom, right: i.right, transform: i.transform }
          "none" === a && e.setStaticValue("display", t.display || "block"), e.syncRender()
          var s = e.measureViewportBox()
          return n.forEach((function(n) {
            var o = e.getValue(n)
            Qi(o, ia[n](r, u)), t[n] = ia[n](s, i)
          })), t
        }(e, t, u)
        return i.length && i.forEach((function(e) {
          var n = v(e, 2), r = n[0], o = n[1]
          t.getValue(r).set(o)
        })), t.syncRender(), { target: s, transitionEnd: r }
      }
      return { target: e, transitionEnd: r }
    }

    function ua (t, e, n, r) {
      return function(t) {return Object.keys(t).some(Ji)}(e) ? aa(t, e, n, r) : {
        target: e,
        transitionEnd: r
      }
    }

    var sa = function(t, e, n, r) {
      var o = function(t, e, n) {
        var r, o = p(e, []), i = t.getInstance()
        if (!(i instanceof HTMLElement)) return { target: o, transitionEnd: n }
        for (var a in n && (n = d({}, n)), t.forEachValue((function(t) {
          var e = t.get()
          if (mi(e)) {
            var n = yi(e, i)
            n && t.set(n)
          }
        })), o) {
          var u = o[a]
          if (mi(u)) {
            var s = yi(u, i)
            s && (o[a] = s, n && (null !== (r = n[a]) && void 0 !== r || (n[a] = u)))
          }
        }
        return { target: o, transitionEnd: n }
      }(t, e, r)
      return ua(t, e = o.target, n, r = o.transitionEnd)
    }
    var ca = {
        treeType: "dom",
        readValueFromInstance: function(t, e) {
          if (zn(e)) {
            var n = Ve(e)
            return n && n.default || 0
          }
          var r, o = (r = t, window.getComputedStyle(r))
          return (Kn(e) ? o.getPropertyValue(e) : o[e]) || 0
        },
        sortNodePosition: function(t, e) {return 2 & t.compareDocumentPosition(e) ? 1 : -1},
        getBaseTarget: function(t, e) {
          var n
          return null === (n = t.style) || void 0 === n ? void 0 : n[e]
        },
        measureViewportBox: function(t, e) {return Mo(t, e.transformPagePoint)},
        resetTransform: function(t, e, n) {
          var r = n.transformTemplate
          e.style.transform = r ? r({}, "") : "none", t.scheduleRender()
        },
        restoreTransform: function(t, e) {t.style.transform = e.style.transform},
        removeValueFromRenderState: function(t, e) {
          var n = e.vars, r = e.style
          delete n[t], delete r[t]
        },
        makeTargetAnimatable: function(t, e, n, r) {
          var o = n.transformValues
          void 0 === r && (r = !0)
          var i = e.transition, a = e.transitionEnd, u = p(e, ["transition", "transitionEnd"]), s = function(t, e, n) {
            var r, o, i = {}
            for (var a in t) i[a] = null !== (r = an(a, e)) && void 0 !== r ? r : null === (o = n.getValue(a)) || void 0 === o ? void 0 : o.get()
            return i
          }(u, i || {}, t)
          if (o && (a && (a = o(a)), u && (u = o(u)), s && (s = o(s))), r) {
            !function(t, e, n) {
              var r, o, i, a, u = Object.keys(e).filter((function(e) {return !t.hasValue(e)})), s = u.length
              if (s) for (var c = 0; c < s; c++) {
                var l = u[c], f = e[l], d = null
                Array.isArray(f) && (d = f[0]), null === d && (d = null !== (o = null !== (r = n[l]) && void 0 !== r ? r : t.readValue(l)) && void 0 !== o ? o : e[l]), null != d && ("string" == typeof d && /^\-?\d*\.?\d+$/.test(d) ? d = parseFloat(d) : !qe(d) && st.test(f) && (d = Re(l, f)), t.addValue(l, ze(d)), null !== (i = (a = n)[l]) && void 0 !== i || (a[l] = d), t.setBaseTarget(l, d))
              }
            }(t, u, s)
            var c = sa(t, u, s, a)
            a = c.transitionEnd, u = c.target
          }
          return d({ transition: i, transitionEnd: a }, u)
        },
        scrapeMotionValuesFromProps: br,
        build: function(t, e, n, r, o, i, a) {
          void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden")
          var u = r.isEnabled && o.isHydrated
          Jn(e, n, r, o, i, a.transformTemplate, u ? Ii : void 0, u ? _i : void 0)
        },
        render: yr
      }, la = Yi(ca), fa = Yi(d(d({}, ca), {
        getBaseTarget: function(t, e) {return t[e]}, readValueFromInstance: function(t, e) {
          var n
          return zn(e) ? (null === (n = Ve(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = gr.has(e) ? e : hr(e), t.getAttribute(e))
        }, scrapeMotionValuesFromProps: wr, build: function(t, e, n, r, o, i, a) {
          var u = r.isEnabled && o.isHydrated
          fr(e, n, r, o, i, a.transformTemplate, u ? Ii : void 0, u ? _i : void 0)
        }, render: xr
      })),
      da = function(t, e) {return Fn(t) ? fa(e, { enableHardwareAcceleration: !1 }) : la(e, { enableHardwareAcceleration: !0 })},
      pa = d(d(d(d({}, ao), Qr), vi), Ni), va = Nn((function(t, e) {
        return function(t, e, n, r) {
          var o = e.forwardMotionProps, i = void 0 !== o && o, a = Fn(t) ? Sr : Mr
          return d(d({}, a), { preloadedFeatures: n, useRender: vr(i), createVisualElement: r, Component: t })
        }(t, e, pa, da)
      }))
    var ma = n(9892), ha = n(7674), ya = function(t) {
      var e = t.content[0].node, n = e.frontmatter, o = e.body, i = vn(), u = vn()
      return (0, r.useEffect)((function() {
        (function() {
          var t, e = (t = s().mark((function t () {
            return s().wrap((function(t) {
              for (; ;) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, i.start({ opacity: 1, y: 0, transition: { delay: .4 } })
                case 2:
                  return t.next = 4, u.start({ opacity: 1, x: 0 })
                case 4:
                case"end":
                  return t.stop()
              }
            }), t)
          })), function() {
            var e = this, n = arguments
            return new Promise((function(r, o) {
              var i = t.apply(e, n)

              function u (t) {a(i, r, o, u, s, "next", t)}

              function s (t) {a(i, r, o, u, s, "throw", t)}

              u(void 0)
            }))
          })
          return function() {return e.apply(this, arguments)}
        })()()
      }), [i, u]), r.createElement("section", {
        id: "hero",
        className: "flex flex-col pt-32 min-h-view-minus-nav sm:pt-64"
      }, r.createElement(va.div, {
        initial: { opacity: 0, y: 20 },
        animate: i,
        className: "container flex flex-col flex-grow h-full mx-auto mb-16"
      }, r.createElement("div", { className: "mb-4" }, r.createElement("p", { className: "text-4xl font-bold sm:text-6xl dark:text-green-400" }, n.title), r.createElement("p", { className: "mb-2 text-2xl text-gray-500 dark:text-gray-300 sm:text-4xl tracking-wide" }, n.subtitle), r.createElement("div", { className: "text-sm md:text-base text-gray-400" }, r.createElement(c.MDXRenderer, null, o))), r.createElement(va.div, {
        initial: {
          opacity: 0,
          x: 20
        }, animate: u, className: "flex flex-row"
      }, ha.socialMedia.map((function(t, e) {
        t.name
        var n = t.icon, o = t.url
        return r.createElement(va.a, {
          key: "social-media-" + e,
          target: "_blank",
          rel: "noreferrer",
          whileHover: { scale: 1.1 },
          whileTap: { scale: .9 },
          href: o
        }, r.createElement(ma.Z, {
          className: "text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-500 fill-current w-10 h-10 mr-2",
          name: n
        }))
      })))))
    }, ga = n(6802), xa = function(t, e) {
      void 0 === e && (e = .25)
      var n = (0, r.useState)(!1), o = n[0], i = n[1]
      return (0, r.useEffect)((function() {
        var n = new IntersectionObserver((function(t) {
          var e = t[0]
          e.isIntersecting && (i(!0), n.unobserve(e.target))
        }), { threshold: e })
        return t.current && n.observe(t.current), function() {n.unobserve(t.current)}
      }), []), o
    }, ba = function(t) {
      var e = t.content[0].node, n = e.frontmatter, o = e.body, i = (0, ga.d)(n.image), a = vn(), u = vn(),
        s = (0, r.useRef)(), l = xa(s, .75), f = (0, r.useRef)(), d = xa(f, .75)
      return (0, r.useEffect)((function() {
        l && a.start({ opacity: 1, y: 0 }), d && u.start({
          opacity: 1,
          x: 0
        })
      }), [a, u, l, d]), r.createElement("section", {
        id: "about",
        className: "flex flex-col"
      }, r.createElement("div", { className: "container flex flex-col flex-grow" }, r.createElement("div", { className: "flex flex-col items-center flex-grow md:flex-row" }, r.createElement(va.div, {
        ref: s,
        initial: { opacity: 0, y: 20 },
        animate: a,
        className: "text-gray-700 dark:text-gray-300 text-center md:text-left"
      }, r.createElement("p", { className: "flex items-center mt-4 mb-4 md:mb-16 text-4xl font-bold whitespace-no-wrap heading md:text-5xl dark:text-green-400" }, n.title), r.createElement("div", { className: "text-base md:text-xl" }, r.createElement(c.MDXRenderer, null, o))), r.createElement(va.div, {
        ref: f,
        initial: { opacity: 0, x: 20 },
        animate: u,
        className: "flex items-center justify-center flex-grow w-full xl:ml-24"
      }, r.createElement(ga.G, {
        className: "w-1/2 h-auto mx-8 my-4 mb-8 rounded-full shadow-md sm:mx-16 md:w-72 md:h-72 md:mb-0",
        image: i,
        alt: "Me"
      })))))
    }, wa = function(t) {
      var e = t.content[0].node, n = e.frontmatter, o = e.exports.skills, i = (0, r.useRef)(), a = (0, r.useRef)(),
        u = xa(i), s = xa(a, .5), c = vn(), l = vn(), f = vn(), d = vn(), p = .5 / o.length
      return (0, r.useEffect)((function() {
        u && c.start({
          opacity: 1,
          y: 0
        }), s && (f.start((function(t) {
          return {
            opacity: 1,
            width: "100%",
            transition: { delay: t * p }
          }
        })), l.start((function(t) {
          return {
            opacity: 1,
            x: 0,
            transition: { delay: t * p }
          }
        })), d.start((function(t) {return { opacity: 1, x: 0, transition: { delay: t * p } }})))
      }), [u, s, c, f, l, d]), r.createElement("section", {
        id: "skills",
        className: "flex flex-col mt-16 md:mt-32"
      }, r.createElement("div", { className: "container flex flex-col h-full" }, r.createElement(va.p, {
        ref: i,
        initial: { opacity: 0, y: 20 },
        animate: c,
        className: "flex mt-4 text-gray-700 text-4xl font-bold whitespace-no-wrap heading md:text-5xl dark:text-green-400 mb-4 md:mb-16"
      }, n.title), r.createElement("div", { className: "flex items-center justify-center" }, r.createElement(va.div, {
        ref: a,
        className: "w-full grid gap-y-2 grid-cols-1 md:grid-cols-none md:grid-rows-6 md:grid-flow-col xl:gap-y-4"
      }, o.map((function(t, e) {
        var n = t.name, o = t.icon, i = t.proficiency
        return r.createElement("div", {
          className: "flex flex-row items-center justify-center",
          key: "skills-" + e
        }, r.createElement(va.div, {
          custom: e,
          ref: a,
          initial: { opacity: 0, x: 20 },
          animate: l,
          className: "border border-gray-200 dark:border-0 dark:border-transparent dark:bg-gray-800 shadow-md p-2 rounded-md min-w-12 w-12 h-12 xl:min-w-16 xl:w-16 xl:h-16 flex items-center justify-center mr-4"
        }, r.createElement(ma.Z, { className: "w-6 h-6 xl:w-8 xl:h-8", name: o })), r.createElement(va.div, {
          custom: e,
          initial: { opacity: 0, x: 20 },
          animate: d,
          className: "w-full bg-gray-100 dark:bg-gray-700 mr-4 shadow-lg border-2 border-green-400 rounded-sm"
        }, r.createElement("div", { style: { width: i + "%" } }, r.createElement(va.div, {
          custom: e,
          ref: a,
          initial: { opacity: 0, width: 0 },
          animate: f,
          className: "h-6 xl:h-8 shadow-none flex flex-col font-bold uppercase px-2 text-gray-800 justify-center bg-green-400 text-xs tracking-wider antialiased"
        }, n))))
      }))))))
    }

    function Ea () {
      return (Ea = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e]
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
      }).apply(this, arguments)
    }

    var Pa = new Map, Aa = new WeakMap, Ta = 0

    function ka (t) {
      return Object.keys(t).sort().filter((function(e) {return void 0 !== t[e]})).map((function(e) {
        return e + "_" + ("root" === e ? (n = t.root) ? (Aa.has(n) || (Ta += 1, Aa.set(n, Ta.toString())), Aa.get(n)) : "0" : t[e])
        var n
      })).toString()
    }

    function Sa (t, e, n) {
      if (void 0 === n && (n = {}), !t) return function() {}
      var r = function(t) {
        var e = ka(t), n = Pa.get(e)
        if (!n) {
          var r, o = new Map, i = new IntersectionObserver((function(e) {
            e.forEach((function(e) {
              var n, i = e.isIntersecting && r.some((function(t) {return e.intersectionRatio >= t}))
              t.trackVisibility && void 0 === e.isVisible && (e.isVisible = i), null == (n = o.get(e.target)) || n.forEach((function(t) {t(i, e)}))
            }))
          }), t)
          r = i.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), n = {
            id: e,
            observer: i,
            elements: o
          }, Pa.set(e, n)
        }
        return n
      }(n), o = r.id, i = r.observer, a = r.elements, u = a.get(t) || []
      return a.has(t) || a.set(t, u), u.push(e), i.observe(t), function() {u.splice(u.indexOf(e), 1), 0 === u.length && (a.delete(t), i.unobserve(t)), 0 === a.size && (i.disconnect(), Pa.delete(o))}
    }

    function Ca (t) {return "function" != typeof t.children}

    var Ma = function(t) {
      var e, n

      function o (e) {
        var n
        return (n = t.call(this, e) || this).node = null, n._unobserveCb = null, n.handleNode = function(t) {
          n.node && (n.unobserve(), t || n.props.triggerOnce || n.props.skip || n.setState({
            inView: !!n.props.initialInView,
            entry: void 0
          })), n.node = t || null, n.observeNode()
        }, n.handleChange = function(t, e) {
          t && n.props.triggerOnce && n.unobserve(), Ca(n.props) || n.setState({
            inView: t,
            entry: e
          }), n.props.onChange && n.props.onChange(t, e)
        }, n.state = { inView: !!e.initialInView, entry: void 0 }, n
      }

      n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n
      var i = o.prototype
      return i.componentDidUpdate = function(t) {t.rootMargin === this.props.rootMargin && t.root === this.props.root && t.threshold === this.props.threshold && t.skip === this.props.skip && t.trackVisibility === this.props.trackVisibility && t.delay === this.props.delay || (this.unobserve(), this.observeNode())}, i.componentWillUnmount = function() {this.unobserve(), this.node = null}, i.observeNode = function() {
        if (this.node && !this.props.skip) {
          var t = this.props, e = t.threshold, n = t.root, r = t.rootMargin, o = t.trackVisibility, i = t.delay
          this._unobserveCb = Sa(this.node, this.handleChange, {
            threshold: e,
            root: n,
            rootMargin: r,
            trackVisibility: o,
            delay: i
          })
        }
      }, i.unobserve = function() {this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)}, i.render = function() {
        if (!Ca(this.props)) {
          var t = this.state, e = t.inView, n = t.entry
          return this.props.children({ inView: e, entry: n, ref: this.handleNode })
        }
        var o = this.props, i = o.children, a = o.as, u = o.tag, s = function(t, e) {
          if (null == t) return {}
          var n, r, o = {}, i = Object.keys(t)
          for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n])
          return o
        }(o, ["children", "as", "tag", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView"])
        return (0, r.createElement)(a || u || "div", Ea({ ref: this.handleNode }, s), i)
      }, o
    }(r.Component)
    Ma.displayName = "InView", Ma.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 }
    var La = function(t) {
      var e = t.content, n = e[0].node,
        o = e.slice(1, e.length).sort((function(t, e) {return t.node.frontmatter.position > e.node.frontmatter.position})),
        i = (0, r.useRef)(), a = (0, r.useRef)(), u = xa(i, .75), s = xa(a, .75),
        l = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
      return r.createElement("section", {
        id: "projects",
        className: "flex flex-col mt-16 md:mt-32"
      }, r.createElement("div", { className: "container flex flex-col" }, r.createElement(va.div, {
        ref: i,
        variants: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
        animate: u ? "visible" : "hidden",
        className: "flex mt-4 text-4xl text-gray-700 font-bold whitespace-no-wrap heading md:text-5xl dark:text-green-400 mb-4 md:mb-16"
      }, n.frontmatter.title), r.createElement("div", { className: "flex flex-col space-y-8 md:space-y-16 xl:space-y-32" }, o.map((function(t, e) {
        var n = t.node, o = n.body, i = n.frontmatter, a = (0, ga.d)(i.screenshot)
        return r.createElement(Ma, { key: e, threshold: .5, triggerOnce: !0 }, (function(t) {
          var n = t.inView, u = t.ref
          return r.createElement(va.div, {
            ref: u,
            className: "w-full flex flex-col justify-center md:space-x-16 bg-white shadow-lg md:shadow-none dark:bg-gray-800 md:dark:bg-transparent md:bg-transparent rounded-md " + (e % 2 != 0 ? "md:flex-row-reverse md:space-x-reverse" : "md:flex-row"),
            position: e + 1,
            variants: l,
            animate: n ? "visible" : "hidden"
          }, r.createElement("div", { className: "flex items-center justify-center md:w-1/2" }, r.createElement(ga.G, {
            className: "rounded-t-md md:rounded-lg",
            alt: i.title,
            image: a
          })), r.createElement("div", { className: "content flex flex-col md:w-1/2 p-4 md:p-0" }, r.createElement("div", { className: "flex-grow" }, r.createElement("p", { className: "uppercase tracking-widest text-sm text-gray-500 dark:text-gray-300" }, i.category), r.createElement("p", { className: "title text-3xl text-green-500 dark:text-green-400 tracking-wider font-bold mb-4" }, i.title, " ", i.emoji), r.createElement("div", { className: "text-xs md:text-base lg:text-base tracking-wide" }, r.createElement(c.MDXRenderer, null, o))), r.createElement("div", { className: "flex mt-4" }, r.createElement("div", { className: "-m-1 tags flex-wrap flex-grow flex items-center" }, i.tags.map((function(t, e) {
            return r.createElement("span", {
              className: "m-1 text-xs bg-gray-100 dark:bg-rich-black md:dark:bg-gray-800 px-3 py-1 rounded-sm rounded-full tracking-wider",
              key: i.id + "-" + e
            }, t)
          }))), r.createElement("div", { className: "links flex flex-row space-x-2 ml-1" }, i.external && r.createElement("a", {
            className: "text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-500",
            target: "_blank",
            rel: "noreferrer",
            href: i.external
          }, r.createElement(ma.Z, {
            className: "w-6 h-6 fill-current",
            name: "external"
          })), r.createElement("a", {
            className: "text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-500",
            target: "_blank",
            rel: "noreferrer",
            href: i.github
          }, r.createElement(ma.Z, { className: "w-6 h-6 fill-current", name: "github" }))))))
        }))
      })), r.createElement("div", { className: "flex justify-center" }, r.createElement(va.a, {
        ref: a,
        variants: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
        animate: s ? "visible" : "hidden",
        className: "w-64 h-16 rounded-xl border-2 border-green-400 dark:bg-gray-800 flex items-center justify-center transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-105",
        target: "_blank",
        rel: "noreferrer",
        href: n.frontmatter.buttonUrl
      }, r.createElement("p", { className: " font-bold text-xl text-green-500 dark:text-green-400 tracking-wide" }, n.frontmatter.buttonText))))))
    }, Va = function(t) {
      var e = t.data, n = e.index.edges[0].node.frontmatter.seoTitle
      return e.skills.edges[0].node.exports.skills = e.skills.edges[0].node.exports.skills, r.createElement(o.Z, { siteTitle: n }, r.createElement(i.Z, { title: n }), r.createElement(ya, { content: e.hero.edges }), r.createElement(ba, { content: e.about.edges }), r.createElement(wa, { content: e.skills.edges }), r.createElement(La, { content: e.projects.edges }))
    }
  },
  5666: function(t) {
    var e = function(t) {
      "use strict"
      var e, n = Object.prototype, r = n.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {},
        i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"

      function s (t, e, n) {
        return Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), t[e]
      }

      try {s({}, "")} catch (V) {s = function(t, e, n) {return t[e] = n}}

      function c (t, e, n, r) {
        var o = e && e.prototype instanceof h ? e : h, i = Object.create(o.prototype), a = new C(r || [])
        return i._invoke = function(t, e, n) {
          var r = f
          return function(o, i) {
            if (r === p) throw new Error("Generator is already running")
            if (r === v) {
              if ("throw" === o) throw i
              return L()
            }
            for (n.method = o, n.arg = i; ;) {
              var a = n.delegate
              if (a) {
                var u = T(a, n)
                if (u) {
                  if (u === m) continue
                  return u
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg else if ("throw" === n.method) {
                if (r === f) throw r = v, n.arg
                n.dispatchException(n.arg)
              } else "return" === n.method && n.abrupt("return", n.arg)
              r = p
              var s = l(t, e, n)
              if ("normal" === s.type) {
                if (r = n.done ? v : d, s.arg === m) continue
                return { value: s.arg, done: n.done }
              }
              "throw" === s.type && (r = v, n.method = "throw", n.arg = s.arg)
            }
          }
        }(t, n, a), i
      }

      function l (t, e, n) {
        try {return { type: "normal", arg: t.call(e, n) }} catch (V) {
          return {
            type: "throw",
            arg: V
          }
        }
      }

      t.wrap = c
      var f = "suspendedStart", d = "suspendedYield", p = "executing", v = "completed", m = {}

      function h () {}

      function y () {}

      function g () {}

      var x = {}
      x[i] = function() {return this}
      var b = Object.getPrototypeOf, w = b && b(b(M([])))
      w && w !== n && r.call(w, i) && (x = w)
      var E = g.prototype = h.prototype = Object.create(x)

      function P (t) {["next", "throw", "return"].forEach((function(e) {s(t, e, (function(t) {return this._invoke(e, t)}))}))}

      function A (t, e) {
        function n (o, i, a, u) {
          var s = l(t[o], t, i)
          if ("throw" !== s.type) {
            var c = s.arg, f = c.value
            return f && "object" == typeof f && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {n("next", t, a, u)}), (function(t) {n("throw", t, a, u)})) : e.resolve(f).then((function(t) {c.value = t, a(c)}), (function(t) {return n("throw", t, a, u)}))
          }
          u(s.arg)
        }

        var o
        this._invoke = function(t, r) {
          function i () {return new e((function(e, o) {n(t, r, e, o)}))}

          return o = o ? o.then(i, i) : i()
        }
      }

      function T (t, n) {
        var r = t.iterator[n.method]
        if (r === e) {
          if (n.delegate = null, "throw" === n.method) {
            if (t.iterator.return && (n.method = "return", n.arg = e, T(t, n), "throw" === n.method)) return m
            n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
          }
          return m
        }
        var o = l(r, t.iterator, n.arg)
        if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, m
        var i = o.arg
        return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, m) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, m)
      }

      function k (t) {
        var e = { tryLoc: t[0] }
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
      }

      function S (t) {
        var e = t.completion || {}
        e.type = "normal", delete e.arg, t.completion = e
      }

      function C (t) {this.tryEntries = [{ tryLoc: "root" }], t.forEach(k, this), this.reset(!0)}

      function M (t) {
        if (t) {
          var n = t[i]
          if (n) return n.call(t)
          if ("function" == typeof t.next) return t
          if (!isNaN(t.length)) {
            var o = -1, a = function n () {
              for (; ++o < t.length;) if (r.call(t, o)) return n.value = t[o], n.done = !1, n
              return n.value = e, n.done = !0, n
            }
            return a.next = a
          }
        }
        return { next: L }
      }

      function L () {return { value: e, done: !0 }}

      return y.prototype = E.constructor = g, g.constructor = y, y.displayName = s(g, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor
        return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
      }, t.mark = function(t) {return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, s(t, u, "GeneratorFunction")), t.prototype = Object.create(E), t}, t.awrap = function(t) {return { __await: t }}, P(A.prototype), A.prototype[a] = function() {return this}, t.AsyncIterator = A, t.async = function(e, n, r, o, i) {
        void 0 === i && (i = Promise)
        var a = new A(c(e, n, r, o), i)
        return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {return t.done ? t.value : a.next()}))
      }, P(E), s(E, u, "Generator"), E[i] = function() {return this}, E.toString = function() {return "[object Generator]"}, t.keys = function(t) {
        var e = []
        for (var n in t) e.push(n)
        return e.reverse(), function n () {
          for (; e.length;) {
            var r = e.pop()
            if (r in t) return n.value = r, n.done = !1, n
          }
          return n.done = !0, n
        }
      }, t.values = M, C.prototype = {
        constructor: C,
        reset: function(t) {if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(S), !t) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)},
        stop: function() {
          this.done = !0
          var t = this.tryEntries[0].completion
          if ("throw" === t.type) throw t.arg
          return this.rval
        },
        dispatchException: function(t) {
          if (this.done) throw t
          var n = this

          function o (r, o) {return u.type = "throw", u.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o}

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i], u = a.completion
            if ("root" === a.tryLoc) return o("end")
            if (a.tryLoc <= this.prev) {
              var s = r.call(a, "catchLoc"), c = r.call(a, "finallyLoc")
              if (s && c) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
              } else if (s) {if (this.prev < a.catchLoc) return o(a.catchLoc, !0)} else {
                if (!c) throw new Error("try statement without catch or finally")
                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
              }
            }
          }
        },
        abrupt: function(t, e) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n]
            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o
              break
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null)
          var a = i ? i.completion : {}
          return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, m) : this.complete(a)
        },
        complete: function(t, e) {
          if ("throw" === t.type) throw t.arg
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), m
        },
        finish: function(t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e]
            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), S(n), m
          }
        },
        catch: function(t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e]
            if (n.tryLoc === t) {
              var r = n.completion
              if ("throw" === r.type) {
                var o = r.arg
                S(n)
              }
              return o
            }
          }
          throw new Error("illegal catch attempt")
        },
        delegateYield: function(t, n, r) {
          return this.delegate = {
            iterator: M(t),
            resultName: n,
            nextLoc: r
          }, "next" === this.method && (this.arg = e), m
        }
      }, t
    }(t.exports)
    try {regeneratorRuntime = e} catch (n) {Function("r", "regeneratorRuntime = r")(e)}
  }
}])
//# sourceMappingURL=component---src-pages-index-js-bc4648d2309d2a9bc242.js.map
