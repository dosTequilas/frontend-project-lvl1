install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
test-coverage:
	echo "test"
brain-even:
	node bin/brain-even.js