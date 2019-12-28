import React from 'react';

function DemoForm() {
  function formOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={formOnSubmit}>
      <div className="form-group">
        <label htmlFor="txtName">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Type in your name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="txtName">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Type in your email"
          required
        />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="txtName">Age</label>
            <input
              type="number"
              className="form-control"
              placeholder="Type in your age"
              required
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label htmlFor="txtName">Salary</label>
            <input
              type="number"
              className="form-control"
              placeholder="Type in your salary"
              required
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label htmlFor="txtName">Birth Date</label>
            <input
              type="date"
              className="form-control"
              placeholder="Type in your Birth date"
              required
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <input type="submit" className="btn btn-info" value="Submit" />
      </div>
    </form>
  );
}

export default DemoForm;
