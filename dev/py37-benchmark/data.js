window.BENCHMARK_DATA = {
  "lastUpdate": 1620016975754,
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
        "date": 1620016974988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 964.4639667548151,
            "unit": "iter/sec",
            "range": "stddev: 0.00030277289627627383",
            "extra": "mean: 1.0368453715951202 msec\nrounds: 514"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1312.033130325603,
            "unit": "iter/sec",
            "range": "stddev: 0.00016489348401219187",
            "extra": "mean: 762.1758756593541 usec\nrounds: 1327"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8651.001057469546,
            "unit": "iter/sec",
            "range": "stddev: 0.000029561418976945887",
            "extra": "mean: 115.59355886756812 usec\nrounds: 1979"
          }
        ]
      }
    ]
  }
}