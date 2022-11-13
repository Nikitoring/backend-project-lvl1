install:
	yarn install --frozen-lockfile

brain-games:
	node bin/brain-games.js

even-game:
	node bin/brain-even.js

expression-game:
	node bin/brain-expressions.js

gcd-game:
	node bin/brain-gcd.js

calc-game:
	node bin/brain-calc.js

progression-game:
	node bin/brain-progression.js

prime-game:
	node bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .