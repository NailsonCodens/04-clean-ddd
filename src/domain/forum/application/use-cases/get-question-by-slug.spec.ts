import { CreateQuestionUseCase } from './create-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { Question } from '../../enterprise/entities/question'
import { Slug } from '../../enterprise/entities/value-objects/slug'
import { UniqueEntityId } from '@/core/entities/unique-entitiy-id'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase 


describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })

  it('Should be able to get a question by slug', async () => {

    const newQuestion = Question.create({
        authorId: new UniqueEntityId(),
        title: 'Example question',
        slug: Slug.create('example-question'),
        content: 'Example content'
    })

    inMemoryQuestionsRepository.create(newQuestion)


    const {question} = await sut.execute({
        slug: 'example-question'
    })
  
    expect(question.id).toBeTruthy()
    expect(question.title).toEqual(newQuestion.title)
  })  
})
