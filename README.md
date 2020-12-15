# velopark-timeseries
Server application that republishes parking live availability observations as Linked Data. It uses [RML](https://rml.io) rules to convert API responses to Linked Data.

## Deploy with Docker

We use `docker` and `docker-compose` to deploy the application, following these steps:

1. Configure the folder path where the observations will be stored. Replace `/home/julia/data/velopark` with your folder path [here](https://github.com/julianrojas87/velopark-timeseries/blob/b8d9dacc858c529cc87208066de17f90dacc0bde/docker-compose.yml#L9).
2. Configure the `HOSTMANE` and `PORT` environment variables in the [`docker-compose.yml`](https://github.com/julianrojas87/velopark-timeseries/blob/main/docker-compose.yml) file. 
3. Deploy it using `docker-compose up`.