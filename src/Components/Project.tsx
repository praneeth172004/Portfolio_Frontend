import { motion } from 'framer-motion';

function Project() {
  const projects = [
    {
      title: "Second Brain",
      techStack: ["Discord.js", "Node.js", "Express", "Stock Market API"],
      githubLink: "https://github.com/praneeth172004/secondbranFrontend",
      liveLink: "https://secondbran-frontend.vercel.app/",
    },
    {
      title: "Paste App",
      techStack: ["React", "TailwindCSS", "LocalStorage"],
      liveLink: "https://react-project-bice-xi.vercel.app/",
    },
    {
      title: "E-Commerce",
      techStack: ["Node.js", "Express", "MongoDB", "React", "JWT", "bcrypt"],
      githubLink: "https://github.com/praneeth172004/Ecommerce_Frontend",
      liveLink: "https://ecommerce-frontend-topaz-gamma.vercel.app/",
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
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

            {/* Website Preview */}
            {project.liveLink && (
              <iframe
                src={project.liveLink}
                title={`${project.title} Preview`}
                className="w-full h-[300px] rounded-md border border-gray-700 mb-4"
                sandbox="allow-scripts allow-same-origin"
              />
            )}

            {/* URLs */}
            <div className="flex gap-4 mb-4 ">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 hover:underline text-sm"
                >
                  Open Live
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 hover:underline text-sm"
                >
                  GitHub
                </a>
              )}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
