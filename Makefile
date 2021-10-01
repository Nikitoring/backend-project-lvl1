install:
	yarn install --frozen-lockfile

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
