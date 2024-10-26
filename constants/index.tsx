import { FaHome as HomeIcon } from "react-icons/fa";
import { FaExchangeAlt as ExchangeIcon } from "react-icons/fa";
import { BsCurrencyExchange as PricesIcon } from "react-icons/bs";
import { FaWallet as WalletIcon } from "react-icons/fa";
import { FaBitcoin as BuyIcon } from "react-icons/fa";
import { CgProfile as Profile } from "react-icons/cg";
import { FaSignOutAlt as SignOutIcon } from "react-icons/fa";
import {
  dropdownLinksType,
  FooterContentType,
  headerItemsType,
  heroSlidesType,
  heroTextType,
  sidebarLinksType,
} from "@/types";
import { signOut } from "next-auth/react";

export const sidebarLinks: sidebarLinksType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    iconComponent: <HomeIcon />,
  },
  {
    id: 2,
    title: "Exchange",
    link: "/exchange",
    iconComponent: <ExchangeIcon />,
  },
  {
    id: 3,
    title: "Prices",
    link: "/prices",
    iconComponent: <PricesIcon />,
  },
  {
    id: 4,
    title: "Wallets",
    link: "/wallets",
    iconComponent: <WalletIcon />,
  },
  {
    id: 5,
    title: "Buy Crypto",
    link: "/buy-crypto",
    iconComponent: <BuyIcon />,
  },
];

export const headerItems: headerItemsType[] = [
  {
    id: 1,
    title: "Trade",
    link: "/exchange",
  },
  {
    id: 2,
    title: "Markets",
    link: "/prices",
  },
  {
    id: 3,
    title: "Buy Crypto",
    link: "/buy-crypto",
  },
];

export const dropdownLinks: dropdownLinksType[] = [
  {
    id: 1,
    title: "Account",
    description: "Important account details",
    iconComponent: <Profile />,
    link: "/account",
  },
  {
    id: 2,
    title: "Sign out",
    description: "Log out of your account",
    iconComponent: <SignOutIcon />,
    onClick: () => {
      signOut({ redirect: false });
    },
    link: "/",
  },
];

export const heroText: heroTextType = {
  header: [`Buy & sell`, "crypto in minutes"],
  description:
    "Trade Bitcoin, Ethereum USDT, and the top altcoins on the new era of crypto asset exchange.",
};

export const heroSlides: heroSlidesType[] = [
  {
    id: 1,
    imageUrl: "/assets/images/affiliate.png",
    alt: "Affiliate Program",
  },
  {
    id: 2,
    imageUrl: "/assets/images/vip.png",
    alt: "VIP Program",
  },
  {
    id: 3,
    imageUrl: "/assets/images/referral.png",
    alt: "Referral Program",
  },
  {
    id: 4,
    imageUrl: "/assets/images/app.png",
    alt: "Mobile App",
  },
  {
    id: 5,
    imageUrl: "/assets/images/trading.png",
    alt: "Trade Crypto",
  },
];

export const footerContent: FooterContentType[] = [
  {
    id: 1,
    title: "ABOUT",
    content: [
      { element: "About Us", link: "/about-us" },
      { element: "Fee Rate", link: "/fee-rate" },
      { element: "Careers", link: "/careers" },
      { element: "Blog", link: "/blog" },
    ],
  },
  {
    id: 2,
    title: "TRADE",
    content: [
      { element: "BTC/USDT", link: "/exchange?pair=BTCUSDT" },
      { element: "ETH/USDT", link: "/exchange?pair=ETHUSDT" },
      { element: "BNB/USDT", link: "/exchange?pair=BNBUSDT" },
      { element: "TRX/USDT", link: "/exchange?pair=TRXUSDT" },
    ],
  },
  {
    id: 3,
    title: "SERVICES",
    content: [
      { element: "Buy Crypto", link: "/buy-crypto" },
      { element: "Referral", link: "/referral" },
      { element: "Affiliate", link: "/affiliate" },
      { element: "VIP", link: "/vip" },
    ],
  },
  {
    id: 4,
    title: "LEGAL",
    content: [
      { element: "Contact Us", link: "/contact" },
      { element: "Privacy Policy", link: "/privacy-policy" },
      { element: "User Agreement", link: "/user-agreement" },
      { element: "Terms of Service", link: "/terms-of-service" },
    ],
  },
];

export const coinsIds = [
  "bitcoin",
  "binancecoin",
  "ethereum",
  "solana",
  "dogecoin",
  "pepe",
  "catizen",
  "shiba-inu",
  "fetch-ai",
  "book-of-meme",
  "radicle",
  "adventure-gold",
  "scroll",
  "golem",
  "raydium",
  "near",
  "audius",
  "ripple",
  "cardano",
  "dia-data",
  "the-open-network",
  "avalanche-2"
];

export const coinsIdsString = coinsIds.join(",");