import { sideNavigation } from "./SideNavigation.css";

export default function SideNavigation() {
  return (
    <nav class={sideNavigation({})}>
      <ul>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/todo">Todo</a>
        </li>
        <li>
          <a href="/setting">Dashboard</a>
        </li>
      </ul>
    </nav>
  );
}
