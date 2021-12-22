import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('should return an account an success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Bruno',
        email: 'bruno@gmail.com',
        password: 'password',
        passwordConfirmation: 'password'
      })
      .expect(200)
  })
})
