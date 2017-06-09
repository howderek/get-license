# get-license

`get-license` is a simple command line tool that fetches license text from https://spdx.org/ and prints it to standard output

### Example Usage
```bash
# Saves the MIT license text from https://spdx.org/ to LICENSE
get-license MIT > LICENSE
```

Please note you will most likely need to update the LICENSE file with your information

If a license version isn't specified (GPL vs GPL-3.0), the latest version as of the last update of this repo is used.

### Installation
```bash
npm install -g get-license
```