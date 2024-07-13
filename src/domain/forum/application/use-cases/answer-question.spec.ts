import { InMemoryAnswerRepository } from 'test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'
import { CreateQuestionUseCase } from './create-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'

let inMemoryAnwserRepository: InMemoryAnswerRepository
let sut: AnswerQuestionUseCase 


describe('Crete Answer', () => {
  beforeEach(() => {
    inMemoryAnwserRepository = new InMemoryAnswerRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnwserRepository)
  })

  test('Should be able to answer a question', async () => {
    const {answer} = await sut.execute({
      questionId: '1',
      instructorId: '1',
      content: 'Conteúdo da resposta'
    })
  
    expect(answer.id).toBeTruthy()
    expect(inMemoryAnwserRepository.items[0].id).toEqual(answer.id)
  })  
})
