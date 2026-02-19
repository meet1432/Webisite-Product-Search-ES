from odoo import SUPERUSER_ID, api

from . import models
from . import controllers


def post_init_hook(cr, registry):
    env = api.Environment(cr, SUPERUSER_ID, {})
    env["es.index.config"].sudo().create_default_product_search_config()
