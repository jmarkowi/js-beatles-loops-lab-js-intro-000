function theBeatlesPlay(musicians, instruments) {
  var theBeatles = new Array();

  for (let i = 0; i < 4; i += 1) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theBeatles
}

function johnLennonFacts(facts) {
  var excitedFacts = new Array()
  let i = 0
  while (i <= facts.length) {
    excitedFacts.push(facts[i] + "!!!");
    i += 1
  }
  return excitedFacts
}
