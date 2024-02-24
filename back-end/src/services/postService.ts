import { Post } from "@prisma/client";

const { prismaClient } = require('../util/db.ts');

const createPost = async (
    authorId: string,
    carId: string,
    image: string,
    make: string,
    model: string,
    year: number,
    color: string,
    price: number,
    kilometers: number
) => {
    const newPost = await prismaClient.post.create({
        data: {
            authorId,
            carId,
            image,
            make,
            model,
            year,
            color,
            price,
            kilometers
        }
    });

    return newPost;
};


const updateCar = async (
    carId: string,
    image: string,
    make: string,
    model: string,
    year: number,
    color: string,
    price: number,
    kilometers: number
) => {
    const car = await prismaClient.car.update({
        where: {
            id: carId
        },
        data: {
            image: image,
            make: make,
            model: model,
            year: year,
            color: color,
            price: price,
            kilometers: kilometers
        }
    });

    return car;
};

const deleteCar = async (carId: number) => {
    const del = await prismaClient.car.delete({
      where: {
        id: carId,
      },
    });
};

const getCar = async (carId: number) => {
    const car = await prismaClient.car.findUnique({
      where: {
        id: carId,
      }
    })

    return car;
};
  
const getAllCars = async () => {
    const car = await prismaClient.car.findMany()
    return car;
};

export { createPost, getCar, getAllCars, updateCar, deleteCar };
