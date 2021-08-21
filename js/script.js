let sobreOption = document.querySelectorAll('.sobreOption')
let poderesOption = document.querySelectorAll('.poderesOption')
let famaOption = document.querySelectorAll('.famaOption')

let sobre = document.querySelectorAll('.sobre')
let poderes = document.querySelectorAll('.poderes')
let Fama = document.querySelectorAll('.Fama')



for(let i=0; i<3;i++){


    sobreOption[i].addEventListener("click",function(){
        if(!sobreOption[i].classList.contains(" active ")){
            sobreOption[i].classList += " active "
            poderesOption[i].classList.remove("active")
            famaOption[i].classList.remove("active")

            sobre[i].style.opacity = 1
            poderes[i].style.opacity = 0
            Fama[i].style.opacity = 0
        }
    })

    poderesOption[i].addEventListener("click",function(){
        if(!poderesOption[i].classList.contains(" active ")){
            poderesOption[i].classList += " active "
            sobreOption[i].classList.remove("active")
            famaOption[i].classList.remove("active")

            sobre[i].style.opacity = 0
            poderes[i].style.opacity = 1
            Fama[i].style.opacity = 0
        }
    })

    famaOption[i].addEventListener("click",function(){
        if(!famaOption[i].classList.contains(" active ")){
            famaOption[i].classList += " active "
            sobreOption[i].classList.remove("active")
            poderesOption[i].classList.remove("active")

            sobre[i].style.opacity = 0
            poderes[i].style.opacity = 0
            Fama[i].style.opacity = 1
        }
    })
}


