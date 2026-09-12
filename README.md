# Healthcare Load Tests — k6 Performance Testing

![k6](https://img.shields.io/badge/k6-Load%20Testing-7D64FF?logo=k6&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)

Performance and load testing scripts for a healthcare provider platform using **[k6](https://k6.io)** — an open-source load testing tool for APIs and web services.

## Scripts

| File | Description |
|---|---|
| `Bupa_medico.js` | Load simulation for the physician portal — ramps to 20,000 VUs over 8 minutes with graceful ramp-down |
| `Bupa_paciente.js` | Load simulation for the patient portal with concurrent user scenarios |

## Load Profile (`Bupa_medico.js`)

```javascript
scenarios: {
  Scenario_1: {
    executor: 'ramping-vus',
    stages: [{ target: 20000, duration: '8m' }],
    gracefulStop: '60s',
    gracefulRampDown: '5m',
  }
}
```

- **Peak load**: 20,000 virtual users
- **Ramp duration**: 8 minutes
- **Graceful stop**: 60 seconds for in-flight requests to complete

## Getting Started

### Prerequisites
- [k6](https://k6.io/docs/getting-started/installation/) installed

### Run a Load Test

```bash
# Run physician portal test
k6 run Bupa_medico.js

# Run patient portal test
k6 run Bupa_paciente.js

# Run with custom VU count
k6 run --vus 100 --duration 30s Bupa_medico.js
```

### Output Metrics

k6 reports key metrics after each run:
- `http_req_duration` — request latency (p50, p90, p95, p99)
- `http_req_failed` — error rate
- `iterations` — total scenario executions
- `vus` — concurrent virtual users

## License

MIT
