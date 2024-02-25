let dom_num = document.querySelector('#num');
let dom_calc_btn = document.querySelector('#calc-btn');
let dom_response = document.querySelector('#response');

console.log(dom_num, dom_calc_btn, dom_response);



const calcLevel = (e) =>{
    console.log('start');

    let currentNum = num.value;
    console.log(currentNum);



}

dom_calc_btn.addEventListener('click',calcLevel);


// dom_calc_btn.addEventListener('click', (e) => {
//     let calNum = dom_num.value;
//     console.log(calNum)

//     if(calNum >= 90){
//         console.log('甲');
//     }else{
//         if(calNum >= 80){
//             console.log('丙');
//         }else{

//         }
//     }


// });