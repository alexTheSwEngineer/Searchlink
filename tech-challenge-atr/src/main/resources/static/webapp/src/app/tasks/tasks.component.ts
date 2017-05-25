import {Component, OnInit, NgZone} from "@angular/core";
import {TasksService} from "../tasks.service";
import {SimpleTask} from "../models/simple-task";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {ModalService} from "../modal.service";
import {DateWrapper} from "../models/date-wrapper";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {

  tasks: SimpleTask[] = new Array();

  constructor(private taskService: TasksService,
              private zone: NgZone,
              private router: Router,
              private modalService: ModalService) {
  }

  ngOnInit() {
    this.taskService.getTasks().then(tasks=>this.tasks = tasks);

    this.taskService.onIncoming().subscribe({
      next: task => {
        this.zone.run(() => this.push(task));
      },
      error: err => console.error('something wrong occurred: ' + err)
    });

    this.taskService.onRemoved().subscribe({
      next: taskId => {
        this.zone.run(() => this.remove(taskId));
      },
      error: err => console.error('something wrong occurred: ' + err)
    });

    // this.bind(this.taskService.onIncoming(),this.push);
    // this.bind(this.taskService.onRemoved(),this.remove);
  }

  postpone(id: number) {
    this.router.navigate(['/tasks', id, 'postpone']);
  }

  details(id: number) {
    this.router.navigate(['/tasks', id]);
  }

  process(task: SimpleTask) {
    this.taskService.process(task)
      .then(()=>this.remove(task.id))
      .catch(this.modalService.error);
  }

  private  push(incomingTask: SimpleTask) {
    if (!incomingTask) return;

    //New task
    let existingIdex = this.tasks.findIndex(t=>t.id == incomingTask.id);
    if (existingIdex < 0) {
      this.tasks.push(incomingTask);
      this.tasks.sort((l, r)=>l.id - r.id);
      return;
    }

    //Task is already in queue. May need to update stale view
    let existingTask = this.tasks[existingIdex];
    if (existingTask.version < incomingTask.version) {
      this.tasks[existingIdex] = incomingTask;
    }
  }

  private   remove(id: number) {
    if (!id) return;

    let existingIdex = this.tasks.findIndex(t=>t.id == id);
    if (existingIdex >= 0) {
      this.tasks.splice(existingIdex, 1);
    }

  }


  private toISOstring(dateLikeObject: any): string {
    return DateWrapper.toISOString(dateLikeObject);
  }


  private bind<T>(observable: Observable<T>, listenr: (T)=>any) {
    observable.subscribe({
      next: event => {
        this.zone.run(() => listenr(event));
      },
      error: err => console.error('something wrong occurred: ' + err)
    });
  }

  debug() {
    console.log(this.tasks);
  }

}
