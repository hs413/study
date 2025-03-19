var shopping_cart = []; // 액션 - 변경 가능
var shopping_cart_total = 0; // 액션 - 변경 가능

function add_item_to_cart(name, price) {
  // 액션 - 전역변수를 변경
  shopping_cart.push({
    name,
    price,
  })
  calc_cart_total();
}

function calc_total(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
  }
  return total
}

function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);

  set_cart_total_dom();
  update_shipping_icons();
  set_tax_dom;
}

function update_shipping_icons() {
  // 액션 - DOM에서 읽음
  var buy_buttons = get_buy_buttons_dom();
  for (let i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    // 액션 - DOM을 변경
    if(item.price + shopping_cart_total >= 20) {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
}

function update_tax_dom() {
  // 액션 - DOM을 변경
  set_tax_dom(shopping_cart_total * 0.10);
}