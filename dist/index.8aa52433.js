/*
 * Nivo Lightbox v1.0
 * http://dev7studios.com/nivo-lightbox
 *
 * Copyright 2013, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */ (function(e1, t1, n1, r1) {
    function o1(t, n) {
        this.el = t;
        this.$el = e1(this.el);
        this.options = e1.extend({}, s1, n);
        this._defaults = s1;
        this._name = i1;
        this.init();
    }
    var i1 = "nivoLightbox", s1 = {
        effect: "fade",
        theme: "default",
        keyboardNav: true,
        onInit: function() {},
        beforeShowLightbox: function() {},
        afterShowLightbox: function(e) {},
        beforeHideLightbox: function() {},
        afterHideLightbox: function() {},
        onPrev: function(e) {},
        onNext: function(e) {},
        errorMessage: "The requested content cannot be loaded. Please try again later."
    };
    o1.prototype = {
        init: function() {
            var t = this;
            this.$el.on("click", function(e) {
                e.preventDefault();
                t.showLightbox();
            });
            if (this.options.keyboardNav) e1("body").off("keyup").on("keyup", function(n) {
                var r = n.keyCode ? n.keyCode : n.which;
                if (r == 27) t.destructLightbox();
                if (r == 37) e1(".nivo-lightbox-prev").trigger("click");
                if (r == 39) e1(".nivo-lightbox-next").trigger("click");
            });
            this.options.onInit.call(this);
        },
        showLightbox: function() {
            var t = this;
            this.options.beforeShowLightbox.call(this);
            var n2 = this.constructLightbox();
            if (!n2) return;
            var r = n2.find(".nivo-lightbox-content");
            if (!r) return;
            var i = this.$el;
            e1("body").addClass("nivo-lightbox-body-effect-" + this.options.effect);
            this.processContent(r, i);
            if (this.$el.attr("data-lightbox-gallery")) {
                var t = this, s = e1('[data-lightbox-gallery="' + this.$el.attr("data-lightbox-gallery") + '"]');
                e1(".nivo-lightbox-nav").show();
                e1(".nivo-lightbox-prev").off("click").on("click", function(n) {
                    n.preventDefault();
                    var o = s.index(i);
                    i = s.eq(o - 1);
                    if (!e1(i).length) i = s.last();
                    t.processContent(r, i);
                    t.options.onPrev.call(this, [
                        i
                    ]);
                });
                e1(".nivo-lightbox-next").off("click").on("click", function(n) {
                    n.preventDefault();
                    var o = s.index(i);
                    i = s.eq(o + 1);
                    if (!e1(i).length) i = s.first();
                    t.processContent(r, i);
                    t.options.onNext.call(this, [
                        i
                    ]);
                });
            }
            setTimeout(function() {
                n2.addClass("nivo-lightbox-open");
                t.options.afterShowLightbox.call(this, [
                    n2
                ]);
            }, 1);
        },
        processContent: function(n, r2) {
            var i2 = this;
            var s = r2.attr("href");
            n.html("").addClass("nivo-lightbox-loading");
            if (this.isHidpi() && r2.attr("data-lightbox-hidpi")) s = r2.attr("data-lightbox-hidpi");
            if (s.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                var o = e1("<img>", {
                    src: s
                });
                o.one("load", function() {
                    var r = e1('<div class="nivo-lightbox-image" />');
                    r.append(o);
                    n.html(r).removeClass("nivo-lightbox-loading");
                    r.css({
                        "line-height": e1(".nivo-lightbox-content").height() + "px",
                        height: e1(".nivo-lightbox-content").height() + "px"
                    });
                    e1(t1).resize(function() {
                        r.css({
                            "line-height": e1(".nivo-lightbox-content").height() + "px",
                            height: e1(".nivo-lightbox-content").height() + "px"
                        });
                    });
                }).each(function() {
                    if (this.complete) e1(this).load();
                });
                o.error(function() {
                    var t = e1('<div class="nivo-lightbox-error"><p>' + i2.options.errorMessage + "</p></div>");
                    n.html(t).removeClass("nivo-lightbox-loading");
                });
            } else if (video = s.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=(\w+)|(\w+))/)) {
                var u = "", a = "nivo-lightbox-video";
                if (video[1] == "youtube") {
                    u = "http://www.youtube.com/v/" + video[4];
                    a = "nivo-lightbox-youtube";
                }
                if (video[1] == "youtu") {
                    u = "http://www.youtube.com/v/" + video[3];
                    a = "nivo-lightbox-youtube";
                }
                if (video[1] == "vimeo") {
                    u = "http://player.vimeo.com/video/" + video[3];
                    a = "nivo-lightbox-vimeo";
                }
                if (u) {
                    var f = e1("<iframe>", {
                        src: u,
                        "class": a,
                        frameborder: 0,
                        vspace: 0,
                        hspace: 0,
                        scrolling: "auto"
                    });
                    n.html(f);
                    f.load(function() {
                        n.removeClass("nivo-lightbox-loading");
                    });
                }
            } else if (r2.attr("data-lightbox-type") == "ajax") {
                var i2 = this;
                e1.ajax({
                    url: s,
                    cache: false,
                    success: function(r) {
                        var i = e1('<div class="nivo-lightbox-ajax" />');
                        i.append(r);
                        n.html(i).removeClass("nivo-lightbox-loading");
                        if (i.outerHeight() < n.height()) i.css({
                            position: "relative",
                            top: "50%",
                            "margin-top": -(i.outerHeight() / 2) + "px"
                        });
                        e1(t1).resize(function() {
                            if (i.outerHeight() < n.height()) i.css({
                                position: "relative",
                                top: "50%",
                                "margin-top": -(i.outerHeight() / 2) + "px"
                            });
                        });
                    },
                    error: function() {
                        var t = e1('<div class="nivo-lightbox-error"><p>' + i2.options.errorMessage + "</p></div>");
                        n.html(t).removeClass("nivo-lightbox-loading");
                    }
                });
            } else if (s.substring(0, 1) == "#") {
                if (e1(s).length) {
                    var l = e1('<div class="nivo-lightbox-inline" />');
                    l.append(e1(s).clone().show());
                    n.html(l).removeClass("nivo-lightbox-loading");
                    if (l.outerHeight() < n.height()) l.css({
                        position: "relative",
                        top: "50%",
                        "margin-top": -(l.outerHeight() / 2) + "px"
                    });
                    e1(t1).resize(function() {
                        if (l.outerHeight() < n.height()) l.css({
                            position: "relative",
                            top: "50%",
                            "margin-top": -(l.outerHeight() / 2) + "px"
                        });
                    });
                } else {
                    var l = e1('<div class="nivo-lightbox-error"><p>' + i2.options.errorMessage + "</p></div>");
                    n.html(l).removeClass("nivo-lightbox-loading");
                }
            } else {
                var f = e1("<iframe>", {
                    src: s,
                    "class": "nivo-lightbox-item",
                    frameborder: 0,
                    vspace: 0,
                    hspace: 0,
                    scrolling: "auto"
                });
                n.html(f);
                f.load(function() {
                    n.removeClass("nivo-lightbox-loading");
                });
            }
            if (r2.attr("title")) {
                var c = e1("<span>", {
                    "class": "nivo-lightbox-title"
                });
                c.text(r2.attr("title"));
                e1(".nivo-lightbox-title-wrap").html(c);
            } else e1(".nivo-lightbox-title-wrap").html("");
        },
        constructLightbox: function() {
            if (e1(".nivo-lightbox-overlay").length) return e1(".nivo-lightbox-overlay");
            var t2 = e1("<div>", {
                "class": "nivo-lightbox-overlay nivo-lightbox-theme-" + this.options.theme + " nivo-lightbox-effect-" + this.options.effect
            });
            var n = e1("<div>", {
                "class": "nivo-lightbox-wrap"
            });
            var r = e1("<div>", {
                "class": "nivo-lightbox-content"
            });
            var i = e1('<a href="#" class="nivo-lightbox-nav nivo-lightbox-prev">Previous</a><a href="#" class="nivo-lightbox-nav nivo-lightbox-next">Next</a>');
            var s = e1('<a href="#" class="nivo-lightbox-close" title="Close">Close</a>');
            var o = e1("<div>", {
                "class": "nivo-lightbox-title-wrap"
            });
            var u = 0;
            if (u) t2.addClass("nivo-lightbox-ie");
            n.append(r);
            n.append(o);
            t2.append(n);
            t2.append(i);
            t2.append(s);
            e1("body").append(t2);
            var a = this;
            t2.on("click", function(t) {
                if (t.target === this || e1(t.target).hasClass("nivo-lightbox-content") || e1(t.target).hasClass("nivo-lightbox-image")) a.destructLightbox();
            });
            s.on("click", function(e) {
                e.preventDefault();
                a.destructLightbox();
            });
            return t2;
        },
        destructLightbox: function() {
            var t = this;
            this.options.beforeHideLightbox.call(this);
            e1(".nivo-lightbox-overlay").removeClass("nivo-lightbox-open");
            e1(".nivo-lightbox-nav").hide();
            e1("body").removeClass("nivo-lightbox-body-effect-" + t.options.effect);
            var n = 0;
            if (n) {
                e1(".nivo-lightbox-overlay iframe").attr("src", " ");
                e1(".nivo-lightbox-overlay iframe").remove();
            }
            e1(".nivo-lightbox-prev").off("click");
            e1(".nivo-lightbox-next").off("click");
            this.options.afterHideLightbox.call(this);
        },
        isHidpi: function() {
            var e = "(-webkit-min-device-pixel-ratio: 1.5),							  (min--moz-device-pixel-ratio: 1.5),							  (-o-min-device-pixel-ratio: 3/2),							  (min-resolution: 1.5dppx)";
            if (t1.devicePixelRatio > 1) return true;
            if (t1.matchMedia && t1.matchMedia(e).matches) return true;
            return false;
        }
    };
    e1.fn[i1] = function(t) {
        return this.each(function() {
            if (!e1.data(this, i1)) e1.data(this, i1, new o1(this, t));
        });
    };
})(jQuery, window, document);

//# sourceMappingURL=index.8aa52433.js.map
