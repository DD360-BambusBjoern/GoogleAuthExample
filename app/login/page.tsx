'use client'

import useGoogle from '../hooks/useGoogle'

export default function Login() {
  const google = useGoogle()

  return (
    <div>
      <h1>ENV</h1>
      <h1>{process.env.GOOGLE_PROJECT_CLIENT_ID}</h1>
      <h1>{process.env.GOOGLE_PROJECT_CLIENT_SECRET}</h1>
      <button onClick={google.login}>Login</button>
    </div>
  )
}
