import axios from "axios";
import React, { useEffect, useState } from "react";
import Plans from "./Plans";
import Layout from "../Utilities/Layout";

export default function AllPlans() {
  const [planArr, setPlanArr] = useState([]);

  useEffect(() => {
    async function fetchData(){
      try {
        const planData = await axios.get('/plans/allplans');
        setPlanArr(planData.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <div>
          <Plans bgClass="plan3" heading="Plan Your Meal Now" planArray={planArr} description="Introducing our delicious and nutritious food plan - the perfect way to fuel your body and delight your taste buds! Choose from the variety of plans( healthy, diet , vegan food etc.) and forget about grocery shopping and cooking. Our meal plans are carefully crafted by expert chefs and nutritionists, to make sure you enjoy delicious meals that also meet your dietary needs perfectly. Select the plan that is most suitable for you." />
      </div>
    </Layout>
  )
}
