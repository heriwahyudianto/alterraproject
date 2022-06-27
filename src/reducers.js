const initialState = {
  data: {
    total_created_leads: 100,
    total_purchased_leads: 20,
    percentage:20
  },
  success: true,
  message: 'Database connection lost'
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case 'upgrade': {
      // We need to return a new state object
      return {
        // that has all the existing state data
        ...state,
        // but has a new array for the `todos` field
        data: {
          // with all of the old todos
          // and the new todo object          
            total_created_leads: 100,
            total_purchased_leads: 80,
            percentage:80
          
        }
      }
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}