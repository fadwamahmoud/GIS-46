/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
  const rows = image.length;
  const cols = image[0].length;
  const originalColor = image[sr][sc];

  if (originalColor === newColor) return image;

  const queue = [[sr, sc]];
  image[sr][sc] = newColor;
  //up    → (-1,0)
  // down  → (1,0)
  // left  → (0,-1)
  // right → (0,1)
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      const inBounds = nr >= 0 && nr < rows && nc >= 0 && nc < cols;

      if (inBounds && image[nr][nc] === originalColor) {
        image[nr][nc] = newColor;
        queue.push([nr, nc]);
      }
    }
  }

  return image;
}
