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
  AffiliateCard,
  LegalType,
  titleCard,
  vipTableCellsType,
  contentCard,
  buyCardsType,
} from "@/types";
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
  {
    id: 4,
    title: "Referral",
    link: "/referral",
  },
  {
    id: 5,
    title: "Affiliate",
    link: "/affiliate",
  },
  {
    id: 6,
    title: "VIP",
    link: "/vip",
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
    dialog: true,
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
      { element: "AML&CFT", link: "/aml" },
      { element: "Privacy Policy", link: "/policy" },
      { element: "User Agreement", link: "/agreement" },
      { element: "Terms of Service", link: "/terms" },
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

export const affiliateCards: normalCard[] = [
  { id: 1, title: "10%", description: "Permanent commission on trading fees." },
  {
    id: 2,
    title: "10",
    description: "Countries supported by our affiliate program.",
  },
  {
    id: 3,
    title: "∞",
    description: "Earning potential from HoxDEX referrals!",
  },
];

export const benefitsCheckmarkArray: normalCard[] = [
  {
    id: 1,
    title: "Monetize your influence",
    description:
      "Get paid to share your passion for crypto. Share HoxDEX.com with your community to start earning.",
  },
  {
    id: 2,
    title: "Enjoy guaranteed payouts",
    description:
      "Earn $20 when your referrals complete $250 in trades within 30 days of completing account verification.",
  },
  {
    id: 3,
    title: "Maximize your earnings",
    description:
      "Active users keep our platform healthy. We offer additional earning opportunities to top Affiliates who bring in more active traders.",
  },
];

export const benefits: AffiliateCard = {
  id: 1,
  title: "Benefits For You",
  description: "Referring to HoxDEX is a win-win situation.",
  checkmarkItems: benefitsCheckmarkArray,
};

export const affiliateSteps: normalCard[] = [
  {
    id: 1,
    title: "Sign Up",
    description:
      "First, create a HoxDEX account. Try us out for yourself, enjoy our instant transfers and platform, and receive your affiliate link.",
  },
  {
    id: 2,
    title: "Share your link",
    description:
      "Share your link among your friends, on your website or on your social media pages. When they start trading, you start earning.",
  },
  {
    id: 3,
    title: "Receive Commission",
    description:
      "A permanent commission of 10% of fees from accounts you have referred will be deposited to your HoxDEX account. Easy.",
  },
];

export const vipSteps: normalCard[] = [
  { id: 1, title: "VIP Exclusive Funding Rate", description: "" },
  { id: 2, title: "Exclusive Account Manager", description: "" },
  {
    id: 3,
    title: "Exclusive Green Channel to Deposit and Withdraw",
    description: "",
  },
];

export const vipTableCells: vipTableCellsType[] = [
  {
    id: 5,
    requirements: "Assets (USDT) : >3,000,000",
    makerFee: "0%",
    takerFee: "0%",
    limit: "8,500,000 USDT",
  },
  {
    id: 4,
    requirements: "Assets (USDT) : >2,000,000",
    makerFee: "0%",
    takerFee: "0%",
    limit: "8,500,000 USDT",
  },
  {
    id: 3,
    requirements: "Assets (USDT) : >1,000,000",
    makerFee: "0%",
    takerFee: "0%",
    limit: "5,000,000 USDT",
  },
  {
    id: 2,
    requirements: "Assets (USDT) : >500,000",
    makerFee: "0%",
    takerFee: "0%",
    limit: "5,000,000 USDT",
  },
  {
    id: 1,
    requirements: "Assets (USDT) : >50,000",
    makerFee: "0%",
    takerFee: "0%",
    limit: "5,000,000 USDT",
  },
];

export const vipRequirements: contentCard[] = [
  {
    id: 1,
    content:
      "30-Day Trading Volume: the volume accumulated from all trades master accounts from 0:00 (UTC+0) till the next day.",
  },
  {
    id: 2,
    content:
      "Assets: all account assets including spot, USDC , USDT-M, and Earn assets in master accounts will be recorded at 0:00 till the next day (UTC+0), and will be converted based on coin-USDT conversion rate in that recording. Spot account contains available assets, locked-up assets and frozen assets; futures account contain frozen assets, excluding unrealized profit and losses.",
  },
  {
    id: 3,
    content:
      "24-Hour Withdrawal Limit: HoxDEX will set a user's daily withdrawal limit based on their VIP tier. All coins will be calculated in BTC and the final amount after conversion should be less than the withdrawal limit at corresponding VIP tier. The withdrawal limit for users who fail to complete KYC verification is 5 BTC.",
  },
  {
    id: 4,
    content:
      "If users' spot trading volume and assets meet different VIP tiers respectively, the users may enjoy VIP privileges of the highest one. If users meet any trading type's VIP tier requirement, all other trading type will be upgraded to that respective VIP tier. For example: if the user meet spot VIP 1 requirements, he will be upgraded to futures VIP 1 automatically.",
  },
  {
    id: 5,
    content:
      "The VIP level will be automatically updated the next day at 1:00 (UTC+0). If the customer's trading behavior triggers risk control system, the platform will have the right to adjust the VIP level.",
  },
  {
    id: 6,
    content:
      "The VIP system and requirements are only applicable to KYC verified users.",
  },
];

export const vipCheckmarkArray: contentCard[] = [
  {
    id: 1,
    content:
      "Users who are VIP in other exchanges can be offered a VIP tier. Just head over to the VIP page and submit a screenshot of your last 30-days trading volume in the link to connect directly with account manager.",
  },
  {
    id: 2,
    content:
      "An account manager will contact users within 24 hours who meet application requirements",
  },
  { id: 3, content: "Email vip@HoxDEX.com to get your questions answered" },
];

export const vipPlaceholder: string =
  "Please provide your reasons for applying to be a HoxDEX VIP. Images are supported for relevant document submission.";

export const imageUploadMessage: string =
  "Image formats of only PNG, JPG, and JPEG will be supported. Maximum image size is 5MB";

export const growthCheckmarkArray: normalCard[] = [
  {
    id: 1,
    title: "Your referrals enjoy a trusted trading environment",
    description: "",
  },
  {
    id: 2,
    title: "You generate a passive and permanent income",
    description: "",
  },
  {
    id: 3,
    title: "The digital assets ecosystem grows",
    description: "",
  },
];

export const growth: AffiliateCard = {
  id: 2,
  title: "Drive the Growth of Digital Assets",
  description: "Referring to HoxDEX is a win-win situation.",
  checkmarkItems: growthCheckmarkArray,
};

export const affiliateFooting: normalCard[] = [
  {
    id: 1,
    title: "Promotional Assets",
    description:
      "Use a wide range of promotional assets offered by HoxDEX, such as trading widgets, chart widgets, screenshots, banners, logos and content. Create a lasting impression on your visitors by using the assets provided by HoxDEX. Easy to implement, free to use.",
  },
  {
    id: 2,
    title: "Outstanding Reputation",
    description:
      "Confidently share your affiliate link with your friends, thanks to the good reputation of HoxDEX. Our transparent pricing, clear communication, easy to use platform, low fees, security measures and reliable bank relations allow you to share your affiliate link with full confidence.",
  },
  {
    id: 3,
    title: "Dedicated Support",
    description:
      "Access to committed support agents underpin the relationship between HoxDEX and its affiliates. This attitude results in fruitful cooperations in the form of special marketing actions, conversion optimization feedback, customized promotional content and rapid troubleshooting.",
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
  "method-g.png",
];

export const buyCards: buyCardsType[] = [
  {
    id: 1,
    title: "Transak",
    imageUrl: "/assets/images/met-buy-a.svg",
    link: "https://global.transak.com/",
    description:
      "Transak supports credit & debit cards, Apple Pay, MobiKwik, and bank transfers (depending on location) in 100+ countries.",
  },
  {
    id: 2,
    title: "Wyre",
    imageUrl: "/assets/images/met-buy-b.svg",
    link: "https://pay.sendwyre.com/",
    description:
      "Easy onboarding for purchases up to $ 1000. Fast interactive high limit purchase verification. Supports Debit/Credit Card, Apple Pay, Bank Transfers. Available in 100+ countries.",
  },
  {
    id: 3,
    title: "MoonPay",
    imageUrl: "/assets/images/met-buy-c.svg",
    link: "http://buy.moonpay.com",
    description:
      "MoonPay supports popular payment methods, including Visa, Mastercard, Apple / Google / Samsung Pay, and bank transfers in 145+ countries.",
  },
];

export const legalLinks: LegalType[] = [
  {
    id: 1,
    title: "Terms of Use",
    url: "/terms",
  },
  {
    id: 2,
    title: "Privacy Policy",
    url: "/policy",
  },
  {
    id: 3,
    title: "User Agreement",
    url: "/agreement",
  },
  {
    id: 4,
    title: "AML&CFT Policy",
    url: "/aml",
  },
];

export const validCardNumber = "4111111111111111";
export const invalidCardNumber = "1234567812345678";

export const paymentMethodObjects = [
  {
    id: 1,
    method: "MasterCard",
    imageUrl: "/assets/images/method-a.svg",
  },
  {
    id: 2,
    method: "VISA",
    imageUrl: "/assets/images/method-b.svg",
  },
  {
    id: 3,
    method: "Paypal",
    imageUrl: "/assets/images/method-c.svg",
  },
  {
    id: 4,
    method: "SEPA",
    imageUrl: "/assets/images/method-d.svg",
  },
  {
    id: 5,
    method: "ApplePay",
    imageUrl: "/assets/images/method-e.svg",
  },
  {
    id: 6,
    method: "GooglePay",
    imageUrl: "/assets/images/method-f.svg",
  },
  {
    id: 7,
    method: "InstaPay",
    imageUrl: "/assets/images/method-g.png",
  },
];
