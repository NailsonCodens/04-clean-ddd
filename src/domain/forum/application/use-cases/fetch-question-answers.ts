import { Answer } from '../../enterprise/entities/answer'
import { AnswerRepository } from '../repositories/answers-repository'

interface FetchQuestionAnwsersUseCaseRequest {
  questionId: string
  page: number
}

interface FetchQuestionAnwsersUseCaseResponse {
  answers: Answer[]
}

export class FetchQuestionAnwsersUseCase {
  constructor(private anwsersRepository: AnswerRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionAnwsersUseCaseRequest): Promise<FetchQuestionAnwsersUseCaseResponse> {
    const answers = await this.anwsersRepository.findManyByQuestionId(
      questionId,
      { page },
    )

    return { answers }
  }
}
