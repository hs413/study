

function saveUserData(user) {
  console.log('...user')
}

function fetchProduct(productId) {
  console.log('...product')
}

  try {
    saveUserData()
  } catch (error) {
    logToSnapErrors(error)
  }

// 콜백 함수 빼내기
function withLogging(f) {
  try {
    f()
  } catch (error) {
    logToSnapErrors(error)
  }
}

  withLogging(function () {
    saveUserData(user);
  })

// 이름을 명확하게 바꾸기

try {
  saveUserDataNoLogging(user);
} catch(error) {
  logToSnapErrors(error)
}

try {
  fetchProductNoLogging(productId)
} catch(error) {
  logToSnapErrors(error);
}

function saveUserDataWithLogging(user) {
  try {
    saveUserDataNoLogging(user);
  } catch(error) {
    logToSnapErrors(error)
  }
}

function fetchProductWithLogging(productId) {
  try {
    fetchProductNoLogging(productId)
  } catch(error) {
    logToSnapErrors(error);
  }
}

// 중복 없애기
function warpLogging(f) {
  return function(arg) {
    try {
      f(arg)
    } catch (error){
      logToSnapErrors(error);
    }
  }
}

const saveUserDataWithLogging = warpLogging(saveUserDataNoLogging);
const fetchProductWithLogging = warpLogging(fetchProductNoLogging);

