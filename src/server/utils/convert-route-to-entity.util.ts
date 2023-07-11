const mapping: Record<string, string> = {
  dashboards: 'dashboard',
  organizations: 'organization',
  tasks: 'task',
  timelines: 'timeline',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
