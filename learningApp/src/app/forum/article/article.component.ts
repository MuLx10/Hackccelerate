import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
	id: any;
	post: any;
	comments: Array<any>;

  constructor(private _http: ForumService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  	this.post = this.route.snapshot.params;
  	if(this.post){
  		let comments = this.post.comments;
  		this._http.fetchComments().subscribe((data: Array<any>) =>{
  			this.comments = data;
  		});

  	}
  	
  }

  likePost(id){
  }

  likeComment(id){

  }

  commentOnPost(id){
  	
  }

}
