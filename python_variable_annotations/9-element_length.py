#!/usr/bin/env python3
"""
Write a type-annotated function element_length that takes
an iterable of sequences (like a list or a tuple) and returns
a list of tuples, each containing the sequence and its length.
"""
from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples with each element and its length."""
    return [(i, len(i)) for i in lst]
