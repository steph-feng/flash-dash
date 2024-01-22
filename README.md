# flash dash @ nwHacks 2024
## Inspiration
Have you ever studied for an exam last minute? Got frustrated with hand making individual flash cards? We have the solution for you!

## What it does
Upload a pdf of your notes and flash dash will generate the flash cards for you. Create a profile to store all your decks. Revisit them any time you're studying.

## How we built it 
Tools that we used: Next.js, Node.js, MongoDB, Auth0, OpenAI API, pdfcrowd API
Our project is a Next.js app. User authentication is supported by Auth0. PDF upload and parsing is supported by pdfcrowd. The parsed text from the PDF is passed into a prompt to OpenAI. The returned JSON object is stored in the MongoDB database and displayed on our webpage.

## Accomplishments that we're proud of
For many of the tools that we used, it was our first time learning how to use them. We ran into many bugs throughout the night, but persevered through. We are proud of how much we have learned and how we have improved as developers. 

## What's next for flash dash
As we continue to improve upon our app, there are many features we wish to implement. Allowing users to interact with eachother, viewing and sharing eachothers' decks is one of them. Adding text-to-speech feature to support accessibility is another. **Our passion to support learning is never ending!**
