import React from "react";

const Sidebar = (props) => {
  return (
    <div
      className={`sidebar w-[200px] fixed z-50 md:hidden top-0 bg-red-600 ${
        props.open ? "open" : null
      }`}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur,
      reiciendis iusto dolores molestias sunt!
    </div>
  );
};

export default Sidebar;
