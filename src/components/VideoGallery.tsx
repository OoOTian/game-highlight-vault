import { videos } from '@/data/videos';
import type { HighlightVideo } from '@/types/video';
import VideoCard from './VideoCard';

interface VideoGalleryProps {
  onSelect: (video: HighlightVideo) => void;
}

export default function VideoGallery({ onSelect }: VideoGalleryProps) {
  return (
    <section id="gallery" className="px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.38em] text-cyan-200">FPS Video</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">视频列表</h2>
          <p className="mt-4 max-w-2xl text-slate-400">当前只展示这一段 FPS 高光视频，点击卡片即可播放。</p>
        </div>

        <div className="mb-5 text-sm text-slate-400">共 {videos.length} 段 FPS 视频</div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => <VideoCard key={video.id} video={video} onSelect={onSelect} />)}
        </div>
      </div>
    </section>
  );
}
