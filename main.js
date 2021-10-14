//쿠키에서 popup=done이라는 문자열의 순서값을 저장
//해당 문자자체가 없으면 isCookie변수에는 -1 반환
//isCookie가 -1이면 쿠키가 현재 없는 것임
var isCookie = document.cookie.indexOf("popup=done");



$("#popup .close").on("click",function(e){
    e.preventDefault();

    //체크가 되어있는지 확인하여 변수에 저장
    var isChecked = $("#popup").find("input[type=checkbox]").is(":checked");

    //체크가 되어 있으면 setCookie 함수 실행
    if(isChecked) setCookie(1);

    $("#popup").hide();
});

//쿠키 생성 함수 정의
//해당 함수가 실행되는 날짜에서 인수로 받은 날짜만큼 유효기간 설정
function setCookie(time){
    var today = new Date();
    var date = today.getDate();

    today.setDate(date + time);

    var dudate = today.toGMTString();

    //쿠키 생성 코드
    document.cookie ="popup=done; expires="+duedate;
}