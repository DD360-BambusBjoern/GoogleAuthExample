import { useContext } from 'react'
import { GoogleContext } from '../context/googleContext'

const useGoogle = () => useContext(GoogleContext)

export default useGoogle
