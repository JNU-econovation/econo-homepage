import { Database } from "sqlite";
import { NextRequest, NextResponse } from "next/server";
import { getDB } from "@/database/accecer";

let db: Database;

export const POST = async (req: NextRequest) => {
  if (!db) {
    db = await getDB();
  }

  const body = await req.json();

  await db.run(
    "INSERT INTO recruit (email, create_at) VALUES(?, ?)",
    body.email,
    new Date().getTime()
  );

  return NextResponse.json({ success: true, response: null, error: null });
};
