import Css from '../images/css.png'
import Html from '../images/html.png'
import Js from '../images/js.png'
import React from '../images/react.png'
import GoogleScript from '../images/googleScript.png'
import Appsheet from '../images/appsheet.webp'
import Wordpress from '../images/Wordpress.png'
import Wocomerce from '../images/wocomerce.png'




/**images of the proyects */
        //! front
import pokeApi from '../images/pokeApi.png'
import ecomerceJoyas from '../images/ecommerceJoyas.png'
import phrases from '../images/phrases.png'
import parking from '../images/parking.png'
import aval from '../images/aval.png'
import Electromusical from '../images/electromusical.png'

const data = [
    {
        "id": 1,
        "name":"FRONTEND",
        "description":"translate the design to code in html and css, layout static sites, improve the user experience with the website, consumption of API's, responsive layout...",
        "icon": <i className="fi fi-br-layout-fluid"></i>,
        "proyects":[
            {
                "id": 1,
                "name": "Red Pokemon",
                "images":[Css, Html, Js, React],
                "description": "consumo de api pokemon, con rutas. siguiendo y optimizando el codigo para mejorar la interactividad del usuario",
                "fondo": pokeApi,
                "link":"https://lively-florentine-5fed2c.netlify.app/"

            },
            {
                "id":3,
                "name": "Ecomerce of joyas",
                "images":[Css, Html, Js, React],
                "description": "consumo de api Rest de heroku, creacion de usuarios, compra de cualquier joya, filtro egun categoria.. utilizando axios",
                "fondo": ecomerceJoyas,
                "link": "https://ecommercejoyas.netlify.app/"
            },
            {
                "id":4,
                "name": "Generateor of phrases",
                "images":[Css, Html, Js, React],
                "description": "consumo de api para generar frases en forma aleatoria con su repectivo Author",
                "fondo": phrases,
                "link": "https://quotesmachineduvan.netlify.app/"
            }
        ]
    },
    {   
        "id": 2,
        "name":"BACKEND",
        "description":"I create routes and logics that allow the front developer to access information, I create and design databases for scalable applications... among others",
        "icon": <i className="fi fi-br-database"></i>,
        "proyects":[
            {
                "id": 1,
                "name": "backend FUNDACION ACUERDATE DE MI",
                "images":[Css, Html, Js, React],
                "description": "",
                "fondo": pokeApi
            },
            {
                "id": 2,
                "name": "backend CONSUMO POKE API",
                "images":[Css, Html, Js, React],
                "description": "",
                "fondo": pokeApi
                
            }
        ]
    },
    {   
        "id": 3,
        "name":"MOBILE DEVELOPMENT",
        "description":"I develop simple apps that can be deployed on Android or iOS systems.",
        "icon": <i className="fi fi-br-smartphone"></i>,
        "proyects":[
            {
                "id": 1,
                "name": "mobile FUNDACION ACUERDATE DE MI",
                "images":[Css, Html, Js, React],
                "description": "",
                "fondo": pokeApi
            },
            {
                "id": 2,
                "name": "mobile CONSUMO POKE API",
                "images":[Css, Html, Js, React],
                "description": "",
                "fondo": pokeApi
            },
            {
                "id":3,
                "name": "mobiel ECOMMERCE JOYAS",
                "images":[Css, Html, Js, React],
                "description": "",
                "fondo": pokeApi
            },
            {
                "id":4,
                "name": "mobiel WATHER API",
                "images":[Css, Html, Js, React],
                "description": "",
                "fondo": pokeApi
            }
        ]
    },
    {   
        "id": 4,
        "name":"Full STACK",
        "description":"created proyects of zero, implement un backend server ",
        "icon": <i className="fi fi-br-smartphone"></i>,
        "proyects":[
            {
                "id": 1,
                "name": "full stack FUNDACION ACUERDATE DE MI",
                "images":[Css, Html, Js, React],
                "description": "",
                "fondo": pokeApi
            },
            {
                "id": 2,
                "name": "PARKING APPSHEET",
                "images":[Appsheet, GoogleScript],
                "description": "",
                "fondo": parking,
                "link": "https://www.youtube.com/watch?v=2s5ge7NTWi0"
            },
            {
                "id": 3,
                "name": "ELECTRICOS AVAL",
                "images":[Wordpress, Wocomerce],
                "description": "",
                "fondo": aval,
                "link": "https://electricosaval.com/"
            },
            {
                "id": 3,
                "name": "ELECTROMUSICAL",
                "images":[Wordpress, Wocomerce],
                "description": "",
                "fondo": Electromusical,
                "link": "https://electromusicaldelllano.com/"
            }
        ]
    }

]
export default data