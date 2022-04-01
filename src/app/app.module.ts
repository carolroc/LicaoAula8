import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TimerService } from './timer.service';
import { HomeComponent } from './home/home.component';
import { ClassesService } from './classes.service';
import { ClassesComponent } from './classes/classes.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'aulas', component: ClassesComponent },
    ]),
  ],
  declarations: [AppComponent, HomeComponent, ClassesComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [TimerService, ClassesService],
})
export class AppModule {}
