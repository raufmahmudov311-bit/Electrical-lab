"use client";

import { useMemo, useState } from "react";
import {
  Battery,
  Lightbulb,
  ToggleLeft,
  Cable,
  Plus,
  Minus,
  RotateCcw,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

type Part =
  | "battery"
  | "lamp"
  | "switch"
  | "resistor";

type Placed = {
  id: number;
  type: Part;
};

const labels: Record<
  Part,
  string
> = {
  battery: "Battery",
  lamp: "Lamp",
  switch: "Switch",
  resistor: "Resistor"
};

export default function CircuitBuilder() {

  const [parts, setParts] =
    useState<Placed[]>([]);

  const [switchOn, setSwitchOn] =
    useState(false);

  const [resistance, setResistance] =
    useState(1000);

  const has = (type: Part) =>
    parts.some(
      (part) =>
        part.type === type
    );

  const complete =
    has("battery") &&
    has("lamp") &&
    has("switch") &&
    has("resistor") &&
    switchOn;

  const current = useMemo(
    () =>
      complete
        ? 12 / resistance
        : 0,
    [complete, resistance]
  );

  function add(type: Part) {
    setParts((previous) => [
      ...previous,
      {
        id:
          Date.now() +
          Math.random(),
        type
      }
    ]);
  }

  function reset() {
    setParts([]);
    setSwitchOn(false);
    setResistance(1000);
  }

  return (

    <div className="grid gap-5 lg:grid-cols-[230px_1fr_260px]">

      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">

        <h3 className="font-bold text-white">
          Components
        </h3>

        <p className="mt-1 text-xs text-slate-400">
          Komponent seç.
        </p>


        <div className="mt-4 grid gap-2">

          {(
            [
              "battery",
              "lamp",
              "switch",
              "resistor"
            ] as Part[]
          ).map((type) => (

            <button
              key={type}
              onClick={() =>
                add(type)
              }
              className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-left hover:border-cyan-500"
            >

              {type === "battery" ? (
                <Battery size={18} />
              ) : type === "lamp" ? (
                <Lightbulb size={18} />
              ) : type === "switch" ? (
                <ToggleLeft size={18} />
              ) : (
                <Plus size={18} />
              )}

              <span>
                {labels[type]}
              </span>

            </button>

          ))}

        </div>

      </div>


      <div className="grid-bg min-h-[390px] rounded-2xl border border-slate-800 bg-slate-950 p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs uppercase tracking-widest text-cyan-400">
              Virtual Lab
            </p>

            <h3 className="mt-1 text-xl font-bold">
              Build your circuit
            </h3>

          </div>

          <button
            onClick={reset}
            className="rounded-xl border border-slate-700 p-2 text-slate-300 hover:border-cyan-500"
          >
            <RotateCcw size={18} />
          </button>

        </div>


        <div className="mt-8 flex min-h-[220px] flex-wrap items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-700 p-5">

          {parts.length === 0 && (

            <div className="text-center text-slate-500">

              <Cable className="mx-auto mb-2" />

              <p>
                Başlamaq üçün komponent əlavə et.
              </p>

            </div>

          )}


          {parts.map(
            (part, index) => (

              <div
                key={part.id}
                className="flex items-center"
              >

                <div className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-4 text-center shadow-glow">

                  <div className="text-2xl">

                    {part.type ===
                    "battery"
                      ? "🔋"
                      : part.type ===
                        "lamp"
                      ? "💡"
                      : part.type ===
                        "switch"
                      ? "🔘"
                      : "🔲"}

                  </div>

                  <div className="mt-1 text-xs text-slate-300">
                    {labels[
                      part.type
                    ]}
                  </div>

                </div>


                {index <
                  parts.length -
                    1 && (

                  <div className="mx-2 h-1 w-8 rounded bg-slate-600" />

                )}

              </div>

            )
          )}

        </div>


        <div className="mt-4 flex flex-wrap gap-2">

          <button
            onClick={() =>
              setSwitchOn(
                (value) =>
                  !value
              )
            }
            disabled={!has("switch")}
            className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-30"
          >
            Switch:{" "}
            {switchOn
              ? "ON"
              : "OFF"}
          </button>


          <button
            onClick={() =>
              setResistance(
                (value) =>
                  Math.min(
                    10000,
                    value + 1000
                  )
              )
            }
            className="rounded-xl border border-slate-700 px-4 py-2"
          >
            <Plus
              size={14}
              className="mr-1 inline"
            />
            Resistance
          </button>


          <button
            onClick={() =>
              setResistance(
                (value) =>
                  Math.max(
                    100,
                    value - 1000
                  )
              )
            }
            className="rounded-xl border border-slate-700 px-4 py-2"
          >
            <Minus
              size={14}
              className="mr-1 inline"
            />
            Resistance
          </button>

        </div>

      </div>


      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">

        <h3 className="font-bold">
          Circuit status
        </h3>


        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4">

          {complete ? (

            <>

              <div className="flex items-center gap-2 text-emerald-400">

                <CheckCircle2 size={20} />

                Working

              </div>

              <p className="mt-3 text-sm text-slate-300">

                Current:{" "}

                <b>
                  {(
                    current *
                    1000
                  ).toFixed(1)}{" "}
                  mA
                </b>

              </p>

            </>

          ) : (

            <>

              <div className="flex items-center gap-2 text-amber-400">

                <AlertTriangle size={20} />

                Incomplete

              </div>

              <p className="mt-3 text-sm text-slate-400">

                Battery, Lamp, Switch və Resistor əlavə et,
                sonra switch-i ON et.

              </p>

            </>

          )}

        </div>


        <div className="mt-4 rounded-xl bg-slate-950 p-4">

          <p className="text-xs uppercase tracking-widest text-slate-500">
            Resistance
          </p>

          <p className="mt-1 text-2xl font-bold">
            {resistance} Ω
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Eyni voltage-da resistance artdıqca
            current azalır.
          </p>

        </div>

      </div>

    </div>
  );
}
