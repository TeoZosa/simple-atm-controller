window.BENCHMARK_DATA = {
  "lastUpdate": 1620000953105,
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
        "date": 1620000952443,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1033.631727868419,
            "unit": "iter/sec",
            "range": "stddev: 0.0000198801019187868",
            "extra": "mean: 967.4625623791802 usec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1507.075775370661,
            "unit": "iter/sec",
            "range": "stddev: 0.000016670514685150633",
            "extra": "mean: 663.5366425115903 usec\nrounds: 1242"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12198.977185432524,
            "unit": "iter/sec",
            "range": "stddev: 0.000005062824629916038",
            "extra": "mean: 81.9740855974512 usec\nrounds: 1729"
          }
        ]
      }
    ]
  }
}