import { Sparkles } from 'lucide-react';

const tips = [
  'Start your day with a short walk and a glass of water.',
  'Fill half your plate with colorful vegetables.',
  'Practice 5 minutes of deep breathing to reduce stress.',
  'Choose stairs over elevators when possible.',
  'Aim for 7–9 hours of sleep—your heart recovers at night.',
  'Limit sugary drinks; choose water or unsweetened tea.',
  'Schedule routine checkups and know your numbers.'
];

export default function Tips() {
  return (
    <section id="tips" className="relative bg-gradient-to-b from-sky-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Healthy Lifestyle Tips</h2>
            <p className="mt-4 text-slate-700 text-lg">Small, consistent actions create big results. Try one tip each day to support your heart.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-rose-700">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm font-medium">Daily Encouragement</span>
          </div>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => (
            <li key={tip} className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
              <p className="text-slate-700">{tip}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-slate-600">Education only—this site does not replace medical advice. Consult a professional for personalized guidance.</p>
      </div>
    </section>
  );
}
