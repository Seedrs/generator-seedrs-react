  - label: ':eslint: Lint'
    command: .buildkite/steps/lint.sh
    agents:
      queue: <%= kebabCaseName %>-agent
    plugins:
      docker-compose#v2.2.0:
        run: <%= snakeCaseName %>
        config: docker-compose.yml

  - wait

  - label: ':jest:  Tests'
    command: .buildkite/steps/test.sh
    agents:
      queue: <%= kebabCaseName %>-agent
    plugins:
      docker-compose#v2.2.0:
        run: <%= snakeCaseName %>
        config: docker-compose.yml
