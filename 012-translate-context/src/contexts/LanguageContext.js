// 2 lines below are all that is needed to create a context object
// We create object in a separate file so we can import it only to the components where we want it

import React from 'react'

export default React.createContext('english') // We can add a default value here - could be an array, object