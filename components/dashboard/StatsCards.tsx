import {
  Users,
  Phone,
  PhoneIncoming,
  PhoneOutgoing,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Total Contactos",
    value: "12,847",
    change: "+12.5%",
    trend: "up" as const,
    icon: Users,
    description: "vs. mes anterior",
  },
  {
    title: "Llamadas Realizadas",
    value: "3,214",
    change: "+8.2%",
    trend: "up" as const,
    icon: PhoneOutgoing,
    description: "vs. mes anterior",
  },
  {
    title: "Llamadas Recibidas",
    value: "2,156",
    change: "+3.1%",
    trend: "up" as const,
    icon: PhoneIncoming,
    description: "vs. mes anterior",
  },
  {
    title: "Usuarios Activos",
    value: "482",
    change: "-2.4%",
    trend: "down" as const,
    icon: Phone,
    description: "vs. mes anterior",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-border bg-card">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div
                className={`flex items-center gap-1 text-xs font-medium ${
                  stat.trend === "up" ? "text-emerald-500" : "text-red-500"
                }`}
              >
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3.5 w-3.5" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5" />
                )}
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.title}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
