(function() {

var db = {}
  , maxLength = 0

function learnWord(from, to) {
  if (to.push && to.length) {
    for (var i = 0; i < to.length; i ++) {
      learnWord(from, to[i])
    }
    return
  }
  var array = db[from] || (db[from] = [])
  array[array.length] = to
  if (to.length > maxLength) maxLength = to.length
}

function learnPhrase(original, translated) {
  original = original.split(',')
  translated = translated.split(',')
  if (original.length != translated.length) {
    throw new Error('count mismatch!')
  }
  for (var i = 0; i < original.length; i ++) {
    learnWord(original[i], translated[i])
  }
}

function learn(obj) {
  for (var i in obj) {
    learnWord(i, obj[i])
  }
}

function has(str) {
  return !!db[str]
}

function get(str) {
  var c = db[str]
  return c[Math.floor(Math.random() * c.length)]
}

learn({
  'ู': "ุ๊",
  'ย': 'ญ',
  'ะ': '๊',
  'ด': 'ฎ',
  'ต': 'ฏ',
  'ข': 'ฆ',
  'อ': 'ฮ',
  'ท': 'ธ',
  'ี': 'ิ๊',
  '้': '๊',
  'น': 'ณ',
  'พ': 'ภ',
  'ภ': 'พ',
  'า': '๊',
  'ฉ': 'ช๋'
})

learn({
  'หนุ': 'นุ๊วซ์',
  'อยาก': 'ญั๊ข',
  'คะ': 'ขร๊',
  'ค่ะ': 'ฆร่',
  'ัน': 'ัล',
  'วก': '๊ก'
})

learnPhrase(
  'พวก,คุณ,จะ,ว่า,อะ,ไร,ก็,เชิญ,เลย,นะ,พวก,เรา,ไม่,สน,หรอก'
, 'พ๊ก,คุ๊ล,จ่,ว่,อ่,รั๊ย,ก่,เซิฬ,เร่ย,น๊,พ๊ก,เลา,ไม๊,ส่น,หร่อก'
)

// https://www.facebook.com/sowhateiei/posts/333737343378863

learnPhrase(
  /*'หนู*/'มี,นิ,ทาน,มา,เล่า,ให้,พี่,ฟัง,คะ,นิ,ทาน,เรื่อง,นี้,สอน,ให้,รู้,ว่า,ชาว,นา,กับ,ทะ,เล,ที่,หก'
, /*'ุ๊ซ์ว*/'มริ๊,ณิ๊,ธาง์ร,ม่,เฬอ่า,หั๊ล์ย,พริ๊ต์,ฟรั๊ก์ง,ค๊,ณิ๊,ธาถ์ฯ,เฬอื่บ์ลง,ณิ๊,ศั๊ฎ์,ญหั๊ล์,รุ๊ง์ว,ว่,ชั๊ส์ว,ณฆ์า,กั๊ผ,ฑะ,เฬ,ธิ๊ฆ์,หค์ก'
)
learnPhrase(
  'กาล,ครั้ง,หนึง,ชาว,นา,กำ,ลัง,หา,ปลา,อยู่,ใน,แต่,ว่า,หา,ยัง,ไง,ก็,ไม่,เจอ,ชาว,นา,ก็,เลย,ไป'
, 'กั๊รฬว์ะ,ฅั๊ฐ์งหสุ์,ณึ่,ชั๊ย์ว,ณฆ์า,กั๊,ร์ฬ,ห๊ษ์า,ปธ์ฬา,ยุ๊ว์ซ,นั๊บ์ย,ต่,ว๊พ์,ห๊ษ์า,ญั๊ล์ง,งั๊.,กํ,มรั๊ล์ย,เ๗อ,ชั๊ซ์ว,ณษ์า,ก่,เร่รร,ปั๊บ์ย'
)

String.prototype.toSkoy = function () {
  var skoy = ''
  for (var i = 0; i < this.length; ) {
    var success = false
    for (var l = maxLength; l > 0; l --) {
      var sub = this.substr(i, l)
      if (has(sub)) {
        skoy += get(sub)
        success = true
        i += l
        break
      }
    }
    if (success) continue
    skoy += this.charAt(i)
    i += 1
  }
  return skoy
}

})()
