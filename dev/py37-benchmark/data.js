window.BENCHMARK_DATA = {
  "lastUpdate": 1620016264376,
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
        "date": 1620016263595,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1057.9649776275965,
            "unit": "iter/sec",
            "range": "stddev: 0.000019638818686796843",
            "extra": "mean: 945.2108728990459 usec\nrounds: 535"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1517.4010708545588,
            "unit": "iter/sec",
            "range": "stddev: 0.00002023292104205775",
            "extra": "mean: 659.0215462526512 usec\nrounds: 1254"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10781.47846964269,
            "unit": "iter/sec",
            "range": "stddev: 0.0000425020002132148",
            "extra": "mean: 92.75165765211986 usec\nrounds: 1738"
          }
        ]
      }
    ]
  }
}