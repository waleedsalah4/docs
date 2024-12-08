import { DocsLayout } from "fumadocs-ui/layout";
import { HomeLayout } from "fumadocs-ui/home-layout";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";
import { source } from "@/app/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // <HomeLayout {...baseOptions}>
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
    // </HomeLayout>
  );
}

// export default function Layout({
//   children,
// }: {
//   children: ReactNode;
// }): React.ReactElement {
//   return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
// }
