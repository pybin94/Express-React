const loginSubmit = async () => {
    let userId = document.querySelector("#userId");
    let userPw = document.querySelector("#userPw");

    let postURL = "/login"
    let params = {
        "user_id" : userId.value,
        "user_pw" : userPw.value
    }

    let option = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(params)
    }

    if(userId.value == "") return alert("아이디를 입력해주세요.");
    if(userPw.value == "") return alert("패스워드를 입력해주세요.");

    try {
        const response = await fetch(postURL, option) 
        const res = await response.json()
        
        if(res.status == "fail") {
            alert("아이디 또는 패스워드를 잘못 입력했습니다.");
            userId.value = "";
            userPw.value = "";
        } else {
            window.location.replace(res.redirectUrl);
        }
    } catch (error) {
        alert("관리자에게 문의주세요", error.message);
    };
};

(()=>{
    window.onkeydown = (event) => {
        if(event.keyCode == 13){
            loginSubmit()
        };
    };
})()