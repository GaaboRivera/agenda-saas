import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Gestión de Citas",
    description:
      "Sistema completo para programar, modificar y cancelar citas con confirmación automática.",
    benefits: [
      "Reservas online 24/7",
      "Confirmaciones automáticas",
      "Gestión de cancelaciones",
      "Horarios personalizables",
    ],
    image: "appointments",
  },
  {
    title: "Reuniones Virtuales",
    description:
      "Integración nativa con las principales plataformas de videoconferencia.",
    benefits: [
      "Zoom, Meet, Teams integrados",
      "Enlaces automáticos",
      "Grabación de sesiones",
      "Sala de espera virtual",
    ],
    image: "meetings",
  },
  {
    title: "Gestión de Tareas",
    description:
      "Organiza tus pendientes y proyectos junto a tu calendario para una visión completa.",
    benefits: [
      "Listas de tareas inteligentes",
      "Priorización automática",
      "Fechas límite vinculadas",
      "Seguimiento de progreso",
    ],
    image: "tasks",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-accent">Servicios</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Soluciones adaptadas a tus necesidades
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Descubre cómo AgendaPro puede transformar la forma en que gestionas
            tu tiempo.
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link href="#planes" className="gap-2">
                      Saber más
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex-1">
                <div className="relative rounded-2xl bg-card p-2 shadow-xl ring-1 ring-border overflow-hidden">
                  <div className="rounded-xl bg-muted aspect-4/3 flex items-center justify-center">
                    <ServiceIllustration type={service.image} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceIllustration({ type }: { type: string }) {
  if (type === "appointments") {
    return (
      <div className="p-8 w-full">
        <div className="bg-card rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-semibold text-foreground">Nueva Cita</h4>
            <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
              Disponible
            </span>
          </div>
          <div className="space-y-4">
            <div className="h-10 bg-secondary rounded-lg flex items-center px-4 text-sm text-muted-foreground">
              Selecciona fecha y hora
            </div>
            <div className="grid grid-cols-4 gap-2">
              {["9:00", "10:00", "11:00", "12:00"].map((time) => (
                <div
                  key={time}
                  className={`text-center py-2 rounded-lg text-sm ${time === "10:00" ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"}`}
                >
                  {time}
                </div>
              ))}
            </div>
            <div className="h-10 bg-accent text-accent-foreground rounded-lg flex items-center justify-center text-sm font-medium">
              Confirmar Cita
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "meetings") {
    return (
      <div className="p-8 w-full">
        <div className="bg-card rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
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
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Reunión de Proyecto
              </h4>
              <p className="text-sm text-muted-foreground">
                En progreso • 3 participantes
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-video bg-secondary rounded-lg flex items-center justify-center"
              >
                <div className="h-8 w-8 rounded-full bg-muted-foreground/20" />
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
              <svg
                className="h-5 w-5 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <div className="h-10 w-10 rounded-full bg-destructive flex items-center justify-center">
              <svg
                className="h-5 w-5 text-destructive-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                />
              </svg>
            </div>
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
              <svg
                className="h-5 w-5 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 w-full">
      <div className="bg-card rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-semibold text-foreground">Mis Tareas</h4>
          <span className="text-sm text-muted-foreground">3/5 completadas</span>
        </div>
        <div className="space-y-3">
          {[
            { text: "Revisar propuesta", done: true },
            { text: "Enviar reporte mensual", done: true },
            { text: "Preparar presentación", done: true },
            { text: "Llamar al proveedor", done: false },
            { text: "Actualizar documentación", done: false },
          ].map((task, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 p-3 rounded-lg ${task.done ? "bg-accent/10" : "bg-secondary"}`}
            >
              <div
                className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${task.done ? "border-accent bg-accent" : "border-muted-foreground"}`}
              >
                {task.done && (
                  <svg
                    className="h-3 w-3 text-accent-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span
                className={`text-sm ${task.done ? "text-muted-foreground line-through" : "text-foreground"}`}
              >
                {task.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
