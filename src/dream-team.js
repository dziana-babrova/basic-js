const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
    members = members.filter(el => typeof el === "string");
    members.forEach((el, i) => (members[i] = el.trim().toUpperCase()));
    members.sort();
    let team = "";
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        team += members[i][0];
      }
    }
    return team;
  }
}

module.exports = {
  createDreamTeam
};

// createDreamTeam(["   Olivia", 1111, "Lily", "Oscar", true, null]);