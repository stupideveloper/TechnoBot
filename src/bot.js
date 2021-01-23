/* Quotes ( Yeah ik its scuffed dont @ me)*/
/* You can add it to another file if you want */

var quotes = [
    "it stays in the pit",
    "So I have heard democratically elected goverments and oo im up for that",
    "You want to be a hero tommy? THEN DIE LIKE ONE!",
    "remember this, tommy: the only universal language is violence",
    "Tommy, the thing is, you're using words... but the thing about this world, Tommy. is that the only universal language is violence... and we've had that conversation. We've spoken that language in the pit. It's over, Tommy. Onto a new day, a new plot, to destroy Manburg.",
    "I'm enjoying the show, Tommy (Tommy: what show?) The clown circus!",
    "Q-Quackity, they weren't always orphans...",
    "I HAVE A PICKAXE AND I'LL PUT IT THROUGH YOUR TEETH, I'LL PUT IT THROUGH YOUR TEETH QUACKITY!",
    "WELCOME HOME, THESEUS ",
    "good things dont happen to heroes",
    "Tommy, the adults are speaking",
    "Tommy, don't be scared he doesn't have no house",
    "Stop crying, we're trying to get in the animatics",
    "I forgot to ping the rich people",
    "Hitting me is just a poor life policy",
    "Arson pog",
    "I don't know what to do with power, I just seek it.",
    "And you don’t need to pull out your calculator, 30 is a much lower number than 80, I checked, I did the math.",
    "Oh, I didn’t kill pigs for these porkchops, my slaves did. By slaves, I mean minions, but they work for no pay, labor 24/7 and have no rights... so, slaves.",
    "Sometimes people tell me, hey Techno, you ego is getting a bit out of hand. Well I think they’re just jealous of how perfect I am",
    "I’m only getting by by the skin of my teeth, and teeth don’t even have skin, that’s how you know its messed up!",
    "I need to increase the thinking capacity of my viewers... but on second thought, they might not watch me play Minecraft",
    "AY CARAMBA DONDE ESTA LA BIBLIOTECA",
    "yo wtf thanos killed dumbledore im crying",
    "murder is cringe. don't do that",
    "the penalty for losing is death",
    "the second worst thing to ever happen to those orphans",
    "BruUUuuUUuUuuh",
    "BLOOD FOR THE BLOOD GOD!",
    "You're lesbian?! THATS SO COOL!",
    "That man had a family, and it's just gone now.",
    "All a part of my MASTER plaan!",
    "HEEEEEH???",
    "Subscribe to Technoblade!",
    "Destroyeee wed",
    "Tehnoblade never dies",
    "Casuals",
    "Not even close",
    "GET EM",
    "You see, I was using an advanced strategy called LYING",
    "I've seen Irish famines with more potatoes than this farm.",
    "This is like being friends with the school shooter",
    "If you mean verbally, that doesn't count because that requires intellect and not like.. /op",
    "i wonder how far i can dropkick a dog that small. :/",
    "..his head off, and present it to his childeren as a warning.",
    "What you do is, you take the guy and you just lure him into a back alley and then you cut his head off, and present it to his children as a warning",
    "I've realised now that rank number one isn't an achievement; it's a prison which forces you to dedicate your life to defending a temporary title.",
    "well you see, i was farming potatoes",
    "He's playing skyblock while I'm playing death note, he thinks he can outsmart me with my own strategies because he has yet to realize that he is but the puppet and I the puppeteer, DANCE POTATO BOY DANCE!!!",
    "I'm an atheist, but when God sends me to hell, I want him to hesitate.",
    "I wasn't sure if intentional sleep deprivation was legally considered torture or not.",
    "I just praised Jesus and I'm not even Christian!",
    "Help, Deo, I'm being chased by a minority",
    "He has no eyes, he sees through echolocation. And he's also deaf.",
    "Not a word.",
    "I had no expectations, and I still managed to be dissapointed.",
    "I can't wait to claim the whole world and tell everyone to hippity hoppity get off my property.",
    "WE HAVE TO KILL THE FAKE TREES TO SAVE THE REAL ONES",
    "I steal your kill, I steal your life",
    "Sometimes it's tough being the best",
    "This is the second worst thing that has happened to these orphans",
    "It's okay, you're meeting expectations",
    "I didn't even kill those pigs, my slaves did",
    "Now you don't need to pull out your calculator. 30? Much lower number then 80, I checked, I did the math.",
    "Aw man TNT. I bet thats gonna do a ton of damage... Meh.",
    "Am I gonna die to batman?!",
    "I'm Black",
    "Oh wow you placed TNT let me just run ri- what? what? how? Are you kidding me?! ..",
    "If you run fast enough I won't be able to break this bed. You can do it! You can do it!..... no.",,,
    "I expected nothing and i still managed to be disappointed. (welcome to bedwars)",
    "I can neither confirm nor deny this information.",
    "You have to steal as many presents from orphans as possible.",
    "Fuck TommyInnit, he's just too good for clout.",
    "Did you try getting good?",
    "if Hypixel has taught me anything, is that if you have a problem, the answer is slavery.",
    "I dropkicked that child in self-defense",
    "No fun allowed.",
    "My brain is just too large.",
    "It's very complicated, what you have to do is... right click.",
    "We don't have pants and we're slapping people with our meat.",
    "If you wanna get a good kill / death ratio in game, you need to have a good kill / death ratio in real life..",
    "You see all of these look like challenges in life that we just don't think we can do, but once you just walk up there and punch them, they just don't respond!",
    "I think it deeply reflects the ontological statement of the play as a whole.",
    "All men see the tactics whereby I have conquered, but few see the strategies by which victory is evolved",
    "WEAPONS ARE FOR CASUALS!",
    "some of us dont die in hardcore phil",
    "women’s presence in the workforce was significantly lower than men’s",
    "That one day, we'll look back at where we started, and be amazed by how far we've come...",
    "I don't think party games is about winning, I think it's about winning by as much as possible to absolutely demoralize your enemies. That's what it's all about.",
    "You can't lose what you don't have, but you can go into debt.",
    "I'm about to speedrun this mans funeral",
    "You shall feel pain.",
    "Every country has the criminals it deserves."
];

require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

console.log("✨ Connecting to discord bot ✨");
client.on('ready', () => {
  console.log(`Authenticated as ${client.user.tag}!`);
  console.log("✨ Ready for requests ✨");
  client.user.setActivity("use `TechnoQuote`, { type: "WATCHING"});
});
client.on('message', msg => {
  if (msg.content === 'TechnoQuote') {
    var randomNumber = Math.floor(Math.random() * quotes.length)
    msg.reply("“" + quotes[randomNumber] + "”");
    console.log("“" + quotes[randomNumber] + "”");
  }
});

client.login(process.env.TOKEN);
