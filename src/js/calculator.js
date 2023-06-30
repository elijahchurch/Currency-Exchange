export default function calculateConversion(dollarInput, conversionRate) {
    return (dollarInput * conversionRate).toFixed(2);
}