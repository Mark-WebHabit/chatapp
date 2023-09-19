// function to handle change on inputs dynamically
export const handleChange = (setState, state, name, val) => {
  setState({ ...state, [name]: val });
};

//function to verify the length of the state using a given length
export const stateLengthVerifier = (name, length) => {
  if (name.length < length) {
    return false;
  } else {
    return true;
  }
};

// function to handle passwords during register
export const passwordVerifier = (pass, comparer) => {
  if (pass !== comparer) {
    return false;
  } else {
    return true;
  }
};
