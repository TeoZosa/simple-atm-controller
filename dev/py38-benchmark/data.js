window.BENCHMARK_DATA = {
  "lastUpdate": 1620409119169,
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
        "date": 1620409118335,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1042.0416803473872,
            "unit": "iter/sec",
            "range": "stddev: 0.0001946799006678431",
            "extra": "mean: 959.6545117721475 usec\nrounds: 510"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1555.7267120723645,
            "unit": "iter/sec",
            "range": "stddev: 0.00012492929485534592",
            "extra": "mean: 642.786417588673 usec\nrounds: 1353"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12060.142287356819,
            "unit": "iter/sec",
            "range": "stddev: 0.00000663442258172458",
            "extra": "mean: 82.91776134750452 usec\nrounds: 1697"
          }
        ]
      }
    ]
  }
}