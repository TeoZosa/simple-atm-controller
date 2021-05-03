window.BENCHMARK_DATA = {
  "lastUpdate": 1620000223361,
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
        "date": 1620000222574,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1012.977227347389,
            "unit": "iter/sec",
            "range": "stddev: 0.0001495758584621705",
            "extra": "mean: 987.1890236058202 usec\nrounds: 466"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1365.0526968892113,
            "unit": "iter/sec",
            "range": "stddev: 0.00026217659699195406",
            "extra": "mean: 732.5724510701148 usec\nrounds: 1308"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11179.159150662836,
            "unit": "iter/sec",
            "range": "stddev: 0.000029292369146896556",
            "extra": "mean: 89.45216599235086 usec\nrounds: 1729"
          }
        ]
      }
    ]
  }
}