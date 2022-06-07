## Sample VueJS application for Tanzu Build Service and Tanzu Application Platform

In order to build this repo, you will either need a TBS version with the Web Server buildpack, or you'll need to install it yourself. Update the reference to your OCI registry and run the `create-cluster-builder.sh` script. 

For deployment to TAP, follow the steps here in order to create a ClusterSupplyChain that builds Single-Page applications: https://github.com/tsalm-pivotal/tap-react-sample

To build and run this code, run:

```
kubectl apply -f config/workload.yaml
```
