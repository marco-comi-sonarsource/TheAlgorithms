module.exports = {
  merge: for_in_merge
}

function for_in_merge(dst, src) {
  for (let key in src) {
    if (dst[key]) {
      for_in_merge(dst[key], src[key]);
    } else {
      dst[key] = src[key]; // Sensitive
    }
  }
}
