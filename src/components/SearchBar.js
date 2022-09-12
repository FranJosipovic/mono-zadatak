import React, { useState } from "react";
import { observer } from "mobx-react";

export default observer(function SearchBar({ carModelStore }) {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") return handleSubmit(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    carModelStore.searchQuery = query;
  };

  return (
    <form className="search-sort" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        placeholder="search vehicle by name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
      <div
        type="submit"
        style={{ width: "30px", height: "30px" }}
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </form>
  );
});
