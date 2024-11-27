import { Combobox } from '@headlessui/react';
import React, { useState } from 'react';
import './styles/combobox.css'; // Import the custom CSS

const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
];

export default {
    title: 'HeadlessUI/Combobox',
    component: Combobox,
};

export const Default = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [query, setQuery] = useState('');

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
                person.name.toLowerCase().includes(query.toLowerCase())
            );

    return (
        <div className="combobox-container">
            <Combobox value={selectedPerson} onChange={setSelectedPerson}>
                <Combobox.Input
                    className="combobox-input"
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search for a person..."
                />
                <Combobox.Options className="combobox-options">
                    {filteredPeople.length === 0 && query !== '' ? (
                        <div className="combobox-no-results">No results found.</div>
                    ) : (
                        filteredPeople.map((person) => (
                            <Combobox.Option
                                key={person.id}
                                value={person}
                                className="combobox-option"
                            >
                                {person.name}
                            </Combobox.Option>
                        ))
                    )}
                </Combobox.Options>
            </Combobox>
        </div>
    );
};
