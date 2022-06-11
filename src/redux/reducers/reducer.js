const INIT_STATE = {
  creator: [],
};

export const DonatReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "DONAT_CLICK_CART":
      return {
        ...state,
        creator: [action.payload],
      };

    default:
      return state;
  }
};

// ...state.creator,

// export default DonatReducer;

// A reducer is a function that determines changes to an application's state
