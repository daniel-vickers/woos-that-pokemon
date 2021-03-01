<div id="wtp-popup">
	<div id="wtp-popup-inner">
		<h1 id="wtp-font">Who's That Pokémon?</h1>
		<p>Fancy grabbing a free 5% off your order? Answer Who's That Pokémon and we'll take 5% off your order!</p>
		<div id="wtp-image">
			<div id="wtp-image-container">
				<?php $pokemon = rand(1,151);
				$image = substr(str_repeat(0, 3).$pokemon, - 3);
				$hidden = plugin_dir_url( __DIR__ ).'assets/pokemon/'.$image.'.png';?>
				<img src="<?php echo $hidden;?>" alt="Who's That Pokémon" class="hidden">
				<p id="wtp-note">For guessing Nidoran please add: Boy or Girl. E.g. Nidoran Boy.</p>
			</div>
		</div>
		<input type="hidden" name="wtp-answer" id="wtp-answer" value="<?php echo $pokemon;?>">
		<input type="text" name="wtp-guess" placeholder="Enter Your Guess" id="wtp-guess">
		<a id="wtp-guess-submit" class="button">Make A Guess</a>
		<div id="wtp-result">
			<div id="wtp-guess-wrong">
				<p>Unfortunately that's not the right Pokémon! Why not try again?</p>
				<a href="#" class="wtp-popup-close button">I Don't Want The Discount</a>
			</div>
			<div id="wtp-guess-correct" class="">
				<p>CONGRATULATIONS YOU'RE RIGHT!</p>
				<p>Here's your coupon code: <span id="correct-coupon"><?php global $coupon_code; echo $coupon_code;?></span></p>
				<a href="#" class="wtp-popup-close button">Continue With Your Order</a>
			</div>
		</div>
	</div>
</div>
<div id="wtp-popup-overlay"></div>