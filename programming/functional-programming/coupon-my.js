// 1. 구독자 목록을 가져온다(액션)
const subscribers = fetchSubscribers();

// 2. 쿠폰 목록을 가져온다.(액션)
const coupons = fetchCoupons();

// 3. 구독자 목록에서 친구를 10명 이상 추천한 구독자를 뽑아낸다. (계산)
const bestSubscribers = findBestSubscribers(subscribers);

// 4. 쿠폰 목록에서 높은 등급의 쿠폰을 뽑아낸다. (계산)
const bestCoupon = findBestCoupons(coupons);

// 5. 3번에서 뽑아낸 구독자에게 4번에서 뽑아낸 쿠폰을 발송한다. (액션)
bestSubscribers.forEach(subscriber => sendMail(subscriber, bestCoupon))


// DB에서 구독자 목록을 가져온다.
function fetchSubscribers() {
  return [
    { email: 'user1@gmail.com', count: 10 },
    { email: 'user2@gmail.com', count: 4 },
    { email: 'user3@gmail.com', count: 1 },
    { email: 'user4@gmail.com', count: 15 },
  ]
}

// DB에서 쿠폰 목록을 가져온다.
function fetchCoupons() {
  return [
    { code: '5% 할인쿠폰', rank: 'bad' },
    { code: '10% 할인쿠폰', rank: 'good' },
    { code: '30% 할인쿠폰', rank: 'best' },
  ]
}

function findBestSubscribers(subscribers) {
  const bestSubscribers = [];
  for (let i = 0; i < subscribers.length; i++) {
    const subscriber = subscribers[i];
    if (subscriber.count >= 10)
      bestSubscribers.push(subscriber);
  }
  return bestSubscribers;

  // return subscribers.filter(subscriber => subscriber.count >= 10);
}

function findBestCoupons(coupons) {
  for (let i = 0; i < coupons.length; i++) {
    const coupon = coupons[i];
    if (coupon.rank === 'best')
      return coupon
  }

  // return coupons.find(coupon => coupon.rank === 'best');
}

function sendMail(subscriber, coupon) {
  const content = {
    to: subscriber.email,
    coupon: coupon,
  }
  // 메일을 보낸다고 가정
  console.log(content)
}