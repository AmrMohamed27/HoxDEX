import { Session } from "next-auth";

export interface AuthProviderProps {
  children?: React.ReactNode;
}

export interface sidebarLinksType {
  id: number;
  title: string;
  link: string;
  iconComponent: JSX.Element;
}

export interface headerItemsType {
  id: number;
  title: string;
  link: string;
}

export interface LogoProps {
  isCollapsed?: boolean;
}

export interface SidebarProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export interface HeaderProps {
  toggleMobileMenu: () => void;
}

export interface dropdownLinksType {
  id: number;
  title: string;
  description: string;
  iconComponent: JSX.Element;
  onClick?: () => void;
  link: string;
}

export interface heroTextType {
  header: string[];
  description: string;
}

export interface heroSlidesType {
  id: number;
  imageUrl: string;
  alt: string;
}

export interface FooterContentType {
  id: number;
  title: string;
  content: { element: string; link: string }[];
}

export interface CTAProps {
  children: React.ReactNode;
}
