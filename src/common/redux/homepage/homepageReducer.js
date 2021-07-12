const initialState = {
  isFetching: false,
  errorMessage: '',
  data: [],
};

export const homepageActionTypes = {
  HOMEPAGE: {
    REQUEST: 'REQUEST',
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED',
    CLEAR_ERROR: 'CLEAR_ERROR',
  },
};

export function homepageRequest() {
  return {
    type: homepageActionTypes.HOMEPAGE.REQUEST,
  };
}

export function homepageSuccess(data) {
  return {
    type: homepageActionTypes.HOMEPAGE.SUCCESS,
    data,
  };
}

export function homepageFailed(errorMessage) {
  return {
    type: homepageActionTypes.HOMEPAGE.FAILED,
    errorMessage,
  };
}

export default function userReducer(state = initialState, actions) {
  switch (actions.type) {
    case homepageActionTypes.HOMEPAGE.REQUEST:
      return {...state, isFetching: true, errorMessage: ''};
    case homepageActionTypes.HOMEPAGE.SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: '',
        data: actions.data,
      };
    case homepageActionTypes.HOMEPAGE.FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: actions.errorMessage,
      };
    default:
      return state;
  }
}
