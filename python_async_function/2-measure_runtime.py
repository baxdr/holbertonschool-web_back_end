#!/usr/bin/env python3
"""
Write a type-annotated function measure_time that takes"""
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


async def measure_time(n: int, max_delay: int) -> float:
    """Measures the time it takes to run wait_n."""
    start_time = time.time()
    await wait_n(n, max_delay)
    end_time = time.time()
    return end_time - start_time
