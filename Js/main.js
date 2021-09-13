
  //제일 밑에 있는 "페이지 위로가기"버튼
  $('.backTop').click(function(){
    $('html, body').animate({scrollTop:0},1000,'swing')
  });

  var $menuItem = $('#nav li a'); //메뉴 버튼을 변수로

  $menuItem.click(function(){
    
    $(this).addClass('on');
    $(this).parent().siblings().find('a').removeClass('on'); 

    var el = $(this).attr('href'); //클릭한 a의 속성 href의 속성값을 변수에 넣는다.
    var $el = $(el);
    var headerH = $('header').height();  //header의 세로길이를 변수에 넣는다
    //console.log($el);

    scrollTo($el,headerH);
  });

  //메인슬라이더
$('.sliders').slick({
  autoplay: true,        //자동 슬라이드
  autoplaySpeed: 4000,   //이미지 전환 후 유지되는 속도(1초=1000)
  arrows:true,          //양 옆에 화살표(prev/next)
  dots:true,             //페이지버튼
  //fade:true,           //투명도로 전환        
 // easing:'swing',      
 initialSlide:2,          //처음 시작하는 이미지(0부터 순서를 센다)
 pauseOnFocus:true,      //트루일때 마우스를 클릭하면 멈춤 
 pauseOnHover:true,      //트루일때 마우스를 올로놓으면 멈춤
 speed:500,               //애니메이션(이미지 전환되는 속도)
 //vertical:true          //세로슬라이드
 swipe:true              //직접 이미지를 눌러서 움직이는 기능

});

//슬라이더-stop/play 
$('.sliderBtn').click(function(){
   // $(this).toggleClass('on'); //stop/play이미지 전환(if사용 안할때)


  if( !($(this).hasClass('on')) ){
    $('.sliders').slick('slickPause');
    $(this).addClass('on');
  } else {
    $('.sliders').slick('slickPlay');
    $(this).removeClass('on');
  
  }
});


  function scrollTo(element,hh){
    var offsetTop = element.offset().top;  //엘리먼트의 top에서 부터의 위치값
    console.log('offset의 값은?' + offsetTop);
    var scrollTotal = offsetTop-hh;       //엘리먼트의 위치값에서 hh를 빼준다

    $('html, body').animate({scrollTop:scrollTotal},1000,'swing');



  }


