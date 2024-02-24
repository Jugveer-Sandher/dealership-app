import { db } from '../src/util/db.server'

type Car = {
    image: string,
    make: string, 
    model: string,
    year: number,      
    color: string,
    price: number,     
    kilometers: number
}

async function seed() {
    return db.car.createMany({
        data: [
            {
                "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "make": "Electra Motors",
                "model": "Thunderstrike EV",
                "year": 2024,
                "color": "Electric Silver",
                "price": 65000,
                "kilometers": 20000
            },
            {
                "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "make": "Apex Auto",
                "model": "Stealth X",
                "year": 2022,
                "color": "Midnight Black",
                "price": 70000,
                "kilometers": 30000
            },
            {
                "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "make": "Velocity Motors",
                "model": "Nebula GT",
                "year": 2023,
                "color": "Solar Blue",
                "price": 80000,
                "kilometers": 15000
            },
        ]
    })
}

function getCars(): Array<Car> {
    return [
        
        {
            "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "make": "Electra Motors",
            "model": "Thunderstrike EV",
            "year": 2024,
            "color": "Electric Silver",
            "price": 65000,
            "kilometers": 20000
        },
        {
            "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "make": "Apex Auto",
            "model": "Stealth X",
            "year": 2022,
            "color": "Midnight Black",
            "price": 70000,
            "kilometers": 30000
        },
        {
            "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "make": "Velocity Motors",
            "model": "Nebula GT",
            "year": 2023,
            "color": "Solar Blue",
            "price": 80000,
            "kilometers": 15000
        },
    ]
}
