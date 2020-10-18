const express = require('express');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler')
const Post = require('../models/post.model');
const Comment = require('../models/comment.model');
const router = express.Router();
module.exports = router;


router.get('/test', (req, res)=>{
  
  Post.find(query, (err, data)=>{
    res.status(200).json({
      message: "Working!",
      result: data
    })
  })
})


router.post('/getposts', (req, res, next) => {
  console.log(req.body);
  var query = {};
  // if(req.body.tags)
  //   query["tags"] = {$or: req.body.tags.map(e=>{return {"tags": e.name};}) };
  if(req.body.user !== 'all')
    query["user"] = req.body.user;

  console.log(query);
  Post.find(query, (err, data)=>{
    if(err)
      res.status(500).json({error: err});
     
    res.status(200).json({
      result: data
    })
  })
});

router.post('/getcomments', (req, res, next) => {
  console.log(req.body);

  Comment.find({postId: req.body.postId}, (err, data)=>{
    if(err)
      res.status(500).json({error: err});
     
    res.status(200).json({
      result: data
    })
  })
});

router.post('/compose', (req, res, next) => {
  console.log(req.body);

  const post = new Post({
    _id:  new mongoose.Types.ObjectId(),
    title: req.body.title,
    content: req.body.content,
    user: req.body.user,
    tags: req.body.tags,
    timestamp: new Date().toGMTString(),
    likes: 0,
    comments: 0
  });

  post.save()
  .then((result) => {res.status(201).json({message: 'Post published!',result: result});})
  .catch(err => {console.log('Post not created!');res.status(500).json({error: err});});
});


router.post('/comment', (req, res, next) => {
  console.log(req.body);
  const comment = new Comment({
    _id: new mongoose.Types.ObjectId(),
    postId: req.body.postId,
    content: req.body.content,
    user: req.body.user,
    timestamp: new Date().toGMTString(),
    likes: 0
  });
  Post.findOneAndUpdate({_id: req.body.postId}, {$inc: {'comments': 1}}, {new: true}).exec();

  comment.save()
  .then((result) => {res.status(201).json({message: 'Comment published!',result: result});})
  .catch(err => {console.log('Comment not created!');res.status(500).json({error: err});});
});

router.post('/likePost', (req, res, next) => {
  console.log(req.body);
  let post = req.body;
  Post.findOneAndUpdate({_id: post._id}, {$inc: {'likes': 1}}, {new: true})
  .then((result)=>{res.status(201).json({message: 'Post Liked!',result: result});})
  .catch(err => {console.log('Not liked!');res.status(500).json({error: err});});
});

router.post('/likeComment', (req, res, next) => {
  console.log(req.body);
  let comment = req.body;
  Comment.findOneAndUpdate({_id: comment._id}, {$inc: {'likes': 1}}, {new: true})
  .then((result)=>{res.status(201).json({message: 'Comment Liked!',result: result});})
  .catch(err => {console.log('Not liked!');res.status(500).json({error: err});});
});