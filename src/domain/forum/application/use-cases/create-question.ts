import { UniqueEntityId } from '@/core/entities/unique-entitiy-id'
import { QuestionsRepository } from '../repositories/question-repository'
import { Question } from '../../enterprise/entities/question';

interface CreateQuestionUseCaseRequest {
    authorId: string;
  title: string
    content: string;
}

interface CreateQuestionUseCaseResponse {
    question: Question
}


export class CreateQuestionUseCase {
  constructor(private questionRepository: QuestionsRepository) {}

  async execute({
    authorId,
    title,
    content
  }: CreateQuestionUseCaseRequest) : Promise<CreateQuestionUseCaseResponse>{
    const question =  Question.create({
        authorId: new UniqueEntityId(authorId),
        title,
        content
    })

    await this.questionRepository.create(question)

    return {question}
  }
}
