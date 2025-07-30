#!/usr/bin/env python3
"""
Write an asynchronous generator function async_generator that yields"""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Yields a sequence of random numbers."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.random() * 9
