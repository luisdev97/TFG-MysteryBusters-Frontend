import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const options = [
    { key: 1, text: 'Ufología', value: 'Ufologia' },
    { key: 2, text: 'Apariciones', value: 'Apariciones' },
    { key: 3, text: 'Exorcismos', value: 'Exorcismos' },
    { key: 4, text: 'Poderes psíquicos', value: 'Poderes psiquicos' },
    { key: 5, text: 'Magia negra', value: 'Magia negra' },
    { key: 6, text: 'Zombies', value: 'Zombies' },
]


const renderLabel = (label: any) => ({
    color: 'blue',
    content: `${label.text}`,
    icon: 'check',
})

export default function ResearcherCompetenciesSelect({ change }: any) {
    return (
        <Dropdown
            className="competencies-select mb-5"
            name="competencies"
            multiple
            selection
            fluid
            scrolling
            options={options}
            placeholder='Choose an option'
            renderLabel={renderLabel}
            onChange={(e, data) => change(data.value)}
        />
    )
}
