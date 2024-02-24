const family = [
  {member: 'mother', id: 111, coffee: 'Latte'},
  {member: 'father', id: 222, coffee: 'Espresso'},
  {member: 'son', id: 333, coffee: 'Capuccino'},
]

const getCoffee = (member) => {
  const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
  return coffeePromise
  .then( data => data.json())
  .then(list => {
    const coffee = list.find(res => res.title === member.coffee);
    console.log(coffee);
    return {
      ...member,
      coffee
    }
  })
}

const getFamilyMember = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const member = family.find(res => res.id === id);
      // console.log(member);
      if (member) {
        resolve(member)
      } else {
        reject(Error('This family member is not found'));
      }
    }, 1500)
  })
};

getFamilyMember(111)
.then(data => getCoffee(data))
.then(newMember => {
  console.log('new member > ', newMember);
}).catch(err => {
  console.log(err);
})
