const storageKey = "shoesShoppingcart";
export let cart = JSON.parse(localStorage.getItem(storageKey)) || [];

//save cart data;
export function saveToCart() {
  localStorage.setItem(storageKey, JSON.stringify(cart));
}
export function clearCartFromLocalStorage() {
  localStorage.removeItem(storageKey);
  cart = [];
}
