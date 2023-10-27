import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  constructor(
    private service: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.service.language==""){
      this.router.navigateByUrl("/home")
    }
  }
  page = 1;
  lastPage = 3;
  imgLink = `assets/codes/${this.service.language}/${this.service.language}${this.page}.jpg`;
  prevDisabled = true;
  nextDisabled = false;

  //skip to next page
  nextPage() {
    if (this.page < this.lastPage) {
      this.page = this.page + 1;
      this.imgLink = `assets/codes/${this.service.language}/${this.service.language}${this.page}.jpg`;
      this.prevDisabled=false;
      if (this.page >= this.lastPage){
        this.nextDisabled=true;
      }
    }
  }

  //skip to previous page
  prevPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.imgLink = `assets/codes/${this.service.language}/${this.service.language}${this.page}.jpg`;
      this.nextDisabled = false
      if(this.page <= 1){
        this.prevDisabled=true;
      }
    }
  }

}
