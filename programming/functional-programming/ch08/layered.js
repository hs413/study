// 기본
function freeTieClip(cart) {
  var hasTie = false
  var hasTieClip = false;
  for(var i = 0; i < cart.length; i++) {
    var item = cart[i];
    if(item.name === "tie")
      hasTie = true;
    if(item.name === "tie clip")
      hasTieClip = true;
  }
  if(hasTie && !hasTieClip) {
    var tieClip = make_item("tie clip", 0);
    return add_item(cart, tieClip);
  }
  return cart;
}

// 함수 나누기

function freeTieClip(cart) {
  var hasTie = isInCart(cart, 'tie');
  var hasTieClip = isInCart(cart, 'tie clip');

  if(hasTie && !hasTieClip) {
    var tieClip = make_item("tie clip", 0);
    return add_item(cart, tieClip);
  }

  return cart;
}

function isInCart(cart, name) {
  return indexOfItem(cart, name) !== null;
}

function removeItemByName(cart, name) {
  var idx = indexOfItem(cart, name)

  if (idx !== null) return removeItem(cart, idx, 1)

  return cart
}

function indexOfItem(cart, name) {
  for (var i = 0; i < cart.length; i++) {
    if (arrayGet(cart, i).name === name) return i
  }
  return null
}

function setPriceByName(cart, name, price) {
  const i = indexOfItem(cart, name);

  if (i !== null) {
    const item = arrayGet(cart, i);
    return arraySet(cart, i, setPrice(item, price))
  }

  return cart
}

function arraySet(array, idx, value) {
  const copy = array.slice();

  copy[idx] = value;

  return copy;
}

function setPrice(item, newPrice) {
  return objectSet(item, "price", newPrice);
}

function objectSet(object, key, value) {
  let copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function arrayGet(array, idx) {
  return array[idx];
}