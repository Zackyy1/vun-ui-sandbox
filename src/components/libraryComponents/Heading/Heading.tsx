import React from "react";
import "./Heading.scss";

export interface HeadingProps {
  children: React.ReactNode[] | React.ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({ children, tag }: HeadingProps) => {
  const Tag = tag || 'h1';
  return (
    <div className="vheading">
      <Tag>{children}</Tag>
    </div>
  );
};

export default Heading;
