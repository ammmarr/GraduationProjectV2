import React from "react";

const CameraIcon = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect
      x="3"
      y="6"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const RefreshIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M4 12a8 8 0 0 1 13.66-5.66L20 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 4v4h-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 12a8 8 0 0 1-13.66 5.66L4 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 20v-4h4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EditIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M4 20h4l10-10-4-4L4 16v4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="m12 6 4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SpeakerIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M4 10v4h4l5 4V6L8 10H4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M17 9a4 4 0 0 1 0 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M19.5 6.5a7.5 7.5 0 0 1 0 11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function SignToText() {
  return (
    <section className="flex w-full h-fit p-8 px-16 gap-[13px] justify-between rounded-[35px] bg-white  shadow-[0_10px_10px_rgba(0,0,0,0.25)]">
      <div
        className="flex h-[535px] w-[500px] flex-col gap-[7px] px-[12px] drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]"
        dir="rtl"
      >
        <div className="flex h-[368px] w-full flex-col items-end gap-[10px]">
          <h2 className="h-[45px] w-full text-right text-2xl font-bold leading-[45px] text-black">
            ادخل الاشارة
          </h2>
          <div className="flex h-[307px] w-full items-center justify-center rounded-[20px] bg-[#101828] px-[25px] py-[21px]">
            <div className="flex h-[204px] w-[281px] flex-col items-center">
              <CameraIcon className="h-[114px] w-[114px] text-white" />
              <p className="h-[90px] w-full text-center text-2xl font-semibold leading-[45px] text-white">
                انقر علي بداء التسجيل لتشغيل الكاميرا
              </p>
            </div>
          </div>
        </div>

        <div className="flex h-[161px] w-full flex-col items-end gap-4">
          <button className="flex h-14 w-full items-center justify-center gap-2 rounded-[25px] bg-[#19156C] shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
            <span className="text-2xl font-normal leading-[45px] text-white">
              بداية التسجيل
            </span>
            <CameraIcon className="h-8 w-8 text-white" />
          </button>

          <div className="flex h-[89px] w-full items-center rounded-[20px] bg-[#F1EAFA] px-[10px]">
            <div className="flex h-[89px] w-[390px] flex-col px-[10px] text-right text-[#19156C]">
              <span className="text-right text-base font-bold leading-[30px]">
                الملاحظات
              </span>
              <span className="text-right text-[20px] font-normal leading-[37px]">
                لا يمكن تحديد الاشارة “حاول مجددا”
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex h-[535px] w-[432px] flex-col items-center gap-6 rounded-[20px] px-[12px] drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]"
        dir="rtl"
      >
        <h2 className="h-[45px] w-full text-right text-2xl font-bold leading-[45px] text-black">
          ترجمة لغة الاشارة
        </h2>

        <div className="flex h-[115px] w-[408px] items-center rounded-[20px] bg-[#F1EAFA] px-[10px]">
          <div className="flex h-[89px] w-[390px] flex-col px-[10px] text-[#19156C]">
            <span className="text-right text-base font-bold leading-[30px]">
              الحرف المترجم
            </span>
            <span className="text-center text-[32px] font-semibold leading-[60px]">
              ا
            </span>
          </div>
        </div>

        <div className="flex h-[115px] w-[408px] items-center rounded-[20px] bg-[#F1EAFA] px-[10px]">
          <div className="flex h-[89px] w-[390px] flex-col px-[10px] text-[#19156C]">
            <span className="text-right text-base font-bold leading-[30px]">
              الجملة المكونه
            </span>
            <span className="text-center text-2xl font-semibold leading-[45px]">
              السلام عليكم
            </span>
          </div>
        </div>

        <div className="flex h-14 w-[408px] items-center justify-between gap-[8px]">
          <button className="flex h-14 w-[200px] items-center justify-center gap-2 rounded-[25px] border-2 border-[#19156C] text-[#19156C] drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
            <span className="text-base font-normal leading-[30px]">
              جملة جديدة
            </span>
            <RefreshIcon />
          </button>

          <button className="flex h-14 w-[200px] items-center justify-center gap-2 rounded-[25px] border-2 border-[#19156C] text-[#19156C] drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
            <span className="text-base font-normal leading-[30px]">
              تصحيح الجملة
            </span>
            <EditIcon />
          </button>
        </div>

        <button className="flex h-14 w-[408px] items-center justify-center gap-2 rounded-[25px] bg-[#19156C] shadow-[0_6px_10px_rgba(0,0,0,0.25)] text-white">
          <span className="text-[20px] font-normal leading-[37px]">
            نطق النص
          </span>
          <SpeakerIcon />
        </button>
      </div>
    </section>
  );
}
