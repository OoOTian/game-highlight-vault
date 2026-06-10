import { Crosshair, Headphones, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.38em] text-orange-200">Player Card</p>
          <h2 className="text-4xl font-black tracking-[-0.04em]">OoOTian 的 FPS 高光库</h2>
          <p className="mt-4 leading-7 text-slate-400">记录自己的 FPS 高光时刻，打开页面就能直接播放视频。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {['FPS 高光', '个人剪辑', 'Release 视频'].map((item) => (
              <span key={item} className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">{item}</span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-8 backdrop-blur-md">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.38em] text-cyan-200">FPS Focus</p>
          <h3 className="text-3xl font-black tracking-[-0.04em]">只保留真正的视频内容</h3>
          <p className="mt-4 leading-7 text-slate-400">页面只围绕这一段 FPS 高光视频展示，减少干扰，让访问者打开后直接观看内容。</p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <Info icon={<Crosshair size={18} />} title="枪法" text="聚焦 FPS 操作瞬间。" />
            <Info icon={<ShieldCheck size={18} />} title="高光" text="保留最值得分享的片段。" />
            <Info icon={<Headphones size={18} />} title="播放" text="点击视频卡片直接观看。" />
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-xs text-slate-600">© 2026 FPS Highlight Vault.</p>
    </footer>
  );
}

function Info({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
      <div className="mb-4 text-cyan-200">{icon}</div>
      <h4 className="font-bold">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}
