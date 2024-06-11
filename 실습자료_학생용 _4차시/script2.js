//실습 2-1 : 아래 유저 배열을 유저 객체로 변경한다.
// key는 유저의 이름, value는 to-do list 배열로 설정한다.
//ex) key: kim, value: ["운동하기", "아침 식사 하기"]   
/* ************************************************************************************ */
// 기존 코드를 수정해 주세요.
let users = ["김상협", "이용주"];
/* ************************************************************************************ */

//currentUser는 전역에서 사용되므로 함수 밖에 선언
let currentUser;

//실습 2-2 : 아래 코드를 login() 함수로 정리한다.
/* ************************************************************************************ */
// 기존 코드를 수정해 주세요.
currentUser = prompt("Username을 입력해 주세요!");

let isnew = true;
for (existing of users) {
    // users 객체로 만들었다는 것 주의!!
    if (existing === currentUser) isnew = false;
}

if (isnew) {
    alert(`${currentUser}님 처음 접속 하신 것을 환영합니다.`);
} else {
    alert(`${currentUser}님 다시 접속 하신 것을 환영합니다.`);
}
/* ************************************************************************************ */

//실습 2-3 : 현재 접속한 유저의 to-do list를 콘솔에 출력하는 showList() 함수를 만든다.
/* ************************************************************************************ */
// 여기에 작성해 주세요.

/* ************************************************************************************ */

//실습 2-4 : 로그아웃 메시지를 콘솔에 출력하고 로그아웃 하는 logout() 함수를 만든다.
//ex) 로그아웃 메시지:  로그아웃 되었습니다.
/* ************************************************************************************ */
// 여기에 작성해 주세요.

/* ************************************************************************************ */

login(); //시작할때 함수 호출

//명령어 프롬프트가 list, logout을 인식 할 수 있도록 수정
while (true) {
    let command = prompt("무엇을 도와드릴까요? (press: Q to exit)");
    if (command === "Q" || command == "q") break;
    else if (command === "list") showList();
    else if (command === "logout") logout();
}
