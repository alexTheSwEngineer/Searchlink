webpackJsonp([1,4],{

/***/ 209:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 209;


/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(225);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(280)
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tasks_tasks_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tasks_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__task_details_task_details_component__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__postpone_task_postpone_task_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modal_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












const routes = [
    { path: 'tasks', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_5__tasks_tasks_component__["a" /* TasksComponent */] },
    { path: 'tasks/:id', component: __WEBPACK_IMPORTED_MODULE_9__task_details_task_details_component__["a" /* TaskDetailsComponent */] },
    { path: 'tasks/:id/postpone', component: __WEBPACK_IMPORTED_MODULE_10__postpone_task_postpone_task_component__["a" /* PostponeTaskComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__tasks_tasks_component__["a" /* TasksComponent */] },
    { path: '**', redirectTo: '/tasks', pathMatch: 'full' }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__tasks_tasks_component__["a" /* TasksComponent */],
            __WEBPACK_IMPORTED_MODULE_9__task_details_task_details_component__["a" /* TaskDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__postpone_task_postpone_task_component__["a" /* PostponeTaskComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__tasks_service__["a" /* TasksService */], __WEBPACK_IMPORTED_MODULE_11__modal_service__["a" /* ModalService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Priority {
    constructor() {
        this.Low = "Low";
        this.Medium = "Medium";
        this.High = "High";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Priority;

//# sourceMappingURL=priority.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_simple_task__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_date_wrapper__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostponeTaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let PostponeTaskComponent = class PostponeTaskComponent {
    constructor(tasksService, route, router, modalService) {
        this.tasksService = tasksService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.task = __WEBPACK_IMPORTED_MODULE_3__models_simple_task__["a" /* SimpleTask */].empty();
    }
    ngOnInit() {
        this.route.params
            .switchMap((params) => this.tasksService.getTask(+params['id']))
            .subscribe(task => this.task = task);
    }
    toISOstring(dateLikeObject) {
        return __WEBPACK_IMPORTED_MODULE_4__models_date_wrapper__["a" /* DateWrapper */].toISOString(dateLikeObject);
    }
    validate(task) {
        let errors = new Array();
        let isoString = __WEBPACK_IMPORTED_MODULE_4__models_date_wrapper__["a" /* DateWrapper */].toISOString(task.postponedTo);
        if (!task.postponedTo || !isoString) {
            errors.push("Must have a postpone date");
            return errors;
        }
        if (__WEBPACK_IMPORTED_MODULE_4__models_date_wrapper__["a" /* DateWrapper */].isGreater(new Date(), task.postponedTo)) {
            errors.push("trying to postpone task for date in the past");
        }
        if (__WEBPACK_IMPORTED_MODULE_4__models_date_wrapper__["a" /* DateWrapper */].toISOString(task.dueDate)) {
            if (__WEBPACK_IMPORTED_MODULE_4__models_date_wrapper__["a" /* DateWrapper */].isGreater(task.dueDate, task.postponedTo)) {
                errors.push("trying to postpone to a time before the task is due");
            }
        }
        return errors;
    }
    postpone() {
        this.tasksService.postpone(this.task)
            .then(task => this.router.navigate(['/tasks']))
            .catch(error => this.modalService.error("Try choosing a later date" + error.status || error.message));
    }
};
PostponeTaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-postone-task',
        template: __webpack_require__(281)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tasks_service__["a" /* TasksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__modal_service__["a" /* ModalService */]) === "function" && _d || Object])
], PostponeTaskComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=postpone-task.component.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_simple_task__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_priority__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_date_wrapper__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let TaskDetailsComponent = class TaskDetailsComponent {
    constructor(tasksService, route, router, modalService) {
        this.tasksService = tasksService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.task = __WEBPACK_IMPORTED_MODULE_3__models_simple_task__["a" /* SimpleTask */].empty();
        this.priorities = Object.keys(new __WEBPACK_IMPORTED_MODULE_4__models_priority__["a" /* Priority */]());
    }
    ngOnInit() {
        this.route.params
            .switchMap((params) => this.tasksService.getTask(+params['id']))
            .subscribe(task => {
            task.priority = this.priorities.find(x => x === task.priority);
            this.task = task;
        });
    }
    save() {
        this.tasksService.update(this.task)
            .then(task => this.router.navigate(['/tasks']))
            .catch(this.modalService.error);
    }
    toISOstring(dateLikeObject) {
        return __WEBPACK_IMPORTED_MODULE_5__models_date_wrapper__["a" /* DateWrapper */].toISOString(dateLikeObject);
    }
    validate(task) {
        let erros = new Array();
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
};
TaskDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-task',
        template: __webpack_require__(282)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tasks_service__["a" /* TasksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__modal_service__["a" /* ModalService */]) === "function" && _d || Object])
], TaskDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=task-details.component.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasks_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_date_wrapper__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let TasksComponent = class TasksComponent {
    constructor(taskService, zone, router, modalService) {
        this.taskService = taskService;
        this.zone = zone;
        this.router = router;
        this.modalService = modalService;
        this.tasks = new Array();
    }
    ngOnInit() {
        this.taskService.getTasks().then(tasks => this.tasks = tasks);
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
    postpone(id) {
        this.router.navigate(['/tasks', id, 'postpone']);
    }
    details(id) {
        this.router.navigate(['/tasks', id]);
    }
    process(task) {
        this.taskService.process(task)
            .then(() => this.remove(task.id))
            .catch(this.modalService.error);
    }
    push(incomingTask) {
        if (!incomingTask)
            return;
        //New task
        let existingIdex = this.tasks.findIndex(t => t.id == incomingTask.id);
        if (existingIdex < 0) {
            this.tasks.push(incomingTask);
            this.tasks.sort((l, r) => l.id - r.id);
            return;
        }
        //Task is already in queue. May need to update stale view
        let existingTask = this.tasks[existingIdex];
        if (existingTask.version < incomingTask.version) {
            this.tasks[existingIdex] = incomingTask;
        }
    }
    remove(id) {
        if (!id)
            return;
        let existingIdex = this.tasks.findIndex(t => t.id == id);
        if (existingIdex >= 0) {
            this.tasks.splice(existingIdex, 1);
        }
    }
    toISOstring(dateLikeObject) {
        return __WEBPACK_IMPORTED_MODULE_4__models_date_wrapper__["a" /* DateWrapper */].toISOString(dateLikeObject);
    }
    bind(observable, listenr) {
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
};
TasksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-tasks',
        template: __webpack_require__(283)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tasks_service__["a" /* TasksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modal_service__["a" /* ModalService */]) === "function" && _d || Object])
], TasksComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=tasks.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = "<p>\n  No content on screen? Angular routes clash with static served content just click <a href=\"http://localhost:8080\" >here</a>\n</p>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n\n<br/>\n<br/>\n<br/>\n<h3>Usefull links</h3>\n<p>\n\n  This <a href=\"http://localhost:8080/tasks/debug/createRandom\" target=\"_blank\"> link</a> will create a new random task.You can refresh it\n  howmany times you wish, and all browsers/all tabs should get the new task automatically.\n\n</p>\n<p>\n  <a href=\"http://localhost:8080/tasks/debug/all\" target=\"_blank\">See all tasks</a>\n</p>\n\n"

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = "<p>\n  postpone task <strong>{{task.title}}</strong> originally dueTo: <strong>{{toISOstring(task.dueDate)}}</strong>\n</p>\n<br/>\n\n<div class=\"form-inline\">\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n             name=\"dp\" [(ngModel)]=\"task.postponedTo\" ngbDatepicker #d=\"ngbDatepicker\">\n      <div class=\"input-group-addon\" (click)=\"d.toggle()\">\n        <span>open datepicker</span>\n      </div>\n    </div>\n  </div>\n</div>\n<button [disabled]=\"validate(task).length\" (click)=\"postpone()\">update</button>\n<p class=\"alert alert-danger\" *ngFor=\"let error of validate(task)\">\n  {{error}}\n</p>\n\n\n"

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = "<h3>Non mutable properties:</h3>\n<table class=\"table\">\n  <thead class=\"thead-inverse\">\n  <tr>\n    <th>\n      id\n    </th>\n    <th>\n      uuid\n    </th>\n    <th>\n      created on\n    </th>\n    <th>\n      last updated on\n    </th>\n    <th>\n      update version\n    </th>\n    <th>\n      postponed to\n    </th>\n    <th>\n      resolvedAt\n    </th>\n    <th>\n      status\n    </th>\n\n  </tr>\n  </thead>\n  <tr>\n    <td>\n      {{task.id}}\n    </td>\n    <td>\n      {{task.uuid}}\n    </td>\n\n    <td>\n      {{toISOstring(task.createdAt)}}\n    </td>\n    <td>\n      {{toISOstring(task.updatedAt)}}\n    </td>\n    <td>\n      {{task.version}}\n    </td>\n    <td>\n      {{toISOstring(task.postponedTo)}}\n    </td>\n    <td>\n      {{toISOstring(task.resolvedAt)}}\n    </td>\n    <td>\n      {{task.status}}\n    </td>\n\n  </tr>\n</table>\n\n<h3>Mutable properties:</h3>\n<table class=\"table\">\n  <thead class=\"thead-inverse\">\n  <tr>\n    <th>\n      title\n    </th>\n    <th>\n      description\n    </th>\n\n    <th>\n      priority\n    </th>\n    <th>\n      due Date\n    </th>\n\n  </tr>\n  </thead>\n  <tr>\n    <td>\n      <input [(ngModel)]=\"task.title\" type=\"text\"/>\n    </td>\n    <td>\n      <textarea [(ngModel)]=\"task.description\"></textarea>\n\n    </td>\n\n    <td>\n      <select [(ngModel)]=\"task.priority\">\n        <option *ngFor=\"let priority of  priorities\" [value]=\"priority\">\n          {{priority}}\n        </option>\n      </select>\n    </td>\n    <td>\n      <div class=\"form-inline\">\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                   name=\"dp\" [(ngModel)]=\"task.dueDate\" ngbDatepicker #d=\"ngbDatepicker\">\n            <div class=\"input-group-addon\" (click)=\"d.toggle()\">\n              <span>open datepicker</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </td>\n  </tr>\n</table>\n<button [disabled]=\"validate(task).length\" (click)=\"save()\">update</button>\n<p class=\"alert alert-danger\" *ngFor=\"let error of validate(task)\">\n  {{error}}\n</p>\n"

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = "<h1>\n  The awesome list of endless tasks:\n</h1>\n<table class=\"table\">\n  <thead class=\"thead-inverse\">\n  <tr>\n    <th>\n      uuid\n    </th>\n    <th>\n      title\n    </th>\n    <th>\n      priority\n    </th>\n    <th>\n      dueDate\n    </th>\n    <th>\n      details\n    </th>\n    <th>\n      process\n    </th>\n\n    <th>\n      postpone\n    </th>\n  </tr>\n  </thead>\n  <tr *ngFor=\"let task of tasks\">\n    <td>\n      {{task.uuid}}\n    </td>\n    <td>\n      {{task.title}}\n    </td>\n    <td>\n      {{task.priority}}\n    </td>\n    <td>\n      {{toISOstring(task.dueDate)}}\n    </td>\n\n    <td>\n      <button (click)=\"details(task.id)\">details</button>\n    </td>\n    <td>\n      <button (click)=\"process(task)\"> process</button>\n    </td>\n    <td>\n      <button (click)=\"postpone(task.id)\">postpone</button>\n    </td>\n\n  </tr>\n</table>\n\n\n<h1>Tutorial and spec's</h1>\n<p>I took the all the freedom that was given to me with interpreting the requirements, hence here are some\n  specifications\n  in order for a better user experience to be achieved\n</p>\n<h3>The task list</h3>\n<p id=\"p1\">\n  This is a view of all pending tasks. By clicking process you are sending them to a process queue. After the processing\n  is finished,\n  a push notification is sent to all subscribed clients so they can remove the processed task and prevent a stale view.\n  You can try this with multiple tabs/browser windows.\n</p>\n<h3>The scheduler</h3>\n<p>\n\n  While you are enjoying this beautifull CSS marvel, a scheduler is creating tasks in the background. New tasks created\n  by the scheduler\n  will be pushed on top of this list view. If you don't want to wait for that to happen, you can force a random task\n  creation via this\n  <a href=\"http://localhost:8080/tasks/debug/createRandom\" target=\"_blank\">link</a>. It works even when called from\n  another tab\n</p>\n<h3>The details button</h3>\n<p>\n  There is far more in a task then it meets the eye on this screen. Click the details button to go to a more detailed\n  view of a task that includes editing options as well as all the fields from the requirements\n  (Status,Priority,CreatedAt,UpdatedAt,UUID,DueDate....etc)\n</p>\n<h3>The process button</h3>\n<p>\n  Clicking on process will send the task to a queue that will eventually process it. Once it has been processed it will\n  be removed from\n  all active clients via a push notification. Feel free to try this from diferent browsers/tabs.\n</p>\n<h3>The postpone button</h3>\n<p>\n\n  Clicking postpone will send you to a screen for choosing a postpone date. Back in <a href=\"=#p1\"> the first\n  paragraph</a>\n  I gently mislead you. The list of awesomness doesn't show all the tasks. It ONLY shows pending tasks which <strong>have\n  not been postponed</strong> to a date\n  after now.\n  A scheduler takes care of all clients getting a push notification when such postponed task becomes due.\n  If you are interested in seeing all the tasks in a plain JSON list as they're persisted visit<a\n  href=\"http://localhost:8080/tasks/debug/all\" target=\"_blank\">this</a>\n</p>\n\n<p>\n  <button (click)=\"debug()\">print</button>\n  This button prints the array of task JSONs in the console. I would, however stay out of the console view.\n  <br/>\n</p>\n\n\n"

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//Ideally we should let moment.js handle this. This is just an abstraction to code against to.
class DateWrapper {
    constructor(year, month, date) {
        this.year = year;
        this.month = month;
        this.date = date;
        this.day = date;
    }
    static fromInstant(instance) {
        if (!instance) {
            return new DateWrapper(null, null, null);
        }
        let date = new Date(instance * 1000);
        return new DateWrapper(date.getFullYear(), date.getMonth() + 1, date.getDate() - 1);
    }
    static toISOString(dateLikeObject) {
        if (!dateLikeObject) {
            return "";
        }
        if (dateLikeObject.toISOString) {
            return dateLikeObject.toISOString();
        }
        if (dateLikeObject.year && dateLikeObject.month && dateLikeObject.day) {
            return new Date(dateLikeObject.year, dateLikeObject.month - 1, dateLikeObject.day + 1).toISOString();
        }
        return "";
    }
    static isGreater(left, right) {
        var leftTime = new Date(DateWrapper.toISOString(left)).getTime();
        var rightTime = new Date(DateWrapper.toISOString(right)).getTime();
        return leftTime > rightTime;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DateWrapper;

//# sourceMappingURL=date-wrapper.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ModalService = class ModalService {
    constructor() { }
    error(errorMsg) {
        alert(errorMsg);
    }
};
ModalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ModalService);

//# sourceMappingURL=modal.service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_simple_task__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_date_wrapper__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let TasksService = TasksService_1 = class TasksService {
    constructor(http, zone) {
        this.http = http;
        this.zone = zone;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.baseUrl = 'http://localhost:8080/tasks'; // URL to web api
        this.insomingTasksUrl = 'http://localhost:8080/tasks/events/incoming/sse';
        this.removeTaskUrl = 'http://localhost:8080/tasks/events/removed/sse';
    }
    ngOnInit() {
    }
    onIncoming() {
        //Showcasing my understanding of angular change detection and abillity to wrap JQuery libraries if needed.
        //NgZone does not handle EventSources so we have to manually remind it.
        const observer = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(observer => {
            const eventSource = new EventSource(this.insomingTasksUrl);
            eventSource.onmessage = x => {
                this.zone.run(() => {
                    observer.next(__WEBPACK_IMPORTED_MODULE_3__models_simple_task__["a" /* SimpleTask */].fromDTO(JSON.parse(x.data)));
                });
            };
            eventSource.onerror = x => {
                this.zone.run(() => {
                    observer.error(x);
                });
            };
            return () => {
                eventSource.close();
            };
        });
        return observer;
    }
    onRemoved() {
        //Showcasing my understanding of angular change detection and abillity to wrap JQuery libraries if needed.
        //NgZone does not handle EventSources so we have to manually remind it.
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(observer => {
            const eventSource = new EventSource(this.removeTaskUrl);
            eventSource.onmessage = x => {
                this.zone.run(() => {
                    observer.next(x.data);
                });
            };
            eventSource.onerror = x => {
                this.zone.run(() => {
                    observer.error(x);
                });
            };
            return () => {
                eventSource.close();
            };
        });
    }
    getTasks() {
        return this.http.get(this.baseUrl)
            .toPromise()
            .then(response => response.json().map(__WEBPACK_IMPORTED_MODULE_3__models_simple_task__["a" /* SimpleTask */].fromDTO))
            .catch(this.handleError);
    }
    getTask(id) {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => __WEBPACK_IMPORTED_MODULE_3__models_simple_task__["a" /* SimpleTask */].fromDTO(response.json()))
            .catch(this.handleError);
    }
    create(createTask) {
        return this.http
            .post(this.baseUrl, JSON.stringify(TasksService_1.asCommand(createTask)), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    update(updatedTask) {
        const body = JSON.stringify(TasksService_1.asCommand(updatedTask));
        return this.http
            .put(this.baseUrl, body, { headers: this.headers })
            .toPromise()
            .then(() => updatedTask)
            .catch(this.handleError);
    }
    process(task) {
        const url = `${this.baseUrl}/process`;
        const body = JSON.stringify(TasksService_1.asCommand(task));
        return this.http
            .put(url, body, { headers: this.headers })
            .toPromise()
            .then(() => task)
            .catch(this.handleError);
    }
    postpone(task) {
        const url = `${this.baseUrl}/postpone`;
        const body = JSON.stringify(TasksService_1.asCommand(task));
        return this.http
            .put(url, body, { headers: this.headers })
            .toPromise()
            .then(() => task)
            .catch(this.handleError);
    }
    handleError(error) {
        // for demo purposes only this should be wrapper in a logging service so it can be turned of and on with a flag.
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    static asCommand(task) {
        return {
            id: task.id,
            version: task.version,
            uuid: task.uuid,
            dueDate: __WEBPACK_IMPORTED_MODULE_5__models_date_wrapper__["a" /* DateWrapper */].toISOString(task.dueDate),
            resolvedAt: __WEBPACK_IMPORTED_MODULE_5__models_date_wrapper__["a" /* DateWrapper */].toISOString(task.resolvedAt),
            postponeTo: __WEBPACK_IMPORTED_MODULE_5__models_date_wrapper__["a" /* DateWrapper */].toISOString(task.postponedTo),
            updatedAt: __WEBPACK_IMPORTED_MODULE_5__models_date_wrapper__["a" /* DateWrapper */].toISOString(task.updatedAt),
            createdAt: __WEBPACK_IMPORTED_MODULE_5__models_date_wrapper__["a" /* DateWrapper */].toISOString(task.createdAt),
            status: task.status,
            priority: task.priority,
            title: task.title,
            description: task.description
        };
    }
};
TasksService = TasksService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */]) === "function" && _b || Object])
], TasksService);

var TasksService_1, _a, _b;
//# sourceMappingURL=tasks.service.js.map

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(210);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__date_wrapper__ = __webpack_require__(35);

class SimpleTask {
    constructor(id, version, uuid, dueDate, resolvedAt, postponedTo, updatedAt, createdAt, status, priority, title, description) {
        this.id = id;
        this.version = version;
        this.uuid = uuid;
        this.dueDate = __WEBPACK_IMPORTED_MODULE_0__date_wrapper__["a" /* DateWrapper */].fromInstant(dueDate);
        this.resolvedAt = __WEBPACK_IMPORTED_MODULE_0__date_wrapper__["a" /* DateWrapper */].fromInstant(resolvedAt);
        this.postponedTo = __WEBPACK_IMPORTED_MODULE_0__date_wrapper__["a" /* DateWrapper */].fromInstant(postponedTo);
        this.updatedAt = __WEBPACK_IMPORTED_MODULE_0__date_wrapper__["a" /* DateWrapper */].fromInstant(updatedAt);
        this.createdAt = __WEBPACK_IMPORTED_MODULE_0__date_wrapper__["a" /* DateWrapper */].fromInstant(createdAt);
        this.status = status;
        this.priority = priority;
        this.title = title;
        this.description = description;
    }
    static empty() {
        return new SimpleTask(null, null, null, null, null, null, null, null, null, null, null, null);
    }
    static fromDTO(dto) {
        return new SimpleTask(dto.id, dto.version, dto.uuid, dto.dueDate, dto.resolvedAt, dto.postponedTo, dto.updatedAt, dto.createdAt, dto.status, dto.priority, dto.title, dto.description);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SimpleTask;

//# sourceMappingURL=simple-task.js.map

/***/ })

},[548]);
//# sourceMappingURL=main.bundle.js.map