import React from "react";
import FilterLink from "../container/filterLink";

const Footer = ({ store }) => {
  return (
    <div>
      Show: <FilterLink store={store} filter="SHOW_ALL" text="All" />{" "}
      <FilterLink store={store} filter="SHOW_COMPLETED" text="Completed" />{" "}
      <FilterLink store={store} filter="SHOW_ACTIVE" text="Active" />
    </div>
  );
};

export default Footer;
