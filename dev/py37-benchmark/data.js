window.BENCHMARK_DATA = {
  "lastUpdate": 1620015967771,
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
        "date": 1620015966534,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 948.4568050831816,
            "unit": "iter/sec",
            "range": "stddev: 0.00025879459687043493",
            "extra": "mean: 1.0543442723385783 msec\nrounds: 470"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1226.204019528056,
            "unit": "iter/sec",
            "range": "stddev: 0.00021097267953270937",
            "extra": "mean: 815.5249730667839 usec\nrounds: 1151"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8822.532233703303,
            "unit": "iter/sec",
            "range": "stddev: 0.00003286418089494862",
            "extra": "mean: 113.34614297920733 usec\nrounds: 1168"
          }
        ]
      }
    ]
  }
}