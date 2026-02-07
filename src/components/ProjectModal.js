import "./ProjectModalStyles.css";

const ProjectModal = ({ project, close }) => {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={close}>
      <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
        <img src={project.image} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {project.link && (
  <a 
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="btn"
  >
    View IEEE Paper
  </a>
)}
        <button className="btn" onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default ProjectModal;
