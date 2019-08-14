import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HeaderSection } from "../layout";

export default () => {
  let { list } = useSelector(state => state.employee);
  let dispatch = useDispatch();

  function addEmployee(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: {
        id: 2,
        name: 'Jane Doe'
      }
    });
  }

  return (
    <div className="box">
      <HeaderSection title="Employee List"></HeaderSection>
      <form onSubmit={addEmployee}>
        <button className="btn btn-primary" type="submit">Add Employee</button>
      </form>
      <ul className="mt-2">
        {list.map((employee, _i) => (
          <li key={_i}>
            {employee.id} - {employee.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
