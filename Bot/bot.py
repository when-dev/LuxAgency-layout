import asyncio
from Config import bot, singleton


@singleton
class Bot:

    @staticmethod
    @bot.message_handler(content_types=["text"])
    async def HandlerTextMiddleware(message):
        pass

    @staticmethod
    @bot.callback_query_handler(func=lambda call: True)
    async def HandlerInlineMiddleware(call):
        pass

    @staticmethod
    async def polling():
        task1 = asyncio.create_task(bot.infinity_polling())
        await task1


if __name__ == "__main__":
    b = Bot()
    loop = asyncio.get_event_loop()
    try:
        loop.run_until_complete(b.polling())
    except KeyboardInterrupt:
        pass
    finally:
        loop.run_until_complete(loop.shutdown_asyncgens())
        loop.close()