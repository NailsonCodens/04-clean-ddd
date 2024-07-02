import { randomUUID } from "node:crypto";
import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entitiy-id";

interface InstructorProps {
   name: string
}

export class Instructor extends Entity<InstructorProps> {
   static create(props: InstructorProps, id?: UniqueEntityId){
      const instructor = new Instructor(props, id) 
      return instructor
   }
}