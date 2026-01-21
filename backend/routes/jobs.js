import fs from 'fs';

const jobs = JSON.parse(
  fs.readFileSync(new URL('../data/jobs.json', import.meta.url))
);

export default async function jobsRoute(fastify) {
  fastify.get('/jobs', async () => {
    return jobs;
  });
}
