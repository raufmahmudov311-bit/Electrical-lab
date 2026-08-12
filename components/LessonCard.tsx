"use client";

import { useState } from "react";
import {
  CheckCircle2,
  CircleHelp,
  LockKeyhole
} from "lucide-react";

import type { Lesson } from "../data/lessons";
import { useLanguage } from "./LanguageProvider";

export default function LessonCard({
  lesson,
  locked,
  mastered,
  onMaster
}: {
  lesson: Lesson;
  locked: boolean;
  mastered: boolean;
  onMaster: () => void;
}) {

  const { lang } =
    useLanguage();

  const [selected, setSelected] =
    useState<number | null>(null);

  const [checked, setChecked] =
    useState(false);

  const text = (
    value: {
      az: string;
      tr: string;
      en: string;
    }
  ) => value[lang];

  if (locked) {

    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 opacity-60">

        <div className="flex items-center gap-3">

          <LockKeyhole size={18} />

          <span className="font-semibold">
            {lesson.order}.{" "}
            {text(lesson.title)}
          </span>

        </div>

        <p className="mt-2 text-sm text-slate-500">
          Əvvəlki mövzunu tamamla.
        </p>

      </div>
    );
  }

  const correct =
    selected === lesson.answer;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-glow">

      <div className="flex items-start justify-between gap-4">

        <div>

          <p className="text-xs uppercase tracking-widest text-cyan-400">
            Lesson {lesson.order}
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            {text(lesson.title)}
          </h2>

        </div>

        {mastered && (
          <CheckCircle2 className="text-emerald-400" />
        )}

      </div>


      <p className="mt-4 text-slate-300">
        {text(lesson.description)}
      </p>


      <div className="mt-4 rounded-xl border border-cyan-900/50 bg-cyan-950/20 p-4">

        <p className="font-semibold text-cyan-200">
          Concept
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          {text(lesson.concept)}
        </p>

      </div>


      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4">

        <p className="font-semibold">
          🧪 Practice
        </p>

        <p className="mt-2 text-sm text-slate-300">
          {text(lesson.task)}
        </p>

      </div>


      <div className="mt-5">

        <div className="flex items-center gap-2">

          <CircleHelp
            size={18}
            className="text-cyan-400"
          />

          <span className="font-semibold">
            {text(lesson.question)}
          </span>

        </div>


        <div className="mt-3 grid gap-2">

          {lesson.options[lang].map(
            (option, i) => (

              <button
                key={option}
                onClick={() => {
                  setSelected(i);
                  setChecked(false);
                }}
                className={`rounded-xl border px-4 py-3 text-left transition ${
                  selected === i
                    ? "border-cyan-400 bg-cyan-950/30"
                    : "border-slate-700 bg-slate-950 hover:border-slate-500"
                }`}
              >
                {String.fromCharCode(
                  65 + i
                )}
                ) {option}
              </button>

            )
          )}

        </div>


        <button
          onClick={() =>
            setChecked(true)
          }
          disabled={
            selected === null
          }
          className="mt-3 rounded-xl bg-white px-5 py-2.5 font-semibold text-slate-950 disabled:opacity-30"
        >
          Yoxla
        </button>


        {checked && (

          <div
            className={`mt-3 rounded-xl p-4 text-sm ${
              correct
                ? "bg-emerald-950/40 text-emerald-200"
                : "bg-amber-950/40 text-amber-200"
            }`}
          >

            {correct ? (

              <>
                <p className="font-bold">
                  ✅ Düzdür — mövzu mənimsənildi.
                </p>

                <button
                  onClick={onMaster}
                  className="mt-3 rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950"
                >
                  Davam et
                </button>
              </>

            ) : (

              <>
                <p className="font-bold">
                  Hələ deyil.
                </p>

                <p className="mt-1">
                  Yuxarıdakı qısa izahı yenidən oxu və
                  başqa cavabı yoxla.
                </p>
              </>

            )}

          </div>

        )}

      </div>

    </div>
  );
}
