// Hard code possible sentences for now
const sentences = [
"Jealousy, turning saints into the sea. Swimming through sick lullabies, choking on your alibis. But it's just the price I pay, destiny is calling me. Open up my eager eyes, 'cause I'm Mr. Brightside.",
"I must've forgot, you can't trust me. I'm open a moment and closed when you show it. Before you know it, I'm off at sea. And now that I write and think about it, and the story unfolds; you should take my life, you should take my soul.",
"A computer needs a manager to administer its operations, just as a company needs a manager. And that is what DOS is. A manager.",
"Very well - I'll bide my time. And as for you, my fine lady, it's true I can't attend to you here and now as I'd like, but just try to stay out of my way - just try! I'll get you, my pretty, and your little dog too!"
];

function selectSentence() {
    const randIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randIndex];
}
