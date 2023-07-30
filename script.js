
let main = document.querySelector('.main');

let element = document.querySelectorAll('.element')


let val = 'X'

const game = (elemn)=>{
    let Element = document.getElementById(elemn)
    if(val === 'X' && Element.innerHTML == ''){
        Element.innerHTML = 'X';
      val = 'O'
      main.innerHTML = 'O'
    }else if(val === 'O' && Element.innerHTML == ''){
        Element.innerHTML = 'O';
        val = 'X'
        main.innerHTML = 'X'
    }
    winner()
}
let arr = []
function end(num1 , num2 ,num3) {
    main.innerHTML=`${arr[num2]} winner`
    document.getElementById('item'+num1).style.background ='#000'
    document.getElementById('item'+num2).style.background ='#000'
    document.getElementById('item'+num3).style.background ='#000'

    setInterval(()=>{main.innerHTML += '.'},1000);
    setTimeout(()=>{location.reload()},4000);

}
const winner= ()=>{
  for (let i = 1; i <10; i++) {
    arr[i] = document.getElementById(`item${i}`).innerHTML;
  }
  if (arr[1] == arr[2] && arr[2] == arr[3] && arr[1] != '') {
    end(1 , 2 , 3)
  }else if (arr[4] == arr[5] && arr[5] == arr[6] && arr[4] != '') {
    end(4 , 5 , 6)
    
  }else if (arr[7] == arr[8] && arr[8] == arr[9] && arr[7] != '') {
    end(7 , 8 , 9)

}else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[7] != '') {
    end(1 , 4 , 7)
    
}else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[5] != '') {
    end(2 , 5 , 8)
    
}else if (arr[3] == arr[6] && arr[6] == arr[9] && arr[6] != '') {
    end(3 , 6 , 9)
    
}
else if (arr[1] == arr[5] && arr[5] == arr[9] && arr[5] != '') {
    end(1 , 5 , 9)
    
}else if (arr[3] == arr[5] && arr[5] == arr[7] && arr[5] != '') {
    end(3 , 5, 7)
    
}
}

