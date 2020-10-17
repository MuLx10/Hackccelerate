import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface ArticleListConfig {
  type: string;

  filters: {
    tag?: string,
    author?: string,
    favorited?: string,
    limit?: number,
    offset?: number
  };
}


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})

export class ForumComponent implements OnInit {

  constructor() { }

  isAuthenticated: boolean;
  listConfig: ArticleListConfig = {type: 'all', filters: {}};

  tags: Array<string> = ['One', 'Two', 'Three'];
  tagsSelected: Array<string> = ['One', 'Three'];
  tagsLoaded = false;
  
  content: string;

  ngOnInit(): void {
  	this.isAuthenticated = true;
  	this.content = 'Discuss';
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

  setListTo(type: string = '', filters: Object = {}) {
    // If feed is requested but user is not authenticated, redirect to login
    if (type === 'feed' && !this.isAuthenticated) {
      return;
    }

    // Otherwise, set the list object
    this.listConfig = {type: type, filters: filters};
  }

}


