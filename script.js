let button = document.querySelectorAll('button')
let input = document.getElementById("text")

// Learned how to use arrow function and Regular Functions, not much difference but yeah :)

let buttons = Array.from(button)

let result = ""

// Using Arrow Function
// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML === "=") {
//             result = eval(result)
//             input.value = result
//         }

//         else if (e.target.innerHTML == "AC") {
//             result = ""
//             input.value = result
//         }

//         else if (e.target.innerHTML == "DEL") {
//             result = result.substring(0, result.length-1)
//             input.value = result
//         }

//         else {
//             result += e.target.innerHTML
//             input.value = result
//         }
//     })
// });


// Using Regular Function
buttons.forEach(button => {
    button.addEventListener('click', function(button) {
        if (button.target.innerHTML === "=") {
            result = eval(result);
            input.value = result;
        }

        else if (button.target.innerHTML == "DEL") {
            result = result.substring(0, result.length - 1);
            input.value = result;
        }

        else if (button.target.innerHTML == "AC") {
            result = ""
            input.value = result
        }

        else {
            result += button.target.innerHTML;
            input.value = result;
        } 
    })
});