import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CampusItem from "../CampusItem";
import Modal from "../../commons/modal";

export default class CampusesView extends Component {
  constructor() {
    super();
    this.state = { isModalOpen: false, campus_name: "" };
  }
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  changeHandler = e => {
    let target = e.target;
    let name = target.name;
    this.setState({ [name]: target.value });
  };
  componentDidMount() {
    const { getAllCampus } = this.props;
    getAllCampus();
  }

  submitModal = () => {
    const { addCampus } = this.props;
    const { campus_name } = this.state;
    addCampus(campus_name);
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <div className="campuses">
        <div className="campuses-header">
          <h1>All Campuses</h1>
          <Button
            variant="contained"
            color="primary"
            className="campuses-header-btn"
            onClick={() => this.setState({ isModalOpen: true })}
          >
            Add Campus
          </Button>
        </div>
        <div className="campuses-content">
          <CampusItem {...this.props} />
          <CampusItem {...this.props} />
          <CampusItem {...this.props} />
          <CampusItem {...this.props} />
          {/* <p>There are no campuses registered in the database.</p> */}
        </div>
        <Modal
          isModalOpen={isModalOpen}
          title={"Campus Name"}
          type={"campus"}
          closeModal={() => this.closeModal()}
          changeHandler={e => this.changeHandler(e)}
          submitModal={() => this.submitModal()}
        />
      </div>
    );
  }
}
