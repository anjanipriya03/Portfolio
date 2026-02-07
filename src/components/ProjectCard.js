import "./ProjectCardStyles.css";

const ProjectCard = ({ image, title, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={image} alt={title} />
      <div className="project-overlay">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
