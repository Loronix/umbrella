# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.2.1](https://github.com/thi-ng/umbrella/compare/@thi.ng/compose@1.2.0...@thi.ng/compose@1.2.1) (2019-03-28)

**Note:** Version bump only for package @thi.ng/compose





# [1.2.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/compose@1.1.2...@thi.ng/compose@1.2.0) (2019-03-10)


### Features

* **compose:** add complement() ([5a5a2d1](https://github.com/thi-ng/umbrella/commit/5a5a2d1))
* **compose:** add trampoline() ([9e4c171](https://github.com/thi-ng/umbrella/commit/9e4c171))



# [1.1.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/compose@1.0.2...@thi.ng/compose@1.1.0) (2019-02-15)


### Bug Fixes

* **compose:** add varargs override for jux(),  add tests ([e9d57fc](https://github.com/thi-ng/umbrella/commit/e9d57fc))


### Features

* **compose:** add new functions ([dd13fa9](https://github.com/thi-ng/umbrella/commit/dd13fa9))



# [1.0.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/compose@0.3.0...@thi.ng/compose@1.0.0) (2019-01-21)


### Build System

* update package build scripts & outputs, imports in ~50 packages ([b54b703](https://github.com/thi-ng/umbrella/commit/b54b703))


### BREAKING CHANGES

* enabled multi-outputs (ES6 modules, CJS, UMD)

- build scripts now first build ES6 modules in package root, then call
  `scripts/bundle-module` to build minified CJS & UMD bundles in `/lib`
- all imports MUST be updated to only refer to package level
  (not individual files anymore). tree shaking in user land will get rid of
  all unused imported symbols.


# [0.3.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/compose@0.2.2...@thi.ng/compose@0.3.0) (2018-12-27)


### Bug Fixes

* **compose:** fix comp() for arities >10 ([1ebfea9](https://github.com/thi-ng/umbrella/commit/1ebfea9))


### Features

* **compose:** add threadFirst/Last, rename compI => compL ([0061b21](https://github.com/thi-ng/umbrella/commit/0061b21))


# [0.2.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/compose@0.1.4...@thi.ng/compose@0.2.0) (2018-10-17)


### Features

* **compose:** add partial(), update readme ([6851f2c](https://github.com/thi-ng/umbrella/commit/6851f2c))


<a name="0.1.0"></a>
# 0.1.0 (2018-08-24)


### Features

* **compose:** extract comp() & juxt() to new [@thi](https://github.com/thi).ng/compose package ([ca0a04e](https://github.com/thi-ng/umbrella/commit/ca0a04e))
