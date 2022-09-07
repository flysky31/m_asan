const elFooter = document.querySelector('footer'); 
const elcon_wrap = document.querySelector('#content_wrap'); 
console.log(elcon_wrap);

//#con_wrap의 높이 구하기 -footer에 fixed를 사용 안할때
let winH = $(window).height();        //열려져있는 화면의 높이
const headerH = $('header').height(); //header의 높이
const footerH = elFooter.offsetHeight; //footer높이(자바스크립트)
console.log(`현재 화면 높이 ${winH} / header의 높이 ${headerH} /  footer의 높이 ${footerH}`);

//#con_wrap의 높이는 화면전체 세로에서 헤더, 푸터 높이를 빼준값
let con_wrap_Height =  winH - (headerH +footerH);
//$('#con_wrap').css({height:con_wrap_Height});
console.log(con_wrap_Height);

elcon_wrap.style.height = `${con_wrap_Height}px`;   //#con_wrap의 높이 지정

window.addEventListener('resize',function(){
  let winH = $(window).height(); 
  let con_wrap_Height =  winH - (headerH +footerH); 
  elcon_wrap.style.height = `${con_wrap_Height}px`;  
})


let open = 0;
//lnb 슬라이드 메뉴
$(".lnb_btn").on('click',function(){
    if(open == 0){    
        $("#wrap").animate({
            left:274
        },400);
        $("#lnb").animate({
            left:0
        });
        $(".cover").css("display","block");
        //find 태그 찾기
        //$("lnb_btn").find("img").attr({"src", "./img/bg_header_lnb_active.png", "alt":"메뉴닫기"});
        $(".lnb_btn a img").attr("src", "./img/bg_header_lnb_active.png");
        $("body").css("overflow","hidden");
        open =1;
    } else {
        $("#wrap").animate({
            left:0
        },400);
        $("#lnb").animate({
            left:-274
        });
        $(".cover").css("display","none");
        $(".lnb_btn a img").attr("src", "./img/bg_header_lnb.png");
        $("body").css("overflow","inherit");
        open = 0;
    }
});


$(".back").on('click',function(){
    history.back();
    return false;
});