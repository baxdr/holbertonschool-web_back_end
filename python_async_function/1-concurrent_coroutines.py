#!usr/bin/env python3
"""
Write a type-annotated function wait_n that takes
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Waits for n random delays and returns a list of the delays."""
    time_waits = await asyncio.gather(*tuple(map(
        lambda _: wait_random(max_delay), range(n))))
    return sorted(time_waits)
