import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {searchPageComponent} from './ViewsAndControllers/searchPage/searchPage';

export const router: Routes =[
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path:'searchPage', component: searchPageComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);