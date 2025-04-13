const arr = [
    {
        fullName: "Tony Stark",
        available: true,
        profession: "Mechanical Engineer",
        fees: 300,
        company: "Stark Industries",
        skills: ["AI", "Robotics", "Electronics", "Quantum Physics", "Cybersecurity", "CAD", "Nanotech"],
        description: "Genius engineer with a flair for innovation and sarcasm.",
        profilePhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg"
    },
    {
        fullName: "Bruce Banner",
        available: false,
        profession: "Nuclear Engineer",
        fees: 250,
        company: "Avengers Research Labs",
        skills: ["Gamma Radiation", "Theoretical Physics", "AI", "Machine Learning", "Lab Automation"],
        description: "Mild-mannered scientist with a powerful alter ego.",
        profilePhoto: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Mark_Ruffalo_as_%22Professor_Hulk%22.jpeg/250px-Mark_Ruffalo_as_%22Professor_Hulk%22.jpeg"
    },
    {
        fullName: "Shuri",
        available: true,
        profession: "Tech Engineer",
        fees: 200,
        company: "Wakanda Design Group",
        skills: ["Vibranium Tech", "UI/UX", "Python", "Embedded Systems", "AR/VR", "Holography"],
        description: "Wakanda's tech prodigy and innovation powerhouse.",
        profilePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkI13JiXtxseX3VhxUK90FmgI6CoIcovAisg&s"
    },
    {
        fullName: "Peter Parker",
        available: true,
        profession: "Software Engineer",
        fees: 120,
        company: "Daily Bugle (Part-time)",
        skills: ["Web Development", "Photography", "AI", "Physics", "JavaScript", "Spider-Tech"],
        description: "Young genius balancing code and crime-fighting.",
        profilePhoto: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/05/Spider-Man-Far-From-Home-Tom-Holland-as-Peter-ParkerSpider-Man.jpg"
    },
    {
        fullName: "Reed Richards",
        available: false,
        profession: "Aerospace Engineer",
        fees: 280,
        company: "Fantastic Labs",
        skills: ["Rocket Propulsion", "Multiverse Theory", "Programming", "Math Modeling", "Scientific Research"],
        description: "Stretching boundaries of science and space.",
        profilePhoto: "https://res.cloudinary.com/jerrick/image/upload/v1738723692/67a2d16cfe82da001d539795.jpg"
    },
    {
        fullName: "Barbara Gordon",
        available: true,
        profession: "Cybersecurity Engineer",
        fees: 180,
        company: "Gotham Tech",
        skills: ["Cybersecurity", "Hacking", "Python", "Network Defense", "Forensics", "Databases"],
        description: "Oracle of the digital world, crime-fighting coder.",
        profilePhoto: "https://static.dc.com/dc/files/default_images/BabsCasting_60073b823ebff3.73076079.jpg"
    },
    {
        fullName: "Victor Stone",
        available: true,
        profession: "Systems Engineer",
        fees: 220,
        company: "Justice League Tech Unit",
        skills: ["AI Integration", "Cybernetics", "Network Systems", "Database Design", "C++", "IoT"],
        description: "Half-man, half-machine, full-stack genius.",
        profilePhoto: "https://example.com/profiles/victor.jpg"
    },
    {
        fullName: "Hank Pym",
        available: false,
        profession: "Nano Engineer",
        fees: 270,
        company: "Pym Technologies",
        skills: ["Quantum Mechanics", "Nanotech", "AI", "Physics", "Innovation", "Scientific R&D"],
        description: "Pioneer of the microverse and father of Ant-Man tech.",
        profilePhoto: "https://example.com/profiles/hank.jpg"
    },
    {
        fullName: "Riri Williams",
        available: true,
        profession: "Mechanical Engineer",
        fees: 190,
        company: "MIT Labs",
        skills: ["Robotics", "Iron Suit Design", "3D Printing", "C++", "Electronics", "Machine Learning"],
        description: "Teen genius crafting her own Iron legacy.",
        profilePhoto: "https://example.com/profiles/riri.jpg"
    },
    {
        fullName: "T’Challa",
        available: false,
        profession: "Material Science Engineer",
        fees: 260,
        company: "Wakanda Innovations",
        skills: ["Vibranium Research", "Leadership", "Martial Tech", "R&D", "Sustainable Energy", "Ethical AI"],
        description: "King. Warrior. Engineer of a better world.",
        profilePhoto: "https://example.com/profiles/tchalla.jpg"
    }
];

var sum = ''

arr.forEach(function (elem, idx) {
    sum = sum + `<div class="card">
    <div class="top">
        ${elem.available ? '<button>available</button>' : '<h1></h1>'}
        <h3>$${elem.fees}/hr</h3>
    </div>
    <img src="${elem.profilePhoto}" alt="">
    <h2 class="name">
        ${elem.fullName}
    </h2>
    <h3 class="prof">
        ${elem.profession}
    </h3>
    <h3 class="com">
        ${elem.company}
    </h3>
    <div class="skills">
        <h4>${elem.skills[0]}</h4>
        <h4>${elem.skills[1]}</h4>
        <h4>${elem.skills[2]}</h4>
        <h5>+${elem.skills.length - 3}</h5>
    </div>

    <p>${elem.description}</p>
    <button id=${idx}>View Profile</button>
</div>`
})


var main = document.querySelector('#main')

main.innerHTML = sum

var full = document.querySelector('#full')
var gold = 0

var fullImageIndex = 0

function showFullScreen() {
    gold = arr[fullImageIndex]


    full.style.display = 'block'

    var left = full.childNodes[3].childNodes[1]
    var right = full.childNodes[3].childNodes[3]

    right.childNodes[1].src = gold.profilePhoto
    left.childNodes[1].childNodes[1].innerHTML = gold.fullName
    left.childNodes[1].childNodes[3].innerHTML = `$${gold.fees}/hr`
    left.childNodes[3].innerHTML = gold.profession
    left.childNodes[5].innerHTML = gold.company
    left.childNodes[9].innerHTML = gold.description
    left.childNodes[11].innerHTML = gold.available ? 'HIRE' : 'Not Available'
    if (gold.available) {
        left.childNodes[11].style.opacity = 1
    } else {
        left.childNodes[11].style.opacity = 0.3
    }

    var clutter = ''
    gold.skills.forEach(function(elem){
        clutter = clutter + `<h4>${elem}</h4>`
    })
    left.childNodes[7].innerHTML = clutter
}

main.addEventListener('click', function (dets) {
    fullImageIndex = Number(dets.target.id)

    showFullScreen()


})




var cross = document.querySelector('#cross')
cross.addEventListener('click', function () {
    full.style.display = 'none'
})

var next = document.querySelector('#next')
var prev = document.querySelector('#prev')


next.addEventListener('click', function () {

    if (fullImageIndex < arr.length) {
        fullImageIndex++
        showFullScreen()
    }
})

prev.addEventListener('click', function () {

    if (fullImageIndex > 0) {
        prev.style.opacity = 1

        fullImageIndex--
        showFullScreen()

    } else {
        prev.style.opacity = 0.4
    }
})