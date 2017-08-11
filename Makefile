REPORTER = spec

test:
	./node_modules/.bin/mocha --timeout 10000 --reporter $(REPORTER) 

 .PHONY: test
