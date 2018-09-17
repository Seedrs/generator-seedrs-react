#!/bin/bash
#
# Lints the project

set -euo pipefail

NODE_ENV=production yarn lint
