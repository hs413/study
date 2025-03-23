// v0
function removeItemByNameV0(cart, name) {
  let idx = null;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      idx = i
    }
  }

  if (idx !== null) {
    cart.splice(idx, 1);
  }
}

function deleteHandlerV0(name) {
  removeItemByName0(shoppingCart, name);
}

// v1 카피 온 라이트 적용
function removeItemByNameV1(cart, name) {
  let newCart = cart.slice();
  let idx = null;

  for (let i = 0; i < newCart.length; i++) {
    if (newCart[i].name === name) {
      idx = i
    }
  }

  if (idx !== null) {
    removeItemV1(newCart, idx, 1);
  }
  return newCart
}

function deleteHandlerV1(name) {
  shoppingCart = removeItemByName(shoppingCart, name);
}

function removeItemV1(array, idx, count) {
  array.splice(idx, count)
}

// v2
function removeItemV2(array, idx, count) {
  const copy = array.slice();
  copy.splice(idx, count);
  return copy;
}

function removeItemByNameV2(cart, name) {
  let idx = null;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      idx = i
    }
  }

  if (idx !== null) {
    return removeItemV2(cart, idx, 1);
  }

  return cart;
}

// 연습
/*
let mailingList = [];

function addContact(email) {
  mailingList.push(email)
}

function submitFormHandler(event) {
  let form = event.target;
  let email = form.elements["email"].value;
  addContact(email);
}
*/
let mailingList = [];

function addContact(list, email) {
  const copy = list.slice();
  copy.push(email);
  return copy;
}

function submitFormHandler(event) {
  let form = event.target;
  let email = form.elements["email"].value;
  mailingList = addContact(mailingList, email);
}

// 객체 카피 온 라이트
function setPrice(item, newPrice) {
  // let itemCopy = Object.assign({}, item);
  // itemCopy.price = newPrice;
  // return itemCopy

  return objectSet(item, "price", newPrice);
}

function setQuantity(item, newQuantity) {
  return objectSet(item, 'quantity', newQuantity);
}

function objectSet(object, key, value) {
  let copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function setPriceByName(cart, name, price) {
  // for (let i = 0; i < cart.length; i++) {
  //   if (cart[i].name === name) {
  //     cart[i].price = price;
  //   }
  // }

  let cartCopy = cart.slice();
  for (let i = 0; i < cartCopy.length; i++) {
    if (cartCopy[i].name === name) {
      cartCopy[i] = setPrice(cartCopy[i], price)
    }
  }

  return cartCopy
}