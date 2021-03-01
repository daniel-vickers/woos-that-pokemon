<?php
/*
Plugin Name: Woo's That Pokemon
Plugin URI: https://www.tsltrading.co.uk
Description: A plugin that integrates with WooCommerce to provide a discount at checkout if the user correctly guesses Who's That Pokemon.
Version: 0.1
Author: Daniel Vickers
Author URI: https://www.tsltrading.co.uk
License: GPL2
*/


add_action('woocommerce_before_cart', 'wtp_cart_notice');
function wtp_cart_notice() {
    echo "<div class=\"woocommerce-info\">Please note you can only redeem a Who's That Pokemon coupon once per 24 hours.</div>";
}

	if($_COOKIE['coupon'] !== "issued"){
		function wtp_load_styles_scripts() {
			if(is_cart()){
				wp_enqueue_style('popup-css', plugin_dir_url( __FILE__ ) . 'css/popup.css');
				wp_enqueue_script( 'popup-js', plugin_dir_url( __FILE__ ) . 'scripts/popup.js', array('jquery'), '1.0' );
			}
		} add_action('wp_enqueue_scripts', 'wtp_load_styles_scripts');

		add_action('woocommerce_before_cart_table', 'wtp_coupon');
		add_action('woocommerce_before_cart_table', 'wtp_popup');

	
		if (!function_exists('wtp_coupon')) {
			function wtp_coupon(){
				global $woocommerce;

				global $coupon_code;
				$coupon_code = get_current_user_id();
				
				if($userID == 0) {
					$number = rand(10000,9999999);
					$coupon_code = 'guest-'.$number;
				} else {
					$number = rand(100,999);
					$coupon_code = $coupon_code.'-'.$number;
				}

				$amount = '5';
				$discount_type = 'percent';

				$coupon = array(
					'post_title' => $coupon_code,
					'post_content' => '',
					'post_status' => 'publish',
					'post_author' => 1,
					'post_type'     => 'shop_coupon'
				); $new_coupon_id = wp_insert_post( $coupon );

				$expiry_date = new DateTime('tomorrow');
				$expiry_date = $expiry_date->format('Y-m-d H:i:s');

				// Add meta
				update_post_meta( $new_coupon_id, 'discount_type', $discount_type );
				update_post_meta( $new_coupon_id, 'coupon_amount', $amount );
				update_post_meta( $new_coupon_id, 'individual_use', 'no' );
				update_post_meta( $new_coupon_id, 'product_ids', '' );
				update_post_meta( $new_coupon_id, 'exclude_product_ids', '' );
				update_post_meta( $new_coupon_id, 'usage_limit', '1' );
				update_post_meta( $new_coupon_id, 'expiry_date', $expiry_date );
				update_post_meta( $new_coupon_id, 'apply_before_tax', 'yes' );
				update_post_meta( $new_coupon_id, 'free_shipping', 'no' );
			}
		}

		if (!function_exists('wtp_popup')) {
			if(is_cart()){ add_action('wp_footer', 'wtp_popup'); }
			function wtp_popup(){
				require_once plugin_dir_path( __FILE__ ).'includes/popup.php';
			}
		}
	}