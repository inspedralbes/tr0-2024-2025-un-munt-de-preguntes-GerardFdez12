let data= {
    "preguntes" :[
    {
        "pregunta": "Quina marca de cotxes utilitza el lema 'Ultimate Driving Machine'?",
        "resposta_correcta": "BMW",
        "respostes_incorrectes": ["Mercedes-Benz", "Audi", "Lexus"],
        "imatge": "https://exemple.com/bmw.jpg"
    },
    {
        "pregunta": "Quina marca és coneguda pel seu logotip amb el cavall rampant?",
        "resposta_correcta": "Ferrari",
        "respostes_incorrectes": ["Lamborghini", "Porsche", "Maserati"],
        "imatge": "https://exemple.com/ferrari.jpg"
    },
    {
        "pregunta": "Quina marca de cotxes té el lema 'The Power of Dreams'?",
        "resposta_correcta": "Honda",
        "respostes_incorrectes": ["Toyota", "Nissan", "Hyundai"],
        "imatge": "https://exemple.com/honda.jpg"
    },
    {
        "pregunta": "Quina empresa és coneguda per fabricar els cotxes Model S i Model 3?",
        "resposta_correcta": "Tesla",
        "respostes_incorrectes": ["BMW", "Audi", "Ford"],
        "imatge": "https://exemple.com/tesla.jpg"
    },
    {
        "pregunta": "Quina marca utilitza l'emblema de l'elèfant amb el lema 'The Best or Nothing'?",
        "resposta_correcta": "Mercedes-Benz",
        "respostes_incorrectes": ["Audi", "BMW", "Jaguar"],
        "imatge": "https://exemple.com/mercedes.jpg"
    },
    {
        "pregunta": "Quina marca és coneguda pel seu logotip amb un anell d'argent?",
        "resposta_correcta": "Audi",
        "respostes_incorrectes": ["BMW", "Porsche", "Volkswagen"],
        "imatge": "https://exemple.com/audi.jpg"
    },
    {
        "pregunta": "Quina marca utilitza el lema 'Drive Your Ambition'?",
        "resposta_correcta": "Nissan",
        "respostes_incorrectes": ["Toyota", "Hyundai", "Kia"],
        "imatge": "https://exemple.com/nissan.jpg"
    },
    {
        "pregunta": "Quina marca té un logotip amb una 'L' gran que representa luxe?",
        "resposta_correcta": "Lexus",
        "respostes_incorrectes": ["Cadillac", "Infiniti", "Acura"],
        "imatge": "https://exemple.com/lexus.jpg"
    },
    {
        "pregunta": "Quina marca és famosa per la producció del model Mustang?",
        "resposta_correcta": "Ford",
        "respostes_incorrectes": ["Chevrolet", "Dodge", "Chrysler"],
        "imatge": "https://exemple.com/ford.jpg"
    },
    {
        "pregunta": "Quina empresa de cotxes és coneguda per la producció del model 911?",
        "resposta_correcta": "Porsche",
        "respostes_incorrectes": ["Ferrari", "Audi", "Maserati"],
        "imatge": "https://exemple.com/porsche.jpg"
    },
    {
        "pregunta": "Quina marca de cotxes utilitza el lema 'What Drives You?'?",
        "resposta_correcta": "Subaru",
        "respostes_incorrectes": ["Mazda", "Honda", "Toyota"],
        "imatge": "https://exemple.com/subaru.jpg"
    },
    {
        "pregunta": "Quina marca de cotxes és coneguda pel seu logotip de la 'V' doble?",
        "resposta_correcta": "Volvo",
        "respostes_incorrectes": ["Volkswagen", "Toyota", "Ford"],
        "imatge": "https://exemple.com/volvo.jpg"
    },
    {
        "pregunta": "Quina marca és coneguda per la producció del model Civic?",
        "resposta_correcta": "Honda",
        "respostes_incorrectes": ["Toyota", "Nissan", "Mazda"],
        "imatge": "https://exemple.com/honda_civic.jpg"
    },
    {
        "pregunta": "Quina empresa fabrica el model Corolla?",
        "resposta_correcta": "Toyota",
        "respostes_incorrectes": ["Honda", "Hyundai", "Ford"],
        "imatge": "https://exemple.com/toyota.jpg"
    },
    {
        "pregunta": "Quina marca de cotxes utilitza el lema 'The Ultimate Driving Machine'?",
        "resposta_correcta": "BMW",
        "respostes_incorrectes": ["Audi", "Mercedes-Benz", "Lexus"],
        "imatge": "https://exemple.com/bmw_ultimate.jpg"
    },
    {
        "pregunta": "Quina marca és coneguda per produir el model Q7?",
        "resposta_correcta": "Audi",
        "respostes_incorrectes": ["BMW", "Mercedes-Benz", "Volvo"],
        "imatge": "https://exemple.com/audi_q7.jpg"
    },
    {
        "pregunta": "Quina empresa és famosa per la producció del model Wrangler?",
        "resposta_correcta": "Jeep",
        "respostes_incorrectes": ["Toyota", "Ford", "Chevrolet"],
        "imatge": "https://exemple.com/jeep.jpg"
    },
    {
        "pregunta": "Quina marca utilitza el lema 'Innovation that Excites'?",
        "resposta_correcta": "Nissan",
        "respostes_incorrectes": ["Hyundai", "Toyota", "Kia"],
        "imatge": "https://exemple.com/nissan_innovation.jpg"
    },
    {
        "pregunta": "Quina empresa de cotxes és coneguda per fabricar el model Outback?",
        "resposta_correcta": "Subaru",
        "respostes_incorrectes": ["Toyota", "Honda", "Ford"],
        "imatge": "https://exemple.com/subaru_outback.jpg"
    },
    {
        "pregunta": "Quina marca de cotxes té el lema 'The Best or Nothing'?",
        "resposta_correcta": "Mercedes-Benz",
        "respostes_incorrectes": ["BMW", "Audi", "Porsche"],
        "imatge": "https://exemple.com/mercedes_benz.jpg"
    },
    {
        "pregunta": "Quina empresa és coneguda pel seu logotip amb una estrella de tres puntes?",
        "resposta_correcta": "Mercedes-Benz",
        "respostes_incorrectes": ["Audi", "BMW", "Lexus"],
        "imatge": "https://exemple.com/mercedes_star.jpg"
    }
]
}
let opcions= ['A','B','C']

let htmlString=''

/*fetch('http://localhost/data.json')
.then(response => response.json())
.then(data => {
    console.log(data)
    mostrarPregunta(data)
})
*/
    
let i = 0    

        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/bmw.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/mercedes.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/lexus.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/Audi.png"></button>`)

        i++
        
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/lamborghini.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/maserati.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/porsche.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/ferrari.jpg"></button>`)

        i++

        //Pregunta 3
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/honda.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/toyota.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/nissan.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/hyundai.jpeg"></button>`)

        i++
        //Pregunta 4
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/bmw.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/mercedes.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/tesla.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/Audi.png"></button>`)

        i++
        //Pregunta 5
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/porsche.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/mercedes.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/jaguar.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/maserati.png"></button>`)

        i++
        //Pregunta 6
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/Audi.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/nissan.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/lexus.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/kia.png"></button>`)

        i++
        //Pregunta 7
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/hyundai.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/toyota.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/nissan.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/kia.png"></button>`)

        i++
        //Pregunta 8
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/cadillac.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/infiniti.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/lexus.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/acura.png"></button>`)

        i++
        //Pregunta 9
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/dodge.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/chevrolet.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/chrysler.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/ford.png"></button>`)

        i++
        //Pregunta 10
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/porsche.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/maserati.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/lexus.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/Audi.png"></button>`)

        i++
        //Pregunta 11
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/subaru.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/honda.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/mazda.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/toyota.jpeg"></button>`)

        i++
        //Pregunta 12
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/Audi.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/porsche.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/volkswagen.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/volvo.jpeg"></button>`)

        i++
        //Pregunta 13
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/honda.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/Audi.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/lexus.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/porsche.png"></button>`)

        i++
        //Pregunta 14
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/kia.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/maserati.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/tesla.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/toyota.jpeg"></button>`)

        i++
        //Pregunta 15
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/ford.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/maserati.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/jaguar.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/dodge.png"></button>`)

        i++
        //Pregunta 16
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/lexus.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/chrysler.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/Audi.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/mazda.jpeg"></button>`)

        i++
        //Pregunta 17
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/jeep.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/acura.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/ferrari.jpg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/kia.png"></button>`)

        i++
        //Pregunta 18
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/volvo.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/mercedes.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/nissan.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/Audi.png"></button>`)

        i++
        //Pregunta 19
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/lexus.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/subaru.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/tesla.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/bmw.png"></button>`)

        i++
        //Pregunta 20
        document.write(`<h2>${data.preguntes[i].pregunta}</h2>`)
        document.write(`<button><img width = 70px height = 70px src="img/mercedes.jpeg"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/Audi.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/bmw.png"></button>`)
        document.write(`<button><img width = 70px height = 70px src="img/lexus.jpeg"></button>`)

        i++
   