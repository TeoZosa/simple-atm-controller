window.BENCHMARK_DATA = {
  "lastUpdate": 1620015944896,
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
        "date": 1620015943836,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1018.8682456766156,
            "unit": "iter/sec",
            "range": "stddev: 0.00025198245928694586",
            "extra": "mean: 981.481172117514 usec\nrounds: 581"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1444.6030278478775,
            "unit": "iter/sec",
            "range": "stddev: 0.00020267330848481368",
            "extra": "mean: 692.2316932214711 usec\nrounds: 1180"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8385.471150751187,
            "unit": "iter/sec",
            "range": "stddev: 0.00003529747534400951",
            "extra": "mean: 119.25388353526421 usec\nrounds: 1245"
          }
        ]
      }
    ]
  }
}