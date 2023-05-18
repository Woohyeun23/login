var ip_id;
var ip_pw;
var ip_pw_re;
var ip_user_name;
var ip_email;
var ip_birth_y;
var ip_birth_m;
var ip_birth_d;
var ip_tell_1;
var ip_tell_2;
var ip_tell_3;
var ip_sexes;

var id;
var pw;
var pw_re;
var user_name;
var email;
var birth_y;
var birth_m;
var birth_d;
var tell_1;
var tell_2;
var tell_3;

var sex;
var sexes;

window.onload = function () {
    ip_id = document.getElementById("id");
    ip_pw = document.getElementById("pw");
    ip_pw_re = document.getElementById("pw_re");
    ip_user_name = document.getElementById("user_name");
    ip_email = document.getElementById("email");
    ip_birth_y = document.getElementById("birth_y");
    ip_birth_m = document.getElementById("birth_m");
    ip_birth_d = document.getElementById("birth_d");
    ip_tell_1 = document.getElementById("tell_1");
    ip_tell_2 = document.getElementById("tell_2");
    ip_tell_3 = document.getElementById("tell_3");

    ip_sexes = document.getElementsByName("sex"); // <-이 친구는 getElemental'Name'이다
}

function checkId() {
    if (id.length >= 6 && id.length <= 12) {
        console.log("ok id");
        return true;
    } else {
        console.log("ok id");
        return false;
    }

}


function checkPw() {
    if (pw.length >= 8 && pw.length <= 15) {
        console.log("ok pw");
        return true;
    } else {
        console.log("ok pw");
        return false;
    }

}


function checkPw_re() {
    if (pw_re.length >= 8 && pw_re.length <= 15 ) {
        console.log("ok pw_re");
        return true;
    } else {
        console.log("ok pw_re");
        return false;
    }

}

function checkUserName() {
    if (user_name.length >= 4 && user_name.length <= 12) {
        console.log("ok UserName");
        return true;
    } else {
        console.log("ok UserName");
        return false;
    }

}

function checkEmail() {
    if (email.length >= 4 && email.length <= 12) {
        console.log("ok email");
        return true;
    } else {
        console.log("ok email");
        return false;
    }

}

function checkMatch() {
    if (pw_re == pw) {
        console.log("ok match");
        return true;
    } else {
        console.log("no match");
        alert("비밀번호를 다시 확인해 주세요");
        return false;
    }
}




function check2() {
    id = ip_id.value;
    pw = ip_pw.value;
    pw_re = ip_pw_re.value;
    user_name = ip_user_name.value;
    email = ip_email.value;
    birth_y = ip_birth_y.value;
    birth_m = ip_birth_m.value;
    birth_d = ip_birth_d.value;
    tell_1 = ip_tell_1.value;
    tell_2 = ip_tell_2.value;
    tell_3 = ip_tell_3.value;


    for (i = 0; i < ip_sexes.length; i++) {
        if (ip_sexes[i].checked == true) {
            sex = ip_sexes[i].value
        }
    }

    var userinfo =
        "id : " + id
        + "\npw : " + pw
        + "\npw_re : " + pw_re
        + "\nuser_name" + user_name
        + "\nemali : " + email
        + "\nbirth_y : " + birth_y
        + "\nbirth_m : " + birth_m
        + "\nbirth_d : " + birth_d
        + "\ntell_1 : " + tell_1
        + "\ntell_2 : " + tell_2
        + "\ntell_3 : " + tell_3
        + "\nsex : " + sex

            if(checkId() == false){
                alert("아이디를 다시 적어주세요");
            }

            if(checkPw() == false){
                alert("비밀번호를 다시 적어주세요");
            }

            if(checkPw_re() == false){
                alert("재확인 비밀번호를 다시 적어주세요");
            }

            if(checkUserName() == false){
                alert("닉네임를 다시 적어주세요");
            }

            if(checkMatch() == false){
                alert("두 비밀번호가 서로 다릅니다");
            }


            if (checkId() && checkPw() && checkPw_re() && checkUserName() && checkEmail()&&checkMatch()) {
                alert(userinfo);
                alert("회원가입 완료!");
            }  else{
                alert("기입한 정보를 다시 확인 하여 주세요");
            }
        
            
    }
