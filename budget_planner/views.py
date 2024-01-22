from django.db import models
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, DestroyAPIView, RetrieveAPIView
from rest_framework.response import Response

from budget_planner.models import Budget, Expense
from budget_planner.serializers import BudgetSerializer, ExpenseSerializer


class BudgetStatsAPIView(APIView):
    """Return the budget, remaining, and the total expenses."""

    def get(self, request, *args, **kwargs):
        latest_budget = Budget.objects.latest("id")

        total_spent = (
            Expense.objects.filter(budget=latest_budget).aggregate(
                total_spent=models.Sum("cost")
            )["total_spent"]
            or 0
        )

        remaining_budget = latest_budget.budget - total_spent

        serializer = BudgetSerializer(latest_budget)

        data = {
            "budget": float(serializer.data["budget"]),
            "remaining": remaining_budget,
            "spent_so_far": total_spent,
        }

        return Response(data)


class BudgetRetrieveAPIView(RetrieveAPIView):
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer


class ExpenseListCreateAPIView(ListCreateAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer


class ExpenseDeleteAPIView(DestroyAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
