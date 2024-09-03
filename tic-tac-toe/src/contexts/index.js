import React from 'react'
import { ThemeContextProvider } from './ThemeContext'

function Provider({childern}) {
  return (
    <ThemeContextProvider>
      {childern}
    </ThemeContextProvider>
  )
}

export default Provider
