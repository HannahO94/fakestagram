import React from "react";
import { Link } from "react-router-dom";

export default function LayoutSimple({ children }) {
  return (
    <div>
      <div>
        <Link className="btn btn-primary btn-block" to="/">
          Home
        </Link>
        <Link className="btn btn-primary btn-block" to="/image-list">
          Go to Image List
        </Link>
      </div>
      {children}
    </div>
  );
}
