import { signInMock } from "@/services/signin";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { email, password } = body;

  const logged = await signInMock(email, password);

  if (!logged) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const cookiesHandler = await cookies();
  cookiesHandler.set("isLogged", "ok");
  const username = {
    id: 1,
    name: "Gabo",
    lastname: "Gomez",
    email: "gabo@example.com"
  };
  cookiesHandler.set("username", JSON.stringify(username));

  return NextResponse.json({ success: true }, { status: 200 });
}
