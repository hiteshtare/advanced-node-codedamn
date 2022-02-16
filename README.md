# advanced-node-codedamn

# Testing the performance
* ab -n 100 -c 50 "http://localhost:1337/"
* ab -n 1000 -c 100 "http://localhost:1337/"
* ab -n 1000 -c 100 "http://localhost:1337/" | grep "Requests"