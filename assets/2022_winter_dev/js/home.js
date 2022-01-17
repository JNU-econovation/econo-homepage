$(document).ready(function () {
    $(`.faq`).click(function () {
        var faq_index = $(this).data("number");
        if ($(`#faq${faq_index}-q`).css("display") == "none") {
            $(this).css("background-image", 'url("assets/2022_winter_dev/images/faq_button_on.png")');
            $(this).css("box-shadow", "-3px -3px 7px rgba(54, 13, 216, 0.246749), 3px 3px 7px rgba(12, 0, 63, 0.564931)");
        } else {
            $(this).css("background-image", 'url("assets/2022_winter_dev/images/faq_button_off.png")');
            $(this).css("box-shadow", "-8px -8px 20px rgba(122, 134, 151, 0.101672), 8px 8px 20px rgba(0, 0, 0, 0.353065)");
        }
        $(`#faq${faq_index}-q`).slideToggle();
    });

    var ticket_height = $("#pop-ticket").offset().top;
    var ticket_height_mobile = $("#pop-ticket-mobile").offset().top;
    var sun_height = $("#scroll-sun").offset().top;

    var size = 0;
    var cur_height = $(document).scrollTop() + $(window).height();

    var isIntroScrolled = false;
    var isIntroScrolledMobile = false;

    if (ticket_height + 120 < cur_height) {
        $("#poster").css("clip", `rect(0px, 425px, 777px, 0px`);
        $("#poster").css("margin-top", "77px");
        $("#pop-ticket").animate({ opacity: 0 }, "slow");
        $("#intro-left").animate({ opacity: 1 }, "slow");
        $("#intro-right").animate({ opacity: 1 }, "slow");
    }

    if (ticket_height_mobile + 300 < cur_height) {
        $("#poster-mobile").css("clip", `rect(0px, 425px, 777px, 0px`);
        $("#poster-mobile").css("margin-top", "77px");
        $("#pop-ticket-mobile").animate({ opacity: 0 }, "slow");
        setTimeout(showIntroLabel, 700);
    }

    $(document).scroll(function (e) {
        cur_height = $(document).scrollTop() + $(window).height();

        if (ticket_height + 120 <= cur_height && size != 77 && !isIntroScrolled) {
            //if(!isMoved) $('html').animate({scrollTop: $('#winter-dev-intro').offset().top}, 100);
            isIntroScrolled = true;

            if (size > 77) {
                size = 77;
            }
            //-525px ~ 471px
            $("#poster").animate(
                {
                    marginTop: "77px",
                },
                {
                    step: function (now, fx) {
                        $(this).css("clip", `rect(${-now}px, 425px, 777px, 0px`);
                    },
                    done: function () {
                        $("#intro-left").animate({ opacity: 1 }, "slow");
                        $("#intro-right").animate({ opacity: 1 }, "slow");
                    },
                },
                "slow"
            );
        }

        if (ticket_height_mobile + 120 <= cur_height && size != 77 && !isIntroScrolledMobile) {
            isIntroScrolledMobile = true;

            $("#poster-mobile").animate(
                {
                    marginTop: "77px",
                },
                {
                    step: function (now, fx) {
                        $(this).css("clip", `rect(${-now}px, 425px, 777px, 0px`);
                    },
                    done: function () {
                        setTimeout(showIntroLabel, 700);
                    },
                },
                500
            );

            $("#pop-ticket-mobile").animate({ opacity: 0 }, "slow");
        }
        var sun_margin_top = $("#sun").css("margin-top");
        if (sun_height <= cur_height && sun_margin_top[0] != "-") {
            $("#sun").css("margin-top", "-=11px");
        }
    });

    $("#project-detail-button").click(function () {
        $("#project-detail").animate(
            {
                width: "36.2rem",
            },
            {
                step: function (now, fx) {
                    $(this).css("display", "flex");
                },
                done: function () {
                    $("#project-detail-button").css("display", "none");
                },
            },
            1000
        );

        $("#project-detail-mobile").animate(
            {
                height: "100%",
            },
            {
                step: function (now, fx) {
                    $(this).css("display", "flex");
                },
                done: function () {
                    $("#project-detail-button-mobile").css("transform", "rotate(180deg)");
                    isProjectButtonClicked = !isProjectButtonClicked;
                },
            },
            1000
        );
    });

    var isProjectButtonClicked = false;
    $("#project-detail-button-mobile").click(function () {
        if (!isProjectButtonClicked) {
            $("#project-detail-mobile").animate(
                {
                    height: "100%",
                },
                {
                    step: function (now, fx) {
                        $(this).css("display", "flex");
                    },
                    done: function () {
                        $("#project-detail-button-mobile").css("transform", "rotate(180deg)");
                        isProjectButtonClicked = !isProjectButtonClicked;
                    },
                },
                1000
            );

            $("#project-detail").animate(
                {
                    width: "36.2rem",
                },
                {
                    step: function (now, fx) {
                        $(this).css("display", "flex");
                    },
                    done: function () {
                        $("#project-detail-button").css("display", "none");
                    },
                },
                1000
            );
        } else {
            $("#project-detail-mobile").animate(
                {
                    height: "0",
                },
                {
                    done: function () {
                        $(this).css("display", "none");
                        $("#project-detail-button-mobile").css("transform", "");
                        isProjectButtonClicked = !isProjectButtonClicked;
                    },
                },
                1000
            );
        }
    });

    $(".project-button").click(function () {
        $(".project-button").removeClass("project-button-selected");
        $(this).addClass("project-button-selected");
        $(".project-button-mobile").each((i, e) => {
            if (e.innerText == this.innerText) $(e).addClass("project-button-selected-mobile");
            else $(e).removeClass("project-button-selected-mobile");
        });
        setProjectIntro(getProjectTeam(this.innerText));
        setProjectIntro(getProjectTeam(this.innerText), true);
    });

    $(".project-button-mobile").click(function () {
        $(".project-button-mobile").removeClass("project-button-selected-mobile");
        $(this).addClass("project-button-selected-mobile");
        $(".project-button").each((i, e) => {
            if (e.innerText == this.innerText) $(e).addClass("project-button-selected");
            else $(e).removeClass("project-button-selected");
        });
        setProjectIntro(getProjectTeam(this.innerText));
        setProjectIntro(getProjectTeam(this.innerText), true);
    });

    setProjectIntro(getProjectTeam("팜터틀"));
    setProjectIntro(getProjectTeam("팜터틀"), true);
});

var isLabelFinisehd = true;
function showIntroLabel() {
    if (!isLabelFinisehd) return;

    let poster = $("#poster-mobile");
    let label = $("#intro-wapper-mobile");

    isLabelFinisehd = false;
    if (poster.css("z-index") == "100") {
        poster.animate(
            { opacity: 0, rotateProperty: 100 },
            {
                step: function (now, tw) {
                    if (tw.prop == "rotateProperty") {
                        poster.css("transform", "rotateY(" + now + "deg");
                    }
                },
                done: function () {
                    label.animate({ opacity: 1 }, "slow", function () {
                        poster.css("z-index", 0);
                        label.css("z-index", 100);
                        isLabelFinisehd = !isLabelFinisehd;
                    });
                },
            },
            500
        );
    } else {
        label.animate(
            { opacity: 0, rotateProperty: 0 },
            {
                step: function (now, tw) {
                    if (tw.prop == "rotateProperty") {
                        poster.css("transform", "rotateY(" + now + "deg");
                    }
                },
                done: function () {
                    poster.animate({ opacity: 1 }, "slow", function () {
                        label.css("z-index", 0);
                        poster.css("z-index", 100);
                        isLabelFinisehd = !isLabelFinisehd;
                    });
                },
            },
            500
        );
    }
}

function setProjectIntro(index, isMobile = false) {
    var teamData = data.teams[index];
    let mobile = isMobile ? "-mobile" : "";

    $("#project-image" + mobile).animate(
        { opacity: "0" },
        {
            done: function () {
                $(this).attr("src", teamData.image);
                $(this).animate({ opacity: "1" }, 300);
            },
        },
        300
    );
    $("#project-hash" + mobile).animate(
        { opacity: "0" },
        {
            done: function () {
                $(this)[0].innerText = teamData.hashTag;
                $(this).animate({ opacity: "1" }, 300);
            },
        },
        300
    );
    $("#project-name" + mobile).animate(
        { opacity: "0" },
        {
            done: function () {
                $(this)[0].innerText = teamData.projectName;
                $(this).animate({ opacity: "1" }, 300);
            },
        },
        300
    );
    $("#project-team" + mobile).animate(
        { opacity: "0" },
        {
            done: function () {
                $(this)[0].innerText = teamData.teamName;
                $(this).animate({ opacity: "1" }, 300);
            },
        },
        300
    );
    $("#project-people" + mobile).animate(
        { opacity: "0" },
        {
            done: function () {
                $(this)[0].innerText = teamData.teamPeople;
                $(this).animate({ opacity: "1" }, 300);
            },
        },
        300
    );
    $("#project-subtitle" + mobile).animate(
        { opacity: "0" },
        {
            done: function () {
                $(this)[0].innerText = teamData.subTitle;
                $(this).animate({ opacity: "1" }, 300);
            },
        },
        300
    );
    $("#project-idea" + mobile).animate(
        { opacity: "0" },
        {
            done: function () {
                $(this)[0].innerText = teamData.idea;
                $(this).animate({ opacity: "1" }, 300);
            },
        },
        300
    );
    $("#project-teck" + mobile).animate(
        { opacity: "0" },
        {
            done: function () {
                $(this)[0].innerText = teamData.teck;
                $(this).animate({ opacity: "1" }, 300);
            },
        },
        300
    );
}

function copyLink() {
    let currentUrl = window.document.location.href;

    let t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = currentUrl;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);

    alert("복사되었습니다.");
}

function getProjectTeam(teamName) {
    for (var i = 0; i < data.index.length; i++) {
        if (data.index[i] == teamName) {
            return i;
        }
    }
    return 0;
}
