# Searchlink challenge

To run the application, download this [*JARs*](https://www.dropbox.com/sh/q7i07wq1bqdbyy9/AACjlL4rtWbeLIBNA9uuzFgea?dl=0) and run any of them.
It will be very helpful if port 8080 is available and java is installed and java path variables are set as well.

`
	java -jar app-<h2/postgre>.jar >log.log &
`

### Running the postgre version:

If you decide to go with *app-postgre.jar* a postgre db called *tasks* is going to be needed:


	db properties: 
	url=jdbc:postgresql://localhost:5432/tasks 
	username=postgres 
	password=postgres      
	
`	java -jar app-postgre.jar >log.log &`


### Running the h2 version:

The h2 version uses an in-memory h2 db so it is sufficient to just run:

`	java -jar app-h2.jar >log.log &`

# Testing tha application

Try it  [**here**](http://localhost:8080)

Test propagation of push notification by visiting/refreshing this [**link**](http://localhost:8080/tasks/debug/createRandom)

See db state [**here**](http://localhost:8080/tasks/debug/all)



### Building the app from source:

1. Building the app from source requires java, maven, node.js. and a bash environment.
2. Navigate to *tech-challenge-atr/src/main/resources/static/webapp/* and install node packages:
`	npm install `
3. Make some coffee  step 1) is going to take some time.
4. Make sure angular/cli is installed by running ` ng -v ` . If it isn't there revert to step 3) while executing
`	npm install -g @angular/cli `
6. Because the angular application is served by the server, wee need to pack it up using webpack and copy it to the *src/resources/static/* folder.
You can do this by navigating to *tech-challenge-atr/* and running:
`	sh build.sh `
7. After packing the webapp we can run/build the server app with the desired profile:
via maven:	  ` mvn clean install <-DskipTests> 							     //only packages server but doesn't run it`
via maven:    `	mvn spring-boot:run <-DskipTests> <-Drun.profiles=$profile> 										`
via build.sh: `  sh build.sh -b $profile 										 //this will also repackage webapp `