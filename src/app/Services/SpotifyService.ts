import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private client_id = "124f0d4aefa0477b9fb4e19ecde5d6b9";
    private client_secret = "cc57d70aaa184ee0abb167bf15b28f85";
    private redirect = "http%3A%2F%2Flocalhost%3A4200%2Fcallback";
    private searchUrl: string;
    private encoded = btoa(this.client_id + ':' + this.client_secret);

    constructor(private http:Http){}

    // getToken(){
    //     let params = ('grant_type=client_credentials');
    //     let headers = new Headers();
    //     headers.append( 'Authorization', 'Basic ' + this.encoded);
    //     headers.append('Content-Type' , 'application/x-www-form-urlencoded');
    //     return this.http.post('https://accounts.spotify.com/api/token', params , {headers : headers})
    //         .map(res=> res.json());
    //   }


    // searchMusic(str:string, type='artist'){
    //     this.searchUrl='https://api.spotify.com/search?query='+str+'&offset=0&limit=20&type'+type+'&market=NL&client_id'+ this.client_id;
    //     let headers = new Headers();
    //     headers.append('Authorization' , 'Bearer ' + this.getToken());
    //     // "Content-Type: application/json"
    //     headers.append( "Content-Type", "application/json");

    //     return this.http.get(this.searchUrl)
    //         .map(res => res.json);
    // }

    authUser(){
        // let url = "https://accounts.spotify.com/authorize?client_id="+this.client_id+'&response_type=code&redirect_uri='+this.redirect+'&scope=user-read-private%20user-read-email&state=34fFs29kd09';
        // let headers = new Headers();
        // headers.append('Access-Control-Allow-Origin','*');
        // headers.append('Accept','application/JSON');
        // this.http.get(url,{headers: headers}).subscribe(res=>console.log(res));
        this.http.get('http://localhost/index.php/main/get').subscribe(res=>console.log(res));

    }
}