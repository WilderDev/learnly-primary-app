// * Handle actions
// Handle Share Lesson Plan
export const handleShare = (pathname: string) => {
  // const url = baseUrl + pathname; // Get current url
  const url =
    'https://app.learnly.ai/lesson-plans/0050378e-ba47-44e0-808b-a4982c65306b';
  const fbShareUrl = `https://www.facebook.com/share.php?u=${url}`; // Create facebook share url

  window.open(fbShareUrl, '_blank'); // Open facebook share url in new tab
};

// Handle Print Lesson Plan
export const handlePrint = () => window.print(); // Print current page
