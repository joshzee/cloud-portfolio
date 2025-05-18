
# Create S3 bucket for the web objects
resource "aws_s3_bucket" "web_object_bucket" {
  bucket = "joshcod.es"
  tags = {
    Name        = "JoshCodes"
    Environment = "Production"
  }
}

resource "aws_s3_bucket_versioning" "web_object_bucket_versioning" {
  bucket = aws_s3_bucket.web_object_bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_ownership_controls" "web_object_bucket_ownership" {
  bucket = aws_s3_bucket.web_object_bucket.id
    rule {
      object_ownership = "BucketOwnerEnforced"
    }
}

resource "aws_s3_bucket_policy" "web_object_bucket_policy" {
  bucket = aws_s3_bucket.web_object_bucket.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action = [
          "s3:GetObject",
          "s3:PutObject"
        ]
        Resource = "${aws_s3_bucket.web_object_bucket.arn}/*"
        Condition = {
            StringEquals = {
                "AWS:SourceArn" = aws_cloudfront_distribution.s3_distribution.arn
            }
        }
      }
    ]
  })
}

