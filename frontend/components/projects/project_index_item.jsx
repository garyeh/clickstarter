import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';

const ProjectIndexItem = ({ project }) => {
  const percentRaised = Math.floor(project.raised / project.funding_goal * 100);
  const raised = project.raised ? numberWithCommas(project.raised) : 0;
  const endDate = new Date(project.end_date);
  const currentDate = new Date();
  const remaining = numberWithCommas(Math.ceil((endDate - currentDate) / 86400000));
  const percentWithCap = Math.min(percentRaised, 100);
  const description = project.description ? project.description : "";
  const truncated = (project.title + description).length < 130 ?
    description : description.slice(0, 130 - project.title.length) + "...";

  return (
    <li className="indexItem">
      <p>
        <Link to={`/projects/${project.id}`}>
          <img src={project.main_image_url} />
        </Link>
      </p>
      <div className="indexDetail">
        <p>
          {project.category}
        </p>
        <p>
          <Link to={`/projects/${project.id}`}>
            {`${project.title}:`}
          </Link>
          <span id="indexDetailText">
            {` ${truncated}`}
          </span>
        </p>
        <p>
          {`by ${project.creator}`}
        </p>
      </div>
      <div className="indexStats">
        <Line percent={percentWithCap}
          strokeWidth="2" strokeColor="#2BDE73"
          trailColor="#e6e6e6" trailWidth="2" />
        <p><span>{`$${raised} `}</span><span>pledged</span></p>
        <p><span>{`${percentRaised}% `}</span><span>funded</span></p>
        <p><span>{`${remaining} `}</span><span>days to go</span></p>
      </div>
    </li>
  );
};

const numberWithCommas = (x) => (
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
);

export default ProjectIndexItem;
