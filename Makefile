install:
	yarn install --frozen-lockfile

brain-games:
	node bin/brain-games.js

even-game:
	node bin/brain-even.js

expression-game:
	node bin/brain-expressions.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .
