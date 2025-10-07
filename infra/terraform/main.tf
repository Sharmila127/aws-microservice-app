provider "aws" {
  region = var.region
}

# This is a skeleton. Replace modules with actual terraform-aws-modules usage.
# Example placeholders:
# module "vpc" { source = "terraform-aws-modules/vpc/aws" ... }
# module "eks" { source = "terraform-aws-modules/eks/aws" ... }

variable "region" {
  default = "us-east-1"
}
