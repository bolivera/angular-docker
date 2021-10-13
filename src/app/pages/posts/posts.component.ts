import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = []
  id =  null
  constructor(
    private postService : PostsService,
    private spinner: NgxSpinnerService
  ) {
    this.loadPost();
  }

  ngOnInit(): void {
  }

  loadPost(){
    this.spinner.show();
    this.postService.getAllPost().subscribe( (res:any) => {
      this.spinner.hide();
      this.posts = res.data;
      console.log(this.posts);
      
    })
  }

}
