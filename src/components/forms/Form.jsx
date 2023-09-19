import React from "react";

export default function Form({children, className, formIndex=0, ...rest}) {
  return (
    <div className={`flex column ${className}`} {...rest}>
      {React.Children.map(children, child => React.cloneElement(child, {formIndex}))}
    </div>
  )
}