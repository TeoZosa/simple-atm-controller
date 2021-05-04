window.BENCHMARK_DATA = {
  "lastUpdate": 1620086739659,
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
        "date": 1620086737006,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1067.9305203175447,
            "unit": "iter/sec",
            "range": "stddev: 0.000017637591644773078",
            "extra": "mean: 936.3905057256478 usec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1519.4003098585183,
            "unit": "iter/sec",
            "range": "stddev: 0.000018949955362460238",
            "extra": "mean: 658.1544004641652 usec\nrounds: 1296"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11252.799985589227,
            "unit": "iter/sec",
            "range": "stddev: 0.000019529171798796173",
            "extra": "mean: 88.86677105081748 usec\nrounds: 1734"
          }
        ]
      }
    ]
  }
}