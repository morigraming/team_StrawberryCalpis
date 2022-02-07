"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  var topBtn = $('.c-page-top-btn');
  topBtn.hide(); // ボタンの表示設定

  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  }); // ボタンをクリックしたらスクロールして上に戻る

  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  }); // ヘッダー

  $(window).on('scroll', function () {
    if ($('.slider1').height() < $(this).scrollTop()) {
      $('.header').css('background', 'rgba(0, 0, 0, 1)');
    } else {
      $('.header').css('background', 'rgba(0 , 0, 0, .5)');
    }
  }); // ハンバーガーメニュー

  $('.c-burger-btn').on('click', function () {
    $(this).toggleClass('js-close');
    $('.menu').toggleClass('js-open');
  }); //ドロワーメニュー

  $('.navbar_toggle').on('click', function () {
    $(this).toggleClass('js-open');
    $('.menu').toggleClass('js-open');
  }); // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    var time = 400;
    var header = $('header').innerHeight();
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top - header;
    $('html,body').animate({
      scrollTop: targetY
    }, time, 'swing');
    return false;
  }); // ブログページのタブ

  $('.c-tab__item').on('click', function () {
    $('.c-tab__item.is-active').removeClass('is-active');
    $(this).addClass('is-active');
  }); //ページネーション01

  $('.c-pagenation01__item').on('click', function () {
    $('.c-pagenation01__item.current').removeClass('current');
    $(this).addClass('current');
  });
});