window.BENCHMARK_DATA = {
  "lastUpdate": 1620000573027,
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
        "date": 1620000571866,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 965.5278559350921,
            "unit": "iter/sec",
            "range": "stddev: 0.00013771289665248011",
            "extra": "mean: 1.0357028995621493 msec\nrounds: 458"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1362.5696790797958,
            "unit": "iter/sec",
            "range": "stddev: 0.0001381573388312137",
            "extra": "mean: 733.9074216559293 usec\nrounds: 1136"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9060.732008928957,
            "unit": "iter/sec",
            "range": "stddev: 0.00005062722657223946",
            "extra": "mean: 110.36635881235021 usec\nrounds: 1583"
          }
        ]
      }
    ]
  }
}