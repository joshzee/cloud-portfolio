# 🌩️ Cloud Resume Challenge

Welcome to the Cloud Resume Challenge! This project follows the structure outlined by Forrest Brazeal and demonstrates my expertise in AWS cloud services, automation, and CI/CD.
## Architecture
<img title="a title" alt="Alt text" src="/images/CRC-archdiagram.jpg">

## Overview
This project consists of a personal resume website hosted entirely on AWS. The stack includes:
- **Frontend:** Next.js (built and deployed on AWS S3 and served via CloudFront)
- **Backend:** AWS Lambda, API Gateway, and DynamoDB to track visitor count
- **CI/CD:** GitHub Actions for automated build and deployment

## Tech Used
- **AWS Services:** S3, CloudFront, API Gateway, Lambda, DynamoDB, IAM
- **CI/CD:** GitHub Actions
- **Programming Languages:** JavaScript, Python
- **Security & Monitoring:** IAM roles, CloudWatch, AWS Secrets Manager

## 📜 Features
- **Static Website Hosting:** The resume is hosted on **AWS S3** and served via **CloudFront** for fast content delivery.
- **Visitor Counter:** A **serverless backend** using **AWS Lambda/API Gateway/DynamoDB** tracks and displays visitor count.
- **CI/CD Pipeline:** **GitHub Actions** automatically deploys changes to **S3** and invalidates the **CloudFront** cache.
- **Security Best Practices:** IAM roles for least-privileged access, HTTPS enforcement via CloudFront.


##  Setup and Deployment
### Clone the Repository
```sh
git clone https://github.com/joshzee/cloud-resume.git
cd cloud-resume
```

### Deploy Frontend
```sh
aws s3 sync . s3://your-resume-bucket --delete
```

### 3️⃣ CI/CD via GitHub Actions
- Push changes to the `main` branch to trigger the deployment workflow (`deploy.yml`).

## 🌐 Live Demo
You can view the live version of my Cloud Resume here: [joshcod.es](https://joshcod.es)

## Lessons Learned
- **Serverless Architectures**: Implementing API Gateway/Lambda/DynamoDB
- **CI/CD Automation**: Leveraging GitHub Actions for automatic deployments
- **Security Best Practices**: IAM role configurations, CloudFront HTTPS enforcement

## Things to Come
- Terraform entire project
- Add a contact form with SES email integration

## 🏆 Acknowledgments
- **Forrest Brazeal** for the Cloud Resume Challenge inspiration
- AWS documentation & community for support

---
Thanks all!

