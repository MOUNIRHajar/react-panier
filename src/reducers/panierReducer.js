const initialState = {
  panier: [],
  nombreProduits: 0,
};

const panierReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PANIER':
      return { ...state, panier: action.payload };
    case 'SET_NOMBRE_PRODUITS':
      return { ...state, nombreProduits: action.payload };
    case 'ADD_TO_PANIER':
      const updatedPanier = [...state.panier, action.payload];
      return {
        ...state,
        panier: updatedPanier,
        nombreProduits: state.nombreProduits + 1,
      };
    case 'REMOVE_FROM_PANIER':
      return state;
    default:
      return state;
  }
};

export default panierReducer;
