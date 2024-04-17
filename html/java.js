function point(){
    var c = document.getElementById('bottom')
    var nav = document.getElementById('navgation')

    if(c.style.background === 'brown'){
        c.style.background='chocolate'
        nav.style.display='flex'
    } else{
        c.style.background='brown'
        nav.style.display='none'
    }
}
