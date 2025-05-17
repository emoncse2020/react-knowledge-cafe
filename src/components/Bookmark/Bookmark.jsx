import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-200 p-4 m-4 rounded">
      <h2 className="text-3xl mb-4">{title}</h2>
    </div>
  );
};

export default Bookmark;
