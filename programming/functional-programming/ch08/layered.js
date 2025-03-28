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

function makeItem(name, price) {
  return objectSet({}, "name", name, "price", price);
}

// 배열을 객체로 만들기
function add_item(cart, item) {
  // return add_element_last(cart, item);
  return objectSet(cart, item.name);
}

function calc_total(cart) {
  // let total = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   var item = cart[i];
  //   total += item.price;
  // }
  // return total

  let total = 0;
  let names = Object.keys(cart);

  for (let i = 0; i < names.length; i++) {
    let item = cart[names[i]];
      total += item.price;
  }

  return total;
}

function setPriceByName(cart, name, price) {
  // const i = indexOfItem(cart, name);
  //
  // if (i !== null) {
  //   const item = arrayGet(cart, i);
  //   return arraySet(cart, i, setPrice(item, price))
  // }
  //
  // return cart

  if(isInCart(cart, name)) {
    const item = cart[name];
    const copy = setPrice(item, price);
    return objectSet(cart, name, copy);
  } else {
    const item = makeItem(name, price);
    return objectSet(cart, name, item);
  }

}

function removeItemByName(cart, name) {
  // var idx = indexOfItem(cart, name)
  //
  // if (idx !== null) return removeItem(cart, idx, 1)
  //
  // return cart

  return objectDelete(cart, name);
}

function isInCart(cart, name) {
  // return indexOfItem(cart, name) !== null;
  return cart.hasOwnProperty(name);
}

// function indexOfItem(cart, name) {
//   for (var i = 0; i < cart.length; i++) {
//     if (arrayGet(cart, i).name === name) return i
//   }
//   return null
// }