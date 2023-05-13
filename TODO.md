1. Onboarding Generate Lesson Flow and Show Them Around the App
2. Ensure Stripe Payment Flow works and all webhooks are connected successfully
3. [Open Graph for Lesson Plans and Curriculum](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)
4. Take OG Image Screenshots and add to [default metatdata](src/lib/meta/defaultMetadata.ts) (1200x630)
5. [global-error.tsx](src/app/global-error.tsx)
6. [not-found.tsx](src/app/not-found.tsx)
7. [loading.tsx](src/app/loading.tsx)
8. Swap domains on Vercel
9. Payment Thank You Page or Modal
10. Social Login's?
11. Notification/Email 3 days before trial ends about all the features they will lose when their account is downgraded. Message them again on the day of. Give them incentive that if they upgrade before the trial ends (put in credit card), they will get 50% off for the first 3 months.
12. Write App Users Email Automation Sequence (how to get the most out of learnly, connect with community, success stories, ect.)
13. Search bar in the header should fuzzy load any lesson_plan or curriculum that matches the search query. If there is only one result, take them to that page. If there are multiple results, take them to the search page with the results.
