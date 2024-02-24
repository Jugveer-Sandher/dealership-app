import { createPost, updatePost, deletePost, getPost, getAllPosts } from "../services/postService";
import type { Request, Response, NextFunction } from "express"

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

const GetAllPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const posts = await getAllPosts();
        res.status(200).json({
            posts,
        });
    } catch (error) {
        next(error);
    }
};

const GetPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const post = await getPost(id);
        if (!post) {
            throw new Error(`Post with id = ${id} does not exist`);
        }
        res.status(200).json({
            post,
        });
    } catch (error) {
        next(error);
    }
};

const DeletePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
  
        const post = await getPost(id);
        if (!post) {
            throw new Error(`Post with id = ${id} does not exist`);
        }
  
        await deletePost(id);
        res.status(200).json({
        message: "Post deleted",
    });
    } catch (error) {
        next(error);
    }
};

const UpdatePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { image, make, model, year, color, price, kilometers } = req.body;
  
      const post = await getPost(id);
      if (!post) {
        throw new Error(`Post with id = ${id} does not exist`);
      }

      const upCar = await updatePost(
        id,
        image,
        make,
        model,
        year,
        color,
        price,
        kilometers
      );
      res.status(200).json({
        upCar,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
};

export { CreatePost , GetAllPosts, GetPost, UpdatePost, DeletePost}