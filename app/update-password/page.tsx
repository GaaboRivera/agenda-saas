import UpdatePasswordForm from "@/components/auth/UpdatePasswordForm";

export default function UpdatePasswordPage() {
  return (
    <div
      className="mx-auto bg-background max-w-lg lg:border lg:border-white/50 mt-10 lg:p-6"
      style={{ borderRadius: 20 }}
    >
      <UpdatePasswordForm />
    </div>
  );
}
