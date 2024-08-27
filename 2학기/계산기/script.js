document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.getElementById('in1');
    const input2 = document.getElementById('in2');
    const result = document.getElementById('re');

    const addButton = document.querySelector('input[value="+"]');
    const subtractButton = document.querySelector('input[value="-"]');
    const multiplyButton = document.querySelector('input[value="*"]');
    const divideButton = document.querySelector('input[value="/"]');

    addButton.addEventListener('click', function() {
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);
        result.value = num1 + num2;
    });

    subtractButton.addEventListener('click', function() {
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);
        result.value = num1 - num2;
    });

    multiplyButton.addEventListener('click', function() {
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);
        result.value = num1 * num2;
    });

    divideButton.addEventListener('click', function() {
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);
        if (num2 !== 0) {
            result.value = num1 / num2;
        } else {
            result.value = 'Error';
        }
    });
});