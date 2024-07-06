// Time complexity O(n)
// Space complexity O(n)

/**
 * Evaluates actions and returns a reaction from Bose Baby.
 * @param {string} actions - List of actions.
 * @returns {string} Return "Bad boy" or "Good boy" based on the actions.
 */
function evaluateActions(actions) {

    // Validate length of input must between 1 and 1,000,000 character
    // must be a non-empty string
    if (!actions || actions.length < 1 || actions.length > 1000000) {
        throw new Error('The input must contain between 1 and 1,000,000 charecters');
    }

    // Input must be string type
    if (typeof actions !== 'string') {
        throw new Error('The input must be string');
    }

    // Convert the string to an array of characters
    const actionList = actions.split('');

    // If the first character is 'R', return 'Bad boy'
    if (actionList[0] === 'R') {
        return 'Bad boy';
    }

    // Initialize counter and flag
    // 'shotCount' tracks the number of actions Boss Baby need to take.
    // 'isNeedRavenge' a flag to indicate whether Boss Baby should seek revenge.
    let shotCount = 0;
    let isNeedRavenge = false;

    // Process each action in the action list
    while (actionList.length > 0) {

        // Retrieve and remove the first element from the array
        const action = actionList.shift();

        // Validate the action: must be 'S'(shot) or 'R'(revenge)
        if (action !== 'S' && action !== 'R') {
            throw new Error('Please input a valid string which only accepts \'S\' or \'R\'');
        }

        // Action 'S' indicates that Boss Baby needs to seek ravange at lease one shot back
        // so count the shot that need to shoot back
        if (action === 'S') {
            shotCount += 1;
            isNeedRavenge = true;
            continue;
        }

        // Action 'R'

        // When 'R' found and no revenge is needed, return 'Bad boy'
        if (!isNeedRavenge) {
            return 'Bad boy';
        }

        // When 'R' found and needs to revenge, reduce the shot count
        if (shotCount > 0) {
            shotCount -= 1;
        }
    }

    // After processing all actions, check if shots are still needed
    // If 'shotCount' more than 0, Boss Baby needs to seek revange
    if (shotCount > 0) {
        return 'Bad boy';
    }

    return 'Good boy';
}

module.exports = {
    evaluateActions,
}