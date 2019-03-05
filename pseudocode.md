RPG Fighter Pseudocode

Document.ready wrapping the whole JS

Create variables and objects for player characters and enemies

Make onscreen graphics for player char options

register click to select char, clear others

display enemy chars and stats

register click to select enemy

enlarge that enemy for combat, shrink others

make attack button, on click attack anim, show HP loss, increase ATK stat

same for enemy counter attack

if victory, clear that enemy, repeat 

if loss, show GAME OVER, show restart button

CHARACTER OBJECT:
    name:
    HP:
    ATK:
    graphics:[resting, attack, beenHit]