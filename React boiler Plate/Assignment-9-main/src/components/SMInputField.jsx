import "../style/inputField.scss";

export default function SMInputField(props) {
  let { type, name, placeholder, fnName, wd, requirment, asd, val } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={fnName}
      style={{width: wd, asd}}
      required={requirment}
      value={val}
    />
  );
}
