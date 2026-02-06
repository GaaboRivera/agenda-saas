import { Calendar, Bell, Users, Smartphone, Shield, Zap } from "lucide-react";

const features = [
  {
    name: "Calendario Inteligente",
    description:
      "Visualiza tus compromisos de forma clara con múltiples vistas: día, semana, mes y agenda.",
    icon: Calendar,
  },
  {
    name: "Recordatorios Automáticos",
    description:
      "Recibe notificaciones personalizadas por email, SMS o push antes de cada evento.",
    icon: Bell,
  },
  {
    name: "Colaboración en Equipo",
    description:
      "Comparte calendarios, programa reuniones grupales y coordina con tu equipo fácilmente.",
    icon: Users,
  },
  {
    name: "Acceso Multiplataforma",
    description:
      "Sincroniza tu agenda en todos tus dispositivos: web, móvil y escritorio.",
    icon: Smartphone,
  },
  {
    name: "Seguridad Avanzada",
    description:
      "Tus datos protegidos con encriptación de grado bancario y autenticación de dos factores.",
    icon: Shield,
  },
  {
    name: "Integraciones Potentes",
    description:
      "Conecta con Google Calendar, Outlook, Zoom, Slack y más de 50 aplicaciones.",
    icon: Zap,
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-accent">
            Características
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Todo lo que necesitas para gestionar tu tiempo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Herramientas poderosas diseñadas para simplificar tu día a día y
            maximizar tu productividad.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative rounded-2xl bg-background p-8 ring-1 ring-border hover:ring-accent/50 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {feature.name}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
