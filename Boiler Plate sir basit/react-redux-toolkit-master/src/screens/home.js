import { useSelector } from "react-redux";
export default function Home() {
  const dataFromRedux = useSelector((a) => a.Login);
  console.log(dataFromRedux);

  return (
    <>
      <h1>Home</h1>
    </>
  );
}
