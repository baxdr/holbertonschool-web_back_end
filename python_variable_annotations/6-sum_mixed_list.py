#!/usr/bin/env python3
"""
Write a type-annotated function sum_mixed_list that takes
 a list of floats and integers and returns their sum as a float
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns the sum of a list of floats and integers."""
    return float(sum(mxd_lst))
