import type { MouseEvent } from "react";

// ─── Icons (inline SVG) ─────────────────────────────────────────────────────
function ClearIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
    </svg>
  );
}

// ─── Keyboard layout (Arabic, right-to-left visual order) ───────────────────
const ROW_1 = ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "J"];
const ROW_2 = ["ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف"];
const ROW_3 = ["ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "ة", "ئ"];

export type KeyboardProps = {
  onKeyPress?: (key: string) => void;
  onClear?: () => void;
  onAutoPlay?: () => void;
  onPause?: () => void;
};

export default function Keyboard({
  onKeyPress,
  onClear,
  onAutoPlay,
  onPause,
}: KeyboardProps) {
  const handleKeyClick = (e: MouseEvent<HTMLButtonElement>) => {
    const key = e.currentTarget.dataset.key ?? "";
    onKeyPress?.(key);
  };

  return (
    <div className="w-full  rounded-3xl bg-white p-8 shadow-xl">
      {/* Title */}
      <h2 className="mb-8 text-center font-bold text-indigo-700 text-2xl">
        لوحة المفاتيح
      </h2>

      {/* Character keys */}
      <div className="flex flex-col gap-4">
        {/* Row 1 – light blue/indigo */}
        <div
          className="flex justify-center gap-2 w-full"
          style={{ direction: "rtl" }}
        >
          {ROW_1.map((char) => (
            <button
              key={char}
              type="button"
              data-key={char}
              onClick={handleKeyClick}
              className="flex h-16 min-w-16 items-center justify-center rounded-lg bg-[#DBE9FD] font-bold text-[#38578C] shadow-md transition-transform hover:scale-105 active:scale-95"
            >
              {char}
            </button>
          ))}
        </div>

        {/* Row 2 – light green */}
        <div
          className="flex justify-center gap-2 "
          style={{ direction: "rtl" }}
        >
          {ROW_2.map((char) => (
            <button
              key={char}
              type="button"
              data-key={char}
              onClick={handleKeyClick}
              className="flex h-16 min-w-16 items-center justify-center rounded-lg bg-emerald-100 font-bold text-emerald-800 shadow-md transition-transform hover:scale-105 active:scale-95"
            >
              {char}
            </button>
          ))}
        </div>

        {/* Row 3 – light purple/pink */}
        <div
          className="flex justify-center gap-2 "
          style={{ direction: "rtl" }}
        >
          {ROW_3.map((char) => (
            <button
              key={char}
              type="button"
              data-key={char}
              onClick={handleKeyClick}
              className="flex h-16 min-w-16 items-center justify-center rounded-lg bg-fuchsia-100 font-bold text-fuchsia-800 shadow-md transition-transform hover:scale-105 active:scale-95"
            >
              {char}
            </button>
          ))}
        </div>

        {/* Action buttons (RTL: Clear right, Auto Play center, Pause left) */}
        <div className="mt-6 flex justify-center gap-4" dir="rtl">
          <button
            type="button"
            onClick={onClear}
            className="flex items-center gap-2 rounded-full border-2 border-indigo-700 bg-white px-6 py-3 font-bold text-indigo-700 shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded">
              <ClearIcon className="h-5 w-5" />
            </span>
            مسح
          </button>
          <button
            type="button"
            onClick={onAutoPlay}
            className="flex items-center gap-2 rounded-full bg-indigo-100 px-6 py-3 font-bold text-indigo-700 shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded">
              <PlayIcon className="h-5 w-5" />
            </span>
            تشغيل تلقائي
          </button>
          <button
            type="button"
            onClick={onPause}
            className="flex items-center gap-2 rounded-full bg-fuchsia-100 px-6 py-3 font-bold text-fuchsia-800 shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded">
              <PauseIcon className="h-5 w-5" />
            </span>
            ايقاف مؤقت
          </button>
        </div>
      </div>
    </div>
  );
}
