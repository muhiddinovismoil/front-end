import { cookies } from "next/headers";

export async function GET() {
    const token = (await cookies()).get("token")?.value || null;
    return Response.json({ token });
}
