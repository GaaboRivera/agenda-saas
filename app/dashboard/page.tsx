import { TopNav } from "@/components/dashboard/TopNav";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { CallsChart } from "@/components/dashboard/CallsChart";
import { ContactsTable } from "@/components/dashboard/ContactsTable";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { SubscriptionCard } from "@/components/dashboard/SubscriptionCard";

const dashboardThemeVars: Record<string, string> = {
  "--background": "224 20% 7%",
  "--foreground": "220 14% 95%",
  "--card": "224 18% 10%",
  "--card-foreground": "220 14% 95%",
  "--popover": "224 18% 10%",
  "--popover-foreground": "220 14% 95%",
  "--primary": "160 84% 39%",
  "--primary-foreground": "0 0% 100%",
  "--secondary": "224 14% 16%",
  "--secondary-foreground": "220 14% 95%",
  "--muted": "224 14% 16%",
  "--muted-foreground": "220 10% 55%",
  "--accent": "160 84% 39%",
  "--accent-foreground": "0 0% 100%",
  "--destructive": "0 72% 51%",
  "--destructive-foreground": "0 0% 100%",
  "--border": "224 14% 18%",
  "--input": "224 14% 18%",
  "--ring": "160 84% 39%",
  "--chart-1": "160 84% 39%",
  "--chart-2": "200 70% 50%",
  "--chart-3": "30 80% 55%",
  "--chart-4": "280 65% 60%",
  "--chart-5": "340 75% 55%",
  "--radius": "0.625rem",
};

export default async function DashboardPage() {
  return (
    <div
      style={dashboardThemeVars as React.CSSProperties}
      className="min-h-screen bg-background text-foreground font-sans antialiased"
    >
      <div className="min-h-screen bg-background text-foreground">
        <TopNav email={"gabo.grm27@gmail.com"} />
        <main className="p-4 lg:p-6">
          {/* Encabezado */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground text-balance">
              Panel de Administracion - Invitado
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Resumen general de tu servicio de agenda telefonica
            </p>
          </div>

          {/* Tarjetas de estadisticas */}
          <div className="mb-6">
            <StatsCards />
          </div>

          {/* Grafico de llamadas + Actividad reciente */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <div className="lg:col-span-2">
              <CallsChart />
            </div>
            <div>
              <RecentActivity />
            </div>
          </div>

          {/* Tabla de contactos + Suscripcion */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <ContactsTable />
            </div>
            <div>
              <SubscriptionCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
