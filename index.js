function theBeatlesPlay(musicians, instruments) {
  var theBeatles = new Array();

  for (let i = 0; i < 4; i += 1) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theBeatles
}
