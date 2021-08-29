import React from 'react';
import { PeopleList } from '../PeopleList';


const people = [
    {
        name: 'John',
        age: 40,
        hairColor: 'blond',
    },
    {
        name: 'Helen',
        age: 42,
        hairColor: 'brown',
    },
    {
        name: 'Ola',
        age: 33,
        hairColor: 'brown',
    },
]

export const PeopleListPage = () => {
    return (
         <>
        <h1>The People List Page</h1>
        <PeopleList people={people} />
    </>
    )
   
}