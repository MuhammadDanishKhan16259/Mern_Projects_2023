import { useEffect, useState } from "react";
import SMTable from "../components/SMTable";
import { getItem } from "../config/FirebaseMethods";

export default function ListOfStudents() {
  let [arr, setArr] = useState([]);

  useEffect(() => {
    getItem("Students")
      .then((_) => setArr(Object.values(_)))
      .catch((_) => console.log(_));
  }, [0]);

  console.log(arr);

  return (
    <section className="listOfStudent">
      <div className="heading">
        <h1>List of student</h1>
      </div>
      {arr && arr.length > 0 ? (
        <SMTable
          heading={[
            "First Name",
            "Father Name",
            "Course",
            "Section",
            "Contact",
            "CNIC",
            "Father Contact",
            "Emergency Contact",
          ]}
          content={arr}
        />
      ) : (
        <p>Empty</p>
      )}
    </section>
  );
}
