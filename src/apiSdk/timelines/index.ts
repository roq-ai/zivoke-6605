import axios from 'axios';
import queryString from 'query-string';
import { TimelineInterface, TimelineGetQueryInterface } from 'interfaces/timeline';
import { GetQueryInterface } from '../../interfaces';

export const getTimelines = async (query?: TimelineGetQueryInterface) => {
  const response = await axios.get(`/api/timelines${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createTimeline = async (timeline: TimelineInterface) => {
  const response = await axios.post('/api/timelines', timeline);
  return response.data;
};

export const updateTimelineById = async (id: string, timeline: TimelineInterface) => {
  const response = await axios.put(`/api/timelines/${id}`, timeline);
  return response.data;
};

export const getTimelineById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/timelines/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTimelineById = async (id: string) => {
  const response = await axios.delete(`/api/timelines/${id}`);
  return response.data;
};
