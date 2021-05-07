window.BENCHMARK_DATA = {
  "lastUpdate": 1620404426643,
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
        "date": 1620404425846,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1009.7472542374209,
            "unit": "iter/sec",
            "range": "stddev: 0.00014329737067697346",
            "extra": "mean: 990.3468375907769 usec\nrounds: 548"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1437.6823079654944,
            "unit": "iter/sec",
            "range": "stddev: 0.00011934184506205147",
            "extra": "mean: 695.5639604518252 usec\nrounds: 1062"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9326.35842699381,
            "unit": "iter/sec",
            "range": "stddev: 0.00002895173573716623",
            "extra": "mean: 107.22298610201847 usec\nrounds: 1511"
          }
        ]
      }
    ]
  }
}