/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */ if ("undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery");
(function(a1) {
    function b1() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for(var c in b)if (void 0 !== a.style[c]) return {
            end: b[c]
        };
        return !1;
    }
    a1.fn.emulateTransitionEnd = function(b) {
        var c = !1, d = this;
        a1(this).one(a1.support.transition.end, function() {
            c = !0;
        });
        var e = function() {
            c || a1(d).trigger(a1.support.transition.end);
        };
        return setTimeout(e, b), this;
    }, a1(function() {
        a1.support.transition = b1();
    });
})(jQuery), function(a) {
    "use strict";
    var b2 = '[data-dismiss="alert"]', c1 = function(c) {
        a(c).on("click", b2, this.close);
    };
    c1.prototype.close = function(b) {
        function c() {
            f.trigger("closed.bs.alert").remove();
        }
        var d = a(this), e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c());
    };
    var d1 = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c1(this)), "string" == typeof b && e[b].call(d);
        });
    }, a.fn.alert.Constructor = c1, a.fn.alert.noConflict = function() {
        return a.fn.alert = d1, this;
    }, a(document).on("click.bs.alert.data-api", b2, c1.prototype.close);
}(jQuery), function(a2) {
    "use strict";
    var b3 = function(c, d) {
        this.$element = a2(c), this.options = a2.extend({}, b3.DEFAULTS, d), this.isLoading = !1;
    };
    b3.DEFAULTS = {
        loadingText: "loading..."
    }, b3.prototype.setState = function(b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", f.resetText || d.data("resetText", d[e]()), d[e](f[b] || this.options[b]), setTimeout(a2.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
        }, this), 0);
    }, b3.prototype.toggle = function() {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
        }
        a && this.$element.toggleClass("active");
    };
    var c2 = a2.fn.button;
    a2.fn.button = function(c) {
        return this.each(function() {
            var d = a2(this), e = d.data("bs.button"), f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b3(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c);
        });
    }, a2.fn.button.Constructor = b3, a2.fn.button.noConflict = function() {
        return a2.fn.button = c2, this;
    }, a2(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
        var c = a2(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault();
    });
}(jQuery), function(a) {
    "use strict";
    var b4 = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this));
    };
    b4.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, b4.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
    }, b4.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active);
    }, b4.prototype.to = function(b) {
        var c = this, d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(b);
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]));
    }, b4.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, b4.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next");
    }, b4.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev");
    }, b4.prototype.slide = function(b5, c) {
        var d = this.$element.find(".item.active"), e = c || d[b5](), f = this.interval, g = "next" == b5 ? "left" : "right", h = "next" == b5 ? "first" : "last", i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]();
        }
        if (e.hasClass("active")) return this.sliding = !1;
        var j = a.Event("slide.bs.carousel", {
            relatedTarget: e[0],
            direction: g
        });
        return this.$element.trigger(j), j.isDefaultPrevented() ? void 0 : (this.sliding = !0, f && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
            var b = a(i.$indicators.children()[i.getActiveIndex()]);
            b && b.addClass("active");
        })), a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b5), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() {
            e.removeClass([
                b5,
                g
            ].join(" ")).addClass("active"), d.removeClass([
                "active",
                g
            ].join(" ")), i.sliding = !1, setTimeout(function() {
                i.$element.trigger("slid.bs.carousel");
            }, 0);
        }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), f && this.cycle(), this);
    };
    var c3 = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, b4.DEFAULTS, d.data(), "object" == typeof c && c), g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b4(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle();
        });
    }, a.fn.carousel.Constructor = b4, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c3, this;
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
        var c, d = a(this), e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")), f = a.extend({}, e.data(), d.data()), g = d.attr("data-slide-to");
        g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault();
    }), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var b = a(this);
            b.carousel(b.data());
        });
    });
}(jQuery), function(a3) {
    "use strict";
    var b6 = function(c, d) {
        this.$element = a3(c), this.options = a3.extend({}, b6.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a3(this.options.parent)), this.options.toggle && this.toggle();
    };
    b6.DEFAULTS = {
        toggle: !0
    }, b6.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
    }, b6.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a3.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning) return;
                    c.collapse("hide"), d || c.data("bs.collapse", null);
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
                var f = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
                };
                if (!a3.support.transition) return f.call(this);
                var g = a3.camelCase([
                    "scroll",
                    e
                ].join("-"));
                this.$element.one(a3.support.transition.end, a3.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g]);
            }
        }
    }, b6.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a3.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
                };
                return a3.support.transition ? void this.$element[c](0).one(a3.support.transition.end, a3.proxy(d, this)).emulateTransitionEnd(350) : d.call(this);
            }
        }
    }, b6.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    var c4 = a3.fn.collapse;
    a3.fn.collapse = function(c) {
        return this.each(function() {
            var d = a3(this), e = d.data("bs.collapse"), f = a3.extend({}, b6.DEFAULTS, d.data(), "object" == typeof c && c);
            !e && f.toggle && "show" == c && (c = !c), e || d.data("bs.collapse", e = new b6(this, f)), "string" == typeof c && e[c]();
        });
    }, a3.fn.collapse.Constructor = b6, a3.fn.collapse.noConflict = function() {
        return a3.fn.collapse = c4, this;
    }, a3(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
        var c, d = a3(this), e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""), f = a3(e), g = f.data("bs.collapse"), h = g ? "toggle" : d.data(), i = d.attr("data-parent"), j = i && a3(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h);
    });
}(jQuery), function(a4) {
    "use strict";
    function b7(b) {
        a4(d2).remove(), a4(e1).each(function() {
            var d = c5(a4(this)), e = {
                relatedTarget: this
            };
            d.hasClass("open") && (d.trigger(b = a4.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e));
        });
    }
    function c5(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a4(c);
        return d && d.length ? d : b.parent();
    }
    var d2 = ".dropdown-backdrop", e1 = "[data-toggle=dropdown]", f1 = function(b) {
        a4(b).on("click.bs.dropdown", this.toggle);
    };
    f1.prototype.toggle = function(d) {
        var e = a4(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c5(e), g = f.hasClass("open");
            if (b7(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a4('<div class="dropdown-backdrop"/>').insertAfter(a4(this)).on("click", b7);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a4.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                f.toggleClass("open").trigger("shown.bs.dropdown", h), e.focus();
            }
            return !1;
        }
    }, f1.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a4(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var f = c5(d), g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e1).focus(), d.click();
                var h = " li:not(.divider):visible a", i = f.find("[role=menu]" + h + ", [role=listbox]" + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).focus();
                }
            }
        }
    };
    var g1 = a4.fn.dropdown;
    a4.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a4(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new f1(this)), "string" == typeof b && d[b].call(c);
        });
    }, a4.fn.dropdown.Constructor = f1, a4.fn.dropdown.noConflict = function() {
        return a4.fn.dropdown = g1, this;
    }, a4(document).on("click.bs.dropdown.data-api", b7).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation();
    }).on("click.bs.dropdown.data-api", e1, f1.prototype.toggle).on("keydown.bs.dropdown.data-api", e1 + ", [role=menu], [role=listbox]", f1.prototype.keydown);
}(jQuery), function(a5) {
    "use strict";
    var b8 = function(b, c) {
        this.options = c, this.$element = a5(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a5.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };
    b8.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, b8.prototype.toggle = function(a) {
        return this[this.isShown ? "hide" : "show"](a);
    }, b8.prototype.show = function(b) {
        var c = this, d3 = a5.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(d3), this.isShown || d3.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a5.proxy(this.hide, this)), this.backdrop(function() {
            var d = a5.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a5.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a5.support.transition.end, function() {
                c.$element.focus().trigger(e);
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e);
        }));
    }, b8.prototype.hide = function(b) {
        b && b.preventDefault(), b = a5.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a5(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a5.support.transition && this.$element.hasClass("fade") ? this.$element.one(a5.support.transition.end, a5.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
    }, b8.prototype.enforceFocus = function() {
        a5(document).off("focusin.bs.modal").on("focusin.bs.modal", a5.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus();
        }, this));
    }, b8.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a5.proxy(function(a) {
            27 == a.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
    }, b8.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.removeBackdrop(), a.$element.trigger("hidden.bs.modal");
        });
    }, b8.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, b8.prototype.backdrop = function(b) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a5.support.transition && c;
            if (this.$backdrop = a5('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", a5.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
            }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            d ? this.$backdrop.one(a5.support.transition.end, b).emulateTransitionEnd(150) : b();
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a5.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a5.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b();
    };
    var c6 = a5.fn.modal;
    a5.fn.modal = function(c, d) {
        return this.each(function() {
            var e = a5(this), f = e.data("bs.modal"), g = a5.extend({}, b8.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b8(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d);
        });
    }, a5.fn.modal.Constructor = b8, a5.fn.modal.noConflict = function() {
        return a5.fn.modal = c6, this;
    }, a5(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a5(this), d = c.attr("href"), e = a5(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")), f = e.data("bs.modal") ? "toggle" : a5.extend({
            remote: !/#/.test(d) && d
        }, e.data(), c.data());
        c.is("a") && b.preventDefault(), e.modal(f, this).one("hide", function() {
            c.is(":visible") && c.focus();
        });
    }), a5(document).on("show.bs.modal", ".modal", function() {
        a5(document.body).addClass("modal-open");
    }).on("hidden.bs.modal", ".modal", function() {
        a5(document.body).removeClass("modal-open");
    });
}(jQuery), function(a6) {
    "use strict";
    var b9 = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b);
    };
    b9.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, b9.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a6(c), this.options = this.getOptions(d);
        for(var e = this.options.trigger.split(" "), f = e.length; f--;){
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a6.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a6.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a6.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = a6.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    }, b9.prototype.getDefaults = function() {
        return b9.DEFAULTS;
    }, b9.prototype.getOptions = function(b) {
        return b = a6.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b;
    }, b9.prototype.getDelegateOptions = function() {
        var b = {}, c = this.getDefaults();
        return this._options && a6.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d);
        }), b;
    }, b9.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a6(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show();
        }, c.options.delay.show)) : c.show();
    }, b9.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a6(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide();
        }, c.options.delay.hide)) : c.hide();
    }, b9.prototype.show = function() {
        var b = a6.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            var c = this, d = this.tip();
            this.setContent(), this.options.animation && d.addClass("fade");
            var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement, f = /\s?auto?\s?/i, g = f.test(e);
            g && (e = e.replace(f, "") || "top"), d.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
            var h = this.getPosition(), i = d[0].offsetWidth, j = d[0].offsetHeight;
            if (g) {
                var k = this.$element.parent(), l = e, m = document.documentElement.scrollTop || document.body.scrollTop, n = "body" == this.options.container ? window.innerWidth : k.outerWidth(), o = "body" == this.options.container ? window.innerHeight : k.outerHeight(), p = "body" == this.options.container ? 0 : k.offset().left;
                e = "bottom" == e && h.top + h.height + j - m > o ? "top" : "top" == e && h.top - m - j < 0 ? "bottom" : "right" == e && h.right + i > n ? "left" : "left" == e && h.left - i < p ? "right" : e, d.removeClass(l).addClass(e);
            }
            var q = this.getCalculatedOffset(e, h, i, j);
            this.applyPlacement(q, e), this.hoverState = null;
            var r = function() {
                c.$element.trigger("shown.bs." + c.type);
            };
            a6.support.transition && this.$tip.hasClass("fade") ? d.one(a6.support.transition.end, r).emulateTransitionEnd(150) : r();
        }
    }, b9.prototype.applyPlacement = function(b, c) {
        var d, e = this.tip(), f = e[0].offsetWidth, g = e[0].offsetHeight, h = parseInt(e.css("margin-top"), 10), i = parseInt(e.css("margin-left"), 10);
        isNaN(h) && (h = 0), isNaN(i) && (i = 0), b.top = b.top + h, b.left = b.left + i, a6.offset.setOffset(e[0], a6.extend({
            using: function(a) {
                e.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                });
            }
        }, b), 0), e.addClass("in");
        var j = e[0].offsetWidth, k = e[0].offsetHeight;
        if ("top" == c && k != g && (d = !0, b.top = b.top + g - k), /bottom|top/.test(c)) {
            var l = 0;
            b.left < 0 && (l = -2 * b.left, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight), this.replaceArrow(l - f + j, j, "left");
        } else this.replaceArrow(k - g, k, "top");
        d && e.offset(b);
    }, b9.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
    }, b9.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
    }, b9.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type);
        }
        var c = this, d = this.tip(), e = a6.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a6.support.transition && this.$tip.hasClass("fade") ? d.one(a6.support.transition.end, b).emulateTransitionEnd(150) : b(), this.hoverState = null, this);
    }, b9.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
    }, b9.prototype.hasContent = function() {
        return this.getTitle();
    }, b9.prototype.getPosition = function() {
        var b = this.$element[0];
        return a6.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset());
    }, b9.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        };
    }, b9.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
    }, b9.prototype.tip = function() {
        return this.$tip = this.$tip || a6(this.options.template);
    }, b9.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, b9.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
    }, b9.prototype.enable = function() {
        this.enabled = !0;
    }, b9.prototype.disable = function() {
        this.enabled = !1;
    }, b9.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, b9.prototype.toggle = function(b) {
        var c = b ? a6(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
    }, b9.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type);
    };
    var c7 = a6.fn.tooltip;
    a6.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a6(this), e = d.data("bs.tooltip"), f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.tooltip", e = new b9(this, f)), "string" == typeof c && e[c]());
        });
    }, a6.fn.tooltip.Constructor = b9, a6.fn.tooltip.noConflict = function() {
        return a6.fn.tooltip = c7, this;
    };
}(jQuery), function(a7) {
    "use strict";
    var b10 = function(a, b) {
        this.init("popover", a, b);
    };
    if (!a7.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b10.DEFAULTS = a7.extend({}, a7.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b10.prototype = a7.extend({}, a7.fn.tooltip.Constructor.prototype), b10.prototype.constructor = b10, b10.prototype.getDefaults = function() {
        return b10.DEFAULTS;
    }, b10.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
    }, b10.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, b10.prototype.getContent = function() {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
    }, b10.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    }, b10.prototype.tip = function() {
        return this.$tip || (this.$tip = a7(this.options.template)), this.$tip;
    };
    var c8 = a7.fn.popover;
    a7.fn.popover = function(c) {
        return this.each(function() {
            var d = a7(this), e = d.data("bs.popover"), f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.popover", e = new b10(this, f)), "string" == typeof c && e[c]());
        });
    }, a7.fn.popover.Constructor = b10, a7.fn.popover.noConflict = function() {
        return a7.fn.popover = c8, this;
    };
}(jQuery), function(a8) {
    "use strict";
    function b11(c, d) {
        var e, f = a8.proxy(this.process, this);
        this.$element = a8(a8(c).is("body") ? window : c), this.$body = a8("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a8.extend({}, b11.DEFAULTS, d), this.selector = (this.options.target || (e = a8(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a8([]), this.targets = a8([]), this.activeTarget = null, this.refresh(), this.process();
    }
    b11.DEFAULTS = {
        offset: 10
    }, b11.prototype.refresh = function() {
        var b12 = this.$element[0] == window ? "offset" : "position";
        this.offsets = a8([]), this.targets = a8([]);
        var c = this;
        this.$body.find(this.selector).map(function() {
            var d = a8(this), e = d.data("target") || d.attr("href"), f = /^#./.test(e) && a8(e);
            return f && f.length && f.is(":visible") && [
                [
                    f[b12]().top + (!a8.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()),
                    e
                ]
            ] || null;
        }).sort(function(a, b) {
            return a[0] - b[0];
        }).each(function() {
            c.offsets.push(this[0]), c.targets.push(this[1]);
        });
    }, b11.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, d = c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
        for(a = e.length; a--;)g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
    }, b11.prototype.activate = function(b) {
        this.activeTarget = b, a8(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a8(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
    };
    var c9 = a8.fn.scrollspy;
    a8.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a8(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b11(this, f)), "string" == typeof c && e[c]();
        });
    }, a8.fn.scrollspy.Constructor = b11, a8.fn.scrollspy.noConflict = function() {
        return a8.fn.scrollspy = c9, this;
    }, a8(window).on("load", function() {
        a8('[data-spy="scroll"]').each(function() {
            var b = a8(this);
            b.scrollspy(b.data());
        });
    });
}(jQuery), function(a) {
    "use strict";
    var b13 = function(b) {
        this.element = a(b);
    };
    b13.prototype.show = function() {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0], f = a.Event("show.bs.tab", {
                relatedTarget: e
            });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    });
                });
            }
        }
    }, b13.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d();
        }
        var f = c.find("> .active"), g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in");
    };
    var c10 = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b13(this)), "string" == typeof c && e[c]();
        });
    }, a.fn.tab.Constructor = b13, a.fn.tab.noConflict = function() {
        return a.fn.tab = c10, this;
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
        b.preventDefault(), a(this).tab("show");
    });
}(jQuery), function(a9) {
    "use strict";
    var b14 = function(c, d) {
        this.options = a9.extend({}, b14.DEFAULTS, d), this.$window = a9(window).on("scroll.bs.affix.data-api", a9.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a9.proxy(this.checkPositionWithEventLoop, this)), this.$element = a9(c), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition();
    };
    b14.RESET = "affix affix-top affix-bottom", b14.DEFAULTS = {
        offset: 0
    }, b14.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(b14.RESET).addClass("affix");
        var a = this.$window.scrollTop(), c = this.$element.offset();
        return this.pinnedOffset = c.top - a;
    }, b14.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a9.proxy(this.checkPosition, this), 1);
    }, b14.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var c = a9(document).height(), d = this.$window.scrollTop(), e = this.$element.offset(), f = this.options.offset, g = f.top, h = f.bottom;
            "top" == this.affixed && (e.top += d), "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
            if (this.affixed !== i) {
                this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i : ""), k = a9.Event(j + ".bs.affix");
                this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(b14.RESET).addClass(j).trigger(a9.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                    top: c - h - this.$element.height()
                }));
            }
        }
    };
    var c11 = a9.fn.affix;
    a9.fn.affix = function(c) {
        return this.each(function() {
            var d = a9(this), e = d.data("bs.affix"), f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b14(this, f)), "string" == typeof c && e[c]();
        });
    }, a9.fn.affix.Constructor = b14, a9.fn.affix.noConflict = function() {
        return a9.fn.affix = c11, this;
    }, a9(window).on("load", function() {
        a9('[data-spy="affix"]').each(function() {
            var b = a9(this), c = b.data();
            c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c);
        });
    });
}(jQuery);

//# sourceMappingURL=index.1065da99.js.map
