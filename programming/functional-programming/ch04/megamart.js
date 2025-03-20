var shopping_cart = []; // 액션 - 변경 가능
var shopping_cart_total = 0; // 액션 - 변경 가능

function add_item(cart, name, price) {
  let new_cart = cart.slice();
  new_cart.push({
    name,
    price,
  })
  return new_cart
}

function calc_total(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
  }
  return total
}

function gets_free_shipping(cart) {
  return calc_total(cart) >= 20;
}

function calc_tax(amount) {
  return amount * 0.10;
}

function add_item_to_cart(name, price) {
  // 액션 - 전역변수를 변경
  shopping_cart = add_item(shopping_cart, name, price);

  var total = calc_total(cart);
  set_cart_total_dom(total);
  update_shipping_icons(cart)
  update_tax_dom(total);
}

function set_cart_total_dom(total) {
  total
}

function update_shipping_icons(cart) {
  var buttons = get_buy_buttons_dom();
  for (let i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var item = button.item;
    var new_cart = add_item(cart, item.name, item.price)

    if(gets_free_shipping(new_cart)) {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
}

function update_tax_dom(total) {
  // 액션 - DOM을 변경
  set_tax_dom(calc_tax(total));
}