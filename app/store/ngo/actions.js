/*
 *
 * Ngo actions
 *
 */

import {
  SUBMIT_NEW_NGO,
  SET_NGOS,
  FETCH_NGOS,
  SET_INVIEW_NGO,
  FETCH_NGO_BY_ID,
  UPDATE_NGO_BY_ID,
  EDIT_NGO,
  CREATE_NGO,
  DELETE_NGO,
} from './constants';

export function submitNewNgo(values, actions) {
  return {
    type: SUBMIT_NEW_NGO,
    values,
    actions,
  };
}

export function fetchNgos(state = 'All') {
  return {
    type: FETCH_NGOS,
    selectedState: state,
  };
}

export function createNgo() {
  return {
    type: CREATE_NGO,
  };
}

export function fetchNgoById(ngoId) {
  console.log('fetchNgoById', ngoId);
  return {
    type: FETCH_NGO_BY_ID,
    ngoId,
  };
}

export function setNgos(ngos) {
  return {
    type: SET_NGOS,
    ngos,
  };
}

export function setInViewNgo(ngo) {
  return {
    type: SET_INVIEW_NGO,
    ngo,
  };
}

export function updateNgo(ngo) {
  return {
    type: UPDATE_NGO_BY_ID,
    ngo,
  };
}

export function editNgo(ngo) {
  return {
    type: EDIT_NGO,
    ngo,
  };
}

export function deleteNgo(ngoId) {
  return {
    type: DELETE_NGO,
    ngoId,
  };
}
