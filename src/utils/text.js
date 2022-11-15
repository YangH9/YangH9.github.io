window.requestAnimationFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      setTimeout(callback, 1000 / 60);
    }
})();
(function (window, document, undefined) {
  var texts = [];
  window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        setTimeout(callback, 1000 / 60);
      }
  })();
  init();
  function init() {
    css(".text{position:fixed;pointer-events:none;user-select:none;z-index:99999;white-space:nowrap;}");
    attachEvent();
    gameloop();
  }
  function gameloop() {
    for (var i = 0; i < texts.length; i++) {
      if (texts[i].alpha <= 0) {
        document.body.removeChild(texts[i].el);
        texts.splice(i, 1);
        continue;
      }
      texts[i].y--;
      texts[i].scale += 0.004;
      texts[i].alpha -= 0.013;
      texts[i].el.style.cssText = `left:${texts[i].x}px;top:${texts[i].y}px;opacity:${texts[i].alpha};transform:translateX(-50%) scale(${texts[i].scale},${texts[i].scale});color:${texts[i].color}`;
    }
    requestAnimationFrame(gameloop);
  }
  function attachEvent() {
    var old = typeof window.onclick === "function" && window.onclick;
    window.onclick = function (event) {
      old && old();
      createtext(event);
    }
  }
  function createtext(event) {
    var d = document.createElement("div");
    d.className = "text";
    texts.push({
      el: d,
      x: event.clientX,
      y: event.clientY - 5,
      scale: 1,
      alpha: 1,
      color: randomColor()
    });
    d.innerHTML = randomtext();
    document.body.appendChild(d);
  }
  function css(css) {
    var style = document.createElement("style");
    style.type = "text/css";
    try {
      style.appendChild(document.createTextNode(css));
    } catch (ex) {
      style.styleSheet.cssText = css;
    }
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  function randomColor() {
    return `rgb(${~~(Math.random() * 255)},${~~(Math.random() * 255)},${~~(Math.random() * 255)})`;
  }
  function randomtext() {
    var arraytexts = {
      arraySQL: ["alter", "and", "as", "asc", "between", "bigint", "bit", "both", "by", "call", "cascade", "case", "change", "char", "character", "check", "column", "connection", "constraint", "continue", "convert", "create", "cross", "current_date", "current_time", "current_timestamp", "current_user", "cursor", "database", "databases", "date", "dec", "decimal", "declare", "default", "delete", "desc", "describe", "distinct", "double", "drop", "enum", "exists", "exit", "false", "fetch", "float", "for", "foreign", "from", "grant", "group", "having", "in", "index", "infile", "inner", "inout", "insert", "int", "integer", "interval", "into", "is", "join", "left", "like", "limit", "load", "lock", "long", "loop", "null", "numeric", "on", "option", "or", "order", "outer", "primary", "procedure", "references", "rename", "repeat", "replace", "require", "restrict", "return", "revoke", "right", "schema", "select", "set", "show", "smallint", "table", "text", "time", "timestamp", "tinyint", "trigger", "true", "union", "unique", "unsigned", "update", "use", "values", "varchar", "when", "where", "while", "write", "zerofill"],
      arrayHTML: ["&lt;!-- … --&gt;", "&lt;!DOCTYPE&gt;", "&lt;a&gt;", "&lt;abbr&gt;", "<del>&lt;acronym&gt;</del>", "&lt;address&gt;", "<del>&lt;applet&gt;</del>", "&lt;area&gt;", "&lt;article&gt;", "&lt;aside&gt;", "&lt;audio&gt;", "&lt;b&gt;", "&lt;base&gt;", "<del>&lt;basefont&gt;</del>", "&lt;bdi&gt;", "&lt;bdo&gt;", "<del>&lt;big&gt;</del>", "&lt;blockquote&gt;", "&lt;body&gt;", "&lt;br&gt;", "&lt;button&gt;", "&lt;canvas&gt;", "&lt;caption&gt;", "<del>&lt;center&gt;</del>", "&lt;cite&gt;", "&lt;code&gt;", "&lt;col&gt;", "&lt;colgroup&gt;", "&lt;command&gt;", "&lt;data&gt;", "&lt;datalist&gt;", "&lt;dd&gt;", "&lt;del&gt;", "&lt;details&gt;", "&lt;dfn&gt;", "&lt;dialog&gt;", "<del>&lt;dir&gt;</del>", "&lt;div&gt;", "&lt;dl&gt;", "&lt;dt&gt;", "&lt;em&gt;", "&lt;embed&gt;", "&lt;fieldset&gt;", "&lt;figcaption&gt;", "&lt;figure&gt;", "<del>&lt;font&gt;</del>", "&lt;footer&gt;", "&lt;form&gt;", "<del>&lt;frame&gt;</del>", "<del>&lt;frameset&gt;</del>", "&lt;h1&gt; - &lt;h6&gt;", "&lt;head&gt;", "&lt;header&gt;", "&lt;hr&gt;", "&lt;html&gt;", "&lt;i&gt;", "&lt;iframe&gt;", "&lt;img&gt;", "&lt;input&gt;", "&lt;ins&gt;", "&lt;kbd&gt;", "&lt;keygen&gt;", "&lt;label&gt;", "&lt;legend&gt;", "&lt;li&gt;", "&lt;link&gt;", "&lt;main&gt;", "&lt;map&gt;", "&lt;mark&gt;", "&lt;menu&gt;", "&lt;menuitem&gt;", "&lt;meta&gt;", "&lt;meter&gt;", "&lt;nav&gt;", "<del>&lt;noframes&gt;</del>", "&lt;noscript&gt;", "&lt;object&gt;", "&lt;ol&gt;", "&lt;optgroup&gt;", "&lt;option&gt;", "&lt;output&gt;", "&lt;p&gt;", "&lt;param&gt;", "&lt;picture&gt;", "&lt;pre&gt;", "&lt;progress&gt;", "&lt;q&gt;", "&lt;rp&gt;", "&lt;rt&gt;", "&lt;ruby&gt;", "&lt;s&gt;", "&lt;samp&gt;", "&lt;script&gt;", "&lt;section&gt;", "&lt;select&gt;", "&lt;small&gt;", "&lt;source&gt;", "&lt;span&gt;", "<del>&lt;strike&gt;</del>", "&lt;strong&gt;", "&lt;style&gt;", "&lt;sub&gt;", "&lt;summary&gt;", "&lt;sup&gt;", "&lt;svg&gt;", "&lt;table&gt;", "&lt;tbody&gt;", "&lt;td&gt;", "&lt;template&gt;", "&lt;textarea&gt;", "&lt;tfoot&gt;", "&lt;th&gt;", "&lt;thead&gt;", "&lt;time&gt;", "&lt;title&gt;", "&lt;tr&gt;", "&lt;track&gt;", "<del>&lt;tt&gt;</del>", "&lt;u&gt;", "&lt;ul&gt;", "&lt;var&gt;", "&lt;video&gt;", "&lt;wbr&gt;"],
      arrayCSS: ["/* … */", "@keyframes", "animation", "animation-name", "animation-duration", "animation-timing-function", "animation-delay", "animation-iteration-count", "animation-direction", "animation-play-state", "background", "background-attachment", "background-color", "background-image", "background-position", "background-repeat", "background-clip", "background-origin", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-style", "border-bottom-width", "border-color", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-style", "border-top", "border-top-color", "border-top-style", "border-top-width", "border-width", "outline", "outline-color", "outline-style", "outline-width", "border-bottom-left-radius", "border-bottom-right-radius", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-radius", "border-top-left-radius", "border-top-right-radius", "box-decoration-break", "box-shadow", "overflow-x", "overflow-y", "overflow-style", "rotation", "rotation-point", "color-profile", "opacity", "rendering-intent", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "bookmark-label", "bookmark-level", "bookmark-target", "float-offset", "hyphenate-after", "hyphenate-before", "hyphenate-character", "hyphenate-lines", "hyphenate-resource", "hyphens", "image-resolution", "marks", "string-set", "height", "max-height", "max-width", "min-height", "min-width", "width", "flex", "flex-grow", "flex-shrink", "flex-basis", "flex-flow", "flex-direction", "flex-wrap", "align-content", "align-items", "align-self", "justify-content", "order", "box-align", "box-direction", "box-flex", "box-flex-group", "box-lines", "box-ordinal-group", "box-orient", "box-pack", "font", "font-family", "font-size", "font-style", "font-variant", "font-weight", "@font-face", "font-size-adjust", "font-stretch", "content", "counter-increment", "counter-reset", "quotes", "crop", "move-to", "page-policy", "grid-columns", "grid-rows", "target", "target-name", "target-new", "target-position", "alignment-adjust", "alignment-baseline", "baseline-shift", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "inline-box-align", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "text-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marquee-direction", "marquee-play-count", "marquee-speed", "marquee-style", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "fit", "fit-position", "image-orientation", "page", "size", "bottom", "clear", "clip", "cursor", "display", "float", "left", "overflow", "position", "right", "top", "visibility", "z-index", "orphans", "page-break-after", "page-break-before", "page-break-inside", "widows", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "mark", "mark-after", "mark-before", "phonemes", "rest", "rest-after", "rest-before", "voice-balance", "voice-duration", "voice-pitch", "voice-pitch-range", "voice-rate", "voice-stress", "voice-volume", "border-collapse", "border-spacing", "caption-side", "empty-cells", "table-layout", "color", "direction", "letter-spacing", "line-height", "text-align", "text-decoration", "text-indent", "text-transform", "unicode-bidi", "vertical-align", "white-space", "word-spacing", "text-emphasis", "hanging-punctuation", "punctuation-trim", "text-align-last", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-wrap", "word-break", "word-wrap", "transform", "transform-origin", "transform-style", "perspective", "perspective-origin", "backface-visibility", "transition", "transition-property", "transition-duration", "transition-timing-function", "transition-delay", "appearance", "box-sizing", "icon", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "outline-offset", "resize", ":active", "::after", "::before", ":checked", ":default", ":disabled", ":empty", ":enabled", ":first-child", "::first-letter", "::first-line", ":first-of-type", ":focus", ":fullscreen", ":hover", ":in-range", ":indeterminate", ":invalid", ":lang(language)", ":last-child", ":last-of-type", ":link", ":not(selector)", ":nth-child(n)", ":nth-last-child(n)", ":nth-of-type(n)", ":nth-last-of-type(n)", ":only-of-type", ":only-child", ":optional", ":out-of-range", "::placeholder", ":read-only", ":read-write", ":required", ":root", "::selection", ":target", ":valid", ":visited", "attr()", "calc()", "cubic-bezier()", "hsl()", "hsla()", "linear-gradient()", "radial-gradient()", "repeating-linear-gradient()", "repeating-radial-gradient()", "rgb()", "rgba()", "var()"],
      arrayJS: ["abstract", "arguments", "await", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "debugger", "default", "delete", "do", "double", "else", "enum", "eval", "export", "extends", "false", "final", "finally", "float", "for", "function", "goto", "if", "implements", "import*", "in", "instanceof", "int", "interface", "let", "long", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield", "Array", "Boolean", "Date", "Math", "Number", "String", "RegExp", "Window", "Navigator", "Screen", "History", "Location", "Document", "Element", "Attributes", "Events", "constructor", "length", "prototype", "concat()", "copyWithin()", "entries()", "every()", "fill()", "filter()", "find()", "findIndex()", "forEach()", "from()", "includes()", "indexOf()", "isArray()", "join()", "keys()", "lastIndexOf()", "map()", "pop()", "push()", "reduce()", "reduceRight()", "reverse()", "shift()", "slice()", "some()", "sort()", "splice()", "toString()", "unshift()", "getDate()", "getDay()", "getFullYear()", "getHours()", "getMilliseconds()", "getMinutes()", "getMonth()", "getSeconds()", "getTime()", "getTimezoneOffset()", "getUTCDate()", "getUTCDay()", "getUTCFullYear()", "getUTCHours()", "getUTCMilliseconds()", "getUTCMinutes()", "getUTCMonth()", "getUTCSeconds()", "<del>getYear()</del>", "parse()", "setDate()", "setFullYear()", "setHours()", "setMilliseconds()", "setMinutes()", "setMonth()", "setSeconds()", "setTime()", "setUTCDate()", "setUTCFullYear()", "setUTCHours()", "setUTCMilliseconds()", "setUTCMinutes()", "setUTCMonth()", "setUTCSeconds()", "<del>setYear()</del>", "toDateString()", "<del>toGMTString()</del>", "toISOString()", "toJSON()", "toLocaleDateString()", "toLocaleTimeString()", "toLocaleString()", "toTimeString()", "toUTCString()", "UTC()", "valueOf()", "E", "LN2", "LN10", "LOG2E", "LOG10E", "PI", "SQRT1_2", "SQRT2", "abs(x)", "acos(x)", "asin(x)", "atan(x)", "atan2(y,x)", "ceil(x)", "cos(x)", "exp(x)", "floor(x)", "log(x)", "max(x,y,z,...,n)", "min(x,y,z,...,n)", "pow(x,y)", "random()", "round(x)", "sin(x)", "sqrt(x)", "tan(x)", "MAX_VALUE", "MIN_VALUE", "NEGATIVE_INFINITY", "POSITIVE_INFINITY", "toExponential(x)", "toFixed(x)", "toPrecision(x)", "charAt()", "charCodeAt()", "fromCharCode()", "match()", "repeat()", "replace()", "search()", "split()", "startsWith()", "substr()", "substring()", "toLowerCase()", "toUpperCase()", "trim()", "toLocaleLowerCase()", "toLocaleUpperCase()", "anchor()", "big()", "blink()", "bold()", "fixed()", "fontcolor()", "fontsize()", "italics()", "link()", "small()", "strike()", "sub()", "sup()", "<del>compile</del>", "exec", "test", "global", "ignoreCase", "lastIndex", "multiline", "source", "Infinity", "NaN", "undefined", "decodeURI()", "decodeURIComponent()", "encodeURI()", "encodeURIComponent()", "escape()", "eval()", "isFinite()", "isNaN()", "Number()", "parseFloat()", "parseInt()", "String()", "unescape()"],
      arrayTEXT: ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"],
    };
    var arraytext = [...Object.keys(arraytexts)];
    arraytext = arraytext[~~(Math.random() * arraytext.length)];
    var text = arraytexts[arraytext];
    return text[~~(Math.random() * text.length)];
  }
})(window, document);