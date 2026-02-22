export default function DisplaySign() {
  return (
    <div
      className="bg-white w-full  rounded-[35px] px-12 pt-10 pb-10"
      style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.25)" }}
    >
      {/* ── TITLE ─────────────────────────────────────────────────────── */}
      {/*
       * The navy title text in the SVG sits at ~y=34–57, centered around x=490.
       * It reads: أُضِف لافتة جديدة  (Add a new sign / display sign)
       */}
      <h2
        className="text-center text-2xl font-bold tracking-wide mb-6"
        style={{
          color: "#19156C",
          fontFamily: "'Cairo', 'Tajawal', sans-serif",
          letterSpacing: "0.04em",
        }}
      >
        عرض الشاشة
      </h2>

      {/* ── DROP ZONE ─────────────────────────────────────────────────── */}
      {/*
       * SVG rect: x=48.5 y=75.5 w=884 h=275 rx=36.5
       * fill=#E7E7E7  stroke=#898989  stroke-width=3  stroke-dasharray="15 15"
       */}
      <div
        className="relative flex flex-col items-center justify-center rounded-[36px] cursor-pointer select-none transition-all duration-200"
        style={{
          background: "#E7E7E7",
          border: "3px dashed #898989",
          backgroundClip: "padding-box",
          minHeight: "275px",
          // Dashes: 15px dash, 15px gap — matches SVG stroke-dasharray="15 15"
          backgroundImage: "none",
        }}
      ></div>
      <h3 className="text- text-8xl text-[#19156C]">ح</h3>
    </div>
  );
}
