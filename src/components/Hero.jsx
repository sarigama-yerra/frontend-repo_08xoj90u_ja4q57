import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full isolate overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm leading-6 ring-1 ring-inset ring-white/20">Futuristic Health Education</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Promoting Health and Well-Being for All — Start with Your Heart
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Learn how your heart works, understand common conditions, and discover science-backed ways to keep it strong.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="rounded-md bg-rose-500 hover:bg-rose-400 text-white px-5 py-3 font-medium transition-colors">Explore the Heart</a>
              <a href="#tips" className="rounded-md bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-medium ring-1 ring-inset ring-white/20 transition-colors">Daily Tips</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
    </section>
  );
}
