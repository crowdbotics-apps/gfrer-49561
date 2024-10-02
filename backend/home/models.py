from django.conf import settings
from django.db import models


class Tcdvb(models.Model):
    "Generated Model"
    mbvc = models.BigIntegerField()
    etfcb = models.BigIntegerField()
