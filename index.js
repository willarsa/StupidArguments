let prompts = []

function generateNewPrompt(){
    display = document.getElementById('display')
    
    if(prompts.length === 0){
        display.value = "Reload the prompts first!"
        return
    }
    
    var random = Math.floor(Math.random() * prompts.length)
    
    var toDisplay = prompts[random]
    display.value = toDisplay
    display.size = display.value.length > 0 ? display.value.length : 10;
    prompts.splice(random, 1)
}

function reloadPrompts(){
    display = document.getElementById('display')
    display.value = ""

    prompts = []

    prompts.push("What is the best finger?")
    prompts.push("What is the worst finger?")
    prompts.push("What is the best pet?")
    prompts.push("Is cereal a soup?")
    prompts.push("Brushing teeth in the shower: Yes or no?")
    prompts.push("Is a hot dog a sandwich?")
    prompts.push("Is chess a sport?")
    prompts.push("What is the best season?")
    prompts.push("I've replaced the handle 4 times and the axehead 3 times. Is it the same Axe?")
    prompts.push("What’s the best Cereal?")
    prompts.push("What’s better, Night or Day?")
    prompts.push("What’s the best school subject?")
    prompts.push("What’s the best animal to have a deep philosophical conversation with?")
    prompts.push("Sandwich cut in half or diagonally?")
    prompts.push("Chicken or the Egg?")
    prompts.push("Is water wet?")
    prompts.push("What’s the worst item to drop in a public toilet?")
    prompts.push("What’s the worst color to paint a bathroom?")
    prompts.push("What’s the worst cereal to milk ratio?")
    prompts.push("Jelly/Jam doesn’t exist anymore: What’s going on your PB & __?")
    prompts.push("What would be the best animal if it were the size of a weiner dog?")
    prompts.push("What’s the best thing to say when you trip in front of people?")
    prompts.push("Are pugs ugly?")
    prompts.push("Milk or Dark Chocolate?")
    prompts.push("Blended or Iced Coffee?")
    prompts.push("What is the correct way to eat an oreo?")
    prompts.push("Is Die Hard a Christmas movie?")
    prompts.push("Is it acceptable to clap when a plane lands?")
    prompts.push("Can you be friends with your ex?")
    prompts.push("Is it better to be an early bird or a night owl?")
    prompts.push("Should you text back immediately or wait?")
    prompts.push("Is a burger better with or without pickles?")
    prompts.push("Marvel or DC?")
    prompts.push("Do aliens exist?")
    prompts.push("Is a straw one hole or two?")
    prompts.push("Is it okay to eat food that fell on the floor if you pick it up quickly?")
    prompts.push("Should time travel ever be invented?")
    prompts.push("If animals could talk, which one would be the rudest?")
    prompts.push("Would you rather live in a world with superheroes or without them?")
    prompts.push("Would you want to be Immortal?")
    prompts.push("If you could meet any historical figure, who would it be?")
    prompts.push("If you could add one holiday to the calendar, what would it be?")
    prompts.push("Would you rather wake up every morning covered in glitter or mysteriously missing one sock?")
    prompts.push("Would you rather wake up in a world where everyone calls you “Dr. Pickles” or where the color blue doesn’t exist anymore?")
    prompts.push("If mirrors stopped working for you, would you tell anyone?")
    prompts.push("If you had to replace your teeth with something else, what would you choose?")
    prompts.push("If you had to name your child “Blorptimus Prime” or “Squelchy McGoo,” which would you choose?")
    prompts.push("Would you rather have a pet blorp that only eats sound OR a flibber that screams whenever it sees a spoon?")
    prompts.push("What song should be the worlds national anthem?")
    prompts.push("Who is a person that is universally hated?")
    prompts.push("Who is a person that is universally liked?")
    prompts.push("Where is the worst place to spread ashes?")
    prompts.push("What video game would you choose to live in for the rest of your life?")
}