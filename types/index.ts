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

export interface CoinCardProps {
  name: string;
  symbol: string;
  imageUrl: string;
  price: number;
  change24h: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chartData: any;
}

export interface coinObject {
  name: string;
  symbol: string;
}

export interface coinObjectList {
  [key: string]: coinObject;
}

export interface PriceChartProps {
  prices: number[][];
  isPositive: boolean;
}

export interface PriceData {
  timestamp: string; // or Date, if you prefer to keep it as a Date object
  value: number;
}
