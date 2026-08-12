"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  FlaskConical,
  Gauge,
  Wrench,
  CheckCircle2
} from "lucide-react";

import { lessons } from "../data/lessons";
import CircuitBuilder from "../components/CircuitBuilder";
import LessonCard from "../components/LessonCard";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../components/LanguageProvider";

const ui = {
  az: {
    title: "Virtual Electrical Lab",
    subtitle:
      "Elektrik-elektronikanı öyrən, dövrəni özün qur, səhvlərini tap və növbəti mövzuya keç.",
    learn: "Dərslər",
    lab: "Laboratoriya",
    detective: "Elektrik Detektivi",
    progress: "İrəliləyiş",
    next: "Növbəti mövzu",
    mastered: "Mənimsənilib",
    labTitle: "Virtual Elektrik Laboratoriyası",
    labText:
      "Komponentləri əlavə et, dövrəni qur və nəticəni müşahidə et.",
    detectiveText:
      "Xarab dövrəni araşdırmaq üçün bu rejim növbəti mərhələdə genişləndiriləcək."
  },

  tr: {
    title: "Virtual Elektrik Laboratuvarı",
    subtitle:
      "Elektriği öğren, devreyi kendin kur, hatalarını bul ve yeni konuya geç.",
    learn: "Dersler",
    lab: "Laboratuvar",
    detective: "Elektrik Dedektifi",
    progress: "İlerleme",
    next: "Sonraki konu",
    mastered: "Tamamlandı",
    labTitle: "Sanal Elektrik Laboratuvarı",
    labText:
      "Bileşenleri ekle, devreyi kur ve sonucu gözlemle.",
    detectiveText:
      "Arızalı devre modu sonraki sürümde genişletilecek."
  },

  en: {
    title: "Virtual Electrical Lab",
    subtitle:
      "Learn electricity, build circuits yourself, find mistakes, and move to the next new concept.",
    learn: "Lessons",
    lab: "Laboratory",
    detective: "Electrical Detective",
    progress: "Progress",
    next: "Next topic",
    mastered: "Mastered",
    labTitle: "Virtual Electrical Laboratory",
    labText:
      "Add components, build a circuit and observe the result.",
    detectiveText:
      "The faulty-circuit mode will be expanded in the next version."
  }
};

export default function Home() {
  const { lang } = useLanguage();
  const t = ui[lang];

  const [mastered, setMastered] = useState<string[]>([]);
  const [tab, setTab] = useState<
    "learn" | "lab" | "detective"
  >("learn");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vel-mastered");

      if (raw) {
        setMastered(JSON.parse(raw));
      }
    } catch {}
  }, []);

  function markMaster(id: string) {
    setMastered((prev) => {
      const next = prev.includes(id)
        ? prev
        : [...prev, id];

      localStorage.setItem(
        "vel-mastered",
        JSON.stringify(next)
      );

      return next;
    });
  }

  const percent = Math.round(
    (mastered.length / lessons.length) * 100
  );

  const nextLesson = useMemo(
    () => lessons.find((lesson) => !mastered.includes(lesson.id)),
    [mastered]
  );

  return (
    <main className="min-h-screen">

      <header className="sticky top-0 z-20 border-b border-slate-800 bg-[#07111f]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-400">
              <FlaskConical size={22} />
            </div>

            <div>
              <p className="font-bold">VEL</p>

              <p className="text-xs text-slate-500">
                Virtual Electrical Lab
              </p>
            </div>

          </div>

          <LanguageSwitcher />

        </div>
      </header>


      <section className="mx-auto max-w-7xl px-4 pb-8 pt-10">

        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 md:p-10">

          <p className="text-sm font-semibold uppercase tracking-[.25em] text-cyan-400">
            Electrical Engineering • Interactive Learning
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            {t.title}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
            {t.subtitle}
          </p>


          <div className="mt-8 grid gap-3 sm:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">

              <Gauge className="text-cyan-400" />

              <p className="mt-3 text-xs uppercase tracking-widest text-slate-500">
                {t.progress}
              </p>

              <p className="mt-1 text-3xl font-bold">
                {percent}%
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">

              <CheckCircle2 className="text-emerald-400" />

              <p className="mt-3 text-xs uppercase tracking-widest text-slate-500">
                {t.mastered}
              </p>

              <p className="mt-1 text-3xl font-bold">
                {mastered.length}/{lessons.length}
              </p>

            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">

              <BookOpen className="text-violet-400" />

              <p className="mt-3 text-xs uppercase tracking-widest text-slate-500">
                {t.next}
              </p>

              <p className="mt-1 truncate font-bold">
                {nextLesson
                  ? nextLesson.title[lang]
                  : "🎉 Complete"}
              </p>

            </div>

          </div>

        </div>


        <nav className="mt-6 flex flex-wrap gap-2">

          <button
            onClick={() => setTab("learn")}
            className={`rounded-xl px-4 py-2.5 font-semibold ${
              tab === "learn"
                ? "bg-cyan-500 text-slate-950"
                : "border border-slate-800 bg-slate-900"
            }`}
          >
            {t.learn}
          </button>


          <button
            onClick={() => setTab("lab")}
            className={`rounded-xl px-4 py-2.5 font-semibold ${
              tab === "lab"
                ? "bg-cyan-500 text-slate-950"
                : "border border-slate-800 bg-slate-900"
            }`}
          >
            {t.lab}
          </button>


          <button
            onClick={() => setTab("detective")}
            className={`rounded-xl px-4 py-2.5 font-semibold ${
              tab === "detective"
                ? "bg-cyan-500 text-slate-950"
                : "border border-slate-800 bg-slate-900"
            }`}
          >
            <Wrench
              size={16}
              className="mr-1 inline"
            />

            {t.detective}
          </button>

        </nav>


        <section className="mt-6">

          {tab === "learn" && (
            <div className="grid gap-5">

              {lessons.map((lesson, i) => (

                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  locked={
                    i > 0 &&
                    !mastered.includes(
                      lessons[i - 1].id
                    )
                  }
                  mastered={mastered.includes(
                    lesson.id
                  )}
                  onMaster={() =>
                    markMaster(lesson.id)
                  }
                />

              ))}

            </div>
          )}


          {tab === "lab" && (

            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-4 md:p-6">

              <div className="mb-6">

                <p className="text-xs uppercase tracking-widest text-cyan-400">
                  LAB
                </p>

                <h2 className="mt-1 text-3xl font-bold">
                  {t.labTitle}
                </h2>

                <p className="mt-2 text-slate-400">
                  {t.labText}
                </p>

              </div>

              <CircuitBuilder />

            </div>

          )}


          {tab === "detective" && (

            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">

              <div className="flex items-start gap-4">

                <div className="rounded-2xl bg-amber-500/10 p-3 text-amber-400">
                  <Wrench />
                </div>

                <div>

                  <h2 className="text-3xl font-bold">
                    {t.detective}
                  </h2>

                  <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                    {t.detectiveText}
                  </p>

                  <div className="mt-6 grid gap-3 md:grid-cols-3">

                    {[
                      "Broken wire",
                      "Blown fuse",
                      "Wrong connection"
                    ].map((x) => (

                      <div
                        key={x}
                        className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                      >

                        <p className="font-semibold">
                          {x}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Future challenge
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          )}

        </section>

      </section>


      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        Virtual Electrical Lab • Learn by building
      </footer>

    </main>
  );
}
