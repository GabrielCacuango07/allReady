import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//rutas 

import {APP_ROUTING} from './app.routes';
import { FooterComponent } from './components/footer/footer.component';    
import { menuService } from './services/menu.service';

// componentes 


//servcios 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CarouselModule,
    APP_ROUTING,
    FontAwesomeModule
   
  ],
  providers: [ menuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
