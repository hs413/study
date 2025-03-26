// 1. 구독자 목록을 가져온다(액션)
const subscribers = fetchSubscribers();

// 2. 쿠폰 목록을 가져온다.(액션)
const coupons = fetchCoupons();

// 3. 구독자 목록에서 친구를 10명 이상 추천한 구독자를 뽑아낸다. (계산)
const bestSubscribers = findBestSubscribers(subscribers);

// 4. 쿠폰 목록에서 높은 등급의 쿠폰을 뽑아낸다. (계산)
const bestCoupon = findBestCoupons(coupons);

// 5번 과정 분리
// 5-1. 발송 메일 목록을 만든다. (계산)
const mailList = createMailList(bestSubscribers, bestCoupon);

// 5-2. 메일을 발송한다. (액션)
sendMail(mailList);


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

// 좋은 구독자를 뽑아낸다.
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

// 좋은 쿠폰을 뽑아낸다.
function findBestCoupons(coupons) {
  for (let i = 0; i < coupons.length; i++) {
    const coupon = coupons[i];
    if (coupon.rank === 'best')
      return coupon
  }

  // return coupons.find(coupon => coupon.rank === 'best');
}

// 메일 목록을 만든다.
function createMailList(subscribers, coupon) {
  const mailList = [];
  for (let i = 0; i < subscribers.length; i++) {
    mailList.push({
      subscribers: subscribers[i],
      coupon: coupon
    })
  }

  return mailList;

  // return subscribers.map(subscriber => ({
  //   subscriber,
  //   coupon,
  // }))
}

// 메일을 보낸다.
function sendMail(mailList) {
  for (let i = 0; i < mailList.length; i++) {
    // 메일을 보낸다고 가정
    console.log(mailList[i])
  }
}

class Fetch {
  fetch() {
    console.log('defaultFetch')
  }
}

class Find {
  find() {
    console.log(defaultFind)
  }
}

class FetchSubscriber extends Fetch {
  fetch() {
    return [
      { email: 'user1@gmail.com', count: 10 },
      { email: 'user2@gmail.com', count: 4 },
      { email: 'user3@gmail.com', count: 1 },
      { email: 'user4@gmail.com', count: 15 },
    ]
  }
}

class FetchCoupons extends Fetch {
  fetch() {
    return [
      { code: '5% 할인쿠폰', rank: 'bad' },
      { code: '10% 할인쿠폰', rank: 'good' },
      { code: '30% 할인쿠폰', rank: 'best' },
    ]
  }
}

function main() {
  const coupons =  new FetchCoupons().fetch();
  const subscribers = new FetchSubscriber().fetch();

  console.log(coupons)
  console.log(subscribers)
}

main();
