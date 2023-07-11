import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { dashboardValidationSchema } from 'validationSchema/dashboards';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.dashboard
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getDashboardById();
    case 'PUT':
      return updateDashboardById();
    case 'DELETE':
      return deleteDashboardById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getDashboardById() {
    const data = await prisma.dashboard.findFirst(convertQueryToPrismaUtil(req.query, 'dashboard'));
    return res.status(200).json(data);
  }

  async function updateDashboardById() {
    await dashboardValidationSchema.validate(req.body);
    const data = await prisma.dashboard.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteDashboardById() {
    const data = await prisma.dashboard.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
