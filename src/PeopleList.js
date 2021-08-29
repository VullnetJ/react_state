import React from 'react';
import { PeopleListItem } from './PeopleListItem';

export const PeopleList = ({people}) => (
        
        <> 
          {people.map((person, i) => 
              <PeopleListItem person={person} key={i} />
          )}
        </>
        
);


