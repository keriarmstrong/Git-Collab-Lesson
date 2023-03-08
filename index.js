function createPerson(hamsterOwnersName, hamsterOwnersAge) {
    return {
      hamsterOwnersName,
      hamsterOwnersAge,
      friends: [],  // hamsters are friends
    };
  }

// kilroy was here
  
  function addPersonAsFriend(person, someoneIKnow) {
    person.friends.push(someoneIKnow);
    return person;

  }
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };