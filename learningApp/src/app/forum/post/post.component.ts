import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ForumService } from '../../services/forum.service';
@Component({
  selector: 'app-post',
  inputs:['user', 'tags'],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	posts: Object;

  constructor(private _http: ForumService, iconReg: MatIconRegistry, sanitizer: DomSanitizer) {
  	// iconReg.addSvgIcon(
  	// 	'thi'
  	// )
  }

  ngOnInit(): void {
  	this._http.fetchPostsData(this.user, this.tags).subscribe(data=>{
  		this.posts = data;
  		if(this.user !== 'all')
  			this.posts = this.posts.filter(e=>e.user === this.user);
  	});
  }

}
