import { Outlet } from "solid-start";
import SideNavigation from "@src/components/navigation/SideNavigation";

export default function Layout() {
  return (
    <>
      <SideNavigation />
      <Outlet />
    </>
  );
}
