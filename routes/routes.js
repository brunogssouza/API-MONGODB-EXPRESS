import express from 'express';
import { getAllPosts, getPost, createPost, deletePost, updatePost } from "../controllers/users.js";

const router = express.Router();

// GET ROUTES

router.get('/',  getAllPosts);
router.get('/:id', getPost);

//POST ROUTES

router.post('/',  createPost);


// DELETE ROUTES 
router.delete('/:id',  deletePost);

// PATCH ROUTES
router.patch('/:id', updatePost);


export default router;