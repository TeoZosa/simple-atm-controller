window.BENCHMARK_DATA = {
  "lastUpdate": 1620086749322,
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
        "date": 1620086747970,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 922.3580135899681,
            "unit": "iter/sec",
            "range": "stddev: 0.00012513769161359538",
            "extra": "mean: 1.0841777111122357 msec\nrounds: 450"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1287.8142339348326,
            "unit": "iter/sec",
            "range": "stddev: 0.0001946914368630742",
            "extra": "mean: 776.5095101834409 usec\nrounds: 1031"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7952.110150424765,
            "unit": "iter/sec",
            "range": "stddev: 0.000049015526227946774",
            "extra": "mean: 125.75278524613805 usec\nrounds: 1830"
          }
        ]
      }
    ]
  }
}