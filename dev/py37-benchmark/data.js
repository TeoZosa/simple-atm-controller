window.BENCHMARK_DATA = {
  "lastUpdate": 1620000598581,
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
        "date": 1620000594402,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 900.5080583909886,
            "unit": "iter/sec",
            "range": "stddev: 0.00018193112441359548",
            "extra": "mean: 1.110484232408516 msec\nrounds: 469"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1223.4294320741876,
            "unit": "iter/sec",
            "range": "stddev: 0.0001608197811853673",
            "extra": "mean: 817.3744833852918 usec\nrounds: 1264"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7877.583708776503,
            "unit": "iter/sec",
            "range": "stddev: 0.00004569196096324878",
            "extra": "mean: 126.942478425953 usec\nrounds: 1576"
          }
        ]
      }
    ]
  }
}