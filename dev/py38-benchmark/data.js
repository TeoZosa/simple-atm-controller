window.BENCHMARK_DATA = {
  "lastUpdate": 1620016969314,
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
          "id": "b78fdcc6d64afb56cc71f3b14c41436cdd48d893",
          "message": "Merge pull request #7 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.1.1\n\n⬆️ Bump pip from 20.3.3 to 21.1.1 in /.github/workflows",
          "timestamp": "2021-05-02T21:38:36-07:00",
          "tree_id": "bbf6fb0d773a08eac39a2eca3a6afba5d3ff8a2a",
          "url": "https://github.com/TeoZosa/simple-atm-controller/commit/b78fdcc6d64afb56cc71f3b14c41436cdd48d893"
        },
        "date": 1620016968556,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1016.7516841933251,
            "unit": "iter/sec",
            "range": "stddev: 0.00041745771145044775",
            "extra": "mean: 983.5243113399753 usec\nrounds: 485"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1518.2113374743626,
            "unit": "iter/sec",
            "range": "stddev: 0.00019033183282555745",
            "extra": "mean: 658.6698276562479 usec\nrounds: 969"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10849.870652544747,
            "unit": "iter/sec",
            "range": "stddev: 0.00004436578818442646",
            "extra": "mean: 92.1669973794073 usec\nrounds: 763"
          }
        ]
      }
    ]
  }
}