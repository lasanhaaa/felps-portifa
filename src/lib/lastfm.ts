export type NowPlaying =
  | { status: "playing"; name: string; artist: string; image: string | null; url: string }
  | { status: "idle" };

type LastfmImage = { size: string; "#text": string };
type LastfmTrack = {
  name: string;
  url: string;
  artist: { "#text"?: string; name?: string };
  image?: LastfmImage[];
  "@attr"?: { nowplaying?: "true" };
};

const ENDPOINT = "https://ws.audioscrobbler.com/2.0/";

/** Returns the track currently scrobbling on Last.fm, if any. */
export async function getNowPlaying(username: string, apiKey: string): Promise<NowPlaying> {
  const params = new URLSearchParams({
    method: "user.getrecenttracks",
    user: username,
    api_key: apiKey,
    format: "json",
    limit: "1",
  });

  const res = await fetch(`${ENDPOINT}?${params}`, { next: { revalidate: 15 } });
  if (!res.ok) throw new Error(`Last.fm responded with ${res.status}`);

  const data = (await res.json()) as { recenttracks?: { track?: LastfmTrack[] | LastfmTrack } };
  const tracks = data.recenttracks?.track;
  const track = Array.isArray(tracks) ? tracks[0] : tracks;
  if (!track || track["@attr"]?.nowplaying !== "true") return { status: "idle" };

  const image = track.image?.at(-1)?.["#text"] || null;
  return {
    status: "playing",
    name: track.name || "Unknown track",
    artist: track.artist["#text"] || track.artist.name || "Unknown artist",
    image,
    url: track.url,
  };
}
