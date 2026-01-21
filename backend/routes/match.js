import fs from 'fs';

const jobs = JSON.parse(
  fs.readFileSync(new URL('../data/jobs.json', import.meta.url))
);

export default async function matchRoute(fastify) {
  fastify.post('/match', async () => {
    return jobs.map(job => ({
      ...job,
      matchScore: 70,
      reasons: job.skills
    }));
  });
}
