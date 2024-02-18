'use client'

import { CodeResponse, useGoogleLogin } from '@react-oauth/google'
import { PropsWithChildren, createContext, useEffect } from 'react'

type GoogleContextType = {
  login: () => void
}
const scopes = ['https://www.googleapis.com/auth/bigquery.readonly']
const defaultProvider = { login: () => Promise.resolve() }
export const GoogleContext = createContext<GoogleContextType>(defaultProvider)

const GoogleProvider = ({ children }: PropsWithChildren) => {
  const handleOnSuccess = async (response: CodeResponse) => {
    await fetch(`/api/auth?code=${response.code}`)
  }

  const value = {
    login: useGoogleLogin({
      onSuccess: handleOnSuccess,
      flow: 'auth-code',
      scope: scopes.join(' ')
    })
  }

  useEffect(() => {
    console.log('GoogleProvider mounted')
  }, [])

  return <GoogleContext.Provider value={value}>{children}</GoogleContext.Provider>
}

export default GoogleProvider
