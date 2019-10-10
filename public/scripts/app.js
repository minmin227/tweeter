const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const elapseTime = function (data) {
  let timeDiff = new Date().getTime() - new Date(data).getTime();
  let seconds = timeDiff / 1000;
  let time = seconds;

  if (seconds > 60 * 60 * 24 * 7 * 52) {
    time = Math.floor(seconds / 52 / 7 / 24 / 60 / 60);
    return `${time} year${time > 1 ? 's' : ''} ago`;
  } else if (seconds > 60 * 60 * 24 * 7) {
    time = Math.floor(seconds / 7 / 24 / 60 / 60);
    return `${time} week${time > 1 ? 's' : ''} ago`;
  } else if (seconds > 60 * 60 * 24) {
    time = Math.floor(seconds / 24 / 60 / 60);
    return `${time} day${time > 1 ? 's' : ''} ago`;
  } else if (seconds > 60 * 60) {
    time = Math.floor(seconds / 60 / 60);
    return `${time} hour${time > 1 ? 's' : ''} ago`;
  } else if (seconds > 60) {
    time = Math.floor(seconds / 60);
    return `${time} minute${time > 1 ? 's' : ''} ago`;
  } else if (seconds < 60) {
    time = Math.floor(seconds);
    return `${time >= 1 ? time : 1} second${time > 1 ? 's' : ''} ago`;
  }
}


$(document).ready(() => {

  const tweetdata = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@zxrd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rcxd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 5461123959082
    },
  ]

  function createTweetElement(data) {
    let time = elapseTime(data.created_at);
    let html =
      `<article>
        <div class="headName">
            <img class="avaTar" src=${escape(data.user.avatars)}>
            <p>${escape(data.user.name)}</p>
        </div>
        
        <div class="userName">${escape(data.user.handle)}</div>

        <div class="contentTweet">${escape(data.content.text)}</div>

        <div class="timePost">${escape(time)}</div>

        <div class="iCon">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </article>`
      ;
    return $(html);
  }


  const renderTweets = function (tweets) {
    $('#tweetContainer').empty();
    for (let tweet of tweets) {
      let $pushTweet = createTweetElement(tweet);
      $('#tweetContainer').append($pushTweet);
    }
  }

  const loadTweets = function () {
    $.ajax({
      type: "GET",
      url: "/tweets",
    })
      .then(function (data) {
        renderTweets(data.reverse())
      })
  }

  $('.validationMes').hide();

  $("form").submit((e) => {
    e.preventDefault();
    if (!$("textarea").val().length) {
      $('.validationMes').text("Please fill your tweet !!!").css("color", "red").slideDown().fadeOut(2000)
    } else if ($("textarea").val().length > 140){
      $('.validationMes').text("Your tweet is too long").css("color", "red").slideDown().fadeOut(2000)
    } else {
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $("form").serialize()
      })
        .then(() => {
          loadTweets();
          $('.validationMes').text("Your tweet is posted").css("color", "green").slideDown().fadeOut(3000);
          $("textarea").val("");
          $(".counter").text(140).css("color", "rgb(113, 112, 109)");
        })
    }
  })

  loadTweets();

})


$(document).ready(() => {
  $("#upArrow").hide()
}) //hidden the form at the begin



/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

