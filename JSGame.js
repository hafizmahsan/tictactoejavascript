

// Assigning a value to a variable named sign

let sign = "x";

// Taking Element by using Id "player"

let disp = document.getElementById("player");

// Function to Print "x" or "o" on the Screen according to the PLayer's Turn

function printn(number)
{
    // Making a Variable named val to print the "x" or "o" on the Screen

    let val = document.getElementById("r" + number);

    // Setting a Condition that if a Column is empty only then assing a sign to it

    if(val.innerHTML == "")
    {
        val.innerHTML = sign;
    }

    // Calling different Functions to Proceed

    decideWinner();
    checkSign();
    checkPlayer();
}

// This function checks that whether it's a turn of Player One or Player Two

function checkSign()
{
    if(sign == "x")
    {
        sign = "o";
    }
    else
    {
        sign = "x";
    }
}

// This function shows the turn of every player that whether it's player 1's turn or whether it's player 2's turn

function checkPlayer()
{
    if(sign == "x")
    {
        disp.innerHTML = "Player 1's Turn";
    }
    else
    {
        disp.innerHTML = "Player 2's Turn";
    }
}

// This function returns the innerHTML of a given box

function getBox(no)
{
    return document.getElementById("r" + no).innerHTML;
}

// This function tells us that whether the selected three boxes have the same sign or not, and return us true or false

function checkMove(a, b, c, m)
{
    if(getBox(a) == m && getBox(b) == m && getBox(c) == m)
    {
        return true;
    }
    else
    {
        return false;
    }
}

// This function will decide that whether player 1 is winner or player 2 is winner or the match ties

function decideWinner()
{
    // This if conditions tells us that whether the laws of Tic Tac Toe complete or not whether the conditions of Tic Tac Toe game satisfy or not and then we get our winner

    if( checkMove(1, 2, 3, sign) || checkMove(4, 5, 6, sign) || checkMove(7, 8, 9, sign)
    || checkMove(1, 4, 7, sign) || checkMove(2, 5, 8, sign) || checkMove(3, 6, 9, sign)
    || checkMove(1, 5, 9, sign) || checkMove(3, 5, 7, sign) )
    {

        // If the sign is "x" then our Player 1 is winner
        if(sign == "x")
        {
            disp.innerHTML = "Player 1 Wins";

            // this loop clear all the cells

            for(let i=1; i<=9; i++)
            {
                document.getElementById("r" + i).innerHTML = "";
            }

            // this will through an error on console to stop the game

            throw "Player One Wins";
        }
        else
        {
            // If the sign is "o" then our Player 2 is winner

            if(sign == "o")
            {
                disp.innerHTML = "Player 2 Wins";

                for(let i=1; i<=9; i++)
            {
                document.getElementById("r" + i).innerHTML = "";
            }
                throw "Player Two Wins";
            }
            
        }
    }


    // This conditions checks that whether the Match Ties or is there any fields left empty

    else if( getBox(1)!= "" && getBox(2)!= "" && getBox(3)!= ""
    && getBox(4)!= "" && getBox(5)!= "" && getBox(6)!= ""
    && getBox(7)!= "" && getBox(8)!= "" && getBox(9)!= "" )
    {
        disp.innerHTML = "Match Ties";
        for(let i=1; i<=9; i++)
            {
                document.getElementById("r" + i).innerHTML = "";
            }
            throw "Match Ties";
    }
}