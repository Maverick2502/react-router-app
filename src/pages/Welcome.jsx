import React from "react";
import { Route } from "react-router-dom";

function Welcome() {
  return (
    <section>
      <h1 style={{ textAlign: "center" }}>The Welcome Page.</h1>
      <Route path="/welcome/new-user">
        <h2 style={{ textAlign: "center" }}>Bienvenidas, nueva usiaria</h2>
      </Route>
    </section>
  );
}

export default Welcome;
