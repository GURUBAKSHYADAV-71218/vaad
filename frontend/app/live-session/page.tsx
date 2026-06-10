import SessionHeader from "../../components/live-session/SessionHeader";
import VideoGrid from "../../components/live-session/VideoGrid";
import TranscriptPanel from "../../components/live-session/TranscriptPanel";
import AISignals from "../../components/live-session/AISignals";
import Timeline from "../../components/live-session/Timeline";

export default function LiveSessionPage() {
  return (
    <div>

      <SessionHeader />

      <VideoGrid />

      <div className="grid grid-cols-2 gap-6 mt-6">

        <TranscriptPanel />

        <AISignals />

      </div>

      <div className="mt-6">
        <Timeline />
      </div>

    </div>
  );
}