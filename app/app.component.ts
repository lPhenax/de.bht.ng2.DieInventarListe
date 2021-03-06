import { Component }                from '@angular/core';
import { ROUTER_DIRECTIVES }        from '@angular/router';

import { HeroService }              from "./services/hero.service";
import { ItemService }              from "./services/item.service";
import {HeroesComponent}            from "./components/hero/heroes.component";
import {DashboardComponent}         from "./components/dashboard.component";
import {HeroDetailComponent}        from "./components/hero/hero-detail.component";
import {NewHeroDetailComponent}     from "./components/hero/new-hero-detail.component";

@Component({
    selector: 'my-app',
    template: `
    <header>
    <div class="wrapper container">
        <div class="row">
             <h2 class="text-center">{{title}}</h2>
             <nav class="text-center">
                <a [routerLink]="['/']">Home</a>
                <a [routerLink]="['/heroes']">Heroes</a>
            </nav>
        </div>
       
    </div>
        
    </header>
    <router-outlet></router-outlet>
    <router-outlet name="modal" ></router-outlet>
    <footer class="footer">
        <div class="text-center">
            This project was developed by {{developers}}
        </div>
    </footer>
  `,
    providers:  [HeroService, ItemService],
    directives: [ROUTER_DIRECTIVES],
    precompile: [DashboardComponent, HeroesComponent, HeroDetailComponent, NewHeroDetailComponent]
})

export class AppComponent{
    title       : string;
    developers  : string;

    constructor() {
        this.title = "Die Inventarliste";
        this.developers = "Andreas Burger | Daniel Schleußner";
    }
}