function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(person, someoneIKnow) {
    person.friends.push(someoneIKnow);
    return person;
  }
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };