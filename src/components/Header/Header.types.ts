import type { Labels, Lang } from "../../types";

export interface NavTarget {
  sectionId: string;
  hash: string;
}

export interface HeaderProps {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onNavClick: (
    event: React.MouseEvent<HTMLAnchorElement>,
    target: NavTarget,
  ) => void;
  onLogoClick: () => void;
  currentLang: Lang;
  onChangeLang: (lang: Lang) => void;
  labels: Labels;
}

