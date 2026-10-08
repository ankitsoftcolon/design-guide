import { createContext, useContext, type ReactNode } from "react";
const Context = createContext<string | undefined>(undefined);
export function DemoFilter({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <Context.Provider value={title}>
      <div className="story-gallery">
        <div className="showcase-grid">{children}</div>
      </div>
    </Context.Provider>
  );
}
export function useDemoFilter() {
  return useContext(Context);
}
