#!/usr/bin/env python3
"""
Write a type-annotated function sum_list that takes
 a list of floats and returns their sum as a float
"""


def sum_list(input_list: list[float]) -> float:
    """Returns the sum of a list of floats."""
    return sum(input_list)
