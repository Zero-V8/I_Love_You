const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.join(__dirname, '.env') })

const {
  isFirebaseReady,
  getFirebaseInitError,
  getFirebaseProjectId,
} = require('./firebaseAdmin')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'de-todo-un-poco-server',
    firebase: isFirebaseReady() ? 'connected' : 'not-configured',
    timestamp: new Date().toISOString(),
  })
})

app.get('/api/firebase/status', (_req, res) => {
  if (isFirebaseReady()) {
    return res.status(200).json({
      status: 'ok',
      firebase: 'connected',
      projectId: getFirebaseProjectId(),
    })
  }

  const error = getFirebaseInitError()

  return res.status(503).json({
    status: 'warning',
    firebase: 'not-configured',
    message: 'Firebase Admin SDK is not initialized. Configure environment variables.',
    error: error ? error.message : null,
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
