/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useLocation } from "react-router-dom";
import bd from "../../assets/bd.jpg";
import qrCode from "../../assets/qrCode.png";
import "./NidHeader.css";
// eslint-disable-next-line react/prop-types
const NidHeader = () => {
  const location = useLocation();
  const formData = location.state?.formData;
  console.log("NidHeader", formData.voterImage[0]);

  return (
    <div>
      {/* layout */}
      <div className="nid_layout">
        {/* nid fornt */}
        <div className="nid_fornt">
          {/* nid fornt header */}
          <div className="nid_header">
            <div className="nid_img">
              <img src={bd} alt="" />
            </div>
            <div className="nid_content">
              <p>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>
              <p>Government of the People's Republic of Bangladesh</p>
              <p>
                <span>National ID Card </span>/ জাতীয় পরিচয় পত্র
              </p>
            </div>
          </div>
          {/* nid fornt voter details */}
          <div className="nid_voter_details">
            {/* nid voter img and signature */}
            <div className="voter">
              <div className="voter_img">
                {formData?.voterImage && (
                  <img
                    src={URL.createObjectURL(formData.voterImage[0])}
                    alt="voter picture"
                  />
                )}
              </div>
              <div className="voter_signature">
                {formData?.voterSignature && (
                  <img
                    src={URL.createObjectURL(formData.voterSignature[0])}
                    alt="voter signature"
                  />
                )}
              </div>
            </div>
            {/* voter everything details */}
            <div className="voter_content">
              <div className="voter_name_bangla">
                নাম: <span>{formData?.voterBanglaName}</span>
              </div>
              <div className="voter_name_english">
                Name: <span>{formData?.voterEnglishName}</span>
              </div>
              <div className="voter_father_name">
                পিতা: <span>{formData?.voterFatherName}</span>
              </div>
              <div className="voter_mother_name">
                মাতা: <span> {formData?.voterMotherName}</span>
              </div>
              <div className="voter_date_of_birth">
                <span className="font-medium">Date of Birth: </span>
                <span className="voter_date">
                  {formData?.voterdateOfBirthName}
                </span>
              </div>
              <div className="voter_id_no">
                <span className="font-medium"> ID NO: </span>
                <span className="voter_id">{formData?.voterIDNo}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="nid_back">
          <div className="nid_back_header">
            <p>
              এই কার্ডটি বাংলাদেশ গণপ্রজাতন্ত্রী সরকারের সম্পত্তি। কার্ডটি
              ব্যবহারকারী ব্যতীত অন্য কোথাও পাওয়া গেলে নিকটস্থ পোস্ট অফিসে জমা
              দেওয়ার জন্য অনুরোধ করা হলো।
            </p>
          </div>
          <div className="voter_address mb-6">
            <div className="mr-1">ঠিকানা: </div>
            <div>{formData?.voterAdress}</div>
          </div>
          <div className="voter_extra_details">
            <div className="blood_group">
              রক্তের গ্রুপ / Blood Group: {formData?.bloodGroup}
            </div>
            <div>জন্মস্থান: {formData?.birthPlace} </div>
            <div className="mudron">মুদ্রণ: ০১</div>
          </div>
          <div className="officer_signature">
            <div className="singnature">
              <div>
                {formData?.officerSingnature && (
                  <img
                    src={URL.createObjectURL(formData.officerSingnature[0])}
                    alt="voter picture"
                  />
                )}
              </div>
              <div>
                <p className="">প্রদানকারী কর্তৃপক্ষের স্বাক্ষর</p>
              </div>
            </div>
            <div className="date_of_signature mr-6">
              <p>প্রদানের তারিখ: ০৬/০৯/২০২১</p>
            </div>
          </div>
          <div className="qr_code">
            <img src={qrCode} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NidHeader;
