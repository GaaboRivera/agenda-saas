import { ChangeName } from "@/components/dashboard/profile/ChangeName";
import { ChangePassword } from "@/components/dashboard/profile/ChangePassword";
import { TopNav } from "@/components/dashboard/TopNav";
import { getCurrentUser } from "@/server/login/actions";

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

export default async function ProfilePage() {
  const user = await getCurrentUser();
  const userMetaData = user?.user_metadata;
  const displayName = userMetaData?.display_name;

  return (
    <div
      style={dashboardThemeVars as React.CSSProperties}
      className="min-h-screen bg-background text-foreground font-sans antialiased"
    >
      <div className="bg-background text-foreground">
        <TopNav
          email={user?.email ?? "example@example.com"}
          name={displayName ?? "User"}
        />
      </div>
      <main className="p-4 lg:p-6">
        <h1 className="text-2xl font-bold ">Profile</h1>
        <hr />
        <ChangeName name={displayName ?? "User"} />
        <hr />
        <ChangePassword />
      </main>
    </div>
  );
}
