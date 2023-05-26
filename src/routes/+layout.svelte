<slot />

<style>
	:root {
		--fontsize-heading: 64px;
		--fontsize-heading-mobile: 40px;
		--fontsize-preamble: 24px;
		--fontsize-preamble-mobile: 20px;
		--fontsize-body: 21px;
		--fontsize-body-mobile: 15px;
		--fontsize-navigation: 16px;
		--fontsize-body-small: 15px;
		--color-foreground1: #ffffff;
		--color-foreground2: #cccccc;
		--color-background: #0f1217;
		--color-stroke: #616161;
		background-color: var(--color-background);
		color: var(--color-foreground1);
		font-family: neue-haas-unica, serif;
	}

	:global(h1) {
		font-size: var(--fontsize-heading);
	}

	:global(p) {
		font-size: var(--fontsize-body);
	}

	:global(a) {
		color: inherit;
	}

	@media only screen and (max-width: 600px) {
		:global(h1) {
			font-size: var(--fontsize-heading-mobile);
		}
		:global(p) {
			font-size: var(--fontsize-body-mobile);
		}
	}
</style>
