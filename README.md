# etcdig

Discovery tool for etcd (alpha stage)

## Motivation

Finding stuff in etcd clusters is not straightforward. There should be multiple approaches to finding keys and/or content as there are when working with vfs on UNIX systems.

## Installation

```
npm i -g etcdig
```

## Usage

```
$ etcdig --help
```

## Configuration

Options are parsed using yargs' [env prefixing](https://github.com/yargs/yargs/blob/HEAD/docs/api.md#envprefix) feature. This means that every option is also exposed as an environment variable having the `ETCDIG_` prefix.

