import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';

import jobsRoute from './routes/jobs.js';
import resumeRoute from './routes/resume.js';
import matchRoute from './routes/match.js';
import applyRoute from './routes/apply.js';
import chatRoute from './routes/chat.js';

dotenv.config();

const fastify = Fastify({
  logger: true
});

// Enable CORS
await fastify.register(cors, {
  origin: true
});

// Health check
fastify.get('/', async () => {
  return { status: 'Backend is running 🚀' };
});

// Register routes
await fastify.register(jobsRoute);
await fastify.register(resumeRoute);
await fastify.register(matchRoute);
await fastify.register(applyRoute);
await fastify.register(chatRoute);

// Start server
const PORT = process.env.PORT || 3000;

fastify.listen({ port: PORT, host: '0.0.0.0' }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
