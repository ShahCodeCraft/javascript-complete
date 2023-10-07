const form = document.querySelector('form')
// this usecase will give you empty 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault();
   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')

//    if(height === "" || height < 0 || isNaN(height)){
//         results.innerHTML = `Please give a valid height ${height}`;
//    }
// //    results.innerHTML = ` Height : ${height}`

//    if(weight === "" || weight < 0 || isNaN(weight)){
//         results.innerHTML = `Please give a valid weight ${weight}`;
//    }
// //    results.innerHTML = ` weight : ${weight}`


// if(height === "" || height < 0 || isNaN(height)){
//     results.innerHTML = `Please give a valid height ${height}`;
// }
// else if(weight === "" || weight < 0 || isNaN(weight)){
//     results.innerHTML = `Please give a valid weight ${weight}`;
// }
// else{
// const BMI = (weight / ((height*height)/10000)).toFixed(2)
// // show the result
// results.innerHTML = `<span>${BMI}   </span>`
// }

if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    results.innerHTML = "Please enter valid height and weight values.";
} else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    let message = "";

    if (BMI < 18.6) {
        message = "Underweight";
    } else if (BMI >= 18.6 && BMI <= 24.9) {
        message = "Normal Range";
    } else {
        message = "Overweight";
    }

    results.innerHTML = `<span>BMI: ${BMI}</span><br><span>Weight Status: ${message}</span>`;
}

});

// const form = document.querySelector('form');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const height = parseFloat(document.querySelector('#height').value);
//     const weight = parseFloat(document.querySelector('#weight').value);
//     const results = document.querySelector('#results');

    // if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    //     results.innerHTML = "Please enter valid height and weight values.";
    // } else {
    //     const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //     let message = "";

    //     if (BMI < 18.6) {
    //         message = "Underweight";
    //     } else if (BMI >= 18.6 && BMI <= 24.9) {
    //         message = "Normal Range";
    //     } else {
    //         message = "Overweight";
    //     }

    //     results.innerHTML = `<span>BMI: ${BMI}</span><br><span>Weight Status: ${message}</span>`;
    // }
// });
