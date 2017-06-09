# get-license

`get-license` is a simple command line tool that fetches license text from https://spdx.org/ and prints it to standard output

### Example Usage
```bash
get-license MIT > LICENSE
```

If a license version isn't specified (GPL vs GPL-3.0), the latest version as of the last update of this repo is used.