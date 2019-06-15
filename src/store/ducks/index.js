import { combineForms } from 'react-redux-form'
import { connectRouter } from 'connected-react-router'

import history from '../../routes/history'
import user from './user'

export default combineForms({
  user,
  router: connectRouter(history)
})
