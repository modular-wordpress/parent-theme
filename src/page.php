<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _s
 */

get_header(); ?>
	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<?php
				if(have_rows("content_modules")) {
					while(have_rows("content_modules")) {
						the_row();

						$layout = get_row_layout();

						if(locate_template("content_modules/{$layout}/module-{$layout}.php") !== "") {
							get_template_part("content_modules/{$layout}/module", $layout);
						} else {
							get_template_part("content_modules/fallbacks/missing");
						}
					}
				}
			?>
		</main>
	</div>
<?php
get_sidebar();
get_footer();
