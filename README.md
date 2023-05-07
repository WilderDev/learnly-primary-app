# Learnly App Frontend

## Getting Started

### Tools

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Git](https://git-scm.com/downloads)
- [VSCode](https://code.visualstudio.com/download)
- [Docker](https://www.docker.com/products/docker-desktop)

### Configuration

1. Clone the repository
2. Install dependencies

```bash
yarn
```

1. Link your local repository to vercel

```bash
vercel link
```

4. Pull down the environment variables from vercel

```bash
yarn env
```

5. Start Supabase Locally

```bash
yarn db:start
```

6. Start the app

```bash
yarn dev
```

## Feature Flow

1. Checkout Staging Branch
2. Pull down any changes
3. Create or Find a Feature/Issue to work on in [Linear](https://linear.app/learnly/my-issues/assigned)
4. Copy the Linear branch name (`CMD + K` and type "branch" to copy)
5. Checkout a new branch with the Linear branch name `git checkout -b <linear-branch-name>`
6. Make your changes (commit often and if you change the DB Schema, run `yarn db:push` and `yarn db:reset` to apply them)
7. Push your changes to the remote branch `git push origin <linear-branch-name>`
8. Create a pull request on Github
9. Ensure someone checks your work and approves it

- _NOTE_: Ensure the stripe webhooks is running when creating accounts locally
- _NOTE_: After every features, make sure to run `yarn db:push` and `yarn db:reset` to update the database and add a seed script to the database for future use
