import React from "react";

const BankDetails = ({
  setBank_name,
  bank_name,
  setAccount_number,
  account_number,
  setSort_code,
  sort_code,
  swipe,
  swipeBack,
  id,
  addProfile,
}) => {
  return (
    <div className="md:mx-40 my-20 shadow-md p-10">
      <div className="flex flex-col gap-2">
        <label>Bank name:</label>
        <input
          type="text"
          name="bank_name"
          value={bank_name}
          placeholder="Enter your bank name"
          onChange={(e) => setBank_name(e.target.value)}
          className="border border-gray-300 py-1 px-2 rounded"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Account number:</label>
        <input
          type="text"
          name="account_number"
          value={account_number}
          placeholder="Enter your account number"
          onChange={(e) => setAccount_number(e.target.value)}
          className="border border-gray-300 py-1 px-2 rounded"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Sort code:</label>
        <input
          type="text"
          name="sort_code"
          value={sort_code}
          placeholder="Enter your sort code"
          onChange={(e) => setSort_code(e.target.value)}
          className="border border-gray-300 py-1 px-2 rounded"
        />
      </div>
      <div className="flex justify-center items-center mt-5">
        <button
          className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
          onClick={swipeBack}
        >
          Back
        </button>
        <button
          className="bg-blue-500 text-white py-1 px-2 rounded"
          onClick={(e) => {
            addProfile(e);
            swipe();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BankDetails;
