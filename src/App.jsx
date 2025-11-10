import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutHeart from './components/AboutHeart';
import Diseases from './components/Diseases';
import Exercise from './components/Exercise';
import Tips from './components/Tips';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <AboutHeart />
        <Diseases />
        <Exercise />
        <Tips />
      </main>
      <footer className="border-t border-blue-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} HeartWell — Learning for healthier lives.</p>
          <a href="#home" className="text-sm font-medium text-rose-600 hover:text-rose-500">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
