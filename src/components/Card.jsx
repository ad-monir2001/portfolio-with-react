import { Github, Globe, Sparkles } from 'lucide-react';

const Card = ({ project }) => {
  return (
    <div className="card w-full max-w-2xl bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="relative h-48 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      <div className="card-body p-6">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-2xl font-heading">{project.name}</h2>
          <div className="flex gap-3">
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm btn-circle"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm btn-circle"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4 mt-4">
          <div className="collapse-title p-0">
            <p className="text-base-content/70 font-body">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technology.map((tech, index) => (
              <span key={index} className="badge badge-primary badge-outline">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-start gap-2">
            <Sparkles className="w-5 h-5 text-warning mt-1 flex-shrink-0" />
            <p className="text-base-content/70 text-sm">
              <span className="font-medium">To Improve: </span>
              {project.to_improve}
            </p>
          </div>
        </div>
      </div>

      <div className="card-actions p-6 pt-0">
        <progress
          className="progress text-green-500 w-full"
          value="85"
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default Card;
