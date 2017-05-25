
import {DateWrapper} from './date-wrapper'
export class SimpleTask {
  public id:number;
  public version:number;
  public uuid:string;
  public dueDate:DateWrapper;
  public resolvedAt:DateWrapper;
  public postponedTo:DateWrapper;
  public updatedAt:DateWrapper;
  public createdAt:DateWrapper;
  public status:string;
  public priority:string;
  public title:string;
  public description:string;

  constructor(id: number, version: number, uuid: string,dueDate:number, resolvedAt: number, postponedTo: number, updatedAt: number, createdAt: number, status: string, priority: string, title: string, description: string) {
    this.id = id;
    this.version = version;
    this.uuid = uuid;
    this.dueDate = DateWrapper.fromInstant(dueDate)
    this.resolvedAt = DateWrapper.fromInstant(resolvedAt);
    this.postponedTo =DateWrapper.fromInstant(postponedTo);
    this.updatedAt = DateWrapper.fromInstant(updatedAt);
    this.createdAt = DateWrapper.fromInstant(createdAt);
    this.status = status;
    this.priority = priority;
    this.title = title;
    this.description = description;
  }
  static empty(){
    return new SimpleTask(null,null,null,null,null,null,null,null,null,null,null,null);
  }

  static fromDTO(dto:any){
    return new SimpleTask(dto.id,
                          dto.version,
                          dto.uuid,
                          dto.dueDate,
                          dto.resolvedAt,
                          dto.postponedTo,
                          dto.updatedAt,
                          dto.createdAt,
                          dto.status,
                          dto.priority,
                          dto.title,
                          dto.description)
  }
}
