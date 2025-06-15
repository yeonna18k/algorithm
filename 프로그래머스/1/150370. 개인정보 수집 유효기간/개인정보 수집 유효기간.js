function solution(today, terms, privacies) {
    var answer = [];
    const [tYear, tMonth, tDay] = today.split(".").map(Number);
    const todayTimestamp = tDay + tMonth * 28 + tYear * 28 * 12
    const termsMap = new Map(terms.map(t => t.split(" ")));
    
    return privacies.map((privacy, idx) => {
        const [date, term] = privacy.split(" ");
        const termsMonth = termsMap.get(term)
        const [pYear, pMonth, pDay] = date.split(".").map(Number);
        const privacyTimestamp = pDay + pMonth * 28 + pYear * 28 * 12
        const diffDays = todayTimestamp - privacyTimestamp
        
        console.log(diffDays)
        if (termsMonth * 28 <= diffDays) return idx+1
    }).filter(p => p)
    
}