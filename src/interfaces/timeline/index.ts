import { TaskInterface } from 'interfaces/task';
import { GetQueryInterface } from 'interfaces';

export interface TimelineInterface {
  id?: string;
  start_date: any;
  end_date: any;
  task_id?: string;
  created_at?: any;
  updated_at?: any;

  task?: TaskInterface;
  _count?: {};
}

export interface TimelineGetQueryInterface extends GetQueryInterface {
  id?: string;
  task_id?: string;
}
