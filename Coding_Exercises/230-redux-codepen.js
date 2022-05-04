// THIS MINI APP NEEDS REDUX TO RUN

console.clear()

//  Actions (People dropping off a form)
const createPolicy = (name, premium) => {
  return { // Action (a form in our analogy)
    type: "CREATE_POLICY", // convention for type is ALL_CAPS and underscores
    payload: {
      name: name,
      premium: premium
    }
  }
}

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  }
}

const createClaim = (name, claimAmount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      claimAmount: claimAmount
    }
  }
}

// Reducers (Departments)
// We default value of first argument to be an empty array for when it is called the first time and there is no existing data
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // we care about action
    // Below ... takes all items from old array - so we add into a new array and add in one record. Without the ... we would have a nested array
    // Could use push but that modifies an existing array. Like below
    // oldListOfClaims.push(action.payload)
    // When we use reducers we never modify existing data
    return [...oldListOfClaims, action.payload] 
  }
  
  // we don't care about action
  return oldListOfClaims
}

const accounting = (currentMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return currentMoney - action.payload.claimAmount
  } else if (action.type === 'CREATE_POLICY') {
    return currentMoney + action.payload.premium
  } 
  return currentMoney
}

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name]
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name)
  }
  return listOfPolicies
}

// We will typically write out JS functions then use Redux at the end
const { createStore, combineReducers } = Redux

const ourDepartments = combineReducers({
  // Can create custom names for reducers - don't need to match function
  accounting: accounting, 
  claimsHistory,
  policies
})

// Store is our redux mini-app
const store = createStore(ourDepartments)

// Testing what we built
// We can only manually edit the state by using the dispatch function
store.dispatch(createPolicy('Alex', 20))
store.dispatch(createPolicy('Jim', 30))
store.dispatch(createPolicy('Bob', 40))

store.dispatch(createClaim('Alex', 120))
store.dispatch(createClaim('Jim', 50))

store.dispatch(deletePolicy('Bob'))

console.log(store.getState()) // We can then print out the state to check - can do as many times as we want and any point in the app

