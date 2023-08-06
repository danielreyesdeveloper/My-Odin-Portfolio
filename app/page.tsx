import Footer from "@/components/Footer";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Admin Dashboard",
    image: "",
    description: "Description of the project",
  },
  {
    id: 2,
    name: "Library",
    image: "",
    description: "Description of the project",
  },
  {
    id: 3,
    name: "Tic Tac Toe",
    image: "",
    description: "Description of the project",
  },
  {
    id: 4,
    name: "Restaurant Page",
    image: "",
    description: "Description of the project",
  },
  {
    id: 5,
    name: "Todo List",
    image: "",
    description: "Description of the project",
  },
  {
    id: 6,
    name: "Weather App",
    image: "",
    description: "Description of the project",
  },
  {
    id: 7,
    name: "Recursion",
    image: "",
    description: "Description of the project",
  },
  {
    id: 8,
    name: "Linked List",
    image: "",
    description: "Description of the project",
  },
  {
    id: 9,
    name: "Binary Search Trees",
    image: "",
    description: "Description of the project",
  },
  {
    id: 10,
    name: "Knights Travails",
    image: "",
    description: "Description of the project",
  },
  {
    id: 11,
    name: "Knights Travails",
    image: "",
    description: "Description of the project",
  },
  {
    id: 12,
    name: "Knights Travails",
    image: "",
    description: "Description of the project",
  },
  {
    id: 13,
    name: "Testing Practice",
    image: "",
    description: "Description of the project",
  },
  {
    id: 14,
    name: "Personal Portfolio",
    image: "",
    description: "Description of the project",
  },
  {
    id: 15,
    name: "CV Application",
    image: "",
    description: "Description of the project",
  },
  {
    id: 16,
    name: "Memory Card",
    image: "",
    description: "Description of the project",
  },
  {
    id: 17,
    name: "Shopping Cart",
    image: "",
    description: "Description of the project",
  },
  {
    id: 18,
    name: "Basic Informational Site",
    image: "",
    description: "Description of the project",
  },
  {
    id: 19,
    name: "Mini Message Board",
    image: "",
    description: "Description of the project",
  },
  {
    id: 20,
    name: "Forms and Deployment",
    image: "",
    description: "Description of the project",
  },
  {
    id: 21,
    name: "Inventory Application",
    image: "",
    description: "Description of the project",
  },
  {
    id: 22,
    name: "Members Only",
    image: "",
    description: "Description of the project",
  },
  {
    id: 23,
    name: "Blog API",
    image: "",
    description: "Description of the project",
  },
  {
    id: 24,
    name: "Where's Waldo App",
    image: "",
    description: "Description of the project",
  },
  {
    id: 25,
    name: "Messaging App",
    image: "",
    description: "Description of the project",
  },
  {
    id: 26,
    name: "Odin Book",
    image: "",
    description: "Description of the project",
  },
];

export default function Home() {
  return (
    <div className="container ">
      <h1 className="font-bold text-5xl text-center mt-16">Odin Projects</h1>
      <p className="font-semibold text-2xl text-center mt-4">
        My works from the official portfolio of the Odin Project Bootcamp
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
        {projects.map((project) => (
          <div key={project.id}>
            <Image
              src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
              alt={project.name}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-44 rounded-t-lg"
            />
            <div className="bg-gray-800 p-4 rounded-b-lg">
              <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
              <p>{project.description}</p>
              <button className="bg-amber-400 hover:bg-amber-500 transition duration-200 ease-in-out font-semibold text-black py-2 w-full mt-4 rounded-md">
                Visit
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
