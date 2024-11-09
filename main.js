let buttons = document.querySelectorAll('.buttons')
let btn = document.querySelector('.btn')
let btnZero = document.querySelector('.btn-zero')
let btnMinus = document.querySelector('.btn-minus')
let btnPlus = document.querySelector('.btn-plus')
let btnModule = document.querySelector('.btn-module')
let btnScope = document.querySelector('.btn-scope')
let btnScope1 = document.querySelector('.btn-scope1')
let btnMultiplay = document.querySelector('.btn-multiplay')
let btnDivide = document.querySelector('.btn-divide')
let btnDot = document.querySelector('.btn-dot')
let pMath = document.querySelector('.pMath')
let evall = document.querySelector('.evall')
let evalll = document.querySelector('.evalll')
let close = document.querySelector('.size-6')
let closetwo = document.querySelector('.size-5')
let btnNegative = document.querySelector('.btn-negative')
let box1 = document.querySelector('.box1')
let main = document.querySelector('.main')
let cnt = 0;


function ReplaceOparation(elem){
   let current = pMath.innerHTML
   let lastChar = pMath.innerHTML.at(-1)


   if(["*", "/", "+", "-", "."].includes(lastChar)){
    pMath.innerHTML = current.slice(0, -1) + elem;
   }
   else{
      pMath.innerHTML += elem;
   }

}

main.style.display = 'none'

box1.onclick = () => {
    box1.style.display = 'none'
    main.style.display = 'block'
}

closetwo.onclick = () => {
    box1.style.display = 'block'
    main.style.display = 'none'
}

btnMinus.onclick = () => {
    cnt ++;
    if(cnt == 1){
        pMath.innerHTML += btnMinus.innerHTML;   
    }
    ReplaceOparation('-')
}

btnPlus.onclick = () => {
    cnt ++;
    if(cnt == 1){
        pMath.innerHTML += btnPlus.innerHTML;   
    }
    ReplaceOparation('+')
}

btnMultiplay.onclick = () => {
    cnt ++;
    if(cnt == 1){
        pMath.innerHTML += btnMultiplay.innerHTML;   
    }
    ReplaceOparation('*')
}

btnDivide.onclick = () => {
    cnt ++;
    if(cnt == '1'){
        pMath.innerHTML += btnDivide.innerHTML;   
    }
    if(pMath.innerHTML == btnScope1.innerHTML){
        pMath.innerHTML += btnDivide.innerHTML;
    }
    ReplaceOparation('/')
}

btnDot.onclick = () => {
    if(!pMath.innerHTML.includes('.')){
    cnt ++;
    if(cnt == '1' && pMath.innerHTML != btnDot.innerHTML){
        pMath.innerHTML += btnDot.innerHTML;   
    }
    ReplaceOparation('.')
}
}

btnModule.onclick = () => {
    pMath.innerHTML = eval(pMath.innerHTML / 100)
}

btnScope.onclick = () => {
   let lastChar = pMath.innerHTML.at(-1)


   if(["*", "/", "+", "-"].includes(lastChar)){
           pMath.innerHTML += btnScope.innerHTML;
   }
    
    if(cnt === 0 && pMath.innerHTML !== '0' && pMath.innerHTML !== '.'){
        cnt ++;
        pMath.innerHTML += btnScope.innerHTML;   
    }
    if(pMath.innerHTML === '0' && pMath.innerHTML != '.'){
        pMath.innerHTML = btnScope.innerHTML;
    }
}

btnScope1.onclick = () => {
    cnt++;
    if(cnt == '1'){
        pMath.innerHTML += btnScope1.innerHTML;
    }
}


buttons.forEach((button) => {
    button.onclick = () => {
        cnt = 0;
        
        if(pMath.innerHTML === 'Error!'){
            pMath.innerHTML = button.innerHTML;
            evall.innerHTML = '0';
        }
        else if (pMath.innerHTML.length < '42') {
            if (pMath.innerHTML === "0" && pMath.innerHTML != '.') {
                pMath.innerHTML = button.innerHTML;
            } else {
                pMath.innerHTML += button.innerHTML;
            }
        } else {
            alert("Вы задали максимум чисел!")
            confirm('Вы задали максимум чисел!')
        }
    }
})




btnNegative.onclick = () => {
    if(pMath.innerHTML.at(0) == '-') {
        pMath.innerHTML = pMath.innerHTML.slice(1)
    } else {
        pMath.innerHTML = "-" + pMath.innerHTML
    }
    if(pMath.innerHTML == 0){
        pMath.innerHTML = "" + "-" 
    }
}


btn.onclick = () => {
    try {
        
        if(eval(pMath.innerHTML).length <= 6){
            evalll.innerHTML = eval(pMath.innerHTML)
            evall.innerHTML = eval(pMath.innerHTML)
        }else{
            evall.innerHTML = eval(pMath.innerHTML)
        }
    } catch (error) {
        console.error(error);
        pMath.innerHTML = "Error!"
        evall.innerHTML = "Ошибка!"
    }
}








close.onclick = () => {
    if(pMath.innerHTML.length > '1') {
        pMath.innerHTML = pMath.innerHTML.slice(0, -1);
    } else {
        pMath.innerHTML = 0
    }
    if(pMath.innerHTML == 'NaN'){
        pMath.innerHTML = 0
    }
}


btnZero.onclick = () => {
    pMath.innerHTML = pMath.innerHTML = '0';
    evall.innerHTML = evall.innerHTML = '0';
}