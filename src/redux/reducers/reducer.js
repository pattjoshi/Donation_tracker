const INIT_STATE = {
  creator: [],
};

export const DonatReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "DONAT_CLICK_CART":
      return {
        ...state,
        creator: [...state.creator, action.payload],
      };
    case "RMV_CART":
      const data = state.creator.filter((el) => el.id !== action.payload);
      //console.log(data);

      return {
        ...state,
        creator: data,
      };

    default:
      return state;
  }
};

// ...state.creator,
// use sprad oparator for store all data
// export default DonatReducer;

// A reducer is a function that determines changes to an application's state
