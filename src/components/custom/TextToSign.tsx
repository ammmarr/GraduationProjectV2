import { useMemo, useState } from "react";

import { textToSign } from "@/Api/APICalls";
import DisplayWordCard from "./DisplayCardLetters";

export default function TextToSign() {
  const [inputText, setInputText] = useState("");
  const [translated, setTranslated] = useState<string[]>([]);
  const [latestTranslated, setLatestTranslated] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasTranslation = translated.length > 0;

  const previewText = useMemo(() => {
    if (isLoading) return "جارٍ الترجمة...";
    if (error) return error;
    if (hasTranslation) return null;
    return "ادخل نصًا وانقر على ترجمة لعرض لغة الإشارة";
  }, [error, hasTranslation, isLoading]);

  const handleTranslate = async () => {
    const normalizedInput = inputText.trim();
    if (!normalizedInput) {
      setTranslated([]);
      setError("الرجاء إدخال نص قبل الترجمة");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await textToSign({ text: normalizedInput });
      const signs = response.data;

      if (!signs.length) {
        setTranslated([]);
        setError("لم يتم العثور على ترجمة لهذا النص");
        return;
      }
      setLatestTranslated(normalizedInput);
      setTranslated(signs);
    } catch (translateError) {
      setTranslated([]);
      setError("حدث خطأ أثناء الترجمة. حاول مرة أخرى.");
      console.error(translateError);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section
      dir="rtl"
      className="mx-auto flex w-full flex-row items-start justify-between gap-[13px] rounded-[35px] bg-white px-8 py-7 shadow-[0_10px_10px_rgba(0,0,0,0.25)]"
      style={{ direction: "ltr" }}
    >
      <div className="flex h-full w-full max-w-[475px] flex-col items-start gap-8 px-3 drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
        <div className="flex w-full flex-col items-start gap-4">
          <h2 className="w-full text-right text-2xl font-bold leading-[45px] text-black">
            ادخل النص العربي
          </h2>

          <textarea
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
            placeholder="ادخل النص العربي هنا"
            className="h-44 w-full resize-none rounded-[10px] bg-[#F3F3F5] px-6 py-5 text-right text-base leading-[30px] text-black placeholder:text-black/70 focus:outline-none focus:ring-2 focus:ring-[#19156C]"
          />
        </div>

        <div className="flex w-full flex-col items-end gap-6">
          <button
            type="button"
            onClick={handleTranslate}
            disabled={isLoading}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-[25px] bg-[#19156C] text-2xl font-normal leading-[45px] text-white shadow-[0_6px_10px_rgba(0,0,0,0.25)] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "جارٍ الترجمة..." : "ترجمة النص إلى إشارة"}
          </button>

          <button
            type="button"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-[25px] border-2 border-[#19156C] text-2xl font-normal leading-[45px] text-[#19156C] drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]"
          >
            التسجيل الصوتي
          </button>
        </div>
      </div>

      <div className="flex h-full w-full max-w-[411px] flex-col items-center gap-3 px-3 drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
        <h2 className="w-full text-right text-2xl font-bold leading-[45px] text-black">
          ترجمة لغة الإشارة
        </h2>
        {translated?.length ? (
          translated.map((word, ind) => (
            <DisplayWordCard
              wordImages={word}
              word={latestTranslated.split(" ")[ind]}
              key={ind}
            />
          ))
        ) : (
          <div className="flex min-h-[480px] w-full flex-col items-center justify-center gap-[27px] rounded-[35px] border-[3px] border-dashed border-[#898989] bg-[#E7E7E7] p-6 text-center">
            <p className="text-2xl leading-[45px] text-[#898989]"></p>
          </div>
        )}
      </div>
    </section>
  );
}
