export function getJobStatus(publishedAt, deadline) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const publish = new Date(publishedAt);
  publish.setHours(0, 0, 0, 0);

  const end = new Date(deadline);
  end.setHours(0, 0, 0, 0);

  // Offre non encore publiée
  if (today < publish) {
    return "coming";
  }

  const diff = Math.ceil(
    (end - today) / (1000 * 60 * 60 * 24)
  );

  // Offre expirée
  if (diff < 0) {
    return "closed";
  }

  // Il reste 3 jours ou moins
  if (diff <= 3) {
    return "expiring";
  }

  return "open";
}

export function daysRemaining(deadline) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const end = new Date(deadline);
  end.setHours(0, 0, 0, 0);

  return Math.max(
    0,
    Math.ceil((end - today) / (1000 * 60 * 60 * 24))
  );
}