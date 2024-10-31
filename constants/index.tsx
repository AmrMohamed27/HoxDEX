import { FaHome as HomeIcon } from "react-icons/fa";
import { FaExchangeAlt as ExchangeIcon } from "react-icons/fa";
import { BsCurrencyExchange as PricesIcon } from "react-icons/bs";
import { FaWallet as WalletIcon } from "react-icons/fa";
import { FaBitcoin as BuyIcon } from "react-icons/fa";
import { CgProfile as Profile } from "react-icons/cg";
import { FaSignOutAlt as SignOutIcon } from "react-icons/fa";
import {
  normalCard,
  coinObjectList,
  dropdownLinksType,
  FooterContentType,
  headerItemsType,
  heroSlidesType,
  heroTextType,
  sidebarLinksType,
  feeTabsType,
  referralCardType,
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
      { element: "Fee Rate", link: "/fees" },
      {
        element: "Careers",
        link: "https://docs.google.com/forms/d/1MWVL6ztsvlxUmt9k3mnKZ6VA9unHeh8Ux4PKx6LXK0I/viewform?edit_requested=true",
      },
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
export const aboutText: heroTextType = {
  header: ["Crypto for", "the Culture"],
  description:
    "HoxDEX is not just a cryptocurrency exchange. It's a movement of people who believe that access to cryptocurrency products should be easy.",
};

export const aboutCards: normalCard[] = [
  {
    id: 1,
    title: "40k+",
    description: "Daily customers",
  },
  {
    id: 2,
    title: "8",
    description: "Super products",
  },
  {
    id: 3,
    title: "30+",
    description: "Team members",
  },
  {
    id: 4,
    title: "1",
    description: "Ecosystem Token",
  },
];

export const aboutTextBlocks: normalCard[] = [
  {
    id: 1,
    title: "Our Vision",
    description:
      "HoxDEX exchange, established in 2022 in Singapore, is the cryptocurrency trading platform equipped with the high-tech blockchain technology. We believe this technology will prosper our lives and increase the value of assets. Our aim is to provide more customers with a better online cryptocurrency trading environment, and to create the wise investment environment.",
  },
  {
    id: 2,
    title: "Our Mission",
    description:
      "HoxDEX strives to protect our customers' assets and provide the best online trading service in the changing cryptocurrency market under our values - safety, trust, and creation. HoxDEX offers customer-oriented services. We also provide convenience and an optimal trading environment for cryptocurrency online trading services as a leader of the cryptocurrency market where our customers are satisfied with the services.",
  },
];

export const firstTab: normalCard[] = [
  {
    id: 1,
    title: "Maker:",
    description:
      "When you place an order that goes on the order book partially or fully such as a limit order, any subsequent trades coming from that order will be known as “makers”. These orders add volume to the order book, helping to “make the market”, and are therefore termed the “maker” for any subsequent trades.",
  },
  {
    id: 2,
    title: "Taker:",
    description:
      "When you place an order that trades immediately, either by filling partially or fully, before going on the order book, those trades will be “taker” trades. Trades from market orders are always Takers, as Market orders can never go on the order book. These trades are “taking” volume off of the order book, and are therefore called “takers”.",
  },
];

export const feeTabs: feeTabsType[] = [
  {
    id: 1,
    title: "Spot Trading Fee",
    content: firstTab,
  },
  {
    id: 2,
    title: "Deposit & Withdrawal Fees",
  },
];

export const referralCards: referralCardType[] = [
  {
    id: 1,
    title: "Get Link",
    imageUrl: "/assets/images/ref-a.jpg",
    description:
      "Sign up or log in to get your crypto referral link with the commission rebate rate.",
  },
  {
    id: 2,
    title: "Refer your friends",
    imageUrl: "/assets/images/ref-b.jpg",
    description:
      "Share the referral link with your friends or on social media.",
  },
  {
    id: 3,
    title: "Start earning crypto!",
    imageUrl: "/assets/images/ref-c.jpg",
    description:
      "Every time your friends successfully make a trade, you'll receive up to 40% commission!",
  },
];

export const coinsIds: string[] = [
  "bitcoin",
  "binancecoin",
  "ethereum",
  "solana",
  "dogecoin",
  "pepe",
  "catizen",
  "shiba-inu",
];

export const coinsIdsString = coinsIds.join(",");

export const coinObjects: coinObjectList = {
  bitcoin: {
    name: "Bitcoin",
    symbol: "BTC",
  },
  binancecoin: {
    name: "Binance Coin",
    symbol: "BNB",
  },
  ethereum: {
    name: "Ethereum",
    symbol: "ETH",
  },
  solana: {
    name: "Solana",
    symbol: "SOL",
  },
  dogecoin: {
    name: "Dogecoin",
    symbol: "DOGE",
  },
  pepe: {
    name: "Pepe",
    symbol: "PEPE",
  },
  catizen: {
    name: "Catizen",
    symbol: "CATZ",
  },
  "shiba-inu": {
    name: "Shiba Inu",
    symbol: "SHIB",
  },
};

export const paymentCards = [
  "method-a.svg",
  "method-b.svg",
  "method-c.svg",
  "method-d.svg",
  "method-e.svg",
  "method-f.svg",
];

export const buyCards = [
  {
    id: 1,
    title: "Transak",
    imageUrl: "/assets/images/met-buy-a.svg",
    description:
      "Transak supports credit & debit cards, Apple Pay, MobiKwik, and bank transfers (depending on location) in 100+ countries.",
  },
  {
    id: 2,
    title: "Wyre",
    imageUrl: "/assets/images/met-buy-b.svg",
    description:
      "Easy onboarding for purchases up to $ 1000. Fast interactive high limit purchase verification. Supports Debit/Credit Card, Apple Pay, Bank Transfers. Available in 100+ countries.",
  },
  {
    id: 3,
    title: "MoonPay",
    imageUrl: "/assets/images/met-buy-c.svg",
    description:
      "MoonPay supports popular payment methods, including Visa, Mastercard, Apple / Google / Samsung Pay, and bank transfers in 145+ countries.",
  },
];
