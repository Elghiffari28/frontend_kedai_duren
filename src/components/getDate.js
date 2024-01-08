import React from "react";

function GetDate() {
  const currentDate = new Date();

  return (
    <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
      <span>© Copyright {currentDate.getFullYear()}: </span>
      <a
        className="font-semibold text-neutral-600 dark:text-neutral-400"
        href="/"
      >
        Elba Ghiffari Fitrasina
      </a>
    </div>
  );
}

export default GetDate;
