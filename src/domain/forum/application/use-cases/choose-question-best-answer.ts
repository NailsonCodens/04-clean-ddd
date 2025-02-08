import { AnswerRepository } from '../repositories/answers-repository'
import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/question-repository'

interface ChooseQuestionBestAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

interface ChooseQuestionBestAnswerUseCaseResponse {
  question: Question
}

export class ChooseQuestionBestAnswerUseCase {
  constructor(
    private answersrepository: AnswerRepository,
    private questionRepository: QuestionsRepository,
  ) {}

  async execute({
    authorId,
    answerId,
  }: ChooseQuestionBestAnswerUseCaseRequest): Promise<ChooseQuestionBestAnswerUseCaseResponse> {
    const answer = await this.answersrepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found')
    }

    const question = await this.questionRepository.findByid(
      answer.questionId.toString(),
    )

    if (!question) {
      throw new Error('Answer not found')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not alloewd')
    }

    question.bestAnswerId = answer.id

    return {
      question,
    }
  }
}
