import { randomUUID } from "node:crypto";

interface answerProps{
  content: string, 
  authorId: string, 
  questionId: string,   
}

export class Answer {
  public id: string;
  public content: string
  public authorId: string
  public  questionId: string
 
 constructor(props: answerProps, id?: string, ){
  this.id = id ?? randomUUID()
  this.authorId = props.authorId
  this.questionId = props.questionId
  this.content = props.content
 }
}