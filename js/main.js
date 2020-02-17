//for showing the menu items serach and cross when
//click to hamburger
$(".menu i").on("click", function() {
  $(this).hide();
  $(".menu a").show();
  $(".search").show();
});

// hide menu items when cross sign is clicked
$(".search span i:last-child").on("click", function() {
  $(".menu i").show();
  $(".logo img").show();
  $(".menu a").hide();
  $(".search").hide();
  $(".logo form").hide();
});

//for opening the serach bar
$(".search span i:first-child").on("click", function() {
  $(".logo img").hide();
  $(".logo form").show();
});

//for slider customers
var $slickFrame = $(".tab-slider-thumbs__list");
var slideWidth = $slickFrame.width() / 3;
var centerPadding = (slideWidth / 4) * 3;
$(".slider").slick({
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 50,
  centerMode: true,
  centerPadding: centerPadding + "px"
});

//for video slider
var videoList = ["vid2.mp4", "vid.mp4", "video.mp4"];
var textId = ["forVideo1", "forVideo2", "forVideo3"];
var i = 1;
function leftArrowClick() {
  if (i > 0) {
    i = i - 1;
    console.log("Hello world");
    const appDiv = document.getElementById("videoSlider");
    appDiv.innerHTML = `<video
    autoplay muted loop 
    class="embed-responsive embed-responsive-16by9"
    id="myVid"
    src="img/${videoList[i]}"
  ></video>
  <div class="play-full">
  <i class=""><i class="fa fa-play" aria-hidden="true"></i></i>
</div>`;
    let elem = document.querySelector("#right");
    elem.style.color = "black";
    elem.style.cursor = "pointer";
    if (i == 0) {
      let elem = document.querySelector("#left");
      elem.style.color = "lightgrey";
      elem.style.cursor = "default";
      $(`#${textId[0]}`).show();
      $(`#${textId[1]}`).hide();
      $(`#${textId[2]}`).hide();
    }

    if (i == 1) {
      $(`#${textId[0]}`).hide();
      $(`#${textId[1]}`).show();
      $(`#${textId[2]}`).hide();
    }

    if (i == 2) {
      $(`#${textId[0]}`).hide();
      $(`#${textId[1]}`).hide();
      $(`#${textId[2]}`).show();
    }
  }
}

function rightArrowClick() {
  if (i < 2) {
    i = i + 1;
    console.log("Hello world");
    console.log("Hello world");
    const appDiv = document.getElementById("videoSlider");
    appDiv.innerHTML = `<video
    autoplay muted loop 
    class="embed-responsive embed-responsive-16by9"
    id="myVid"
    src="img/${videoList[i]}"
    ></video>
    <div class="play-full">
    <i class=""><i class="fa fa-play" aria-hidden="true"></i></i>
  </div>`;
    let elem = document.querySelector("#left");
    elem.style.color = "black";
    elem.style.cursor = "pointer";
    if (i == 2) {
      let elem = document.querySelector("#right");
      elem.style.color = "lightgrey";
      elem.style.cursor = "default";

      $(`#${textId[0]}`).hide();
      $(`#${textId[1]}`).hide();
      $(`#${textId[2]}`).show();
    }
    if (i == 1) {
      $(`#${textId[0]}`).hide();
      $(`#${textId[1]}`).show();
      $(`#${textId[2]}`).hide();
    }
    if (i == 0) {
      $(`#${textId[0]}`).show();
      $(`#${textId[1]}`).hide();
      $(`#${textId[2]}`).hide();
    }
  }
}

//changing the menus items
$("#profile").on("click", function() {
  $("#profileDiv").show();
  $(this).css("border-bottom", "2px solid black");
  $("#pressDiv").hide();
  $("#awardsDiv").hide();
  $("#creditsDiv").hide();
  $("#press").css("border", "none");
  $("#awards").css("border", "none");
  $("#credits").css("border", "none");
});

$("#press").on("click", function() {
  $("#pressDiv").show();
  $(this).css("border-bottom", "2px solid black");
  $("#profileDiv").hide();
  $("#awardsDiv").hide();
  $("#creditsDiv").hide();
  $("#profile").css("border", "none");
  $("#awards").css("border", "none");
  $("#credits").css("border", "none");
});

$("#awards").on("click", function() {
  $("#awardsDiv").show();
  $(this).css("border-bottom", "2px solid black");
  $("#profileDiv").hide();
  $("#pressDiv").hide();
  $("#creditsDiv").hide();
  $("#profile").css("border", "none");
  $("#press").css("border", "none");
  $("#credits").css("border", "none");
});

$("#credits").on("click", function() {
  $("#creditsDiv").show();
  $(this).css("border-bottom", "2px solid black");
  $("#profileDiv").hide();
  $("#awardsDiv").hide();
  $("#pressDiv").hide();
  $("#profile").css("border", "none");
  $("#awards").css("border", "none");
  $("#press").css("border", "none");
});

//video show big
$("#play-full").on("click", function() {
  const vid = document.getElementById("myVid");
  if (vid.requestFullScreen) {
    vid.requestFullScreen();
  } else if (vid.webkitRequestFullScreen) {
    vid.webkitRequestFullScreen();
  } else if (vid.mozRequestFullScreen) {
    vid.mozRequestFullScreen();
  }
});
//opens full news video
$("#play-click").on("click", function() {
  const vid = document.getElementById("newsVideo");
  if (vid.requestFullScreen) {
    vid.requestFullScreen();
  } else if (vid.webkitRequestFullScreen) {
    vid.webkitRequestFullScreen();
  } else if (vid.mozRequestFullScreen) {
    vid.mozRequestFullScreen();
  }
});
