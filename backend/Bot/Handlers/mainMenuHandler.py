from Config import bot


async def _mainMenu(message):
    await bot.delete_state(message.chat.id)
    msg = await bot.send_message(
        message.chat.id,
        f"Привет, {message.chat.username}!",
        reply_markup=MarkupBuilder.main_menu(),
        parse_mode="MarkdownV2",
    )

    await message_context_manager.add_msgId_to_help_menu_dict(
        chat_id=message.chat.id, msgId=msg.message_id
    )


@bot.message_handler(commands=["help", "start"])
async def send_welcome(message) -> object:
    await _mainMenu(message)