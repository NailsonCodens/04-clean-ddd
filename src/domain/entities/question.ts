import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entitiy-id";

interface QuestionProps{
  authorId: UniqueEntityId,
  bestAnswerId?: UniqueEntityId,
  title: string, 
  content: string, 
  slug: Slug 
  createdAt: Date
  updatedAt?: Date
}

export class Question  extends Entity<QuestionProps>{

}