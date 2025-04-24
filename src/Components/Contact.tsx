import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa'; // Added paper plane icon
import axios from 'axios';

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const URL= import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
  async function handleSubmit(e:any) {
    e.preventDefault();
    setIsSending(true); // Show sending animation

    try {
      const response = await axios.post(URL, formData);

      if (response.data.message?.toLowerCase().includes('success')) {
        setIsModalOpen(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSending(false); // Hide animation
    }
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-screen bg-gray-900 text-white px-4 py-12 flex flex-col justify-center items-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-gray-300 text-center max-w-xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Have a question, want to work together, or just say hello? Fill out the form below and I’ll get back to you soon!
      </motion.p>

      <motion.form
        className="w-full max-w-[500px] flex flex-col gap-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleInputChange}
          className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={handleInputChange}
          className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          onChange={handleInputChange}
          className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        ></textarea>

        <div className="flex justify-center items-center relative">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition duration-200 py-3 px-6 rounded font-semibold min-w-[140px] flex items-center justify-center gap-2"
            disabled={isSending}
          >
            {isSending ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                >
                  <FaPaperPlane className="animate-spin" />
                </motion.div>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </motion.form>

      {/* Success Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 text-white p-8 rounded-xl shadow-xl max-w-sm w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Thank you!</h3>
            <p className="text-gray-300 mb-6">Your message has been sent successfully.</p>
            <button
              onClick={closeModal}
              className="bg-purple-600 hover:bg-purple-700 py-2 px-6 rounded font-semibold"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://www.linkedin.com/in/mittapalli-praneeth-464ab8236"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-purple-600 transition duration-200"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://x.com/Praneeth3119?t=QT5M5K_h6XIZMtAV-TdEFg&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-purple-600 transition duration-200"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default Contact;
