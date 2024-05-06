import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const FilterComponent: React.FC = () => {
  return (
    <div className="container mt-3" style={{ marginLeft:0}}>
      <div className="row">
        <div className="col">
          <select className="form-select select-small">
          <option >ID</option>
            <option>A-Z</option>
            <option>Z-A</option>
            <option>Latest</option>
            <option>Oldest</option>
          </select>
        </div>
        <div className="col">
          <select className="form-select">
          <option>Station</option>
           <option>A-Z</option>
            <option>Z-A</option>
            <option>Latest</option>
            <option>Oldest</option>
          </select>
        </div>
        <div className="col">
          <select className="form-select">
          <option>Plan</option>
          <option>A-Z</option>
            <option>Z-A</option>
            <option>Latest</option>
            <option>Oldest</option>
          </select>
        </div>
        <div className="col">
          <select className="form-select">
          <option>Module</option>
          <option>A-Z</option>
            <option>Z-A</option>
            <option>Latest</option>
            <option>Oldest</option>
          </select>
        </div>
        <div className="col">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search..." style={{ height: "37px", width: "45px" }} />
            <button className="btn btn-warning" type="button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <div className="col" style={{ marginRight:0}}>
          <select className="form-select">
          <h6 className="dropdown-header">Dropdown header</h6>
          <option>Sort By</option>
          <option>A-Z</option>
            <option>Z-A</option>
            <option>Latest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
