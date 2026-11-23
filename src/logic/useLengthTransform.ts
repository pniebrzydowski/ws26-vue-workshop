export const useLengthTransform = () => {
    return {
        getTripLengthString: (length: number): 'short' | 'medium' | 'long' => {
            if (length < 3) return 'short';
            if (length < 14) return 'medium';
            return 'long';
        }
    }
}