document.addEventListener("DOMContentLoaded", () => {
  const faq = (event) => {
    let faqA = $(`#faq-a-${event.data.index}`);
    let degree = 0;
    faqA.slideToggle();
    if (faqA.hasClass(".open")) {
      faqA.removeClass(".open");
    } else {
      faqA.addClass(".open");
      degree = 90;
    }

    $(`#faq-q-${event.data.index} > svg`).animate(
      {
        borderSpacing: degree,
      },
      {
        step: function (now, fx) {
          $(this).css("-webkit-transform", "rotateZ(" + now + "deg)");
          $(this).css("-moz-transform", "rotateZ(" + now + "deg)");
          $(this).css("transform", "rotateZ(" + now + "deg)");
        },
      },
      "linear"
    );
  };

  const goLink = (link) => {
    window.open(link, "_blank");
  }

  $(".faq-q-box").each(function (index) {
    $(this).on("click", { index }, faq);
  });


  $("#kakaotalk-notice").on("click", function () {
    goLink("https://pf.kakao.com/_laTLs");
  });
  $("#medium-notice").on("click", function () {
    goLink("https://medium.com/econovation");
  });
  $("#instagram-notice").on("click", function () {
    goLink("https://www.instagram.com/cnu_econovation/");
  });
  $("#homepage-notice").on("click", function () {
    goLink("https://econovation.kr/about");
  });
  $('.chapter-people').on("click", function () {
    scrollTo({top: window.innerHeight * 2});
  });
  $('.chapter-time').on("click", function () {
    scrollTo({top: window.innerHeight * 5.5});
  });
  $('.chapter-project').on("click", function () {
    scrollTo({top: window.innerHeight * 6.5});
  });
  $('.chapter-story').on("click", function () {
    scrollTo({top: window.innerHeight * 9});
  });
});
