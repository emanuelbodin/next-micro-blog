import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="w-1/2 mx-auto my-16">{children}</div>;
}
