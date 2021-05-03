window.BENCHMARK_DATA = {
  "lastUpdate": 1620000588257,
  "repoUrl": "https://github.com/TeoZosa/simple-atm-controller",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "e398c6ed3a597ffae731376ab9cf388962b805f5",
          "message": ":sparkles: Add template boilerplate",
          "timestamp": "2021-05-02T17:05:05-07:00",
          "tree_id": "e0b6092f93f68b2204e62dabaaed4eafad415ef9",
          "url": "https://github.com/TeoZosa/simple-atm-controller/commit/e398c6ed3a597ffae731376ab9cf388962b805f5"
        },
        "date": 1620000587080,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1083.434018286496,
            "unit": "iter/sec",
            "range": "stddev: 0.000018134279156477976",
            "extra": "mean: 922.9911403202468 usec\nrounds: 563"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1584.4442564494218,
            "unit": "iter/sec",
            "range": "stddev: 0.00001810918699454686",
            "extra": "mean: 631.1361197653606 usec\nrounds: 1361"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10865.115862020573,
            "unit": "iter/sec",
            "range": "stddev: 0.00007759841870515297",
            "extra": "mean: 92.03767476567259 usec\nrounds: 1811"
          }
        ]
      }
    ]
  }
}