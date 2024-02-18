import { google } from 'googleapis'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code') as string

  const client = new google.auth.OAuth2({
    clientId: process.env.GOOGLE_PROJECT_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_PROJECT_CLIENT_SECRET!,
    redirectUri: 'postmessage' // !THIS IS VERY IMPORTANT
  })

  const { tokens } = await client.getToken(code)
  client.setCredentials(tokens)

  console.log(tokens)

  const bigquery = google.bigquery({ version: 'v2', auth: client })

  const job = await bigquery.jobs.query({
    projectId: process.env.GOOGLE_PROJECT_PROJECT_ID,
    requestBody: {
      location: 'europe-west3',
      query: `SELECT spalte FROM [${process.env.GOOGLE_PROJECT_PROJECT_ID}.egal.auchEgal]`
    }
  })

  console.log(job.data.rows)
  return new Response('Hello world!')
}
