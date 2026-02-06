"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { mes: "Jul", entrantes: 1200, salientes: 980 },
  { mes: "Ago", entrantes: 1350, salientes: 1100 },
  { mes: "Sep", entrantes: 1100, salientes: 1250 },
  { mes: "Oct", entrantes: 1500, salientes: 1400 },
  { mes: "Nov", entrantes: 1780, salientes: 1600 },
  { mes: "Dic", entrantes: 1900, salientes: 1850 },
  { mes: "Ene", entrantes: 2156, salientes: 2100 },
];

export function CallsChart() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Actividad de Llamadas</CardTitle>
        <CardDescription className="text-muted-foreground">
          Historial de llamadas entrantes y salientes de los ultimos 7 meses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer className="w-full h-full">
            <AreaChart
              data={data}
              margin={{ top: 5, right: 10, left: -10, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorEntrantes" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0d9668" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0d9668" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSalientes" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(224, 14%, 18%)"
              />
              <XAxis
                dataKey="mes"
                stroke="hsl(220, 10%, 55%)"
                tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                stroke="hsl(220, 10%, 55%)"
                tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(224, 18%, 12%)",
                  border: "1px solid hsl(224, 14%, 22%)",
                  borderRadius: "8px",
                  color: "hsl(220, 14%, 95%)",
                  fontSize: "13px",
                }}
                labelStyle={{ color: "hsl(220, 14%, 95%)" }}
              />
              <Legend
                wrapperStyle={{ fontSize: "13px", color: "hsl(220, 10%, 55%)" }}
              />
              <Area
                type="monotone"
                dataKey="entrantes"
                name="Entrantes"
                stroke="#0d9668"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorEntrantes)"
              />
              <Area
                type="monotone"
                dataKey="salientes"
                name="Salientes"
                stroke="#3b82f6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorSalientes)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
