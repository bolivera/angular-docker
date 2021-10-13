import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[] = []
  user: any
  constructor(
    private postService: PostsService,
    private spinner: NgxSpinnerService,
    private router: ActivatedRoute,
  ) {

    this.router.params.subscribe(params => {

      this.loadPostUser(params['id']);
      this.getDatosUsuer(params['id']);
    });
  }

  ngOnInit(): void {
    // this.loadPostUser()
  }

  async loadPostUser(id: string) {
    this.spinner.show();
    await this.postService.getPostUser(id).subscribe((res: any) => {
      this.spinner.hide();
      this.posts = res.data;
    })
  }

  async getDatosUsuer(id: string) {
    this.spinner.show();
    await this.postService.getDatosUser(id).subscribe((res: any) => {
      this.spinner.hide();
      this.user = res;
      console.log(this.user);

    })
  }

}

