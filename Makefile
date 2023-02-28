PLUGIN_NAME = example-collection-plugin
PLUGIN_PATH = example-collection-plugin

INSTALL_FILES = \
    $(WEB)/l10n/cultures.json \
    $(WEB)/l10n/de-DE.json \
    $(CSS) \
    /l10n/en-US.json \
	$(WEB)/ncag-example-plugin.js \
	manifest.yml

L10N_FILES = l10n/example-collection-plugin.csv

SCSS_FILES = src/webfrontend/example-plugin.scss

COFFEE_FILES = \
    src/webfrontend/ExampleCollectionPlugin.coffee \

all: build

include easydb-library/tools/base-plugins.make


build: code css
	for file in $(HTML_FILES); do cp src/webfrontend/$$file build/webfrontend/$$file; done

code: $(JS) $(L10N)

clean: clean-base