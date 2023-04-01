import { useEffect, useState } from "react";
import { getItem } from "../../config/FirebaseMethods";

export default function CourseList() {
  let [data, setData] = useState([]);
  useEffect(() => {
    getItem("courseForm")
      .then((_) => setData(Object.values(_)))
      .catch((_) => console.log(_));
  }, [0]);

  return (
    <section className="course-list">
      <div className="heading">
        <h1>Course list</h1>
      </div>

      <table border="2px">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course duration</th>
            <th>fee in rupees</th>
            <th>lead trainer</th>
            <th>no of quiz</th>
            <th>Assitant Trainers</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.courseName}</td>
                <td>{value.courseDuration}</td>
                <td>{value.feeInRupees}</td>
                <td>{value.leadTrainerId}</td>
                <td>{value.noOfQuiz}</td>
                <td>
                  {value.assitantTrainers && value.assitantTrainers.length > 0
                    ? value.assitantTrainers.map((value, index) => {
                        return <td key={index}>{value}</td>;
                      })
                    : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
