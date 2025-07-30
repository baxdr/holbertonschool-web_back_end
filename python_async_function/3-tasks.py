#!/usr/bin/env python3
"""
Write a type-annotated function task_wait_random that takes"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Creates a task to wait for a random delay."""
    return asyncio.create_task(wait_random(max_delay))
