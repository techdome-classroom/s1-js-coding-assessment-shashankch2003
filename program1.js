const getTotalIsles = function (grid) {
if (!grid || grid.length === 0) return 0;

let numIslands = 0;

// Helper function to perform DFS to mark connected land as visited
const dfs = (grid, i, j) => {
  // Boundary and water check
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === "W") {
    return;
  }

  // Mark the current cell as visited by setting it to "W"
  grid[i][j] = "W";

  // Recursively visit all neighboring cells (up, down, left, right)
  dfs(grid, i - 1, j); // up
  dfs(grid, i + 1, j); // down
  dfs(grid, i, j - 1); // left
  dfs(grid, i, j + 1); // right
};

// Iterate through each cell in the grid
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[0].length; j++) {
    // If we find land, it’s a new island
    if (grid[i][j] === "L") {
      numIslands++;
      dfs(grid, i, j); // Mark all connected land as visited
    }
  }
}

return numIslands;
};


module.exports = getTotalIsles;