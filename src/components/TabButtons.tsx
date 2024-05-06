import React, { useState } from 'react';

interface TabButtonsProps {
  numberOfApprovals: number;
}

const TabButtons: React.FC<TabButtonsProps> = ({ numberOfApprovals }) => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div>
      <div className="tab-buttons d-flex mt-3">
        <button
          className={`tab-button btn ${activeTab === 'tab1' ? 'btn-white' : 'btn-warning'}`}
          onClick={() => setActiveTab('tab1')}
        >
          Approvals {numberOfApprovals > 0 && <span style={{ fontSize: '12px', fontWeight: "700" }} className="text-white bg-danger px-2 py-1 rounded-circle">{numberOfApprovals}</span>}
        </button>
        <button
          className={`tab-button btn ${activeTab === 'tab2' ? 'btn-white' : 'btn-warning'}`}
          onClick={() => setActiveTab('tab2')}
        >
          Summary
        </button>
      </div>
    </div>
  );
}

export default TabButtons;
