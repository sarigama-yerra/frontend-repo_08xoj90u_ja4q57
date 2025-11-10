import { AlertCircle, Stethoscope, ShieldCheck } from 'lucide-react';

const cards = [
  {
    icon: Stethoscope,
    title: 'Coronary Artery Disease (CAD)',
    body: 'Plaque buildup narrows the arteries. Symptoms: chest pain, shortness of breath. Prevention: balanced diet, regular exercise, and not smoking.'
  },
  {
    icon: AlertCircle,
    title: 'Hypertension (High Blood Pressure)',
    body: 'Often silent but harmful over time. Prevention: reduce salt, manage stress, regular activity, and routine checkups.'
  },
  {
    icon: ShieldCheck,
    title: 'Prevention Basics',
    body: 'Eat colorful plants, choose healthy fats, move daily, sleep 7–9 hours, and monitor blood pressure and cholesterol.'
  }
];

export default function Diseases() {
  return (
    <section id="diseases" className="relative bg-gradient-to-b from-white to-sky-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Diseases & Prevention</h2>
          <p className="mt-4 text-slate-700 text-lg">Understand common cardiovascular conditions and how to lower your risk with simple, consistent habits.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-700">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
