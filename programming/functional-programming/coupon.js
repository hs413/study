/**
 * 1. DB에서 구독자를 가져오기 (액션)
 *  1-1. 계산 -> 데이터 (구독자 목록)
 * 2. DB에서 쿠폰 목록 가져오기 (액션)
 *  2-1. 계산 -> 데이티 (쿠폰 목록)
 * 3. 보낼 이메일 목록 만들기 (계산) -> 데이터 (이메일 목록)
 *  이메일을 바로 보내는 것보다 목록을 만드는 것이 테스트 하기 쉬움
 *  액션은 계산으로 바꾸는 것이 좋다.
 *  더 작은 계산으로 나눌 수 있다면 나눈다.
 * 4. 이메일 전송하기 (액션)
 * */
// var subscriber = {
//   email: "sample@email.com",
//   rec_count: 16,
// };

// var rank1 = "best";
// var rank2 = "good";

// 계산
function subCouponRank(subscriber) {
  if (subscriber.rec_count >= 10) {
    return "best";
  } else {
    return "good";
  }
}

// var coupon = {
//   code: "10PERCENT",
//   rank: "bad",
// }


// 계산
function selectCouponsByRank(coupons, rank) {
  var ret = [];
  for (var c = 0; c < coupons.length; c++) {
    var coupon = coupons[c];
    if (coupon.rank === rank) {
      ret.push(coupon.code);
    }
  }
  return ret;
}

// var message = {
//   from: "newsletter@coupon.co",
//   to: "sample@email.com",
//   subject: "Your weekly coupons inside",
//   body: "Here are your coupons ..."
// }

// 계산
function emailForSubscriber(subscriber, goods, bests) {
  var rank = subCouponRank(subscriber);
  if (rank === "best") {
    return {
      from: "newsletter@coupon.co",
      to: subscriber.email,
      subject: "Your weekly coupons inside",
      body: "Here are the best coupons: " + bests.join(", "),
    }
  } else {
    return {
      from: "newsletter@coupon.co",
      to: subscriber.email,
      subject: "Your weekly coupons inside",
      body: "Here are the good coupons: " + goods.join(", "),
    }
  }
}
// 계산
function emailForSubscribers(subscribers, goods, bests) {
  var emails = [];
  for (var s = 0; s < subscribers.length; s++) {
    var subscriber = subscribers[s];
    var email = emailForSubscriber(subscriber, goods, bests);
    emails.push(email);
  }
  return emails;
}

// 액션
function sendIssue() {
  var coupons = fetchCouponsFromDB();
  var goodCoupons = selectCouponsByRank(coupons, "good");
  var bestCoupons = selectCouponsByRank(coupons, "best");
  var subscribers = fetchSubscribersFromDB();
  var emails = emailForSubscribers(subscribers, goodCoupons, bestCoupons);

  for (var e = 0; e < emails.length; e++) {
    var email = emails[e];

    console.log(email )
  }
}

sendIssue()

// 액션
function fetchCouponsFromDB() {
  return [
    {
      code: "10PERCENT",
      rank: "bad",
    },
    {
      code: "20PERCENT",
      rank: "good",
    },
    {
      code: "30PERCENT",
      rank: "best",
    }
  ]
}

// 액션
function fetchSubscribersFromDB() {
  return [
    {
      email: "sample1@email.com",
      rec_count: 16,
    },
    {
      email: "sample2@email.com",
      rec_count: 9,
    },
    {
      email: "sample3@email.com",
      rec_count: 1,
    }
  ]
}