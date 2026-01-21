let resumeText = '';

export default async function resumeRoute(fastify) {
  fastify.post('/resume', async (req) => {
    const { text } = req.body;
    resumeText = text;
    return { message: 'Resume saved' };
  });

  fastify.get('/resume', async () => {
    return { resumeText };
  });
}
