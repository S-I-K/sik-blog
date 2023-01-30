/* a 태그 기본옵션 제거 */
/* let a = document.querySelectorAll("a");
for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", (e) => {
    e.preventDefault();
  });
} */
/* typing animation */
const $comment = document.querySelector('.comment');
// 글자 모음
const letters = [
  "상상한 것을 그래픽으로 표현하는 디자이너",
  "화면을 스케치북처럼 다룰 줄 아는 디자이너",
  "프론트엔드를 꿈꾸는 디자이너"
];
// 글자 입력 속도
const speed = 100;
let i = 0;
// 타이핑 효과
const typing = async () => {  
  const letter = letters[i].split("");
  while (letter.length) {
    await wait(speed);
    $comment.innerHTML += letter.shift(); 
  }
  // 잠시 대기
  await wait(800);
  // 지우는 효과
  remove();
}
// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");
  while (letter.length) {
    await wait(speed);
    
    letter.pop();
    $comment.innerHTML = letter.join(""); 
  }
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i+1] ? 0 : i + 1;
  typing();
}
// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}
// 초기 실행
setTimeout(typing, 1500);

/* jquery */
$(() => {
  /* toggle switch: 리펙토링 필요해보임 */
  let toggleWrap = $(".toggle-wrap");
  toggleWrap.click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".license").show();
      $('.license-toggle-txt').css({color: '#3fa9e8'});
      $(".education").hide();
      $('.education-toggle-txt').css({color: '#bcbcbc'});
    } else {
      $(".education").show();
      $('.education-toggle-txt').css({color: '#3fa9e8'});
      $(".license").hide();
      $('.license-toggle-txt').css({color: '#bcbcbc'});
    }
  });

  /* how to use animate();
    $('.box').animate({속성:값, 속성:값}, duration, easing, func(){});

    $('.box').animate({속성: 값, ...}, {
      duration: ,
      easing: ,
      complate: function(){...} //끝나고 할 일
      or
      prgoress: function(){...} //진행중에 할 일
    });
  */
  
  let executed = false; //false 일때만 scroll event 실행
  $(window).scroll(function(){
    let threshold = $('.skill').offset().top - 300 ;
    // console.log("현재 skill section의 위치값: "+threshold);
    // console.log("현재 scroll: "+$(window).scrollTop());
    if(!executed){
      if($(window).scrollTop() >= threshold){
        $(".progress").each(function () {
          /* 각각의 data-rate 옵션을 변수에 저장 */
          let $this = $(this),
              progressRate = $this.attr("data-rate");
          /* animate 함수를 이용해서 숫자가 차례차례 올라가게 함 */
          /* 임의의 함수 rate의 초기값을 정해주고 rate가 목표치까지 증가 */
          $({ rate: $this.text() }).animate({rate: progressRate},{
              duration: 2000,
              easing: "linear",
              /* step이라는 기명함수로 각각의 숫자($this)에 목표치 숫자를 대입하여 UI에 표현 */
              step: function () {
                $this.text(Math.ceil(this.rate) + "%");
              },
            }
          );
        });
        executed = true;
      }
    }else if($(window).scrollTop() < threshold){ //window scroll value가 threshold 보다 작을 때는 애니메이션 재실행.
      executed = false;
    }//end: executed if
  });




  /* header global navigation bar function */
  $(".gnb > li > a").click(function (e) {
    e.preventDefault();
    $("html,body")
      .stop()
      .animate(
        { scrollTop: $(this.hash).offset().top },
        {
          duration: 800,
          easing: "easeInOutQuad",
        }
      );
  });

  /* swiper.js: slide */
  var work = new Swiper("#work", {
    slidesPerView: "auto",
    spaceBetween: 40,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* scrollToGiveClass */
  /* about */
  $(".about").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 100,
  });
  /* hobby */
  $(".hobby").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 100,
  });
  /* skill */
  $(".skill").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 100,
  });
  /* work */
  $(".work").scrollToGiveClass({
    class: "scrolled",
    baseline: "middle",
    add: 100,
  });
});
