// 함수 빼내기 예시 - 카피 온 라이트 함수
function arraySet(array, idx, value) {
  const copy = array.slice();
  copy[idx] = value;
  return copy;
}

function push(array, elem) {
  const copy = array.slice();
  copy.push(elem)
  return copy;
}

function dropLast(array) {
  const copy = array.slice();
  copy.pop();
  return copy;
}

function dropFirst(array) {
  const copy = array.slice();
  copy.shift();
  return copy;
}

// 함수 본문을 콜백으로 바꾸기
function arraySet(array, idx, value) {
  return withArrayCopy(array)
}

function withArrayCopy(array) {
  var copy = array.slice();
  copy[idx] = value;
  return copy;
}

// 콜백 빼내기
function arraySet(array, idx, value) {
  return withArrayCopy(array, function(copy) {
    copy[idx] = value
  })
}

function withArrayCopy(array, modify) {
  var copy = array.slice();
  modify(copy);
  return copy;
}