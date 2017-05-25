import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from  './tasks.service'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {RouterModule, Routes} from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { PostponeTaskComponent } from './postpone-task/postpone-task.component';
import {ModalService} from "./modal.service";

const routes: Routes = [
  { path: 'tasks',pathMatch: 'full' ,  component: TasksComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  {path:  'tasks/:id/postpone', component: PostponeTaskComponent},
  {path: '',component:TasksComponent},
  { path: '**', redirectTo: '/tasks', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailsComponent,
    PostponeTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [TasksService,ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
