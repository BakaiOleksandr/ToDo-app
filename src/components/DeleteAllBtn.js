import React from 'react';

export default function DeleteAllBtn({onClick}) {
  return (
    <button className="delete-all" onClick={onClick}>
      Delete all
    </button>
  );
}
