const AppReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'UPDATE_FIELD': {
      const { key, value } = action.payload;
      return { ...state, form: { ...state.form, [key]: value } };
    }
    default:
      // utile si type mal tapé, sinon chaud de trouver l'erreur en js
      throw new Error(`Unhandle action type : ${action.type}`);
  }
};

export default AppReducer;