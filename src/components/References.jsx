import React, { useState, useEffect } from "react";

const References = ({
  referenceFirstName,
  setReferenceFirstName,
  referenceSurname,
  setReferenceSurname,
  referenceEmail,
  setReferenceEmail,
  referencePhone,
  setReferencePhone,
  referenceOrganisation,
  setReferenceOrganisation,
  referenceJobTitle,
  setReferenceJobTitle,
  id,
  swipe,
  swipeBack,
  addReference,
  setShowPopup,
  showPopup,
  references,
  setReferences,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {showModal && (
        <div className="fixed kulim-park inset-0 bg-opacity-50 mt-80 z-10 flex  items-center justify-center w-[200px] mx-auto">
          <div className="bg-white p-12 rounded-lg">
            <div className="flex justify-end">
              <button
                className="bg-[#7DD959] text-white px-4 py-2 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
            </div>
            <h2 className="text-4xl font-bold"> Add Reference</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addReference();
                setShowModal(false);
              }}
            >
              <div className="flex flex-col gap-2">
                <label>First Name: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your first name"
                  value={referenceFirstName}
                  onChange={(e) => setReferenceFirstName(e.target.value)}
                  className="border border-gray-300 py-1 px-2 rounded w-72"
                />

                <label>Surname: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your surname"
                  value={referenceSurname}
                  onChange={(e) => setReferenceSurname(e.target.value)}
                  className="border border-gray-300 py-1 px-2 rounded w-72"
                />

                <label>Email:</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  value={referenceEmail}
                  onChange={(e) => setReferenceEmail(e.target.value)}
                  className="border border-gray-300 py-1 px-2 rounded w-72"
                />

                <label>Phone Number: </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter your phone number"
                  value={referencePhone}
                  onChange={(e) => setReferencePhone(e.target.value)}
                  className="border border-gray-300 py-1 px-2 rounded w-72"
                />

                <label>Organisation: </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter your organisation"
                  value={referenceOrganisation}
                  onChange={(e) => setReferenceOrganisation(e.target.value)}
                  className="border border-gray-300 py-1 px-2 rounded w-72"
                />

                <label>Job Title: </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter your job title"
                  value={referenceJobTitle}
                  onChange={(e) => setReferenceJobTitle(e.target.value)}
                  className="border border-gray-300 py-1 px-2 rounded w-72"
                />

                <button
                  type="submit"
                  className="bg-[#7DD959] text-white px-4 py-2 rounded-lg"
                >
                  Add Reference
                </button>

                <button
                  onClick={() => setShowModal(false)}
                  className="bg-[#7DD959] text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className={`${showModal ? "blur-sm" : "blur-none"} `}>
        <button onClick={() => setShowModal(true)}>Add Reference</button>
      </div>
    </div>
  );
};

export default References;
