import { randomUUID } from "node:crypto";

export class Instructor {
  public id: string;
  public name: string
 
 
 constructor(title: string, id?: string){
    this.id = id ?? randomUUID()
    this.name = title;
 } 
}