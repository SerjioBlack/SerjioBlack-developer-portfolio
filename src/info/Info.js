import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"
import mock7 from "../img/mock7.png"
import mock8 from "../img/mock8.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Serhii",
    lastName: "Sheyko",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Frontend Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Ukraine'
        },
        {
            emoji: '💻',
            text: 'passionate about coding'
        },
        {
            emoji: "🐈",
            text: "like cats"
        },
        {
            emoji: "💡",
            text: "open to new ideas to visualize"
        }
    ],
    socials: [
        
        {
            link: "https://t.me/Serjio_Black",
            icon: 'fa fa-telegram',
            label: 'telegram'
        },
        {
            link: "https://github.com/SerjioBlack/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/serjioblack/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "mailto:serjioblack@gmail.com/",
            icon: "fa fa-envelope",
            label: 'Email'
        },
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I'm a Frontend developer in devRate. I studied CompSci at Hillel. Our company is building a project in React and Java using the MUI framework, which will be a platform for interviews in the IT industry, and uses all the advanced technologies. My journey in web development has been an exciting exploration of coding, problem-solving, and staying at the forefront of industry trends. You should hire me! 😄",
    skills:
        {
            proficientWith: ['javascript', 'react', 'typescript', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'tailwindcss', 'mui'],
            exposedTo: ['vue3', 'nodejs', 'expressjs', 'mongodb']
        }
    ,
    hobbies: [
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'watching a football',
            emoji: '⚽'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cycling',
            emoji: '🚲'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "AirPodsMax",
            description: "Built using HTML, CSS, and JavaScript, this project allowed me to hone my web development skills and create a visually appealing, user-friendly experience.",
            live: "https://serjioblack.github.io/AirPodsMax/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/SerjioBlack/AirPodsMax", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "React Weather App",
            description: "Explore my weather app, a dynamic project that combines the power of React for seamless user interaction and Bootstrap for a responsive, sleek design. Get real-time weather updates at your fingertips!",
            live: "https://serjioblack.github.io/React_Weather_APP",
            source: "https://github.com/SerjioBlack/React_Weather_APP",
            image: mock2
        },
        {
            title: "Receipt Search app",
            description: "In this app I'm using free third party API and build recipe and meal search application using Vue.js. By building this application I have learned how to interact with API, how to define parent and child routes in Vue.js, How to define layouts, how to create scalable file and folder structure, how to use Vue composition API and many other important things. For building this Interface I have used Tailwind css.",
            live: "https://665d6dd67ea6b01362614798--zingy-choux-d1241f.netlify.app/",
            source: "https://github.com/SerjioBlack/VUE_recepies_app",
            image: mock3
        },
        {
            title: "Driver's License Scanner and Extractor",
            description: "Introducing App for extracting data from barcode or QR-code from US drivers license. That  App was build with React and Tesseract.js OCR library in collaboration with my US friends. This library supports more than 100 languages, automatic text orientation and script detection, a simple interface for reading paragraph, word, and character bounding boxes.",
            live: "https://full-stack-swe-interview-challenge.netlify.app/",
            source: "https://github.com/",
            image: mock4
        },
        {
            title: "HLegal Law Company",
            description: "A multi-page website of a law firm, the final task of the Front-end course, build with HTML, SCSS and JS, fully responsive, also using Swiper library for sliders",
            live: "https://serjioblack.github.io/HLegal_Project-Final/",
            source: "https://github.com/SerjioBlack/HLegal_Project-Final",
            image: mock5
        },
        {
            title: "Memory card game",
            description: "Challenge your memory with this interactive web-based Memory Game! 🃏 Built entirely with JS, HTML, and CSS, this project showcases my skills in front-end develop",
            live: "https://playful-platypus-52b3d7.netlify.app/",
            source: "https://github.com/SerjioBlack/Memory_game_JS",
            image: mock6
        },
        {
            title: "Organick shop",
            description: "Crafted with HTML, CSS, and JavaScript, Organick showcases the potential of web development to create engaging platforms with a focus on sustainability.",
            live: "https://serjioblack.github.io/Organick/portfolio.html",
            source: "https://github.com/SerjioBlack/Organick",
            image: mock7
        },
        {
            title: "3 in a Row JS game",
            description: "3 in a Row is more than a game; it's a testament to my dedication to creating enjoyable digital experiences. Dynamic game board with interactive tiles.",
            live: "https://serjioblack.github.io/3_in_a_row/",
            source: "https://github.com/SerjioBlack/3_in_a_row",
            image: mock8
        }
    ]
}