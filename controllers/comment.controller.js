import Comment from "../models/comment.model.js";

async function FindAll(req, res) {
    try {
        let all = await Comment.findAll()
        res.status(201).send({data: all}) 
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
}



export {FindAll, FindOne}