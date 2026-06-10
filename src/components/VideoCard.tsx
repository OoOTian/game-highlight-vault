import { CalendarDays, Clock, Play } from 'lucide-react';
import type { HighlightVideo } from '@/types/video';

interface VideoCardProps {
  video: HighlightVideo;
  onSelect: (video: HighlightVideo) => void;
}

export default function VideoCard({ video, onSelect }: VideoCardProps) {
  return (
    <button
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] text-left shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.07]"
      onClick={() => onSelect(video)}
    >
      <div className="relative aspect-video overflow-hidden bg-slate-900">
        <img className="h-full w-full object-cover transition duration-700 group-hover:scale-110" src={video.coverUrl} alt={`${video.title} 封面`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
        <span className="absolute right-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">{video.duration}</span>
        <span className="absolute left-4 top-4 rounded-full border border-cyan-200/40 bg-cyan-300/15 px-3 py-1 text-xs font-bold text-cyan-100 backdrop-blur-md">{video.category}</span>
        <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-950 opacity-0 shadow-2xl transition group-hover:scale-110 group-hover:opacity-100">
          <Play size={20} fill="currentColor" />
        </span>
      </div>
      <div className="p-5 text-white">
        <div className="mb-3 flex items-center justify-between gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {video.date}</span>
          <span>{video.duration}</span>
        </div>
        <h3 className="text-xl font-black tracking-[-0.03em]">{video.title}</h3>
        <p className="mt-2 text-sm text-cyan-100">{video.game}</p>
        <p className="mt-3 line-clamp-2 min-h-12 text-sm leading-6 text-slate-400">{video.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {video.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">#{tag}</span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
          <Clock size={14} /> Watch clip
        </div>
      </div>
    </button>
  );
}
