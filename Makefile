REPORTER = spec

test:
	./node_modules/.bin/mocha --timeout 100000 --reporter $(REPORTER) 

 .PHONY: test
