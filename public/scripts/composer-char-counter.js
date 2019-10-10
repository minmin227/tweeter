$(document).ready(function () {
  $("textarea").on("input", function () {
    let charNum = 140 - this.value.length;
    $(".counter").text(charNum);
    if (charNum < 0) {
      $(".counter").css("color", "red");
      alert('too long to handle');
    } else if (charNum === 140) {
      $(".counter").css("color", "rgb(113, 112, 109)");
    } else {
      $(".counter").css("color", "rgb(0, 171, 52)");
    }
  });
});

$(document).ready(function () {
  $('textarea').focus(function () {
    $(`textarea`).css("color", "rgb(63, 84, 166)");
    $('textarea').animate({ height: "6rem" }, 300);
  });
})

$(document).ready(() => {
  $('input').mouseover(function () {
    $('input').css("background", "white")
    $('input').css("color", "rgb(63, 84, 166)")
    $('input').css("transition-duration", "0.5s")
  })
  $('input').mouseleave(function () {
    $('input').css("color", "white")
    $('input').css("background", "rgb(63, 84, 166)")
    $('input').css("transition-duration", "0.5s")
  })
})

$(() => {
  $('input')
    .mousedown(function () {
      $('input').css("transform", "translateY(3px)")
      $('input').css("box-shadow", "none")
    })
    .mouseup(function () {
      $(this).css("box-shadow", "3px 5px rgb(113, 112, 109)")
    })
})

$(document).ready(() => {
  $('header').click(() => {
    $('html, body').animate({ scrollTop: $('.userName').offset().top }, 500)
  })
})

$(document).ready(() => {
  if ($('form'))
    $('#arrow').click(() => {
      $('form').slideToggle("slow");
    })
})

$(document).ready(() => {
  $("#upArrow").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    if ($('form').hide()) {
      return $('form').show(1500)
    }
  });
})

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 400) {
    $('#upArrow').fadeIn();
  } else {
    $('#upArrow').fadeOut();
  }
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y < 400) {
    $('nav').fadeIn();
  } else {
    $('nav').fadeOut();
  }
});

$(document).ready(() => {
  $("form").hide()
}) //hidden the form at the begin

$(document).ready(() => {
  $("#upArrow").hide()
}) //hidden the form at the begin




