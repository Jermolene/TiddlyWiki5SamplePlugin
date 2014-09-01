#!/bin/bash

# Build SamplePlugin for TiddlyWiki5

tiddlywiki \
	./SamplePluginWiki \
	--verbose \
	--build \
	|| exit 1

cp SamplePluginWiki/output/readme.md readme.md
cp SamplePluginWiki/output/license.md license.md
