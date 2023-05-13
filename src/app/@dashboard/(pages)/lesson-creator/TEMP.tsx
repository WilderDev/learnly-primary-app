'use client';

import { useState } from 'react';

export default function TEMP() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Button */}
      <button onClick={() => setShowModal(true)}>Generate</button>

      {/* Modal */}
    </>
  );
}
