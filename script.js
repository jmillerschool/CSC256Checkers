function processForm(event) 
{
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    let playerName = document.getElementById('playerName').value;
    let characterName = document.getElementById('characterName').value;
    let characterClass = document.getElementById('characterClass').value;
    let characterWeapon = document.getElementById('characterWeapon').value;

    // build a string to format the inputs from the user
    let output = "Player Name: " + playerName + "\n  \n" +
        "Character Name: " + characterName + "\n \n" +
        "Character Class: " + characterClass + "\n \n" +
        "Character Weapon: " + characterWeapon
    ;        

    // Display the output in the textarea
    document.getElementById('txtOutput').value = output;
}