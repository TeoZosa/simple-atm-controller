window.BENCHMARK_DATA = {
  "lastUpdate": 1620404389186,
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
        "date": 1620404388423,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1237.4951702834717,
            "unit": "iter/sec",
            "range": "stddev: 0.000014599830761138442",
            "extra": "mean: 808.0839618718925 usec\nrounds: 577"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1739.6380757606657,
            "unit": "iter/sec",
            "range": "stddev: 0.000021226594876224645",
            "extra": "mean: 574.8322101783987 usec\nrounds: 1513"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13453.726159267662,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048939065496159",
            "extra": "mean: 74.32885047323082 usec\nrounds: 1906"
          }
        ]
      }
    ]
  }
}