# App Creator Tool
App Creator Tool, allow you to develop and publish application for
**MediaCentral | Cloud UX**. If you are not familiar with this tool, we
encourage you to use our
[development guide](http://developer.avid.com/mcux_ui_plugin/introduction/doc/development_guide.html)

## Getting started
To use this application you will need following tools:
1. running **MediaCentral | Cloud UX 2018.6** machine
2. [node.js and npm](https://nodejs.org)
3. [docker](https://www.docker.com/) (for publishing)
4. [helm](https://helm.sh/) (for publishing)

## Project Properties
In the bottom toolbar you can see **Project Properties**, those properties
allows you connect to you **MediaCentral | Cloud UX 2018.6** machine and
publish your application to **Avid Marketplace** (for more information check
[Quick Start](http://developer.avid.com/quickStart.html))

**Properties:**
- **Application properties** - Fields that will identify your App on MarketPlace
    - **Application Name** - Name of you Application that will be displayed
in application
    - **Application ID** - You will receive **ID** when you will create profile
for you application (check [Quick Start](http://developer.avid.com/quickStart.html))
    - **Application Secret** - You will receive **Secret** when you will create profile
for you application (check [Quick Start](http://developer.avid.com/quickStart.html))
    - **Build** - your application build (fill it before publish)
    - **Version** - your application version (fill it before publish)
- **Publishing details**
    - **Owner ID** - your owner ID
    - **Company name** - name of your comapny
    - **Private key** - Path to your private key (required for publishing)
- **Proxy setup**
    - **CloudUX Server** - hostname/ip adress of your cloudUX
    - **CloudUX Port (optional)** - port of your cloudUX, if empty, will use default port
    - **Local Port** - Port on which you want to connect locally

## Running your application
To run application you will need to install [node.js and npm](https://nodejs.org).
To test application set **Proxy setup** in **Application properties** then
from project **root** in **terminal** type:
1. `npm install` to install all dependencies (can take few minutes)
2. `npm start` it will run your application on localhost with Local Port from
Application Properties
3. In terminal you will see address, open it in browser of your choice.
4. Login to CloudUX, you will be able to see your app in the top toolbar.

## Publish
Before you will be able to publish your app register product and
check our [Quick Start](http://developer.avid.com/quickStart.html).
After you set your application properties, at the bottom toolbar next to
**Project Properties** you can see **Publish**. After you run it you will
see new bar where you need to write **password to your private key**, if
you don't use password just press **eneter**. When publishing will be done
you will see message in the bottom right corner. This operation can take
few minutes.


