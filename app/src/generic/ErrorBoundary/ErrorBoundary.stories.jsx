/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ErrorBoundary from "./ErrorBoundary";

export default {
  title: "ErrorBoundary",
  component: ErrorBoundary,
};

const WithoutError = () => <p>Sin Error</p>;
const WithError = () => <p>Error</p>;

export const ErrorBoundaryWithError = () => (
  <ErrorBoundary>
    <WithError></WithError>
  </ErrorBoundary>
);
export const ErrorBoundaryWithoutError = () => (
  <ErrorBoundary>
    <WithoutError></WithoutError>
  </ErrorBoundary>
);
