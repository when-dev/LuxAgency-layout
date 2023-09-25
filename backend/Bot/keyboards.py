from telebot import types


def manager_menu() -> types.ReplyKeyboardMarkup:
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True, one_time_keyboard=True)
    markup.add("Мои лиды")
    markup.add("Новые лиды")
    return markup

