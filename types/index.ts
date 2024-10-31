export interface normalCard {
  id: number;
  title: string;
  description: string;
}

export interface titleCard {
  id: number;
  title: string;
}

export interface AuthProviderProps {
  children?: React.ReactNode;
}

export interface sidebarLinksType extends titleCard {
  link: string;
  iconComponent: JSX.Element;
}

export interface headerItemsType extends titleCard {
  link: string;
}

export interface LogoProps {
  isCollapsed?: boolean;
}

export interface SidebarProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

export interface HeaderProps {
  toggleMobileMenu: () => void;
  isCollapsed: boolean;
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

export interface FooterContentType extends titleCard {
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

export interface TotalBalanceProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coinData: { [key: string]: any };
  balance: { [key: string]: number };
}

export interface BuyCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

export interface dropdownLinksType extends normalCard {
  iconComponent: JSX.Element;
  onClick?: () => void;
  link: string;
}
export interface feeTabsType extends titleCard {
  content?: normalCard[];
}

export interface referralCardType extends normalCard {
  imageUrl: string;
}
