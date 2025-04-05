var btn = document.querySelector('button')
var body = document.body
btn.addEventListener('click',function(){
    var img = document.createElement('img')

    var x = Math.random()*100
    var y = Math.random()*100
    var rot = Math.random()*360
    img.style.left = x+'%'
    img.style.top = y+'%'
    img.style.rotate = rot+'deg'

    img.setAttribute('src','https://www.freeiconspng.com/uploads/spongebob-cartoon-png-32.png')
    body.appendChild(img)
})