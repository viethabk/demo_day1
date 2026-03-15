let powserUp = "mushroom";
let effect = "";


if (powserUp == 'mushroom') {
    effect = 'Mario becomes Super!';
} else if (powserUp == 'flower') {
    effect = 'Mario can shoot fireballs';
} else if (powserUp == 'star') {
    effect = 'Mario is invincibel!';
} else if (powserUp == 'none') {
    effect = 'Mario is normal';
} else {
    effect = 'Unknown';
}

console.log(effect);