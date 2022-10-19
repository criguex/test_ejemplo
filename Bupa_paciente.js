// Scenario: Scenario_1 (executor: ramping-vus)

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  ext: {
    loadimpact: {
      distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
      apm: [],
    },
  },
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '3m',
      stages: [
       
        { target: 50000, duration: '5m' },
    
      ],
      gracefulRampDown: '3m',
      exec: 'scenario_1',
    },
  },
}
export function scenario_1() {
const pacienteurls = [
  '?key=VTJGc2RHVmtYMTk2YkFveFV2VDdsV1dkaTd1TmIrM200NEhoZ0xBeDA5NkhGaExNaHQ2SmN0NlFjNUpiQXdyUVk0ZkJxS0QzVnpVc3ZwS0F0d2ZuanAwUkt6NEJlZHFTZzhFT3ZRMnFRVXc9&mod=01&NEGO=ADN',
  '?key=VTJGc2RHVmtYMS9NZTFxajRseUJGMXVGcVBnZlhFenRMb0F5b1ErYUZ5YmJRSU1mWXhsY1NyV21zMzlyK2ozWGhzL1Z1K3ZjMXdnZGtqbUEzQjU4dllacTBZTEZNZldjeVhVdnppZVZXeTg9&mod=01&NEGO=ADN'
  ]

  pacienteurls.forEach(function(key) {
    console.log(key)

     let response1 = http.get(
        'https://videoconsultades.integramedica.cl/'+`${key}`,
        {
          headers: {
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'upgrade-insecure-requests': '1',
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'sec-fetch-site': 'none',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'es-ES,es;q=0.9',
          },
        }
      )
     console.log(response1.status)
     console.log(response2.error)
     console.warn(response3.status)
     console.error(response1)
    


      sleep(2.3)
      response2 = http.get(
        'https://videoconsultades.integramedica.cl/'+`${key}`,
        {
          headers: {
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
            accept: '*/*',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'es-ES,es;q=0.9',
          },
        }
      )
 
      sleep(30)
      response3 = http.get(
        'https://videoconsultades.integramedica.cl/notification?TMNID=0107464009&ACTION=OPEN_PATIENT&API_KEY=47395571&SESSION_ID=1_MX40NzM5NTU3MX5-MTY0ODY2ODUxNjg1NX5kT2NOcWorcThndW9YS3R6RXRsTkxaUDB-fg&CONNECTION_ID=3a9fe661-752e-4812-b8fa-b4c58d6418ac&ROLE=PATIENT&DR=Y3Jpc3RpYW4vMTExMS9wYWRyZQ==',
        {
          headers: {
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            accept: '*/*',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'es-ES,es;q=0.9',
          },
        }
      )
 });
}


