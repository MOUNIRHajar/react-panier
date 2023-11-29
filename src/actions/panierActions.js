export const setPanier = (panier) => ({
  type: 'SET_PANIER',
  payload: panier,
});

export const setNombreProduits = (nombreProduits) => ({
  type: 'SET_NOMBRE_PRODUITS',
  payload: nombreProduits,
});

export const addToPanier = (product) => ({
  type: 'ADD_TO_PANIER',
  payload: product,
});

export const removeFromPanier = (productId) => ({
  type: 'REMOVE_FROM_PANIER',
  payload: productId,
});

export const updateNombreProduits = (nombreProduits) => ({
  type: 'UPDATE_NOMBRE_PRODUITS',
  payload: nombreProduits,
});