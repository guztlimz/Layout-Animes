let input = document.querySelectorAll('input')
let label = document.querySelectorAll('label')
let line = document.querySelectorAll('.line')

for(let i = 0;i<input.length;i++){
    input[i].addEventListener('focusin',function(){
        label[i].style.top='0'
        line[i].style.backgroundColor = 'var(--ContrastColor)'

    })
    input[i].addEventListener('focusout',function(){
        console.log(input[i].textContent)
            if(input[i].value == ''){
                console.log(input[i].value)
                console.log('FocusOut')
                label[i].style.top='18px'
                line[i].style.backgroundColor = 'var(--mainColor)'
            }
    })
}