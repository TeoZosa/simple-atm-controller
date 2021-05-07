window.BENCHMARK_DATA = {
  "lastUpdate": 1620405510289,
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
        "date": 1620405509011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1043.7837851777751,
            "unit": "iter/sec",
            "range": "stddev: 0.0001987999385734531",
            "extra": "mean: 958.0528210923318 usec\nrounds: 531"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1501.838547665422,
            "unit": "iter/sec",
            "range": "stddev: 0.00009729422266256774",
            "extra": "mean: 665.8505347026016 usec\nrounds: 1412"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8764.533265279302,
            "unit": "iter/sec",
            "range": "stddev: 0.000040325291662268424",
            "extra": "mean: 114.09620680675603 usec\nrounds: 1557"
          }
        ]
      }
    ]
  }
}