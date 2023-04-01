import "../style/SMButton.scss";

export default function SMButton(props) {
  let { text, classgiven, fnName } = props;
  return (
    <button className={classgiven} onClick={fnName}>
      {text}
    </button>
  );
}
