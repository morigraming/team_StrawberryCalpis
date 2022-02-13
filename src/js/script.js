
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.c-page-top-btn');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // ヘッダー
  $(window).on('scroll', function () {
    if ($('.slider1').height() < $(this).scrollTop()) {
      $('.header').css('background', 'rgba(0, 0, 0, 1)');
    } else {
      $('.header').css('background', 'rgba(0 , 0, 0, .5)');
    }
  });

  // ハンバーガーメニュー
  $('.c-burger-btn').on('click', function () {
    $(this).toggleClass('js-close');
    $('.menu').toggleClass('js-open');
  });

  //ドロワーメニュー
  $('.navbar_toggle').on('click', function () {
    $(this).toggleClass('js-open');
    $('.menu').toggleClass('js-open');
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  // ブログページのタブ
  $('.c-tab__item').on('click', function () {
    $('.c-tab__item.is-active').removeClass('is-active');
    $(this).addClass('is-active');
  });
  
  //ページネーション01
  $('.c-pagenation01__item').on('click', function () {
    $('.c-pagenation01__item.current').removeClass('current');
    $(this).addClass('current');
  });

  // トップページ製作実績スライダー(Swiper.js)
  let topSwiper = new Swiper ('.p-top-slider__swiper', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  //お問合せフォーム

  

  










});


//Ｓｗｉｐｅｒセッティング

 // メインビュースライダー設定
let mySwiper = new Swiper('.p-mainview__slider', {
  // オプションの設定
  loop: true,  //ループ可能（ループモードを有効に）
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

});


// 制作実績スライダー設定
//メイン
var main = new Swiper('.p-worksslider__main', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 8, //スライドの枚数と同じ値を指定
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,

  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//サムネイル
var thumbnail = new Swiper('.p-worksslider__thumbnail', {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  loopedSlides: 8,
  centeredSlides: true,
  slideToClickedSlide: true,
  breakpoints: {
    768: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
  },
});

//4系～
//メインとサムネイルを紐づける
main.controller.control = thumbnail;
thumbnail.controller.control = main;

