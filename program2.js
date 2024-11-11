const decodeTheRing = function (s, p) {

    // write your code here

  };
  
module.exports = decodeTheRing;
  


const decodeTheRing = function (s, p) {
  const m = s.length;
  const n = p.length;

  // Initialize a 2D DP array with false values
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

  // Base case: empty pattern matches empty string
  dp[0][0] = true;

  // Handle patterns with '*' at the beginning
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1];
    }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
        // '*' matches any sequence: empty sequence or one more character
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      } else if (p[j - 1] === '?') {
        // '?' matches exactly one character
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Regular character match
        dp[i][j] = dp[i - 1][j - 1] && (s[i - 1] === p[j - 1]);
      }
    }
  }

  // The result is whether the entire pattern matches the entire message
  return dp[m][n];
};

module.exports = decodeTheRing;
