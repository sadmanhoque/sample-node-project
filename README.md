# Intro
Despite the name this is actually a react project, but I guess we're still using node.

The project also contains the necessary files to utilize github actions for a deployment pipeline using ECS. These files are in .aws and .github dir for the aws ecs task definition file and github workflows file respectively. They are configured for a specific resource. To change the pipeline so this server is deployed elsewhere the workflows script will need to be updated and the task definition will need to be basically replaced.

## CICD Pipeline

Some more details on the implementation without giving precise instructions.

### AWS Setup

The pipeline required some IAM configuration, primarily an AWS user with adequate permission, in this case access to push docker image to ECR and make ECS commands.

If being used for ECS deployments, we need to get the task definition of the ECS cluster service where the application will be deployed, this can be found in the AWS console.

### Github Setup

The user's access credentials needs to be uploaded to the github repo as repository secrets, the option is in Settings > Secrets and variables > Actions > New repository secret.

Use the task definition retrieved from the AWS console and replace the existing taskdef.json file. It doesn't matter where this file is kept so long as it is properly referred to in the workflows file.

### Workflows Script

Most of it is self explanatory, the environment variables need to be updated in the script, the aws cli command at the very end of the script would also need to be updated as that isn't taking advantage of the env vars.


