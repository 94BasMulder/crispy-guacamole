import { Component } from '@angular/core';
import {SpotifyService} from '../../Services/SpotifyService';


@Component({
    styleUrls:[],
    templateUrl: './searchPage.html',
    selector: 'searchPage',
    providers:[SpotifyService]
})

export class searchPageComponent{
    constructor (private spotifyService: SpotifyService){}

    searchMusic(search:string){
        // this.spotifyService.searchMusic(search)
        //     .subscribe(res=>console.log(res));
        this.spotifyService.authUser();
    }

}