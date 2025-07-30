#!/usr/bin/env python3
"""
Write an asynchronous generator function async_generator that yields"""
import asyncio
import random


async def async_generator():
    """Yields a sequence of random numbers."""
    for i in range(10):
        await asyncio.sleep(1)
        yield random.random()
