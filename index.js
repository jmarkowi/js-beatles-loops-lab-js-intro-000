function theBeatlesPlay(musicians, instruments) {
  var theBeatles = new Array();

  for (let i = 0; i < 4; i += 1) {
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theBeatles
}

function johnLennonFacts(facts) {
  let excitedFacts = []
  let i = 0
  while (i <= facts.length) {
    excitedFacts[i] = `${facts[i]}!!!`
    i += 1
  }
  return excitedFacts
}