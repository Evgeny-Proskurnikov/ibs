import DO_SMTHN from "../constants/constants"

export const doSmth = (data) => {
  return { type: DO_SMTHN, payload: data }
};
