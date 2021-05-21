# Lectern

An online learning platform which leverages blockchain/crypto technologies to provide an egalitarian tutoring service. Knowledge shouldn't be bound by banks and borders. We are opening up education.

## Inspiration

As a student, it's impossible to ignore the impact Covid-19 had, and continues to have, on the learning experience. Most of us are learning from home, and for many, home is very far from school. Further, the pandemic has made it even more difficult for less fortunate pupils to access teachers and verify their educations to prospective employers and academic institutions.

Even when the Covid crisis dies down, it is clear to see that our world has accelerated toward hybrid---or even online-first---systems. With this comes a need for fair, borderless, secure software.

We're starting to crack these issues with **lectern**.

## What it does

**lectern** is a web app which is building the foundation for a decentralized token which will power education going forward. **lectern** is service which connects students and tutors around the world for virtual lessons (these can be one-on-one or group). What sets us apart is that the app is designed to be used with **KnowledgeCredits (KCR)**, our crypto token. Tutors are paid in **KCR** which erases borders from learning. Your local currency is no longer a hurdle in the way of getting an education.

Simply sign-in as a student to view and filter classes and click one. You'll see a meeting link and see a button to start your session when your tutor shows up.

As a tutor, you can create classes in different subjects and have they displayed to students around the world. You'll receive an email (courtesy of Courier) notifying you when a student joins your session!

We also have the ability, therefore, to donate a considerable amount of educational resources to children who need it (and not just in North America). By donating **KCR** to students, we can pay tutors while providing free education.

## How we built it

**lectern** is a React/NextJS app on the frontend with the centralized functionality built with Firebase. We use firebase for many things, including auth, realtime data, cloud functions, and firestore.

We use courier to send beautiful email notifications to tutors.

We used domain.com to register [lectern.tech](http://lectern.tech)

## What we learned

We wrote our first smartcontracts on the blockchain which proved difficult but learning blockchain is great considering its growing prominence in tech. We learned a lot about serverless architecture and authentication, as well as state management.

## What's next for lectern

We want to expand lectern to add more tools for students and teachers. By using **KCR** we can verify degrees and coursework so students from across the globe can have their work recognized by international employers when working remote. We would also like to add more ergonomic features to polish up the app. Finally, we want to deploy our coin onto the real ethereum network. Unfortunately, the price to put our coin on the real ethereum network proved too high for now. So, we released a non-blockchain demo.





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
