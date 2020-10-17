import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Post} from '../models/post.model';
import { ForumService } from '../services/forum.service';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})

export class ForumComponent implements OnInit {

  constructor(private _http: ForumService, private cdRef:ChangeDetectorRef) { }

  user: string = "all";
  isAuthenticated: boolean;
  listConfig: Post = {type: 'all', filters: {}};

  tags: any = null;
  selectedTags: any = null;
  tagsLoaded = false;

  content: string;

  ngOnInit(): void {
  	this.isAuthenticated = true;
  	this.content = 'Discuss';
    if(this.tags === null){
      this._http.fetchAllTags().subscribe(data=>{
        this.tags = data; this.tagsLoaded = true;
      });
    }
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }

  getPosts(index: number){
  	if(index === 1){
  		this.content = 'Discuss';
  	}
  	else{
  		this.content = 'My posts';
  	}
  	return this.content;
  }

  changeSelected($event){
    this.selectedTags = this.tags.filter(e=>e.selected === true);
  }

}


