import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BuchstabeComponent } from './buchstabe/buchstabe.component';
import { BundeslandComponent } from './bundesland/bundesland.component';
import { BundeslandDetailComponent } from './bundesland-detail/bundesland-detail.component';
import { NgModule } from '@angular/core';
import { BundeslandListComponent } from './bundesland-list/bundesland-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BundeslandComponent,
    BundeslandDetailComponent,
    BuchstabeComponent,
    BundeslandListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
