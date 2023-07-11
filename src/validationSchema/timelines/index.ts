import * as yup from 'yup';

export const timelineValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  task_id: yup.string().nullable(),
});
