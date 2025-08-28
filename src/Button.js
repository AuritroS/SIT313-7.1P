import React from "react";
export default function Button({ text, children, ...rest }) {
  return <button {...rest}>{text ?? children}</button>;
}
