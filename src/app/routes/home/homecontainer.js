const SAVE_USERS = "SAVE_USERS";

// Actions
const saveUsers = users => ({ type: SAVE_USERS, payload: users });

export const mapStateToProps = state => ({ ...state.home });

export const mapDispatchToProps = dispatch => {
  return {
    saveUsers: users => dispatch(saveUsers(users))
  };
};

const initialState = {
  page: "home"
};

// Reducer
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_USERS:
      return Object.assign({}, state, { users: payload });
    default:
      return state;
  }
};
