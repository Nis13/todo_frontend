export type Path = {
  name: string;
  link: string;
  isVisible: boolean;
};

export type NavbarViewProps = {
  pages: Path[];
  handleLogout: () => void;
  isAuthenticated: boolean;
};
