import { TimelineInterface } from 'interfaces/timeline';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  status: string;
  user_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  timeline?: TimelineInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    timeline?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  user_id?: string;
  organization_id?: string;
}
