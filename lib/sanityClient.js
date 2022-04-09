import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'muhh8m3k',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skZhoTcuCcqPX7M9H0V7SCDEpLY7xS4E9X6A9cCU26mmr4PqGMxXp9QJMuSDcswwr8QOSpTiZoY66B8IEXww0eQkHDY6NTtuZaeU9vDzQ7BW5auhbZZzO908Ud0NCmHiMeSOSISLL8YEw31NJ0Gh5WJ4S39SucZtwgo73yUu1LwyT8daBvwZ',
  useCdn: false,
})