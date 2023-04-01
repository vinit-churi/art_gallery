export default async () => {
    const query = `https://api.unsplash.com/topics?client_id=${
        import.meta.env.VITE_ACCESS_KEY
    }&order_by=featured`;
    let data = await fetch(query);
    return data.json();
};
