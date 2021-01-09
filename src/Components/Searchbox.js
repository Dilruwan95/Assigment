import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function Searchbox(props) {
  return (
    <div>
        <label>Search by type :</label>
        <select defaultValue={props.searchtype} onChange={props.handlInput}>
          <option value="">ALL</option>
          <option value="t-shirt">T-shirt</option>
          <option value="dress shirts">Dress shirts</option>
        </select>
      </div>
  );
}

export default Searchbox;
