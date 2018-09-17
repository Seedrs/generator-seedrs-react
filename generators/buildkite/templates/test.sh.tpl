#!/bin/bash
#
# Runs all tests before building the app

set -euo pipefail

yarn install && yarn test

