// RowLabel.tsx

import React from 'react';

type RowLabelProps = {
  data: {
    title?: string;
    // Add other properties based on your actual data structure
  };
  index: number;
};

const RowLabel: React.FC<RowLabelProps> = ({ data, index }) => {
  return (
    <div>
      {data?.title || `Slide ${String(index).padStart(2, '0')}`}
      {/* Add additional rendering based on your data structure */}
    </div>
  );
};

export default RowLabel;
