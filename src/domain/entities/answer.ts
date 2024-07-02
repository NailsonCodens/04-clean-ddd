import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entitiy-id";
import { Optional } from "../../core/types/optional";

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

  static create(props: Optional<answerProps, 'createdAt'>, id?: UniqueEntityId){
    const answer = new Answer({
     ...props,
     createdAt: new Date(),
    }, id) 

    return answer
   }
}