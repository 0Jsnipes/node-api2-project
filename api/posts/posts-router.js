// implement your posts router here
const express = require('express')
const posts = require('./posts-model')
const router = express.Router()

router.get('/', (req, res) => {
 posts.find()
    .then (found => {
    res.json(found)
})
.catch(err=> {
    res.status(500).json({
        message:'The posts information could not be retrieve',
        err: err.message,
        stack: err.stack,
    })
}
)}) 
router.get('./:id', async (req, res) => {
    try {
        const Post = await posts.findById(req.params.id)
        if(!Post){
            res.status(404).json({})
        }
     }
    catch(err) {
            res.status(500).json({
                message:'The posts information could not be retrieve',
                err: err.message,
                stack: err.stack,
            })
        }
    })
router.post('./', (req, res) => {

}) 
router.put('./:id', (req, res) => {

}) 
router.delete('./:id', (req, res) => {

}) 
router.get('./:id/messages', (req, res) => {

}) 

module.exports = router
