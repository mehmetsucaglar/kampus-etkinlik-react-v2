import type { PageName } from "../../types/page";

interface NavigationProps {
  current: PageName;
  onNavigate: (page: PageName) => void;
}

export default function Navigation({ current, onNavigate }: NavigationProps) {
  return (
    <nav>
      <ul>
        <li>
          <a href="#" className={current === "home" ? "active" : ""} onClick={(e) => { e.preventDefault(); onNavigate("home"); }}>
            Ana Sayfa
          </a>
        </li>
        <li>
          <a href="#" className={current === "events" ? "active" : ""} onClick={(e) => { e.preventDefault(); onNavigate("events"); }}>
            Etkinlikler
          </a>
        </li>
        <li>
          <a href="#" className={current === "add" ? "active" : ""} onClick={(e) => { e.preventDefault(); onNavigate("add"); }}>
            Ekle
          </a>
        </li>
      </ul>
    </nav>
  );
}