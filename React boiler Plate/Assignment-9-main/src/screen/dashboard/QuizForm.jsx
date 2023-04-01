import { useEffect, useState } from "react";
import { getItem } from "../../config/FirebaseMethods";

export default function QuizForm() {
  let [data, setData] = useState([]);
  let [globalNum, setGlobalNum] = useState(0);

  useEffect(() => {
    getItem("QuizForm")
      .then((_) => {
        console.log(data);
        setData(Object.values(_));
      })
      .catch((_) => console.log(_));
  }, [0]);

  console.log(data);
  return (
    <section className="quizForm">
      <div className="heading">
        <h1>Quiz Form</h1>
      </div>
    </section>
  );
}

// {/* {data && data.length > 0 ? (
//   <>
//     <h1>{data[0].question}</h1>
//     {/* <ul>
//       {data[0].options.map((value, index) => {
//         return <li key={index}>{value.option[index]}</li>;
//       })} */}
//       {/* <li>{data[0].options.option1]}</li>
//     </ul>
//   </> */}
//   ) : null} */}
