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
  return c[~~(Math.random() * c)]
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
