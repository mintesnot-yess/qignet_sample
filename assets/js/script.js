//  -------- pages
var home_view = document.querySelector(".home_view");
var playlist_container = document.querySelector(".playlist_container");
var user_profile_container = document.querySelector(".user_profile_container");
var artist_page = document.querySelector(".artist_page");
var playlist_page = document.querySelector(".playlist_page");

// ---- controller
var current_music_image = document.querySelector(".current_music_image");
var current_music_artist = document.querySelector(".current_music_artist");
var current_music_title = document.querySelector(".current_music_title");
var current_music_like_btn = document.querySelector(".current_music_like_btn");
var play_pause_btn = document.querySelector(".play_pause_btn");
var play_pause_btn = document.querySelector(".play_pause_btn");
var played = false;
var currentTrack = 0;
var music_src = document.querySelectorAll(".music_src");
var time_changer = document.querySelector(".time_changer");
var artist_id_controller = 0;

var back_home = `<button onclick="home()" class="btn logo">
<i class="fs-1 fa-solid fa-angle-left"> </i>  </button> `;

var recently_track = [];

function make_url(new_title) {
  const newState = {
    title: new_title,
    url: ""
  };
  document.title = new_title;

  history.pushState(newState, newState.title, newState.url);
}

var side_navs = document.querySelectorAll(".side_nav");

side_navs.forEach(side_nav => {
  side_nav.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");

    side_nav.classList.add("active");
  });
});

//     pages
function home() {
  $(".home_view").show();
  $(".artist_page").hide();
  $(".user_profile_container").hide();
  $(".playlist_container").hide();
  $(".playlist_page").hide();
  $(".like_songs").hide();
  $(".searching_page").hide();
  $(".user_page_container").hide();
  $(".all_artist_page").hide();
  $(".all_artist_page").hide();

  if (audio.paused) {
    make_url("Qignet");
  }

  $(".ex_btns").html(`<button onclick="aside_bar()" class="btn logo">
                    <i class="fs-1 fa fa-bars" aria-hidden="true"></i> </button>`);
}

function openProfile() {
  $(".home_view").hide();
  $(".artist_page").hide();

  $(".user_page_container").show();
  $(".playlist_container").hide();
  $(".playlist_page").hide();
  $(".searching_page").hide();
  $(".all_artist_page").hide();
  $(".all_artist_page").hide();

  $(".like_songs").hide();
  $(".ex_btns").html(back_home);
}

function artistPage(artist_id, artist_name) {
  $(".loading_page").show();

  {
    $(".artist_page").show();

    $(".home_view").hide();
    $(".all_artist_page").hide();
    $(".user_page_container").hide();

    $(".user_profile_container").hide();
    $(".playlist_container").hide();
    $(".playlist_page").hide();
    $(".like_songs").hide();
    $(".searching_page").hide();

    $(".loading_page").hide();

    $(".ex_btns").html(back_home);

    if (audio.paused) {
      make_url(artist_name);
    }
  }
}

function playlistPage(playlist_id) {
  $(document).ready(function() {
    $.ajax({
      url: "pages?playlist_id=" + playlist_id + "",
      success: function(result) {
        $(".playlist_page").html(result);
        $(".artist_page").hide();
        $(".home_view").hide();
        $(".user_page_container").hide();
        $(".all_artist_page").hide();
        $(".all_artist_page").hide();

        $(".user_profile_container").hide();
        $(".playlist_container").hide();
        $(".playlist_page").show();
        $(".like_songs").hide();
        $(".searching_page").hide();

        $(".ex_btns").html(back_home);
      }
    });
  });
}

function searching(search) {
  $(".loading_page").show();

  $(document).ready(function() {
    $(".searching_page").show();

    {
      $(".playlist_page").show();
      $(".artist_page").hide();
      $(".all_artist_page").hide();
      $(".home_view").hide();
      $(".user_page_container").hide();
      $(".user_profile_container").hide();
      $(".playlist_container").hide();
      $(".like_songs").hide();
      $(".loading_page").hide();
      $(".all_artist_page").hide();

      $(".card ").css("animation", "none");

      if (audio.paused) {
        make_url("search-" + search);
      }
    }
  });
}

function all_songs() {
  $(".loading_page").show();

  $(document).ready(function() {
    {
      $(".playlist_container").show();
      $(".artist_page").hide();
      $(".home_view").hide();
      $(".user_page_container").hide();
      $(".all_artist_page").hide();

      $(".user_profile_container").hide();
      $(".playlist_page").hide();
      $(".like_songs").hide();
      $(".searching_page").hide();

      $(".loading_page").hide();
    }
  });
}

function recantly_player_songs() {
  $(".loading_page").show();

  $(document).ready(function() {
    {
      $(".playlist_container").show();
      $(".artist_page").hide();
      $(".home_view").hide();
      $(".user_page_container").hide();
      $(".all_artist_page").hide();

      $(".user_profile_container").hide();
      $(".playlist_page").hide();
      $(".like_songs").hide();
      $(".searching_page").hide();
      $(".loading_page").hide();
    }
  });
}

function all_artists() {
  $(".loading_page").show();

  $(document).ready(function() {
    {
      $(".all_artist_page").show();
      $(".artist_page").hide();
      $(".home_view").hide();

      $(".user_page_container").hide();
      $(".user_profile_container").hide();
      $(".playlist_page").hide();
      $(".like_songs").hide();
      $(".searching_page").hide();

      $(".loading_page").hide();
      $(".card ").css("animation", "none");
      $(".ex_btns").html(back_home);
    }
  });
}

function all_favorite() {
  $(".loading_page").show();

  $(document).ready(function() {
    $.ajax({
      url: "pages?all_favorite",
      success: function(result) {
        $(".all_artist_page").html(result);
        $(".all_artist_page").show();
        $(".artist_page").hide();
        $(".home_view").hide();

        $(".user_page_container").hide();
        $(".user_profile_container").hide();
        $(".playlist_page").hide();
        $(".like_songs").hide();
        $(".searching_page").hide();

        $(".loading_page").hide();
        $(".card ").css("animation", "none");
        $(".ex_btns").html(back_home);
      }
    });
  });
}

function all_following_music() {
  $(".loading_page").show();

  $(document).ready(function() {
    $.ajax({
      url: "pages?all_following_song",
      success: function(result) {
        $(".all_artist_page").html(result);
        $(".all_artist_page").show();
        $(".artist_page").hide();
        $(".home_view").hide();

        $(".user_page_container").hide();
        $(".user_profile_container").hide();
        $(".playlist_page").hide();
        $(".like_songs").hide();
        $(".searching_page").hide();

        $(".loading_page").hide();
        $(".card ").css("animation", "none");
        $(".ex_btns").html(back_home);
      }
    });
  });
}

function like_song(user_id) {
  $(".loading_page").show();

  $(document).ready(function() {
    {
      $(".like_songs").show();
      $(".playlist_container").hide();
      $(".all_artist_page").hide();

      $(".artist_page").hide();
      $(".home_view").hide();
      $(".user_page_container").hide();

      $(".user_profile_container").hide();
      $(".playlist_page").hide();
      $(".like_songs").show();
      $(".searching_page").hide();
      $(".loading_page").hide();
    }
  });
}

// audio controller
$(".loading_page").show();

$.getJSON("assets/json/music_file.json", function(data) {
  $(".card ").css("animation", "none");
  $(".player_controll .img ").css("animation", "none");
  audio.src = "assets/musics/" + data[0].music;
  current_music_image.src = "assets/albem_arts/" + data[0].image + "";
  current_music_artist.innerHTML = data[0].artist;
  current_music_artist.value = data[0].user_id;
  current_music_like_btn.value = data[0].id;
  artist_id_controller = data[0].id;
  current_music_title.innerHTML = data[0].title;

  document.getElementById("next_play").addEventListener("click", next);
  document.getElementById("previous_play").addEventListener("click", previous);
  $(".loading_page").hide();
  var recantly_track = [];

  if (sours != null) {
    audio_played();
  }

  //TODO: add to recantly song in to localstorage

  if (audio.played) {
    make_url(data[0].title + " • " + data[0].artist);
  }

  if (audio.paused) {
    make_url("Qignet");
  }

  // recantly_track = JSON.parse(localStorage.getItem("recantly_track"));

  function next() {
    currentTrack++;
    if (currentTrack >= data.length - 1) {
      audio.pause();
      currentTrack = 0;
    }

    audio.src = "assets/musics/" + data[currentTrack].music;
    current_music_image.src = "assets/albem_arts/" + data[currentTrack].image + "";
    current_music_artist.innerHTML = data[currentTrack].artist;
    current_music_title.innerHTML = data[currentTrack].title;
    current_music_artist.value = data[currentTrack].user_id;
    current_music_like_btn.value = data[currentTrack].id;

    audio.play();

    make_url(data[currentTrack].title + " • " + data[currentTrack].artist);
  }

  function previous() {
    currentTrack--;
    if (currentTrack <= 1) {
      currentTrack = 0;
    }

    audio.src = "assets/musics/" + data[currentTrack].music;
    current_music_image.src = "assets/albem_arts/" + data[currentTrack].image + "";
    current_music_artist.innerHTML = data[currentTrack].artist;
    current_music_title.innerHTML = data[currentTrack].title;
    current_music_artist.value = data[currentTrack].user_id;
    current_music_like_btn.value = data[currentTrack].id;
    audio.play();
    artist_id_controller = data[currentTrack].id;

    make_url(data[currentTrack].title + " • " + data[currentTrack].artist);
  }

  audio.addEventListener("ended", function() {
    recently_track.push(data[currentTrack]);
    localStorage.setItem("recently_track", JSON.stringify(recently_track));
    next();
  });
});

function play_up(card) {
  var audio = document.getElementById("audio");
  var music_sours = card.getAttribute("data-music_sours");
  var image_sours = card.getAttribute("data-image");
  var image_artist = card.getAttribute("data-artist");
  var image_title = card.getAttribute("data-title");
  var data_musice_id = card.getAttribute("data-id");
  var data_artist_name = card.getAttribute("data-artistname");
  var data_title = card.getAttribute("data-title");
  var data_user_id = card.getAttribute("data-user_id");

  artist_id_controller = card.getAttribute("data-user_id");
  audio.src = "assets/musics/" + music_sours;
  current_music_image.src = "assets/albem_arts/" + image_sours + "";
  current_music_artist.innerHTML = image_artist;
  current_music_title.innerHTML = image_title;

  current_music_artist.value = data_user_id;
  current_music_like_btn.value = data_musice_id;

  play_pause_btn.innerHTML = ' <i class="fa fa-pause" aria-hidden="true" > </i>';
  make_url(data_title.toUpperCase() + " • " + data_artist_name.toUpperCase());
  audio_played();

  $(".player").removeClass("player");
  $(card).addClass("player");
}

function play_music() {
  if (audio.paused) {
    audio_played();
  } else {
    audio_paused();
  }
}

function audio_played() {
  if (audio.volume === 0) {
    alert("volume sound is muted");
  }
  play_pause_btn.innerHTML = ' <i class="fa fa-pause" aria-hidden="true" > </i>';
  $(".player_controll_container").show();
  audio.play();
}

function audio_paused() {
  play_pause_btn.innerHTML = ' <i class="fa fa-play" aria-hidden="true" > </i>';
  audio.pause();
}

var pause = audio.addEventListener("pause", function() {
  audio_paused();
});

audio.addEventListener("play", function() {
  audio_played();
});

document.addEventListener("keydown", e => {
  if (e.key.toLocaleLowerCase() == " ") {
    if (audio.played) {
      audio_paused();
    }
  }

  if (e.key == "ArrowRight") {
    return next_audio();
  }
  if (e.key == "ArrowLeft") {
    return previeus();
  }
  if (e.key == "ArrowUp") {
    return full_screen();
  }
  if (e.key == "ArrowDown") {
    return exit_full_screen();
  }
});

audio.volume = $(".volume_slider").val() / 100;

function changeDuration() {
  let slider_position = audio.duration * (time_changer.value / 100);
  audio.currentTime = slider_position;
  root.style.setProperty("--slider_width", slider_position);
}

setInterval(function changePosition() {
  let position = 0;

  if (!isNaN(audio.duration)) {
    position = audio.currentTime * (100 / audio.duration);
    time_changer.value = position;
    root.style.setProperty("--slider_width", "" + time_changer.value + "%");
  }
}, 10);

function volumeChange(volume_value) {
  audio.volume = volume_value / 100;
  $(".muted_btn").html('<i class="fa fa-fa fa-volume-up" aria-hidden="true"> </i>');
  $(".volume_slider").css("opacity", "1");

  if (audio.volume === 0) {
    audio.volume = 0;
    $(".muted_btn").html('<i class="fa fa-fa fa-volume-off" aria-hidden="true"> </i>');
    $(".volume_slider").val(0);
  }
}

function aside_bar() {
  $("aside").toggle();
}

//------------------------------------------------

function menu() {
  $(".menus").slideToggle(200);
}

function follow(artist_id, artist_name) {
  $.post(
    "pages",
    {
      artist_id: artist_id,
      follow: null
    },
    function() {
      artistPage(artist_id, " following");
    }
  );
}

function add_like_song() {
  show_toest("Added to Liked Songs.", succsus_icon);
}

function remove_like_song(music_id, my_id) {
  show_toest("Removed from Liked Songs.", succsus_icon);
  like_song(my_id);
}

function profile_editor() {
  $(".editor_container").toggle();
  $(".account_info").hide();
  $(".change_password").hide();
}

function account_info_editor() {
  $(".account_info").slideToggle(50);
  $(".change_password").hide();
  $(".change_theme").hide();
}

function change_password_editor() {
  $(".change_password").slideToggle(50);
  $(".account_info").hide();
  $(".change_theme").hide();
}

function change_theme_editor() {
  $(".change_theme").slideToggle(50);
  $(".account_info").hide();
  $(".change_password").hide();
}

function change_account() {
  var user_name = $("#user_name").val();
  var user_email = $("#user_email").val();

  $.post(
    "pages",
    {
      change_account: "",
      user_name: user_name,
      user_email: user_email
    },

    function(data) {
      $(".account_error").html(data);
      show_toest(data, "account");
    }
  );
}
document.addEventListener("keydown", e => {
  // if (e.key.toLocaleLowerCase() == ) {
  //     if (audio.played) {
  //         audio_paused();
  //     }
  // }
  // if (e.key == "ArrowRight") {
  //     return nextAudio();
  // }
  // if (e.key == "ArrowLeft") {
  //     return previeus();
  // }
  // if (e.key == "ArrowUp") {
  //     return full_screen();
  // }
  // if (e.key == "ArrowDown") {
  //     return exit_full_screen();
  // }
});

function change_passwords() {
  var old_password = $("#old_password").val();
  var new_password = $("#new_password").val();
  var password_conf = $("#confirm_password").val();
  if (old_password === "") {
    $(".pass_error").html(" <span class='text_error'> old password is empty </span> ");
    show_toest("old password is empty", "password: ");
  } else {
    if (new_password === "") {
      $(".pass_error").html("<span class='text_error'>new password is empty</span>");
      show_toest("new password is empty", "password: ");
    } else {
      if (new_password.length > 6) {
        $(".pass_error").html(" <span class='text_error'> Password must be at least 6 characters long.  </span>");
        show_toest("Password must be at least 6 characters long.", "password: ");
      }
      if (password_conf === "") {
        $(".pass_error").html(" <span class='text_error'> password confirm is empty </span>");
      } else {
        if (new_password === password_conf) {
          $.post(
            "pages",
            {
              old_password: old_password,
              new_password: new_password
            },
            function(data) {
              $(".pass_error").html(data);

              show_toest(data, '<i class="fa fa-pasword"></i>');
            }
          );
        } else {
          $(".pass_error").html("<span class='text_error'> Password does not match </span>");
        }
      }
    }
  }
}

function checked_image(from_input) {
  var profile_image_pre = document.querySelector(".profile_image_pre");
  var img_changeer_btn = document.querySelector(".img_changeer_btn");
  profile_image_pre.src = URL.createObjectURL(from_input.files[0]);
  img_changeer_btn.style.display = "block";

  $(".user_page").css("background", " url('" + URL.createObjectURL(from_input.files[0]) + "') ");
  $(".user_page").css("background-position", "center");
  $(".user_page").css("background-size", "cover");
  $(".user_page").css("background-repeat", "no-repeat");
  openProfile();
}

var edit_artist_name = document.querySelector(".edit_artist_name");
var edit_music_title = document.querySelector(".edit_music_title");
var edit_music_image = document.querySelector(".edit_music_image");
var edit_pre_albem_art = document.querySelector(".edit_pre_albem_art");
var edit_music_id = document.querySelector(".edit_music_id");

function music_editor(data) {
  $(".music_editor_container").toggle();

  var music_artist = data.getAttribute("data-music_artist");
  var music_title = data.getAttribute("data-music_title");
  var music_albem_art = data.getAttribute("data-music_image");
  var music_edit_id = data.getAttribute("data-music_id");
  var edit_artist_name = document.querySelector(".edit_artist_name");
  var edit_music_title = document.querySelector(".edit_music_title");
  var edit_music_image = document.querySelector(".edit_music_image");
  var edit_pre_albem_art = document.querySelector(".edit_pre_albem_art");
  var edit_music_id = document.querySelector(".edit_music_id");
  edit_artist_name.value = music_artist;
  edit_music_title.value = music_title;
  edit_music_image.src = "assets/albem_arts/" + music_albem_art + "";
  edit_pre_albem_art.value = music_albem_art;
  edit_music_id.value = music_edit_id;
}

function close_music_editor() {
  $(".music_editor_container").toggle();
}

function checked_albem_art(albem_art) {
  document.querySelector(".edit_music_image").src = URL.createObjectURL(albem_art.files[0]);
}

function controll_resize() {
  $(".player_controll").toggle();
}

function pop_alert(text, bgc) {
  var pop_container = document.querySelector(".pop_container");
  var pop_text = document.getElementById("pop_text");
  pop_text.innerHTML = text;
  pop_container.style.display = "flex";
  pop_container.style.background = bgc;
  setInterval(function() {
    pop_container.style.display = "none";
  }, 7000);
}

// aler alert
function delete_music(card) {
  var delete_container = document.querySelector(".delete_container");
  var delete_music_name = document.querySelector(".delete_music_name");
  var delete_music_title = document.querySelector(".delete_music_title");
  var delete_music_image = document.querySelector(".delete_music_image");
  var delete_music_id = document.querySelector(".delete_music_id");

  delete_container.style.display = "flex";

  var music_name = card.getAttribute("data-music_name");
  var music_title = card.getAttribute("data-music_title");
  var music_image = card.getAttribute("data-music_image");
  var music_id = card.getAttribute("data-music_id");

  delete_music_name.innerHTML = music_name;
  delete_music_title.innerHTML = music_title;
  delete_music_image.src = "assets/albem_arts/" + music_image + "";
  delete_music_id.value = music_id;
}

function close_delete_dialog() {
  var delete_container = document.querySelector(".delete_container");
  delete_container.style.display = "none";
}

// Define icon classes for success and error messages.
var error_icon = `<i class="fa fa-times error_toast" aria-hidden="true"></i>`;
var succsus_icon = ` <i class="fa fa-check success_toast" aria-hidden="true"></i>`;
// Function to show toast messages.
function show_toest(msg, icons) {
  var toast_cont = document.querySelector(".toast_cont");

  var toast = document.createElement("div");
  toast.style.transform = "translateX(0%)";

  toast.innerHTML = icons + msg;

  toast.classList.add("toast");
  toast_cont.appendChild(toast);

  setTimeout(function() {
    toast.remove();
  }, 4000);
}

var dark = sessionStorage.getItem("dark");

if (dark) {
  var dark = sessionStorage.getItem("dark");
} else {
  dark = sessionStorage.setItem("dark", false);
}
var root = document.documentElement;

function dark_mode() {
  if (dark === "false") {
    root.style.setProperty("--black_90", "#b6b6b6");
    root.style.setProperty("--black_80", "#d6d6d6");
    root.style.setProperty("--black_50", "#d6d6d6");
    root.style.setProperty("--white_100", "#000000");
    root.style.setProperty("--white_95", "#181818ef");
    root.style.setProperty("--white_80", "#333333e8");
    root.style.setProperty("--white_50", "#31313193");
    root.style.setProperty("--opacity_90_white", "#3131316e");
    root.style.setProperty("--text_color", "#161616");
    root.style.setProperty("--text_color_innr", "#ffffff");
    dark = sessionStorage.setItem("dark", "true");
  } else {
    root.style.setProperty("--black_90", "#555555");
    root.style.setProperty("--black_80", "#212121");
    root.style.setProperty("--black_50", "#0f0f0f");
    root.style.setProperty("--white_100", "#fff");
    root.style.setProperty("--white_95", "#181818ef");
    root.style.setProperty("--white_80", "#333333e8");
    root.style.setProperty("--white_50", "#31313193");
    root.style.setProperty("--opacity_90_white", "#ffffff2e");
    root.style.setProperty("--text_color", "#d4d4d4");
    root.style.setProperty("--text_color_innr", "#d4d4d4");
    dark = sessionStorage.setItem("dark", "false");
  }
}
