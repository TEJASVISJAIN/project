window.addEventListener('DOMContentLoaded', function() {
jQuery(function($) { 
(function(){
				const selector = '.woocommerce-cart-form__cart-item .remove';
				$( '.woocommerce' ).off('click', selector).on( 'click', selector, function() {
					gtag('event', 'remove_from_cart', {"items": [{
				"id": $(this).data("product_sku") ? $(this).data("product_sku") : "#" + $(this).data("product_id"),
				"quantity": $(this).parent().parent().find(".qty").val() ? $(this).parent().parent().find(".qty").val() : "1"
			 }]});
				});
			})();

(function(){
				const selector = '.woocommerce-cart-form__cart-item .remove';
				$( '.woocommerce' ).off('click', selector).on( 'click', selector, function() {
					gtag('event', 'remove_from_cart', {"items": [{
				"id": $(this).data("product_sku") ? $(this).data("product_sku") : "#" + $(this).data("product_id"),
				"quantity": $(this).parent().parent().find(".qty").val() ? $(this).parent().parent().find(".qty").val() : "1"
			 }]});
				});
			})();

gtag('event', 'view_item_list', {"items":[{"id":"#3949","name":"VHNM OVERSIZED SWEATSHIRT For Women","category":"OVERSIZED SWEATSHIRT\/Women","list":"Product List"}]});


			$( '.product.post-3949 a.button , .product.post-3949 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#3949","name":"VHNM OVERSIZED SWEATSHIRT For Women","category":"OVERSIZED SWEATSHIRT\/Women","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#3949","name":"VHNM OVERSIZED SWEATSHIRT For Women","category":"OVERSIZED SWEATSHIRT\/Women","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"#4085","name":"ESCAPE FROM REALITY","category":"Men\/OVERSIZED HOODIE\/OVERSIZED HOODIE\/Oversized HOODIE\/Unisex\/Women","list":"Product List"}]});


			$( '.product.post-4085 a.button , .product.post-4085 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#4085","name":"ESCAPE FROM REALITY","category":"Men\/OVERSIZED HOODIE\/OVERSIZED HOODIE\/Oversized HOODIE\/Unisex\/Women","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#4085","name":"ESCAPE FROM REALITY","category":"Men\/OVERSIZED HOODIE\/OVERSIZED HOODIE\/Oversized HOODIE\/Unisex\/Women","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"#4119","name":"VHNM OVERSIZED HOODIE","category":"OVERSIZED HOODIE","list":"Product List"}]});


			$( '.product.post-4119 a.button , .product.post-4119 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#4119","name":"VHNM OVERSIZED HOODIE","category":"OVERSIZED HOODIE","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#4119","name":"VHNM OVERSIZED HOODIE","category":"OVERSIZED HOODIE","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"#4153","name":"GEN-Z OVERSIZED HOODIE","category":"Men\/OVERSIZED HOODIE\/Oversized HOODIE\/OVERSIZED HOODIE\/Unisex\/Women","list":"Product List"}]});


			$( '.product.post-4153 a.button , .product.post-4153 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#4153","name":"GEN-Z OVERSIZED HOODIE","category":"Men\/OVERSIZED HOODIE\/Oversized HOODIE\/OVERSIZED HOODIE\/Unisex\/Women","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#4153","name":"GEN-Z OVERSIZED HOODIE","category":"Men\/OVERSIZED HOODIE\/Oversized HOODIE\/OVERSIZED HOODIE\/Unisex\/Women","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"#3879","name":"COSMOS OVERSIZED SWEATSHIRT","category":"Men\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/Unisex\/Women","list":"Product List"}]});


			$( '.product.post-3879 a.button , .product.post-3879 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#3879","name":"COSMOS OVERSIZED SWEATSHIRT","category":"Men\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/Unisex\/Women","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#3879","name":"COSMOS OVERSIZED SWEATSHIRT","category":"Men\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/Unisex\/Women","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"#4178","name":"PICKLE BALL \u2013 OVERSIZED SWEATSHIRT","category":"Men\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/Unisex\/Women","list":"Product List"}]});


			$( '.product.post-4178 a.button , .product.post-4178 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#4178","name":"PICKLE BALL \u2013 OVERSIZED SWEATSHIRT","category":"Men\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/Unisex\/Women","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#4178","name":"PICKLE BALL \u2013 OVERSIZED SWEATSHIRT","category":"Men\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/Unisex\/Women","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"#4192","name":"URBANAGE \u2013 OVERSIZED SWEATSHIRT","category":"Men\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/Unisex\/Women","list":"Product List"}]});


			$( '.product.post-4192 a.button , .product.post-4192 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#4192","name":"URBANAGE \u2013 OVERSIZED SWEATSHIRT","category":"Men\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/Unisex\/Women","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#4192","name":"URBANAGE \u2013 OVERSIZED SWEATSHIRT","category":"Men\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/OVERSIZED SWEATSHIRT\/Unisex\/Women","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"#3866","name":"ABSTRACT FEELINGS OVERSIZED HOODIE","category":"Men\/OVERSIZED HOODIE\/OVERSIZED HOODIE\/Oversized HOODIE\/Unisex\/Women","list":"Product List"}]});


			$( '.product.post-3866 a.button , .product.post-3866 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#3866","name":"ABSTRACT FEELINGS OVERSIZED HOODIE","category":"Men\/OVERSIZED HOODIE\/OVERSIZED HOODIE\/Oversized HOODIE\/Unisex\/Women","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#3866","name":"ABSTRACT FEELINGS OVERSIZED HOODIE","category":"Men\/OVERSIZED HOODIE\/OVERSIZED HOODIE\/Oversized HOODIE\/Unisex\/Women","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"BE45VGRT-1-1-1-2-1","name":"SHAANDAR PRINT OVER SIZED SHIRTS (SKY BLUE, PINK, WHITE)","category":"Men\/Oversized Shirt","list":"Product List"}]});


			$( '.product.post-2947 a.button , .product.post-2947 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"BE45VGRT-1-1-1-2-1","name":"SHAANDAR PRINT OVER SIZED SHIRTS (SKY BLUE, PINK, WHITE)","category":"Men\/Oversized Shirt","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"BE45VGRT-1-1-1-2-1","name":"SHAANDAR PRINT OVER SIZED SHIRTS (SKY BLUE, PINK, WHITE)","category":"Men\/Oversized Shirt","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"BE45VGRT-1-1-1-2","name":"SHAANDAR PRINT OVER SIZED SHIRTS (LIGHT GREEN, BROWN, WHITE)","category":"Men\/Oversized Shirt","list":"Product List"}]});


			$( '.product.post-2940 a.button , .product.post-2940 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"BE45VGRT-1-1-1-2","name":"SHAANDAR PRINT OVER SIZED SHIRTS (LIGHT GREEN, BROWN, WHITE)","category":"Men\/Oversized Shirt","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"BE45VGRT-1-1-1-2","name":"SHAANDAR PRINT OVER SIZED SHIRTS (LIGHT GREEN, BROWN, WHITE)","category":"Men\/Oversized Shirt","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"BE45VGRT-1-1-1-1-1","name":"WARDROBE LIGHT SHADES OVER SIZED SHIRTS (PASTEL BEIGE)","category":"Men\/Oversized Shirt","list":"Product List"}]});


			$( '.product.post-2932 a.button , .product.post-2932 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"BE45VGRT-1-1-1-1-1","name":"WARDROBE LIGHT SHADES OVER SIZED SHIRTS (PASTEL BEIGE)","category":"Men\/Oversized Shirt","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"BE45VGRT-1-1-1-1-1","name":"WARDROBE LIGHT SHADES OVER SIZED SHIRTS (PASTEL BEIGE)","category":"Men\/Oversized Shirt","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"BE45VGRT-1-1-1-1","name":"WARDROBE LIGHT SHADES OVER SIZED SHIRTS (PASTEL GREEN)","category":"Men\/Oversized Shirt","list":"Product List"}]});


			$( '.product.post-2925 a.button , .product.post-2925 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"BE45VGRT-1-1-1-1","name":"WARDROBE LIGHT SHADES OVER SIZED SHIRTS (PASTEL GREEN)","category":"Men\/Oversized Shirt","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"BE45VGRT-1-1-1-1","name":"WARDROBE LIGHT SHADES OVER SIZED SHIRTS (PASTEL GREEN)","category":"Men\/Oversized Shirt","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"BE45VGRT-1-1-1","name":"PERFECT JACQUARD OVER SIZED SHIRT (ONION PINK )","category":"Men\/Oversized Shirt","list":"Product List"}]});


			$( '.product.post-2918 a.button , .product.post-2918 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"BE45VGRT-1-1-1","name":"PERFECT JACQUARD OVER SIZED SHIRT (ONION PINK )","category":"Men\/Oversized Shirt","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"BE45VGRT-1-1-1","name":"PERFECT JACQUARD OVER SIZED SHIRT (ONION PINK )","category":"Men\/Oversized Shirt","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"BE45VGRT-1-1","name":"PERFECT JACQUARD OVER SIZED SHIRT (RICH NAVY)","category":"Men\/Oversized Shirt","list":"Product List"}]});


			$( '.product.post-2910 a.button , .product.post-2910 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"BE45VGRT-1-1","name":"PERFECT JACQUARD OVER SIZED SHIRT (RICH NAVY)","category":"Men\/Oversized Shirt","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"BE45VGRT-1-1","name":"PERFECT JACQUARD OVER SIZED SHIRT (RICH NAVY)","category":"Men\/Oversized Shirt","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"BE45VGRT-1","name":"MANDALA PRINT OVER SIZED SHIRT (WHITE GREEN )","category":"Men\/Oversized Shirt","list":"Product List"}]});


			$( '.product.post-2903 a.button , .product.post-2903 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"BE45VGRT-1","name":"MANDALA PRINT OVER SIZED SHIRT (WHITE GREEN )","category":"Men\/Oversized Shirt","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"BE45VGRT-1","name":"MANDALA PRINT OVER SIZED SHIRT (WHITE GREEN )","category":"Men\/Oversized Shirt","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"#2810","name":"World Cup Fever Over Sized T-shirt White","category":"Men\/Oversized T Shirt\/Oversized T Shirt\/Oversized T Shirt\/Unisex\/Women","list":"Product List"}]});


			$( '.product.post-2810 a.button , .product.post-2810 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#2810","name":"World Cup Fever Over Sized T-shirt White","category":"Men\/Oversized T Shirt\/Oversized T Shirt\/Oversized T Shirt\/Unisex\/Women","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#2810","name":"World Cup Fever Over Sized T-shirt White","category":"Men\/Oversized T Shirt\/Oversized T Shirt\/Oversized T Shirt\/Unisex\/Women","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"#2879","name":"World Cup Fever Over Sized T-shirt Blue","category":"Men\/Oversized T Shirt\/Oversized T Shirt\/Oversized T Shirt\/Unisex\/Women","list":"Product List"}]});


			$( '.product.post-2879 a.button , .product.post-2879 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#2879","name":"World Cup Fever Over Sized T-shirt Blue","category":"Men\/Oversized T Shirt\/Oversized T Shirt\/Oversized T Shirt\/Unisex\/Women","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#2879","name":"World Cup Fever Over Sized T-shirt Blue","category":"Men\/Oversized T Shirt\/Oversized T Shirt\/Oversized T Shirt\/Unisex\/Women","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"#4085","name":"ESCAPE FROM REALITY","category":"Men\/OVERSIZED HOODIE\/OVERSIZED HOODIE\/Oversized HOODIE\/Unisex\/Women","list":"Product List"}]});


			$( '.product.post-4085 a.button , .product.post-4085 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#4085","name":"ESCAPE FROM REALITY","category":"Men\/OVERSIZED HOODIE\/OVERSIZED HOODIE\/Oversized HOODIE\/Unisex\/Women","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#4085","name":"ESCAPE FROM REALITY","category":"Men\/OVERSIZED HOODIE\/OVERSIZED HOODIE\/Oversized HOODIE\/Unisex\/Women","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"#4132","name":"OVERSIZED FOCUS TEE","category":"Men\/Oversized T Shirt\/Oversized T Shirt\/Oversized T Shirt\/Unisex\/Women","list":"Product List"}]});


			$( '.product.post-4132 a.button , .product.post-4132 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#4132","name":"OVERSIZED FOCUS TEE","category":"Men\/Oversized T Shirt\/Oversized T Shirt\/Oversized T Shirt\/Unisex\/Women","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#4132","name":"OVERSIZED FOCUS TEE","category":"Men\/Oversized T Shirt\/Oversized T Shirt\/Oversized T Shirt\/Unisex\/Women","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"#4153","name":"GEN-Z OVERSIZED HOODIE","category":"Men\/OVERSIZED HOODIE\/Oversized HOODIE\/OVERSIZED HOODIE\/Unisex\/Women","list":"Product List"}]});


			$( '.product.post-4153 a.button , .product.post-4153 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#4153","name":"GEN-Z OVERSIZED HOODIE","category":"Men\/OVERSIZED HOODIE\/Oversized HOODIE\/OVERSIZED HOODIE\/Unisex\/Women","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#4153","name":"GEN-Z OVERSIZED HOODIE","category":"Men\/OVERSIZED HOODIE\/Oversized HOODIE\/OVERSIZED HOODIE\/Unisex\/Women","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"#4156","name":"INSIDE THOUGHTS OVERSIZED T SHIRT","category":"Men\/Oversized T Shirt\/Oversized T Shirt\/Oversized T Shirt\/Unisex\/Women","list":"Product List"}]});


			$( '.product.post-4156 a.button , .product.post-4156 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#4156","name":"INSIDE THOUGHTS OVERSIZED T SHIRT","category":"Men\/Oversized T Shirt\/Oversized T Shirt\/Oversized T Shirt\/Unisex\/Women","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#4156","name":"INSIDE THOUGHTS OVERSIZED T SHIRT","category":"Men\/Oversized T Shirt\/Oversized T Shirt\/Oversized T Shirt\/Unisex\/Women","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"#4171","name":"MOOD INSPIRED TEE - OVERSIZED","category":"Men\/Oversized T Shirt\/Oversized T Shirt\/Oversized T Shirt\/Unisex\/Women","list":"Product List"}]});


			$( '.product.post-4171 a.button , .product.post-4171 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#4171","name":"MOOD INSPIRED TEE - OVERSIZED","category":"Men\/Oversized T Shirt\/Oversized T Shirt\/Oversized T Shirt\/Unisex\/Women","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#4171","name":"MOOD INSPIRED TEE - OVERSIZED","category":"Men\/Oversized T Shirt\/Oversized T Shirt\/Oversized T Shirt\/Unisex\/Women","quantity":"1"}]});
				}
			});

gtag('event', 'view_item_list', {"items":[{"id":"#3866","name":"ABSTRACT FEELINGS OVERSIZED HOODIE","category":"Men\/OVERSIZED HOODIE\/OVERSIZED HOODIE\/Oversized HOODIE\/Unisex\/Women","list":"Product List"}]});


			$( '.product.post-3866 a.button , .product.post-3866 button' ).on('click', function() {
				if ( false === $(this).hasClass( 'product_type_variable' ) && false === $(this).hasClass( 'product_type_grouped' ) ) {
					gtag('event', 'add_to_cart', {"items":[{"id":"#3866","name":"ABSTRACT FEELINGS OVERSIZED HOODIE","category":"Men\/OVERSIZED HOODIE\/OVERSIZED HOODIE\/Oversized HOODIE\/Unisex\/Women","quantity":"1"}]});
				} else {
					gtag('event', 'select_content', {"items":[{"id":"#3866","name":"ABSTRACT FEELINGS OVERSIZED HOODIE","category":"Men\/OVERSIZED HOODIE\/OVERSIZED HOODIE\/Oversized HOODIE\/Unisex\/Women","quantity":"1"}]});
				}
			});
 });
});