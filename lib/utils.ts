import { coinsIdsString } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPricesUrl(): string {
  const baseUrl = process.env.COINGEKKO_BASE_URL;
  const auth = process.env.COINGEKKO_AUTH;
  const ids = coinsIdsString;
  return `${baseUrl}/simple/price?${auth}&ids=${ids}&vs_currencies=usd`;
}

export function getCoinDataUrl(id: string): string {
  const baseUrl = process.env.COINGEKKO_BASE_URL;
  const auth = process.env.COINGEKKO_AUTH;
  return `${baseUrl}/coins/${id}?${auth}&localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
}

export function getChartDataUrl(id: string): string {
  const baseUrl = process.env.COINGEKKO_BASE_URL;
  const auth = process.env.COINGEKKO_AUTH;
  return `${baseUrl}/coins/${id}/market_chart?${auth}&vs_currency=usd&days=365`;
}
