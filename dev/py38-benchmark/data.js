window.BENCHMARK_DATA = {
  "lastUpdate": 1620404417183,
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
          "id": "a2d0431f17efd415471ccfb8de3f798e154f7b9d",
          "message": ":wrench: Fast-forward template commit hash",
          "timestamp": "2021-05-07T09:16:01-07:00",
          "tree_id": "988aa8ef9699d0d0bc98d4fb774745a60a37130f",
          "url": "https://github.com/TeoZosa/simple-atm-controller/commit/a2d0431f17efd415471ccfb8de3f798e154f7b9d"
        },
        "date": 1620404414585,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1089.6050239995739,
            "unit": "iter/sec",
            "range": "stddev: 0.00002231038368437659",
            "extra": "mean: 917.7637565668851 usec\nrounds: 571"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1605.8247417012542,
            "unit": "iter/sec",
            "range": "stddev: 0.000017775346873089675",
            "extra": "mean: 622.7329633373147 usec\nrounds: 1364"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11945.164106193255,
            "unit": "iter/sec",
            "range": "stddev: 0.000007052019521156426",
            "extra": "mean: 83.71588628753341 usec\nrounds: 1583"
          }
        ]
      }
    ]
  }
}