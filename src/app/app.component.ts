import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import {User} from "./user";
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  template: `<div>{{this.httpService.errorMessage}}</div>
    <ul>
    @for(user of users; track $index){
         <li>{{user?.name}} ({{user?.age}})</li>
         }
    </ul>`,
  providers: [HttpService],
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  users: User[]=[];
  constructor(private httpService: HttpService){}
  ngOnInit() {

    this.httpService.getUsers().subscribe({next:(data: User[]) => this.users=data});
  }
}
