import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entitiy-id";

interface answerProps{
  content: string, 
  authorId: UniqueEntityId, 
  questionId: UniqueEntityId,  
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<answerProps>{
  get content(){
    return this.props.content
  }
}