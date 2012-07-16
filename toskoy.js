var skoyChar = {
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
}

var skoyWord = {
  'หนุ': 'นุ๊วซ์',
  'อยาก': 'ญั๊ข',
  'คะ': 'ขร๊',
  'ค่ะ': 'ฆร่',
  'ัน': 'ัล',
  'วก': '๊ก'
}

String.prototype.toSkoy = function () {
  var skoy = ''
  for (var i = 0 ; i < this.length ; i++) {
    if (typeof skoyChar[this[i]] !== 'undefined') {
      skoy = skoy + skoyChar[this[i]]
    } else {
      skoy = skoy + this[i]
    }
  }
  return skoy
}
