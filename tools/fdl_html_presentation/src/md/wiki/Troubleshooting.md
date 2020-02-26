# Finding Network Interface
A SiLA 2 server should be started on a specified network interface. Why? the server needs to be exposed on a given network which is identified by the network interfaces of your machine.

In many cases, an instrument has there are multiple network interfaces, either to connect to the organization's network, connect to a physical instrument or component, connect to a local network. Depending on where the SiLA 2 server is to be exposed, one must choose the corresponding network interface which represents this physical connection.

It is the responsibility of the individual installing the SiLA 2 server to be aware of which network interface to start the SiLA 2 server on. The following steps will guide the user on how to easily identify the network interface based on the OS in which the SiLA 2 server will be running.

## On *nix based OS's (such as Linux and macOS)

1. Identify the IP range of the network (which you're the machine is connected to) you would like to expose the SiLA 2 server. 
2. Then list all the available network interfaces on your machine 
```bash
ifconfig
```

You should see some output that looks like:

```bash
...
wlp1s0    Link encap:Ethernet  HWaddr cc:2f:71:ae:b2:67  
          inet addr:10.6.16.181  Bcast:10.6.31.255  Mask:255.255.240.0
          inet6 addr: fe80::d259:1a4f:37ad:4140/64 Scope:Link
...
```

3. Select the one which has an IP assigned within the desired range.

For the example above, it is `wlp1s0` which is the network interface of interest.

## On Windows-based OS's

On Windows machines, you can find the network interface via passing the `-l` flag when running either the [Java](https://gitlab.com/SiLA2/sila_java/wikis/Quick-Start#finding-network-interface) or [C#](https://gitlab.com/SiLA2/sila_csharp/wikis/Quick-Start#finding-network-interface) servers.

1. Finding the network interface on a windows machine is not as simple as on *nix based systems. There is no off the shelf tool which lists the correct interface names. Therefore, you will need to build the test_server from sila_java by following the steps [here](https://gitlab.com/SiLA2/sila_java/wikis/Quick-Start)

2. Identify the IP range of the network (which your the machine is connected to) you would like to expose the SiLA 2 server. 

3. Then list all the available network interfaces on your machine using the Test Server
```bash
java -jar test_server.jar -l yes
```

You should see some output that looks like:

```txt
=====================================================
           System Network Interfaces:

Display name: Intel(R) PRO/1000 MT Desktop Adapter
Name: eth0
InetAddress: /10.0.2.15
InetAddress: /fe80:0:0:0:a1e4:3619:2a19:e50%eth0

=====================================================
```

4. Select the interface name which has an IP assigned within the desired range.

For the example above, it is `eth0` which is the network interface of interest.

# Network issues
Network related problems are usually related to a firewall (yours or remote) or the network router.
Firewall issues are common on Windows because of it's integrated firewall or an antivirus.

## Firewall
Both the client and server must allow TCP communication and the mDNS service through UDP.

### Windows
#### Windows Firewall
You can check and change the rules of the firewall by following this [tutorial](https://www.howtogeek.com/112564/how-to-create-advanced-firewall-rules-in-the-windows-firewall/)

#### Antivirus
A firewall part of a third party antivirus can also filter packets, it is advised to also check the antivirus configuration if any.

### Linux
You can check the current rules by running this command in a terminal `sudo iptables -S`

## Test communication
In order to diagnose network issues, you can use the tool [SocketTest](https://sourceforge.net/projects/sockettest/)  to create a simple client - server and attempt to communicate using different ports and protocol (UDP or TCP).
If you are on Linux you can also use NetCat or TelNet coupled SocketTest.

Note:
1. The point of this test is to start a client and a server on two different computers on the same network in order to test the communication!
2. This tool requires Java 3 or above to be executed.
3. If you are not able to connect or communicate it either mean that you made a mistake in the configuration (wrong IP address for example) or that something else is preventing the connection or communication, it could be a firewall, router, port already in use...

### Instructions

#### Setup

##### Windows
1. Download [SocketTest](https://sourceforge.net/projects/sockettest/)  
2. Extract file you just downloaded
3. Run the SocketTest.exe

##### Linux
1. Download [SocketTest](https://sourceforge.net/projects/sockettest/)  
2. Extract file the you just downloaded
3. Run in a terminal ```java -jar ./SocketTest.jar java_look```

#### Find your IP address
- If on internet
    1. Open a web browser and go to https://www.myip.com/
    2. Write or copy the address below "Your IP address is"
- If on a local network
    1. Run the following command in a terminal
    - If on Windows
        ```ipconfig```
    - If on Linux
        ```ifconfig```
    2. Copy the address assigned by your local network interface

#### Usage

##### TCP Test

###### Server
1. Click on the `Server` tab
2. Enter a port number you want to test in the field next to the label `Port`
3. Click on the `start` button
The server should now be waiting for clients.

###### Client
1. Click on the `Client` tab
2. Find the IP address of the server see section `Find your IP address`
3. Enter the IP address of the server in the field next to the label `IP Address`
4. Enter the port number you chose for the server the field next to the label `Port`
5. Click on the `Connect` button
If everything is correct you should be connected to the server, able to communicate in both ways by taping a message in the field next to the label `Message` and pressing send (either in the client or server). You should see the message appearing in the server and client in the textbox.

##### UDP Test
This is pretty much the same thing as for TCP but both the client and the server are in the `Udp` tab.

## Scan remote port(s)
You can install and use [NMap](https://nmap.org/download.html) to scan the ports of a remote host and check which are open/closed/filtered. Administrator rights will be required.

The command below scan the 1000 most used ports with UDP and TCP without pinging (usually windows block pings)

`sudo nmap --top-ports 1000 -sT -sU -Pn TARGET` 

replace TARGET by the IP or hostname of the target. 
If NMap reports open ports, try to start a SiLA Server on one of those ports.