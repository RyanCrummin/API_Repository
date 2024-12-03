// Define the API URL
const apiUrl = 'https://valorant-api.com/v1/weapons';
const apiUrlAgents = 'https://valorant-api.com/v1/agents';

// Make a GET request

async function Gritty(){
    const showIconsContainer = document.getElementById('Weapons');
    try{
        
        const response = await fetch(apiUrl);   
        const result  = await response.json();

        console.log(result);
        
        // foreach loop to run through all the data
        result.data.forEach(element => {
            // create a container for the card element
            const card = document.createElement('div');
                    card.classList.add('card');
            // CREATE THE IMAGE ELEMENT
            const iconImg = document.createElement('img'); // Create a new image element
                    iconImg.src = element.displayIcon; // Set the source of the image to the displayIcon
                    iconImg.alt = element.displayName;  // Set alt text as the weapon name
                    iconImg.classList.add('weapon-icon'); // class for styling

            // add title to the card (name of weapon)
            const weaponName = document.createElement('h3');
            weaponName.textContent = element.displayName;
            weaponName.classList.add('weapon-name')

            // append the icon and name to card
            card.appendChild(weaponName);
            card.appendChild(iconImg);
            showIconsContainer.appendChild(card);
            

        })
    
    }
    catch{
        console.error(error);
        console.error(ReferenceError);
    }
}

async function Agents(){
    const abilitiesContainer = document.getElementById('Agents');
    try{
        
        const response = await fetch(apiUrlAgents);   
        const result  = await response.json();

        console.log(result);
    
         // Loop through each agent in the data
         result.data.forEach(agent => {
            // a container for each agent's information
            const agentContainer = document.createElement('div');
            agentContainer.classList.add('agent-container'); //  class for styling each agent's abilities

            // agent display name (title)
            const agentName = document.createElement('h2');
            agentName.textContent = agent.displayName;  //  agent name (from displayName)
            agentContainer.appendChild(agentName); // Append the name to the agent's container
            
            // Display agent's small icon (use displayIconSmall)
            const agentIconSmall = document.createElement('img');
            agentIconSmall.src = agent.displayIconSmall;  // Display the agents small icon
            agentIconSmall.alt = agent.displayName;  // Set alt text to the agents name
            agentIconSmall.classList.add('agent-icon-small');
            agentContainer.appendChild(agentIconSmall); // Append the small icon image
            
            // Agent's description
            const description = document.createElement('p');
            description.textContent = agent.description || "No description available"; // Display the agents description
            agentContainer.appendChild(description); // Append the description

            // Check if the agent has abilities
            if (agent.abilities && Array.isArray(agent.abilities)) {
                // Loop through each ability of the agent
                agent.abilities.forEach(ability => {
                    // Create a card for each ability
                    const abilityCard = document.createElement('div');
                    abilityCard.classList.add('ability-card'); // class for styling each ability card
                    
                    // Ability Slot (Ability Name or Slot)
                    const slot = document.createElement('h4');
                    slot.textContent = ability.slot || "No Slot";  // Display the slot name 
                    slot.classList.add('slot-num');
                    
                    // Ability Icon
                    const iconImg = document.createElement('img');
                    iconImg.src = ability.displayIcon;  // Display the ability's icon
                    iconImg.alt = ability.displayName;  // Set alt text to the ability's name
                    iconImg.classList.add('ability-icon');
                    
                    // Ability Description
                    const abilityDescription = document.createElement('p');
                    abilityDescription.textContent = ability.description || "No description available";  // Display the ability's description
                    abilityDescription.classList.add('ability-description');

                    // Append the elements to the ability card
                    abilityCard.appendChild(slot);
                    abilityCard.appendChild(iconImg);
                    abilityCard.appendChild(abilityDescription);
                    
                    // Append the ability card to the agent's container
                    agentContainer.appendChild(abilityCard);
                });
            } else {
                console.error('No abilities found for agent:', agent.displayName);
            }

            // Append the agent's container to the main container
            abilitiesContainer.appendChild(agentContainer);
        });
    } 
    catch (error) {
    console.error('Error fetching agent data:', error);
}
}


    Gritty();
    Agents();