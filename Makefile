MODULESDIR = ./node_modules/.bin
build: clean
	$(MODULESDIR)/webpack -p

start:
	$(MODULESDIR)/webpack-dev-server

clean:
	@DEL public

.PHONY: clean
