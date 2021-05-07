window.BENCHMARK_DATA = {
  "lastUpdate": 1620409135384,
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
        "date": 1620409134063,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 941.7977806325766,
            "unit": "iter/sec",
            "range": "stddev: 0.00023906857958546154",
            "extra": "mean: 1.0617990619263624 msec\nrounds: 436"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1407.4305637759778,
            "unit": "iter/sec",
            "range": "stddev: 0.00008120968256500704",
            "extra": "mean: 710.5146255436662 usec\nrounds: 1151"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9172.8895576333,
            "unit": "iter/sec",
            "range": "stddev: 0.00014260529306711397",
            "extra": "mean: 109.01690178618158 usec\nrounds: 1680"
          }
        ]
      }
    ]
  }
}