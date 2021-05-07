window.BENCHMARK_DATA = {
  "lastUpdate": 1620409159704,
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
          "id": "33899df06eb0dd3066a26a79ecce9ba34c06ab09",
          "message": ":construction_worker: Fetch upstream template updates\n\n- Making `cruft` pre-commit hook log-only\n- Re-adding `flakehell` pre-commit hook\n    - with compatibility patch\n- updating pre-commit hook versions\n- subprocess.run kwarg rename",
          "timestamp": "2021-05-07T10:32:54-07:00",
          "tree_id": "1bf017d83856d7b144924d1dd80196ee4d46b5f2",
          "url": "https://github.com/TeoZosa/simple-atm-controller/commit/33899df06eb0dd3066a26a79ecce9ba34c06ab09"
        },
        "date": 1620409158863,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 937.0833128664284,
            "unit": "iter/sec",
            "range": "stddev: 0.00018811751541829668",
            "extra": "mean: 1.0671409748415186 msec\nrounds: 477"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1259.8651143968727,
            "unit": "iter/sec",
            "range": "stddev: 0.0003134722327632357",
            "extra": "mean: 793.7357647042428 usec\nrounds: 1411"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8851.723100414967,
            "unit": "iter/sec",
            "range": "stddev: 0.00005867792225607923",
            "extra": "mean: 112.97235449594217 usec\nrounds: 1402"
          }
        ]
      }
    ]
  }
}