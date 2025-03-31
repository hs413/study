function objectSet(object, key, value) {
  let copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function setPriceByName(cart, name, price) {
  const item = cart(name);
  const newItem = objectSet(item, 'price', price);
  const newChart = objectSet(cart, name, newItem);
  return newChart
}

function setQuantityByName(cart, name, quantity) {
  const item = cart(name);
  const newItem = objectSet(item, 'quantity', quantity);
  const newChart = objectSet(cart, name, newItem);
  return newChart
}

function setShippingByName(cart, name, shipping) {
  const item = cart(name);
  const newItem = objectSet(item, 'shipping', shipping);
  const newChart = objectSet(cart, name, newItem);
  return newChart
}

function setTaxByName(cart, name, tax) {
  const item = cart(name);
  const newItem = objectSet(item, 'tax', tax);
  const newChart = objectSet(cart, name, newItem);
  return newChart
}