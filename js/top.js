$('.js-gallery_slider').slick({
  infinite: true,
  speed: 6000,
  autoplaySpeed: 0,
  slidesToShow: 4,
  cssEase: "linear",
  swipe: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  arrows: false,
  autoplay: true,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

$(function () {
  $(window).scroll(function () {
    $('.fade').each(function () {
      const targetElement = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight) {
        $(this).addClass('view');
      }
    });
  });
});