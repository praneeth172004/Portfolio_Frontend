import { motion } from 'framer-motion';

function Project() {
  const projects = [
    {
      title: "Stock Market Discord Bot",
      description:
        "A Discord bot that provides NSE/BSE stock data, IPO updates, company info, and trending stocks using the Indian Stock Market API.",
      techStack: ["Discord.js", "Node.js", "Express", "Stock Market API"],
      githubLink: "https://github.com/your-username/discord-stock-bot", // replace with your GitHub link
      liveLink: "", // optional live link
    },
    {
      title: "Paste App",
      description:
        "A pastebin-style app using React and LocalStorage to store, create, and manage snippets of text easily in the browser.",
      techStack: ["React", "TailwindCSS", "LocalStorage"],
      githubLink: "https://github.com/your-username/paste-app", // replace with your GitHub link
      liveLink: "", // optional live link
    },
    {
      title: "Todo App",
      description:
        "A full-stack todo application with user authentication. Built with Node.js, Express, MongoDB, JWT, and bcrypt. Supports login, signup, and CRUD on todos.",
      techStack: ["Node.js", "Express", "MongoDB", "React", "JWT", "bcrypt"],
      githubLink: "https://github.com/your-username/todo-app", // replace with your GitHub link
      liveLink: "", // optional live link
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white px-6 py-12 pt-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }} // trigger animation once when it's in the viewport
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span key={i} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 hover:underline text-sm"
                >
                  Live
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 hover:underline text-sm"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
