import { useState } from 'react';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import VideoGallery from '@/components/VideoGallery';
import VideoModal from '@/components/VideoModal';
import { videos } from '@/data/videos';
import type { HighlightVideo } from '@/types/video';

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<HighlightVideo | null>(null);

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 selection:bg-cyan-300 selection:text-slate-950">
      <Hero totalVideos={videos.length} onStart={scrollToGallery} />
      <VideoGallery onSelect={setSelectedVideo} />
      <Footer />
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </main>
  );
}
