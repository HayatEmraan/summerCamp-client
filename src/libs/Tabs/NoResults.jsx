import React from 'react';

const NoResults = () => {
    return (
      <div>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold">
              No Courses Available In This Category
            </div>
            <div className="font-light text-neutral-500 mt-2">
              Please Select Other Categories
            </div>
          </div>
        </div>
      </div>
    );
};

export default NoResults;
