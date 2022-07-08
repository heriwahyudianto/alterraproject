const ADD_LEAD = 'ADD_LEAD';

export function addLead(data) {
  return {
    type: 'ADD_LEAD',
    data,
  }
}

const defaultLeads = {
  data: {
    total_created_leads: 100,
    total_purchased_leads: 20,
    percentage:20
  },
  success: true,
  message: 'Database connection lost'
};

function leads(state, action) {
  switch (action.type) {
    case ADD_LEAD:
      return {
        data: {
          total_created_leads: 100,
          total_purchased_leads: 30,
          percentage:30
        },
        success: true,
        message: 'Database connection lost'
      };
    default:
      return state;
  }
}