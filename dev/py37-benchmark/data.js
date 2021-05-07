window.BENCHMARK_DATA = {
  "lastUpdate": 1620405513480,
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
        "date": 1620405511910,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1156.3835083001761,
            "unit": "iter/sec",
            "range": "stddev: 0.00008188609001477643",
            "extra": "mean: 864.7650133561212 usec\nrounds: 599"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1706.662019952429,
            "unit": "iter/sec",
            "range": "stddev: 0.00007644414373928666",
            "extra": "mean: 585.9390953270722 usec\nrounds: 1584"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13419.039748015746,
            "unit": "iter/sec",
            "range": "stddev: 0.000013246108753502658",
            "extra": "mean: 74.52098054541261 usec\nrounds: 1799"
          }
        ]
      }
    ]
  }
}