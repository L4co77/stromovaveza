import type { LayoutProps } from "./Layout.types";

export default function Layout({ header, children, footer }: LayoutProps) {
  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
