import React from 'react';
import { Plus } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const AddAllButton = () => {
  return (
    <div className="add-all-btn">
      <button className="add-all" onClick={() => console.log("'Add All' button is clicked!")}>
        <div className="add-icon">
          <Plus />
        </div>
        Add All
      </button>
      <button className="chevron-down">
        <ChevronDown />
      </button>
    </div>
  );
};

export default AddAllButton;
