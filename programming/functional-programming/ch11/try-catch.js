function saveUserData(user) {
  console.log('save: ', user)
}

function fetchProduct(productId) {
  console.log('fetch: ', productId)
}

function logToSnapErrors(error) {
  console.log('log: ', error)
}

try {
  saveUserData(user)
} catch (error) {
  logToSnapErrors(error)
}

// 고차함수
function withLogging(callback) {
  try {
    callback()
  } catch (error) {
    logToSnapErrors(error)
  }
}

withLogging(function () {
  saveUserData(user);
})

// 함수를 반환하는 함수
function warpLogging(callback) {
  return function(arg) {
    try {
      callback(arg)
    } catch (error){
      logToSnapErrors(error);
    }
  }
}

const user = {name: 'a'}

const saveUserDataWithLogging = warpLogging(saveUserData);
const fetchProductWithLogging = warpLogging(fetchProduct);

saveUserDataWithLogging(user);
fetchProductWithLogging(user);
warpLogging(saveUserData)(user);
