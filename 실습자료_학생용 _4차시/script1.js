// 기존 유저를 저장하고 있는 배열
let users = ["김상협", "이용주"];

// 현재 접속한 유저를 입력받는다.
let currentUser = prompt("Username을 입력해 주세요!");

// 새로운 유저인지 확인한다.
let isnew = true;

//실습 1-1 : users 배열에 currentUser가 있는지 확인하고 있으면 isnew를 false로 변경한다.
/* ************************************************************************************ */
if (users.includes(currentUser)) {
    isnew = false;
}

/* ************************************************************************************ */

//실습 1-2 :  isnew의 값에 따라 다른 팝업 메시지를 출력한다.
// ex) 신규 유저: "박성태님 처음 접속 하신 것을 환영합니다."
// ex) 기존 유저: "김상협님 다시 접속 하신 것을 환영합니다."
/* ************************************************************************************ */
if (isnew) {
    alert(currentUser + "님 처음 접속 하신 것을 환영합니다.");
} else {
    alert(currentUser + "님 다시 접속 하신 것을 환영합니다.");
}

/* ************************************************************************************ */

//실습 1-3 : Q를 입력할 때까지 계속해서 prompt 메시지를 띄운다.
// ex) prompt 메시지: 무엇을 도와드릴까요? (press: Q to exit)
/* ************************************************************************************ */
/* ************************************************************************************ */
// to-do list를 관리할 객체
let todoLists = {
    "김상협": ["책 읽기", "운동하기"],
    "이용주": ["코딩 연습", "영화 보기"]
};

// 현재 접속한 유저의 to-do list를 출력하는 함수
function showTodoList() {
    console.log("현재 유저:", currentUser); // 현재 유저 로그 출력
    if (todoLists[currentUser]) {
        console.log(currentUser + "님의 할 일 목록:");
        todoLists[currentUser].forEach((todo, index) => {
            console.log((index + 1) + ". " + todo);
        });
    } else {
        console.log("할 일 목록이 없습니다.");
    }
}

// to-do list에 항목을 추가하는 함수
function addTodoItem(item) {
    if (!todoLists[currentUser]) {
        todoLists[currentUser] = [];
    }
    todoLists[currentUser].push(item);
    console.log(item + " 항목이 추가되었습니다.");
}

// to-do list에서 항목을 제거하는 함수
function removeTodoItem(index) {
    if (todoLists[currentUser] && todoLists[currentUser].length >= index) {
        let removedItem = todoLists[currentUser].splice(index - 1, 1);
        console.log(removedItem + " 항목이 제거되었습니다.");
    } else {
        console.log("제거할 항목이 목록에 없습니다.");
    }
}

// 사용자 입력에 따라 to-do list 관리
let todoCommand;
do {
    todoCommand = prompt("할 일 관리: 추가, 제거, 보기, 종료(Q)");
    if (todoCommand === "추가") {
        let newItem = prompt("추가할 할 일을 입력하세요:");
        addTodoItem(newItem);
    } else if (todoCommand === "제거") {
        let removeIndex = parseInt(prompt("제거할 할 일의 번호를 입력하세요:"), 10);
        removeTodoItem(removeIndex);
    } else if (todoCommand === "보기") {
        showTodoList();
    }
} while (todoCommand !== "Q");
