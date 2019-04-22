import React from "react";

import Image from "./../../assets/zipper/image-01.jpg";
import { Header } from "./../0_global/Global";

export default () => (
  <Header
    height="70vh"
    theme={{
      bg: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${Image})`
    }}
  >
    <h1 style={{ padingBottom: "0.5em" }}>ZIPPER</h1>
    <h2>best destination to explore...</h2>
  </Header>
);
