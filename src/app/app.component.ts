import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { NgModel } from '@angular/forms';
import {chatModule} from './Components/Chat/chat.components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient){}

  // public login(){
  //   console.log('asdgfasg');
  //   this.http.get('http://localhost:8888/test',
  //     {headers : new HttpHeaders().set(
  //       'Access-Control-Allow-Origin', '*')
  //       }).subscribe(data => {
  //           console.log(data);
  //       });
  //       console.log('2222');
  // }

  // public login(){
  // this.http.get('http://192.168.255.8:8888/test').subscribe((res:Response) => {
  //   console.log(res);
  // });

  // }

  public login(){
    this.http.get('http://localhost:8888/test').subscribe(res=>console.log(res));
  }

public test(value){
  let data={id:'sgsdfgfdsgsdfg',name:value};
  
  this.http.post('http://localhost:8888/post',data).subscribe(res=>console.log(res));
}
  
}

