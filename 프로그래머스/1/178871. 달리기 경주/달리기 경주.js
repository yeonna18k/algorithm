function solution(players, callings) {
    const playerMap = new Map(players.map((player, idx) => [player, idx]));

    callings.map((player) => {
        const index = playerMap.get(player);
        const frontPlayer = players[index - 1];

        // 구조분해할당
        [players[index-1], players[index]] = [players[index], players[index-1]]
        
        playerMap.set(player, index - 1)
        playerMap.set(frontPlayer, index)
    })
    return players;
}