This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

README

I started off figuring out what a solar quote calculator is and gathered inspiration looking for similar applications. I realized that I will need to make some assumptions. Due to the time limit, I will not take into account what direction the solar panel is facing, geographical location or season and I will not handle the cases where production exceeds consumption. You can't sell electricity to the grid.

Assumptions:
Electricity cost 1 SEK per kWh.
A solar panel produces 350 kWh/year.
Swedish grid emits 0.4 kg CO2 per kWh.

I will have a structure of the application's comoponents like this:

Calculator
-ProgressIndicator
-Steps(electricity bill, roof size, results, lead, sucess)
-Navigation

I will use react-hook-form for validating the user data, and my own simple validation for completing the steps.

In retrospect:
-I would have liked to validate the steps in a cleaner way, using react-hook-form.
-I should have handled nullcheck better. a reusable function or component, or if I managed to use react-hook-form for that. The submitfunction could validate the data.
-I got some help from ai to do calculations on savings and co2 reduction.
-I wish the mobile design for the progressIndicator was cleaner. It's always diffuclt with a progress bar in mobile, but scrollable on the x angle, to fit more padding between the list items could be one solution.
-I wanted to make the list items in the progressIndicator clickable.
-if I had time I would analyse the Performance and accessability more and I would write tests.
-I wanted to do more accurate validation for email and phone.
-I moved the step logic to a useContext and got rid of a lot of prop shuffling. Nice.
-Wanted to add a nvmrc file to handle node version. Needs to be v19+

-I think over all, this took me around 8-10 hours of development and some time for research

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
