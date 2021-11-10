// {Name: SmallTalk}
// {Description: Gives responses to casual conversation.}

title('Small talk')

question(
    'hello',
    'hi (there|)',
    'what\'s up',
    reply(
        'Hello',
        'Hi (there|)',
        'Hi, what can I do for you?',
    ),
);

question(
    'how are you',
    reply('I\'m doing well. (Thank you|)'),
);

question(
    'are you good or (bad|evil)',
    reply('I\'m good'),
);

question(
    'I $(L love|like) you (a lot|)',
    'I admire you',
    'you are (so|) (sweet|cool|groovy|neat|great|good|awesome|handsome|rad)',
    reply('I know. (And I appreciate your sentiment|)')
