import { TopNav } from "@/components/dashboard/TopNav";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { CallsChart } from "@/components/dashboard/CallsChart";
import { ContactsTable } from "@/components/dashboard/ContactsTable";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { SubscriptionCard } from "@/components/dashboard/SubscriptionCard";
import { getUser } from "@/actions/auth/get-user";

export default async function DashboardPage() {
  // Obtener el usuario actual para mostrar su email en la barra de navegación
  const user = await getUser();
  const userMetaData = user?.user_metadata;
  const displayName = userMetaData?.display_name;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <div className="min-h-screen bg-background text-foreground">
        <TopNav
          email={user?.email ?? "example@example.com"}
          name={displayName ?? "User"}
        />
        <main className="p-4 lg:p-6">
          {/* Encabezado */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground text-balance">
              Panel de Administracion
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
