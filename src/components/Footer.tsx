import { Crosshair, Headphones, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.38em] text-orange-200">Player Card</p>
          <h2 className="text-4xl font-black tracking-[-0.04em]">这里换成你的 FPS 玩家 ID</h2>
          <p className="mt-4 leading-7 text-slate-400">这里可以写你的昵称、常玩 FPS、灵敏度偏好、擅长位置或者一句狠话，让网页更像你的个人高光档案馆。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {['FPS 高光', '残局专精', '压枪收藏'].map((item) => (
              <span key={item} className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">{item}</span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-8 backdrop-blur-md">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.38em] text-cyan-200">FPS Focus</p>
          <h3 className="text-3xl font-black tracking-[-0.04em]">只放枪法、意识和残局</h3>
          <p className="mt-4 leading-7 text-slate-400">页面内容已经收敛成 FPS 高光，只围绕枪法、残局、投掷物和压秒操作；你后面只要替换视频链接和封面就行。</p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <Info icon={<Crosshair size={18} />} title="爆头" text="适合放瞬狙、定位、扫转点。" />
            <Info icon={<ShieldCheck size={18} />} title="残局" text="适合放 1vX、拆包、守包。" />
            <Info icon={<Headphones size={18} />} title="意识" text="适合放听声、预瞄、绕后。" />
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-xs text-slate-600">© 2026 FPS Highlight Vault. 视频与封面请替换为你自己的素材。</p>
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
