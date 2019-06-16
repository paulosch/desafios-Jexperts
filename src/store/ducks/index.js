import { combineForms } from 'react-redux-form'
import { connectRouter } from 'connected-react-router'

import history from '../../routes/history'
import user from './user'
import auth from './auth'

export default combineForms({
  auth,
  user,
  router: connectRouter(history)
})
