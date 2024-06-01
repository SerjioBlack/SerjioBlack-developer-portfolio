import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

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
            text: "father of a cat"
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
    bio: "I'm a Frontend developer in devRate. I studied CompSci at Hillel. With a keen interest in the ever-evolving world of technology, I thrive on turning ideas into interactive and visually appealing web solutions. My journey in web development has been an exciting exploration of coding, problem-solving, and staying at the forefront of industry trends. You should hire me! 😄",
    skills:
        {
            proficientWith: ['javascript', 'react', 'typescript', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'tailwindcss'],
            exposedTo: ['nodejs', 'expressjs', 'mongodb']
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
            title: "Project 3",
            description: "description",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            description: "description",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            description: "description",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}