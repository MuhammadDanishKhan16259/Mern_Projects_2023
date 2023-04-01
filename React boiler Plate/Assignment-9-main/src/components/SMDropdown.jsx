import "../style/SMDropdown.scss";

export default function SMDropdown(props) {
  let { arr, fnName, name } = props;
  return (
    <select name={name} id="" onChange={fnName}>
      {arr && arr.length > 0
        ? arr.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })
        : null}
    </select>
  );
}
