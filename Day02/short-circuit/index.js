//short-circuit (단축평가)
// ||(or), &&(and)

// ||
// const nickname = window.prompt("닉네임을 입력하십시오");
// const guest = nickname || "guest";
// window.alert(`${guest} 님 환영합니다`);

// &&
const pw = +window.prompt("비밀번호 입력");
pw == 1111 && window.alert(`문이 열렸습니다.`);
