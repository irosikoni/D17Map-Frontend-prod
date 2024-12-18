import { getToken } from "@/auth/getToken";
import { HOST } from "@/server-endpoints/host";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const classroomId = request.nextUrl.searchParams.get("classroomId");
  const token = await getToken();
  const photo = await fetch(`${HOST}/classrooms/${classroomId}/photo`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const blob = await photo.blob();
  const headers = new Headers();
  headers.set("Content-Type", "image/jpeg");
  return new NextResponse(blob);
}
