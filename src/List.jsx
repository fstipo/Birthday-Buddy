import Person from './Person';

const List = ({ people }) => {
  // const people = props.people;

  return (
    <section>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </section>
  );
};
export default List;
