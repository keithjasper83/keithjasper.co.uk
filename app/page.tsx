import Image from 'next/image';
import { Icons } from '../components/icons';

const skills = [
  {
    id: 1, // Added unique ID 
    title: "Development",
    content: "Developing code designed to fast, secure and reliable.",
    icon: "code"
  },
  {
    id: 2, // Added unique ID
    title: "Coaching",
    content: "Mentoring junior developers and teams to improve their coding skills.",
    icon: "users"
  },
  {
    id: 3, // Added unique ID
    title: "Management",
    content: "Managing code base accross multiple environments and teams.",
    icon: "stack",
  },
  {
    id: 4, // Added unique ID
    title: "Languages",
    content: "Specialising in typescript, c# and python.",
    icon: "language",
  },
  {
    id: 5, // Added unique ID
    title: "Idea to product",
    content: "Lets discuss your idea and turn it into a product.",
    icon: "lightbulb-o",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-12">Keith Jasper</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={`skill-${skill.id}`} className="border rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <Icons name={skill.icon} className="h-6 w-6 mr-2" />
                  <h3 className="text-xl font-medium">{skill.title}</h3>
                </div>
                <p>{skill.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
