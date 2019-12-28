import React, { Fragment } from 'react';
import HeaderSection from '../../layout/HeaderSection';
import { NotificationManager } from 'react-notifications';
import Http from '../../infra/Http';

const buttonClick = () => {
  Http.get('/api/todos').then(response => {
    
  });
  NotificationManager.success('yay!!!', 'Title', 5000, () => {
    NotificationManager.warning('Brincando??');
  });
};

export default () => {
  return (
    <Fragment>
      <HeaderSection title="Home" subtitle="Home View" />
      <div className="row">
        <div className="col-md-12">
          <div className="box">
            <HeaderSection title="Box" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              reiciendis quasi nostrum dolore facilis cumque veritatis vero
              repellat distinctio voluptates, pariatur dicta laudantium magnam
              debitis similique sunt consequatur labore quibusdam!
            </p>
            <button className="btn btn-info" onClick={buttonClick}>
              Click here
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
