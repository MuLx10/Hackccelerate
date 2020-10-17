import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  fetchPostsData(user:string, tags: Object){
  	return this.http.get('/assets/data/posts.json');
  }

  fetchAllTags(){
  	return this.http.get('/assets/data/alltags.json')
  }
}
