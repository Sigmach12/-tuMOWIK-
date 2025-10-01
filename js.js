window.onload = function () {
    let inputField = document.getElementById('inputField')
    let butDigits = document.querySelectorAll('.digits-wrap button')
    let num1 = 0;
    let clean = 0;
    let butMathOperation = document.querySelectorAll('.math-wrap button')

    butDigits.forEach(function (el) {
        el.addEventListener('click', function (e) {
            console.log(e.target.innerText);
            inputField.value = inputField.value + e.target.innerText;
            if (clean === 1) {
                inputField.value = '';
                clean = 0;

            }
        })
    })


    butMathOperation.forEach(
        (el) => {
            el.addEventListener('click', (e) => {
                num1 = inputField.value;
                clean = 1
                console.log(e.target.innerText)

            })
        }
    )

}