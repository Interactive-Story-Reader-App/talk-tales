import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  public user = {
    _id: '',
    _rev: '',
    user_name: '',
    user_email: '',
    role: ''
  };

  private _url: string = "https://talk-tales-users.herokuapp.com/api/v1/users/";

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let email = this.route.snapshot.paramMap.get('email');

    this.getUserDetails(email)
    .subscribe(data => {
      if(data._id == null || data._id == ''){
        console.log("No User found");
        this.router.navigate(['/login']);
      }else{
        if(data.role == 'author'){
          this.router.navigate(['/authors/' + data._id]);
        }else{
          this.router.navigate(['/index']);
        }
      }
    });
  }

  getUserDetails(user_email : string): Observable<User>{
    return this.http.get<User>(this._url + "login?user_email=" + user_email);
  }

}
