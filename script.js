var btn = document.querySelector('button')
var percent = document.querySelector('#percent')
var growth = document.querySelector('#growth')
var grow = 0

btn.addEventListener('click',function(){

    var int = setInterval(function(){
        ++grow
        percent.innerHTML = grow+'%'
        growth.style.width = grow+'%'
    },30)

    setTimeout(function(){
        clearInterval(int)
        btn.style.opacity = 0.5
        btn.innerHTML = 'Downloaded'
    },3000)
})