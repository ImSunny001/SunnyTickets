module.exports = {
  emojis: {
    error: "❌",
    success: "✅",
  },
  discord: {
    prefix: "s!",
    presence: {
      status: "dnd",
      activities: [{
        name: "💸 | Meu Dono é o !    Sunny合#0001",
        type: "PLAYING",
      }],
    },
  },
  auth: {
    token: "OTI2MjQ4OTE2MzIyNzc1MTIy.Yc46hg.RKPyrWxpJkacu2-kP60FjMdqkos",
  },
  ticket: {
    emojiOpen: "🎫", // [padrão: 🎫] Emoji para abrir o ticket. Caso personalizado, use o ID do emoji.
    emojiClose: "🔐", // [padrão: 🔐] Emoji para fechar o ticket. Caso personalizado, use o ID do emoji.
    roleId: "950503066879295579", // ID do cargo que poderá ver os tickets.
    categoryId: "950403782028701757", // ID da categoria que será criada os tickets.
    message: "Para abrir um ticket clique em 🎫",
    welcome:
      "Olá {user}, seja bem-vindo(a). Em alguns instantes a nossa equipe irá ajuda-lo(a).\n\n📢 | **Regras**\n ¹ **·** *Não mencione a nossa equipe para que te atendam mais rápido.*\n² **·** *Não abra ticket sem motivos.*",

    /**
     * Placeholders do campo "welcome":
     * {user} - Menção do usuário (ex: @user)
     * {tag} - Tag do autor (ex: user#0000)
     * {username} - Nome do autor (ex: user)
     * {server} - Nome do servidor (ex: server)
     */
  },
};
