window.BENCHMARK_DATA = {
  "lastUpdate": 1620086707527,
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
          "id": "520406a3f17792ba6b0995bd70016f85d1ce93aa",
          "message": ":construction_worker: Fetch upstream template updates\n\nUpdating Dependabot auto-merge settings to include minor versions in\nproduction dependencies.",
          "timestamp": "2021-05-03T17:01:00-07:00",
          "tree_id": "3689c4db47d10995dea3e223a34b97582497dd61",
          "url": "https://github.com/TeoZosa/simple-atm-controller/commit/520406a3f17792ba6b0995bd70016f85d1ce93aa"
        },
        "date": 1620086704911,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1239.5725376176333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000985705903021738",
            "extra": "mean: 806.7297150047596 usec\nrounds: 593"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1791.759058402812,
            "unit": "iter/sec",
            "range": "stddev: 0.00007053717019805336",
            "extra": "mean: 558.1107545181928 usec\nrounds: 1438"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13795.101106803275,
            "unit": "iter/sec",
            "range": "stddev: 0.000009388779247100534",
            "extra": "mean: 72.48950132789051 usec\nrounds: 1883"
          }
        ]
      }
    ]
  }
}