// user click ing

export const ADD = (item) => {
  return {
    type: "DONAT_CLICK_CART",
    payload: item,
  };
};

// remove iteams
export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};
