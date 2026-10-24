import { NextResponse } from "next/server";
import { getNowPlaying } from "@/lib/lastfm";

export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY;
  const username = process.env.LASTFM_USERNAME || "lasanhaaa";

  if (!apiKey) {
    return NextResponse.json({ error: "LASTFM_API_KEY is not configured" }, { status: 503 });
  }

  try {
    const nowPlaying = await getNowPlaying(username, apiKey);
    return NextResponse.json(nowPlaying, {
      headers: { "Cache-Control": "public, s-maxage=15, stale-while-revalidate=30" },
    });
  } catch (error) {
    console.error("[now-playing]", error);
    return NextResponse.json({ error: "Failed to fetch data from Last.fm" }, { status: 502 });
  }
}
