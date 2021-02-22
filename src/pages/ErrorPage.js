import React from "react";

function ErrorPage() {
  return (
    <div style={{ padding: "10%" }}>
      <h1 style={{ textAlign: "center", color: "green" }}>
        Oops.! It feels lonely here..!
      </h1>
      <h3 style={{ textAlign: "center", color: "grey" }}>
        This route is not defined
      </h3>
    </div>
  );
}

export default ErrorPage;
