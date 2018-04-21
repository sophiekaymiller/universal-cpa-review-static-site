#!/bin/bash

CONTENT_BRANCH=feature/content-updates

echo "Checking out content branch"
git checkout $CONTENT_BRANCH
git pull origin $CONTENT_BRANCH

echo "Checking out master and merging in content"
git checkout master
git pull origin master
git merge $CONTENT_BRANCH

echo "Dropping tag and pushing upstream"
npm version patch

git push origin master --tags

