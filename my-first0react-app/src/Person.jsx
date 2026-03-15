import { useState } from "react";

function Person() {
  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
    setPerson({ ...person, age: person.age + 1 });
  };

  // consistent + predictable
  const [person, setPerson] = useState({
    name: "Joe",
    siblings: [],
    job: "",
    blabla: {},
    age: 200,
  });

  //   1.
  //   console.log("during render: ", person);

  return (
    <>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <button onClick={handleIncreaseAge}>Increase Age</button>
    </>
  );
}

export default Person;
