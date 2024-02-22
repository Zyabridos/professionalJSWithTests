console:
	@node-console

check:
	jest --colors

test:
	suppressor pass 'make check'
	FUNCTION_VERSION=wrong1 suppressor fail 'make check'
	FUNCTION_VERSION=wrong2 suppressor fail 'make check'
	FUNCTION_VERSION=wrong3 suppressor fail 'make check'

.PHONY: test
