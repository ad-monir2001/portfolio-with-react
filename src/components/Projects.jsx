import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Car Rent Service',
      image: '/rent_car.png',
      isNew: false,
    },
    {
      id: 2,
      title: 'Game Reviews',
      image: '/chillgamer.png',
      isNew: false,
    },
    {
      id: 3,
      title: 'Coupon Collector',
      image: '/coupon.png',
      isNew: false,
    },
    {
      id: 4,
      title: 'EduFusion',
      image: '/edufusion.png',
      isNew: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };
  return (
    <section className="min-h-screen bg-gray-900 py-16 px-4 " id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-white font-bold text-3xl md:text-4xl text-center italic mb-12"
        >
          <span className="border-b-2 border-[#00adb5] pb-2">Projects</span>
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="relative bg-gradient-to-br from-white to-gray-100 rounded-xl p-6 group"
            >
              {project.isNew && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-3 right-3 border rounded-lg px-3 py-1 text-red-500 bg-red-200 font-heading font-semibold text-sm"
                >
                  New
                </motion.span>
              )}

              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 blur" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <h3 className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
                {project.title}
              </h3>

              <Link
                to={`details/${project.id}`}
                className="inline-block w-full text-center rounded-lg px-4 py-2 bg-[#00adb5] text-white font-semibold transition-colors duration-300 hover:bg-[#009aa1] text-sm md:text-base"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
