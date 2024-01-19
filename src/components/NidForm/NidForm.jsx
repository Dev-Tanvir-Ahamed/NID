import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const NidForm = () => {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
    navigate("/nid", { state: { formData: data } });
  };
  return (
    <div className="m-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="voter_name_bangla">
          <label htmlFor="voterBanglaName">নাম: </label>
          <input
            type="text"
            name="voterBanglaName"
            id="voterBanglaName"
            {...register("voterBanglaName")}
          />
        </div>
        <div className="voter_name_english mt-5">
          <label htmlFor="voterEnglishName">Name: </label>
          <input
            type="text"
            name="voterEnglishName"
            id="voterEnglishName"
            {...register("voterEnglishName")}
          />
        </div>
        <div className="voter_father_name mt-5">
          <label htmlFor="voterFatherName">পিতা: </label>
          <input
            type="text"
            name="voterFatherName"
            id="voterFatherName"
            {...register("voterFatherName")}
          />
        </div>
        <div className="voter_name_mother mt-5">
          <label htmlFor="voterMotherName">মাতা: </label>
          <input
            type="text"
            name="voterMotherName"
            id="voterMotherName"
            {...register("voterMotherName")}
          />
        </div>
        <div className="voter_date_of_birth mt-5">
          <label htmlFor="voterdateOfBirthName">Date of birth: </label>
          <input
            type="text"
            name="voterdateOfBirthName"
            id="voterdateOfBirthName"
            {...register("voterdateOfBirthName")}
          />
        </div>
        <div className="voter_id_no mt-5">
          <label htmlFor="voterIDNo">ID NO.: </label>
          <input
            type="text"
            name="voterIDNo"
            id="voterIDNo"
            {...register("voterIDNo")}
          />
        </div>
        <div className="submit_btn mt-8 border p-3 w-fit">
          <button type="submit">Submit</button>
        </div>
      </form>
      {/* {formData && <NidHeader formData={formData} />} */}
    </div>
  );
};

export default NidForm;
