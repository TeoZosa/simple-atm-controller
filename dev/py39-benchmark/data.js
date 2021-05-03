window.BENCHMARK_DATA = {
  "lastUpdate": 1620016016049,
  "repoUrl": "https://github.com/TeoZosa/simple-atm-controller",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc066166eb45c35816c573f201024f9286585fe",
          "message": "Merge pull request #1 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-v5.15.0\n\n⬆️ Bump release-drafter/release-drafter from v5.13.0 to v5.15.0",
          "timestamp": "2021-05-02T21:21:37-07:00",
          "tree_id": "dd5c712834d91efdc3b29b56bff1d5ee2ba8d769",
          "url": "https://github.com/TeoZosa/simple-atm-controller/commit/5bc066166eb45c35816c573f201024f9286585fe"
        },
        "date": 1620016014849,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 906.5411267242322,
            "unit": "iter/sec",
            "range": "stddev: 0.00009820636139145036",
            "extra": "mean: 1.1030939143527656 msec\nrounds: 432"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1284.6737466230638,
            "unit": "iter/sec",
            "range": "stddev: 0.00013210387863110324",
            "extra": "mean: 778.4077495384593 usec\nrounds: 1082"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8659.817306549314,
            "unit": "iter/sec",
            "range": "stddev: 0.000024366886094858475",
            "extra": "mean: 115.47587721552881 usec\nrounds: 1580"
          }
        ]
      }
    ]
  }
}