let li;
window.onload = () =>{

    function hide(){
        let d = document.querySelectorAll('header,section');
        let di = document.querySelector('.div');
        di.style.display = 'flex'
        d.forEach(e => {
            e.style.display = 'none';
        })
    }
    function show(){
        let d = document.querySelectorAll('header,section');
        let di = document.querySelector('.div');
        di.style.display = 'none'
        d.forEach(e => {
            e.style.display = 'flex';
        })
    }
    let text = document.querySelector('.div h3');

    if(window.innerWidth < 650){
        hide();
        text.innerHTML = `
            Your screen resolution is not sufficient to display the website.<br><br>
            • The required screen width is: 650 px<br>
            • Your screen width is: ${window.innerWidth} px
        `
    }else{
        show()
    }
    window.onresize = () => {
        if(window.innerWidth < 650){
            hide();
            text.innerHTML = `
            Your screen resolution is not sufficient to display the website.<br><br>
            • The required screen width is: 650 px<br>
            • Your screen width is: ${window.innerWidth} px
        `
        }else{
            show()
        }
    }

    setInterval(() => {
        span = document.querySelector('section>span')
        span.style.width = '100%'
        h2 = document.querySelector('h2')
        h2.classList.add('h2f')
        li = document.querySelectorAll('li')
        setInterval(() => {
            li.forEach(e => {
                e.classList.add('lif') 
            })
            document.body.style.backgroundColor = 'var(--bgcolor)' 
        }
        , 1000)
        spans = document.querySelectorAll('section:first-of-type > article aside h1 span,section:first-of-type > article aside p span,section:first-of-type > article aside button,section:first-of-type > article aside span span')
        spans.forEach(e => {
            e.classList.add('span')
        })
        img = document.querySelector('section:first-of-type > article img')
        img.style.opacity ='1'
    }, 220);
}
function pxToVh(px){
    let a = window.innerHeight
    let vh = (px / a ) * 100
    return vh
}
function vhToPx(vh){
    let a = window.innerHeight
    let px = vh / 100 * a
    return px
}
let header = document.querySelector('header')
let aboutTitle = document.querySelector('section:nth-of-type(2) article h1')
let aboutContent = document.querySelectorAll('section:nth-of-type(2) article p,section:nth-of-type(2) article img')
let skilsTitle = document.querySelector('section:nth-of-type(3) article h1')
let skilsContents = document.querySelectorAll('section:nth-of-type(3) > article article div')
let CertificateTitle = document.querySelector('section:nth-of-type(4) article h1')
let ContacteTitle = document.querySelector('section:nth-of-type(5) article h1')
let ContactContents = document.querySelectorAll('section:nth-of-type(5) article article, input, textarea')
window.addEventListener('scroll',()=>{
    let span = document.querySelectorAll('li span')
    let s = document.documentElement.scrollTop
    let v = pxToVh(s)

    if (s < vhToPx(30)) {
        span[0].style.width = '100%'
    }else{
        span[0].style.width = '0'
    }

    if (s>= vhToPx(30) && s < vhToPx(120)) {
        span[1].style.width = '100%'
    }else{
        span[1].style.width = '0'
    }

    if (s>= vhToPx(120) && s < vhToPx(207)) {
        span[2].style.width = '100%'
    }else{
        span[2].style.width = '0'
    }

    if (s>= vhToPx(207) && s < vhToPx(301)) {
        span[3].style.width = '100%'
    }else{
        span[3].style.width = '0'
    }

    if (s>= vhToPx(301)) {
        span[5].style.width = '100%'
    }else{
        span[5].style.width = '0'
    }

    if (s >= 40){
        header.style.top = '-2vh'
        header.style.backgroundColor = 'var(--bgcolor)'
    }else{
       header.style.top = '0'
    }
    
    if(s >= vhToPx(30)){
        aboutTitle.style.width = '144px'
    }else{
        aboutTitle.style.width = '0'
    }
    
    if(s >= vhToPx(64)){
        aboutContent.forEach(e =>{
            e.classList.remove('transform')
        })
        
    }else{
        aboutContent.forEach(e =>{
            e.classList.add('transform')
        })
        
    }
    
    if(s >= vhToPx(120)){
        skilsTitle.style.width = '144px'
    }else{
        skilsTitle.style.width = '0'
    }
    
    if(s >= vhToPx(140)){
        skilsContents.forEach(e => {
            e.style.opacity = '1'
            e.style.transform = 'translate(0)'
        })
    }else{
        skilsContents.forEach(e => {
            e.style.opacity = '0'
            e.style.transform = 'translate(100px)'
        })
    }

    if(s >= vhToPx(207)){
        CertificateTitle.style.width = '270px'
    }else{
        CertificateTitle.style.width = '0'
    }

    if(s >= vhToPx(245)){
        images.forEach(e => {
            e.style.left = 'calc(var(--img)*20%)'
            e.style.opacity = '1'
        })
    }else{
        images.forEach(e => {
            e.style.left = 'calc((var(--img) + .2)*20%)'
            e.style.opacity = '0'
        })
    }

    if(s >= vhToPx(301)){
        ContacteTitle.style.width = '200px'
    }else{
        ContacteTitle.style.width = '0'
    }

    if(s >= vhToPx(340)){
        ContactContents.forEach(e => {
            e.style.transform = 'translate(0)'
            e.style.opacity = '1'
        })
    }else{
        ContactContents.forEach(e => {
            e.style.transform = 'translate(100px)'
            e.style.opacity = '0'
        })
        
    }

})

let images = document.querySelectorAll('section:nth-of-type(4) > article img')

images.forEach(e => {
    e.addEventListener('mouseenter',()=>{
        images.forEach(r => {
            r.classList.remove('imgTranform')
        })
        e.classList.add('imgTranform')
    })
})
li = document.querySelectorAll('li:not(.disable)')
li.forEach(e => {
    e.addEventListener('click',()=>{
        window.scrollTo({
            top : e.value * vhToPx(92) ,
            behavior : 'smooth'
        })
    })
})

let headerMenu = document.querySelector('header > div')
let headerUl = document.querySelector('header ul')
let headerLi = document.querySelectorAll('header ul li')
headerMenu.onclick = ()=> {
    header.classList.toggle('showHeader')
    headerUl.classList.toggle('showUl')
    headerLi.forEach(e => {
        e.classList.toggle('showLi')
        e.addEventListener('click',() => {
            header.classList.remove('showHeader')
            headerUl.classList.remove('showUl')
            headerLi.forEach(r => {
                r.classList.remove('showLi')
            })
        })
    })
}