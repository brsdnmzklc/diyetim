export default (state, action) => {
  switch (action.type) {
    case 'GET_USERINFO':
      return {...state, userInfo: action.payload};
    case 'breakfast':
      return {
        ...state,
        breakfastCal: action.payload,
      };
    case 'lunch':
      return {
        ...state,
        lunchCal: action.payload,
      };
    case 'dinner':
      return {
        ...state,
        dinnerCal: action.payload,
      };

    default:
      return state;
  }
};
