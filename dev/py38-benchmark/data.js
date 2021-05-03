window.BENCHMARK_DATA = {
  "lastUpdate": 1620016267483,
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
          "id": "9adcd07898ce882f6f247d7ac385fd8b29e692df",
          "message": "Merge pull request #5 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.1.1\n\n⬆️ Bump JamesIves/github-pages-deploy-action from 3.7.1 to 4.1.1",
          "timestamp": "2021-05-02T21:26:47-07:00",
          "tree_id": "0878bd1faeb83d201962b9b1de2babb593fd87b2",
          "url": "https://github.com/TeoZosa/simple-atm-controller/commit/9adcd07898ce882f6f247d7ac385fd8b29e692df"
        },
        "date": 1620016266296,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 925.2735667577394,
            "unit": "iter/sec",
            "range": "stddev: 0.0003454710714076942",
            "extra": "mean: 1.0807614482105117 msec\nrounds: 531"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1320.3691475431237,
            "unit": "iter/sec",
            "range": "stddev: 0.00024060289777884275",
            "extra": "mean: 757.3639552701982 usec\nrounds: 1252"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8622.70837524316,
            "unit": "iter/sec",
            "range": "stddev: 0.000046467789319027525",
            "extra": "mean: 115.97284246225014 usec\nrounds: 1771"
          }
        ]
      }
    ]
  }
}