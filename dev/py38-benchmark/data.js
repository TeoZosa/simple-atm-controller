window.BENCHMARK_DATA = {
  "lastUpdate": 1620000964152,
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
          "id": "907c67c93ea9b63ba36e834d54e0c0686946aba9",
          "message": ":green_heart: Dummy commit to fix CI",
          "timestamp": "2021-05-02T17:09:00-07:00",
          "tree_id": "c35a9486441fc3ad1f3837667fec648dea652cfa",
          "url": "https://github.com/TeoZosa/simple-atm-controller/commit/907c67c93ea9b63ba36e834d54e0c0686946aba9"
        },
        "date": 1620000962885,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 987.8374671581996,
            "unit": "iter/sec",
            "range": "stddev: 0.0001189651148679572",
            "extra": "mean: 1.0123122813682999 msec\nrounds: 526"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1405.8354978676373,
            "unit": "iter/sec",
            "range": "stddev: 0.00012632538892838502",
            "extra": "mean: 711.3207779408003 usec\nrounds: 1369"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8631.536539903716,
            "unit": "iter/sec",
            "range": "stddev: 0.000036004636567522506",
            "extra": "mean: 115.85422773535 usec\nrounds: 1572"
          }
        ]
      }
    ]
  }
}