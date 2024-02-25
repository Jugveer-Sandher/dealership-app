import { prismaClient } from '../src/util/db

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
    return prismaClient.post.createMany({
        data: [
            {
                "authorId": "ebd68ed8-2ed9-4130-8c04-bc69cb96a901",
                "carId": "123",
                "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "make": "Toyota",
                "model": "Camry",
                "year": 2019,
                "color": "Red",
                "price": 20000,
                "kilometers": 123456
              },
              {
                "authorId": "ebd68ed8-2ed9-4130-8c04-bc69cb96a901",
                "carId": "456",
                "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "make": "Honda",
                "model": "Civic",
                "year": 2017,
                "color": "Blue",
                "price": 18000,
                "kilometers": 95000
              },
              {
                "authorId": "ebd68ed8-2ed9-4130-8c04-bc69cb96a901",
                "carId": "789",
                "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "make": "Ford",
                "model": "Fusion",
                "year": 2020,
                "color": "Black",
                "price": 22000,
                "kilometers": 80000
              },
              {
                "authorId": "ebd68ed8-2ed9-4130-8c04-bc69cb96a901",
                "carId": "101",
                "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "make": "Chevrolet",
                "model": "Malibu",
                "year": 2018,
                "color": "White",
                "price": 19000,
                "kilometers": 110000
              },
              {
                "authorId": "ebd68ed8-2ed9-4130-8c04-bc69cb96a901",
                "carId": "202",
                "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "make": "Toyota",
                "model": "Rav4",
                "year": 2016,
                "color": "Silver",
                "price": 17000,
                "kilometers": 75000
              },
              {
                "authorId": "ebd68ed8-2ed9-4130-8c04-bc69cb96a901",
                "carId": "303",
                "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "make": "Honda",
                "model": "Pilot",
                "year": 2015,
                "color": "Green",
                "price": 21000,
                "kilometers": 98000
              },
              {
                "authorId": "ebd68ed8-2ed9-4130-8c04-bc69cb96a901",
                "carId": "404",
                "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "make": "Ford",
                "model": "Escape",
                "year": 2017,
                "color": "Blue",
                "price": 19000,
                "kilometers": 85000
              }
        ]
    })
}
