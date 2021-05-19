import React from 'react';
import { Row, Col } from 'reactstrap';
import Button from '../common/Button';
import arrow from '../../assets/images/arrow.svg';
import whitelogo from 'assets/images/whitelogo.svg';

const DashboardBody = () => {
  function joinClickHandler() {
    console.log("redirecting")
    window.location.href = "https://discord.gg/AFb4fKvR4W";
  }

  return (
    <div className="dashboardbody">
      <Row>
        <Col lg={5} md={6}>
          <div>
            <label>Your License Key</label>
            <div className="dashboardbody_licensekey">TK-7PA97-1AS12-6JS89</div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className="mt-4">
            <div className="mr-5">
              <label>Email Address</label>
              <h6>lkdesignsolutions@gmail.com</h6>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={5} md={6}>
          <div className="d-flex mt-4">
            <div className="mr-5">
              <label>Key Type</label>
              <h6>Monthly</h6>
            </div>
            <div>
              <label>Subscription Start Date</label>
              <h6>February 10th, 2021</h6>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className=" mt-4">
            <label>Next Renewal </label>
            <h6>March 10th, 2021</h6>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={5} md={6}>
          <div className="dashboardbody_card">
            <img
              src={whitelogo}
              alt="whitelogo"
              className="dashboardbody_card_logo"
            />
            <h4>John J. Doe</h4>
            <h3>···· ···· ···· 1234</h3>
            <div className="dashboardbody_card_paymentButton">
              <Button
                label="Update Payment Method"
                className="title_gradientBorderBtn"
                border="gradient"
                icon={arrow}
                iconClassName="title_gradientBorderBtn-icon ml-3"
              />
            </div>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div>
              <button className="dashboardbody_button dashboardbody_button-join">
                Join Discord
              </button>
            <button className="dashboardbody_button dashboardbody_button-cancel">
              Cancel Subscription
            </button>
            <button className="dashboardbody_button dashboardbody_button-logout">
              Log Out
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardBody;