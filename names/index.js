const peopleNames = require('../country/state/city/index')
const firstNames = require('../utilities/utils/index')

let getPeopleInCity = peopleNames => {
  return firstNames(peopleNames)
}
let justNames = getPeopleInCity(peopleNames)
console.log(justNames)
module.exports = getPeopleInCity
