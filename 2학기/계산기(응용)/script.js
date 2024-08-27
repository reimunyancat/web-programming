document.addEventListener('DOMContentLoaded', function() {
    // 디스플레이 요소를 가져옴
    const display = document.getElementById('display');
    // 모든 버튼 요소를 가져옴
    const buttons = document.querySelectorAll('#buttons button');
    let currentInput = ''; // 현재 입력된 숫자
    let operator = ''; // 현재 선택된 연산자
    let firstOperand = ''; // 첫 번째 피연산자

    // 각 버튼에 클릭 이벤트 리스너 추가
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent; // 버튼의 텍스트 값

            if (!isNaN(value)) {
                // 버튼이 숫자인 경우
                currentInput += value; // 현재 입력에 숫자를 추가
                if (operator === '') {
                    // 연산자가 선택되지 않은 경우
                    display.value = currentInput; // 디스플레이에 현재 입력을 표시
                } else {
                    // 연산자가 선택된 경우
                    display.value = firstOperand + ' ' + operator + ' ' + currentInput; // 디스플레이에 첫 번째 피연산자, 연산자, 현재 입력을 표시
                }
            } else if (value === 'C') {
                // 'C' 버튼이 눌린 경우 (디스플레이를 지움)
                currentInput = ''; // 현재 입력 초기화
                operator = ''; // 연산자 초기화
                firstOperand = ''; // 첫 번째 피연산자 초기화
                display.value = ''; // 디스플레이 초기화
            } else if (value === '=') {
                // '=' 버튼이 눌린 경우 (계산 수행)
                if (firstOperand !== '' && operator !== '' && currentInput !== '') {
                    // 첫 번째 피연산자, 연산자, 현재 입력이 모두 존재하는 경우
                    const result = calculate(parseFloat(firstOperand), parseFloat(currentInput), operator); // 계산 수행
                    display.value = result; // 결과를 디스플레이에 표시
                    currentInput = result; // 결과를 현재 입력으로 설정
                    operator = ''; // 연산자 초기화
                    firstOperand = ''; // 첫 번째 피연산자 초기화
                }
            } else {
                // 버튼이 연산자인 경우
                if (currentInput !== '') {
                    // 현재 입력이 존재하는 경우
                    firstOperand = currentInput; // 현재 입력을 첫 번째 피연산자로 설정
                    operator = value; // 버튼의 값을 연산자로 설정
                    currentInput = ''; // 현재 입력 초기화
                    display.value = firstOperand + ' ' + operator; // 디스플레이에 첫 번째 피연산자와 연산자를 표시
                }
            }
        });
    });

    // 계산 함수
    function calculate(operand1, operand2, operator) {
        switch (operator) {
            case '+':
                return operand1 + operand2; // 덧셈
            case '-':
                return operand1 - operand2; // 뺄셈
            case '*':
                return operand1 * operand2; // 곱셈
            case '/':
                return operand1 / operand2; // 나눗셈
            default:
                return 0; // 기본값
        }
    }
});