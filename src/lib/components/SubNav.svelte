<script lang="ts">
	let isActive = false;
	const handleClick = () => {
		isActive = !isActive;
	};
</script>

<nav>
	<ul><li class:active={isActive} on:click={handleClick}><a href="#item">nav item</a></li></ul>
	<ul>
		<li><a href="#item">nav item</a></li>
		<li><a href="#item">nav item</a></li>
		<li><a href="#item">nav item</a></li>
	</ul>
	<ul>
		<li><a href="#item">nav item</a></li>
	</ul>
</nav>

<style>
	nav {
		position: sticky;
		bottom: 24px;
		left: 50%;
		transform: translate(-50%);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		backdrop-filter: blur(12.5px);
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.222) 0%,
			rgba(255, 255, 255, 0.147) 100%
		);
		border-radius: 58px;
		width: fit-content;
		padding: 0px 20px;
	}
	ul {
		all: unset;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	ul::after {
		content: ' | ';
		color: var(--color-stroke);
		margin: auto;
		font-size: 22px;
	}
	ul:last-of-type::after {
		content: none;
	}
	li {
		all: unset;
		color: var(--color-stroke);
		padding: 18px 12px;
	}
	li.active {
		color: var(--color-foreground);
	}
	a {
		all: unset;
		cursor: pointer;
	}
</style>
