import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ForumService } from '../../services/forum.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	posts: any;
	@Input() username: String | null = null;
	@Input() tags: any | null = null;
  constructor(private _http: ForumService, private router: Router) {
  }

  ngOnInit(): void {
    this._http.fetchPostsData(this.username, this.tags, (res)=>{
  		this.posts = res.result;
      console.log(this.posts)
    });
  }

  likePost(id){
    this._http.likePost({_id: id}, (res)=>{})
  }

  openArticle(post){
    this.router.navigate(['article', {...post}]);
  }

}
