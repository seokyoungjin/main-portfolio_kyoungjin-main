// header sticky
window.onscroll = function () {
  subHeader();
};

const header = document.querySelector(".sub-header"),
  interview = document.querySelector(".interview"),
  project = document.querySelector(".pro"),
  outro = document.querySelector(".end"),
  rotate = document.querySelector(".end .main");
function subHeader() {
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  // black header
  if (
    window.pageYOffset > project.offsetTop - 100 &&
    window.pageYOffset < outro.offsetTop
  ) {
    // project
    header.classList.add("black");
    $(".sub-header span")
      .css("transform", `translateX(${$("nav a").eq(2).offset().left}px)`)
      .css("width", `${$("nav a").eq(2).width()}px`);
    $("nav a").removeClass("active");
    $("nav a").eq(2).addClass("active");
  } else if (
    window.pageYOffset >= interview.offsetTop - 100 &&
    window.pageYOffset < project.offsetTop - 100
  ) {
    // interview
    header.classList.remove("black");
    $(".sub-header span")
      .css("transform", `translateX(${$("nav a").eq(1).offset().left}px)`)
      .css("width", `${$("nav a").eq(1).width()}px`);
    $("nav a").removeClass("active");
    $("nav a").eq(1).addClass("active");
  } else if (window.pageYOffset < interview.offsetTop - 100) {
    // about me
    header.classList.remove("black");
    $(".sub-header span")
      .css("transform", `translateX(${$("nav a").eq(0).offset().left}px)`)
      .css("width", `${$("nav a").eq(0).width()}px`);
    $("nav a").removeClass("active");
    $("nav a").eq(0).addClass("active");
  } else {
    // end
    header.classList.remove("black");
    $(".sub-header span")
      .css("transform", `translateX(${$("nav a").eq(3).offset().left}px)`)
      .css("width", `${$("nav a").eq(3).width()}px`);
    $("nav a").removeClass("active");
    $("nav a").eq(3).addClass("active");
  }

  // end letter
  if (window.pageYOffset > rotate.offsetTop - 300)
    $(".end .main").addClass("active");
}

// the first bottom bar
$(".sub-header span")
  .css("transform", `translateX(${$("nav a").eq(0).offset().left}px)`)
  .css("width", `${$("nav a").eq(0).width()}px`);

// header scroll
$("nav a").on("click", pagemove);

let idx;
function pagemove() {
  event.preventDefault();

  let idx = $(this).index();
  let conTop = $(".con").eq(idx).offset().top;
  $("html").animate({ scrollTop: conTop }, 1000);

  $("nav a").removeClass("active");
  $(this).addClass("active");

  // bottom bar
  $(".sub-header span")
    .css("transform", `translateX(${$(this).offset().left}px)`)
    .css("width", `${$(this).width()}px`);
}

// project grid setup
$(function () {
  // 프로젝트 카드 클릭 시 dragging 상태 관리
  $(".project-card").data("dragging", false);
});

!(function (a) {
  function f(a, b) {
    if (!(a.originalEvent.touches.length > 1)) {
      a.preventDefault();
      var c = a.originalEvent.changedTouches[0],
        d = document.createEvent("MouseEvents");
      d.initMouseEvent(
        b,
        !0,
        !0,
        window,
        1,
        c.screenX,
        c.screenY,
        c.clientX,
        c.clientY,
        !1,
        !1,
        !1,
        !1,
        0,
        null
      ),
        a.target.dispatchEvent(d);
    }
  }
  if (((a.support.touch = "ontouchend" in document), a.support.touch)) {
    var e,
      b = a.ui.mouse.prototype,
      c = b._mouseInit,
      d = b._mouseDestroy;
    (b._touchStart = function (a) {
      var b = this;
      !e &&
        b._mouseCapture(a.originalEvent.changedTouches[0]) &&
        ((e = !0),
        (b._touchMoved = !1),
        f(a, "mouseover"),
        f(a, "mousemove"),
        f(a, "mousedown"));
    }),
      (b._touchMove = function (a) {
        e && ((this._touchMoved = !0), f(a, "mousemove"));
      }),
      (b._touchEnd = function (a) {
        e &&
          (f(a, "mouseup"),
          f(a, "mouseout"),
          this._touchMoved || f(a, "click"),
          (e = !1));
      }),
      (b._mouseInit = function () {
        var b = this;
        b.element.bind({
          touchstart: a.proxy(b, "_touchStart"),
          touchmove: a.proxy(b, "_touchMove"),
          touchend: a.proxy(b, "_touchEnd"),
        }),
          c.call(b);
      }),
      (b._mouseDestroy = function () {
        var b = this;
        b.element.unbind({
          touchstart: a.proxy(b, "_touchStart"),
          touchmove: a.proxy(b, "_touchMove"),
          touchend: a.proxy(b, "_touchEnd"),
        }),
          d.call(b);
      });
  }
})(jQuery);
