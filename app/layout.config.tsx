import Logo from "@/components/nav-bar/Logo";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export const baseOptions: HomeLayoutProps = {
  nav: {
    title: <Logo />,
    // transparentMode: "top",
    // component: <div className="flex w-full bg-sky-500">hi</div>,
  },
  // githubUrl: "",
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
    // {
    //   text: "Contact us",
    //   url: "/contact-us",
    //   active: "nested-url",
    // },
  ],
};
