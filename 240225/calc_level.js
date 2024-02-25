let dom_num = document.querySelector('#num');
let dom_calc_btn = document.querySelector('#calc-btn');
let dom_response = document.querySelector('#response');

console.log(dom_num, dom_calc_btn, dom_response);



const transferToLevel = (num) => {
    if (num >= 90) {
        return '甲'
    }
    if (num >= 80) {
        return '乙'
    }
    if (num >= 70) {
        return '丙'
    }
    if (num >= 60) {
        return '丁'
    }
    return '不及格';
}

const checkHasNum = (num) => {
    if (num) {
        return true;
    }
    return false;
}

const numInRange = (num) => {
    if (num >= 0 && num <= 100) {
        return true;
    }
    return false;
}

// 計算後要將焦點放到分數輸入區塊 [v]
    dom_num.value = '';
    dom_num.focus();

const focusToNum = () => {
    dom_num.value = '';
    setTimeout(() => {
        dom_num.focus();
    }, 500)
}


// 當按下計算按鈕時，抓取數字輸入匡內容
const calcLevel = (e) => {
    // 計算前要將顯示區塊隱藏
    dom_response.classList.add('d-none');
    console.log('start calc.');
    let currentNum = num.value;
    // 印出當前輸入框分數
    console.log(currentNum, typeof currentNum);

    // 檢查是否有輸入分數 [v]
    if (!checkHasNum(currentNum)) {
        Swal.fire({
            title: '轉換錯誤',
            html: '尚未輸入分數',
            icon: 'error'
        })
        // 計算後要將焦點放到分數輸入區塊 [v]
        focusToNum();
        return;
    }

    // 檢查分數是否落在 0 ~ 100 之間 [v]
    if (!numInRange(currentNum)) {
        Swal.fire({
            title: '轉換錯誤',
            html: `分數: ${currentNum} 未落在 0 ~ 100 之間`,
            icon: 'error'
        })
        // 計算後要將焦點放到分數輸入區塊 [v]
        focusToNum();
        return;
    }

    // 計算等級 [v]
    let level = transferToLevel(currentNum);

    // 顯示在 dom_response 內，格視為: 您的分數: oo, 等級: xx
    let content = `您的分數: ${currentNum}, 等級: ${level}`;
    dom_response.innerHTML = content;
    dom_response.classList.remove('d-none');
    // 計算後要將焦點放到分數輸入區塊 [v]
    focusToNum();
}

dom_calc_btn.addEventListener('click', calcLevel);

const triggerCalc = (e) => {
    let key = e.key;
    if (key && key.toUpperCase() == 'ENTER') {
        calcLevel(e);
    }
}

dom_num.addEventListener('keyup', triggerCalc);




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