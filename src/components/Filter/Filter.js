import React, { Component } from "react";
import { BiFilterAlt } from "react-icons/bi";

class Filter extends Component {
  handleInput = (e) => {
    const { value } = e.target;
    const { onFilter } = this.props;
    onFilter(value);
  };

  render() {
    const { handleInput } = this;
    return (
      <>
        <label>
          <BiFilterAlt />
          <input type="text" name="filter" onChange={handleInput}></input>
        </label>
      </>
    );
  }
}
export default Filter;
