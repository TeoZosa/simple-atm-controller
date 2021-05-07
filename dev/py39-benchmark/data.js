window.BENCHMARK_DATA = {
  "lastUpdate": 1620405538571,
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
          "id": "2ff66d2558ead4c60c283ee58eb9838b55ffb4f6",
          "message": ":construction_worker: Fetch upstream template updates\n\nMaking `cruft` pre-commit hook log-only.",
          "timestamp": "2021-05-07T09:34:31-07:00",
          "tree_id": "acd68a7bfc438357089c781d9e9e813b22bccdf9",
          "url": "https://github.com/TeoZosa/simple-atm-controller/commit/2ff66d2558ead4c60c283ee58eb9838b55ffb4f6"
        },
        "date": 1620405537269,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 967.4275221556451,
            "unit": "iter/sec",
            "range": "stddev: 0.0003293998128782029",
            "extra": "mean: 1.033669166008195 msec\nrounds: 506"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1398.7848815510697,
            "unit": "iter/sec",
            "range": "stddev: 0.00013389512741165458",
            "extra": "mean: 714.9062112332317 usec\nrounds: 1264"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9446.80332800044,
            "unit": "iter/sec",
            "range": "stddev: 0.000041886708179251886",
            "extra": "mean: 105.85591392974042 usec\nrounds: 1766"
          }
        ]
      }
    ]
  }
}