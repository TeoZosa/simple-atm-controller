window.BENCHMARK_DATA = {
  "lastUpdate": 1620000204738,
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
        "date": 1620000203969,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1078.958613630257,
            "unit": "iter/sec",
            "range": "stddev: 0.0000246659226224391",
            "extra": "mean: 926.8196086181716 usec\nrounds: 557"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1581.2000835339563,
            "unit": "iter/sec",
            "range": "stddev: 0.000018648009892260213",
            "extra": "mean: 632.4310316029179 usec\nrounds: 1329"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12827.386295721597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042970100387817164",
            "extra": "mean: 77.95820418486474 usec\nrounds: 1768"
          }
        ]
      }
    ]
  }
}