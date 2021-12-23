import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'

import env from './config/env'

void MongoHelper.connect(env.mongoUrl).then(async () => {
  const app = (await import('./config/app')).default
  app.listen(env.port, () => console.log(`Server runing at http://localhost:${env.port}`))
}).catch(console.error)
