import Video from "next-video";
import { sendTextAlert } from "../lib/actions";

export default function Page() {
  return (
    <main className="flex h-dvh flex-col">
      <Video
        autoPlay
        className="flex aspect-video h-96"
        src="https://test-streams.mux.dev/x36xhzz/url_6/193039199_mp4_h264_aac_hq_7.m3u8"
      />
      <form action={sendTextAlert}>
        <button className="flex items-center gap-5 self-start rounded-lg bg-red-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-400 md:text-base">
          Send Alert
        </button>
      </form>
    </main>
  );
}
