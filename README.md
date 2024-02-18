# Anleitung der Google Anmeldung bis zur BigQuery abfrage

1. `npm run dev`
2. http://localhost:3000/login besuchen
3. Auf Login klicken

Achtung: Die .env-Datei ist aus sicherheitsgründen nicht dabei. Hier müssen diese 3 Variblen abgelegt werden:
GOOGLE_PROJECT_PROJECT_ID=entweder json datei oder google cloud console schauen
GOOGLE_PROJECT_CLIENT_ID=aus der Json datei
GOOGLE_PROJECT_CLIENT_SECRET=aus der Json datei

Benötigte npm Packages:
`npm install @react-oauth/google googleapis`
