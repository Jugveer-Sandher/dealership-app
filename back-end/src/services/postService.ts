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


const updatePost = async (
    postId: string,
    image: string,
    make: string,
    model: string,
    year: number,
    color: string,
    price: number,
    kilometers: number
) => {
    const post = await prismaClient.post.update({
        where: {
            id: postId
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

    return post;
};

const deletePost = async (postId: string) => {
    const del = await prismaClient.post.delete({
      where: {
        id: postId,
      },
    });
};

const getPost = async (postId: string) => {
    const post = await prismaClient.post.findUnique({
      where: {
        id: postId,
      }
    })

    return post;
};
  
const getAllPosts = async () => {
    const posts = await prismaClient.post.findMany()
    return posts;
};

export { createPost, getPost, getAllPosts, updatePost, deletePost };
