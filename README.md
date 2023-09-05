# ✅ Tier CLI Action

## About

This action configures the [Tier CLI](https://tier.run) within GitHub's hosted Actions runners.

## Usage

Setup the `tier` CLI and pass the respective version:

```yaml
steps:
  - uses: openformation/setup-tier-cli-action@v1
    with:
      version: "0.12.0"
```

Afterwards, you can use the `tier` CLI in subsequent steps:

```yaml
steps:
  - uses: openformation/setup-tier-cli-action@v1
    with:
      version: "0.12.0"
  - run: tier push ...
```

## Development

To develop the action locally, you need to install [Devbox](https://www.jetpack.io/devbox). Devbox install all the required tools required for working on the action locally. Once installed, follow these steps to get started with working on the action. Contributions are highly appreciated and welcomed 🫶🏽

```sh
devbox shell

bun install
```

### Testing the action locally

The test workflow is located in `.github/workflows/test.yml`. It is executed remotely on GitHub, but you can also run it locally using [act](https://github.com/nektos/act):

```sh
act workflow_dispatch
```
