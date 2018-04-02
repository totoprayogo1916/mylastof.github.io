// original from https://www.techehow.com/, http://dl.dropbox.com/u/48979322/TecheHow/Related.js


var relatedTitles = [],
    relatedTitlesNum = 0,
    relatedUrls = [],
    thumburl = [];

function related_results_labels_thumbs(e) {
    for (var f = 0; f < e.feed.entry.length; f++) {
        var g = e.feed.entry[f];
        relatedTitles[relatedTitlesNum] = g.title.$t;
        try {
            thumburl[relatedTitlesNum] = g.media$thumbnail.url
        } catch (h) {
            s = g.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), thumburl[relatedTitlesNum] = -1 != a && -1 != b && -1 != c && "" != d ? d : "https://web.archive.org/web/20130407151606/http://lh5.googleusercontent.com/-MQTJZelsKzw/T9z0pr9Wy8I/AAAAAAAAAuo/bpgm-DkG0kU/s72/noimage.png"
        }
        65 < relatedTitles[relatedTitlesNum].length && (relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum].substring(0, 65) + "...");
        for (var i = 0; i < g.link.length; i++) "alternate" == g.link[i].rel && (relatedUrls[relatedTitlesNum] = g.link[i].href, relatedTitlesNum++)
    }
}

function removeRelatedDuplicates_thumbs() {
    for (var e = [], f = [], g = [], h = 0; h < relatedUrls.length; h++) contains_thumbs(e, relatedUrls[h]) || (e.length += 1, e[e.length - 1] = relatedUrls[h], f.length += 1, g.length += 1, f[f.length - 1] = relatedTitles[h], g[g.length - 1] = thumburl[h]);
    relatedTitles = f;
    relatedUrls = e;
    thumburl = g
}

function contains_thumbs(e, f) {
    for (var g = 0; g < e.length; g++)
        if (e[g] == f) return !0;
    return !1
}

function printRelatedLabels_thumbs() {
    for (var e = 0; e < relatedUrls.length; e++)
        if (relatedUrls[e] == currentposturl || !relatedTitles[e]) relatedUrls.splice(e, 1), relatedTitles.splice(e, 1), thumburl.splice(e, 1);
    var f = Math.floor((relatedTitles.length - 1) * Math.random()),
        e = 0;
    0 < relatedTitles.length && document.write("");
    for (document.write('<div style="clear: both;"/>'); e < relatedTitles.length && 20 > e && e < maxresults;) document.write('<a style="padding:5px;float:left;'), 0 != e ? document.write('"') : document.write('"'), document.write(' href="' + relatedUrls[f] + '"><div style="width:600px;padding-left:3px;height:36px;margin-top:-10px; padding:0;"><img style="width:32px;height:32px;" src="' + thumburl[f] + '"/><div style="margin-top:-34px;margin-left:40px;">' + relatedTitles[f] + "</div></div></a>"), f < relatedTitles.length - 1 ? f++ : f = 0, e++;
    document.write("</div>")
};