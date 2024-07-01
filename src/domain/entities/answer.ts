import { Entity } from "../../core/entities/entity";

interface answerProps{
  content: string, 
  authorId: string, 
  questionId: string,   
}

export class Answer extends Entity<answerProps>{
  get content(){
    return this.props.content
  }
}