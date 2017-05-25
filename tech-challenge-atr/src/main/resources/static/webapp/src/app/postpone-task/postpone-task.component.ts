import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TasksService} from "../tasks.service";
import {SimpleTask} from "../models/simple-task";
import {DateWrapper} from "../models/date-wrapper";
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-postone-task',
  templateUrl: './postpone-task.component.html'
})
export class PostponeTaskComponent implements OnInit {
  task: SimpleTask = SimpleTask.empty();

  constructor(private tasksService: TasksService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: ModalService) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.tasksService.getTask(+params['id']))
      .subscribe(task=> this.task = task);
  }

  toISOstring(dateLikeObject: any): string {
    return DateWrapper.toISOString(dateLikeObject);
  }

  validate(task: SimpleTask): string[] {
    let errors: string[] = new Array();
    let isoString = DateWrapper.toISOString(task.postponedTo);

    if (!task.postponedTo || !isoString) {
      errors.push("Must have a postpone date");
      return errors;
    }

    if (DateWrapper.isGreater(new Date(), task.postponedTo)) {
      errors.push("trying to postpone task for date in the past");
    }

    if (DateWrapper.toISOString(task.dueDate)) {
      if (DateWrapper.isGreater(task.dueDate, task.postponedTo)) {
        errors.push("trying to postpone to a time before the task is due");
      }
    }

    return errors;
  }

  postpone() {
    this.tasksService.postpone(this.task)
      .then(task=> this.router.navigate(['/tasks']))
      .catch(error=>this.modalService.error("Try choosing a later date" + error.status || error.message));
  }

}
