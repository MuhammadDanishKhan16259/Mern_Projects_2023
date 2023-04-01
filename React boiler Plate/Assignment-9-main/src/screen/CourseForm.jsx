import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SMButton from "../components/SMButton";
import SMDropdown from "../components/SMDropdown";
import SMInputField from "../components/SMInputField";
import { addItem } from "../config/FirebaseMethods";

export default function CourseForm() {
  let [items, setItems] = useState({
    courseName: "",
    courseDuration: "",
    isFormOpen: "",
    noOfQuiz: "",
    feeInRupees: "",
    leadTrainerId: "",
    assitantTrainers: [],
  });
  let navigate = useNavigate();
//   let location = useLocation();
  //   console.log(location.state);
//   let uniqueIdentity = location.state.key;

  const currentV = (e) => {
    let { value, name, checked } = e.target;

    if (name == "assitantTrainers") {
      if (checked) {
        setItems((val) => {
          return {
            ...val,
            [name]: value,
            ["assitantTrainers"]: [...val.assitantTrainers, value],
          };
        });
      }
    } else {
      setItems((val) => {
        return {
          ...val,
          [name]: value,
        };
      });
    }
  };

  const formValue = (e) => {
    e.preventDefault();
    console.log(items);
    addItem(items, `courseForm`)
      .then((_) => {console.log(_); navigate("/dashboard")})
      .catch((_) => console.log(_));
  };

  return (
    <section className="course-form">
      <div className="heading">
        <h1>Create course form</h1>
      </div>

      <form onSubmit={formValue}>
        <label htmlFor="">
          Course Name:
          <SMInputField
            type="text"
            name="courseName"
            placeholder="Enter your course name"
            fnName={currentV}
            requirement={true}
          />
        </label>
        <label htmlFor="">
          Course Duration:{" "}
          <SMInputField
            type="number"
            name="courseDuration"
            placeholder="Enter course duration"
            fnName={currentV}
            requirement={true}
          />
        </label>
        <label>
          Is form open:{" "}
          <SMDropdown
            type="text"
            name="isFormOpen"
            arr={["Yes", "No"]}
            fnName={currentV}
          />
        </label>
        <label htmlFor="">
          No. of Quiz:
          <SMInputField
            type="number"
            name="noOfQuiz"
            placeholder="No Of Quizzes which is included in course"
            fnName={currentV}
            requirement={true}
          />
        </label>
        <label htmlFor="">
          Enter fee in rupees:
          <SMInputField
            type="number"
            name="feeInRupees"
            placeholder="enter fee in rupees"
            fnName={currentV}
          />
        </label>
        <label htmlFor="">
          Enter lead trainer id:
          <SMInputField
            type="text"
            name="leadTrainerId"
            placeholder="Enter lead trainer id"
            fnName={currentV}
          />
        </label>
        <div>
          <h4>Assistant trainers: </h4>
          <label>
            Mirza:
            <SMInputField
              type="checkBox"
              name="assitantTrainers"
              val="Mirza"
              fnName={currentV}
              wd="20px"
            />
          </label>
          <label>
            Mir:
            <SMInputField
              type="checkBox"
              name="assitantTrainers"
              val="Mir"
              fnName={currentV}
              wd="20px"
            />
          </label>
          <label htmlFor="">
            Mirzaban:
            <SMInputField
              type="checkBox"
              name="assitantTrainers"
              val="Mirzaban"
              fnName={currentV}
              wd="20px"
            />
          </label>
          <label>
            Sameer:
            <SMInputField
              type="checkBox"
              name="assitantTrainers"
              val="Sameer"
              fnName={currentV}
              wd="20px"
            />
          </label>
        </div>
        <SMButton text="Create" />
      </form>
    </section>
  );
}
