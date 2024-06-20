
let inputVal = document.getElementById('InputBox');

let btns = document.querySelectorAll('button');

let btnArr = Array.from(btns);

let num = '';
btnArr.forEach(btn =>{
    btn.addEventListener('click',function(event){
        if(event.target.innerHTML == 'DEL'){
            num = num.substring(0,num.length-1);
            inputVal.value = num;
        }
        else if(event.target.innerHTML == 'AC'){
            num = '';
            inputVal.value = num;
        }
        else if(event.target.innerHTML == '='){
            num = eval(num);  // convert str to num and calculate num(code)
            inputVal.value = num;
        }
         else{
       num += event.target.innerHTML;
       inputVal.value = num;
        }
    });
});