window.BENCHMARK_DATA = {
  "lastUpdate": 1620016991770,
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
        "date": 1620016990491,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1048.3172699091106,
            "unit": "iter/sec",
            "range": "stddev: 0.000020002697911385634",
            "extra": "mean: 953.9096881297208 usec\nrounds: 497"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1553.5233950968634,
            "unit": "iter/sec",
            "range": "stddev: 0.000020636990624574565",
            "extra": "mean: 643.6980628396968 usec\nrounds: 1289"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12368.650749386892,
            "unit": "iter/sec",
            "range": "stddev: 0.000014472102013802765",
            "extra": "mean: 80.84956235420985 usec\nrounds: 1716"
          }
        ]
      }
    ]
  }
}