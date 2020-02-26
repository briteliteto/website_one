function(e, l) {
  var a = n(this),
    r = a.data("bgquote");
  if (r.needToBind && (r.needToBind = !1, r.lastElement = a.find(".bgLast"), r.changeElement = a.find(".bgChange"), r.percentChangeElement = a.find(".bgPercentChange"), r.timeElement = a.find(".bgTimestamp"), r.volumeElement = a.find(".bgVolume"), r.bidElement = a.find(".bgBid"), r.askElement = a.find(".bgAsk")), l && l.b) {
    if (r.filterMoment > 0 && r.filterType.length > 0)
      if ((new Date).getTime() > r.filterMoment) r.filterMoment = 0, r.filterType = "";
      else if (l.b.y == r.filterType) return;
    var o = n.extend({}, i),
      m = a.data("bgformat");
    if (m && n.extend(o, m), r.lastElement.length > 0 && l.b.l) {
      var s = l.b.l >= o.largeLastMinimum ? o.largeLast : o.last;
      r.lastElement.text(t(l.b.l).format(s))
    }
    r.bidElement.length > 0 && l.b.b && r.bidElement.text(t(l.b.b).format("0,000")), r.askElement.length > 0 && l.b.a && r.askElement.text(t(l.b.a).format("0,000"));
    l.b.c > 0 ? "+" : "";
    if (r.changeElement.length > 0 && l.b.c && r.changeElement.text(t(l.b.c).format("+" + o.change)), r.percentChangeElement.length > 0 && l.b.c && l.b.l) {
      var b = (l.b.l - (l.b.l - l.b.c)) / (l.b.l - l.b.c);
      r.percentChangeElement.text(t(b).format("+" + o.change + "%"))
    }
    if (r.timeElement.length > 0 && l.b.z) {
      var c = BlueGrass.Utility.convertToExchangeTime(l.b.z, l.b.e),
        f = c.toString();
      r.timeElement.text(o.dots ? f.replace(/(a|A|p|P)(M|m)/, "$1.$2.") : f)
    }
    if (r.volumeElement.length > 0 && l.b.v && r.volumeElement.text(l.b.v), l.b.l) {
      var u = "";
      r.lastPrice > l.b.l ? u = "tickDown" : r.lastPrice < l.b.l && (u = "tickUp"), r.lastPrice = l.b.l, u.length > 0 && (a.addClass(u), setTimeout(function() {
        a.removeClass(u)
      }, 500))
    }
    if (l.b.c) {
      var g = "neutral";
      if (l.b.c < 0 ? g = "down" : l.b.c > 0 && (g = "up"), g != r.lastDirection) {
        a.removeClass("up").removeClass("down").removeClass("neutral"), a.addClass(g);
        var d = a.children(".tip-data").children(".price-chart").children(".price");
        d.length > 0 && (d.removeClass("up down neutral"), d.addClass(g)), r.lastDirection = g
      }
    }
    "aftermarket" === l.b.y && "" === r.filterType && 0 === r.filterMoment && "normal" === r.lastType ? (r.filterMoment = (new Date).getTime() + 18e5, r.filterType = "normal") : "normal" === l.b.y && "" === r.filterType && 0 === r.filterMoment && "premarket" === r.lastType && (r.filterMoment = (new Date).getTime() + 18e5, r.filterType = "premarket"), l.b.y && (r.lastType = l.b.y)
  }
}