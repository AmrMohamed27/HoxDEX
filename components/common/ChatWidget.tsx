"use client";

import { useState } from "react";
import { MessageSquareDot } from "lucide-react";
import { useSession } from "next-auth/react";

export default function ChatWidget() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  // Only render for authenticated users
  if (status !== "authenticated" || !session) return null;

  return (
    <div className="right-6 bottom-6 z-[1000] fixed">
      <div className="flex flex-col items-end gap-2">
        {open && (
          <div className="bg-white dark:bg-slate-800 shadow-lg p-4 border border-slate-200 dark:border-slate-700 rounded-lg max-w-xs">
            <div className="text-slate-800 dark:text-slate-100 text-sm">
              The coins were sold successfully. The withdrawal process is
              pending due to multiple transactions.
            </div>
          </div>
        )}

        <button
          aria-label="Open chat"
          onClick={() => setOpen((v) => !v)}
          className="flex justify-center items-center bg-theme-blue dark:bg-sky-500 shadow-lg rounded-full w-14 h-14 text-white hover:scale-105 transition-transform"
        >
          <MessageSquareDot className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
