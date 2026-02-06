import {
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  UserPlus,
  Star,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const activities = [
  {
    id: 1,
    type: "incoming" as const,
    icon: PhoneIncoming,
    title: "Llamada entrante",
    description: "Maria Garcia - 4 min 32 seg",
    time: "Hace 5 min",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: 2,
    type: "outgoing" as const,
    icon: PhoneOutgoing,
    title: "Llamada saliente",
    description: "Carlos Lopez - 2 min 15 seg",
    time: "Hace 12 min",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 3,
    type: "missed" as const,
    icon: PhoneMissed,
    title: "Llamada perdida",
    description: "Numero desconocido +34 611 222 333",
    time: "Hace 25 min",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    id: 4,
    type: "new_contact" as const,
    icon: UserPlus,
    title: "Nuevo contacto",
    description: "Laura Fernandez agregada a la agenda",
    time: "Hace 1 hora",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 5,
    type: "favorite" as const,
    icon: Star,
    title: "Marcado favorito",
    description: "Ana Martinez agregada a favoritos",
    time: "Hace 2 horas",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
  {
    id: 6,
    type: "outgoing" as const,
    icon: PhoneOutgoing,
    title: "Llamada saliente",
    description: "Pedro Sanchez - 8 min 47 seg",
    time: "Hace 3 horas",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
];

export function RecentActivity() {
  return (
    <Card className="border-border bg-card h-full">
      <CardHeader>
        <CardTitle className="text-foreground">Actividad Reciente</CardTitle>
        <CardDescription className="text-muted-foreground">
          Ultimas acciones en la plataforma
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${activity.bgColor}`}
              >
                <activity.icon className={`h-4 w-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {activity.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {activity.description}
                </p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
