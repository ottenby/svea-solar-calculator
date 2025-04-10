"use client";

import { getPostedData } from "@/connectivities";
import { StoredData } from "@/types";
import { useEffect, useState } from "react";

export const SuccessStep = () => {
  const [data, setData] = useState<StoredData>();

  useEffect(() => {
    getPostedData()
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data?.calculatorData?.savingsData && (
        <>
          <h5>Success!</h5>
          <p>{`
  ${data.userData.name},
  Thank you for your solar inquiry! We've received your request for a:
  
  ${
    data.calculatorData.roofSize
  } solar system (${data.calculatorData.savingsData?.monthlySavings.toFixed(
            0
          )} SEK estimated monthly savings).
  
  Our team will contact you within 24 hours at:
  Phone: ${data.userData.phone}
  Email: ${data.userData.email}
  
  Regarding your ${
    data.calculatorData.monthlyBill
  } SEK monthly energy bill savings and potential ${(data.calculatorData.savingsData?.co2ReductionTons).toFixed(
            1
          )} ton CO₂ reduction.
`}</p>
        </>
      )}
    </div>
  );
};
