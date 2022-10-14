let abas = document.querySelector('ul.abas')
abas.addEventListener('click', trocarAba)

function trocarAba(){
    let info = document.getElementsByClassName('informacao')
    let aba = document.getElementsByClassName('aba')
    
    if (aba[0].classList.contains('selecionado') && info[0].classList.contains('selecionado')){

        aba[1].classList.add('selecionado')
        aba[0].classList.remove('selecionado')

        info[1].classList.add('selecionado')
        info[0].classList.remove('selecionado')
    
    }else{
        aba[0].classList.add('selecionado')
        aba[1].classList.remove('selecionado')

        info[0].classList.add('selecionado')
        info[1].classList.remove('selecionado')
    }
}