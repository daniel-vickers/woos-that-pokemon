jQuery(document).ready(function($) {

    //Open Popup
    setTimeout( function() { $('#wtp-popup').show(); $('#wtp-popup-overlay').show(); }, 2000);

    //Close Popup
    $('.wtp-popup-close').click(function(e){ e.preventDefault(); return true; });
    $('.wtp-popup-close').click(function(){ $('#wtp-popup').hide(); $('#wtp-popup-overlay').hide(); });

    //Submit Guess
    $('#wtp-guess-submit').click(function(e){ e.preventDefault(); return true; });
    $('#wtp-guess-submit').click(function(){
        var guess = $('#wtp-guess').val(); guess = guess.toLowerCase();
        var answer = $('#wtp-answer').val();

        "bulbasaur"==guess?guess="1":"ivysaur"==guess?guess="2":"venusaur"==guess?guess="3":"charmander"==guess?guess="4":"charmeleon"==guess?guess="5":"charizard"==guess?guess="6":"squirtle"==guess?guess="7":"wartortle"==guess?guess="8":"blastoise"==guess?guess="9":"caterpie"==guess?guess="10":"metapod"==guess?guess="11":"butterfree"==guess?guess="12":"weedle"==guess?guess="13":"kakuna"==guess?guess="14":"beedrill"==guess?guess="15":"pidgey"==guess?guess="16":"pidgeotto"==guess?guess="17":"pidgeot"==guess?guess="18":"rattata"==guess?guess="19":"raticate"==guess?guess="20":"spearow"==guess?guess="21":"fearow"==guess?guess="22":"ekans"==guess?guess="23":"arbok"==guess?guess="24":"pikachu"==guess?guess="25":"raichu"==guess?guess="26":"sandshrew"==guess?guess="27":"sandslash"==guess?guess="28":"nidoran girl"==guess?guess="29":"nidorina"==guess?guess="30":"nidoqueen"==guess?guess="31":"nidoran boy"==guess?guess="32":"nidorino"==guess?guess="33":"nidoking"==guess?guess="34":"clefairy"==guess?guess="35":"clefable"==guess?guess="36":"vulpix"==guess?guess="37":"ninetales"==guess?guess="38":"jigglypuff"==guess?guess="39":"wigglytuff"==guess?guess="40":"zubat"==guess?guess="41":"golbat"==guess?guess="42":"oddish"==guess?guess="43":"gloom"==guess?guess="44":"vileplume"==guess?guess="45":"paras"==guess?guess="46":"parasect"==guess?guess="47":"venonat"==guess?guess="48":"venomoth"==guess?guess="49":"diglett"==guess?guess="50":"dugtrio"==guess?guess="51":"meowth"==guess?guess="52":"persian"==guess?guess="53":"psyduck"==guess?guess="54":"golduck"==guess?guess="55":"mankey"==guess?guess="56":"primeape"==guess?guess="57":"growlithe"==guess?guess="58":"arcanine"==guess?guess="59":"poliwag"==guess?guess="60":"poliwhirl"==guess?guess="61":"poliwrath"==guess?guess="62":"abra"==guess?guess="63":"kadabra"==guess?guess="64":"alakazam"==guess?guess="65":"machop"==guess?guess="66":"machoke"==guess?guess="67":"machamp"==guess?guess="68":"bellsprout"==guess?guess="69":"weepinbell"==guess?guess="70":"victreebel"==guess?guess="71":"tentacool"==guess?guess="72":"tentacruel"==guess?guess="73":"geodude"==guess?guess="74":"graveler"==guess?guess="75":"golem"==guess?guess="76":"ponyta"==guess?guess="77":"rapidash"==guess?guess="78":"slowpoke"==guess?guess="79":"slowbro"==guess?guess="80":"magnemite"==guess?guess="81":"magneton"==guess?guess="82":"farfetch'd"==guess?guess="83":"doduo"==guess?guess="84":"dodrio"==guess?guess="85":"seel"==guess?guess="86":"dewgong"==guess?guess="87":"grimer"==guess?guess="88":"muk"==guess?guess="89":"shellder"==guess?guess="90":"cloyster"==guess?guess="91":"gastly"==guess?guess="92":"haunter"==guess?guess="93":"gengar"==guess?guess="94":"onix"==guess?guess="95":"drowzee"==guess?guess="96":"hypno"==guess?guess="97":"krabby"==guess?guess="98":"kingler"==guess?guess="99":"voltorb"==guess?guess="100":"electrode"==guess?guess="101":"exeggcute"==guess?guess="102":"exeggutor"==guess?guess="103":"cubone"==guess?guess="104":"marowak"==guess?guess="105":"hitmonlee"==guess?guess="106":"hitmonchan"==guess?guess="107":"lickitung"==guess?guess="108":"koffing"==guess?guess="109":"weezing"==guess?guess="110":"rhyhorn"==guess?guess="111":"rhydon"==guess?guess="112":"chansey"==guess?guess="113":"tangela"==guess?guess="114":"kangaskhan"==guess?guess="115":"horsea"==guess?guess="116":"seadra"==guess?guess="117":"goldeen"==guess?guess="118":"seaking"==guess?guess="119":"staryu"==guess?guess="120":"starmie"==guess?guess="121":"mr. mime"==guess?guess="122":"scyther"==guess?guess="123":"jynx"==guess?guess="124":"electabuzz"==guess?guess="125":"magmar"==guess?guess="126":"pinsir"==guess?guess="127":"tauros"==guess?guess="128":"magikarp"==guess?guess="129":"gyarados"==guess?guess="130":"lapras"==guess?guess="131":"ditto"==guess?guess="132":"eevee"==guess?guess="133":"vaporeon"==guess?guess="134":"jolteon"==guess?guess="135":"flareon"==guess?guess="136":"porygon"==guess?guess="137":"omanyte"==guess?guess="138":"omastar"==guess?guess="139":"kabuto"==guess?guess="140":"kabutops"==guess?guess="141":"aerodactyl"==guess?guess="142":"snorlax"==guess?guess="143":"articuno"==guess?guess="144":"zapdos"==guess?guess="145":"moltres"==guess?guess="146":"dratini"==guess?guess="147":"dragonair"==guess?guess="148":"dragonite"==guess?guess="149":"mewtwo"==guess?guess="150":"mew"==guess&&(guess="151");

        if(guess == answer){
            $('#wtp-guess-correct').show();
            $('#wtp-guess').hide();
            $('#wtp-guess-submit').hide();
            $('#wtp-note').hide();

            $('.hidden').removeClass('hidden');

            var date = new Date(),
            expires = 'expires=';
            date.setDate(date.getDate() + 1);
            expires += date.toGMTString();
            document.cookie = "coupon=issued; "+ expires + ";";
        } else {
            $('#wtp-guess-wrong').show();
        }
    });

});