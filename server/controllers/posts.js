import express from 'express';
import mongoose from 'mongoose';

import PostModel from '../models/posts.js';

const router = express.Router();

export const getPosts = async(req, res) => {
    try {
        const posts = await PostModel.find();

        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getPost = async (req, res) => {
    const id = req.params;
    try {
        const post = await PostModel.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostModel({ ...post, creator: req.userId, createdAt: new Date().toISOString() });
    try {
        await newPost.save();

        res.status(200).json(newPost);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {

}

export const deletePost = async (req, res) => {

}

export const likePost = async (req, res) => {

}

export default router;