import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }


  fetchAllTags(){
  	return this.http.get('/assets/data/alltags.json')
  }

  fetchPostsData(username, tags, callback){
    this.http.post('http://localhost:3000/api/forum/getposts', {user: username, tags: tags})
    .subscribe(response => {
      console.log(response);
      if(response) callback(response);
    });
  }

  fetchComments(postId, callback){
  	this.http.post('http://localhost:3000/api/forum/getcomments', {postId: postId})
    .subscribe(response => {
      console.log(response);
      if(response) callback(response);
    });
  }

  createPost(post, callback) {
    this.http.post('http://localhost:3000/api/forum/compose', post)
    .subscribe(response => {
      console.log(response);
      callback(response);
    });
  }

  commentOnPost(comment, callback){
    this.http.post('http://localhost:3000/api/forum/comment', comment)
    .subscribe(response => {
      console.log(response);
      if(response) callback(response);
    });
  }

  likePost(post, callback){
    console.log(post)
    this.http.post('http://localhost:3000/api/forum/likePost', post)
    .subscribe(response => {
      console.log(response);
      if(response) callback(response);
    });
  }

  likeComment(comment, callback){
    this.http.post('http://localhost:3000/api/forum/likeComment', comment)
    .subscribe(response => {
      console.log(response);
      if(response) callback(response);
    });
  }
}
