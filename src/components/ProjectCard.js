import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, proj, repo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <ul class="actions special">
				<li><a href={proj} class="button" target="_blank">Visit Project</a></li>
				<li><a href={repo} class="button" target="_blank">Visit Repo</a></li>
			</ul>
    </Col>
  )
}