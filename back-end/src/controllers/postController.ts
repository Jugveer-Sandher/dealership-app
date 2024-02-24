import { createPost, updateCar, deleteCar, getCar, getAllCars } from "../services/postService";
import type { Request, Response, NextFunction } from "express"
import { prismaClient } from "../util/db";

const CreatePost = async (req: Request, res: Response, next: NextFunction) => {
    try {

        // Parse the JSON into a JavaScript object
        const data = req.body;

        // Create a new Car object using destructuring
        const { authorId, carId, image, make, model, year, color, price, kilometers } = data;
        
        if (!image || !make || !model || !year || !color || !price || !kilometers) {
            throw new Error("Missing required fields");
        }
    
        const newCar = await createPost(authorId, carId, image, make, model, year, color, price, kilometers);
        res.status(201).json({
            newCar
        });
        } catch (error) {
        next(error);
        }
};

// const GetCars = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const cars = await getAllCars();
//         res.status(200).json({
//             cars,
//         });
//     } catch (error) {
//         next(error);
//     }
// };

// const GetCar = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { id } = req.params;
//         const idAsInt = parseInt(id, 10);
//         const car = await getCar(idAsInt);
//         if (!car) {
//             throw new Error(`Car with id = ${id} does not exist`);
//         }
//         res.status(200).json({
//             car,
//         });
//     } catch (error) {
//         next(error);
//     }
// };

// const DeleteCar = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { id } = req.params;
//         const idAsInt = parseInt(id, 10);
  
//         const post = await getCar(idAsInt);
//         if (!post) {
//             throw new Error(`Post with id = ${id} does not exist`);
//         }
  
//         await deleteCar(idAsInt);
//         res.status(200).json({
//         message: "Post deleted",
//     });
//     } catch (error) {
//         next(error);
//     }
// };

// const UpdateCar = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { id } = req.params;
//       const idAsInt = parseInt(id, 10);
//       const { image, make, model, year, color, price, kilometers } = req.body;
  
//       const post = await getCar(idAsInt);
//       if (!post) {
//         throw new Error(`Post with id = ${id} does not exist`);
//       }

//       const upCar = await updateCar(
//         idAsInt,
//         image,
//         make,
//         model,
//         year,
//         color,
//         price,
//         kilometers
//       );
//       res.status(200).json({
//         upCar,
//       });
//     } catch (error) {
//       console.log(error);
//       next(error);
//     }
// };

export { CreatePost }//, GetCars, GetCar, DeleteCar, UpdateCar }