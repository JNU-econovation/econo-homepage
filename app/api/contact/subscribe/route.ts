import { Database } from "sqlite";
import { NextRequest, NextResponse } from "next/server";
import { getDB } from "@/database/accecer";

let db: Database;

export const POST = async (req: NextRequest) => {
  if (!db) {
    db = await getDB();
  }

  const body = await req.json();

  console.log(body);

  await db.run(
    "INSERT INTO contact (email, content, name, create_at) VALUES(?, ?, ?, ?)",
    body.email,
    body.message,
    body.name,
    new Date().getTime()
  );

  return NextResponse.json({ success: true, response: null, error: null });
};
