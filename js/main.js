/* a 태그 기본옵션 제거 */
let a = document.querySelectorAll('a');
for(let i=0; i<a.length; i++) {
    a[i].addEventListener("click", (e)=>{
        e.preventDefault();
    });
}

/* 코드 이게 최선인가 리펙토링 필요해보임 */
$(()=>{
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
});