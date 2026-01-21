export async function getMatchScore(resumeText, job) {
  let score = 50;

  job.skills.forEach(skill => {
    if (resumeText.toLowerCase().includes(skill.toLowerCase())) {
      score += 10;
    }
  });

  return {
    score: Math.min(score, 100),
    reasons: job.skills.slice(0, 2)
  };
}
