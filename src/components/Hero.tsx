import { ChevronDown, Play, RadioTower, Sparkles } from 'lucide-react';

interface HeroProps {
  totalVideos: number;
  onStart: () => void;
}

export default function Hero({ totalVideos, onStart }: HeroProps) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden px-6 py-8 text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_22%,rgba(56,248,255,0.22),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(255,106,42,0.22),transparent_30%),linear-gradient(135deg,#07080d_0%,#11131d_50%,#07080d_100%)]" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-70" />
      <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <nav className="mx-auto flex max-w-7xl items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/50 bg-cyan-300/10 text-cyan-200 shadow-[0_0_30px_rgba(56,248,255,0.24)]">
            <RadioTower size={18} />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-[0.32em] text-cyan-100">FPS HIGHLIGHT VAULT</p>
            <p className="text-xs text-slate-400">个人 FPS 名场面档案库</p>
          </div>
        </div>
      </nav>

      <div className="mx-auto grid max-w-7xl items-center gap-12 pb-20 pt-24 lg:grid-cols-[1.08fr_0.92fr] lg:pt-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_40px_rgba(56,248,255,0.16)]">
            <Sparkles size={16} /> FPS 高光正在装填
          </div>
          <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-white sm:text-7xl lg:text-8xl">
            Save the <span className="text-stroke">Clutch</span> Moment.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            专门收纳你的 FPS 爆头、残局、灭队和压哨拆包。页面只保留一组视频列表，朋友打开就能直接看。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="clip-button group inline-flex items-center justify-center gap-3 bg-cyan-300 px-7 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-white" onClick={onStart}>
              <Play size={18} fill="currentColor" /> 查看视频列表
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="panel-glow rotate-2 rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-cyan-300/30 bg-slate-950/80 p-5">
              <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                <span>FPS Archive</span>
                <span className="text-orange-200">VIDEO LIST</span>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(56,248,255,0.25),rgba(255,106,42,0.24)),radial-gradient(circle_at_center,#20243a,#06070b_72%)]">
                <div className="absolute inset-0 scanline" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-cyan-300 to-orange-400" />
                  </div>
                  <p className="text-2xl font-black tracking-tight">FPS CLIPS</p>
                  <p className="text-sm text-slate-300">爆头 / 残局 / 灭队 / 压秒拆包</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <Metric value={String(totalVideos)} label="视频" />
                <Metric value="FPS" label="类型" />
                <Metric value="1组" label="列表" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button aria-label="跳转到视频展区" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-cyan-100" onClick={onStart}>
        <ChevronDown size={28} />
      </button>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
    </div>
  );
}
