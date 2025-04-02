const foods = [];
const dishes = [];

// 처음
function cookAndEatFood() {
  for (let i = 0; i < foods.length; i++) {
    // var food = foods[i];
    var item = foods[i];
    cook(item);
    eat(item);
  }
}

function cleanDished() {
  for (let i = 0; i < dishes.length; i++) {
    // var dish = dishes[i];
    var item = dishes[i];
    wash(item)
    dry(item)
    putAway(item)
  }
}

// 인자로 받기
function cookAndEatArray(array) {
  for (let i = 0; i < array.length; i++) {
    var item = array[i];
    cook(item);
    eat(item);
  }
}

function cleanArray(array) {
  for (let i = 0; i < array.length; i++) {
    var item = array[i];
    wash(item)
    dry(item)
    putAway(item)
  }
}

// 암묵적 인자(함수명) 함수로 분리
function cookAndEatArray(array) {
  for (let i = 0; i < array.length; i++) {
    var item = array[i];
    cookAndEat(item)
  }
}
function cookAndEat(food) {
  cook(food);
  eat(food);
}

function cleanArray(array) {
  for (let i = 0; i < array.length; i++) {
    var item = array[i];
    clean(item)
  }
}

function clean(dish) {
  wash(dish)
  dry(dish)
  putAway(dish)
}

// 암묵적 인자 제거
function operateOnArray(array, f) {
  for (let i = 0; i < array.length; i++) {
    var item = array[i];
    f(item)
  }
}

operateOnArray(foods, cookAndEat)
operateOnArray(dishes, clean)

// 이름 변경 - 함수를 인자로 받으므로 고차 함수
function forEach(array, f) {
  for (let i = 0; i < array.length; i++) {
    var item = array[i];
    f(item)
  }
}

forEach(foods, cookAndEat)
forEach(dishes, clean)
