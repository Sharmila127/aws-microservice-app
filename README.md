# 5-Microservice DevOps Starter (AWS ECR, Jenkins, Terraform, Ansible, EKS, Helm, Prometheus, Grafana)

This starter project contains **5 minimal Node.js microservices** plus CI/CD and infra skeletons to help you deploy on **AWS**:
- Dockerfiles for each service
- Jenkinsfile (example) for building & pushing to **AWS ECR** and deploying with **Helm**
- Helm charts per service (minimal)
- Terraform skeleton to provision VPC/EKS (module placeholders)
- Ansible playbook to bootstrap Jenkins/agents (example)
- Prometheus scrape config and Grafana values (minimal)

**Contents**
```
/services/service1..service5/      - Node.js microservices (server.js, package.json, Dockerfile, Jenkinsfile, helm/)
infra/terraform/                   - Terraform skeleton for VPC & EKS
infra/ansible/                     - Ansible playbook to install docker/jenkins agent
monitoring/prometheus.yml         - Prometheus scrape config
monitoring/grafana-values.yaml    - Grafana Helm values (example)
README.md
```

> This is a starter scaffold meant for learning and adaptation. Replace AWS account IDs, regions, and credentials in CI and Terraform before use.

--- Quick usage ---
1. Build & test locally with `docker build` in each service folder.
2. Create ECR repos in your AWS account:
   `aws ecr create-repository --repository-name service1`
3. Push images and deploy Helm charts to EKS cluster.
4. Use the provided Jenkinsfile as a template for your Jenkins pipelines.

Happy deploying!