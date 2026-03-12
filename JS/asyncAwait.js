function getPersonsInfo(name) {
  return server.getPeople().then((people) => {
    return people.find((person) => {
      return person.name === name;
    });
  });
}

async function getPersonsInfoAsync(name) {
  const people = await server.getPeople();
  const person = people.find((person) => {
    return person.name === name;
  });
  return person;
}
