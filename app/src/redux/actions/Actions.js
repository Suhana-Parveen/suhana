
export const FETCH_RESTAURANTS_REQUEST = 'FETCH_RESTAURANTS_REQUEST';
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const FETCH_RESTAURANTS_FAILURE = 'FETCH_RESTAURANTS_FAILURE';

export const fetchRestaurantsRequest = () => {
  return {
    type: FETCH_RESTAURANTS_REQUEST,
  };
};

export const fetchRestaurantsSuccess = (restaurants) => {
  return {
    type: FETCH_RESTAURANTS_SUCCESS,
    payload: restaurants,
  };
};

export const fetchRestaurantsFailure = (error) => {
  return {
    type: FETCH_RESTAURANTS_FAILURE,
    payload: error,
  };
};

export const fetchRestaurants = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('http://205.134.254.135/~mobile/interview/public/api/restaurants_list');
        const data = await response.json();
        dispatch({ type: 'FETCH_RESTAURANTS_SUCCESS', payload: data.data });
      } catch (error) {
        dispatch({ type: 'FETCH_RESTAURANTS_FAILURE', error });
      }
    };
  };
