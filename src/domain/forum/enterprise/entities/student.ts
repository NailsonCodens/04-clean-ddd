import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entitiy-id'

interface StundentProps {
  name: string
}

export class Student extends Entity<StundentProps> {
  static create(props: StundentProps, id?: UniqueEntityId) {
    const student = new Student(props, id)
    return student
  }
}
