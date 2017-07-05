import * as React from 'react';
import { Pet } from 'services/PeopleService';

interface Props {
    pets: Pet[]
}

export function PetList(props: Props) {
    const sortedPetNames = props.pets.map(x => x.name).sort((a, b) => a.localeCompare(b));
    return <ul>
        {sortedPetNames.map(name => <li>{name}</li>)}
    </ul>

}