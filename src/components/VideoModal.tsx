import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { HighlightVideo } from '@/types/video';

interface VideoModalProps {
  video: HighlightVideo | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!video) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  useEffect(() => {
    if (!video && videoRef.current) videoRef.current.pause();
  }, [video]);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/82 px-4 py-8 text-white backdrop-blur-xl" role="dialog" aria-modal="true" aria-label={`${video.title} 播放器`}>
      <button className="absolute inset-0 cursor-default" aria-label="关闭播放器遮罩" onClick={onClose} />
      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-cyan-950/40">
        <button className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-white hover:text-slate-950" aria-label="关闭播放器" onClick={onClose}>
          <X size={20} />
        </button>
        <video ref={videoRef} className="aspect-video w-full bg-black object-contain" src={video.videoUrl} poster={video.coverUrl} controls playsInline preload="none" />
        <div className="p-6">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">{video.game}</p>
          <h3 className="text-3xl font-black tracking-[-0.04em]">{video.title}</h3>
          <p className="mt-3 max-w-3xl text-slate-400">{video.description}</p>
        </div>
      </div>
    </div>
  );
}
