import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
	post: any;
  commentContent: String;
	comments: Array<any>;

  constructor(private _http: ForumService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  	this.post = this.route.snapshot.params;
	  this._http.fetchComments(this.post._id, (res)=>{
      this.comments = res.result;
    });
  }

  likePost(){
    this._http.likePost({_id: this.post._id, likes: this.post.likes}, (res)=>{
      this.post = res.result;
    })
  }

  likeComment(id){
    this._http.likeComment({_id: id}, (res)=>{})
  }

  commentOnPost(){
    let comment = {
      user:'mulx10',
      postId: this.post._id,
      content: this.commentContent 
    }
    this._http.commentOnPost(comment, (res)=>{
      this.comments.unshift(res.result);
      this.commentContent = '';
    })
  	
  }

}
