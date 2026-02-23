import logo from "@/assets/logo.png";
import { useState } from "react";
import LoginButton from "../auth/LoginButton";
import ProfileWidget from "./ProfileWidget";
import { NavLink } from "react-router-dom";

// ─── Extracted exact values from Frame_218.svg ───────────────────────────────
// Canvas: 1280 × 120px
// White card: 0,0 → 1280,90  border-radius bottom: 10px
// Logo rect: x=100, w=92, h=100  (with drop-shadow dy=6 blur=5)
// Nav text colors: active=#19156C  inactive=#28353D
// Avatar circle: cx=1135, cy=50, r=45  (drop-shadow dy=6 blur=5)
// Bottom dark shadow band visible under the card
// ─────────────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [active, setActive] = useState("الرئيسية");
  const [profileWidgetIsOpen, setProfileWidgetIsOpen] = useState(false);

  const links = [
    { id: "instructions", label: "الارشادات" },
    { id: "letters", label: "الحروف" },
    { id: "", label: "الرئيسية" },
  ];
  const handleClick = () => {
    setProfileWidgetIsOpen((prev) => !prev);
  };

  return (
    <header
      className=" flex h-[100px] w-full overflow-visible justify-center fixed top-0 rounded-b-[10px] bg-white px-[50px] shadow-[0_10px_20px_rgba(0,0,0,0.25),0_4px_6px_rgba(0,0,0,0.10)] p-4"
      style={{ zIndex: 2 }}
    >
      {/* RIGHT: Logo */}
      <div className="max-w-[1200px] flex items-center justify-between w-full relative">
        <div className="flex   h-full shrink-0 items-center justify-center filter-[drop-shadow(0_10px_10px_rgba(0,0,0,0.25))]">
          <img
            src={logo}
            alt="EMA2A"
            className="h-full w-full object-contain"
          />
        </div>

        {/* CENTER: Navigation */}
        <nav className="flex flex-1 items-center justify-center gap-[60px]">
          {links.map(({ id, label }) => {
            const isActive = active === label;
            return (
              <NavLink
                to={`/${id}`}
                key={id}
                role="button"
                tabIndex={0}
                onClick={() => setActive(label)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActive(label);
                }}
                className={`
                  relative cursor-pointer select-none whitespace-nowrap tracking-[0.01em]
                  transition-colors duration-150 hover:text-[#19156C]
                  ${isActive ? "text-[22px] font-black text-[#19156C]" : "text-lg font-normal text-[#28353D]"}
                `}
              >
                {label}
              </NavLink>
            );
          })}
        </nav>

        {/* LEFT: Profile Avatar */}
        {/* <button
          onClick={handleClick}
          className="aspect-square  h-full shrink-0 overflow-hidden rounded-full filter-[drop-shadow(0_6px_10px_rgba(0,0,0,0.25))] cursor-pointer"
        >
          <img
            src={boyKidImg}
            alt="EMA2A"
            className="h-full w-full object-cover"
          />
        </button> */}
        <LoginButton />
        {profileWidgetIsOpen && (
          <ProfileWidget close={() => setProfileWidgetIsOpen(false)} />
        )}
      </div>
    </header>
  );
}
