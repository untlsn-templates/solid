let id = 0;
/**
 * Create unique id
 *
 * @example
 * useId() // -> gen-0
 * useId() // -> gen-1
 */
const useId = () => {
	onCleanup(() => {
		id--;
	});

	return 'gen' + id++;
};

export default useId;
