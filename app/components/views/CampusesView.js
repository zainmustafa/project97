import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CampusItem from "../CampusItem";
import Modal from "../../commons/modal";

export default class CampusesView extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      name: "",
      location: "",
      description: "",
      imageURL: ""
    };
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
    const { name, location, description, imageUrl } = this.state;
    const new_campus = {
      name,
      location,
      description,
      imageUrl
    };
    addCampus(new_campus);
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { deleteCampus } = this.props;
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
          {this.props.allCampus.map((campus, i) => {
            return (
              <CampusItem
                deleteCampus={id => deleteCampus(id)}
                campus={campus}
                history={this.props.history}
              />
            );
          })}
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
