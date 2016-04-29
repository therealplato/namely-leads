namely-leads
============

This is a prototype of a system for a network of companies to advertise their services, discover other companies' services and generate leads

Built for the Namely Engage Hackathon, Apr 2016

Usage
-----
Have git and docker installed, and a docker machine active.

```
git clone https://github.com/therealplato/namely-leads; cd namely-leads

docker-compose up -d    # -d flag daemonizes
curl $(docker-machine ip):8765
```
