
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let CDate = `${day}/${month}/${year}`;

  export default CDate;