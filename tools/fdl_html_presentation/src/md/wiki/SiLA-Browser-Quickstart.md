# SiLA Browser Quickstart
This is a simple guide to get you up and running with a SiLA 2 server on a machine and a SiLA 2 browser installed to be able to discover servers within connected to the same network as the browser.

## Prerequisites
This demo should run on any machine on which Java can be installed if it is not available you can follow the steps to install it: [here](https://gitlab.com/SiLA2/sila_java/wikis/Quick-Start#java).

## Run a SiLA Server to Test the Browser with
If you have your own SiLA 2 server that you would like to run then please feel free to run it and skip this section.

1. First, select which Hello SiLA server you would like to run either **C#** or **Java** and click the corresponding link  and follow the instructions:

*   [Run the C# Hello SiLA Server](https://gitlab.com/SiLA2/sila_csharp/wikis/Quick-Start#start-the-hello-sila-sever-with-discovery-enabled)
*   [Java Hello SiLA Server](https://gitlab.com/SiLA2/sila_java/wikis/Quick-Start#start-the-hello-sila-server)

## Run the SiLA 2 Browser
You may install the SiLA 2 Browser on any machine which is on the **same network** as the SiLA 2 servers you plan to interact with.

Here are the steps to install and run the browser:

1. Download the SiLA Browser

* [sila_browser.jar](https://nexus.unitelabs.ch/repository/unitelabs_base-releases/master/sila_browser.jar)
* [sila_browser-win-x64.zip](https://nexus.unitelabs.ch/repository/unitelabs_base-releases/master/sila_browser-win-x64.zip)
* [sila_browser-win-x86.zip](https://nexus.unitelabs.ch/repository/unitelabs_base-releases/master/sila_browser-win-x86.zip)

The *.zip versions are self-contained applications that contain the Java Runtime in case your OS does not have it already installed.

2. Run the SiLA 2 browser:

**Option 1:** Run the `sila_browser.jar`:

If you do not have Java 11 installed then please do so by following the steps for either: [Windows](https://gitlab.com/SiLA2/sila_java/wikis/Quick-Start#java) or [Linux](https://gitlab.com/SiLA2/sila_java/wikis/Quick-Start#java-1)

Then run the following command in a terminal to start the browser
```bash
java -jar sila_browser.jar
```

**Option 2:** self-contained SiLA Browser:

First, Unzip the `sila_browser-win-x64.zip`, then start `sila_browser-win-x64.exe`

### Discover SiLA Servers in the network
If your browser and SiLA servers running in a **local network** you can discover the servers automatically by following these steps:

1. Open a web browser and go to [http://localhost:8080](http://localhost:8080)

2. The browser view should pop up and click `Scan Network`

3. The servers available on the network should appear on the browser window

### Manually add SiLA Servers 
If you are running the SiLA Browser on a corporate network, you may want to add the servers manually. You can do this by following these steps:

1. Identify the IP address and port where the server is currently running on

2. Open a web browser and go to [http://localhost:8080](http://localhost:8080)

3. The browser view should pop up and click `Add Server`

4. A popup window should appear, where you should place the IP address of the SiLA server on the input form where it says *Host* and click `Submit`

See [this video](https://drive.google.com/file/d/17incBNB54ggdyjlpgYL7lT-jO45lr47b/view) as an example.

Have fun playing with the browser

## Accessing the SiLA Browser from a remote device
Assuming the device is connected to a network with access to the SiLA 2 Browser

1. Identify the IP address of the machine where your SiLA 2 browser is hosted with `ifconfig` on windows or `ipconfig` on *nix OS's. Let's assume your IP address is `192.168.1.15`
2. Connect the device (mobile or another machine) to the network
3. Open a browser (Chrome or Firefox) on your device and go to http://192.168.1.15:8080
4. Play with SiLA 2 devices to your heart's content!
