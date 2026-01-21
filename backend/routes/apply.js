let applications = [];

export default async function applyRoute(fastify) {
  fastify.post('/apply', async (req) => {
    const { jobId, status } = req.body;

    applications.push({
      jobId,
      status,
      date: new Date()
    });

    return { message: 'Application saved' };
  });

  fastify.get('/applications', async () => {
    return applications;
  });
}
