# MediaCentral UX | CloudUX

This is example project created with [cloudux-starter-kit](https://www.npmjs.com/package/cloudux-starter-kit) for
**MediaCentral | Cloud UX**. If you are not familiar with this tool, we
encourage you to use our
[development guide](http://developer.avid.com/mcux_ui_plugin/introduction/doc/development_guide.html)

## Getting started
To use this application you will need following tools:
1. running **MediaCentral | Cloud UX 2018.6** machine
2. [node.js and npm](https://nodejs.org)

Before you will lunch your application you may need to change
[proxy Setup](src/project.act) and change **cloudUXServer** to point your
machine with working **MediaCentral | Cloud UX 2018.6**

To run this application in your CLI from root type:
1. `npm install` to install all required modules (it can take few minutes),
2. `npm start` to run application,
3. In terminal you will see address, open it in browser of your choice.
4. Login to CloudUX, you will be able to see this app in the top toolbar.

## Publishing
For publishing read our [Quick Start](http://developer.avid.com/quickStart.html).

To Publish your application from CLI you will need
1. [cloudux-starter-kit](https://www.npmjs.com/package/cloudux-starter-kit) which contain commands for publishing
2. [docker](https://www.docker.com/)
3. [helm](https://helm.sh/)

Remember to set your [Application ID](src/package.json) and
[Application sercret](src/package.json).
 You can get them from [marketplace](https://my.avid.com/shop/BusinessOrientation)

## project.act
In the src folder you can find [project.act](src/project.act) where you
can change your project settings.

**Properties:**
- **Application properties** - Fields that will identify your App on MarketPlace
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

## package.json
[package.json](src/package.json) contain information about application name and keys to
identify your application on marketplace

- **identity**
    - **appName** - Name of you application
- **avid** - Information to identify your application on marketplace
    - **Application ID** - You will receive **ID** when you will create profile
for you application (check [Quick Start](http://developer.avid.com/quickStart.html))
    - **Application Secret** - You will receive **Secret** when you will create profile
for you application (check [Quick Start](http://developer.avid.com/quickStart.html))
