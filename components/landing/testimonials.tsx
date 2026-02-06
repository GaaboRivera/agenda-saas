import { Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "AgendaPro ha transformado completamente la forma en que gestiono mi consultorio. Mis pacientes pueden reservar citas fácilmente y las cancelaciones han disminuido un 60%.",
    author: "Dra. María González",
    role: "Médica Especialista",
    avatar: 1,
    rating: 5,
  },
  {
    content:
      "Como freelancer, necesitaba una herramienta que me permitiera coordinar múltiples proyectos. AgendaPro me ahorra al menos 5 horas semanales en organización.",
    author: "Carlos Mendoza",
    role: "Diseñador UX",
    avatar: 2,
    rating: 5,
  },
  {
    content:
      "La integración con Zoom y Google Calendar es perfecta. Nuestro equipo de 15 personas gestiona todas las reuniones desde un solo lugar.",
    author: "Ana Sofía Ruiz",
    role: "Project Manager",
    avatar: 3,
    rating: 5,
  },
  {
    content:
      "Probé muchas aplicaciones de agenda antes, pero ninguna tenía la simplicidad y potencia de AgendaPro. El soporte al cliente es excepcional.",
    author: "Roberto Jiménez",
    role: "Emprendedor",
    avatar: 4,
    rating: 5,
  },
  {
    content:
      "La función de recordatorios automáticos ha reducido los no-shows en mi gimnasio en un 80%. Mis clientes siempre llegan a tiempo.",
    author: "Laura Martínez",
    role: "Dueña de Gimnasio",
    avatar: 5,
    rating: 5,
  },
  {
    content:
      "Como coach ejecutivo, mis clientes valoran poder agendar sesiones de manera autónoma. AgendaPro profesionaliza completamente mi servicio.",
    author: "Fernando Díaz",
    role: "Coach Ejecutivo",
    avatar: 6,
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="opiniones" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-accent">Opiniones</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Miles de profesionales confían en AgendaPro para gestionar su
            tiempo.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-card p-8 ring-1 ring-border hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="h-8 w-8 text-accent/30 absolute top-6 right-6" />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-amber-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-foreground leading-relaxed">
                {`"${testimonial.content}"`}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div
                  className="h-12 w-12 rounded-full bg-muted"
                  style={{
                    backgroundImage: `url(https://i.pravatar.cc/48?img=${testimonial.avatar + 20})`,
                    backgroundSize: "cover",
                  }}
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: "10,000+", label: "Usuarios activos" },
              { value: "500K+", label: "Citas gestionadas" },
              { value: "98%", label: "Satisfacción" },
              { value: "4.9/5", label: "Calificación" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-foreground lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
