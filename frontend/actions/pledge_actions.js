import * as APIUtil from '../util/pledge_api_util';

export const RECEIVE_PLEDGE = 'RECEIVE_PLEDGE';
export const RECEIVE_PLEDGE_ERRORS = 'RECEIVE_PLEDGE_ERRORS';

export const receivePledge = pledge => ({
  type: RECEIVE_PLEDGE,
  pledge
});

export const receivePledgeErrors = errors => ({
  type: RECEIVE_PLEDGE_ERRORS,
  errors
});

export const createPledge = pledge => dispatch => (
  APIUtil.createPledge(pledge)
    .then(res => {
      dispatch(receivePledge(res));
      return res;
    }).fail(err => dispatch(receivePledgeErrors(err.responseJSON)))
);
