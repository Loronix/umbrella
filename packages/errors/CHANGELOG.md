# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.4](https://github.com/thi-ng/umbrella/compare/@thi.ng/errors@1.0.3...@thi.ng/errors@1.0.4) (2019-03-28)

**Note:** Version bump only for package @thi.ng/errors







# [1.0.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/errors@0.1.12...@thi.ng/errors@1.0.0) (2019-01-21)


### Build System

* update package build scripts & outputs, imports in ~50 packages ([b54b703](https://github.com/thi-ng/umbrella/commit/b54b703))


### BREAKING CHANGES

* enabled multi-outputs (ES6 modules, CJS, UMD)

- build scripts now first build ES6 modules in package root, then call
  `scripts/bundle-module` to build minified CJS & UMD bundles in `/lib`
- all imports MUST be updated to only refer to package level
  (not individual files anymore). tree shaking in user land will get rid of
  all unused imported symbols.


<a name="0.1.0"></a>
# 0.1.0 (2018-05-10)


### Features

* **errors:** add new package [@thi](https://github.com/thi).ng/errors ([1e97856](https://github.com/thi-ng/umbrella/commit/1e97856))
