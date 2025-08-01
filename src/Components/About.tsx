
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col justify-center items-center px-4 py-10 text-white">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="max-w-2xl text-center text-sm md:text-base text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I'm a passionate full-stack developer currently pursuing B.Tech in Computer Science. My primary Programming Language
        <span className="text-white font-medium"> Java</span>and Development technology
        <span className="text-white font-medium"> MERN stack</span> for full-stack web development.
        I love building interactive web apps, solving data structure problems, and continuously improving user experiences.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {["Java", "React", "Node.js", "Express", "MongoDB", "TailwindCSS"].map((tech) => (
          <motion.div
            key={tech}
            className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium shadow-sm"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default About;
