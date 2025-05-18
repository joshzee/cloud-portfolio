# Referencing front-end module
module "front-end" {
  source = "./modules/front-end"
}

# Referencing monitoring module
module "monitoring" {
  source = "./modules/monitoring"
}