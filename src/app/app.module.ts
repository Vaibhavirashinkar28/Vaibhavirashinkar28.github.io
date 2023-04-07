import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RatingModule }  from 'ng-starrating';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './components/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodpageComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
