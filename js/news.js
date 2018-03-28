window.onload=function(){
	//0. 首页banner轮播
    new Swiper('.index_ban .swiper-container', {
	      spaceBetween: 30,
	      loop:true,
	      effect: 'fade',
	      pagination: {
	        el: '.index_ban .swiper-pagination',
	        clickable: true,
	      },
	      navigation: {
	        nextEl: '.index_ban .swiper-button-next',
	        prevEl: '.index_ban .swiper-button-prev',
	      },
	      autoplay:{
	      	delay:1500
	      }
	    });
	//1. banner轮播
    new Swiper('.new_ban .swiper-container', {
	      spaceBetween: 30,
	      loop:true,
	      effect: 'fade',
	      pagination: {
	        el: '.new_ban .swiper-pagination',
	        clickable: true,
	      },
	      autoplay:{
	      	delay:1500
	      }
	    });
	//2. 公司咨询  默认轮播
    new Swiper('.infor .swiper-container', {
      navigation: {
        nextEl: '.infor .swiper-button-next',
        prevEl: '.infor .swiper-button-prev',
      }
    });
	//3. 品质与保障 sliderThree 三图轮播
    new Swiper('.prompt .swiper-container', {
	      slidesPerView: 3,
	      spaceBetween: 30,
	      slidesPerGroup: 3,
	      loop: true,
	      loopFillGroupWithBlank: true,
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      navigation: {
	        nextEl: '.prompt .swiper-button-next',
	        prevEl: '.prompt .swiper-button-prev',
	      },
    });
    //4. 访谈合作  默认轮播
    new Swiper('.talk .swiper-container', {
      navigation: {
        nextEl: '.talk .swiper-button-next',
        prevEl: '.talk .swiper-button-prev',
      }
    });

	//5. 行业动态 sliderThree 三图轮播
    new Swiper('.reference .swiper-container', {
	      slidesPerView: 3,
	      spaceBetween: 30,
	      slidesPerGroup: 3,
	      loop: true,
	      loopFillGroupWithBlank: true,
	      pagination: {
	        el: '.reference .swiper-pagination',
	        clickable: true,
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
    });

  
}
					    


