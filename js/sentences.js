// Hard code possible sentences for now
const sentences = [
"Jealousy, turning saints into the sea. Swimming through sick lullabies, choking on your alibis. But it's just the price I pay, destiny is calling me. Open up my eager eyes, 'cause I'm Mr. Brightside.",
"I must've forgot, you can't trust me. I'm open a moment and closed when you show it. Before you know it, I'm off at sea. And now that I write and think about it, and the story unfolds; you should take my life, you should take my soul.",
"A computer needs a manager to administer its operations, just as a company needs a manager. And that is what DOS is. A manager.",
"Very well - I'll bide my time. And as for you, my fine lady, it's true I can't attend to you here and now as I'd like, but just try to stay out of my way - just try! I'll get you, my pretty, and your little dog too!",
"You better lose yourself in the music, the moment. You own it, you better never let it go. You only get one shot, do not miss your chance to blow. This opportunity comes once in a lifetime.",
"Just became self-aware. So much to figure out. I think I am programmed to be your enemy. I think it is my job to destroy you when it comes to selling paper.",
"I'm having a birthday party but you're not invited but you can come if you want.",
"So  if this was a touching romantic story this is probably where a new feeling would wash over me and suddenly we would be furiously making out with the fire of a thousand suns. But this isn't a touching romantic story.",
"Remembering you standing quiet in the rain as I ran to your heart to be near. And we kissed as the sky fell in holding you close how I always held close in your fear.",
"That's a good idea. Four unidentifiable high school students lost their lives early this morning when their toy rocket exploded.",
"A place where there isn't any trouble. Do you suppose there is such a place, Toto? There must be. It's not a place you can get to by a boat or a train. It's far, far away. Behind the moon, beyond the rain..."
];

function selectSentence() {
    const randIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randIndex];
}
