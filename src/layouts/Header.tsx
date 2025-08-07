"use client";
import dynamic from "next/dynamic";



export default function Header() {
  const MenuOverlay = dynamic(() => import("@/components/MenuOverlay"), { ssr: false });

  return (
    <header className="bg-white m-2.5 sticky top-2 rounded-2xl shadow-lg z-50">
        <div className="px-4 sm:px-6 lg:px-8 relative ">
          <MenuOverlay/>
        </div>
    </header>
  );
}
