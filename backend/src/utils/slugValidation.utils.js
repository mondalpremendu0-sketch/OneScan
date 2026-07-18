function sanitizeSlug(raw) {
  return raw
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-'); // turn spaces into hyphens before validating
}

module.exports = sanitizeSlug;