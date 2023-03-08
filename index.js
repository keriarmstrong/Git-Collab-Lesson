function createPerson(hamsterOwnersName, hamsterOwnersAge) {
    return {
      hamsterOwnersName,
      hamsterOwnersAge,
      friends: [],  // hamsters are friends
    };
  }

  function addPersonAsFriend(theLionKing, aFriendOfHamsterOwner) {
    theLionKing.friends.push(aFriendOfHamsterOwner);
    return theLionKing;

  }
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };