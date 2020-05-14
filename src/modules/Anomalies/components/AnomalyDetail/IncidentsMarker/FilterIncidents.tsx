import React, { useState, useEffect } from 'react'
import { Form, Radio } from 'semantic-ui-react';
export default function FilterIncidents({ setUnresolved }: any) {
    const [selectRadio, setSelectRadio] = useState<string>('all');

    useEffect(() => {
        if(selectRadio === 'all')
            setUnresolved(false)
        else
        setUnresolved(true)
    },[selectRadio]);

    return (
        <Form className='bg-white mx-auto w-75 corner p-2 border border-secondary' style={{borderRadius: '15px'}}>
        <Form.Field className='d-inline'>
          <Radio
            className='mt-2'
            label='Todos'
            name='radioGroup'
            value='all'
            checked={selectRadio === 'all'}
            onChange={ () => setSelectRadio('all')}
            toggle
          />
        </Form.Field>
        <Form.Field className='d-inline ml-4'>
          <Radio
            label='No resueltos'
            name='radioGroup'
            value='unresolved'
            checked={selectRadio === 'unresolved'}
            onChange={ () => setSelectRadio('unresolved')}
            toggle
          />
        </Form.Field>

        <Form.Field className='d-inline ml-4'>
          <Radio
            label='Plazas disponibles'
            name='radioGroup'
            value='disponible'
            checked={selectRadio === 'disponible'}
            onChange={ () => setSelectRadio('disponible')}
            toggle
          />
        </Form.Field>

      </Form>
    )
}
