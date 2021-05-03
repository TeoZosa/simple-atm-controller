window.BENCHMARK_DATA = {
  "lastUpdate": 1620000983505,
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
          "id": "907c67c93ea9b63ba36e834d54e0c0686946aba9",
          "message": ":green_heart: Dummy commit to fix CI",
          "timestamp": "2021-05-02T17:09:00-07:00",
          "tree_id": "c35a9486441fc3ad1f3837667fec648dea652cfa",
          "url": "https://github.com/TeoZosa/simple-atm-controller/commit/907c67c93ea9b63ba36e834d54e0c0686946aba9"
        },
        "date": 1620000982199,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 949.8701255619166,
            "unit": "iter/sec",
            "range": "stddev: 0.00021070306624590616",
            "extra": "mean: 1.0527755038178803 msec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1304.9810217936445,
            "unit": "iter/sec",
            "range": "stddev: 0.00011994699077190962",
            "extra": "mean: 766.2946688876286 usec\nrounds: 1051"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8330.209201418655,
            "unit": "iter/sec",
            "range": "stddev: 0.00004175254083898193",
            "extra": "mean: 120.04500437152258 usec\nrounds: 1830"
          }
        ]
      }
    ]
  }
}