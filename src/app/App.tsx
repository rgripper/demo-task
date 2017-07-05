import * as React from 'react';
import { Person, Pet } from 'services/PeopleService';
import { PetList } from "app/PetList";

interface Props {
  people: Person[]
}

function getPetsByGender(gender: string, people: Person[]): Pet[] {
  return people
    .filter(x => x.gender == gender)
    .map(x => x.pets)
    .reduce((pets1, pets2) => pets1.concat(pets2), []);
}

export function App(props: Props) {
  const genders = Array.from(new Set(props.people.map(x => x.gender)));
  const petsPerGender = genders.map(gender => ({ gender, pets: getPetsByGender(gender, props.people) }));
  return (
    <ul>
      {petsPerGender.map(x =>
        <li key={x.gender}>
          <label>{x.gender}</label>
          <PetList pets={x.pets}></PetList>
        </li>
      )}
    </ul>
  );
}

