import React from "react";
import UserNavbar from "../UserNavbar";
import img1 from "../UserImages/serviceImage.png";
import UserFooter from "../UserFooter";

import wholebody from '../UserImages/Group.png';
import vaccineimg from '../UserImages/vaccine.png';
import imagingimg from '../UserImages/x 1.png';
import minorimg from '../UserImages/surgery-PhotoRoom 1.png'


function ServiceCom1() {
  return (
    <>
      <UserNavbar />
      <div className="">
        <div className=" ">
          <img className="w-full" src={img1} alt="" />
        </div>
      </div>
      <div className="mt-[125px] flex justify-around  ">
        <div className="border w-[450px]  shadow-2xl text-center">
          <div className="img h-[220px] items-center justify-center flex"><img src={wholebody} alt="" /></div>
          <h1 className="text-xl font-bold mb-2">फुल बडि चेकअप</h1>
          <p className="mb-3  px-3">
            कम्प्लिट ब्लड काउन्ट,ग्लूकोजको मात्रा परीक्षण,लिपिड प्रोफाइल,युरिक एसिड तथा अन्य चेकजाचको लाभ लिन सक्छन्
          </p>
        </div>
        <div className="border w-[450px]   shadow-2xl text-center">
          <div className="img items-center justify-center flex h-[220px]"><img src={vaccineimg} alt="" /></div>
          <h1 className="text-xl font-bold mb-2">खोप</h1>
          <p className="mb-3  px-3">
          हामी एक मान्यता प्राप्त खोप क्लिनिक हौं,शिशु खोप, वैदेशिक यात्रा खोप प्रमाणपत्र, कोरोन खोप तथा अन्य भ्याक्सिनहरू 
          </p>
        </div>
      </div>

      <div className="mt-[125px] flex justify-around mb-5">
        <div className="border w-[450px]  shadow-2xl text-center">
          <div className=" items-center justify-center flex h-[220px]"><img src={imagingimg} alt="" /></div>
          <h1 className="text-xl font-bold mb-2">भिडियो | फोटो इमेजिङ</h1>
          <p className="mb-3  px-3">
          हामी एक्स-रे, ईसीजी जस्ता सेवाहरू प्रदान गर्दछौं
                    </p>
        </div>
        <div className="border w-[450px]  shadow-2xl text-center">
          <div className="img items-center justify-center flex h-[220px]"><img src={minorimg} alt="" /></div>
          <h1 className="text-xl font-bold mb-2">माइनर प्रक्रिया र शल्यक्रियाहरू</h1>
          <p className="mb-3  px-3">
          हामी AllWell मा साना प्रक्रियाहरू र शल्यक्रियाहरू प्रदान गर्दछौं। कृपया बाहिरी रोगी शल्यक्रियाको सम्बन्धमा डाक्टर वा विशेषज्ञसँग परामर्श गर्नुहोस् </p>
        </div>
      </div>
      <UserFooter />
    </>
  );
}

export default ServiceCom1;
