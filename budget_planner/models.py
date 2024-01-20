from django.db import models


class Budget(models.Model):
    budget = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.budget


class Expense(models.Model):
    budget = models.ForeignKey(Budget, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    cost = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
