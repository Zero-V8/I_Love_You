const { initializeApp, cert, applicationDefault, getApps, getApp } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const { getAuth } = require('firebase-admin/auth')

let app = null
let isReady = false
let initError = null
let firebaseProjectId = null

const buildServiceAccountFromEnv = () => {
  const projectId = process.env.FIREBASE_PROJECT_ID
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
  const privateKey = process.env.FIREBASE_PRIVATE_KEY

  if (!projectId || !clientEmail || !privateKey) {
    return null
  }

  return {
    projectId,
    clientEmail,
    privateKey: privateKey.replace(/\\n/g, '\n'),
  }
}

try {
  if (!getApps().length) {
    const envServiceAccount = buildServiceAccountFromEnv()

    if (envServiceAccount) {
      app = initializeApp({
        credential: cert(envServiceAccount),
      })
      firebaseProjectId = envServiceAccount.projectId
      isReady = true
    } else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      app = initializeApp({
        credential: applicationDefault(),
      })
      firebaseProjectId = process.env.FIREBASE_PROJECT_ID || null
      isReady = true
    }
  } else {
    app = getApp()
    isReady = true
  }
} catch (error) {
  initError = error
  isReady = false
}

const db = isReady && app ? getFirestore(app) : null
const auth = isReady && app ? getAuth(app) : null

module.exports = {
  app,
  db,
  auth,
  isFirebaseReady: () => isReady,
  getFirebaseInitError: () => initError,
  getFirebaseProjectId: () => firebaseProjectId,
}
