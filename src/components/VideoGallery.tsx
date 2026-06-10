import { Search, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { videos } from '@/data/videos';
import type { HighlightVideo, SortMode } from '@/types/video';
import VideoCard from './VideoCard';

interface VideoGalleryProps {
  onSelect: (video: HighlightVideo) => void;
}

function durationToSeconds(duration: string) {
  const [minutes, seconds] = duration.split(':').map(Number);
  return minutes * 60 + seconds;
}

export default function VideoGallery({ onSelect }: VideoGalleryProps) {
  const [query, setQuery] = useState('');
  const [sortMode, setSortMode] = useState<SortMode>('latest');

  const filteredVideos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return videos
      .filter((video) => {
        if (!normalizedQuery) return true;
        const target = [video.title, video.game, video.description, ...video.tags].join(' ').toLowerCase();
        return target.includes(normalizedQuery);
      })
      .sort((a, b) => {
        if (sortMode === 'shortest') return durationToSeconds(a.duration) - durationToSeconds(b.duration);
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  }, [query, sortMode]);

  return (
    <section id="gallery" className="px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.38em] text-cyan-200">FPS Video List</p>
            <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">视频列表</h2>
            <p className="mt-4 max-w-2xl text-slate-400">只保留这一组 FPS 视频列表，所有内容都在这里展示。</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex min-w-[260px] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-slate-300 backdrop-blur-md">
              <Search size={18} className="text-cyan-200" />
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="搜标题、游戏、标签"
              />
            </label>
            <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-slate-300 backdrop-blur-md">
              <SlidersHorizontal size={18} className="text-orange-200" />
              <select className="bg-transparent text-sm outline-none" value={sortMode} onChange={(event) => setSortMode(event.target.value as SortMode)}>
                <option className="bg-slate-950" value="latest">最新优先</option>
                <option className="bg-slate-950" value="shortest">最短先看</option>
              </select>
            </label>
          </div>
        </div>

        <div className="mb-5 text-sm text-slate-400">共 {filteredVideos.length} 段 FPS 视频</div>
        {filteredVideos.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredVideos.map((video) => <VideoCard key={video.id} video={video} onSelect={onSelect} />)}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-white/15 bg-white/[0.03] p-12 text-center text-slate-400">没有找到匹配的视频，换个关键词试试。</div>
        )}
      </div>
    </section>
  );
}
