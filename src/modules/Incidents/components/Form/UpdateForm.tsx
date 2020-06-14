import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { UPDATE_INCIDENT_SCHEMA as validationSchema } from "./validation";
import { Form, FormField as Field, Label } from "semantic-ui-react";
import { useParams } from "react-router";
import useUpload from "../../../../hooks/useUpload";

export default function UpdateForm({
  initialState,
  mutation,
  handleChanges
}: any) {
  const { uploadedImage, uploadImage } = useUpload();
  const [cloudinaryUrl, setCloudinaryUrl] = useState<string | null>(null);

  const { register, handleSubmit, errors, reset, watch, formState } = useForm({
    validationSchema
  });
  const { id } = useParams();
  const [prevData, setPrevData] = useState(initialState);
  let watchedFields = watch(Array.from(formState.dirtyFields));

  useEffect(() => {
    if (initialState !== formState) {
      setCloudinaryUrl(initialState.img);
      const object = { ...initialState };
      delete object.img;
      reset(object);
    }
  }, [initialState]);

  async function handleChangeImg() {
    const { img } = watchedFields;
    const uploadedImage = await uploadImage(img);
    setCloudinaryUrl(uploadedImage);
  }

  function handlFormChanges(e: any) {
    if (e.target.name === "img") handleChangeImg();
    handleChanges({ ...prevData, ...watchedFields, img: cloudinaryUrl });
  }

  function onSubmit(data: any) {
    let input = (cloudinaryUrl && cloudinaryUrl != initialState.img)
      ? { ...watchedFields, img: cloudinaryUrl }
      : { ...watchedFields };
    mutation(id, Object.assign({}, input));
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
      className="incidents-form w-75 mx-auto group"
    >
      <Field width={13} className="mx-auto">
        {checkError("title")}
        <input
          type="text"
          name="title"
          placeholder="Título"
          ref={register}
          onChange={e => handlFormChanges(e)}
        />
      </Field>

      <Field width={16}>
        {checkError("description")}
        <input
          placeholder="Descripción del incidente"
          type="textarea"
          name="description"
          ref={register}
          onChange={e => handlFormChanges(e)}
        />
      </Field>

      <Field width={8}>
        {checkError("img")}

        <input
          type="file"
          name="img"
          ref={register}
          className="bg-dark"
          onChange={e => handlFormChanges(e)}
        />
      </Field>
      
      <Field width={5}>
        {checkError("maxResearchers")}
        <input
          placeholder="Plazas"
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
