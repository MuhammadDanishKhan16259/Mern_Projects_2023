export default function SMTable(props) {
  let { heading, content } = props;
  console.log(content);
  return (
    <table border="2px">
      <thead>
        <tr>
          {heading && heading.length > 0
            ? heading.map((value, index) => {
                return <th key={index}>{value}</th>;
              })
            : null}
        </tr>
      </thead>
      <tbody>
        {content && content.length > 0
          ? content.map((val, index) => {
              console.log(val);
              return (
                <tr key={index}>
                  <td>{val.firstName}</td>
                  <td>{val.fatherName}</td>
                  <td>{val.course}</td>
                  <td>{val.section}</td>
                  <td>{val.contact}</td>
                  <td>{val.cnic}</td>
                  <td>{val.fatherContact}</td>
                  <td>{val.emergencyContact}</td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
}
