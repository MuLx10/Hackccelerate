import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  fetchPostsData(username:String, tags: Object){
  	return this.http.get('/assets/data/posts.json');
  }

  fetchAllTags(){
  	return this.http.get('/assets/data/alltags.json')
  }

  fetchComments(){
  	return this.http.get('/assets/data/comments.json');
  }
}
