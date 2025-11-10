import { Bike, Dumbbell, Shoe, Waves } from 'lucide-react';

const activities = [
  {
    icon: Shoe,
    title: 'Jogging & Walking',
    detail: '150 minutes per week at a moderate pace supports endurance and lowers blood pressure.'
  },
  {
    icon: Waves,
    title: 'Swimming',
    detail: 'Low-impact, full-body cardio that boosts heart and lung capacity.'
  },
  {
    icon: Bike,
    title: 'Cycling',
    detail: 'Strengthens the heart while being gentle on joints—outdoors or stationary.'
  },
  {
    icon: Dumbbell,
    title: 'Aerobic + Strength',
    detail: 'Combine cardio with 2–3 days of resistance training for optimal heart health.'
  }
];

export default function Exercise() {
  return (
    <section id="exercise" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Heart‑Strengthening Exercises</h2>
          <p className="mt-4 text-slate-700 text-lg">Pick activities you enjoy and build a steady routine. Aim for most days of the week.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map(({ icon: Icon, title, detail }) => (
            <div key={title} className="rounded-2xl border border-blue-100 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-700">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-lg font-semibold">Safety first</p>
            <p className="text-white/80 text-sm">If you’re new to exercise or have a medical condition, check with a healthcare professional before starting.</p>
          </div>
          <a href="#tips" className="inline-flex items-center rounded-md bg-rose-500 hover:bg-rose-400 px-5 py-3 font-medium transition-colors">See Daily Tips</a>
        </div>
      </div>
    </section>
  );
}
