1. Signing up with an email that has numbers fails
2. Fix Print on lesson plan [id] page and curriclum [lessonId] pages
3. Onboarding Generate Lesson Flow and Show Them Around the App
4. Mark Lesson plan as complete (change status and completion_date)
5. Ensure Stripe Payment Flow works and all webhooks are connected successfully
6. Curriculum Roadmap Next Lesson Buttons and View/Function in DB
7. Fix Double Print on Lesson Creator Modal
8. Get own images for curriculum and input seed data into database (be sure to change the id of the main user)
9. Bottom Right Chat Bubble (Almost everything is there already) -> If we are on a lesson page, change the lesson context.
10. Purchase Supabase $25/mo plan and configure the email and auth settings for credibility
11. When you hover over the <Avatar /> component, it should have a tooltip pop up that says their name
12. [Open Graph for Lesson Plans and Curriculum](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)
13. Take OG Image Screenshots and add to [default metatdata](src/lib/meta/defaultMetadata.ts) (1200x630)
14. [global-error.tsx](src/app/global-error.tsx)
15. [not-found.tsx](src/app/not-found.tsx)
16. Swap domains on Vercel
17. Payment Thank You Page or Modal or Email
18. Social Login's?
19. Notification/Email 3 days before trial ends about all the features they will lose when their account is downgraded. Message them again on the day of. Give them incentive that if they upgrade before the trial ends (put in credit card), they will get 50% off for the first 3 months.
20. Write App Users Email Automation Sequence (how to get the most out of learnly, connect with community, success stories, ect.)
21. Search bar in the header should fuzzy load any lesson_plan or curriculum that matches the search query. If there is only one result, take them to that page. If there are multiple results, take them to the search page with the results.
22. User's can change the title and image of a lesson plan they have created
23. Page transition from lesson plan modal to lesson plan page
24. Fix Facebook Open Graph Image on Lesson Plans and test
25. help-center/faq page
26. Marketing Partners page where we show all the companies we are partnered with and the deals and put in footer
27. Users can create their own lessons, topics, subjects, and curriculum
28. Lesson Creator Info Bubbles for Philosphy, Standards, and Objectives, etc.
29. DMARC & SPF Records
30. Stripe Hooks and Handlers for payments that don't go through or need actions
31. [Stripe Elements to add credit card inside dashboard](https://stripe.com/docs/payments/payment-element)
32. We might need to move all revalidate tags to the data.ok success case instead of in the \_actions.ts
