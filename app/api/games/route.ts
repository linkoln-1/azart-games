import { NextResponse } from "next/server";
import { gameMock } from "@/mock/games";

export async function GET(req: Request) {
  return NextResponse.json(gameMock);
}
