export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL_2 = 'OPEN_MODAL_2';
export const CLOSE_MODAL_2 = 'CLOSE_MODAL_2';

export const openModal = (modal) => {
  return {
    type: OPEN_MODAL,
    modal,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
export const openModal2 = (modal2) => {
  return {
    type: OPEN_MODAL_2,
    modal2,
  };
};

export const closeModal2 = () => {
  return {
    type: CLOSE_MODAL_2,
  };
};
