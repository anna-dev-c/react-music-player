import React from 'react';
import { Plus } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const AddAllButton = () => {
  return (
    <div className="add-all-btn" role="group" aria-label="Add All Operations">
      <button className="add-all" onClick={() => console.log("'Add All' button is clicked!")} aria-label="Add All Items">
        <div className="add-icon">
          <Plus />
        </div>
        Add All
      </button>
      <button className="chevron-down" aria-label="More Options">
        <ChevronDown />
      </button>
    </div>
  );
};

export default AddAllButton;
