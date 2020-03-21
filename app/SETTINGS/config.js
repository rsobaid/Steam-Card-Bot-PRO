module.exports = {

    // Account Credentials AREA

    //-----------------------------------------------------------------------------------------------

    USERNAME: "", // Steam Bot Account Username
    PASSWORD: "", // Steam Bot Account Password
    SHAREDSECRET: "", // Code that can be found in {Steam64ID}maFile in SDA(Steam desktop Auth) 
    IDENTITYSECRET: "", // Code that can be found in {Steam64ID}maFile in SDA(Steam desktop Auth) 
    STEAMAPIKEY: "", // Code from steam in readme how to find it


    //-----------------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------------

    PLAYGAMES: ["//none", 730, 753], // List of appid's/names. Names will be played as non steam games. First game entered will show on profile, others will be idled in the background.
    ADMINS: [""], // to add admin put steam64id 

    //-----------------------------------------------------------------------------------------------


    // VALUES configuration


    KEYSFROMGAME: 730, // 730 = CSGO, 440 = TF2

    // Rate Settings

    CARDS: {
        BUY1KEYFORAMOUNTOFSETS: 26, // For instance; if set to 9 you sell 9 sets for 1 key.
        GIVE1KEYPERAMOUNTOFSETS: 60, // For instance; if set to 6 you give people that have access to the !sell command 1 key for 6 of their sets.
        BUY1KEYFORAMOUNTOFSETSHYDRA: 12, // For instance; if set to 9 you sell 9 sets for 1 key.
        GIVE1KEYPERAMOUNTOFSETS: 60, // For instance; if set to 6 you give people that have access to the !sell command 1 key for 6 of their sets.
        BUY1KEYFORAMOUNTOFSETSTF2: 16, // For instance; if set to 9 you sell 9 sets for 1 key.
        GIVE1KEYPERAMOUNTOFSETSTF2: 20, // For instance; if set to 6 you give people that have access to the !sell command 1 key for 6 of their sets.
		
		BUY1SETFORAMOUNTOFREF: 3, // For instance; if set to 1 you sell 1 sets for 2 ref.
		BUY1GEMSFORAMOUNTOFSETS: 4, // For instance; if set to 4 you sell 4 sets for 1 sack of gems.
        GIVE1GEMSFORAMOUNTOFSETSGEMS: 10,
		
        MAXSETSELL: 50, // The maximum amount of sets of a kind the bot will send when !sell is used
        PEOPLETHATCANSELL: ["STEAMID64", "STEAMID64"]
    },

    // Limits

    MAXLEVEL: 1000, // Max level you can request using !level
    MAXBUY: 50, // Max keys you can buy sets for at a time
    MAXSELL: 100, // Max keys you can sell sets for at a time
    MAXBUYGEMS: 1, // Max sack of gems you can buy sets for at a time

    Buying_Sets_With_Ref_Enable: false,         // [true/false] Enable or disable | bot selling sets for ref metal in tf2
    MAXBUYREF: 100, // Max ref you can buy sets for at a time

    //-----------------------------------------------------------------------------------------------


    // Here is list of keys that bot can accept

    ACCEPTEDKEYS: 

    [
            "Chroma 2 Case Key",
            "Huntsman Case Key",
            "Chroma Case Key",
            "eSports Key",
            "Winter Offensive Case Key",
            "Revolver Case Key",
            "Operation Vanguard Case Key",
            "Shadow Case Key",
            "Operation Wildfire Case Key",
            "Falchion Case Key",
            "Operation Breakout Case Key",
            "Chroma 3 Case Key",
            "CS:GO Case Key",
            "Operation Phoenix Case Key",
            "Gamma Case Key",
            "Gamma 2 Case Key",
            "Glove Case Key",
            "Operation Hydra Case Key",
    ], // These are all keys ^ //Mann Co. Supply Crate Key//


	TF2KEY:

    [
            "Mann Co. Supply Crate Key"
    ],

    //-----------------------------------------------------------------------------------------------


    //-SETTINGS: MESSAGES

    EnableWelcomeMessage: true,             // [true/false] Enable or disable | Bot sending welcome message uppon accepting friend request
    WELCOME: "Hi, this is BOT you can configure this message in config.",

        //IFNO COMMANDS

    INFO: "Use these commands to get information about the card set bot: \n!stock [card sets in stock] \n!owner [profile]",
    OWNER: "Is there something wrong? \nLet me know if you're experiencing issues with my bot! https://steamcommunity.com/id/",
    SELLHELP: "You are also able to sell sets. You can do this by using !sell [amount of keys].",
    HELP: "Bot commands:\n!owner - shows my owner profile, if you have any problems you can contact him\n!stats - shows the current amount of the bot currencies\n!prices - shows the current prices of the bot\n\n!level [your dream level] - calculates how many sets and how many keys it will cost to reach the desired level\n!check - shows how many sets the bot has available and how much you can craft\n!check [amount] - shows how many sets and which level you will reach for a specific amount of keys\n!checkhydra [amount] - shows how many sets and which level you will reach for a specific amount of Hydra keys\n!checktf [amount] - shows how many sets and which level you will reach for a specific amount of TF keys\n!checkgems [amount] - shows how many sets and which level you would reach for a specific amount of gems\n\n!buy [amount of CS:GO keys] - use this to buy sets you have not crafted yet for that amount of CS:GO keys, following the current bot rate\n!buyhydra [amount of Hydra keys] - use to buy that amount of Hydra keys for sets you dont have, following the current BOT rate\n!buytf [amount of Tf keys] - use to buy that amount of TF2 keys for sets you dont have, following the current BOT rate\n!buygems [amount of sets] - use this to buy that amount of sets you have not crafted yet for gems, following the current bot rate\n!buyany [amount of CS:GO keys] - use this to buy that amount of CS:GO keys for any sets even from badges that has already been crafted, following the current bot rate\n\n!buyone [amount of CS:GO keys] - only use this if you are a badge collector. The bot will send one set of each game, following the current bot rate\n!buyonehydra [amount of Hydra keys] - only use this if you are a badge collector. The bot will send one set of each game, following the current bot rate\n!buyonetf [amount of TF keys] - only use this if you are a badge collector. The bot will send one set of each game, following the current bot rate\n!buyonegems [amount of sets] - only use this if you are a badge collector. The same as !buyone, but you pay with gems!\n\n!sell [amount of CS:GO keys] - sell your sets for CS:GO key(s)\n!sellhydra [amount of Hydra keys] - sell your sets for Hydra key(s)\n!sellgems [amount of sets] - sell your sets for gems\n!selltf [amount of Tf keys] - sell your sets for TF key(s)\n!sellcheck - shows information about the sets you can sell",


    //-----------------------------------------------------------------------------------------------
        
    //-SETTINGS:  REMOVING INACTIVE FRIENDS (CLEARING FRIEND LIST)

    bot_clearing_friend_list: true,         // [true/false] Enable or disable | bot removing inactive users for clearing friend list
    message_inactive_friend_removed: true,  // [true/false] Enable or disable | sending chat message to user that got removed after being inactive for too long.
    MAXHOURSADDED: 168,                     //  Time in hours before bot remove inactive user.
    REMOVEDINACTIVE: 'Im cleaning my friendlist and removing inactive friends, please if you will use our service again re add me thanks.', // This message shows when user get cleared from friendlist.

    //-SETTINGS:  BOT ANTI SPAM PROTECTION (Removing user after spaming)

    chat_spam_protection: true,             // [true/false] Enable or disable | removing user after senting too many messages per sec
    spam_remove_message_enable: true,       // [true/false] Enable or disable | sending chat message to user that got removed for spaming too many messages per sec.
    spam_admin_notification_enable: true,   // [true/false] Enable or disable | notifing admin with id of user who got remove for spaming
    MAXMSGPERSEC: 3,                        // The amount of messages users can send every second without getting removed. (Spam Protection)
    SPAMREMOVEMESSAGE: `You got removed since you spammed admin is notified please do not spam or on your next alert you will get blocked.`, // This is message that is shown to user when get removed from friends when he spams.

    //-SETTINGS:  BOT SAVING LOGS SETTINGS

    chat_daily_logs: true,                  // [true/false] Enable or disable | saving all logs in daily bases by date
    chat_logs_for_each_user: true,          // [true/false] Enable or disable | saving all chat logs for each user

    //-SETTINGS: BOT COMMENTING AFTER TRADE

    After_Trade_Comment_enable: true,       // [true/false] Enable or disable | posting coments after trade
    COMMENTAFTERTRADE: "Thanks for trading with our level up service! ",

    //-SETTINGS: INVITING TO THE GROUP

    friend_group_inviting: true,            // [true/false] Enable or disable | Inviting user to the selected group on friend request
    INVITETOGROUPID: "103582791466655863",                    // Invite users to this group

}
