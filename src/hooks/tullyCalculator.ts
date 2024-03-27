const TallyCalculator = (count: number) => {
    const countSingle = count % 5;
    const countFive = ( count - countSingle ) / 5;
    return {countSingle, countFive };
}

export default TallyCalculator;