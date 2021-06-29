
export default async function handler({ query: {id} }, res) {
    const apiKey = process.env.STEAM_KEY;
    try {
        const response = await fetch(`http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${apiKey}&steamid=${id}&relationship=friend&format=json`);
        if (response.status !== 200) {
            console.log('Unable to fetch user\'s friends');
            res.status(500).end(500);
        }
        const data = await response.json();
        console.log(data);
        const vertexData = data['friendslist']['friends'].map(o => {
            return {
                id: o.steamid,
                friend_since: o.friend_since
            }
        });
        res.status(200).json(vertexData);
    } catch (err) {
        console.log(err);
        res.status(500).end(500);
    }
}
