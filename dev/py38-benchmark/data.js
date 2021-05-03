window.BENCHMARK_DATA = {
  "lastUpdate": 1620000203146,
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
          "id": "06ecac3fc3c22fe91e226ae6e8730c73343ba1a8",
          "message": ":sparkles: Add template boilerplate",
          "timestamp": "2021-05-02T16:58:10-07:00",
          "tree_id": "e9f1ee6346e57d17dd5ab4e51228175c18cae0e5",
          "url": "https://github.com/TeoZosa/simple-atm-controller/commit/06ecac3fc3c22fe91e226ae6e8730c73343ba1a8"
        },
        "date": 1620000202518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1060.0196397319114,
            "unit": "iter/sec",
            "range": "stddev: 0.00019433249532201533",
            "extra": "mean: 943.3787474474615 usec\nrounds: 392"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1632.2307469152368,
            "unit": "iter/sec",
            "range": "stddev: 0.00007668415209568659",
            "extra": "mean: 612.658474844875 usec\nrounds: 1451"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11976.070986203526,
            "unit": "iter/sec",
            "range": "stddev: 0.000031515893138470536",
            "extra": "mean: 83.49983906675266 usec\nrounds: 1715"
          }
        ]
      }
    ]
  }
}