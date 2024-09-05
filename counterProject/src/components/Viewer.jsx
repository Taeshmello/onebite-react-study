import { useState } from "react";
import styled from "styled-components";

export const Viewer = ({ count }) => {
  return (
    <div>
      <div>현재 카운트:</div>
      <h1>{count}</h1>
    </div>
  );
};