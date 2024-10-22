import { FaHome as HomeIcon } from "react-icons/fa";
import { FaExchangeAlt as ExchangeIcon } from "react-icons/fa";
import { BsCurrencyExchange as PricesIcon } from "react-icons/bs";
import { FaWallet as WalletIcon } from "react-icons/fa";
import { FaBitcoin as BuyIcon } from "react-icons/fa";
import { CgProfile as Profile } from "react-icons/cg";
import { FaSignOutAlt as SignOutIcon } from "react-icons/fa";
import { dropdownLinksType, headerItemsType, sidebarLinksType } from "@/types";
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
