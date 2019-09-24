import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HighlightDirectiveDirective } from './highlight-directive.directive';
import { HomeComponent } from './home/home.component';

import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirectiveDirective,
    HomeComponent,
    ProjectsComponent,
    ServicesComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      {path: "home", component:HomeComponent},
      {path:"projects",component:ProjectsComponent},
      {path:"services",component:ServicesComponent},
      {path:"contacts",component:ContactsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
