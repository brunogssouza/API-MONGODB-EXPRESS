import  PostSchema  from "../model/post.js"


// GET CONTROLLLERS
export const getAllPosts = async (req,res) => {
    try {
        const posts = await PostSchema.find();
        res.send(posts);
    }catch(error) {
        res.json({message:error})
    }
}

export const getPost = async (req,res) => {
    
    try {
    const specificPost = await PostSchema.findById(req.params.id)
    res.send(specificPost)
    }catch(err) {
        res.json({message:err});
    }
}

// POST CONTROLLLERS

export async function createPost(req, res) {

    const post = new PostSchema({
        title: req.body.title,
        description: req.body.description
    })


    try {
        const savedPost = await post.save()
        res.json(savedPost)

    } catch (error) {
        res.json({ message: error })
    }
}

// DELETE CONTROLLLERS

export async function deletePost(req, res) {
// O remove terá como parametro o _id de PostSchema que der match(:) com id fornecido de parametro na requisição.
    try {
    const deletedPost = await PostSchema.remove({_id: req.params.id})
    res.send(`The post was deleted from the database`)
    }catch(err) {
        res.json({message:err});
    }
}

// UPDATE CONTROLLLERS

export const updatePost = async (req,res) => {
    
    try {
    const updatedPost = await PostSchema.updateOne(
        {_id: req.params.id},
        {$set: {title: req.body.title}}
    );
    res.send(updatedPost);
    }catch(err) {
        res.json({message:err});
    }
}