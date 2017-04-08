#!/bin/sh

geth --preload check-work.js attach ipc:/`pwd`/eth-devnet/geth.ipc
