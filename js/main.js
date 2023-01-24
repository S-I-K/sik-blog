/* a 태그 기본옵션 제거 */
let a = document.querySelectorAll('a');
for(let i=0; i<a.length; i++) {
    a[i].addEventListener("click", (e)=>{
        e.preventDefault();
    });
}

$(()=>{
    /* 코드 이게 최선인가 리펙토링 필요해보임 */
    let toggleWrap = $('.toggle-wrap');
    toggleWrap.click(function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('.license').show();
            $('.education').hide();
        }else{
            $('.education').show();
            $('.license').hide();
        }
    });
    /* swiper.js: slide */
    var work = new Swiper("#work", {
        slidesPerView: 'auto',
        spaceBetween: 40,
        /* autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }, */
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    /* 숫자 증가 애니메이션 */
    $('.progress').each(function(){
        /* 각각의 data-rate 옵션을 변수에 저장 */
        let $this = $(this),
            dataRate = $this.attr('data-rate');

        /* animate 함수를 이용해서 숫자가 차례차례 올라가게 함 */
        /* 임의의 함수 rate의 초기값을 정해주고 rate가 목표치까지 증가 */
        $({rate: $this.text()}).animate({rate: dataRate}, {
            duration: 3000,
            easing: 'linear',
            /* step이라는 기명함수로 각각의 숫자($this)에 목표치 숫자를 대입하여 UI에 표현 */
            step: function(){
                $this.text(Math.ceil(this.rate)+"%");
            }
        })
    });

    $('.skill-box').scrollToGiveClass({
        class: "action",
        baseline: "middle",
        add: 300,
    });

    $('.gnb > li > a').click(function(){
        $('html,body').stop().animate({scrollTop:$(this.hash).offset().top}, {
            duration: 800,
            easing: 'easeInOutQuad'
        });
    });
});
