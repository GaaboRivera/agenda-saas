"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const usageData = [
  { nombre: "Lun", llamadas: 45 },
  { nombre: "Mar", llamadas: 62 },
  { nombre: "Mie", llamadas: 38 },
  { nombre: "Jue", llamadas: 71 },
  { nombre: "Vie", llamadas: 55 },
  { nombre: "Sab", llamadas: 28 },
  { nombre: "Dom", llamadas: 15 },
];

export function SubscriptionCard() {
  return (
    <div className="flex flex-col gap-4">
      {/* Plan Card */}
      <Card className="border-border bg-card">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-foreground">Tu Plan</CardTitle>
            <Badge className="bg-primary/10 text-primary border-0 hover:bg-primary/20">
              Profesional
            </Badge>
          </div>
          <CardDescription className="text-muted-foreground">
            Renueva el 15 de marzo, 2026
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Contactos usados</span>
              <span className="font-medium text-foreground">
                12,847 / 25,000
              </span>
            </div>
            <Progress value={51} className="h-2" />
          </div>
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Llamadas este mes</span>
              <span className="font-medium text-foreground">
                3,214 / 10,000
              </span>
            </div>
            <Progress value={32} className="h-2" />
          </div>
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Zap className="h-4 w-4 mr-2" />
            Actualizar plan
          </Button>
        </CardContent>
      </Card>

      {/* Weekly Usage Chart */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Uso Semanal</CardTitle>
          <CardDescription className="text-muted-foreground">
            Llamadas realizadas por dia
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-45">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={usageData}
                margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
              >
                <XAxis
                  dataKey="nombre"
                  stroke="hsl(220, 10%, 55%)"
                  tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  stroke="hsl(220, 10%, 55%)"
                  tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 11 }}
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
                <Bar dataKey="llamadas" name="Llamadas" radius={[4, 4, 0, 0]}>
                  {usageData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 3 ? "#0d9668" : "hsl(224, 14%, 22%)"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
