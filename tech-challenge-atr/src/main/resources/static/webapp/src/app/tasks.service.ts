import {Injectable, NgZone} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {SimpleTask} from "./models/simple-task";
import {Observable} from "rxjs";
import {DateWrapper} from "./models/date-wrapper"
declare var EventSource: any;

@Injectable()
export class TasksService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl = 'http://localhost:8080/tasks';  // URL to web api
  private insomingTasksUrl = 'http://localhost:8080/tasks/events/incoming/sse';
  private removeTaskUrl = 'http://localhost:8080/tasks/events/removed/sse';

  constructor(private http: Http, private zone: NgZone) {
  }

  ngOnInit() {
  }

  onIncoming(): Observable<SimpleTask> {
    //Showcasing my understanding of angular change detection and abillity to wrap JQuery libraries if needed.
    //NgZone does not handle EventSources so we have to manually remind it.
    const observer = Observable.create(observer => {
      const eventSource = new EventSource(this.insomingTasksUrl);
      eventSource.onmessage = x => {
        this.zone.run(() => {
          observer.next(SimpleTask.fromDTO(JSON.parse(x.data)))
        });
      }
      eventSource.onerror = x => {
        this.zone.run(() => {
          observer.error(x)
        });
      }

      return () => {
        eventSource.close();
      };
    });
    return observer;
  }

  onRemoved(): Observable<number> {
    //Showcasing my understanding of angular change detection and abillity to wrap JQuery libraries if needed.
    //NgZone does not handle EventSources so we have to manually remind it.
    return  Observable.create(observer => {
      const eventSource = new EventSource(this.removeTaskUrl);
      eventSource.onmessage = x => {
        this.zone.run(() => {
          observer.next(x.data)
        });
      }
      eventSource.onerror = x => {
        this.zone.run(() => {
          observer.error(x)
        });
      }

      return () => {
        eventSource.close();
      };
    });
  }

  getTasks(): Promise<SimpleTask[]> {
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(response=>response.json().map(SimpleTask.fromDTO))
      .catch(this.handleError);
  }

  getTask(id: number): Promise<SimpleTask> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => SimpleTask.fromDTO(response.json()))
      .catch(this.handleError);
  }

  create(createTask: SimpleTask): Promise<SimpleTask> {
    return this.http
      .post(this.baseUrl, JSON.stringify(TasksService.asCommand(createTask)), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as SimpleTask)
      .catch(this.handleError);
  }

  update(updatedTask: SimpleTask): Promise<SimpleTask> {
    const body =JSON.stringify(TasksService.asCommand(updatedTask));
    return this.http
      .put(this.baseUrl,body , {headers: this.headers})
      .toPromise()
      .then(() => updatedTask)
      .catch(this.handleError);
  }

  process(task: SimpleTask): Promise<any> {
    const url = `${this.baseUrl}/process`;
    const body =JSON.stringify(TasksService.asCommand(task));
    return this.http
      .put(url, body, {headers: this.headers})
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }

  postpone(task: SimpleTask): Promise<any> {
    const url = `${this.baseUrl}/postpone`;
    const body =JSON.stringify(TasksService.asCommand(task));
    return this.http
      .put(url, body, {headers: this.headers})
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    // for demo purposes only this should be wrapper in a logging service so it can be turned of and on with a flag.
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  static asCommand(task: SimpleTask): any {
    return {
      id: task.id,
      version: task.version,
      uuid: task.uuid,
      dueDate: DateWrapper.toISOString(task.dueDate),
      resolvedAt: DateWrapper.toISOString(task.resolvedAt),
      postponeTo: DateWrapper.toISOString(task.postponedTo),
      updatedAt: DateWrapper.toISOString(task.updatedAt),
      createdAt:DateWrapper.toISOString(task.createdAt),
      status: task.status,
      priority: task.priority,
      title: task.title,
      description: task.description
    }
  }


}
