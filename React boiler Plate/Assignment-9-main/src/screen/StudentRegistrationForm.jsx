import { useState } from "react";
import SMInputField from "../components/SMInputField";
import SMButton from "../components/SMButton";
import SMDropdown from "../components/SMDropdown";
import { addItem } from "../config/FirebaseMethods";
import { useNavigate } from "react-router-dom";

export default function StudentRegistrationForm() {
  let [currentValue, setCurrentValue] = useState({
    firstName: "",
    lastName: "",
    course: "",
    section: "",
    contact: "",
    fatherName: "",
    fatherCNIC: "",
    fatherContact: "",
    emergencyContact: "",
    dateOfBirth: "",
    cnic: "",
  });
  let navigate = useNavigate();

  const currentV = (e) => {
    let { value, name } = e.target;
    setCurrentValue((val) => {
      return { ...val, [name]: value };
    });
  };

  const userRegistration = (e) => {
    e.preventDefault();
    let date = new Date();
    currentValue.age =
      Number(date.getFullYear()) - Number(currentValue.dateOfBirth.slice(0, 4));
    currentValue.registrationDate = date.toLocaleDateString();
    currentValue.registrationYear = date.getFullYear();
    currentValue.isFeeSubmited = false;
    currentValue.isApproved = false;
    currentValue.isActive = false;

    console.log(currentValue);
    addItem(currentValue, `Students`)
      .then((_) => {
        navigate("/course-form");
      })
      .catch((_) => console.log(_));
  };
  return (
    <section className="registrationForm">
      <form onSubmit={userRegistration}>
        <SMInputField
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          fnName={currentV}
          requirment={true}
        />
        <SMInputField
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          fnName={currentV}
        />
        <SMDropdown
          name="course"
          arr={[
            "Front-enf Developer",
            "Back-end Developer",
            "Full Stack developer",
            "Mobile app developer",
            "Software developer",
          ]}
          fnName={currentV}
          requirment={true}
        />
        <SMDropdown
          name="section"
          arr={["A", "B", "C", "D", "E"]}
          fnName={currentV}
          requirment={true}
        />
        <SMInputField
          type="number"
          name="contact"
          placeholder="enter your number"
          fnName={currentV}
          requirment={true}
        />
        <SMInputField
          type="text"
          name="cnic"
          placeholder="enter your cnic"
          fnName={currentV}
          requirment={true}
        />
        <SMInputField
          type="text"
          placeholder="Enter your father name"
          name="fatherName"
          fnName={currentV}
          requirment={true}
        />
        <SMInputField
          type="text"
          name="fatherCNIC"
          placeholder="Enter your father cnic"
          fnName={currentV}
        />
        <SMInputField
          type="number"
          name="fatherContact"
          placeholder="Enter your father contact no"
          fnName={currentV}
          wd="250px"
          requirment={true}
        />
        <SMInputField
          type="number"
          name="emergencyContact"
          placeholder="Enter your emergency contact no"
          fnName={currentV}
          wd="250px"
          requirment={true}
        />
        <SMInputField
          type="date"
          name="dateOfBirth"
          placeholder="slect your date of birth"
          fnName={currentV}
        />

        <SMButton text="Submit" classgiven="submitButton" />
      </form>
    </section>
  );
}
