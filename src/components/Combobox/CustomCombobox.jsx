import { Combobox as HeadlessCombobox } from '@headlessui/react';
import React, { useState } from 'react';
import './combobox.css'; // Import the custom CSS

const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
];


const CustomCombobox = () => {
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
            <HeadlessCombobox value={selectedPerson} onChange={setSelectedPerson}>
                <HeadlessCombobox.Input
                    className="combobox-input"
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search for a person..."
                />
                <HeadlessCombobox.Options className="combobox-options">
                    {filteredPeople.length === 0 && query !== '' ? (
                        <div className="combobox-no-results">No results found.</div>
                    ) : (
                        filteredPeople.map((person) => (
                            <HeadlessCombobox.Option
                                key={person.id}
                                value={person}
                                className="combobox-option"
                            >
                                {person.name}
                            </HeadlessCombobox.Option>
                        ))
                    )}
                </HeadlessCombobox.Options>
            </HeadlessCombobox>
        </div>
    );
}

export default CustomCombobox;
