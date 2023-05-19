1. Mobile Sign Up Flow
2. Onboarding Generate Lesson Flow and Show Them Around the App
3. Mark Lesson plan as complete (change status and completion_date)
4. Ensure Stripe Payment Flow works and all webhooks are connected successfully
5. Mobile Navbar and Responsivness testing
6. Fix Double Print on Lesson Creator Modal
7. Get own images for curriculum and input seed data into database (be sure to change the id of the main user)
8. Bottom Right Chat Bubble (Almost everything is there already) -> If we are on a lesson page, change the lesson context.
9. Purchase Supabase $25/mo plan and configure the email and auth settings for credibility
10. When you hover over the <Avatar /> component, it should have a tooltip pop up that says their name
11. [Open Graph for Lesson Plans and Curriculum](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)
12. Take OG Image Screenshots and add to [default metatdata](src/lib/meta/defaultMetadata.ts) (1200x630)
13. [global-error.tsx](src/app/global-error.tsx)
14. [not-found.tsx](src/app/not-found.tsx)
15. [loading.tsx](src/app/loading.tsx)
16. Swap domains on Vercel
17. Payment Thank You Page or Modal
18. Social Login's?
19. Notification/Email 3 days before trial ends about all the features they will lose when their account is downgraded. Message them again on the day of. Give them incentive that if they upgrade before the trial ends (put in credit card), they will get 50% off for the first 3 months.
20. Write App Users Email Automation Sequence (how to get the most out of learnly, connect with community, success stories, ect.)
21. Search bar in the header should fuzzy load any lesson_plan or curriculum that matches the search query. If there is only one result, take them to that page. If there are multiple results, take them to the search page with the results.
22. User's can change the title and image of a lesson plan they have created
23. Page transition from lesson plan modal to lesson plan page
24. Create own DatePicker...
25. I never figured out why students needed to be required for the lesson to not bug out... such an odd bug.
26. Fix Facebook Open Graph Image on Lesson Plans and test
27. help-center/faq page
28. Users can create their own lessons, topics, subjects, and curriculum
29. Lesson Creator Info Bubbles for Philosphy, Standards, and Objectives, etc.

    ```tsx
    <a
      className="group flex h-4 w-4 items-center justify-center space-x-8 rounded-lg bg-navy-50/10 text-navy-300/90 outline-none transition-colors duration-200 hocus:bg-navy-200/20 dark:bg-navy-800 dark:text-navy-100 dark:hocus:bg-navy-500"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {/* Icon */}
      <InformationCircleIcon className="h-3 w-3" />

      {/* Tooltip */}
      <Tooltip content={text} className="hidden sm:block" />
    </a>
    ```
