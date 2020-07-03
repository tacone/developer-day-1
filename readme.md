# Intro

This is a easy exercise I put together for my coworkers. You can find a possible solution in the branch `solution`.

# Developer day

Let's play with docker and docker-compose.

First thing first, clone this repo 😎.

## Task 1: make it work

Create a basic but working infrastructure comprising:

- a webserver serving a dynamic website (node, python-flask, php, pick your flavour of choice)
- a postgres instance
- an [Hasura](https://github.com/hasura/graphql-engine/) instance

You will do this by editing docker-compose.yml, and when you're done, typing `docker-compose up`.

- please mount every data volume needed in a subfolder of `data/`
- please mount the `/tmp` folder of each container in a subfolder of your computer, for instance `/tmp/devday/webserver`
- please bind the ports to make sure they don't collide with the existing software on your computer. For the scope of this exercise, a simple schema like 7000, 7001, 7002 is good enough.

Make sure the services go up.

- `docker-compose ps` should give show the services running
- `nmap localhost` should show the opened ports

Log in the webserver and see if you can ping the hasura host.

## Task 2: environment variables

Create a `.env` file and make the exported ports configurable. You should now be able to change them by editing the .env file.

Also (for example), `WEBSERVER_PORT=9998 docker-compose up` should change the webserver port without the need to edit the environment file.

> Bonus point: give to each environment variable a default value in the `docker-compose.yml` file. The infrastructure should be able to run without the `.env` file.

## Task 3: environments

We will now configure things differently in development and production environments.

For the scope of this exercise, we'll keep things simple, and just prove to ourself that we can do it.

Create a new file, such as `docker-compose.dev.yml` and use it to extend `docker-compose.yml`

- ideally, `docker-compose.yml` should contain production settings, and `docker-compose.dev.yml` should override it to help up with development.
- make sure postgres, and hasura console are not accessible in production mode. When developing though, need to be able to load the hasura console in your browser and connect to the postgres instance from your favourite db client.

Create two wrapper scripts, `scripts/dev` and `scripts/prod` to ease things up:

- `scripts/dev up` should start the containers in development mode. `scripts/dev ps` should list the running containers and so on.

## Task 4: refactoring

Let's split each service into his own file for added clarity.

Create a `docker/` folder containing a subfolder for each service. Inside each folder create a `docker-compose.yml` and `docker-compose.dev.yml` file, describing the service.

Change the start scripts accordingly.

## Task 5: make it work for real (optional)

Create a table within hasura, input some data and have the webserver read the data from the graphql endpoint and display it to the user in some way.

That's it! 🏁
