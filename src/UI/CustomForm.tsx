import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormField as Field, Label } from "semantic-ui-react";
import { CustomFormProps } from './props';

export default function CustomForm<T>({ fields, validationSchema, handleChanges, prevData }: CustomFormProps<T>) {
    const { errors, register, watch, formState } = useForm({ validationSchema });
    const watchedFields = watch(Array.from(formState.dirtyFields));

  return (
    <Form 
      className="bg-dark mt-5 w-50 mx-auto"
      size="mini"
    >
      {fields.map(i => (
        <Field width={6} className="mx-auto">
          <Label
            onClick={() => document.getElementsByName(i.name)[0].focus()}
            size="small"
            className="mt-2 d-inline"
            content={i.name}
          />
          {errors.hasOwnProperty(i.name) && (
            <Label basic color="red" pointing="below">
              {errors[i.name]!.message}
            </Label>
          )}
          <input
            type={i.type}
            name={i.name}
            ref={register()}
            onChange={ () => { handleChanges({...prevData, ...watchedFields}) } }
            className='v-hidden'
          />
        </Field>
      ))}
    </Form>
  );
}





