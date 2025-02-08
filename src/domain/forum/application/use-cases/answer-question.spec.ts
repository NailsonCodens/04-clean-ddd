import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

let inMemoryAnwsersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Crete Answer', () => {
  beforeEach(() => {
    inMemoryAnwsersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnwsersRepository)
  })

  test('Should be able to answer a question', async () => {
    const { answer } = await sut.execute({
      questionId: '1',
      instructorId: '1',
      content: 'Conteúdo da resposta',
    })

    expect(answer.id).toBeTruthy()
    expect(inMemoryAnwsersRepository.items[0].id).toEqual(answer.id)
  })
})
