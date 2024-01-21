import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const NidForm = () => {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState(null);
  // console.log(formData);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // console.log(data);
    setFormData(data);
    await new Promise((resolve) => setTimeout(resolve, 500)); // Delay to ensure state update
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
        {/* <FormText
          htmlFor="voterBanglaName"
          label="নাম: "
          type="text"
          name="voterBanglaName"
          id="voterBanglaName"
          {...register("voterBanglaName")}
        /> */}
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
        <div className="voter_id_no mt-5 mb-5">
          <label htmlFor="voterIDNo">ID NO.: </label>
          <input
            type="text"
            name="voterIDNo"
            id="voterIDNo"
            {...register("voterIDNo")}
          />
        </div>
        {/* <FileUpload
          name="voterImage"
          id="voterImage"
          imgFilehandler={imgFilehandler}
          imgfile={imgfile}
          {...register("voterImage")}
        /> */}
        <div>
          <label htmlFor="voterImage">Voter Image: </label>
          <input
            type="file"
            name="voterImage"
            id="voterImage"
            {...register("voterImage")}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="voterSignature">Voter Signature: </label>
          <input
            type="file"
            name="voterSignature"
            id="voterSignature"
            {...register("voterSignature")}
          />
        </div>
        <div className="voter_adress mt-5 mb-5">
          <label htmlFor="voterAdress">Address : </label>
          <input
            type="text"
            name="voterAdress"
            id="voterAdress"
            {...register("voterAdress")}
          />
        </div>
        <div className="blood_group mt-5 mb-5">
          <label htmlFor="bloodGroup">রক্তের গ্রুপ / Blood Group: </label>
          <input
            type="text"
            name="bloodGroup"
            id="bloodGroup"
            {...register("bloodGroup")}
          />
        </div>
        <div className="birth_place mt-5 mb-5">
          <label htmlFor="birthPlace">জন্মস্থান: </label>
          <input
            type="text"
            name="birthPlace"
            id="birthPlace"
            {...register("birthPlace")}
          />
        </div>
        <div>
          <label htmlFor="voterImage">Officer Singnature: </label>
          <input
            type="file"
            name="officerSingnature"
            id="officerSingnature"
            {...register("officerSingnature")}
          />
        </div>
        <div className="submit_btn mt-8 border p-3 w-fit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NidForm;
