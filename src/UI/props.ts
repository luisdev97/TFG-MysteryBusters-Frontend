import { fieldsType, tiposDeForm } from './fieldsType';
import { Dispatch, SetStateAction } from 'react';
import * as yup from 'yup';

export type CustomFormProps = {
    fields: Array<fieldsType<tiposDeForm>>;
    validationSchema: yup.ObjectSchema<Object>;
    handleChanges: Dispatch<SetStateAction<any>>;
  };
  