import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TasksService} from "../tasks.service";
import {SimpleTask} from "../models/simple-task";
import {Priority} from "../models/priority";
import {DateWrapper} from "../models/date-wrapper";
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-task',
  templateUrl: './task-details.component.html'
})
export class TaskDetailsComponent implements OnInit {

  task: SimpleTask = SimpleTask.empty();
  priorities: string[]

  constructor(private tasksService: TasksService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: ModalService) {
    this.priorities = Object.keys(new Priority());
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.tasksService.getTask(+params['id']))
      .subscribe(task=> {
        task.priority = this.priorities.find(x=>x === task.priority);
        this.task = task
      });
  }


  save(): void {
    this.tasksService.update(this.task)
      .then(task=> this.router.navigate(['/tasks']))
      .catch(this.modalService.error);
  }

  private toISOstring(dateLikeObject: any): string {
    return DateWrapper.toISOString(dateLikeObject);
  }

  private validate(task: SimpleTask): string[] {
    let erros: string[] = new Array();

    //As rule of the thumb we should always use ndTranslate instead of hard coding values
    if (!task.dueDate) {
      erros.push('must choose a due date');
    }

    if (!task.title || !task.title.length) {
      erros.push('must have a title');
    }

    if (!task.description || !task.description.length) {
      erros.push('must have a description');
    }

    return erros;
  }


}
