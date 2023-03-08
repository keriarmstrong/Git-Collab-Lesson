function createPerson(hamsterOwnersName, hamsterOwnersAge) {
    return {
      hamsterOwnersName,
      hamsterOwnersAge,
      friends: [],  // hamsters are friends
    };
  }

  function addPersonAsFriend(friendo, aFriendOfHamsterOwner) {
    friendo.friends.push(aFriendOfHamsterOwner);
    return friendo;

  }
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };