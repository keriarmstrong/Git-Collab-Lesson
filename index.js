function createPerson(hamsterOwnersName, hamsterOwnersAge) {
    return {
      hamsterOwnersName,
      hamsterOwnersAge,
      friends: [],  // hamsters are friends
    };
  }
  
  function addPersonAsFriend(friendArrayOfHamsterOwner, aFriendOfHamsterOwner) {
    friendArrayOfHamsterOwner.friends.push(aFriendOfHamsterOwner);
    return friendArrayOfHamsterOwner;
  }
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };