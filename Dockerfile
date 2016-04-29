#FROM golang:1.6.1-alpine
FROM node:6.0.0
MAINTAINER Core Services <coreservices@namely.com>

RUN apt-get update && \
    apt-get install --assume-yes git build-essential && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN mkdir -p /go/src/github.com/therealplato/namely-leads
WORKDIR /go/src/github.com/therealplato/namely-leads

RUN npm install -g bower
