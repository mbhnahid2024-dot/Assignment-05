import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Technology } from "./types/technology";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import Footer from "./components/Footer";

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState<Technology[]>([]);

  // Load JSON data
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}technologies.json`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Technology[] = await res.json();
        setTechnologies(data);
      } catch (err) {
        console.error("Failed to load technologies:", err);
        toast.error("Failed to load technologies");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleAdd = (tech: Technology) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const handleRemove = (id: string) => {
    const tech = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed from your stack");
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <main>
        <Hero />
        <TechnologyList
          technologies={technologies}
          loading={loading}
          stack={stack}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}