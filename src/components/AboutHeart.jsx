import { Brain, Activity, Shield } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Structure',
    text: 'The heart is a muscular organ with four chambers—two atria and two ventricles—pumping blood through the lungs and body.',
  },
  {
    icon: Brain,
    title: 'Function',
    text: 'It circulates oxygen and nutrients, removes waste, and maintains blood pressure—powering every cell of your body.',
  },
  {
    icon: Shield,
    title: 'Why It Matters',
    text: 'A healthy heart supports energy, focus, and longevity. Protecting it improves quality of life at every age.',
  },
];

export default function AboutHeart() {
  return (
    <section id="about" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">The Human Heart</h2>
            <p className="mt-4 text-slate-700 text-lg">
              Your heart is about the size of your fist and beats around 100,000 times a day. It works as a smart pump—coordinating valves, chambers, and electrical signals to keep you alive and thriving.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-sky-50 to-white shadow-xl">
              <div className="absolute inset-0 grid grid-cols-2 gap-2 p-6">
                <div className="rounded-xl bg-white/70 p-4 shadow-sm">
                  <p className="text-sm font-medium text-slate-700">Left & Right Sides</p>
                  <p className="mt-1 text-xs text-slate-600">Work in parallel: one sends blood to the lungs, the other to the body.</p>
                </div>
                <div className="rounded-xl bg-white/70 p-4 shadow-sm">
                  <p className="text-sm font-medium text-slate-700">Valves</p>
                  <p className="mt-1 text-xs text-slate-600">Tricuspid, pulmonary, mitral, and aortic valves keep blood flowing in one direction.</p>
                </div>
                <div className="rounded-xl bg-white/70 p-4 shadow-sm">
                  <p className="text-sm font-medium text-slate-700">Electrical System</p>
                  <p className="mt-1 text-xs text-slate-600">Signals from the SA node set your heart rhythm—your natural pacemaker.</p>
                </div>
                <div className="rounded-xl bg-white/70 p-4 shadow-sm">
                  <p className="text-sm font-medium text-slate-700">Coronary Arteries</p>
                  <p className="mt-1 text-xs text-slate-600">Deliver oxygen-rich blood to nourish the heart muscle itself.</p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-x-6 -bottom-6 h-24 bg-gradient-to-t from-blue-50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
