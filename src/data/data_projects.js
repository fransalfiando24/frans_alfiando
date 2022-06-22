import spkImage from '../assets/images/projectImg/spk/spk.png'
import spkImage2 from '../assets/images/projectImg/spk/spk2.png'
import spkImage3 from '../assets/images/projectImg/spk/spk3.png'
import spkImage4 from '../assets/images/projectImg/spk/spk4.png'
import spkImage5 from '../assets/images/projectImg/spk/spk5.png'
import spkImage6 from '../assets/images/projectImg/spk/spk6.png'
import spkImage7 from '../assets/images/projectImg/spk/spk7.png'
import spkImage8 from '../assets/images/projectImg/spk/spk8.png'
import spkImage9 from '../assets/images/projectImg/spk/spk9.png'
import tixImage from '../assets/images/projectImg/tix-movies/tix.JPG'
import tixImage2 from '../assets/images/projectImg/tix-movies/tix2.JPG'
import tixImage3 from '../assets/images/projectImg/tix-movies/tix3.JPG'
import tixImage4 from '../assets/images/projectImg/tix-movies/tix4.JPG'
import tixImage5 from '../assets/images/projectImg/tix-movies/tix5.JPG'
import tixImage6 from '../assets/images/projectImg/tix-movies/tix6.JPG'
import tixImage7 from '../assets/images/projectImg/tix-movies/tix7.JPG'
import tixImage8 from '../assets/images/projectImg/tix-movies/tix8.JPG'
import tixImage9 from '../assets/images/projectImg/tix-movies/tix9.JPG'
import tixImage10 from '../assets/images/projectImg/tix-movies/tix10.JPG'
import modelImage from '../assets/images/projectImg/model.jpg'
import basketImage from '../assets/images/projectImg/BasketBallShoes.jpg'
import sispakImage from '../assets/images/projectImg/sistem_pakar.jpg'
import brianImage from '../assets/images/projectImg/rich-brian.JPG'
import beatlesImage from '../assets/images/projectImg/beatles.JPG'
import mpImage from '../assets/images/projectImg/music-player.JPG'
import typingImage from '../assets/images/projectImg/speed-typing.JPG'
import puncakImage from '../assets/images/projectImg/puncaklawang.jpg'
import furnitureImage from '../assets/images/projectImg/fransisco_furniture.png'
import starbucksImage from '../assets/images/projectImg/starbucks.jpg'
import foodRecipeImage from '../assets/images/projectImg/food_recipe.png'

const data_projects = [
    {
        id : 1,
        name : 'Puncak Lawang Tourism Website',
        tech : 'React Js, GSAP Library, AOS',
        desc : 'Lorem nahasdflp ajsnd lasd paskqwnvl klasdvpas',
        img: puncakImage,
        link: 'https://fransalfiando24.github.io/tourism_website/',
        source: 'https://github.com/fransalfiando24/tourism_website',
        preview: []
    },
    {
        id : 2,
        name : 'Starbucks Landing Page',
        tech : 'React JS & AOS',
        desc : 'This is a landing page website for Starbucks, with interactive user experience',
        img: starbucksImage,
        link: 'https://fransalfiando24.github.io/startbucks-landing-page/',
        source: 'https://github.com/fransalfiando24/startbucks-landing-page',
        preview: []
    },
    {
        id : 3,
        name : 'Food Recipe Website',
        tech : 'React JS',
        desc : 'This website is used to find recipes for any food and its ingredients. This website using Spoonacular API.',
        img: foodRecipeImage,
        link: '',
        source: 'https://github.com/fransalfiando24/food-recipes',
        preview: []
    },
    {
        id : 4,
        name : 'Nova Modeling Agency Website',
        tech : 'Javascript (GSAP & AOS)',
        desc : 'This website is for model agency',
        img: modelImage,
        link: '',
        source: '',
        preview: []
    },
    {
        id : 5,
        name : 'Gastric Disease Diagnosis Expert System (Artificial Intelligence)',
        tech : 'Javascript & PHP',
        desc : 'This website is useful for users to diagnose gastric disease independently. This application implements artificial intelligence by applying the Case Based Reasoning method to diagnose.',
        img: sispakImage,
        link: 'https://matur-diagnostic-tools.000webhostapp.com/',
        source: '',
        preview: []
    },
    {
        id : 6,
        name : 'Fransisco Furniture',
        tech : 'React Js, GSAP Library, AOS',
        desc : 'This is a landing page website design for furniture shop.',
        img: furnitureImage,
        link: '',
        source: 'https://github.com/fransalfiando24/furniture-landing-page',
        preview: []
    },
    {
        id : 7,
        name : 'Basketball Shoes Store',
        tech : 'Javascript',
        desc : 'This is a shoes store landing page design for selling basketball shoes online. This website is designed to provide beauty as well as convenience and a better experience for customers.',
        img: basketImage,
        link: 'https://fransalfiando24.github.io/footwork/',
        source: 'https://github.com/fransalfiando24/footwork',
        preview: [],
    },
    {
        id : 8,
        name : 'Tix-Movies',
        tech : 'PHP, MySQL, Javascript',
        desc : 'Tix-Movies is a website that provides online cinema ticket booking services. The goal is that film lovers in Indonesia can order cinema tickets in an easy way, anywhere and anytime.',
        img: tixImage,
        link: '',
        source: 'https://github.com/fransalfiando24/tix-movies',
        preview: [tixImage,tixImage2, tixImage3, tixImage4, tixImage5, tixImage6, tixImage7, tixImage8, tixImage9, tixImage10],
    },
    {
        id : 9,
        name : 'Rich Brian MV Website',
        tech : 'Javascript (GSAP Library)',
        desc : 'Lorem nahasdflp ajsnd lasd paskqwnvl klasdvpas',
        img: brianImage,
        link: 'https://fransalfiando24.github.io/rich-brian-music-video-release/',
        source: 'https://github.com/fransalfiando24/rich-brian-music-video-release',
        preview: [],
    },
    {
        id : 10,
        name : 'The Beatles Website',
        tech : 'Javascript (GSAP Library)',
        desc : 'Lorem nahasdflp ajsnd lasd paskqwnvl klasdvpas',
        img: beatlesImage,
        link: '/projects/',
        source: 'https://github.com/fransalfiando24/the-beatles-landing-page',
        preview: [],
    },
    {
        id : 11,
        name : 'Decision Support System for the selection of Favorite Lecturers',
        tech : 'PHP, MySQL',
        desc : 'Lorem nahasdflp ajsnd lasd paskqwnvl klasdvpas',
        img: spkImage,
        link: '',
        source: 'https://github.com/fransalfiando24/SPK-dosen-terfavorit-metode-SAW',
        preview: [
            spkImage, spkImage2, spkImage3, spkImage4, spkImage5, spkImage6, spkImage7, spkImage8, spkImage9,  
        ]
    },
    {
        id : 12,
        name : 'Music Player Website',
        tech : 'Javascript',
        desc : 'This is a music player website design. The design used is the Neumorphism style. It is all about the color of the entire screen and delivering an entirely out-of-the-box experience for users. It will give a decent and unique look.',
        img: mpImage,
        link: 'https://fransalfiando24.github.io/music_player/',
        source: 'https://github.com/fransalfiando24/music_player',
        preview: [],
    },
    {
        id : 13,
        name : 'Speed Typing Games',
        tech : 'Javascript',
        desc : 'This is a simple game. Its name is Speed Typing Game. This game will test how fast you type the words that appear on the screen. Let`s see how fast you type!',
        img: typingImage,
        link: 'https://fransalfiando24.github.io/speed_typing_game/',
        source: 'https://github.com/fransalfiando24/speed_typing_game',
        preview: [],
    },
]

export default data_projects
