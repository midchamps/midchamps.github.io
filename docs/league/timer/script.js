console.clear();
// Calculate the remaining time
const now = new Date();
const targetDate = new Date("2023-06-31T00:00:00");
var remainingTime = targetDate - now;
// Calculate remaining days, hours, minutes, and seconds
var remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
var remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
var remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

var d = remainingDays;
var h = remainingHours;
var m = remainingMinutes;
var s = remainingSeconds;

a = h.toString().split("");
h1 = parseInt(a[0]) + 1;
h2 = parseInt(a[1]) + 1;

//add 1 for exact num
$("ul.hourPlay2 li:nth-child(" + h1 + ")").addClass("active");
$("ul.hourPlay li:nth-child(" + h2 + ")").addClass("active");

m.toString().split("");
m1 = parseInt(a[0]) + 1;
m2 = parseInt(a[1]) + 1;

$("ul.minutePlay2 li:nth-child(" + m1 + ")").addClass("active");
$("ul.minutePlay li:nth-child(" + m2 + ")").addClass("active");

a = s.toString().split("");
s1 = parseInt(a[0]) + 1;
s2 = parseInt(a[1]) + 1;

$("ul.secondPlay2 li:nth-child(" + s1 + ")").addClass("active");
$("ul.secondPlay li:nth-child(" + s2 + ")").addClass("active");

// UI 업데이트 함수
function updateUI() {
  // remainingTime 값을 사용하여 UI 업데이트
  remainingSeconds = Math.floor((remainingTime / 1000) % 60);
  remainingMinutes = Math.floor((remainingTime / 1000 / 60) % 60);
  remainingHours = Math.floor((remainingTime / 1000 / 60 / 60) % 24);
  remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  // 남은 시간이 음수인 경우 0으로 초기화
  remainingSeconds = Math.max(remainingSeconds, 0);
  remainingMinutes = Math.max(remainingMinutes, 0);
  remainingHours = Math.max(remainingHours, 0);
  remainingDays = Math.max(remainingDays, 0);
  // UI 엘리먼트 업데이트
  d = remainingDays;
  h = remainingHours;
  m = remainingMinutes;
  s = remainingSeconds;
  a = h.toString().split("");
  
  h1 = parseInt(a[0]) + 1;
  h2 = parseInt(a[1]) + 1;

  //add 1 for exact num
  $("ul.hourPlay2 li:nth-child(" + h1 + ")").addClass("active");
  $("ul.hourPlay li:nth-child(" + h2 + ")").addClass("active");

  m.toString().split("");
  m1 = parseInt(a[0]) + 1;
  m2 = parseInt(a[1]) + 1;

  $("ul.minutePlay2 li:nth-child(" + m1 + ")").addClass("active");
  $("ul.minutePlay li:nth-child(" + m2 + ")").addClass("active");

  a = s.toString().split("");
  s1 = parseInt(a[0]) + 1;
  s2 = parseInt(a[1]) + 1;

  $("ul.secondPlay2 li:nth-child(" + s1 + ")").addClass("active");
  $("ul.secondPlay li:nth-child(" + s2 + ")").addClass("active");
  
  secondPlay();
}

// 1초마다 remainingTime 값을 갱신하고 UI 업데이트
setInterval(function () {
  remainingTime -= 1000;
  updateUI();
}, 1000);

// 초기에 UI 업데이트
updateUI();

function secondPlay() {
  $("body").removeClass("play");
  var aa = $("ul.secondPlay li.active");

  if (aa.html() == undefined) {
    aa = $("ul.secondPlay li").eq(0);
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  } else if (aa.is(":last-child")) {
    $("ul.secondPlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.secondPlay li").eq(0);
    aa.addClass("active").closest("body").addClass("play");
    secondPlay2();
  } else {
    $("ul.secondPlay li").removeClass("before");
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  }
}

function secondPlay2() {
  $("body").removeClass("play");
  var aa = $("ul.secondPlay2 li.active");

  if (aa.html() == undefined) {
    aa = $("ul.secondPlay2 li").eq(0);
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  } else if (aa.is(":last-child")) {
    $("ul.secondPlay2 li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.secondPlay2 li").eq(0);
    aa.addClass("active").closest("body").addClass("play");
    minutePlay();
  } else {
    $("ul.secondPlay2 li").removeClass("before");
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  }
}

function minutePlay() {
  $("body").removeClass("play");
  var aa = $("ul.minutePlay li.active");

  if (aa.html() == undefined) {
    aa = $("ul.minutePlay li").eq();
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  } else if (aa.is(":last-child")) {
    $("ul.minutePlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.minutePlay li").eq(0);
    aa.addClass("active").closest("body").addClass("play");
    minutePlay2();
  } else {
    $("ul.minutePlay li").removeClass("before");
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  }
}
function minutePlay2() {
  $("body").removeClass("play");
  var aa = $("ul.minutePlay2 li.active");

  if (aa.html() == undefined) {
    aa = $("ul.minutePlay2 li").eq(0);
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  } else if (aa.is(":last-child")) {
    $("ul.minutePlay2 li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.minutePlay2 li").eq(0);
    aa.addClass("active").closest("body").addClass("play");
    hourPlay();
  } else {
    $("ul.minutePlay2 li").removeClass("before");
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  }
}

function hourPlay() {
  $("body").removeClass("play");
  var aa = $("ul.hourPlay li.active");

  if (aa.html() == undefined) {
    aa = $("ul.hourPlay li").eq(0);
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  } else if (aa.is(":last-child")) {
    $("ul.hourPlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.hourPlay li").eq(0);
    aa.addClass("active").closest("body").addClass("play");
    hourPlay2();
  } else {
    $("ul.hourPlay li").removeClass("before");
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  }
}

function hourPlay2() {
  $("body").removeClass("play");
  var aa = $("ul.hourPlay2 li.active");

  if (aa.html() == undefined) {
    aa = $("ul.hourPlay2 li").eq(0);
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  } else if (aa.is(":last-child")) {
    $("ul.hourPlay2 li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.hourPlay2 li").eq(0);
    aa.addClass("active").closest("body").addClass("play");
    dayPlay();
  } else {
    $("ul.hourPlay2 li").removeClass("before");
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  }
}

function dayPlay() {
  $("body").removeClass("play");
  var aa = $("ul.dayPlay li.active");

  if (aa.html() == undefined) {
    aa = $("ul.dayPlay li").eq(0);
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  } else if (aa.is(":last-child")) {
    $("ul.dayPlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.dayPlay li").eq(0);
    aa.addClass("active").closest("body").addClass("play");
  } else {
    $("ul.dayPlay li").removeClass("before");
    aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
  }
}
