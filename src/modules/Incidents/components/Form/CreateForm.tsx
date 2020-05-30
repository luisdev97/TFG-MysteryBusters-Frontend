import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormField as Field, Label } from "semantic-ui-react";
import { CREATE_INCIDENT_SCHEMA } from "./validation";
import useUpload from "../../../../hooks/useUpload";

export default function CreateIncidentForm({ mutation, handleChanges }: any) {
  const { uploadedImage, uploadImage } = useUpload();
  const [cloudinaryUrl, setCloudinaryUrl] = useState<string>("initialState");
  const { register, handleSubmit, errors, watch, formState } = useForm({
    validationSchema: CREATE_INCIDENT_SCHEMA
  });
  let watchedFields = watch(Array.from(formState.dirtyFields));

  async function handleChangeImg() {
    const { img } = watchedFields;
    const uploadedImage = await uploadImage(img);
    setCloudinaryUrl(uploadedImage);
  }
  
  function handlFormChanges(e: any) {
    if (e.target.name === "img") handleChangeImg();
    handleChanges({ ...watchedFields, img: cloudinaryUrl });
  }

  function onSubmit(data: any) {
    mutation({ ...data, img: cloudinaryUrl });
  }

  function checkError(title: string) {
    return (
      errors.hasOwnProperty(title) && (
        <Label basic color="red" pointing="below">
          {errors[title].message}
        </Label>
      )
    );
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-info w-75 mx-auto mt-5"
    >
      <Field width={7} error className="mx-auto">
        {checkError("title")}
        <input
          name="title"
          ref={register}
          onChange={e => handlFormChanges(e)}
        />
      </Field>

      <Field width={7}>
        {checkError("description")}
        <input
          name="description"
          ref={register}
          onChange={e => handlFormChanges(e)}
        />
      </Field>
      <Field width={7}>
        {checkError("date")}
        <input
          type="date"
          name="date"
          ref={register}
          onChange={e => handlFormChanges(e)}
        />
      </Field>
      <Field width={7}>
        {checkError("time")}
        <input
          type="time"
          name="time"
          ref={register}
          onChange={e => handlFormChanges(e)}
        />
      </Field>
      <Field width={7}>
        {checkError("img")}

        <input
          type="file"
          name="img"
          ref={register}
          className="bg-dark"
          onChange={e => handlFormChanges(e)}
        />
      </Field>
      <Field width={7}>
        {checkError("maxResearchers")}
        <input
          type="number"
          name="maxResearchers"
          ref={register}
          onChange={e => handlFormChanges(e)}
        />
      </Field>
      <input type="submit" />
    </Form>
  );
}
