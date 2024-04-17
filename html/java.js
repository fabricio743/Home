function point(){
    var c = document.getElementById('bottom')
    var nav = document.getElementById('navgation')

    if(c.style.background === 'brown'){
        c.style.background='blue'
        nav.style.display='flex'
    } else{
        c.style.background='brown'
        nav.style.display='none'
    }
}
function select(){
    var li = document.querySelector('.lidnav')

    if(li==(li.style.backgroundColor ='rgba(73, 4, 4, 0.918)')){
            li.style.backgroundColor='rgba(36, 16, 16, 0.918)'
    }

}