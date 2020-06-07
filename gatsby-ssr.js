import React from 'react'

import { ThemeProvider } from './src/context/ThemeContext'

/* The ThemeProvider component exported from the ThemeContext.js file
wraps the root element and is exported as wrapRootElement. This API is
then invoked appropriately by the Gatsby API runner */

export const wrapRootElement = ({ element }) => (
<ThemeProvider>{element}</ThemeProvider>
)
