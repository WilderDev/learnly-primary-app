import baseUrl from '@/lib/common/baseUrl';

// * Handle actions
// Handle Share Lesson Plan
export const handleShare = (pathname: string) => {
  const url = baseUrl + pathname; // Get current url
  const fbShareUrl = `https://www.facebook.com/share.php?u=${url}`; // Create facebook share url

  window.open(fbShareUrl, '_blank'); // Open facebook share url in new tab
};

// Handle Print Lesson Plan
export const handlePrint = () => window.print(); // Print current page

// Handle Refresh Lesson Plan
export const handleRefresh = () => {};

// Handle Save Lesson Plan
export const handleSave = () => {};
