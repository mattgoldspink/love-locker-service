# Stop worrying and fall in love with Locker Service

This repo is the companion git repository to my talk at Dreamforce 2018 "Stop worrying and fall in love with Locker Service".

The aim of the repository is to try and dispell some of the myths about Locker Service. For example:

- Showing 3rd party libraries like jQuery, D3 and React working inside of Locker Service.

### Required

To work with this repo, install these tools.

- **An Org Configured as a Dev Hub**

    * <a href="https://developer.salesforce.com/promotions/orgs/dx-signup" target="_blank">Salesforce DX org sign-up</a>

- **The Salesforce CLI and `salesforcedx` Plugin.**

    To install the Salesforce CLI, start here: <a href="https://developer.salesforce.com/tools/sfdxcli" target="_blank">Salesforce CLI</a>

    If you've already installed the Salesforce CLI, update your plugins.
    ```bash
    sfdx plugins:update
    ```

## Clone this repo

<a href="https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line" target="_blank"> Create a Personal Access Token in GitHub</a> and use it as your password when you clone the samples repo.

```bash
cd path/to/your/sfdx/projects
git clone https://github.com/mattgoldspink/love-locker-service.git
cd love-locker-service
```

The result is a directory formatted as a Salesforce DX project that you can work with immediately.

## Authorize a Dev Hub

You can run this command from the command line.

```bash
sfdx force:auth:web:login -d -a lovelockerservice-hub
```

Enter your Dev Hub org credentials in the browser that opens. After you log in successfully, you can close the browser.

## Development Workflow

Here's a summary of how you can iteratively modify and explore the samples included in this repository.

### Create a Scratch Org

On the command line run

```bash
sfdx force:org:create -s -f config/project-scratch-def.json -a scratch-1
```

This creates a scratch org where you can load your code and then run it.

### Push Your Code

On the command line run

```bash
sfdx force:source:push
```

### View the app in the org

You can open the code straight to the welcome page by running the below in the command line:

```bash
sfdx force:org:open -p /lovelockerservice/n/welcome
```

This command opens a web browser, connects to your scratch org, and logs in. If the Love Locker Service app isn't displayed, select it from the App Launcher. From their you can check out the examples.
