#!/usr/bin/env bash
echo "Changing LFS repository URL"
git config --global lfs.url https://gitlab-ci-token:${AUTH_TOKEN}@gitlab.com/SiLA2/sila_base.git/info/lfs
