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

cart = setPriceByName(cart, 'shoe', 13);
cart = setQuantityByName(cart, 'shoe', 3);
cart = setShippingByName(cart, 'shoe', 0);
cart = setTaxByName(cart, 'shoe', 2.34);

function setFieldByName(cart, name, field, value) {
  const item = cart(name);
  const newItem = objectSet(item, field, value);
  const newChart = objectSet(cart, name, newItem);
  return newChart
}

cart = setFieldByName(cart, 'shoe', 'price',13);
cart = setFieldByName(cart, 'shoe', 'quantity',3);
cart = setFieldByName(cart, 'shoe', 'shipping',0);
cart = setFieldByName(cart, 'shoe', 'tax',2.34);

