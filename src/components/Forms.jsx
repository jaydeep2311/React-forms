import React from "react";

function Forms() {
  var initial = {
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    Married: "",
  };
  const [profile, setprofile] = React.useState(initial);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getData();
  }, []);
  function handleSubmit() {
    fetch("http://localhost:3001/profiles", {
      method: "POST",
      body: JSON.stringify(profile),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    }).then((res) => getData());
  }
  function getData() {
    fetch("http://localhost:3001/profiles")
      .then((res) => res.json())
      .then((res) => setData(res));
    console.log(data);
  }
  function handlechange(e) {
    let { name, value } = e.target;
    if (e.target.value !== "checkbox") {
      var newprofile = { ...profile, [name]: value };
      setprofile(newprofile);
    } else {
      if (e.target.checked) {
        var newprofile = { ...profile, [name]: "yes" };
        setprofile(newprofile);
      } else {
        var newprofile = { ...profile, [name]: "yes" };
        setprofile(newprofile);
      }
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handlechange}
      />
      <input type="text" name="age" placeholder="Age" onChange={handlechange} />
      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={handlechange}
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        onChange={handlechange}
      />
      <input
        type="text"
        name="salary"
        placeholder="Salary"
        onChange={handlechange}
      />
      <div>
        <label htmlFor="">Married</label>
        <input
          type="checkbox"
          name="Married"
          placeholder="Marital"
          value="checkbox"
          onChange={handlechange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Save
      </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Adress</th>
              <th scope="col">Dept</th>
              <th scope="col">Married</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el) => {
              return (
                <tr>
                  <td>{el.name}</td>
                  <td>{el.age}</td>
                  <td>{el.address}</td>
                  <td>{el.department}</td>
                  <td>{el.Married}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Forms;
