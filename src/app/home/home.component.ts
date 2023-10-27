import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languages: Array <String> = [];

  constructor(
    private sharedLanguageService: AppService
  ) { }

  ngOnInit(): void {
    //Add language name here
    this.languages=["Chinese","English","French","Spanish"]
  }

  passLanguage(value:any){
    this.sharedLanguageService.language = value;
  }

}
