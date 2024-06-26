import { title } from "process";
import { Icons } from "../components/icons";

const skills = [
  {
    title: "Development",
    content: "Developing code designed to fast, secure and reliable.",
    icon: "code",
  },
  {
    title: "Management",
    content: "Managing code base accross multiple environments and teams.",
    icon: "stack",
  },
  {
    title: "Languages",
    content: "Specialising in typescript, c# and python.",
    icon: "language",
  },
  {
    title: "Idea to product",
    content: "Lets discuss your idea and turn it into a product.",
    icon: "lightbulb-o",
  },
];

export default function Home() {
  return (
    <div className="row py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-500">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-grey-200 sm:text-4xl">
            Everything you need to deploy and maintain your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-500">
            Providing a full stack development service, from idea to product.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {skills.map((i) => (
              <div key={`skill-${i}`} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-200">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r  from-orange-500 via-orange-600 to-orange-500">
                    <Icons
                      name={i.icon}
                      className="h-6 w-6 text-white text-2xl flex items-center justify-center"
                      aria-hidden="true"
                    />
                  </div>
                  {i.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-500">
                  {i.content}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
