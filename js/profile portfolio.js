;(function(window,document,$,undefined){

     var profile = {
        init:       function(){
            var that = this;

                that.headerFn();
                that.section01Fn();
                that.section02Fn();
                that.section03Fn();
                that.section04_01Fn();
                that.section04_02Fn();
                that.section05Fn();
                that.section06Fn();
                that.section07Fn();
                that.section08Fn();
                that.section09Fn();
                that.section10Fn();
                that.footerFn();

        },
        headerFn:   function(){

            var window_ = $(window);
            var smoothBtn = $('.smooth-btn'); 
            var htmlBody = $('html,body');
            var mobileMenu = $('#header .mobile-menu');
            var mobileBtn = $('#header .mobile-btn');
            var header = $('#header');
            
            var winW = $(window).width();
            var url = null;  
            var t=0;  

                //스무스 스크롤링
                smoothBtn.on({
                    click:  function(event){
                        var that = $(this);

                        event.preventDefault();
                        url = that.attr('href');
                        htmlBody.stop().animate({scrollTop: $( url ).offset().top  }, 600);
                        t=0; 
                        mobileMenu.stop().animate({right:-100+'%'},0); 

                        mobileBtn.removeClass('addClose');                        
                    }
                });

                window_.scroll(function(){
                    if( window_.scrollTop() >= 30 ) {
                        header.addClass('addMobile');
                    }
                    else{
                        header.removeClass('addMobile');
                    }
                });


                window_.resize(function(){
                    winW = window_.width();                    
                    if( winW>990 ){
                        t=0;
                        mobileBtn.removeClass('addClose');
                        mobileMenu.stop().animate({right:-100+'%'},400);
                    }
                });

                //모바일버튼
                // mobileBtn.on({
                //     click:  function(event){
                //         var that = $(this);

                //         event.preventDefault();

                //         that.toggleClass('addClose');
                //         if(t==0){
                //             t=1;
                //             mobileMenu.stop().animate({right:0},400);
                //         }
                //         else{
                //             t=0;
                //             mobileMenu.stop().animate({right:-100+'%'},400);
                //         }
                //     }
                // });


        //mousewheel 스크롤 다운 = 헤더없어짐 / 스크롤 업 = 헤더 검정배경으로 생김
            $("html,body").on("mousewheel DOMMouseScroll", function(event){
                event.preventDefault();
                if(event.detail){ 
                    _delta = event.detail*(-1*40);   
                }
                else{
                    _delta = event.originalEvent.wheelDelta;
                }
                if(_delta<0){
                    $("#header").stop().css({top:-100});
                }
                else{
                    $("#header").stop().css({top:0});
                    
                }
            })
    
            $(window).scroll(function(){
                if( $(this).scrollTop() > $("#header").innerHeight() ){
                    $("#header").addClass("addMousewheel");
                }
                else{
                    $("#header").removeClass("addMousewheel");
                }
            });

            
        //고탑
            $(window).scroll(function(){
                if( $(window).scrollTop() >= 30 ) {
                    $('.goTop').addClass('addGotop');
                }
                else{
                    $('.goTop').removeClass('addGotop');
                }
            });

        //휠이벤트
        var _wheelEvent = $('.wheel-event');
        var _wheelDelta = null;
        var _htmlBody = $('html, body');
        _wheelEvent.each(function(index){
            var _this = $(this);
            _this.on('mousewheel DOMMouseScroll',function(event){
                event.preventDefault();
                
                // if( event.detail ){
                //     _wheelDelta = event.detail*(-1*40);
                // }
                // else{
                //     _wheelDelta = event.originalEvent.wheelDelta;
                // }


                if( event.originalEvent.wheelDelta ){
                    _wheelDelta = event.originalEvent.wheelDelta;
                }
                else{
                    _wheelDelta = event.detail*(-1*40);
                }
                


                if( _wheelDelta < 0 ){ //음수(-120)이면 다음 섹션으로 부드럽게 이동
                    console.log(index);
                    if(index<9){
                        _htmlBody.stop().animate({ scrollTop: _this.next().offset().top },800,'easeInOutSine');
                    }
                }
                else{  //양수(120)이면 이전 섹션으로 부드럽게 이동
                    if(index>0){
                        _htmlBody.stop().animate({ scrollTop: _this.prev().offset().top },800,'easeInOutSine');
                    }
                }

            });
        });


        },
        section01Fn: function(){
            var _win = $(window);
            var section01 = $('#section01');
            var _slide1 = $('#section01 .content-main1 li');

            var imgRate = 0.1;
            var imgRate2 = 0.07;
            var imgRate3 = 0.05;

                section01.on('mousemove',function(e){

                    _slide1.eq(0).stop().animate({top:0+(-e.clientY*imgRate2), left:100+(-e.clientX*imgRate2)},200,'swing');
                    _slide1.eq(1).stop().animate({top:0+(-e.clientY*imgRate3), left:0+(-e.clientX*imgRate3)},200,'swing');
                    _slide1.eq(3).stop().animate({top:100+(-e.clientY*imgRate3), left:0+(-e.clientX*imgRate3)},200,'swing');
                    _slide1.eq(4).stop().animate({top:0+(-e.clientY*imgRate), left:130+(-e.clientX*imgRate)},200,'swing');
                    _slide1.eq(5).stop().animate({top:0+(-e.clientY*imgRate2), left:100+(-e.clientX*imgRate2)},200,'swing');
                    _slide1.eq(6).stop().animate({top:700+(-e.clientY*imgRate2), left:120+(-e.clientX*imgRate2)},200,'swing');
                });

/*                 section01.on('mouseleave',function(e){

                    _slide1.eq(0).stop().animate({top:0+(-e.clientY*0), left:0+(-e.clientX*0)},200,'swing');
                    _slide1.eq(1).stop().animate({top:0+(-e.clientY*0), left:0+(-e.clientX*0)},200,'swing');
                    _slide1.eq(3).stop().animate({top:0+(-e.clientY*0), left:0+(-e.clientX*0)},200,'swing');
                    _slide1.eq(4).stop().animate({top:71.5+(-e.clientY*0), left:0+(-e.clientX*0)},200,'swing');
                    _slide1.eq(5).stop().animate({top:12.5+(-e.clientY*0), left:0+(-e.clientX*0)},200,'swing');
                    _slide1.eq(6).stop().animate({top:391.5+(-e.clientY*0), left:0+(-e.clientX*0)},200,'swing');
                }); */


            // 마우스(cursor)이벤트
            var cursor = document.querySelector('.cursor');
            document.addEventListener('mousemove', function(e){
                cursor.style.cssText = 'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;'; 
            });

        },
        section02Fn: function(){
  
        },
        section03Fn: function(){

        },
        section04_01Fn: function(){
            $(".arrow-btn").on({
                click:  function(e){
                    e.preventDefault();
                    
                    $(this).toggleClass("addUp");
                    $("#section04_02").stop().slideToggle(500);
                }
            });
        },
        section04_02Fn: function(){
   
        },
        section05Fn: function(){

        },
        section06Fn: function(){
            var _win = $(window);
            var _sec04 = $('#section04_01');
            var _sec06 = $('#section06');

                _win.scroll(function(){
                    var that = $(this);
                    if(that.scrollTop() >= _sec04.offset().top){
                        _sec06.addClass('addScroll');
                    }
                    if(that.scrollTop() < _sec04.offset().top){
                        _sec06.removeClass('addScroll');
                    }
                });
        
        },
        section07Fn: function(){
            var _win = $(window);
            var _sec06 = $('#section06');
            var _sec07 = $('#section07');

                _win.scroll(function(){
                    var that = $(this);
                    if(that.scrollTop() >= _sec06.offset().top){
                        _sec07.addClass('addScroll');
                    }
                    if(that.scrollTop() < _sec06.offset().top){
                        _sec07.removeClass('addScroll');
                    }
                });
        },
        section08Fn: function(){
            var _win = $(window);
            var _sec07 = $('#section07');
            var _sec08 = $('#section08');

                _win.scroll(function(){
                    var that = $(this);
                    if(that.scrollTop() >= _sec07.offset().top){
                        _sec08.addClass('addScroll');
                    }
                    if(that.scrollTop() < _sec07.offset().top){
                        _sec08.removeClass('addScroll');
                    }
                });
        },
        section09Fn: function(){
            var _win = $(window);
            var imsi = null;
            var a = [4,5,6,0,1,2,3];
            var _slide = $('#section09 .slide');
            var _slideCon = $('#section09 .slide-container');
            var _nextBtn = $('#section09 .next-btn');
            var _prevBtn = $('#section09 .prev-btn');
            var _slideW = _slide.eq(3).innerWidth();

                setTimeout(resizeFn,100);
                function resizeFn(){
                    _slideW = _slide.eq(3).innerWidth();
                    slide3dMainFn();
                }

                _win.resize(function(){
                    resizeFn();
                });

                _slideCon.swipe({
                    swipeLeft: function(){
                        imsi = a.shift();
                        a.push(imsi);
                        slide3dMainFn();
                    },
                    swipeRight: function(){
                        imsi = a.pop();
                        a.unshift(imsi);
                        slide3dMainFn();
                    }
                });
                        
                _nextBtn.on({
                    click: function(){
                        imsi = a.shift();
                        a.push(imsi);
                        slide3dMainFn();
                    }
                });

                _prevBtn.on({
                    click: function(){
                        imsi = a.pop();
                        a.unshift(imsi);
                        slide3dMainFn();
                    }
                });

                function slide3dMainFn(){
                    
                    _slide.eq(a[0]).css({left:-183.3333+'%'}).fadeIn(1000, function(){
                        $(this).css({zIndex:1,transform:'perspective('+(_slideW*5)+'px) scale(.5) rotateY(0deg) translateZ(-'+(_slideW*0.5)+'px)', opacity:.5});
                        $(this).find('img').css({outlineColor:'rgba(0,0,0, .2)'});
                    });

                    _slide.eq(a[1]).css({left:-150+'%', opacity:1}).fadeIn(1000, function(){
                        $(this).css({zIndex:2,transform:'perspective('+(_slideW*8.33333)+'px) scale(.7) rotateY(-50deg) translateZ(-'+(_slideW*0.33333)+'px)'});
                        $(this).find('img').css({outlineColor:'rgba(0,0,0, .2)'});
                    });

                    _slide.eq(a[2]).css({left:-100+'%', opacity:1}).fadeIn(1000, function(){
                        $(this).css({zIndex:3,transform:'perspective('+(_slideW*10)+'px) scale(.9) rotateY(-70deg) translateZ(-'+(_slideW*0.166666)+'px)'});
                        $(this).find('img').css({outlineColor:'rgba(0,0,0, .2)'});
                    });

                    _slide.eq(a[3]).css({left:0, opacity:1}).fadeIn(1000, function(){
                        $(this).css({zIndex:4,transform:'perspective('+(_slideW*6.66666)+'px) scale(1.1) rotateY(0deg) translateZ('+(_slideW*0.33333)+'px)'});
                        $(this).find('img').css({outlineColor:'rgba(0,0,0, 1)'});
                    });

                    _slide.eq(a[4]).css({left:100+'%', opacity:1}).fadeIn(1000, function(){
                        $(this).css({zIndex:3,transform:'perspective('+(_slideW*10)+'px) scale(.9) rotateY(70deg) translateZ(-'+(_slideW*0.16666)+'px)'});
                        $(this).find('img').css({outlineColor:'rgba(0,0,0, .2)'});
                    });

                    _slide.eq(a[5]).css({left:150+'%', opacity:1}).fadeIn(1000, function(){
                        $(this).css({zIndex:2,transform:'perspective('+(_slideW*8.33333)+'px) scale(.7) rotateY(50deg) translateZ(-'+(_slideW*0.33333)+'px)'});
                        $(this).find('img').css({outlineColor:'rgba(0,0,0, .2)'});
                    });

                    _slide.eq(a[6]).css({left:183.3333+'%'}).fadeIn(1000, function(){
                        $(this).css({zIndex:1,transform:'perspective('+(_slideW*5)+'px) scale(.5) rotateY(0deg) translateZ(-'+(_slideW*0.5)+'px)', opacity:.5});
                        $(this).find('img').css({outlineColor:'rgba(0,0,0, .2)'});
                    });
                }
        },
        section10Fn: function(){

        },
     
        footerFn: function(){

        }

    };

    profile.init(); 


})(window,document,jQuery);