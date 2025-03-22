// 초기 버전
function removeItemByName0(cart, name) {
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

function deleteHandler0(name) {
  removeItemByName0(shoppingCart, name);
}

// --- 카피 온 라이트 버전
function removeItemByName(cart, name) {
  let newCart = cart.slice();
  let idx = null;

  for (let i = 0; i < newCart.length; i++) {
    if (newCart[i].name === name) {
      idx = i
    }
  }

  if (idx !== null) {
    newCart.splice(idx, 1);
  }
  return newCart
}

function deleteHandler(name) {
  shoppingCart = removeItemByName(shoppingCart, name);
}