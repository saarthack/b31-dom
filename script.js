var arr = [
    {
        username:'Heera',
        buses:50,
        likesKheer:false,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUlRH8Ce0wwoOKFo2594oJzLsXy34HAQV0wQ&s'
    },
    {
        username:'Bhanu Pratap',
        buses:0 ,
        likesKheer:true,
        image:'https://im.indiatimes.in/content/2020/May/kheer_5ec3a4e63976a.png?w=375&h=210&cc=1&webp=1&q=75'
    },
    {
        username:'Kewda Thakur',
        buses:5,
        likesKheer:true,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJVfTiNvpDBSvOga254qEZ_Upw0b2T9glQw&s'
    },
]

var sum = ''

arr.forEach(function(elem){

    sum += `<div class="card">
    <img src="${elem.image}" alt="">
    <h1>${elem.username}</h1>
    <h5>Buses : ${elem.buses}</h5>
    <h4>Likes Kheer : ${elem.likesKheer}</h4>
</div>`
})

var body = document.querySelector('body')

body.innerHTML = sum