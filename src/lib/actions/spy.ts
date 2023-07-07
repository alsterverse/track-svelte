export function spy(node: HTMLElement, selector: string) {
	let active = -1;

	const sections = new Map<Element, { position: number; ratio: number }>();

	const onIntersecting = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			const values = sections.get(entry.target);
			if (values) {
				values.ratio = entry.intersectionRatio;
			}
		});

		const newActive = [...sections.entries()].sort((a, b) => b[1].ratio - a[1].ratio).shift();

		if (newActive) {
			if (newActive[1].ratio > 0.5) {
				dispatch(newActive[1].position);
			} else {
				dispatch(-1);
			}
		} else {
			dispatch(-1);
		}
	};

	const dispatch = (index: number) => {
		if (index !== active) {
			active = index;
			node.dispatchEvent(new CustomEvent<number>('spy', { detail: index }));
		}
	};

	const observer = new IntersectionObserver(onIntersecting, {
		threshold: Array(101)
			.fill(0)
			.map((_, i) => i / 100)
	});

	const init = (newSelector: string) => {
		node.querySelectorAll(newSelector).forEach((child, index) => {
			observer.observe(child);
			sections.set(child, { position: index, ratio: 0 });
		});
	};
	init(selector);

	return {
		destroy() {
			observer.disconnect();
		},
		update(selector: string) {
			observer.disconnect();
			init(selector);
		}
	};
}
