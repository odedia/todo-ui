kp clusterstore create spa -b paketobuildpacks/web-servers
kp clusterbuilder create spa --buildpack paketo-buildpacks/web-servers --tag <registry>/spa:v2 --stack full --store spa

