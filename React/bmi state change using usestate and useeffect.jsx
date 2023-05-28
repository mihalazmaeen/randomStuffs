import React, { useEffect, useState } from "react";
import SectionBannerDemo from "../../components/SectionBannerDemo/SectionBanner";
import GlobalButton from "../GlobalBtn/GlobalButton";
import SectionTitle from "../SectionTitleDemo/SectionTitle";
import StationButton from "../Buttons/StationButton/StationButton";
import SingleButton from "../Buttons/SingleButton/SingleButton";
import "./StationOneHeight.css";
import { render } from "react-dom";

const StationOneHeight = () => {

  const [height, setHeight]= useState("");
  const [weight, setweight]= useState("");
  const [bmi, setBMI]= useState("");
  const [bmiClass, setBMIClass]= useState("");
  const [muac, setMUAC]= useState("");
  const [muacClass, setMUACClass]= useState("");

  useEffect(()=>{
    let result=bmi <=0 ? '----' : bmi <= 18.5 ? 'Underweight (&lt;18.5)' : bmi >18.5 && bmi <=24.9 ? 'Normal(18.5-24.9)' : bmi >=25 && bmi <=29.9 ? 'Overweight(25-29.9)' : 'Obese'
    setBMIClass(result)
  },[height,weight])

  useEffect(()=>{
    let result=muac < 11 ? 'Severe Acute Malnutrition (SAM)' : muac >= 11 && muac <12.5 ? 'Moderate Acute Malnutrition (MAM)' : muac >= 12.5 && muac < 13.5 ? ' In Risk for Acute Malnutrition ' : 'Normal'
    setMUACClass(result)
  },[muac])
 
   
 
 
  

    
      return (
        <>
          
          <section className="heightwidth">
            <SectionBannerDemo title="Station 1 - height & weigth" patientName="patient name: Jiaur Rahman" />
    
            <div className="container">
              <form action="">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6">
                    <SectionTitle title="Vital Statistics"/>
                    {/* height */}
                    <div className="mb-3 shadowme position-relative">
                    <div className="iputComon">
                         cm
                      </div>
                      <label for="height" class="form-label text-capitalize">height</label>
                      <input
                        type="number"
                        value={height}

                        onChange={(event)=> {
                          setHeight(event.target.value)
                          console.log(event.target.value)
                          setBMI((weight/((event.target.value/100)*(event.target.value/100))).toFixed(2))
                          

                        }}
                          
                        name="height"
                        id="height"
                        className="form-control form-radious inputBox"
                        placeholder="Ex : 170"
                      />
                    </div>
    
                    {/* weight */}
                    <div className="mb-3 shadowme position-relative">
                    <div className="iputComon">
                         kg
                      </div>
                      <label for="weight" class="form-label text-capitalize">weight</label>
                      <input
                        type="number"
                        value={weight}
                        
                        onChange={(event)=> {
                          setweight(event.target.value)
                          console.log(weight,event.target.value)
                          setBMI((event.target.value/((height/100)*(height/100))).toFixed(2)) 
                        }}
                        name="weight"
                        id="weight"
                        className="form-control form-radious inputBox"
                        placeholder="Ex : 65"
                      />
                    </div>
    
                    {/* BMI */}
                    <div className="mb-3 shadowme">
                      <label for="bmi" class="form-label text-capitalize">BMI</label>
                      <input
                        type="text"
                        value={height ==0 || weight == 0 ? '0' : bmi}
                        onChange={(event)=> {
                          setBMI(event.target.value)
                        }}
                        className="form-control form-radious inputBox"
                        placeholder=""
                        readOnly
                      />
                    </div>
                  
                    
    
                    {/* BMI class */}
                    <div className="mb-3 shadowme">
                      <label for="bmi" class="form-label text-capitalize">BMI Class</label>
                      <input
                        type="text"
                        readOnly
                        value={bmiClass}
                       
                        
                        className="form-control form-radious inputBox"
                        placeholder=""
                      />
                    </div>

    
                    {/* muac */}
                    <div className="mb-3 shadowme position-relative">
                    <div className="iputComon">
                         cm
                      </div>
                      <label for="bmi" class="form-label text-capitalize">MUAC *</label>
                      <input
                        type="text"
                        name="muac"
                        id="muac"
                        onChange={(event)=> {
                          setMUAC(event.target.value)
                        }}
                        className="form-control form-radious inputBox"
                        placeholder="Ex : 170"
                      />
                    </div>
    
                    {/* muac class */} 
                    <div className="mb-3 shadowme">
                      <label for="bmi" class="form-label text-capitalize">MUAC class</label>
                      <div className="mb-3">
                      <input
                        type="text"
                        value={muacClass}
                        className="form-control form-radious inputBox"
                      
                        placeholder="Ex : 170"
                      />
                          {/* <option>Severe Acute Malnutrition (SAM)</option>
                          <option>Moderate Acute Malnutrition (MAM)</option>
                          <option>Normal</option> */}
                      
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="bmi" class="form-label text-capitalize">blood group</label>
                      <select
                        id="Select"
                        className="form-select inputBox"
                      >
                        <option>-- Select --</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB-</option>
                        <option>AB+</option>
                      </select>
                    </div>
                  
                    
                  </div>
                </div>
              </form>
            <div className="text-center mt-3 position-relative">
              <SingleButton btnOne="save" link="/user-table"/>
              <StationButton btnOne="Save & station 2" link="/blood-pressure" btnBg="button-bg"/>
            </div>
            
            </div>
            <GlobalButton />
          </section>
        </>
      );
    };
  


export default StationOneHeight;
