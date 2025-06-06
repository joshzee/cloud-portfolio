# Create a Hosted Zone
resource "aws_route53_zone" "main" {
    name = "joshcod.es"
}

# Region for ACM certificate
provider "aws" {
    alias = "ap-southeast-2"
    region = "ap-southeast-2"
}


# Request SSL Certificate
resource "aws_acm_certificate" "ssl_cert" {
    provider = aws.ap-southeast-2
    domain_name = "joshcod.es"
    validation_method = "DNS"

    subject_alternative_names = [
        "www.joshcod.es"
    ]
}

# DNS Validation
resource "aws_route53_record" "validation_record" {
    for_each = {
      for dvo in aws_acm_certificate.ssl_cert.domain_validation_options : dvo.domain_name => {
        name = dvo.resource_record_name
        type = dvo.resource_record_type
        value = dvo.resource_record_value
      }
    }

    zone_id = aws_route53_zone.main.zone_id
    name = each.value.name
    type = each.value.type
    ttl = 300
    records = [each.value.value]
}

resource "aws_acm_certificate_validation" "ssl_validation" {
    provider = aws.us-east-1
    depends_on = [ aws_acm_certificate.ssl_cert, aws_route53_record.validation_record ]
    certificate_arn = aws_acm_certificate.ssl_cert.arn
    validation_record_fqdns = [for record in aws_route53_record.validation_record : record.fqdn]
  
}

resource "aws_route53_record" "cf-a-record" {
    zone_id = aws_route53_zone.main.zone_id
    name = "joshcod.es"
    type = "A"

    alias {
        name = aws_cloudfront_distribution.s3_distribution.domain_name
        zone_id = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
        evaluate_target_health = true
    }

    depends_on = [aws_acm_certificate.ssl_cert, aws_cloudfront_distribution.s3_distribution]
  
}

resource "aws_route53_record" "cf-aa-record" {
    zone_id = aws_route53_zone.main.zone_id
    name = "www.joshcod.es"
    type = "A"

    alias {
        name = aws_cloudfront_distribution.s3_distribution.domain_name
        zone_id = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
        evaluate_target_health = true
    }

    depends_on = [aws_acm_certificate.ssl_cert, aws_cloudfront_distribution.s3_distribution]
  
}



output "name_servers" {
    value = aws_route53_zone.main.name_servers
}
