import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Nuevo: Integración con Google Calendar
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Organiza tu tiempo de manera inteligente
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Simplifica la gestión de tus citas, reuniones y tareas con nuestra
              plataforma de agenda digital. Aumenta tu productividad y nunca
              pierdas un compromiso importante.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#planes" className="gap-2">
                  Comenzar Gratis
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent"
              >
                <Play className="h-4 w-4" />
                Ver Demo
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-background bg-muted"
                    style={{
                      backgroundImage: `url(https://i.pravatar.cc/40?img=${i + 10})`,
                      backgroundSize: "cover",
                    }}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">+10,000</span>{" "}
                  usuarios activos
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:ml-auto">
            <div className="relative rounded-2xl bg-card p-2 shadow-2xl ring-1 ring-border">
              <div className="rounded-xl bg-muted overflow-hidden">
                <div className="bg-card border-b border-border p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-destructive/60" />
                    <div className="h-3 w-3 rounded-full bg-amber-400/60" />
                    <div className="h-3 w-3 rounded-full bg-accent/60" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {["L", "M", "X", "J", "V", "S", "D"].map((day) => (
                      <div
                        key={day}
                        className="text-center text-xs font-medium text-muted-foreground"
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 35 }, (_, i) => {
                      const day = i - 2;
                      const isToday = day === 15;
                      const hasEvent = [5, 12, 15, 22, 28].includes(day);
                      return (
                        <div
                          key={i}
                          className={`
                            aspect-square flex items-center justify-center text-sm rounded-lg
                            ${day < 1 || day > 31 ? "text-transparent" : "text-foreground"}
                            ${isToday ? "bg-accent text-accent-foreground font-bold" : ""}
                            ${hasEvent && !isToday ? "bg-accent/20 font-medium" : ""}
                          `}
                        >
                          {day > 0 && day <= 31 ? day : ""}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border-l-4 border-accent">
                      <div className="text-sm">
                        <p className="font-medium text-foreground">
                          Reunión de equipo
                        </p>
                        <p className="text-muted-foreground">10:00 - 11:30</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary border-l-4 border-muted-foreground">
                      <div className="text-sm">
                        <p className="font-medium text-foreground">
                          Llamada con cliente
                        </p>
                        <p className="text-muted-foreground">14:00 - 15:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-lg ring-1 ring-border">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <svg
                    className="h-6 w-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">+150%</p>
                  <p className="text-sm text-muted-foreground">Productividad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
