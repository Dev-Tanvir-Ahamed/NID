import React from "react";
import { useForm } from "react-hook-form";

const FormText = (props) => {
  const { register } = useForm();
  return (
    <div className="mt-5">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        // {...register(props.regName)}
      />
    </div>
  );
};

export default FormText;
