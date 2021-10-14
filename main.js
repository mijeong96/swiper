//쿠키에서 popup=done이라는 문자열의 순서값을 저장
//해당 문자자체가 없으면 isCookie변수에는 -1 반환
//isCookie가 -1이면 쿠키가 현재 없는 것임
var isCookie = document.cookie.indexOf("popup=done");

//처음 로딩시에 쿠키가 없으면 팝업을 보이고
if(isCookie == -1){
    $("#popup").show();
    console.log("쿠키없음");
}else{ //쿠키가 있으면 팝업을 숨김
    $("#popup").hide();
    console.log("쿠키있음");
}

//del버튼을 클릭하면 유효기간을 0으로해서 클릭 즉시 유효기간 만료로 쿠키제거
$(".del").on("click",function(){
    setCookie(0);
    alert("쿠키삭제완료");
});

//view버튼 클릭하여 쿠키가 있는지 체크
$(".view").on("click",function(){
    console.log(document.cookie);
});

//팝업 닫기 버튼을 클릭했을 때
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

    var duedate = today.toGMTString();

    //쿠키 생성 코드
    document.cookie ="popup=done; expires="+duedate;
}