const LOGIN_ID = "cat123";
const LOGIN_PW =  "C1234";

var input_id;
var input_pw;
var loginBox
window.onload = function(){
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    loginBox = document.getElementById("login");
}

function login(){
    // alert("id : "+input_id.value+" pw : "+ input_pw.value);


    var local_id = input_id.value;
    var local_pw = input_pw.value;

    function notice(){
        loginBox.innerHTML = "<p>" + local_id + "회원님 반갑습니다</p>";
    }

    if(local_id == LOGIN_ID && local_pw == LOGIN_PW){
        notice();
    } else {
        alert("로그인 실패");
    }
}


function now_time(){
   
    var nowClock = new Date();
   clock.innerHTML = nowClock.toLocaleTimeString();
   
    
}

var clock;
window.onload = function(){
    clock = document.getElementById("time")
    
    setInterval(now_time, 1000);

}



// interval = setInterval(now_time, 1000); //setInterval(now_time, 1000);  <-- 각각 함수 이름과 밀리터리 초 (1초의 1000\1)

// function now_time(){
//     const date = new Date();
//     const hour = date.getHours();
//     const min = date.getMinutes();
//     const sec = date.getSeconds();
//     var time = hour + min + sec;
//     clock.textContent = time;
// }

