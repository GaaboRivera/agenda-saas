"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Gratuito",
    price: { monthly: 0, yearly: 0 },
    description: "Para comenzar a organizar tu tiempo personal.",
    features: [
      "1 calendario personal",
      "Hasta 50 eventos/mes",
      "Recordatorios por email",
      "Aplicación móvil",
      "Soporte por email",
    ],
    cta: "Comenzar Gratis",
    popular: false,
  },
  {
    name: "Profesional",
    price: { monthly: 12, yearly: 9 },
    description: "Para profesionales que necesitan más control.",
    features: [
      "Calendarios ilimitados",
      "Eventos ilimitados",
      "Recordatorios SMS y push",
      "Integraciones premium",
      "Sincronización en tiempo real",
      "Soporte prioritario",
      "Exportación de datos",
    ],
    cta: "Elegir Profesional",
    popular: true,
  },
  {
    name: "Equipo",
    price: { monthly: 29, yearly: 24 },
    description: "Para equipos que buscan colaborar eficientemente.",
    features: [
      "Todo en Profesional",
      "Hasta 10 miembros",
      "Calendarios compartidos",
      "Roles y permisos",
      "Panel de administración",
      "Análisis y reportes",
      "API acceso",
      "Soporte dedicado",
    ],
    cta: "Elegir Equipo",
    popular: false,
  },
];

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <section id="planes" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-accent">
            Planes y Precios
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Elige el plan perfecto para ti
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comienza gratis y escala según tus necesidades. Sin compromisos.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-10 flex justify-center">
          <div className="relative flex rounded-full bg-muted p-1">
            <button
              type="button"
              className={cn(
                "relative rounded-full px-6 py-2 text-sm font-medium transition-colors",
                billingPeriod === "monthly"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
              onClick={() => setBillingPeriod("monthly")}
            >
              Mensual
            </button>
            <button
              type="button"
              className={cn(
                "relative rounded-full px-6 py-2 text-sm font-medium transition-colors",
                billingPeriod === "yearly"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
              onClick={() => setBillingPeriod("yearly")}
            >
              Anual
              <span className="ml-2 inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl bg-background p-8 ring-1 transition-all",
                plan.popular
                  ? "ring-accent shadow-xl scale-105 lg:scale-110"
                  : "ring-border",
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-accent px-4 py-1 text-sm font-medium text-accent-foreground">
                    Recomendado
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    ${plan.price[billingPeriod]}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-muted-foreground">/mes</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "h-5 w-5 shrink-0 mt-0.5",
                        plan.popular ? "text-accent" : "text-muted-foreground",
                      )}
                    />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-primary p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-primary-foreground">
                Empresa
              </h3>
              <p className="mt-2 text-primary-foreground/80">
                Para organizaciones que necesitan seguridad adicional y soporte
                dedicado.
              </p>
            </div>
            <Button variant="secondary" size="lg">
              Contactar Ventas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
