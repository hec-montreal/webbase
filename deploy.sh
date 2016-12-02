#!/usr/bin/env bash

rm -r $CATALINA_HOME/webapps/webbase
rm $CATALINA_HOME/webapps/webbase.war

cp target/webbase-1.0.war $CATALINA_HOME/webapps/webbase.war
