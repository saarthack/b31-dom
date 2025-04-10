const users = [
    {
        fullName: "Tony Stark",
        available: true,
        profession: "Mechanical Engineer",
        fees: 300,
        company: "Stark Industries",
        skills: ["AI", "Robotics", "Electronics", "Quantum Physics", "Cybersecurity", "CAD", "Nanotech"],
        description: "Genius engineer with a flair for innovation and sarcasm.",
        profilePhoto: "https://example.com/profiles/tony.jpg"
    },
    {
        fullName: "Bruce Banner",
        available: false,
        profession: "Nuclear Engineer",
        fees: 250,
        company: "Avengers Research Labs",
        skills: ["Gamma Radiation", "Theoretical Physics", "AI", "Machine Learning", "Lab Automation"],
        description: "Mild-mannered scientist with a powerful alter ego.",
        profilePhoto: "https://example.com/profiles/bruce.jpg"
    },
    {
        fullName: "Shuri",
        available: true,
        profession: "Tech Engineer",
        fees: 200,
        company: "Wakanda Design Group",
        skills: ["Vibranium Tech", "UI/UX", "Python", "Embedded Systems", "AR/VR", "Holography"],
        description: "Wakanda's tech prodigy and innovation powerhouse.",
        profilePhoto: "https://example.com/profiles/shuri.jpg"
    },
    {
        fullName: "Peter Parker",
        available: true,
        profession: "Software Engineer",
        fees: 120,
        company: "Daily Bugle (Part-time)",
        skills: ["Web Development", "Photography", "AI", "Physics", "JavaScript", "Spider-Tech"],
        description: "Young genius balancing code and crime-fighting.",
        profilePhoto: "https://example.com/profiles/peter.jpg"
    },
    {
        fullName: "Reed Richards",
        available: false,
        profession: "Aerospace Engineer",
        fees: 280,
        company: "Fantastic Labs",
        skills: ["Rocket Propulsion", "Multiverse Theory", "Programming", "Math Modeling", "Scientific Research"],
        description: "Stretching boundaries of science and space.",
        profilePhoto: "https://example.com/profiles/reed.jpg"
    },
    {
        fullName: "Barbara Gordon",
        available: true,
        profession: "Cybersecurity Engineer",
        fees: 180,
        company: "Gotham Tech",
        skills: ["Cybersecurity", "Hacking", "Python", "Network Defense", "Forensics", "Databases"],
        description: "Oracle of the digital world, crime-fighting coder.",
        profilePhoto: "https://example.com/profiles/barbara.jpg"
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

users.forEach(function(elem,idx){
    sum = sum + `<div class="card">
    <div class="top">
        ${elem.available?'<button>available</button>':'<h1></h1>'}
        <h3>$${elem.fees}/hr</h3>
    </div>
    <img src="https://variety.com/wp-content/uploads/2013/06/deadpool-trailer-2.jpg?w=1000" alt="">
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
        <h5>+${elem.skills.length-3}</h5>
    </div>

    <p>${elem.description}</p>
    <button>View Profile</button>
</div>`
})

var main = document.querySelector('#main')

main.innerHTML = sum



