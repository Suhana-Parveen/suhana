const initialState = {
    restaurants: [],
    loading: false,
    error: null,
  };
  
  const Reducers = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RESTAURANTS_SUCCESS':
        return {
          ...state,
          loading: false,
          restaurants: action.payload,
        };
      case 'FETCH_RESTAURANTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default Reducers;
  