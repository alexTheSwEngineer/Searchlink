
//Ideally we should let moment.js handle this. This is just an abstraction to code against to.
export class DateWrapper {
  private day: number;

  constructor(private year: number,
              private month: number,
              private date: number) {
    this.day = date;
  }

  static fromInstant(instance:number):DateWrapper{
    if(!instance){
      return new DateWrapper(null,null,null);
    }

    let date= new Date(instance*1000);
    return new DateWrapper(date.getFullYear(),date.getMonth()+1,date.getDate()-1);
  }

  static toISOString(dateLikeObject:any):string{
    if(!dateLikeObject){
      return "";
    }

    if(dateLikeObject.toISOString){
      return dateLikeObject.toISOString();
    }

    if(dateLikeObject.year&&dateLikeObject.month&&dateLikeObject.day){
      return new Date(dateLikeObject.year,dateLikeObject.month-1,dateLikeObject.day +1).toISOString();
    }

    return "";
  }

  static isGreater(left,right):boolean{
    var leftTime = new Date(DateWrapper.toISOString(left)).getTime();
    var rightTime = new Date(DateWrapper.toISOString(right)).getTime();

    return leftTime>rightTime;
  }


}
