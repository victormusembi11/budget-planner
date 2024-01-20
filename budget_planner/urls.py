from django.urls import path

from budget_planner.views import (
    BudgetStatsAPIView,
    ExpenseListCreateAPIView,
    ExpenseDeleteAPIView,
)

urlpatterns = [
    path("budget/", BudgetStatsAPIView.as_view()),
    path("expense/", ExpenseListCreateAPIView.as_view()),
    path("expense/<int:pk>/", ExpenseDeleteAPIView.as_view()),
]
