cd "src/main/resources/static/webapp/";
pwd;
ng build --baseHref "webapp"
cd "../../../../..";
pwd

cp -Rv src/main/resources/static/webapp/dist/* src/main/resources/static/ ;

if [ "$1" = "--backend" ] || [ "$1" = "-b" ] || [ "$1" = "-B" ]; then
	echo "[INFO] will package backend too"
    mvn spring-boot:run -DskipTests -Drun.profiles=$2
fi
