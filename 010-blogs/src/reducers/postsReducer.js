//  RULES OF REDUCERS
// 1) Cannot return undefined
// 2) Produces state based on previous state + action (first time called state will be undefined)
// 3) Should not reach outside of itself (e.g. make an API call)
// 4) SHOULD not mutate input state argument (e.g. push / pop on an array) => causes issues in few cases
// 4) This mutation only really applies to arrays / objects as strings/ numbers are immutable
// 4) Unlike ruby where string is mutable but somewhat similar to Python
// 4) Reason is in Redux if state values don't change and we return same reference in memory then redux won't tell React to re-render and update the application

// Commonly in reducers use switch statement to ensure always return non-undefined
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload
        default:
            return state
    }
}