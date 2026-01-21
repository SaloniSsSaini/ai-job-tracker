export default async function chatRoute(fastify) {
  fastify.post('/chat', async (req) => {
    const { message } = req.body;

    // Fake AI response (acceptable)
    return {
      filters: {
        skills: ['React'],
        workMode: 'Remote'
      },
      explanation: 'These jobs match your React skills and remote preference'
    };
  });
}
