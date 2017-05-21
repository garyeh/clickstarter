import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT_DETAIL = 'RECEIVE_PROJECT_DETAIL';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveProjectDetail = project => ({
  type: RECEIVE_PROJECT_DETAIL,
  project
});

export const receiveProjectErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

export const fetchProjects = () => dispatch => (
  APIUtil.fetchProjects()
    .then(projects => dispatch(receiveProjects(projects)))
);

export const fetchProjectDetail = id => dispatch => (
  APIUtil.fetchProjectDetail(id)
    .then(project => dispatch(receiveProjectDetail(project)))
);

export const createProject = project => dispatch => (
  APIUtil.createProject(project)
    .then(res => {
      dispatch(receiveProjectDetail(res));
      return res;
    }).fail(err => dispatch(receiveProjectErrors(err.responseJSON)))
);
