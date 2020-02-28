# Concept
![what-is-sila-concept](/img/what-is-sila-concept.png)

A SiLA 2 Server is an instrument or software service that provides services over the SiLA 2 standard.

Services are clustered into independent "Features, such as a “PlateReadingProvider”. These Features are described in a Feature Definition Language (FDL) and can be shared for both integrators and device implementers, additionally the standard makes sure that all SiLA 2 Devices are discoverable in local networks and their features can be retrieved with the only mandatory feature called “SiLA Service”.

* The Feature Definition Language is standardised through a [XML Schema](https://www.w3.org/XML/Schema) found in the base repository: [link](https://gitlab.com/SiLA2/sila_base/blob/master/schema/FeatureDefinition.xsd)
* Features are separate [XML Files](https://www.w3.org/TR/xml/) conforming to the schema
* Discovery in local networks is achieved via the [Zero Configuration](http://www.zeroconf.org/) protocol suite
* Connections are established over [HTTP/2](https://http2.github.io/) whereas the reference implementations use [gRPC](https://grpc.io/)
