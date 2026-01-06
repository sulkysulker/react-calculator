import type { ReactNode } from "react";

interface AlertProp {
  children: ReactNode; //passing a child instead of a variable like text:string, so we can use it like we r passing a child  node
}

const Alert = (prop: AlertProp) => {
  return <div className="alert alert-primary">{prop.children}</div>;
};

export default Alert;
