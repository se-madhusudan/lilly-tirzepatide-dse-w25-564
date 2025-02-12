# HM CICD Plumber for AWS & SSH build pipelines

### How it works

The pipeline is governed by the `.gitlab-ci.yml` file. Each condition is outline in the YML code and then commands from within the respective repo are executed accordingly.

  - merging a feature branch into the `princess` branch will initiate an automatic build and deployment to the appropriate UAT environment as outlined in the GitLab CICD pipeline variables. Understand that the UAT environment is automatically protected by HTTP basic authentication provided by Cloudflare worker hosted at the CDN edge.
  
  - upon merge request approval the feature branch will be merged into the `root` branch which will initiate an automatic build and deployment to the **production** environment. 
  
  - to expire the program you must create and push an `expired` tag. This will initiate an expiration job installing and deploying the index.html as defined by the `EXPIRATION` in the GitLab CICD variables. NOTE: this is still under development.

### Commands

  - build - This command simply executes the appropriate build operation from within the CICD pipeline.
  
  - deploy - Is the deployment manager and will detect the appropriate deployment subcommand to execute based upon the correct configuration of the CICD environment variables.
  
  - deployAWS - Is a subcommand utilized by the deployment manager
  
  - deploySSH - Is a subcommand utilized by the deployment manager
  
  - expire - If the EXPIRATION CICD environment variable is set this command will install the alternative index.html file as directed. If the variable is not set then the default will be deployed. Acceptable values are `prihcs`, `simple` and `custom`.
  
  - [install](docs/INSTALL.md) - To install this pipeline into an existing repository you must check out the pipeline base repo [HM CICD Plumber](https://gitlab.com/hm-devs/hm-cicd-plumber/) in addition to the destination repo. Navigate into the destination repo and execute the install command `../hm-cicd-plumber/bin/install`. This install command will create the appropriate directory and copy all of the files necessary to support the pipeline. In addition it will unset the execution bit on the destination install file. this will prevent accidental reverse installations.

  - [update](docs/UPDATE.md) - Execute from within your target repo simply type update and the script will take care of the rest.

  - [version](docs/VERSION.md) - Will display the current version of the pipeline installed in the local repository. If you are in the source project then it will display the latest release of the product.
  
  - [guide](docs/GUIDE.md) - Prints the basic system help

#### Expired Index HTML

Default - Redirects to the APEX domain of the S3 project after a predefined count down. This is the expected action if the EXPIRATION var is not set in the repo CICD variables.

PRIHCS - Redirects to the https://www.prihcs.com/ after a predefined count down.

Simple - Presents the visitor with a content no longer available notice. There is NO redirection.

Custom - Is **NOT** a predefined expiration file and is individually created on a project by project basis. The file `custom-expired-index.html` must exist in the root of the repository.

In ALL cases except default you must set the EXPIRATION CICD var for each specific repository.