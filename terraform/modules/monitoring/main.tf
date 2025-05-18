# Create SNS topic for CloudWatch Alarm notifications
# This module creates an SNS topic for CloudWatch Alarm notifications and a subscription to send notifications to PagerDuty.
# The SNS topic is used to send notifications when the monthly AWS costs projection exceeds a specified threshold.
# The subscription sends the notifications to a PagerDuty integration endpoint.
# The module also creates a CloudWatch metric alarm that monitors the estimated charges for the AWS account.
# The alarm is triggered when the estimated charges exceed a specified threshold.
# The alarm is set to check the estimated charges every 12 hours and will trigger if the charges exceed $2.
resource "aws_sns_topic" "alerts" {
    name = "alerts"
}

resource "aws_sns_topic_subscription" "alerts_subscription" {
    topic_arn = aws_sns_topic.alerts.arn
    protocol = "https"
    endpoint = "https://events.eu.pagerduty.com/integration/3497e783e5e74003d1b6ab46797a783f/enqueue"
}

# Alarm for monthly budget projection
resource "aws_cloudwatch_metric_alarm" "monthly_cost_projection" {
    alarm_name = "MonthlyCostProjection"
    comparison_operator = "GreaterThanThreshold"
    evaluation_periods = 1 # checks once during the below mentioned period
    metric_name = "EstimatedCharges"
    namespace = "AWS/Billing"
    period = 43200 # checks once every 12 hours
    statistic = "Maximum"
    threshold = 2
    alarm_description = "Triggered when monthly AWS costs projection exceeds USD 2"
    alarm_actions = [ aws_sns_topic.alerts.arn ]
}