// import { useEffect, useState } from "react";
// import { uploadImage, getItem } from "../config/FirebaseMethods";

export default function Home() {
  // let [file, setFile] = useState(null);
  // let [image, setImage] = useState([]);

  // const types = ["image/png", "image/jpeg", "image/jpg"];

  // const currentFile = (e) => {
  //   let selected = e.target.files[0];
  //   console.log(selected);
  //   if (selected && types.includes(selected.type)) {
  //     setFile(selected);
  //   } else {
  //     setFile(null);
  //   }
  // };
  // if (file) {
  //   uploadImage(file);
  //   getItem("images")
  //     .then((_) => {
  //       setImage(Object.values(_));
  //     })
  //     .catch((_) => console.log(_));
  // }
  // useEffect(() => {
  // }, []);
  return (
    <section className="home">
      <h1>Home</h1>

      {/* <input type="file" onChange={currentFile} />

      {image && image.length > 0
        ? image.map((value, index) => {
            console.log(value);
            return (
              <img
                src={value.image}
                alt="image not found"
                width="200px"
                key={index}
              />
            );
          })
        : null} */}
    </section>
  );
}
