import React, { useState } from "react";
import AdminMapDelete from "./AdminMapDelete";
import AdminGameDelete from "./AdminGameDelete";

// Small additional menu responsible for displaying all
// the categories which can be deleted.
const AdminMenuDelete = () => {
  const [showMapDelete, setShowMapDelete] = useState(false);
  const [showGameDelete, setShowGameDelete] = useState(false);

  const handleMapClick = () => {
    setShowMapDelete(true);
    setShowGameDelete(false);
  };

  const handleGameClick = () => {
    setShowGameDelete(true);
    setShowMapDelete(false);
  };

  return (
    <>
      <div>
        <button onClick={handleMapClick}>Maps</button>
        <button onClick={handleGameClick}>Games</button>
      </div>
      {showMapDelete && <AdminMapDelete />}
      {showGameDelete && <AdminGameDelete />}
    </>
  );
};

export default AdminMenuDelete;